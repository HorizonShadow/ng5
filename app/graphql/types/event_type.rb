module Types
  class EventType < Types::BaseObject
    field :id, ID, null: true
    field :name, String, null: true
    field :date, GraphQL::Types::ISO8601DateTime, null: true
  end
end
