import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Pages/Student';
import { studentData } from './Data/data';

function App() {
  const [students, setStudents] = useState(studentData)

  return (
    <>
      <Student students={students}/>
    </>
  );
}

export default App;
