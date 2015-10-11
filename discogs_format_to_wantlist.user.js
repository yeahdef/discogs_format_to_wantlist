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
  $("div.collections_buttons").css("height","auto");
  $("#page_aside div.section_content a.want_add_all_button").css('width', '100%');
  
  if(Has_Format("LP") == true)
  {
    $('<br \\><a style="margin-top: 5px; width: 100%;" id="addalllp" class="button button_small">Add All LP To Want List</a>').insertAfter("#page_aside div.section_content a.want_add_all_button");
    $("#addalllp").click(function() { Add_Format("LP") });
  }

  if(Has_Format("CD") == true)
  {
    $('<br \\><a style="margin-top: 5px; width: 100%;" id="addallcd" class="button button_small">Add All CD To Want List</a>').insertAfter("#page_aside div.section_content a.want_add_all_button");
    $("#addallcd").click(function() { Add_Format("CD") });
  }

  if(Has_Format("Cass") == true)
  {
    $('<br \\><a style="margin-top: 5px; width: 100%;" id="addallcassette" class="button button_small">Add All Cassette To Want List</a>').insertAfter("#page_aside div.section_content a.want_add_all_button");
    $("#addallcassette").click(function() { Add_Format("Cass") });
  }

  if(Has_Format("12\"") == true)
  {
    $('<br \\><a style="margin-top: 5px; width: 100%;" id="addall12" class="button button_small">Add All 12\" To Want List</a>').insertAfter("#page_aside div.section_content a.want_add_all_button");
    $("#addall12").click(function() { Add_Format("12") });
  }

  if(Has_Format("7\"") == true)
  {
    $('<br \\><a style="margin-top: 5px; width: 100%;" id="addall7" class="button button_small">Add All 7\" To Want List</a>').insertAfter("#page_aside div.section_content a.want_add_all_button");
    $("#addall7").click(function() { Add_Format("7") });
  }

});