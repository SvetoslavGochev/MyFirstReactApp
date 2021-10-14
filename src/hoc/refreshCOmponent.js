import { Component } from "react";


function refreshComponent(WrappedComponent) {

    //moje da se varne anoniment class
  return  class  extends Component {
        constructor(props){
            super(props);
            this.state ={
                refreshCount: 0
            }
        }
    
//izpalnqvase samo vednaj componentDidMount
        componentDidMount() {
            setTimeout(() => {
               this.setState({refreshCount: this.refreshCount +1})
            } , 2000)
        }

//podavame props da ne gi izgubim shte gi dade na wraped component
//kakvito i props da imame shte gi podadem na dolu po verigasta
        render() {
            return <WrappedComponent {... this.props}/>;
        }
    }
}
export default refreshComponent;
