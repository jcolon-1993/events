$(function(){
  var ids = '';
  // The selector finds all list items on the page.
  var $listItems = $('li');

// The .on() method creates an
// event listener, which waits for
// when the user moves a mouse
// over a list item or clicks on it
$listItems.on("mouseover click", function()
{
  ids = this.id;
  $listItems.children("span").remove();
  $(this).append(" <span class='priorty'> " + ids + '</span>');
});

// The .mouseout () method
// triggers the removal of any child
// <span> elements to prevent
// build-up of added values.
$listItems.on("mouseout", function()
{
  $(this).children("span").remove();
});

});
