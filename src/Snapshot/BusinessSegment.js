import React, { Component } from 'react';  

import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [
    {
        name: 'North America',
        totRev: '170,773',
        pctTot: '60.7%',
        opInc: '7,033',
        Assets: '',
        CapEx: '163,740'  
    },
    {
        name: 'International',
        totRev: '74,723',
        pctTot: '28.3%',
        opInc: '(1,693)',
        Assets: '',
        CapEx: '76,416'
    },
    {
        name: 'AWS',
        totRev: '35,026',
        pctTot: '11.0%',
        opInc: '9,201',
        Assets: '',
        CapEx: '25,825'
    } 
];


class Download extends React.Component {
    render() {
        return ( 
            <ExcelFile >
                <ExcelSheet data={dataSet1} name="Business Segment">
                    <ExcelColumn label="" value="name"/> 
                    <ExcelColumn label="Tot Rev" value="totRev"/> 
                    <ExcelColumn label="% of Tot" value="pctTot"/> 
                    <ExcelColumn label="Op Inc" value="opInc"/> 
                    <ExcelColumn label="Assets" value="Assets"/> 
                    <ExcelColumn label="Cap Ex" value="CapEx"/> 
                </ExcelSheet> 
            </ExcelFile> 
        );
    }
}

export default class BusinessSegment  extends Component  {
    constructor(props) { 
        super(props)
        this.state = {
            showall: false
        }
      }

    render() { 
    return(
        <div style={{display:'block'}}>
            <div style={{display:'block', float:'left', marginBottom: '10px'}}><p style={{fontWeight:'800', fontSize:'15px', color:'#85a6c6'}}>Business Segment</p></div>
            <div  style={{display:'block', float:'right'}} ><Download/></div>
            <div  >
                <table style={{ fontSize:'11px' , fontWeight:'600', alignItems:'right'}} className='table is-bordered is-striped is-narrow is-hoverable is-fullwidth'   >
                    <thead>
                        <tr className='header'>
                        <th></th>
                        <th>Tot Rev</th>
                        <th>% of Tot</th>
                        <th>Op Inc</th>
                        <th>Assets</th>
                        <th>Cap Ex</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{dataSet1[0].name}</td>
                        <td >{dataSet1[0].totRev}</td>
                        <td >{dataSet1[0].pctTot}</td>
                        <td >{dataSet1[0].opInc}</td>
                        <td >{dataSet1[0].Assets}</td>
                        <td>{dataSet1[0].CapEx}</td>
                        </tr>                        
                        <tr>
                        <td>{dataSet1[1].name}</td>
                        <td >{dataSet1[1].totRev}</td>
                        <td >{dataSet1[1].pctTot}</td>
                        <td >{dataSet1[1].opInc}</td>
                        <td >{dataSet1[1].Assets}</td>
                        <td>{dataSet1[1].CapEx}</td>
                        </tr>
                        <tr>
                        <td>{dataSet1[2].name}</td>
                        <td >{dataSet1[2].totRev}</td>
                        <td >{dataSet1[2].pctTot}</td>
                        <td >{dataSet1[2].opInc}</td>
                        <td >{dataSet1[2].Assets}</td>
                        <td>{dataSet1[2].CapEx}</td>
                        </tr>
                         
                         
                         
                    </tbody> 
                </table>
                </div>
        </div>
    )
    }
}