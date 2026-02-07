const Navbar = () => {
  return (
    <header className="bg-[#ff5200]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <a href="/" aria-label="Swiggy Home">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
            alt="Swiggy logo"
            className="h-8"
          />
        </a>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6 text-white font-medium">
          <li><a href="https://www.swiggy.com/corporate/">Swiggy Corporate</a></li>
          <li><a href="https://partner.swiggy.com/login#/swiggy">Partner with us</a></li>
          <li><a href="#">Get the App</a></li>
          <li>
            <a
              href="#"
              className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-[#ff5200] transition"
            >
              Sign in
            </a>
          </li>
        </ul>

      </nav>
    </header>
  )
}

export default Navbar
