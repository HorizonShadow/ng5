class Ng5Schema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)
end
