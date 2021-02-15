!function(n){"use strict";n("html");var o=n("body"),l=n(".site-navbar"),r=(n(".site-navbar #navbarCollapse"),n(".site-navbar .navbar-toggler-alternative")),d=!1,c=n(".website-slider-inner"),h=n(".website-slider-item");function u(){return Math.max(n(window).width(),window.innerWidth)}function f(){return Math.max(n(document).width(),document.body.clientWidth)}function m(){var e=document.createElement("div");e.className="modal-scrollbar-measure",document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t}function v(){var e=document.documentElement,t=document.body,i=document.createElement("div");i.className="body-overflow-measure",t.appendChild(i),"visible"!==window.getComputedStyle(e).overflowY&&"hidden"!==window.getComputedStyle(e).overflowY&&e.scrollHeight>e.clientHeight?e.style.overflowY="scroll":"visible"!==window.getComputedStyle(t).overflowY&&"hidden"!==window.getComputedStyle(t).overflowY&&t.scrollHeight>t.clientHeight&&(t.style.overflowY="scroll"),t.removeChild(i)}function g(){var e;0<!h.length||(e=h.length*f(),h.css("width",f()),c.css("width",e),h.each(function(){var e=n(this).find(".website-slider-item-inner").innerHeight();n(this).css("height",e)}))}function p(e){var t,i,a,s;0<!n(e).length&&!n(e).hasClass("website-slider-item")||d||n(e).hasClass("active")||(d=!0,t=n(e).index(),i=t*f(),a=parseInt(n(e).find(".website-slider-item-inner").innerHeight(),10),s=n(".website-slider-item.active"),0<t&&(i*=-1),0===n(window).scrollTop()?(h.removeClass("last active"),s.addClass("last"),n(".site-navbar li a").removeClass("active"),n('.site-navbar a[href="'+e+'"]').addClass("active"),setTimeout(function(){c.css({height:a,transform:"translate3d("+i+"px, 0px, 0px)"}),n(e).addClass("active")},400),setTimeout(function(){d=!1},800)):(b(0),setTimeout(function(){h.removeClass("last active"),s.addClass("last"),n(".site-navbar li a").removeClass("active"),n('.site-navbar a[href="'+e+'"]').addClass("active"),setTimeout(function(){c.css({height:a,transform:"translate3d("+i+"px, 0px, 0px)"}),n(e).addClass("active")},400),setTimeout(function(){d=!1},800)},800)))}function b(e){n(window).scrollTo(e,800)}function w(){var e=document.querySelectorAll('[data-toggle="typed"]');"undefined"!=typeof Typed&&e&&[].forEach.call(e,function(e){var t,i,a;i=(i=(t=e).dataset.options)?JSON.parse(i):{},a=Object.assign({typeSpeed:40,backSpeed:40,backDelay:3e3,loop:!0},i),new Typed(t,a)})}function y(){var e=n(".slider");0<e.length&&(e.hasClass("slick-initialized")||e.slick({slidesToShow:1,infinite:!0,nextArrow:'<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>'}),u()<=1199&&e.hasClass("slick-initialized")&&e.hasClass("slick-destroy-xl")&&e.slick("unslick"),u()<=991&&e.hasClass("slick-initialized")&&e.hasClass("slick-destroy-lg")&&e.slick("unslick"),u()<=767&&e.hasClass("slick-initialized")&&e.hasClass("slick-destroy-md")&&e.slick("unslick"),u()<=575&&e.hasClass("slick-initialized")&&e.hasClass("slick-destroy-sm")&&e.slick("unslick"))}v(),window.addEventListener("load",function(){document.querySelector("body").classList.add("loaded")}),n(document).ready(function(e){var t,a;e(window).scrollTop(0),g(),n(document).on("click",'a.scrollto, .site-navbar a[href^="#"]',function(e){var t;return""!==this.hash&&"#!"!==this.hash&&0<n(this.hash).length&&""!==(t=this.hash)&&(e.preventDefault(),0<n(t).length&&n(t).hasClass("website-slider-item")?p(t):b(parseInt(Math.max(document.querySelector(t).offsetTop,n(t).offset().top),10)),n(this).blur()),!1}),document.addEventListener("keydown",function(e){var t,i;0<!h.length||n("input,select,textarea").is(":focus")||(37==!e.keyCode||39==!e.keyCode)&&e.repeat||(0===(t=n(".website-slider-item.active")).length&&(t=n(".website-slider-item").first()),37!=e.keyCode||e.repeat?39!=e.keyCode||e.repeat||(i=t.next().attr("id")):i=t.prev().attr("id"),i&&p("#"+i))}),n(document).on("click touchstart",function(e){l.is(e.target)||n(e.target).closest(".site-navbar").hasClass("site-navbar")||n(e.target).hasClass("navbar-toggler")||n(e.target).hasClass("navbar-toggler-alternative")||"true"===r.attr("aria-expanded")&&r.trigger("click")}),(t=n(".bg-image-holder")).length&&t.each(function(){var e=n(this),t=e.children("img").attr("src");e.css("background-image","url("+t+")").children("img").hide()}),o.hasClass("mobile")&&n(".video-wrapper").css("display","none"),n('[data-toggle="tooltip"]').tooltip(),n('[data-toggle="popover"]').popover(),n(".modal").on({"show.bs.modal":function(){document.documentElement.style.overflow="hidden",document.body.style.paddingRight=m()+"px",n(".overlay-global").css("right",m()),1200<=u()&&(n(".global-frame .top, .global-frame .bottom, .global-frame .right").css("right",m()),n(".site-navbar").css("right",m()),n(".site-footer .social-nav").css("right",m()))},"hidden.bs.modal":function(){document.documentElement.style.overflow="",v(),document.body.style.paddingRight="",n(".overlay-global").css("right",""),1200<=u()&&(n(".global-frame .top, .global-frame .bottom, .global-frame .right").css("right",""),n(".site-navbar").css("right",""),n(".site-footer .social-nav").css("right",""))}}),w(),y()}),window.addEventListener("load",function(){var e;g(),0<!h.length||p("#"!==(e=window.location.hash?window.location.hash:"")&&"#!"!==e&&0<n(e).length&&n(e).hasClass("website-slider-item")?e:"#"+h.first().attr("id"))}),n(window).on("resize",function(){var e,t,i,a;y(),setTimeout(g(),20),setTimeout(void(0<!h.length||d||(i=(t=0<(e=0<n(".website-slider-item.active").length?n(".website-slider-item.active"):h.first()).length?e.index():0)*f(),a=parseInt(e.find(".website-slider-item-inner").innerHeight(),10),0<t&&(i*=-1),c.css({height:a,transform:"translate3d("+i+"px, 0px, 0px)"}))),20)})}(jQuery);