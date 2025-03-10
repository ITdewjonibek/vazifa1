import React, { useState } from 'react'
import imf from './imglar/cars.png'




export default function App() {
const [plus,setplus]=useState(0)
const [rotate,setrote]=useState(0)

    return(
        
        <div className='darkglass'>
            <button className='btn1'onClick={()=>setrote(rotate+40)}><i class='bx bx-left-arrow' ></i></button>
            <div className='img' style={{ transform: `rotateX(${12}deg) rotateY(${rotate}deg)`}}>
            <img src={imf} style={{width:530+plus,height:300+plus}}></img>
            </div>
               
            <button className='btn2' onClick={()=>setrote(rotate-40)}><i class='bx bx-right-arrow' ></i></button>

            <div className='dark'></div>

            <div className='flex'>
            <button onClick={()=>setplus(plus+50)}><i class='bx bx-zoom-in'></i></button>
            <button onClick={()=>setplus(plus-50)}><i class='bx bx-zoom-out' ></i></button>
            </div>
        </div>
    )
}
