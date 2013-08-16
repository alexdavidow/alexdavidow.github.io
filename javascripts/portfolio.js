function show_port1(){
  $('.intro').hide("scale", 800);
  $('#port_1').fadeIn(1100);
  $('#port_2').fadeIn(1100);
  // $('#contact').hide("scale", 1000);
}

function about(){
  $('#port_1').hide("scale", 800);
  $('#port_2').hide("scale", 800);
  // $('#contact').hide("scale", 1000);
  $('.intro').show("scale", 1000);
  $('.ui-dialog').hide("scale", 800);
}

// function contact() {
//   $('#port_1').hide("scale", 1000);
//   $('#port_2').hide("scale", 1000);
//   $('.ui-dialog').hide("scale", 1000);
//   $('.intro').hide("scale", 1000);
//   $("#contact").fadeIn(1000);
// }

$(document).ready(function(){
  $('#ouac_screenshot').attr('src', "images/ouac-screenshot.png");  
  $('#cupcake_screenshot').attr('src', "images/cupcakegame_screenshot.png");
  $('#worldcup_screenshot').attr('src', "images/worldcupapp_screenshot.png");
  $('#simplechat_screenshot').attr('src', "images/simplechat_screenshot.png");
  
  $('.hidden').hide();
  
  $('#portfolio_nav').on('click', show_port1);
  $('#about_nav').on('click', about);
  $('#name').on('click', about);
  
  $("#dialog_cupcake").dialog({autoOpen: false});
  // $("#dialog_cupcake").dialog({ position: {my: "center bottom", at: "center top", of: "#cupcake_screenshot"}});
  $("#cupcake_screenshot").on('mouseover', function(){   
    $("#dialog_cupcake").dialog( "close"); 
    $("#dialog_cupcake").dialog( "option", "position", { my: "left top", at: "left bottom", of: $("#cupcake_screenshot") } );
    $("#dialog_cupcake").dialog( "open");
  });
  $("#dialog_cupcake").on('mouseleave', function(){
    $("#dialog_cupcake").dialog( "close");
  });

  $("#dialog_worldcup").dialog({autoOpen: false});
  $("#worldcup_screenshot").on('mouseover', function(){
    $("#dialog_worldcup").dialog( "close"); 
    $("#dialog_worldcup").dialog( "option", "position", { my: "left top", at: "left bottom", of: $("#worldcup_screenshot") } );
    $("#dialog_worldcup").dialog("open");
  });
  $("#dialog_worldcup").on('mouseleave', function(){
    $("#dialog_worldcup").dialog("close");
  });


  // $('#big-image').attr('src', 'http://www.nasa.gov/centers/goddard/images/content/433226main_Misti_ComaCluster.jpg');
});