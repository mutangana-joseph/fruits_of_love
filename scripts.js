const donate = document.getElementById('donate');
const methods = document.getElementById('methods');
const show_menu = document.getElementById('show-menu');
const mobile_menu = document.getElementById('mobile-menu');


//Show or Hide Donate methods
function showHide(){

    if(donate){
        if (methods.style.display === 'none' || methods.style.display === '') {
            methods.style.display = 'block';
        }
        else {
            methods.style.display = 'none';
        }

    }
   
}


//Show mobile menu
function showMenu(){

    if (mobile_menu.style.display === 'none' || mobile_menu.style.display === '') {
        mobile_menu.style.display = 'flex';
    }
    else {
        mobile_menu.style.display = 'none';
    }  
}