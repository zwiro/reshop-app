import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai"
import { FaTiktok } from "react-icons/fa"

function Socials() {
  const socials = [
    { name: "Facebook", icon: <AiFillFacebook size={24} /> },
    { name: "Twitter", icon: <AiFillTwitterCircle size={24} /> },
    { name: "Instagram", icon: <AiFillInstagram size={24} /> },
    { name: "TikTok", icon: <FaTiktok size={24} /> },
  ]
  return (
    <ul className="mt-4 flex gap-2">
      {socials.map((social) => (
        <li className="cursor-pointer transition-transform hover:scale-125">
          {social.icon}
        </li>
      ))}
    </ul>
  )
}

export default Socials
