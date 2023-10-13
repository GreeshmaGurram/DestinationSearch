import React, {Component} from "react";
import {FaSearch} from "react-icons/fa";

import "./SearchBar.css"

class SearchBar extends Component{

    onChangeInput = e => {
        this.props.getSearchInputValue(e.target.value)
    }

    render(){
        return(
            <div className="main-search-bar">
                <div className="search-bar-container-div">
                    <input type="search" placeholder="Search.." className="input-field" onChange={this.onChangeInput}/>
                    <FaSearch/>
                </div>
            </div>
        );
    }
}


export default SearchBar;