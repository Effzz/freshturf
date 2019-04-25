import React from 'react'
import BaseTemplate from '../../Components/Base/BaseTemplate'

class Main extends React.Component{
    render() {
        return (
            <BaseTemplate 
                title="Repository"
                subtitle="List Repository"
            >
                <div className="col-xl-12">
                    Repository content
                </div>
            </BaseTemplate>
        )
    }
}

export default Main
