import './App.css';
import ItemTaxForm from './Components/ItemTaxForm';

function App() {
  return (
    <div className="App">
      <header>
        <h1>UK Item Tax Calculator</h1>
        <p>Understand the true cost of your purchases</p>
      </header>
      <main>
        <ItemTaxForm />  
      </main>
    </div>
  );
}

export default App;
