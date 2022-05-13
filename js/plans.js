(() => {
    'use strict'
    window.addEventListener('load', () => {

        let btnBusinessPlan = document.getElementById('btnBusinessPlan');
        let btnPersonalPlan = document.getElementById('btnPersonalPlan');

        btnBusinessPlan.addEventListener('click', () => {
            btnBusinessPlan.classList.add('active');
            btnPersonalPlan.classList.remove('active');
            document.getElementById('BusinessPlan').style.display = 'block';
            document.getElementById('PersonalPlan').style.display = 'none';
        });

        btnPersonalPlan.addEventListener('click', () => {
            btnPersonalPlan.classList.add('active');
            btnBusinessPlan.classList.remove('active');
            document.getElementById('PersonalPlan').style.display = 'block';
            document.getElementById('BusinessPlan').style.display = 'none';
        });

    });
})()