import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          online: false,
      };
      this.updateOnline= this.updateOnline.bind(this);
      }
  updateOnline(){
      this.setState({online: this.props.status ? true : false})

  }
  render(){
  return (
    <div className="Contact">
      <img className="avatar" src={this.props.avatar}/>
      <div className="status">
          <div className="name">{this.props.name}</div>
          <div>
            <div className="status-text">
            <span onClick = {this.updateOnline} className={this.state.online? 'status-online' :'status-offline'}></span>
            {this.state.online? 'online': 'offline'}
            </div>
          </div>
      </div>
    </div>
  );
}
}

export default Contact;