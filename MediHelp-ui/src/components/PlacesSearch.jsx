import React, { useState } from 'react';


//call of the Backend
const PlacesSearch = () => {

    const [zipCode, setZipCode] = useState('');
    const [places, setPlaces] = useState([]);

const handleSearch = async()=> {
    try{
        const response = await fetch(`http://localhost:8080/healthcare?zipCode=${zipCode}`);
        if (!response.ok){
            throw new Error('Network response was not ok. Check backend connection.');
        }
        const data = await response.json();
        setPlaces(data.results);
    }
    catch(error){
        console.error('Error fetching places: ',error);
    }
    
};
return (
    <div>
        <input type="text" value={zipCode} onChange = {(e) => setZipCode(e.target.value)}
        placeholder = "Enter zip code..." /> <button onClick = {handleSearch}>Search</button> 

    <ul>{places.map((place,index) =>(
        <li key={index}>
            {place.name}
        </li>
    ))}
    </ul>
    </div>
 )
}

export default PlacesSearch;