import React, { useEffect, useState } from 'react';


const Admin = () => {
    const [register, setRegister] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allVolunteer')
            .then(response => response.json())
            .then(data => setRegister(data))
    }, [])

   
    const deleteEvent = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(result => {
            alert('deleted successfully');
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
                        <div className="row my-3">
                            <div className="col-sm "><h6>Name</h6></div>
                            <div className="col-sm "><h6>Email ID</h6></div>
                            <div className="col-sm"><h6>Ragistating Date</h6></div>
                            <div className="col-sm"><h6>Volunteer List</h6></div>
                            <div className="col-sm"><h6></h6></div>
                        </div>
                    </div>
                    {
                        register.map(regi =>

                            <div key={regi._id} className="container">
                                <div className="row">
                                    <div className="col-sm my-p-2">
                                        {regi.name}
                                    </div>
                                    <div className="col-sm">
                                        {regi.email}
                                    </div>
                                    <div className="col-sm">
                                        {regi.registrationDate}
                                    </div>
                                    <div className="col-sm">
                                        {regi.volunteerEvent}
                                    </div>
                                    <div className="col-sm">
                                    <img className="img-fluid" onClick={() => deleteEvent(regi._id)} style={{backgroundColor:'red', height:'25px'}} src="https://i.ibb.co/xgfms6g/trash-2-9.png" alt=""/>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Admin;