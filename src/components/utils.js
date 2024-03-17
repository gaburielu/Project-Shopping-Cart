const filteredProducts = (arr) => {
  return arr
    .map((item) => ({
      ...item,
      cart: 0,
    }))
    .filter((product) => {
      return (
        product.category === "men's clothing" ||
        product.category === "jewelery" ||
        product.category === "women's clothing"
      );
    });
};

const sumOfCart = (arr) => {
  return arr.reduce((total, item) => total + item.cart, 0);
};

const addToCart = (arr, id) => {
  return arr.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        cart: item.cart + 1,
      };
    }
    return item;
  });
};

const removeFromCart = (arr, id) => {
  return arr.map((item) => {
    if (item.id === id) {
      if (item.cart > 0) {
        return {
          ...item,
          cart: item.cart - 1,
        };
      }
    }
    return item;
  });
};

const getProductinCart = (arr) => {
  return arr.filter((item) => item.cart >= 1);
};

const totalAmount = (arr) => {
  return arr.reduce((total, item) => total + (item.cart * item.price), 0);
}

export {
  filteredProducts,
  sumOfCart,
  addToCart,
  removeFromCart,
  getProductinCart,
  totalAmount,
};
