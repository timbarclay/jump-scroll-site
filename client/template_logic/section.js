Template.section.onRendered({

});

Template.section.helpers({
  background: function(){
    if(this.backgroundImage){
      return "background-image: url(" + this.backgroundImage.url + "";
    }
    return "background-color: " + this.backgroundColor || "#000000";
  },
  hasBackgroundImage: function(){
    return !!this.backgroundImage;
  }
});
