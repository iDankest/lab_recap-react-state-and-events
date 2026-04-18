import { useState } from "react";
//recibimos la funcion del padre
export default function AddStudentForm({ onAddStudent }) {
  const [dataForm, setDataForm] = useState({
    fullName: "",
    image: "https://randomuser.me/api/portraits/lego/6.jpg",
    phone: "",
    email: "",
    program: "Web Dev",
    graduated: false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setDataForm({
      ...dataForm,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //Evita el recargar de la pagina que hace por defecto

    //Tengo que averiguar como hacer un id unico
    const newStudent = {
      ...dataForm,
      //Añadimos el id unico
      _id: crypto.randomUUID(),
      //Añado fecha de creacion
      createdAt: new Date().toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        })
    };
    onAddStudent(newStudent);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-100 p-4 w-[500px] rounded-md">
      <h2 className=" text-2xl font-bold mb-4 text-slate-800">Añadir</h2>

      <div className="flex flex-col gap-3 justify-center items-center">
        <input
          name="fullName"
          placeholder="Nombre"
          value={dataForm.fullName}
          onChange={handleChange}
          className=" border p-2 rounded-md focus:outline-blue-500 w-96"
        />
        <input
          name="image"
          placeholder="Imagen"
          value={dataForm.image}
          onChange={handleChange}
          className=" border p-2 rounded-md focus:outline-blue-500 w-96"
        />
        <input
          name="phone"
          placeholder="Phone"
          value={dataForm.phone}
          onChange={handleChange}
          className=" border p-2 rounded-md focus:outline-blue-500 w-96"
        />
        <input
          name="email"
          placeholder="Email"
          value={dataForm.email}
          onChange={handleChange}
          className=" border p-2 rounded-md focus:outline-blue-500 w-96"
        />
        <div className="flex  justify-between w-96">
        <select
          name="program" // Importante: debe coincidir con la llave de tu objeto dataForm
          value={dataForm.program}
          onChange={handleChange}
          className="border p-2 rounded-md focus:outline-blue-500"
        >
          <option value="">-- Selecciona un programa --</option>
          <option value="Web Dev">Web Dev</option>
          <option value="UX/UI">UX/UI</option>
          <option value="Data">Data</option>
        </select>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="graduated"
            checked={dataForm.graduated}
            onChange={handleChange}
          />
          <span>¿Graduado?</span>
        </label>
        </div>
        <button
          type="submit"
          className="bg-blue-600 w-full text-white p-2 rounded-md hover:bg-blue-700 transition-all"
        >
          Guardar
        </button>
      </div>
    </form>
  );
}
