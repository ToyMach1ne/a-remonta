function ninja_forms_before_submit(e,a,i){var r=jQuery(a).prop("id").replace("ninja_forms_form_","");jQuery("#nf_submit_"+r).hide(),jQuery("#nf_processing_"+r).show(),jQuery(document).data("submit_action","submit");var n=jQuery(a).triggerHandler("beforeSubmit",[e,a,i]);return n!==!1&&(n=jQuery("body").triggerHandler("beforeSubmit",[e,a,i])),n!==!1&&(n=jQuery(document).triggerHandler("beforeSubmit",[e,a,i])),n}function ninja_forms_response(e,a,i,r){var n=e.form_id;if(jQuery("#nf_processing_"+n).hide(),jQuery("#nf_submit_"+n).show(),"inline"==ninja_forms_settings.ajax_msg_format){var l=jQuery(r).triggerHandler("submitResponse",[e]);return l!==!1&&(l=jQuery("body").triggerHandler("submitResponse",[e])),l!==!1&&(l=jQuery(document).triggerHandler("submitResponse",[e])),l}}function ninja_forms_default_before_submit(e,a,i){var r=jQuery(a).prop("id").replace("ninja_forms_form_","");return jQuery("#ninja_forms_form_"+r+"_response_msg").prop("innerHTML",""),jQuery("#ninja_forms_form_"+r+"_response_msg").removeClass("ninja-forms-error-msg"),jQuery("#ninja_forms_form_"+r+"_response_msg").removeClass("ninja-forms-success-msg"),jQuery(".ninja-forms-field-error").prop("innerHTML",""),jQuery(".ninja-forms-error").removeClass("ninja-forms-error"),!0}function ninja_forms_default_response(e){return e.form_id,ninja_forms_update_error_msgs(e),ninja_forms_update_success_msg(e),0==e.errors&&"undefined"!=typeof e.form_settings.landing_page&&""!=e.form_settings.landing_page&&(window.location=e.form_settings.landing_page),!0}function ninja_forms_update_success_msg(e){var a="",i=e.form_id,r=e.success,n=e.form_settings,l=n.hide_complete,_=n.clear_complete;if(0!=r){for(var s in r)a+="<p>"+r[s]+"</p>";""!=a&&(jQuery("#ninja_forms_form_"+i+"_response_msg").removeClass("ninja-forms-error-msg"),jQuery("#ninja_forms_form_"+i+"_response_msg").addClass("ninja-forms-success-msg"),jQuery("#ninja_forms_form_"+i+"_response_msg").prop("innerHTML",a),jQuery("#ninja_forms_form_"+i+"_response_msg").show()),1==l&&jQuery("#ninja_forms_form_"+i).hide(),1==_&&(jQuery("#ninja_forms_form_"+i).clearForm(),jQuery("div.label-inside input.ninja-forms-field, div.label-inside textarea.ninja-forms-field").each(function(){var e=jQuery("#"+this.id+"_label_hidden").val();this.value=e}),"rating"in jQuery("input[type=radio].ninja-forms-star")&&jQuery("input[type=radio].ninja-forms-star").rating("drain"))}}function ninja_forms_update_error_msgs(e){var a="",i=e.form_id,r=e.errors;if(0!=r){for(var n in r)if("general"==r[n].location)a+="<p>"+r[n].msg+"</p>";else{var l=r[n].location;jQuery("#ninja_forms_field_"+l+"_error").show(),jQuery("#ninja_forms_field_"+l+"_error").prop("innerHTML",r[n].msg),jQuery("#ninja_forms_field_"+l+"_div_wrap").addClass("ninja-forms-error")}""!=a&&(jQuery("#ninja_forms_form_"+i+"_response_msg").removeClass("ninja-forms-success-msg"),jQuery("#ninja_forms_form_"+i+"_response_msg").addClass("ninja-forms-error-msg"),jQuery("#ninja_forms_form_"+i+"_response_msg").prop("innerHTML",a))}}function ninja_forms_html_decode(e){if(e){var a=jQuery("<div />").html(e).text();return a=jQuery("<div />").html(a).text()}return""}function ninja_forms_toggle_login_register(e,a){var i="ninja_forms_form_"+a+"_"+e+"_form";if("login"==e)var r="ninja_forms_form_"+a+"_register_form";else var r="ninja_forms_form_"+a+"_login_form";var n=document.getElementById(i),l=document.getElementById(r);"block"==n.style.display?n.style.display="none":(n.style.display="block",l.style.display="none")}function ninja_forms_get_form_id(e){var a=jQuery(e).closest("form").prop("id");return"undefined"!=typeof a&&(a=a.replace("ninja_forms_form_",""),(""==a||"ninja_forms_admin"==a)&&(a=jQuery("#_form_id").val()),a)}function check_pass_strength(e,a){if(jQuery("#pass-strength-result").removeClass("short bad good strong"),!e)return void jQuery("#pass-strength-result").html(ninja_forms_password_strength.empty);switch(strength=passwordStrength(e,a),strength){case 2:jQuery("#pass-strength-result").addClass("bad").html(ninja_forms_password_strength.bad);break;case 3:jQuery("#pass-strength-result").addClass("good").html(ninja_forms_password_strength.good);break;case 4:jQuery("#pass-strength-result").addClass("strong").html(ninja_forms_password_strength.strong);break;case 5:jQuery("#pass-strength-result").addClass("short").html(ninja_forms_password_strength.mismatch);break;default:jQuery("#pass-strength-result").addClass("short").html(ninja_forms_password_strength["short"])}}function passwordStrength(e,a){var i,r,n=1,l=2,_=3,s=4,t=5,o=0;return e!=a&&a.length>0?t:e.length<4?n:(e.match(/[0-9]/)&&(o+=10),e.match(/[a-z]/)&&(o+=26),e.match(/[A-Z]/)&&(o+=26),e.match(/[^a-zA-Z0-9]/)&&(o+=31),i=Math.log(Math.pow(o,e.length)),r=i/Math.LN2,40>r?l:56>r?_:s)}function ninja_forms_find_opposite_op(e){switch(e){case"add":return"subtract";case"subtract":return"add";case"multiply":return"divide";case"divide":return"multiply"}}function ninja_forms_var_operator(e){this.operation=e,this.evaluate=function(e,a){switch(this.operation){case"add":return e+a;case"subtract":return e-a;case"multiply":return e*a;case"divide":return e/a}}}jQuery(document).ready(function(e){init_all_the_ninja_things(),document.addEventListener("pjax:success",function(){init_all_the_ninja_things()})});var init_all_the_ninja_things=function(){function ninja_forms_countdown(e,a){$countdown=jQuery("#"+e),counter=parseInt($countdown.data("countdown"))-1,$countdown.val(counter).data("countdown",counter).find("span").html(counter),counter<=0&&(window.clearInterval(countdown.index),$countdown.removeAttr("disabled").html($countdown.data("text")))}if(jQuery(".ninja-forms-form input").bind("keypress",function(e){13==e.keyCode&&jQuery(this).attr("type")}),jQuery("div.label-inside input, div.label-inside textarea").focus(function(){var e=jQuery("#"+this.id+"_label_hidden").val();this.value==e&&(this.value="")}),jQuery("div.label-inside input, div.label-inside textarea").blur(function(){var e=jQuery("#"+this.id+"_label_hidden").val();""==this.value&&(this.value=e)}),jQuery.fn.mask){jQuery(".ninja-forms-mask").each(function(){var e=jQuery(this).data("mask");e=e.toString(),jQuery(this).mask(e)});var date_format_mask=ninja_forms_settings.date_format;date_format_mask=date_format_mask.replace(/m/g,9),date_format_mask=date_format_mask.replace(/d/g,9),date_format_mask=date_format_mask.replace(/y/g,99),date_format_mask=date_format_mask.replace(/Y/g,9999),jQuery(".ninja-forms-date").mask(date_format_mask)}jQuery.fn.datepicker&&jQuery(".ninja-forms-datepicker").datepicker(ninja_forms_settings.datepicker_args),jQuery.fn.autoNumeric&&jQuery(".ninja-forms-currency").autoNumeric({aSign:ninja_forms_settings.currency_symbol,aSep:thousandsSeparator,aDec:decimalPoint}),jQuery.fn.qtip&&jQuery(".ninja-forms-help-text").qtip({style:{classes:"qtip-shadow qtip-dark"}}),jQuery(".input-limit").each(function(){var e=jQuery(this).data("input-limit"),a=jQuery(this).data("input-limit-type"),i=jQuery(this).data("input-limit-msg");jQuery(this).counter({count:"down",goal:e,type:a,msg:i})}),jQuery(".ninja-forms-form").each(function(){var e=this.id.replace("ninja_forms_form_",""),a=window["ninja_forms_form_"+e+"_settings"];if("undefined"!=typeof a?ajax=a.ajax:ajax=0,1==ajax){var i={beforeSerialize:function(e,a){"undefined"!=typeof tinyMCE&&tinyMCE.triggerSave()},beforeSubmit:ninja_forms_before_submit,success:ninja_forms_response,dataType:"json"};jQuery(this).ajaxForm(i),jQuery(this).on("submitResponse.default",function(e,a){return ninja_forms_default_response(a)}),jQuery(this).on("beforeSubmit.default",function(e,a,i,r){return ninja_forms_default_before_submit(a,i,r)})}else jQuery(this).submit(function(e){var a=jQuery(this).serialize(),i=this,r="";return ninja_forms_before_submit(a,i,r)})}),jQuery(".pass1").val("").keyup(function(){var e=this.value,a=this.id.replace("pass1","pass2");a=jQuery("#"+a).val(),check_pass_strength(e,a)}),jQuery(".pass2").val("").keyup(function(){var e=this.value,a=this.id.replace("pass2","pass1");a=jQuery("#"+a).val(),check_pass_strength(a,e)});var countdown={};jQuery(".countdown-timer").each(function(e){jQuery(this).attr("disabled","disabled").prev("input.no-js").remove(),id=jQuery(this).attr("id"),countdown.index=window.setInterval(function(){ninja_forms_countdown(id,e)},1e3)});var calc_fields=jQuery(".ninja-forms-field-calc-listen");calc_fields.each(function(e,a){if("checkbox"==this.type)if(this.checked)var i="checked";else var i="unchecked";else if("undefined"==typeof this.type)var i=jQuery(this).prop("innerHTML");else var i=jQuery(this).val();var r=ninja_forms_get_form_id(this),n=jQuery(this).attr("rel"),l=window["ninja_forms_form_"+r+"_calc_settings"];for(calc_id in l.calc_fields)calc_id!=n&&jQuery(a).data(calc_id+"-oldValue",i)}),jQuery("body").on("focus",".ninja-forms-field-list-options-span-calc-listen",function(e){var a=jQuery(this).attr("rel");if("list"==jQuery("#ninja_forms_field_"+a+"_type").val()&&"radio"==jQuery("#ninja_forms_field_"+a+"_list_type").val()){var i=ninja_forms_get_form_id(this),r=window["ninja_forms_form_"+i+"_calc_settings"];for(calc_id in r.calc_fields)calc_id!=a&&jQuery(this).data(calc_id+"-oldValue",jQuery("input[name='ninja_forms_field_"+a+"']:checked").val())}}),jQuery("body").on("mousedown",".ninja-forms-field-list-options-span-calc-listen",function(e){var a=jQuery(this).attr("rel");if("list"==jQuery("#ninja_forms_field_"+a+"_type").val()&&"radio"==jQuery("#ninja_forms_field_"+a+"_list_type").val()){var i=ninja_forms_get_form_id(this),r=window["ninja_forms_form_"+i+"_calc_settings"];for(calc_id in r.calc_fields)calc_id!=a&&jQuery(this).data(calc_id+"-oldValue",jQuery("input[name='ninja_forms_field_"+a+"']:checked").val())}}),jQuery("body").on("change",".ninja-forms-field-calc-listen",function(event){if(this==event.target){var form_id=ninja_forms_get_form_id(this),field_id=jQuery(this).attr("rel"),calc_settings=window["ninja_forms_form_"+form_id+"_calc_settings"],visible=jQuery("#ninja_forms_field_"+field_id+"_div_wrap").data("visible");for(calc_id in calc_settings.calc_fields)if(calc_id!=field_id){var calc_method=calc_settings.calc_fields[calc_id].method,calc_places=calc_settings.calc_fields[calc_id].places;if("fields"==calc_method){for(var change=!1,i=calc_settings.calc_fields[calc_id].fields.length-1;i>=0;i--)if(calc_settings.calc_fields[calc_id].fields[i].field==field_id){change=!0;break}}else if("eq"==calc_method){var change=!1;if("undefined"!=typeof calc_settings.calc_fields[calc_id].fields)for(var i=calc_settings.calc_fields[calc_id].fields.length-1;i>=0;i--)if(calc_settings.calc_fields[calc_id].fields[i]==field_id){change=!0;break}}if(("fields"==calc_method||"eq"==calc_method)&&change||"auto"==calc_method){if("auto"==calc_method||"fields"==calc_method){var key=jQuery(this).val(),new_value="";if(old_value=jQuery(this).data(calc_id+"-oldValue"),"list"==jQuery("#ninja_forms_field_"+field_id+"_type").val()){var key=jQuery(this).val();if("checkbox"==jQuery("#ninja_forms_field_"+field_id+"_list_type").val())this.checked?jQuery(this).data(calc_id+"-oldValue","checked"):jQuery(this).data(calc_id+"-oldValue","unchecked"),this.checked&&1==visible?old_value=0:this.checked&&1!=visible?(old_value=key,new_value=0):this.checked||1!=visible?this.checked||1==visible||(old_value="checked"==old_value?key:0,new_value=0):(old_value="checked"==old_value?key:0,new_value=0);else if("radio"==jQuery("#ninja_forms_field_"+field_id+"_list_type").val()){var span=jQuery(this).parent().parent().parent().parent();old_value=jQuery(span).data(calc_id+"-oldValue"),"undefined"==typeof old_value&&this.checked&&(old_value=jQuery(this).val()),this.checked&&1==visible?old_value==key&&(old_value=0):this.checked&&1!=visible?new_value=0:this.checked||(old_value=0,new_value=0),this.checked&&jQuery(span).data(calc_id+"-oldValue",key)}else if("multi"==jQuery("#ninja_forms_field_"+field_id+"_list_type").val()){if(jQuery.isArray(key)){for(var tmp=0,i=key.length-1;i>=0;i--)"undefined"!=typeof calc_settings.calc_value[field_id][key[i]]&&(tmp+=parseFloat(calc_settings.calc_value[field_id][key[i]]));new_value=tmp}if(jQuery.isArray(old_value)){for(var tmp=0,i=old_value.length-1;i>=0;i--)"undefined"!=typeof calc_settings.calc_value[field_id][old_value[i]]&&(tmp+=parseFloat(calc_settings.calc_value[field_id][old_value[i]]));old_value=tmp}}else var old_value=jQuery(this).data(calc_id+"-oldValue")}else if("checkbox"==jQuery("#ninja_forms_field_"+field_id+"_type").val())if(this.checked&&1==visible){var key="checked";old_value="unchecked"}else if(this.checked&&1!=visible){var key="unchecked";old_value="checked"==jQuery(this).data(calc_id+"-oldValue")||"undefined"==typeof jQuery(this).data(calc_id+"-oldValue")?"checked":0}else if(this.checked||1==visible){var key="unchecked";old_value="checked"==jQuery(this).data(calc_id+"-oldValue")||"undefined"==typeof jQuery(this).data(calc_id+"-oldValue")?"checked":0}else{var key="unchecked";old_value=0}else"calc"==jQuery("#ninja_forms_field_"+field_id+"_type").val()&&""==key&&(key=jQuery("#ninja_forms_field_"+field_id).prop("innerHTML"));if(""===new_value)if("undefined"!=typeof calc_settings.calc_value[field_id]&&"undefined"!=typeof calc_settings.calc_value[field_id][key])var new_value=calc_settings.calc_value[field_id][key];else{if("undefined"==typeof this.type)var new_value=this.innerHTML;else var new_value=this.value;"undefined"!=typeof ninja_forms_settings.currency_symbol&&(f_value=new_value.replace(ninja_forms_settings.currency_symbol,""),f_value=f_value.replace(/thousandsSeparator/g,""),"."!=decimalPoint&&(f_value=f_value.replace(decimalPoint,"."))),isNaN(new_value)&&(new_value=0)}if("undefined"!=typeof calc_settings.calc_value[field_id]&&"undefined"!=typeof calc_settings.calc_value[field_id][old_value]?old_value=calc_settings.calc_value[field_id][old_value]:""==old_value||"undefined"==typeof old_value?old_value=0:isNaN(old_value)&&"undefined"!=typeof ninja_forms_settings.currency_symbol&&(old_value=old_value.replace(ninja_forms_settings.currency_symbol,""),old_value=old_value.replace(/,/g,"")),"text"==jQuery("#ninja_forms_field_"+calc_id).attr("type"))var current_value=jQuery("#ninja_forms_field_"+calc_id).val();else var current_value=jQuery("#ninja_forms_field_"+calc_id).html();if("undefined"!=typeof ninja_forms_settings.currency_symbol&&"undefined"!=typeof current_value&&(f_value=current_value.replace(ninja_forms_settings.currency_symbol,""),f_value=f_value.replace(/thousandsSeparator/g,""),"."!=decimalPoint&&(f_value=f_value.replace(decimalPoint,"."))),current_value=isNaN(current_value)?0:parseFloat(current_value),"auto"==calc_method){var old_op="subtract",new_op="add";jQuery(this).hasClass("ninja-forms-field-calc-auto")||(old_value="",new_value="")}else if("fields"==calc_method)for(var i=calc_settings.calc_fields[calc_id].fields.length-1;i>=0;i--)if(calc_settings.calc_fields[calc_id].fields[i].field==field_id)var old_op=ninja_forms_find_opposite_op(calc_settings.calc_fields[calc_id].fields[i].op),new_op=calc_settings.calc_fields[calc_id].fields[i].op;if(old_value&&!isNaN(old_value)&&0!=old_value&&""!=old_value&&!jQuery(this).hasClass("ninja-forms-field-calc-no-old-op")){old_value=parseFloat(old_value);var asdf=current_value;tmp=new ninja_forms_var_operator(old_op),current_value=tmp.evaluate(current_value,old_value)}if(!new_value||isNaN(new_value)||0==new_value||""==new_value||jQuery(this).hasClass("ninja-forms-field-calc-no-new-op"))var calc_value=current_value;else{new_value=parseFloat(new_value),tmp=new ninja_forms_var_operator(new_op);var calc_value=tmp.evaluate(current_value,new_value)}}else if("eq"==calc_method){for(var tmp_eq=calc_settings.calc_fields[calc_id].eq,i=calc_settings.calc_fields[calc_id].fields.length-1;i>=0;i--){var f_id=calc_settings.calc_fields[calc_id].fields[i],key=jQuery("#ninja_forms_field_"+f_id).val(),f_value="";if("list"==jQuery("#ninja_forms_field_"+f_id+"_type").val()){if("radio"==jQuery("#ninja_forms_field_"+f_id+"_list_type").val())key=jQuery(".ninja-forms-field-"+f_id+"-options :checked").val();else if("multi"==jQuery("#ninja_forms_field_"+f_id+"_list_type").val()){if(jQuery.isArray(key)){for(var tmp=0,x=key.length-1;x>=0;x--)"undefined"!=typeof calc_settings.calc_value[f_id][key[x]]&&(tmp+=parseFloat(calc_settings.calc_value[f_id][key[x]]));f_value=tmp}}else if("checkbox"==jQuery("#ninja_forms_field_"+f_id+"_list_type").val()){var tmp=0;jQuery(".ninja-forms-field-"+f_id+"-options :checked").each(function(){"undefined"!=typeof calc_settings.calc_value[f_id][this.value]&&(tmp+=parseFloat(calc_settings.calc_value[f_id][this.value]))}),f_value=tmp}}else if("checkbox"==jQuery("#ninja_forms_field_"+f_id+"_type").val())if(jQuery("#ninja_forms_field_"+f_id).attr("checked"))var key="checked";else var key="unchecked";else"calc"==jQuery("#ninja_forms_field_"+f_id+"_type").val()&&""==key&&(f_value=jQuery("#ninja_forms_field_"+f_id).prop("innerHTML"));""==f_value&&(f_value="undefined"!=typeof calc_settings.calc_value[f_id]&&"undefined"!=typeof calc_settings.calc_value[f_id][key]?calc_settings.calc_value[f_id][key]:key),"undefined"!=typeof f_value&&"string"==typeof f_value&&f_value.indexOf("%")>=0&&(f_value=f_value.replace("%",""),isNaN(f_value)||(f_value=parseFloat(f_value)/100)),"undefined"==typeof this.type&&""==key&&(f_value=this.innerHTML),"undefined"!=typeof ninja_forms_settings.currency_symbol&&isNaN(f_value)&&"undefined"!=typeof f_value&&(f_value=f_value.replace(ninja_forms_settings.currency_symbol,""),f_value=f_value.replace(/thousandsSeparator/g,""),"."!=decimalPoint&&(f_value=f_value.replace(decimalPoint,"."))),(isNaN(f_value)||""==f_value||!f_value||"undefined"==typeof f_value)&&(f_value=0);var find="field_"+f_id,re=new RegExp(find,"g");tmp_eq=tmp_eq.replace(re,f_value)}var calc_value=eval(tmp_eq)}if("text"==jQuery("#ninja_forms_field_"+calc_id).attr("type"))var current_value=jQuery("#ninja_forms_field_"+calc_id).val();else var current_value=jQuery("#ninja_forms_field_"+calc_id).html();"undefined"!=typeof ninja_forms_settings.currency_symbol&&"undefined"!=typeof current_value&&(current_value=current_value.replace(ninja_forms_settings.currency_symbol,"")),current_value=isNaN(current_value)?0:parseFloat(current_value),current_value!==calc_value&&("checkbox"!=jQuery("#ninja_forms_field_"+field_id+"_list_type").val()&&jQuery(this).data(calc_id+"-oldValue",key),"checkbox"==jQuery("#ninja_forms_field_"+field_id+"_list_type").val()||"radio"==jQuery("#ninja_forms_field_"+field_id+"_list_type").val()?jQuery("#ninja_forms_field_"+field_id+"_div_wrap").find(".ninja-forms-field").each(function(){jQuery(this).removeClass("ninja-forms-field-calc-no-old-op")}):jQuery(this).removeClass("ninja-forms-field-calc-no-old-op"),calc_value=calc_value.toFixed(calc_places),"text"==jQuery("#ninja_forms_field_"+calc_id).attr("type")?jQuery("#ninja_forms_field_"+calc_id).val(calc_value):jQuery("#ninja_forms_field_"+calc_id).html(calc_value),jQuery("#ninja_forms_field_"+calc_id).trigger("change"))}}}})};
//# sourceMappingURL=maps/ninja-forms-display.minba42.js.map
