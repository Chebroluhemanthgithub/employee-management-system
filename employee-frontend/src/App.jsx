import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <AddEmployee />
      <EmployeeList />
    </div>
  );
}

export default App;
