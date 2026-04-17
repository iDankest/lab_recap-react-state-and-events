import { useState } from "react";

export function AddStudentForm () {
    const [dataForm, setDataForm] = useState({
        fullName: '',
        image: 'url',
        phone: 0,
        email: '',
        graduated: false
    })
}