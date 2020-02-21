import React, { Component } from 'react'; 


import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [ 
    {
        name: '52 Week Range', 
        value: '$1,586.57 - 2,185.95'
    },
    {
        name: 'Avg Daily Vol (3Mo)', 
        value: '5.03'
    },
    {
        name: 'Market Value (M)', 
        value: '1,069,000'
    },
    {
        name: 'Ent Value (M)', 
        value: '23'
    },
    {
        name: 'Shares Out (M)', 
        value: '497.81'
    },
    {
        name: 'Dividend Yield', 
        value: '0.0%'
    },
    {
        name: 'Float', 
        value: '62'
    },
    {
        name: 'Institutional', 
        value: '61.45%'
    },
    {
        name: 'Top 10 Inst Hldrs', 
        value: '24%'
    },
    {
        name: 'Broker Contributors', 
        value: '13'
    },
    {
        name: 'Target Price', 
        value: '$2,408.00'
    },
    {
        name: 'LT Growth Rate', 
        value: '11%'
    },
    {
        name: 'Avg Rating', 
        value: '14'
    },
    {
        name: 'First Trading Date', 
        value: '15 May \'97'
    }
    
];


class Download extends React.Component {
    render() {
        return ( 
            <ExcelFile >
                <ExcelSheet data={dataSet1} name="Corporate Information">
                    <ExcelColumn label="" value="name"/> 
                    <ExcelColumn label="Key Statistics" value="value"/>  
                </ExcelSheet> 
            </ExcelFile> 
        );
    }
}

export default class Corporate  extends Component  {
    constructor(props) { 
        super(props)
        this.state = {
            showall: false
        }
      }

    render() { 
    return(
        <div style={{display:'block'}}> 
            <div style={{float:'left '}}>
            <p style={{fontWeight:'800', alignSelf:'left', fontSize:'15px', color:'#85a6c6', display:'flex'}}>Key Statistics</p>
            </div>
            <div  style={{display:'block', float:'right'}} ><Download/></div>
            
            <div style={{  marginTop: '10px', width:'100%', float:'left', textAlign:'left'}} >
            {dataSet1.map(x=>( <div style={{clear: 'both'}}> 
                    <p style={{   fontWeight:'600', fontSize:'12px', color:'#bdbcbd', float:'left'}}>
                                {x.name}</p>
                           
                    <p style={{  fontWeight:'600', fontSize:'12px', float:'right'}}>
                                {x.value}</p> 
                                
                </div> ) )}  
                </div>
        </div>
    )
    }
}