import React from 'react'
import LeftMenu from './LeftMenu'
import PageTitle from './PageTitle'
import ContentTemplate from './ContentTemplate'

class BaseTemplate extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      redirectUrl: null
    }

    this.redirectTo = this.redirectTo.bind(this)
  }

  redirectTo = (url) => {
    this.setState({
      redirectUrl: url
    })
  }

  render(){
    return (
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
                redirectTo={ this.redirectTo }
                { ...this.props } 
              />
            </div>
          </div>
         </div>
      </div>
    )
  }
}

export default BaseTemplate
