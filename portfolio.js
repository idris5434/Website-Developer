'use strict';

    const preloader = document.querySelector("[data-preload]");

    window.addEventListener("load", function() {
        preloader.classList.add("loaded");
        document.body.classList.add("loaded");
    });

    const addEventOnElements = function(elements, eventType, callback) {
        for(let i = 0, len = elements.length; i < len; i++){
            elements[i].addEventListener(eventType, callback);
        }
    };

    
    document.querySelectorAll('.input-box').forEach(input => {
        const toggleFilled = () => {
            if(input.value != ''){
                input.classList.add('filled');
            }else{
                input.classList.remove('filled')
            }
        }

        toggleFilled();

        input.addEventListener('input', toggleFilled);
        input.addEventListener('change', toggleFilled);
        input.addEventListener('blur', toggleFilled);

    });



    let btn = document.getElementById('btn')
    window.addEventListener('scroll',function(){
        if(window.scrollY >= 600){
            btn.style.display = 'block';
        }else{
            btn.style.display = 'none';
        }
    })

    btn.addEventListener('click', () => {
        scroll({
            left:0,
            top:0,
            behavior: 'smooth'
        })
    })