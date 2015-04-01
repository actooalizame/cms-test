Meteor.subscribe('items');
// This code only runs on the client
  Template.itemList.helpers({
    'items': function(){
       return Items.find({});
    },
  });

