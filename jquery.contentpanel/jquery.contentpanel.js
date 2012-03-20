/*
jQuery.contentPanel (https://www.github.com/enriquein/jQuery.contentpanel)
========

A simple content panel heavilly inspired on
jQuery UI's accordion panels, but individual
and not animated. The panel uses CSS classes
used in Themeroller themes, so it's fully
themeable that way. 


Usage
-----
Your markup should look like this (using the Cupertino theme from jQueryUI.com):

    <html>
    <head>
        <link rel="stylesheet" type="text/css" href="jquery.contentpanel.css" />
        <link href="cupertino/jquery-ui.css" rel="stylesheet" type="text/css" />
    <head>
    <body>
        <div id="test">
            <h3>Title has to go inside a h3 tag.</h3>
            <div>
                Here you can put whatever. Images, divs, p tags.
                Anything goes. I think.
            </div>
        </div>

        <script language="javascript" type="text/javascript" src="jquery.js"></script>
        <script language="javascript" type="text/javascript" src="jquery.contentpanel.js"></script>    
        <script language="javascript" type="text/javascript"> 
            $(document).ready(function() {
                $('#test').contentPanel();
            });
        </script>
    </body>
    </html>

That's all there is to it. This plugin was developed 
against jQuery 1.5.1 and jQuery UI 1.8.14.

*/

(function($) {
    $.fn.extend( { 
        contentPanel: function() {
            return this.each(createContentPanel);
        }
    });
})(jQuery);

function createContentPanel() {
    var $this = $(this);
    var $heading = $this.find('h3:first'); 
    var title = $heading.html();
    
    $this.addClass('ui-panel ui-widget ui-helper-reset')
    $heading.addClass('ui-panel-header ui-helper-reset ui-state-default ui-corner-top');
    $heading.html('');
    $('<span>' + title + '</span>').appendTo($heading);
    $this.find('div:first').addClass('ui-panel-content ui-helper-reset ui-widget-content ui-corner-bottom');
}