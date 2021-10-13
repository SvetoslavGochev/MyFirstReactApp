import { Component  } from 'react'


class Message extends Component {

    constructor(props) {
        super(props)
        console.log('1.Constructor')


        this.state = {
         company: 'Softuni'
        }
    }

    componentDidMount(){
        console.log("MOUNT zakrepq go za dom darvoto reaktjs koeto e kopie na dom darvoto")

       setTimeout(() => {
             
         console.log(this)
        }, 1000)
    }

    compot(){
        console.log('KOMPOT ot ')
    }

    render() {
        this.compot()
        console.log('2.render')
         return <span>{this.props.text} | {this.state.company}</span>
    }
}


export default Message;