import React from 'react'

class ContentTemplate extends React.Component
{
    render() {
        return (
            <div className="row">
                { this.props.children }
            </div>
        )
    }
}

export default ContentTemplate
