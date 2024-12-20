// # USE APP1
import React from 'react';

class ImageChange2 extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "/Images/React.png"
    };
  }

  changeToJs = () => {
    this.setState({
      message: "/Images/JS.png"
    });
  }

  changeToHtml = () => {
    this.setState({
        message: "/Image/HTML.png"
    });
  }

  changeToCss = () => {
    this.setState({
        message: "Image/CSS.jpg"
    });
  }

  render() {
    return (
      <>
        <img src={this.state.message} alt="Image"/>
        <br/><br/> 
        <button onClick={this.changeToJs}>Click Here to Change Image to JS</button>
        <br/><br/>
        <button onClick={this.changeToHtml}>Click Here to Change Image to HTML</button>
        <br/><br/>
        <button onClick={this.changeToCss}>Click Here to Change Image to CSS</button>
      </>
    );
  }
}

export default ImageChange2;
