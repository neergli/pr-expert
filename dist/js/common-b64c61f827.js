$(document).ready(function(){$(".b-navbar_toggle-btn").on("click",function(){$(".b-navbar_toggle-btn, .b-menu").toggleClass("open")}),$(document).click(function(n){$(n.target).closest(".b-navbar").length||($(".b-navbar_toggle-btn, .b-menu").removeClass("open"),n.stopPropagation())}),$(".b-menu a").on("click",function(){$(".b-menu, .b-dropdown-menu_submenu").removeClass("open"),$(".b-dropdown-menu, .b-dropdown-menu_submenu").css("display","none")}),Modernizr.touchevents?($(".b-menu_dropdown").on("click",function(){$(".b-dropdown-menu, .b-dropdown-menu_submenu").removeAttr("style"),$(this).toggleClass("open")}),$(".b-dropdown-menu_submenu>.b-menu_link").on("click",function(n){n.preventDefault(),n.stopPropagation(),$(this).parent().siblings().removeClass("open"),$(this).parent().toggleClass("open")})):($(".b-menu").addClass("js-not-touch-device"),$(".b-menu_dropdown").hover(function(){$(".b-dropdown-menu, .b-dropdown-menu_submenu").removeAttr("style")})),$(document).click(function(n){$(n.target).closest(".b-menu_dropdown").length||($(".b-menu_dropdown, .b-dropdown-menu_submenu").removeClass("open"),n.stopPropagation())})});