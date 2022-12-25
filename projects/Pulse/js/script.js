window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.mobile__menu'),
          hamburger = document.querySelector('.hamburger'),
          official = document.querySelector('.header__official'),
          contacts = document.querySelector('.header__contacts');
    let scrollTop = window.scrollY || document.documentElement.scrollTop,
        scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('mobile__menu_active');
        official.classList.toggle('official_xs-visible');
        contacts.classList.toggle('contacts_xs-visible');

        if (hamburger.classList.contains('hamburger_active')) {
            window.onscroll = function () {
                window.scrollTo(scrollTop, scrollLeft);
            };
        }
        else {
            window.onscroll = function() {};
        }
    });

    contacts.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('mobile__menu_active');
        official.classList.toggle('official_xs-visible');
        contacts.classList.toggle('contacts_xs-visible');

        if (!hamburger.classList.contains('hamburger_active')) {
            window.onscroll = function () {};
        }
    });
    
    $('.carousel__slider').slick({
        speed: 1000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/carousel/left_arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/carousel/right_arrow.png"></button>',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                dots: false,
                arrows: false,
              },
            },
            {
              breakpoint: 767,
              settings: {
                dots: false,
                arrows: false,
              },
            },
            {
              breakpoint: 575,
              settings: {
                dots: false,
                arrows: false,
                vertical: true,
                verticalSwiping: true
              }
            }
        ]
    });
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__items').removeClass('catalog__items_active').eq($(this).index()).addClass('catalog__items_active');
      });

      function toggleSlide(item) {
        $(item).each(function(i)   {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    }
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation-modal').fadeIn('slow');
    });

    $('.modal-window__close').on('click', function() {
        $('.overlay, #consultation-modal, #order, #thanks').fadeOut('slow');
    });

    $('.button_catalog').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal-window__text').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    $('input[name=phone]').mask("+38 (999) 999-99-99");

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите своё имя",
                    minlength: jQuery.validator.format("Пожалуйста, введите минимум {0} символа")
                },
                phone: {
                    required: "Пожалуйста, введите свой номер телефона",
                },
                email: {
                    required: "Пожалуйста, введите свой почтовый адрес",
                    email: "Неправильно введён почтовый адрес<br>Пример: name@gmail.com"
                }
              }
        });
    };
    validateForms('#consultation-main');
    validateForms('#consultation-modal form');
    validateForms('#order form');

    $('form').submit(function(e) {
        e.preventDefault();
        if (!$(this).valid()) {
            return;
        }

        $(this).find('input').val("");
        $('#consultation-modal, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');
        $('form').trigger('reset');
    });
});
