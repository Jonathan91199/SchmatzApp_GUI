import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import BackGround from './Components/Background/Background'
import MainWindow from './Components/MainWindow/MainWindow'

function App() {
  return (
    <div className="App">
      <BackGround />
      <MainWindow />
    </div>
  );
}

export default App;
