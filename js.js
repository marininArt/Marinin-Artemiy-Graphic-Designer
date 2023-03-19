const rusBtn = document.querySelector(".language_ru");
const engBtn = document.querySelector(".language_eng");
const ruTxt = document.querySelectorAll(".ru");
const engTxt = document.querySelectorAll(".eng");

let lang = 0;

function showLanguage(){
    if(lang = 0){
        ruTxt.style.display = 'none';
        engTxt.style.display = 'block'; 
    }else{
        ruTxt.style.display = 'block';
        engTxt.style.display = 'none';  
    }
}

rusBtn.addEventListener("click", () => {
    lang = 1;
    showLanguage();
});

engBtn.addEventListener("click", () => {
    lang = 0;
    showLanguage();
});