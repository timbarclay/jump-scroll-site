Router.configure({
  loadingTemplate: "loading",
  waitOn: function(){
    return Meteor.subscribe("sectionsPub");
  },
  onAfterAction: function(){
    document.title = orion.dictionary.get('site.title', 'Website');
  }
});

Router.route("/", {
  controller: 'MainController'
});

Router.route("/:path", {
  controller: 'MainController'
});

MainController = RouteController.extend({
  template: 'mainPage',
  layoutTemplate: 'layout',
  data: function(){
    return {sections: Sections.find({}, {sort: {order: 1}})};
  }
});
