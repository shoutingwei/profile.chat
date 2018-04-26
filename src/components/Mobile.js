import React from 'react';
import ReactDOM from 'react-dom';
import LeftMessage from './LeftMessage.js';
import RightMessage from './RightMessage.js';
import ChatCategory from './ChatCategory.js';
import HintPop from './HintPop.js';
import './Mobile.css';

class Mobile extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleChatCategoryClose =  this.handleChatCategoryClose.bind(this);
		this.handleHintSelected = this.handleHintSelected.bind(this);
		this.handleCategoryTag = this.handleCategoryTag.bind(this);
		this.handleHintPopClose = this.handleHintPopClose.bind(this);
		this.state={
			isPopCategory: false,
			isPopHint: false,
			hintKey: null
		}
	}

	handleClick(event){
		this.setState({
			isPopCategory: !this.state.isPopCategory
		});
	}

	handleChatCategoryClose(event){
		this.setState({
			isPopCategory: false
		});
	}

	handleHintSelected(event){
		console.log(event.target.value);
		this.setState({
			isPopHint: false
		});
	}

	handleCategoryTag(event){
		this.setState({
			isPopCategory: false,
			isPopHint: true,
			hintKey: event.target.innerText
		});
	}

	handleHintPopClose(event){
		this.setState({
			isPopHint:false,
			hintKey: null
		})
	}

	render(){
		return (<div className="mobile">
			<div className="mobile-header"><span>Talking to Shouting</span></div>
			<div className="mobile-content">
				<LeftMessage/>
				<RightMessage/>
			</div>
			<div className="mobile-footer" onClick={this.handleClick}><span>Say something...</span></div>
			<ChatCategory isActive={this.state.isPopCategory} onClickCategoryTag={this.handleCategoryTag} onCloseChatCategory={this.handleChatCategoryClose}/>
			<HintPop isActive={this.state.isPopHint} onSelectHint={this.handleHintSelected} hintKey={this.state.hintKey} onCloseHintPop={this.handleHintPopClose}/>
			</div>);
	} 
}
export default Mobile;