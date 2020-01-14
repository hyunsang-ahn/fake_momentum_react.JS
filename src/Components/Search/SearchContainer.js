import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends Component {
  state = {
    value: "",
    isOpen: false
  };
  handleSubmit = e => {
    e.preventDefault();
    // 현재 입력된 value값이 쿼리문에 담긴 url 주소로 리다이렉트
    window.location.href = `https://www.google.com/search?q=${this.state.value}&PC=ATMM&FORM=MMXT01`; // google 검색
  };
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  searchButton = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    const { value, isOpen } = this.state;
    return (
      <SearchPresenter
        value={value}
        isOpen={isOpen}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        searchButton={this.searchButton}
      />
    );
  }
}

export default SearchContainer;
