import React,{Component} from 'react'

export default class CommentInput extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            content:''
        }
    }

    handleUserNameChange(s,e){
        this.setState({
            username:e.target.value
        })
        console.log(s);
    }

    handleContentChange(e){
        this.setState({
            content:e.target.value
        })
    }

    componentWillMount(){
        this._loadUsername();
    }

    _loadUsername(){
        const username=localStorage.getItem('username');
        if(username){
            this.setState({username})
        }
    }

    _saveUsername(username){
        localStorage.setItem('username',username)
    }

    handleUsernameBlur(event){
        this._saveUsername(event.target.value);
    }

    componentDidMount(){
        this.textarea.focus()
    }

    handleSubmit(){
        if(this.props.onSubmit){
            this.props.onSubmit({
                username:this.state.username,
                content:this.state.content,
                createdTime:+new Date()
            })
        }
        this.setState({content:''})
    }

    render(){
        return(
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input onBlur={this.handleUsernameBlur.bind(this)} value={this.state.username} onChange={this.handleUserNameChange.bind(this,2)}></input>
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea value={this.state.content} onChange={this.handleContentChange.bind(this)} ref={(textarea)=>this.textarea=textarea}></textarea>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}