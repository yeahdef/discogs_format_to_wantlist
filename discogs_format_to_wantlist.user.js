// ==UserScript==
// @require http://code.jquery.com/jquery-latest.js
// @name         Add all format to wantlist
// @namespace    http://dollardialup.com/
// @version      0.1
// @description  adds buttons to discogs master release page for adding all of a certain format to your wantlist
// @author       Joey Liechty, Scott Powers
// @match        http://www.discogs.com/master/*
// @match        http://www.discogs.com/*/master/*
// @grant        none
// ==/UserScript==

function Add_Format($albumformat)
{
    $("#main_wrapper #page #versions tr td span.format").each(function(){

        if($(this).text().indexOf($albumformat) > -1)
        {
            if($(this).text().indexOf('Unofficial') == -1)
            {
                $(this).closest('tr').find('td.actions li.add_to_wantlist').trigger("mouseover").trigger("click");
            }
        }
    });
}


$(document).ready(function() {
    $("div.collections_buttons").css("height","auto");
    $("#page_aside div.section_content a.want_add_all_button").css('width', '100%');

    $('<br \\><a style="margin-top: 5px; width: 100%;" id="addalllp" class="button button_small">Add All LP To Want List</a>').insertAfter("#page_aside div.section_content a.want_add_all_button");
    $("#addalllp").click(function() { Add_Format("LP") });

    $('<br \\><a style="margin-top: 5px; width: 100%;" id="addallcd" class="button button_small">Add All CD To Want List</a>').insertAfter("#page_aside div.section_content a.want_add_all_button");
    $("#addallcd").click(function() { Add_Format("CD") });

    $('<br \\><a style="margin-top: 5px; width: 100%;" id="addallcassette" class="button button_small">Add All Cassette To Want List</a>').insertAfter("#page_aside div.section_content a.want_add_all_button");
    $("#addallcassette").click(function() { Add_Format("Cass") });
});