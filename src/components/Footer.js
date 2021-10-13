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
        console.log(this.state);

        setTimeout(() => {
            this.setState=({showFooter: false});
        } , 25000);

        
    }

    render() {

     return this.state.showFooter && <Message text='All right reserved &copy' />

    }
    //ako this.state.showFooter == true pokaji Message
    // ako e falsi nqma da go pokaje
}


export default Footer;