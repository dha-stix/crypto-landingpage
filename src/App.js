import Header from "./components/Header";
import Nav from "./components/Nav";
import ChooseUs from "./components/ChooseUs";
import ReferEarn from "./components/ReferEarn";
import WorkWithUs from "./components/WorkWithUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-green-900">
      <Nav/>
      <Header/>
      <WorkWithUs/>
      <ReferEarn/>
      <ChooseUs/>
      <Footer/>
    </div>
  );
}

export default App;
