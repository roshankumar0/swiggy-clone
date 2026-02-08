import React, { useEffect, useRef } from "react";

const Login = ({ isOpen, setHide }) => {
    const panelRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            //     console.log(panelRef.current &
            if (panelRef.current && !panelRef.current.contains(e.target)) {
                setHide(false)
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen, setHide]);

    return (
        <div
            className={`
        fixed inset-0 z-50 flex justify-end
        bg-black/40 transition-opacity duration-300
        ${isOpen ? "opacity-100" : "opacity-0"}
      `}
        >
            {/* Right Panel */}
            <div
                ref={panelRef}
                className={`
          relative h-full w-[560px] bg-white px-10 py-8
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
            >
                {/* Close Button */}
                <button
                    onClick={() => setHide(false)}
                    className="absolute left-6 top-6 text-2xl text-gray-700 hover:text-black"
                >
                    ✕
                </button>

                {/* Header */}
                <div className="mt-12 flex items-start justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold text-black">Login</h1>
                        <p className="mt-1 text-sm text-orange-500 cursor-pointer">
                            or create an account
                        </p>
                        <div className="mt-3 h-[2px] w-8 bg-black"></div>
                    </div>

                    <div className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center">
                        <img
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                            alt="food"
                            className="h-16"
                        />
                    </div>
                </div>

                <div className="mt-10">
                    <input
                        type="text"
                        placeholder="Phone number"
                        className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-500"
                    />
                </div>

                <button className="mt-6 w-full bg-orange-500 py-3 text-sm font-semibold text-white hover:bg-orange-600">
                    LOGIN
                </button>

                <p className="mt-4 text-xs text-gray-600">
                    By clicking on Login, I accept the{" "}
                    <span className="font-medium text-black cursor-pointer">
                        Terms & Conditions
                    </span>{" "}
                    &{" "}
                    <span className="font-medium text-black cursor-pointer">
                        Privacy Policy
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;


