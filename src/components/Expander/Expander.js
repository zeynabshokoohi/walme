import React from "react";

class Expander extends React.Component {
  state = {
    show: false
  };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { show } = this.state;
    const { hideText, showText, children } = this.props;

    return (
      <div className="ExpanderContainer">
        <div onClick={this.toggleShow} className="Expander">
          <h2>{show ? hideText : showText}</h2>
          <h1>{show ? "-" : "+"}</h1>
        </div>
        {show ? children : null}
      </div>
    );
  }
}

export default Expander;