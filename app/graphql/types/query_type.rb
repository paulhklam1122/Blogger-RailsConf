Types::QueryType = GraphQL::ObjectType.define do
  name "Query"

  field :posts, Types::PostType.to_list_type do
    description "A list of all posts"
    resolve ->(obj, args, context) { Post.all }
  end

  field :post, Types::PostType do
    description "A single post by ID"
    argument :id, types.ID
    resolve ->(obj, args, context) { Post.find_by(id: args[:id]) }
  end

  field :posts, Types::PostType.to_list_type do
    description "A list of all posts"
    resolve ->(obj, args, context) { Post.all }
  end

  field :post, Types::PostType do
    description "A single post by ID"
    argument :id, types.ID
    resolve ->(obj, args, context) { Post.find_by(id: args[:id]) }
  end
end
