import React, { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData/volunteer'
import VolunteerType from '../VolunteerType/VolunteerType';

const Volunteer = () => {
    const [volunteer, setVolunteer] = useState([])
    
    useEffect(() => {
        const data = fakeData;
        setVolunteer(data)
    },[])

    return (
        <div className=" row mt-3">
            {
                volunteer.map(volunteer => <VolunteerType volunteer={volunteer} key={volunteer.id}></VolunteerType>)
            }
        </div>
    );
};

export default Volunteer;