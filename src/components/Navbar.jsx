import { useState } from "react";
import Login from "./Login";
import { Link } from "react-router";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const navButtonBase =
    "flex items-center justify-center h-[54px] px-8 rounded-[12px] text-[16px] Bold leading-[22px] tracking-[-0.4px]";

  return (
    <>
      <header className="bg-[#ff5200]">
        <div className="flex md:hidden justify-between h-[60px] items-center ">
          <div className="flex flex-col ExtraBold pl-4">
            <div className="flex items-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.13834 3.05176L7.13834 3.05176C7.79277 2.54686 8.11998 2.29441 8.50037 2.29297C8.88076 2.29154 9.20987 2.54152 9.86808 3.04149L13.5978 5.8745C15.796 7.54423 16.8952 8.37909 16.6378 9.14351C16.4526 9.69341 15.6864 9.84773 14.2432 9.89103V12.8457C14.2432 14.4434 14.2432 15.2422 13.7469 15.7385C13.2506 16.2349 12.4517 16.2349 10.8541 16.2349H10.3882V12.3466C10.3882 11.7393 10.3882 11.4357 10.1995 11.247C10.0108 11.0584 9.7072 11.0584 9.09992 11.0584H8.05751C7.45022 11.0584 7.14658 11.0584 6.95792 11.247C6.76927 11.4357 6.76927 11.7393 6.76927 12.3466V16.2349H6.30494C4.70727 16.2349 3.90844 16.2349 3.41211 15.7385C2.91578 15.2422 2.91578 14.4434 2.91578 12.8457V9.89286C1.44894 9.85225 0.671272 9.70217 0.482179 9.14751C0.222937 8.3871 1.30407 7.55299 3.46632 5.88477L7.13834 3.05176Z" fill="white"></path></svg>
              <span>Home</span>
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(255, 255, 255, 0.6)"><path d="M1.352 5.292a1 1 0 0 0-.106 1.41l5.261 6.12.029.033c.15.175.324.377.495.527.204.179.533.402.993.402s.789-.223.992-.402a5.4 5.4 0 0 0 .495-.527l.03-.034 5.213-6.064a1 1 0 1 0-1.517-1.303l-5.213 6.064-5.262-6.12a1 1 0 0 0-1.41-.106" fill="rgba(255, 255, 255, 0.6)" fill-opacity="0.92"></path></svg>
            </div>
            <span className="text-[#ffffffbf] text-[12.04px]">Delhi,Indiz</span>
          </div>
          <div className="h-[42px] mr-4 flex items-center md:hidden justify-center bg-[#02060ce6] border rounded-[50%] px-[10px]  ">
            <svg className="h-5 w-5 text-[#ffffffeb] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path></svg>

          </div>
        </div>
        <nav className="max-w-7xl mx-auto md:flex items-center justify-between px-6 py-8 hidden ">

          {/* Logo */}
          <Link to="/" aria-label="Swiggy Home" className="h-12 w-[160px]">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
              alt="Swiggy logo"
              className="h-full w-full"
            />
          </Link>

          {/* Navigation */}
          <ul className="items-center gap-8 text-white Bold md:flex ">
            <li>
              <a href="#" className="hover:opacity-90">
                Swiggy Corporate
              </a>
            </li>

            <li>
              <a href="#" className="hover:opacity-90">
                Partner with us
              </a>
            </li>

            {/* Get the App */}
            <li>
              <a
                href="#"
                className={`${navButtonBase} border border-white`}
              >
                Get the App
              </a>
            </li>

            {/* Sign In */}
            <li>
              <button
                type="button"
                onClick={() => setShowLogin(true)}
                className={`${navButtonBase} bg-black border border-white border-none`}
              >
                Sign in
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Login Drawer */}
      {showLogin && (
        <Login isOpen={showLogin} setHide={setShowLogin} />
      )}
    </>
  );
};

export default Navbar;