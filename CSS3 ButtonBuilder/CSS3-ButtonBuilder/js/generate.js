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

$(document).ready(function() {	
	
	//limit numeric input only...
	$('.numeric').numeric();
	
	window.setPreview = function() {
		
		//!get active checkboxes...
		var actBorder = localStorage.getItem('pre46');
		var actRadius = localStorage.getItem('pre47');
		var actShadowIn = localStorage.getItem('pre48');
		var actShadowOut = localStorage.getItem('pre49');
		var actShadowText = localStorage.getItem('pre50');
		
		//!get preset values...		
		var gradDir = localStorage.getItem('pre3');
		
		var gradPoints = localStorage.getItem('pre4');
		gradPoints = gradPoints.replace(/"/g,'');
		gradPoints = gradPoints.replace('[','');
		gradPoints = gradPoints.replace(']','');
		
		
		var gradProperty = '-webkit-linear-gradient';
		
		if(gradDir === '0') {
			var direction = 'top ,';
		} else if(gradDir === '1') {
			var direction = 'left ,';
		} else if(gradDir === '2') {
			var direction = '45deg ,';
		} else if(gradDir === '3') {
			var direction = '-45deg ,';
		} else {
			gradProperty = '-webkit-radial-gradient'
			var direction = '';
		}
		
		
		var borderWidth = localStorage.getItem('pre5');
		var borderR = localStorage.getItem('pre6');
		var borderG = localStorage.getItem('pre7');
		var borderB = localStorage.getItem('pre8');
		var borderO = localStorage.getItem('pre9');
		
		var borderTl = localStorage.getItem('pre11');
		var borderTr = localStorage.getItem('pre12');
		var borderBr = localStorage.getItem('pre13');
		var borderBl = localStorage.getItem('pre14');
		
		var innerX = localStorage.getItem('pre15');
		var innerY = localStorage.getItem('pre16');
		var innerBlur = localStorage.getItem('pre17');
		var innerSpread = localStorage.getItem('pre18');
		var innerR = localStorage.getItem('pre19');
		var innerG = localStorage.getItem('pre20');
		var innerB = localStorage.getItem('pre21');
		var innerO = localStorage.getItem('pre22');
		
		var outerX = localStorage.getItem('pre23');
		var outerY = localStorage.getItem('pre24');
		var outerBlur = localStorage.getItem('pre25');
		var outerSpread = localStorage.getItem('pre26');
		var outerR = localStorage.getItem('pre27');
		var outerG = localStorage.getItem('pre28');
		var outerB = localStorage.getItem('pre29');
		var outerO = localStorage.getItem('pre30');
		
		var fontFace = localStorage.getItem('pre31');
		var fontStyle = localStorage.getItem('pre32');
		
		if(fontStyle === '0') {
			textWeight = 'normal';
			textStyle = 'normal';
		} else if(fontStyle === '1') {
			textWeight = 'bold';
			textStyle = 'normal';
		} else if(fontStyle === '2') {
			textWeight = 'normal';
			textStyle = 'italic';
		} else {
			textWeight = 'bold';
			textStyle = 'italic';
		}
		
		var fontSize = localStorage.getItem('pre33');
		var fontR = localStorage.getItem('pre34');
		var fontG = localStorage.getItem('pre35');
		var fontB = localStorage.getItem('pre36');
		var fontO = localStorage.getItem('pre37');
		
		var shadowX = localStorage.getItem('pre38');
		var shadowY = localStorage.getItem('pre39');
		var shadowBlur = localStorage.getItem('pre40');
		var shadowR = localStorage.getItem('pre41');
		var shadowG = localStorage.getItem('pre42');
		var shadowB = localStorage.getItem('pre43');
		var shadowO = localStorage.getItem('pre44');
		
		var previewR = localStorage.getItem('pre51');
		var previewG = localStorage.getItem('pre52');
		var previewB = localStorage.getItem('pre53');
		var previewO = localStorage.getItem('pre54');
		
		$('#preview').css('background-color', 'rgba(' + previewR + ',' + previewG + ',' + previewB + ',' + parseInt(previewO)/100 + ')');
		
		//!apply presets to preview...
		
		//set the text...
		$('#button-text').html(localStorage.getItem('pre45'));
		
		//set the preview css...
		$('#button').css({
			
			//set dimensions...
			'width': localStorage.getItem('pre1'),
			'line-height': localStorage.getItem('pre2') + 'px',
			
			//text attributes...
			'font-family': fontFace,
			'font-weight': textWeight,
			'font-style': textStyle,
			'font-size': fontSize + 'px',
			'color': 'rgba(' + fontR + ',' + fontG + ',' + fontB + ',' + parseInt(fontO)/100 + ')',
			
		});
		
		//!apply presets to controls...
		
		//solid/gradient...
		if(localStorage.getItem('pre62') === '0') {
			
			$('#background-type-solid').attr('checked', true);
			
			$('#background-controls').find('input:not(#background-type-gradient)').attr('disabled','disabled');
			
			$('#button').css('background-color','rgba(' + localStorage.getItem('pre63') + ',' + localStorage.getItem('pre64') + ',' + localStorage.getItem('pre65') + ',' + parseInt(localStorage.getItem('pre66'))/100 + ')');
			
		} else {
			
			$('#background-type-gradient').attr('checked', true);
				
			//set gradient...
			$('#button').css('background-image', gradProperty + '(' + direction + gradPoints + ')');
			
		}
		
		//active controls...
		if(actBorder === '1') {
		
			$('#border-activate').attr('checked', true);
			
			$('#border-attr-controls').find('input:not(#border-activate)').removeAttr('disabled');
			
			//set border...
			$('#button').css('border', borderWidth + 'px solid rgba(' + borderR + ',' + borderG + ',' + borderB + ',' + parseInt(borderO)/100 + ')');
		
		} else {
			
			$('#border-activate').attr('checked', false);
			
			$('#border-attr-controls').find('input:not(#border-activate)').attr('disabled','disabled');
			
			$('#button').css('border', 'none');
		}
		
		if(actRadius === '1') {
			$('#radius-activate').attr('checked', true);
			
			//set border-radius...			
			$('#button').css({'border-top-left-radius': borderTl + 'px',
								'border-top-right-radius': borderTr + 'px',
								'border-bottom-right-radius': borderBr + 'px',
								'border-bottom-left-radius': borderBl + 'px'});
		
		} else {
			
			$('#radius-activate').attr('checked', false);
			$('#button').css('border-radius', '0');
			
		}
		
		if(actShadowIn === '1' && actShadowOut === '1') {
			$('#shadow-in-activate').attr('checked', true);
			$('#shadow-out-activate').attr('checked', true);
			
			$('#shadow-in-controls').find('input:not(#shadow-in-activate)').removeAttr('disabled');
			$('#shadow-out-controls').find('input:not(#shadow-out-activate)').removeAttr('disabled');
			
			//set both shadows...
			$('#button').css('-webkit-box-shadow', 'rgba(' + outerR + ',' + outerG + ',' + outerB + ',' + parseInt(outerO)/100 + ') ' + outerX + 'px ' + outerY + 'px ' + outerBlur + 'px ' + outerSpread + 'px, inset rgba(' + innerR + ',' + innerG + ',' + innerB + ',' + parseInt(innerO)/100 + ') ' + innerX + 'px ' + innerY + 'px ' + innerBlur + 'px ' + innerSpread + 'px');
		
		} else if(actShadowIn === '1' && actShadowOut !== '1') {
			
			$('#shadow-in-activate').attr('checked', true);
			$('#shadow-out-activate').attr('checked', false);
			
			$('#shadow-in-controls').find('input:not(#shadow-in-activate)').removeAttr('disabled');
			$('#shadow-out-controls').find('input:not(#shadow-out-activate)').attr('disabled', 'disabled');
			
			//set inner shadows...
			$('#button').css('-webkit-box-shadow', ' inset rgba(' + innerR + ',' + innerG + ',' + innerB + ',' + parseInt(innerO)/100 + ') ' + innerX + 'px ' + innerY + 'px ' + innerBlur + 'px ' + innerSpread + 'px');
			
		} else if(actShadowIn !== '1' && actShadowOut === '1') {
			
			$('#shadow-in-activate').attr('checked', false);
			$('#shadow-out-activate').attr('checked', true);
			
			$('#shadow-in-controls').find('input:not(#shadow-in-activate)').attr('disabled', 'disabled');
			$('#shadow-out-controls').find('input:not(#shadow-out-activate)').removeAttr('disabled');
			
			//set outer shadows...
			$('#button').css('-webkit-box-shadow', 'rgba(' + outerR + ',' + outerG + ',' + outerB + ',' + parseInt(outerO)/100 + ') ' + outerX + 'px ' + outerY + 'px ' + outerBlur + 'px ' + outerSpread + 'px');
		
		} else {
			
			$('#shadow-in-activate').attr('checked', false);
			$('#shadow-out-activate').attr('checked', false);
						
			$('#shadow-in-controls').find('input:not(#shadow-in-activate)').attr('disabled', 'disabled');
			$('#shadow-out-controls').find('input:not(#shadow-out-activate)').attr('disabled', 'disabled');

			$('#button').css('-webkit-box-shadow','none');
			
		}
		
		
		if(actShadowText === '1') {
			
			$('#shadow-text-activate').attr('checked', true);
			
			$('#text-shadow-controls').find('input:not(#shadow-text-activate)').removeAttr('disabled');
			
			//text shadow...
			$('#button').css('text-shadow', 'rgba(' + shadowR + ',' + shadowG + ',' + shadowB + ',' + parseInt(shadowO)/100 + ') ' + shadowX + 'px ' + shadowY + 'px ' + shadowBlur + 'px');
		
		} else {
			
			$('#shadow-text-activate').attr('checked', false);
						
			$('#text-shadow-controls').find('input:not(#shadow-text-activate)').attr('disabled', 'disabled');

			$('#button').css('text-shadow', 'none');
			
		}
		
		//dimensions...
		$('#button-width, #button-width-val').val(localStorage.getItem('pre1'));
		$('#button-height, #button-height-val').val(localStorage.getItem('pre2'));
		
		//solid color...
		$('#solid-color-r').val(localStorage.getItem('pre63'));
		$('#solid-color-g').val(localStorage.getItem('pre64'));
		$('#solid-color-b').val(localStorage.getItem('pre65'));
		$('#solid-color-o').val(localStorage.getItem('pre66'));
		
		//gradient direction...
		$('input:radio[name=bg-direction]')[gradDir].checked = true;
		
		//border attributes...
		$('#button-border, #button-border-val').val(borderWidth);
		$('#border-color-r').val(borderR);
		$('#border-color-g').val(borderG);
		$('#border-color-b').val(borderB);
		$('#border-color-o').val(borderO);
		
		//border radius...
		if(localStorage.getItem('pre10') === '1') {
			
			$('#border-sync').attr('checked', true);
			
			if(actRadius === '1') {
				//border sync and active...
				
				$('#radius-top-right, #radius-bottom-right, #radius-bottom-left, #radius-top-right-val, #radius-bottom-right-val, #radius-bottom-left-val').attr('disabled', 'disabled');
				
			} else {
				//border sync and not active...
				$('#border-radius-controls').find('input:not(#radius-activate)').attr('disabled', 'disabled');
			}

		} else {
			
			$('#border-sync').attr('checked', false);
			
			if(actRadius === '1') {
				//no border sync and active...				
				$('#border-radius-controls').find('input:not(#radius-activate)').removeAttr('disabled');
				
			} else {
				//no border sync and not active...
				$('#border-radius-controls').find('input:not(#radius-activate)').attr('disabled','disabled');
			}
		}
		
		$('#radius-top-left, #radius-top-left-val').val(borderTl);
		$('#radius-top-right, #radius-top-right-val').val(borderTr);
		$('#radius-bottom-right, #radius-bottom-right-val').val(borderBr);
		$('#radius-bottom-left, #radius-bottom-left-val').val(borderBl);
		
		//box shadows...
		$('#shadow-in-x, #shadow-in-x-val').val(innerX);
		$('#shadow-in-y, #shadow-in-y-val').val(innerY);
		$('#shadow-in-blur, #shadow-in-blur-val').val(innerBlur);
		$('#shadow-in-spread, #shadow-in-spread-val').val(innerSpread);
		$('#shadow-in-r').val(innerR);
		$('#shadow-in-g').val(innerG);
		$('#shadow-in-b').val(innerB);
		$('#shadow-in-o').val(innerO);
		
		$('#shadow-out-x, #shadow-out-x-val').val(outerX);
		$('#shadow-out-y, #shadow-out-y-val').val(outerY);
		$('#shadow-out-blur, #shadow-out-blur-val').val(outerBlur);
		$('#shadow-out-spread, #shadow-out-spread-val').val(outerSpread);
		$('#shadow-out-r').val(outerR);
		$('#shadow-out-g').val(outerG);
		$('#shadow-out-b').val(outerB);
		$('#shadow-out-o').val(outerO);
		
		//text attributes...
		$('#text-font').val(fontFace);
		$('#text-style').val(fontStyle);
		$('#text-size, #text-size-val').val(fontSize);
		$('#text-r').val(fontR);
		$('#text-g').val(fontG);
		$('#text-b').val(fontB);
		$('#text-o').val(fontO);
		
		//text shadow...
		$('#shadow-text-x, #shadow-text-x-val').val(shadowX);
		$('#shadow-text-y, #shadow-text-y-val').val(shadowY);
		$('#shadow-text-blur, #shadow-text-blur-val').val(shadowBlur);
		$('#shadow-text-r').val(shadowR);
		$('#shadow-text-g').val(shadowG);
		$('#shadow-text-b').val(shadowB);
		$('#shadow-text-o').val(shadowO);
		
		//!apply rgb locks...
		if(localStorage.getItem('pre55') === '1') {
			$('#picker-1-green, #picker-1-blue, #border-color-g, #border-color-b').attr('disabled', 'disabled');	
		}
		
		if(localStorage.getItem('pre56') === '1') {
			$('#picker-2-green, #picker-2-blue, #shadow-in-g, #shadow-in-b').attr('disabled', 'disabled');
		}
		
		if(localStorage.getItem('pre57') === '1') {
			$('#picker-3-green, #picker-3-blue, #shadow-out-g, #shadow-out-b').attr('disabled', 'disabled');
		}
		
		if(localStorage.getItem('pre58') === '1') {
			$('#picker-4-green, #picker-4-blue, #text-g, #text-b').attr('disabled', 'disabled');
		}
		
		if(localStorage.getItem('pre59') === '1') {
			$('#picker-5-green, #picker-5-blue, #shadow-text-g, #shadow-text-b').attr('disabled', 'disabled');
		}
		
		if(localStorage.getItem('pre60') === '1') {
			$('#picker-6-green, #picker-6-blue, #preview-color-g, #preview-color-b').attr('disabled', 'disabled');
		}
		
		if(localStorage.getItem('pre61') === '1') {
			$('#picker-7-green, #picker-7-blue, #solid-color-g, #solid-color-b').attr('disabled', 'disabled');
		}
			
	}
	
	setPreview();


	var gradPoints = JSON.parse(localStorage.getItem('pre4'));

	//!gradient picker...
	$("#gradient-picker").gradientPicker({
		change: function(points, styles) {
			
			
			var pointsString = "";
				
				for(i = 0; i < points.length; ++i) {
					
					pointsString = pointsString + points[i]['color'] + ' ' + Math.floor((points[i]['position'])*100) + '%';
					
					if(i<(points.length)-1) {
						
						pointsString = pointsString + ', ';
						
					}
					
				}
				
			var pointsArr = pointsString.split(", ");
			
			localStorage.setItem('pre4', JSON.stringify(pointsArr));
			
			
			if(localStorage.getItem('pre62') === '1') {
				
				var gradientDirection = localStorage.getItem('pre3');
				
				if(gradientDirection === '0') {
					var gradientStart = '-webkit-linear-gradient(top ,';
				} else if (gradientDirection === '1') {
					var gradientStart = '-webkit-linear-gradient(left ,';
				} else if (gradientDirection === '2') {
					var gradientStart = '-webkit-linear-gradient(45deg ,';
				} else if (gradientDirection === '3') {
					var gradientStart = '-webkit-linear-gradient(-45deg ,';
				} else {
					var gradientStart = '-webkit-radial-gradient(';
				}
				
				$('#button').css("background-image", gradientStart + pointsString + ')');	
					
				//var pointsArr = pointsString.split(", ");	
										
				//localStorage.setItem('pre4', JSON.stringify(pointsArr));
			
			} else {
				
				$('#button').css('background-color', 'rgba(' + localStorage.getItem('pre63') + ',' + localStorage.getItem('pre64') + ',' + localStorage.getItem('pre65') + ',' + parseInt(localStorage.getItem('pre66'))/100 + ')');
				
			}
			
		},

		controlPoints: gradPoints
 
	});
	
	function set_swatches(the_id) {		
		var red = $(the_id + '-r').val();
		var green = $(the_id + '-g').val();
		var blue = $(the_id + '-b').val();
		var opacity = $(the_id + '-o').val();
		
		$(the_id).css('background-color', 'rgba(' + red + ',' + green + ',' + blue + ',' + parseInt(opacity)/100 + ')');		
	}
	
	//!set swatches...
	set_swatches('#border-color');
	set_swatches('#shadow-in');
	set_swatches('#shadow-out');
	set_swatches('#text');
	set_swatches('#shadow-text');
	set_swatches('#solid-color');
	$('#preview-color').css('background-color', 'rgba(' + localStorage.getItem('pre51') + ',' + localStorage.getItem('pre52') + ',' + localStorage.getItem('pre53') + ',' + parseInt(localStorage.getItem('pre54'))/100 + ')');
	
	//!border color picker...
	$('#border-color').click(function() {
		
		//get presets...
		var borderR = localStorage.getItem('pre6');
		var borderG = localStorage.getItem('pre7');
		var borderB = localStorage.getItem('pre8');
		var borderO = localStorage.getItem('pre9');
		
		//display picker...
		
		$('.picker-1').fadeIn('fast');
		
		//set lock...
		if(localStorage.getItem('pre55') === '1') {
			$('#rgb-lock-1').attr('checked', 'checked');
			//disable...
			$('#picker-1-green, #picker-1-blue, #border-color-g, #border-color-b').attr('disabled', 'disabled');
			
		} else {
			$('#rgb-lock-1').removeAttr('checked');
			//enable...
			$('#picker-1-green, #picker-1-blue, #border-color-g, #border-color-b').removeAttr('disabled');
			
		}
		
		//set picker values...
		$('#picker-1-red').val(borderR);
		$('#picker-1-green').val(borderG);
		$('#picker-1-blue').val(borderB);
		$('#picker-1-opacity').val(borderO);
		
		$('#picker-1-red, #picker-1-green, #picker-1-blue, #picker-1-opacity').change(function() {
			
			//if locked...
			if(localStorage.getItem('pre55') === '1') {
				$('#picker-1-green, #picker-1-blue').val($('#picker-1-red').val());
			} 
			
			$('#border-color-r').val($('#picker-1-red').val());
			$('#border-color-g').val($('#picker-1-green').val());
			$('#border-color-b').val($('#picker-1-blue').val());
			$('#border-color-o').val($('#picker-1-opacity').val());
			
			$('#border-color').css('background-color', 'rgba(' + $('#picker-1-red').val() + ',' + $('#picker-1-green').val() + ',' + $('#picker-1-blue').val() + ',' + $('#picker-1-opacity').val()/100 + ')');
			
			if(localStorage.getItem('pre46') === '1') {
				$('#button').css('border-color', 'rgba(' + $('#picker-1-red').val() + ',' + $('#picker-1-green').val() + ',' + $('#picker-1-blue').val() + ',' + $('#picker-1-opacity').val()/100 + ')');
			}
			
			localStorage.setItem('pre6', $('#picker-1-red').val());
			localStorage.setItem('pre7', $('#picker-1-green').val());
			localStorage.setItem('pre8', $('#picker-1-blue').val());
			localStorage.setItem('pre9', $('#picker-1-opacity').val());
			
		});
		
		//preset values...
		$('#preset-black-1, #preset-white-1, #preset-grey-1, #preset-transparent-1').click(function() {
			
			if($(this).attr('id') === 'preset-black-1') {
			
				var red = 0;
				var green = 0;
				var blue = 0;
				var opacity = 100;
			
			} else if($(this).attr('id') === 'preset-white-1') {
				
				var red = 255;
				var green = 255;
				var blue = 255;
				var opacity = 100;
				
			} else if($(this).attr('id') === 'preset-grey-1') {
				
				var red = 128;
				var green = 128;
				var blue = 128;
				var opacity = 100;
			
			} else {
				
				var red = 255;
				var green = 255;
				var blue = 255;
				var opacity = 0;
				
			}
			
			$('#border-color').css('background-color', 'rgba(' + red + ',' + green + ',' + blue + ',' + opacity/100 + ')');
			
			$('#button').css('border-color', 'rgba(' + red + ',' + green + ',' + blue + ',' + opacity/100 + ')');
			
			$('#picker-1-red, #border-color-r').val(red);
			$('#picker-1-green, #border-color-g').val(green);
			$('#picker-1-blue, #border-color-b').val(blue);
			$('#picker-1-opacity, #border-color-o').val(opacity);
			
			localStorage.setItem('pre6', red);
			localStorage.setItem('pre7', green);
			localStorage.setItem('pre8', blue);
			localStorage.setItem('pre9', opacity);
			
		});
		
		$(document).mouseup(function (e) {
			var container = $(".picker-1");
	
			if (container.has(e.target).length === 0) {
				container.fadeOut('fast');
			}
		});
		
	});
	
	//!shadow-in color picker...
	$('#shadow-in').click(function() {
		
		//get presets...
		var innerX = localStorage.getItem('pre15');
		var innerY = localStorage.getItem('pre16');
		var innerBlur = localStorage.getItem('pre17');
		var innerSpread = localStorage.getItem('pre18');
		var innerR = localStorage.getItem('pre19');
		var innerG = localStorage.getItem('pre20');
		var innerB = localStorage.getItem('pre21');
		var innerO = localStorage.getItem('pre22');
		
		var outerX = localStorage.getItem('pre23');
		var outerY = localStorage.getItem('pre24');
		var outerBlur = localStorage.getItem('pre25');
		var outerSpread = localStorage.getItem('pre26');
		var outerR = localStorage.getItem('pre27');
		var outerG = localStorage.getItem('pre28');
		var outerB = localStorage.getItem('pre29');
		var outerO = localStorage.getItem('pre30');
		
		// display picker...
		
		$('.picker-2').fadeIn('fast');
		
		//set lock...
		if(localStorage.getItem('pre56') === '1') {
			$('#rgb-lock-2').attr('checked', 'checked');
			
			//disable...
			$('#picker-2-green, #picker-2-blue, #shadow-in-g, #shadow-in-b').attr('disabled', 'disabled');
			
		} else {
			$('#rgb-lock-2').removeAttr('checked');
			
			//enable...
			$('#picker-2-green, #picker-2-blue, #shadow-in-g, #shadow-in-b').removeAttr('disabled');
			
		}
		
		//set picker values...
		$('#picker-2-red').val(innerR);
		$('#picker-2-green').val(innerG);
		$('#picker-2-blue').val(innerB);
		$('#picker-2-opacity').val(innerO);
		
		$('#picker-2-red, #picker-2-green, #picker-2-blue, #picker-2-opacity').change(function() {
			
			//if locked...
			if(localStorage.getItem('pre56') === '1') {
				$('#picker-2-green, #picker-2-blue').val($('#picker-2-red').val());
			}
			
			$('#shadow-in-r').val($('#picker-2-red').val());
			$('#shadow-in-g').val($('#picker-2-green').val());
			$('#shadow-in-b').val($('#picker-2-blue').val());
			$('#shadow-in-o').val($('#picker-2-opacity').val());
			
			$('#shadow-in').css('background-color', 'rgba(' + $('#picker-2-red').val() + ',' + $('#picker-2-green').val() + ',' + $('#picker-2-blue').val() + ',' + $('#picker-2-opacity').val()/100 + ')');
			
			if(localStorage.getItem('pre48') === '1' && localStorage.getItem('pre49') === '1') {
			
				//BOTH...
				$('#button').css('-webkit-box-shadow', 'rgba(' + outerR + ',' + outerG + ',' + outerB + ',' + parseInt(outerO)/100 + ') ' + outerX + 'px ' + outerY + 'px ' + outerBlur + 'px ' + outerSpread + 'px, inset rgba(' + $('#picker-2-red').val() + ',' + $('#picker-2-green').val() + ',' + $('#picker-2-blue').val() + ',' + parseInt($('#picker-2-opacity').val())/100 + ') ' + innerX + 'px ' + innerY + 'px ' + innerBlur + 'px ' + innerSpread + 'px');
			
			} else if(localStorage.getItem('pre48') === '1' && localStorage.getItem('pre49') !== '1') {
			
				//IN ONLY...
				$('#button').css('-webkit-box-shadow', 'inset rgba(' + $('#picker-2-red').val() + ',' + $('#picker-2-green').val() + ',' + $('#picker-2-blue').val() + ',' + parseInt($('#picker-2-opacity').val())/100 + ') ' + innerX + 'px ' + innerY + 'px ' + innerBlur + 'px ' + innerSpread + 'px');
			
			} else if(localStorage.getItem('pre48') !== '1' && localStorage.getItem('pre49') === '1') {
			
				//OUT
				$('#button').css('-webkit-box-shadow', 'rgba(' + outerR + ',' + outerG + ',' + outerB + ',' + parseInt(outerO)/100 + ') ' + outerX + 'px ' + outerY + 'px ' + outerBlur + 'px ' + outerSpread + 'px'); 
			
			} else {
				
				$('#button').css('-webkit-box-shadow', 'none');
				
			}
			
			localStorage.setItem('pre19', $('#picker-2-red').val());
			localStorage.setItem('pre20', $('#picker-2-green').val());
			localStorage.setItem('pre21', $('#picker-2-blue').val());
			localStorage.setItem('pre22', $('#picker-2-opacity').val());
			
		});
		
		//preset values...
		$('#preset-black-2, #preset-white-2, #preset-grey-2, #preset-transparent-2').click(function() {
			
			if($(this).attr('id') === 'preset-black-2') {
			
				var red = 0;
				var green = 0;
				var blue = 0;
				var opacity = 100;
			
			} else if($(this).attr('id') === 'preset-white-2') {
				
				var red = 255;
				var green = 255;
				var blue = 255;
				var opacity = 100;
				
			} else if($(this).attr('id') === 'preset-grey-2') {
				
				var red = 128;
				var green = 128;
				var blue = 128;
				var opacity = 100;
			
			} else {
				
				var red = 255;
				var green = 255;
				var blue = 255;
				var opacity = 0;
				
			}
			
			$('#shadow-in').css('background-color', 'rgba(' + red + ',' + green + ',' + blue + ',' + opacity/100 + ')');
			
			//set preview...
			if(localStorage.getItem('pre48') === '1' && localStorage.getItem('pre49') === '1') {
			
				//BOTH...
				$('#button').css('-webkit-box-shadow', 'rgba(' + outerR + ',' + outerG + ',' + outerB + ',' + parseInt(outerO)/100 + ') ' + outerX + 'px ' + outerY + 'px ' + outerBlur + 'px ' + outerSpread + 'px, inset rgba(' + red + ',' + green + ',' + blue + ',' + opacity/100 + ') ' + innerX + 'px ' + innerY + 'px ' + innerBlur + 'px ' + innerSpread + 'px');
			
			} else if(localStorage.getItem('pre48') === '1' && localStorage.getItem('pre49') !== '1') {
			
				//IN ONLY...
				$('#button').css('-webkit-box-shadow', 'inset rgba(' + red + ',' + green + ',' + blue + ',' + opacity/100 + ') ' + innerX + 'px ' + innerY + 'px ' + innerBlur + 'px ' + innerSpread + 'px');
			
			} else if(localStorage.getItem('pre48') !== '1' && localStorage.getItem('pre49') === '1') {
			
				//OUT
				$('#button').css('-webkit-box-shadow', 'rgba(' + outerR + ',' + outerG + ',' + outerB + ',' + parseInt(outerO)/100 + ') ' + outerX + 'px ' + outerY + 'px ' + outerBlur + 'px ' + outerSpread + 'px'); 
			
			} else {
				
				$('#button').css('-webkit-box-shadow', 'none');
				
			}
			
			$('#picker-2-red, #shadow-in-r').val(red);
			$('#picker-2-green, #shadow-in-g').val(green);
			$('#picker-2-blue, #shadow-in-b').val(blue);
			$('#picker-2-opacity, #shadow-in-o').val(opacity);
			
			localStorage.setItem('pre19', red);
			localStorage.setItem('pre20', green);
			localStorage.setItem('pre21', blue);
			localStorage.setItem('pre22', opacity);
			
		});
		
		$(document).mouseup(function (e) {
			var container = $(".picker-2");
	
			if (container.has(e.target).length === 0) {
				container.fadeOut('fast');
			}
		});
		
	});
	
	//!shadow-out color picker...
	$('#shadow-out').click(function() {
		
		//get presets...
		var innerX = localStorage.getItem('pre15');
		var innerY = localStorage.getItem('pre16');
		var innerBlur = localStorage.getItem('pre17');
		var innerSpread = localStorage.getItem('pre18');
		var innerR = localStorage.getItem('pre19');
		var innerG = localStorage.getItem('pre20');
		var innerB = localStorage.getItem('pre21');
		var innerO = localStorage.getItem('pre22');
		
		var outerX = localStorage.getItem('pre23');
		var outerY = localStorage.getItem('pre24');
		var outerBlur = localStorage.getItem('pre25');
		var outerSpread = localStorage.getItem('pre26');
		var outerR = localStorage.getItem('pre27');
		var outerG = localStorage.getItem('pre28');
		var outerB = localStorage.getItem('pre29');
		var outerO = localStorage.getItem('pre30');
		
		// display picker...
		
		$('.picker-3').fadeIn('fast');
		
		//set lock...
		if(localStorage.getItem('pre57') === '1') {
			$('#rgb-lock-3').attr('checked', 'checked');
			
			//disable...
			$('#picker-3-green, #picker-3-blue, #shadow-out-g, #shadow-out-b').attr('disabled', 'disabled');
			
		} else {
			$('#rgb-lock-3').removeAttr('checked');
			
			//enable...
			$('#picker-3-green, #picker-3-blue, #shadow-out-g, #shadow-out-b').removeAttr('disabled');
			
		}
		
		//set picker values...
		$('#picker-3-red').val(outerR);
		$('#picker-3-green').val(outerG);
		$('#picker-3-blue').val(outerB);
		$('#picker-3-opacity').val(outerO);
		
		$('#picker-3-red, #picker-3-green, #picker-3-blue, #picker-3-opacity').change(function() {
			
			//if locked...
			if(localStorage.getItem('pre57') === '1') {
				$('#picker-3-green, #picker-3-blue').val($('#picker-3-red').val());
			}
			
			$('#shadow-out-r').val($('#picker-3-red').val());
			$('#shadow-out-g').val($('#picker-3-green').val());
			$('#shadow-out-b').val($('#picker-3-blue').val());
			$('#shadow-out-o').val($('#picker-3-opacity').val());
			
			$('#shadow-out').css('background-color', 'rgba(' + $('#picker-3-red').val() + ',' + $('#picker-3-green').val() + ',' + $('#picker-3-blue').val() + ',' + $('#picker-3-opacity').val()/100 + ')');
			
			if(localStorage.getItem('pre48') === '1' && localStorage.getItem('pre49') === '1') {
			
				//BOTH...
				$('#button').css('-webkit-box-shadow', 'rgba(' + $('#picker-3-red').val() + ',' + $('#picker-3-green').val() + ',' + $('#picker-3-blue').val() + ',' + parseInt($('#picker-3-opacity').val())/100 + ') ' + outerX + 'px ' + outerY + 'px ' + outerBlur + 'px ' + outerSpread + 'px, inset rgba(' + innerR + ',' + innerG + ',' + innerB + ',' + parseInt(innerO)/100 + ') ' + innerX + 'px ' + innerY + 'px ' + innerBlur + 'px ' + innerSpread + 'px');

			
			} else if(localStorage.getItem('pre48') === '1' && localStorage.getItem('pre49') !== '1') {
			
				//IN ONLY...
				$('#button').css('-webkit-box-shadow', 'inset rgba(' + innerR + ',' + innerG + ',' + innerB + ',' + parseInt(innerO)/100 + ') ' + innerX + 'px ' + innerY + 'px ' + innerBlur + 'px ' + innerSpread + 'px');

			
			} else if(localStorage.getItem('pre48') !== '1' && localStorage.getItem('pre49') === '1') {
			
				//OUT
				$('#button').css('-webkit-box-shadow', 'rgba(' + $('#picker-3-red').val() + ',' + $('#picker-3-green').val() + ',' + $('#picker-3-blue').val() + ',' + parseInt($('#picker-3-opacity').val())/100 + ') ' + outerX + 'px ' + outerY + 'px ' + outerBlur + 'px ' + outerSpread + 'px');

			
			} else {
				
				$('#button').css('-webkit-box-shadow', 'none');
				
			}
			
			localStorage.setItem('pre27', $('#picker-3-red').val());
			localStorage.setItem('pre28', $('#picker-3-green').val());
			localStorage.setItem('pre29', $('#picker-3-blue').val());
			localStorage.setItem('pre30', $('#picker-3-opacity').val());
			
		});
		
		//preset values...
		$('#preset-black-3, #preset-white-3, #preset-grey-3, #preset-transparent-3').click(function() {
			
			if($(this).attr('id') === 'preset-black-3') {
			
				var red = 0;
				var green = 0;
				var blue = 0;
				var opacity = 100;
			
			} else if($(this).attr('id') === 'preset-white-3') {
				
				var red = 255;
				var green = 255;
				var blue = 255;
				var opacity = 100;
				
			} else if($(this).attr('id') === 'preset-grey-3') {
				
				var red = 128;
				var green = 128;
				var blue = 128;
				var opacity = 100;
			
			} else {
				
				var red = 255;
				var green = 255;
				var blue = 255;
				var opacity = 0;
				
			}
			
			$('#shadow-out').css('background-color', 'rgba(' + red + ',' + green + ',' + blue + ',' + opacity/100 + ')');
			
			//set preview...
			if(localStorage.getItem('pre48') === '1' && localStorage.getItem('pre49') === '1') {
			
				//BOTH...
				$('#button').css('-webkit-box-shadow', 'rgba(' + red + ',' + green + ',' + blue + ',' + opacity/100 + ') ' + outerX + 'px ' + outerY + 'px ' + outerBlur + 'px ' + outerSpread + 'px, inset rgba(' + innerR + ',' + innerG + ',' + innerB + ',' + parseInt(innerO)/100 + ') ' + innerX + 'px ' + innerY + 'px ' + innerBlur + 'px ' + innerSpread + 'px');

			
			} else if(localStorage.getItem('pre48') === '1' && localStorage.getItem('pre49') !== '1') {
			
				//IN ONLY...
				$('#button').css('-webkit-box-shadow', 'inset rgba(' + innerR + ',' + innerG + ',' + innerB + ',' + parseInt(innerO)/100 + ') ' + innerX + 'px ' + innerY + 'px ' + innerBlur + 'px ' + innerSpread + 'px');

			
			} else if(localStorage.getItem('pre48') !== '1' && localStorage.getItem('pre49') === '1') {
			
				//OUT
				$('#button').css('-webkit-box-shadow', 'rgba(' + red + ',' + green + ',' + blue + ',' + opacity/100 + ') ' + outerX + 'px ' + outerY + 'px ' + outerBlur + 'px ' + outerSpread + 'px');

			
			} else {
				
				$('#button').css('-webkit-box-shadow', 'none');
				
			}
			
			$('#picker-3-red, #shadow-out-r').val(red);
			$('#picker-3-green, #shadow-out-g').val(green);
			$('#picker-3-blue, #shadow-out-b').val(blue);
			$('#picker-3-opacity, #shadow-out-o').val(opacity);
			
			localStorage.setItem('pre27', red);
			localStorage.setItem('pre28', green);
			localStorage.setItem('pre29', blue);
			localStorage.setItem('pre30', opacity);
			
		});
		
		$(document).mouseup(function (e) {
			var container = $(".picker-3");
	
			if (container.has(e.target).length === 0) {
				container.fadeOut('fast');
			}
		});
		
	});
	
	//!text color picker...
	$('#text').click(function() {
		
		//get presets...
		var fontR = localStorage.getItem('pre34');
		var fontG = localStorage.getItem('pre35');
		var fontB = localStorage.getItem('pre36');
		var fontO = localStorage.getItem('pre37');
		
		// display picker...
		
		$('.picker-4').fadeIn('fast');
		
		//set lock...
		if(localStorage.getItem('pre58') === '1') {
			$('#rgb-lock-4').attr('checked', 'checked');
			
			//disable...
			$('#picker-4-green, #picker-4-blue, #text-g, #text-b').attr('disabled', 'disabled');
			
		} else {
			$('#rgb-lock-4').removeAttr('checked');
			
			//enable...
			$('#picker-4-green, #picker-4-blue, #text-g, #text-b').removeAttr('disabled');
			
		}
		
		//set picker values...
		$('#picker-4-red').val(fontR);
		$('#picker-4-green').val(fontG);
		$('#picker-4-blue').val(fontB);
		$('#picker-4-opacity').val(fontO);
		
		$('#picker-4-red, #picker-4-green, #picker-4-blue, #picker-4-opacity').change(function() {
			
			//if locked...
			if(localStorage.getItem('pre58') === '1') {
				$('#picker-4-green, #picker-4-blue').val($('#picker-4-red').val());
			}
			
			$('#text-r').val($('#picker-4-red').val());
			$('#text-g').val($('#picker-4-green').val());
			$('#text-b').val($('#picker-4-blue').val());
			$('#text-o').val($('#picker-4-opacity').val());
			
			$('#text').css('background-color', 'rgba(' + $('#picker-4-red').val() + ',' + $('#picker-4-green').val() + ',' + $('#picker-4-blue').val() + ',' + $('#picker-4-opacity').val()/100 + ')');
			
			$('#button').css('color', 'rgba(' + $('#picker-4-red').val() + ',' + $('#picker-4-green').val() + ',' + $('#picker-4-blue').val() + ',' + $('#picker-4-opacity').val()/100 + ')');
			
			localStorage.setItem('pre34', $('#picker-4-red').val());
			localStorage.setItem('pre35', $('#picker-4-green').val());
			localStorage.setItem('pre36', $('#picker-4-blue').val());
			localStorage.setItem('pre37', $('#picker-4-opacity').val());
			
		});
		
		//preset values...
		$('#preset-black-4, #preset-white-4, #preset-grey-4, #preset-transparent-4').click(function() {
			
			if($(this).attr('id') === 'preset-black-4') {
			
				var red = 0;
				var green = 0;
				var blue = 0;
				var opacity = 100;
			
			} else if($(this).attr('id') === 'preset-white-4') {
				
				var red = 255;
				var green = 255;
				var blue = 255;
				var opacity = 100;
				
			} else if($(this).attr('id') === 'preset-grey-4') {
				
				var red = 128;
				var green = 128;
				var blue = 128;
				var opacity = 100;
			
			} else {
				
				var red = 255;
				var green = 255;
				var blue = 255;
				var opacity = 0;
				
			}
			
			$('#text').css('background-color', 'rgba(' + red + ',' + green + ',' + blue + ',' + opacity/100 + ')');
			$('#button').css('color', 'rgba(' + red + ',' + green + ',' + blue + ',' + opacity/100 + ')');
			
			$('#picker-4-red, #text-r').val(red);
			$('#picker-4-green, #text-g').val(green);
			$('#picker-4-blue, #text-b').val(blue);
			$('#picker-4-opacity, #text-o').val(opacity);
			
			localStorage.setItem('pre34', red);
			localStorage.setItem('pre35', green);
			localStorage.setItem('pre36', blue);
			localStorage.setItem('pre37', opacity);
			
		});
		
		$(document).mouseup(function (e) {
			var container = $(".picker-4");
	
			if (container.has(e.target).length === 0) {
				container.fadeOut('fast');
			}
		});
		
	});
	
	//!text-shadow color picker...
	$('#shadow-text').click(function() {
		
		//get presets...
		var shadowX = localStorage.getItem('pre38');
		var shadowY = localStorage.getItem('pre39');
		var shadowBlur = localStorage.getItem('pre40');
		var shadowR = localStorage.getItem('pre41');
		var shadowG = localStorage.getItem('pre42');
		var shadowB = localStorage.getItem('pre43');
		var shadowO = localStorage.getItem('pre44');
		
		// display picker...
		
		$('.picker-5').fadeIn('fast');
		
		//set lock...
		if(localStorage.getItem('pre59') === '1') {
			$('#rgb-lock-5').attr('checked', 'checked');
			
			//disable...
			$('#picker-5-green, #picker-5-blue, #shadow-text-g, #shadow-text-b').attr('disabled', 'disabled');
			
		} else {
			$('#rgb-lock-5').removeAttr('checked');
			
			//enable...
			$('#picker-5-green, #picker-5-blue, #shadow-text-g, #shadow-text-b').removeAttr('disabled');
			
		}
		
		//set picker values...
		$('#picker-5-red').val(shadowR);
		$('#picker-5-green').val(shadowG);
		$('#picker-5-blue').val(shadowB);
		$('#picker-5-opacity').val(shadowO);
		
		$('#picker-5-red, #picker-5-green, #picker-5-blue, #picker-5-opacity').change(function() {
			
			//if locked...
			if(localStorage.getItem('pre59') === '1') {
				$('#picker-5-green, #picker-5-blue').val($('#picker-5-red').val());
			}
			
			$('#shadow-text-r').val($('#picker-5-red').val());
			$('#shadow-text-g').val($('#picker-5-green').val());
			$('#shadow-text-b').val($('#picker-5-blue').val());
			$('#shadow-text-o').val($('#picker-5-opacity').val());
			
			$('#shadow-text').css('background-color', 'rgba(' + $('#picker-5-red').val() + ',' + $('#picker-5-green').val() + ',' + $('#picker-5-blue').val() + ',' + $('#picker-5-opacity').val()/100 + ')');
			
			if(localStorage.getItem('pre50') === '1') {
				$('#button').css('text-shadow', 'rgba(' + $('#picker-5-red').val() + ',' + $('#picker-5-green').val() + ',' + $('#picker-5-blue').val() + ',' + parseInt($('#picker-5-opacity').val())/100 + ') ' + shadowX + 'px ' + shadowY + 'px ' + shadowBlur + 'px');
			}
			
			localStorage.setItem('pre41', $('#picker-5-red').val());
			localStorage.setItem('pre42', $('#picker-5-green').val());
			localStorage.setItem('pre43', $('#picker-5-blue').val());
			localStorage.setItem('pre44', $('#picker-5-opacity').val());
			
		});
		
		//preset values...
		$('#preset-black-5, #preset-white-5, #preset-grey-5, #preset-transparent-5').click(function() {
			
			if($(this).attr('id') === 'preset-black-5') {
			
				var red = 0;
				var green = 0;
				var blue = 0;
				var opacity = 100;
			
			} else if($(this).attr('id') === 'preset-white-5') {
				
				var red = 255;
				var green = 255;
				var blue = 255;
				var opacity = 100;
				
			} else if($(this).attr('id') === 'preset-grey-5') {
				
				var red = 128;
				var green = 128;
				var blue = 128;
				var opacity = 100;
			
			} else {
				
				var red = 255;
				var green = 255;
				var blue = 255;
				var opacity = 0;
				
			}
			
			$('#shadow-text').css('background-color', 'rgba(' + $('#picker-5-red').val() + ',' + $('#picker-5-green').val() + ',' + $('#picker-5-blue').val() + ',' + $('#picker-5-opacity').val()/100 + ')');
			
			$('#button').css('text-shadow', 'rgba(' + red + ',' + green + ',' + blue + ',' + opacity/100 + ') ' + shadowX + 'px ' + shadowY + 'px ' + shadowBlur + 'px');
			
			$('#picker-5-red, #shadow-text-r').val(red);
			$('#picker-5-green, #shadow-text-g').val(green);
			$('#picker-5-blue, #shadow-text-b').val(blue);
			$('#picker-5-opacity, #shadow-text-o').val(opacity);
			
			localStorage.setItem('pre41', red);
			localStorage.setItem('pre42', green);
			localStorage.setItem('pre43', blue);
			localStorage.setItem('pre44', opacity);
			
		});
		
		$(document).mouseup(function (e) {
			var container = $(".picker-5");
	
			if (container.has(e.target).length === 0) {
				container.fadeOut('fast');
			}
		});
		
	});
	
	//!preview color picker...
	$('#preview-color').click(function() {
		
		//get presets...
		var previewR = localStorage.getItem('pre51');
		var previewG = localStorage.getItem('pre52');
		var previewB = localStorage.getItem('pre53');
		var previewO = localStorage.getItem('pre54');
		
		// display picker...
		
		$('.picker-6').fadeIn('fast');
		
		//set lock...
		if(localStorage.getItem('pre60') === '1') {
			$('#rgb-lock-6').attr('checked', 'checked');
			
			//disable...
			$('#picker-6-green, #picker-6-blue, #preview-color-g, #preview-color-b').attr('disabled', 'disabled');
			
		} else {
			$('#rgb-lock-6').removeAttr('checked');
			
			//enable...
			$('#picker-6-green, #picker-6-blue, #preview-color-g, #preview-color-b').removeAttr('disabled');
			
		}
		
		//set picker values...
		$('#picker-6-red, #preview-color-r').val(previewR);
		$('#picker-6-green, #preview-color-g').val(previewG);
		$('#picker-6-blue, #preview-color-b').val(previewB);
		$('#picker-6-opacity, #preview-color-o').val(previewO);
		
		$('#picker-6-red, #picker-6-green, #picker-6-blue, #picker-6-opacity').change(function() {
			
			//if locked...
			if(localStorage.getItem('pre60') === '1') {
				$('#picker-6-green, #picker-6-blue').val($('#picker-6-red').val());
			}
			
			$('#preview-color, #preview').css('background-color', 'rgba(' + $('#picker-6-red').val() + ',' + $('#picker-6-green').val() + ',' + $('#picker-6-blue').val() + ',' + $('#picker-6-opacity').val()/100 + ')');
			
			$('#preview-color-r').val($('#picker-6-red').val());
			$('#preview-color-g').val($('#picker-6-green').val());
			$('#preview-color-b').val($('#picker-6-blue').val());
			$('#preview-color-o').val($('#picker-6-opacity').val());
			
			localStorage.setItem('pre51', $('#picker-6-red').val());
			localStorage.setItem('pre52', $('#picker-6-green').val());
			localStorage.setItem('pre53', $('#picker-6-blue').val());
			localStorage.setItem('pre54', $('#picker-6-opacity').val());
			
		});
		
		$('#preview-color-r, #preview-color-g, #preview-color-b, #preview-color-o').change(function() {
			
			var valR = Math.round($('#preview-color-r').val());
			
			if(localStorage.getItem('pre60') === '0') {
			
				var valG = Math.round($('#preview-color-g').val());
				var valB = Math.round($('#preview-color-b').val());
			
			} else {
				
				var valG = Math.round($('#preview-color-r').val());
				var valB = Math.round($('#preview-color-r').val());
				
			}
			
			var valO = Math.round($('#preview-color-o').val());
			
			if(valR > 255) { valR = 255; $('#preview-color-r').val(valR); }
			if(valG > 255) { valG = 255; $('#preview-color-g').val(valG); }
			if(valB > 255) { valB = 255; $('#preview-color-b').val(valB); }
			if(valO > 100) { valO = 100; $('#preview-color-o').val(valO); }
			
			if(valR < 0) { valR = 0; $('#preview-color-r').val(valR); }
			if(valG < 0) { valG = 0; $('#preview-color-g').val(valG); }
			if(valB < 0) { valB = 0; $('#preview-color-b').val(valB); }
			if(valO < 0) { valO = 0; $('#preview-color-o').val(valO); }
			
			
			$('#preview-color, #preview').css('background-color', 'rgba(' + valR + ',' + valG + ',' + valB + ',' + valO/100 + ')');
		
			$('#picker-6-red, #preview-color-r').val(valR);
			$('#picker-6-green, #preview-color-g').val(valG);
			$('#picker-6-blue, #preview-color-b').val(valB);
			$('#picker-6-opacity, #preview-color-o').val(valO);
			
			localStorage.setItem('pre51', valR);
			localStorage.setItem('pre52', valG);
			localStorage.setItem('pre53', valB);
			localStorage.setItem('pre54', valO);
		
		});
		
		//preset values...
		$('#preset-black, #preset-white, #preset-grey, #preset-transparent').click(function() {
			
			if($(this).attr('id') === 'preset-black') {
			
				var red = 0;
				var green = 0;
				var blue = 0;
				var opacity = 100;
			
			} else if($(this).attr('id') === 'preset-white') {
				
				var red = 255;
				var green = 255;
				var blue = 255;
				var opacity = 100;
				
			} else if($(this).attr('id') === 'preset-grey') {
				
				var red = 128;
				var green = 128;
				var blue = 128;
				var opacity = 100;
			
			} else {
				
				var red = 255;
				var green = 255;
				var blue = 255;
				var opacity = 0;
				
			}
			
			$('#preview-color, #preview').css('background-color', 'rgba(' + red + ',' + green + ',' + blue + ',' + opacity/100 + ')');
			
			$('#picker-6-red, #preview-color-r').val(red);
			$('#picker-6-green, #preview-color-g').val(green);
			$('#picker-6-blue, #preview-color-b').val(blue);
			$('#picker-6-opacity, #preview-color-o').val(opacity);
			
			localStorage.setItem('pre51', red);
			localStorage.setItem('pre52', green);
			localStorage.setItem('pre53', blue);
			localStorage.setItem('pre54', opacity);
			
		});
		
		$(document).mouseup(function (e) {
			var container = $(".picker-6");
	
			if (container.has(e.target).length === 0) {
				container.fadeOut('fast');
			}
		});
		
	});
	
	
	//!solid color picker...
	$('#solid-color').click(function() {
		
		//get presets...
		var solidR = localStorage.getItem('pre63');
		var solidG = localStorage.getItem('pre64');
		var solidB = localStorage.getItem('pre65');
		var solidO = localStorage.getItem('pre66');
		
		// display picker...
		
		$('.picker-7').fadeIn('fast');
		
		//set lock...
		if(localStorage.getItem('pre61') === '1') {
			$('#rgb-lock-7').attr('checked', 'checked');
			
			//disable...
			$('#picker-7-green, #picker-7-blue, #solid-color-g, #solid-color-b').attr('disabled', 'disabled');
			
		} else {
			$('#rgb-lock-7').removeAttr('checked');
			
			//enable...
			$('#picker-7-green, #picker-7-blue, #solid-color-g, #solid-color-b').removeAttr('disabled');
			
		}
		
		//set picker values...
		$('#picker-7-red').val(solidR);
		$('#picker-7-green').val(solidG);
		$('#picker-7-blue').val(solidB);
		$('#picker-7-opacity').val(solidO);
		
		$('#picker-7-red, #picker-7-green, #picker-7-blue, #picker-7-opacity').change(function() {
			
			//if locked...
			if(localStorage.getItem('pre61') === '1') {
				$('#picker-7-green, #picker-7-blue').val($('#picker-7-red').val());
			}
			
			$('#solid-color-r').val($('#picker-7-red').val());
			$('#solid-color-g').val($('#picker-7-green').val());
			$('#solid-color-b').val($('#picker-7-blue').val());
			$('#solid-color-o').val($('#picker-7-opacity').val());
			
			$('#solid-color').css('background-color', 'rgba(' + $('#picker-7-red').val() + ',' + $('#picker-7-green').val() + ',' + $('#picker-7-blue').val() + ',' + $('#picker-7-opacity').val()/100 + ')');
			
			if(localStorage.getItem('pre62') === '0') {
				$('#button').css('background-color', 'rgba(' + $('#picker-7-red').val() + ',' + $('#picker-7-green').val() + ',' + $('#picker-7-blue').val() + ',' + parseInt($('#picker-7-opacity').val())/100 + ')');
			}
			
			localStorage.setItem('pre63', $('#picker-7-red').val());
			localStorage.setItem('pre64', $('#picker-7-green').val());
			localStorage.setItem('pre65', $('#picker-7-blue').val());
			localStorage.setItem('pre66', $('#picker-7-opacity').val());
			
		});
		
		//preset values...
		$('#preset-black-7, #preset-white-7, #preset-grey-7, #preset-transparent-7').click(function() {
			
			if($(this).attr('id') === 'preset-black-7') {
			
				var red = 0;
				var green = 0;
				var blue = 0;
				var opacity = 100;
			
			} else if($(this).attr('id') === 'preset-white-7') {
				
				var red = 255;
				var green = 255;
				var blue = 255;
				var opacity = 100;
				
			} else if($(this).attr('id') === 'preset-grey-7') {
				
				var red = 128;
				var green = 128;
				var blue = 128;
				var opacity = 100;
			
			} else {
				
				var red = 255;
				var green = 255;
				var blue = 255;
				var opacity = 0;
				
			}
			
			$('#solid-color').css('background-color', 'rgba(' + $('#picker-7-red').val() + ',' + $('#picker-7-green').val() + ',' + $('#picker-7-blue').val() + ',' + parseInt($('#picker-7-opacity').val())/100 + ')');
			
			$('#button').css('background-color', 'rgba(' + red + ',' + green + ',' + blue + ',' + opacity/100 + ')');
			
			$('#picker-7-red, #solid-color-r').val(red);
			$('#picker-7-green, #solid-color-g').val(green);
			$('#picker-7-blue, #solid-color-b').val(blue);
			$('#picker-7-opacity, #solid-color-o').val(opacity);
			
			localStorage.setItem('pre63', red);
			localStorage.setItem('pre64', green);
			localStorage.setItem('pre65', blue);
			localStorage.setItem('pre66', opacity);
			
		});
		
		$(document).mouseup(function (e) {
			var container = $(".picker-7");
	
			if (container.has(e.target).length === 0) {
				container.fadeOut('fast');
			}
		});
		
	});
	

	//!update contenteditable...
	var contents = $('#button-text').html();
	
	$("#button-text").keypress(function(e){ return e.which != 13; });
	
	$('#button-text').keyup(function() {
		if (contents != $(this).html()) {
			contents = $(this).html();

			localStorage.setItem('pre45', contents);
		}
	});
	
	//!update dimensions...	
	$('#button-width').change(function() {
		var the_value = $(this).val();
		$('#button').css('width', the_value + 'px');
		$('#button-width-val').val(the_value);
		localStorage.setItem('pre1', the_value);
	});
	
	$('#button-width-val').change(function() {
		var the_value = $(this).val();
		the_value = Math.round(the_value);
		if(the_value>520) {
			the_value = 520;
			$('#button-width-val').val(the_value);
		}
		if(the_value<1) {
			the_value = 1;
			$('#button-width-val').val(the_value);
		}
		$('#button').css('width', the_value + 'px');
		$('#button-width, #button-width-val').val(the_value);
		localStorage.setItem('pre1', the_value);
	});
	
	$('#button-height').change(function() {
		var the_value = $(this).val();
		$('#button').css('line-height', the_value + 'px');
		$('#button-height-val').val(the_value);
		localStorage.setItem('pre2', the_value);
	});
	
	$('#button-height-val').change(function() {
		var the_value = $(this).val();
		the_value = Math.round(the_value);
		if(the_value>150) {
			the_value = 150;
			$('#button-height-val').val(the_value);
		}
		if(the_value<1) {
			the_value = 1;
			$('#button-height-val').val(the_value);
		}
		$('#button').css('line-height', the_value + 'px');
		$('#button-height, #button-height-val').val(the_value);
		localStorage.setItem('pre2', the_value);
	});
	
	//!update gradient...
	$('input:radio[name=bg-direction]').change(function() {
		
		var gradDirection = $(this).val();
		var gradPoints = JSON.parse(localStorage.getItem('pre4'));
		var pointsString = gradPoints.join();
		
		var gradType = '-webkit-linear-gradient';
		
		if(gradDirection === '0') {
			var direction = 'top ,';
		} else if (gradDirection === '1') {
			var direction = 'left ,';
		} else if (gradDirection === '2') {
			var direction = '45deg ,';
		} else if (gradDirection === '3') {
			var direction = '-45deg ,';
		} else {
			gradType = '-webkit-radial-gradient';
			var direction = '';
		}
		
		$('#button').css('background-image', gradType + '(' + direction + pointsString + ')');
		
		localStorage.setItem('pre3', gradDirection);
		localStorage.setItem('pre4', JSON.stringify(gradPoints));
		
		//direction = direction.replace(" ,","");
		
		//$("#gradient-picker").gradientPicker.setItems(direction);
		
	});
	
	//!update solid...
	$('#solid-color-r, #solid-color-g, #solid-color-b, #solid-color-o').change(function() {
		
		var red = Math.round($('#solid-color-r').val());
		
		if(localStorage.getItem('pre61') === '0') {
		
			var green = Math.round($('#solid-color-g').val());
			var blue = Math.round($('#solid-color-b').val());
		
		} else {
			
			var green = Math.round($('#solid-color-r').val());
			var blue = Math.round($('#solid-color-r').val());
			
			$('#solid-color-g, #solid-color-b').val(red);
			
		}
		
		var opacity = Math.round($('#solid-color-o').val());
		
		if(red > 255) { red = 255; $('#solid-color-r').val(red); }
		if(green > 255) { green = 255; $('#solid-color-g').val(green); }
		if(blue > 255) { blue = 255; $('#solid-color-b').val(blue); }
		if(opacity > 100) { opacity = 100; $('#solid-color-o').val(opacity); }
		
		if(red < 0) { red = 0; $('#solid-color-r').val(red); }
		if(green < 0) { green = 0; $('#solid-color-g').val(green); }
		if(blue < 0) { blue = 0; $('#solid-color-b').val(blue); }
		if(opacity < 0) { opacity = 0; $('#solid-color-o').val(opacity); }
		
		if(localStorage.getItem('pre62') === '0') {
			$('#button').css('background-color', 'rgba(' + red + ',' + green + ',' + blue + ',' + opacity/100 + ')');
		}
		
		$('#solid-color').css('background-color', 'rgba(' + red + ',' + green + ',' + blue + ',' + opacity/100 + ')');
		
		localStorage.setItem('pre63', red);
		localStorage.setItem('pre64', green);
		localStorage.setItem('pre65', blue);
		localStorage.setItem('pre66', opacity);
	});
	
	//!update border attributes...	
	$('#button-border').change(function() {
		var the_value = $(this).val();
		
		if(localStorage.getItem('pre46') === '1') {
			$('#button').css('border-width', the_value + 'px');
		}
		
		$('#button-border-val').val(the_value);
		localStorage.setItem('pre5', the_value);
	});
	
	$('#button-border-val').change(function() {
		var the_value = $(this).val();
		the_value = Math.round(the_value);
		if(the_value>20) {
			the_value = 20;
			$('#button-border-val').val(the_value);
		}
		if(the_value<0) {
			the_value = 0;
			$('#button-border-val').val(the_value);
		}
		
		if(localStorage.getItem('pre46') === '1') {
			$('#button').css('border-width', the_value + 'px');
		}
		
		$('#button-border, #button-border-val').val(the_value);
		localStorage.setItem('pre5', the_value);
	});
	
	//!update border color vals...
	$('#border-color-r, #border-color-g, #border-color-b, #border-color-o').change(function() {
		
		var red = Math.round($('#border-color-r').val());

		if(localStorage.getItem('pre55') === '0') {
				
			var green = Math.round($('#border-color-g').val());
			var blue = Math.round($('#border-color-b').val());
		
		} else {
			
			var green = Math.round($('#border-color-r').val());
			var blue = Math.round($('#border-color-r').val());
			
			$('#border-color-g, #border-color-b').val(red);
			
		}
		
		var opacity = Math.round($('#border-color-o').val());
		
		if(red > 255) { red = 255; $('#border-color-r').val(red); }
		if(green > 255) { green = 255; $('#border-color-g').val(green); }
		if(blue > 255) { blue = 255; $('#border-color-b').val(blue); }
		if(opacity > 100) { opacity = 100; $('#border-color-o').val(opacity); }
		
		if(red < 0) { red = 0; $('#border-color-r').val(red); }
		if(green < 0) { green = 0; $('#border-color-g').val(green); }
		if(blue < 0) { blue = 0; $('#border-color-b').val(blue); }
		if(opacity < 0) { opacity = 0; $('#border-color-o').val(opacity); }
		
		if(localStorage.getItem('pre46') === '1') {
			$('#button').css('border-color', 'rgba(' + red + ',' + green + ',' + blue + ',' + opacity/100 + ')');
		}
		
		$('#border-color').css('background-color', 'rgba(' + red + ',' + green + ',' + blue + ',' + opacity/100 + ')');
		
		localStorage.setItem('pre6', red);
		localStorage.setItem('pre7', green);
		localStorage.setItem('pre8', blue);
		localStorage.setItem('pre9', opacity);
	});
	
	//!update border radius sync...
	$('#border-sync').click(function() {
		if($(this).is(':checked')) {
			localStorage.setItem('pre10', '1');
			
			border_radius();
			$('#radius-top-right, #radius-bottom-right, #radius-bottom-left, #radius-top-right-val, #radius-bottom-right-val, #radius-bottom-left-val').prop('disabled', true);
			
		} else {
			localStorage.setItem('pre10', '0');
			$('#radius-top-right, #radius-bottom-right, #radius-bottom-left, #radius-top-right-val, #radius-bottom-right-val, #radius-bottom-left-val').prop('disabled', false);
		}
	});
	
	//!update border radius...
	function border_radius() {
		var top_left = $('#radius-top-left').val();
		var top_right = $('#radius-top-right').val();
		var bottom_right = $('#radius-bottom-right').val();
		var bottom_left = $('#radius-bottom-left').val();
		
		if($('#border-sync').is(':checked')) {
			
			$('#radius-top-right, #radius-bottom-right, #radius-bottom-left, #radius-top-left-val, #radius-top-right-val, #radius-bottom-right-val, #radius-bottom-left-val').val(top_left);
			
			if(localStorage.getItem('pre47') === '1') {
				$('#button').css('border-radius', top_left + 'px');
			}
			
			localStorage.setItem('pre11', top_left);
			localStorage.setItem('pre12', top_left);
			localStorage.setItem('pre13', top_left);
			localStorage.setItem('pre14', top_left);
		
		} else {
			
			$('#radius-top-left-val').val(top_left);
			$('#radius-top-right-val').val(top_right);
			$('#radius-bottom-right-val').val(bottom_right);
			$('#radius-bottom-left-val').val(bottom_left);
			
			if(localStorage.getItem('pre47') === '1') {
				$('#button').css({
					'border-top-left-radius' : top_left + 'px',
					'border-top-right-radius' : top_right + 'px',
					'border-bottom-right-radius' : bottom_right + 'px',
					'border-bottom-left-radius' : bottom_left + 'px'
				});
			}
			
			localStorage.setItem('pre11', top_left);
			localStorage.setItem('pre12', top_right);
			localStorage.setItem('pre13', bottom_right);
			localStorage.setItem('pre14', bottom_left);
		}
		
	}
	
	function border_radius_val() {
		var top_left = Math.round($('#radius-top-left-val').val());
		var top_right = Math.round($('#radius-top-right-val').val());
		var bottom_right = Math.round($('#radius-bottom-right-val').val());
		var bottom_left = Math.round($('#radius-bottom-left-val').val());

		if(top_left>150) {
			top_left = 150;
			$('#radius-top-left-val').val(top_left);
		}
		if(top_left<0) {
			top_left = 0;
			$('#radius-top-left-val').val(top_left);
		}

		if(top_right>150) {
			top_right = 150;
			$('#radius-top-right-val').val(top_right);
		}
		if(top_right<0) {
			top_right = 0;
			$('#radius-top-right-val').val(top_right);
		}
		
		bottom_right = Math.round(bottom_right);
		if(bottom_right>150) {
			bottom_right = 150;
			$('#radius-bottom-right-val').val(bottom_right);
		}
		if(bottom_right<0) {
			bottom_right = 0;
			$('#radius-bottom-right-val').val(bottom_right);
		}
		
		if(bottom_left>150) {
			bottom_left = 150;
			$('#radius-bottom-left-val').val(bottom_left);
		}
		if(bottom_left<0) {
			bottom_left = 0;
			$('#radius-bottom-left-val').val(bottom_left);
		}
		
		if($('#border-sync').is(':checked')) {
			
			$('#radius-top-left, #radius-top-right, #radius-bottom-right, #radius-bottom-left, #radius-top-right-val, #radius-bottom-right-val, #radius-bottom-left-val').val(top_left);
			
			if(localStorage.getItem('pre47') === '1') {
				$('#button').css('border-radius', top_left + 'px');
			}
			
			localStorage.setItem('pre11', top_left);
			localStorage.setItem('pre12', top_left);
			localStorage.setItem('pre13', top_left);
			localStorage.setItem('pre14', top_left);
		
		} else {
			
			$('#radius-top-left').val(top_left);
			$('#radius-top-right').val(top_right);
			$('#radius-bottom-right').val(bottom_right);
			$('#radius-bottom-left').val(bottom_left);
			
			if(localStorage.getItem('pre47') === '1') {
				$('#button').css({
					'border-top-left-radius' : top_left + 'px',
					'border-top-right-radius' : top_right + 'px',
					'border-bottom-right-radius' : bottom_right + 'px',
					'border-bottom-left-radius' : bottom_left + 'px'
				});
			}
			
			localStorage.setItem('pre11', top_left);
			localStorage.setItem('pre12', top_right);
			localStorage.setItem('pre13', bottom_right);
			localStorage.setItem('pre14', bottom_left);
		}
		
	}
	
	$('#radius-top-left, #radius-top-right, #radius-bottom-right, #radius-bottom-left').change(function() {       
		border_radius();
	});
	
	$('#radius-top-left-val, #radius-top-right-val, #radius-bottom-right-val, #radius-bottom-left-val').change(function() {
		border_radius_val();
	});
	
	//!update box shadows...	
	function box_shadow() {
		var innerX = $('#shadow-in-x').val();
		var innerY = $('#shadow-in-y').val();
		var innerBlur = $('#shadow-in-blur').val();
		var innerSpread = $('#shadow-in-spread').val();
		var innerR = $('#shadow-in-r').val();
		var innerG = $('#shadow-in-g').val();
		var innerB = $('#shadow-in-b').val();
		var innerO = $('#shadow-in-o').val();
		
		var outerX = $('#shadow-out-x').val();
		var outerY = $('#shadow-out-y').val();
		var outerBlur = $('#shadow-out-blur').val();
		var outerSpread = $('#shadow-out-spread').val();
		var outerR = $('#shadow-out-r').val();
		var outerG = $('#shadow-out-g').val();
		var outerB = $('#shadow-out-b').val();
		var outerO = $('#shadow-out-o').val();
		
		$('#shadow-in-x-val').val(innerX);
		$('#shadow-in-y-val').val(innerY);
		$('#shadow-in-blur-val').val(innerBlur);
		$('#shadow-in-spread-val').val(innerSpread);
		$('#shadow-in-r').val(innerR);
		$('#shadow-in-g').val(innerG);
		$('#shadow-in-b').val(innerB);
		$('#shadow-in-o').val(innerO);

		$('#shadow-out-x-val').val(outerX);
		$('#shadow-out-y-val').val(outerY);
		$('#shadow-out-blur-val').val(outerBlur);
		$('#shadow-out-spread-val').val(outerSpread);
		$('#shadow-out-r').val(outerR);
		$('#shadow-out-g').val(outerG);
		$('#shadow-out-b').val(outerB);
		$('#shadow-out-o').val(outerO);
		
		if(localStorage.getItem('pre48') === '1' && localStorage.getItem('pre49') === '1') {
			
			//both...
			$('#button').css({'-webkit-box-shadow': 'rgba(' + outerR + ',' + outerG + ',' + outerB + ',' + parseInt(outerO)/100 + ') ' + outerX + 'px ' + outerY + 'px ' + outerBlur + 'px ' + outerSpread + 'px, inset rgba(' + innerR + ',' + innerG + ',' + innerB + ',' + parseInt(innerO)/100 + ') ' + innerX + 'px ' + innerY + 'px ' + innerBlur + 'px ' + innerSpread + 'px'});
			
		} else if(localStorage.getItem('pre48') === '1' && localStorage.getItem('pre49') !== '1') {
		
			//inner only...
			$('#button').css({'-webkit-box-shadow': 'inset rgba(' + innerR + ',' + innerG + ',' + innerB + ',' + parseInt(innerO)/100 + ') ' + innerX + 'px ' + innerY + 'px ' + innerBlur + 'px ' + innerSpread + 'px'});
		
		} else if(localStorage.getItem('pre48') !== '1' && localStorage.getItem('pre49') === '1') {
		
			//outer only...
			$('#button').css({'-webkit-box-shadow': 'rgba(' + outerR + ',' + outerG + ',' + outerB + ',' + parseInt(outerO)/100 + ') ' + outerX + 'px ' + outerY + 'px ' + outerBlur + 'px ' + outerSpread + 'px'});
		
		} else {
			
			//none...
			$('#button').css('-webkit-box-shadow', 'none');
		}
		
		localStorage.setItem('pre15', innerX);
		localStorage.setItem('pre16', innerY);
		localStorage.setItem('pre17', innerBlur);
		localStorage.setItem('pre18', innerSpread);
		localStorage.setItem('pre19', innerR);
		localStorage.setItem('pre20', innerG);
		localStorage.setItem('pre21', innerB);
		localStorage.setItem('pre22', innerO);
		
		localStorage.setItem('pre23', outerX);
		localStorage.setItem('pre24', outerY);
		localStorage.setItem('pre25', outerBlur);
		localStorage.setItem('pre26', outerSpread);
		localStorage.setItem('pre27', outerR);
		localStorage.setItem('pre28', outerG);
		localStorage.setItem('pre29', outerB);
		localStorage.setItem('pre30', outerO);
	}
	
	function box_shadow_val() {
		var innerX = Math.round($('#shadow-in-x-val').val());
		var innerY = Math.round($('#shadow-in-y-val').val());
		var innerBlur = Math.round($('#shadow-in-blur-val').val());
		var innerSpread = Math.round($('#shadow-in-spread-val').val());
		
		var innerR = Math.round($('#shadow-in-r').val());
		
		if(localStorage.getItem('pre56') === '0') {
		
			var innerG = Math.round($('#shadow-in-g').val());
			var innerB = Math.round($('#shadow-in-b').val());
		
		} else {
			
			var innerG = Math.round($('#shadow-in-r').val());
			var innerB = Math.round($('#shadow-in-r').val());
			
		}
		
		var innerO = Math.round($('#shadow-in-o').val());
		
		var outerX = Math.round($('#shadow-out-x-val').val());
		var outerY = Math.round($('#shadow-out-y-val').val());
		var outerBlur = Math.round($('#shadow-out-blur-val').val());
		var outerSpread = Math.round($('#shadow-out-spread-val').val());
		
		var outerR = Math.round($('#shadow-out-r').val());
		
		if(localStorage.getItem('pre57') === '0') {
		
			var outerG = Math.round($('#shadow-out-g').val());
			var outerB = Math.round($('#shadow-out-b').val());
		
		} else {
			
			var outerG = Math.round($('#shadow-out-r').val());
			var outerB = Math.round($('#shadow-out-r').val());
			
		}
		
		var outerO = Math.round($('#shadow-out-o').val());
		
		if(innerX > 100) { innerX = 100; $('#shadow-in-x-val').val(innerX); }
		if(innerX < -100) { innerX = -100; $('#shadow-in-x-val').val(innerX); }
		
		if(innerY > 100) { innerY = 100; $('#shadow-in-y-val').val(innerY); }
		if(innerY < -100) { innerY = -100; $('#shadow-in-y-val').val(innerY); }
		
		if(innerBlur > 100) { innerBlur = 100; $('#shadow-in-blur-val').val(innerBlur); }
		if(innerBlur < 0) { innerBlur = 0; $('#shadow-in-blur-val').val(innerBlur); }
		
		if(innerSpread > 50) { innerSpread = 50; $('#shadow-in-spread-val').val(innerSpread); }
		if(innerSpread < -50) { innerSpread = -50; $('#shadow-in-spread-val').val(innerSpread); }
		
		if(outerX > 100) { outerX = 100; $('#shadow-out-x-val').val(outerX); }
		if(outerX < -100) { outerX = -100; $('#shadow-out-x-val').val(outerX); }
		
		if(outerY > 100) { outerY = 100; $('#shadow-out-y-val').val(outerY); }
		if(outerY < -100) { outerY = -100; $('#shadow-out-y-val').val(outerY); }
		
		if(outerBlur > 100) { outerBlur = 100; $('#shadow-out-blur-val').val(outerBlur); }
		if(outerBlur < 0) { outerBlur = 0; $('#shadow-out-blur-val').val(outerBlur); }
		
		if(outerSpread > 50) { outerSpread = 50; $('#shadow-out-spread-val').val(outerSpread); }
		if(outerSpread < -50) { outerSpread = -50; $('#shadow-out-spread-val').val(outerSpread); }
		
		if(innerR > 255) { innerR = 255; $('#shadow-in-r').val(innerR); }
		if(innerG > 255) { innerG = 255; $('#shadow-in-g').val(innerG); }
		if(innerB > 255) { innerB = 255; $('#shadow-in-b').val(innerB); }
		if(innerO > 100) { innerO = 100; $('#shadow-in-o').val(innerO); }
		
		if(outerR > 255) { outerR = 255; $('#shadow-out-r').val(outerR); }
		if(outerG > 255) { outerG = 255; $('#shadow-out-g').val(outerG); }
		if(outerB > 255) { outerB = 255; $('#shadow-out-b').val(outerB); }
		if(outerO > 100) { outerO = 100; $('#shadow-out-o').val(outerO); }
		
		if(innerR < 0) { innerR = 0; $('#shadow-in-r').val(innerR); }
		if(innerG < 0) { innerG = 0; $('#shadow-in-g').val(innerG); }
		if(innerB < 0) { innerB = 0; $('#shadow-in-b').val(innerB); }
		if(innerO < 0) { innerO = 0; $('#shadow-in-o').val(innerO); }
		
		if(outerR < 0) { outerR = 0; $('#shadow-out-r').val(outerR); }
		if(outerG < 0) { outerG = 0; $('#shadow-out-g').val(outerG); }
		if(outerB < 0) { outerB = 0; $('#shadow-out-b').val(outerB); }
		if(outerO < 0) { outerO = 0; $('#shadow-out-o').val(outerO); }
		
		$('#shadow-in-x').val(innerX);
		$('#shadow-in-y').val(innerY);
		$('#shadow-in-blur').val(innerBlur);
		$('#shadow-in-spread').val(innerSpread);
		$('#shadow-in-r').val(innerR);
		$('#shadow-in-g').val(innerG);
		$('#shadow-in-b').val(innerB);
		$('#shadow-in-o').val(innerO);

		$('#shadow-out-x').val(outerX);
		$('#shadow-out-y').val(outerY);
		$('#shadow-out-blur').val(outerBlur);
		$('#shadow-out-spread').val(outerSpread);
		$('#shadow-out-r').val(outerR);
		$('#shadow-out-g').val(outerG);
		$('#shadow-out-b').val(outerB);
		$('#shadow-out-o').val(outerO);
		
		if(localStorage.getItem('pre48') ==='1' && localStorage.getItem('pre49') === '1') {
			
			//both...
			$('#button').css({'-webkit-box-shadow': 'rgba(' + outerR + ',' + outerG + ',' + outerB + ',' + parseInt(outerO)/100 + ') ' + outerX + 'px ' + outerY + 'px ' + outerBlur + 'px ' + outerSpread + 'px, inset rgba(' + innerR + ',' + innerG + ',' + innerB + ',' + parseInt(innerO)/100 + ') ' + innerX + 'px ' + innerY + 'px ' + innerBlur + 'px ' + innerSpread + 'px'});
			
		} else if(localStorage.getItem('pre48') ==='1' && localStorage.getItem('pre49') !== '1') {
		
			//inner only...
			$('#button').css({'-webkit-box-shadow': 'inset rgba(' + innerR + ',' + innerG + ',' + innerB + ',' + parseInt(innerO)/100 + ') ' + innerX + 'px ' + innerY + 'px ' + innerBlur + 'px ' + innerSpread + 'px'});
		
		} else if(localStorage.getItem('pre48') !=='1' && localStorage.getItem('pre49') === '1') {
		
			//outer only...
			$('#button').css({'-webkit-box-shadow': 'rgba(' + outerR + ',' + outerG + ',' + outerB + ',' + parseInt(outerO)/100 + ') ' + outerX + 'px ' + outerY + 'px ' + outerBlur + 'px ' + outerSpread + 'px'});
		
		} else {
			
			//none...
			$('#button').css('-webkit-box-shadow', 'none');
			
		}

		$('#shadow-in').css('background-color', 'rgba(' + innerR + ',' + innerG + ',' + innerB + ',' + innerO/100 + ')');
		
		$('#shadow-out').css('background-color', 'rgba(' + outerR + ',' + outerG + ',' + outerB + ',' + outerO/100 + ')');
		
		localStorage.setItem('pre15', innerX);
		localStorage.setItem('pre16', innerY);
		localStorage.setItem('pre17', innerBlur);
		localStorage.setItem('pre18', innerSpread);
		localStorage.setItem('pre19', innerR);
		localStorage.setItem('pre20', innerG);
		localStorage.setItem('pre21', innerB);
		localStorage.setItem('pre22', innerO);
		
		localStorage.setItem('pre23', outerX);
		localStorage.setItem('pre24', outerY);
		localStorage.setItem('pre25', outerBlur);
		localStorage.setItem('pre26', outerSpread);
		localStorage.setItem('pre27', outerR);
		localStorage.setItem('pre28', outerG);
		localStorage.setItem('pre29', outerB);
		localStorage.setItem('pre30', outerO);
	}
	
	$('#shadow-in-x, #shadow-in-y, #shadow-in-blur, #shadow-in-spread, #shadow-out-x, #shadow-out-y, #shadow-out-blur, #shadow-out-spread').change(function() {
		box_shadow();
	});
	
	$('#shadow-in-x-val, #shadow-in-y-val, #shadow-in-blur-val, #shadow-in-spread-val, #shadow-in-r, #shadow-in-g, #shadow-in-b, #shadow-in-o, #shadow-out-x-val, #shadow-out-y-val, #shadow-out-blur-val, #shadow-out-spread-val, #shadow-out-r, #shadow-out-g, #shadow-out-b, #shadow-out-o').change(function() {
		box_shadow_val();
	});
	
	//!update text attributes...
	$('#text-font').change(function() {
		var the_value = $(this).val();
		$('#button').css('font-family', the_value);
		localStorage.setItem('pre31', the_value);
	});
	
	$('#text-style').change(function() {
		var the_value = $(this).val();
		if(the_value === '0') {
			textWeight = 'normal';
			textStyle = 'normal';
		} else if(the_value === '1') {
			textWeight = 'bold';
			textStyle = 'normal';
		} else if(the_value === '2') {
			textWeight = 'normal';
			textStyle = 'italic';
		} else {
			textWeight = 'bold';
			textStyle = 'italic';
		}
		$('#button').css({
			'font-weight': textWeight,
			'font-style': textStyle
		});
		localStorage.setItem('pre32', the_value);
	});
	
	$('#text-size').change(function() {
		var the_value = $(this).val();
		$('#button').css('font-size', the_value + 'px');
		$('#text-size-val').val(the_value);
		localStorage.setItem('pre33', the_value);
	});
	
	$('#text-size-val').change(function() {
		var the_value = $(this).val();
		the_value = Math.round(the_value);
		if(the_value>72) {
			the_value = 72;
			$('#text-size-val').val(the_value);
		}
		if(the_value<8) {
			the_value = 8;
			$('#text-size-val').val(the_value);
		}
		$('#button').css('font-size', the_value + 'px');
		$('#text-size').val(the_value);
		localStorage.setItem('pre33', the_value);
	});
	
	//!update text color vals...
	$('#text-r, #text-g, #text-b, #text-o').change(function() {
		
		var red = Math.round($('#text-r').val());
		
		if(localStorage.getItem('pre58') === '0') {
		
			var green = Math.round($('#text-g').val());
			var blue = Math.round($('#text-b').val());
			
		} else {
			
			var green = Math.round($('#text-r').val());
			var blue = Math.round($('#text-r').val());
			
			$('#text-g, #text-b').val(red);
			
		}
		
		var opacity = Math.round($('#text-o').val());
		
		if(red > 255) { red = 255; $('#text-r').val(red); }
		if(green > 255) { green = 255; $('#text-g').val(green); }
		if(blue > 255) { blue = 255; $('#text-b').val(blue); }
		if(opacity > 100) { opacity = 100; $('#text-o').val(opacity); }
		
		if(red < 0) { red = 0; $('#text-r').val(red); }
		if(green < 0) { green = 0; $('#text-g').val(green); }
		if(blue < 0) { blue = 0; $('#text-b').val(blue); }
		if(opacity < 0) { opacity = 0; $('#text-o').val(opacity); }
		
		$('#button').css('color', 'rgba(' + red + ',' + green + ',' + blue + ',' + opacity/100 + ')');
		$('#text').css('background-color', 'rgba(' + red + ',' + green + ',' + blue + ',' + opacity/100 + ')');
		
		localStorage.setItem('pre34', red);
		localStorage.setItem('pre35', green);
		localStorage.setItem('pre36', blue);
		localStorage.setItem('pre37', opacity);
	});
	
	//!update text shadow...
	function text_shadow() {
		var shadowX = $('#shadow-text-x').val();
		var shadowY = $('#shadow-text-y').val();
		var shadowBlur = $('#shadow-text-blur').val();
		var shadowR = $('#shadow-text-r').val();
		var shadowG = $('#shadow-text-g').val();
		var shadowB = $('#shadow-text-b').val();
		var shadowO = $('#shadow-text-o').val();
		
		$('#shadow-text-x-val').val(shadowX);
		$('#shadow-text-y-val').val(shadowY);
		$('#shadow-text-blur-val').val(shadowBlur);
		
		if(localStorage.getItem('pre50') === '1') {
			$('#button').css('text-shadow', 'rgba(' + shadowR + ',' + shadowG + ',' + shadowB + ',' + parseInt(shadowO)/100 + ') ' + shadowX + 'px ' + shadowY + 'px ' + shadowBlur + 'px');
		}
		
		localStorage.setItem('pre38', shadowX);
		localStorage.setItem('pre39', shadowY);
		localStorage.setItem('pre40', shadowBlur);
		localStorage.setItem('pre41', shadowR);
		localStorage.setItem('pre42', shadowG);
		localStorage.setItem('pre43', shadowB);
		localStorage.setItem('pre44', shadowO);
	}
	
	// !update text-shadow vals...
	function text_shadow_val() {
		var shadowX = Math.round($('#shadow-text-x-val').val());
		var shadowY = Math.round($('#shadow-text-y-val').val());
		var shadowBlur = Math.round($('#shadow-text-blur-val').val());
		
		var shadowR = Math.round($('#shadow-text-r').val());
		
		if(localStorage.getItem('pre59') === '0') {
		
			var shadowG = Math.round($('#shadow-text-g').val());
			var shadowB = Math.round($('#shadow-text-b').val());
		
		} else {
			
			var shadowG = Math.round($('#shadow-text-r').val());
			var shadowB = Math.round($('#shadow-text-r').val());
			
			$('#shadow-text-g, #shadow-text-b').val(shadowR);
			
		}
		
		var shadowO = Math.round($('#shadow-text-o').val());
		
		if(shadowX > 20) { shadowX = 20; $('#shadow-text-x-val').val(shadowX); }
		if(shadowX < -20) { shadowX = -20; $('#shadow-text-x-val').val(shadowX); }
		
		if(shadowY > 20) { shadowY = 20; $('#shadow-text-y-val').val(shadowY); }
		if(shadowY  <-20) { shadowY = -20; $('#shadow-text-y-val').val(shadowY); }
		
		if(shadowBlur > 20) { shadowBlur = 20; $('#shadow-text-blur-val').val(shadowBlur); }
		if(shadowBlur < 0) { shadowBlur = 0; $('#shadow-text-blur-val').val(shadowBlur); }
		
		if(shadowR > 255) { shadowR = 255; $('#shadow-text-r').val(shadowR); }
		if(shadowR < 0) { shadowR = 0; $('#shadow-text-r').val(shadowR); }
		
		if(shadowG > 255) { shadowG = 255; $('#shadow-text-g').val(shadowG); }
		if(shadowG < 0) { shadowG = 0; $('#shadow-text-g').val(shadowG); }
		
		if(shadowB > 255) { shadowB = 255; $('#shadow-text-b').val(shadowB); }
		if(shadowB < 0) { shadowB = 0; $('#shadow-text-b').val(shadowB); }
		
		if(shadowO > 100) { shadowO = 100; $('#shadow-text-o').val(shadowO); }
		if(shadowO < 0) { shadowO = 0; $('#shadow-text-o').val(shadowO); }
		
		$('#shadow-text-x').val(shadowX);
		$('#shadow-text-y').val(shadowY);
		$('#shadow-text-blur').val(shadowBlur);
		$('#shadow-text-r').val(shadowR);
		$('#shadow-text-g').val(shadowG);
		$('#shadow-text-b').val(shadowB);
		$('#shadow-text-o').val(shadowO);
		
		if(localStorage.getItem('pre50') === '1') {
			$('#button').css('text-shadow', 'rgba(' + shadowR + ',' + shadowG + ',' + shadowB + ',' + parseInt(shadowO)/100 + ') ' + shadowX + 'px ' + shadowY + 'px ' + shadowBlur + 'px');
		}
		
		$('#shadow-text').css('background-color', 'rgba(' + shadowR + ',' + shadowG + ',' + shadowB + ',' + parseInt(shadowO)/100 + ')');
		
		localStorage.setItem('pre38', shadowX);
		localStorage.setItem('pre39', shadowY);
		localStorage.setItem('pre40', shadowBlur);
		localStorage.setItem('pre41', shadowR);
		localStorage.setItem('pre42', shadowG);
		localStorage.setItem('pre43', shadowB);
		localStorage.setItem('pre44', shadowO);
	}
	
	$('#shadow-text-x, #shadow-text-y, #shadow-text-blur').change(function() {
		text_shadow();
	});
	
	$('#shadow-text-x-val, #shadow-text-y-val, #shadow-text-blur-val, #shadow-text-r, #shadow-text-g, #shadow-text-b, #shadow-text-o').change(function() {
		text_shadow_val();
	});
	
	
	//!update active states...
	$('#border-activate').click(function() {
		if($(this).is(':checked')) {
			
			//if rgb-lock...
			if(localStorage.getItem('pre55') === '0') {
			
				$('#border-attr-controls').find('input:not(#border-activate)').removeAttr('disabled');
			
			} else {
				
				$('#border-attr-controls').find('input:not(#border-activate, #border-color-g, #border-color-b)').removeAttr('disabled');
				
			}
			
			localStorage.setItem('pre46', '1');
			
			var borderWidth = localStorage.getItem('pre5');
			var borderR = localStorage.getItem('pre6');
			var borderG = localStorage.getItem('pre7');
			var borderB = localStorage.getItem('pre8');
			var borderO = localStorage.getItem('pre9');
			
			$('#button').css('border', borderWidth + 'px solid rgba(' + borderR + ', ' + borderG + ', ' + borderB + ', ' + parseInt(borderO)/100 + ')');
			
		} else {
			
			$('#border-attr-controls').find('input:not(#border-activate)').attr('disabled','disabled');
			
			localStorage.setItem('pre46', '0');
			$('#button').css('border', '0 solid');
		}
	});
	
	$('#radius-activate').click(function() {
		if($(this).is(':checked')) {
			localStorage.setItem('pre47', '1');
			
			var radiusSync = localStorage.getItem('pre10');
			var radiusTl = localStorage.getItem('pre11');
			var radiusTr = localStorage.getItem('pre12');
			var radiusBr = localStorage.getItem('pre13');
			var radiusBl = localStorage.getItem('pre14');
			
			if(radiusSync === '1') {
				
				$('#radius-top-left, #radius-top-left-val, #border-sync').removeAttr('disabled');
			
				$('#button').css('border-radius', radiusTl + 'px');
			
			} else {
				
				$('#border-radius-controls').find('input:not(#radius-activate)').removeAttr('disabled');
				
				$('#button').css({
					'border-top-left-radius' : radiusTl + 'px',
					'border-top-right-radius' : radiusTr + 'px',
					'border-bottom-right-radius' : radiusBr + 'px',
					'border-bottom-left-radius' : radiusBl + 'px'
				});				
			}
			
		} else {
		
			localStorage.setItem('pre47', '0');
			
			$('#border-radius-controls').find('input:not(#radius-activate)').attr('disabled','disabled');
			
			$('#button').css('border-radius', '0');
		}
	});
	
	$('#shadow-in-activate').click(function() {
		if($(this).is(':checked')) {
			
			//if rgb-lock...
			if(localStorage.getItem('pre56') === '0') {
			
				$('#shadow-in-controls').find('input:not(#shadow-in-activate)').removeAttr('disabled');
			
			} else {
				
				$('#shadow-in-controls').find('input:not(#shadow-in-activate, #shadow-in-g, #shadow-in-b)').removeAttr('disabled');
				
			}
			
			localStorage.setItem('pre48', '1');
		} else {
			
			$('#shadow-in-controls').find('input:not(#shadow-in-activate)').attr('disabled','disabled');
			
			localStorage.setItem('pre48', '0');
		}
		
		box_shadow();
		
	});
	
	$('#shadow-out-activate').click(function() {
		if($(this).is(':checked')) {
			
			//if rgb-lock...
			if(localStorage.getItem('pre57') === '0') {
			
				$('#shadow-out-controls').find('input:not(#shadow-out-activate)').removeAttr('disabled');
			
			} else {
				
				$('#shadow-out-controls').find('input:not(#shadow-out-activate, #shadow-out-g, #shadow-out-b)').removeAttr('disabled');
				
			}
			
			localStorage.setItem('pre49', '1');
		} else {
			
			$('#shadow-out-controls').find('input:not(#shadow-out-activate)').attr('disabled','disabled');
			
			localStorage.setItem('pre49', '0');
		}
		
		box_shadow();
		
	});
	
	$('#shadow-text-activate').click(function() {
		if($(this).is(':checked')) {
			
			//if rgb-lock...
			if(localStorage.getItem('pre59') === '0') {
			
				$('#text-shadow-controls').find('input:not(#shadow-text-activate)').removeAttr('disabled');
			
			} else {
				
				$('#text-shadow-controls').find('input:not(#shadow-text-activate, #shadow-text-g, #shadow-text-b)').removeAttr('disabled');
				
			}
			
			localStorage.setItem('pre50', '1');
			
			var shadowX = localStorage.getItem('pre38');
			var shadowY = localStorage.getItem('pre39');
			var shadowBlur = localStorage.getItem('pre40');
			var shadowR = localStorage.getItem('pre41');
			var shadowG = localStorage.getItem('pre42');
			var shadowB = localStorage.getItem('pre43');
			var shadowO = localStorage.getItem('pre44');
			
			$('#button').css('text-shadow', 'rgba(' + shadowR + ',' + shadowG + ',' + shadowB + ',' + parseInt(shadowO)/100 + ') ' + shadowX + 'px ' + shadowY + 'px ' + shadowBlur + 'px');
			
		} else {
			
			$('#text-shadow-controls').find('input:not(#shadow-text-activate)').attr('disabled','disabled');
			
			localStorage.setItem('pre50', '0');
			
			$('#button').css('text-shadow', 'none');
		}
	});
	
	$('input:radio[name=background-type]').change(function() {
		
		if($(this).val() === '0') {
			
			//disable gradient...
			$('#background-controls').find('input:not(#background-type-gradient)').attr('disabled','disabled');
			
			//solid color...
			
			var solidR = localStorage.getItem('pre63');
			var solidG = localStorage.getItem('pre64');
			var solidB = localStorage.getItem('pre65');
			var solidO = localStorage.getItem('pre66');
			
			$('#button').css({'background-image': '',
			'background-color': 'rgba(' + solidR + ',' + solidG + ',' + solidB + ',' + parseInt(solidO)/100 + ')'});	
			
			localStorage.setItem('pre62', '0');
			
		} else {
			
			//enable gradient...
			$('#background-controls').find('input').removeAttr('disabled');
			
			//gradient...
			
			var gradDir = localStorage.getItem('pre3');
		
			var gradPoints = localStorage.getItem('pre4');
			gradPoints = gradPoints.replace(/"/g,'');
			gradPoints = gradPoints.replace('[','');
			gradPoints = gradPoints.replace(']','');
			
			var gradProperty = '-webkit-linear-gradient';
			
			if(gradDir === '0') {
				var direction = 'top ,';
			} else if(gradDir === '1') {
				var direction = 'left ,';
			} else if(gradDir === '2') {
				var direction = '45deg ,';
			} else if(gradDir === '3') {
				var direction = '-45deg ,';
			} else {
				gradProperty = '-webkit-radial-gradient'
				var direction = '';
			}
			
			$('#button').css({'background': '',
			'background-image': gradProperty + '(' + direction + gradPoints + ')'});
			
			localStorage.setItem('pre62', '1');
		}
	
	});
	
	//!color locks...
	
	//border...
	$('#rgb-lock-1').click(function() {
		
		if($(this).is(':checked')) {
			localStorage.setItem('pre55', '1');
			
			//disable g & b...
			$('#picker-1-green, #picker-1-blue, #border-color-b, #border-color-g').attr('disabled', 'disabled');
			//sync values to r...
			var grey = $('#picker-1-red').val();
			
			$('#picker-1-green, #picker-1-blue, #border-color-g, #border-color-b').val(grey);
			
			localStorage.setItem('pre7', grey);
			localStorage.setItem('pre8', grey);
			
			$('#border-color').css('background-color', 'rgba(' + grey + ',' + grey + ',' + grey + ',' + parseInt(localStorage.getItem('pre9'))/100 + ')');
			
			$('#button').css('border-color', 'rgba(' + grey + ',' + grey + ',' + grey + ',' + parseInt(localStorage.getItem('pre9'))/100 + ')');
			
		} else {
			localStorage.setItem('pre55', '0');
			
			//enable g & b...
			$('#picker-1-green, #picker-1-blue, #border-color-b, #border-color-g').removeAttr('disabled');
		}
		
	});
	
	//shadow-in...
	$('#rgb-lock-2').click(function() {
		
		if($(this).is(':checked')) {
			localStorage.setItem('pre56', '1');
			
			
			//disable g & b...
			$('#picker-2-green, #picker-2-blue, #shadow-in-g, #shadow-in-b').attr('disabled', 'disabled');
			//sync values to r...
			var grey = $('#picker-2-red').val();
			
			$('#picker-2-green, #picker-2-blue, #shadow-in-g, #shadow-in-b').val(grey);
			
			localStorage.setItem('pre20', grey);
			localStorage.setItem('pre21', grey);
			
			$('#shadow-in').css('background-color', 'rgba(' + grey + ',' + grey + ',' + grey + ',' + parseInt(localStorage.getItem('pre22'))/100 + ')');
			
			box_shadow();
			
		} else {
			localStorage.setItem('pre56', '0');
			
			//enable g & b...
			$('#picker-2-green, #picker-2-blue, #shadow-in-g, #shadow-in-b').removeAttr('disabled');
			
		}
		
	});
	
	//shadow-out...
	$('#rgb-lock-3').click(function() {
		
		if($(this).is(':checked')) {
			localStorage.setItem('pre57', '1');
			
			//disable g & b...
			$('#picker-3-green, #picker-3-blue, #shadow-out-g, #shadow-out-b').attr('disabled', 'disabled');
			//sync values to r...
			var grey = $('#picker-3-red').val();
			
			$('#picker-3-green, #picker-3-blue, #shadow-out-g, #shadow-out-b').val(grey);
			
			localStorage.setItem('pre28', grey);
			localStorage.setItem('pre29', grey);
			
			$('#shadow-out').css('background-color', 'rgba(' + grey + ',' + grey + ',' + grey + ',' + parseInt(localStorage.getItem('pre30'))/100 + ')');
			
			box_shadow();

			
		} else {
			localStorage.setItem('pre57', '0');
			
			//enable g & b...
			$('#picker-3-green, #picker-3-blue, #shadow-out-g, #shadow-out-b').removeAttr('disabled');
			
		}
		
	});
	
	//text...
	$('#rgb-lock-4').click(function() {
		
		if($(this).is(':checked')) {
			localStorage.setItem('pre58', '1');
			
			//disable g & b...
			$('#picker-4-green, #picker-4-blue, #text-g, #text-b').attr('disabled', 'disabled');
			//sync values to r...
			var grey = $('#picker-4-red').val();
			
			$('#picker-4-green, #picker-4-blue, #text-g, #text-b').val(grey);
			
			localStorage.setItem('pre35', grey);
			localStorage.setItem('pre36', grey);
			
			$('#text').css('background-color', 'rgba(' + grey + ',' + grey + ',' + grey + ',' + parseInt(localStorage.getItem('pre37'))/100 + ')');
			
			$('#button').css('color', 'rgba(' + grey + ',' + grey + ',' + grey + ',' + parseInt(localStorage.getItem('pre37'))/100 + ')');
			
		} else {
			localStorage.setItem('pre58', '0');
			
			//enable g & b...
			$('#picker-4-green, #picker-4-blue, #text-g, #text-b').removeAttr('disabled');
			
		}
		
	});
	
	//text-shadow...
	$('#rgb-lock-5').click(function() {
		
		if($(this).is(':checked')) {
			localStorage.setItem('pre59', '1');
			
			//disable g & b...
			$('#picker-5-green, #picker-5-blue, #shadow-text-g, #shadow-text-b').attr('disabled', 'disabled');
			//sync values to r...
			var grey = $('#picker-5-red').val();
			var opacity = parseInt(localStorage.getItem('pre44'))/100;
			var shadowX = localStorage.getItem('pre38');
			var shadowY = localStorage.getItem('pre39');
			var shadowBlur = localStorage.getItem('pre40');
			
			$('#picker-5-green, #picker-5-blue, #shadow-text-g, #shadow-text-b').val(grey);
			
			localStorage.setItem('pre42', grey);
			localStorage.setItem('pre43', grey);
			
			$('#shadow-text').css('background-color', 'rgba(' + grey + ',' + grey + ',' + grey + ',' + opacity + ')');
			
			$('#button').css('text-shadow', 'rgba(' + grey + ',' + grey + ',' + grey + ',' + opacity + ') ' + shadowX + 'px '  + shadowY + 'px ' + shadowBlur + 'px');
			
		} else {
			localStorage.setItem('pre59', '0');
			
			//enable g & b...
			$('#picker-5-green, #picker-5-blue, #shadow-text-g, #shadow-text-b').removeAttr('disabled');
			
		}
		
	});
	
	//preview...
	$('#rgb-lock-6').click(function() {
		
		if($(this).is(':checked')) {
			localStorage.setItem('pre60', '1');
			
			//disable g & b...
			$('#picker-6-green, #picker-6-blue, #preview-color-g, #preview-color-b').attr('disabled', 'disabled');
			//sync values to r...
			var grey = $('#picker-6-red').val();
			
			$('#picker-6-green, #picker-6-blue, #preview-color-g, #preview-color-b').val(grey);
			
			localStorage.setItem('pre52', grey);
			localStorage.setItem('pre53', grey);
			
			$('#preview-color, #preview').css('background-color', 'rgba(' + grey + ',' + grey + ',' + grey + ',' + parseInt(localStorage.getItem('pre54'))/100 + ')');
			
		} else {
			localStorage.setItem('pre60', '0');
			
			//enable g & b...
			$('#picker-6-green, #picker-6-blue, #preview-color-g, #preview-color-b').removeAttr('disabled');
			
		}
		
	});
	
	//solid...
	$('#rgb-lock-7').click(function() {
		
		if($(this).is(':checked')) {
			localStorage.setItem('pre61', '1');
			
			//disable g & b...
			$('#picker-7-green, #picker-7-blue, #solid-color-g, #solid-color-b').attr('disabled', 'disabled');
			//sync values to r...
			var grey = $('#picker-7-red').val();
			
			$('#picker-7-green, #picker-7-blue, #solid-color-g, #solid-color-b').val(grey);
			
			localStorage.setItem('pre64', grey);
			localStorage.setItem('pre65', grey);
			
			$('#solid-color').css('background-color', 'rgba(' + grey + ',' + grey + ',' + grey + ',' + parseInt(localStorage.getItem('pre66'))/100 + ')');
			
			$('#button').css('background-color', 'rgba(' + grey + ',' + grey + ',' + grey + ',' + parseInt(localStorage.getItem('pre66'))/100 + ')');
			
		} else {
			localStorage.setItem('pre61', '0');
			
			//enable g & b...
			$('#picker-7-green, #picker-7-blue, #solid-color-g, #solid-color-b').removeAttr('disabled');
			
		}
		
	});
	
	
}); // end docready
