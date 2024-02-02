function MenuItem({ image, nama, content, button }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{nama}</h1>

      <h6>{content}</h6>
      <h4>{button}</h4>
    </div>
  );
}

export default MenuItem;
