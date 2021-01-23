import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const data = [
  {
    id: 1,
    title: "product A",
    desription: "lorem ipsum jdjd aodjei",
    price: 700
  },
  {
    id: 2,
    title: "product B",
    desription: "For suitable crops, ingredients, product label and",
    price: 340
  },
  {
    id: 3,
    title: "product c",
    desription: "further information, click image for details.",
    price: 200
  },
  {
    id: 4,
    title: "product D",
    desription: "lorem ipsum click image for details.",
    price: 850
  }
];

const Product = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, [setProducts]);

  const handleAddToCartHandler = (event, productId) => {
      const selectedProduct = products.find(product => product.id === productId)
      selectedProduct.count = 1

      const newCart = [...cart, ...selectedProduct]
      setCart(newCart);
  };

  return (
      <div className="mt-4 p-4">
          <Link to="/checkout" className="mr-3">
            Checkout
          </Link>
      <div className="container mb-4">
        <div className="container">
          {products.map(product => (
            <div className="item mr-4" key={product.id}>
              <div className="card shadow">
                <div className="card-body text-center">
                  <h3 className="text-warning">SALE 50% OFF</h3>
                  <a href="#">
                    <img
                      className="card-img-top"
                      src="https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      alt=""
                    />
                  </a>
                  <div className="text-warning">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <a className="text-reset" href="#">
                    <h3 className="card-title display-6">{product.title}</h3>
                  </a>
                  <h6>
                    ${product.price}{" "}
                    <del className="text-muted ml-2">
                      ${product.price + 400}
                    </del>
                  </h6>
                  <button
                    onClick={(e) => handleAddToCartHandler(e, product.id)}
                    className="btn btn-dark my-2"
                    role="button"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

//rmcp
