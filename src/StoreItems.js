import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const itemsList = [
  { title: "Macbook", price: "$599", image: "macbook.jpg" },
  { title: "iPhone", price: "$399", image: "iphone.jpg" },
  { title: "Keyboard", price: "$99", image: "keyboard.jpg" },
  { title: "Mouse", price: "$49", image: "mouse.png" },
  { title: "Samsung", price: "$399", image: "samsung.jpg" },
  { title: "Chromebook", price: "$199", image: "chromebook.jpg" },
  { title: "Dell", price: "$400", image: "dell.jpg" }
];

const StoreItems = () => {
  return itemsList.map((item) => (
    <div className="item">
      <img src={item.image} width="200em" />
      <h3>{item.title}</h3>
      <p>{item.price}</p>
      <button className="mb-3 btn btn-success">Add to cart</button>
    </div>
  ));
};

export default StoreItems;
