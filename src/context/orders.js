import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const OrdersContext = React.createContext([]);

export const useOrders = () => {
  return useContext(OrdersContext);
};

export const OrdersContextProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const orders = window.localStorage.getItem('orders');
    setOrders(orders ? JSON.parse(orders) : []);
  }, []);
  console.log(orders);
  const handleAddOrder = (product) => {
    const existProduct = orders.find((order) => order.id === product.id);

    if (existProduct) {
      const newOrders = orders.map((order) =>
        order.id === product.id ? { ...existProduct, quantity: existProduct.quantity + 1 } : order
      );
      setOrders(newOrders);
      return;
    }
    setOrders([...orders, { ...product, quantity: 1 }]);
    window.localStorage.setItem('orders', JSON.stringify(orders));
  };

  const values = {
    orders,
    setOrders,
    onAddOrder: handleAddOrder
  };
  return <OrdersContext.Provider value={values}>{children}</OrdersContext.Provider>;
};

OrdersContextProvider.propTypes = {
  children: PropTypes.node
};
