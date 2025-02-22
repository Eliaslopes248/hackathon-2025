import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const results = [
    { 
      name: "Luxury Salon", 
      genre: "Hair care", 
      desc: "Top-tier salon services with expert stylists.",
      img: "https://via.placeholder.com/300", // Placeholder image URL
      address: "123 Main St, Cityville",
      hours: "Mon-Fri: 9AM - 6PM"
    },
    { 
      name: "Fashion Hub", 
      genre: "Clothing", 
      desc: "Trendy fashion store with the latest styles.",
      img: "https://via.placeholder.com/300",
      address: "456 Fashion Ave, Style City",
      hours: "Mon-Sat: 10AM - 8PM"
    },
    { 
      name: "Gourmet Delights", 
      genre: "Culinary", 
      desc: "Delicious gourmet meals made fresh daily.",
      img: "https://via.placeholder.com/300",
      address: "789 Food St, Tasty Town",
      hours: "Daily: 11AM - 10PM"
    },
    { 
      name: "Elite Accessories", 
      genre: "Luxury", 
      desc: "Exclusive high-end accessories and jewelry.",
      img: "https://via.placeholder.com/300",
      address: "101 Luxury Ln, Opulence City",
      hours: "Mon-Sun: 10AM - 7PM"
    },
    { 
      name: "The Style Spot", 
      genre: "Clothing", 
      desc: "Unique and stylish clothing for every occasion.",
      img: "https://via.placeholder.com/300",
      address: "222 Trendy Blvd, Fashion City",
      hours: "Mon-Sat: 9AM - 9PM"
    }
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
    setShowDropdown(value !== "");
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
    }, 200);
  };

  const handleSelectBusiness = (business) => {
    navigate("/business", { state: { business } });
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
                    onMouseDown={() => handleSelectBusiness(item)}
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
