import axios from 'axios';

export function getStudents() {
  return axios.get('http://127.0.0.1:8000/volunteers/')
    .then(response => response.data)
}

export function deleteStudent(studentId) {
    return axios.delete('http://127.0.0.1:8000/volunteers/' + studentId + '/', {
     method: 'DELETE',
     headers: {
       'Accept':'application/json',
       'Content-Type':'application/json'
     }
    })
    .then(response => response.data)
  }

export function addStudent(student){
  return axios.post('http://127.0.0.1:8000/volunteers/', {
    studentId:null,
    FirstName:student.FirstName.value,
    LastName:student.LastName.value,
    PhoneNo:student.PhoneNo.value,
    Email:student.Email.value,
    City:student.City.value
  })
    .then(response=>response.data)
}


export function updateStudent(stuid, student) {
  console.log(student)
    return axios.put('http://127.0.0.1:8000/volunteers/' + stuid + '/', {
      FirstName:student.FirstName.value,
      LastName:student.LastName.value,
      PhoneNo:student.PhoneNo.value,
      Email:student.Email.value,
      City:student.City.value
    })
     .then(response => response.data)
  }

