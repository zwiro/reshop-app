type LinksProps = {
  isFooter?: Boolean
}

function Links({ isFooter }: LinksProps) {
  const links: string[] = [
    "About reshop",
    "FAQ and Support",
    "Contact",
    "Terms of Service",
    "Privacy Policy",
  ]
  return (
    <ul className={`${isFooter && "flex gap-8 lg:gap-16"} `}>
      {links.map((link) => (
        <li className="cursor-pointer text-sm hover:underline">{link}</li>
      ))}
    </ul>
  )
}

export default Links
