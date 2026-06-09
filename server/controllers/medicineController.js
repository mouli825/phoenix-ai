const Medicine = require("../models/medicines");

exports.addMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.create(req.body);

    res.status(201).json(medicine);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find();

    res.json(medicines);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteMedicine = async (req, res) => {
  try {
    await Medicine.findByIdAndDelete(req.params.id);

    res.json({
      message: "Medicine Deleted",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};