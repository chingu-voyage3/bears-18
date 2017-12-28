/* eslint-disable */
import React from 'react';
import DevForm from '../dev/DevForm';
import DevList from '../dev/devList';
import Header from './Header'
import { connect } from 'react-redux'
import { toggleAddDev } from '../../states/actions';



class App extends React.Component {
// finally we rander our app

componentDidMount(){

}
toggleAddDEvSection = () => {
  console.log("tuggle activated")
  this.props.dispatch(toggleAddDev());
};
  render() {
    return (
      <div >
       <Header /> 
       <DevForm />
       <DevList  toggleAddDev={this.toggleAddDEvSection}/> 
        <h2 >  </h2>
      </div>
    )
  }
}
App = connect()(App)

export default App;
