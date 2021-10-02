import React, { Component } from 'react';
import { is, fromJS } from 'immutable';
import ReactDOM from 'react-dom';

 
 
let defaultState = {
  alertStatus:false,
  alertTip:"Test",
  closeAlert:function(){}
}
 
class Alert extends Component{
 
  state = {
    ...defaultState
  };
  // css动画组件设置为目标组件
  FirstChild = props => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
  }
  // 关闭弹框
  confirm = () => {
    this.setState({
      alertStatus:false
    })
    this.state.closeAlert();
  }
  open =(options)=>{
    options = options || {};
    options.alertStatus = true;
    this.setState({
      ...defaultState,
      ...options
    })
  }
  close(){
    this.state.closeAlert();
    this.setState({
      ...defaultState
    })
  }
  shouldComponentUpdate(nextProps, nextState){
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }
   
  render(){
    return (

      <div className="bottom-alert">
        <div className={`alert alert-primary ${this.state.alertStatus ? 'visible' : 'invisible'}`} role="alert" >
          <div className="alert-context">
            <div className="alert-content-detail">{this.state.alertTip}</div>
            <div className="comfirm alert-link" onClick={this.confirm}>Back</div>
          </div>
        </div>
      </div>

    );
  }
}
 
let div = document.createElement('div');
let props = {
   
};
document.body.appendChild(div);
 
let Box = ReactDOM.render(React.createElement(
  Alert,
  props
),div);
 
 
 
export default Box;