// import {useEffect} from 'React';
import React from "react"

function Filter(){
    return(
        <div className="filter-container">
            <button className="button-round-secondary">All</button>
            <button className="button-round-secondary">CS/IT</button>
            <button className="button-round-secondary">LAW</button>
            <button className="button-round-secondary">Mechanical</button>
            <button className="button-round-secondary">Business</button>
        </div>
    )
}

export default Filter;