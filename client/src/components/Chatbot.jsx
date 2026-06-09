function Chatbot() {
  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        width: "300px",
        backgroundColor: "white",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        boxShadow: "0px 0px 10px gray",
      }}
    >
      <h3>👨‍⚕️ AI Pharmacist</h3>

      <p>
        Hello! Welcome to Phoenix Pharma.
      </p>

      <p>
        How can I help you today?
      </p>
    </div>
  );
}

export default Chatbot;