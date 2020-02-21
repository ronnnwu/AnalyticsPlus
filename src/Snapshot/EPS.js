import React, { Component } from 'react';   
import './EPS.css';
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [
    {
        FYEnding: 'Q1(Mar)',
        dec17: 1.48,
        dec18: 3.27,
        dec19: 7.09,
        dec20e: 8.30, 
    }, 
    {
        FYEnding: 'Q2(Jun)',
        dec17: 0.39,
        dec18: 5.07,
        dec19: 5.22,
        dec20e: 6.00, 
    }, 
    {
        FYEnding: 'Q3(Sep)',
        dec17: 0.52,
        dec18: 5.76,
        dec19: 4.22,
        dec20e: 5.90, 
    }, 
    {
        FYEnding: 'Q4(Dec)',
        dec17: 3.76,
        dec18: 6.04,
        dec19: 6.48,
        dec20e: 6.90, 
    },     
    {
        FYEnding: 'Fiscal Year',
        dec17: 6.15,
        dec18: 20.14,
        dec19: 23.01,
        dec20e: 25.00, 
    }, 
    {
        FYEnding: 'P/E',
        dec17: 190.16,
        dec18: 74.61,
        dec19: 80.31,
        dec20e: 78.02, 
    }, 
];


class Download extends React.Component {
    render() {
        return ( 
            <ExcelFile >
                <ExcelSheet data={dataSet1} name="EPS">
                    <ExcelColumn label="FY Ending" value="FYEnding"/> 
                    <ExcelColumn label="Dec '17" value="dec17"/> 
                    <ExcelColumn label="Dec '18" value="dec18"/> 
                    <ExcelColumn label="Dec '19" value="dec19"/> 
                    <ExcelColumn label="Dec '20E" value="dec20e"/>   
                </ExcelSheet> 
            </ExcelFile> 
        );
    }
}

export default class EPS  extends Component  {
    constructor(props) { 
        super(props)
        this.state = {
            showall: false
        }
      }

    render() { 
    return(
        <div style={{display:'block'}}>
            <div style={{display:'block', float:'left', marginBottom: '10px'}}><p style={{fontWeight:'800', fontSize:'15px', color:'#85a6c6'}}>EPS</p></div>
            <div  style={{display:'block', float:'right'}} ><Download/></div>
            <div  >
                <table style={{ fontSize:'11px' , fontWeight:'600', alignItems:'right'}} className='table epstable is-bordered is-striped is-narrow is-hoverable is-fullwidth'   >
                    <thead>
                        <tr className='header'>
                        <th>FY Ending</th>
                        <th>Dec '17</th>
                        <th>Dec '18</th>
                        <th>Dec '19</th>
                        <th>Dec '20E</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Q1(Mar)</td>
                        <td style={{color:'#85a6c6'}}>{dataSet1[0].dec17}</td>
                        <td style={{color:'#85a6c6'}}>{dataSet1[0].dec18}</td>
                        <td style={{color:'#85a6c6'}}>{dataSet1[0].dec19}</td>
                        <td style={{color:'#85a6c6'}}>{dataSet1[0].dec20e}</td> 
                        </tr>
                        <tr>
                        <td>Q2(Jun)</td>
                        <td style={{color:'#85a6c6'}}>{dataSet1[1].dec17}</td>
                        <td style={{color:'#85a6c6'}}>{dataSet1[1].dec18}</td>
                        <td style={{color:'#85a6c6'}}>{dataSet1[1].dec19}</td>
                        <td style={{color:'#85a6c6'}}>{dataSet1[1].dec20e}</td> 
                        </tr> 
                        <tr>
                        <td>Q3(Sep)</td>
                        <td style={{color:'#85a6c6'}}>{dataSet1[2].dec17}</td>
                        <td style={{color:'#85a6c6'}}>{dataSet1[2].dec18}</td>
                        <td style={{color:'#85a6c6'}}>{dataSet1[2].dec19}</td>
                        <td style={{color:'#85a6c6'}}>{dataSet1[2].dec20e}</td> 
                        </tr>
                        <tr>
                        <td>Q4(Dec)</td>
                        <td style={{color:'#85a6c6'}}>{dataSet1[3].dec17}</td>
                        <td style={{color:'#85a6c6'}}>{dataSet1[3].dec18}</td>
                        <td style={{color:'#85a6c6'}}>{dataSet1[3].dec19}</td>
                        <td style={{color:'#85a6c6'}}>{dataSet1[3].dec20e}</td> 
                        </tr>
                        <tr style={{borderTop:'solid 2px red;'}}>
                        <td style={{fontWeight:'700'}}>Fiscal Year</td>
                        <td style={{fontWeight:'700',color:'#85a6c6'}}>{dataSet1[4].dec17}</td>
                        <td style={{fontWeight:'700',color:'#85a6c6'}}>{dataSet1[4].dec18}</td>
                        <td style={{fontWeight:'700',color:'#85a6c6'}}>{dataSet1[4].dec19}</td>
                        <td style={{fontWeight:'700',color:'#85a6c6'}}>{dataSet1[4].dec20e}</td> 
                        </tr>
                        <tr>
                        <td>P/E(x)</td>
                        <td style={{color:'#85a6c6'}}>{dataSet1[5].dec17}</td>
                        <td style={{color:'#85a6c6'}}>{dataSet1[5].dec18}</td>
                        <td style={{color:'#85a6c6'}}>{dataSet1[5].dec19}</td>
                        <td style={{color:'#85a6c6'}}>{dataSet1[5].dec20e}</td> 
                        </tr>
                        
                    </tbody> 
                </table>
                </div>
        </div>
    )
    }
}