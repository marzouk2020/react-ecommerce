
import Navbar from "./combonants/Navbar";
import Productslist from "./combonants/Productslist";
import Slider from "./combonants/Slider" ;
import {Routes, Route} from "react-router-dom";
import About from "./combonants/About";
import ProductDetails from "./combonants/ProductDetails";


function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route 
              path="/" 
              element={
              <>
                <Slider />
                <Productslist />
            </>
          }
        />

        <Route path="about" element={<About/>}/>
        <Route path="product/:productId" element={<ProductDetails/>}/>
        </Routes>
    </div>
  );
}

export default App;