import type { AppsignalOptions } from "./options"

export const ENV_TO_KEY_MAPPING: Record<string, keyof AppsignalOptions> = {
  APPSIGNAL_ACTIVE: "active",
  APPSIGNAL_APP_ENV: "environment",
  APPSIGNAL_APP_NAME: "name",
  APPSIGNAL_BIND_ADDRESS: "bindAddress",
  APPSIGNAL_CA_FILE_PATH: "caFilePath",
  APPSIGNAL_DISABLE_DEFAULT_INSTRUMENTATIONS: "disableDefaultInstrumentations",
  APPSIGNAL_DNS_SERVERS: "dnsServers",
  APPSIGNAL_ENABLE_HOST_METRICS: "enableHostMetrics",
  APPSIGNAL_ENABLE_MINUTELY_PROBES: "enableMinutelyProbes",
  APPSIGNAL_ENABLE_STATSD: "enableStatsd",
  APPSIGNAL_ENABLE_NGINX_METRICS: "enableNginxMetrics",
  APPSIGNAL_FILES_WORLD_ACCESSIBLE: "filesWorldAccessible",
  APPSIGNAL_FILTER_PARAMETERS: "filterParameters",
  APPSIGNAL_FILTER_SESSION_DATA: "filterSessionData",
  APPSIGNAL_HOSTNAME: "hostname",
  APPSIGNAL_HOST_ROLE: "hostRole",
  APPSIGNAL_HTTP_PROXY: "httpProxy",
  APPSIGNAL_IGNORE_ACTIONS: "ignoreActions",
  APPSIGNAL_IGNORE_ERRORS: "ignoreErrors",
  APPSIGNAL_IGNORE_NAMESPACES: "ignoreNamespaces",
  APPSIGNAL_INITIALIZE_OPENTELEMETRY_SDK: "initializeOpentelemetrySdk",
  APPSIGNAL_LOG: "log",
  APPSIGNAL_LOG_LEVEL: "logLevel",
  APPSIGNAL_LOG_PATH: "logPath",
  APPSIGNAL_LOGGING_ENDPOINT: "loggingEndpoint",
  APPSIGNAL_PUSH_API_ENDPOINT: "endpoint",
  APPSIGNAL_PUSH_API_KEY: "pushApiKey",
  APPSIGNAL_REQUEST_HEADERS: "requestHeaders",
  APPSIGNAL_RUNNING_IN_CONTAINER: "runningInContainer",
  APPSIGNAL_SEND_ENVIRONMENT_METADATA: "sendEnvironmentMetadata",
  APPSIGNAL_SEND_PARAMS: "sendParams",
  APPSIGNAL_SEND_SESSION_DATA: "sendSessionData",
  APPSIGNAL_STATSD_PORT: "statsdPort",
  APPSIGNAL_WORKING_DIRECTORY_PATH: "workingDirectoryPath",
  APP_REVISION: "revision"
}

export const PRIVATE_ENV_MAPPING: Record<string, keyof AppsignalOptions> = {
  _APPSIGNAL_ACTIVE: "active",
  _APPSIGNAL_APP_ENV: "environment",
  _APPSIGNAL_APP_NAME: "name",
  _APPSIGNAL_BIND_ADDRESS: "bindAddress",
  _APPSIGNAL_CA_FILE_PATH: "caFilePath",
  _APPSIGNAL_DNS_SERVERS: "dnsServers",
  _APPSIGNAL_ENABLE_HOST_METRICS: "enableHostMetrics",
  _APPSIGNAL_ENABLE_STATSD: "enableStatsd",
  _APPSIGNAL_ENABLE_NGINX_METRICS: "enableNginxMetrics",
  _APPSIGNAL_FILES_WORLD_ACCESSIBLE: "filesWorldAccessible",
  _APPSIGNAL_FILTER_PARAMETERS: "filterParameters",
  _APPSIGNAL_FILTER_SESSION_DATA: "filterSessionData",
  _APPSIGNAL_HOSTNAME: "hostname",
  _APPSIGNAL_HOST_ROLE: "hostRole",
  _APPSIGNAL_HTTP_PROXY: "httpProxy",
  _APPSIGNAL_IGNORE_ACTIONS: "ignoreActions",
  _APPSIGNAL_IGNORE_ERRORS: "ignoreErrors",
  _APPSIGNAL_IGNORE_NAMESPACES: "ignoreNamespaces",
  _APPSIGNAL_LOG: "log",
  _APPSIGNAL_LOG_LEVEL: "logLevel",
  _APPSIGNAL_LOGGING_ENDPOINT: "loggingEndpoint",
  _APPSIGNAL_PUSH_API_ENDPOINT: "endpoint",
  _APPSIGNAL_PUSH_API_KEY: "pushApiKey",
  _APPSIGNAL_RUNNING_IN_CONTAINER: "runningInContainer",
  _APPSIGNAL_SEND_ENVIRONMENT_METADATA: "sendEnvironmentMetadata",
  _APPSIGNAL_SEND_PARAMS: "sendParams",
  _APPSIGNAL_SEND_SESSION_DATA: "sendSessionData",
  _APPSIGNAL_STATSD_PORT: "statsdPort",
  _APPSIGNAL_WORKING_DIRECTORY_PATH: "workingDirectoryPath",
  _APP_REVISION: "revision"
}

export const JS_TO_RUBY_MAPPING: Record<keyof AppsignalOptions, string> = {
  active: "active",
  bindAddress: "bind_address",
  pushApiKey: "push_api_key",
  caFilePath: "ca_file_path",
  disableDefaultInstrumentations: "disable_default_instrumentations",
  dnsServers: "dns_servers",
  enableHostMetrics: "enable_host_metrics",
  enableMinutelyProbes: "enable_minutely_probes",
  enableStatsd: "enable_statsd",
  enableNginxMetrics: "enable_nginx_metrics",
  endpoint: "endpoint",
  environment: "env",
  filesWorldAccessible: "files_world_accessible",
  filterParameters: "filter_parameters",
  filterSessionData: "filter_session_data",
  hostname: "hostname",
  hostRole: "host_role",
  httpProxy: "http_proxy",
  ignoreActions: "ignore_actions",
  ignoreErrors: "ignore_errors",
  ignoreNamespaces: "ignore_namespaces",
  initializeOpentelemetrySdk: "initialize_opentelemetry_sdk",
  log: "log",
  logLevel: "log_level",
  logPath: "log_path",
  loggingEndpoint: "logging_endpoint",
  name: "name",
  requestHeaders: "request_headers",
  revision: "revision",
  runningInContainer: "running_in_container",
  sendEnvironmentMetadata: "send_environment_metadata",
  sendParams: "send_params",
  sendSessionData: "send_session_data",
  statsdPort: "statsd_port",
  workingDirectoryPath: "working_directory_path"
}
