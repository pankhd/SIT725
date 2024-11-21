
$(document).ready(function(){
    $('.modal').modal();
  });

  

document.addEventListener('DOMContentLoaded', function() {
    const modalButton = document.querySelector('.modal-trigger');
    const modal = document.querySelector('#modal1');
  
    modalButton.addEventListener('click', function() {
      modalButton.style.backgroundColor = 'red';  
  
      var instance = M.Modal.init(modal); 
      instance.open(); 
    });
  
  });

