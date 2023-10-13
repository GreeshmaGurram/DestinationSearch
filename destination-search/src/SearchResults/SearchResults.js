import React,{Component} from "react";

import "./SearchResults.css"

class SearchResults extends Component{

    render(){
        const {destinationsList, searchInput} = this.props
        const searchResultsList = destinationsList.filter( eachDestination => {
            return eachDestination.name.toLowerCase().includes(searchInput.toLowerCase())
        })

        return(
            <div className="search-results-container">

                {   searchResultsList.map(each => {
                        const {id, name, imgUrl} = each
                        return(
                            <div key={id} className="individual-search-result-container">
                                <img src={imgUrl} alt={name} className="img-style"/>
                                <p>{name}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


export default SearchResults;