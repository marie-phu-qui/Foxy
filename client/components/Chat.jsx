import React from 'react'
import ReactDOM from 'react-dom'

class ChatApp extends React.Component({
    constructor(props){
        this.state = {
            message:[],
            socket: window.io('http://localhost:5000')
        }
        this.submitMessage = this.submitMessage.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
    },

    componentDidMount: function(){
        let self = this;
        this.state.socket.on('receive-message',function(msg){
            let messages = self.state.messages;
            messages.push(msg);
            self.setState({messages: messages});
    
        });
    },

    submitMessage: function(){
        let message = document.getElementById(message).value;
        this.state.socket.emit('new-message', message);
    },

    render: function(){
        
        let self = this

        let messages = self.state.messages.map(function(msg){
            return (
                <li>{msg}</li>
            ); 
        }.bind(this),);

      let self = this;

        return (
            <div>
                <ul>
                    {messages}
                </ul>
                <input id="message" type="text"/><button onClick={() => self.submitMessage()}></button>
            </div>
        )
    }
});
