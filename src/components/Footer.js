import { Component } from "react";
import Message from "./Message";

import refreshComponent from "../hoc/refreshCOmponent";

class Footer extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   showFooter: true,
    // };
  }
//izpalnqvase samo vednaj componentDidMount
//   componentDidMount() {
//     izpalnqva se sled kato se zakrepi za darvoto
//     console.log(
//       "footerMOUNT zakrepq go za dom darvoto reaktjs koeto e kopie na dom darvoto"
//     );

    // setTimeout(() => {
    //   this.setState({ showFooter: false });
    // }, 25000);
//   }

  render() {
    //return this.state.showFooter && <Message text="All right reserved &copy" />;
    //ako this.state.showFooter == true pokaji Message
    // ako e falsi nqma da go pokaje
   console.log(this.props.refreshCount)
    return (this.props.refreshCount < 1) && <Message text="All right reserved &copy" />;

  //ako e 0 nqma da go pokaje kato stane edno shtgo pokaje

  }
}

export default refreshComponent(Footer);
