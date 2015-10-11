// ==UserScript==
// @require http://code.jquery.com/jquery-latest.js
// @name         Add all format to wantlist
// @namespace    http://dollardialup.com/
// @version      0.2
// @description  adds buttons to discogs master release page for adding all of a certain format to your wantlist
// @author       Joey Liechty, Scott Powers
// @match        http://www.discogs.com/master/*
// @match        http://www.discogs.com/*/master/*
// @grant        none
// ==/UserScript==

function Add_Format($albumformat)
{
  $("#main_wrapper #page #versions tr td span.format").each(function()
  {
    if($(this).text().indexOf($albumformat) > -1)
    {
      if($(this).text().indexOf('Unofficial') == -1)
      {
        $(this).closest('tr').find('td.actions li.add_to_wantlist').trigger("mouseover").trigger("click");
      }
    }
  });
}

function Has_Format($albumformat)
{
  result = false;
  $("#main_wrapper #page #versions tr td span.format").each(function(){
    if($(this).text().indexOf($albumformat) > -1)
    {
      if($(this).text().indexOf('Unofficial') == -1)
      {
        result = true;
      } 
    } 
  });
  return result;
}

$(document).ready(function() {
  // set format details
  var formats = {
    "lp": {"id": "addalllp", "searchkey": "LP", "text": "LP"},
    "cd": {"id": "addallcd", "searchkey": "CD", "text": "CD"},
    "cass": {"id": "addallcass", "searchkey": "Cass", "text": "Cassette"},
    "12": {"id": "addall12", "searchkey": "12\"", "text": "12 inch"},
    "7": {"id": "addall7", "searchkey": "7\"", "text": "7 inch"},
  };
  // set the css of the remove button
  $("div.collections_buttons").css("height","auto");
  $("#page_aside div.section_content a.want_add_all_button").css('width', '100%');
  // iterate through formats and make buttons
  for (var key in formats){
    if(Has_Format(formats[key]["searchkey"]) == true)
    {
      $('<br \\><a style="margin-top: 5px; width: 100%;" id="' + formats[key]['id'] + '" class="button button_small">Add All ' + formats[key]["text"] + ' To Want List</a>').insertAfter("#page_aside div.section_content a.want_add_all_button");
      $("#" + formats[key]['id']).click(function() { Add_Format(formats[key]["searchkey"]) });
    }
  }

});