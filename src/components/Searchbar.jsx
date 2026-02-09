const Searchbar = () => {
  return (
    <section className="bg-[#ff5200] text-white py-16">
      <div className="flex flex-col-reverse md:flex-col">

        <div className="flex items-center justify-center">
          <div className="flex items-center justify-between px-4">
            <h1 className="SemiBold w-[60%] text-center sm:text-[16px] pl-3 md:text-[48px] font-semibold text-[#fff] md:leading-[56px] tracking-[-0.3px] ">
              Order food & groceries. Discover best restaurants. Swiggy it!
            </h1>
            <div className="md:hidden block h-[140px] w-[140px] ">
              <img className="h-full w-full object-cover" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/6/19/ca322ced-2d4f-4a43-a8c6-b7e07de76bfa_DEmweb.png" alt="" />
            </div>
          </div>
        </div>
        <form className="flex mt-8 w-full justify-center Bold items-center" role="search">

          <div className="md:flex hidden  items-center text-[#02060c73] bg-[#FFFFFF]   border rounded-2xl gap-[10px] h-[60px] px-4 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 23" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.115 21.8122C12.4772 19.4062 17.7886 13.4751 17.7886 8.78883C17.7886 3.79647 13.9976 0 9.00526 0C4.0129 0 0.210938 3.79647 0.210938 8.78883C0.210938 13.4755 5.52998 19.4073 7.89476 21.8129C8.51149 22.4403 9.49871 22.44 10.115 21.8122ZM8.99988 12.7888C11.4269 12.7888 13.3943 10.8214 13.3943 8.39441C13.3943 5.96745 11.4269 4 8.99988 4C6.57292 4 4.60547 5.96745 4.60547 8.39441C4.60547 10.8214 6.57292 12.7888 8.99988 12.7888Z" fill="#FF5200"></path></svg>

            <input
              id="location"
              type="text"
              placeholder="Delhi, India"
              className="w-full text-black outline-none placeholder:text-[#02060c99] text-[18px] "
            />
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" aria-label="rating-down-down-icon" aria-hidden="false" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.372 6.15a1.1 1.1 0 0 0-.117 1.552l7.184 8.355.03.035c.149.173.327.381.504.536.212.186.564.427 1.058.427s.847-.24 1.059-.427c.177-.155.355-.363.504-.536l.03-.035 7.12-8.282a1.1 1.1 0 0 0-1.668-1.434l-7.045 8.194-7.108-8.267a1.1 1.1 0 0 0-1.55-.117" fill="rgba(2, 6, 12, 0.92)" fill-opacity="0.92"></path></svg>
          </div>

          <div className="flex text-[#02060c73] bg-[#FFFFFF] items-center Bold relative  border rounded-2xl md:ml-4 md:pl-4 md:w-[500px] h-[60px] ">
            <div className="w-ful text-[14px] Meduim md:text-[18px]">
              Search for restaurant or food
            </div>

            <svg className="text-[#02060c99] absolute right-4 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
          </div>



        </form>
      </div>
    </section>
  )
}

export default Searchbar
