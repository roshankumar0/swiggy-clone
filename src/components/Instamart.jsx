import React, { useEffect, useState } from "react";
import Grocery from "./Grocery";

const Instamart = () => {
  const [instaData, setInstaData] = useState(null);

  const cors = "https://cors-anywhere.herokuapp.com/";
  const URL =
    "https://www.swiggy.com/api/instamart/home/v2?offset=3&layoutId=4987&storeId=1404165&primaryStoreId=1404165&secondaryStoreId=&clientId=INSTAMART-APP";

  const fetchInstamart = async () => {
    try {
      const res = await fetch(cors + URL);
      const data = await res.json();
      setInstaData(data?.data || null);
    } catch (error) {
      console.error("Instamart fetch error:", error);
    }
  };

  useEffect(() => {
    fetchInstamart();
  }, []);

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-6">
      {/* Page heading */}
      <header className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Instamart
        </h1>
      </header>

      {/* Content */}
      {instaData ? (
        <Grocery data={instaData} />
      ) : (
        <p className="text-gray-500">Loading groceries...</p>
      )}
    </main>
  );
};

export default Instamart;
