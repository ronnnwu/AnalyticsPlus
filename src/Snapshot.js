import React, { Component } from 'react'; 
import Business from './Snapshot/Business';
import Industry from './Snapshot/Industry'
import './Snapshot.css';
import Corporate from './Snapshot/CorporateInfo';
import PriceVolumn from './Snapshot/PriceVolumn';
import ESP from './Snapshot/EPS';
import KeyStatisctics from './Snapshot/KeyStatistics';
import BusinessSegment from './Snapshot/BusinessSegment';

export default function Snapshot() {
    return (
        <div style={{marginLeft:'7px', marginRight:'3px'}}>
            <div style={{backgroundColor:'#f6f5f6' ,display:'flex', borderBottom: '1px solid #ccc' }}>
                <p style={{color:'#6792bc', fontWeight:'700', fontSize:'10', padding:'3px', marginLeft:'10px' }}>Amazon.com, Inc. Class A (AMZN)</p>
                <p style={{color:'#6792bc', fontWeight:'700', fontSize:'10', padding:'3px', marginLeft:'40px' }}>$ 2,134.87</p>
            </div>
            
            <div style={{backgroundColor:'#fcfdff' ,   height:'80vh', overflowY: 'scroll'}}>
            <div className="tile is-ancestor is-gapless ">
                
                <div className="tile is-4 is-vertical is-parent">
                    <div className="tile is-child box">
                        <Business/> 
                    </div>
                    <div className="tile is-child box" >
                        <Corporate/>
                    </div>
                </div>
                <div className="tile is-5 is-vertical is-parent">
                    <div className="tile is-child box">
                     <Industry/>
                    </div>
                    <div className="tile is-child box">
                     <BusinessSegment/>
                    </div>
                </div>
                <div className="tile is-parent">
                    <div className="tile is-child box">
                    <KeyStatisctics/>
                    </div>
                </div>
                
            </div>

            <div className="tile is-ancestor is-gapless ">
                
                <div className="tile is-4 is-vertical is-parent">
                    <div className="tile is-child box">
                        <ESP/> 
                    </div>
                    
                </div>
                <div className="tile  is-vertical is-parent">
                    <div className="tile is-child box">
                     <PriceVolumn/>
                    </div>
                   
                </div> 
                
            </div>
          

            </div>
        </div>
    )
}