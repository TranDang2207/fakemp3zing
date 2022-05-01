import "./App.css";
import Navigate from "./components/navigation/Navigate";
import Content from "./components/Content";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

function App() {
  library.add(fas);
  return (
    <div className="App grid grid-cols-6 h-[100vh]">
      <Navigate />
      <Content />
    </div>
  );
}

export default App;
