import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import BackGround from './Components/Background/Background'
import Authentication from './Components/Authentication/Authentication'
function App() {
  return (
    <div className="App">
      <BackGround />
      <Authentication />
    </div>
  );
}

export default App;
