/* eslint-disable */

import React from 'react';
import Dev from './dev'
import { connect } from 'react-redux'
import { loadDevs } from '../../states/actions';
/**
 * 
 * 
 */
class DevList extends React.Component {
    constructor(props){
        super(props)
            }
   
    
    render() {
        
        
        return (
            <div>
            <div className="row col-md-6 col-md-offset-3 ">
                <a className="btn btn-primary add-dev-button" onClick={this.props.toggleAddDev}>{this.props.showAddDev?"Cancel":"Add a new Developer"}</a>
             </div> 
            <div className="col-md-6 col-md-offset-3">
               
                {this.props.devs.map(x=><Dev val={x} key={x.devid} />)}
        </div>
        </div>
)
    }
}
const mapStateToProps = state => {
    return {
      devs: state.devs,
      showAddDev:state.app.showAddDev
    }
  }
DevList = connect(mapStateToProps)(DevList)
export default DevList;