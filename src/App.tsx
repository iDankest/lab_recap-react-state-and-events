import { studentsData } from './students'

import './App.css'
import { useState } from 'react'

function App() {
const [students, setStudents] = useState(studentsData)

  return (
    <>
      <div className='flex justify-center gap-6 m-5'>
        {students.map((student) => {
          return(
            <div className=' p-2 bg-slate-100 flex rounded-md place-items-center  transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer' >
              <img className=' rounded-full border-blue-300 border-2' src={student.image} alt="" />
              <div className='w-40'>
              <h3 className=' text-blue-600 font-bold'>{student.fullName}</h3>
              <p >Programa: {student.program}</p></div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default App
