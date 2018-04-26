import React from 'react';
import ReactDOM from 'react-dom';
import './LeftMessage.css';

class LeftMessage extends React.Component{
	render (){
		return (<div className="left-message-container">
					<div className="left-message">
						Nice to meet you!
					</div>
				</div>);
		};
	}


export default LeftMessage;