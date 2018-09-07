// we don't support scratch mode
// demo.js

(function(ext) {


	ext.doArduino = function(){
	};

  ext.LCDSetText = function(){
	};
  ext.LCDSetRGB = function(){
	};
  ext.LCDClearScreen = function(){
	};
	ext.LCDUse = function(){
	};

var descriptor = {};
	ScratchExtensions.register('Grove LCD (Arduino Mode Only)', descriptor, ext, {type: 'serial'});
})({});
