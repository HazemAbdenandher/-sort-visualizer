import { useState } from "react";
import Main from "./components/Main";
import SideBar from "./components/SideBar";


function App() {

  const [selectedSort, setSelectedSort] = useState(null)
  
  return (
    <div className="App">
      <SideBar setSelectedSort={setSelectedSort} />
      {selectedSort && <Main selectedSort={selectedSort} />}
    </div>
  );
}

export default App;
