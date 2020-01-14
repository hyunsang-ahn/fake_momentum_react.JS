import React, { Component } from "react";
import GlobalStyle from "./GlobalStyle";
// import Name from "./Name";
import NameContainer from "./Name";
import ClockContainer from "./Clock";

class App extends Component {
  state = {
    name: null
  };
  saveName = data => {
    this.setState({
      name: data
    });
    localStorage.setItem("MOMENTUM_NAME", data);
    //입력받은 데이터를 로칼 스토리지에 저장하는 작업
  };
  getName = () => {
    const name = localStorage.getItem("MOMENTUM_NAME");
    if (name !== null) {
      this.setState({ name });
    }
  };
  //로칼스토리지에서 이름 데이터를 가져오는 작업, 만약 이름이 null값이 아니라면 로칼 데이터에 있는 name 데이터가 state 값으로 변환
  componentDidMount() {
    this.getName();
  }
  //컴포넌트 mount전에 getName함수를 실행시킴
  render() {
    const { name } = this.state;
    return (
      <div>
        <GlobalStyle />
        {name === null ? <NameContainer saveName={this.saveName} /> : ""}
        {/*만약에 name 데이터가 null 이라면 NamePresenter 컴포넌트를 실행한다 그게 아니라면 name 값을 보여준다 */}
        <div>
          <ClockContainer name={name === null ? "" : name + ", "} />
        </div>
      </div>
    );
  }
}
export default App;
