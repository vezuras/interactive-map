// // Initialize the map centered on Quebec
// var map = L.map('map').setView([52.9399, -73.5491], 6); // Coordinates for Quebec

// // Add a tile layer from OpenStreetMap
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// // Fetch the annonces from the local API and add them to the map
// fetch('http://127.0.0.1:8000/annonces')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         // Utilisez les données pour afficher les annonces sur la carte
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('There has been a problem with your fetch operation:', error);
//     });




// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Fetch data from the API and add markers to the map
fetch('/annonces')
    .then(response => response.json())
    .then(data => {
        data.forEach(annonce => {
            var marker = L.marker([annonce.latitude, annonce.longitude]).addTo(map);
            var popupContent = `
                <b>${annonce.title}</b><br>
                ${annonce.description}<br>
                <a href="${annonce.url}" target="_blank">Voir plus</a>
            `;
            marker.bindPopup(popupContent);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
