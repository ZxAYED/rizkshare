import React, { useEffect, useState } from "react";
import axios from "axios";
import FoodCards from "./FoodCards";

const AvailableFoods = () => {
  const [data, setData] = useState([]);
  const [loaddata, setLoadData] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    axios.get("http://localhost:5000/RizkShare/availableFoods", { withCredentials: true })
      .then((res) => {
        setData(res.data);
        setLoadData(res.data);
      });
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const search = event.target.search.value;

    setData(loaddata.filter((item) => {
      return item.foodName.toLowerCase().includes(search.toLowerCase());
    }));
  };

  const handleSort = () => {
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      const dateA = new Date(a.expiredDateInDays);
      const dateB = new Date(b.expiredDateInDays);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setIsSorted(!isSorted);
  };

  return (
    <div className="max-w-7xl mx-auto  mt-10 text-center">
      <h1 className="text-3xl font-bold">Discover Fresh, Available Foods</h1>
      <p className="py-5 font-semibold">
        In our "Available Foods" section, you'll find a wide array of fresh, nourishing options waiting to be shared with our community. These foods are generously offered by our donors and are just a click away from reaching those who need them.
      </p>

      <form onSubmit={handleSearch}>
        <label className="mb-2 text-sm font-medium sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            type="search"
            name="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-[#E7CBCB]"
            placeholder="Search Foods"
          />
          <button
            type="submit"
            className="absolute right-2.5 bottom-2.5 bg-[#99627A] border-none text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <button onClick={handleSort} className="bg-[#99627A] my-5  flex justify-start focus:none border-none text-white focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 ">
        Sort by Expiration Date ({sortOrder === "asc" ? "Ascending" : "Descending"})
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {data.map((item) => (
          <FoodCards key={item._id} items={item} />
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
