import { studentsData } from "./students";
import AddStudentForm from "./components/AddStudentForm";

import "./App.css";
import { useState } from "react";

function App() {
  const [students, setStudents] = useState(studentsData);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };
  const graduatedStudents = students.filter((student) => student.graduated);

  return (
    <>
      <div className="flex w-full p-4 justify-center">
        <div className="flex flex-wrap w-80  gap-2 ">
          {students.map((student) => {
            return (
              <div
                key={student._id}
                className=" p-2 bg-slate-100 flex rounded-md place-items-center  transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                <img
                  className=" w-32 h-32 rounded-full border-blue-300 border-2"
                  src={student.image}
                  alt=""
                />
                <div className="w-40">
                  <h3 className=" text-blue-600 font-bold">
                    {student.fullName}
                  </h3>
                  <p>Programa: {student.program}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <AddStudentForm onAddStudent={addStudent} />
          <div className="mt-6 p-4 bg-blue-50 rounded-lg shadow-inner">
            <h2 className="text-xl font-bold text-blue-800 mb-2">
              Lista de graduados - {graduatedStudents.length} Total
            </h2>
            <ul className="list-disc pl-5">
              {graduatedStudents.map((student) => (
                <li key={student._id} className="text-slate-700">
                  {student.fullName} -{" "}
                  <span className="italic text-gray-500">
                    {student.program}
                  </span>
                  {student.createdAt && (
                    <strong className="text-xs text-gray-400 ml-2">
                      {student.createdAt}
                    </strong>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
