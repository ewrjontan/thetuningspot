var $mobileMenuOpen = false;
var $mouseOverMenu = false;
var $rentalItemsOpen = false;
var $eventItemsOpen = false
var $scrollPos;

function parallax(position){
  console.log("switching images");
  console.log("position: " + position);
  if (position == 0){
    console.log("image one");
    $(".MainImageContainer").css("background", "url('https://paperandthread.com/g/car/car-alternator-auto-repair-car-wont-start-engine-problems.jpg')");
  }else if (position == 450){
    console.log("image two");
    $(".MainImageContainer").css("background", "url('http://paperandthread.com/g/fin/find-local-and-reliable-mechanic-in-beldon-contact-too-easy-mobile.jpg')");
  };
}


$(document).ready(function(){
  /*//make sure header is visible on-load and initial image height is set due to parallex function
  $(".MainPageHeader").css("visibility", "visible");
  $(".MainImageContainer").css("height", "350px");

  //for parallax scrolling
  $(window).scroll(function(){
    $scrollPos = $(document).scrollTop();
    console.log($scrollPos);

    if ($scrollPos < 450){
      //Make page header visible and reset container height
      $(".MainPageHeader").css("visibility", "visible"); 
      $(".MainImageContainer").css("height", "350px");
      parallax(0); 
    }
    if  ($scrollPos >=  450){
      //hide page header
      console.log("position over 450");
      $(".MainPageHeader").css("visibility", "hidden");
      //set height of container to full screen height
      $(".MainImageContainer").css("height", "100vh");
      parallax(450);
    };

  });*/


  //Mobile nav click functions
  $("#mobile-nav-button").click(function(){
    console.log("Hello!");
    
    if ($mobileMenuOpen == false){
      $("#mobile-nav-menu-container").css("display", "inline");
      $("body").css("margin-left", "50%");
      $("#nav-container").css("margin-left", "50%");
      setTimeout(function(){ $mobileMenuOpen = true; }, 1000);  
    };
    
  });
  
  $("#mobile-nav-menu-container").hover(
    function() {
      console.log("Mouse over!");
      $mouseOverMenu = true; 
    }, function() {
      console.log("mouse leave");
      $mouseOverMenu = false;
    }
  );

  //For additional menu items
  $("#nav-rental-button").click(function(){
    if ($rentalItemsOpen == false){
      $("#rental-items").slideDown();
      $rentalItemsOpen = true;
    }else if ($rentalItemsOpen){
      $("#rental-items").slideUp(); 
      $rentalItemsOpen = false; 
    }
  });

  $("#nav-events-button").click(function(){
    if ($eventItemsOpen == false){
      $("#event-items").slideDown();
      $eventItemsOpen = true;
    }else if ($eventItemsOpen){
      $("#event-items").slideUp(); 
      $eventItemsOpen = false; 
    }
  });


  //to hide mobile menu
  $("body").click(function(){
    
    if ($mobileMenuOpen && $mouseOverMenu == false){
      console.log("yo 2");
      $mobileMenuOpen = false;
      $("#mobile-nav-menu-container").css({"display": "none", "width": "0"});
      $("body").css("margin-left", "0px");
      $("#nav-container").css("margin-left", "auto");

      //close addition menu item containers
      if ($rentalItemsOpen){
        $("#rental-items").slideUp(); 
        $rentalItemsOpen = false; 
      };

      if ($eventItemsOpen){
        $("#event-items").slideUp(); 
        $eventItemsOpen = false; 
      };

    };
  })
});
