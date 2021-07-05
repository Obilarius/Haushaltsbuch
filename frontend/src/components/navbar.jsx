import Theme from "../theme";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        backgroundColor: Theme.color.primary,
        height: "70px",
        padding: "10px 30px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: Theme.containerWidth, display: "flex", alignItems: "center", fontSize: "1.4em" }}>Navbar</div>
    </nav>
  );
};

export default Navbar;
