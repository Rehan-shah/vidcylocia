
function Search() {

  return (
    <div className="border-r-8 bg-[#F7F8F9] flex py-2 px-3 rounded-2xl w-2/6 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>


      <input placeholder='Search here' className='bg-[#F7F8F9] text-xl px-2 focus:outline-none' />
    </div>
  )
}

export default Search