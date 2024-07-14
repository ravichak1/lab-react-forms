import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import AddNewStudent from "./components/AddNewStudent";
import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  function handleFormSubmit(event, addNewStudent) {
		event.preventDefault()
		const clone = [...students]
    console.log(clone)
		// clone.push(bandToCreate)
		// setBands(clone)
		setStudents([...students, addNewStudent])
		
	}

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <AddNewStudent handleFormSubmit={handleFormSubmit}/>
      {/* FORM END */}

      {/* TABLE/LIST HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
