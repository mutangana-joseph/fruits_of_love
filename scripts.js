const donate = document.getElementById('donate');
const methods = document.getElementById('methods');
const show_menu = document.getElementById('show-menu');
const close_menu = document.getElementById('close-menu');
const mobile_menu = document.getElementById('mobile-menu');
const menu = document.querySelectorAll('.menu');
const pcMenu = document.querySelectorAll('.pc-menu');
const joinCard = document.getElementById('joinCard');

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
            joinCard.style.display = 'none';
        }
        else {
            methods.style.display = 'none';
        }

    }
   
}

//hide mobile menu when one link clicked
menu.forEach(function(member){
    member.addEventListener('click', function(){
        mobile_menu.style.display='none';
    });
});


//put undeline on Computer menu links view when one link clicked
pcMenu.forEach((member) =>{
    member.addEventListener('click', function(){

        pcMenu.forEach((item) =>{
            item.style.color ='black';
            item.style.textDecoration = 'none';
        })
        
        member.style.color = '#E91E63';
        member.style.textDecoration='underline';
        
    });
})


//function to show join card

function showJoinCard(){
    if (joinCard.style.display === 'none' || joinCard.style.display === ''){
        joinCard.style.display= 'flex';
        methods.style.display = 'none';
    }
    else{
        joinCard.style.display = 'none';
    }
}