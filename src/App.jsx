import React, { useState } from "react";

function App() {
  const products = [
    {
      id: 1,
      title: "Laptop",
      price: 55000,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    },
    {
      id: 2,
      title: "Headphones",
      price: 2500,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 3,
      title: "Mobile",
      price: 30000,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    },
    {
      id: 4,
      title: "Smart Watch",
      price: 5000,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const itemExists = cart.find((item) => item.id === product.id);

    if (itemExists) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <style>
        {`
          *{
            margin:0;
            padding:0;
            box-sizing:border-box;
            font-family:Arial, sans-serif;
          }

          body{
            background-color:#f1f3f6;
          }

          .navbar{
            background-color:#2874f0;
            color:white;
            padding:20px 50px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            position:sticky;
            top:0;
          }

          .logo{
            font-size:28px;
            font-weight:bold;
          }

          .cart{
            font-size:22px;
          }

          .container{
            width:90%;
            margin:30px auto;
          }

          .products{
            display:grid;
            grid-template-columns:repeat(auto-fit, minmax(250px,1fr));
            gap:25px;
          }

          .card{
            background:white;
            border-radius:10px;
            padding:15px;
            text-align:center;
            box-shadow:0px 2px 10px rgba(0,0,0,0.2);
            transition:0.3s;
          }

          .card:hover{
            transform:translateY(-5px);
          }

          .card img{
            width:100%;
            height:220px;
            object-fit:cover;
            border-radius:8px;
          }

          .card h2{
            margin:15px 0 10px;
            font-size:22px;
          }

          .price{
            color:green;
            font-size:22px;
            margin-bottom:10px;
          }

          .btn{
            background:#2874f0;
            color:white;
            border:none;
            padding:10px 20px;
            border-radius:5px;
            cursor:pointer;
            font-size:16px;
          }

          .btn:hover{
            background:#0d5de0;
          }

          .cart-section{
            margin-top:40px;
            background:white;
            padding:20px;
            border-radius:10px;
          }

          .cart-item{
            display:flex;
            justify-content:space-between;
            padding:10px 0;
            border-bottom:1px solid #ddd;
          }

          .empty{
            text-align:center;
            color:gray;
            margin-top:20px;
          }
        `}
      </style>

      <nav className="navbar">
        <h1 className="logo">ShopEasy</h1>

        <h2 className="cart">🛒 {totalItems}</h2>
      </nav>

      <div className="container">
        <div className="products">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.title} />

              <h2>{product.title}</h2>

              <h3 className="price">₹{product.price}</h3>

              <button
                className="btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="cart-section">
          <h1>Your Cart</h1>

          {cart.length === 0 ? (
            <p className="empty">Cart is empty</p>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <h3>{item.title}</h3>

                <h3>Quantity: {item.quantity}</h3>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default App;
