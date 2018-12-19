import React from "react";

class ProgramableSlide extends React.Component{
  constructor(props){
    super(props);
    this.state = {localCode: this.props.code};
    this.codeUpdateHandler = this.codeUpdateHandler.bind(this);
  }
  componentWillUpdate(nextprops){
    if(this.state.localCode !== nextprops.code){
      this.setState({localCode:nextprops.code});
    }
  }
  codeUpdateHandler(event){
    const newCode = event.target.value;
    this.setState({localCode:newCode});
  }
  render(){
    return (
      <div>
        <textarea value={this.state.localCode} onChange={this.codeUpdateHandler}></textarea>
        <div dangerouslySetInnerHTML={{ __html: this.state.localCode }}></div>
      </div>
    );
  }
};

export default ProgramableSlide;
