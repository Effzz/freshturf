import React from 'react'
import LeftMenu from './LeftMenu'
import PageTitle from './PageTitle'
import ContentTemplate from './ContentTemplate'
import { Redirect } from 'react-router-dom'

// Apollo
import { token, endpoint } from '../../Core/GithubConfig'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { ToastContainer } from 'react-toastify'

class BaseTemplate extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      redirectTo: null
    }
    console.log(this.props)
    this.client = new ApolloClient({
      uri: endpoint,
      request: operation => {
          operation.setContext({
              headers: {
                  authorization: `Bearer ${ token }`
              }
          })
      },
      onError: err => {
        this.setState({
          redirectTo: '/setting'
        })
      }
    })
  }
  render(){
    if(this.state.redirectTo){
      return(<Redirect to={ this.state.redirectTo } />)
    }
    return (
      <ApolloProvider client={ this.client }>
        <div id="wrapper">
          <ToastContainer
            className="toast-notify"
            position="top-center"
            autoClose={ 5000 }
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
          />
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
