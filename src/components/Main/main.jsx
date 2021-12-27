import React from 'react';
import ReactDOM from 'react-dom';
import Row from '../Row/Row'

/* title={this.state.information2.title} data={this.state.information2.elements} */
function Main(props) {
    
    return (
        <div className="main-container" >
            <div className='distribution'>
                <Row/>
                <Row/>
                <Row/>  
            </div>
        </div>
    )
}
export default Main
