import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#myCollapsible').collapse({
      toggle: true
      });
      $(document).ready(function(){
        $('.collapse').on('show.bs.collapse', function (e) {
            $('.collapse').collapse("hide")
        })


    })

    
      
  }

}
