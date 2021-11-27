import './App.scss';
import Header from './components/Header';
import About from './components/About';
import FindInput from './components/FindInput/FindInput';

function App() {
  return (
	<div className="content-wrapper">
		<Header/>
		<main id="main">
			<About/>
			<FindInput/>
		</main>
	</div>
  );
}

export default App;
