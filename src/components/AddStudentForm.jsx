import { format } from "node:path";
import { useState } from "react";
                            //recibimos la funcion del padre
export function AddStudentForm (onAddstudent) {
    const [dataForm, setDataForm] = useState({
        fullName: '',
        image: 'url',
        phone: 0,
        email: '',
        program: 'Web Dev',
        graduated: false
    })
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setDataForm({
            ...dataForm,
            [name]: type === 'checkbox' ? checked : value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()//Evita el recargar de la pagina que hace por defecto

        //Tengo que averiguar como hacer un id unico
        const newStudent = {
            ...dataForm,
            //Añadimos el id unico
        }
        onAddstudent(newStudent)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className=" text-2xl font-bold mb-4 text-slate-800">Añadir</h2>

            <div className="flex flex-col gap-3">
                <input 
                    name="fulName"
                    placeholder="Nombre"
                    value={dataForm.fullName}
                    onChange={handleChange}
                    className=" border p-2 rounded-md focus:outline-blue-500"
                />
                <input 
                    name="image"
                    placeholder="Imagen"
                    value={dataForm.image}
                    onChange={handleChange}
                    className=" border p-2 rounded-md focus:outline-blue-500"
                />
                <input 
                    name="phone"
                    placeholder="Phone"
                    value={dataForm.phone}
                    onChange={handleChange}
                    className=" border p-2 rounded-md focus:outline-blue-500"
                />
                <input 
                    name="email"
                    placeholder="Email"
                    value={dataForm.email}
                    onChange={handleChange}
                    className=" border p-2 rounded-md focus:outline-blue-500"
                />
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        name="graduated"
                        checked={dataForm.graduated}
                        onChange={handleChange}
                    />
                    <span>¿Graduado?</span>
                </label>
                <button type="submit" className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-all">
                    Guardar
                </button>
            </div>
        </form>
    );
}