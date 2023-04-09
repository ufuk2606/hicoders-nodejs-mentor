import Navbar from "./components/Navbar";
import Home from "./pages/Home";



const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar />
       <Home/> 

      </div>
    </div>
  );
};

export default App;
