// Initialize the map centered on Quebec
var map = L.map('map').setView([52.9399, -73.5491], 6); // Coordinates for Quebec

// Add a tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Fetch the annonces from the local API and add them to the map
fetch('http://127.0.0.1:8000/annonces')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Utilisez les données pour afficher les annonces sur la carte
        console.log(data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
