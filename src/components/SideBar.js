import { motion } from "framer-motion";

const SideBar = ({ setSelectedSort, setSpeed }) => {
  const sortType = (sort) => {
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
      <h2>SEARCHING ALGORIHMS VISUALISATION</h2>
      <div className="sorts">
        <motion.h4
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="set-sort"
          onClick={() => sortType("Selection Sort")}
        >
          Selection Sort
        </motion.h4>
        <motion.h4 className="set-sort" onClick={() => sortType("Bubble Sort")}>
          Bubble Sort
        </motion.h4>
        <motion.h4
          className="set-sort"
          onClick={() => sortType("Insertion Sort")}
        >
          Insertion Sort
        </motion.h4>
      </div>
      <div className="speed">
        <h2>SPEED:</h2>
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
    </motion.div>
  );
};

export default SideBar;
