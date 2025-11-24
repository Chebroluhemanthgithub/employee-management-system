import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState("");

  // Load employees
  useEffect(() => {
    axios
      .get(`${API_URL}/api/employees`)
      .then((res) => setEmployees(res.data))
      .catch((err) => console.log("Fetch error:", err));
  }, []);

  // DELETE EMPLOYEE
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    await axios.delete(`${API_URL}/api/employees/${id}`);

    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  // START EDITING
  const startEdit = (emp) => {
    setEditing(emp);
  };

  // UPDATE EMPLOYEE
  const updateEmployee = async () => {
    await axios.put(`${API_URL}/api/employees/${editing.id}`, editing);

    setEmployees(
      employees.map((emp) => (emp.id === editing.id ? editing : emp))
    );

    setEditing(null);
    alert("Employee Updated!");
  };

  return (
    <>
      <h2>Employee List</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search name or role..."
        style={{ padding: "8px", width: "300px", marginBottom: "10px" }}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />

      <table border="1" cellPadding="10" style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees
            .filter(
              (emp) =>
                emp.name.toLowerCase().includes(search) ||
                emp.role.toLowerCase().includes(search)
            )
            .map((emp, index) => (
              <tr key={emp.id}>
                <td>{index + 1}</td>
                <td>{emp.name}</td>
                <td>{emp.role}</td>
                <td>{emp.salary}</td>
                <td>
                  <button className="btn-edit" onClick={() => startEdit(emp)}>
                    Edit
                  </button>

                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(emp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* UPDATE FORM */}
      {editing && (
        <div style={{ marginTop: "20px" }}>
          <h3>Edit Employee</h3>

          <input
            value={editing.name}
            onChange={(e) => setEditing({ ...editing, name: e.target.value })}
            style={{ padding: "8px", marginBottom: "10px", width: "300px" }}
          />

          <input
            value={editing.role}
            onChange={(e) => setEditing({ ...editing, role: e.target.value })}
            style={{ padding: "8px", marginBottom: "10px", width: "300px" }}
          />

          <input
            type="number"
            value={editing.salary}
            onChange={(e) =>
              setEditing({ ...editing, salary: Number(e.target.value) })
            }
            style={{ padding: "8px", marginBottom: "10px", width: "300px" }}
          />

          <button onClick={updateEmployee} style={{ padding: "8px 20px" }}>
            Update
          </button>

          <button
            onClick={() => setEditing(null)}
            style={{ padding: "8px 20px", marginLeft: "10px" }}
          >
            Cancel
          </button>
        </div>
      )}
    </>
  );
}

export default EmployeeList;
