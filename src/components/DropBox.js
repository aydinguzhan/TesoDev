import React from "react";
import '../DropBox.css'
import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext'
import { useState,useEffect } from "react";
import Item from "./Item";


function DropBox(props) {
    //gelen props state ile map üzerinden filterlenecek ve sonuç yazdırılacak

    const deger = useContext(UserContext);
    const [input, setInput] = useState("");
    useEffect(() => {setInput(props.inputProps)},[props.inputProps])


    let filtered = deger.customer.filter((i) => {
        return input?i.country.toLowerCase().indexOf(input.toLowerCase()) !== -1 :false;
    });


    return (
        <div className="DropBox">
            {
                filtered.map((item) =>{ 
                    return (
                        <div>
                        <Item key={item.id} country={item.country} city={item.city} email={item.email}></Item>
                        </div>
                        
                    )
                })
            }
             <a href="/ShowMore"  target="_blank"uss style={{ textDecoration: "none", color: "black" }}><strong>Show More ...</strong></a>
           
        </div>

)


}

export default DropBox;