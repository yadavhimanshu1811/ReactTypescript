import { Component } from "react";
import Button from "../../Components/Button";

interface WeatherAppProps {
  welcomeMsg: string;
}

class WeatherApp extends Component<WeatherAppProps> {
  state = {
    name: "Himanshu",
    counter: 0
  };

  IncreaseCounter = () => {
    this.setState({counter: this.state.counter + 1})
  }
  render() {
    const { welcomeMsg } = this.props;
    return (
      <div>
        <div>{`Hello Mr. ${this.state.name}, ${welcomeMsg}`}</div>
        <Button text="Add counter" className="btn btn-primary" onButtonClick={this.IncreaseCounter}/>
        {this.state.counter}
      </div>
    );
  }
}

export default WeatherApp;
