jQuery.contentPanel
========

A simple way to create Themeroller compatible
alerts (notices) and errors. I've been carrying this
around for a while now, so I can't really recall if I
wrote any of this or if I took this from a sample or website.
If you believe this is your work, let me know and I will either take
it down, or credit you. It's your call.


Usage
-----
Your markup should look like this (using the Cupertino theme from jQueryUI.com):

    <html>
    <head>
        <link rel="stylesheet" type="text/css" href="jquery.contentpanel.css" />
        <link href="cupertino/jquery-ui.css" rel="stylesheet" type="text/css" />
    <head>
    <body>
		<!-- this next div is empty, waiting for text to be injected via js. -->
        <div id="testWriteError"></div>
		<div id="testWriteErrorAuto">This div already had text. Probably generated from server-side code.</div>
		
        <script language="javascript" type="text/javascript" src="jquery.js"></script>
		<script language="javascript" type="text/javascript" src="jquery-ui.js"></script>
        <script language="javascript" type="text/javascript" src="jquery.alert.js"></script>    
        <script language="javascript" type="text/javascript"> 
            $(document).ready(function() {
                $('#testWriteError').writeError('You have an error.');
				$('#testWriteErrorAuto').writeErrorAuto();
            });
        </script>
    </body>
    </html>

This plugin was developed against jQuery 1.5.1 and jQuery UI 1.8.14.