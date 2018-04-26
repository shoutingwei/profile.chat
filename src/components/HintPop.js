import React from 'react';
import ReactDOM from 'react-dom';
import './HintPop.css';

class HintPop extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			Education : [ "What's your major?", "Where did you graduate?" ] , Habbits :[], Reading: [], Career: [], Photos: [], About: []
		}
		this.handleClose = this.handleClose.bind(this);
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			isActive: nextProps.isActive
		});
	}
	handleClose(event){
		this.props.onCloseHintPop(event);
	}

	render(){
		let hints = [];
		if(this.props.hintKey){
			hints = this.state[this.props.hintKey].map((item) =>{
				return <div className="hint-pop-line">{item}</div>;
			});
		}
		return (<div className={(this.state.isActive?"hint-pop-container-active ": "")+"hint-pop-container"}>
					<div className="hint-pop-wrapper">
						<div className="hint-pop-header">
							<div>Say something...</div><div onClick={this.handleClose}>X</div>
						</div>
						<div className="hint-pop-content">{hints}</div>
					</div>
				</div>);
	}
}





export default HintPop;