import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import { DataInitializer } from 'react-gun';
import { Main1, Main2 } from './App';


const App = () => (
	<DataInitializer root="@pp">
		<Main1 />
		<Main2 />
	</DataInitializer>
);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
