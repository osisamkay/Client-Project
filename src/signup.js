let signupButton = document.getElementById("signupBtn");

signupButton.addEventListener("click", function() {


  var modal = new tingle.modal({
    footer: false,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
  });
  
  // set content
  modal.setContent('<h1><a href="./src/signupClient.html">Signup as Client</a></h1><h1><a href="./src/signupCleaner.html">Signup as Cleaner</a></h1>');
  
  
  // // add a button
  // modal.addFooterBtn('Button label', 'tingle-btn tingle-btn--primary', function() {
  //   // here goes some logic
  //   modal.close();
  // });
  
  // // add another button
  // modal.addFooterBtn('Dangerous action !', 'tingle-btn tingle-btn--primary', function() {
  //   // here goes some logic
  //   modal.close();
  // });
  
  // open modal
  modal.open();
  
  // close modal
  modal.close();

  event.preventDefault();

})

