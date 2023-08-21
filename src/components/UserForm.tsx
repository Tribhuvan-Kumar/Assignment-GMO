import { useState } from 'react';
import { TextField, Button } from '@mui/material';


import '../styles/userFrom.css'



const UserFrom = (props: any) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');


    const handleSubmit = (e: any) => {
        e.preventDefault();
        props.onSave({ name, phone, email });
    };


    return (
        <div className="first-page">
            <form onSubmit={handleSubmit}>
                <div className='textfield-resize'>
                    <TextField label='Name' value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className='textfield-resize'>
                    <TextField label='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <div className='textfield-resize'>
                    <TextField label='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div><Button type='submit'>Save and Continue</Button></div>
            </form>
        </div>
    );
};

export default UserFrom;