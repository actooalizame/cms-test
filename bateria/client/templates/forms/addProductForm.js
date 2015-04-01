Meteor.subscribe('items');

Template.addProductForm.events({
  "submit form": function (event) {
    var name = event.target.name.value;
    var price = event.target.price.value;
    var url = event.target.url.value;
    var modalNumber = event.target.modalNumber.value;
    

    Items.insert({
      name: name,
      price: price,
      url: url,
      modalNumber: modalNumber
    });

    // Clear form
    event.target.name.value = "";
    event.target.price.value = "";
    event.target.url.value = "";
    event.target.modalNumber.value = "";

    // Prevent default form submit
    return false;
    
    console.log(modalNumber);
    
  }
  
});