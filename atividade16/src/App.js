
import './App.css';
import CenteredCard from './components/CenteredCard/CenteredCard';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <CenteredCard><h1>Children1</h1></CenteredCard>
          <CenteredCard children={<h1>Children 2</h1>}/>
          <CenteredCard><h1>Children 3</h1></CenteredCard>
        </section>
       
      </header>
    </div>
  );
}

export default App;
