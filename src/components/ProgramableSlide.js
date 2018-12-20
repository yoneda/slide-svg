import React from "react";
import styles from "./ProgramableSlide.module.css";

class ProgramableSlide extends React.Component{
  constructor(props){
    super(props);
    this.state = {localCode: this.props.code};
    this.codeUpdateHandler = this.codeUpdateHandler.bind(this);
    console.log("初期化初期化");
  }
  componentWillUpdate(nextprops){
    /*
    if(this.state.localCode !== nextprops.code){
      this.setState({localCode:nextprops.code});
    }*/
  }
  codeUpdateHandler(event){
    const newCode = event.target.value;
    console.log("newCode");
    console.log(newCode);
    this.setState({localCode:newCode});
  }
  render(){
    return (
      <div>
        <textarea spellcheck="false" value={this.state.localCode} onChange={this.codeUpdateHandler} className={styles.EditBox}></textarea>
        <div className={styles.PreviewBox}>
        <div dangerouslySetInnerHTML={{ __html: this.state.localCode }}></div>
        </div>
      </div>
    );
  }
};

export default ProgramableSlide;
