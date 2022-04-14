import React, { useContext, useEffect, useMemo, useState } from 'react';
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

  const handleAddOrder = (product) => {
    const existProduct = orders.find((order) => order.productId === product.productId);

    if (existProduct) {
      const newOrders = orders.map((order) =>
        order.productId === product.productId
          ? { ...existProduct, quantity: existProduct.quantity + 1 }
          : order
      );
      setOrders(newOrders);
      return;
    }
    setOrders([...orders, { ...product, quantity: 1 }]);
    window.localStorage.setItem('orders', JSON.stringify(orders));
  };

  const handleRemoveOrder = (product) => {
    if (product.quantity <= 1) {
      const newOrders = orders.filter((order) => order.productId !== product.productId);
      setOrders(newOrders);
      return;
    }
    setOrders(
      orders.map((order) => {
        if (order.productId === product.productId) {
          return {
            ...order,
            quantity: order.quantity - 1
          };
        }
        return order;
      })
    );
  };

  const newOrders = useMemo(
    () =>
      orders.map((order) => {
        return {
          ...order,
          totalPrice: order.price * order.quantity
        };
      }),
    [orders]
  );

  const values = {
    orders: newOrders,
    setOrders,
    onAddOrder: handleAddOrder,
    onRemoveOrder: handleRemoveOrder
  };
  return <OrdersContext.Provider value={values}>{children}</OrdersContext.Provider>;
};

OrdersContextProvider.propTypes = {
  children: PropTypes.node
};
