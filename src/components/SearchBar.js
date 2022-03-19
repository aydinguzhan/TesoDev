import React,{useState} from "react";
import '../SearchBar.css'
import DropdownBar from './DropBox'
// alınan event state oluşturularak dropBoxa atılacak
function SearchBar() {
    const [inputText, setInputText]= useState("")
    let handleChange= (e)=>{
    setInputText(e.target.value)  
  }
  console.log(inputText)

 


    return ( 
        <div className="SearchBar-Main">
            <div className='inputArea'>
            <input  className='Search'placeholder="Search" 
            onChange={handleChange}>
            </input>
            </div>
            {inputText ? <DropdownBar  inputProps={inputText}/> : false}
            
            
        </div>
     );
}

export default SearchBar;