
const categories = [
  "Home",
  "World",
  "Politics",
  "Technology",
  "Business",
  "Sports",
  "Entertainment",
];

function Navbar() {
  return (
    <nav className="navbar">
      {categories.map((category) => (
        <a
          href="#"
          key={category}
          className={category === "Home" ? "active" : ""}
        >
          {category}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;
