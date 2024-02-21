(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"scene7_atlas_", frames: [[0,427,410,425],[0,0,410,425],[0,854,420,55]]}
];



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



(lib.option1 = function() {
	this.spriteSheet = ss["scene7_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.option2 = function() {
	this.spriteSheet = ss["scene7_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.text = function() {
	this.spriteSheet = ss["scene7_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
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


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApcMeIAA47IS5AAIAAY7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.4,-79.8,120.9,159.6);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.text();
	this.instance.parent = this;
	this.instance.setTransform(-210,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210,-28,420,55);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApcMeIAA47IS5AAIAAY7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.4,-79.8,120.9,159.6);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1aDkIAAnHMAq1AAAIAAHHg");
	mask.setTransform(137.1,22.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AzNDkQg6AAgqg0QgpgzAAhJIAAkXQDhCOFkBRQFwBTGlAAQGmAAFwhTQFkhRDhiOIAAEXQAABJgpAzQgqA0g6AAg");
	this.shape.setTransform(137.1,22.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,274.2,45.5), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1aDkIAAnHMAq1AAAIAAHHg");
	mask.setTransform(137.1,22.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AzNDkQg6AAgqg0QgpgzAAhJIAAkXQDhCOFkBRQFwBTGlAAQGmAAFwhTQFkhRDhiOIAAEXQAABJgpAzQgqA0g6AAg");
	this.shape.setTransform(137.1,22.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,274.2,45.5), null);


(lib.btn_toilet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.option1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_toilet, new cjs.Rectangle(0,0,410,425), null);


(lib.btn_living_room = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.option2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_living_room, new cjs.Rectangle(0,0,410,425), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(137.1,22.8,1,1,0,0,0,137.1,22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,274.2,45.5), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(137.1,22.8,1,1,0,0,0,137.1,22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,274.2,45.5), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		this.parent.playSfx();
	}
	this.frame_16 = function() {
		this.parent.initContentButton();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(14).call(this.frame_16).wait(13).call(this.frame_29).wait(1));

	// Layer 4
	this.b2 = new lib.Symbol2copy();
	this.b2.parent = this;
	this.b2.setTransform(406.7,266.7,1.765,0.419,0,0,0,-0.1,0.1);
	new cjs.ButtonHelper(this.b2, 0, 1, 1);

	this.b1 = new lib.Symbol2copy();
	this.b1.parent = this;
	this.b1.setTransform(-410.8,266.7,1.765,0.419,0,0,0,-0.1,0.1);
	new cjs.ButtonHelper(this.b1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2}]}).wait(30));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AheB6QgJgNAAgOQAAgTAJgMQAKgLARgJIBagwIh/hHIgBgQQAAgIACgLQACgJAFgGQAEgHAIgEQAGgEANAAQALAAAKAFQAKAEAQAKIBvBFQANATAAAfQAAAWgGANQgGAMgMAIIiOBYQgYgHgKgMg");
	this.shape.setTransform(451.9,269.4,0.667,0.667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag4CSQgZgWAAgyIAAjsIAQgDQAKgDANAAQAWAAANAJQAMAJAAAbIAAAkIBEAAIAGAPQADAKAAAKQAAAUgIAIQgJAJgNAAIgvAAIAABTQAAAPAJAFQAIAGAQAAIAQgBIAOgEIAIAOQAEAJAAAJQAAAWgPAMQgOAOgmAAQgsAAgZgXg");
	this.shape_1.setTransform(430.4,268.2,0.667,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAuB/QgLgKgMgSIgbgrIg1BSIgKAAQgbAAgOgLQgNgLAAgSQAAgNAGgLQAIgNAMgPIAqgyIhGhXQAEgVAMgNQANgOASAAQARAAAJAJQALALAKAOIAgAvIA3hRQAdAAARALQAQALAAASQAAAFgCAIQgBAGgEAGIg5BJIBEBfQgDAWgNALQgNANgSAAQgTgBgMgMg");
	this.shape_2.setTransform(414.1,270,0.667,0.667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmCGQgZgIgVgTQgSgSgMgcQgMgdAAgjQAAgkAMgbQALgaASgRQATgRAWgIQAXgIAYAAQAbAAAXAJQAXAJAQAPQARAPAIAWQAJAWAAAZQAAASgKAKQgKALgRACIh/AUQAGATASAJQAQAJAXAAQAVAAATgGQATgGAMgHQAIAFAGAKQAFAKAAALQABAZgWAMQgQAKgVADQgUADgUAAQgdAAgagJgAgShFQgIAEgGAHQgFAGgDAKQgDAIgBAJIBXgPQgBgMgKgKQgJgLgUAAQgLAAgKAEg");
	this.shape_3.setTransform(395.5,270,0.667,0.667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA0CnQgRgGgLgYIhOizIgDABQADAhAAAbIAACTIgRAEIgXABIgVgBQgJgDgFgFQgGgEgDgJQgDgHAAgQIAAkUQAHgKAPgGQAOgFASgBQAUABARAGQARAGALAXIAyBwIAOAfIAOAkIACgBIgCg7IgBiVIASgEQALgBAMgBQAWABAMAIQAMAJAAAbIAAEcQgHAHgOAFQgOADgTAAQgSAAgSgFg");
	this.shape_4.setTransform(374.3,267.7,0.667,0.667);

	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(409.3,279.1,0.667,0.667,0,0,0,137.1,22.8);
	this.instance.alpha = 0.102;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5F3F79").s().p("AzNH3QhRgBg6hHQg5hIAAhlIAAoDQAAhlA5hIQA6hIBRAAMAmbAAAQBRAAA6BIQA5BIAABlIAAIDQAABlg5BIQg6BHhRABgA0xl9QgpA0AABIIAAIDQAABJApAzQAqAzA6AAMAmbAAAQA6AAAqgzQApgzAAhJIAAoDQAAhIgpg0Qgqg0g6AAMgmbAAAQg6AAgqA0g");
	this.shape_5.setTransform(409.3,265.3,0.667,0.667);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AUygDQgqg0g6AAMgmbAAAQg6AAgqA0QgnAwgCBEIAAgzQAAhHApg0QAqgzA6AAMAmbAAAQA6AAAqAzQApA0AABHIAAAzQgChEgngwg");
	this.shape_6.setTransform(409.3,243.9,0.667,0.667);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#7E519C","#8253A0","#9B62BB","#A467C5"],[0,0.082,0.659,1],0,42.3,0,-42.2).s().p("A1aGxIAAtiMAq1AAAIAANig");
	this.shape_7.setTransform(409.3,265.3,0.667,0.667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAtCxQgMgHgQgWIgzhFIAABlIgRADQgJACgNAAIgUgBQgIgCgHgFQgHgGgDgIQgDgIAAgOIAAlAIAQgDQAKgCANAAIAUABQAIABAIAGQAGAEADAJQAEAIgBAPIAACRIBYhhQAcAAAQANQAQANAAATQAAAKgCAGQgDAGgFAHQgGAIgJAIIgxAtIBTBZQgDAagMAOQgLAOgXAAQgRAAgMgJg");
	this.shape_8.setTransform(-370.8,266.9,0.667,0.667);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYCEQgbgJgTgTQgSgTgLgaQgKgaAAgfQAAglALgbQAMgbASgSQASgQAagKQAZgJAbAAQAlAAAVAOQAUAPABAWQgBALgFAJQgDAJgHAHQgLgGgKgDQgLgDgQAAQgMAAgNADQgMAGgHAIQgJAIgFANQgFAMAAARQAAAiATARQAQARAbAAQAQAAALgDQAMgEAIgEQALAHAFAKQAFAJAAANQAAAWgUANQgUAMgkAAQggAAgagLg");
	this.shape_9.setTransform(-389.3,269.9,0.667,0.667);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgwCKQgWgFgQgMQgQgLgJgRQgIgSAAgWQAAgnAVgTQAVgUAtgFIBDgIIAAgEQAAgQgOgHQgMgHgZAAQgTAAgTAFQgUAFgOAGQgGgFgFgLQgFgJAAgMQAAgOAHgJQAGgIAOgHQAQgGATgCQAVgDASAAQAbAAAXAGQAWAFARANQAQANAJATQAJATAAAaIAAB7QAAAPgHAJQgIAJgKAHQgiAVg9AAQgZAAgXgFgAgBAaQgQACgIAFQgJAFAAAMQAAALAIAHQAIAHASAAIATgCQAMgDAEgDIAAgsg");
	this.shape_10.setTransform(-407.5,270,0.667,0.667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag5CvIgZgFQgMgCgLgFQgdgLAAgdIAAkCQAAgMAGgGQAFgGAMgEQATgHAZgDQAagDAcAAQBBAAAkAYQAkAXAAAyQAAAagOARQgNASgXAJQAaAIARATQASAVAAAfQAAA2gmAbQgmAahHAAgAguBjQAIACALABIAWABQATAAAOgJQAOgKAAgTQAAgTgLgHQgLgIgXABIgrAAgAgehmIgQACIAABAIAmAAQAWAAAKgIQAKgJAAgRQAAgPgMgJQgMgJgWAAg");
	this.shape_11.setTransform(-426.6,267.7,0.667,0.667);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAtCIQgQgIgKgGIhvhFQgNgSAAggQAAgWAGgNQAGgMAMgIICOhYQAZAHAJAMQAJANAAAOQAAAUgJAKQgJALgSAKIhaAwIB/BHIABAQIgCATQgCAIgFAHQgEAHgIAEQgIAEgLAAQgLAAgKgFg");
	this.shape_12.setTransform(-452.9,269.4,0.667,0.667);

	this.instance_1 = new lib.Group_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-409.3,279.1,0.667,0.667,0,0,0,137.1,22.8);
	this.instance_1.alpha = 0.102;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5F3F79").s().p("AzNH3QhRgBg6hHQg5hIAAhlIAAoDQAAhlA5hIQA6hIBRAAMAmbAAAQBRAAA6BIQA5BIAABlIAAIDQAABlg5BIQg6BHhRABgA0xl9QgpA0AABIIAAIDQAABJApAzQAqAzA6AAMAmbAAAQA6AAAqgzQApgzAAhJIAAoDQAAhIgpg0Qgqg0g6AAMgmbAAAQg6AAgqA0g");
	this.shape_13.setTransform(-409.3,265.3,0.667,0.667);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AUygDQgqg0g6AAMgmbAAAQg6AAgqA0QgnAwgCBEIAAgzQAAhHApg0QAqgzA6AAMAmbAAAQA6AAAqAzQApA0AABHIAAAzQgChEgngwg");
	this.shape_14.setTransform(-409.3,243.9,0.667,0.667);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#7E519C","#8253A0","#9B62BB","#A467C5"],[0,0.082,0.659,1],0,42.3,0,-42.2).s().p("A1aGxIAAtiMAq1AAAIAANig");
	this.shape_15.setTransform(-409.4,265.3,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.instance_1},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(30));

	// Layer 5
	this.b_game2 = new lib.Symbol2copy();
	this.b_game2.parent = this;
	this.b_game2.setTransform(240.5,-25.6,3.383,2.67,0,0,0,-0.1,0.1);
	new cjs.ButtonHelper(this.b_game2, 0, 1, 1);

	this.b_game1 = new lib.Symbol2copy();
	this.b_game1.parent = this;
	this.b_game1.setTransform(-230.6,-25.8,3.382,2.668,0,0,0,-0.4,0.1);
	new cjs.ButtonHelper(this.b_game1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.b_game1},{t:this.b_game2}]},15).wait(15));

	// Layer 1
	this.b2_1 = new lib.Symbol2();
	this.b2_1.parent = this;
	this.b2_1.setTransform(242.7,-25.6,3.391,2.663);
	new cjs.ButtonHelper(this.b2_1, 0, 1, 1);

	this.b1_1 = new lib.Symbol2();
	this.b1_1.parent = this;
	this.b1_1.setTransform(-229.7,-25.6,3.391,2.663);
	new cjs.ButtonHelper(this.b1_1, 0, 1, 1);

	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-293.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.b1_1},{t:this.b2_1}]},15).wait(15));

	// Layer 2
	this.instance_3 = new lib.btn_living_room();
	this.instance_3.parent = this;
	this.instance_3.setTransform(236.2,-30.5,0.1,0.1,0,0,0,198.5,208);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({regX:198.6,regY:207.7,scaleX:1.1,scaleY:1.1,x:236.3},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:-30.4},8,cjs.Ease.get(1)).wait(15));

	// Layer_1
	this.instance_4 = new lib.btn_toilet();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-236.2,-30.5,0.1,0.1,0,0,0,199,208);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({regX:198.6,regY:207.7,scaleX:1.1,scaleY:1.1},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:-236.1,y:-30.4},8,cjs.Ease.get(1)).wait(15));

	// bg
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFDD").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-360,1280,720);


// stage content:
(lib.scene7 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		createjs.Touch.enable(stage, true, true);
		
		var audioPath = "audio/";
		var sounds = [
			{src:{mp3:"success.mp3", ogg:"success.ogg"}, id:"audio_notification"}
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
			_this.mc_main.b_game1.addEventListener("click", function () {
				window.location = "../game1/index.html";
			});
			
			_this.mc_main.b_game2.addEventListener("click", function () {
				window.location = "../game2/index.html";
			});
			
			_this.mc_main.b1.addEventListener("click", function () {
				window.location = "../scene6/scene6.html";
			});
			
			_this.mc_main.b2.addEventListener("click", function () {
				window.location = "../scene10/scene10.html";
			});
		}
		
		this.playSfx = function () {
			createjs.Sound.play("audio_notification");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.mc_main = new lib.Symbol3();
	this.mc_main.parent = this;
	this.mc_main.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.mc_main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280,720);
// library properties:
lib.properties = {
	id: 'D02050FDD8544E9280248AC1ADDA7E15',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/scene7_atlas_.png", id:"scene7_atlas_"}
	],
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
an.compositions['D02050FDD8544E9280248AC1ADDA7E15'] = {
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