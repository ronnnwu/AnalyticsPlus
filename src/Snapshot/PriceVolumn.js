import React, { Component } from 'react'; 
// import ChartComponent from './Chart/Index';
import ChartComponent from './Chart/MaterialChart';

 

export default function PriceVolumn() {
    return (
        <div style={{display:'block'}}> 
        <div style={{float:'left '}}>
        <p style={{fontWeight:'800', alignSelf:'left', fontSize:'15px', color:'#85a6c6', display:'flex'}}>Price</p>
        </div>
        {/* <div  style={{display:'block', float:'right'}} ><Download/></div> */}
        
        <div style={{paddingTop: '10px', clear:'both'}}>
            <ChartComponent/>
        </div>
        </div>
    )
}