import { useState } from "react";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const results = [
    { name: "Luxury Salon", genre: "Hair care" },
    { name: "Fashion Hub", genre: "Clothing" },
    { name: "Gourmet Delights", genre: "Culinary" },
    { name: "Elite Accessories", genre: "Luxury" },
    { name: "The Style Spot", genre: "Clothing" },
  ];

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = results.filter(
      (item) =>
        item.name.toLowerCase().includes(value) &&
        (selectedGenre === "" || item.genre === selectedGenre)
    );
    setFilteredResults(filtered);

    setShowDropdown(value !== ""); // Show dropdown only if there is input
  };

  const handleGenreChange = (e) => {
    const genre = e.target.value;
    setSelectedGenre(genre);

    const filtered = results.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm) &&
        (genre === "" || item.genre === genre)
    );
    setFilteredResults(filtered);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowDropdown(false);
      if (!searchTerm) {
        setSearchTerm("");
      }
    }, 200); // Small delay to allow click selection before hiding
  };

  return (
    <div className="w-full p-[20px] flex border-0 bg-gray justify-center">
      <div className="flex gap-[10px]">
        <select
          name="genre"
          className="p-[10px] border-[1px] rounded-[5px] pr-[10px]"
          onChange={handleGenreChange}
        >
          <option value="">By Genre</option>
          <option value="Hair care">Hair care</option>
          <option value="Clothing">Clothing</option>
          <option value="Culinary">Culinary</option>
          <option value="Luxury">Luxury</option>
        </select>

        <div className="flex flex-col h-fit border-0 gap-[10px] relative">
          <input
            type="text"
            className="border-[1px] p-[5px] rounded-[5px] h-[7vh] w-[30vw] pl-[10px]"
            placeholder="By Business Name"
            value={searchTerm}
            onChange={handleSearch}
            onFocus={() => setShowDropdown(true)}
            onBlur={handleBlur}
          />

          {showDropdown && (
            <div className="absolute top-[100%] left-0 w-full bg-white border rounded-[5px] shadow-lg max-h-[200px] overflow-auto">
              {filteredResults.length > 0 ? (
                filteredResults.map((item, index) => (
                  <div
                    key={index}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {item.name} ({item.genre})
                  </div>
                ))
              ) : (
                <div className="p-2 text-gray-500">No results found</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
