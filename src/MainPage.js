import React from 'react';
import teso from './img/tesodev.png'
import './App.css';
import SearchBar from './components/SearchBar'



function MainPage() {
    return ( 
        <>
           
            <div className="App">
              <header className="App-header">
                <img src={teso} className="App-logo" alt="logo" />
                <p className='logoText'>Search web App</p>
              </header>
              <main className='App-main'>
                <SearchBar>
                </SearchBar>
                
              </main>
            </div>
         
        </>
     );
}

export default MainPage;