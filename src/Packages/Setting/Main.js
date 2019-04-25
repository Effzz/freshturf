import React from 'react'
import BaseTemplate from '../../Components/Base/BaseTemplate'

class Main extends React.Component{
    render() {
        return (
            <BaseTemplate 
                title="Setting"
                subtitle="Change your setting here"
            >
                <div className="col-xl-12">
                   Setting content
                </div>
            </BaseTemplate>
        )
    }
}

export default Main
