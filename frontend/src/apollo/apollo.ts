import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'

const httpLink = new HttpLink({
  uri: 'http://localhost:8080/graphql'
})

const authLink = setContext((headers) => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})
