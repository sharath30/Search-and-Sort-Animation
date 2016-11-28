function et_escape(param)
{
	return encodeURIComponent(param);
}

function et_unescape(param)
{
	return decodeURIComponent(param);
}

var et_checkOptInCookie = function(showDialog)
{
	if(et_getCookieValue('et_oi') === 'no')
	{
		return false;
	}

	if(showDialog && !document.cookie.match(/et_oi/gi))
	{
		et_showOptIn();
		return false;
	}

	return true;
};var et_easy = 1;

function et_eC(param)
{
	et_secureId = param;
	et_gp='';
	var et_ref = et_getReferrer();

	if(et_sem=='1')
		et_gp+='&et_sem=1';
		
	et_gp += '&swidth='+et_sw+'&sheight='+et_sh+'&siwidth=' + et_iw + '&'+'siheight='+et_ih+'&scookie='+et_co+'&scolor=' +et_sc;

	if(typeof(et_pagename) != 'undefined' && typeof(et_pagename) != 'unknown')
	{
		et_gp+='&et_pagename=' + et_escape(et_pagename.substr(0, et_maxValueLength));
		et_easy = 0;
	}
	
	if(et_easy)
		et_gp+='&et_easy=1'; 

	if(et_areas!='')
		et_gp +='&et_areas=' + et_escape(et_areas.substr(0, et_maxValueLength));
				
	et_gp +='&pn_check_1=Javascript';
	et_gp +='&pn_check_2=Javascript';
	et_gp +='&pn_check_3=Javascript';
				
	if('' == et_target) 
	{
		et_target = ''; 
		et_tval = '0';
		et_tonr = '0'; 
		et_tsale = 0; 
	} 

	et_gp += '&'+'et_target=' + et_escape( et_tt.length ? et_tt : et_target ) +',' + ( et_tv ? et_tv: et_tval ) + ',' + ( et_to ? et_to : et_tonr )+ ','+(et_ts ? et_ts : et_tsale )+','+( typeof( et_cust ) == 'number' ? et_cust : 0 );
	
	if(et_lpage)
		et_gp += '&et_lpage='+et_lpage;
	
	if(et_se!='')
		et_gp +='&et_se='+et_se;
		
	if( et_trig!='' )
		et_gp+='&et_trig='+et_trig;
	
	if(et_basket!='')
		et_gp += '&et_basket=' + et_escape(et_basket); 

	if( et_url ) 
		et_gp += '&et_url=' + et_url; 
	else
	{
		var et=document.location.href.split('?'); 
		et_gp += '&et_url='+et_escape( et[0] );
	}

	et_gp+='&slang='+et_la; 

	if(et_tag!='')
		et_gp+='&et_tag='+et_tag; 
	
	if(et_organisation!= '') 
		et_gp += '&et_organisation=' + et_organisation; 
	
	if(et_demographic!='')
		et_gp+='&et_demographic='+et_demographic;

	if(et_ssid!='')
		et_gp+='&et_ssid='+et_ssid;

	if(et_ip!='')
		et_gp+='&et_ip='+et_ip;

	if(et_subid!='')
		et_gp+='&et_subid='+et_subid;
		
	if(et_ref!='')
		et_gp+='&ref='+et_ref;

	if(typeof(et_pl) != 'undefined' && typeof(et_pl) != 'unknown' && et_pl!='' ) 
		et_gp +='&p='+et_escape(et_pl);
		
	var et_dt = new Date(); 
	var et_tzOffset = et_dt.getTimezoneOffset()
		
	et_imageSrc = et_server + '/' + et_cntScript + '?v=' + et_ver + '&java=y&tc='+et_dt.getTime()+'&et_tz=' + et_tzOffset + '&et=' + et_secureId + '&et_ilevel=' + et_ilevel + et_gp + et_up + et_addFpcParams();
	et_imageSrc = et_imageSrc.substr(0, et_maxUrlLength);

	if(et_first && !(false || true || et_optInActive) && !document.getElementById('et_image'))
	{
		document.write('<p id="et_image" style="display:none;"></p>');
	}

	et_createScriptTag(et_imageSrc);
}

function et_createCntImage(imgSrc, href)
{
	if(et_first)
	{
		et_first = false;

		var et_anchor = document.createElement('a');
		et_anchor.href = href;
		et_anchor.target = '_blank';
		et_anchor.innerHTML = '<img style="border:0px;" alt="" src="'+imgSrc+'">';

		et_appendCntImage(et_anchor);
	}
	else
	{
		var et_image=new Image();
		et_image.src = et_imageSrc;
	}
}if(typeof(et_proxy_redirect) == 'undefined' || typeof(et_proxy_redirect) == 'unknown' || et_proxy_redirect == '')
{
	var et_server = '//www.etracker.de';
	var et_vm_server = '//www.etracker.de/vm';
	var et_vv_server = '//visitorvoice.etracker.com/';
	var et_code_server = '//code.etracker.com';
}
else
{
	var et_server = et_proxy_redirect;
	var et_vm_server = et_proxy_redirect + '/vm';
	var et_vv_server = et_proxy_redirect + '/vv/';
	var et_code_server = et_proxy_redirect;
}

var et_ver = '4.0';
var et_panelLink      = et_server + '/app?et=';
var et_cntScript    = 'fcnt_js.php';
var et_secureId     = 'uLs8oE';
var et_maxUrlLength = 8190;
var et_deliveryHash = "Ys1lIqAiaphigWfMkBHqgQ==";
function _etc_start()
{
	var c = "";


		et_cPQ();
		et_pEc();
		et_eC('uLs8oE');
		if (typeof _etracker.setFirstPixelSent == 'function')
			_etracker.setFirstPixelSent();
		if (typeof _etracker.doWrapperCalls == 'function')
			_etracker.doWrapperCalls();
if(c != '') {var x = document.createElement('div');x.innerHTML = c;var et_bodyInterval = window.setInterval(function(){if(document.body) {window.clearInterval(et_bodyInterval);document.body.appendChild(x);}}, 1);}	}

	var _etc = function() {
		if(et_checkOptInCookie(0)) {
			_etc_start();
		}
	};

_etracker.setReady();