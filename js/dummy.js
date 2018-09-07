// we don't support scratch mode
// demo.js

(function(ext) {

	var device = null;

var levels = {
	HIGH:1,
	LOW:0
	};



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

	ext.digitalWrite = function(pin,level) {
				device.send([pin, levels[level]])
		};
	var _level = 0;
	ext.blink = function(){
		device.send([0x22, 0x23])
	}

		function processData(bytes) {
				trace(bytes);
		}

		// Extension API interactions
		var potentialDevices = [];
		ext._deviceConnected = function(dev) {
				potentialDevices.push(dev);

				if (!device) {
						tryNextDevice();
				}
		}

		function tryNextDevice() {
				// If potentialDevices is empty, device will be undefined.
				// That will get us back here next time a device is connected.
				device = potentialDevices.shift();
				if (device) {
						device.open({ stopBits: 0, bitRate: 115200, ctsFlowControl: 0 }, deviceOpened);
				}
		}

		function deviceOpened(dev) {
				if (!dev) {
						// Opening the port failed.
						tryNextDevice();
						return;
				}
				device.set_receive_handler('grove lcd',function(data) {
						processData(data);
				});
		};

		ext._deviceRemoved = function(dev) {
				if(device != dev) return;
				device = null;
		};

		ext._shutdown = function() {
				if(device) device.close();
				device = null;
		};

		ext._getStatus = function() {
				if(!device) return {status: 1, msg: 'grove lcd disconnected'};
				return {status: 2, msg: 'grove lcd connected'};
		}

		var descriptor = {};

var descriptor = {};
	ScratchExtensions.register('grove lcd', descriptor, ext, {type: 'serial'});
})({});
