import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: null,
    };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();

    let age = this.state.age;

    if (!Number(age)) {
      alert("Age is incorrect");
    }
  };

  myChangeHandler = (event) => {
    let name = event.target.name;
    let val = event.target.value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>
          Hi! My Name Is {this.state.username} and I Am {this.state.age} Years
          Old
        </h1>
        <p>Enter Your Name: </p>
        <input type="text" name="username" onChange={this.myChangeHandler} />
        <p>Enter Your Age:</p>
        <input type="text" name="age" onChange={this.myChangeHandler} />
        <br />
        <br />
        <input type="submit" />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById("root"));
