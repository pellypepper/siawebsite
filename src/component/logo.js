import { motion } from "framer-motion";
import './navbar.css'
const Logo = () => {
  return (
    <div className="logo-wrapper flex justify-center items-center h-screen">
      <motion.img
        src="/assets/logo.webp"
        alt="logo"
        className="image" // Adjust size as needed
        initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
      />
    </div>
  );
};

export default Logo;
