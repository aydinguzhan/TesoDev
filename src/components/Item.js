import React from "react";
import '../DropBox.css';

function Item(props) {
    return (
        <div>
            <ul className="DropBox-List">
             <li className='DropBox-flex'>
                    <div className="DropBox-description">
                        <div className="DropBox-Box">
                            <h5>{props.country}-{props.city}</h5>
                            <p> Jane Doe - 2016</p>
                            <p>{props.item}</p>
                        </div>
                        <div className="DropBox-Box">
                            <h5>Email: {props.email} </h5>
                        </div>
                    </div>
                </li>
            </ul >
    
        </div >
    );
}

export default Item;