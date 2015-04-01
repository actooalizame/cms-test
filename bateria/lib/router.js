Router.configure({
  layoutTemplate: "layout",
  loadingTemplate: "loading",
  waitOn: function(){ return Meteor.subscribe("items"); }
});

Router.route('/', { name: "itemList" });
Router.route('/admin339', { name: "loginForm" });