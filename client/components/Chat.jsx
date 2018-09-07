import React from 'react'
import io from 'socket.io-client'

class ChatApp extends React.Component {
    constructor(props) {
        super(props)

        let url = process.env.NODE_ENV == 'production' ? 'https://foxy-news.herokuapp.com' : 'http://localhost:3000'

        this.state = {
            currentMessage: '',
            messages: [],
            socket: io(url)
        }

        this.submitMessage = this.submitMessage.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.setUpSockets = this.setUpSockets.bind(this)
        this.handleMessage = this.handleMessage.bind(this)

    }

    componentDidMount() {
        this.setUpSockets()

    }

    // setUpSockets() {
    //     let self = this
    //     this.state.socket.on('receive-message', function (msg) {
    //         let messages = self.state.messages;
    //         messages.push(msg);
    //         self.setState({ messages: messages });
    //     })
    // }

    setUpSockets() {
        this.state.socket.on('receive-message', this.handleMessage)
    }

    handleMessage(message) {
        let messages = this.state.messages;
        messages.push(message);
        this.setState({ messages: messages });
    }

    handleChange(e) {
        let currentMessage = e.target.value
        this.setState({currentMessage: currentMessage})
    }

    submitMessage(e) {
        e.preventDefault()
        this.state.socket.emit('new-message', this.state.currentMessage)
        this.setState({currentMessage: ""})
    }

    renderMessages() {
        return this.state.messages.map(function (msg) {
            return (
                <li>{msg}</li>
            );
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderMessages()}
                </ul>
                <form  onSubmit={this.submitMessage}><input id="message" type="text" value={this.state.currentMessage} onChange={this.handleChange}/><input type='submit'/></form>
            </div>
        )
    }
}

export default ChatApp;