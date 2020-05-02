import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-calender-booking',
  templateUrl: './calender-booking.component.html',
  styleUrls: ['./calender-booking.component.scss']
})
export class CalenderBookingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $('.Show').click(function() {
      $('#target').show(500);
      $('.Show').hide(0);
      $('.Hide').show(0);
  });
  $('.Hide').click(function() {
      $('#target').hide(500);
      $('.Show').show(0);
      $('.Hide').hide(0);
  });
  $('.togglee').click(function() {
      $('#target').toggle('slow');
  });

  
  
  }


}
