import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }

  handleEventClicked(data) {
    console.log('received:', data)
  }

  constructor() { }

  ngOnInit() {
  }

}
