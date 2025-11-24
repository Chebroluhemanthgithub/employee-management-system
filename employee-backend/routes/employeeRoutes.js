import express from "express";
import db from "../db.js";

const router = express.Router();

// CREATE EMPLOYEE
router.post("/employees", (req, res) => {
  const { name, role, salary } = req.body;

  db.query(
    "INSERT INTO employees (name, role, salary) VALUES (?,?,?)",
    [name, role, salary],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Employee Added" });
    }
  );
});

// READ EMPLOYEES
router.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

// DELETE EMPLOYEE
router.delete("/employees/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM employees WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Employee Deleted" });
  });
});

// UPDATE EMPLOYEE
router.put("/employees/:id", (req, res) => {
  const { id } = req.params;
  const { name, role, salary } = req.body;

  db.query(
    "UPDATE employees SET name=?, role=?, salary=? WHERE id=?",
    [name, role, salary, id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Employee Updated" });
    }
  );
});

export default router;
