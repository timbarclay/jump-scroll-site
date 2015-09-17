Template.section.helpers({
  background: function(){
    if(this.backgroundImage){
      return "background-image: url(" + this.backgroundImage.url + ")";
    }
    return "background-color: " + this.backgroundColour ||
      orion.dictionary.get('site.defaultColour', '#ffffff');
  },
  hasBackgroundImage: function(){
    return !!this.backgroundImage;
  }
});
