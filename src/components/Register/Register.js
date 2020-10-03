import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Register.css';
import fakeData from '../../fakeData/volunteer'


const Register = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const { registerId } = useParams()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [volunteerInfo, setVolunteerInfo] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/allEvents')
        .then(response => response.json())
        .then(data => {
            const registerEvent = data.find(event => event.id === registerId)
            setVolunteerInfo(registerEvent)
        })
     },[])
   

     const onSubmit = data => {
        console.log(data);
    }

    return (
        <div>
            <img className="icon-img" src="https://i.ibb.co/vJ36rM4/Group-1329.png" alt="" />
            <Card className="card-style" >

                <div className="my-5">
                    <h3>Register as a Volunteer</h3>
                    <form className="volunteer-form text-center" onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Full Name" />
                        {errors.name && <span className="error">Name is required</span>}
                        <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="UserName or Email" />
                        {errors.email && <span className="error">Email is required</span>}
                        <input name="date" ref={register({ required: true })} placeholder="Date" />
                        {errors.date && <span className="error">Date is required</span>}
                        <input name="desicription" ref={register({ required: true })} placeholder="Desicription" />
                        {errors.desicription && <span className="error">Desicription is required</span>}
                      
                        <input name="name" defaultValue={volunteerInfo.name} ref={register({ required: true })} placeholder="Full Name" />
                        {errors.name && <span className="error">Name is required</span>}

                        <input type="submit" />
                    </form>
                </div>
            </Card>
        </div>
    );
};

export default Register;