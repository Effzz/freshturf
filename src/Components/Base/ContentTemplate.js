import React from 'react'

class ContentTemplate extends React.Component
{
    render() {
        return (
            <section>
                { this.props.children }
            </section>
        )
    }
}

export default ContentTemplate
