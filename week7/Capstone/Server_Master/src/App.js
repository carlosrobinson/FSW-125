import React, {useState, useEffect} from "react"
import axios from "axios"
import Students from "./components/Students.js"
import AddStudentForm from "./components/AddStudentForm.js"
//import { delete } from "../../routes/studentRouter.js"

function App() {
  const [data, setStudents] = useState([])

function getStudent() {
  axios.get("/data")
  .then(res => setStudents(res.data))
  .catch(err => console.log(err))
}

function addStudent(newData) {
  axios.post("/data", newData)
  .then(res => {
    setStudents(prevStudent => [...prevStudent, res.data])
  }) 
  .catch(err => console.log(err))
}

function deleteStudent(studentId) {
  axios.delete(`/data/${studentId}`)
  .then(res => {
    setStudents(prevStudent => prevStudent.filter(student => student._id !== studentId)) 
  })
  .catch(err => console.log(err))
}

function editStudent( updates,studentId) {
  axios.put(`/data/${studentId}`, updates)
  .then(res => {
    setStudents(prevStudent => prevStudent.map(student => student._id !== studentId ? student : res.data))
  })
  .catch(err => console.log(err))
}

  useEffect(() => {
    getStudent()
  }, []) 
 
  return (
    <div className="students">
       <h1 className="header">Capstone Project</h1>
        <AddStudentForm
        submit= {addStudent}
        btnTxt= "Add Student"
        />
        {
        data.map(student => 
        <Students 
          {...student} key={student._id}
          deleteStudent= {deleteStudent}
          editStudent= {editStudent}/>)}
    </div>
  ); 
}

export default App;
