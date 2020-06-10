const menu = {
    init: function() {
        this.clickShowMenu('.humberger', '.clickOut', '.header__mobile', 'showmobile');
        this.scrollMenu('.head', 'fixed2');
    },
    clickShowMenu: function(button1, button2, navMenu, classTogle) {
        let btn1 = document.querySelector(button1);
        let btn2 = document.querySelector(button2);
        let menu = document.querySelector(navMenu);
        btn1.addEventListener('click', () => {
            menu.classList.add(classTogle);
        });
        btn2.addEventListener('click', () => {
            menu.classList.remove(classTogle);
        });
    },
    scrollMenu: function(menu, classfix) {
        let Nav = document.querySelector(menu);
        let heightMenu = document.querySelector(menu).offsetTop;

        window.addEventListener('scroll', () => {
            let heightScroll = window.pageYOffset;
            console.log(heightScroll);

            if (heightScroll >= heightMenu) {
                Nav.classList.add(classfix);
            } else {
                Nav.classList.remove(classfix);
            }

        });
    }
}
menu.init();