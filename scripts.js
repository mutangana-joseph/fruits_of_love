const donate = document.getElementById('donate');
const methods = document.getElementById('methods');
const show_menu = document.getElementById('show-menu');
const close_menu = document.getElementById('close-menu');
const mobile_menu = document.getElementById('mobile-menu');

//Show and hide Mobile menu function
function showMenu(){

    if (mobile_menu.style.display === 'none' ||mobile_menu.style.display === ''){
        mobile_menu.style.display = 'block';
    }
    else{
        mobile_menu.style.display = 'none';

    }
}



//Show or Hide Donate methods
function showHide(){

    if(donate){
        if (methods.style.display === 'none' || methods.style.display === '') {
            methods.style.display = 'block';
            mobile_menu.style.display = 'none';
        }
        else {
            methods.style.display = 'none';
        }

    }
   
}


