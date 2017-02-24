//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var firstName = $("input#new-first-name").val();
    var lastName = $("input#new-last-name").val();
    var address = $("input#new-address").val();
    var phoneNumber = $("input#new-phoneNumber").val();
    var pictureURL = $("input#pictureURL").val();
    var newContact = new Contact(firstName, lastName, address, phoneNumber, pictureURL);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});
