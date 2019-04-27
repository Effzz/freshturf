import React from 'react'
import Select from 'react-select'

class Main extends React.Component {
    render() {
        return (
            <Select
                placeholder="Select Language.."
                options={ this.props.options }
                onChange={ this.props.onChange }
            />
        )
    }
}

export default Main
