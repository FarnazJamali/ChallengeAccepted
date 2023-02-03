import React, { Component } from "react";
import Bar from "../Components/Bar";
import Input from "../Components/Input";

var zxcvbn = require("zxcvbn");
zxcvbn("Tr0ub4dour&3");

// const onPassChange = (e) => {
//   const password = e.target.value;
//   const evaluate = zxcvbn(password);
//   console.log(evaluate);
//   return evaluate
//   // this.setState({
//   //   password,
//   //   score: evaluate.score,
//   // });
// };

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
    };
  }

  render() {
    const { password, score, suggestions } = this.state;
    const evaluate = zxcvbn(password);
    const { strength } = this.props;
    
    console.log(strength, password, score, suggestions);
    return (
      <div>
        <p>Password Input</p>
        <Input
          type="password"
          value={password}
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <Bar
          bgColor={strength[evaluate.score].bgColor}
          height={4}
          width={evaluate.score * 175}
        />
        {!password ? (
          <p>Enter your password</p>
        ) : (
          <p>{strength[evaluate.score].text}</p>
        )}
        <p>{password && evaluate.feedback.suggestions}</p>
      </div>
    );
  }
}

export default Password;
