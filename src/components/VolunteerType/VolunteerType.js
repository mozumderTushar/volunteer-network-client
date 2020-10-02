import React from 'react';
import { Link } from 'react-router-dom';
import './VolunteerType.css'

const VolunteerType = (props) => {
    const { img, name, id } = props.volunteer;
    return (
        <div className="col-md-3 p-3">
            <Link to={`/register/${id}`}>
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">{name}</p>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default VolunteerType;