import React, { useEffect, useState } from "react";
import axios from "axios";
import FoodCards from "./FoodCards";

const HomeFoods = () => {
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


  const handleSort = () => {
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      const dateA = new Date(a.foodQuantity);
      const dateB = new Date(b.foodQuantity);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setIsSorted(!isSorted);
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 text-center">
      <h1 className="text-3xl font-bold">Discover Our Featured Foods: Ascend by Abundance, Descend by Scarcity</h1>
      <p className="py-5 font-semibold">
      Explore our exquisite selection of featured foods, thoughtfully curated for your culinary delight. Our collection boasts a tantalizing assortment of culinary creations, where the quantity of ingredients takes center stage. Ascend to an abundance of flavors as you savor dishes that celebrate generous portions and abundant ingredients, while also having the option to descend into the realm of culinary finesse, appreciating the delicate and scarce ingredients that create extraordinary masterpieces. Whether you're looking for bountiful feasts or elegant delicacies, our 'Featured Foods' section caters to all tastes, allowing you to choose your culinary adventure. Join us on a journey of taste and abundance, where quality meets quantity in perfect harmony.
      </p>

     

      <button onClick={handleSort} className="bg-[#99627A] my-5  flex justify-start focus:none border-none text-white focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 ">
        Sort by Quantity ({sortOrder === "asc" ? "Ascending" : "Descending"})
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {data.map((item) => (
          <FoodCards key={item._id} items={item} />
        ))}
      </div>
    </div>
  );
};

export default HomeFoods;
