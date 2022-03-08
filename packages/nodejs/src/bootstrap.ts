import { Metrics } from "./interfaces"
import { Instrumentation } from "./instrument"
import { httpPlugin, httpsPlugin } from "./instrumentation/http"
import { BaseClient } from "./client"
import * as pgPlugin from "./instrumentation/pg"
import * as redisPlugin from "./instrumentation/redis"
import * as gcProbe from "./probes/v8"

/**
 * Initialises all the available core instrumentation.
 *
 * "Core instrumentation" is things that we can hook into automatically
 * at runtime via monkeypatching an instance of a node module. This can
 * include parts of node's standard library.
 */
export function initCorePlugins(
  instrumentation: Instrumentation,
  { ignoreInstrumentation }: { ignoreInstrumentation?: string[] }
) {
  let plugins: any[] = [httpPlugin, httpsPlugin, redisPlugin, pgPlugin]

  // cull ignored plugins
  if (ignoreInstrumentation && Array.isArray(ignoreInstrumentation)) {
    plugins = plugins.filter(
      p => !ignoreInstrumentation.includes(p.PLUGIN_NAME)
    )
  }

  // load plugins
  plugins.forEach(({ PLUGIN_NAME, instrument }) => {
    try {
      instrumentation.load(PLUGIN_NAME, instrument)
    } catch (e) {
      BaseClient.logger.warn(
        `Failed to instrument "${PLUGIN_NAME}": ${e.message}`
      )
    }
  })
}

/**
 * Initialises all the available probes to attach automatically at runtime.
 */
export function initCoreProbes(meter: Metrics) {
  const probes: any[] = [gcProbe]

  // load probes
  probes.forEach(({ PROBE_NAME, init }) =>
    meter.probes().register(PROBE_NAME, init(meter))
  )
}
