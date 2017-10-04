
window._wpemojiSettings = {
        "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/72x72\/",
        "ext": ".png",
        "source": {
            "concatemoji": "http:\/\/a-remonta.spb.ru\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.5.3"
        }
    };
    ! function(a, b, c) {
        function d(a) {
            var c, d, e, f = b.createElement("canvas"),
                g = f.getContext && f.getContext("2d"),
                h = String.fromCharCode;
            if (!g || !g.fillText) return !1;
            switch (g.textBaseline = "top", g.font = "600 32px Arial", a) {
                case "flag":
                    return g.fillText(h(55356, 56806, 55356, 56826), 0, 0), f.toDataURL().length > 3e3;
                case "diversity":
                    return g.fillText(h(55356, 57221), 0, 0), c = g.getImageData(16, 16, 1, 1).data, d = c[0] + "," + c[1] + "," + c[2] + "," + c[3], g.fillText(h(55356, 57221, 55356, 57343), 0, 0), c = g.getImageData(16, 16, 1, 1).data, e = c[0] + "," + c[1] + "," + c[2] + "," + c[3], d !== e;
                case "simple":
                    return g.fillText(h(55357, 56835), 0, 0), 0 !== g.getImageData(16, 16, 1, 1).data[0];
                case "unicode8":
                    return g.fillText(h(55356, 57135), 0, 0), 0 !== g.getImageData(16, 16, 1, 1).data[0]
            }
            return !1
        }

        function e(a) {
            var c = b.createElement("script");
            c.src = a, c.type = "text/javascript", b.getElementsByTagName("head")[0].appendChild(c)
        }
        var f, g, h, i;
        for (i = Array("simple", "flag", "unicode8", "diversity"), c.supports = {
                everything: !0,
                everythingExceptFlag: !0
            }, h = 0; h < i.length; h++) c.supports[i[h]] = d(i[h]), c.supports.everything = c.supports.everything && c.supports[i[h]], "flag" !== i[h] && (c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && c.supports[i[h]]);
        c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && !c.supports.flag, c.DOMReady = !1, c.readyCallback = function() {
            c.DOMReady = !0
        }, c.supports.everything || (g = function() {
            c.readyCallback()
        }, b.addEventListener ? (b.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1)) : (a.attachEvent("onload", g), b.attachEvent("onreadystatechange", function() {
            "complete" === b.readyState && c.readyCallback()
        })), f = c.source || {}, f.concatemoji ? e(f.concatemoji) : f.wpemoji && f.twemoji && (e(f.twemoji), e(f.wpemoji)))
    }(window, document, window._wpemojiSettings);

    jQuery.noConflict();

    //
    jQuery(window).load(function() {

    });
    jQuery(document).ready(function() {

        jQuery('.popup2 input[type="submit"], .form-visible input[type="submit"], .form2 input[type="submit"]').bind('click', function() {

            var h2 = $(this).closest('div').find('h2').text();
            var text_button = "";
            if (h2.length > 0) {
                text_button = h2;
            } else {
                legend = $(this).closest('div').find('legend').text();
                if (legend.length > 0) {
                    text_button = legend;
                } else {
                    text_button = $(this).val();
                }
            }

            //  $(this).closest('form').find('input[name="button_name"]').val(text_button);

            jQuery.ajax({
                url: 'http://a-remonta.spb.ru/wp-content/themes/theme/send.php',
                type: 'post',
                data: jQuery(this).closest('form').serialize(),
                dataType: 'json',
                success: function(json) {

                    if (json['success']) {
                        alert(json['success']);
                        //$('.tcformpop-open').unbind('click');
                        //$('.popup2 input[type="submit"], .form-visible input[type="submit"]').unbind('click');
                        jQuery('.popup2 input[type="submit"], .form-visible input[type="submit"]').bind('click', function() {
                            return false;
                        });
                        jQuery('.popup2, .shadow').hide();
                        jQuery('#myModal1').modal('hide');
                        jQuery('form')[0].reset();
                        jQuery('form')[1].reset();
                        jQuery('form')[2].reset();
                        jQuery('form')[4].reset();
                        jQuery('form')[5].reset();
                        jQuery('form')[6].reset();
                        jQuery('form')[7].reset();
                        jQuery('form')[8].reset();
                        jQuery('form')[9].reset();
                        jQuery('form')[10].reset();
                    } else {
                        if (json['error']) {
                            alert(json['error']);
                        }
                    }
                }
            });

            return false;

        });

        var butt = "";

        jQuery('.shadow, .clo').bind('click', function() {
            jQuery('.popup, .shadow, .popup2, .popup3').fadeOut('fast');
        });

        jQuery('.tcformpop-open1').bind('click', function() {
            jQuery('#myModal1').modal('show');
            var btt = $(this).attr('rel');
            jQuery('.popup2, .shadow').fadeIn('fast');
            var h2 = jQuery(this).closest('div').find('h2').text();
            var text_button = "";
            if (h2.length > 0) {
                text_button = h2;
            } else {
                text_button = jQuery(this).val();
            }
            jQuery('.popup2 form .button_name').val(btt);
            return false;
        });


        jQuery('.forma1 .name').bind('keydown', function(e) {
            if (e.keyCode == 13) {
                jQuery(this).parent('.forma1').children('.telephone').focus();
            }
        });

        jQuery('.forma1 .telephone').bind('keydown', function(e) {
            if (e.keyCode == 13) {
                jQuery(this).parent('.forma1').children('.e-mail').focus();
            }
        });
    });

    //
    jQuery('#thanksCarousel').carousel();
    $("#ph").mask("8 (999) 999-99-99");
    jQuery("#ph2").mask("8 (999) 999-99-99");
    jQuery("#ph3").mask("8 (999) 999-99-99");
    jQuery("#ph4").mask("8 (999) 999-99-99");
    jQuery("#ph5").mask("8 (999) 999-99-99");
    jQuery("#ph6").mask("8 (999) 999-99-99");
    jQuery("#ph7").mask("8 (999) 999-99-99");
    jQuery("#ph8").mask("8 (999) 999-99-99");
    jQuery("#ph9").mask("8 (999) 999-99-99");
    jQuery("#ph10").mask("8 (999) 999-99-99");
    jQuery("#ph11").mask("8 (999) 999-99-99");
    jQuery("#ph12").mask("8 (999) 999-99-99");
    jQuery("#ph13").mask("8 (999) 999-99-99");
    jQuery(document).ready(function() {
        $('#scroll_1').click(function() {
            $('html, body').animate({
                scrollTop: $("#about").offset().top
            }, 1000);
        });

        $('#scroll_2').click(function() {
            $('html, body').animate({
                scrollTop: $("#items").offset().top
            }, 1000);
        });

        $('#scroll_3').click(function() {
            $('html, body').animate({
                scrollTop: $("#why").offset().top
            }, 1000);
        });

        $('#scroll_4').click(function() {
            $('html, body').animate({
                scrollTop: $("#deadline").offset().top
            }, 1000);
        });

        $('#scroll_5').click(function() {
            $('html, body').animate({
                scrollTop: $("#reviews").offset().top
            }, 1000);
        });

        $('#scroll_6').click(function() {
            $('html, body').animate({
                scrollTop: $("#map1").offset().top
            }, 1000);
        });

        ;


        /*Google Maps*/
        $(".fancybox").fancybox();

        function initialize() {
            var map = new google.maps.Map(document.getElementById('map1'),
                mapOptions);
            var featureOpts = [{
                "stylers": [{
                    "saturation": 0
                }, {
                    "lightness": 0
                }]
            }];
            var styledMap = new google.maps.StyledMapType(featureOpts, {
                name: "Styled Map"
            });

            var mapOptions = {
                zoom: 17,
                center: new google.maps.LatLng(60.040862, 30.315462),
                disableDefaultUI: true,
                scrollwheel: false,
                zoomControl: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL,
                    position: google.maps.ControlPosition.RIGHT_CENTER
                },
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
                }
            };
            var map = new google.maps.Map(document.getElementById('map1'),
                mapOptions);


            var Marker = new google.maps.Marker({
                position: new google.maps.LatLng(60.040862, 30.315462),
                map: map,
                title: "«Академия Ремонта», г. Санкт-Петербург"
            });
            map.mapTypes.set('map_style', styledMap);
            map.setMapTypeId('map_style');

        }
        google.maps.event.addDomListener(window, 'load', initialize);

        //map


    });

//
    $('#myModal').modal('false');

    $(".carousel-control").hover(function() {
        $(this).stop().animate({
            "opacity": 1
        });
    }, function() {
        $(this).stop().animate({
            "opacity": 0
        });
    });

//

    //
    /* <![CDATA[ */
    var ninja_forms_settings = {
        "ajax_msg_format": "inline",
        "password_mismatch": "The passwords provided do not match.",
        "plugin_url": "http:\/\/a-remonta.spb.ru\/wp-content\/plugins\/ninja-forms\/deprecated\/",
        "datepicker_args": {
            "dateFormat": "dd\/mm\/yy"
        },
        "currency_symbol": "$",
        "date_format": "dd\/mm\/yy"
    };
    var thousandsSeparator = " ";
    var decimalPoint = ",";
    var ninja_forms_form_17_settings = {
        "ajax": "1",
        "hide_complete": "1",
        "clear_complete": "1"
    };
    var ninja_forms_form_17_calc_settings = {
        "calc_value": "",
        "calc_fields": []
    };
    var ninja_forms_password_strength = {
        "empty": "Strength indicator",
        "short": "Very weak",
        "bad": "Weak",
        "good": "Medium",
        "strong": "Strong",
        "mismatch": "Mismatch"
    };
    var thousandsSeparator = " ";
    var decimalPoint = ",";
    var ninja_forms_form_12_settings = {
        "ajax": "1",
        "hide_complete": "1",
        "clear_complete": "1"
    };
    var ninja_forms_form_12_calc_settings = {
        "calc_value": "",
        "calc_fields": []
    };
    var ninja_forms_password_strength = {
        "empty": "Strength indicator",
        "short": "Very weak",
        "bad": "Weak",
        "good": "Medium",
        "strong": "Strong",
        "mismatch": "Mismatch"
    };
    var thousandsSeparator = " ";
    var decimalPoint = ",";
    var ninja_forms_form_1_settings = {
        "ajax": "1",
        "hide_complete": "1",
        "clear_complete": "1"
    };
    var ninja_forms_form_1_calc_settings = {
        "calc_value": "",
        "calc_fields": []
    };
    var ninja_forms_password_strength = {
        "empty": "Strength indicator",
        "short": "Very weak",
        "bad": "Weak",
        "good": "Medium",
        "strong": "Strong",
        "mismatch": "Mismatch"
    };
    var thousandsSeparator = " ";
    var decimalPoint = ",";
    var ninja_forms_form_7_settings = {
        "ajax": "0",
        "hide_complete": "0",
        "clear_complete": "0"
    };
    var ninja_forms_form_7_calc_settings = {
        "calc_value": "",
        "calc_fields": []
    };
    var ninja_forms_password_strength = {
        "empty": "Strength indicator",
        "short": "Very weak",
        "bad": "Weak",
        "good": "Medium",
        "strong": "Strong",
        "mismatch": "Mismatch"
    };
    var thousandsSeparator = " ";
    var decimalPoint = ",";
    var ninja_forms_form_1_settings = {
        "ajax": "1",
        "hide_complete": "1",
        "clear_complete": "1"
    };
    var ninja_forms_form_1_calc_settings = {
        "calc_value": "",
        "calc_fields": []
    };
    var ninja_forms_password_strength = {
        "empty": "Strength indicator",
        "short": "Very weak",
        "bad": "Weak",
        "good": "Medium",
        "strong": "Strong",
        "mismatch": "Mismatch"
    };
    /* ]]> */
