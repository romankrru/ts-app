import * as React from 'react';
import './Hello.css';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
};

export interface State {
    currentEnthusiasm: number;
}

class Hello extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {currentEnthusiasm: props.enthusiasmLevel || 1};
    }

    onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
    onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

    render() {
        if (this.state.currentEnthusiasm <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
              <div className="greeting">
                Hello {this.props.name + getExclamationMarks(this.state.currentEnthusiasm)}
              </div>
              <button onClick={this.onDecrement}>-</button>
              <button onClick={this.onIncrement}>+</button>
            </div>
          );
    }

    updateEnthusiasm(currentEnthusiasm: number) {
        this.setState({currentEnthusiasm: currentEnthusiasm});
    }
}

export default Hello;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}
