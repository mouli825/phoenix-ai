function Hero() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "100px",
        backgroundColor: "#EAF4FF",
      }}
    >
      <h1>Welcome to Phoenix Pharma AI</h1>

      <h2>
        Intelligent Medicine Distribution &
        Inventory Management System
      </h2>

      <p>
        Smart medicine stock tracking,
        AI chatbot and retailer ordering system.
      </p>

      <button
        style={{
          backgroundColor: "#0B3D91",
          color: "white",
          padding: "12px 25px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Explore Medicines
      </button>
    </div>
  );
}

export default Hero;