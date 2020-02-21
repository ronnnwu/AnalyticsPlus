import React, { Component } from 'react'; 
import './Business.css'
 
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [
    {
        name: `Amazon.com, Inc. engages in the provision of online retail 
        shopping services. It operates through the following business segments: North America, 
        International, and Amazon Web Services (AWS). The North America segment includes retail 
        sales of consumer products and subscriptions through North America-focused websites 
        such as www.amazon.com and www.amazon.ca. `
    },
    {
        name:`The International segment offers retail sales of consumer products and subscriptions through internationally-focused websites. 
        The Amazon Web Services segment involves in the global sales of compute, storage, 
        database, and AWS service offerings for start-ups, enterprises, government agencies, 
        and academic institutions. The company was founded by Jeffrey P. Bezos in July 1994 s
        and is headquartered in Seattle, WA.`
    }
];


class Download extends React.Component {
    render() {
        return ( 
            <ExcelFile >
                <ExcelSheet data={dataSet1} name="Business Description">
                    <ExcelColumn label="Business Description" value="name"/> 
                </ExcelSheet> 
            </ExcelFile> 
        );
    }
}

export default class Business  extends Component  {
    constructor(props) { 
        super(props)
        this.state = {
            showall: false
        }
      }

    render() { 
    return(
        <div style={{display:'block'}}>
            <div style={{display:'block', float:'left'}}><p style={{fontWeight:'800', fontSize:'15px'}}>Business Description</p></div>
            <div  style={{display:'block', float:'right'}} ><Download/></div>
            <div style={{  marginTop: '10px', float:'left', textAlign:'left',  }} >
            <div style={{  fontWeight:'600', fontSize:'12px'}}>
            {dataSet1[0].name} </div>
            {this.state.showall?<p style={{display:'inline-block', fontWeight:'600', fontSize:'12px'}}>
            {dataSet1[1].name} <a onClick={()=>this.setState({showall:false})}
             style={{fontWeight:'600', display:'inline-block', fontSize:'12px', color:'#85a6c6'}} > ... less</a></p>:<a onClick={()=>this.setState({showall:true})}
             style={{fontWeight:'600', display:'inline-block', fontSize:'12px', color:'#85a6c6'}} > ... more</a>}</div>
        </div>
    )
    }
}