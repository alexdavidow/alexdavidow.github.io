function show_port1(){
  $('.intro').hide("scale", 800);
  $('#skills').hide("scale", 800);
  $('#original').hide();
  $('#port_1').fadeIn(1100);
  $('#port_2').fadeIn(1100);
  $('#more').fadeIn(1100);
  $('#port_3').hide("scale", 800);
  $('#port_4').hide("scale", 800);
  $('.ui-dialog').hide("scale", 800);
}

function show_port_2(){
  $('#port_1').hide("scale", 800);
  $('#port_2').hide("scale", 800);
  $('.ui-dialog').hide("scale", 800);
  $('#port_3').fadeIn(1100);
  $('#port_4').fadeIn(1100);
  $('#more').hide();
  $('#original').fadeIn(900);
}

function about(){
  $('#port_1').hide("scale", 800);
  $('#port_2').hide("scale", 800);
  $('.ui-dialog').hide("scale", 800);
  $('#port_3').hide("scale", 800);
  $('#port_4').hide("scale", 800);
  $('#more').hide();
  $('#original').hide();
  $('.intro').show("scale", 1000);
  $('#skills').show("scale", 1000);
}


$(document).ready(function(){
  $('#ouac_screenshot').attr('src', "images/ouac_screenshot.jpg");  
  $('#cupcake_screenshot').attr('src', "images/cupcakegame_screenshot.jpg");
  $('#worldcup_screenshot').attr('src', "images/worldcupapp_screenshot.jpg");
  $('#simplechat_screenshot').attr('src', "images/simplechat_screenshot.jpg");
  
  $('.hidden').hide();
  
  $('#portfolio_nav').on('click', show_port1);
  $('#about_nav').on('click', about);
  $('#name').on('click', about);
  $('#more').on('click', show_port_2);
  $('#original').on('click', show_port1);
  
  $("#dialog_ouac").dialog({autoOpen: false});
  $("#ouac_screenshot").on('mouseover', function(){   
    $("#dialog_ouac").dialog( "close"); 
    $("#dialog_ouac").dialog( "option", "position", { my: "left top", at: "left bottom", of: $("#ouac_screenshot") } );
    $("#dialog_ouac").dialog( "open");
  });
  $("#dialog_ouac").on('mouseleave', function(){
    $("#dialog_ouac").dialog( "close");
  });


  $("#dialog_cupcake").dialog({autoOpen: false});
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

  $("#dialog_simplechat").dialog({autoOpen: false});
  $("#simplechat_screenshot").on('mouseover', function(){
    $("#dialog_simplechat").dialog( "close"); 
    $("#dialog_simplechat").dialog( "option", "position", { my: "left top", at: "left bottom", of: $("#simplechat_screenshot") } );
    $("#dialog_simplechat").dialog("open");
  });
  $("#dialog_simplechat").on('mouseleave', function(){
    $("#dialog_simplechat").dialog("close");
  });  


  // $('#big-image').attr('src', 'http://www.nasa.gov/centers/goddard/images/content/433226main_Misti_ComaCluster.jpg');
});