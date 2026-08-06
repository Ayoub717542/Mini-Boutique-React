
function SearchBar({ searchInput, setSearchInput }) {
  return (
    <div className="search-bar">
        <input
          type="text"
          id="search_input"
          placeholder="Search products..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
    </div>
  )
}
export default SearchBar
