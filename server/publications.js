Meteor.publish('sectionsPub', function(){
  return Sections.find();
});
