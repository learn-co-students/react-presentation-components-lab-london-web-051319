import React from 'react';

class SimpleComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      mood: 'happy',
    }
  }

  handeClick = () => {
    let { mood } = this.state;
    if (mood === 'happy') this.setState({ mood: 'sad'});
    if (mood === 'sad') this.setState({ mood: 'happy'});
  }

  render() {
    return <div onClick={this.handeClick}>{ this.state.mood }</div>;
  }
}

export default SimpleComponent;
