const Searchbar = () => {
  return (
    <section className="bg-[#ff5200] text-white py-16">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-8 leading-tight">
          Order food & groceries. Discover best restaurants. Swiggy it!
        </h1>
        <form className="flex flex-col md:flex-row gap-4" role="search">

          <div className="flex items-center bg-white rounded-lg px-4 py-3 w-full md:w-1/3">
            <label htmlFor="location" className="sr-only">
              Location
            </label>
            <input
              id="location"
              type="text"
              placeholder="Delhi, India"
              className="w-full text-black outline-none"
            />
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" aria-label="rating-down-down-icon" aria-hidden="false" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.372 6.15a1.1 1.1 0 0 0-.117 1.552l7.184 8.355.03.035c.149.173.327.381.504.536.212.186.564.427 1.058.427s.847-.24 1.059-.427c.177-.155.355-.363.504-.536l.03-.035 7.12-8.282a1.1 1.1 0 0 0-1.668-1.434l-7.045 8.194-7.108-8.267a1.1 1.1 0 0 0-1.55-.117" fill="rgba(2, 6, 12, 0.92)" fill-opacity="0.92"></path></svg>
          </div>

          <div className="flex items-center bg-white rounded-lg px-4 py-3 w-full md:w-2/3">
            <label htmlFor="search" className="sr-only">
              Search for restaurant or food
            </label>
            <input
              id="search"
              type="search"
              placeholder="Search for restaurant, item or more"
              className="w-full text-black outline-none"
            />

            <button
              type="submit"
              aria-label="Search"
              className="text-gray-500 ml-2"
            >
              🔍
            </button>
            
          </div>

        </form>
      </div>
    </section>
  )
}

export default Searchbar
