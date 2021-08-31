
import './App.css';
import CenteredCard from './components/CenteredCard/CenteredCard';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <CenteredCard>Children1</CenteredCard>
          <CenteredCard children='Children 2'/>
          <CenteredCard children='Children 3'/>
        </section>
       
      </header>
    </div>
  );
}

export default App;
