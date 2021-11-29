import './_reset.scss';
import './App.scss';
import Header from './components/Header';
import About from './components/About';
import FindInput from './components/FindInput';
import Offer from './components/Offer'
import ProductModal from './components/ProductModal'
import { useState, useEffect } from 'react';

function App() {
	const [tagInput, setTagInput] = useState([]);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		window.addEventListener('keydown', (e) => {
			if (e.code === 'Escape' && isVisible === false) {
				
				setIsVisible(false)
			}
		})
	})

	return (
		<div className="content-wrapper">
			<Header/>
			<main id="main">
				<About/>
				<FindInput
				tagInput={tagInput}
				setTagInput={setTagInput}/>
				<Offer 
				isVisible={isVisible}
				setIsVisible={setIsVisible}
				tagInput={tagInput}/>
			</main>
		</div>
	);
}

export default App;
