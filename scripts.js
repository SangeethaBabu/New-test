/**
 * Copyright (C) 2009-2010 LeadFormix, Inc. All Rights Reserved.
 * LeadFormix PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 *
 * @link http://www.leadformix.com
 *
 * For further information, contact:
 * mailto:support@leadformix.com or mailto:cs@leadformix.com
 */

(function ($) {



$('input[type="submit"]').click(function() 
{
	var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var emailblockReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.(?!ru)$/;
	var numExp = /^[0-9]+$/;
    var error="";
	setLFMC();
	$(document).find(".lfrequired").each(function(){ 
		if($('input[name="'+this.name+'"]').val()==="")
		{
			var name =  this.name;
			if($(this).prev("span").attr('title_edit') === 'formeditcontent') {
				name = $(this).prev("span").text();	
			}
			error = error + "Please enter " + name.replace(':*', '') + "\n";
		}
	});
	$(document).find(".lfnumber").each(function(){ 
		var NumVal = $('input[name="'+this.name+'"]').val();
		var name =  this.name;
		if(NumVal==="")
		{			
			if($(this).prev("span").attr('title_edit') === 'formeditcontent') {
				name = $(this).prev("span").text();	
			}
			error = error + "Please enter " + name.replace(':*', '') + "\n";
		}
		else
		{
			if(!numExp.test(NumVal))
			{
				if($(this).prev("span").attr('title_edit') === 'formeditcontent') {
					name = $(this).prev("span").text();	
				}
				error = error + "Please enter a valid value for " + name.replace(':*', '') + "\n";
			}
		}
	});
	$(document).find(".lfemail").each(function(){ 
		var emailVal = $('input[name="'+this.name+'"]').val();
		if(emailVal==="")
		{
			var name =  this.name;
			if($(this).prev("span").attr('title_edit') === 'formeditcontent') {
				name = $(this).prev("span").text();	
			}
			error = error + "Please enter " + name.replace(':*', '') + "\n";
		}
		else
		{
			if(!emailReg.test(emailVal))
			{
				error = error + "Please enter a valid email address\n";
			}
			else if(!emailblockReg.test(emailVal)){
                error = error + "Please enter a valid email address\n";
            }
		}
	});	
	if(error!="")
	{
		alert(error);
		return false;
	}
	else
	{
		$("form").submit();
	}
});



$('input[type="button"]').click(function() 
{
	var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var emailblockReg = /^([\w-\.]+@(?!mail.ru)([\w-]+\.)+[\w-]{2,4})?$/;
	var numExp = /^[0-9]+$/;
    var error="";
	setLFMC();
	$(document).find(".lfrequired").each(function(){ 
		if($('input[name="'+this.name+'"]').val()==="")
		{
			var name =  this.name;
			if($(this).prev("span").attr('title_edit') === 'formeditcontent') {
				name = $(this).prev("span").text();	
			}
			error = error + "Please enter " + name.replace(':*', '') + "\n";
		}
	});
	$(document).find(".lfnumber").each(function(){ 
		var NumVal = $('input[name="'+this.name+'"]').val();
		var name =  this.name;
		if(NumVal==="")
		{
			if($(this).prev("span").attr('title_edit') === 'formeditcontent') {
				name = $(this).prev("span").text();	
			}
			error = error + "Please enter " + name.replace(':*', '') + "\n";
		}
		else
		{
			if(!numExp.test(NumVal))
			{
				if($(this).prev("span").attr('title_edit') === 'formeditcontent') {
					name = $(this).prev("span").text();	
				}
				error = error + "Please enter a valid value for " + name.replace(':*', '') + "\n";
			}
		}
	});
	$(document).find(".lfemail").each(function(){ 
		var emailVal = $('input[name="'+this.name+'"]').val();
		if(emailVal==="")
		{
			var name =  this.name;
			if($(this).prev("span").attr('title_edit') === 'formeditcontent') {
				name = $(this).prev("span").text();	
			}
			error = error + "Please enter " + name.replace(':*', '') + "\n";
		}
		else
		{
			if(!emailReg.test(emailVal))
			{
				error = error + "Please enter a valid email address\n";
			}
			else if(!emailblockReg.test(emailVal)){
                error = error + "Please enter a valid email address\n";
            }
		}
	});	
	if(error!="")
	{
		alert(error);			
	}
	else
	{
		$("form").submit();
	}
});



function getCookie(cookieName, path, domain) {
	var cookiePattern = new RegExp('(^|;)[ ]*' + cookieName + '=([^;]*)' + (path ? '(;[ ]*expires=[^;]*)?;[ ]*path=' + path.replace('/', '\\/') + '' : '') + (domain ? ';[ ]*domain=' + domain + '(;|$)' : '')), cookieMatch = cookiePattern.exec(document.cookie), unescapeWrapper = window.decodeURIComponent || unescape;
	return cookieMatch ? unescapeWrapper(cookieMatch[2]) : 0;
}


$(document).ready(function(){
	$("#LFMC").val();
	/*$('form').bind('submit', function(e) {
		e.preventDefault();
		// etc
	});*/
});

function setLFMC() {
	try {
   	document.getElementById('LFMC').value=getCookie("_vt_");
	$("#sa1").removeAttr("style");
	$("#sa1").parent().removeAttr("style");
	} catch (e) { }
}

//window.onload = setLFMC;

$(function() {  setLFMC();

	$.validator.addMethod("bsemail",
	  function(value,element) {
	   return value.match(new RegExp(/^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!aol.com)(?!live)(?!msn)(?!rediff)(?!test)(?!attglobal)(?!bellsouth)(?!earthlink)(?!verizon)(?!comcast)([\w-]+\.)+[\w-]{2,4})?$/));
	  },
	  "Please provide a corporate email id."
	);
	$(".no-lfm").validate({
		onkeyup: false,
	    onclick: false,
	    onfocusout: false,
		rules: {
            captcha: {
                required: true,
				minlength: 5,
				maxlength: 5
            }
        },
	    submitHandler: function(form) {
			form.submit();
		}
	});
    if(typeof $('.selector').realperson == 'function') {
	    $('.selector').realperson();
    }

    if($('input#captcha').length) {
        var hostN = $('img#captcha').attr('src');
        if(typeof hostN !== 'undefined') {
            var hostN = hostN.match(/^https?:\/\/[^/]+/);
            $('#refresh-captcha').click(function(e){
                $('img#captcha').attr("src",hostN[0] + "/bf/nlp/php/newCaptcha.php?rnd=" + Math.random());
            });
        }

        $.LFMXQueryString = (function (a) {
            if (a == "") return {};
            var b = {};
            for (var i = 0; i < a.length; ++i) {
                var p = a[i].split('=');
                if (p.length != 2) continue;
                b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
            }
            return b;
        })(window.location.search.substr(1).split('&'))

        $.each($.LFMXQueryString, function (index, value) {
            $('[name="' + index + '"]').val(value);

        });

        if ($.LFMXQueryString['errNo'] && $.LFMXQueryString['errField'] && $.LFMXQueryString['errField'] == 'captcha') {
            var label = $("label.error[for=captcha]");
            if (typeof label !== 'undefined' && label.length == 0) {
                $('input#captcha').after('<label for="captcha" class="error">Invalid captcha entered. Please try again</label>');
            }
        }
    }
});

})(jQuery);