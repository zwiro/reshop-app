import Header from "../components/Header"
import Brands from "../components/Brands"
import BrowseItems from "../components/BrowseItems"
import Statistics from "../components/Statistics"
import { motion } from "framer-motion"

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Header />
      <Brands />
      <BrowseItems />
      <Statistics />
    </motion.div>
  )
}

export default HomePage
