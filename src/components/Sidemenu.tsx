import Category from "./Category"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { NavProps } from "./Nav"
import { motion } from "framer-motion"
import Logo from "./Logo"
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai"
import { FaTiktok } from "react-icons/fa"
import { categories } from "./Nav"

type SidemenuProps = NavProps

function Sidemenu({ toggleSidemenu }: SidemenuProps) {
  const links: string[] = [
    "About reshop",
    "FAQ and Support",
    "Contact",
    "Terms of Service",
    "Privacy Policy",
  ]

  const socials = [
    { name: "Facebook", icon: <AiFillFacebook size={24} /> },
    { name: "Twitter", icon: <AiFillTwitterCircle size={24} /> },
    { name: "Instagram", icon: <AiFillInstagram size={24} /> },
    { name: "TikTok", icon: <FaTiktok size={24} /> },
  ]

  const sidemenuAnimation = {
    initial: { x: -300 },
    animate: { x: 0 },
    exit: { x: -300 },
    transition: { duration: 0.5 },
  }

  return (
    <motion.aside
      {...sidemenuAnimation}
      className="absolute top-0 left-0 flex h-full flex-col bg-slate-100 p-4"
    >
      <div className="flex items-center gap-4">
        <Logo />
        <AiOutlineCloseCircle
          onClick={(e) => toggleSidemenu(e)}
          className="ml-auto cursor-pointer transition-transform hover:scale-125"
          size={32}
        />
      </div>
      <ul>
        {categories.map((category, i) => (
          <Category
            key={`${category}-${i}`}
            name={category.name}
            subcategories={category.subcategories}
          />
        ))}
      </ul>
      <ul className="mt-auto">
        {links.map((link) => (
          <li className="cursor-pointer text-sm hover:underline">{link}</li>
        ))}
      </ul>
      <ul className="mt-4 flex gap-2">
        {socials.map((social) => (
          <li className="cursor-pointer transition-transform hover:scale-125">
            {social.icon}
          </li>
        ))}
      </ul>
    </motion.aside>
  )
}

export default Sidemenu
