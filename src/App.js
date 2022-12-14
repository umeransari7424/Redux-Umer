import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import HomeContainer from './Container/HomeContainer';
import HeaderContainer from './Container/HeaderContainer';

// import Counter from './Components/Elements/Counter';

function App() {
  return (
    <div>
      {/* <Counter/> */}
      <HeaderContainer/>
      <HomeContainer/>
      
    </div>
  );
}

export default App;
