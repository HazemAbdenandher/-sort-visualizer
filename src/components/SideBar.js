import { motion } from "framer-motion";

const SideBar = ({ setSelectedSort, setSpeed, setSize }) => {
  const sortType = (sort) => {
    document.getElementById("speed").disabled = false;
    setSelectedSort(sort);
  };
  const SideBarVariants = {
    hidden: {
      y: "-100vh",
    },
    visible: {
      y: 0,
      transition: { delay: 1 },
    },
  };
  return (
    <motion.div
      variants={SideBarVariants}
      initial="hidden"
      animate="visible"
      className="side-bar"
    >
      <h2 className="title">SEARCHING ALGORIHMS VISUALISATION</h2>
     
      <div className="sorts">
        <h3>SORTS:</h3>
        <h4 className="set-sort" onClick={() => sortType("Selection Sort")}>
          &#8226;Selection Sort
        </h4>
        <h4 className="set-sort" onClick={() => sortType("Bubble Sort")}>
          &#8226;Bubble Sort
        </h4>
        <h4 className="set-sort" onClick={() => sortType("Insertion Sort")}>
          &#8226;Insertion Sort
        </h4>
      </div>
      <div className="settings">
        <div className="speed">
          <h3>SIZE:</h3>
          <select
            className="box"
            name="size"
            id="size"
            onChange={(e) => {
              setSize(parseInt(e.target.value));
              document.getElementById("speed").disabled = false;
            }}
            defaultValue="15"
          >
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className="speed">
          <h3>SPEED:</h3>
          <select
            className="box"
            name="speed"
            id="speed"
            onChange={(e) => {
              setSpeed(parseInt(e.target.value));
            }}
            defaultValue="1000"
          >
            <option value="2000">0.5x</option>
            <option value="1000">1x</option>
            <option value="500">2x</option>
          </select>
        </div>
        <div className="footer">
        <p>Made With <span>💖</span> By <a href="https://github.com/c-yrus/" target="noreferrer _blank" className="credits">Hazem Abdennadher</a></p>
        </div>
        {/*test*/}
        
      </div>
    </motion.div>
  );
};

export default SideBar;
