!function(){$.validator.setDefaults({invalidHandler:function(e,s){var n=$(this);n.find(".form-message").removeClass(n.hasClass("success")?"success":"error").html("")},submitHandler:function(e){var s=$(e).serialize(),n=$(e).find("select, input, textarea, button").not("[disabled]"),a=$(e).find(".form-message"),t=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),o=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),r=function(e){var s=e?t:o;n.removeAttr("disabled"),a.removeClass(e?"error":"success"),a.addClass(e?"success":"error"),a.html(s)};n.attr("disabled","disabled"),a.html(""),$(e).find(".button-wrapper .loader").length||$(e).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(e).attr("action"),method:"POST",data:s}).done(function(s){r(1===parseInt(s)),e.reset()}).fail(function(){r(!1)}).always(function(){n.removeAttr("disabled"),$(e).find(".button-wrapper").removeClass("disabled")})}})}(),function(){function e(e){$(e.target).is("nav .menu-trigger")||$(e.target).is("nav .menu-container")||$(e.target).closest("nav .menu-container").length||!$("nav .menu-container").hasClass("show-menu")||(e.preventDefault(),$("nav .menu-container").removeClass("show-menu"),$("body").removeClass("noscroll"))}function s(){$("nav .menu-container").hasClass("show-menu")?($("nav .menu-container").removeClass("show-menu"),$("body").removeClass("noscroll")):($("nav .menu-container").addClass("show-menu"),$("body").addClass("noscroll"))}var n=window.matchMedia("(max-width: 767px)");n.matches?($("body")[0].addEventListener("touchstart",e,{passive:!1}),$("nav .menu-trigger").click(s)):($("body")[0].removeEventListener("touchstart",e,{passive:!1}),$("nav .menu-trigger").off("click"),$("body").removeClass("noscroll")),$(window).resize(function(){$("body")[0].removeEventListener("touchmove",e,{passive:!1}),$("nav .menu-trigger").off("click"),$("body").removeClass("noscroll"),$("nav .menu-container").removeClass("show-menu"),n.matches&&($("body")[0].addEventListener("touchmove",e,{passive:!1}),$("nav .menu-trigger").click(s))}),$("nav").hasClass("sections-nav")||$(window).scroll(function(){$(this).scrollTop()>100?$("nav").addClass("fixed"):$("nav").removeClass("fixed")})}();