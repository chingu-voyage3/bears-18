import React from 'react';
const uuidv4 = require('uuid/v4');
import { connect } from 'react-redux'
import {addDev} from '../../states/actions'

class DevForm extends React.Component {
    constructor(props) {

        super(props)
        this.createDev = this.createDev.bind(this)
    }

    
    createDev(e) {
        const { _name, _desc,_photo,_password,_status,_devform } = this.refs
        e.preventDefault();
        console.log('Gonna a create somme dev')
       const dev ={
           devid:uuidv4(),
           name:_name.value,
           desc:_desc.value,
           image:_photo.value,
           status:_status.value,
           price:_password.value
                  }
    this.props.addDev(dev)       
       _devform.reset()
    }
    render() {
        return (
            <div className="row col-md-12 text-center add-form-container" style={{ display:this.props.showAddDev?"block":"none"}}>
            
             <div className="row col-md-6 col-md-offset-3 ">  
                <form onSubmit={this.createDev} ref="_devform" className="form form-horizontal" >
                    <div className="form-group">
                        <label htmlFor="devname" className="control-label col-sm-2">Name: </label>
                        <div className="col-sm-6">   <input id="devname" className="form-control" ref="_name" type="text" placeholder="your name here..." required /></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="devdesc" className="control-label col-sm-2">Skills:</label>
                        <div className="col-sm-6"> <input id="devdesc" className="form-control" ref="_desc" type="text" placeholder="tell us more about you..." required /></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="devdesc" className="control-label col-sm-2">Photo:</label>
                        <div className="col-sm-6">   <input id="devphoto" className="form-control" ref="_photo" type="text" placeholder="photo url..." required /></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="devemail" className="control-label col-sm-2">Email address:</label>
                        <div className="col-sm-6">  <input type="email" className="form-control" id="devemail" ref="_email" aria-describedby="emailHelp" placeholder="Enter email"></input></div>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="devpassword" className="control-label col-sm-2">Password</label>
                        <div className="col-sm-6"> <input type="password" className="form-control" id="devpassword" placeholder="Password" ref="_password"></input></div>
                    </div>
                    <div className="form-check">
                        <label className="control-label form-check-label col-sm-2" >I'am available</label>
                            <input type="checkbox" className="form-check-input" ref="_status"></input>
                            
                   
                    </div>
                    <button className="btn btn-primary">ADD</button>

                </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
      dev: state.dev,
      showAddDev:state.app.showAddDev
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
        addDev: dev => {
        dispatch(addDev(dev))
      }
    }
  }
  

DevForm = connect(mapStateToProps,mapDispatchToProps)(DevForm)
export default DevForm;