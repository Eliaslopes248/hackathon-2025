import { useState } from "react";
import { useNavigate } from "react-router-dom";
import results from './businessData.json';

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = results.filter(
      (item) =>
        item.businessName.toLowerCase().includes(value) &&
        (selectedGenre === "" || item.productType === selectedGenre)
    );
    setFilteredResults(filtered);
    setShowDropdown(value !== "");
  };

  const handleGenreChange = (e) => {
    const productType = e.target.value;
    setSelectedGenre(productType);

    const filtered = results.filter(
      (item) =>
        item.businessName.toLowerCase().includes(searchTerm) &&
        (productType === "" || item.productType === productType)
    );
    setFilteredResults(filtered);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowDropdown(false);
      if (!searchTerm) {
        setSearchTerm("");
      }
    }, 200);
  };

  const handleSelectBusiness = (business) => {
    navigate("/business", { state: { business } });
  };

  return (
    <div className="w-full p-[20px] z-10 flex border-0 bg-gray justify-center">
      <div className="flex gap-[10px]">
        <select
          businessName="genre"
          className="p-[10px] border-[1px] rounded-[5px] pr-[10px]"
          onChange={handleGenreChange}
        >
          <option value="">By Genre</option>
          <option value="hair">Hair</option>
          <option value="clothing">Clothing</option>
          <option value="food">Food</option>
          <option value="sports">Sports</option>
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
                    onMouseDown={() => handleSelectBusiness(item)}
                  >
                    {item.businessName} ({item.productType})
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
