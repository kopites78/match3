(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg1AADkIAAnHMBqBAAAIAAHHg");
	mask.setTransform(339.3,22.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgyRADkQhIAAg0g0QgzgzAAhJIAAkXQD1B8VhBjQIQAlIsAYQH+AWEeAAQEcAAHfgWQIFgYHsglQTwhjD3h8IAAEXQAABJgzAzQgzA0hJAAg");
	this.shape.setTransform(339.3,22.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,678.7,45.5), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	mask.setTransform(960,540);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhFCXQgXgMAAgaQAAgLAEgJQAFgHAFgFQAOAIAQAFQAPAFASAAQAYAAAOgIQANgJAAgTIAAgIQgSAJgZAAQgSAAgUgHQgTgGgNgOQgMgMgKgXQgIgVAAgdQAAgdAJgVQAIgWAQgOQAPgNAVgIQAUgGAZAAQAbAAATAGQAXAIAMAKQAKAHAFAIQAFAJAAAMIAACmQAAAZgJATQgKASgOAMQgQAMgUAGQgWAFgWABQgoAAgYgMgAgUhVQgLANAAAYQAAAcALAMQALALAPAAQATAAAKgIIAAhYIgJgEQgIgBgHAAQgVAAgKANg");
	this.shape.setTransform(1453.3,314.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA3B4QgJgCgEgEQgGgEgCgIQgDgFAAgNIAAhwQAAgPgIgHQgIgHgNAAQgHAAgKADQgIACgHAEIAACmIghADIgSgBQgJgCgFgEQgEgDgEgJQgDgGAAgMIAAiPQAAgOAGgGQAFgJAIgHQARgMAVgGQAYgIAbAAQAyAAAcAZQAbAXAAAqIAACVIgiADg");
	this.shape_1.setTransform(1428.2,310.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNCqQgIgCgFgEQgFgDgDgJQgDgGAAgMIAAjCIAigEQAJAAAHABQAJACAFAEQAFAFADAHQADAHAAAMIAADCIgiADQgJABgIgCgAgdhhQgMgMAAgSQAAgUAMgLQALgNASAAQATAAALANQAMANAAASQAAARgMANQgLANgTAAQgSAAgLgNg");
	this.shape_2.setTransform(1408.9,305.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbB0QgNgEgFgLIgviFIgLgnIgIggQAGgHALgFQALgFAMAAQAPAAALAHQAKAHAEATIAhCKIACAAIAShOQAJgmAIguQAJgFAIgCQAKgCAJAAQAPAAALAHQALAHAAASQAAAFgEARIgwCTIgNAcQgGAGgMADQgLADgQAAQgRAAgMgFg");
	this.shape_3.setTransform(1390.4,310.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNCqQgIgCgFgEQgFgEgDgIQgDgFABgNIAAjCIAhgEIARABQAJACAEAEQAFAEADAIQADAHAAAMIAADCIgiADgAgdhhQgMgNAAgRQAAgSAMgNQALgNASAAQASAAAMANQAMALAAAUQAAASgMAMQgMANgSAAQgSAAgLgNg");
	this.shape_4.setTransform(1372,305.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag0CTQgTABgLgMQgLgNAAgTIAAj3IAkgDQAKAAAIABQAIABAFAFQAFAEADAIQADAJAAALIAAC7IBlAAQACAEAEALQACAHAAALQAAATgHAIQgIAIgMgBg");
	this.shape_5.setTransform(1355.2,307.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgzB4QgJgCgEgEQgFgFgDgHQgDgHAAgMIAAiOQAAgMAEgHQACgHAJgHQAHgGAKgFIAWgJIAYgGQAPgCALAAQAWAAANAJQAMAJAAAUQAAAHgCAGQgCAGgCAFIgUABIglAHIgNAFIAACiIghAEQgKAAgIgBg");
	this.shape_6.setTransform(1325.6,310.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgvBzQgVgJgPgQQgPgQgKgWQgIgZAAgbQAAgbAIgXQAKgXAPgQQAQgRAUgIQAWgIAZgBQAbABAVAIQAWAKAPAPQAOAPAJAYQAJAXAAAbQAAAdgJAYQgJAYgOAOQgQAQgVAJQgXAHgZABQgZAAgWgJgAgcgsQgKAPAAAdQAAAdAKAQQAKAPASAAQATAAAKgQQALgPAAgdQAAgcgLgQQgLgPgSAAQgRAAgLAPg");
	this.shape_7.setTransform(1302.6,310.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMCqQgJgCgFgEQgFgDgDgJQgDgGAAgMIAAjCIAigEQAJAAAIABQAHACAGAEQAFAEADAIQADAHAAAMIAADCIgiADQgJABgHgCgAgdhhQgLgNAAgRQAAgSALgNQALgNASAAQATAAALANQAMANAAASQAAARgMANQgLANgTAAQgSAAgLgNg");
	this.shape_8.setTransform(1283.2,305.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AA3B4QgJgCgEgEQgGgEgCgIQgEgGAAgMIAAhwQAAgPgHgHQgJgHgNAAQgGAAgKADQgIACgHAEIAACmIghADIgSgBQgJgCgFgEQgGgEgCgIQgDgGAAgMIAAiPQAAgOAGgGQAFgJAIgHQARgMAVgGQAYgIAaAAQAzAAAcAZQAbAXAAAqIAACVIgiADQgLABgHgCg");
	this.shape_9.setTransform(1263.9,310.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AghB0QgVgIgSgQQgRgQgJgXQgKgYAAgfQAAghAKgVQAIgWARgQQAPgNAUgJQAVgHATAAQAXABAVAHQAUAIANANQAPAPAHARQAIATAAAWQAAAQgJAHQgJAJgPACIhtASQAFAQAPAIQAQAIASAAQAQAAATgFQAPgFALgHQAIAFAEAJQAFAHAAALQAAAUgSALQgPAJgSACQgRAEgQAAQgagBgWgHgAgPg8QgIAGgFAEQgEAFgDAJQgDAJAAAGIBLgOQgBgJgJgJQgIgKgRAAQgKAAgHADg");
	this.shape_10.setTransform(1238.7,310.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgwCVQgSgEgMgHQgNgHgIgKQgHgJAAgOQAAgOAHgKQAIgJAJgGQANALARAHQATAHAVAAQAVABAJgIQAJgHAAgJQAAgJgIgGQgIgFgLgEIg2gWQgPgGgNgLQgLgKgHgOQgGgRAAgTQAAgpAdgYQAdgZA0ABQATAAARACQAOADAOAGQALAFAHALQAHAJAAAMQAAAMgFAKQgFAIgIAGQgKgGgRgFQgPgFgVAAQgSAAgKAFQgJAHAAAJQAAAIAFADQAHAFALAEIAWAIQArAOAWAWQAWAVAAAnQAAAogeAaQgdAZg5AAQgSAAgVgEg");
	this.shape_11.setTransform(1214.4,307.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhGCVQgKgMgDgTQAMgKAQgRQAPgOALgPQgHgDgJgJQgJgIgKgZIgWg8QgIgXgFgUIgNg4QAGgHAKgFQAMgGALABQAPgBALAIQALAHAFATIAiCBIACAAIAliZQAQgKATABQAQAAAKAHQAKAHAAASQAAAMgDASIgVBLIgtBrQgLAUgMASQgKAOgLAJQgJAIgKADQgJAEgLAAQgSAAgNgMg");
	this.shape_12.setTransform(1180.6,314.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgMCeQgJgCgFgEQgFgDgDgJQgDgGAAgMIAAkVIAigDQAJgBAIACQAHACAGAEQAFADADAJQADAGAAAMIAAEVIgiADQgJABgHgCg");
	this.shape_13.setTransform(1162.2,306.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag5CaQgWgIgNgKQgUgPAAgXIAAj+IAPgDIAUgBQAKgBAHACQAJACAEAEQAGAEACAIQADAGAAAMIAAAvQAJgDAMgEIAVgCQAVAAAUAJQAUAIAOAQQAOAPAJAXQAJAWAAAeQAAAfgJAXQgIAVgQARQgRAQgWAIQgWAHgaABQgeAAgUgIgAgWgTIgOAGIAABnQAFADAHACQAJACAIABQATAAAMgPQALgPAAgeQAAgfgMgNQgLgPgTAAQgGAAgJACg");
	this.shape_14.setTransform(1143.3,306.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgqB2QgRgEgPgJQgPgLgGgOQgIgPAAgUQAAggATgRQASgRAngFIA5gHIAAgDQAAgOgMgFQgLgHgVAAQgRABgPADQgNADgQAGQgHgDgDgKQgEgIAAgKQAAgMAGgHQAFgIALgFQAPgGAQgCQAUgCAOgBQAVABAWAFQATAGAOAKQANAKAJARQAIARAAAWIAABqQAAAMgHAIQgGAIgKAGQgeASgzABQgXgBgTgFgAgBAWQgNACgIAEQgHAGAAAJQAAAKAGAFQAHAGAQAAIARgBQAIgCAFgDIAAgmg");
	this.shape_15.setTransform(1117,310.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgwB+QgWgUABgqIAAjLIAOgDIATgCQAUAAAKAHQAKAHAAAZIAAAeIA7AAQACAEADAJQADAHAAAKQgBASgGAGQgHAIgMAAIgpAAIAABHQAAANAIAFQAIAFAMAAIAOgBIANgEQAEAGADAGQADAHAAAJQAAASgNALQgNAMggAAQgmAAgVgTg");
	this.shape_16.setTransform(1097,308.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgyB4QgJgCgFgEQgFgEgDgIQgDgGAAgNIAAiOQAAgLAEgIQAEgIAHgGQAGgFAMgGIAWgJIAYgGQAOgCAMAAQAVAAAMAJQANAJAAAUIgBANIgFALIgUABIgkAHIgOAFIAACiIghAEQgKAAgHgBg");
	this.shape_17.setTransform(1079.1,310.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgvBzQgWgJgOgQQgQgQgIgWQgJgZAAgbQAAgbAJgXQAIgXAQgQQAPgQAVgJQAWgIAZgBQAaABAWAIQAWAKAOAPQAQARAIAWQAJAXAAAbQAAAdgJAYQgIAXgQAPQgOAQgWAJQgXAHgZABQgYAAgXgJgAgcgsQgKAQAAAcQAAAdAKAQQALAPARAAQATAAAKgQQAKgQAAgcQAAgcgKgQQgKgPgTAAQgSAAgKAPg");
	this.shape_18.setTransform(1056.1,310.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag4CiQgJgBgEgEQgGgEgCgIQgEgHAAgMIAAjFQABgYAHgSQAIgRANgLQAOgLASgGQARgFAUAAQAiAAAPAJQAPAKAAAWQAAAKgDAHQgEAIgFAEIgRgEIgVgCQgUAAgKAHQgKAHAAARIAAAPIBIAAIAFANQADAJAAAJQAAAQgHAHQgHAHgMAAIgxAAIAACYIgiAEQgLAAgHgCg");
	this.shape_19.setTransform(1034.5,306);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AByB4QgJgCgEgEQgGgEgCgIQgDgGAAgMIAAhyQAAgNgIgHQgIgHgMAAQgHAAgHAEIgLAFIABAFIAAChIgiADIgRgBQgIgCgFgEQgGgEgCgIQgDgGAAgMIAAhyQAAgNgIgHQgJgHgLAAQgIAAgGADIgKAFIAACnIghADQgKABgIgCQgJgCgEgEQgGgEgCgIQgDgGAAgMIAAiQQAAgNAFgHQAFgHAJgIQAQgMAVgGQAXgIAZAAQARABASAFQASAGAMALQAPgKAPgGQASgGAWgBQAPAAATAGQAQAEANAKQAMAKAIARQAHASAAAYIAACWIghADg");
	this.shape_20.setTransform(1005,310.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgvBzQgVgJgQgQQgPgQgIgWQgJgZAAgbQAAgbAJgXQAIgXAPgQQASgRATgIQAVgIAagBQAaABAWAIQAWAKAOAPQAPAPAKAYQAIAXAAAbQAAAdgIAYQgKAYgPAOQgOAQgWAJQgXAHgZABQgZAAgWgJgAgcgsQgKAPAAAdQAAAdALAQQAKAPASAAQASAAAKgQQALgQgBgcQAAgcgKgQQgLgPgSAAQgRAAgLAPg");
	this.shape_21.setTransform(973.1,310.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgYCRQgbgLgTgRQgTgSgMgfQgLgbAAgpQAAglALgcQAKgcATgUQATgTAagKQAagKAbAAQApAAAXAOQAWAPAAAVQAAANgGAJQgFAJgIAFQgMgHgNgGQgNgGgRAAQgjAAgRAXQgSAWAAAoQAAAoAUAYQAUAWAiAAQATAAAMgFQAMgFAMgHQAIAHAEAJQAEAJAAANQAAATgUANQgUAOgqABQgdgBgagIg");
	this.shape_22.setTransform(947.5,307.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgvBzQgVgJgQgQQgOgQgKgWQgIgZAAgbQAAgbAIgXQAKgXAOgQQASgRATgIQAWgIAZgBQAaABAWAIQAWAKAPAPQAOAPAKAYQAIAXAAAbQAAAdgIAYQgKAYgOAOQgQAQgVAJQgXAHgZABQgZAAgWgJgAgcgsQgKAPAAAdQAAAdAKAQQAKAPATAAQASAAAKgQQALgPAAgdQAAgcgLgQQgLgPgSAAQgRAAgLAPg");
	this.shape_23.setTransform(912.6,310.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgwB+QgVgTgBgrIAAjLIAPgDIATgCQAUAAAKAHQALAHAAAZIAAAeIA6AAIAFANQACAJABAIQAAARgIAHQgGAIgMAAIgoAAIAABHQgBANAIAFQAIAFANAAIANgBIANgEQAFAGACAGQACAGABAKQAAATgNAKQgNAMggAAQglAAgWgTg");
	this.shape_24.setTransform(891.2,308.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AA3B4QgIgCgFgEQgGgDgDgJQgDgGAAgMIAAhwQAAgPgHgHQgJgHgMAAQgHAAgKADQgJACgGAEIAACmIgiADQgJABgIgCQgJgCgFgEQgFgEgDgIQgDgFABgNIAAiPQAAgOAEgGQAGgJAJgHQAQgMAVgGQAYgIAbAAQAyAAAbAZQAcAXAAAqIAACVIgiADQgKABgIgCg");
	this.shape_25.setTransform(868.7,310.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgNCqQgIgCgFgEQgFgEgDgIQgDgHAAgLIAAjCIAigEQAJAAAIABQAIACAFAEQAGAFACAHQADAHAAAMIAADCIgiADgAgdhhQgLgMAAgSQAAgUALgLQALgNASAAQASAAAMANQALALAAAUQAAASgLAMQgMANgSAAQgSAAgLgNg");
	this.shape_26.setTransform(849.4,305.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhXChQgHgBgGgFQgFgEgDgHQgDgJAAgLIAAjkQAAgMAFgJQAEgHAKgIQAOgJAUgGQAVgGAaAAQAaAAAWAIQAXAHAQAPQASAQAIAWQAKAXAAAhQAAAdgIAXQgIAYgPAPQgNAOgWAJQgUAHgaAAQgTAAgQgGIAABPIgPAEIgUABQgKAAgHgBgAgYhfQgIADgDACIAABoIALAFQAFABAJABQAsgBABg5QAAgegMgQQgLgPgVABQgIgBgHADg");
	this.shape_27.setTransform(821.7,314.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AghB0QgWgIgRgQQgQgOgKgZQgKgYAAgfQAAghAKgVQAJgWAQgQQAPgOAVgIQAUgHAUAAQAWABAVAHQATAIAOANQAPAPAHARQAIASAAAXQAAAQgJAHQgIAJgPACIhtASQAEAQAQAIQAPAIASAAQARAAASgFQARgGAJgGQAIAFAEAJQAFAHAAALQAAAVgSAKQgOAJgSACQgSAEgQAAQgagBgWgHgAgPg8QgIAFgFAFQgFAHgCAHQgDAHAAAIIBLgOQAAgIgJgKQgJgKgQAAQgLAAgHADg");
	this.shape_28.setTransform(795.9,310.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgwB+QgVgTAAgrIAAjLIAOgDIATgCQATAAAMAHQAJAHAAAZIAAAeIA7AAIAFANQACAIAAAJQAAASgGAGQgIAIgLAAIgpAAIAABHQAAANAIAFQAIAFANAAIANgBIANgEQADAFAEAHQADAHAAAJQAAASgNALQgNAMggAAQgmAAgVgTg");
	this.shape_29.setTransform(775.3,308.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgwCVQgSgEgMgHQgPgHgGgKQgHgJAAgOQAAgOAHgKQAIgJAJgGQANALARAHQASAHAWAAQAVABAJgIQAIgHAAgJQAAgKgHgFQgIgFgLgEIgSgHIgkgPQgQgHgMgKQgMgKgGgOQgGgPAAgVQAAgpAdgYQAdgZA0ABQATAAAQACQAQADANAGQALAFAHALQAHAIAAANQAAANgFAJQgHAJgGAFQgKgGgRgFQgPgFgVAAQgTAAgJAFQgKAHAAAJQAAAHAGAEQAHAFALAEIAWAIQArAOAWAWQAWAVAAAnQAAAogeAaQgeAZg5AAQgRAAgVgEg");
	this.shape_30.setTransform(753.8,307.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgwB+QgVgTAAgrIAAjLIANgDIAUgCQATAAAMAHQAJAHABAZIAAAeIA6AAIAFANQADAJgBAIQABARgIAHQgGAIgMAAIgoAAIAABHQAAANAHAFQAIAFANAAIAOgBIAMgEQAFAGACAGQADAHAAAJQAAASgNALQgNAMggAAQgmAAgVgTg");
	this.shape_31.setTransform(724,308.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgoB5QgPgDgNgGQgLgGgGgJQgHgJABgNQgBgLAFgIQAFgIAFgFQAMAHASAHQARAGAWAAQAMAAAIgFQAHgEAAgHQAAgHgFgEQgFgDgMgDIgOgDQgngIgSgRQgTgRAAggQAAgRAHgPQAIgPAMgJQAOgKARgFQASgFAVAAQATAAAMADQANACANAGQAJAFAIAIQAFAJAAALQAAALgDAIQgEAIgGAFIgKgFIgQgFIgRgDIgQgCQgPAAgHAEQgIADAAAIQAAAFAEADQAFAEALADIAPADQApAKATATQASASAAAcQAAAkgZAVQgaAVgwAAQgTAAgQgDg");
	this.shape_32.setTransform(703.8,310.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgzB4QgIgCgEgEQgGgEgDgIQgDgGAAgNIAAiOQAAgLAEgIQADgIAIgGQAFgFAMgGIAXgJIAYgGQAOgCAMAAQAWAAALAJQANAJAAAUQAAAGgCAHIgEALIgTABIglAHIgOAFIAACiIghAEQgKAAgIgBg");
	this.shape_33.setTransform(684.2,310.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgMCqQgJgCgFgEQgFgEgDgIQgDgGAAgMIAAjCIAigEQAJAAAIABQAIACAFAEQAFAEADAIQADAHAAAMIAADCIgiADQgJABgHgCgAgdhhQgMgNABgRQgBgSAMgNQALgNASAAQATAAALANQAMALAAAUQAAASgMAMQgLANgTAAQgSAAgLgNg");
	this.shape_34.setTransform(668,305.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhKCQQgIgBgFgFQgGgEgCgIQgDgIAAgMIAAjOQAAgVALgMQAMgMASAAICUAAQADAGACAIQADAKAAAJQAAATgHAHQgIAIgMAAIhdAAIAAA2IBgAAQAEAFADAJQACAIAAAJQAAATgHAHQgIAIgMAAIhNAAIAABlQgHACgIAAIgVACQgLAAgHgCg");
	this.shape_35.setTransform(650.8,307.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AghB0QgVgIgSgQQgQgPgKgYQgKgYAAgfQAAghAKgVQAJgYAQgOQAPgOAVgIQAUgHAUAAQAWABAVAHQATAIAOANQAPAPAHARQAIASAAAXQAAAQgJAHQgIAJgPACIhuASQAFAQAQAIQAPAIASAAQAQAAATgFQARgGAJgGQAIAFAEAJQAFAHAAALQAAAVgSAKQgOAJgTACQgRAEgQAAQgagBgWgHgAgPg8QgIAFgFAFQgEAHgDAHQgDAJAAAGIBLgOQgBgJgIgJQgJgKgQAAQgLAAgHADg");
	this.shape_36.setTransform(616.9,310.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AA3CeQgIgCgGgEQgEgDgDgJQgEgGAAgMIAAhrQABgSgKgIQgJgIgMAAQgIAAgJADQgIACgFADIAACnIgiADQgJABgIgCQgJgCgFgEQgFgEgDgIQgCgFAAgNIAAkVIAhgDIASABQAIACAFAEQAFADADAJQADAGAAAMIAAAvQADgCAOgDQANgDANgBQAsAAAZAZQAZAXAAAuIAACRIgiADQgLABgHgCg");
	this.shape_37.setTransform(591.6,306.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgwB+QgWgTABgrIAAjLIANgDIAUgCQATAAAMAHQAKAIgBAYIAAAeIA6AAIAGANQACAJAAAIQAAARgGAHQgHAIgMAAIgpAAIAABHQAAAMAIAGQAHAFANAAIAOgBIAMgEQAEAFAEAHQACAHAAAJQAAATgMAKQgNAMggAAQgmAAgVgTg");
	this.shape_38.setTransform(570.2,308.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AggB0QgWgIgSgQQgRgQgJgXQgKgZAAgeQAAggAKgWQAJgWAQgQQAPgNAUgJQAVgHAUAAQAWABAVAHQAUAIANANQAPAPAHARQAIATAAAWQAAAQgIAHQgKAJgOACIhtASQAEAQAQAIQAOAIAUAAQAQAAASgFQAPgFAMgHQAHAFAFAJQAEAHABALQAAAVgUAKQgNAJgSACQgSAEgQAAQgagBgVgHgAgPg8QgIAGgFAEQgEAFgDAJIgDAPIBMgOQgCgJgIgJQgJgKgQAAQgKAAgIADg");
	this.shape_39.setTransform(539.6,310.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAnCYQgMgIgMgRIgsg7IAABXIgiAEQgKAAgHgBQgJgCgEgEQgGgEgCgIQgDgGAAgNIAAkTIAOgDIATgCQAKAAAIACQAIABAFAEQAFAFAEAHQACAHAAAMIAAB9IBMhTQAYAAANALQAOAMAAAQQABAHgDAGQgDAHgEAFQgFAHgHAGIgrAnIBHBNQgCAWgKAMQgKAMgTAAQgOAAgLgIg");
	this.shape_40.setTransform(515.5,306.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgqB2QgQgEgRgJQgNgLgIgOQgGgQgBgTQAAggASgRQAUgRAmgFIA4gHIAAgDQABgOgLgFQgLgHgWAAQgRABgPADQgOADgQAGQgFgDgEgKQgEgIAAgKQAAgMAFgHQAGgIALgFQAPgGAQgCQAUgCANgBQAWABAVAFQATAFAPALQAOAKAHARQAIARAAAWIAABqQABAMgHAIQgGAIgJAGQgeASg0ABQgXgBgTgFgAgBAWQgMACgJAEQgHAFgBAKQABAKAGAFQAHAGAQAAIARgBQAIgCAFgDIAAgmg");
	this.shape_41.setTransform(489.9,310.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgPCRQgIgBgGgFQgEgEgEgIQgCgIAAgMIAAi4IhDAAQgDgFgDgJQgDgKABgJQgBgUAJgHQAHgIANgBIDBAAQADAFADAKQACAKAAAJQAAATgHAIQgJAIgMAAIgxAAIAADbQgGACgKABIgUACQgJAAgIgCg");
	this.shape_42.setTransform(465.9,307.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AiKFDQgVgFgPgLQgOgMgIgTQgIgUAAggIAAmBQAAgeALgVQAJgUAUgSQASgQAdgOQAegOAfgKQAigKAggGQAhgFAlAAQA6AAAhAXQAiAYAAA2QAAASgFARQgFASgHAOQgWAAgeACQgcAEgXAEIgwALQgXAGgOAIIAAG1QgJADgcAFQgYADgeAAQgcAAgTgDg");
	this.shape_43.setTransform(1319.7,225.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhZE3Qg+gWgtgqQgsgqgahAQgahAAAhWQAAhVAag9QAag9AqgnQApgnA3gTQA2gSA4AAQA/AAA0AUQA1AVAmAkQAlAjAVAzQAVAyAAA7QAAAsgXAWQgXAXgpAHIknAvQAOArAoAVQApAVAzAAQAyAAAsgOQAsgNAcgSQATAOAMAWQAOAXAAAaQAAA6gzAcQgmAWgwAHQguAIgsAAQhHAAg7gVgAgqiiQgUALgOAQQgMAQgIAUQgGATgCAVIDNgkQgEgagXgZQgWgagsAAQgcAAgWAKg");
	this.shape_44.setTransform(1260.1,226.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AiKFDQgWgFgOgLQgOgMgIgTQgIgUAAggIAAmBQAAgeALgVQAJgTAUgTQATgQAcgOQAegOAfgKQAigKAggGQAhgFAlAAQA6AAAhAXQAiAYAAA2QAAASgFARQgFASgHAOQgWAAgeACQgcAEgXAEIgwALQgXAGgOAIIAAG1QgJADgcAFQgZADgdAAQgcAAgTgDg");
	this.shape_45.setTransform(1204.4,225.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AiAE1Qg5gXgqgrQgpgrgXg+QgXg9AAhNQAAhMAXg9QAXg+ApgrQAqgrA5gXQA5gXBHAAQBHAAA6AYQA4AXArArQAqAtAWA8QAXA9AABLQAABQgXA9QgXA+gpArQgrArg4AVQg7AWhGAAQhFAAg7gXgAhNh3QgcAqAABNQAABOAdApQAcAqAxAAQAzAAAbgqQAbgqAAhNQAAhMgcgrQgcgpgyAAQgxAAgcApg");
	this.shape_46.setTransform(1142.5,226.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgkGqQgWgEgNgLQgPgNgHgTQgIgTAAghIAAroIAngHQAagFAaAAQAbAAAUAEQAVAEAOALQAPANAHATQAIAVAAAfIAALoIgnAHQgaAFgaAAQgbAAgUgEg");
	this.shape_47.setTransform(1090.5,215.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AjtGxQgUgFgPgLQgOgLgIgUQgGgVgBgfIAApoQAAgjAOgWQAPgWAXgSQAngaA1gPQA3gPBFAAQBJAAA8AUQA+ATAtAqQAsAqAZA9QAZA/AABWQAABRgVA+QgWA9goAqQgoAqg3AUQg3AVhEAAQg0AAgtgRIAADWQgKADgcAFQgaAEgcAAQgcAAgUgDgAhDkDQgSAGgMAIIAAEaQAOAIAQAFQAUAFAQAAQB7AAAAidQAAhSgegoQgegog5AAQgWAAgUAFg");
	this.shape_48.setTransform(1039.8,236.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("ABqEnQgcgcgYglIhAhjIh6C9IgaABQg8AAghgbQgggbAAgoQAAgeAOgYQAPgaAggnIBhh3IihjJQAJgxAcgfQAdgfAqAAQAoAAAVAVQAVATAbAmIBMBsICBi6QBCAAAmAZQAnAZAAArQAAAPgFAPQgFAOgHANQgKARgMAQIhvCJICeDdQgGAygeAbQgeAdgqAAQgugCgbgbg");
	this.shape_49.setTransform(972.3,226.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AiaGHQg0AAgeggQgeggAAg3IAAofQAAg3AeggQAeggA0AAIGLAAQAJAOAGAXQAHAYAAAZQAAAwgUAVQgTAVghAAIj9AAIAAB3IENAAQAIAOAHAXQAHAWAAAaQAAAwgTAVQgUAUggAAIjcAAIAACHIE0AAQAIAPAHAWQAGAXAAAaQAAAxgTAVQgUAVghAAg");
	this.shape_50.setTransform(909.3,218.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CA0303").s().p("AibGHQgzAAgeggQgeggAAg3IAAofQAAg3AeggQAeggAzAAIGMAAQAIAOAHAXQAGAZAAAYQAAAxgUAUQgTAVghAAIj8AAIAAB3IENAAQAJAOAGAXQAHAYAAAYQAAAwgUAVQgTAUggAAIjcAAIAACHIEzAAQAJAPAGAWQAHAYAAAZQAAAxgUAVQgUAVggAAg");
	this.shape_51.setTransform(819.5,218.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CA0303").s().p("AiCGRQgwgKgjgSQgjgTgUgbQgUgcAAgkQAAglAVgbQAUgaAYgOQAgAbAyAWQAyAUA5AAQA5AAAZgTQAYgTAAgaQAAgagUgNQgSgOgjgNIgygSQgtgQgzgXQgrgTgggcQgfgcgRgnQgSgpAAg3QAAhuBPhBQBPhCCMAAQAxAAAvAIQAsAIAhAQQAgARARAYQATAZAAAiQAAAggPAZQgPAYgUAQQgagSgtgNQgsgOg1AAQg0AAgaAQQgZARAAAYQAAATAPAMQAQAMAfALIA/AWQBwAmA9A7QA9A8AABnQAABthRBDQhQBEibAAQg1AAgygKg");
	this.shape_52.setTransform(752.4,218.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CA0303").s().p("ADAGNQgVgFgLgKQgOgLgGgQQgIgPgHgYIgVhYIjYAAIgUBPIgTBQQgQAGgUAFQgSAEgbAAQg8AAgegWQgdgXAAgnQgBgTAGgRIAKgrQAIggAPg2IAhhvICGmXQAVgNApgLQApgMAqAAQA6AAAwATQAtASAOAoQAVBAAaBcIAyC2IBbFdQgOARgcAMQgeAKgnAAQgeAAgTgFgAgohPQgVBEgRBBICUAAIgiiGIggh3IgGAAg");
	this.shape_53.setTransform(681.5,218.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CA0303").s().p("AiaGHQg0AAgeggQgeggAAg3IAAofQAAg3AeggQAfggAzAAIGLAAQAJAOAGAXQAHAZgBAYQABAxgVAUQgSAVgiAAIj8AAIAAB3IENAAQAJAOAGAXQAHAYAAAYQAAAwgUAVQgSAUghAAIjcAAIAACHIEzAAQAJAPAGAWQAHAXAAAaQAAAxgTAVQgUAVghAAg");
	this.shape_54.setTransform(612.2,218.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(454.3,172.4,1009.8,158.3), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhYpAomQkAABi2i2Qi1i0AAkAMAAAg94QAAkAC1i2QC2i0EAgBMCxTAAAQEAABC2C0QC1C2AAEAMAAAA94QAAEAi1C0Qi2C2kAgBg");
	mask.setTransform(629.3,259.9);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A80203","#C9221F"],[0,1],0,259.9,0,-259.8).s().p("EhiUAomMAAAhRMMDEpAAAMAAABRMg");
	this.shape.setTransform(629.3,259.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,1258.6,519.7), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	mask.setTransform(960,540);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAbQgJgMAAgPQAAgPAJgLQAKgLAPAAQARAAAJALQAJAKAAAQQAAAQgJALQgJALgRAAQgPAAgKgLg");
	this.shape.setTransform(1072.3,680);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggBhQgOgCgIgEQgJgFgGgIQgFgHAAgKQAAgIADgHQAEgHAFgEQAKAFAPAGQAPAFAPAAQAKAAAGgDQAHgEAAgGQgBgFgEgDQgDgDgKgDIgLgCQgfgGgQgOQgPgNAAgbQAAgOAGgMQAFgLALgIQAKgHAPgEQAPgFAQAAQAMAAANADQAKABAKAEQAKAFAEAHQAFAHAAAIQAAAJgDAHQgDAGgFAEIgIgDIgbgIIgNAAQgLgBgFADQgHAEAAAFQAAAFAEACQAEAEAIACIALACQAiAIAQAPQAOAOAAAYQAAAdgVARQgTAQgoAAQgRAAgLgDg");
	this.shape_1.setTransform(1059.4,673.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnBmQgRgQAAgiIAAikIALgDQAIgBAIAAQAQAAAJAGQAIAGAAATIAAAZIAuAAIAFAKIACAOQAAANgGAHQgFAGgKAAIggAAIAAA5QgBAKAHAEQAFAEALAAIAMgBIAKgCIAFAJQADAGAAAHQAAAPgLAJQgLAJgZAAQgeAAgSgPg");
	this.shape_2.setTransform(1043.6,672);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAtBhQgHgCgEgDQgEgDgDgGQgCgGAAgKIAAhaQAAgMgGgFQgGgGgMABIgNABQgGACgGAEIAACEIgLADIgQABIgPgBQgGgCgEgDQgFgDgBgGQgDgHAAgJIAAhyQAAgKAEgHQAFgHAGgFQANgJASgGQATgGAVAAQApAAAWATQAWATAAAiIAAB3IgMADIgQABg");
	this.shape_3.setTransform(1025.4,673.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaBdQgSgGgOgNQgOgMgHgUQgIgTAAgZQAAgZAIgTQAHgRANgNQAMgLARgGQARgGAPABQATAAAQAFQAQAHALAKQAMAMAFAPQAHAOAAASQAAANgHAGQgHAIgMABIhYAOQAEANAMAHQALAFAQAAQAQAAAMgDQANgEAIgFQAHAEADAGQAEAHAAAIQAAASgPAHQgMAIgOABQgMADgPAAQgUgBgSgGgAgMgwQgHADgDAFQgEAFgCAGIgCAMIA8gLQgBgIgHgHQgGgHgOAAQgIAAgGACg");
	this.shape_4.setTransform(1005.1,673.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABcBhQgGgCgFgDQgFgEgCgFQgCgHAAgJIAAhbQAAgLgGgGQgGgEgLAAQgGgBgFADQgFADgDACIAAADIAACBIgLADIgQABIgNgBQgGgCgFgDQgEgEgCgFQgCgGgBgKIAAhbQAAgLgGgGQgHgEgJAAQgIAAgDABIgIAEIAACGIgMADIgQABIgOgBQgHgCgEgDQgEgEgDgFQgCgGAAgKIAAhzQABgLADgFQAFgHAHgFQAMgJASgGQATgGATAAQAPAAAOAFQAOAEAKAIQAJgGAPgGQANgFAUAAQANAAAOAEQAMAEALAIQAJAHAIAPQAFANABAVIAAB3IgMADIgQABg");
	this.shape_5.setTransform(980,673.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaBdQgSgGgOgNQgNgMgIgUQgIgSAAgaQAAgaAIgSQAHgRANgNQAMgLARgGQARgGAPABQATAAAQAFQARAHAKAKQAMAMAGAPQAGAQAAAQQAAANgHAGQgGAIgNABIhYAOQAEAMAMAIQAMAFAPAAQARAAALgDQANgEAIgFQAGADAEAHQAEAHAAAIQAAASgPAHQgLAIgPABQgMADgPAAQgUgBgSgGgAgMgwQgHAEgDAEQgEAFgCAGIgDAMIA9gLQgBgHgHgIQgHgHgNAAQgHAAgHACg");
	this.shape_6.setTransform(954.9,673.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoBhQgHgCgEgDQgFgEgCgFQgCgHAAgJIAAhzQAAgJADgGQADgGAGgFIAOgJIASgHIATgFIAVgCQAQAAALAHQALAIgBAQQABAFgCAFIgDAKIgQAAIgdAGIgMAEIAACCIgLADIgQABg");
	this.shape_7.setTransform(938.2,673.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKCJQgGgBgFgDQgEgEgCgFQgDgHAAgJIAAicIAMgCQAIgBAIgBIANABQAHACAEAEQAEACACAHQADAGAAAKIAACbIgMACQgIABgIAAgAgXhOQgJgJAAgQQAAgOAJgKQAJgKAOAAQAPAAAJAKQAJAKAAAOQAAAQgJAJQgJAKgPAAQgOAAgJgKg");
	this.shape_8.setTransform(925.1,669.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggBdQgPgFgNgKQgMgJgHgQQgGgPAAgWIAAhtIALgCIAQgBIAPABQAGACAEADQAEACADAHQACAGAAAKIAABRQAAAQAHAHQAIAHAMAAQAJAAAFgCIAIgDIAAiGIALgCIAQgBIAOABQAHACAEADQAEADADAGQACAGAAAKIAAB0QAAATgPAKQgOAJgQAEQgRAEgVAAQgTAAgQgEg");
	this.shape_9.setTransform(909.5,674);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAwCCQgGgCgEgDQgFgDgCgGQgCgGAAgKIAAglIgOAEIgPABQgSAAgRgGQgQgGgNgMQgMgNgHgSQgGgQAAgaQAAgaAHgRQAIgUAMgMQANgMATgHQASgHAWAAQAVAAARAGQARAFAKAIQAHAFAEAHQAEAHAAAKIAADRQgEACgHAAQgIACgIAAgAgRhCQgLAMAAAYQAAAaALAKQAJALASAAQANAAAGgGIAAhWQgDgCgEAAIgKgBQgTAAgKAMg");
	this.shape_10.setTransform(888.1,676.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaBdQgSgGgOgNQgNgMgIgUQgIgSAAgaQAAgaAIgSQAHgRANgNQAMgLARgGQARgGAPABQAUAAAPAFQAQAHALAKQAMAMAGAPQAGAQAAAQQAAANgHAGQgGAIgNABIhYAOQADAMANAIQAMAFAPAAQARAAALgDQANgEAJgFQAFADAFAHQADAHAAAIQAAARgPAIQgMAIgOABQgNADgOAAQgUgBgSgGgAgMgwQgGAEgEAEQgEAFgCAGIgDAMIA9gLQgBgHgHgIQgGgHgOAAQgHAAgHACg");
	this.shape_11.setTransform(868.1,673.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgpBhQgGgCgEgDQgFgEgCgFQgCgGAAgKIAAhzQAAgJADgGQADgGAFgFIAPgJIASgHIATgFIAVgCQAQAAALAHQAKAIAAAQQAAAFgBAFIgEAKIgPAAIgeAGIgLAEIAACCIgLADIgQABg");
	this.shape_12.setTransform(851.4,673.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaBdQgSgGgOgMQgOgNgHgUQgIgTAAgZQAAgZAIgTQAHgRANgNQAMgLARgGQARgGAPABQATAAAQAFQAQAHALAKQAMANAFAOQAHAOAAASQAAANgHAGQgHAIgMABIhYAOQAEANAMAHQAMAGAPAAQAPAAANgEQAOgFAIgEQAGAEADAGQAEAHAAAIQAAASgPAHQgMAIgOABQgMADgPAAQgUgBgSgGgAgMgwQgGADgEAFQgEAFgCAGIgCAMIA8gLQgBgIgHgHQgGgHgOAAQgIAAgGACg");
	this.shape_13.setTransform(1486.3,630.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggBdQgQgFgNgKQgMgKgGgPQgGgOAAgXIAAhsIALgDIAQgBIAOABQAHACAEADQADACADAHQADAFAAALIAABRQAAARAHAGQAIAHAMAAQAJAAAEgCIAJgCIAAiGIALgDIAQgBIAPABQAGACAEADQADACAEAHQACAGAAAKIAAB0QAAATgPAKQgOAJgQAEQgSAEgUAAQgSAAgRgEg");
	this.shape_14.setTransform(1465.9,630.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAxCCQgHgCgEgDQgFgEgCgFQgCgGAAgKIAAglIgNAEIgQABQgRAAgSgGQgQgGgMgMQgNgNgGgSQgHgRAAgZQAAgYAHgTQAHgTANgNQAOgMASgHQASgHAWAAQAVAAARAGQARAFAKAIQAIAFADAHQAEAGAAALIAADRQgDACgIAAQgIACgIAAgAgRhCQgKAMAAAYQAAAZAKALQAJALASAAQANAAAHgGIAAhWIgIgCIgKgBQgSAAgLAMg");
	this.shape_15.setTransform(1444.4,633.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgKCJQgGgBgFgDQgEgEgCgFQgCgHgBgJIAAicIAMgCIAQgCIANABQAHACAEAEQAEACADAHQACAFAAALIAACbIgMACQgIABgHAAgAgXhOQgJgJAAgQQAAgPAJgJQAJgKAOAAQAQAAAIAKQAKAKgBAOQABAQgKAJQgIAKgQAAQgOAAgJgKg");
	this.shape_16.setTransform(1429.2,626.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAsBhQgFgCgFgDQgFgDgCgGQgCgHAAgJIAAhaQAAgMgHgFQgFgGgMABIgMABQgIADgFADIAACEIgLADIgQABIgOgBQgHgCgEgDQgEgEgCgFQgDgHAAgJIAAhyQAAgLAEgGQAEgGAHgGQANgKATgFQATgGAUAAQApAAAWATQAWATAAAiIAAB3IgLADIgQABg");
	this.shape_17.setTransform(1413.6,630.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgfBdQgQgFgNgKQgMgJgHgQQgGgPAAgWIAAhsIALgDIARgBIANABQAHACAFADQAEADACAGQADAGAAAKIAABRQAAARAGAGQAJAHAMAAQAIAAAFgCIAIgCIAAiGIALgDIAQgBIAPABQAGACAEADQAFADACAGQACAFAAALIAAB0QAAATgPAKQgOAJgQAEQgRAEgVAAQgSAAgQgEg");
	this.shape_18.setTransform(1392.7,630.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgpBhQgGgCgEgDQgFgEgCgFQgDgHABgJIAAhzQgBgJAEgGQAEgHAEgEIAPgJIASgHIATgFIAVgCQARAAAKAHQAKAIAAAQQAAAFgBAFIgEAKIgPAAIgeAGIgLAEIAACCIgLADIgPABg");
	this.shape_19.setTransform(1368.2,630.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AggBdQgPgFgNgKQgMgJgHgQQgGgPAAgWIAAhsIALgDIAQgBIAPABQAGACAEADQAEACADAHQACAGAAAKIAABRQAAAQAHAHQAIAHAMAAQAJAAAFgCIAIgCIAAiGIALgDIAQgBIAOABQAHACAEADQAEADADAGQACAGAAAKIAAB0QAAATgPAKQgOAJgQAEQgRAEgVAAQgTAAgQgEg");
	this.shape_20.setTransform(1349.7,630.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgmBdQgRgIgMgMQgMgMgIgUQgHgTAAgWQAAgVAHgUQAIgSAMgMQAMgNARgIQATgGATAAQAVAAARAGQASAJAMAMQANANAGASQAHATAAAVQAAAXgHATQgGAUgNAMQgMANgSAGQgQAHgWAAQgVgBgRgGgAgXgiQgHALgBAXQAAAYAJAMQAIAMAPAAQAOABAIgNQAIgMAAgYQAAgXgIgLQgIgNgPAAQgOAAgJANg");
	this.shape_21.setTransform(1328.7,630.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag0CWQgIgHAAgPQAAgKADgLIBEkGIASgBQAPAAAIAGQAJAGAAAPQAAAMgDAJIhEEIIgSABQgPAAgJgHg");
	this.shape_22.setTransform(1312,628.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag4B4QgJgKgCgPIAXgWQAMgMAJgLQgHgCgGgHQgHgHgJgUIgIgVIgJgbIgKgkIgLgtQAFgGAIgEQAJgDAKAAQAMgBAJAGQAIAGAEAPIAbBpIACAAIAeh8QANgHAPAAQAMgBAJAGQAIAGAAAPQAAAHgCAQIgHAeIgKAfIgYA9QgEAKgJAQQgIAQgKAOQgLANgGAGQgHAGgIADQgHADgJAAQgQAAgJgKg");
	this.shape_23.setTransform(1295.8,633.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("ABcBhQgHgCgEgDQgFgEgCgFQgCgHAAgJIAAhbQAAgLgGgGQgGgEgLAAQgGgBgEADQgHADgCACIAAADIAACBIgLADIgQABIgNgBQgGgCgFgDQgFgEgBgFQgDgGAAgKIAAhbQAAgLgGgGQgHgEgJAAQgIAAgDACIgIADIAACGIgMADIgQABIgOgBQgHgCgEgDQgFgEgCgFQgCgGAAgKIAAhzQAAgLAFgFQAEgHAHgFQAMgJASgGQATgGATAAQAPAAAOAFQAOAEAKAIQAJgGAPgGQANgFAUAAQANAAAOAEQAMAEALAIQAJAHAHAPQAHAOAAATIAAB4IgMADIgQABg");
	this.shape_24.setTransform(1270.8,630.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAtBhQgIgCgDgDQgFgEgCgFQgCgGAAgKIAAhaQAAgMgGgFQgGgGgMABIgNABIgMAGIAACEIgLADIgQABIgPgBQgGgCgEgDQgFgDgCgGQgCgFAAgLIAAhyQAAgKAEgHQAFgHAGgFQAMgJATgGQATgGAVAAQApAAAWATQAWATAAAiIAAB3IgMADIgQABg");
	this.shape_25.setTransform(1237.8,630.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgmBdQgQgHgNgNQgMgMgHgUQgHgRAAgYQAAgXAHgSQAHgTAMgLQAMgOARgHQASgGAUAAQAUAAATAGQARAIAMANQANAOAGARQAHARAAAXQAAAZgHARQgGATgNANQgNANgQAGQgSAHgVAAQgWgBgQgGgAgWgiQgJAMAAAWQAAAXAJANQAIAMAOAAQAPABAJgNQAIgNAAgXQAAgWgJgMQgIgNgPAAQgOAAgIANg");
	this.shape_26.setTransform(1216.8,630.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AggB7QgTgHgMgNQgNgMgHgTQgGgSAAgXQAAgZAHgSQAIgUAMgLQAMgNASgGQARgGATAAQAHAAAHACIALADIAAg/IALgCIARgBIAOABQAHABADADQAFAEACAGQACAGAAAJIAAC2QAAASgQALQgLAIgQAFQgPAFgXAAQgYAAgRgHgAgRgFQgKALAAAZQAAAYAJAMQAKAMARAAQAIAAAEgCQAGgCACgDIAAhUQgHgEgKAAQgTAAgKALg");
	this.shape_27.setTransform(1188.1,627.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgaBdQgSgGgOgMQgOgNgHgUQgIgTAAgZQAAgZAIgTQAHgRANgNQAMgLARgGQARgGAPABQATAAAQAFQAQAHALAKQAMANAFAOQAHAOAAASQAAANgHAGQgHAIgMABIhYAOQAEANAMAHQAMAGAPAAQAPAAANgEQAOgFAIgEQAGAEADAGQAEAHAAAIQAAASgPAHQgMAIgOABQgMADgPAAQgUgBgSgGgAgMgwQgGADgEAFQgEAFgCAGIgCAMIA8gLQgBgIgHgHQgGgHgOAAQgIAAgGACg");
	this.shape_28.setTransform(1168.1,630.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AggBhQgOgCgJgEQgJgGgFgHQgFgHAAgKQAAgJAEgGQADgHAGgEQAHAFAQAGQAPAFARAAQAIAAAIgDQAFgEAAgGQAAgFgEgDQgEgEgKgCIgKgCQgfgGgQgOQgPgNAAgbQAAgNAGgNQAFgLALgIQALgIAOgDQAOgFARAAQAMAAANADQAKABAKAEQAKAFAEAHQAFAGAAAJQAAAJgDAHQgDAGgEAEIgJgDIgNgFIgOgDIgMAAQgLAAgHACQgGAEAAAFQAAAFADACQAEADAJADIALACQAiAIAQAPQAOAOAAAYQAAAdgUARQgWAQgmAAQgSAAgKgDg");
	this.shape_29.setTransform(1149.5,630.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgiBgQgOgDgMgIQgMgKgFgKQgGgNABgPQAAgbAOgNQAPgPAfgDIAugFIAAgDQAAgLgJgEQgJgGgRABQgNAAgNACQgPAEgJAEQgFgDgDgHQgDgHAAgIQAAgKAEgGQAFgGAKgFQANgEALgBQANgCAOAAQASgBAQAFQAPAEANAIQAKAJAHAOQAGANAAASIAABVQAAAKgFAHQgFAGgIAFQgXAPgqAAQgTAAgPgEgAAAATQgLAAgGAEQgGAEgBAHQABAJAFAEQAFAFANAAIANgCIALgDIAAgfg");
	this.shape_30.setTransform(1130.3,630.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AguB8QgRgGgLgIQgQgMAAgTIAAjNIAMgCIAQgBIAOABQAGABAFADQAEAFACAFQACAIAAAHIAAAmQALgEAGgBIARgCQASAAAPAHQAPAGAMANQAMAMAHATQAHAQAAAaQAAAYgHATQgHATgNAMQgMANgTAGQgSAGgVAAQgYAAgQgGgAgSgPIgLAFIAABTIAJAEQAGACAIAAQAQAAAJgMQAJgMAAgYQAAgZgJgLQgJgLgPAAQgHAAgGABg");
	this.shape_31.setTransform(1110.7,627.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgoAuQAIgYAFgXIAJguQAGgDAJgDQAIgDAIABQAMAAAIAFQAIAFAAAOQAAAJgCAJIgFATIgJATQgEAJgFAGQgFAJgIAEQgHADgJAAQgQAAgLgKg");
	this.shape_32.setTransform(1087.4,638.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag4B4QgJgKgCgPQAMgKALgMQAMgLAJgMQgGgCgHgHQgHgHgIgUIgSgwIgVhRQAGgGAHgEQAKgDAJAAQAMgBAJAGQAIAGAEAPIAcBpIABAAIAeh8QANgHAPAAQANgBAIAGQAIAGAAAPQAAALgCAMQgDAPgEAPIgJAfIgMAgQgHATgGAKIgMAaQgNAWgGAIQgJANgIAGQgGAGgIADQgHADgKAAQgPAAgKgKg");
	this.shape_33.setTransform(1073.7,633.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgpBhQgGgCgEgDQgFgEgCgFQgCgGAAgKIAAhzQAAgJADgGQADgGAFgFIAPgJIASgHIATgFIAVgCQAQAAALAHQAKAIAAAQQAAAFgBAFIgEAKIgPAAIgeAGIgLAEIAACCIgLADIgQABg");
	this.shape_34.setTransform(1057.1,630.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgiBgQgOgDgMgIQgMgKgFgKQgFgNAAgPQAAgbAOgNQAPgPAfgDIAugFIAAgDQAAgLgJgEQgJgGgRABQgNAAgNACQgOAEgKAEQgEgDgDgHQgEgHAAgIQAAgKAFgGQAEgGAJgFQAOgEALgBQAMgCAPAAQASgBARAFQAOAEANAIQALAJAGAOQAGANAAASIAABVQAAAKgFAHQgFAGgHAFQgYAPgqAAQgUAAgOgEgAgBATQgKAAgGAEQgHAEABAHQgBAJAGAEQAFAFANAAIAOgCIAKgDIAAgfg");
	this.shape_35.setTransform(1038.9,630.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AggBhQgOgCgIgEQgJgFgGgIQgFgHAAgKQAAgIAEgHQADgHAGgEQAKAGANAFQAPAFARAAQAIAAAIgDQAFgEAAgGQABgFgFgDQgEgEgKgCIgKgCQgfgGgQgOQgPgNAAgbQAAgNAGgNQAFgLALgIQALgIAOgDQAOgFARAAQAMAAANADQAKABAKAEQAKAFAEAHQAGAHgBAIQABAIgEAIQgDAGgFAEIgIgDIgNgFIgOgDIgMAAQgLAAgHACQgGAEAAAFQAAAFADACQAEADAJADIALACQAiAIAPAPQAPAOAAAYQAAAdgUARQgWAQgmAAQgSAAgKgDg");
	this.shape_36.setTransform(1020.8,630.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AghBhQgOgCgHgEQgKgFgFgIQgFgGAAgLQAAgJADgGIAJgLQAJAFAPAGQAPAFAQAAQAKAAAGgDQAHgEAAgGQgBgFgEgDQgEgEgJgCIgLgCQgfgGgQgOQgPgNAAgbQAAgNAFgNQAHgLAKgIQAKgIAPgDQAPgFAQAAQANAAAMADQAJABALAEQAJAFAFAHQAFAGAAAJQAAAJgDAHQgDAGgFAEIgJgDIgagIIgMAAQgLAAgHACQgHAEAAAFQAAAEAEADQAFADAIADIALACQAiAIAPAPQAPAOAAAYQAAAdgVARQgUAQgnAAQgRAAgMgDg");
	this.shape_37.setTransform(1003.1,630.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgaBdQgSgGgOgMQgMgMgJgVQgIgTAAgZQAAgZAIgTQAIgSAMgMQAMgLARgGQARgGAPABQAUAAAPAFQAQAHALAKQALALAHAQQAGAPAAARQAAAOgHAFQgGAIgNABIhYAOQAEAMAMAIQAMAGAPAAQAPAAANgEQANgEAJgFQAFADAEAHQAEAGAAAJQAAASgPAHQgLAHgPACQgMADgPAAQgTgBgTgGgAgMgwQgGAEgEAEQgEAFgCAGQgCAHAAAFIA8gLQAAgHgIgIQgGgHgOAAQgIAAgGACg");
	this.shape_38.setTransform(984.2,630.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgQBcQgTgGgNgOQgMgMgJgTQgHgTAAgVQAAgYAIgTQAIgTANgNQANgLASgIQARgFATAAQAaAAAOAKQAOAJAAARQAAAHgDAGQgDAGgFAFIgPgGQgJgDgKAAQgIAAgJADQgHAEgFAGQgHAFgDAJQgDAIgBAMQAAAZANALQAMALASABQAMgBAHgCIAOgGQAIAGADAGQAEAHgBAIQABARgOAIQgOAIgaABQgWAAgRgIg");
	this.shape_39.setTransform(965.5,630.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgaBdQgSgGgOgMQgOgNgHgUQgIgTAAgZQAAgZAIgTQAHgRANgNQAMgLARgGQARgGAPABQATAAAQAFQAQAHALAKQAMANAFAOQAHAOAAASQAAANgHAGQgHAIgMABIhYAOQAEANAMAHQAMAGAPAAQAPAAANgEQANgEAJgFQAGAEADAGQAEAHAAAIQAAASgPAHQgMAIgOABQgMADgPAAQgUgBgSgGgAgMgwQgGADgEAFQgEAFgCAGIgCAMIA8gLQgBgIgHgHQgGgHgOAAQgIAAgGACg");
	this.shape_40.setTransform(946.8,630.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAtBhQgHgCgEgDQgEgDgDgGQgCgGAAgKIAAhaQAAgMgGgFQgGgGgMABIgNABQgGACgGAEIAACEIgLADIgQABIgPgBQgGgCgEgDQgFgDgBgGQgDgHAAgJIAAhyQAAgKAEgHQAFgHAGgFQANgJASgGQATgGAVAAQApAAAWATQAWATAAAiIAAB3IgMADIgQABg");
	this.shape_41.setTransform(926.4,630.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgaBdQgSgGgOgMQgOgNgHgUQgIgTAAgZQAAgZAIgTQAHgRANgNQAMgLARgGQARgGAPABQATAAAQAFQAQAHALAKQAMANAFAOQAHAOAAASQAAANgHAGQgHAIgMABIhYAOQAEANAMAHQAMAGAPAAQAPAAANgEQANgEAIgFQAHAEADAGQAEAHAAAIQAAASgPAHQgMAIgOABQgMADgPAAQgUgBgSgGgAgMgwQgHADgDAFQgEAFgCAGIgCAMIA8gLQgBgIgHgHQgGgHgOAAQgIAAgGACg");
	this.shape_42.setTransform(898.9,630.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgpBhQgGgCgEgDQgEgDgDgGQgCgGAAgKIAAhzQAAgJADgGQADgGAGgFIAOgJIASgHIATgFIAVgCQARAAAKAHQAKAHAAARQAAAFgBAFQgBAEgDAGIgPAAIgeAGIgLAEIAACCIgKADIgRABg");
	this.shape_43.setTransform(882.2,630.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgaBdQgSgGgOgMQgNgNgIgUQgIgUAAgYQAAgYAIgUQAHgRANgNQALgKASgHQARgGAPABQATAAAQAFQARAHAKAKQAMANAGAOQAGAOAAASQAAANgHAGQgGAIgNABIhYAOQAEAMAMAIQANAGAPAAQAOAAANgEQANgEAIgFQAGADAEAHQAFAHAAAIQAAASgQAHQgLAIgPABQgNADgOAAQgUgBgSgGgAgMgwQgGADgEAFQgEAFgCAGIgDAMIA9gLQgBgIgHgHQgGgHgOAAQgHAAgHACg");
	this.shape_44.setTransform(864.3,630.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAsCAQgGgCgEgDQgFgEgCgFQgCgGAAgKIAAhVQAAgPgIgHQgHgGgKAAIgNACQgIACgDADIAACFIgMADIgQABIgNgBQgHgCgEgDQgEgDgDgGQgCgGAAgKIAAjeIAMgDIAPgBIAOABQAHACAEADQAEADACAGQADAFAAALIAAAmIAOgFQAKgCAKAAQAjAAAVATQAUATAAAlIAAB0IgMADIgPABg");
	this.shape_45.setTransform(843.9,627.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAaBSIgYhdIgZBiQgEAFgJADQgJADgMAAQgPAAgKgFQgLgDgEgJQgEgKgFgTIgUhcIgHgrQAGgGAIgEQAJgEAJAAQANAAAIAGQAIAGACAPIAOBrIACAAIAZhvIAOgHQAHgCAKAAQAOAAAIAEQAIAFADAIIAZBnIACAAIAOh+QAHgEAHgCQAGgCAJAAQAMAAAIAGQAJAGAAAOQAAAIgCAKIgaB5QgDANgDAGQgGAGgKACQgKADgMAAQgeAAgGgQg");
	this.shape_46.setTransform(819.1,630.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgoAuQAIgYAFgXIAJguQAGgDAJgDQAJgDAHABQAMAAAIAFQAIAFAAAOQAAAJgCAJQgCAKgEAJIgIATQgEAJgFAGQgFAJgIAEQgGADgKAAQgQAAgLgKg");
	this.shape_47.setTransform(792.7,638.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgKCAQgGgCgFgDQgEgEgCgFQgDgHAAgJIAAjeIAMgDIAQgBIANABQAGACAFADQAEADACAGQADAHAAAJIAADeIgMACQgIACgIAAg");
	this.shape_48.setTransform(783.9,627.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AghBgQgOgDgMgIQgMgJgFgLQgHgNAAgPQABgbAPgNQAPgPAegDIAugFIAAgDQAAgLgJgEQgIgGgSABQgNAAgNACQgOAEgJAEQgFgDgDgHQgDgHgBgIQAAgKAFgGQAFgGAJgFQANgEALgBQANgCAOAAQASgBARAFQAPAEAMAIQALAKAGANQAHANAAASIAABVQAAALgGAGQgEAGgIAFQgXAPgrAAQgTAAgOgEgAgBATQgJAAgHAEQgHAEABAHQAAAJAFAEQAGAFAMAAQAHAAAHgCQAIgBACgCIAAgfg");
	this.shape_49.setTransform(768.6,630.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAtBhQgHgCgEgDQgFgEgCgFQgCgGAAgKIAAhaQAAgMgHgFQgFgGgMABIgNABIgMAGIAACEIgLADIgQABIgOgBQgHgCgEgDQgEgDgCgGQgDgFAAgLIAAhyQAAgKAEgHQAFgHAGgFQAMgJATgGQATgGAVAAQApAAAWATQAWATAAAiIAAB3IgMADIgQABg");
	this.shape_50.setTransform(748.8,630.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgmBdQgQgHgNgNQgMgLgIgVQgGgRAAgYQAAgXAGgSQAIgTAMgLQAMgOARgHQASgGAUAAQAUAAASAGQARAIANANQANAOAGARQAHARAAAXQAAAZgHARQgGATgNANQgNANgRAGQgQAHgWAAQgWgBgQgGgAgWgiQgJAMAAAWQAAAXAJANQAIAMAOAAQAPABAJgNQAIgNAAgXQAAgWgJgMQgIgNgPAAQgOAAgIANg");
	this.shape_51.setTransform(727.7,630.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgKCJQgGgBgFgDQgDgDgDgGQgDgGAAgKIAAicIAMgCQAIgBAHgBIAOABQAHACADAEQAEACADAHQACAEAAAMIAACbIgLACIgQABgAgYhOQgJgJAAgQQAAgOAJgKQALgKANAAQAPAAAJAKQAJAKAAAOQAAAQgJAJQgJAKgPAAQgNAAgLgKg");
	this.shape_52.setTransform(712.1,626.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AggBhQgOgCgIgEQgJgFgGgIQgFgHAAgKQAAgIAEgHQAEgHAEgEQAKAFAPAGQAPAFAPAAQAJAAAHgDQAGgEABgGQAAgFgFgDQgEgEgJgCIgLgCQgfgGgQgOQgPgNAAgbQAAgOAGgMQAGgLAKgIQAKgIAPgDQAOgFARAAQANAAAMADQAKABAKAEQAKAFAEAHQAGAHgBAIQAAAJgDAHQgDAGgFAEIgIgDIgNgFIgOgDIgMAAQgLAAgHACQgGAEAAAFQAAAFAEACQAEADAIADIALACQAiAIAQAPQAOAOAAAYQAAAdgVARQgUAQgnAAQgRAAgLgDg");
	this.shape_53.setTransform(698.4,630.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AggBhQgPgCgIgEQgJgFgFgIQgFgGAAgLQAAgJADgGIAJgLQAJAFAPAGQAPAFAQAAQAKAAAGgDQAHgEAAgGQgBgFgEgDQgEgEgJgCIgLgCQgfgGgQgOQgPgNAAgbQAAgNAFgNQAHgLAKgIQAKgIAPgDQAPgFAQAAQAMAAANADQAIABANAEQAJAGAEAGQAFAGAAAJQAAAJgDAHQgDAGgEAEIgJgDIgagIIgOAAQgKAAgHACQgHAEAAAFQABAFAEACQADADAJADIALACQAiAIAPAPQAPAOAAAYQAAAdgVARQgUAQgnAAQgRAAgLgDg");
	this.shape_54.setTransform(680.7,630.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgaBdQgSgGgOgMQgNgNgIgUQgIgSAAgaQAAgaAIgSQAIgSAMgMQAMgLARgGQARgGAPABQAUAAAPAFQAQAHALAKQALALAHAQQAGAPAAARQAAAOgHAFQgGAIgNABIhYAOQAEAMAMAIQAMAGAPAAQAQAAAMgEQANgEAJgFQAFADAEAHQAEAGAAAJQAAASgPAHQgLAHgPACQgMADgPAAQgTgBgTgGgAgMgwQgGAEgEAEQgEAFgCAGIgCAMIA8gLQAAgHgIgIQgGgHgOAAQgHAAgHACg");
	this.shape_55.setTransform(661.7,630.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgtCDQgGgBgFgDQgEgEgDgGQgCgGAAgJIAAifQAAgUAGgOQAHgOAKgJQALgJAPgEQAPgEAPAAQAbAAAMAHQANAIAAASQAAAHgEAHQgCAGgEADIgOgDQgIgCgJAAQgPAAgKAGQgHAGAAANIAAANIA6AAQADAFABAFQACAGAAAIQAAAOgFAFQgGAGgKAAIgoAAIAAB6IgLACIgQABg");
	this.shape_56.setTransform(644.9,627);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgmBdQgRgIgMgMQgNgMgHgUQgGgRAAgYQAAgXAGgSQAHgSANgMQALgNASgIQASgGAUAAQAUAAASAGQASAIAMANQANAOAGARQAHATAAAVQAAAXgHATQgGATgNANQgNANgRAGQgQAHgWAAQgWgBgQgGgAgXgiQgIALAAAXQAAAYAJAMQAIAMAOAAQAQABAHgNQAJgNAAgXQAAgWgJgMQgIgNgPAAQgPAAgIANg");
	this.shape_57.setTransform(625.8,630.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgpBhQgHgCgDgDQgEgDgDgGQgCgGAAgKIAAhzQAAgJADgGQADgGAFgFIAPgJIASgHIATgFIAVgCQARAAAKAHQAKAHAAARQAAAFgBAFIgEAKIgPAAIgeAGIgLAEIAACCIgLADIgQABg");
	this.shape_58.setTransform(608.5,630.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AhGCCQgGgCgFgDQgEgDgCgGQgCgGAAgKIAAi4QAAgLAEgGQADgGAIgGQAMgIAQgEQAQgFAVAAQAVAAASAGQATAGANANQANAMAIATQAHATAAAZQAAAZgGARQgHATgMAMQgLANgRAGQgSAGgTAAQgNAAgPgFIAABAQgFACgHAAQgIACgIAAgAgThNIgKAEIAABUIAKAEIALABQAkAAAAguQAAgZgKgMQgIgLgRAAQgHAAgFABg");
	this.shape_59.setTransform(590.3,633.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AggB7QgSgHgNgNQgMgMgHgTQgHgTAAgWQAAgZAHgSQAHgTANgMQANgNARgGQARgGATAAQAHAAAHACIALADIAAg/IAMgCIAQgBIAOABQAGABAFADQAEAEACAGQACAFAAAKIAAC2QAAASgPALQgLAIgQAFQgQAFgXAAQgXAAgSgHgAgRgFQgKALAAAZQAAAXAKANQAKAMARAAQAHAAAEgCQAGgDADgCIAAhUQgIgEgKAAQgTAAgKALg");
	this.shape_60.setTransform(561.2,627.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgaBdQgSgGgOgMQgNgNgIgUQgIgSAAgaQAAgaAIgSQAHgRANgNQAMgLARgGQASgGAOABQAUAAAPAFQAQAHALAKQAMANAFAOQAHAQAAAQQAAANgHAGQgHAIgMABIhYAOQADAMANAIQANAGAOAAQAQAAAMgEQANgEAJgFQAEADAGAHQADAHAAAIQAAASgPAHQgMAIgOABQgNADgOAAQgUgBgSgGgAgMgwQgGAEgEAEQgDAFgDAGIgCAMIA8gLQgBgHgGgIQgIgHgNAAQgHAAgHACg");
	this.shape_61.setTransform(541.3,630.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgKCJQgGgBgFgDQgEgEgCgFQgDgHAAgJIAAicIANgCQAHgBAIgBIANABQAHACAEAEQAEACADAHQACAGAAAKIAACbIgMACQgHABgJAAgAgXhOQgKgLAAgOQAAgOAKgKQAJgKAOAAQAQAAAIAKQAJAKAAAOQAAAQgJAJQgIAKgQAAQgOAAgJgKg");
	this.shape_62.setTransform(526.3,626.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AguCDQgFgBgFgDQgFgEgCgGQgCgGAAgJIAAifQAAgUAHgOQAFgNAMgKQAKgJAPgEQAPgEAPAAQAbAAAMAHQANAIAAASQAAAIgDAGQgEAHgDACIgOgDQgIgCgJAAQgPAAgKAGQgHAGAAANIAAANIA6AAIAEAKQACAGAAAIQAAAOgGAFQgEAGgLAAIgnAAIAAB6IgMACIgQABg");
	this.shape_63.setTransform(514.3,627);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgKCJQgHgBgDgDQgGgEgCgFQgBgGAAgKIAAicIALgCQAHgBAJgBIANABQAGACAFAEQADACADAHQADAGAAAKIAACbIgMACIgQABgAgXhOQgJgJAAgQQAAgOAJgKQAIgKAPAAQAPAAAJAKQAKAJAAAPQAAAQgKAJQgJAKgPAAQgPAAgIgKg");
	this.shape_64.setTransform(500.7,626.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgKCAQgGgCgFgDQgEgDgCgGQgDgHAAgJIAAjeIAMgDIAQgBIANABQAGACAFADQAEAEACAFQADAHAAAJIAADeIgMACQgIACgIAAg");
	this.shape_65.setTransform(490.5,627.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgiBgQgPgEgLgHQgKgJgHgLQgFgNAAgPQgBgbAPgNQAPgPAfgDIAugFIAAgDQAAgLgJgEQgIgGgRABQgOAAgNACQgOAEgKAEQgDgDgFgHQgDgHAAgIQABgKAEgGQAEgGAJgFQAOgEAMgBQAMgCAOAAQATgBAQAFQAOAEANAIQALAKAHANQAFANAAASIAABVQAAALgEAGQgGAGgHAFQgXAPgrAAQgTAAgPgEgAAAATQgKAAgHAEQgHAEAAAHQAAAJAGAEQAGAFAMAAIAOgCQAIgBADgCIAAgfg");
	this.shape_66.setTransform(475.3,630.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AggBdQgPgFgNgKQgMgJgHgQQgGgPAAgWIAAhsIALgDIAQgBIAPABQAGACAEADQAEACADAHQACAGAAAKIAABRQAAAQAHAHQAIAHAMAAQAJAAAFgCIAIgCIAAiGIALgDIAQgBIAOABQAHACAEADQAEADADAGQACAGAAAKIAAB0QAAATgPAKQgOAJgQAEQgRAEgVAAQgTAAgQgEg");
	this.shape_67.setTransform(455.4,630.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAwCCQgGgCgEgDQgFgDgCgGQgCgGAAgKIAAglIgOAEIgPABQgSAAgRgGQgQgGgNgMQgMgNgHgSQgGgQAAgaQAAgaAHgRQAIgUAMgMQANgMATgHQASgHAWAAQAVAAARAGQARAFAKAIQAHAFAEAHQAEAHAAAKIAADRQgEACgHAAQgIACgIAAgAgRhCQgLAMAAAYQAAAaALAKQAJALASAAQANAAAGgGIAAhWQgDgCgEAAIgKgBQgTAAgKAMg");
	this.shape_68.setTransform(434,633.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgiBgQgPgEgKgIQgMgIgFgLQgHgNAAgPQAAgbAQgNQAOgPAfgDIAugFIAAgDQAAgLgJgEQgIgGgRAAQgOABgNACQgOAEgKAEQgDgDgFgIQgDgGAAgIQABgKAEgGQAFgGAIgFQAOgEALgBQANgCAOAAQATgBAQAFQAOAEANAIQALAKAHANQAFANABASIAABVQgBALgEAGQgFAGgIAEQgXAQgrAAQgTAAgPgEgAgBATQgJAAgHAEQgHAEAAAHQAAAJAGAEQAFAFANAAIAOgCQAHgBADgCIAAgfg");
	this.shape_69.setTransform(1464.6,587.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("ABcBhQgGgCgFgDQgEgDgCgGQgDgHAAgJIAAhbQAAgLgGgGQgFgEgLAAQgGgBgFADQgGADgDACIABADIAACBIgMADIgQABIgNgBQgGgCgFgDQgEgDgCgGQgDgHAAgJIAAhbQAAgLgGgGQgHgEgJAAQgHAAgEABIgIAEIAACGIgMADIgQABIgOgBQgGgCgFgDQgEgEgCgFQgDgHAAgJIAAhzQAAgLAFgFQADgGAIgGQANgKARgFQASgGAUAAQAPAAAOAFQAOADAKAJQAKgHAOgFQANgFAUAAQAMAAAPAEQANAEAKAIQAKAJAGANQAHAPAAASIAAB4IgMADIgQABg");
	this.shape_70.setTransform(1432.8,587.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AglBdQgSgHgNgNQgMgNgHgTQgGgTgBgWQABgVAGgTQAIgSALgNQANgNASgIQASgGATAAQAVAAARAGQASAJAMAMQANANAHASQAGAUAAAUQAAAXgGATQgHAUgNAMQgMANgSAGQgQAHgWAAQgVgBgQgGgAgXgiQgHALgBAXQABAYAHAMQAKAMAOABQAOgBAIgMQAIgMAAgYQAAgXgIgLQgIgNgPAAQgOAAgJANg");
	this.shape_71.setTransform(1407,587.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgpBhQgGgCgFgDQgEgEgCgFQgDgHAAgJIAAhzQABgIADgHQADgGAFgFIAPgJIASgHIATgFIAVgCQAQAAAMAHQAJAIABAQQgBAFgBAFIgEAKIgPAAIgeAGIgLAEIAACCIgKADIgQABg");
	this.shape_72.setTransform(1389.7,587.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgtCDQgHgBgEgDQgEgFgCgFQgDgGAAgJIAAifQAAgSAGgQQAGgNALgKQAMgJAOgEQAPgEAPAAQAbAAANAHQAMAIAAASQAAAIgDAGQgDAFgEAEIgOgDQgHgCgKAAQgQAAgIAGQgIAGAAANIAAANIA6AAIAEAKIACAOQAAAOgFAFQgGAGgJAAIgpAAIAAB6IgLACIgQABg");
	this.shape_73.setTransform(1374.7,583.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgaBeQgTgIgNgMQgNgMgIgUQgIgTAAgZQAAgZAIgTQAHgRANgNQALgKASgHQARgGAPABQATAAAQAFQAQAHALAKQAMANAFANQAHAPAAASQAAANgHAGQgHAIgMABIhYAOQADAMANAIQALAFAQAAQAQAAAMgDQANgEAIgFQAHAEADAGQAEAHAAAIQAAASgPAHQgMAHgOACQgNADgOAAQgUgBgSgFgAgMgwQgHADgDAFQgEAFgCAGIgCAMIA8gLQgBgIgHgHQgGgHgOAAQgIAAgGACg");
	this.shape_74.setTransform(1349.1,587.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgRBcQgRgGgOgOQgOgOgGgRQgIgSABgWQAAgXAIgUQAHgTAOgNQANgMARgHQARgFATAAQAaAAAOAKQAOAJAAARQAAAHgDAGQgDAGgFAFIgPgGQgHgDgLAAQgJAAgIADQgKAEgDAGQgHAGgDAIQgDALAAAJQAAAYAMAMQANALARABQANgBAGgCIAOgGQAIAGADAGQAEAGAAAJQAAARgPAIQgNAIgZABQgWAAgTgIg");
	this.shape_75.setTransform(1330.4,587.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgKCJQgGgBgFgDQgEgEgCgFQgDgHAAgJIAAicIAMgCQAIgBAHgBIAOABQAGACAEAEQAEACADAHQADAGgBAKIAACbIgLACQgIABgIAAgAgYhOQgJgJAAgQQAAgOAJgKQAKgKAOAAQAPAAAJAKQAKAKAAAOQAAAOgKALQgJAKgPAAQgOAAgKgKg");
	this.shape_76.setTransform(1316.6,583.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgWBeQgKgEgEgIQgDgGgFgNIgtiSQAGgGAHgEQAJgEAKAAQAMAAAJAGQAHAGAFAPIAaBvIABAAIAciCQAIgEAGgCQAHgCAIAAQANAAAIAGQAJAGAAAOQAAAHgDALIgGAaIgKAfIghBUQgEAEgKADQgLADgLAAQgOAAgKgEg");
	this.shape_77.setTransform(1301.6,587.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AggB7QgTgHgMgNQgNgMgHgTQgGgSAAgXQAAgZAHgSQAIgUAMgLQAMgNASgGQARgGATAAQAHAAAHACIALADIAAg/IALgCIARgBIAOABQAGABAFADQAFAFABAFQACAGAAAJIAAC2QAAASgQALQgLAIgQAFQgPAFgXAAQgXAAgSgHgAgRgFQgKALAAAZQAAAYAJAMQAKAMARAAQAIAAAEgCQAGgCACgDIAAhUQgHgEgKAAQgTAAgKALg");
	this.shape_78.setTransform(1280.9,584.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AghBgQgPgDgMgJQgLgIgGgLQgFgNAAgPQgBgbAPgNQAPgPAfgDIAvgFIAAgDQAAgLgKgEQgIgGgRAAQgOABgNACQgOAEgKAEQgDgDgFgIQgDgGAAgIQABgKAEgGQAEgGAKgFQAMgEANgBQAMgCAPAAQASgBAQAFQAOAEANAIQALAKAHANQAFANAAASIAABVQAAALgEAGQgGAGgHAEQgXAQgrAAQgTAAgOgEgAAAATQgKAAgHAEQgHAEAAAHQAAAJAGAEQAFAFANAAIANgCQAJgBADgCIAAgfg");
	this.shape_79.setTransform(1260.5,587.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAfB7QgJgGgKgOIgjgwIAABGIgMACQgHABgIAAIgOgBQgHgBgEgDQgFgEgCgFQgCgHAAgJIAAjfIAMgCIAPgBIAPABQAGABAEADQAFAEACAGQACAGAAAJIAABlIA9hCQATgBALAKQALAJAAANQAAAFgBAGIgGAJIgKALIgiAfIA5A9QgBATgJAJQgIAKgPAAQgMAAgJgGg");
	this.shape_80.setTransform(1234.4,584.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgaBeQgTgIgNgMQgNgMgIgUQgIgTAAgZQAAgZAIgTQAHgRANgNQALgKASgHQARgGAPABQATAAAQAFQAQAHALAKQAMANAFANQAHAPAAASQAAANgHAGQgHAIgMABIhYAOQADAMANAIQALAFAQAAQAQAAAMgDQANgEAIgFQAHAEADAGQAEAHAAAIQAAASgPAHQgMAHgOACQgNADgOAAQgUgBgSgFgAgMgwQgHADgDAFQgEAFgCAGIgCAMIA8gLQgBgIgHgHQgGgHgOAAQgIAAgGACg");
	this.shape_81.setTransform(1214.1,587.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgaBeQgTgHgNgNQgNgMgIgUQgIgSAAgaQAAgaAIgSQAHgRANgNQAMgLARgGQARgGAPABQAUAAAPAFQAQAHALAKQAMANAFANQAHARAAAQQAAANgHAGQgHAIgMABIhYAOQADAMANAIQAMAFAPAAQARAAALgDQANgEAIgFQAGADAFAHQADAHAAAIQAAASgPAHQgMAHgOACQgNADgOAAQgUgBgSgFgAgMgwQgGAEgEAEQgDAFgDAGIgDAMIA9gLQgBgHgHgIQgHgHgNAAQgHAAgHACg");
	this.shape_82.setTransform(1194.4,587.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AggBhQgPgCgHgEQgKgFgFgIQgFgGAAgLQAAgJAEgGQAEgIAEgDQAJAFAPAGQAPAFAQAAQAKAAAHgDQAFgEAAgGQAAgGgEgCQgEgDgJgDIgLgCQgfgGgQgOQgPgNAAgbQAAgPAGgLQAGgLAKgIQAKgHAPgFQAPgEAQAAQAMAAANADQAJABAMAEQAIAFAFAHQAFAGAAAJQAAAJgDAHQgDAGgFAEIgIgDIgbgIIgMgBQgLABgHACQgGAEAAAFQAAAFADACQAFADAIADIALACQAjAIAOAPQAPAOAAAYQAAAegVAQQgUAQgnAAQgSAAgKgDg");
	this.shape_83.setTransform(1175.8,587.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgKCAQgHgCgDgDQgFgDgDgGQgBgGAAgKIAAjeIALgDIAQgBIANABQAGACAFADQAEADACAGQADAFAAALIAADeIgcAEg");
	this.shape_84.setTransform(1154.5,584.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgKCAQgGgCgFgDQgEgDgCgGQgDgHAAgJIAAjeIAMgDIAQgBIANABQAGACAFADQAEAEACAFQADAHAAAJIAADeIgMACQgIACgIAAg");
	this.shape_85.setTransform(1144.4,584.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgKCJQgGgBgFgDQgEgDgCgGQgDgGAAgKIAAicIAMgCQAHgBAJgBIANABQAGACAEAEQADABAFAIQABAFAAALIAACbIgLACIgQABgAgYhOQgJgJAAgQQAAgOAJgKQAKgKAOAAQAOAAALAKQAIAKABAOQgBAQgIAJQgLAKgOAAQgOAAgKgKg");
	this.shape_86.setTransform(1134.3,583.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAbBSIgThEIgGgZIgZBiQgFAGgIACQgIADgNAAQgOAAgMgFQgKgEgEgIQgDgIgGgVQgHgZgDgTIgJgwIgIgrQAFgGAJgEQAJgEAKAAQAMAAAIAGQAIAGACAPIAPBrIABAAIAahvIANgHQAHgCAKAAQAOAAAHAEQAKAFACAIIAZBnIACAAIAOh+QAIgEAGgCQAHgCAHAAQANAAAJAGQAHAGABAOIgCASIgaB5IgGATQgFAGgLACQgKADgMAAQgeAAgFgQg");
	this.shape_87.setTransform(1115,587.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgaBeQgSgHgOgNQgMgLgJgVQgIgTAAgZQAAgZAIgTQAIgSAMgMQAMgLARgGQARgGAPABQAUAAAPAFQAQAHALAKQALALAHAPQAGAQAAARQAAAOgHAFQgGAIgNABIhYAOQAEAMAMAIQALAFAQAAQARAAALgDQANgEAJgFQAFADAEAHQAEAGAAAJQAAASgPAHQgLAHgPACQgMADgPAAQgTgBgTgFgAgMgwQgGAEgEAEQgEAFgCAGIgCAMIA8gLQAAgHgIgIQgGgHgOAAQgHAAgHACg");
	this.shape_88.setTransform(1083.7,587.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAmByQgMgFgCgIIgKglIgLguIgUBZQgFAFgLADQgKAEgOAAQgQAAgNgFQgNgFgEgIIgHgVIgXhtIgLhLQAFgGAJgDQAJgFAKAAQAPAAAIAGQAIAHADAPIAVCUIACAAIAZh1IANgFQAJgCAHgBQAOAAALAGQAKAEACAJIAaBqIACAAIATioQANgIAQAAQANAAAKAGQAJAGAAAPIgGA7IgVBzIgIAYQgGAFgMADQgMAEgNAAQgRAAgMgFg");
	this.shape_89.setTransform(1058.1,585.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgzCWQgJgGABgQQAAgMACgJIAFgTIA/jzIATgBQAOAAAIAGQAJAGgBAPQAAAMgDAJIhDEIIgTABQgOAAgIgHg");
	this.shape_90.setTransform(1036.6,585.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgLB2QgGgCgFgCQgEgEgCgHQgCgFAAgKIAAjLIAdgDQAHAAAGABQAHACAEADQADADADAGQACAHABAJIAADLIgNACIgRABQgIABgFgCg");
	this.shape_91.setTransform(1024.9,585);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgYAbQgKgMAAgPQAAgPAKgLQAIgLAQAAQARAAAIALQAKAKAAAQQAAAQgKALQgIALgRAAQgQAAgIgLg");
	this.shape_92.setTransform(1007.9,593.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgaBeQgTgIgNgMQgNgMgIgUQgIgUAAgYQAAgYAIgUQAHgRAOgNQAKgKASgHQARgGAPABQATAAAQAFQAQAHALAKQAMANAFANQAHAPAAASQAAANgHAGQgHAIgMABIhYAOQADAMAOAIQALAFAPAAQAQAAAMgDQANgEAJgFQAGAEAEAGQADAHAAAIQAAASgPAHQgLAHgOACQgOADgNAAQgVgBgSgFgAgLgwQgIADgDAFQgDAFgDAGIgCAMIA9gLQgCgIgGgHQgHgHgOAAQgIAAgFACg");
	this.shape_93.setTransform(993.8,587.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgQBcQgRgGgPgOQgOgOgGgRQgIgSAAgWQABgXAHgUQAIgTAOgNQANgMARgHQARgFATAAQAaAAAOAKQAOAJAAARQAAAHgDAGQgDAGgEAFIgQgGQgIgDgKAAQgKAAgHADQgJAEgEAGQgHAGgDAIQgDALgBAJQABAYANAMQAMALARABQANgBAGgCIAPgGQAHAGADAGQAEAGgBAJQAAARgNAIQgOAIgZABQgXAAgRgIg");
	this.shape_94.setTransform(975,587.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgKCJQgHgBgEgDQgFgEgCgFQgCgHAAgJIAAicIAMgCQAHgBAIgBIAOABQAHACAEAEQADACADAHQACAGABAKIAACbIgMACQgIABgIAAgAgXhOQgKgJABgQQgBgOAKgKQAIgKAPAAQAPAAAJAKQAJAKAAAOQAAAOgJALQgJAKgPAAQgPAAgIgKg");
	this.shape_95.setTransform(961.2,583.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgWBeQgKgEgEgIQgDgGgFgNIgtiSQAGgGAHgEQAJgEAKAAQAMAAAJAGQAHAGAFAPIAaBvIABAAIAciCQAIgEAGgCQAHgCAIAAQANAAAIAGQAJAGAAAOQAAAHgDALIgGAaIgKAfIghBUQgEAEgKADQgLADgLAAQgOAAgKgEg");
	this.shape_96.setTransform(946.2,587.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AggB7QgTgHgMgNQgNgMgHgTQgGgSAAgXQAAgZAHgSQAIgUAMgLQAMgNASgGQARgGATAAQAHAAAHACIALADIAAg/IALgCIARgBIAOABQAHABADADQAFAFACAFQACAGAAAJIAAC2QAAASgQALQgLAIgQAFQgPAFgXAAQgXAAgSgHgAgRgFQgKALAAAZQAAAYAJAMQAKAMARAAQAIAAAEgCQAGgCACgDIAAhUQgHgEgKAAQgTAAgKALg");
	this.shape_97.setTransform(925.5,584.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AghBgQgOgDgNgJQgKgIgHgLQgFgNgBgPQAAgbAPgNQAPgPAfgDIAugFIAAgDQAAgLgJgEQgIgGgSAAQgNABgNACQgNAEgKAEQgEgDgEgIQgDgGAAgIQgBgKAFgGQAEgGAKgFQANgEALgBQANgCAOAAQATgBAPAFQAPAEANAIQAMAKAFANQAHANAAASIAABVQAAALgGAGQgFAGgHAEQgXAQgrAAQgTAAgOgEgAAAATQgKAAgHAEQgGAEAAAHQAAAJAFAEQAFAFANAAIANgCQAJgBACgCIAAgfg");
	this.shape_98.setTransform(905.2,587.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgKCAQgGgCgFgDQgEgDgCgGQgDgHAAgJIAAjeIAMgDIAQgBIANABQAHACADADQAFAEADAFQABAGAAAKIAADeIgLACQgHACgJAAg");
	this.shape_99.setTransform(883.6,584.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgiBgQgPgEgKgIQgMgIgFgLQgHgNABgPQgBgbAPgNQAPgPAfgDIAugFIAAgDQAAgLgJgEQgIgGgSAAQgNABgNACQgMAEgMAEQgEgEgDgHQgEgGAAgIQABgKAEgGQAFgGAIgFQAOgEALgBQANgCAOAAQATgBAQAFQAPAEAMAIQALAKAHANQAFANABASIAABVQgBALgFAGQgEAFgIAFQgXAQgrAAQgTAAgPgEgAgBATQgJAAgHAEQgHAEABAHQgBAJAGAEQAFAFANAAIAOgCQAHgBAEgCIAAgfg");
	this.shape_100.setTransform(868.3,587.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAsBhQgGgCgEgDQgFgDgCgGQgCgHAAgJIAAhaQAAgMgGgFQgGgGgMABIgNABIgMAGIAACEIgLADIgQABIgOgBQgHgCgEgDQgFgEgCgFQgCgHAAgJIAAhyQAAgLAEgGQAEgGAHgGQANgKASgFQATgGAVAAQAoAAAXATQAWATAAAiIAAB3IgLADIgQABg");
	this.shape_101.setTransform(848.4,587.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AglBdQgSgIgMgMQgMgMgIgUQgGgTgBgWQABgVAGgTQAIgTAMgMQALgNATgIQASgGATAAQAVAAARAGQASAIAMANQANAOAHARQAGAUAAAUQAAAXgGATQgHATgNANQgNANgRAGQgQAHgWAAQgVgBgQgGgAgXgiQgHALgBAXQAAAYAJAMQAIAMAPABQAOgBAIgMQAIgMAAgYQAAgXgIgLQgIgNgPAAQgOAAgJANg");
	this.shape_102.setTransform(827.4,587.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgKCJQgHgBgEgDQgFgEgCgFQgCgHAAgJIAAicIAMgCQAIgBAHgBIAOABQAHACAEAEQADACADAHQACAGABAKIAACbIgMACQgIABgIAAgAgXhOQgKgJABgQQgBgOAKgKQAIgKAPAAQAPAAAJAKQAJAKAAAOQAAAOgJALQgJAKgPAAQgPAAgIgKg");
	this.shape_103.setTransform(811.8,583.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AggBhQgPgCgHgEQgKgFgFgIQgFgGAAgLQAAgJAEgGIAIgLQAJAFAPAGQAPAFAQAAQAKAAAHgDQAGgEAAgGQAAgFgFgDQgEgEgJgCIgLgCQgfgGgQgOQgPgNAAgbQAAgPAGgLQAGgLAKgIQAKgHAPgFQAPgEAQAAQAMAAANADQAJABAMAEQAIAFAFAHQAFAGAAAJQAAAJgDAHQgDAGgEAEIgJgDIgbgIIgMgBQgLABgHACQgGAEAAAFQAAAEADADQAFADAIADIALACQAjAIAOAPQAPAOAAAYQAAAegVAQQgUAQgnAAQgRAAgLgDg");
	this.shape_104.setTransform(798,587.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AggBhQgPgCgHgEQgKgFgEgIQgGgGAAgLQABgJADgGQAEgIAFgDQAIAFAPAGQAPAFARAAQAIAAAIgDQAFgEAAgGQAAgFgDgDQgFgDgJgDIgLgCQgfgGgPgOQgQgNAAgbQAAgOAGgMQAHgLAJgIQALgHAOgFQAPgEARAAQALAAAOADQAJABALAEQAJAFAEAHQAGAGgBAJQAAAJgCAHQgEAGgEAEIgJgDIgagIIgNgBQgKABgIACQgGAEAAAFQAAAFADACQAFADAIADIAMACQAiAIAOAPQAPAOAAAYQAAAegUAQQgVAQgnAAQgSAAgKgDg");
	this.shape_105.setTransform(780.3,587.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgaBeQgSgHgOgNQgOgMgHgUQgIgTAAgZQAAgZAIgTQAHgRANgNQAMgLARgGQARgGAPABQATAAAQAFQAQAHALAKQAMANAFANQAHAPAAASQAAANgHAGQgHAIgMABIhYAOQAEANAMAHQALAFAQAAQAQAAAMgDQAOgFAIgEQAGAEADAGQAEAHAAAIQAAASgPAHQgMAHgOACQgMADgPAAQgUgBgSgFgAgMgwQgGADgEAFQgEAFgCAGIgCAMIA8gLQgBgIgHgHQgGgHgOAAQgIAAgGACg");
	this.shape_106.setTransform(761.4,587.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgtCDQgHgBgEgDQgFgEgCgGQgCgFAAgKIAAifQAAgTAGgPQAHgOAKgJQAMgJAOgEQAQgEAOAAQAbAAAMAHQANAIAAASQAAAIgDAGQgDAGgEADIgOgDQgIgCgJAAQgQAAgIAGQgIAFAAAOIAAANIA6AAIAEAKQACAGAAAIQAAANgFAGQgGAGgJAAIgpAAIAAB6IgLACIgQABg");
	this.shape_107.setTransform(744.6,583.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AglBdQgRgHgNgNQgNgNgGgTQgHgTAAgWQAAgVAHgTQAHgSAMgNQAMgNASgIQASgGATAAQAVAAASAGQASAJALAMQANANAHASQAGASAAAWQAAAZgGARQgHAUgNAMQgMANgRAGQgRAHgWAAQgVgBgQgGgAgWgiQgJAMAAAWQAAAXAJANQAJAMAOABQAOgBAJgMQAIgMAAgYQAAgXgIgLQgIgNgQAAQgOAAgIANg");
	this.shape_108.setTransform(725.5,587.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgpBhQgGgCgFgDQgEgEgCgFQgCgHAAgJIAAhzQAAgJACgGQAGgIADgDIAPgJIASgHIATgFIAVgCQAQAAAMAHQAJAIABAQQAAAFgCAFIgEAKIgPAAIgeAGIgLAEIAACCIgKADIgQABg");
	this.shape_109.setTransform(708.2,587.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AhGCCQgHgCgEgDQgFgEgCgFQgCgIAAgIIAAi4QAAgKAFgHQAEgGAHgGQANgIAPgEQARgFAUAAQAVAAASAGQATAGANANQANAMAHATQAJASgBAaQAAAXgGATQgGATgNAMQgLANgRAGQgSAGgTAAQgOAAgOgFIAABAQgFACgGAAIgRACgAgThNQgFABgEADIAABUIAJAEIAKABQAlAAgBguQABgZgKgMQgIgLgRAAQgHAAgFABg");
	this.shape_110.setTransform(690,590.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgnBmQgRgQAAgiIAAikIALgDQAIgBAIAAQAQAAAJAGQAIAGAAATIAAAZIAvAAQADAFABAFQACAGAAAIQAAANgGAHQgFAGgKAAIggAAIAAA5QAAAKAFAEQAGAEALAAIALgBQAGAAAEgCIAGAJQACAFAAAIQAAAPgKAJQgLAJgZAAQgeAAgSgPg");
	this.shape_111.setTransform(665.1,585.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AAsBhQgGgCgEgDQgFgDgCgGQgCgHAAgJIAAhaQAAgMgGgFQgGgGgMABIgNABIgMAGIAACEIgLADIgQABIgOgBQgHgCgEgDQgFgEgCgFQgCgHAAgJIAAhyQAAgLAEgGQAEgGAHgGQANgKASgFQATgGAVAAQAoAAAXATQAWATAAAiIAAB3IgLADIgQABg");
	this.shape_112.setTransform(647,587.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgaBeQgSgHgOgNQgNgMgIgUQgIgSAAgaQAAgaAIgSQAIgSAMgMQAMgLARgGQARgGAPABQAUAAAPAFQAQAHALAKQALALAHAPQAGAQAAARQAAAOgHAFQgGAIgNABIhYAOQAEAMAMAIQALAFAQAAQARAAALgDQANgEAJgFQAFADAEAHQAEAGAAAJQAAASgPAHQgLAHgPACQgMADgPAAQgTgBgTgFgAgMgwQgGAEgEAEQgEAFgCAGIgCAMIA8gLQAAgHgIgIQgGgHgOAAQgHAAgHACg");
	this.shape_113.setTransform(626.6,587.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AggBhQgOgCgIgEQgJgFgFgIQgGgHAAgKQAAgJAEgGQADgGAGgFQAIAFAPAGQAPAFARAAQAJAAAHgDQAFgEAAgGQAAgFgDgDQgEgDgKgDIgLgCQgfgGgPgOQgQgNAAgbQAAgOAGgMQAGgLAKgIQALgHAOgFQAPgEAQAAQAMAAAOADQAJABAKAEQAKAFAFAHQAEAHAAAIQAAAJgCAHQgDAFgFAFIgJgDIgagIIgNgBQgLABgGACQgHAEAAAFQAAAFADACQAGADAHADIALACQAjAIAOAPQAPAOAAAYQAAAdgUARQgVAQgnAAQgSAAgKgDg");
	this.shape_114.setTransform(608.1,587.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgaBeQgTgIgNgMQgNgMgIgUQgIgTAAgZQAAgZAIgTQAHgRANgNQALgKASgHQARgGAPABQATAAAQAFQAQAHALAKQAMANAFANQAHAPAAASQAAANgHAGQgHAIgMABIhYAOQADAMANAIQALAFAQAAQAQAAAMgDQANgEAIgFQAHAEADAGQAEAHAAAIQAAASgPAHQgMAHgOACQgNADgOAAQgUgBgSgFgAgMgwQgHADgDAFQgEAFgCAGIgCAMIA8gLQgBgIgHgHQgGgHgOAAQgIAAgGACg");
	this.shape_115.setTransform(589.2,587.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgpBhQgHgCgDgDQgEgDgDgGQgCgGAAgKIAAhzQAAgJADgGQADgGAFgFIAPgJIASgHIATgFIAVgCQARAAAKAHQAKAHAAARQAAAFgBAFIgEAKIgPAAIgeAGIgLAEIAACCIgLADIgQABg");
	this.shape_116.setTransform(572.5,587.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AhGCCQgGgCgFgDQgEgDgCgGQgCgGAAgKIAAi4QAAgLAEgGQADgGAIgGQAMgIAQgEQAQgFAVAAQAVAAASAGQATAGANANQANAMAIATQAHATAAAZQAAAZgGARQgHATgMAMQgLANgRAGQgSAGgTAAQgNAAgPgFIAABAQgFACgHAAQgIACgIAAgAgThNIgKAEIAABUIAKAEIALABQAkAAAAguQAAgZgKgMQgIgLgRAAQgHAAgFABg");
	this.shape_117.setTransform(554.3,590.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgaBeQgTgHgNgNQgNgMgIgUQgIgSAAgaQAAgaAIgSQAIgSAMgMQAMgLARgGQARgGAPABQATAAAQAFQARAHAKAKQAMANAGANQAGARAAAQQAAANgHAGQgGAIgNABIhYAOQAEAMAMAIQAMAFAPAAQAQAAAMgDQANgEAIgFQAGADAEAHQAEAGAAAJQAAASgPAHQgLAHgPACQgMADgPAAQgUgBgSgFgAgMgwQgHAEgDAEQgEAEgCAHIgDAMIA9gLQgBgIgHgHQgHgHgNAAQgHAAgHACg");
	this.shape_118.setTransform(533.6,587.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgoBhQgHgCgFgDQgEgEgCgFQgDgHAAgJIAAhzQABgJADgGQAEgIAFgDIAOgJIASgHIATgFIAVgCQARAAAKAHQALAIgBAQQABAFgCAFIgDAKIgQAAIgeAGIgLAEIAACCIgKADIgRABg");
	this.shape_119.setTransform(516.9,587.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgnBmQgRgQAAgiIAAikIALgDQAIgBAIAAQAQAAAJAGQAIAGAAATIAAAZIAvAAQADAFABAFQACAGAAAIQAAAOgGAGQgFAGgKAAIggAAIAAA5QAAAKAGAEQAFAEALAAIALgBIALgCIAFAJQACAFAAAIQAAAPgKAJQgLAJgZAAQgeAAgSgPg");
	this.shape_120.setTransform(494.9,585.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AglBdQgSgIgMgMQgMgMgIgUQgGgTAAgWQAAgVAGgTQAIgTAMgMQAMgNASgIQARgGAUAAQAUAAASAGQATAJALAMQANANAHASQAGAUABAUQgBAXgGATQgHAUgNAMQgMANgSAGQgQAHgWAAQgWgBgPgGgAgWgiQgIALAAAXQgBAYAJAMQAIAMAOABQAPgBAJgMQAHgMABgYQgBgXgHgLQgJgNgPAAQgPAAgHANg");
	this.shape_121.setTransform(476.7,587.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AAsBhQgGgCgEgDQgFgEgCgFQgCgHAAgJIAAhaQAAgMgHgFQgFgGgMABIgNABIgMAGIAACEIgMADIgQABIgNgBQgIgCgDgDQgFgEgCgFQgCgGAAgKIAAhyQAAgLAEgGQAEgGAHgGQAMgKATgFQATgGAVAAQApAAAWATQAWATAAAiIAAB3IgLADIgQABg");
	this.shape_122.setTransform(455.7,587.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AggBhQgPgCgHgEQgKgFgFgIQgFgGAAgLQAAgJAEgGQAEgIAEgDQAJAFAPAGQAPAFAQAAQAKAAAHgDQAFgEAAgGQAAgGgEgCQgEgDgJgDIgLgCQgfgGgQgOQgPgNAAgbQAAgPAGgLQAGgLAKgIQAKgHAPgFQAPgEAQAAQAMAAANADQAJABAMAEQAIAFAFAHQAFAGAAAJQAAAJgDAHQgDAGgFAEIgIgDIgbgIIgMgBQgLAAgHADQgGAEAAAFQAAAFADACQAFADAIADIALACQAjAIAOAPQAPAOAAAYQAAAegVAQQgUAQgnAAQgSAAgKgDg");
	this.shape_123.setTransform(1498,544.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgaBdQgSgGgOgNQgMgLgJgVQgIgTAAgZQAAgZAIgTQAIgSAMgMQAMgLARgGQARgGAPABQATAAAQAFQAQAIALAJQALAMAHAOQAGAQAAARQAAAOgHAFQgHAIgMABIhYAOQAEAMAMAIQALAFAQAAQAQAAAMgDQAOgFAIgEQAGAEADAGQAEAHAAAIQAAASgPAHQgMAHgOACQgMADgPAAQgUgBgSgGgAgMgwQgGADgEAFQgEAFgCAGQgCAGAAAGIA8gLQAAgHgIgIQgGgHgOAAQgIAAgGACg");
	this.shape_124.setTransform(1479.1,544.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgmBdQgQgHgNgNQgNgNgGgTQgHgRAAgYQAAgXAHgSQAHgSAMgMQAMgOARgHQATgGATAAQAVAAASAGQARAIAMANQANAMAGATQAHARAAAXQAAAZgHARQgHAUgMAMQgNANgQAGQgRAHgWAAQgVgBgRgGgAgWgiQgJAMAAAWQAAAXAJANQAIANAOgBQAPAAAJgMQAIgNAAgXQAAgWgJgMQgIgNgPAAQgOAAgIANg");
	this.shape_125.setTransform(1458.7,544.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AggB7QgTgHgMgNQgNgMgHgTQgGgSAAgXQAAgZAHgSQAIgUAMgLQAMgNASgGQARgGATAAQAHAAAHACIALADIAAg/IALgCIARgBIAOABQAHABADADQAFAEACAGQACAGAAAJIAAC2QAAASgQALQgLAIgQAFQgPAFgXAAQgXAAgSgHgAgRgFQgKALAAAZQAAAYAJAMQAKAMARAAQAIAAAEgCQAGgCACgDIAAhUQgHgEgKAAQgTAAgKALg");
	this.shape_126.setTransform(1437.2,541.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AggB7QgTgHgMgNQgNgMgHgTQgGgSAAgXQAAgZAHgSQAIgUAMgLQAMgNASgGQARgGATAAQAHAAAHACIALADIAAg/IALgCIARgBIAOABQAHABADADQAFAFACAFQACAGAAAJIAAC2QAAASgQALQgLAIgQAFQgPAFgXAAQgXAAgSgHgAgRgFQgKALAAAZQAAAYAJAMQAKAMARAAQAIAAAEgCQAGgCACgDIAAhUQgHgEgKAAQgTAAgKALg");
	this.shape_127.setTransform(1408.9,541.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AAsBhQgGgCgEgDQgFgDgCgGQgCgHAAgJIAAhaQAAgMgGgFQgGgGgMABIgNABIgMAGIAACEIgLADIgQABIgOgBQgHgCgEgDQgFgEgCgFQgCgHAAgJIAAhyQAAgLAEgGQAEgGAHgGQANgKASgFQATgGAVAAQAoAAAXATQAWATAAAiIAAB3IgLADIgQABg");
	this.shape_128.setTransform(1388.2,544);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AghBgQgPgEgMgIQgLgJgGgKQgGgNAAgPQAAgbAPgNQAQgPAegDIAugFIAAgDQAAgLgJgEQgJgGgRAAQgNAAgNADQgOAEgKAEQgEgDgDgIQgEgGAAgIQAAgKAFgGQAEgGAKgFQANgEALgBQANgCAOAAQASgBARAFQAPAEAMAIQALAKAGANQAHAOAAARIAABVQAAAKgGAHQgFAGgHAEQgXAQgrAAQgTAAgOgEgAAAATQgKAAgHAEQgGAEAAAHQAAAJAFAEQAFAFANAAQAHAAAGgCQAJgBACgCIAAgfg");
	this.shape_129.setTransform(1367.5,544.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgoAuQAIgYAFgXIAJguQAGgDAJgDQAJgDAHABQAMAAAIAFQAIAFAAAOQAAAJgCAJQgCAKgEAJIgIATQgEAJgFAGQgHAJgGADQgGAEgKAAQgQAAgLgKg");
	this.shape_130.setTransform(1346,552.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("Ag4B4QgJgLgCgOIAXgWQAMgKAJgNQgGgCgHgHQgHgHgIgUIgSgwIgVhRQAGgGAHgEQAJgDAKAAQAMgBAJAGQAIAGAEAPIAbBpIACAAIAQg7IAIghIAGggQANgHAPAAQAMgBAJAGQAIAGAAAPQAAAHgCAQIgHAeIgKAfIgYA9IgNAaQgKAUgIAKQgIALgJAIQgHAHgIACQgGADgKAAQgPAAgKgKg");
	this.shape_131.setTransform(1332.2,547.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgKCAQgHgCgEgDQgEgEgCgFQgDgGAAgKIAAjeIAMgDIAPgBIAOABQAGACAEADQAFADACAGQACAHAAAJIAADeIgLACIgQACg");
	this.shape_132.setTransform(1317.4,540.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AAtBhQgHgCgEgDQgFgEgCgFQgCgHAAgJIAAhaQgBgMgFgFQgGgGgMABIgNABIgMAGIAACEIgLADIgRABIgNgBQgIgCgDgDQgEgDgDgGQgCgGAAgKIAAhyQAAgLAEgGQAFgHAGgFQAMgJATgGQATgGAVAAQApAAAWATQAWATAAAiIAAB3IgMADIgQABg");
	this.shape_133.setTransform(1301.8,544);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgmBdQgRgIgMgMQgNgMgHgUQgGgRAAgYQAAgXAGgSQAHgSANgMQALgNASgIQASgGAUAAQAUAAASAGQASAIAMANQANAOAGARQAHAUAAAUQAAAXgHATQgGATgNANQgNANgRAGQgQAHgWAAQgWgBgQgGgAgXgiQgIALAAAXQAAAXAJANQAIANAOgBQAQAAAHgMQAJgNAAgXQAAgWgJgMQgIgNgPAAQgOAAgJANg");
	this.shape_134.setTransform(1280.8,544.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AggBhQgOgCgIgEQgKgGgEgHQgGgHAAgKQAAgJAEgGQADgHAGgEQAHAFAQAGQAPAFARAAQAJAAAHgDQAFgEAAgGQAAgGgEgCQgEgEgKgCIgKgCQgfgGgQgOQgPgNAAgbQAAgNAGgNQAFgLALgIQALgIAOgEQAOgEARAAQANAAAMADQAKABAKAEQAKAFAEAHQAFAGAAAJQAAAJgDAHQgDAGgEAEIgJgDIgNgFIgOgDIgMgBQgLAAgHADQgGAEAAAFQAAAFADACQAEADAJADIALACQAiAIAQAPQAOAOAAAYQAAAdgUARQgWAQgmAAQgSAAgKgDg");
	this.shape_135.setTransform(1254.4,544.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgaBdQgTgGgNgNQgNgMgIgUQgIgSAAgaQAAgaAIgSQAHgRANgNQAMgLARgGQARgGAPABQAUAAAPAFQARAIAKAJQAMANAGANQAGARAAAQQAAANgHAGQgGAIgNABIhYAOQADAMANAIQAMAFAPAAQAQAAAMgDQANgEAIgFQAGADAEAHQAEAGAAAJQAAASgPAHQgLAHgPACQgMADgPAAQgUgBgSgGgAgMgwQgHAEgDAEQgEAEgCAHIgDAMIA9gLQgBgIgHgHQgHgHgNAAQgHAAgHACg");
	this.shape_136.setTransform(1235.5,544.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AggBhQgOgCgIgEQgJgFgGgIQgEgGAAgLQgBgJAEgGQAFgIADgDQAKAFAPAGQAPAFAPAAQAKAAAGgDQAHgEAAgGQAAgGgFgCQgDgDgKgDIgLgCQgfgGgQgOQgPgNAAgbQAAgOAGgMQAGgLAKgIQAKgHAPgFQAPgEAQAAQAMAAANADQAJABAMAEQAJAFAEAHQAFAGAAAJQAAAJgDAHQgCAGgGAEIgIgDIgbgIIgMgBQgKAAgHADQgHAEAAAFQAAAFAEACQAEADAIADIALACQAjAIAPAPQAOAOAAAYQAAAegVAQQgTAQgoAAQgRAAgLgDg");
	this.shape_137.setTransform(1216.9,544.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AglBdQgRgHgNgNQgNgNgGgTQgHgTAAgWQAAgVAHgUQAHgSAMgMQAMgNASgIQASgGATAAQAVAAASAGQASAJALAMQANANAHASQAGASAAAWQAAAZgGARQgHAUgNAMQgMANgRAGQgRAHgWAAQgVgBgQgGgAgWgiQgJAMAAAWQAAAXAJANQAJANANgBQAPAAAJgMQAIgMAAgYQAAgXgJgLQgIgNgPAAQgOAAgIANg");
	this.shape_138.setTransform(1197.3,544.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AhGCCQgGgCgFgDQgEgDgCgGQgCgGAAgKIAAi4QAAgKAEgHQAFgHAGgFQANgIAPgEQAQgFAVAAQAVAAASAGQATAGANANQANAMAIATQAHATAAAZQAAAZgGARQgGASgMANQgMANgRAGQgSAGgTAAQgNAAgPgFIAABAQgEACgIAAQgHACgJAAgAgThNIgJAEIAABUIAJAEIALABQAkAAAAguQAAgZgJgMQgJgLgRAAQgGAAgGABg");
	this.shape_139.setTransform(1176.6,547.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgpBhQgGgCgFgDQgEgDgCgGQgDgHAAgJIAAhzQAAgJAEgGQACgGAHgFIANgJIAmgMIAVgCQARAAAKAHQAKAIAAAQQAAAFgBAFIgEAKIgPAAIgeAGIgLAEIAACCIgKADIgRABg");
	this.shape_140.setTransform(1158.9,544);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AggBdQgPgFgNgKQgMgJgGgQQgHgOAAgXIAAhtIALgCIAQgBIAPABQAGABAEAEQAFADACAGQACAFAAALIAABRQAAAQAIAHQAGAHANAAQAJAAAFgCIAIgDIAAiGIALgCIAQgBIAOABQAHABAEAEQAEACADAHQACAFAAALIAAB0QAAATgPAKQgOAJgQAEQgRAEgVAAQgSAAgRgEg");
	this.shape_141.setTransform(1140.4,544.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AhGCCQgGgCgFgDQgEgDgCgGQgCgGAAgKIAAi4QAAgKAEgHQAFgHAGgFQANgIAPgEQAQgFAVAAQAVAAASAGQAUAHAMAMQANAMAIATQAHATAAAZQAAAZgGARQgGARgMAOQgMANgRAGQgSAGgTAAQgNAAgPgFIAABAQgFACgHAAQgHACgJAAgAgThNIgKAEIAABUIAKAEIALABQAkAAAAguQAAgZgJgMQgKgLgQAAQgHAAgFABg");
	this.shape_142.setTransform(1119.8,547.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgKCAQgGgCgFgDQgEgEgCgFQgDgHAAgJIAAjeIAMgDIAQgBIANABQAGACAFADQAEADACAGQADAHAAAJIAADeIgMACQgIACgIAAg");
	this.shape_143.setTransform(1096.6,540.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AghBgQgOgEgMgIQgMgIgFgLQgHgNAAgPQAAgbAQgNQAOgPAfgDIAugFIAAgDQAAgLgJgEQgIgGgSAAQgNAAgNADQgOAEgJAEQgFgDgDgIQgEgGAAgIQAAgKAFgGQAFgGAJgFQANgEALgBQANgCAOAAQATgBAPAFQAPAEANAIQAMAKAFANQAHANAAASIAABVQAAALgGAGQgEAGgIAEQgXAQgrAAQgTAAgOgEgAgBATQgJAAgHAEQgGAEAAAHQAAAJAFAEQAGAFAMAAIANgCQAIgBADgCIAAgfg");
	this.shape_144.setTransform(1081.4,544.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AAtBhQgHgCgEgDQgFgEgCgFQgCgGAAgKIAAhaQAAgMgHgFQgFgGgMABIgNABIgMAGIAACEIgLADIgRABIgOgBQgGgCgEgDQgEgDgDgGQgCgGAAgKIAAhyQAAgKAEgHQAFgHAGgFQAMgJATgGQATgGAVAAQApAAAWATQAWATAAAiIAAB3IgMADIgQABg");
	this.shape_145.setTransform(1061.5,544);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgmBdQgQgHgNgNQgMgLgIgVQgGgRAAgYQAAgXAGgSQAIgTAMgLQAMgOARgHQASgGAUAAQAUAAASAGQASAIAMANQANAOAGARQAHAUAAAUQAAAXgHATQgGATgNANQgNANgRAGQgQAHgWAAQgWgBgQgGgAgWgiQgJAMAAAWQAAAXAJANQAIANAOgBQAPAAAJgMQAIgNAAgXQAAgWgJgMQgIgNgPAAQgOAAgIANg");
	this.shape_146.setTransform(1040.5,544.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgKCJQgHgCgEgCQgDgDgDgGQgDgGAAgKIAAicIAMgCQAIgBAHgBIAOABQAHACADAEQAEACADAHQACAEAAAMIAACbIgLACIgQABgAgXhOQgKgJABgQQgBgOAKgKQAKgKANAAQAPAAAJAKQAJAKAAAOQAAAQgJAJQgJAKgPAAQgNAAgKgKg");
	this.shape_147.setTransform(1024.9,540);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgnBmQgRgQAAgiIAAikIAMgDQAHgBAIAAQAQAAAJAGQAIAGgBATIAAAZIAwAAIAEAKIACAOQAAANgFAHQgHAGgJAAIghAAIAAA5QABAKAFAEQAGAEAMAAIAKgBIAKgCIAGAJQADAGgBAHQAAAPgKAJQgLAJgZAAQgeAAgSgPg");
	this.shape_148.setTransform(1013,542.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AghBgQgPgEgMgIQgKgIgHgLQgFgNgBgPQAAgbAPgNQAPgPAfgDIAugFIAAgDQAAgLgJgEQgIgGgSAAQgNAAgNADQgMAEgLAEQgFgEgDgHQgEgIAAgGQAAgKAEgGQAEgFALgGQANgEALgBQAMgCAPAAQATgBAPAFQAQAEAMAIQAMAKAFANQAHANAAASIAABVQAAAKgGAHQgEAFgIAFQgYAQgqAAQgTAAgOgEgAAAATQgKAAgHAEQgGAEAAAHQAAAJAFAEQAFAFANAAIANgCQAJgBACgCIAAgfg");
	this.shape_149.setTransform(995.2,544.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgaBdQgSgGgOgNQgMgLgJgVQgIgTAAgZQAAgZAIgTQAIgSAMgMQAMgLARgGQARgGAPABQATAAAQAFQAQAIALAJQALAMAHAOQAGAQAAARQAAAOgHAFQgHAIgMABIhYAOQAEAMAMAIQALAFAQAAQAQAAAMgDQAOgFAIgEQAGAEADAGQAEAHAAAIQAAASgPAHQgMAHgOACQgMADgPAAQgUgBgSgGgAgMgwQgGADgEAFQgEAFgCAGIgCAMIA8gLQgBgIgHgHQgGgHgOAAQgIAAgGACg");
	this.shape_150.setTransform(975.9,544.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgpBhQgGgCgEgDQgFgDgCgGQgCgHAAgJIAAhzQAAgJADgGQADgGAGgFIAOgJIASgHIATgFIAVgCQARAAAKAHQAKAHAAARIgBAKIgEAKIgPAAIgeAGIgLAEIAACCIgKADIgQABg");
	this.shape_151.setTransform(959.2,544);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgQBcQgTgGgNgOQgNgMgHgTQgIgTAAgVQABgYAHgTQAJgTAMgNQANgLASgIQARgFATAAQAaAAAOAKQAOAJAAARQAAAHgEAGQgDAGgEAFIgOgGQgKgDgJAAQgJAAgJADQgIAEgFAGQgGAFgDAJQgDAIAAAMQAAAZAMALQAMALASABQAMgBAHgCIAOgGQAIAGADAGQADAHAAAIQABAQgOAJQgOAIgaABQgWAAgRgIg");
	this.shape_152.setTransform(942.4,544.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgaBdQgTgHgNgMQgNgMgIgUQgIgTAAgZQAAgZAIgTQAHgRANgNQALgKASgHQARgGAPABQATAAAQAFQAQAIALAJQAMANAFANQAHAPAAASQAAANgHAGQgHAIgMABIhYAOQADAMANAIQALAFAQAAQAQAAAMgDQANgEAIgFQAHADADAHQAEAHAAAIQAAASgPAHQgLAHgPACQgNADgOAAQgUgBgSgGgAgMgwQgHADgDAFQgEAFgCAGIgCAMIA8gLQgBgIgHgHQgGgHgOAAQgIAAgGACg");
	this.shape_153.setTransform(923.8,544.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgpBhQgHgCgDgDQgEgDgDgGQgCgGAAgKIAAhzQAAgJADgGQADgGAFgFIAPgJIASgHIATgFIAVgCQARAAAKAHQAKAIAAAQQAAAFgBAFIgEAKIgPAAIgeAGIgLAEIAACCIgLADIgQABg");
	this.shape_154.setTransform(907.1,544);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AggB7QgSgHgNgNQgNgMgHgTQgGgSAAgXQAAgbAHgQQAIgUAMgLQANgNARgGQARgGATAAQAHAAAHACIALADIAAg/IAMgCIAQgBIAOABQAGABAEADQAFAEACAGQACAFAAAKIAAC2QAAASgPALQgLAIgQAFQgQAFgXAAQgYAAgRgHgAgRgFQgLALAAAZQAAAXAKANQALAMAQAAQAIAAAEgCQAGgDADgCIAAhUQgIgEgKAAQgTAAgKALg");
	this.shape_155.setTransform(880.9,541.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AAtBhQgHgCgEgDQgEgDgDgGQgCgGAAgKIAAhaQAAgMgGgFQgGgGgMABIgNABQgGACgGAEIAACEIgLADIgQABIgPgBQgGgCgEgDQgFgDgBgGQgDgHAAgJIAAhyQAAgKAEgHQAFgHAHgFQAMgJASgGQATgGAVAAQApAAAWATQAWATAAAiIAAB3IgLADIgRABg");
	this.shape_156.setTransform(860.3,544);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgiBgQgOgEgMgIQgKgIgHgLQgFgNAAgPQAAgbAOgNQAPgPAfgDIAugFIAAgDQAAgLgJgEQgJgGgQAAQgOAAgNADQgNAEgLAEQgEgEgEgHQgCgGAAgIQgBgKAFgGQAEgGAKgFQANgEAMgBQAMgCAOAAQATgBAPAFQAQAEAMAIQAMAKAFANQAHANgBASIAABVQAAALgEAGQgFAFgIAFQgXAQgrAAQgTAAgPgEgAAAATQgKAAgHAEQgGAEgBAHQABAJAFAEQAGAFAMAAIANgCQAIgBAEgCIAAgfg");
	this.shape_157.setTransform(839.6,544.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgKCAQgGgCgFgDQgEgDgCgGQgDgFAAgLIAAjeIAMgDIAQgBIANABQAHACADADQAEADADAGQACAGAAAKIAADeIgLACQgHACgJAAg");
	this.shape_158.setTransform(818,540.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AghBgQgQgEgKgIQgMgIgFgLQgHgNAAgPQAAgbAPgNQAPgPAfgDIAugFIAAgDQAAgLgJgEQgKgGgQAAQgNAAgNADQgNAEgKAEQgGgDgCgIQgEgIAAgGQAAgKAFgGQAEgFAJgGQAOgEALgBQAMgCAPAAQATgBAQAFQAPAEAMAIQAKAJAIAOQAFANABASIAABVQAAAKgGAHQgFAGgHAEQgYAQgqAAQgUAAgNgEgAgBATQgKAAgGAEQgHAEABAHQgBAJAGAEQAFAFANAAIAOgCQAHgBADgCIAAgfg");
	this.shape_159.setTransform(802.7,544.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AAsBhQgFgCgFgDQgFgDgCgGQgCgHAAgJIAAhaQAAgMgHgFQgFgGgMABIgMABQgIADgEADIAACEIgMADIgQABIgOgBQgGgCgFgDQgEgEgCgFQgDgHAAgJIAAhyQAAgLAEgGQAEgGAHgGQAOgKASgFQASgGAVAAQApAAAWATQAWATAAAiIAAB3IgLADIgQABg");
	this.shape_160.setTransform(782.8,544);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AglBdQgSgHgNgNQgMgNgHgTQgGgTgBgWQABgVAGgUQAIgSALgMQANgNASgIQASgGATAAQAVAAARAGQATAJALAMQANANAHASQAGAUAAAUQAAAXgGATQgHAUgNAMQgMANgSAGQgQAHgWAAQgVgBgQgGgAgXgiQgHALgBAXQABAYAHAMQAKANANgBQAPAAAJgMQAHgMAAgYQAAgXgHgLQgIgNgQAAQgOAAgJANg");
	this.shape_161.setTransform(761.8,544.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgKCJQgGgBgEgDQgFgEgCgFQgCgHAAgJIAAicIALgCQAIgBAIgBIANABQAHACAEAEQAEACACAHQADAGAAAKIAACbIgMACQgIABgIAAgAgXhOQgKgLAAgOQAAgOAKgKQAJgKAOAAQAPAAAKAKQAIAKABAOQgBAQgIAJQgKAKgPAAQgOAAgJgKg");
	this.shape_162.setTransform(746.2,540);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgnBmQgRgQAAgiIAAikIALgDQAIgBAIAAQAQAAAJAGQAIAGAAATIAAAZIAvAAQADAFABAFQACAGAAAIQAAAOgGAGQgFAGgKAAIggAAIAAA5QAAAKAGAEQAFAEALAAIALgBIALgCIAFAJQACAFAAAIQAAAPgKAJQgLAJgZAAQgeAAgSgPg");
	this.shape_163.setTransform(734.3,542.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AghBgQgOgEgNgIQgKgIgHgLQgFgNAAgPQgBgbAPgNQAQgPAegDIAvgFIAAgDQAAgLgKgEQgIgGgRAAQgOAAgNADQgOAEgKAEQgDgDgFgIQgDgGABgIQAAgKAEgGQAEgGAKgFQAOgEALgBQAMgCAPAAQARgBARAFQAPAEAMAIQALAKAHANQAFANAAASIAABVQAAALgEAGQgGAGgHAEQgXAQgrAAQgTAAgOgEgAAAATQgKAAgHAEQgHAEAAAHQABAJAFAEQAFAFANAAQAHAAAHgCQAIgBADgCIAAgfg");
	this.shape_164.setTransform(716.5,544.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgQBcQgSgGgOgOQgNgNgHgSQgIgSAAgWQAAgXAIgUQAIgTANgNQAOgMARgHQARgFATAAQAaAAAOAKQAOAJAAARQAAAHgDAGQgDAGgFAFIgPgGQgIgDgKAAQgKAAgHADQgIAEgFAGQgHAGgDAIQgEAJAAALQAAAYANAMQAMALASABQAMgBAHgCIAOgGQAIAGADAGQAEAGAAAJQAAAQgPAJQgNAIgZABQgXAAgRgIg");
	this.shape_165.setTransform(698.3,544.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AggBdQgPgFgNgKQgNgJgFgQQgHgOAAgXIAAhtIALgCIAQgBIAPABQAGABAEAEQADACADAHQADAGAAAKIAABRQAAAQAHAHQAIAHAMAAQAJAAAEgCIAIgDIAAiGIAMgCIAQgBIAPABQAGABAEAEQAEACADAHQACAGAAAKIAAB0QAAATgPAKQgOAJgRAEQgRAEgUAAQgSAAgRgEg");
	this.shape_166.setTransform(679.1,544.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AggB7QgTgHgMgNQgNgMgGgTQgHgSAAgXQAAgbAHgQQAIgUAMgLQANgNARgGQAQgGAUAAIAOACIALADIAAg/IAMgCIAPgBIAPABQAGABAEADQAFAEACAGQACAFAAAKIAAC2QAAASgQALQgKAIgRAFQgPAFgXAAQgYAAgRgHgAgRgFQgLALAAAZQAAAXAKANQALAMAQAAQAIAAAEgCQAGgDACgCIAAhUQgHgEgKAAQgTAAgKALg");
	this.shape_167.setTransform(657.6,541.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgaBdQgSgGgOgNQgNgMgIgUQgIgSAAgaQAAgaAIgSQAHgRANgNQAMgLARgGQARgGAPABQATAAAQAFQARAIAKAJQAMANAGANQAGARAAAQQAAANgHAGQgHAIgMABIhYAOQAEAMAMAIQAMAFAQAAQAQAAALgDQANgEAIgFQAGADAEAHQAFAHAAAIQAAARgQAIQgLAHgPACQgMADgPAAQgUgBgSgGgAgMgwQgHAEgDAEQgEAFgCAGIgDAMIA9gLQgBgHgHgIQgHgHgNAAQgHAAgHACg");
	this.shape_168.setTransform(637.6,544.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgoBhQgHgCgEgDQgFgEgCgFQgCgHAAgJIAAhzQAAgIADgHQADgGAGgFIAOgJIASgHIATgFIAVgCQAQAAALAHQALAIgBAQQABAFgCAFIgDAKIgQAAIgdAGIgMAEIAACCIgLADIgQABg");
	this.shape_169.setTransform(613.7,544);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgmBdQgRgIgMgMQgNgMgGgUQgIgTABgWQgBgVAIgUQAGgSANgMQAMgNARgIQASgGAUAAQAUAAATAGQARAIANANQANAOAFARQAIAUAAAUQgBAXgHATQgGATgMANQgNANgRAGQgRAHgWAAQgWgBgQgGgAgWgiQgJALABAXQAAAYAIAMQAIANAOgBQAPAAAJgMQAHgMABgYQgBgXgHgLQgJgNgPAAQgPAAgHANg");
	this.shape_170.setTransform(595.2,544.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgtCDQgHgBgEgDQgEgFgCgFQgDgGAAgJIAAifQAAgSAGgQQAGgNALgKQAMgJAOgEQAPgEAPAAQAbAAANAHQAMAIAAASQAAAIgDAGQgDAFgEAEIgOgDQgIgCgJAAQgPAAgJAGQgIAGAAANIAAANIA6AAIAFAKIABAOQAAAOgFAFQgGAGgJAAIgpAAIAAB6IgLACIgQABg");
	this.shape_171.setTransform(577.7,540.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AggB7QgTgHgMgNQgNgMgHgTQgGgSAAgXQAAgZAHgSQAIgUAMgLQAMgNASgGQARgGATAAQAHAAAHACIALADIAAg/IALgCIARgBIAOABQAHABADADQAFAEACAGQACAGAAAJIAAC2QAAASgQALQgLAIgQAFQgPAFgXAAQgYAAgRgHgAgRgFQgKALAAAZQAAAYAJAMQAKAMARAAQAIAAAEgCQAGgCACgDIAAhUQgHgEgKAAQgTAAgKALg");
	this.shape_172.setTransform(551,541.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgaBdQgSgGgOgNQgOgMgHgUQgIgTAAgZQAAgZAIgTQAHgRANgNQAMgLARgGQARgGAPABQATAAAQAFQAQAIALAJQAMANAFANQAHAPAAASQAAANgHAGQgHAIgMABIhYAOQAEANAMAHQALAFAQAAQAQAAAMgDQAOgFAIgEQAGAEADAGQAEAHAAAIQAAASgPAHQgMAHgOACQgMADgPAAQgUgBgSgGgAgMgwQgGADgEAFQgEAFgCAGIgCAMIA8gLQgBgIgHgHQgGgHgOAAQgIAAgGACg");
	this.shape_173.setTransform(531,544.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgfB7QgUgHgMgNQgMgMgIgTQgGgSAAgXQAAgZAHgSQAIgUAMgLQANgNARgGQARgGATAAQAHAAAHACIALADIAAg/IAMgCIAQgBIAOABQAGABAEADQAFAEACAGQACAFAAAKIAAC2QAAASgPALQgLAIgQAFQgQAFgXAAQgYAAgQgHgAgRgFQgKAMAAAYQAAAYAJAMQALAMAQAAQAIAAAFgCQAFgCADgDIAAhUQgIgEgKAAQgTAAgKALg");
	this.shape_174.setTransform(510.1,541.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgKCJQgHgCgDgCQgFgDgDgGQgCgGABgKIAAicIALgCQAHgBAIgBIAOABQAGACAFAEQADACADAHQACAEABAMIAACbIgMACIgQABgAgXhOQgJgJAAgQQAAgOAJgKQAJgKAOAAQAOAAAKAKQAKAKgBAOQABAQgKAJQgKAKgOAAQgOAAgJgKg");
	this.shape_175.setTransform(494.9,540);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgWBeQgKgFgEgHIgchMIgZhZQAGgGAHgEQAKgEAJAAQAMAAAJAGQAIAGAEAPIAaBvIACAAIAOg+IAOhEQAGgEAHgCQAIgCAHAAQAMAAAKAGQAIAGAAAOIgCASIgHAaIgrBzQgDAEgLADQgLADgLAAQgOAAgKgEg");
	this.shape_176.setTransform(479.9,544.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgmBdQgRgIgMgMQgMgMgIgUQgHgTAAgWQAAgVAHgUQAIgSAMgMQAMgNARgIQATgGATAAQAVAAASAGQARAJAMAMQANANAGASQAIAUgBAUQABAXgIATQgGAUgNAMQgMANgRAGQgRAHgWAAQgVgBgRgGgAgXgiQgHALgBAXQAAAYAJAMQAIANAPgBQAOAAAIgMQAJgMgBgYQABgXgJgLQgHgNgQAAQgOAAgJANg");
	this.shape_177.setTransform(459.7,544.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgpBhQgGgCgEgDQgFgEgCgFQgCgGAAgKIAAhzQAAgJADgGQADgGAFgFIAPgJIASgHIATgFIAVgCQARAAAKAHQAKAIAAAQQAAAFgBAFIgEAKIgPAAIgeAGIgLAEIAACCIgLADIgQABg");
	this.shape_178.setTransform(442.3,544);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AhGCCQgHgCgEgDQgEgDgCgGQgCgHgBgJIAAi4QABgKAEgHQADgGAIgGQAMgIAQgEQAQgFAVAAQAVAAASAGQATAGANANQANAMAIATQAIATgBAZQABAZgHARQgHATgLAMQgMANgRAGQgSAGgTAAQgNAAgPgFIAABAQgFACgGAAIgRACgAgThNIgKAEIAABUIAKAEIAKABQAlAAAAguQAAgYgKgNQgIgLgRAAQgHAAgFABg");
	this.shape_179.setTransform(424.2,547.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AggBhQgNgCgKgEQgIgFgGgIQgFgHAAgKQAAgIADgHQAFgHAEgEQAKAFAPAGQAOAFAQAAQAKAAAGgDQAHgEAAgGQgBgFgEgDQgDgDgKgDIgLgCQgfgGgQgOQgPgNAAgbQAAgOAGgMQAFgLALgIQAKgHAPgFQAOgEARAAQAMAAANADQAKABALAEQAIAFAFAHQAGAHAAAIQAAAJgEAHQgDAGgFAEIgIgDIgagIIgOgBQgLABgGACQgGAEAAAFQAAAFAEACQAEADAIADIALACQAiAIAPAPQAPAOAAAYQAAAdgVARQgTAQgoAAQgRAAgLgDg");
	this.shape_180.setTransform(1487.4,501);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgKCJQgHgBgEgDQgFgEgCgFQgCgGAAgKIAAicIAMgCQAHgBAIgBIAOABQAHACAEAEQADACADAHQACAGABAKIAACbIgMACIgQABgAgXhOQgKgJABgQQgBgOAKgKQAIgKAPAAQAPAAAJAKQAJAJAAAPQAAAQgJAJQgJAKgPAAQgPAAgIgKg");
	this.shape_181.setTransform(1473.3,496.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgaBdQgTgGgNgNQgNgMgIgUQgIgSAAgaQAAgaAIgSQAHgRANgNQAMgLARgGQASgGAOABQAUAAAPAFQAQAHALAKQAMANAFANQAHARAAAQQAAANgHAGQgHAIgMABIhYAOQAEAMAMAIQAMAFAPAAQAQAAAMgDQANgEAJgFQAEADAGAHQADAHAAAIQAAARgPAIQgMAIgOABQgNADgOAAQgUgBgSgGgAgMgwQgGAEgEAEQgEAFgCAGIgCAMIA8gLQgBgHgGgIQgHgHgOAAQgHAAgHACg");
	this.shape_182.setTransform(1451.2,501);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("ABcBhQgGgCgFgDQgEgDgCgGQgDgHAAgJIAAhbQAAgLgGgGQgFgEgLAAQgGgBgFADQgGADgDACIABADIAACBIgMADIgQABIgNgBQgGgCgFgDQgEgDgCgGQgDgHAAgJIAAhbQAAgLgGgGQgHgEgJAAQgHAAgEACIgIADIAACGIgMADIgQABIgOgBQgGgCgFgDQgEgEgCgFQgDgHAAgJIAAhzQAAgLAFgFQADgGAIgGQANgKARgFQASgGAUAAQAPAAAOAFQAOADAKAJQAKgGAOgGQANgFAUAAQAMAAAPAEQANAEAKAIQAKAJAGANQAHAPAAASIAAB4IgMADIgQABg");
	this.shape_183.setTransform(1426,500.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AghBgQgPgEgMgIQgKgIgGgLQgHgNABgPQgBgbAPgNQAQgPAegDIAvgFIAAgDQAAgLgKgEQgIgGgRAAQgOABgNACQgOAEgKAEQgDgDgFgIQgDgGAAgIQABgKAEgGQAEgGAKgFQAOgEALgBQAMgCAPAAQARgBARAFQAPAEAMAIQALAKAHANQAFANAAASIAABWQAAAKgEAGQgGAGgHAEQgXAQgrAAQgTAAgOgEgAAAATQgKAAgHAEQgHAEAAAHQABAJAFAEQAFAFANAAQAHAAAHgCQAIgBADgCIAAgfg");
	this.shape_184.setTransform(1400.6,501);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgbBzQgXgHgRgPQgQgOgKgYQgKgXAAgeQAAgeALgYQALgYARgPQAQgPAYgIQAWgIAXAAQAiAAAUAMQAUAMAAATQAAAJgFAHQgEAIgGAFQgKgHgNgFQgMgFgSAAQgeAAgRASQgSASAAAgQAAASAFAMQAEANAJAJQAIAIALAEQAJAEANAAQAIAAAGgBIAJgEIAAgkIgmAAQgDgGgBgFQgCgHAAgIQAAgMAGgHQAGgGAJAAIA9AAQAKAAAGAHQAGAGAAALIAABOQAAAMgEAFQgDAGgJAGIgNAFQgJAEgHACIgTADIgUABQgZAAgWgIg");
	this.shape_185.setTransform(1379,498.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AggBhQgPgCgIgEQgJgFgFgIQgFgGAAgLQAAgJAEgGIAIgLQAJAFAPAGQAPAFARAAQAJAAAHgDQAFgEAAgGQABgFgFgDQgEgEgKgCIgKgCQgfgGgQgOQgPgNAAgbQAAgNAGgNQAFgLALgIQALgIAOgEQAPgEAQAAQAMAAANADQAJABALAEQAJAFAFAHQAFAGAAAJQAAAJgDAHQgDAGgEAEIgJgDIgbgIIgMgBQgLABgHACQgHAEABAFQgBAEAEADQAFADAIADIALACQAjAIAOAPQAPAOAAAYQAAAdgUARQgWAQgmAAQgRAAgLgDg");
	this.shape_186.setTransform(1351.5,501);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgKCJQgGgBgEgDQgFgEgCgFQgCgHgBgJIAAicIAMgCQAIgBAIgBIANABQAHACAEAEQAEACADAHQACAGAAAKIAACbIgMACQgIABgHAAgAgXhOQgJgLAAgOQAAgOAJgKQAJgKAOAAQAPAAAJAKQAKAKgBAOQABAQgKAJQgJAKgPAAQgOAAgJgKg");
	this.shape_187.setTransform(1337.3,496.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AAsCAQgGgCgFgDQgEgEgCgFQgDgHAAgJIAAhVQAAgPgGgHQgIgGgKAAQgIAAgGACQgHACgDADIAACFIgMADIgPABIgPgBQgGgCgEgDQgFgEgCgFQgCgGAAgKIAAjeIALgDIAQgBIAPABQAFACAFADQAEADADAGQACAHAAAJIAAAmIAOgFQAKgCALAAQAiAAAVATQAUAUAAAkIAAB0IgLADIgRABg");
	this.shape_188.setTransform(1321.8,497.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgnBmQgRgQAAgiIAAikIALgDQAIgBAIAAQAQAAAJAGQAIAGAAATIAAAZIAvAAQADAFABAFQACAGAAAIQAAANgGAHQgGAGgJAAIggAAIAAA5QAAAKAFAEQAGAEALAAIALgBQAGAAAEgCIAGAJQACAFAAAIQAAAPgKAJQgLAJgZAAQgeAAgSgPg");
	this.shape_189.setTransform(1304.4,499.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AAsBhQgGgCgEgDQgFgDgCgGQgCgHAAgJIAAhaQAAgMgGgFQgGgGgMABIgNABIgMAGIAACEIgLADIgQABIgOgBQgHgCgEgDQgFgEgCgFQgCgHAAgJIAAhyQAAgLAEgGQAEgGAHgGQANgKASgFQATgGAVAAQAoAAAXATQAWATAAAiIAAB3IgLADIgQABg");
	this.shape_190.setTransform(1279.1,500.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgKCJQgGgBgFgDQgEgEgCgFQgCgHgBgJIAAicIAMgCQAIgBAIgBIANABQAHACAEAEQAEACACAHQADAGAAAKIAACbIgMACQgIABgHAAgAgXhOQgKgLABgOQgBgOAKgKQAJgKAOAAQAPAAAJAKQAKAKgBAOQABAQgKAJQgJAKgPAAQgOAAgJgKg");
	this.shape_191.setTransform(1263.5,496.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AggB7QgSgGgNgOQgMgLgHgUQgHgTAAgWQAAgZAHgSQAHgTANgMQAMgMASgHQARgGATAAQAHAAAHACIALADIAAg/IAMgCIAQgBIAOABQAGABAFADQAEAEACAGQACAFAAAKIAAC2QAAASgQALQgLAIgQAFQgPAFgXAAQgXAAgSgHgAgRgFQgKALAAAZQAAAXAKANQAKAMARAAQAHAAAEgCQAHgDABgCIAAhUQgGgEgLAAQgTAAgKALg");
	this.shape_192.setTransform(1240.3,497.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgaBdQgSgGgOgNQgNgMgIgUQgIgSAAgaQAAgaAIgSQAIgSAMgMQAMgLARgGQARgGAPABQAUAAAPAFQAQAHALAKQALALAHAPQAGAQAAARQAAAOgHAFQgGAIgNABIhYAOQAEAMAMAIQALAFAQAAQARAAALgDQANgEAJgFQAFADAEAHQAEAGAAAJQAAASgPAHQgLAHgPACQgMADgPAAQgTgBgTgGgAgMgwQgGAEgEAEQgEAFgCAGIgCAMIA8gLQAAgHgIgIQgGgHgOAAQgHAAgHACg");
	this.shape_193.setTransform(1220.3,501);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgnBmQgRgQAAgiIAAikIALgDQAIgBAIAAQAQAAAJAGQAIAGAAATIAAAZIAvAAQADAFABAFQACAGAAAIQAAANgGAHQgFAGgKAAIggAAIAAA5QAAAKAFAEQAGAEALAAIALgBQAGAAAEgCIAGAJQACAFAAAIQAAAPgKAJQgLAJgZAAQgeAAgSgPg");
	this.shape_194.setTransform(1203.6,499.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AAsBhQgGgCgEgDQgFgDgCgGQgCgHAAgJIAAhaQAAgMgGgFQgGgGgMABIgNABIgMAGIAACEIgLADIgQABIgOgBQgHgCgEgDQgFgEgCgFQgCgHAAgJIAAhyQAAgLAEgGQAEgGAHgGQANgKASgFQATgGAVAAQAoAAAXATQAWATAAAiIAAB3IgLADIgQABg");
	this.shape_195.setTransform(1185.5,500.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgaBdQgSgGgOgNQgMgLgJgVQgIgTAAgZQAAgZAIgTQAIgSAMgMQAMgLARgGQARgGAPABQAUAAAPAFQAQAHALAKQALALAHAPQAGAQAAARQAAAOgHAFQgGAIgNABIhYAOQAEAMAMAIQALAFAQAAQARAAALgDQANgEAJgFQAFADAEAHQAEAGAAAJQAAASgPAHQgLAHgPACQgMADgPAAQgTgBgTgGgAgMgwQgGAEgEAEQgEAFgCAGIgCAMIA8gLQAAgHgIgIQgGgHgOAAQgHAAgHACg");
	this.shape_196.setTransform(1165.1,501);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AggBhQgOgCgIgEQgJgFgGgIQgFgHAAgKQAAgJAEgGQADgGAFgFQAJAFAQAGQAPAFAPAAQAJAAAHgDQAGgEABgGQgBgFgEgDQgDgDgKgDIgLgCQgfgGgQgOQgPgNAAgbQAAgOAGgMQAGgLAKgIQAKgHAPgFQAPgEAQAAQAMAAANADQAKABAKAEQAJAFAGAHQAEAHAAAIQAAAJgDAHQgCAFgGAFIgIgDIgbgIIgMgBQgMABgFACQgHAEAAAFQAAAFAEACQAEADAIADIALACQAjAIAPAPQAOAOAAAYQAAAdgVARQgTAQgoAAQgSAAgKgDg");
	this.shape_197.setTransform(1146.6,501);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgaBdQgTgHgNgMQgNgMgIgUQgIgTAAgZQAAgZAIgTQAHgRANgNQALgKASgHQARgGAPABQATAAAQAFQAQAHALAKQAMANAFANQAHAPAAASQAAANgHAGQgHAIgMABIhYAOQADAMANAIQALAFAQAAQAQAAAMgDQANgEAIgFQAHAEADAGQAEAHAAAIQAAASgPAHQgMAIgOABQgNADgOAAQgUgBgSgGgAgMgwQgHADgDAFQgEAFgCAGIgCAMIA8gLQgBgIgHgHQgGgHgOAAQgIAAgGACg");
	this.shape_198.setTransform(1127.7,501);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgpBhQgHgCgDgDQgEgDgDgGQgCgGAAgKIAAhzQAAgJADgGQADgGAFgFIAPgJIASgHIATgFIAVgCQARAAAKAHQAKAIAAAQQAAAFgBAFIgEAKIgPAAIgeAGIgLAEIAACCIgLADIgQABg");
	this.shape_199.setTransform(1111,500.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AhGCCQgGgCgFgDQgEgDgCgGQgCgGAAgKIAAi4QAAgLAEgGQADgGAIgGQAMgIAQgEQAQgFAVAAQAVAAASAGQATAGANANQANAMAIATQAHATAAAZQAAAZgGARQgHATgMAMQgLANgRAGQgSAGgTAAQgNAAgPgFIAABAQgFACgHAAQgIACgIAAgAgThNIgKAEIAABUIAKAEIALABQAkAAAAguQAAgZgKgMQgIgLgRAAQgHAAgFABg");
	this.shape_200.setTransform(1092.8,504.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AAtBhQgHgCgEgDQgFgEgCgFQgCgGAAgKIAAhaQAAgMgHgFQgFgGgMABIgNABIgMAGIAACEIgLADIgRABIgNgBQgHgCgEgDQgEgDgDgGQgCgGAAgKIAAhyQAAgKAEgHQAFgHAGgFQAMgJATgGQATgGAVAAQApAAAWATQAWATAAAiIAAB3IgMADIgQABg");
	this.shape_201.setTransform(1064.2,500.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgmBdQgRgIgMgMQgMgLgIgVQgGgRAAgYQAAgXAGgSQAIgTAMgLQALgNASgIQASgGAUAAQAUAAASAGQASAIAMANQANAOAGARQAHAUAAAUQAAAXgHATQgGATgNANQgNANgRAGQgQAHgWAAQgWgBgQgGgAgWgiQgJAMAAAWQAAAXAJANQAIAMAOAAQAPABAJgNQAIgNAAgXQAAgWgJgMQgIgNgPAAQgOAAgIANg");
	this.shape_202.setTransform(1043.2,501);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgKCJQgHgCgEgCQgDgDgEgGQgCgGAAgKIAAicIAMgCQAIgBAHgBIAOABQAHACADAEQAEACADAHQACAEAAAMIAACbIgLACIgQABgAgYhOQgJgJAAgQQAAgOAJgKQALgKANAAQAPAAAJAKQAJAKAAAOQAAAQgJAJQgJAKgPAAQgNAAgLgKg");
	this.shape_203.setTransform(1027.6,496.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgnBmQgRgQAAgiIAAikIAMgDQAHgBAIAAQAQAAAJAGQAIAGgBATIAAAZIAwAAIAEAKIACAOQAAANgFAHQgHAGgJAAIghAAIAAA5QABAKAFAEQAGAEALAAIALgBIAKgCIAGAJQADAGgBAHQAAAPgKAJQgLAJgZAAQgeAAgSgPg");
	this.shape_204.setTransform(1015.7,499.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AghBgQgPgEgMgIQgKgIgHgLQgFgNgBgPQAAgbAPgNQAPgPAfgDIAugFIAAgDQAAgLgJgEQgIgGgSAAQgNABgNACQgMAEgLAEQgFgEgEgHQgDgIAAgGQAAgKAEgGQAEgFALgGQANgEALgBQAMgCAPAAQATgBAPAFQAQAEAMAIQAMAKAFANQAHANAAASIAABWQAAAJgGAHQgEAFgIAFQgYAQgqAAQgTAAgOgEgAAAATQgKAAgHAEQgGAEgBAHQABAJAFAEQAFAFANAAIANgCQAJgBACgCIAAgfg");
	this.shape_205.setTransform(997.9,501);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("ABcBhQgGgCgFgDQgEgDgCgGQgDgFAAgLIAAhbQAAgLgFgGQgHgEgKAAQgGgBgFADQgGADgCACIAACEIgMADIgPABIgOgBQgGgCgFgDQgEgDgCgGQgCgHAAgJIAAhbQgBgLgGgGQgHgEgJAAQgHAAgFACIgIADIAACGIgLADIgQABIgOgBQgGgCgEgDQgFgDgCgGQgCgHAAgJIAAhzQAAgKADgGQAGgIAGgEQALgJAUgGQARgGAVAAQAOAAAOAFQAOADAKAJQAJgGAQgGQANgFATAAQANAAANAEQAPAEAJAIQAKAIAHAOQAFAOAAATIAAB4IgKADIgRABg");
	this.shape_206.setTransform(973.3,500.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgpBhQgGgCgFgDQgEgDgCgGQgCgHgBgJIAAhzQAAgJADgGQAEgGAFgFIAPgJIAlgMIAVgCQARAAAKAHQALAIAAAQQgBAFgBAFIgEAKIgPAAIgeAGIgLAEIAACCIgKADIgQABg");
	this.shape_207.setTransform(951.3,500.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AglBdQgRgHgNgNQgNgNgGgTQgHgTAAgWQAAgVAHgUQAHgRAMgNQAMgNASgIQASgGATAAQAVAAASAGQASAJALAMQANANAHASQAGASAAAWQAAAZgGARQgHAUgNAMQgMANgRAGQgRAHgWAAQgVgBgQgGgAgWgiQgJAMAAAWQAAAXAJANQAJAMANAAQAPABAJgNQAIgMAAgYQAAgXgIgLQgJgNgPAAQgOAAgIANg");
	this.shape_208.setTransform(932.7,501);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AguCDQgFgBgFgDQgFgEgCgGQgCgGAAgJIAAifQAAgUAHgOQAFgOAMgJQAKgJAPgEQAPgEAPAAQAbAAAMAHQANAIAAASQAAAIgEAGQgDAGgDADIgOgDQgIgCgKAAQgOAAgKAGQgHAGAAANIAAANIA6AAQADAFABAFQACAGAAAIQAAAOgGAFQgEAGgLAAIgoAAIAAB6IgLACIgQABg");
	this.shape_209.setTransform(915.2,497.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AAtBhQgHgCgEgDQgFgEgCgFQgCgGAAgKIAAhaQAAgMgGgFQgGgGgLABIgOABIgMAGIAACEIgLADIgQABIgPgBQgFgCgFgDQgEgDgDgGQgCgFAAgLIAAhyQAAgKAEgHQAFgHAHgFQALgJATgGQATgGAWAAQAoAAAWATQAWATAAAiIAAB3IgMADIgQABg");
	this.shape_210.setTransform(896.2,500.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgKCJQgHgCgDgCQgFgDgCgGQgCgGAAgKIAAicIALgCQAIgBAIgBIANABQAGACAEAEQAEACADAHQACAEAAAMIAACbIgLACIgQABgAgYhOQgIgJgBgQQABgOAIgKQAKgKAOAAQAOAAALAKQAIAKABAOQgBAQgIAJQgLAKgOAAQgOAAgKgKg");
	this.shape_211.setTransform(880.6,496.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("Ag4B4QgJgLgCgOQAPgNAIgJQAMgKAJgNQgGgCgHgHQgHgHgIgUIgchUIgLgtQAGgGAHgEQAJgDAKAAQAMgBAJAGQAIAGAEAPIAbBpIACAAIAQg7IAIghIAGggQANgHAPAAQANgBAIAGQAIAGAAAPQAAAHgCAQIgHAeIgKAfIgkBXQgNAWgGAIQgJANgIAGQgHAHgIACQgGADgKAAQgPAAgKgKg");
	this.shape_212.setTransform(858.3,504.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AAsBhQgGgCgEgDQgFgDgCgGQgCgHAAgJIAAhaQAAgMgGgFQgGgGgMABIgNABQgIADgEADIAACEIgLADIgQABIgOgBQgHgCgEgDQgFgEgCgFQgCgHAAgJIAAhyQAAgLAEgGQAEgGAHgGQANgKASgFQATgGAVAAQAoAAAXATQAWATAAAiIAAB3IgLADIgQABg");
	this.shape_213.setTransform(838,500.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AghBgQgOgEgNgIQgKgIgHgLQgFgNAAgPQgBgbAPgNQAQgPAegDIAvgFIAAgDQAAgLgKgEQgIgGgRAAQgOABgNACQgOAEgKAEQgDgDgFgIQgCgGgBgIQABgKAEgGQAEgGAKgFQAOgEALgBQAMgCAPAAQARgBARAFQAPAEAMAIQALAKAHANQAFANAAASIAABWQAAAKgEAGQgGAGgHAEQgXAQgrAAQgTAAgOgEgAAAATQgKAAgHAEQgHAEAAAHQABAJAFAEQAFAFANAAQAHAAAHgCQAIgBADgCIAAgfg");
	this.shape_214.setTransform(817.3,501);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgnBmQgRgQAAgiIAAikIALgDQAIgBAIAAQARAAAIAGQAHAGABATIAAAZIAvAAIAEAKIACAOQAAAOgGAGQgFAGgKAAIggAAIAAA5QAAAKAFAEQAGAEALAAIALgBIAKgCIAGAJQACAGAAAHQAAAPgKAJQgKAJgaAAQgeAAgSgPg");
	this.shape_215.setTransform(794,499.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgiBgQgPgEgLgIQgKgIgHgLQgFgNAAgPQAAgbAOgNQAPgPAfgDIAugFIAAgDQAAgLgJgEQgKgGgPAAQgOABgNACQgMAEgLAEQgFgDgEgIQgDgGAAgIQAAgKAEgGQAEgFALgGQANgEALgBQANgCAOAAQATgBAPAFQAQAEAMAIQAKAJAHAOQAHANgBASIAABWQAAAJgFAHQgFAGgHAEQgYAQgqAAQgTAAgPgEgAAAATQgLAAgGAEQgGAEgBAHQABAJAFAEQAFAFANAAIANgCQAIgBAEgCIAAgfg");
	this.shape_216.setTransform(776.1,501);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AAtCAQgHgCgEgDQgEgDgCgGQgDgHAAgJIAAhVQAAgPgHgHQgIgGgKAAQgHAAgGACQgIACgDADIAACFIgLADIgQABIgOgBQgHgCgEgDQgEgEgDgFQgCgHAAgJIAAjeIAMgDIAPgBIAPABQAGACAEADQAFAEACAFQACAHAAAJIAAAmQAFgDAKgCQAJgCALAAQAkAAATATQAUATAAAlIAAB0IgLADIgQABg");
	this.shape_217.setTransform(756.2,497.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgnBmQgRgQAAgiIAAikIALgDQAIgBAIAAQAQAAAJAGQAIAGAAATIAAAZIAvAAIAEAKIACAOQAAANgGAHQgGAGgIAAIghAAIAAA5QgBAKAHAEQAFAEALAAIAMgBIAKgCIAFAJQADAGAAAHQAAAPgLAJQgLAJgZAAQgeAAgSgPg");
	this.shape_218.setTransform(738.9,499.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgaBdQgTgHgNgMQgNgMgIgUQgIgUAAgYQAAgYAIgUQAHgRANgNQALgKASgHQARgGAPABQATAAAQAFQAQAHALAKQAMANAFANQAHAPAAASQAAANgHAGQgHAIgMABIhYAOQAEAMANAIQALAFAQAAQAPAAAMgDQANgEAIgFQAFADAGAHQADAHAAAIQAAASgPAHQgLAIgPABQgNADgOAAQgUgBgSgGgAgLgwQgIADgDAFQgDAFgDAGIgCAMIA8gLQgBgIgGgHQgHgHgOAAQgIAAgFACg");
	this.shape_219.setTransform(714.2,501);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("Ag3B6QgTgJAAgWQAAgJAEgGQADgGAEgEQAKAGAOAEQAOAEANAAQASAAAMgHQAMgHAAgPIAAgGQgQAHgTAAQgRAAgOgFQgOgFgMgMQgKgJgHgTQgHgRAAgXQAAgXAHgSQAHgRAMgMQAMgKASgHQASgFASAAQAUAAARAFQATAHAKAIQAGAEAFAIQAEAHAAAKIAACGQAAATgHAQQgHAPgNAJQgMAKgRAFQgQAEgTAAQggAAgTgJgAgQhEQgJAKAAAUQAAAWAJAKQAJAJAMAAQAOAAAKgGIAAhHIgIgDQgFgCgHAAQgQAAgJALg");
	this.shape_220.setTransform(693.7,504.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AggB7QgSgGgNgOQgNgNgGgSQgHgTAAgWQAAgZAHgSQAHgTANgMQAMgMASgHQARgGATAAQAHAAAHACIALADIAAg/IAMgCIAQgBIAOABQAGABAFADQAEAFACAFQACAFAAAKIAAC2QAAASgQALQgLAIgQAFQgPAFgXAAQgXAAgSgHgAgRgFQgKALAAAZQAAAXAKANQAKAMARAAQAHAAAEgCQAGgCACgDIAAhUQgGgEgLAAQgTAAgKALg");
	this.shape_221.setTransform(672.9,497.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgaBdQgSgGgOgNQgNgMgIgUQgIgSAAgaQAAgaAIgSQAIgSAMgMQAMgLARgGQARgGAPABQAUAAAPAFQAQAHALAKQALALAHAPQAGAQAAARQAAAOgHAFQgGAIgNABIhYAOQAEAMAMAIQALAFAQAAQARAAALgDQANgEAJgFQAFADAEAHQAEAGAAAJQAAASgPAHQgLAHgPACQgMADgPAAQgTgBgTgGgAgMgwQgGAEgEAEQgEAFgCAGIgCAMIA8gLQAAgHgIgIQgGgHgOAAQgHAAgHACg");
	this.shape_222.setTransform(652.9,501);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgKCAQgHgCgEgDQgEgDgDgGQgBgGAAgKIAAjeIALgDIAPgBIAOABQAGACAFADQAEADACAGQACAFABALIAADeIgMACIgQACg");
	this.shape_223.setTransform(638,497.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AAbBSIgUhEIgFgZIgZBiQgEAGgJACQgIADgNAAQgPAAgKgFQgLgDgEgJQgEgKgFgTIgUhcIgHgrQAGgGAIgEQAJgEAJAAQANAAAIAGQAIAHACAOIAOBrIACAAIAZhvIAPgHQAGgCAKAAQAOAAAIAEQAIAFADAIIAZBnIACAAIAPh+QAGgEAHgCQAHgCAIAAQAMAAAJAGQAIAGAAAOIgCASIgaB5QgDANgDAGQgFAFgLADQgJADgNAAQgeAAgFgQg");
	this.shape_224.setTransform(618.7,501);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AglBdQgRgHgNgNQgNgNgGgTQgHgTAAgWQAAgVAHgUQAHgRAMgNQAMgNASgIQASgGATAAQAVAAASAGQASAJALAMQAMAMAIATQAGASAAAWQAAAZgGARQgIAUgMAMQgMANgRAGQgRAHgWAAQgVgBgQgGgAgWgiQgJAMAAAWQAAAXAJANQAIAMAOAAQAPABAJgNQAIgMAAgYQAAgWgJgMQgIgNgPAAQgOAAgIANg");
	this.shape_225.setTransform(593.9,501);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AAsBhQgGgCgEgDQgFgDgCgGQgCgHAAgJIAAhaQAAgMgGgFQgGgGgMABIgNABQgIADgEADIAACEIgLADIgQABIgOgBQgHgCgEgDQgFgEgCgFQgCgHAAgJIAAhyQAAgLAEgGQAEgGAHgGQANgKASgFQATgGAVAAQAoAAAXATQAWATAAAiIAAB3IgLADIgQABg");
	this.shape_226.setTransform(572.9,500.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AAfB7QgJgGgKgOIgjgwIAABGIgMACQgHABgIAAIgPgBQgGgBgEgDQgFgEgCgFQgCgHAAgJIAAjfIAMgCIAPgBIAOABQAHABAEADQAFAFACAFQACAGAAAJIAABlIA9hCQASgBAMAKQALAJAAANQAAAFgBAGQgEAGgCADIgKALIgiAfIA5A9QgCAUgIAIQgIAKgPAAQgMAAgJgGg");
	this.shape_227.setTransform(552.9,497.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgRBcQgSgGgNgOQgMgMgIgTQgIgRABgXQAAgYAHgTQAIgTANgNQAOgMARgHQARgFATAAQAaAAANAKQAPAJAAARQAAAGgEAHQgDAGgEAFIgPgGQgIgDgKAAQgJAAgIADQgIAEgGAGQgGAGgDAIQgEAJAAALQAAAYANAMQAMALASABQAMgBAHgCIAOgGQAIAHACAFQAFAGAAAJQAAAQgPAJQgNAIgZABQgXAAgSgIg");
	this.shape_228.setTransform(533.6,501);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgiBgQgPgEgLgIQgLgIgFgLQgHgNAAgPQABgbAOgNQAPgPAfgDIAugFIAAgDQAAgLgJgEQgJgGgQAAQgOABgOACQgMAEgLAEQgEgDgDgIQgEgGAAgIQAAgKAFgGQADgFAKgGQAOgEALgBQAMgCAPAAQATgBAQAFQAPAEAMAIQAKAJAIAOQAFANABASIAABWQAAAJgGAHQgFAGgHAEQgYAQgqAAQgUAAgOgEgAgBATQgKAAgGAEQgHAEABAHQgBAJAGAEQAFAFANAAIAOgCQAHgBADgCIAAgfg");
	this.shape_229.setTransform(514.6,501);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgaBdQgSgGgOgNQgOgMgHgUQgIgTAAgZQAAgZAIgTQAHgRANgNQAMgLARgGQARgGAPABQATAAAQAFQAQAHALAKQAMANAFANQAHAPAAASQAAANgHAGQgHAIgMABIhYAOQAEANAMAHQALAFAQAAQAQAAAMgDQANgEAJgFQAGAEADAGQAEAHAAAIQAAASgPAHQgMAIgOABQgMADgPAAQgUgBgSgGgAgMgwQgGADgEAFQgEAFgCAGIgCAMIA8gLQgBgIgHgHQgGgHgOAAQgIAAgGACg");
	this.shape_230.setTransform(488.2,501);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AAmByQgLgFgDgIIgWhTIgTBZQgFAFgLADQgKAEgOAAQgQAAgNgFQgOgFgDgIIgHgVIgii4QAFgGAJgDQAJgFAKAAQAOAAAJAGQAIAHADAPIAVCUIACAAIAZh1IAMgFQAJgCAIgBQANAAAMAGQAJAEADAJIAaBqIACAAIATioQANgIAPAAQAOAAAKAGQAJAGAAAPIgUCLQgEAXgEAMQgDAOgEAKQgGAFgMADQgLAEgOAAQgRAAgMgFg");
	this.shape_231.setTransform(462.6,498.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("Ag0CWQgIgHAAgPQAAgKADgLIBEkGIASgBQAPAAAIAGQAJAGAAAPQAAAMgDAJIhEEIIgSABQgPAAgJgHg");
	this.shape_232.setTransform(441,498.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgLB2QgHgCgEgCQgFgGgBgFQgCgGAAgJIAAjLIAdgDQAHAAAGABQAHACAEADQAEADACAGQACAGABAKIAADLIgNACIgRABQgHABgGgCg");
	this.shape_233.setTransform(429.4,498.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#72030A").s().p("EhYpArxQinAAiYhAQiTg/hyhyQhyhxg+iUQhBiYAAimMAAAg94QAAimBBiZQA+iUByhxQByhyCTg+QCYhBCnAAMCxTAAAQCnAACYBBQCUA+BxByQByBxA+CUQBBCZAACmMAAAA94QAACmhBCYQg+CUhyBxQhxByiUA/QiYBAinAAgEhffglwQi1C1AAEAMAAAA94QAAEAC1C0QC2C2EAgBMCxTAAAQEAABC2i2QC1i0AAkAMAAAg94QAAkAi1i1Qi2i1kAAAMixTAAAQkAAAi2C1g");
	this.shape_234.setTransform(960,639.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("EBfggAgQi2i1kAAAMixTAAAQkAAAi2C1QitCtgIDyIAAiUQAAj/C1i1QC2i1EAAAMCxTAAAQEAAAC2C1QC1C1AAD/IgBCUQgHjyititg");
	this.shape_235.setTransform(960,417.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.shape_166,this.shape_167,this.shape_168,this.shape_169,this.shape_170,this.shape_171,this.shape_172,this.shape_173,this.shape_174,this.shape_175,this.shape_176,this.shape_177,this.shape_178,this.shape_179,this.shape_180,this.shape_181,this.shape_182,this.shape_183,this.shape_184,this.shape_185,this.shape_186,this.shape_187,this.shape_188,this.shape_189,this.shape_190,this.shape_191,this.shape_192,this.shape_193,this.shape_194,this.shape_195,this.shape_196,this.shape_197,this.shape_198,this.shape_199,this.shape_200,this.shape_201,this.shape_202,this.shape_203,this.shape_204,this.shape_205,this.shape_206,this.shape_207,this.shape_208,this.shape_209,this.shape_210,this.shape_211,this.shape_212,this.shape_213,this.shape_214,this.shape_215,this.shape_216,this.shape_217,this.shape_218,this.shape_219,this.shape_220,this.shape_221,this.shape_222,this.shape_223,this.shape_224,this.shape_225,this.shape_226,this.shape_227,this.shape_228,this.shape_229,this.shape_230,this.shape_231,this.shape_232,this.shape_233,this.shape_234,this.shape_235];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(310.5,359,1299,560.2), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgyfAGxQhDABgvgwQgvguAAhDIAAohQAAhCAvgwQAvguBDgBMBk/AAAQBDABAvAuQAvAwAABCIAAIhQAABDgvAuQgvAwhDgBg");
	mask.setTransform(339.3,43.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7E519C","#8253A0","#9B62BB","#A467C5"],[0,0.082,0.659,1],0,42.3,0,-42.2).s().p("Eg1AAGxIAAtiMBqBAAAIAANig");
	this.shape.setTransform(339.3,43.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,678.7,86.7), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApcMeIAA47IS5AAIAAY7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.4,-79.8,120.9,159.6);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_4();
	this.instance.parent = this;
	this.instance.setTransform(337.2,245.1,0.667,0.667,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-302.8,-114.9,1280,720);


(lib.panel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(433,120.7,0.667,0.667,0,0,0,960,540);

	this.instance_1 = new lib.ClipGroup_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(433,186.7,0.667,0.667,0,0,0,629.3,259.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207,-239.3,1280,720);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_5();
	this.instance.parent = this;
	this.instance.setTransform(339.3,22.8,1,1,0,0,0,339.3,22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,678.7,45.5), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	mask.setTransform(960,540);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguCxQgagJgTgTQgTgUgJgaQgKgZAAgiQAAglALgaQAKgaASgSQASgRAZgKQAagIAaAAQAMAAAJACIAQAEIAAhZIAQgDQAKgCAOAAIAUABQAIABAHAGQAHAGADAHQADAJAAAOIAAEGQAAAagXAPQgPALgYAHQgXAIggAAQggAAgbgKgAgZgHQgPAQAAAjQAAAhAOATQAPARAZAAQAKAAAHgDQAHgDAEgEIAAh5QgKgGgPAAQgbAAgPARg");
	this.shape.setTransform(1236.8,805.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmCGQgZgIgVgTQgTgSgLgcQgMgdABgjQgBgkAMgbQALgaASgRQASgRAYgIQAWgIAYAAQAbAAAXAJQAXAJAQAPQARAPAJAWQAIAWABAZQgBASgJAKQgLALgRACIh/AUQAGASARAKQARAJAXAAQAVAAATgGQAUgGALgHQAIAFAGAKQAGAKAAALQgBAZgVAMQgQAKgVADQgUADgTAAQgeAAgagJgAgRhFQgKAEgFAHQgFAGgEAKQgCAIgBAJIBXgPQgBgMgKgKQgKgLgTAAQgKAAgKAEg");
	this.shape_1.setTransform(1208,809.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmCGQgZgIgVgTQgTgSgLgcQgLgbAAglQAAglALgaQALgaASgRQATgRAXgIQAWgIAYAAQAcAAAWAJQAYAJAPAPQAQAPAJAWQAJAWAAAZQAAATgJAJQgLALgRACIh/AUQAFATATAJQAQAJAXAAQAUAAAUgGQATgGAMgHQAJAGAFAJQAGAKAAALQAAAZgWAMQgQAKgWADQgTADgTAAQgeAAgagJgAgRhFQgJAEgGAHQgGAHgDAJQgCAIgBAJIBYgPQgDgMgJgKQgJgLgUAAQgLAAgJAEg");
	this.shape_2.setTransform(1179.6,809.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYCEQgagJgTgTQgTgSgLgbQgKgaAAgfQAAgjALgdQAKgZAUgUQATgRAagJQAYgJAcAAQAlAAAUAOQAUAPAAAWQAAALgEAJQgFAJgGAHIgVgJQgMgDgPAAQgNAAgMADQgLAFgIAJQgIAJgGAMQgFAMAAARQAAAiASARQASARAaAAQARAAAKgDQAJgDALgFQAKAGAGALQAFAJAAANQAAAWgUANQgUAMgkAAQghAAgZgLg");
	this.shape_3.setTransform(1152.6,809.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag2CFQgagKgRgSQgSgTgKgaQgKgcAAggQAAgfAKgcQAKgaASgTQARgSAagKQAZgKAdAAQAeAAAaAKQAXAJATAUQASASAKAbQAKAZAAAhQAAAkgKAZQgKAbgSASQgTATgXAJQgZAJgfAAQgdAAgZgKgAghgyQgLASAAAgQAAAiAMASQAMASAVAAQAVAAAMgTQAMgSAAghQAAgggMgSQgMgSgWAAQgVAAgMASg");
	this.shape_4.setTransform(1124.8,809.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag7CLQgHgBgJgFQgFgFgEgJQgEgKABgMIAAimQgBgNAFgJQAEgJAJgHQAJgIALgFQANgGAOgEQAKgEARgDQARgDANAAQAZAAAPALQAOAKAAAXIgCAPIgFAOIgsAEIgVAFIgQAGIAAC8IgPADIgYACg");
	this.shape_5.setTransform(1099.9,809.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhjCsQgKgDgFgEQgFgEgFgKQgDgIAAgPIAAkEQAAgMAHgGQAEgGAMgEQATgHAVgDQAWgDAXAAQBGAAAmAgQAmAiAAA3QAAAbgIAWQgHAWgQAPQgQAPgZAJQgYAJgfAAIgkAAIAABmIgSAEIgXABQgNAAgJgCgAglheIAABWIAcAAQAVAAAMgKQALgLAAgXQAAgVgMgLQgMgMgWAAg");
	this.shape_6.setTransform(1074.4,806.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag3CFQgYgJgSgTQgSgTgKgaQgKgaAAgiQAAghAKgaQAKgaASgTQASgTAYgJQAagKAdAAQAfAAAYAKQAYAKATATQASAUAKAZQAKAbAAAfQAAAigKAbQgKAagSATQgSATgZAJQgYAJgfAAQgdAAgagKgAghgyQgMASAAAgQAAAiAMASQANASAUAAQAXAAALgTQALgRAAgiQAAgggLgSQgMgSgWAAQgVAAgMASg");
	this.shape_7.setTransform(1032.8,809.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag4CSQgZgWAAgyIAAjsIARgDQAJgDANAAQAWAAANAJQAMAJAAAbIAAAkIBEAAIAGAPQADAKAAAKQAAATgIAJQgIAJgNAAIgwAAIAABTQAAAOAIAGQAJAGAQAAIAQgBIAOgEIAIAOQAEAJAAAJQAAAWgPAMQgPAOglAAQgtAAgYgXg");
	this.shape_8.setTransform(1007.9,807.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmCGQgZgIgVgTQgTgSgLgcQgLgbAAglQAAglALgaQALgaASgRQATgRAWgIQAYgIAXAAQAcAAAWAJQAYAJAPAPQAQAPAJAWQAJAWAAAZQAAATgJAJQgLALgRACIh/AUQAFASASAKQARAJAXAAQAUAAAUgGQATgGAMgHQAIAFAGAKQAFAJAAAMQAAAZgVAMQgQAKgWADQgTADgTAAQgeAAgagJgAgRhFQgJAEgGAHQgGAHgDAJQgCAIgBAJIBYgPQgDgMgJgKQgJgLgUAAQgLAAgJAEg");
	this.shape_9.setTransform(972.3,809.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhQCvQgbgNAAgfQAAgMAGgKQADgJAIgGQAPAKATAFQAUAHATgBQAaAAARgKQARgKAAgWIAAgIQgWAJgdABQgXAAgWgIQgUgHgQgRQgQgQgKgYQgKgZAAgiQAAghALgZQAJgZATgRQAQgPAagJQAYgIAdAAQAeAAAXAIQAZAJAQAMQAKAHAGAKQAHAKgBAOIAADCQAAAdgKAVQgKAVgSAOQgSAPgYAHQgXAGgcAAQgvAAgbgOgAgYhjQgMAOAAAdQAAAhAMAOQANANATAAQAUAAANgJIAAhnIgLgEQgGgCgLAAQgYAAgNAPg");
	this.shape_10.setTransform(942.8,814.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AguCxQgbgJgSgTQgSgTgKgbQgKgZAAgiQAAgmAKgZQALgaASgSQASgRAZgKQAagIAaAAQAMAAAIACIAQAEIAAhZIASgDQAJgCANAAIAVABQAIABAHAGQAHAFACAIQAEAJAAAOIAAEGQgBAagWAPQgOAKgZAIQgXAIggAAQggAAgbgKgAgYgHQgQAQABAjQgBAiAOASQAOARAaAAQAJAAAIgDQAIgEADgDIAAh5QgKgGgPAAQgbAAgOARg");
	this.shape_11.setTransform(913,805.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgmCGQgagJgUgSQgTgSgLgcQgLgbAAglQAAglALgaQAKgZATgSQATgRAXgIQAWgIAYAAQAcAAAWAJQAXAJAQAPQAQAPAJAWQAJAWAAAZQAAATgJAJQgKALgSACIh/AUQAGATASAJQAQAJAXAAQAUAAAUgGQATgGAMgHQAJAGAFAJQAGAKAAALQAAAZgWAMQgQAKgVADQgUADgTAAQgeAAgagJgAgRhFQgJAEgGAHQgGAHgDAJQgDAMAAAFIBYgPQgCgLgKgLQgJgLgUAAQgLAAgJAEg");
	this.shape_12.setTransform(884.2,809.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPC4QgIgCgHgFQgGgFgDgJQgEgHAAgPIAAlAIARgDQAKgCANAAIATABQAIACAHAFQAHAGADAIQADAHAAAPIAAFAIgRADQgKACgMAAg");
	this.shape_13.setTransform(862.7,805.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAmB1IgjiFIgkCOQgHAHgNADQgMAFgRAAQgUAAgRgHQgQgHgEgLQgFgKgJggIgPg/QgGgfgHgmIgKg/QAHgHAMgGQAMgGAPAAQATAAAKAJQAMAIADAVIAUCbIACAAIAligQAKgGALgEQAKgDAOAAQATAAAMAGQANAGAEANIAkCUIACAAIAVi1QAKgGAKgDQALgDAKAAQASAAALAIQANAJAAAUIgDAbIgRBVIgLAvIgSBGQgIAHgOADQgQAFgRAAQgrAAgIgYg");
	this.shape_14.setTransform(834.9,810);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag3CFQgYgJgSgTQgRgSgLgbQgKgbABghQgBggAKgbQALgbARgSQASgTAYgJQAagKAdAAQAfAAAZAKQAYAKASATQASATAKAaQAKAaAAAgQAAAjgKAaQgKAagSATQgRATgZAJQgZAJgfAAQgdAAgagKgAgggyQgMASAAAgQAAAiAMASQAMASAVAAQAVAAAMgTQAMgSAAghQAAgggNgSQgKgSgXAAQgVAAgLASg");
	this.shape_15.setTransform(799.3,809.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABACMQgIgCgHgFQgGgFgEgJQgDgIAAgOIAAiCQAAgRgJgIQgKgIgPAAQgLAAgJACQgLAEgGAFIAAC/IgQAEQgLABgMAAIgVgBQgIgCgHgFQgGgFgEgJQgDgIAAgOIAAimQAAgOAGgKQAGgJAKgIQASgOAbgIQAbgIAfAAQA6AAAgAcQAgAbAAAxIAACsIgRAEIgXABg");
	this.shape_16.setTransform(769,809.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAsCxQgLgHgQgWIgyhFIAABlIgRADQgKACgNAAIgVgBQgIgCgHgFQgGgFgDgJQgEgIABgOIAAlAIARgDQAJgCANAAIAVABQAIABAGAGQAIAGACAHQAEAIAAAPIAACRIBYhhQAbAAAQANQAQANAAATQAAAIgCAIQgDAGgGAHQgDAGgLAKIgxAtIBSBZQgCAagMAOQgLAOgXAAQgRAAgNgJg");
	this.shape_17.setTransform(740.3,805.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgZCEQgZgJgUgTQgTgTgKgaQgKgZAAggQAAglALgbQALgaATgTQASgQAagKQAYgJAcAAQAmAAAUAOQAVAPgBAWQABAKgGAKQgEAJgHAHQgIgFgMgEQgMgDgPAAQgNAAgMADQgLAFgIAJQgJAIgFANQgFAMAAARQAAAiATARQAQARAbAAQARAAAKgDQALgEAJgEQALAHAFAKQAFAJAAANQAAAWgVANQgTAMgkAAQghAAgagLg");
	this.shape_18.setTransform(712.5,809.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ABTCrQgJgCgFgEQgGgFgDgHIgGgRIgKgmIhcAAIgQBFIgQAFIgUABQgaAAgMgJQgNgKAAgRQAAgIACgIIBWkWQAJgGASgEQARgFATAAQAZAAAUAIQAUAHAFASIAVBDIA9DkQgHAIgMAFQgMAEgRAAQgNAAgIgCgAgRgiIgQA5IA/AAIgchsIgDAAg");
	this.shape_19.setTransform(683.8,806.6);

	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(960,823.6,1,1,0,0,0,339.3,22.8);
	this.instance.alpha = 0.102;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5F3F79").s().p("EgyRAH3QhlgBhHhHQhIhIAAhlIAAoDQAAhlBIhIQBHhIBlAAMBkjAAAQBlAABHBIQBIBIAABlIAAIDQAABlhIBIQhHBHhlABgEg0NgF9QgzA0AABIIAAIDQAABJAzAzQA0AzBIAAMBkjAAAQBJAAAzgzQAzgzAAhJIAAoDQAAhIgzg0Qgzg0hJAAMhkjAAAQhIAAg0A0g");
	this.shape_20.setTransform(960,803);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("EA0OgAFQg0g0hIABMhkjAAAQhIgBg0A0QgyAxgBBHIAAg3QAAhHAzg0QA0gzBIAAMBkjAAAQBJAAAzAzQAzA0AABHIAAA3QgBhHgygxg");
	this.shape_21.setTransform(960,771.1);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.instance,this.shape_20,this.shape_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.instance},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(613.8,752.7,692.5,100.5), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(230.9,-141.8,0.667,0.667,0,0,0,960,540);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(230.8,33.6,0.667,0.667,0,0,0,339.3,43.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-409.1,-501.8,1280,720);


(lib.panelall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cta("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(433,120.7,1,1,0,0,0,230.8,-141.8);

	this.instance_1 = new lib.panel("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(433,120.7,1,1,0,0,0,433,120.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,866,373.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.parent.playSfx();
	}
	this.frame_21 = function() {
		this.parent.initContentButton();
	}
	this.frame_89 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(17).call(this.frame_21).wait(68).call(this.frame_89).wait(1));

	// Layer 4
	this.b1 = new lib.Symbol2();
	this.b1.parent = this;
	this.b1.setTransform(0.3,176.5,3.783,0.419,0,0,0,-0.1,0.1);
	this.b1._off = true;
	new cjs.ButtonHelper(this.b1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.b1).wait(19).to({_off:false},0).wait(71));

	// title
	this.instance = new lib.title("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,1,1,0,0,0,337.2,245.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// panel
	this.instance_1 = new lib.panelall("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,37.6,1,1,0,0,0,433,120.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:0.1,alpha:1},19,cjs.Ease.get(1)).wait(71));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFDD").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-360,1280,720);


// stage content:
(lib.scene2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		createjs.Touch.enable(stage, true, true);
		
		var audioPath = "audio/";
		var sounds = [
			{src:{mp3:"blink.mp3", ogg:"blink.ogg"}, id:"audio_notification"}
		 ];
			
		createjs.Sound.alternateExtensions = ["mp3"];    // if the passed extension is not supported, try this extension
		createjs.Sound.on("fileload", handleLoad); // call handleLoad when each sound loads
		createjs.Sound.registerSounds(sounds, audioPath);
		
		function handleLoad(e) {
			if (e.id == "audio_notification") {
				//createjs.Sound.play("audio_bgmusic");
			}
		}
		
		this.initContentButton = function () {
			_this.mc_main.b1.addEventListener("click", function () {
				window.location = "../scene3/scene3.html";
			});
		}
		
		this.playSfx = function () {
			createjs.Sound.play("audio_notification");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.mc_main = new lib.Symbol1();
	this.mc_main.parent = this;
	this.mc_main.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.mc_main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280,757.5);
// library properties:
lib.properties = {
	id: '21FF650F60A342C18789CFCAF9ECA500',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['21FF650F60A342C18789CFCAF9ECA500'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;