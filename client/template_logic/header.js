Template.header.events({
  'click .scroll-link': function(e){
    debugger;
    e.preventDefault();
    var path = e.currentTarget.attributes['href'].value;
    var section = $("#" + path);
    $('html, body').animate({
      scrollTop: section.offset().top
    }, 1000);
    window.history.pushState(path, "", "/" + path);
  }
});
