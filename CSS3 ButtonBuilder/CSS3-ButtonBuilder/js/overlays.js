//
// Copyright (C) 2012 Midwinter Duncan Grant http://www.midwinter-dg.com/
// Copyright (C) 2012 Duncan Midwinter
//
// CSS3 ButtonBuilder makes use of the following resources:
// jQuery					http://jquery.com
// jQueryUI					http://jqueryui.com
// jQuery-gradient-picker	https://github.com/tantaman/jquery-gradient-picker
// jQuery color picker		http://www.eyecon.ro/colorpicker/
// jQuery AlphaNumeric		http://www.shiguenori.com/material/alphanumeric/index.html
//

var modal = (function(){
	var 
	method = {},
	$overlay,
	$modal,
	$content,
	$close;

	// Center the modal in the viewport
	method.center = function () {
		var top, left;

		top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
		left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

		$modal.css({
			top:top + ($(window).scrollTop())-30, 
			left:left + $(window).scrollLeft()
		});
	};

	// Open the modal
	method.open = function (settings) {
		$content.empty().append(settings.content);

		$modal.css({
			width: settings.width || 'auto', 
			height: settings.height || 'auto'
		});

		method.center();
		$(window).bind('resize.modal', method.center);
		$modal.fadeIn();
		$overlay.show();
	};

	// Close the modal
	method.close = function () {
		$modal.hide();
		$overlay.hide();
		$content.empty();
		$(window).unbind('resize.modal');
	};

	// Generate the HTML and add it to the document
	$overlay = $('<div id="overlay"></div>');
	$modal = $('<div id="modal"><div id="title-bar"></div></div>');
	$content = $('<div id="content"></div>');
	$close = $('<button id="close">Close</button>');

	$modal.hide();
	$overlay.hide();
	$modal.append($content, $close);

	$(document).ready(function(){
		$('body').append($overlay, $modal);						
	});

	$close.click(function(e){
		e.preventDefault();
		method.close();
	});

	return method;
}());

// Wait until the DOM has loaded before querying the document...

$(document).ready(function(){
	
	function htmlEscape(str) {
		return String(str)
		.replace(/&/g, '&amp;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');
	}
	
	//generate html...
	function generateHtml(tag) {
		
		//get content...
		var htmlContent = htmlEscape(localStorage.getItem('pre45'));
		
		//class or id...
		if(localStorage.getItem('pref7') === '0') {
			var classId = 'class';
		} else {
			var classId = 'id';
		}
		
		//return output...
		if(tag === 'button') {
			
			return '<button type="button" ' + classId + '="myButton">' + htmlContent + '</button>' +
			'\n<input type="submit" ' + classId + '="myButton" value="' + htmlContent + '" />';
			
		} else {
			
			return '<a href="#" ' + classId + '="myButton">' + htmlContent + '</a>';
			
		}
		
	}
	
	//generate css...
	function generateCSS(tag) {
		
		//class or id...
		if(localStorage.getItem('pref7') === '0') {
			var classId = '.';
		} else {
			var classId = '#';
		}
		
		//width and height...
		var css = classId + 'myButton {\n' + 
		'    width: ' + localStorage.getItem('pre1') + 'px' +
		';\n    height: ' + localStorage.getItem('pre2') + 'px' +
		';\n    padding: 0';
		
		//box-sizing...
		//webkit
		if(localStorage.getItem('pref1')==='1') {		
			css = css + ';\n    -webkit-box-sizing: content-box';
		}
		//mozilla
		if(localStorage.getItem('pref2')==='1') {		
			css = css + ';\n    -moz-box-sizing: content-box';
		}
		
		css = css + ';\n    box-sizing: content-box';
		
		//button or anchor...
		if(tag ==='a') {			
			css = css + ';\n    display: inline-block' +
			';\n    text-align: center' +
			';\n    text-decoration: none';
		}
		
		//text...
		
		if(localStorage.getItem('pre32') === '0') {
			var fontStyle = 'normal';
		} else if (localStorage.getItem('pre32') === '1') {
			var fontStyle = 'bold';
		} else if (localStorage.getItem('pre32') === '2') {
			var fontStyle = 'italic';
		} else {
			var fontStyle = 'italic bold';
		}
		
		css = css + ';\n    color: rgba(' + localStorage.getItem('pre34') + ',' +
		localStorage.getItem('pre35') + ',' +
		localStorage.getItem('pre36') + ',' +
		parseInt(localStorage.getItem('pre37'))/100 + ')' + 
		';\n    font: ' + fontStyle + ' ' + localStorage.getItem('pre33') + 'px/' + localStorage.getItem('pre2') + 'px "' + localStorage.getItem('pre31') + '"';
		
		//text shadow...
		if(localStorage.getItem('pre50') === '1') {
			
			css = css + ';\n    text-shadow: rgba(' + localStorage.getItem('pre41') + ',' +
			localStorage.getItem('pre42') + ',' +
			localStorage.getItem('pre43') + ',' +
			parseInt(localStorage.getItem('pre44'))/100 + ') ' +
			localStorage.getItem('pre38') + 'px ' +
			localStorage.getItem('pre39') + 'px ' +
			localStorage.getItem('pre40') + 'px';
			
		}
		
		//border...
		if(localStorage.getItem('pre46') === '1') {
			
			css = css + ';\n    border: ' + localStorage.getItem('pre5') + 'px solid rgba(' +
			localStorage.getItem('pre6') + ',' +
			localStorage.getItem('pre7') + ',' +
			localStorage.getItem('pre8') + ',' +
			parseInt(localStorage.getItem('pre9'))/100 + ')';
			
		} else {
			
			css = css + ';\n    border: none';
			
		}
		
		//border radius...
		if(localStorage.getItem('pre47') === '1') {
		
			//values locked...
			if (localStorage.getItem('pre10') === '1') {
				
				//webkit...
				if (localStorage.getItem('pref1') === '1') {
					css = css + ';\n    -webkit-border-radius: ' + localStorage.getItem('pre11') + 'px';
				}
				
				//mozilla...
				if (localStorage.getItem('pref2') === '1') {
					css = css + ';\n    -moz-border-radius: ' + localStorage.getItem('pre11') + 'px';
				}
				
				//wc3...
				css = css + ';\n    border-radius: ' + localStorage.getItem('pre11') + 'px';
			
			} else {
				
				//webkit...
				if (localStorage.getItem('pref1') === '1') {
					css = css + ';\n    -webkit-border-top-left-radius: ' + localStorage.getItem('pre11') + 'px';
					css = css + ';\n    -webkit-border-top-right-radius: ' + localStorage.getItem('pre12') + 'px';
					css = css + ';\n    -webkit-border-bottom-right-radius: ' + localStorage.getItem('pre13') + 'px';
					css = css + ';\n    -webkit-border-bottom-left-radius: ' + localStorage.getItem('pre14') + 'px';
				}
				
				//mozilla...
				if (localStorage.getItem('pref2') === '1') {
					css = css + ';\n    -moz-border-radius-topleft: ' + localStorage.getItem('pre11') + 'px';
					css = css + ';\n    -moz-border-radius-topright: ' + localStorage.getItem('pre12') + 'px';
					css = css + ';\n    -moz-border-radius-bottomright: ' + localStorage.getItem('pre13') + 'px';
					css = css + ';\n    -moz-border-radius-bottomleft: ' + localStorage.getItem('pre14') + 'px';
				}
				
				css = css + ';\n    border-top-left-radius: ' + localStorage.getItem('pre11') + 'px';
				css = css + ';\n    border-top-right-radius: ' + localStorage.getItem('pre12') + 'px';
				css = css + ';\n    border-bottom-right-radius: ' + localStorage.getItem('pre13') + 'px';
				css = css + ';\n    border-bottom-left-radius: ' + localStorage.getItem('pre14') + 'px';
				
			}
		
		}
		
		//solid or gradient...
		if(localStorage.getItem('pre62') === '0') {
			
			var solidR = localStorage.getItem('pre63');
			var solidG = localStorage.getItem('pre64');
			var solidB = localStorage.getItem('pre65');
			var solidO = localStorage.getItem('pre66');
			
			css = css + ';\n    background-color: rgba(' + solidR + ',' + solidG + ',' + solidB + ',' + parseInt(solidO)/100 + ')';
			
		} else {
			
			//fallback background color...
			if(localStorage.getItem('pref4') === '1') {
				
				if(localStorage.getItem('pref5') === '0') {
					
					//FIRST COLOR
					var points = JSON.parse(localStorage.getItem('pre4'));
					var theFallback = points[0];
					theFallback = theFallback.replace(/\ [0-9]*%$/,'');
					
				} else if(localStorage.getItem('pref5') === '1') {
					
					//LAST COLOR
					var points = JSON.parse(localStorage.getItem('pre4'));
					points.reverse();
					var theFallback = points[0];
					theFallback = theFallback.replace(/\ [0-9]*%$/,'');
					
				} else {
					
					//SOLID BG COLOR...
					var solidR = localStorage.getItem('pre63');
					var solidG = localStorage.getItem('pre64');
					var solidB = localStorage.getItem('pre65');
					var solidO = localStorage.getItem('pre66');
					
					var theFallback = 'rgba(' + solidR + ',' + solidG + ',' + solidB + ',' + parseInt(solidO)/100 + ')';
					
				}
				
				css = css + ';\n    background-image: ' + theFallback;
				
			}
			
			//background...
			var cssPoints = localStorage.getItem('pre4');
			cssPoints = cssPoints.replace(/"/g,'');
			cssPoints = cssPoints.replace('[','');
			cssPoints = cssPoints.replace(']','');
			
			
			if(localStorage.getItem('pre3') !== '4') {
				
				if(localStorage.getItem('pre3') === '0') {
					var cssDirection = 'top, ';
				} else if(localStorage.getItem('pre3') === '1') {
					var cssDirection = 'left, ';
				} else if(localStorage.getItem('pre3') === '2') {
					var cssDirection = '45deg, ';
				} else if(localStorage.getItem('pre3') === '3') {
					var cssDirection = '-45deg, ';
				}
				
				//webkit...
				if(localStorage.getItem('pref1') === '1') {
					
					css = css + ';\n    background-image: -webkit-linear-gradient(' + cssDirection + cssPoints + ')';
					
				}
				
				//mozilla...
				if(localStorage.getItem('pref2') === '1') {
					
					css = css + ';\n    background-image: -moz-linear-gradient(' + cssDirection + cssPoints + ')';
					
				}
				
				//opera...
				if(localStorage.getItem('pref3') === '1') {
					
					css = css + ';\n    background-image: -o-linear-gradient(' + cssDirection + cssPoints + ')';
					
				}
				
				//ie10...
				if(localStorage.getItem('pref6') === '1') {
					
					//correct -45deg to 135deg...
					if(cssDirection === '-45deg, ') {
						cssDirection = '135deg, ';
					}
					
					css = css + ';\n    background-image: -ms-linear-gradient(' + cssDirection + cssPoints + ')';
					
					//and revert...
					if(cssDirection === '135deg, ') {
						cssDirection = '-45deg, ';
					}
					
				}
				
				//wc3...
				css = css + ';\n    background-image: linear-gradient(' + cssDirection + cssPoints + ')';
				
			} else {
				
				//webkit...
				if(localStorage.getItem('pref1') === '1') {
					
					css = css + ';\n    background-image: -webkit-radial-gradient(' + cssPoints + ')';
					
				}
				
				//mozilla...
				if(localStorage.getItem('pref2') === '1') {
					
					css = css + ';\n    background-image: -moz-radial-gradient(' + cssPoints + ')';
					
				}
				
				//opera...
				if(localStorage.getItem('pref3') === '1') {
					
					css = css + ';\n    background-image: -o-radial-gradient(' + cssPoints + ')';
					
				}
				
				//ie10...
				if(localStorage.getItem('pref6') === '1') {
					
					css = css + ';\n    background-image: -o-radial-gradient(' + cssPoints + ')';
					
				}
				
				//wc3...
				css = css + ';\n    background-image: radial-gradient(' + cssPoints + ')';
				
			}
		
		}//end background...
		
		//box shadows...
		//outer...
		
		//webkit...
		if(localStorage.getItem('pref1') === '1') {
		
			if(localStorage.getItem('pre49') === '1') {
				
				css = css + ';\n    -webkit-box-shadow: rgba(' + localStorage.getItem('pre27') + ',' +
				localStorage.getItem('pre28') + ',' +
				localStorage.getItem('pre29') + ',' +
				parseInt(localStorage.getItem('pre30'))/100 + ') ' +
				localStorage.getItem('pre23') + 'px ' +
				localStorage.getItem('pre24') + 'px ' +
				localStorage.getItem('pre25') + 'px ' +
				localStorage.getItem('pre26') + 'px';
				
			}
			
			//inner...
			if(localStorage.getItem('pre48') === '1') {
				
				//if outer...
				if(localStorage.getItem('pre49') === '1') {
						
						css = css + ', ';
					
				} else {
					
						css = css + ';\n    -webkit-box-shadow: ';
						
				}
			
				css = css + 'inset rgba(' + localStorage.getItem('pre19') + ',' +
				localStorage.getItem('pre20') + ',' +
				localStorage.getItem('pre21') + ',' +
				parseInt(localStorage.getItem('pre22'))/100 + ') ' +
				localStorage.getItem('pre15') + 'px ' +
				localStorage.getItem('pre16') + 'px ' +
				localStorage.getItem('pre17') + 'px ' +
				localStorage.getItem('pre18') + 'px';
			
			}
		}//end webkit...
		
		//moz...
		if(localStorage.getItem('pref2') === '1') {
		
			if(localStorage.getItem('pre49') === '1') {
				
				css = css + ';\n    -moz-box-shadow: rgba(' + localStorage.getItem('pre27') + ',' +
				localStorage.getItem('pre28') + ',' +
				localStorage.getItem('pre29') + ',' +
				parseInt(localStorage.getItem('pre30'))/100 + ') ' +
				localStorage.getItem('pre23') + 'px ' +
				localStorage.getItem('pre24') + 'px ' +
				localStorage.getItem('pre25') + 'px ' +
				localStorage.getItem('pre26') + 'px';
				
			}
			
			//inner...
			if(localStorage.getItem('pre48') === '1') {
				
				//if outer...
				if(localStorage.getItem('pre49') === '1') {
						
						css = css + ', ';
					
				} else {
					
						css = css + ';\n    -moz-box-shadow: ';
						
				}
			
				css = css + 'inset rgba(' + localStorage.getItem('pre19') + ',' +
				localStorage.getItem('pre20') + ',' +
				localStorage.getItem('pre21') + ',' +
				parseInt(localStorage.getItem('pre22'))/100 + ') ' +
				localStorage.getItem('pre15') + 'px ' +
				localStorage.getItem('pre16') + 'px ' +
				localStorage.getItem('pre17') + 'px ' +
				localStorage.getItem('pre18') + 'px';
			
			}
		}//end moz...
		
		//wc3...
		if(localStorage.getItem('pre49') === '1') {
			
			css = css + ';\n    box-shadow: rgba(' + localStorage.getItem('pre27') + ',' +
			localStorage.getItem('pre28') + ',' +
			localStorage.getItem('pre29') + ',' +
			parseInt(localStorage.getItem('pre30'))/100 + ') ' +
			localStorage.getItem('pre23') + 'px ' +
			localStorage.getItem('pre24') + 'px ' +
			localStorage.getItem('pre25') + 'px ' +
			localStorage.getItem('pre26') + 'px';
			
		}
		
		//inner...
		if(localStorage.getItem('pre48') === '1') {
			
			//if outer...
			if(localStorage.getItem('pre49') === '1') {
					
					css = css + ', ';
				
			} else {
				
					css = css + ';\n    box-shadow: ';
					
			}
		
			css = css + 'inset rgba(' + localStorage.getItem('pre19') + ',' +
			localStorage.getItem('pre20') + ',' +
			localStorage.getItem('pre21') + ',' +
			parseInt(localStorage.getItem('pre22'))/100 + ') ' +
			localStorage.getItem('pre15') + 'px ' +
			localStorage.getItem('pre16') + 'px ' +
			localStorage.getItem('pre17') + 'px ' +
			localStorage.getItem('pre18') + 'px';
		
		}
		
		//close css...
		css = css + ';\n}';
		
		return css;
		
	} 
	
	$('#css').click(function(e){
		
		//title...
		$('#title-bar').html('Generated CSS');
		
		modal.open({content: '<textarea id="html-window" readonly="readonly" class="purple">' + generateHtml('button') + '</textarea>' +
			'<textarea id="css-window" readonly="readonly" class="green">' + generateCSS('button') + '</textarea>' +
			'<div class="tag-controls">' +
			'<span>html tag:</span>' +
			'<input type="radio" name="tag" id="button-tag" value="0" checked="checked" />' +
			'<input type="radio" name="tag" id="a-tag" value="1" />' +
			'</div>'
		});
		
		$('#modal').addClass('css-modal');
		
		e.preventDefault();
		
	});
	
	//for obj-c...
	function openCssFromMenu() {
		$('#css').click();
	}
	
	//attatch to window for access from Objective-C...
	window.openCssFromMenu = openCssFromMenu;
	
	
	$('body').on('click', '#css-window', function() {
		var $this = $(this);
		$this.select();
	});
	
	$('body').on('click', '#html-window', function() {
		var $this = $(this);
		$this.select();
	});
	
	$('body').on('change', 'input:radio[name=tag]', function() {
			$('#css-window').html('');
			
			if($('#button-tag').is(':checked')) {
				
				$('#css-window').removeClass('orange');
				$('#css-window').addClass('green');
				$('#css-window').html(generateCSS('button'));
				
				$('#html-window').removeClass('blue');
				$('#html-window').addClass('purple');
				$('#html-window').html(generateHtml('button'));
				
			} else {
				
				$('#css-window').removeClass('green');
				$('#css-window').addClass('orange');
				$('#css-window').html(generateCSS('a'));
				
				$('#html-window').removeClass('purple');
				$('#html-window').addClass('blue');
				$('#html-window').html(generateHtml('a'));
				
			}
			
		});
	
	//reset...
	$('#reset').click(function(e){
		
		//title...
		$('#title-bar').html('Reset');
		
		modal.open({content: '<div class="reset-option">' +
		'<input type="radio" name="reset-type" id="reset-type-1" value="0" checked="checked" />' +
		'<label for="reset-type-1">Reset Button Preview</label>' +
		'</div>' +
		'<p class="option-desc1">This setting resets the current preview window to the default settings - any saved buttons will be unaffected.</p>' +
		'<div class="reset-option">' +
		'<input type="radio" name="reset-type" id="reset-type-2" value="1" />' +
		'<label for="reset-type-2">Reset Application</label>' +
		'</div>' +
		'<p class="option-desc2">This setting resets the entire application.<br /><span class="warning">WARNING: you will loose all saved buttons.</span></p>' +
		
			'<button id="confirm">Reset</button>'
		});
		
		$('#modal').removeClass('css-modal');
		
		e.preventDefault();
		
		$('#confirm').click(function() {
			
			if($('#reset-type-1').is(':checked')) {
			
				//reset preview only...
				
				for(i=1; i<66; i++) {
					
					localStorage.removeItem('pre' + i);
					
				}
				
				window.location.reload();
			
			} else {
				
				//reset application...
				
				localStorage.clear();
				
				window.location.reload();
				
			}
			
		});
		
	});
	
	//for obj-c...
	function openResetFromMenu() {
		$('#reset').click();
	}
	
	//attatch to window for access from Objective-C...
	window.openResetFromMenu = openResetFromMenu;
	
	//prefs...
	$('#prefs').click(function(e){
		
		//title...
		$('#title-bar').html('CSS3 ButtonBuilder Preferences');
	
		modal.open({content: '<div class="prefs-window">' +
		'<p>Browser support:</p>' +
		'<div class="pref-row">' +
		'<input type="checkbox" id="webkit" /> <label for="webkit">Webkit (Safari, Chrome)</label>' +
		'</div>' +
		'<div class="pref-row">' +
		'<input type="checkbox" id="mozilla" /> <label for="mozilla">Mozilla (Firefox)</label>' +
		'</div>' +
		'<div class="pref-row">' +
		'<input type="checkbox" id="opera" /> <label for="opera">Opera</label>' +
		'</div>' +
		'<div class="pref-row">' +
		'<input type="checkbox" id="ie" /> <label for="ie">IE 10</label>' +
		'</div>' +
		'</div>' +
		'<div class="prefs-window">' +
		'<p>Gradient fallback color:</p>'+
		'<div class="pref-row">' +
		'<input type="checkbox" id="fallback" /> <label for="fallback">Color</label> ' +
		'<select id="fallback-color">' +
		'</select>' +
		'</div>' +
		'</div>' +
		'<div class="prefs-window">' +
		'<p>Output options:</p>'+
		'<div class="pref-row">' +
		'<input type="radio" id="output-class" name="output" val="0" />' +
		'<label for="output-class">use class</label>' +
		'<input type="radio" id="output-id" name="output" val="1" />' +
		'<label for="output-id">use id</label>' +
		'</div>' +
		'</div'
		});
		
		$('#modal').removeClass('css-modal');
		
		e.preventDefault();
		
		//set checkboxes...
		if(localStorage.getItem('pref1') === '1') {
			$('#webkit').attr('checked', true);
		}
		
		if(localStorage.getItem('pref2') === '1') {
			$('#mozilla').attr('checked', true);
		}
		
		if(localStorage.getItem('pref3') === '1') {
			$('#opera').attr('checked', true);
		}
		
		if(localStorage.getItem('pref6') === '1') {
			$('#ie').attr('checked', true);
		}
		
		if(localStorage.getItem('pre62') === '1') {
		
			if(localStorage.getItem('pref4') === '1') {
				$('#fallback').attr('checked', true);
				
				$('#fallback-color').html('<option value="0">First gradient color</option>' +
				'<option value="1">Last gradient color</option>' +
				'<option value="2">Solid background color</option>');
				
				$('#fallback-color').val(localStorage.getItem('pref5'));
				
			} else {
				
				$('#fallback-color').attr('disabled', 'disabled');
				
			}
		
		} else {
			
			$('#fallback, #fallback-color').attr('disabled', 'disabled');
			
		}
		
		if(localStorage.getItem('pref7') === '0') {
			$('#output-class').attr('checked', true);
		} else {
			$('#output-id').attr('checked', true);
		}
		
		//on click checkboxes...
		$('#webkit').click(function() {
			if($(this).is(':checked')) {
			localStorage.setItem('pref1', '1');
			} else {
				localStorage.setItem('pref1', '0');
			}
		});
		
		$('#mozilla').click(function() {
			if($(this).is(':checked')) {
			localStorage.setItem('pref2', '1');
			} else {
				localStorage.setItem('pref2', '0');
			}
		});
		
		$('#opera').click(function() {
			if($(this).is(':checked')) {
			localStorage.setItem('pref3', '1');
			} else {
				localStorage.setItem('pref3', '0');
			}
		});
		
		$('#ie').click(function() {
			if($(this).is(':checked')) {
			localStorage.setItem('pref6', '1');
			} else {
				localStorage.setItem('pref6', '0');
			}
		});
		
		$('#fallback').click(function() {
			if($(this).is(':checked')) {
			localStorage.setItem('pref4', '1');
			
				$('#fallback-color').html('<option value="0">First gradient color</option>' +
			'<option value="1">Last gradient color</option>' +
			'<option value="2">Solid background color</option>');
				
				$('#fallback-color').val(localStorage.getItem('pref5'));
				
				$('#fallback-color').removeAttr('disabled');
			
			} else {
				
				localStorage.setItem('pref4', '0');
				
				$('#fallback-color').html('');
				
				$('#fallback-color').attr('disabled', 'disabled');				
			}
		});
		
		$('#output-class').click(function() {
			localStorage.setItem('pref7', '0');
		});
		
		$('#output-id').click(function() {
			localStorage.setItem('pref7', '1');
		});
		
	});
	
	//for obj-c...
	function openPrefsFromMenu() {
		$('#prefs').click();
	}
	
	//attatch to window for access from Objective-C...
	window.openPrefsFromMenu = openPrefsFromMenu;
	
	//save...
	$('#save').click(function(e){
		
		//title...
		$('#title-bar').html('Save Button Styles');
	
		modal.open({content: '<div class="prefs-window">' +
			'<input type="text" id="save-name" name="save-name" value="" placeholder="enter a name for this button" required pattern="[a-zA-Z0-9 ]+" />' +
			'</div>' +
			'<button id="confirm-save">Save Style</button>'
		});
		
		$('#modal').removeClass('css-modal');
		
		$('#save-name').focus();
		
		$('#save-name').alphanumeric({allow:" "});
		
		$('#confirm-save').click(function() {
			
			if($('#save-name').val() !== '') {
				
				var timestamp = new Date().getTime();
				
				//replace any underscores (just in case!)...
				
				var fileName = $('#save-name').val() + '|' + timestamp;
				
				fileName = fileName.replace(/_/g, " ");
				
				var settingsArr = new Array();
				
				for( i=0; i<65; i++ ) {
					
					settingsArr[i] = localStorage.getItem('pre' + (i+1));
					
				}
				
				settings = JSON.stringify(settingsArr);
				
				//save settings...
				localStorage.setItem('saved_' + fileName, settings);
				
				//add record...
				saved= JSON.parse(localStorage.getItem('saveList'));
				
				saved.push(fileName);
				
				var savedJson = JSON.stringify(saved);
				
				localStorage.setItem('saveList', savedJson);
				
				modal.close();				
			}			
			
		});
		
		e.preventDefault();
		
	});
	
	//for obj-c...
	function openSaveFromMenu() {
		$('#save').click();
	}
	
	//attatch to window for access from Objective-C...
	window.openSaveFromMenu = openSaveFromMenu;
	
	function populateUl() {
		
		$('#load-list li').remove();
		
		//saved list...
		var loadList = JSON.parse(localStorage.getItem('saveList'));
		
		if(loadList.length === 0) {
			
			$('#load-list').append('<li>There are no saved buttons.</li>');
			
		} else {
			
			for(i=0; i<loadList.length; i++) {
				
				//split timestamp from name...
				var printName = loadList[i].substr(0, loadList[i].indexOf('|')); 
				
				//get all presets...
				var buttonArr = JSON.parse(localStorage.getItem('saved_' + loadList[i]));
				
				var textSample = buttonArr[44].charAt(0);
				
				//if no char...
				if(textSample === '<') {
					textSample = ' ';
				}
				
				//generate html...
				$('#load-list').append('<li class="button-open" data-buttonOpen="saved_' + loadList[i] + '" id="button-row-' + i + '"><button id="delete-' + i + '" class="button-delete" data-buttonDelete="' + i + '">Delete</button><div class="load-swatch" id="load-swatch-' + i + '">' + textSample + '</div><span class="load-name">' + printName + '</span></li>');
				
				//fill swatch...
				var swatchDir = buttonArr[2];
				
				var swatchPoints = JSON.parse(buttonArr[3]);
				
				if (swatchDir === '0') {
					var gradType = '-webkit-linear-gradient(top,';
				} else if (swatchDir === '1') {
					var gradType = '-webkit-linear-gradient(left,';
				} else if (swatchDir === '2') {
					var gradType = '-webkit-linear-gradient(45deg,';
				} else if (swatchDir === '3') {
					var gradType = '-webkit-linear-gradient(-45deg,';
				} else {
					var gradType = '-webkit-radial-gradient(';
				}
				
				if(buttonArr[31] === '0') {
					textWeight = 'normal';
					textStyle = 'normal';
				} else if(buttonArr[31] === '1') {
					textWeight = 'bold';
					textStyle = 'normal';
				} else if(buttonArr[31] === '2') {
					textWeight = 'normal';
					textStyle = 'italic';
				} else {
					textWeight = 'bold';
					textStyle = 'italic';
				}
				
				//gradient, color, font, font-weight, font-style...
				$('#load-swatch-' + i).css({'background-image': gradType + swatchPoints + ')',
				'color': 'rgba(' + buttonArr[33] + ',' + buttonArr[34] + ',' + buttonArr[35] + ',' + parseInt(buttonArr[36])/100 + ')',
				'font-family': buttonArr[30],
				'font-weight': textWeight,
				'font-style': textStyle
				});
				
				//text-shadow...
				if(buttonArr[49] === '1') {
					$('#load-swatch-' + i).css('text-shadow', 'rgba(' +buttonArr[40]+ ',' +buttonArr[41]+ ',' +buttonArr[42]+ ',' +buttonArr[43]+ ') ' +buttonArr[37]+ 'px ' +buttonArr[38]+ 'px ' +buttonArr[39]+ 'px');
				}
				
				//border...
				if(buttonArr[45] === '1') {
					$('#load-swatch-' + i).css('border', '2px solid rgba(' + buttonArr[5] + ',' + buttonArr[6] + ',' + buttonArr[7] + ',' + parseInt(buttonArr[8])/100 + ')');
				} else {
					$('#load-swatch-' + i).css('margin', '2px 22px 2px 2px');
				}
				
				//border radius...
				if(buttonArr[46] === '1') {
					
					//if border lock...
					if(buttonArr[9] === '1') {
						//if value not 0...
						if(buttonArr[10] !== '0') {
							$('#load-swatch-' + i).css('-webkit-border-radius', '4px');
						}
					} else {
						//individual corners...
						if(buttonArr[10] !== '0') {
							$('#load-swatch-' + i).css('-webkit-border-top-left-radius', '4px');
						}
						if(buttonArr[11] !== '0') {
							$('#load-swatch-' + i).css('-webkit-border-top-right-radius', '4px');
						}
						if(buttonArr[12] !== '0') {
							$('#load-swatch-' + i).css('-webkit-border-bottom-right-radius', '4px');
						}
						if(buttonArr[13] !== '0') {
							$('#load-swatch-' + i).css('-webkit-border-bottom-left-radius', '4px');
						}
					}
				}
				
			}//end for...
		
		}
		
	}
	
	//load...
	$('#load').click(function(e){
	
		//title...
		$('#title-bar').html('Load Button Styles');
		
		//controls...
		$('#window-controls').html('<button id="close">Close</button>');
		
		//modal...
		modal.open({content: '<div id="load-window">' +
		'<ul id="load-list"></ul>' +
		'</div>'
		});
		
		$('#modal').removeClass('css-modal');
		
		populateUl();
		
		e.preventDefault();
		
	});
	
	//for obj-c...
	function openLoadFromMenu() {
		$('#load').click();
	}
	
	//attatch to window for access from Objective-C...
	window.openLoadFromMenu = openLoadFromMenu;
	
	$('body').on('click', '.button-delete', function() {
	
		var deleteNum = $(this).attr('data-buttonDelete');

		var deleteList = JSON.parse(localStorage.getItem('saveList'));
		
		//delete button...
		localStorage.removeItem('saved_' + deleteList[deleteNum]);
		
		//remove from saveList...
		deleteList.splice(deleteNum, 1);
		
		//set data...
		localStorage.setItem('saveList', JSON.stringify(deleteList));
		
		//delete list item...
		$('#button-row-' + deleteNum).fadeOut(500, function() { 
			
			$('#button-row' + deleteNum).remove();
			populateUl();
		});
	
	});
	
	//open button...
	$('body').on('click', '.button-open', function() {
		
		//get button key...
		var openKey= $(this).attr('data-buttonOpen');
		
		//get array...
		var openButton = JSON.parse(localStorage.getItem(openKey));
		
		//set this button...
		for(i=0; i<65; i++) {
			
			localStorage.setItem('pre' + (i+1), openButton[i]);
			
		}
		
		window.location.reload();
		
	});
	
	//fallback color...
	$('body').on('change', '#fallback-color', function() {
		
		var colorVal = $(this).val();
		
		localStorage.setItem('pref5', colorVal);
		
	});
	
});