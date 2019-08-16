import './App.css';
import React, { Component } from 'react';
import { bind } from 'react-gun';
import './helpers/gun';

window.print = (s) => console.log(s);

const incrementCount = (val, put) => (
	() => put('counter', val + 1)
);
const decrementCount = (val, put) => (
	() => put('counter', val - 1)
);

class ClassComponent extends Component {

    static boundProps = ['counter'];

    render() {
		const {
			'@state': { counter = 0 },
			'@methods': { put },
		} = this.props;

        return (
			<>
				<div className="col">
					<p>
						<button onClick={incrementCount(counter, put)}>Increment</button>
						<button onClick={decrementCount(counter, put)}>Decrement</button>
					</p>
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
        '@methods': { put },
    }) => (
	<>
		<div className="col">
			<p>
				<button onClick={incrementCount(counter, put)}>Increment</button>
				<button onClick={decrementCount(counter, put)}>Decrement</button>
			</p>
		</div>
		<div className="col">
			<p>{counter}</p>
		</div>
	</>
);

export const Main1 = bind('counter_1')(FunctionalComponent);
export const Main2 = bind('counter_2')(ClassComponent);
