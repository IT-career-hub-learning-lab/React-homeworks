function OrderStatus({ orderInfo }) {
  return orderInfo.map(({ orderId, status }) => {
    return (
      <p key={Math.random()}>
        Order# {orderId}: {status}
      </p>
    );
  });
}
export default OrderStatus;
