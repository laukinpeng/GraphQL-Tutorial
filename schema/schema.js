const graphql = require('graphql')
const _ = require('lodash')
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
} = graphql

const users = [
  { id: '23', firstName: 'Bill', age: 20 },
  { id: '47', firstName: 'Lkp', age: 22 },
]

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  }
})

//search the schema
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryTYpe',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return _.find(users, { id: args.id } )
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})