import React from "react";
import { motion } from "framer-motion";

// const transition = (OgComponent) => {
//   return () => {
//     <>
//       <OgComponent />
//       <motion.div
//         className="slide-in"
//         initial={{ scaleY: 0 }}
//         animate={{ scaleY: 0 }}
//         exit={{ scaleY: 1 }}
//         transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//       ></motion.div>
//       <motion.div
//         className="slide-out"
//         initial={{ scaleY: 1 }}
//         animate={{ scaleY: 0 }}
//         exit={{ scaleY: 0 }}
//         transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//       ></motion.div>
//     </>;
//   };
// };

// export default transition;

const withTransition = (OgComponent) => {
  const TransitionComponent = () => {
    return (
      <>
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <OgComponent />
        </motion.div>
      </>
    );
  };

  return TransitionComponent;
};

export default withTransition;
