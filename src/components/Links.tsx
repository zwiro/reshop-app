function Links() {
  const links: string[] = [
    "About reshop",
    "FAQ and Support",
    "Contact",
    "Terms of Service",
    "Privacy Policy",
  ]
  return (
    <ul className="mt-auto">
      {links.map((link) => (
        <li className="cursor-pointer text-sm hover:underline">{link}</li>
      ))}
    </ul>
  )
}

export default Links
