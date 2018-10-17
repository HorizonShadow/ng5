require 'test_helper'

class Api::EventsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @api_event = api_events(:one)
  end

  test "should get index" do
    get api_events_url
    assert_response :success
  end

  test "should get new" do
    get new_api_event_url
    assert_response :success
  end

  test "should create api_event" do
    assert_difference('Api::Event.count') do
      post api_events_url, params: { api_event: { name: @api_event.name } }
    end

    assert_redirected_to api_event_url(Api::Event.last)
  end

  test "should show api_event" do
    get api_event_url(@api_event)
    assert_response :success
  end

  test "should get edit" do
    get edit_api_event_url(@api_event)
    assert_response :success
  end

  test "should update api_event" do
    patch api_event_url(@api_event), params: { api_event: { name: @api_event.name } }
    assert_redirected_to api_event_url(@api_event)
  end

  test "should destroy api_event" do
    assert_difference('Api::Event.count', -1) do
      delete api_event_url(@api_event)
    end

    assert_redirected_to api_events_url
  end
end
