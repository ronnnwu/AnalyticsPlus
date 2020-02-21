import React, { Component } from 'react';  
import Content from './Content'
import './App.css';


class App extends Component {
  constructor(props) { 
    super(props)
    this.state = {
      ml: 20-150, 
    }
  }

  goLeft() {
    if (this.state.ml>-200){
      this.setState({
        ml: this.state.ml - 50
      })
    }
  }
  goRight() {
    if (this.state.ml<20){
      this.setState({
        ml: this.state.ml + 50
      }) 
    }  
  }


  render() {
  return (
    <div className="App"> 
      <div class="App-header" >
 
            <div  style={{ marginTop: '20px', marginLeft: '20px', marginBottom: '2px', 
            color:'#01b6f2', fontWeight: 'bold', fontSize: '30px' }}><span>ANALYTICS +</span> 
            
             <div style={{  marginLeft: '7px', marginBottom: '2px',}}>
             
              <form id="demo-2">
                <input type="search" placeholder="Search"/>
              </form>
              </div>
          </div>
            <div style={{  marginTop: '20px', marginRight: '20px', marginBottom: '0px', 
            color:'#01b6f2', fontWeight: 'bold', }}>
              <button class="tag is-primary" style={{marginRight:'4px'}}>ABOUT</button> 
              <button class="tag is-info" style={{marginRight:'4px'}}>HELP</button> 
              <button class="tag is-success" onClick={() => window.print()}>PRINT</button>
            </div>
      </div> 
      <div style={{position: 'absolute', top: '69px', left:'0',  width: '20px', height:'52px',
            backgroundColor:'#555456' , zIndex: '10000'}} onClick={() => this.goLeft()}> <i className="fas fa-caret-left" style={{position: 'absolute',  top: '35%', color: 'white'}}></i>  </div>

     <div style={{position: 'absolute', top: '69px', right:'0',  width: '20px', height:'52px',
            backgroundColor:'#555456' , zIndex: '10000'}} onClick={() => this.goRight()}>  <i className="fas fa-caret-right" style={{position: 'absolute',  top: '35%', color: 'white'}}></i>   </div>

      <nav style={{  marginLeft: this.state.ml+'px'}} className="navbar" role="navigation" aria-label="main navigation">
  
        <div id="navbarBasicExample" className="navbar-menu">
         
            <span className="navbar-item " style={{cursor: 'pointer', color: '#cfcecf', fontWeight:'600'}}>
              Today's Top News
            </span> 
            <span className="navbar-item navbar-item-sep " style={{color: '#3b3a3b'}}>
              |
            </span> 
            <span className="navbar-item" style={{cursor: 'pointer', color: '#cfcecf', fontWeight:'600'}}>
              Markets
            </span> 
            <span className="navbar-item  " style={{color: '#3b3a3b'}}>
              |
            </span> 
            <span className="navbar-item" style={{cursor: 'pointer', color: '#cfcecf', fontWeight:'600'}}>
              Quotes
            </span> 
            <span className="navbar-item navbar-item-sep " style={{color: '#3b3a3b'}}>
              |
            </span> 
            <span className="navbar-item" style={{cursor: 'pointer', color: '#cfcecf', fontWeight:'600'}}>
              Charting
            </span> 
            <span className="navbar-item navbar-item-sep " style={{color: '#3b3a3b'}}>
              |
            </span> 
            <span className="navbar-item" style={{cursor: 'pointer', color: '#cfcecf', fontWeight:'600'}}>
              Economics
            </span> 
            <span className="navbar-item navbar-item-sep " style={{color: '#3b3a3b'}}>
              |
            </span> 
            <span className="navbar-item" style={{cursor: 'pointer', color: '#cfcecf', paddingRight: '20px', fontWeight:'600'}}>
              Industry
            </span>  
            <span className="navbar-item" style={{cursor: 'pointer', color: '#cfcecf', backgroundColor: '#717071', fontWeight:'600', paddingLeft: '20px', paddingRight: '20px'}}>
              Company/Security
            </span> 
            <span className="navbar-item" style={{cursor: 'pointer', color: '#cfcecf', paddingLeft: '20px', fontWeight:'600'}}>
              Filings
            </span> 
            <span className="navbar-item navbar-item-sep " style={{color: '#3b3a3b'}}>
              |
            </span> 
            <span className="navbar-item" style={{cursor: 'pointer', color: '#cfcecf', fontWeight:'600'}}>
              Screening
            </span> 
            <span className="navbar-item navbar-item-sep " style={{color: '#3b3a3b'}}>
              |
            </span> 
            <span className="navbar-item" style={{cursor: 'pointer', color: '#cfcecf', fontWeight:'600'}}>
              Ownership
            </span> 
            <span className="navbar-item navbar-item-sep " style={{color: '#3b3a3b'}}>
              |
            </span> 
            <span className="navbar-item" style={{cursor: 'pointer', color: '#cfcecf', fontWeight:'600'}}>
              BHIC
            </span> 
            <span className="navbar-item navbar-item-sep " style={{color: '#3b3a3b'}}>
              |
            </span> 
            <span className="navbar-item" style={{cursor: 'pointer', color: '#cfcecf', fontWeight:'600'}}>
              News
            </span> 
            <span className="navbar-item navbar-item-sep " style={{color: '#3b3a3b'}}>
              |
            </span> 
            <span className="navbar-item" style={{cursor: 'pointer', color: '#cfcecf', fontWeight:'600'}}>
              Futures
            </span> 
            <span className="navbar-item navbar-item-sep " style={{color: '#3b3a3b'}}>
              |
            </span> 
            <span className="navbar-item" style={{cursor: 'pointer', color: '#cfcecf', fontWeight:'600'}}>
              Goverment Yields
            </span> 
            <span className="navbar-item navbar-item-sep " style={{color: '#3b3a3b'}}>
              |
            </span> 
            <span className="navbar-item" style={{cursor: 'pointer', color: '#cfcecf', fontWeight:'600'}}>
              Foreign Exchange
            </span> 
              
        </div>
      </nav>

      <Content/>  

    </div>
  );
}
}

export default App;
