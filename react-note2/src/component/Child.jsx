import React, { Component } from 'react';
import './Child.css'

class Child extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
        
    }
componentDidMount() {
    console.log('pore:',this.props)
   
    // this.props.map((item,index) => {
    //     console.log('item:', item)
    // })
}
    render() { 
        return (  
            <div className="DetailWrapper">
                <div className="left">
                    <div className="texterea">{this.props.content.textarea}</div>
                    <div className="select">{this.props.content.select}</div> 
                </div>
                <div className="right">
                    <div className="price2">{this.props.content.userName}元</div>
                    <div className="dateTime">{this.props.content.dateTime}</div>      
                </div>
               
            </div>
        );
    }
}
 
export default Child;