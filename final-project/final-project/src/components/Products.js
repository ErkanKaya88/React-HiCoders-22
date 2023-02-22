import React, { useEffect, useContext } from "react";
import Navbar from "./Navbar";
import { DataContext } from "../context/DataContext";
import AddCartIcon from "../AddCartIcon";

const Products = () => {
  const { products, setProducts } = useContext(DataContext);
  const { selected, setSelected } = useContext(DataContext);

  const BASE_URL = `https://dummyjson.com/products`;

  const getData = async () => {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      if (response.ok) {
        setProducts(data.products);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClick = (pProduct) => {
    const newProduct = {
      image: pProduct.images[0],
      model: pProduct.title,
      description: pProduct.description,
      category: pProduct.category,
      price: pProduct.price,
      id: pProduct.id,
      count: 1,
    };

    const checkProduct = selected.findIndex(
      (cartItem) => cartItem.id === pProduct.id
    );

    if (checkProduct !== -1) {
      console.log("ayni üründen var");

      const newData = [...selected];
      newData[checkProduct].count += 1;
      setSelected(newData);
    } else {
      console.log("ilk ürün");
      setSelected([...selected, newProduct]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <div className="col-4 my-4" key={index}>
              <div className="card">
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Category: {product.category}
                  </li>
                  <li className="list-group-item">Rating: {product.rating}</li>
                  <li className="list-group-item">Stock: {product.stock}</li>
                  <li className="list-group-item">
                    Price: {product.price}$
                    <button
                      type="button"
                      onClick={() => handleClick(product)}
                      className="mx-5 btn btn-white text-dark"
                    >
                      <AddCartIcon />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
