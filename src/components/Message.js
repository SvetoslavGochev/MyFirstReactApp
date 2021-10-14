import { Component  } from 'react'
import reactDom from 'react-dom'
import './Message.css' 

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
        //inlinecss
        // let style ={
        //   color:'pink',
        //  fontSize: 44,
        // };
        // if(true){
        //     style.textDecoration = 'underline'
        // }
        //dinamic classes
//      let classes = ['default-class'];
//   if(true)
//   {
//       classes.push('selected-book');
//   }

        
        console.log('2.render')
         return <span className="footer-message">{this.props.text} | {this.state.company}</span>
         //return <span className={classes.join(' ')}>{this.props.text} | {this.state.company}</span>
        //  return <span style={style}>{this.props.text} | {this.state.company}</span>
         //return <span style={{color:'pink', fontSize: 44}}>{this.props.text} | {this.state.company}</span>
    }
}


export default Message;