import React from 'react';
import './Contact.css';

const Contact = props => {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar}/>
      <div className="status">
          <div className="name">{props.name}</div>
          <div>
            <div className="status-text">
              <span className={props.online ? 'status-online' : 'status-offline'}></span>{props.online ? 'online' : 'offline'}
            </div>
          </div>
      </div>
    </div>
  );
}


export default Contact;