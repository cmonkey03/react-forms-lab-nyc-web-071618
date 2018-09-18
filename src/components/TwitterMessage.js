import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }


  setText = (inputText) => {
    this.setState({
      text: inputText
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={(event) => this.setText(event.target.value)} value={this.state.text}/>
        {this.props.maxChars-this.state.text.length}
      </div>
    );
  }
}

export default TwitterMessage;
