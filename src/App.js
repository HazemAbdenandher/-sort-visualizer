import { useEffect, useState } from "react";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import * as tools from "./functions/Tools";

function App() {
  const [selectedSort, setSelectedSort] = useState(null);
  const [speed, setSpeed] = useState(1000);
  useEffect(() => {
    if (selectedSort) {
      tools.createGraph();
    }
  }, [selectedSort]);
  return (
    <div className="App">
      <SideBar setSelectedSort={setSelectedSort} setSpeed={setSpeed} />
      {selectedSort && <Main selectedSort={selectedSort} speed={speed} />}
    </div>
  );
}

export default App;
