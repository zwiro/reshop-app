import { motion } from "framer-motion"
import Header from "./Header"
import Brands from "./Brands"
import BrowseItems from "./BrowseItems"
import Statistics from "./Statistics"

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
