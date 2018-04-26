import React from 'react';
import ReactDOM from 'react-dom';
import './LeftMessage.css';

class LeftMessage extends React.Component{
	render (){
		return (<div className="left-message-container">
					<div className="left-message">
						{this.props.message}
					</div>
				</div>);
		};
	}


export default LeftMessage;