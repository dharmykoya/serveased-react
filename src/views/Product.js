import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Product.css";
import { updateCart } from "../store/actions/action";

const data = [
  {
    id: 1,
    title: "product A",
    description: "lorem ipsum jdjd aodjei",
    price: 700
  },
  {
    id: 2,
    title: "product B",
    description: "For suitable crops, ingredients",
    price: 340
  },
  {
    id: 3,
    title: "product c",
    description: "further information, click image.",
    price: 200
  },
  {
    id: 4,
    title: "product D",
    description: "lorem ipsum for details.",
    price: 850
  }
];

const Product = () => {
  const [products, setProducts] = useState([]);

  const cart = useSelector(state => state.cart.cart)
   const dispatch = useDispatch();

  useEffect(() => {
    setProducts(data);
  }, [setProducts]);

  const handleAddToCartHandler = (event, productId) => {
    let selectedProduct = cart.findIndex(product => product.id === productId)    
    
    if (selectedProduct > -1) {
      cart[selectedProduct].count++;
      dispatch(updateCart(cart));
    } else {
      selectedProduct = products.find(product => product.id === productId)
      selectedProduct.count = 1;
      const newCart = [...cart, selectedProduct]
      dispatch(updateCart(newCart));
    }
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
                  <Link to="#">
                    <img
                      className="card-img-top"
                      src="https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      alt=""
                    />
                  </Link>
                  <div className="text-warning">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <Link className="text-reset" to="#">
                    <h3 className="card-title display-6">{product.title}</h3>
                  </Link>
                  <p>{product.description}</p>
                  <h6>
                    ${product.price}{" "}
                    <del className="text-muted ml-2">
                      ${product.price + 400}
                    </del>
                  </h6>
                  <button
                    onClick={(e) => handleAddToCartHandler(e, product.id)}
                    className="btn btn-dark my-2"
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

