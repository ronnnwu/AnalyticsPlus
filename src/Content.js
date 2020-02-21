import React, { Component } from 'react'; 
import './Content.css';
import SideBar from './SideBar.js';
import Snapshot from './Snapshot.js';
import SearchSuggestion from './SearchSuggestion';

class Content extends Component  {
    constructor(props) { 
        super(props)
        this.state = {
          display: null
        }
      }

      
  render() {
    return ( <div style={{backgroundColor:'#cfcecf', margin:'3px', height: '90vh', padding:'1px'}}>

        <header style={{backgroundColor:'#f9f8f9', margin:'3px', height: '45px'}}>
        <form style={{ marginLeft:'10px', position: 'relative',  top: '25%',  display: 'flex',   }}>

             <input value='AMZN-US' style={{width:'160px',}} onBlur={() => this.setState({display:null})} onFocus={() => this.setState({display:'1'})}></input>
             <div style={{display: 'inline-block' , width:'25px' , border: '2px solid #d0cfd0' }}><i className="fas fa-caret-down " ></i></div>

             <i className="fa fa-search" style={{margin:'5px'}}></i> 

             <div className="select-style" style={{ alignSelf: 'start', marginLeft:'20px'}}>
                <select>
                    <option value="0">Local</option>
                    <option value="1">Single</option> 
                </select>
            </div>
            <div style={{display: 'inline-block' , width:'25px' , border: '2px solid #d0cfd0' }}><i className="fas fa-caret-down " ></i></div>
 
        </form>
        

        {this.state.display?<div style={{width:'500px', height:'500px',position: 'absolute',  top: '166px', left:'17px',
         border:'1px solid #d0cfd0', backgroundColor:'white', zIndex:'10000', boxShadow: '3px 3px 3px #cfcecf' }}>
        <SearchSuggestion/> 
        </div>:null}

       
           
        </header>
        <div className="columns is-gapless ">
            <div className="column is-2">
                <SideBar/>
            </div>
            <div className="column">
                <Snapshot/>
            </div> 
        </div>
    </div>
    )
  }
}

export default Content;