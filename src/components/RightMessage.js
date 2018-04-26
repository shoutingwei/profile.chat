import React from 'react';
import ReactDOM from 'react-dom';
import './RightMessage.css';


class RightMessage extends React.Component{
	render (){
		return (<div className="right-message-container">
					<div className="right-message">
						{this.props.message}
					</div>
				</div>);
		};
	}


export default RightMessage;