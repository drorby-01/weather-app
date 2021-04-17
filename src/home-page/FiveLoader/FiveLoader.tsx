import React from 'react'
import { Spinner } from 'react-bootstrap';

const  getFiveLoader = () => {
    const spinnersArray = [];
    for (let i = 0; i < 5; i++) {
       spinnersArray.push(<Spinner animation={"border"}  style={{marginRight:"15px",minWidth:"auto"}}/>)
    }
    return spinnersArray;
  };


const FiveLoader = () => {
    return (
        <div className="d-flex" style={{overflowX:"visible",justifyContent:"space-between"}}>
            {getFiveLoader()}
        </div>
    )
}

export default FiveLoader
