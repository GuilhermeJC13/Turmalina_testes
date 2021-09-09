import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  map;
  
  constructor() { 
  }

  ngAfterViewInit(): void {
    this.createMap();
  }

  createMap() {
    const paraibaCoordinates = {
      lat:-7.1311923,
      lng: -36.8275259
    };

    const zoomLevel = 12;

    this.map = L.map('map', {
      center: [paraibaCoordinates.lat, paraibaCoordinates.lng],
      zoom: zoomLevel
    })

    const mainLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      id: 'mapbox/light-v9',
      tileSize: 512,
      zoomOffset: -1,
      maxZoom: 18,
      minZoom: 6
    });

    mainLayer.addTo(this.map);
  }

}
