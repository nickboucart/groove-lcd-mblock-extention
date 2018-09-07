// we don't support scratch mode
// demo.js

(function(ext) {

	ext.resetAll = function(){};

	ext.doArduino = function(){
	};

  ext.LCDSetText = function(t){
	};
  ext.LCDSetRGB = function(r,g,b){
	};
  ext.LCDClearScreen = function(){
	};
	ext.LCDUse = function(){
	};

var descriptor = {};
	ScratchExtensions.register('grove lcd', descriptor, ext, {type: 'serial'});
})({});
