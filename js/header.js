(() => {
    'use strict'
    window.addEventListener('load', () => {


        // Menú Toggle
        if (window.innerWidth < 992) {

            document.getElementById('menu').addEventListener('click', () => {
                document.getElementById('navWrap').classList.toggle('active');
            });
            
            document.getElementById('btnEsc').textContent = 'Cancel';

        } else {
            window.addEventListener('resize', () => {
                if (window.innerWidth < 992) {
                    document.getElementById('menu').addEventListener('click', () => {
                        document.getElementById('navWrap').classList.toggle('active');
                    });

                    document.getElementById('btnEsc').textContent = 'Cancel';
                } else {
                    document.getElementById('btnEsc').textContent = 'Esc';
                }
            });
        }

        // ----- ----- Search ----- -----
        let btnSearch = document.getElementById('btnSearch');
        let btnSearch2 = document.getElementById('btn-search');
        let btnEsc = document.getElementById('btnEsc');
        let searchWrap = document.getElementById('searchWrap');

        // ----- 
        btnSearch.addEventListener('click', () => {
            searchWrap.classList.add('active');
            document.getElementById('body').style.overflowY = 'hidden';
        });

        // -----
        btnSearch2.addEventListener('click', () => {
            searchWrap.classList.add('active');
            document.getElementById('body').style.overflowY = 'hidden';
        });

        // ----- 
        btnEsc.addEventListener('click', () => {
            searchWrap.classList.remove('active');
            document.getElementById('body').style.overflowY = 'auto';
        });

        // ----- 
        document.addEventListener('keydown', (event) => {
            if (event.key == "Escape") {
                searchWrap.classList.remove('active');
                document.getElementById('body').style.overflowY = 'auto';
            }
        });

    });
})()