Template.header.events({
  'click .scroll-link': function(e){
    e.preventDefault();
    var path = e.currentTarget.attributes['href'].value;
    var section = $("#" + path);
    window.history.pushState(path, "", "/" + path);

    isScrolling = true;
    $('html, body').animate({
      scrollTop: section.offset().top
    }, 1000, function() { isScrolling = false;});
  },

  'click .navbar-brand': function(){
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  }
});

isScrolling = false;
