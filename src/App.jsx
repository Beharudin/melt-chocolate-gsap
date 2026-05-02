import Header from "./components/Header";
import Hero from "./sections/Hero";
import Quality from "./sections/Quality";
import Taste from "./sections/Taste";
import SmoothScroll from "./SmoothScroll";

const App = () => {
  return (
    <>
      <SmoothScroll>
        <Header />
        <Hero />
        <Taste />
        <Quality />
        {/* <Parallax /> */}
        {/* <Footer /> */}
      </SmoothScroll>
    </>
  );
};

export default App;
