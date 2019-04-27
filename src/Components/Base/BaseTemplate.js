import React from 'react'
import LeftMenu from './LeftMenu'
import PageTitle from './PageTitle'
import ContentTemplate from './ContentTemplate'
import { Redirect } from 'react-router-dom'

// Apollo
import { endpoint } from '../../Core/GithubConfig'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { ToastContainer, toast } from 'react-toastify'

class BaseTemplate extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      redirectTo: null,
      errorCount: 0
    }
    
    this.client = new ApolloClient({
      uri: endpoint,
      request: operation => {
          operation.setContext({
              headers: {
                  authorization: `Bearer ${ this.props.token }`
              }
          })
      },
      onError: err => {
        if(this.state.errorCount === 0){
          toast.warn('Unauthorized Personal Token. Please Configure your setting')
        }        
        this.setState({
          errorCount: 1
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
