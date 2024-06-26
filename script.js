// Initialize the map centered on Quebec
var map = L.map('map').setView([52.9399, -73.5491], 6); // Coordinates for Quebec

// Add a tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Fetch the annonces from the server and add them to the map
fetch('https://vezuras.github.io/interactive-map/annonces')
    .then(response => response.json())
    .then(data => {
        console.log("Annonces data:", data); // Log the data to check its structure and content
        data.forEach(annonce => {
            if (annonce.latitude && annonce.longitude) {
                L.marker([annonce.latitude, annonce.longitude])
                    .addTo(map)
                    .bindPopup(`<b>${annonce.title}</b><br>${annonce.description}`);
            } else {
                console.warn(`Missing coordinates for: ${annonce.title}`);
            }
        });
    })
    .catch(error => console.error('Error fetching annonces:', error));
