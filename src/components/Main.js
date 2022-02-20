import { sortAlgorithms } from "../functions/Sorts";
import { motion } from "framer-motion";

const Main = ({ selectedSort, speed }) => {
  const mainVariants = {
    hidden: {
      x: "+100vw",
    },
    visible: {
      x: 0,
      type: "spring",
      stiffness: 50,
    },
  };
  var k,
    play = false;
  const sort = (selectedSort, speed) => {
    if (!k) {
      k = new sortAlgorithms(selectedSort, speed);
      k.start();
      k.sorting();
      play = true;
    } else {
      if (!play) {
        play = true;
        k.continue();
        k.sorting();
      }
    }
  };
  const pause = () => {
    if (k) {
      k.stop();
      play = false;
    }
  };
  return (
    <motion.div
      variants={mainVariants}
      initial="hidden"
      animate="visible"
      className="main"
    >
      <div className="graph" id="graph"></div>
      <div className="navigation">
        <h2 className="selected-sort">{selectedSort}</h2>
        <div className="icons">
          <button
            className="btn"
            onClick={() => {
              pause();
            }}
          >
            <i className="fas fa-pause icon"></i>
          </button>
          <button
            className="btn"
            onClick={() => {
              sort(selectedSort, speed);
            }}
          >
            <i className="fas fa-play icon"></i>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;