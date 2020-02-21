import React, { Component } from 'react'; 


import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [ 
    {
        name: 'Headquaters', 
        value: 'Bellevue, Washington'
    },
    {
        name: 'Management', 
        value: 'Jeff P. Bezos, Brian T. Olsavsky'
    },
    {
        name: '# Employees', 
        value: '798,000'
    },
    {
        name: 'Website', 
        value: 'www.amazon.com'
    } 
];


class Download extends React.Component {
    render() {
        return ( 
            <ExcelFile >
                <ExcelSheet data={dataSet1} name="Corporate Information">
                    <ExcelColumn label="" value="name"/> 
                    <ExcelColumn label="Corporate Information" value="value"/>  
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
            <p style={{fontWeight:'800', alignSelf:'left', fontSize:'15px', color:'#85a6c6', display:'flex'}}>Corporate Information</p>
            </div>
            <div  style={{display:'block', float:'right'}} ><Download/></div>
            
            <div style={{  marginTop: '10px', float:'left', textAlign:'left'}} >
                <div className="columns"   >
                        <div className="column is-two-fifths">
                            <p style={{  fontWeight:'600',color:'#bdbcbd' ,fontSize:'12px'}}>Headquaters <br/>
                            Management  <br/><br/># Employees<br/>Website</p>
                        </div>
                        <div className="column" style={{marginLeft:'1px'}}>
                            <p style={{  fontWeight:'600', fontSize:'12px'}}>Bellevue, Washington</p>
                            <p style={{  fontWeight:'600', fontSize:'12px'}}>Jeff P. Bezos<br/> 
                                Brian T. Olsavsky 
                            </p><p style={{  fontWeight:'600', fontSize:'12px'}}> 
                               798,000
                            </p><p style={{  fontWeight:'600', fontSize:'12px'}}> 
                               <a color='#85a6c6' href='http://www.amazon.com'>www.amazon.com</a>
                            </p>
                        </div> 
                </div>      
            </div> 
        </div>
    )
    }
}