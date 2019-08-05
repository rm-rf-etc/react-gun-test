import React from 'react';
import gun from './data';
import bind from 'react-gun';
import * as helpers from './helpers/gun';


(window as any).print = (s: any) => console.log(s);

interface ReactGunBindProps {
    _root: ChainReference;
    [key: string]: any;
}

type ChainReference = typeof gun;

Object.entries(helpers).forEach(([key, value]: [string, any]) => { (window as any)[key] = value });

const increment = (node: ChainReference) => (
    () => node.once((val: any = 0) => node.put(val + 1))
);

const Main: React.FC<ReactGunBindProps> = ({ gun: { counter = 0, _root } }) => (
    <p>
        <button onClick={increment(_root.get('counter'))}>Increment</button>
        <span>{counter}</span>
    </p>
);

export default bind(gun.get('counter/1'))(Main);
