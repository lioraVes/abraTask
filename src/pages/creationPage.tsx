import React ,{useState} from 'react';

const CreationPage: React.FC = () => {
    const [name,setName]=useState("");
    const [type,setType]=useState("");
    const [address,setAddress]=useState("");

    // const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    //     //call post
    //     e.preventDefault();
    //     console.log(name);
    //     console.log(type);
    //     console.log(address);
    // }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/place', {
            method: 'POST',
            body: JSON.stringify({ name, type, address }),
            });

            if (!response) {
            throw new Error('could not submit the form');
            }
        } 
        catch (error) {
            console.error('could not submit the form: ', error);
        } 
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        // console.log(name);
    };
    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setType(e.target.value);
        // console.log(type);
    };
    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value); 
        // console.log(address);
    };

    return (
        <div>
           <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" maxLength={25} value={name || ""} onChange={handleNameChange} required/> 
            <br />
            <label>Type: </label>
            <select name="selectedType" value={type} onChange={handleTypeChange} required>
                <option value="" disabled>Select a type</option>
                <option value="restaurant">Restaurant</option>
                <option value="hotel">Hotel</option>
                <option value="park">Park</option>
            </select><br/>
            <label>Address: </label>
            <input type="text" name="address" value={address || ""} onChange={handleAddressChange} required/><br />
            <button type="submit" >Submit</button>
           </form>
        </div>
    );
};

export default CreationPage;



