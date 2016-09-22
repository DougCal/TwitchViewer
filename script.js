var id = 'jhoj5nm5ftghejad68mctbx338152e5';

$(document).ready(function() {
  $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?client_id=' + id, function(data) {
    if (data.stream === null) {                     $("#fcc").prepend("<h2>offline</h2>");
    }else{
      $("#fccColor").css("background-color", "#4cff4c");
      $("#fcc").prepend("<a href="+data.stream.channel.url+" target=\"_blank\"><h2>"+data.stream.game+"</h2></a>");
    }
  });
  if($("#fcc").text())
    $("#fcc").prepend("<h2 class=text-center>FreeCodeCamp's account no longer exists</h2>");
  
  $.getJSON('https://api.twitch.tv/kraken/streams/gamegrumps?client_id=' + id, function(data) {
    if (data.stream === null) {                     $("#ggrumps").prepend("<h2>offline</h2>");
    }else{
      $("#ggColor").css("background-color", "#4cff4c");
      $("#ggrumps").prepend("<a href="+data.stream.channel.url+" target=\"_blank\"><h2>"+data.stream.game+"</h2></a>");
    }
  });
  if($("#ggrumps").text())
    $("#ggrumps").prepend("<h2 class=text-center>GameGrumps' account no longer exists</h2>");
  
  $.getJSON('https://api.twitch.tv/kraken/streams/medrybw?client_id=' + id, function(data) {
    if (data.stream === null) {                     $("#medrybw").prepend("<h2>offline</h2>");
    }else if(data.stream._id){
      $("#mbwColor").css("background-color", "#4cff4c");
      $("#medrybw").prepend("<a href="+data.stream.channel.url+" target=\"_blank\"><h2>"+data.stream.game+"</h2></a>");      
    }
  });
  if($("#medrybw").text())
    $("#medrybw").prepend("<h2 class=text-center>MedryBW's account no longer exists</h2>");
  
  $.getJSON('https://api.twitch.tv/kraken/streams/deadmau5?client_id=' + id, function(data) {
    if (data.stream === null) {                     $("#deadmau5").prepend("<h2>offline</h2>");
    }else{
      $("#mau5Color").css("background-color", "#4cff4c");
      $("#deadmau5").prepend("<a href="+data.stream.channel.url+" target=\"_blank\"><h2>"+data.stream.game+"</h2></a>");
    }
  });
  if($("#deadmau5").text())
    $("#deadmau5").prepend("<h2 class=text-center>deadmau5's account no longer exists</h2>");
  
  $.getJSON('https://api.twitch.tv/kraken/streams/unrivaledtournaments?client_id=' + id, function(data) {
    if (data.stream === null) {                    $("#unrivaledt").prepend("<h2>offline</h2>");
    }else{
     $("#unrivColor").css("background-color", "#4cff4c");
     $("#unrivaledt").prepend("<a href="+data.stream.channel.url+" target=\"_blank\"><h2>"+data.stream.game+"</h2></a>");
    }
  });
  if($("#unrivaledt").text())
    $("#unrivaledt").prepend("<h2 class=text-center>UnrivaledTournaments' account no longer exists</h2>");
  
  $.getJSON('https://api.twitch.tv/kraken/streams/bifuteki?client_id=' + id, function(data) {
    if (data.stream === null) {                    $("#bifuteki").prepend("<h2>offline</h2>");
    }else{
     $("#bifColor").css("background-color", "#4cff4c");
     $("#bifuteki").prepend("<a href="+data.stream.channel.url+" target=\"_blank\"><h2>"+data.stream.game+"</h2></a>");
    }
  });
  if($("#bifuteki").text())
    $("#bifuteki").prepend("<h2 class=text-center>bifuteki's account no longer exists</h2>");
});
