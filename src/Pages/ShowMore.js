import React from 'react';
import { useState } from 'react';
import teso from '../img/tesodev.png';
import '../ShowMore.css';
import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import Item from '../components/Item';
import Icon from '../img/iconfinder.png';
import Pagelist from '../components/Pageslist';
function ShowMore() {
    const deger = useContext(UserContext);
    const [inputText, setInputText] = useState("")
    let handleChange = (e) => {
        setInputText(e.target.value)
    }
    console.log("show : " + inputText)
    let filtered = deger.customer.map((i) => {
        return i
    }
    );

    return (
        <div className='ShowMore-Main'>
            <header className='ShowMore-Navbar'>
                <img src={teso} style={{ width: "150px" }} alt='undefine' ></img>
                <div className='InputArea'>
                    <input placeholder="Search" onChange={handleChange} />
                    <button className='ShowMore-btn'>Search</button>
                </div>
            </header>
            <div className='order'>
                <img className='order-img' src={Icon} alt="undefine"></img>
                <div className='order-text'>
                    <h8 className='dropdown'>Order By</h8>
                    <div className="dropdown-content">
                    <p>Name ascending</p>
                    <p>Name descending</p>
                    <p>Year ascending</p>
                    <p>Year ascending</p>
                    </div>
                </div>

            </div>

            <main>
                <div className='ShowMore-items'>
                    {
                        filtered.map((item, index) => {
                            return (
                                <div>
                                    <Item key={index} country={item.country} city={item.city} email={item.email}></Item>
                                </div>
                            )
                        })}
                </div>
            </main>
            <Pagelist></Pagelist>
        </div>

    );
}

export default ShowMore;