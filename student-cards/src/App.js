import React from "react";
import "./App.css";

// Reusable StudentCard Component
function StudentCard({ name, course, roll }) {
  return (
    <div className="card student-card shadow-sm mb-4">
      <div className="card-body text-center">
        <h5 className="card-title fw-bold">{name}</h5>
        <p className="card-text">📘 {course}</p>
        <span className="badge bg-primary">Roll No: {roll}</span>
      </div>
    </div>
  );
}

function App() {
  const students = [
    { id: 1, name: "Ali", course: "React", roll: "101" },
    { id: 2, name: "Sara", course: "jQuery", roll: "102" },
    { id: 3, name: "Ahmed", course: "JavaScript", roll: "103" },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 fw-bold">🎓 Student ID Cards</h1>
      <div className="row justify-content-center">
        {students.map((student) => (
          <div key={student.id} className="col-md-3">
            <StudentCard
              name={student.name}
              course={student.course}
              roll={student.roll}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
