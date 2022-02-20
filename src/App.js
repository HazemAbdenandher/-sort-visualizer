import { useEffect, useState } from "react";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import * as tools from "./functions/Tools";

function App() {
  const [selectedSort, setSelectedSort] = useState(null);
  const [speed, setSpeed] = useState(1000);
  const [size, setSize] = useState(15);
  useEffect(() => {
    if (selectedSort) {
      tools.createGraph(size);
    }
  }, [selectedSort, size]);

  return (
    <div className="App">
      <SideBar
        setSelectedSort={setSelectedSort}
        setSpeed={setSpeed}
        setSize={setSize}
      />
      {selectedSort && <Main selectedSort={selectedSort} speed={speed} />}
    </div>
  );
}

export default App;
