import './App.css';
import VATCalculator from './Components/VATCalculator';


function App() {
  return (
    <div className="App">
      <header>
        <h1>UK Item Tax Calculator</h1>
        <p>Understand the true cost of your purchases</p>
      </header>
      <main>
        <VATCalculator />
        {/* ADD MORE COMPONENTS HERE AS NEEDED */}
        </main>
    </div>
  );
}

export default App;
