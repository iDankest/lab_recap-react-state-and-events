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
            
        </form>
    );
}