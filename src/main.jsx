import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import { filteredProducts } from "./components/utils.js";

import "./styles/normalize.css";

import App from "./App.jsx";
import Home from "./components/home.jsx";
import Cart from "./components/cart.jsx";
import Shop from "./components/shop.jsx";
import ErrorPage from "./components/error.jsx";

const AppContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const asyncOperation = async () => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://fakestoreapi.com/products");
          setProducts(filteredProducts(response.data));
        } catch (error) {
          console.error(`Error fetching data: ${error.message}`);
        }
      };
      fetchData();
    };

    asyncOperation();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App products={products} />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "main", element: <Home /> },
        { path: "shop", element: <Shop products={products} setProducts={setProducts} /> },
        { path: "cart", element: <Cart products={products} setProducts={setProducts} /> },
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AppContainer />);
