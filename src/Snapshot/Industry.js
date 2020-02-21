import React, { Component } from 'react'; 
import './Industry.css'

import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [
    {
        name: 'RevPAR',
        mar19: 126,
        jun19: 126,
        sep19: 135,
        dec19: 133,
        mar20e: 111
    },
    {
        name: 'Average Daily',
        mar19: 177,
        jun19: 178,
        sep19: 179,
        dec19: 175,
        mar20e: 159
    },    
    {
        name: 'Occupancy (%)',
        mar19: 72.5,
        jun19: 70.6,
        sep19: 75.2,
        dec19: 76.0,
        mar20e: 70.2
    },
    {
        name: 'Same Store Sale',
        mar19: '',
        jun19: '',
        sep19: 2.2,
        dec19: '',
        mar20e: ''
    },
    {
        name: 'Revenue Per Unit',
        mar19: 1.8,
        jun19: 3.1,
        sep19: 2.2,
        dec19: 2.1,
        mar20e: 3.1
    }
];


class Download extends React.Component {
    render() {
        return ( 
            <ExcelFile >
                <ExcelSheet data={dataSet1} name="Industry Metrics">
                    <ExcelColumn label="" value="name"/> 
                    <ExcelColumn label="Mar '19" value="mar19"/> 
                    <ExcelColumn label="Jun '19" value="jun19"/> 
                    <ExcelColumn label="Sep '19" value="sep19"/> 
                    <ExcelColumn label="Dec '19" value="dec19"/> 
                    <ExcelColumn label="Mar '20E" value="mar20e"/> 
                </ExcelSheet> 
            </ExcelFile> 
        );
    }
}

export default class Industry  extends Component  {
    constructor(props) { 
        super(props)
        this.state = {
            showall: false
        }
      }

    render() { 
    return(
        <div style={{display:'block'}}>
            <div style={{display:'block', float:'left', marginBottom: '10px'}}><p style={{fontWeight:'800', fontSize:'15px', color:'#85a6c6'}}>Industry Metrics</p></div>
            <div  style={{display:'block', float:'right'}} ><Download/></div>
            <div  >
                <table style={{ fontSize:'11px' , fontWeight:'600', alignItems:'right'}} className='table is-bordered is-striped is-narrow is-hoverable is-fullwidth'   >
                    <thead>
                        <tr className='header'>
                        <th></th>
                        <th >Mar '19</th>
                        <th>Jun '19</th>
                        <th>Sep '19</th>
                        <th>Dec '19</th>
                        <th>Mar '20E</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>RevPAR</td>
                        <td style={{color:'#85a6c6'}}>126</td>
                        <td style={{color:'#85a6c6'}}>126</td>
                        <td style={{color:'#85a6c6'}}>135</td>
                        <td style={{color:'#85a6c6'}}>133</td>
                        <td style={{color:'#85a6c6'}}>111</td>
                        </tr>
                        <tr>
                        <td>Average Daily...</td>
                        <td style={{color:'#85a6c6'}}>177</td>
                        <td style={{color:'#85a6c6'}}>178</td>
                        <td style={{color:'#85a6c6'}}>179</td>
                        <td style={{color:'#85a6c6'}}>175</td>
                        <td style={{color:'#85a6c6'}}>159</td> 
                        </tr> 
                        <tr>
                        <td>Occupancy (%)</td>
                        <td style={{color:'#85a6c6'}}>72.5</td>
                        <td style={{color:'#85a6c6'}}>70.6</td>
                        <td style={{color:'#85a6c6'}}>75.2</td>
                        <td style={{color:'#85a6c6'}}>76.0</td>
                        <td style={{color:'#85a6c6'}}>70.2</td>
                        </tr>
                        <tr>
                        <td>Same Store Sa...</td>
                        <td style={{color:'#85a6c6'}}>-</td>
                        <td style={{color:'#85a6c6'}}>-</td>
                        <td style={{color:'#85a6c6'}}>2.2</td>
                        <td style={{color:'#85a6c6'}}>-</td>
                        <td style={{color:'#85a6c6'}}>-</td>
                        </tr>
                        <tr>
                        <td>Revenue Per U...</td>
                        <td style={{color:'#85a6c6'}}>1.8</td>
                        <td style={{color:'#85a6c6'}}>3.1</td>
                        <td style={{color:'#85a6c6'}}>2.2</td>
                        <td style={{color:'#85a6c6'}}>2.1</td>
                        <td style={{color:'#85a6c6'}}>3.1</td>
                        </tr>
                        
                    </tbody> 
                </table>
                </div>
        </div>
    )
    }
}