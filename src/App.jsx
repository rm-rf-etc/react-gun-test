import './App.css';
import React from 'react';
import { bind } from 'react-gun';
// import './helpers/gun';

window.print = (s) => console.log(s);

class ClassComponent extends React.Component {

    static boundProps = ['counter'];

    render() {
		const {
			'@state': { counter = 0 },
			'@methods': { increment, decrement },
		} = this.props;

        return (
			<>
				<div className="col">
					<button onClick={increment}>Increment</button>
					<button onClick={decrement}>Decrement</button>
				</div>
				<div className="col">
					<p>{counter}</p>
				</div>
			</>
        );
    }
}

const FunctionalComponent = ({
	'@state': { counter = 0 },
	'@methods': { increment, decrement },
}) => (
	<>
		<div className="col">
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
		<div className="col">
			<p>{counter}</p>
		</div>
	</>
);

const methods = (getState, { put }) => ({
	increment: () => put('counter', getState().counter + 1),
	decrement: () => put('counter', getState().counter - 1),
});
export const Main1 = bind('counter_1', methods)(FunctionalComponent);
export const Main2 = bind('counter_2', methods)(ClassComponent);
