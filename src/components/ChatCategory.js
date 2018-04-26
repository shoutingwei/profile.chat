import React from 'react';
import ReactDOM from 'react-dom';
import './ChatCategory.css';

class ChatCategory extends React.Component{
	constructor(props){
		super(props);
		this.state={
			categorys: ["Education", "Habbits", "Reading", "Career", "Photos", "About"],
			isActive: props.isActive || false
		}
		this.handleClose=this.handleClose.bind(this);
		this.handlePopHint=this.handlePopHint.bind(this);
	}

	handleClose(event){
		this.props.onCloseChatCategory();
	}

	handlePopHint(event){
		this.props.onClickCategoryTag(event);
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			isActive: nextProps.isActive
		});
	}

	render(){
		let items = this.state.categorys.map((item)=>{
			return (<div className="chat-category-content-tag" onClick={this.handlePopHint}>{item}</div>);
		});
		return (<div className={(this.state.isActive?"chat-category-active ":"") + "chat-category"}>
					<div className="chat-category-header">
						<div>Say something...</div><div onClick={this.handleClose}>X</div>
					</div>
					<div className="chat-category-content">{items}</div>
				</div>);
	}
}


export default ChatCategory;