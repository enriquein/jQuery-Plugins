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
    var title = $heading.text();
    
    $this.addClass('ui-panel ui-widget ui-helper-reset ui-widget-header')
    $heading.addClass('ui-panel-header ui-helper-reset ui-corner-top');
    $heading.text('');
    $('<span>' + title + '</span>').appendTo($heading);
    $this.find('div:first').addClass('ui-panel-content ui-helper-reset ui-widget-content ui-corner-bottom');
}