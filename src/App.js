import './_reset.scss';
import './App.scss';
import Header from './components/Header';
import About from './components/About';
import FindInput from './components/FindInput/FindInput';
import { useState } from 'react';

function App() {
	const [tagInput, setTagInput] = useState([]);

	return (
		<div className="content-wrapper">
			<Header/>
			<main id="main">
				<About/>
				<FindInput
				tagInput={tagInput}
				setTagInput={setTagInput}/>
			</main>
		</div>
	);
}

export default App;
