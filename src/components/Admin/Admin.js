import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './Admin.css'


const Admin = () => {
    const [register, setRegister] = useState([])

    useEffect(() => {
        
        fetch('http://localhost:5000/allVolunteer')
            .then(response => response.json())
            .then(data => setRegister(data))
    }, [register])


    const deleteEvent = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(result => {
            if(result){
                console.log(result)
            }    
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <img src="https://i.ibb.co/vJ36rM4/Group-1329.png" className="img-fluid mb-4" alt="" />
                    <div className="d-flex">
                        <img style={{ height: '25px' }} src="https://i.ibb.co/bgyzCV6/users-alt-1.png" className="img-fluid" alt="" />
                        <p>Volunteer register list</p>
                    </div>
                    <div className="d-flex">
                        <img style={{ height: '25px' }} src="https://i.ibb.co/3BSp44P/plus-1.png" alt="" />
                        <p>Add event</p>
                    </div>
                </div>
                <div className="col-md-10">
                    <h2>Volunteer register list</h2>
                    <div className="container">
                        <Table>
                            <thead>
                                <tr className="text-center">
                                    <th>Name</th>
                                    <th></th>
                                    <th>Email ID</th>
                                    <th></th>
                                    <th>Registration Date</th>
                                    <th>Volunteer List</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                        </Table>
                    </div>
                    {
                        register.map(reg =>
                            <div className="container" key={reg._id}>
                                <Table striped bordered hover>
                                    <tbody>
                                        <tr>
                                            <td> {reg.name}</td>
                                            <td>{reg.email}</td>
                                            <td>{reg.registrationDate}</td>
                                            <td>{reg.volunteerEvent}</td>
                                            <td> <img className="img-fluid" onClick={() => deleteEvent(reg._id)} style={{ backgroundColor: 'red', height: '25px' }} src="https://i.ibb.co/xgfms6g/trash-2-9.png" alt="" /></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Admin;