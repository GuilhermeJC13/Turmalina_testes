
var mymap = L.map('mapid').setView([-7.1311923, -36.8275259], 8);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZ3VpcmNvcyIsImEiOiJja3N5cWpkczEybTlmMnVwNzdsMm4yc2Y3In0.9PyBBUrf4Yk7bDpdI-Fz5g'
    }).addTo(mymap);