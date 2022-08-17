# frozen_string_literal: true

require "http"
require "json"
require "/helpers/integration_helper"

RSpec.configure do |config|
  config.include IntegrationHelper

  config.before(:suite) do
    # Wait for the app to be alive before running the tests.
    IntegrationHelper.wait_for_start
  end

  config.before(:each) do
    IntegrationHelper.clean_spans
  end

  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  config.shared_context_metadata_behavior = :apply_to_host_groups
end
