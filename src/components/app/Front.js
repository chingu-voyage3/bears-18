import React from 'react';
import Header from './Header'
import Upsection from './upSection'
import { connect } from 'react-redux'


class Front extends React.Component {
    
    
    render() {
        return (
            <div>
            <Header/>
            <Upsection/>
            </div>
        )
    }
}

Front = connect()(Front)
export default Front;