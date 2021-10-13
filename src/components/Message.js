import { Component  } from 'react'


class Message extends Component {

    constructor(props) {
        super(props)
        console.log('Constructor')
    }

    componentDidMount(){
        console.log("zakrepq go za dom darvoto reaktjs koeto e kopie na dom darvoto")
    }

    render() {

        console.log('render')
         return <span>{this.props.text}</span>
    }
}


export default Message;