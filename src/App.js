import logo from './logo.svg';
import './App.css';
import pokemon from 'pokemontcgsdk';
import card from 'pokemontcgsdk/es/queryBuilder';
pokemon.configure({apiKey: '6ba0faa6-c888-4290-ab79-7c1813b1c68e'});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
pokemon.card.find('base1-4')
.then(card = {
console.log(card.name)
})
    </div>
  );
}

export default App;
