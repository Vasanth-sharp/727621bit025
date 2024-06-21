import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [pattern, setPattern] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:4000/company/AMZ/category/Laptop")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        return setProducts(res);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    setFilterProduct(
      products.filter((item) => item.productName.includes(pattern))
    );
  }, [pattern, products]);
  const handleClick = (item) => {
    console.log(item);
   navigate("/product", { state: { item:item } });
  };
  return (
    <div>
      hi
      <ul>
        {filterProduct.length > 0 &&
          filterProduct.map((item, index) => (
            <li key={index} onClick={()=>handleClick(item)}>
              {item.productName}
            </li>
          ))}
      </ul>
      <input
        type="text"
        placeholder="Enter a pattern"
        value={pattern}
        onChange={(e) => setPattern(e.target.value)}
      />
    </div>
  );
}
