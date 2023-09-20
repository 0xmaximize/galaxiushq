import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { cardsLinks } from "../constants";
import { fadeIn } from "../utils/motion";

const About = () => {
  return (
    <div className="">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-90%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-14">
          {cardsLinks.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={fadeIn("up", "tween", 0.2, 0.4)}
      key={card.id}
      className="group relative rounded-3xl w-[400px] h-[360px] md:h-[450px] md:w-[450px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          backgroundImage: hovered
            ? `url(${card.hoverUrl})` // Change to hover background image
            : `url(${card.url})`, // Default background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.3s ease", // Add a transition effect
        }}
        className="absolute inset-0 z-0"
      />

      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 rounded-xl text-3xl font-black text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </motion.div>
  );
};

export default About;
