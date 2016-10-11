var Person = function(firstAndLast) {
  
  var fullName = firstAndLast; 
  
  this.getFirstName = function() {
    return fullName.split(' ')[0];
  };
  
  this.getLastName = function() {
    return fullName.split(' ')[1];
  };
  
  this.getFullName = function() {
    return fullName;
  };
  
  this.setFirstName = function(str) {
    fullName = str + ' ' + fullName.split(' ')[1];
  };
  
  this.setLastName = function(str) {
    fullName = fullName.split(' ')[0] + ' ' + str;
  };
  
  this.setFullName = function(str) {
    fullName = str;
  };  
  
};

var bob = new Person('Bob Ross');
//Object.keys(bob).length;
bob.getFullName();

