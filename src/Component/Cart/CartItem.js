function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <div>{price}</div>
      </div>
      <div></div>
    </li>
  );
}

export default MealItem;
