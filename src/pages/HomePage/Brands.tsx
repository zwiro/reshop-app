import {
  FaAdn,
  FaAngellist,
  FaAvianex,
  FaBuromobelexperte,
  FaContao,
  FaEnvira,
  FaForumbee,
  FaMegaport,
} from "react-icons/fa"
import { motion } from "framer-motion"

function Brands() {
  const logos = [
    <FaAdn size={40} />,
    <FaAngellist size={40} />,
    <FaAvianex size={40} />,
    <FaBuromobelexperte size={40} />,
    <FaContao size={40} />,
    <FaEnvira size={40} />,
    <FaForumbee size={40} />,
    <FaMegaport size={40} />,
  ]
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-4 bg-zinc-700 p-4 text-center text-slate-100"
    >
      <h2 className="tracking-wider">Our brands</h2>
      <div className="flex flex-wrap justify-center gap-8 py-4 xl:gap-16">
        {logos.map((logo, i) => (
          <div
            key={`${logo}-${i}`}
            className="transition-transform hover:scale-125"
          >
            {logo}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Brands
