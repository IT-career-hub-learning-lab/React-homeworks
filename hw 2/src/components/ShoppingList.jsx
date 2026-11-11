function ShoppingList({ items }) {
  if (items.length === 0) {
    return <p>List is empty</p>;
  }
  return (
    <ul>
      {items.map((product) => (
        <li key={Math.random()}>{product}</li>
      ))}
    </ul>
  );
}

export default ShoppingList;
