import React from "react";
import { useState, useEffect } from "react";

const FilteredHighlights = ({ allFootballHighlights: highlights }) => {
  const [filteredList, setFilteredList] = useState(highlights);
  const [selectedCountry, setSelectedCountry] = useState("");

  const filterByCountry = (filteredData) => {
    if (!selectedCountry) {
      return filteredData;
    }

    const filteredHighlights = filteredData.filter((videos) => {
      return videos.competition
        .toLowerCase()
        .includes(selectedCountry.toLowerCase());
    });
    return filteredHighlights;
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  useEffect(() => {
    let filteredData = filterByCountry(highlights);
    setFilteredList(filteredData);
  }, [selectedCountry]);

  return (
    <>
      <div className="country__filter">
        <div>Filter by Country :</div>
        <select
          id="country__input"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option value="">...</option>
          <option value="england">England</option>
          <option value="italy">Italy</option>
          <option value="spain">Spain</option>
        </select>
      </div>

      <div>
        {filteredList &&
          filteredList.map((item, idx) => {
            console.log(item.competition);
            return (
              <>
                <div key={idx}>{item.competition}</div>
                <div>{item.thumbnail}</div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default FilteredHighlights;
