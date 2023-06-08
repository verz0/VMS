import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { getStudents, deleteStudent } from '../services/StudentService';
import AddStudentModal from './AddStudentModal';
import UpdateStudentModal from './UpdateStudentModal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Manage = () => {
  const [students, setStudents] = useState([]);
  const [addModalShow, setAddModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [editStudent, setEditStudent] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (students.length && !isUpdated) {
      return;
    }
    getStudents().then((data) => {
      if (mounted) {
        setStudents(data);
      }
    });
    return () => {
      mounted = false;
      setIsUpdated(false);
    };
  }, [isUpdated, students]);

  const handleUpdate = (e, stu) => {
    e.preventDefault();
    setEditModalShow(true);
    setEditStudent(stu);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setAddModalShow(true);
  };

  const handleDelete = (e, studentId) => {
    e.preventDefault();
    if (window.confirm('Are you sure?')) {
      deleteStudent(studentId)
        .then((result) => {
          toast.success(result); // Show success notification
          setIsUpdated(true);
        })
        .catch((error) => {
          toast.error('Failed to Delete Student'); // Show error notification
        });
    }
  };

  let AddModelClose = () => setAddModalShow(false);
  let EditModelClose = () => setEditModalShow(false);

  return (
    <div className="container-fluid side-container">
      <h1 className="text-center mb-4" style={{ marginTop: '50px', zIndex: 2, position: 'relative' }}>
        Manage Volunteers
      </h1>
      <div className="row side-row">
        <p id="manage"></p>
        <Table striped bordered hover className="react-bootstrap-table text-center" id="dataTable" style={{ zIndex: 1 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone No</th>
              <th>Email</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((stu) => (
              <tr key={stu.id}>
                <td>{stu.studentId}</td>
                <td>{stu.FirstName}</td>
                <td>{stu.LastName}</td>
                <td>{stu.PhoneNo}</td>
                <td>{stu.Email}</td>
                <td>{stu.City}</td>
                <td>
                  <Button className="mr-2" variant="danger" onClick={(event) => handleDelete(event, stu.studentId)}>
                    <FiTrash2 />
                  </Button>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <Button className="mr-2" onClick={(event) => handleUpdate(event, stu)}>
                    <FiEdit2 />
                  </Button>
                  <UpdateStudentModal show={editModalShow} student={editStudent} setUpdated={setIsUpdated} onHide={EditModelClose} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button variant="primary" onClick={handleAdd} style={{ zIndex: 1 }}>
            Add Volunteer
          </Button>
          <AddStudentModal show={addModalShow} setUpdated={setIsUpdated} onHide={AddModelClose} />
        </ButtonToolbar>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Manage;
