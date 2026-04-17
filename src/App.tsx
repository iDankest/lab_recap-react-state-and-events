import { studentsData } from './students'

import './App.css'
import { useState } from 'react'

function App() {
const [students, setStudents] = useState(studentsData)

  return (
    <>
      <div className='main'>
        {students.map((student) => {
          return(
            <div className='student-card'>
              <img src={student.image} alt="" />
              <h3>{student.fullName}</h3>
              <p>Programa: {student.program}</p>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default App
