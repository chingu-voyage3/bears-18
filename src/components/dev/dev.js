import React from 'react';
import { connect } from 'react-redux'
import { removeDev ,toggleEditDev } from '../../states/actions'
import EditDEv from './EditDev'
/**
 * render the dev componenet 
 */
function DevEditRemove(props){
    const edit = props.edit
    const remove = props.remove 
   const  val = props.val
   
    return (
        <div className="row col-md-6">
        <div className="form-inline  ">

            <div className="input-group col-md-1 dev-edit-remove-button">
                <a className="form-control btn btn-danger devbutton " type="submit" onClick={remove}><i className="fa fa-trash-o" aria-hdevidden="true">&nbsp;</i>
                    </a>

            </div>
            <div className="input-group col-md-1 col-md-offset-1">
                <a className="form-control btn btn-success dev-edit-remove-button" type="submit" onClick={edit}
                    key={val.devid}><i className="fa fa-pencil-square-o" aria-hdevidden="true">&nbsp;</i>
                    </a>

</div>
        </div>

    </div>
    )
}    
function RenderDev(props){
    const val = props.val
    const edit = props.edit
    const remove = props.remove 
return  (<div className="panel panel-primary dev" >
<div className="panel-heading">
    {val.name}
</div>
<div className="container">
    <div className="row">
        <div className="col-md-2">
            <img className="dev-photo img-responsive img-circle" src={val.image} alt="an alternative" />
        </div>

        <h3 >{val.status}</h3>
        <div className="col-md-5">
            <p >{val.desc}</p>
        </div>
    </div>


    <div>

    </div>



</div>
<DevEditRemove     val={val} edit={edit} remove={remove}     />

</div>
)
}


class Dev extends React.Component {
    constructor(props) {

        super(props)
        this.remove = this.remove.bind(this)
        this.edit = this.edit.bind(this)
        this.cancel = this.cancel.bind(this)
    }
    val = this.props.val
    cancel(e){
        e.preventDefault();
        console.log('canceled')
        this.props.toggleEditDev()
    }
    onChange(e){
        e.preventDefault();
        console.log('change occuring')
           }
    edit(e){
        e.preventDefault();
        const devid = this.val.devid
       // const { name, desc,photo,password,status } = this.val
        this.props.toggleEditDev(devid)
        const { _name, _desc,_photo,_password,_status,_devform } = this.refs
             console.log('Gonna a edit this dev'+ _name)
    }
    remove(e) {
        e.preventDefault();
        const devid = this.val.devid
        console.log('Gonna a remove this dev')
        this.props.removeDev(devid)
    }
    renderDevOrEditField() {
       if (this.props.toggleEdit ===this.val.devid) {
            // handle  edit fields here
           return <EditDEv val={this.val} cancel={this.cancel} updateDev={this.updateDev}/>

            // Handle rendering.
        } else {
            return     <div className="container">
                        <RenderDev val={this.val} edit={this.edit} remove={this.remove}/> 
                       
                       </div>

        }
    }
    
    
    render() {
        return (
            <div>
            {this.renderDevOrEditField()}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        devs: state.devs,
        toggleEdit:state.app.toggleEdit,
        showAddDev:state.app.showAddDev

    }
}
const mapDispatchToProps = dispatch => {
    return {
        removeDev: devid => {
            dispatch(removeDev(devid))
        },
        toggleEditDev:devid => {
            dispatch(toggleEditDev(devid))
        }
    }
}


Dev = connect(mapStateToProps, mapDispatchToProps)(Dev)
export default Dev; 