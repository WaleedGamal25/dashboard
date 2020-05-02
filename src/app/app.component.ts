import { Component } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'waleedgamal';


  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
    $("#menu-toggle1").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
    // $("body").niceScroll({
    //   cursorcolor:"#FFAC00",
    //   cursorwidth:"8px",
    //   cursorborder: "0px solid #fff", // css definition for cursor border
    //   cursorborderradius: "5px",
    //   scrollspeed: 100,
    //   mousescrollstep: 20
    //   });
    
    // $(".list-group-flush").niceScroll({
    //   cursorcolor:"#fff",
    //   cursorwidth:"8px",
    //   cursorborder: "0px solid #fff", // css definition for cursor border
    //   cursorborderradius: "5px",
    //   scrollspeed: 100,
    //   mousescrollstep: 20
    //   });

    //   $('.list-group-flush').getNiceScroll().resize();


  $('.toggle').click(function(e) {
  	e.preventDefault();
  
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});
  
$(document).ready(function() {
  $(".tab").click(function () {
      $(".tab").removeClass("active");
      // $(".tab").addClass("active"); // instead of this do the below 
      $(this).addClass("active");   
  });
  });  

  $(document).ready(function() {
    $(".sub-tag").click(function () {
        $(".sub-tag").removeClass("active");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).addClass("active");   
    });
    });  

  }
}
