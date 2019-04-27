import React from 'react'

class RowRepository extends React.Component{
    render(){
        const { repoObj, selectedLang } = this.props
        let langName = '-'
        if(repoObj.primaryLanguage){
            langName = repoObj.primaryLanguage.name
        }

        if(selectedLang.value !== 'all'){
            if(selectedLang.value.toLowerCase() !== langName.toLowerCase()){
                return null
            }
        }

        return(
            <div className="item">
                <span className="language">{ langName }</span>
                <span className="fork-count">{ repoObj.forkCount } forks</span>
                <span className="title">{ repoObj.nameWithOwner }</span>
                <a title="Browse Repository" className="button-browse" href={ repoObj.url } target="_blank" rel="noopener noreferrer">Browse</a>
            </div>
        )
    }
}

export default RowRepository