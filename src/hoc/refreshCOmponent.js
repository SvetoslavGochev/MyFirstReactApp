import { Component } from "react";


function refreshComponent(WrappedComponent,time=2500 ) {

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
               this.setState({refreshCount: this.state.refreshCount +1})
            } , time)
        }

//podavame props da ne gi izgubim shte gi dade na wraped component
//kakvito i props da imame shte gi podadem na dolu po verigasta
        render() {

            console.log({...this.props})
            console.log(2)
            return <WrappedComponent {...this.props} refreshCount={this.state.refreshCount}/>;
        }
    }
}
export default refreshComponent;
