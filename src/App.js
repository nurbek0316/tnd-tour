
import Navbar from './components/nav';
import Landing from './components/landing';
import ScrollButton from "./components/scrollButton";

function App() {
  return (
    <div>
      <Navbar/>
      <Landing/>
        <ScrollButton/>
        {/*<h1 className="text-3xl font-bold flex justify-center">*/}
        {/*    Hello world!*/}
        {/*</h1>*/}
        <div className="mb-[300px]"></div>
    </div>
  );
}

export default App;
