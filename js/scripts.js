//business logic
function Contact(first, last, addr, phone, pic) {
  this.firstName = first;
  this.lastName = last;
  this.address = addr;
  this.phoneNumber = phone;
  this.picture = pic;
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
    var pictureURL = $("input#new-pictureURL").val();
    var newContact = new Contact(firstName, lastName, address, phoneNumber, pictureURL);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".address").text(newContact.address);
      $(".phoneNumber").text(newContact.phoneNumber);
      $(".picture").html("<img src='http://lorempixel.com/200/200/people'>");
    });
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-address").val("");
    $("input#new-phoneNumber").val("");
    $("input#pictureURL").val("");
  });
});
