import React from 'react';
import '../Pagelist.css'

function Pagelist() {
    return ( 
        <div className='page-list'>
            <div className='page-box'>Previus</div>
            <div className='page-box'>1</div>
            <div className='page-box'>2</div>
            <div className='page-dot'>. . . </div>
            <div className='page-box'>7</div>
            <div className='page-box'>8</div>
            <div className='page-box'>Next </div>
        </div>
     );
}

export default Pagelist;