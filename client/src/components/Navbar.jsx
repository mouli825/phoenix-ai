function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#0B3D91",
        color: "white",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>Phoenix Pharma AI</h2>

      <div>
        <span style={{ margin: "15px" }}>Home</span>
        <span style={{ margin: "15px" }}>Medicines</span>
        <span style={{ margin: "15px" }}>Orders</span>
        <span style={{ margin: "15px" }}>Login</span>
      </div>
    </nav>
  );
}

export default Navbar;