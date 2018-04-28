import React from 'react';
import ReactDOM from 'react-dom';
import './HintPop.css';

class HintPop extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			Education : [{code: "EDU_MAJOR", msg: "What's your major?"}, {code: "EDU_GRAD", msg: "Where did you graduate?"}] , 
			Habbits:[{code: "HBT_AFTERWORK", msg: "What do you do after work?"}, {code: "HBT_HBT", msg: "What's your habbit?"}, {code: "HBT_SPORTS", msg: "What sport do you like best?"}] , 
			Reading: [{code: "RDG_WHICH", msg: "Do you like paper book or ebook?"}, {code: "RDG_BOOK", msg: "Your favorite book is?"}] ,
			Career: [{code: "CR_CR", msg: "What's your job?"}] ,
			Photos: [{code: "PHT_MY", msg: "What do you look like?"}] ,
			About: [{code: "OTH_WEB", msg: "How can learn more things about you?"}, {code: "OTH_NOTING", msg: "I have noting to say."}, {code: "OTH_BYE", msg: "I have to go now, bye!"}] 
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
				return <div className="hint-pop-line" onClick={this.props.onClickHint}>{item["msg"]}</div>;
			});
		}
		return (<div className={(this.state.isActive?"hint-pop-container-active ": "")+"hint-pop-container"}>

						<div className="hint-pop-header">
							<div>Say something...</div><div onClick={this.handleClose}>X</div>
						</div>
						<div className="hint-pop-content">{hints}</div>

				</div>);
	}
}





export default HintPop;