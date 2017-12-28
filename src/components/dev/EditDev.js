import React from 'react';

class EditDev extends React.Component{
    
    onChange =this.props.onChange
    cancel= this.props.cancel
    updateDev = this.props.updateDev
    val = this.props.val
   render() {return <div className="container"> <div className="row col-md-12 text-center edit-form-container" >

   <div className="row col-md-6 col-md-offset-3 ">
       <form ref="_devform" className="form form-horizontal" >
           <div className="form-group">
               <label htmlFor="devname" className="control-label col-sm-2">Name: </label>
               <div className="col-sm-6">   <input id="devname" onChange={this.onChange} className="form-control" ref="_name" type="text" placeholder="your name here..." value={this.val.name}required /></div>
           </div>
           <div className="form-group">
               <label htmlFor="devdesc" className="control-label col-sm-2">Skills:</label>
               <div className="col-sm-6"> <input id="devdesc" className="form-control" ref="_desc" type="text" placeholder="tell us more about you..." required value={this.val.desc}/></div>
           </div>
           <div className="form-group">
               <label htmlFor="devdesc" className="control-label col-sm-2">Photo:</label>
               <div className="col-sm-6">   <input id="devphoto" className="form-control" ref="_photo" type="text" placeholder="photo url..." required value={this.val.image}/></div>
           </div>
           <div className="form-group">
               <label htmlFor="devemail" className="control-label col-sm-2">Email address:</label>
               <div className="col-sm-6">  <input type="email" className="form-control" id="devemail" ref="_email" aria-describedby="emailHelp" placeholder="Enter email" ></input></div>
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
           <div className="row cancel-update">
           <button className="btn btn-danger" onClick={this.cancel}>Cancel</button>{/*this.updateDev*/} 
           <button className="btn btn-success" onClick={this.updateDev}>Update</button>
           </div>
       </form>
   </div>
</div></div>}
}
export default EditDev;