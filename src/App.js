import "./App.css";
import ClassCounter from "./component/ClassCounter";
// import FunctCounter from "./component/FunctCounter";
import Navbar from './component/Navbar';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <ClassCounter  />
      {/* <FunctCounter /> */}
    </div>
   );
  
}
export default App;