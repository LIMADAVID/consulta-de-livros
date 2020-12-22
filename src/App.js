import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

	const [book, setBook] = useState('');
	const [result, setResult] = useState([]);
	const [apiKey, setApiKey] = useState('AIzaSyB-3CNeTRvK0fvxnwnFj-Apor3A4d-d_AA');

	function handleChange(event) {
		const book = event.target.value;
		
		setBook(book);
	}

	function handleSubmit(event) {

	}

	return (
		<div className="Container">
			<h1>Book Search App</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<input type="text" onChange={handleChange} className="form-control mt-10" placeholder="Procurar livros" autoComplete="off" />

				</div>
				<button type="submit" className="btn btn-danger">Pesquisar</button>
			</form>
		</div>
	);
}

export default App;
