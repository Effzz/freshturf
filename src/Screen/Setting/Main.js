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
                    ini kontennya setting
                </div>
            </BaseTemplate>
        )
    }
}

export default Main
