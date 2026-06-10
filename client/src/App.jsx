import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [medicines, setMedicines] = useState([]);

  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    productName: "",
    unit: "",
    batchNo: "",
    purchasePrice: "",
    salePrice: "",
    stock: "",
  });

  useEffect(() => {
    fetchMedicines();
  }, []);

  const fetchMedicines = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/medicines"
      );

      setMedicines(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addMedicine = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/medicines",
        formData
      );

      alert("Medicine Added Successfully");

      setFormData({
        productName: "",
        unit: "",
        batchNo: "",
        purchasePrice: "",
        salePrice: "",
        stock: "",
      });

      fetchMedicines();
    } catch (error) {
      console.log(error);
      alert("Failed to add medicine");
    }
  };

  const deleteMedicine = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/medicines/${id}`
      );

      alert("Medicine Deleted");

      fetchMedicines();
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🏥 Phoenix Pharma AI</h1>

      <h2>Add Medicine</h2>

      <form onSubmit={addMedicine}>
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={formData.productName}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="unit"
          placeholder="Unit"
          value={formData.unit}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="batchNo"
          placeholder="Batch No"
          value={formData.batchNo}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="number"
          name="purchasePrice"
          placeholder="Purchase Price"
          value={formData.purchasePrice}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="number"
          name="salePrice"
          placeholder="Sale Price"
          value={formData.salePrice}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">
          Add Medicine
        </button>
      </form>

      <hr />

      <h2>Medicine Inventory</h2>

      <input
        type="text"
        placeholder="Search Medicine..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
        }}
      />

      <br /><br />

      {medicines.length === 0 ? (
        <p>No medicines found.</p>
      ) : (
        medicines
          .filter((medicine) =>
            medicine.productName
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .map((medicine) => (
            <div
              key={medicine._id}
              style={{
                border: "1px solid gray",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <h3>{medicine.productName}</h3>

              <p>Unit: {medicine.unit}</p>

              <p>Batch: {medicine.batchNo}</p>

              <p>Stock: {medicine.stock}</p>

              <p>Purchase Price: ₹{medicine.purchasePrice}</p>

              <p>Sale Price: ₹{medicine.salePrice}</p>

              <button
                onClick={() => deleteMedicine(medicine._id)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "8px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          ))
      )}
    </div>
  );
}

export default App;