import { Component  } from 'react'
import Message from "./Message"

class Footer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showFooter: true
        };
    }



    componentDidMount() {
        //izpalnqva se sled kato se zakrepi za darvoto
        console.log("MOUNT zakrepq go za dom darvoto reaktjs koeto e kopie na dom darvoto")

       setTimeout(() => {
             
        this.setState({showFooter:false})
        }, 1000)
    }

    render() {

     return this.state.showFooter && <Message text='All right reserved &copy' />

    }
    //ako this.state.showFooter == true pokaji Message
    // ako e falsi nqma da go pokaje
}


export default Footer;