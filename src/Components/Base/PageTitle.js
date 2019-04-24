import React from 'react'

class PageTitle extends React.Component {
    render() {
        return (
            <div className="wrap-title">
                <h1 className="h3 mb-2 text-gray-800">{ this.props.title }</h1>
                <p className="mb-4">
                    { this.props.subtitle }
                </p>
            </div>
        )
    }
}

export default PageTitle