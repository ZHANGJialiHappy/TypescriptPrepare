import './App.css';
import {Person} from "./components/Person";

function App() {
  return (
    <div className="App">
    <Person 
    name="Jiali" 
    email="zhangjiali86@gmail.com"
    age={18}
    ismarried={true}
    friends ={[123,234,456]}
    />
    </div>
  );
}

export default App;
