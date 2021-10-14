import { Component  } from 'react'


class Message extends Component {

    constructor(props) {
        super(props)
        console.log('1.Constructor')


        this.state = {
         company: 'Softuni'
        }
    }

    componentDidMount() {
        console.log("COMPONENT MOUNT zakrepq go za dom darvoto reaktjs koeto e kopie na dom darvoto")

       setTimeout(() => {
             
        this.setState({company:"softunix2"})
        }, 1000)
    }


    componentDidUpdate() { 
        console.log('componentUpdate  ')
    }

    componentWillUnmount() {
       console.log('unMount')
    }

    render() {
        
        
        console.log('2.render')
         return <span>{this.props.text} | {this.state.company}</span>
    }
}


export default Message;