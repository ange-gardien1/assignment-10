
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Users } from '../models/users';
import { Position } from '@capacitor/geolocation';
import * as L from 'leaflet';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.page.html',
  styleUrls: ['./user-account.page.scss'],
})
export class UserAccountPage implements OnInit {

  user: Users | null = null;
  position : Position | null = null
  map: any;
  constructor(private userService : UserService) { }

  ngOnInit() {

    this.userService.getCurrentUser().subscribe((UserData: Users)=>{
      this.user = UserData;
    },
    (error)=>{
      console.error('Error fetching user details', error);
    });

  //   this.loadMap();
  // }
  // loadMap() {
  //   // Initialize the map
  //   const map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 15,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   });

  //   // Get user's location and update the map
  //   this.getUserLocation(map);
  // }

  // getUserLocation(map) {
  //   this.geolocation.getCurrentPosition().then((position) => {
  //     // Get user's latitude and longitude
  //     const userLocation = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude
  //     };

  //     // Center the map on the user's location
  //     map.setCenter(userLocation);

  //     // Add a marker at the user's location
  //     const marker = new google.maps.Marker({
  //       position: userLocation,
  //       map: map,
  //       title: 'Your Location'
  //     });
  //   }).catch((error) => {
  //     console.error('Error getting user location:', error);
  //   });
  }















  getGPS() {
    this.userService.getCurrentPosition().subscribe(
      (result) => {
        this.position = result;
        this.initMap();
      },
      (error) => {
        console.error('Error getting user location', error);
      }
    );
  }

private initMap() {
  if (this.position) {
    this.map = L.map('map').setView(
      [this.position.coords.latitude, this.position.coords.longitude],
      13
    );

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);
    const customIcon = L.icon({
      iconUrl: 'path/to/custom/icon.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });
    L.marker([
      this.position.coords.latitude,
      this.position.coords.longitude,
    ], { icon: customIcon }).addTo(this.map).bindPopup('Your Location');
  }
}
}
