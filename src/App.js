import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import Card1 from "../src/images/card1.png"
import Card2 from "../src/images/weeding-photo.jpg"
import Card3 from "../src/images/mountain-bike.jpg"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card 
        img={Card1}
        rating = "5.0"
        rewiewCount = {6}
        country = "USA"
        title = "Life lessons with Katie Zaferes"
        price = "136"
      />
    </div>
  );
}

export default App;
