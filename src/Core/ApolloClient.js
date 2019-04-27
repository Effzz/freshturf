// Apollo
import ApolloClient from 'apollo-boost'
import { token, endpoint } from './GithubConfig'

// Global.Apollo
const client = new ApolloClient({
    uri: endpoint,
    request: operation => {
        operation.setContext({
            headers: {
                authorization: `Bearer ${ token }`
            }
        })
    }
})

