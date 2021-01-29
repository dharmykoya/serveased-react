import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../store/actions/action";

const Cart = () => {
  const {cart, totalPrice} = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleDeleteProduct = (productId) => {
    let remainingProducts = cart.filter(product => product.id !== productId) 
    dispatch(updateCart(remainingProducts))
  }

  const handleIncreaseCount = (productId) => {
    let selectedProduct = cart.findIndex(product => product.id === productId) 
    cart[selectedProduct].count++;
    dispatch(updateCart(cart));
  }

  const handleDecreaseCount = (productId) => {
    let selectedProduct = cart.findIndex(product => product.id === productId) 

    if (cart[selectedProduct].count === 1) {
      handleDeleteProduct(cart[selectedProduct].id)
      return;
    }
    cart[selectedProduct].count--;
    dispatch(updateCart(cart));
  }


  return (
    <section>
      <div className="row">
        <div className="card shopping-cart">
          <div className="card-header bg-dark text-light">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            Shipping cart
            <Link to="/" className="btn btn-outline-info btn-sm pull-right">
            Continue shopping
          </Link>
            <div className="clearfix"></div>
          </div>
          <div className="card-body">
            {cart.map(product => (
              <div key={product.id}>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-2 text-center">
                    <img
                      className="img-responsive"
                      src="http://placehold.it/120x80"
                      alt="prewiew"
                      width="120"
                      height="80"
                    />
                  </div>
                  <div className="col-12 text-sm-left col-sm-12 text-md-left col-md-5">
                    <h4 className="product-name">
                      <strong>{product.title}</strong>
                    </h4>
                    <h4>
                      <small>{product.description}</small>
                    </h4>
                  </div>
                  <div className="col-12 col-sm-12 text-sm-center col-md-3 text-md-right row">
                    <div
                      className="col-3 col-sm-3 col-md-6 text-md-right"
                      style={{ paddingTop: "5px" }}
                    >
                      <h6>
                        <strong>
                          {product.price}<span className="text-muted">x</span>
                        </strong>
                      </h6>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4">
                      <div className="quantity">
                        <button onClick={() => handleIncreaseCount(product.id)} type="button" value="+" className="plus">
                          +
                        </button>
                        <input
                          type="number"
                          step="1"
                          max="99"
                          min="1"
                          onChange={() => {}}
                          value={product.count}
                          title="Qty"
                          className="qty"
                          size="4"
                        />
                        <button onClick={() => handleDecreaseCount(product.id)} type="button" value="-" className="minus">
                          -
                        </button>
                      </div>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 text-right">
                      <button
                        type="button"
                        className="btn btn-outline-danger btn-xs"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-2 text-center">
                    ${product.price * product.count}
                  </div>
                </div>
                <hr />
              </div>
            ))}
            <div className="pull-right">
              <Link to="/" className="btn btn-outline-secondary pull-right">
            Update shopping cart
          </Link>
            </div>
          </div>
          <div className="card-footer">
            <div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="cupone code"
                  />
                </div>
                <div className="col-6">
                  <input
                    type="submit"
                    className="btn btn-default"
                    value="Use cupone"
                  />
                </div>
              </div>
            </div>
            <div className="pull-right" style={{ margin: "10px" }}>
              <Link to="/" className="btn btn-success pull-right">
                Checkout
              </Link>
              <div className="pull-right" style={{ margin: "10px" }}>
                Total price: <b>${totalPrice}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
