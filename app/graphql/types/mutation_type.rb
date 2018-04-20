Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :deletePost, Mutations::DeletePost.field
  field :upsertPost, Mutations::UpsertPost.field
end
