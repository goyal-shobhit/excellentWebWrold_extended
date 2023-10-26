import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

const ProductList = () => {
    const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
let token = localStorage.getItem("token");
console.log(token,"token")
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
        console.log(data);
      });
  }, []);

  const handleChange = (e)=>{
    let searchvalue = e.target.value;
   const f =  data.filter((item)=>item.title.toLowerCase().includes(searchvalue.toLowerCase()) || item.description.toLowerCase().includes(searchvalue.toLowerCase()));
   setFilteredData(f)
  }


  return (
    <>
    {!token ?navigate("/")&&<Alert/>:
    <div className="container">
        
    <div className="row">
        <input placeholder="Search for product by title and description" onChange={(e)=>handleChange(e)} style={{marginTop:"4px",marginBottom:"8px"}}/>
        <br />
        <br />
        <h3>Latest Product</h3>
        <hr />
        <br />
        <br />
       
      {filteredData.map((item) => (
        <ProductCard productInfo={item} />
      ))}
      </div>
      </div>
      }
    </>
  );
};

export default ProductList;
