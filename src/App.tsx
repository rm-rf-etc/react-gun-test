import * as React from 'react';
import { gun, bind, SendProps, CommonChain } from 'react-gun';
// import * as helpers from './helpers/gun';


(window as any).print = (s: any) => console.log(s);

type ChainReference = typeof gun;

// Object.entries(helpers).forEach(([key, value]: [string, any]) => { (window as any)[key] = value });

const increment = (node: ChainReference) => (
    () => node.once((val: any = 0) => node.put(val + 1))
);

class ClassComponent extends React.Component<SendProps<CommonChain>> {

    boundProps = ['counter'];

    render() {
        const { $, state: { counter = 0 } } = this.props;
        return (
            <p>
                <button onClick={increment($.get('counter'))}>Increment</button>
                <span>{counter}</span>
            </p>
        );
    }
}

const FunctionalComponent: React.FC<SendProps> = ({ $, state: { counter = 0 } }) => (
    <p>
        <button onClick={increment($.get('counter'))}>Increment</button>
        <span>{counter}</span>
    </p>
);

export const Main1 = bind('counter/1')(FunctionalComponent);
export const Main2 = bind('counter/2')(ClassComponent);
