import React, { useState } from 'react';


// const HospitalSearch = () => {
//   const [zipcode, setZipcode] = useState('');
//   const [map, setMap] = useState(null);

//   const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

//   const handleChange = (e) => {
//     setZipcode(e.target.value);
//   };

//   const searchHospitals = () => {
//     if (!zipcode) {
//       alert("Please enter a valid zipcode.");
//       return;
//     }

// <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`}></script>
//     // const apiKey = 'AIzaSyAAa98ZrKCX0Ydrbw-z2DIKR8w-kHbO0pA';
//     fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=${apiKey}`)
//       .then(response => response.json())
//       .then(data => {
//         if (data.status === "OK") {
//           const location = data.results[0].geometry.location;
//           initMap(location.lat, location.lng);
//         } else {
//           alert("Invalid zipcode. Please try again.");
//         }
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         alert("There was an error processing your request.");
//       });
//   };
  

//   const initMap = (lat, lng) => {
//     const mapOptions = {
//       center: { lat: lat, lng: lng },
//       zoom: 12
//     };
//     const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);

//     const service = new window.google.maps.places.PlacesService(map);
//     const request = {
//       location: { lat: lat, lng: lng },
//       radius: '5000',
//       type: ['hospital']
//     };

//     service.nearbySearch(request, (results, status) => {
//       if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//         for (let i = 0; i < results.length; i++) {
//           const place = results[i];
//           new window.google.maps.Marker({
//             position: place.geometry.location,
//             map: map,
//             title: place.name
//           });
//         }
//       }
//     });

//     setMap(map);
//   };

//   return (
//     <div>
//       <h2>Find Hospitals Near You</h2>
//       <input
//         type="text"
//         value={zipcode}
//         onChange={handleChange}
//         placeholder="Enter Zipcode"
//         style={{ marginBottom: '10px', padding: '5px', fontSize: '16px' }}
//       />
//       <button onClick={searchHospitals} style={{ padding: '5px 10px', fontSize: '16px' }}>Search Hospitals</button>
//       <div id="map" style={{ height: '500px', width: '100%', marginTop: '20px' }}></div>
//     </div>
//   );
// };

// export default HospitalSearch;
