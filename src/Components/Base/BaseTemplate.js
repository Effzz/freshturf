import React from 'react'
import LeftMenu from './LeftMenu'
import PageTitle from './PageTitle'
import ContentTemplate from './ContentTemplate'

// Apollo
import { token, endpoint } from '../../Core/GithubConfig'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from "react-apollo"

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

class BaseTemplate extends React.Component{
  render(){
    return (
      <ApolloProvider client={client}>
        <div id="wrapper">
          <LeftMenu { ...this.props }/>

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <div className="container-fluid">
                <PageTitle 
                  title={ this.props.title }
                  subtitle={ this.props.subtitle }
                />
                <ContentTemplate 
                  { ...this.props } 
                />
              </div>
            </div>
          </div>
        </div>
      </ApolloProvider>
    )
  }
}

export default BaseTemplate
