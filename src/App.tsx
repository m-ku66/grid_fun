import { motion } from "framer-motion";

function App() {
  const BOX_SIZE = 60; // px per box
  const cols = Math.ceil(window.innerWidth / BOX_SIZE);
  const rows = Math.ceil(window.innerHeight / BOX_SIZE);
  const totalBoxes = cols * rows;

  const items = Array.from({ length: totalBoxes }, (_, i) => i + 1);

  return (
    <div
      className="grid w-screen h-screen overflow-hidden"
      style={{
        gridTemplateColumns: `repeat(${cols}, ${BOX_SIZE}px)`,
        gridTemplateRows: `repeat(${rows}, ${BOX_SIZE}px)`,
      }}
    >
      {items.map((item) => (
        <motion.div
          key={item}
          className="bg-neutral-800 flex items-center justify-center"
          animate={{
            borderRadius: "0%", // default state
            transition: {
              type: "spring",
              stiffness: 5, // looser spring = smoother return
              damping: 15,
            },
          }}
          whileHover={{
            borderRadius: "10%",
            scale: 0.95,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 12,
            },
          }}
          whileTap={{
            scale: 0.8,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 15,
            },
          }}
        />
      ))}
    </div>
  );
}

export default App;

/**
 * Ref video: https://www.youtube.com/watch?v=JYfiaSKeYhE
 */
