jQuery(document).ready(function() {

	var objectS = '';
	var typeRepair = '';
	var cost = '';

	jQuery('.building-area .area').click(function() {
		objectS = jQuery(this).children('.area-title').html();
		jQuery('.building-area .area').removeClass('active');
		jQuery(this).addClass('active');
	});

	jQuery('.type-of-repair .area').click(function() {
		typeRepair = $(this).children('.area-title').html();
		jQuery('.type-of-repair .area').removeClass('active');
		jQuery(this).addClass('active');
	});

	jQuery('.building-area .next-block').click(function() {
		if(objectS != '') {
			jQuery('.building-area').css('display', 'none');
			jQuery('.type-of-repair').css('display', 'block');
		}
	});

	jQuery('.tcformpop-open1').click(function() {
		if(objectS != '' && typeRepair != '') {
			if(typeRepair == 'КОСМЕТИЧЕСКИЙ') {
				if(objectS == 'до 100 кв.м.') {
					cost = 'Стоимость: от 2500 руб/кв.м<br /> Срок: от 18 дней';
				}
				if(objectS == '100-200 кв.м.') {
					cost = 'Стоимость: от 2500 руб/кв.м<br /> Срок: от 24 дней';
				}
				if(objectS == 'от 200 кв.м.') {
					cost = 'Стоимость: от 2500 руб/кв.м<br /> Срок: от 30 дней';
				}
			}
			if(typeRepair == 'СТАНДАРТНЫЙ') {
				if(objectS == 'до 100 кв.м.') {
					cost = 'Стоимость: от 3500 руб/кв.м<br /> Срок: от 30 дней';
				}
				if(objectS == '100-200 кв.м.') {
					cost = 'Стоимость: от 3500 руб/кв.м<br /> Срок: от 45 дней';
				}
				if(objectS == 'от 200 кв.м.') {
					cost = 'Стоимость: от 3500 руб/кв.м<br /> Срок: от 60 дня';
				}
			}
			if(typeRepair == 'ЕВРОРЕМОНТ') {
				if(objectS == 'до 100 кв.м.') {
					cost = 'Стоимость: от 5500 руб/кв.м<br /> Срок: от 30 дней';
				}
				if(objectS == '100-200 кв.м.') {
					cost = 'Стоимость: от 5500 руб/кв.м<br /> Срок: от 45 дней';
				}
				if(objectS == 'от 200 кв.м.') {
					cost = 'Стоимость: от 5500 руб/кв.м<br /> Срок: от 60 дня';
				}
			}
			if(typeRepair == 'ЕВРОЛЮКС') {
				if(objectS == 'до 100 кв.м.') {
					cost = 'Стоимость: от 8000 руб/кв.м<br /> Срок: от 45 дней';
				}
				if(objectS == '100-200 кв.м.') {
					cost = 'Стоимость: от 8000 руб/кв.м<br /> Срок: от 60 дней';
				}
				if(objectS == 'от 200 кв.м.') {
					cost = 'Стоимость: от 8000 руб/кв.м<br /> Срок: от 75 дней';
				}
			}
			jQuery('.form-subtitle').html(cost);

			var str0 = '';

			str0 = typeRepair + ' ' + objectS + ' ' + cost;

			jQuery('.form-subtitle2').val(str0);


		}
	});

});
