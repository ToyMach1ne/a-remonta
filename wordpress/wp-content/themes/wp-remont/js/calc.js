jQuery(document).ready(function(){var r="",e="",a="";jQuery(".building-area .area").click(function(){r=jQuery(this).children(".area-title").html(),jQuery(".building-area .area").removeClass("active"),jQuery(this).addClass("active")}),jQuery(".type-of-repair .area").click(function(){e=$(this).children(".area-title").html(),jQuery(".type-of-repair .area").removeClass("active"),jQuery(this).addClass("active")}),jQuery(".building-area .next-block").click(function(){""!=r&&(jQuery(".building-area").css("display","none"),jQuery(".type-of-repair").css("display","block"))}),jQuery(".tcformpop-open1").click(function(){if(""!=r&&""!=e){"КОСМЕТИЧЕСКИЙ"==e&&("до 100 кв.м."==r&&(a="Стоимость: от 2500 руб/кв.м<br /> Срок: от 18 дней"),"100-200 кв.м."==r&&(a="Стоимость: от 2500 руб/кв.м<br /> Срок: от 24 дней"),"от 200 кв.м."==r&&(a="Стоимость: от 2500 руб/кв.м<br /> Срок: от 30 дней")),"СТАНДАРТНЫЙ"==e&&("до 100 кв.м."==r&&(a="Стоимость: от 3500 руб/кв.м<br /> Срок: от 30 дней"),"100-200 кв.м."==r&&(a="Стоимость: от 3500 руб/кв.м<br /> Срок: от 45 дней"),"от 200 кв.м."==r&&(a="Стоимость: от 3500 руб/кв.м<br /> Срок: от 60 дня")),"ЕВРОРЕМОНТ"==e&&("до 100 кв.м."==r&&(a="Стоимость: от 5500 руб/кв.м<br /> Срок: от 30 дней"),"100-200 кв.м."==r&&(a="Стоимость: от 5500 руб/кв.м<br /> Срок: от 45 дней"),"от 200 кв.м."==r&&(a="Стоимость: от 5500 руб/кв.м<br /> Срок: от 60 дня")),"ЕВРОЛЮКС"==e&&("до 100 кв.м."==r&&(a="Стоимость: от 8000 руб/кв.м<br /> Срок: от 45 дней"),"100-200 кв.м."==r&&(a="Стоимость: от 8000 руб/кв.м<br /> Срок: от 60 дней"),"от 200 кв.м."==r&&(a="Стоимость: от 8000 руб/кв.м<br /> Срок: от 75 дней")),jQuery(".form-subtitle").html(a);var i="";i=e+" "+r+" "+a,jQuery(".form-subtitle2").val(i)}})});
//# sourceMappingURL=maps/calc.js.map
