import React from 'react'

class Paginate extends React.Component {
    render(){
        const { pageInfo } = this.props
        if(!pageInfo){
            return null
        }

        const { hasNextPage, hasPreviousPage } = pageInfo
        let classPrev = ''
        let disabledPrev = false
        let classNext = ''
        let disabledNext = false
        if(!hasNextPage){
            classNext = 'disabled'
            disabledNext = true
        }

        if(!hasPreviousPage){
            classPrev = 'disabled'
            disabledPrev = true
        }

        return(
            <div className="commit-pagination">
                <button className={ `prev ${ classPrev }` } disabled={ disabledPrev }>
                    <i className="fas fa-angle-left"></i>
                </button>
                <button className={ `next ${ classNext }` }  disabled={ disabledNext }>
                    <i className="fas fa-angle-right"></i>
                </button>
            </div>
        )
    }
}

export default Paginate