import React from 'react';
import { Card } from 'react-bootstrap';
import './LogIn.css'

const LogIn = () => {
    return (
        <div>
            <img src="https://i.ibb.co/vJ36rM4/Group-1329.png" alt=""  style={{ height: '80px', display:'block',margin: '0 auto', marginTop: '100px' }}/>
            <Card style={{ width: '25rem', margin: '0 auto', marginTop: '50px', textAlign:'center' }}>
       
          <div className="my-5">
          <h3>Login With</h3>
          <button className="google-button my-3" >Continue with Google</button>
          <p>Don't have account?<span className="commonColor">Create a account</span></p>
          </div>
      </Card>
        </div>
    );
};

export default LogIn;