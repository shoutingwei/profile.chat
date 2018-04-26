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
			hintKey: null,
			chats: []
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
		let chats = this.state.chats;
		chats.push({
			from: "right",
			message: event.target.innerText
		});
		this.setState({
			isPopHint: false,
			chats: chats
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
		let tempChats = this.state.chats.map((item)=>{
			if(item["from"] === "left"){
				return <LeftMessage  message={item["message"]}/>
			}
			return <RightMessage  message={item["message"]}/>
		});

		return (<div className="mobile">
			<div className="mobile-header"><span>Talking to Shouting</span></div>
			<div className="mobile-content">
				<LeftMessage message="Nice to meet you!"/>
				<RightMessage message="Nice to meet you, too!"/>
				{tempChats}
			</div>
			<div className="mobile-footer" onClick={this.handleClick}><span>Say something...</span></div>
			<ChatCategory isActive={this.state.isPopCategory} onClickCategoryTag={this.handleCategoryTag} onCloseChatCategory={this.handleChatCategoryClose}/>
			<HintPop isActive={this.state.isPopHint} onSelectHint={this.handleHintSelected} hintKey={this.state.hintKey} onCloseHintPop={this.handleHintPopClose} onClickHint={this.handleHintSelected}/>
			</div>);
	} 
}
export default Mobile;