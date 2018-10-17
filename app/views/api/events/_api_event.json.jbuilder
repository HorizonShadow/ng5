json.extract! api_event, :id, :name, :created_at, :updated_at
json.url api_event_url(api_event, format: :json)
