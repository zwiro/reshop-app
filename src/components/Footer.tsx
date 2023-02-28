import Links from "./Links"
import Socials from "./Socials"

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-zinc-700 text-slate-100">
      <div className="flex flex-col flex-wrap items-center justify-between py-4">
        <Links isFooter />
        <Socials />
      </div>
    </footer>
  )
}

export default Footer
