import React, { Component } from 'react'; 
import './SideBar.css';

export default class SideBar extends Component {
    constructor(props) { 
        super(props)
        this.state = {
          overview: false, 
          prices: false
        }
      }

    render() {
    return (
        <div style = {{backgroundColor: '#e6e4e6', height:'83vh', marginLeft:'3px'}}>
            <header style={{backgroundColor:'#e1e0e1', height:'30px'}}>
                <p style={{float:'left', marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'bold'}}>REPORTS</p>
            </header>
            <div className="is-divider"></div>
            <div style={{height:'30px'}}>
                <p style={{float:'left', marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'500'}}>Overview</p>
                <p key={this.state.overview} onClick={()=>this.setState({overview:!this.state.overview})}
                style={{float:'right', marginRight:'5px', padding:'5px',fontSize:'12px', color:'#595356',fontWeight:'500'}}>
                   {this.state.overview?<i className="fas fa-chevron-down"/>:<i className="fas fa-chevron-left"/>}
                </p>
            </div>
            <div className="is-divider"></div>
            {this.state.overview? <div>
                    <div className='subchoice' style={{height:'30px', backgroundColor:'#f5f4f5',  }}>
                        <p style={{float:'left', marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'500'}}>Snapshot</p>
                    </div>
                    <div className="is-divider"></div>
                    <div className='subchoice' style={{height:'30px', backgroundColor:'#f5f4f5'}}>
                        <p style={{float:'left', marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'500'}}>Entity Structure</p>
                    </div>
                    <div className="is-divider"></div>
                    <div className='subchoice' style={{height:'30px', backgroundColor:'#f5f4f5'}}>
                        <p style={{float:'left', marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'500'}}>Event Calendar</p>
                    </div>
                    <div className="is-divider"></div>
                    <div className='subchoice' style={{height:'30px', backgroundColor:'#f5f4f5'}}>
                        <p style={{float:'left', marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'500'}}>Comps</p>
                    </div>
                    <div className="is-divider"></div>
                    <div className='subchoice' style={{height:'30px', backgroundColor:'#f5f4f5'}}>
                        <p style={{float:'left', marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'500'}}>Supply Clain</p>
                    </div>
                    <div className="is-divider"></div>
                    <div className='subchoice' style={{height:'30px', backgroundColor:'#f5f4f5'}}>
                        <p style={{float:'left', marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'500'}}>Capital Structure</p>
                    </div>
                    <div className="is-divider"></div>
                    <div className='subchoice' style={{height:'30px', backgroundColor:'#f5f4f5'}}>
                        <p style={{float:'left', marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'500'}}>RBICS Rev</p>
                    </div>
                    <div className="is-divider"></div>
                    <div className='subchoice' style={{height:'30px', backgroundColor:'#f5f4f5'}}>
                        <p style={{float:'left', marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'500'}}>GeoRev</p>
                    </div>
                    <div className="is-divider"></div>
                    <div className='subchoice' style={{height:'30px', backgroundColor:'#f5f4f5'}}>
                        <p style={{float:'left', marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'500'}}>Reference</p>
                    </div>
                    <div className="is-divider"></div>   
            </div>:null}
            <div style={{height:'30px'}}>
                <p style={{float:'left', marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'500'}}>Prices</p>
                <p key={this.state.prices} onClick={()=>this.setState({prices:!this.state.prices})}
                style={{float:'right', marginRight:'5px', padding:'5px',fontSize:'12px', color:'#595356',fontWeight:'500'}}>
                   {this.state.prices?<i className="fas fa-chevron-down"/>:<i className="fas fa-chevron-left"/>}
                </p>
            </div> 
            <div className="is-divider"></div>
            {this.state.prices? <div>
                    <div className='subchoice' style={{height:'30px', backgroundColor:'#f5f4f5'}}>
                        <p style={{float:'left', marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'500'}}>Price Summary</p>
                    </div>
                    <div className="is-divider"></div>
                    <div className='subchoice' style={{height:'30px', backgroundColor:'#f5f4f5'}}>
                        <p style={{float:'left', marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'500'}}>Price History</p>
                    </div>
                    <div className="is-divider"></div>
                    <div className='subchoice' style={{height:'30px', backgroundColor:'#f5f4f5'}}>
                        <p style={{float:'left', marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'500'}}>Global Quotes</p>
                    </div>
                    <div className="is-divider"></div>
                    <div className='subchoice' style={{height:'30px', backgroundColor:'#f5f4f5'}}>
                        <p style={{float:'left', marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'500'}}>Corporate Actions</p>
                    </div>
                    <div className="is-divider"></div>
                    <div className='subchoice' style={{height:'30px', backgroundColor:'#f5f4f5'}}>
                        <p style={{float:'left', marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'500'}}>Seasonality Analysis</p>
                    </div>
                    <div className="is-divider"></div>
                    <div className='subchoice' style={{height:'30px', backgroundColor:'#f5f4f5'}}>
                        <p style={{float:'left', marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'500'}}>Return Analysis</p>
                    </div> 
                    <div className="is-divider"></div>   
            </div>:null}

            <div style={{height:'30px'}}>
                <p style={{float:'left', marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'500'}}>Charts</p>
                <p style={{float:'right', marginRight:'5px', padding:'5px',fontSize:'12px', color:'#595356',fontWeight:'500'}}>
                   <i className="fas fa-chevron-left"/>
                </p>
            </div>
            <div className="is-divider"></div>
            <div style={{height:'30px'}}>
                <p style={{float:'left', marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'500'}}>News, Research, and Fillings</p>
                <p style={{float:'right', marginRight:'5px', padding:'5px',fontSize:'12px', color:'#595356',fontWeight:'500'}}>
                   <i className="fas fa-chevron-left"/>
                </p>
            </div>
            <div className="is-divider"></div>

            <div style={{height:'30px'}}>
                <p style={{float:'left', marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'500'}}>Ownership</p>
                <p style={{float:'right', marginRight:'5px', padding:'5px',fontSize:'12px', color:'#595356',fontWeight:'500'}}>
                   <i className="fas fa-chevron-left"/>
                </p>
            </div>
            <div className="is-divider"></div>
            <div style={{height:'30px'}}>
                <p style={{float:'left', marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'500'}}>Financials</p>
                <p style={{float:'right', marginRight:'5px', padding:'5px',fontSize:'12px', color:'#595356',fontWeight:'500'}}>
                   <i className="fas fa-chevron-left"/>
                </p>
            </div>
            <div className="is-divider"></div>
            <div style={{height:'30px'}}>
                <p style={{float:'left', marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'500'}}>Estimates</p>
                <p style={{float:'right', marginRight:'5px', padding:'5px',fontSize:'12px', color:'#595356',fontWeight:'500'}}>
                   <i className="fas fa-chevron-left"/>
                </p>
            </div>
            <div className="is-divider"></div>
            <div style={{height:'30px'}}>
                <p style={{float:'left', marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'500'}}>Credit Analysis</p>
                <p style={{float:'right', marginRight:'5px', padding:'5px',fontSize:'12px', color:'#595356',fontWeight:'500'}}>
                   <i className="fas fa-chevron-left"/>
                </p>
            </div>
            <div className="is-divider"></div>
            <div style={{height:'30px'}}>
                <p style={{float:'left', marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'500'}}>Transactions</p>
                <p style={{float:'right', marginRight:'5px', padding:'5px',fontSize:'12px', color:'#595356',fontWeight:'500'}}>
                   <i className="fas fa-chevron-left"/>
                </p>
            </div>
            <div className="is-divider"></div>
            <div style={{height:'30px'}}>
                <p style={{float:'left', width:'170px' , overflow: 'hidden', whiteSpace: 'nowrap',textOverflow: 'ellipsis',  marginLeft:'5px', padding:'5px', fontSize:'12px', color:'#595356', fontWeight:'500'}}>Activism, Management and Governance</p>
                <p style={{float:'right', marginRight:'5px', padding:'5px',fontSize:'12px', color:'#595356',fontWeight:'500'}}>
                   <i className="fas fa-chevron-left"/>
                </p>
            </div> 
            <div className="is-divider"></div>
        </div>
        
    )
    }
}