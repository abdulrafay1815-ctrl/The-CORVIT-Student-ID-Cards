import StudentCard from "./StudentCard";

export default function App() {
  return (
    <div className="container">
      <h1 className="text-center my-4">Student ID Cards</h1>

      <div className="d-flex flex-wrap justify-content-center">
        
        <StudentCard 
          name="Ali" 
          course="React" 
          roll="101" 
        />

        <StudentCard 
          name="Sara" 
          course="jQuery" 
          roll="102" 
        />

        <StudentCard 
          name="Ahmed" 
          course="JavaScript" 
          roll="103" 
        />

      </div>
    </div>
  );
}