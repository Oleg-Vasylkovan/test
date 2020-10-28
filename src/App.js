import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I haven't delete this logo coz i feel it like it's nice to have it and makes my to do list look pretty LOL</p>
        <h1>
          Hello Dojo!
        </h1>
        <p>Things i need to do:</p>
        <ul style={{listStyleType:"square"}}>
          <li>Learn React</li>
          <li>Climb Mt.Everest</li>
          <li>Run a marathon</li>
          <li>Feed a dogs</li>
        </ul>
        
      </header>
    </div>
  );
}

export default App;
