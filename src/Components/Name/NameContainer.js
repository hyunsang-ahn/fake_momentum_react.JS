import React, { Component } from "react";
import NamePresenter from "./NamePresenter";

class NameContainer extends Component {
  state = {
    value: ""
  };
  handleChange = e => {
    this.setState({
      value: e.target.value
      //현재 input 값을 가져오는 작업입니다.
    });
  };
  handleSubmit = e => {
    e.preventDefault(); // 새로고침시에 onsubmit의 기본 이벤트를 방지함
    const { value } = this.state;
    this.props.saveName(value);
  };
  render() {
    const { value } = this.state;
    //Presenter에 prop값을 전달한다.
    return (
      <NamePresenter
        value={value}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default NameContainer;
