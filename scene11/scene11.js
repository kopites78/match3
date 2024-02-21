(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"scene11_atlas_", frames: [[0,0,57,49],[0,51,56,48]]}
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



(lib.Path = function() {
	this.spriteSheet = ss["scene11_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Path_0 = function() {
	this.spriteSheet = ss["scene11_atlas_"];
	this.gotoAndStop(1);
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


(lib.women_head_talking = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyesbrow
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C4574D").ss(4,1,1).p("Ag8AVQATgXAhgLQAjgNAiAK");
	this.shape.setTransform(38.5,72.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C4574D").ss(4,1,1).p("AhPgTQAngLAsALQAxAMAbAg");
	this.shape_1.setTransform(128.6,80.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C4574D").ss(4,1,1).p("Ag8AWQAKgaAjgMQAhgMArAO");
	this.shape_2.setTransform(39.8,76.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{y:80.1,x:128.6}},{t:this.shape,p:{y:72.3}}]}).to({state:[{t:this.shape_1,p:{y:81.1,x:128.6}},{t:this.shape,p:{y:73.3}}]},25).to({state:[{t:this.shape_1,p:{y:84.7,x:126.1}},{t:this.shape_2}]},3).to({state:[{t:this.shape_1,p:{y:81.1,x:128.6}},{t:this.shape,p:{y:73.3}}]},4).to({state:[{t:this.shape_1,p:{y:80.1,x:128.6}},{t:this.shape,p:{y:72.3}}]},3).wait(25));

	// eyes
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C4574D").ss(2.9,1,1).p("AAcgFQgMABgQAEQgSAEgJAC");
	this.shape_3.setTransform(33.5,107,0.667,0.667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#C4574D").ss(2.9,1,1).p("AglgQQAMAJAZAKQAPAFAXAJ");
	this.shape_4.setTransform(32.9,101.8,0.667,0.667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#C4574D").ss(2.9,1,1).p("AgggMQASAEAvAV");
	this.shape_5.setTransform(124.6,116.5,0.667,0.667);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#C4574D").ss(2.9,1,1).p("AAygMQgRAJghAGQglAHgMAD");
	this.shape_6.setTransform(126.5,110.2,0.667,0.667);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F2F28").ss(5.8,1,1).p("AgmgcQgGAcAXARQAYAUAmgM");
	this.shape_7.setTransform(47.7,101.1,0.667,0.667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5F2F28").s().p("AgXB/QgkgGgSgqQgSgpAKg0QAJg2AeghQAfghAkAHQAvAIAPApQAMAjgLA6QgKA7gXAcQgWAbgiAAQgIAAgKgCg");
	this.shape_8.setTransform(50.2,109.4,0.667,0.667);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#5F2F28").ss(5.8,1,1).p("AgmgcQgGAcAXASQAXATAngM");
	this.shape_9.setTransform(105.9,106.5,0.667,0.667);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5F2F28").s().p("AgWB/QglgGgSgqQgRgpAJg0QAKg2AeggQAeghAlAGQBVAPgWB/QgLA7gXAcQgWAbghAAQgJAAgJgCg");
	this.shape_10.setTransform(108.4,114.8,0.667,0.667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#C4574D").ss(2.9,1,1).p("AgOgJQAGADAIAFQARAJAaAOAgOgJQgrgTAXAKQAGACAOAHg");
	this.shape_11.setTransform(35.2,103.2,0.667,0.667);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#C4574D").ss(2.9,1,1).p("AgpgRQA8ACAXAh");
	this.shape_12.setTransform(122.3,117,0.667,0.667);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#C4574D").ss(2.9,1,1).p("AAmAHQAdgWg+ANIgzAJ");
	this.shape_13.setTransform(124.3,111,0.667,0.667);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#C4574D").ss(2.9,1,1).p("AA6ACQhHgIgQAEQgTAEgJAC");
	this.shape_14.setTransform(36.9,108.7,0.667,0.667);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#C4574D").ss(2.9,1,1).p("AgYgPQgHANAAgHQgBgIAIACQAGADAIAFQARAIAaAP");
	this.shape_15.setTransform(35.9,103.6,0.667,0.667);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#C4574D").ss(2.9,1,1).p("AgagNQAegFAXAh");
	this.shape_16.setTransform(123.3,117.2,0.667,0.667);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#C4574D").ss(2.9,1,1).p("AAjABQAcgWg9ANIgtAW");
	this.shape_17.setTransform(124.5,111.4,0.667,0.667);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#5F2F28").ss(5.8,1,1).p("AhTgjQAeAqAYASQAXATBbgN");
	this.shape_18.setTransform(47.8,105.7,0.667,0.667);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#5F2F28").ss(5.8,1,1).p("AhCgnQAIApAYATQAYASBNAB");
	this.shape_19.setTransform(106.5,109.9,0.667,0.667);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#C4574D").ss(2.9,1,1).p("AgOgJQgrgTAXAKQAGACAOAHQAGADAIAFQARAJAaAO");
	this.shape_20.setTransform(35.2,103.2,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10,p:{scaleY:0.667,y:114.8}},{t:this.shape_9,p:{x:105.9,y:106.5}},{t:this.shape_8,p:{scaleY:0.667,y:109.4}},{t:this.shape_7,p:{x:47.7,y:101.1}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:33.5,y:107}}]}).to({state:[{t:this.shape_10,p:{scaleY:0.339,y:113.5}},{t:this.shape_9,p:{x:104.6,y:109.1}},{t:this.shape_8,p:{scaleY:0.339,y:110.7}},{t:this.shape_7,p:{x:44.8,y:105.3}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_3,p:{x:34.9,y:108.6}}]},25).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},3).to({state:[{t:this.shape_10,p:{scaleY:0.339,y:113.5}},{t:this.shape_9,p:{x:104.6,y:109.1}},{t:this.shape_8,p:{scaleY:0.339,y:110.7}},{t:this.shape_7,p:{x:44.8,y:105.3}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_20},{t:this.shape_3,p:{x:34.9,y:108.6}}]},4).to({state:[{t:this.shape_10,p:{scaleY:0.667,y:114.8}},{t:this.shape_9,p:{x:105.9,y:106.5}},{t:this.shape_8,p:{scaleY:0.667,y:109.4}},{t:this.shape_7,p:{x:47.7,y:101.1}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:33.5,y:107}}]},3).wait(25));

	// mouth
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#C4574D").ss(4,1,1).p("ACJgWQgWAbgrAPQgoAPgsAAQgvgBghgRQgjgRgJgi");
	this.shape_21.setTransform(78.8,150);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#C4574D").ss(2.9,1,1).p("Ag7hEQAyAPAkAnQAqAqgMAp");
	this.shape_22.setTransform(97.3,143.8,0.667,0.667);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E16381").s().p("Ag5ArQgngEgpgfIgGgFQB8gyCjAEQgOAZgXAVQgiAfguAGQgdAEgbAAIgcgBg");
	this.shape_23.setTransform(80.7,154.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C4574D").s().p("Aixg9QBvAnD0gkQACAPgNAlQgEAKgGALQijgEh8AzQgkgigLhZg");
	this.shape_24.setTransform(79.4,148.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#C4574D").ss(4,1,1).p("AB9gBQgdARgkAIQgkAIg3gGQg4gFglgx");
	this.shape_25.setTransform(77.8,149.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E16381").s().p("AhIATQgOgZgLgXQA/gQBJgGQAagCAhgBIgEAMQgUAxgQASQgQARgOAGQgTAHgQAAQgmAAgbgkg");
	this.shape_26.setTransform(79.1,153.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C4574D").s().p("Ah3g3QA6AXA+ACQA8ADA6gQQAFAggPAqQghABgaACQhJAGg/AQQgcg+gFgxg");
	this.shape_27.setTransform(78,145.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E16381").s().p("AhIAFIgZgMQA/gEBJgBIA7gBIgEADQgUAMgQAEQgQAFgOABQgTACgPAAQgnAAgbgJg");
	this.shape_28.setTransform(79.1,150.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C4574D").s().p("Ah3gNQA6AFA+ABQA8ABA7gEQAEAIgPAKIg7ABQhJABg/AEQgcgPgFgMg");
	this.shape_29.setTransform(78,148.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22,p:{x:97.3,y:143.8,scaleX:0.667,scaleY:0.667}},{t:this.shape_21}]}).to({state:[{t:this.shape_22,p:{x:102.4,y:140.8,scaleX:0.667,scaleY:0.667}},{t:this.shape_24,p:{scaleX:1,scaleY:1,x:79.4,y:148.7}},{t:this.shape_23,p:{scaleX:1,scaleY:1,x:80.7,y:154.6}}]},2).to({state:[{t:this.shape_25},{t:this.shape_22,p:{x:95.8,y:146.2,scaleX:0.465,scaleY:0.434}}]},3).to({state:[{t:this.shape_22,p:{x:96.5,y:144.9,scaleX:0.378,scaleY:0.414}},{t:this.shape_24,p:{scaleX:0.829,scaleY:0.582,x:79.5,y:149.6}},{t:this.shape_23,p:{scaleX:0.829,scaleY:0.582,x:80.5,y:153.1}}]},3).to({state:[{t:this.shape_25},{t:this.shape_22,p:{x:95.8,y:146.2,scaleX:0.465,scaleY:0.434}}]},3).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_22,p:{x:98,y:139.9,scaleX:0.465,scaleY:0.434}}]},3).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_22,p:{x:95.4,y:144.1,scaleX:0.465,scaleY:0.434}}]},3).to({state:[{t:this.shape_22,p:{x:97.3,y:143.8,scaleX:0.667,scaleY:0.667}},{t:this.shape_21}]},3).wait(40));

	// Layer_1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#808080").ss(2.2,1,1).p("ABnAiQAogZgCgfQgBgegigXQgigXgtgBQgxgCgpAdQg1AkgRA4QgOAuANAi");
	this.shape_30.setTransform(173.2,151.2,0.667,0.667);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#808080").ss(2.2,1,1).p("AAABLQA2ATAigkQAggigQghQgWg0hMgPQhIgPgqAh");
	this.shape_31.setTransform(195,145.4,0.667,0.667);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#808080").ss(2.2,1,1).p("ABEBNQgnAPgkgSQgggRgRgjQgQghAIgeQAJghAkgJ");
	this.shape_32.setTransform(177.7,156.4,0.667,0.667);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#808080").ss(2.2,1,1).p("AAshfQA1A3gmBEQgoBGhcgC");
	this.shape_33.setTransform(214.7,131,0.667,0.667);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#808080").ss(2.2,1,1).p("ACRhSQANAagMAiQgNAjgjAbQhaBFiegp");
	this.shape_34.setTransform(202.8,158.5,0.667,0.667);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#808080").ss(2.2,1,1).p("AgYCIQA2ABAjgrQAhgogDg2QgEg5gsglQgygqhbAB");
	this.shape_35.setTransform(224.3,153.7,0.667,0.667);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#533D2A").s().p("Ai6CHQhOg4AAhPQAAhPBOg4QBNg3BtAAQBuAABNA3QBOA4AABPQAABQhOA3QhNA4huAAQhtAAhNg4g");
	this.shape_36.setTransform(191.7,158.8,0.667,0.667);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#533D2A").s().p("AkMDAQhwhLAAhrQAAhrB5hVQB5hUCcAAQCaAABrBUQBmBSAABuQAABrhvBLQhwBLieAAQidAAhvhLg");
	this.shape_37.setTransform(201.1,143.1,0.667,0.667);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#533D2A").s().p("AjwCxQhkhJAAhoQAAhnBkhJQBkhKCMAAQCNAABkBKQBkBJgBBnQABBohkBJQhkBKiNAAQiMAAhkhKg");
	this.shape_38.setTransform(217.3,156.4,0.667,0.667);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#533D2A").s().p("AiYDVQhJgpgXhPQgehlBUhpQBRhmBygWQBpgUBCA4QA7AzAVBtQAUBjhBBQQg/BNhwAWQggAGgfAAQhDAAg2geg");
	this.shape_39.setTransform(173.3,153.7,0.667,0.667);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#C4574D").ss(2.9,1,1).p("AAohrQgRgCgUAPQgUAPgKAWQgcA5BGAdQARABAFAKQAFAKgIAOQgRAhg4AL");
	this.shape_40.setTransform(198,109.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FEB992").s().p("AjYDwIAAljQADgLAIgRQAPgiAWgbQBIhVB2ATQBuASA2BwQAxBngdBsQgjCBiDA0Qg6AXg5AAQhHAAhGgjg");
	this.shape_41.setTransform(200.8,110,0.667,0.667);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#717171").ss(5.8,1,1).p("ACKAjQgfgjgygUQhkgpheBN");
	this.shape_42.setTransform(80.5,107.6,0.667,0.667);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#717171").ss(5.8,1,1).p("Al8B7IL4j1");
	this.shape_43.setTransform(165.5,106.6,0.667,0.667);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#717171").ss(5.8,1,1).p("AFrBAQgaCSh8BUQh9BUiVgaQiXgbhYh6QhYh5AaiRQAaiSB8hUQB8hUCWAaQCWAaBYB6QBZB6gaCRg");
	this.shape_44.setTransform(47.1,102.3,0.667,0.667);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Ag9FgQiXgbhYh6QhYh5AaiRQAaiSB8hUQB8hUCWAaQCWAaBYB6QBZB6gaCRQgaCSh8BUQhfBAhtAAQgiAAgkgGg");
	this.shape_45.setTransform(47.1,102.3,0.667,0.667);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#717171").ss(5.8,1,1).p("AF4BCQgaCSiABUQiABUibgcQicgchch6Qhch6AaiRQAaiSCAhUQCAhTCbAbQCcAcBcB6QBcB7gaCQg");
	this.shape_46.setTransform(115.1,110.4,0.667,0.667);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Ag9FgQicgchch6Qhch6AaiRQAaiSCAhUQCAhTCbAbQCcAcBcB6QBcB7gaCQQgaCSiABUQhgA/hxAAQgkAAgmgHg");
	this.shape_47.setTransform(115.1,110.4,0.667,0.667);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FE8874").s().p("AiiCjQhEhEAAhfQAAhfBEhDQBDhEBfAAQBfAABEBEQBDBDAABfQAABfhDBEQhEBDhfAAQhfAAhDhDg");
	this.shape_48.setTransform(127.7,140.3,0.667,0.667);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FE8874").s().p("AiIiXIgNg0QAhgKAkAAQBeAABEBDQBEBEAABeQAAA+ggA2QgfA0gzAeQh3iig1jLg");
	this.shape_49.setTransform(36.6,134.4,0.667,0.667);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#C4574D").ss(4,1,1).p("AAHgrQgLAZgBAjQgBASACAJ");
	this.shape_50.setTransform(77.3,126.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#808080").ss(2.2,1,1).p("AENAuQhig5iAgWQiYgbifAh");
	this.shape_51.setTransform(136.1,10.8,0.667,0.667);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#808080").ss(2.2,1,1).p("Ah5lxQhfIbFmDI");
	this.shape_52.setTransform(169.4,60.7,0.667,0.667);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#808080").ss(2.2,1,1).p("Ai/g2QA3ArBEAUQBXAcCtAS");
	this.shape_53.setTransform(66.3,37.7,0.667,0.667);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#808080").ss(2.2,1,1).p("AKtitQhUBOiCBKQiYBTipAyQmyCAmQiJ");
	this.shape_54.setTransform(105.8,36.9,0.667,0.667);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#808080").ss(2.2,1,1).p("AkYnDQDhBKCtE2QBJCCAsCNQArCLADBt");
	this.shape_55.setTransform(183.4,55.2,0.667,0.667);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#533D2A").s().p("ASEMrQlFh2hlgzQi1hbhZiEQiijxApkgQANhaAfhVIAdhDQgYAfgxArQhiBWiABBQmXDPohhTQjLggi8hbQgPgIgGgPQgHgRAHgPQB2ksFnixQE2iZFMAAQFqAAEtCdQEnCZCyEQQCpEAA3EJQA3EDg4EAQgVAFgbAAg");
	this.shape_56.setTransform(127.9,54.1,0.667,0.667);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#533D2A").s().p("AgpFVQhcgMhHghQhKgjgMgoQC/i5gcilQgVh+iFhXIBOgDQBfAGBZArQC+BVBPCYQBUCghZCiQgeA1hVAUQgrAKg0AAQgjAAgpgFg");
	this.shape_57.setTransform(212.3,126.7,0.667,0.667);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FEB992").s().p("AnJTxQjdg8i9h6QiohthtiIIgEgFQiHiqg6jeQg8jsAnj5QArkNCaj5QAig3AyhDQDuk4FPitQF5jDFtBBQEHAuEfD5QENDpClEmQB0DOAhDtQAlELhSDuQhGDOiaCkQiqC2kKB6Ql0CrlmAAQjEAAjBgzg");
	this.shape_58.setTransform(116.9,94.8,0.667,0.667);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#808080").ss(2,1,1).p("AgqgtQgOAjAbAgQAdAkAwgT");
	this.shape_59.setTransform(41.1,154.1,0.667,0.667);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#808080").ss(2,1,1).p("Ah8hSQgLAaAKAiQAMAjAeAbQBNBFCJgq");
	this.shape_60.setTransform(39.4,158.5,0.667,0.667);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#808080").ss(2,1,1).p("AAcB5QgvABgigkQghgiAAgtQAAgxAnghQAvgoBXgF");
	this.shape_61.setTransform(20.4,154.6,0.667,0.667);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#533D2A").s().p("AjQDQQhqg8gOhnQgOhmBWhXQBWhWCIgTQCIgSBqA8QBqA8APBnQAOBmhWBXQhXBWiIATQghAEgdAAQhjAAhRgug");
	this.shape_62.setTransform(70.5,159,0.667,0.667);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#533D2A").s().p("Ai+CHQhQg3AAhQQAAhPBQg4QBPg3BvAAQBwAABQA3QBPA4AABPQAABPhPA4QhQA4hwAAQhvAAhPg4g");
	this.shape_63.setTransform(46.3,158.8,0.667,0.667);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#533D2A").s().p("AjnDKQhghUgBh2QABh1BghUQBghUCHAAQCIAABgBUQBhBUgBB1QABB2hhBUQhgBUiIAAQiHAAhghUg");
	this.shape_64.setTransform(38.2,140,0.667,0.667);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#533D2A").s().p("AjnCIQhhg5AAhPQABhOBgg4QBgg5CHAAQCIAABgA5QBgA4AABOQAABPhgA5QhgA4iIAAQiHAAhgg4g");
	this.shape_65.setTransform(21.9,156.6,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]}).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,182.6);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAbQgJgLAAgQQAAgPAJgLQAKgLAPAAQAQAAAKALQAJALAAAPQAAAQgJALQgKALgQAAQgPAAgKgLg");
	this.shape.setTransform(270,170.2,0.667,0.667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag3B4QgKgJgCgQQAMgKALgMQAMgLAJgNQgHgBgGgIQgHgGgJgUIgRgwIgVhRQAEgFAJgFQAJgEAKAAQAMAAAIAGQAJAGAEAPIAbBpIACAAIAeh8QANgIAPAAQANAAAIAGQAIAGAAAOQAAALgCANQgDAPgEAOIgJAgIgNAfIgMAeIgMAZQgNAXgGAIQgJAMgIAHQgFAGgKADQgJADgHAAQgQAAgIgKg");
	this.shape_1.setTransform(260.5,168.2,0.667,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKCAQgFgBgFgEQgFgDgCgGQgDgHABgJIAAjeIALgCIAQgCIANABQAHACAEADQAEADACAGQADAGAAAKIAADeIgMADIgPABg");
	this.shape_2.setTransform(250.6,163.9,0.667,0.667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgpBhQgEgBgHgEQgEgDgCgGQgDgHAAgJIAAhyQAAgJAEgHQACgGAHgFIANgJIAmgMIAVgCQARAAAKAHQALAIAAAQQgBAFgBAFIgEAKIgPAAIgeAGIgLAEIAACCQgDACgHABIgRABIgOgBg");
	this.shape_3.setTransform(242.7,166,0.667,0.667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghBgQgQgEgKgIQgMgIgFgMQgHgLAAgQQABgbAPgNQAOgPAfgDIAugFIAAgDQAAgLgJgFQgJgFgRAAQgNAAgNADQgNADgLAFQgFgEgCgHQgEgGAAgIQAAgKAFgGQAFgGAIgFQALgDAOgDIAbgCQATAAAPAFQAQADAMAKQALAIAGANQAGAOABASIAABVQgBAKgFAHQgEAFgIAFQgXAQgrAAQgQAAgRgEgAgBASQgJABgHAEQgHADABAIQgBAIAGAFQAFAFANAAIAOgCQAFAAAFgDIAAgfg");
	this.shape_4.setTransform(230.5,166.1,0.667,0.667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgKCAQgFgBgGgEQgEgDgCgGQgCgFAAgLIAAjeIAbgEIANABQAIACADADQADADAEAGQACAGAAAKIAADeIgMADIgPABg");
	this.shape_5.setTransform(220.9,163.9,0.667,0.667);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggBcQgRgEgMgKQgLgKgHgPQgGgOAAgWIAAhuIALgCIAQgBQAIAAAGABQAHABAEAEQAEACACAHQADAFAAALIAABSQAAAQAHAGQAHAHANAAQAJAAAEgCIAJgDIAAiGIALgCQAIgBAIAAQAIAAAGABQAHABAEAEQAEACACAHQADAHAAAJIAAB0QAAATgPAKQgNAJgRAEQgSAEgUAAQgRAAgSgFg");
	this.shape_6.setTransform(210.6,166.3,0.667,0.667);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag3B6QgTgKAAgVQAAgJAEgHQADgFAEgFQALAGANAFQAOAEANAAQATAAALgHQALgHAAgPIAAgGQgNAGgWABQgQgBgPgFQgOgFgLgLQgLgLgGgRQgHgQAAgZQAAgYAHgQQAHgSAMgLQAMgLASgGQARgFATgBQATABASAFQATAHAKAHQAHAGAEAHQAEAGAAALIAACGQAAATgHAQQgHAOgNAKQgMAJgRAGQgQAEgTAAQgfABgUgKgAgQhFQgKALABATQgBAYAKAJQAIAIANAAQAOABAKgHIAAhHIgIgDQgEgBgIAAQgRAAgIAKg");
	this.shape_7.setTransform(196.5,168.2,0.667,0.667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaBdQgTgHgNgMQgNgMgIgUQgIgTAAgZQAAgaAIgSQAIgSAMgMQAMgLARgGQARgGAPAAQAUAAAPAHQAPAGAMAKQALALAHAPQAGAPAAASQAAANgHAGQgHAHgMACIhYAOQAEANAMAGQAMAHAPAAQAPAAANgEQAOgFAIgFQAFAEAEAHQAEAGAAAJQAAARgPAIQgLAHgPACQgQADgLAAQgSAAgUgHgAgMgwQgGAEgEAEQgEAFgCAGIgCAMIA8gLQgBgIgHgHQgGgIgOAAQgHAAgHADg");
	this.shape_8.setTransform(183.4,166.1,0.667,0.667);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgpBhQgFgBgGgEQgEgEgCgFQgCgHgBgJIAAhyQAAgJADgHQADgGAGgFIAPgJIAlgMIAVgCQAQAAAMAHQAJAIABAQQAAAFgCAFIgEAKIgPAAIgeAGQgFABgGADIAACCQgDACgIABIgPABIgPgBg");
	this.shape_9.setTransform(172.3,166,0.667,0.667);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABcBhQgGgBgFgEQgEgCgCgIQgDgGAAgJIAAhbQAAgMgGgFQgGgFgKAAQgFAAgGACIgJAGIABACIAACDIgMACQgIABgIAAQgGAAgHgBQgGgBgFgEQgEgCgCgIQgDgGAAgJIAAhbQAAgMgGgFQgIgFgIAAQgHAAgEACIgIAEIAACHIgMACQgHABgJAAQgIAAgGgBQgGgBgFgEQgEgDgCgHQgDgGAAgJIAAhzQAAgKAFgHQADgFAIgGQANgKARgFQARgGAVAAQAOAAAPAEQAOAFAKAIQANgIALgEQANgFAUAAQAOAAANAEQAMADALAJQALAJAFANQAHAOAAATIAAB5IgMACQgHABgJAAQgHAAgHgBg");
	this.shape_10.setTransform(326.3,137.2,0.667,0.667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgNgNgIgTQgIgTAAgZQAAgaAIgRQAIgUAMgLQAOgMAPgFQAPgGARABQATAAAQAFQAQAGALALQALALAHAPQAGAPAAASQAAANgHAGQgHAHgMACIhYAOQAEANAMAGQALAHAQgBQAOAAAOgEQAMgDAKgGQAGAFADAGQAEAHAAAIQAAAQgPAKQgLAGgPACQgQACgLABQgVgBgRgGgAgMgwQgFACgFAGQgEAGgCAFQgCAGAAAGIA8gLQAAgHgIgIQgGgIgOAAQgIAAgGADg");
	this.shape_11.setTransform(309.5,137.3,0.667,0.667);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAtCAQgHgBgEgEQgEgCgCgIQgDgGAAgJIAAhWQAAgPgHgFQgHgHgLAAQgIAAgFACIgLAFIAACGIgLACQgHABgJAAQgHAAgIgBQgGgBgEgEQgEgCgCgIQgDgGAAgJIAAjeIAMgCQAIgCAHAAQAIAAAHACQAGAAAEAEQAFAFACAEQADAHgBAJIAAAlIAPgDQAHgDAMAAQAlAAATATQAUASAAAmIAAB1IgLACIgQABQgIAAgGgBg");
	this.shape_12.setTransform(295.9,135.2,0.667,0.667);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgnBlQgRgPAAgiIAAilIAMgCIAPgBQAQAAAJAGQAHAGAAATIAAAZIAwAAIAEAKQACAIAAAHQAAANgGAGQgGAGgIAAIgiAAIAAA5QAAAKAHAEQAFAEAMAAIALgBIAKgCIAFAKQACAFABAHQAAAPgLAJQgKAJgaAAQgfAAgRgQg");
	this.shape_13.setTransform(284.4,136.1,0.667,0.667);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAtBhQgHgBgEgEQgEgCgCgIQgDgEAAgLIAAhaQAAgMgHgFQgGgGgLAAQgGAAgGACQgJADgEADIAACFIgLACIgQABQgIAAgHgBQgGgBgEgEQgEgCgCgIQgDgGAAgJIAAhyQAAgLAEgGQAFgIAGgEQAMgKAUgFQAQgGAXAAQAqAAAVATQAWASAAAjIAAB4IgLACQgIABgJAAQgIAAgFgBg");
	this.shape_14.setTransform(267.5,137.2,0.667,0.667);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgiBfQgOgEgMgHQgLgHgGgNQgFgMAAgPQAAgbAOgNQAPgOAfgEIAugFIAAgDQAAgKgJgGQgKgFgPAAQgMAAgPAEQgOADgKAEQgDgDgFgIQgCgHAAgHQgBgLAFgFQAFgHAJgDQAJgFAQgCIAagBQAVAAAOADQAQAFALAJQALAIAHANQAFAOAAASIAABVQAAAKgEAGQgHAIgGADQgXAPgrABQgRAAgRgFgAAAASQgKABgHAEQgHAEAAAIQAAAGAGAGQAGAFAMAAIANgCQAHgBAFgDIAAgeg");
	this.shape_15.setTransform(253.7,137.3,0.667,0.667);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgNgNgIgTQgIgTAAgZQAAgaAIgRQAIgUAMgLQAOgMAPgFQAPgGARABQAUAAAPAFQAQAGALALQALAKAHAQQAGAPAAASQAAANgHAGQgGAGgNADIhYAOQAEANAMAGQALAHAQgBQAPAAANgEQAMgCAKgHQAGAEADAHQAEAGAAAJQAAAQgPAKQgLAGgPACQgQACgLABQgUgBgSgGgAgMgwQgFADgFAFQgEAGgCAFIgCAMIA8gLQAAgHgIgIQgGgIgOAAQgHAAgHADg");
	this.shape_16.setTransform(240.9,137.3,0.667,0.667);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgKCAQgHgCgEgDQgEgDgDgHQgCgFAAgKIAAjeIAMgCQAIgCAHAAQAIAAAGACQAGAAAFAEQAEAEACAFQACAGABAKIAADfIgMACIgQABQgHAAgGgBg");
	this.shape_17.setTransform(230.9,135.2,0.667,0.667);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgRBcQgSgHgNgNQgOgNgGgSQgIgSAAgWQAAgZAIgSQAIgUAOgMQAMgMASgGQARgGATAAQAaAAAOAKQAOAJAAAQQAAAIgDAGIgIALQgFgDgKgDQgHgDgLAAQgJAAgIADQgJADgEAGQgHAHgDAIQgEALAAAJQAAAYAOAMQAMAMARAAQAKAAAJgDIAPgGQAGAFAEAHQAEAGAAAJQAAAQgOAJQgOAIgZAAQgWAAgTgHg");
	this.shape_18.setTransform(221.6,137.3,0.667,0.667);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AggB7QgRgGgOgNQgMgNgHgTQgHgTAAgWQAAgaAHgRQAGgSAOgOQANgLARgHQARgFATAAIAOABQAHABAEACIAAg/IAMgCQAHgCAJABQAIgBAGACQAGABAFAEQAEADACAGQACAGAAAJIAAC2QAAATgQAKQgIAGgTAHQgRAFgVABQgVAAgUgIgAgRgEQgKALAAAYQAAAXAKANQAJAMASAAQAFAAAGgCQAFgCADgDIAAhUQgGgFgLAAQgSAAgLANg");
	this.shape_19.setTransform(203.7,135.3,0.667,0.667);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAtBhQgHgBgEgEQgFgDgCgHQgCgFAAgKIAAhaQAAgLgGgGQgHgGgKAAQgIAAgGACQgIADgEADIAACFIgLACQgIABgIAAQgJAAgGgBQgGgBgEgEQgEgCgDgIQgCgFAAgKIAAhyQAAgLAEgGQAFgIAHgEQALgJATgGQARgGAYAAQApAAAVATQAWATAAAiIAAB4IgLACQgIABgJAAQgHAAgGgBg");
	this.shape_20.setTransform(189.9,137.2,0.667,0.667);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AghBfQgPgEgMgHQgKgHgHgNQgGgMAAgPQAAgbAPgNQAPgPAfgDIAugFIAAgDQAAgKgJgGQgLgFgPAAQgLAAgPAEQgMADgLAEQgGgDgDgIQgDgIAAgGQAAgLAEgFQAFgHAKgDQAJgFAPgCIAbgBQAUAAAOADQASAGAKAIQALAHAGAOQAHAOgBASIAABVQAAAJgFAHQgHAIgFADQgYAPgqABQgRAAgQgFgAgBASQgKABgGAEQgGADgBAJQABAGAFAGQAFAFANAAIANgCQAHgBAEgDIAAgeg");
	this.shape_21.setTransform(176.1,137.3,0.667,0.667);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AggBiQgNgDgJgEQgJgFgGgHQgFgIAAgKQAAgJAEgGQADgHAFgEQAKAFAPAGQANAEARAAQALAAAFgDQAHgDAAgGQgBgGgEgDQgEgDgJgBIgLgDQgggHgPgOQgPgMAAgbQAAgOAGgLQAFgMALgIQAKgIAPgEQAQgEAPAAQAPAAAKACQANACAHAFQAJADAFAIQAFAHABAJQAAAIgEAGQgCAHgGAEIgIgEIgNgDIgNgEIgOgBQgLAAgGADQgGADAAAGQAAAFAEACQADACAJADIAMADQAhAIAQAPQAOAOAAAXQAAAdgVARQgTARgoAAQgOAAgOgCg");
	this.shape_22.setTransform(159.3,137.3,0.667,0.667);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("ABcBhQgGgBgEgEQgFgDgDgHQgBgFAAgKIAAhbQAAgMgHgFQgGgFgLAAQgEAAgGACIgJAGIAAACIAACDIgLACIgQABQgHAAgGgBQgHgCgEgDQgEgDgCgHQgDgFAAgKIAAhbQAAgMgGgFQgIgFgIAAQgIAAgDACIgIAEIAACHIgMACQgIABgIAAQgIAAgGgBQgHgCgDgDQgEgCgEgIQgBgFAAgKIAAhzQAAgLADgGQAGgHAGgEQAMgKASgFQARgGAVAAQAPAAAOAEQAPAFAJAIQAMgIAMgEQANgFAUAAQAOAAAMAEQANADALAJQALAIAGAOQAFANAAAUIAAB5IgLACQgHABgJAAQgIAAgGgBg");
	this.shape_23.setTransform(143.1,137.2,0.667,0.667);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgNgNgIgTQgIgVAAgXQAAgZAIgSQAHgTANgMQANgMAQgFQAPgGARABQAUAAAPAFQAQAGALALQALAMAHAOQAGAPAAASQAAANgHAGQgGAGgNADIhYAOQAEANAMAGQAMAHAQgBQANAAAOgEQALgCAKgHQAGAEAEAHQAFAHAAAIQAAAQgQAKQgMAGgOACQgQACgLABQgUgBgSgGgAgMgwQgGADgEAFQgEAGgCAFIgDAMIA9gLQgBgIgHgHQgGgIgOAAQgHAAgHADg");
	this.shape_24.setTransform(126.4,137.3,0.667,0.667);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgnBlQgRgPAAgiIAAilIAMgCIAPgBQAQAAAJAGQAIAGAAATIAAAZIAvAAQADAFABAFQACAGAAAJQAAAOgGAFQgFAGgKAAIggAAIAAA5QAAAKAGAEQAGAEAKAAIAMgBIAKgCIAFAKQADAFAAAHQAAAPgLAJQgKAJgaAAQgfAAgRgQg");
	this.shape_25.setTransform(115.3,136.1,0.667,0.667);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgKCJQgGgBgFgDQgEgEgCgGQgDgGAAgKIAAibIAMgDIAQgBIANABQAFABAGAEQAEAFACAFQADAGAAAJIAACcIgMACQgIACgIAAQgHAAgGgCgAgXhPQgJgJAAgPQAAgOAJgKQAJgLAOABQAPgBAJALQAJAKAAAOQAAAPgJAJQgIAKgQAAQgPAAgIgKg");
	this.shape_26.setTransform(106.8,134.5,0.667,0.667);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgtB1QgQAAgJgJQgJgKAAgQIAAiiQAAgRAJgKQAKgJAPAAIB1AAQADAEABAHQADAGAAAJQAAAOgGAGQgGAHgKAAIhLAAIAAAjIBQAAQADAFABAGQACAGABAJQAAANgGAHQgGAGgKAAIhBAAIAAAoIBbAAQADAFACAGQACAHAAAIQAAAPgGAGQgFAGgLAAg");
	this.shape_27.setTransform(360.2,107,0.667,0.667);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgmB4QgOgDgLgFQgLgGgGgIQgGgIAAgLQAAgMAGgHQAHgJAHgEQAJAIAPAIQAPAFARAAQARAAAHgFQAHgGAAgIQAAgIgFgDQgGgEgKgFIgPgFQgMgEgRgIQgMgFgKgIQgJgIgFgNQgGgMAAgQQAAghAYgUQAYgTApAAQAOAAAPACQAOADAJAEQAIAEAHAJQAFAHAAAKQAAALgEAGQgFAHgGAGQgHgGgOgEQgOgEgPAAQgQAAgHAFQgHAFAAAHQAAAGAEADQAEAEAKADIASAHQAiALASARQATASAAAfQAAAggZAVQgXAUgvAAQgOAAgQgDg");
	this.shape_28.setTransform(346.8,107,0.667,0.667);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AA6B3QgFgBgFgEQgFgDgCgFIgDgLIgHgbIhAAAIgMAwIgKADQgGACgHAAQgTAAgJgHQgIgHAAgMIABgLIA8jBQAGgEANgDQAOgEAKAAQASAAANAGQAOAFAEANIAOAuIAPA2IAPA4IAMAxQgFAGgHACQgKAEgLAAQgJAAgFgCgAgMgXIgKAnIArAAIgUhLIgBAAg");
	this.shape_29.setTransform(332.6,107,0.667,0.667);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AguB1QgPAAgJgJQgJgKAAgQIAAiiQAAgRAJgKQAJgJAPAAIB2AAIAFALIACAPQAAAOgGAGQgGAHgKAAIhLAAIAAAjIBQAAIAFALQACAJAAAGQAAAOgGAGQgGAGgKAAIhBAAIAAAoIBcAAIAEALIACAPQAAAPgGAGQgGAGgKAAg");
	this.shape_30.setTransform(318.8,107,0.667,0.667);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AggB7QgTgHgMgNQgNgMgHgTQgGgSAAgXQAAgaAHgRQAIgUAMgLQAMgNASgGQARgGATAAQAHAAAHACIALADIAAg/IALgCIARgBIAOABQAGABAEADQAFAEACAGQACAGAAAJIAAC2QAAASgQALQgLAIgQAFQgPAFgXAAQgYAAgRgHgAgRgFQgKALAAAZQAAAYAJAMQAKAMARAAQAIAAAEgCQAGgCACgDIAAhUQgIgFgJAAQgTAAgKAMg");
	this.shape_31.setTransform(299.8,106.5,0.667,0.667);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgOgOgHgRQgIgUAAgZQAAgaAIgRQAHgSANgNQALgKASgHQARgGAPABQATAAAQAFQAQAIALAJQAMAMAFAOQAHAPAAASQAAANgHAGQgHAHgMACIhYAPQAEAMAMAHQALAFAQAAQAQAAAMgEQAOgDAHgGQAHAFADAGQAEAHAAAIQAAARgPAJQgMAGgOADQgMACgPAAQgUAAgSgHgAgMgwQgGADgEAFQgEAGgCAFIgCAMIA8gKQgBgJgHgHQgGgHgOgBQgIAAgGADg");
	this.shape_32.setTransform(286.4,108.5,0.667,0.667);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgKCAQgGgCgFgDQgEgDgCgGQgDgHAAgJIAAjeIAMgDIAQgBIANABQAGACAFADQAEAEACAFQADAHAAAJIAADeIgMACQgIACgIAAg");
	this.shape_33.setTransform(276.5,106.4,0.667,0.667);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgKCAQgGgCgFgDQgEgEgCgFQgDgGAAgKIAAjeIAMgDIAPgBIAOABQAGACAEADQAFADACAGQADAHgBAJIAADeIgLACIgQACg");
	this.shape_34.setTransform(269.7,106.4,0.667,0.667);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AghBgQgRgEgKgIQgLgIgGgMQgGgLAAgQQAAgbAPgNQAQgOAegEIAugFIAAgDQAAgLgJgFQgJgEgQgBQgOAAgNAEQgOADgKAEQgEgDgDgIQgEgGAAgIQAAgKAFgGQAEgGAKgEQANgGALAAQANgCAOAAQARAAASADQAPAFAMAJQALAIAGANQAHAPAAARIAABVQAAAKgGAGQgFAHgHAEQgXAPgrABQgTgBgOgDgAAAATQgLABgGADQgGADAAAJQAAAIAFAEQAFAFANAAIAOgCQAIgBACgCIAAgfg");
	this.shape_35.setTransform(259.6,108.5,0.667,0.667);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgnBmQgRgQAAgiIAAikIAMgDQAHgBAIAAQAQAAAJAGQAHAGAAATIAAAZIAwAAIAEAKQACAIAAAGQAAANgFAHQgGAGgJAAIgiAAIAAA5QAAAKAHAEQAGAEALAAIALgBIAJgCIAGAJQACAGAAAHQAAAPgKAJQgKAJgaAAQgeAAgSgPg");
	this.shape_36.setTransform(248.8,107.4,0.667,0.667);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AggBiQgOgDgIgEQgKgFgEgHQgGgIAAgKQAAgJAEgGQADgGAGgFQAHAFAQAGQAOAFASgBQAJAAAHgDQAFgDAAgGQABgGgFgDQgEgCgKgCIgKgDQgfgGgPgPQgQgNAAgZQAAgOAGgMQAFgMALgHQALgJAOgEQAOgEARAAQAKAAAPACQAKACAKAFQAKAEAEAHQAFAGAAAKQAAAIgDAHQgDAGgFAFQgDgDgFgCIgNgDIgOgEIgMgBQgLAAgHAEQgGACAAAHQAAADADADQAEADAJADIALACQAiAIAPAPQAPAOAAAYQAAAdgUAQQgWARgmAAQgSAAgKgCg");
	this.shape_37.setTransform(237.9,108.5,0.667,0.667);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAsBhQgGgBgEgEQgFgEgCgFQgCgGAAgKIAAhZQAAgNgGgFQgHgGgKAAIgOACIgMAGIAACFIgLACIgQABIgPgBQgFgBgFgEQgEgDgDgGQgCgGAAgKIAAhyQAAgLAEgGQAFgIAHgEQALgKATgFQATgGAWAAQAoAAAWATQAWATAAAiIAAB4IgLACIgRABg");
	this.shape_38.setTransform(224.9,108.4,0.667,0.667);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgKCJQgHgBgEgDQgEgEgCgFQgDgGAAgLIAAibIAMgCQAIgCAHAAIAOABQAHACADADQAEAEADAFQACAHAAAKIAACbIgLACIgQACgAgXhOQgKgKABgOQgBgPAKgKQAJgLAOABQAPgBAJALQAKAKgBAPQABAOgKAKQgJAKgPAAQgOAAgJgKg");
	this.shape_39.setTransform(214.5,105.7,0.667,0.667);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgpBhQgGgCgEgDQgFgDgCgGQgCgFAAgLIAAhzQAAgJADgGQACgGAHgFIAOgJIASgHIATgFIAVgCQARAAAKAHQAKAHAAARQAAAFgBAFIgEAKIgPAAIgeAGIgLAEIAACCIgKADIgQABg");
	this.shape_40.setTransform(201.8,108.5,0.667,0.667);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AggBdQgQgFgMgKQgNgJgFgPQgHgPAAgXIAAhtIALgCIAQgBIAOABQAHACAEADQAEACADAHQACAFAAALIAABRQAAARAIAGQAGAHANAAQAJAAAEgBIAJgEIAAiGIALgCIAQgBIAPABQAGACAEADQAEADADAGQACAGAAAKIAAB0QAAATgPAKQgOAJgQAEQgSAEgUAAQgTAAgQgEg");
	this.shape_41.setTransform(189.5,108.7,0.667,0.667);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgmBcQgQgGgNgNQgMgLgIgVQgGgRAAgYQAAgWAGgTQAIgTAMgLQAMgOARgGQASgIAUABQAUgBASAIQASAHAMANQANAOAGARQAHASAAAWQAAAZgHASQgGASgNANQgMAMgSAHQgQAGgWABQgWAAgQgIgAgWgjQgJANAAAWQAAAXAJANQAIAMAOAAQAPABAJgNQAIgOAAgWQAAgWgJgNQgIgNgPAAQgOAAgIANg");
	this.shape_42.setTransform(175.5,108.5,0.667,0.667);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("Ag4B4QgJgLgCgOIAXgVQAMgLAJgNQgFgCgIgHQgIgJgHgSIgSgwIgVhRQAGgGAHgEQAJgEAKABQAMAAAJAFQAIAFAEAQIAbBpIACAAIAQg8QAFgRADgPQAEgRACgPQANgIAPABQANAAAIAFQAIAGAAAOQAAAIgCARIgHAdIgKAfIgkBWQgNAXgGAIQgJAMgIAHQgHAHgIACQgGACgKABQgPAAgKgKg");
	this.shape_43.setTransform(161.8,110.7,0.667,0.667);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AguCDQgGgBgEgDQgFgEgCgGQgCgGAAgKIAAieQAAgUAHgOQAGgOAKgJQALgJAPgEQAPgEAPAAQAbAAAMAHQANAIAAASQAAAIgEAGQgDAGgDADIgOgDQgHgCgKAAQgPAAgKAGQgHAGAAANIAAANIA6AAQACAEACAGQACAGAAAIQAAAOgFAFQgGAGgKAAIgoAAIAAB6IgLACIgQABg");
	this.shape_44.setTransform(145.8,106.2,0.667,0.667);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgmBcQgRgGgMgNQgNgMgHgUQgGgRAAgYQAAgWAGgTQAHgSANgMQALgOASgGQASgIAUABQAUgBASAIQASAHAMANQANAOAGARQAHAUAAAUQAAAXgHAUQgGASgNANQgMAMgSAHQgQAGgWABQgWAAgQgIgAgXgjQgIANAAAWQAAAYAJAMQAIAMAOAAQAQABAHgNQAJgNAAgXQAAgWgJgNQgIgNgPAAQgOAAgJANg");
	this.shape_45.setTransform(133.1,108.5,0.667,0.667);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgaBdQgTgGgNgNQgOgMgHgTQgIgUAAgZQAAgaAIgRQAHgSANgNQAMgLARgGQASgGAOABQATAAAQAFQAQAIALAJQAMAMAFAOQAHARAAAQQAAANgHAGQgHAHgMACIhYAPQAEALAMAIQAMAFAPAAQAQAAAMgEQANgDAJgGQAFAEAFAHQADAHAAAIQAAARgPAJQgMAGgOADQgNACgOAAQgUAAgSgHgAgMgwQgHADgDAFQgEAGgCAFIgCAMIA8gKQgBgJgGgHQgIgHgNgBQgHAAgHADg");
	this.shape_46.setTransform(114.7,108.5,0.667,0.667);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgpBhQgGgCgEgDQgFgEgCgFQgDgHABgJIAAhzQgBgIAEgHQADgFAFgGIAPgJIASgHIATgFIAVgCQARAAAKAHQALAIAAAQQAAAFgCAFIgDAKIgQAAIgdAGIgMAEIAACCIgLADIgPABg");
	this.shape_47.setTransform(103.5,108.5,0.667,0.667);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AghBgQgRgEgKgIQgLgIgGgMQgFgKgBgRQAAgbAPgNQAPgOAfgEIAugFIAAgDQAAgLgKgFQgJgEgQgBQgNAAgOAEQgNADgKAEQgEgDgDgIQgEgGAAgIQAAgKAFgGQAEgGAJgEQAOgGALAAQANgCAOAAQARAAARADQAPAFAMAJQAMAIAGANQAHAOAAASIAABVQgBAKgFAGQgFAHgHAEQgYAPgqABQgUgBgNgDgAgBATQgKABgGADQgHADABAJQgBAIAGAEQAFAFANAAIANgCIALgDIAAgfg");
	this.shape_48.setTransform(91.4,108.5,0.667,0.667);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgRBcQgSgHgNgNQgNgMgHgTQgIgRABgXQAAgYAHgUQAHgSAOgNQANgMASgHQARgFATAAQAagBAOALQAOAKAAAQQAAAGgEAHQgDAHgEAEIgPgGQgIgDgKAAQgJAAgIADQgIAEgGAFQgGAHgDAIQgEAJAAALQAAAYANAMQAMAMASgBQAKAAAJgCIAOgGQAIAIACAEQAFAGAAAJQgBAQgOAJQgNAJgZAAQgXgBgSgHg");
	this.shape_49.setTransform(79.3,108.5,0.667,0.667);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AggB8QgSgHgNgOQgNgNgHgSQgGgTAAgXQAAgYAHgTQAIgTAMgMQAMgMASgGQARgGATAAQAHAAAHABIALAEIAAg+IALgDIARgCIAOACQAHABAEADQAEAEACAGQACAGAAAKIAAC1QAAARgQAMQgLAHgQAGQgRAGgVgBQgVAAgUgGgAgRgFQgKAMAAAXQAAAZAJALQAKANASAAQAHAAAEgDIAIgEIAAhUQgGgEgLAAQgSgBgLAMg");
	this.shape_50.setTransform(356.9,77.7,0.667,0.667);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AglBdQgRgHgNgNQgNgNgGgTQgHgSAAgXQAAgWAHgSQAGgTANgNQAMgMASgIQASgHATAAQAWAAARAIQASAHALANQANAMAHATQAGASAAAWQAAAYgGASQgHATgNANQgMAMgRAHQgTAHgUAAQgTAAgSgHgAgWgjQgJANAAAWQAAAXAJANQAJAMAOAAQAPAAAIgMQAIgNAAgXQAAgWgIgNQgIgMgQAAQgOAAgIAMg");
	this.shape_51.setTransform(343.1,79.8,0.667,0.667);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AglBdQgRgHgOgNQgMgNgHgTQgGgSAAgXQAAgWAGgSQAHgTAMgNQANgMASgIQARgHAUAAQAWAAAQAIQATAHALANQAMAMAIATQAGATABAVQgBAXgGATQgHATgNANQgMAMgSAHQgSAHgUAAQgUAAgRgHgAgXgjQgIANAAAWQAAAXAIANQAKAMANAAQAPAAAJgMQAHgNABgXQgBgWgHgNQgIgMgQAAQgPAAgIAMg");
	this.shape_52.setTransform(329,79.8,0.667,0.667);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("Ag3B6QgTgJAAgVQAAgKAEgGQACgHAFgDQAKAFAOAFQAOAEANAAQATAAALgHQAMgHAAgPIAAgHQgOAIgVgBQgSAAgNgEQgOgGgMgKQgKgLgHgSQgHgRAAgXQAAgXAHgSQAHgRAMgMQANgLARgGQARgFATAAQAVAAAQAFQAPAFAOAJQAHAHAEAFQAEAHAAAKIAACGQAAAWgHANQgHAQgNAKQgKAIgTAGQgQAEgTAAQgfAAgUgJgAgQhEQgJAKAAAUQAAAWAJAKQAIAJANAAQAQgBAHgFIAAhIIgHgCQgFgCgHAAQgRAAgIALg");
	this.shape_53.setTransform(314.9,81.9,0.667,0.667);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgaBdQgTgHgNgMQgNgMgIgUQgIgTAAgZQAAgZAIgTQAIgTAMgLQAOgMAPgFQAQgGAQAAQAUAAAPAHQAQAGALALQALAKAHAPQAGAPAAASQAAAOgHAFQgHAHgMACIhYAOQAEANAMAGQALAHAQAAQAOAAAOgEQAPgFAHgFQAGAFADAGQAEAIAAAHQAAARgPAIQgMAHgOACQgQADgLAAQgTAAgTgHgAgMgwQgGADgEAFQgEAFgCAGIgCAMIA8gLQgBgHgHgIQgGgIgOAAQgIAAgGADg");
	this.shape_54.setTransform(297,79.8,0.667,0.667);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAfB7QgJgGgKgOIgjgwIAABGIgLACQgJACgHAAQgJAAgGgCQgGAAgEgEQgEgDgDgGQgCgGAAgKIAAjeIALgDQAIgBAIAAIAPABQAGACAEADQAEACADAIQACAEAAALIAABlIA9hDQAUAAAKAIQALAKAAANQAAAGgCAFQgBADgEAHIgJAKIgjAfIA5A+QgCARgIALQgHAJgRAAQgLAAgJgGg");
	this.shape_55.setTransform(284.1,77.6,0.667,0.667);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AghBgQgOgEgMgIQgLgHgHgMQgGgMAAgQQAAgbAPgNQAPgOAfgEIAugFIAAgDQAAgLgJgFQgIgFgSAAQgNAAgNADIgXAIQgFgDgDgHQgEgIAAgHQAAgKAFgGQAFgHAJgDQAKgEAOgDIAbgCQATAAAQAFQAQAFALAIQAMAIAFAOQAHANAAASIAABVQAAAKgGAHQgEAGgIAFQgXAPgrAAQgRAAgQgEgAgBASQgJABgHAEQgGAFAAAGQAAAIAFAFQAGAFAMAAQAHAAAGgCQAIAAADgDIAAgfg");
	this.shape_56.setTransform(270.3,79.8,0.667,0.667);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgnBmQgRgPAAgjIAAikIAMgDQAHgBAIAAQARAAAHAGQAJAGgBATIAAAZIAvAAIAFAKQACAJAAAGQAAANgGAGQgFAGgJAAIgiAAIAAA5QAAALAHADQAFAFALAAIAMgBIAJgDIAGAKQACAGABAGQAAAPgLAJQgKAJgaAAQgfAAgRgPg");
	this.shape_57.setTransform(259.5,78.6,0.667,0.667);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgmBdQgRgHgMgNQgNgNgHgTQgGgRAAgYQAAgXAGgRQAHgTANgNQALgMASgIQASgHAUAAQAVAAARAIQASAHAMANQANANAGASQAHATAAAVQAAAXgHATQgGATgNANQgMANgSAGQgSAHgUAAQgUAAgSgHgAgXgjQgIANAAAWQAAAYAJAMQAIAMAOAAQAQAAAHgMQAJgNAAgXQAAgWgJgNQgIgMgPAAQgPAAgIAMg");
	this.shape_58.setTransform(242.6,79.8,0.667,0.667);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgmB4QgNgCgMgGQgKgFgHgJQgGgIAAgLQAAgMAHgHQAGgIAHgEQALAJAOAFQAOAGARAAQAQAAAIgFQAHgGAAgIQAAgIgFgEIgQgIIgrgRQgPgGgIgHQgJgIgFgMQgGgNAAgQQAAghAYgTQAXgUAqAAQAOAAAPACQAMACALAFQAKAGAFAHQAFAIAAAJQAAALgEAGQgEAHgHAGQgGgFgPgFQgMgEgRAAQgPAAgIAFQgHAFAAAHQAAAGAEADQAFAEAJADIASAHQAiALASARQATASAAAfQAAAhgZAUQgYAUgtAAQgRAAgOgDg");
	this.shape_59.setTransform(229.1,78.2,0.667,0.667);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgYB4QgKgKAAgQQAAgQAKgKQAJgLAPAAQAQAAAJALQAKAKgBAQQABAPgKALQgJAKgQAAQgPAAgJgKgAgRAkQgGgDgCgKQgCgJgBgRIgEh0QAFgEAKgDQALgDAHAAQAPAAAIAHQAIAIAAAPIgCA+QgBATgCASQgBAQgDASIgFACIgFACIgNACQgJAAgIgEg");
	this.shape_60.setTransform(214,77.8,0.667,0.667);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgaBdQgTgHgNgMQgNgNgIgTQgIgTAAgZQAAgaAIgSQAIgSAMgMQAOgMAPgFQAQgGAQAAQAUAAAPAHQAQAGALALQALAJAHAQQAGAPAAASQAAAOgHAFQgHAHgMACIhYAOQAEANAMAGQALAHAQAAQAPAAANgEQAOgFAIgFQAFAEAEAHQAEAGAAAJQAAARgPAIQgLAHgPACQgQADgLAAQgSAAgUgHgAgMgwQgGAEgEAEQgEAFgCAGIgCAMIA8gLQAAgGgIgJQgGgIgOAAQgHAAgHADg");
	this.shape_61.setTransform(203.8,79.8,0.667,0.667);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("ABcBhQgGgBgFgEQgEgDgCgGQgCgFAAgLIAAhbQAAgLgHgGQgGgFgKAAQgFAAgGADQgFACgEADIAACFIgLACQgIABgIAAQgGAAgHgBQgGgBgEgEQgFgDgCgGQgDgHAAgJIAAhbQAAgMgGgFQgGgFgKAAQgHAAgEACIgIAEIAACHIgLACQgJABgHAAQgIAAgHgBQgGgBgFgEQgEgDgCgGQgCgHgBgJIAAhzQAAgKAEgHQAGgHAGgEQAMgJASgGQASgGAUAAQAPAAAPAEQANAFAKAJQALgIANgFQAPgFASAAQANAAAOAEQAOAEAJAIQAKAIAGAOQAHANAAAUIAAB5IgLACQgJABgHAAQgIAAgHgBg");
	this.shape_62.setTransform(187.1,79.7,0.667,0.667);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AglBdQgRgHgNgNQgNgNgGgTQgHgSAAgXQAAgWAHgSQAGgTANgNQAMgMASgIQASgHATAAQAWAAARAIQASAHALANQAMALAIAUQAGASAAAWQAAAYgGASQgIAUgMAMQgMAMgRAHQgTAHgUAAQgTAAgSgHgAgWgjQgJANAAAWQAAAXAJANQAIAMAOAAQAQAAAIgMQAIgNAAgXQAAgWgJgNQgIgMgPAAQgOAAgIAMg");
	this.shape_63.setTransform(169.9,79.8,0.667,0.667);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAsB/QgGAAgEgEQgFgEgCgFQgCgHAAgJIAAhVQAAgQgIgGQgGgGgLAAQgIAAgFACQgHABgEADIAACGIgLACQgIACgIAAQgIAAgGgCQgHAAgEgEQgFgFgCgEQgCgHAAgJIAAjfIAMgCQAHgBAIAAIAPABQAGACAEADQAEACADAIQACAGAAAJIAAAmIAOgFQAKgDAKABQAkAAAUATQAUATAAAkIAAB1IgLACQgIACgIAAQgIAAgHgCg");
	this.shape_64.setTransform(155.9,77.6,0.667,0.667);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("Ag4B4QgJgKgCgPQAKgIANgNQANgNAIgMQgGgBgHgIQgHgGgIgUIgJgVIgehsQAEgFAJgFQAJgEAKAAQAMAAAJAGQAIAGAEAPIAbBpIACAAQAFgOADgOIAIgfIAIghIAGggQANgIAPAAQANAAAIAGQAIAGAAAOQAAANgCALIgHAdIgKAgIgkBWQgNAXgGAIQgIAMgJAHQgHAGgIADQgIADgIAAQgPAAgKgKg");
	this.shape_65.setTransform(137.4,81.9,0.667,0.667);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AhGCCQgGgBgFgEQgEgEgCgFQgCgGAAgKIAAi4QAAgKAEgHQAFgHAGgFQAMgHAQgFQAQgFAVAAQAVAAASAGQATAGANANQANAMAIATQAHATAAAZQAAAZgGARQgHAUgLALQgLAMgSAHQgRAGgUAAQgPAAgNgFIAABAIgMADIgQABIgOgBgAgThNIgJAEIAABUIAJAEIALACQAkAAAAgvQAAgYgJgMQgJgMgRAAQgGAAgGABg");
	this.shape_66.setTransform(124,81.8,0.667,0.667);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AhGCCQgGgBgFgEQgEgDgCgGQgCgGAAgKIAAi4QAAgKAEgHQAFgHAGgFQAMgHAQgFQAPgFAWAAQAVAAASAGQAUAHAMAMQANAMAIATQAHATAAAZQAAAagGAQQgGASgMANQgMAMgRAHQgRAGgUAAQgPAAgNgFIAABAIgMADIgQABgAgThNIgJAEIAABUIAJAEIALACQAkAAAAgvQAAgYgJgMQgKgMgQAAQgHAAgFABg");
	this.shape_67.setTransform(110,81.8,0.667,0.667);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AghBgQgQgEgKgIQgLgHgGgMQgHgMAAgQQAAgbAPgNQAOgOAggEIAugFIAAgDQAAgLgJgFQgJgFgRAAQgNAAgNADIgXAIQgGgEgCgGQgEgJAAgGQAAgKAFgGQAEgGAJgEQAKgEAPgDIAbgCQATAAAPAFQASAFAKAIQALAIAGAOQAHANAAASIAABVQAAAJgGAIIgMALQgYAPgqAAQgQAAgRgEgAgBASQgJABgHAEQgHAEABAHQgBAIAGAFQAGAFAMAAIANgCQAGAAAFgDIAAgfg");
	this.shape_68.setTransform(95.9,79.8,0.667,0.667);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAsB/QgGAAgEgEQgFgEgCgFQgCgHAAgJIAAhVQAAgQgIgGQgGgGgLAAQgIAAgFACQgHABgEADIAACGIgLACQgIACgIAAQgIAAgGgCQgHAAgEgEQgFgFgCgEQgCgHAAgJIAAjfIAMgCQAHgBAIAAIAPABQAGACAEADQAEACADAIQACAGAAAJIAAAmIAOgFQAKgDAKABQAkAAAUATQAUATAAAkIAAB1IgLACQgIACgIAAQgIAAgHgCg");
	this.shape_69.setTransform(82.7,77.6,0.667,0.667);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgiBfQgPgDgKgIQgMgHgFgMQgHgMAAgRQAAgZAQgOQAOgOAfgEIAugFIAAgDQAAgLgJgFQgJgFgRABQgNAAgNACQgNADgLAFQgDgDgEgHQgEgIAAgIQABgKAEgGQAEgFAKgFQAJgEAQgBQAMgDAOAAQASAAARAFQARAEAKAIQAMAKAGANQAFANABASIAABVQgBALgFAGQgEAGgIAFQgXAOgrAAQgRAAgRgEgAgBASQgJABgHAEQgHAEABAHQgBAIAGAFQAGAFAMAAIAOgCQAHgBAEgCIAAgfg");
	this.shape_70.setTransform(359.8,51,0.667,0.667);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AggBhQgNgBgJgGQgJgDgGgJQgFgHAAgKQAAgKAEgGQADgGAFgEQAJAFAPAGQAOAEARAAQALAAAGgDQAFgCAAgHQAAgGgEgCQgFgEgIgCIgLgCQgggHgPgNQgPgOAAgaQAAgPAGgLQAFgKALgJQAKgHAPgFQAPgEAQAAQAPAAAKACQAMACAJAEQAIAFAFAGQAFAHAAAJQAAAJgDAHQgDAGgEAEIgJgEIgNgEQgHgCgHAAIgMgBQgKgBgIADQgGADAAAGQAAAEADADQAEACAJADIALADQAiAIAPAPQAPAOAAAYQAAAdgVARQgUAQgnAAQgNAAgPgDg");
	this.shape_71.setTransform(343,51,0.667,0.667);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgKCJQgGgBgEgEQgEgCgDgHQgCgGAAgJIAAicIALgCIAQgBIANABQAHABADADQAGAEABAGQACAFAAAKIAACcIgLACQgIACgIgBgAgXhOQgKgKAAgPQAAgPAKgKQAJgJAOgBQAQABAJAJQAIALABAOQgBAPgIAKQgJAKgQAAQgOAAgJgKg");
	this.shape_72.setTransform(333.5,48.2,0.667,0.667);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgNgNgIgTQgIgTAAgZQAAgZAIgTQAIgTAMgKQAOgNAPgFQAPgGARAAQATABAQAGQAPAFAMAMQALAKAHAQQAGAPAAARQAAAOgHAFQgHAHgMACIhYAOQAEANAMAGQALAHAQgBQAQAAAMgDQAMgEAKgGQAFAEAEAHQAEAHAAAHQAAASgPAIQgNAHgNACQgMACgPAAQgVABgRgHgAgMgwQgGAEgEAEQgEAGgCAFQgCAGAAAGIA8gLQAAgHgIgIQgGgIgOAAQgIAAgGADg");
	this.shape_73.setTransform(318.8,51,0.667,0.667);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("ABcBhQgHgBgEgEQgEgDgDgGQgCgFAAgLIAAhbQAAgLgGgGQgHgFgJAAQgFAAgGADIgJAFIAAADIAACBIgLADIgQABIgNgBQgGgBgEgEQgEgCgDgHQgCgFAAgLIAAhbQgBgLgGgGQgHgFgKAAQgFAAgFACIgJAEIAACGIgKADIgRABIgOgBQgHgBgEgEQgDgDgDgGQgCgFgBgLIAAhzQAAgKAFgHIALgMQAMgJASgGQATgFAUAAQAPAAAOAEQAPAGAIAIQAMgJAMgEQANgFAUAAQAOAAANADQANAFAKAIQALAJAFANQAHAOAAATIAAB4IgMADIgQABg");
	this.shape_74.setTransform(302,50.9,0.667,0.667);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgmBdQgQgHgNgNQgMgMgIgTQgGgSAAgYQAAgXAGgRQAIgUAMgMQANgNAQgHQAQgGAWgBQAUABASAGQASAIAMAMQANANAGATQAHATAAAVQAAAXgHATQgGASgNAOQgMAMgSAHQgQAHgWgBQgUAAgSgGgAgWgjQgJANAAAWQAAAXAJANQAIANAOAAQAPgBAJgNQAIgNAAgWQAAgWgJgNQgIgMgPAAQgOAAgIAMg");
	this.shape_75.setTransform(284.9,51,0.667,0.667);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAsCAQgGgBgEgEQgEgDgCgGQgDgFAAgLIAAhVQAAgQgIgGQgGgGgLAAIgNACIgKAEIAACGIgMADIgQABIgPgBQgGgBgEgEQgEgDgDgGQgCgHAAgJIAAjfIAMgCQAHgBAJAAQAIAAAGABQAGABAFAEQAEAEACAGQACAGABAJIAAAmQAEgDAJgCQAJgCAMAAQAkAAATATQAUATAAAlIAAB0IgLADIgQABg");
	this.shape_76.setTransform(270.8,48.8,0.667,0.667);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgaBdQgSgFgOgOQgNgNgIgTQgIgSAAgaQAAgaAIgSQAHgRANgMQAOgNAPgFQAPgGARAAQAUABAPAGQAPAFAMAMQALAKAHAQQAGAQAAAQQAAANgHAGQgGAHgNACIhYAOQAEANAMAGQAMAHAQgBQAPAAAMgDQALgEAKgGQAFADAFAIQAFAHAAAHQAAARgQAJQgMAHgOACQgMACgPAAQgUABgSgHgAgMgwQgHAFgDADQgEAGgCAFIgDAMIA9gLQAAgHgIgIQgGgIgOAAQgHAAgHADg");
	this.shape_77.setTransform(252.4,51,0.667,0.667);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgtCDQgHgBgEgEQgEgDgDgGQgCgGAAgKIAAieQAAgUAGgOQAGgNAMgKQAKgJAPgEQAMgEASAAQAbAAANAHQAMAIAAASQAAAHgDAHQgDAFgEAEIgOgDQgHgCgKAAQgPAAgJAGQgIAFAAAOIAAANIA6AAIAFAKQABAIAAAGQABAOgHAFQgFAGgJAAIgpAAIAAB6IgLACIgQABg");
	this.shape_78.setTransform(241.2,48.6,0.667,0.667);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgiBfQgQgDgJgIQgMgHgFgMQgHgMAAgRQAAgZAPgOQAPgOAfgEIAugFIAAgDQAAgLgJgFQgJgFgQABQgOAAgNACQgMADgMAFQgEgDgEgHQgDgJAAgHQAAgKAFgGQADgEAKgGQALgEAOgBQAMgDAPAAQASAAARAFQARAFAKAHQAMAKAGANQAFANABASIAABVQgBAKgEAHQgFAFgIAGQgYAOgqAAQgRAAgRgEgAgBASQgJABgHAEQgHAEAAAHQAAAIAGAFQAGAFAMAAIAOgCQAHgBADgCIAAgfg");
	this.shape_79.setTransform(228.7,51,0.667,0.667);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AggBhQgMgBgKgGQgIgDgHgJQgFgHAAgKQAAgJAEgHQADgGAGgEQAIAFAPAGQAOAEASAAQAKAAAGgDQAFgDAAgGQAAgFgDgDQgGgEgIgCIgLgCQgggHgPgNQgPgOAAgaQAAgOAGgMQAFgKALgJQALgHAOgFQAQgEAPAAQAPAAALACQANACAGAEQAJAFAGAGQAEAIAAAIQAAAJgCAHQgDAFgFAFIgJgEIgMgEIgPgCIgMgBQgLgBgGADQgHADAAAGQAAAFADACQAEACAJADIALADQAiAIAQAPQAOAOAAAYQAAAdgUARQgVAQgnAAQgOAAgOgDg");
	this.shape_80.setTransform(216.6,51,0.667,0.667);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgiBfQgQgDgKgIQgKgHgHgMQgGgMAAgRQAAgZAPgOQAOgOAggEIAugFIAAgDQAAgLgJgFQgJgFgQABQgOAAgNACQgNADgKAFQgFgDgEgHQgCgIAAgIQgBgKAFgGQAEgEAKgGQAKgEAOgBQANgDAOAAQARAAARAFQASAEAKAIQAMAKAFANQAHANgBASIAABVQAAALgEAGQgFAFgIAGQgXAOgrAAQgRAAgRgEgAAAASQgKABgHAEQgGAEgBAHQABAIAFAFQAHAFALAAIANgCQAIgBAEgCIAAgfg");
	this.shape_81.setTransform(199,51,0.667,0.667);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgoAvQAIgaAFgWIAJguQAGgDAJgDQAGgCAKAAQALAAAJAFQAIAGAAANQAAAHgCALIgGATIgIATQgFAKgEAFQgGAIgHAFQgGADgKAAQgQAAgLgJg");
	this.shape_82.setTransform(184.7,56.4,0.667,0.667);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgNgNgIgTQgIgTAAgZQAAgZAIgTQAIgTAMgKQAOgNAPgFQAPgGARAAQATABAQAGQAPAFAMAMQALAKAHAQQAGAPAAARQAAAOgHAFQgHAHgMACIhYAOQAEANAMAGQALAHAQgBQAQAAAMgDQAMgEAKgGQAFAEAEAHQAEAHAAAHQAAASgPAIQgLAHgPACQgMACgPAAQgVABgRgHgAgMgwQgGAEgEAEQgEAGgCAFQgCAGAAAGIA8gLQAAgHgIgIQgGgIgOAAQgIAAgGADg");
	this.shape_83.setTransform(175.6,51,0.667,0.667);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AguB9QgQgGgMgKQgQgKAAgUIAAjMIAMgDQAHgCAJAAQAIAAAGACQAGABAFADQAEAEACAGQACAFAAALIAAAlQALgEAGgBIARgCQASAAAPAHQAQAHALAMQAMAMAHATQAHARAAAZQAAAagHARQgHAUgNAMQgOANgRAFQgRAHgWgBQgXAAgRgFgAgSgPIgLAFIAABTQAEACAFACQAGACAIAAQAQAAAJgMQAJgMAAgYQAAgZgJgLQgJgMgPAAQgHABgGABg");
	this.shape_84.setTransform(162.2,48.9,0.667,0.667);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("ABcBhQgGgBgEgEQgFgDgCgGQgDgHABgJIAAhbQAAgLgHgGQgGgFgKAAQgFAAgGADIgJAFIAACEIgLADIgQABIgNgBQgHgBgEgEQgEgDgCgGQgDgHAAgJIAAhbQAAgLgGgGQgHgFgJAAQgFAAgGACIgIAEIAACGIgMADIgPABIgPgBQgHgBgDgEQgEgDgDgGQgCgHAAgJIAAhzQAAgKADgHIAMgMQALgIATgHQATgFATAAQAPAAAOAEQAPAFAJAJQANgJAMgEQANgFATAAQAOAAANADQAOAGAJAHQALAJAGANQAFAOAAATIAAB4IgLADIgPABg");
	this.shape_85.setTransform(144.6,50.9,0.667,0.667);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgNgNgIgTQgIgTAAgZQAAgZAIgTQAIgTAMgKQANgNAQgFQAPgGARAAQATABAQAGQAPAFAMAMQALAKAGAQQAHAOAAASQAAAOgHAFQgHAHgMACIhYAOQAEAOAMAFQALAHAQgBQAQAAAMgDQAMgEAKgGQAFAEAEAHQAEAHAAAHQAAASgPAIQgNAHgNACQgMACgPAAQgVABgRgHgAgMgwQgFADgFAFQgEAGgCAFIgCAMIA8gLQgBgIgHgHQgGgIgOAAQgIAAgGADg");
	this.shape_86.setTransform(127.9,51,0.667,0.667);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("ABcBhQgHgBgEgEQgEgDgDgGQgCgFAAgLIAAhbQAAgLgGgGQgHgFgKAAQgEAAgGADIgJAFIAAADIAACBIgLADIgQABIgNgBQgHgBgDgEQgFgDgCgGQgCgFAAgLIAAhbQgBgLgGgGQgHgFgKAAQgFAAgFACIgIAEIAACGIgMADIgQABIgOgBQgIgCgDgDQgDgCgEgHQgCgFAAgLIAAhzQAAgLAEgGIAMgMQAMgJASgGQATgFATAAQAPAAAOAEQAPAGAJAIQAMgJAMgEQANgFAUAAQAOAAANADQANAFAKAIQALAJAFANQAHAOAAATIAAB4IgMADIgQABg");
	this.shape_87.setTransform(111.2,50.9,0.667,0.667);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgaBdQgSgFgOgOQgOgNgHgTQgIgSAAgaQAAgaAIgSQAHgRANgMQAOgNAPgFQAPgGARAAQAUABAPAGQAPAFAMAMQAMAKAFAQQAHAQAAAQQAAANgHAGQgHAHgMACIhYAOQADANANAGQAMAHAPgBQARAAALgDQAMgEAJgGQAFADAFAIQAFAHgBAHQAAARgPAJQgMAHgOACQgMACgPAAQgVABgRgHgAgMgwQgHAFgDADQgEAGgCAFIgCAMIA8gLQAAgHgIgIQgGgIgOAAQgHAAgHADg");
	this.shape_88.setTransform(94.4,51,0.667,0.667);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAtB4IgKgGQgEgCgFgHIgjg+IgTAAIAABKIgeADQgIAAgGgBQgHgCgEgDQgDgDgDgHQgDgGABgKIAAi0QgBgIAFgEQADgEAIgEQALgEASgDQAOgCAUAAQAwAAAaAXQAZAVAAAnQAAAZgMAPQgKARgRAJQALAQAPAUQANAQAGAOQgCANgKAHQgLAIgLgBQgIAAgFgBgAgdhBIAAA6IAXAAQANAAAIgIQAHgHAAgPQAAgOgIgIQgJgHgSgBIgJAAg");
	this.shape_89.setTransform(80.9,49.3,0.667,0.667);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("Ag+BaQhfAEhnANIhUANQC3jkEGgxQCDgZBfAVIASFMQhphdkuAMg");
	this.shape_90.setTransform(38.1,77.4,0.667,0.667);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#18721A").s().p("AkxBkQCTi3DAhaQCThFCjgKIBXgFIAAHeIhggTQiQgbjgAUIjHAaIjHAlgAgkAsQBggIBQAAQBLAABCAHIAAiJQiuAeiPBsg");
	this.shape_91.setTransform(28.8,76.9,0.667,0.667);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#18721A").s().p("EghIAXYQirAAh5h5Qh4h5AAiqMAAAgh3QAAiqB4h4QB5h6CrAAMBCRAAAQCrAAB5B6QB4B4AACqMAAAAh3QAACqh4B5Qh5B5irAAgEgkkgUWQhbBbAACAMAAAAh3QAACBBbBaQBbBbCBAAMBCRAAAQCBAABbhbQBbhaAAiBMAAAgh3QAAiAhbhbQhbhbiBAAMhCRAAAQiBAAhbBbg");
	this.shape_92.setTransform(220.2,99.7,0.667,0.667);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("EAklgAPQhbhbiBAAMhCRAAAQiBAAhbBbQhXBWgEB5IAAhKQAAh/BbhcQBbhaCBgBMBCRAAAQCBABBbBaQBbBcAAB/IAABKQgEh5hXhWg");
	this.shape_93.setTransform(220.2,19.6,0.667,0.667);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("EghIAVyQiBAAhbhbQhbhaAAiBMAAAgh3QAAiABbhbQBbhbCBAAMBCRAAAQCBAABbBbQBbBbAACAMAAAAh3QAACBhbBaQhbBbiBAAg");
	this.shape_94.setTransform(220.2,99.7,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,389.1,199.4);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYB3QgKgJAAgRQAAgQAKgJQAJgLAPAAQARAAAJALQAIAKABAPQgBARgIAJQgJALgRAAQgPAAgJgLgAAAAnQgJAAgHgDQgHgDgCgKQgCgJgBgRIgDgoQgBgUAAgVIgBgkQAHgEAKgCQAHgDAKAAQAQAAAGAHQAJAHAAAQIgFBjIgEAiIgLAEIgGABg");
	this.shape.setTransform(320.7,226.1,0.667,0.667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgNgNgIgTQgIgSAAgaQAAgaAIgRQAIgUAMgLQAOgMAPgFQAPgGARABQAUAAAPAFQAOAGANALQAKAKAIAQQAGAPAAASQAAANgHAGQgGAGgNADIhYAOQAEAMAMAIQALAFAQAAQARAAALgDQAMgDAKgHQAFAEAEAHQAEAGAAAJQAAAQgPAKQgLAGgPACQgMACgPABQgUgBgSgGgAgMgwQgHAFgDADQgEAGgCAFIgCAMIA8gKQAAgIgIgIQgGgIgOAAQgHAAgHADg");
	this.shape_1.setTransform(310.5,228,0.667,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQBcQgSgGgOgOQgNgNgHgSQgIgSAAgWQABgYAHgTQAIgTANgNQAOgMARgGQARgGATAAQAaAAAOAKQAOAJAAAQQAAAIgEAGQgDAHgEAEIgPgGQgJgDgJAAQgJAAgJADQgIADgFAGQgFAGgEAJQgDAJAAALQgBAYANAMQAMAMATAAQAKAAAIgDIAOgGQAHAFAEAHQADAGAAAJQABAQgOAJQgOAIgaAAQgXAAgQgHg");
	this.shape_2.setTransform(298.1,228,0.667,0.667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghBfQgQgEgKgHQgMgHgFgMQgHgNAAgPQABgbAPgNQAOgOAfgEIAugFIAAgDQAAgKgJgGQgJgEgRgBQgNAAgNAEQgOADgJAEQgEgCgEgJQgDgHgBgHQAAgLAFgFQAEgGAJgEQALgFAOgCQANgBAOAAQASAAAQADQARAFALAJQAMAJAFAMQAHAOAAASIAABVQAAALgGAFQgEAHgIAEQgXAPgrABQgQAAgRgFgAgBASQgKACgGADQgGAEAAAIQgBAGAGAGQAGAFAMAAIANgCQAJgBACgCIAAgfg");
	this.shape_3.setTransform(285.4,228,0.667,0.667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhGCCQgHgCgDgDQgGgEgBgGQgDgGABgJIAAi4QgBgLAFgGQADgGAIgGQALgHARgFQARgFAUAAQAUAAATAGQASAGAOAMQAMAMAJATQAHATABAaQgBAXgGATQgHATgMAMQgMANgQAGQgRAGgUAAQgQAAgMgFIAABAIgMACIgQACgAgThNQgFABgEADIAABUIAJAEQAEABAHAAQAkAAAAguQAAgZgJgMQgJgMgRAAQgIAAgEACg");
	this.shape_4.setTransform(272.4,230.1,0.667,0.667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AggBiQgNgCgJgFQgIgEgHgIQgEgIAAgKQgBgKAEgFQAEgIAEgDQAKAFAPAGQANAFARgBQALAAAFgDQAHgDAAgGQAAgGgFgDQgFgDgIgBIgLgDQgggHgPgNQgPgOAAgaQAAgOAGgLQAFgMALgIQAKgIAPgEQAQgEAPAAQAPAAAKACQAOADAGAEQAKAEAEAHQAFAGABAKQgBAIgDAGQgCAIgGADIgIgEIgbgHIgMgBQgLABgHACQgGADAAAGQAAAFAEACQADACAJADIALADQAjAIAPAPQAOAOAAAXQAAAegVAQQgTARgoAAQgOAAgOgCg");
	this.shape_5.setTransform(259.3,228,0.667,0.667);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag3B6QgTgJAAgWQAAgHAEgIQADgHAFgEQAKAHANAEQANAEAOAAQASAAAMgHQALgGAAgQIAAgGQgOAHgVAAQgPAAgPgGQgPgFgKgLQgMgLgGgRQgHgQAAgYQAAgXAHgSQAHgRAMgMQANgMARgFQAQgFAUAAQAWAAAQAFQAQAFAMAKQAHAFAEAHQAEAFAAAMIAACFQAAAWgHAOQgIAPgMAJQgNALgQAEQgRAEgSAAQghAAgSgJgAgQhFQgJALAAAUQAAAXAJAJQAIAJANAAQAPAAAJgHIAAhHIgIgDQgFgBgHAAQgRAAgIAKg");
	this.shape_6.setTransform(241.4,230.1,0.667,0.667);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAsBhQgGgCgEgDQgEgCgDgIQgCgFAAgKIAAhaQAAgMgHgFQgGgGgLAAQgGAAgGACQgIACgFAEIAACFIgLACIgQABIgOgBQgHgCgEgDQgEgCgCgIQgDgGAAgJIAAhyQAAgLAEgGQAGgIAFgEQAMgKAUgFQATgGAUAAQAqAAAVATQAWASAAAjIAAB4IgMACIgPABg");
	this.shape_7.setTransform(227.9,227.9,0.667,0.667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgKCJQgHgBgDgDQgEgDgDgHQgCgFgBgLIAAibIAMgDIAQgBIANABQAHADAEACQADADAEAGQACAGAAAKIAACcIgMACQgIACgHAAgAgXhOQgJgLAAgOQAAgOAJgKQAJgLAOABQAOgBAKALQAKAKgBAOQABAOgKALQgKAKgOAAQgOAAgJgKg");
	this.shape_8.setTransform(217.5,225.2,0.667,0.667);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgQBcQgSgGgOgOQgMgMgJgTQgGgSgBgWQAAgYAIgTQAHgSAOgOQAOgMARgGQAQgGAUAAQAbAAANAKQAOAKAAAPQAAAIgDAGQgEAHgEAEIgPgGQgIgDgLAAQgIAAgJADQgHADgFAGQgGAGgEAJQgEAJAAALQAAAYANAMQAMAMASAAQAKAAAJgDIAOgGQAHAFAEAHQADAHAAAIQAAAPgNAKQgOAIgZAAQgYAAgQgHg");
	this.shape_9.setTransform(208.3,228,0.667,0.667);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKCJQgGgBgEgDQgEgCgDgIQgCgFAAgLIAAibIALgDIAQgBIANABQAGACAEADQAFAEACAFQACAFAAALIAACcIgbAEgAgYhOQgIgLgBgOQABgOAIgKQAKgLAOABQAPgBAKALQAIAKABAOQgBAOgIALQgKAKgPAAQgOAAgKgKg");
	this.shape_10.setTransform(199,225.2,0.667,0.667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgKCAQgHgCgEgDQgEgDgCgHQgDgGAAgJIAAjeIAMgCQAIgCAIAAQAHAAAGACQAGAAAFAEQAEAEACAFQADAHAAAJIAADfIgMACQgIABgIAAg");
	this.shape_11.setTransform(192.3,225.9,0.667,0.667);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgoBhQgHgCgFgDQgEgEgCgGQgDgGAAgJIAAhzQAAgJAEgGQADgHAGgEQAGgGAIgDQAGgEAMgDIATgFIAVgCQASAAAKAHQAKAHgBAQQAAAGgBAFQgBAGgDADIgPABIgeAGIgLAEIAACCIgKADIgRABg");
	this.shape_12.setTransform(179.6,227.9,0.667,0.667);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgfBdQgQgFgNgKQgMgJgGgPQgHgSAAgUIAAhtIALgCIAQgBIAPABQAGACAFACQAEAFACAFQACAHABAIIAABSQgBAQAIAHQAHAHAMAAQAJAAAFgBIAIgEIAAiGIAMgCIAPgBIAOABQAHACAEACQAFAFACAFQACAFAAAKIAAB1QAAAUgPAIQgMAJgSAFQgRAEgVAAQgTAAgPgEg");
	this.shape_13.setTransform(167.3,228.2,0.667,0.667);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgmBcQgQgGgNgNQgNgOgGgSQgIgTABgWQgBgVAIgUQAGgRANgOQANgNAQgGQAQgIAWABQAUgBATAIQARAHAMANQANAMAHATQAHAUAAAUQAAAXgHAUQgHARgNANQgMANgRAHQgRAGgWABQgUAAgSgIgAgWgjQgJANABAWQgBAXAJANQAJAMANAAQAPAAAJgMQAHgNABgXQgBgWgHgNQgJgNgPAAQgOAAgIANg");
	this.shape_14.setTransform(153.3,228,0.667,0.667);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag4B4QgJgJgCgQQAKgIANgNIAVgYQgHgDgGgGQgIgJgIgSIgRgxIgKgiIgLguQAEgFAJgFQAIgEALAAQANABAHAFQAJAFAEAQIAbBpIACAAIAdh8QANgIAQAAQANABAIAFQAIAGAAAOQAAAJgCAPIgHAeIgKAfIgMAfIgMAeQgEAKgJAPQgHAQgLAPQgKANgHAGQgHAGgIADQgJACgHABQgQAAgJgKg");
	this.shape_15.setTransform(139.6,230.2,0.667,0.667);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgmBcQgRgGgMgNQgNgNgHgTQgGgRAAgYQAAgWAGgTQAHgRANgOQAMgNARgGQAQgIAWABQAUgBASAIQASAHAMANQANAMAGATQAHAUAAAUQAAAXgHAUQgGARgNANQgMANgSAHQgQAGgWABQgUAAgSgIgAgXgjQgIANAAAWQAAAXAJANQAIAMAOAAQAQAAAHgMQAJgNAAgXQAAgWgJgNQgIgNgPAAQgNAAgKANg");
	this.shape_16.setTransform(121.2,228,0.667,0.667);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgnBlQgRgPAAgiIAAikQAFgCAGAAQAIgCAIAAQAQAAAJAGQAIAGgBATIAAAZIAwAAIAEAKQACAIAAAHQAAANgFAGQgHAGgJAAIghAAIAAA5QABAKAFAFQAHADALAAIAKAAIAKgDIAGAKQADAFgBAHQAAAPgKAJQgJAJgbAAQgfAAgRgQg");
	this.shape_17.setTransform(109.6,226.8,0.667,0.667);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag3B6QgTgJAAgWQAAgJADgGQAFgHADgEQAKAHAOAEQANAEAOAAQATAAALgHQAMgHAAgPIAAgGQgQAHgTAAQgQAAgQgGQgOgFgLgLQgLgLgHgRQgGgQAAgYQAAgZAHgQQAHgRANgMQAMgMARgFQAPgFAVAAQAWAAAPAFQARAFALAKQAHAEAFAIQAEAGAAALIAACFQAAAUgHAQQgIAPgLAJQgOALgQAEQgRAEgRAAQgiAAgSgJgAgRhFQgIAMgBATQABAWAIAKQAJAJANAAQAPAAAIgHIAAhHIgHgDQgFgBgHAAQgRAAgJAKg");
	this.shape_18.setTransform(92.7,230.1,0.667,0.667);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAtBhQgIgCgDgDQgFgDgCgHQgCgFAAgKIAAhaQAAgLgGgGQgHgGgKAAQgIAAgGACIgMAGIAACFIgLACIgQABIgPgBQgGgCgEgDQgEgCgDgIQgCgFAAgKIAAhyQAAgLAEgGQAGgIAGgEQALgJATgGQATgGAWAAQApAAAVATQAWATAAAiIAAB4IgMACIgQABg");
	this.shape_19.setTransform(79.1,227.9,0.667,0.667);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgKCJQgHgBgDgDQgFgDgCgHQgCgFAAgLIAAibIALgDIAQgBIANABQAGACAEADQAFAEACAFQACAHAAAJIAACcIgLACIgQACgAgYhOQgIgLgBgOQABgOAIgKQAKgLAOABQAPgBAJALQAKAJAAAPQAAAPgKAKQgJAKgPAAQgOAAgKgKg");
	this.shape_20.setTransform(68.8,225.2,0.667,0.667);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgpBhQgGgCgEgDQgEgDgDgHQgCgFAAgKIAAhzQAAgJADgGQACgGAHgFQAFgFAJgEQAGgEAMgDQAMgEAHgBIAVgCQASAAAJAHQAKAHAAAQQAAAGgBAFQgBAEgDAFIgPABIgeAGIgLAEIAACCIgKADIgQABg");
	this.shape_21.setTransform(60.8,227.9,0.667,0.667);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AguB8QgPgFgNgJQgQgMAAgTIAAjNIAMgCQAHgCAJABQAIgBAGACQAGAAAFAFQAEAEACAFQACAIAAAHIAAAnQAIgEAJgCIARgBQASgBAPAHQAQAHAMAMQAMAMAGATQAHAQAAAaQAAAYgHAUQgHASgMAMQgOANgSAGQgRAGgVABQgZAAgQgHgAgSgPQgGACgFADIAABSQAEAEAFABQAGACAJAAQAPAAAJgMQAKgNAAgXQAAgZgKgKQgJgNgPAAQgHAAgGACg");
	this.shape_22.setTransform(48.7,226,0.667,0.667);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AggBiQgNgDgJgEQgJgEgFgIQgGgIAAgKQAAgIADgHQAFgGAEgFQANAHALAEQAPAFARAAQAIAAAHgEQAHgDgBgGQAAgGgEgDQgDgCgKgCIgLgDQgfgGgPgPQgQgMAAgaQAAgPAGgLQAFgMALgHQALgJAOgEQAPgEARAAQALAAAOACQAJACALAFQAIAEAFAHQAGAHAAAJQAAAIgDAHIgIALIgJgFIgagHIgOgBQgLAAgGAEQgGACAAAHQAAADADADQAFAEAIACIAMACQAhAIAPAPQAPAPAAAWQAAAegUAQQgVARgnAAQgRAAgLgCg");
	this.shape_23.setTransform(314.1,199.2,0.667,0.667);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("ABcBhQgGgBgFgEQgFgEgCgFQgCgHAAgIIAAhcQAAgLgGgFQgGgGgLAAQgGABgEACQgHACgCADIAAADIAACCIgLACIgQABIgNgBQgGgBgEgEQgGgEgBgFQgCgGAAgJIAAhcQgBgLgGgFQgHgGgKAAQgHAAgDACIgIAFIAACGIgMACIgQABIgOgBQgHgBgEgEQgFgEgCgFQgCgGAAgJIAAh0QAAgLAFgFQAEgHAHgFQAMgKASgFQATgGATAAQAPAAAOAFQAOAEAKAJQAJgHAPgGQANgFAUAAQANAAAOAEQAMADALAJQAJAHAHAPQAHAOAAATIAAB5IgMACIgQABIgOgBg");
	this.shape_24.setTransform(298,199.1,0.667,0.667);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgaBdQgTgGgNgNQgNgMgIgTQgIgUAAgYQAAgbAIgRQAHgSANgNQAMgLARgGQARgGAPABQAUAAAPAFQAQAIALAJQAMAMAFAOQAHARAAAQQAAAMgHAHQgHAHgMACIhYAPQADALANAIQANAGAOAAQAQAAAMgEQANgEAIgGQAFADAGAIQADAHABAIQAAARgQAJQgMAHgOACQgMACgPAAQgUAAgSgHgAgMgwQgGAEgEAEQgDAFgDAGIgCAMIA8gKQgBgJgGgHQgIgHgNgBQgHAAgHADg");
	this.shape_25.setTransform(281.2,199.2,0.667,0.667);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgnBmQgRgQAAgiIAAikIAMgDQAHgBAIAAQAQAAAJAGQAIAGAAATIAAAZIAvAAQADAFABAFQACAGAAAIQAAAOgGAGQgFAGgKAAIggAAIAAA5QAAAKAGAEQAFAEALAAIALgBQAIgBADgBIAFAJQACAFAAAIQAAAPgKAJQgKAJgaAAQgeAAgSgPg");
	this.shape_26.setTransform(270.1,198,0.667,0.667);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgKCJQgGgBgEgDQgFgEgCgFQgCgHAAgJIAAicIALgCQAIgCAIAAIANABQAHACAEAEQAEADADAGQACAGAAAKIAACbIgMACIgPACgAgXhOQgJgLAAgNQAAgOAJgLQAJgLAOABQAPgBAJALQAKAKgBAPQABAOgKAKQgJAKgPAAQgOAAgJgKg");
	this.shape_27.setTransform(261.6,196.4,0.667,0.667);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgnBmQgRgQAAgiIAAikIALgDQAIgBAIAAQAQAAAJAGQAIAGAAATIAAAZIAvAAQADAFABAFQACAGAAAIQAAAOgGAGQgFAGgKAAIggAAIAAA5QAAAKAGAEQAFAEALAAIALgBQAIgBADgBIAFAJQACAFAAAIQAAAPgKAJQgKAJgaAAQgeAAgSgPg");
	this.shape_28.setTransform(248.9,198,0.667,0.667);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAtBhQgHgBgFgEQgEgEgCgFQgDgHAAgIIAAhaQAAgMgFgGQgGgFgLgBQgHABgHABIgMAGIAACFIgLACIgQABIgPgBQgGgBgEgEQgFgEgCgFQgCgGAAgJIAAhzQAAgMAEgFQADgHAJgFQALgKATgFQATgGAWAAQAoAAAWATQAWATAAAiIAAB4IgLACIgRABIgNgBg");
	this.shape_29.setTransform(236.9,199.1,0.667,0.667);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgaBdQgTgGgNgNQgNgMgIgTQgIgUAAgYQAAgbAIgRQAHgSANgNQAMgLARgGQARgGAPABQAUAAAPAFQAQAIALAJQAMAMAGAOQAGARAAAQQAAAMgHAHQgHAHgMACIhYAPQADALANAIQANAGAOAAQAPAAANgEQANgEAJgGQAFADAEAIQAEAGAAAJQAAARgPAJQgMAHgOACQgNACgOAAQgUAAgSgHgAgMgwQgGAEgEAEQgEAFgCAGIgCAMIA8gKQgBgJgHgHQgHgHgNgBQgHAAgHADg");
	this.shape_30.setTransform(223.3,199.2,0.667,0.667);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("ABcBhQgGgBgFgEQgEgDgCgGQgCgHgBgIIAAhcQABgLgHgFQgFgGgLAAQgGABgFACQgGACgDADIABADIAACCIgMACIgQABIgNgBQgGgBgEgEQgFgDgCgGQgCgHAAgIIAAhcQAAgLgHgFQgHgGgJAAQgHAAgEACIgIAFIAACGIgLACIgRABIgOgBQgGgBgFgEQgEgDgCgGQgCgHgBgIIAAh0QAAgKAFgGQAEgHAHgFQAMgKASgFQATgGAUAAQAPAAAOAFQANAEAKAJQAKgHAOgGQAOgFATAAQAMAAAPAEQANAEAKAIQALAIAFAOQAHAOAAATIAAB5IgLACIgQABIgPgBg");
	this.shape_31.setTransform(206.5,199.1,0.667,0.667);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgaBdQgTgGgNgNQgMgMgJgTQgIgUAAgYQAAgaAIgSQAIgUAMgLQAMgLARgGQARgGAPABQATAAAQAFQAQAIALAJQALAMAHAOQAGAPAAASQAAAOgHAFQgHAHgMACIhYAPQAEALAMAIQAMAGAPAAQAPAAANgEQAOgFAIgFQAGAFADAGQAEAHAAAIQAAARgPAJQgMAHgOACQgMACgPAAQgUAAgSgHgAgMgwQgGAEgEAEQgEAGgCAFQgCAGAAAGIA8gKQAAgIgIgIQgGgHgOgBQgIAAgGADg");
	this.shape_32.setTransform(189.8,199.2,0.667,0.667);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgWBeQgKgEgEgIIgviLIgGgaQAGgGAHgEQAKgEAJAAQAMAAAJAGQAIAGAEAPIAaBvIACAAIAOg+QAHgdAHgnQAGgEAIgCQAGgCAIAAQANAAAJAGQAIAGAAAOIgCASIgHAbIgqByQgFAEgKADQgIADgOAAQgOAAgKgEg");
	this.shape_33.setTransform(176.6,199.2,0.667,0.667);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AglBdQgSgIgMgMQgMgNgIgTQgGgTAAgWQAAgVAGgUQAIgSAMgMQAMgOASgGQARgIAUABQAUgBASAIQASAHANANQAMANAHASQAGAUABAUQgBAXgGAUQgHASgMANQgNANgSAGQgQAGgWABQgVgBgQgGgAgWgiQgIALAAAXQgBAYAJAMQAIAMAOAAQAPAAAJgMQAHgNABgXQgBgXgHgLQgJgNgPAAQgOAAgIANg");
	this.shape_34.setTransform(163.1,199.2,0.667,0.667);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgpBhQgHgCgDgDQgFgEgCgFQgCgGAAgKIAAhyQAAgJADgHQADgGAFgFIAPgJIASgHIATgFIAVgCQARAAAKAHQAKAIAAAQQAAAFgBAFIgEAKIgPAAIgeAGIgLAEIAACCIgLADIgQABIgOgBg");
	this.shape_35.setTransform(151.5,199.1,0.667,0.667);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhGCCQgGgCgEgDQgFgDgCgGQgCgHAAgJIAAi4QgBgKAFgHQADgGAIgGQALgHARgFQARgFAUAAQAVAAASAGQATAGANANQAOAMAHATQAIATAAAZQgBAZgGARQgHATgMAMQgLANgRAGQgQAGgVAAQgNAAgPgFIAABAIgMADIgQABgAgThNIgKAEIAABUIAKAEIALABQAkAAAAguQAAgZgJgMQgJgLgRAAQgHAAgFABg");
	this.shape_36.setTransform(139.4,201.3,0.667,0.667);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("ABcBhQgGgBgFgEQgEgDgCgGQgDgHAAgIIAAhcQAAgLgGgFQgFgGgLAAQgGABgFACQgGACgDADIABADIAACCIgMACIgQABIgNgBQgGgBgFgEQgEgEgCgFQgDgHAAgIIAAhcQAAgLgGgFQgHgGgJAAQgHAAgEACIgIAFIAACGIgMACIgQABIgOgBQgGgBgFgEQgEgEgCgFQgDgHAAgIIAAh0QAAgLAFgFQADgGAIgGQANgKARgFQASgGAUAAQAPAAAOAFQAOAEAKAJQAKgHAOgGQANgFAUAAQAMAAAPAEQANAEAKAIQAKAIAGAOQAHANAAAUIAAB5IgMACIgQABIgOgBg");
	this.shape_37.setTransform(122,199.1,0.667,0.667);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgKCJQgGgBgFgDQgEgEgCgFQgCgHgBgJIAAicIANgCQAHgCAIAAIANABQAHACAEAEQAEADADAGQACAGAAAKIAACbIgMACIgQACIgNgCgAgXhOQgJgLAAgNQAAgOAJgLQAJgLAOABQAQgBAIALQAJAKAAAPQAAAOgJAKQgIAKgQAAQgOAAgJgKg");
	this.shape_38.setTransform(108.5,196.4,0.667,0.667);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AguB1QgPAAgJgJQgJgKAAgQIAAiiQAAgRAJgJQAJgKAPAAIB2AAIAFALQACAJAAAGQAAAOgGAGQgGAHgKAAIhLAAIAAAjIBQAAIAFALQACAJAAAGQAAAOgGAGQgGAGgKAAIhBAAIAAAoIBcAAIAEALIACAPQAAAPgGAGQgGAGgKAAg");
	this.shape_39.setTransform(94,197.7,0.667,0.667);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgmB4QgNgCgMgGQgLgGgGgIQgGgIAAgLQAAgLAHgIQAFgIAIgEQALAJAOAGQAOAFARAAQARAAAHgFQAHgGAAgIQAAgIgFgDQgIgFgIgDIgPgGQgOgEgOgIQgMgEgLgJQgJgJgFgLQgGgMAAgRQAAggAYgVQAYgTApAAQAPAAAOACQAMACALAFQAJAFAGAIQAFAIAAAJQAAALgEAGQgFAIgGAFQgGgFgPgFQgOgEgPAAQgOAAgJAFQgHAFAAAHQAAAGAEADQADADALAFIASAGQAiAMASARQATAQAAAgQAAAhgYAUQgZAUgtAAQgTAAgMgDg");
	this.shape_40.setTransform(80.6,197.7,0.667,0.667);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AA5B3QgFgBgEgEQgEgDgCgFIgEgLIgHgbIhAAAIgLAwIgLADQgGACgHAAQgSgBgKgGQgIgIAAgLIAVhSIAoh6QAGgEANgEQANgCALAAQASAAANAFQAOAGAEALIAOAvQAHAUAIAiIAbBoQgDAGgJADQgIAEgNAAQgJAAgGgCgAgLgXIgLAnIArAAIgThLIgCAAg");
	this.shape_41.setTransform(66.5,197.7,0.667,0.667);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AguB1QgPAAgJgJQgJgKAAgQIAAiiQAAgRAJgJQAJgKAPAAIB2AAIAFALQACAGAAAJQAAAOgGAGQgGAHgKAAIhLAAIAAAjIBQAAIAFALQACAJAAAGQAAAOgGAGQgFAGgLAAIhBAAIAAAoIBcAAIAEALQACAHAAAIQAAAPgGAGQgGAGgJAAg");
	this.shape_42.setTransform(52.6,197.7,0.667,0.667);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgnBmQgRgPAAgkIAAijIALgDIAQgBQAQAAAJAGQAIAGAAATIAAAZIAvAAQADAFABAGQACAFAAAIQAAANgGAHQgFAGgKAAIggAAIAAA5QAAAKAGAEQAFAFALAAIALgBQAGgBAEgCIAGAJQACAFAAAIQAAAOgKAKQgKAJgaAAQgfAAgRgPg");
	this.shape_43.setTransform(336.4,169.3,0.667,0.667);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AghBfQgOgDgMgIQgMgHgGgMQgFgMgBgRQAAgaAPgNQAOgOAggEIAugGIAAgCQAAgLgJgFQgKgFgQAAQgOAAgMADQgNADgKAFQgFgEgDgGQgDgIAAgIQgBgKAFgGQAFgGAJgEQAKgEAOgCIAbgCQAVAAAOAFQAQAFALAHQAMAJAFAOQAHAMAAATIAABVQAAAKgGAHQgGAHgGAEQgXAOgrAAQgRAAgQgEgAgBASQgJABgHAEQgGAEAAAHQgBAIAHAFQAFAEAMAAIANgBQAHgBAEgCIAAgfg");
	this.shape_44.setTransform(324.5,170.5,0.667,0.667);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAtB/QgHAAgEgEQgFgEgCgFQgCgGAAgKIAAhVQAAgQgIgGQgHgGgKAAQgHAAgHACQgFABgFADIAACGIgbAEQgJAAgFgCQgHAAgEgEQgEgEgCgFQgDgGAAgKIAAjfIAcgDQAIAAAFABQAGACAFADQADACAEAIQACAFAAAKIAAAmIAPgFQAHgCAMAAQAkAAAUATQAUASAAAlIAAB1IgMACQgHACgIAAQgJAAgFgCg");
	this.shape_45.setTransform(311.2,168.3,0.667,0.667);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgnBmQgRgPAAgkIAAijIAMgDIAPgBQAQAAAJAGQAIAGAAATIAAAZIAvAAQADAFABAGQACAFAAAIQAAAPgGAFQgFAGgKAAIggAAIAAA5QAAAKAGAEQAGAFAKAAIALgBIALgDIAFAJQACAFAAAIQAAAOgKAKQgKAJgaAAQgfAAgRgPg");
	this.shape_46.setTransform(299.7,169.3,0.667,0.667);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AggBhQgNgBgJgGQgKgFgFgHQgFgHAAgKQAAgKAEgGQAEgGAEgFQAKAHAOAEQANAGASgBQALAAAGgDQAFgEAAgFQAAgGgEgCQgFgEgIgCIgLgCQgggHgPgNQgPgOAAgaQAAgPAGgLQAGgLAKgIQAKgHAPgFQAQgEAPAAQAPAAAKACQAMACAJAEQAHAEAGAHQAFAHAAAJQAAAJgDAHQgDAGgFAEIgIgEIgNgEIgOgCIgMgCQgLAAgHADQgGADAAAGQAAAFADACQAEADAJACIALADQAjAJAOAOQAPAOAAAYQAAAdgVAQQgUARgnAAQgOAAgOgDg");
	this.shape_47.setTransform(284,170.5,0.667,0.667);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgnBmQgRgPAAgkIAAijIALgDIAQgBQAQAAAJAGQAIAGAAATIAAAZIAvAAQADAFABAGQACAFAAAIQAAANgGAHQgFAGgKAAIggAAIAAA5QAAAKAFAEQAGAFALAAIALgBQAGgBAEgCIAGAJQACAFAAAIQAAAOgKAKQgKAJgaAAQgfAAgRgPg");
	this.shape_48.setTransform(273.5,169.3,0.667,0.667);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("ABBCJQgGAAgFgFQgEgDgCgGQgDgHAAgIIAAidIAMgCIAQAAIAOAAQAHACADADQAFAEACAGQACAFAAAKIAACcIgbADQgHABgHgCgAhZCJQgGAAgEgFQgFgDgCgGQgCgHAAgIIAAifQAAgUAGgOQAGgMALgLQAKgIAQgFQAOgFARABQAbgBALAIQANAIAAASQAAAHgDAHQgEAGgDADIgNgDIgRgCQgQAAgJAGQgIAFAAAOIAAANIA6AAQADAFABAGQACAFAAAIQAAAOgGAFQgFAGgJAAIgpAAIAAB6IgLACQgIACgIgBQgIABgHgCgAA0hOQgKgKAAgPQAAgPAKgKQAIgJAQgBQAQABAIAJQAJALAAAOQAAAPgJAKQgIAKgQgBQgQABgIgKg");
	this.shape_49.setTransform(259.9,167.7,0.667,0.667);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgaBdQgSgFgOgOQgNgNgIgTQgIgTAAgZQAAgaAIgSQAHgRANgNQAOgMAPgFQAPgGARAAQATABAQAFQAQAGALAMQALALAHAOQAGAQAAARQAAANgHAGQgGAHgNACIhYAOQAEANAMAGQAMAGAQAAQANAAAOgDQAOgFAHgFQAGAEAEAHQAFAHAAAHQAAASgQAIQgLAHgPACQgQACgLAAQgUABgSgHgAgMgwQgGADgEAFQgDAEgDAHIgDAMIA9gLQAAgHgIgJQgHgHgNAAQgHAAgHADg");
	this.shape_50.setTransform(244.8,170.5,0.667,0.667);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAsBgQgGAAgEgEQgFgFgCgEQgDgHABgJIAAhaQAAgLgHgHQgGgFgLAAQgGAAgHACQgGABgGAEIAACFIgMACQgHACgJAAQgHAAgGgCQgHAAgEgEQgFgEgCgFQgCgGAAgKIAAhzQAAgKAEgHQAEgGAHgGQANgJASgGQARgFAXAAQAqAAAVATQAWATAAAiIAAB3IgMACQgHACgIAAQgIAAgHgCg");
	this.shape_51.setTransform(231.2,170.4,0.667,0.667);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgaBdQgSgFgOgOQgOgNgHgTQgIgTAAgZQAAgaAIgSQAHgRANgNQAOgMAPgFQAPgGARAAQAUABAPAFQAQAGALAMQALALAGAOQAHAQAAARQAAANgHAGQgHAHgMACIhYAOQAEANAMAGQALAGAQAAQAPAAANgDQAOgFAHgFQAGAEAFAHQADAHAAAHQAAASgPAIQgMAHgOACQgQACgLAAQgVABgRgHgAgMgwQgGADgEAFQgEAEgCAHIgCAMIA8gLQgBgHgGgJQgIgHgNAAQgHAAgHADg");
	this.shape_52.setTransform(217.6,170.5,0.667,0.667);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AguB9QgRgHgLgJQgQgLAAgTIAAjMIAMgDIAQgCQAIAAAGACQAGABAEADQAEADADAHQACAFAAALIAAAlIARgFQAIgCAJAAQASAAAPAHQAQAGAMANQALANAHASQAHASAAAXQAAAZgHATQgIATgMANQgMAMgTAGQgRAHgWgBQgYAAgQgFgAgSgPIgLAFIAABSQAEADAFACQAHACAHAAQAQAAAJgNQAJgMAAgYQAAgXgJgMQgJgMgQAAQgGABgGABg");
	this.shape_53.setTransform(204.2,168.4,0.667,0.667);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgKB/QgGAAgFgEQgEgEgCgFQgDgHAAgJIAAjfIAMgCQAIgBAIAAQAHAAAGABQAGABAFAEQAEADACAHQADAGAAAJIAADeIgMACQgIACgIAAQgGAAgHgCg");
	this.shape_54.setTransform(188.7,168.3,0.667,0.667);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AghBfQgQgDgKgIQgMgHgFgMQgHgMAAgRQABgaAPgNQAOgOAfgEIAugGIAAgCQAAgMgJgEQgKgFgQAAQgOAAgMADQgNADgKAFQgGgFgCgFQgEgIAAgIQAAgKAFgGQAFgGAIgEQAKgEAPgCIAbgCQAUAAAPAFQAQAEALAIQALAJAHAOQAFAMABATIAABVQgBAKgFAHQgFAGgHAFQgXAOgrAAQgQAAgRgEgAgBASQgKABgGAEQgHAEABAHQgBAIAGAFQAGAEAMAAIAOgBQAGgBAEgCIAAgfg");
	this.shape_55.setTransform(178.5,170.5,0.667,0.667);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgRBcQgSgHgNgNQgOgNgGgSQgIgSABgWQAAgZAIgSQAHgUAOgMQALgMATgGQARgGATAAQAaAAAOAKQAOAJAAAQQAAAIgDAGQgEAHgEAEQgHgEgHgCQgJgDgKAAQgJAAgIADQgJAEgFAFQgFAGgEAJQgDAJAAALQAAAYAMAMQANAMARAAQALAAAIgDIAOgGQAHAFAEAHQAEAGAAAJQAAAQgPAJQgOAIgYAAQgWAAgTgHg");
	this.shape_56.setTransform(166.4,170.5,0.667,0.667);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgKCJQgGAAgEgFQgFgDgCgGQgDgHABgIIAAidIALgCIAQAAIANAAQAHACAEADQAEAEACAGQADAFAAAKIAACcIgMACQgIACgHgBQgHABgHgCgAgXhOQgKgKABgPQgBgPAKgKQAJgJAOgBQAQABAIAJQAKALgBAOQABAPgKAKQgIAKgQgBQgOABgJgKg");
	this.shape_57.setTransform(157.2,167.7,0.667,0.667);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgnBmQgRgPAAgkIAAijIALgDIAQgBQAQAAAJAGQAIAGAAATIAAAZIAvAAQADAFABAGQACAFAAAIQAAANgGAHQgFAGgKAAIggAAIAAA5QAAAKAFAEQAGAFALAAIALgBQAGgBAEgCIAGAJQACAFAAAIQAAAOgKAKQgKAJgaAAQgfAAgRgPg");
	this.shape_58.setTransform(149.3,169.3,0.667,0.667);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgQBcQgTgHgNgNQgNgNgIgSQgGgSgBgWQAAgYAIgTQAIgUAOgMQALgMATgGQARgGATAAQAaAAAOAKQAOAJAAAQQAAAIgDAGQgEAGgEAFQgHgEgIgCQgIgDgLAAQgIAAgJADQgHADgFAGQgGAGgEAJQgDAJgBALQAAAYANAMQAMAMASAAQALAAAIgDIAOgGQAHAFAEAHQAEAGgBAJQAAAQgNAJQgPAIgZAAQgVAAgSgHg");
	this.shape_59.setTransform(138.3,170.5,0.667,0.667);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AghBfQgOgDgNgIQgKgHgHgMQgFgMgBgRQAAgaAPgNQAOgOAggEIAugGIAAgCQAAgMgJgEQgKgFgQAAQgOAAgMADQgNADgKAFQgEgEgFgGQgCgIAAgIQgBgKAFgGQAFgGAJgEQAJgEAPgCIAbgCQAUAAAOAFQASAEAKAIQAMAJAFAOQAHAMgBATIAABVQABAKgGAHQgGAHgGAEQgXAOgrAAQgRAAgQgEgAAAASQgKABgHAEQgGAEgBAHQABAIAFAFQAGAEAMAAIANgBQAHgBAEgCIAAgfg");
	this.shape_60.setTransform(125.6,170.5,0.667,0.667);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgpBgQgGAAgEgEQgFgEgCgFQgCgGAAgKIAAhzQAAgIADgHQADgGAFgFQAHgGAIgDIASgHIATgFQAJgCAMAAQARAAAKAIQAKAGAAAQQAAAGgBAFIgEAJIgPACIgeAFIgLAEIAACCIgLACQgHACgJAAQgIAAgGgCg");
	this.shape_61.setTransform(114.9,170.4,0.667,0.667);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AhGCBQgGAAgEgEQgFgEgCgGQgCgGAAgJIAAi4QgBgKAFgHQADgFAIgHQALgIARgEQAQgFAVAAQAUAAATAGQASAFAOANQAOANAHASQAIATAAAaQAAAXgHATQgHATgLAMQgNANgQAGQgRAGgUAAQgQAAgMgFIAABAIgMACIgQACQgIAAgGgCgAgThNIgKAEIAABUIAKAEQAEABAHAAQAjAAABguQgBgZgIgMQgJgMgRAAQgHAAgFACg");
	this.shape_62.setTransform(102.8,172.6,0.667,0.667);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgNgNgIgTQgIgUAAgYQAAgZAIgTQAIgTAMgLQAOgMAPgFQAPgGARAAQAUABAPAFQAQAGALAMQALAJAHAQQAGAPAAASQAAAOgHAFQgHAHgMACIhYAOQAEANAMAGQALAGAQAAQAOAAAOgDQAPgGAHgEQAGAFADAGQAEAGAAAIQAAASgPAIQgLAGgPADQgQACgLAAQgVABgRgHgAgMgwQgFADgFAFQgEAFgCAGQgCAGAAAGIA8gLQAAgHgIgJQgGgHgOAAQgIAAgGADg");
	this.shape_63.setTransform(84.1,170.5,0.667,0.667);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAtB/QgHAAgEgEQgEgEgCgFQgDgHAAgJIAAhVQAAgQgHgGQgIgGgKAAQgIAAgFACQgHABgEADIAACGIgLACQgIACgIAAQgIAAgGgCQgGAAgFgEQgFgFgBgEQgDgHAAgJIAAjfIAMgCQAIgBAHAAQAIAAAHABQAGABAEAEQAEADADAHQADAGgBAJIAAAmIAPgFQAHgCANAAQAkAAATATQAUATAAAkIAAB1IgLACQgIACgIAAQgIAAgGgCg");
	this.shape_64.setTransform(70.5,168.3,0.667,0.667);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgnBmQgRgPAAgkIAAijIAMgDIAPgBQAQAAAJAGQAHAGABATIAAAZIAvAAIAEALQACAHAAAGQAAANgGAHQgGAGgIAAIghAAIAAA5QgBAKAHAEQAFAFAMAAIALgBIAKgDIAFAJQACAHABAGQAAAOgLAKQgKAJgaAAQgfAAgRgPg");
	this.shape_65.setTransform(59,169.3,0.667,0.667);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgtCDQgHgBgEgEQgEgDgDgGQgCgGAAgJIAAifQAAgUAGgOQAHgNALgKQAJgIAQgFQAPgFAPABQAbgBAMAIQANAIAAASQAAAHgDAHQgDAGgEADIgOgDIgRgCQgRAAgHAGQgIAFAAAOIAAANIA6AAIAEALQACAFAAAIQAAANgFAGQgGAGgJAAIgpAAIAAB6IgLACQgIACgIgBQgIABgGgCg");
	this.shape_66.setTransform(44.4,168.1,0.667,0.667);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgmBdQgQgHgOgOQgMgMgHgTQgHgSAAgXQAAgVAHgTQAHgTAMgNQANgNARgHQARgHAVAAQAXABAQAGQAQAHANANQANANAGATQAIATgBAVQABAXgIATQgGATgNANQgMAMgRAHQgTAHgUgBQgTAAgTgGgAgXgjQgHANgBAWQABAYAHALQAKANAOAAQAPAAAHgNQAJgMgBgXQABgWgJgNQgHgNgQAAQgOAAgJANg");
	this.shape_67.setTransform(31.7,170.5,0.667,0.667);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("Ag3B6QgTgJAAgWQAAgIADgHQAEgIAEgCQAMAHAMADQANAEAOAAQASAAAMgHQALgGAAgQIAAgGQgPAHgUAAQgPAAgPgGQgPgEgLgMQgLgLgHgRQgGgQAAgYQAAgXAHgSQAHgRAMgMQANgLARgGQASgFASAAQAUAAARAFQASAHALAIQAHAGAEAGQAEAHAAAKIAACFQAAAVgHAPQgGANgOALQgNALgQAEQgRAEgSAAQghAAgSgJgAgRhEQgIALAAATQAAAWAIAKQAJAJANAAQAPAAAIgHIAAhGIgHgEQgFgBgHAAQgRAAgJALg");
	this.shape_68.setTransform(333.9,143.8,0.667,0.667);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAsBhQgGgBgEgEQgEgDgDgGQgCgFAAgLIAAhaQAAgMgHgFQgFgGgMAAIgMACQgIACgEAEIAACEIgMADIgQABIgOgBQgHgBgEgEQgEgDgDgGQgCgHAAgJIAAhzQAAgJAEgIQAFgHAGgFQAMgJAUgGQASgFAVAAQApAAAWATQAWATAAAiIAAB3IgLADIgQABg");
	this.shape_69.setTransform(320.4,141.6,0.667,0.667);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgKCJQgHgBgEgEQgDgCgDgHQgCgGgBgJIAAicIAMgCIAQgBIANAAQAHACAEADQAFAEACAGQACAFAAAKIAACcIgMACQgIACgHgBgAgXhOQgJgKAAgPQAAgOAJgLQAJgJAOgBQAQABAIAJQAKALgBAOQABAPgKAKQgIAKgQAAQgOAAgJgKg");
	this.shape_70.setTransform(310,138.9,0.667,0.667);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AggB7QgTgHgMgNQgNgMgHgTQgGgSAAgXQAAgZAHgTQAIgTAMgMQANgMARgGQARgGATAAQAHAAAHACQAFAAAGADIAAg/IALgCIARgBIAOABQAFAAAGAEQAFAFABAFQACAGAAAJIAAC2QAAASgQALQgLAIgQAFQgRAFgVAAQgXAAgSgHgAgRgFQgKALAAAZQAAAYAJAMQAKAMARAAQAIAAAEgCQAGgCACgDIAAhUQgHgFgKAAQgSAAgLAMg");
	this.shape_71.setTransform(299.3,139.6,0.667,0.667);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAsBhQgGgBgEgEQgEgDgDgGQgCgHAAgJIAAhaQAAgMgGgFQgHgGgLAAIgNACIgMAGIAACEIgLADIgQABIgOgBQgHgBgEgEQgFgDgCgGQgCgHAAgJIAAhzQAAgJAEgIQADgEAIgIQANgJASgGQAUgFAUAAQAoAAAXATQAWATAAAiIAAB3IgLADIgQABg");
	this.shape_72.setTransform(285.5,141.6,0.667,0.667);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AghBfQgQgDgLgIQgLgIgGgLQgGgNAAgPQAAgbAPgNQAQgPAegDIAugFIAAgDQAAgLgJgFQgJgFgRABQgNAAgNACQgOADgKAFQgEgDgDgHQgEgHAAgJQAAgKAFgGQAFgGAJgEQAKgEAOgBQANgDAOAAQARAAASAFQAPAEAMAIQALAJAGAOQAHAOAAARIAABVQAAAKgGAHQgFAGgHAFQgXAOgrAAQgUAAgNgEgAAAASQgLACgGADQgGAEAAAHQAAAJAFAEQAGAFAMAAIAOgCQAIgCACgBIAAgfg");
	this.shape_73.setTransform(271.7,141.7,0.667,0.667);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgnBmQgRgQAAgjIAAijIAMgCQAHgCAIAAQAQAAAJAGQAHAGAAATIAAAZIAvAAIAFALQACAHAAAGQAAANgFAHQgGAGgJAAIgiAAIAAA5QAAAKAHAEQAGAEALABIAKgBIAKgDIAGAJQACAHABAGQAAAPgLAJQgJAJgbAAQgfAAgRgPg");
	this.shape_74.setTransform(261,140.5,0.667,0.667);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AggBhQgOgCgIgFQgKgEgFgIQgFgIAAgJQAAgKAEgGQADgGAGgEQAHAFAQAGQAOAEASAAQAKAAAGgDQAFgDAAgGQABgFgFgDQgEgEgKgCIgKgCQgfgGgQgOQgPgNAAgbQAAgOAGgMQAFgLALgIQAMgIANgDQAOgFARAAQAKAAAPACQAMACAIAEQAKAFAEAGQAFAHAAAJQAAAJgDAHQgDAGgFAEQgDgCgFgBIgbgHIgMgBQgLAAgHACQgGADAAAGQAAAEADADQADADAKACIALADQAiAIAQAPQAOAOAAAYQAAAdgUARQgWAQgmAAQgOAAgOgDg");
	this.shape_75.setTransform(250.1,141.7,0.667,0.667);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgpBhQgHgCgDgDQgFgDgCgGQgCgGAAgKIAAhzQAAgJADgGQACgFAGgGQAGgFAJgEIASgHQAMgEAHgBIAVgCQASAAAJAHQAKAHAAARQAAAFgBAFIgEAKIgPAAIgeAGIgLAEIAACCIgLADIgQABg");
	this.shape_76.setTransform(239.6,141.6,0.667,0.667);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgaBdQgSgFgOgOQgOgNgHgTQgIgSAAgaQAAgaAIgSQAHgRANgMQAMgMARgGQASgGAOAAQATABAQAFQAPAGAMAMQAMAKAFAQQAHAQAAAQQAAANgHAGQgGAHgNACIhYAOQAEANAMAGQAMAHAPgBQAQABAMgEQANgFAJgFQAFAEAFAHQADAHAAAHQAAATgPAHQgKAGgQADQgNACgOAAQgUABgSgHgAgMgwQgHADgDAFQgEAGgCAFIgCAMIA8gLQgBgHgGgIQgJgIgMAAQgIAAgGADg");
	this.shape_77.setTransform(227.7,141.7,0.667,0.667);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AggB7QgSgGgNgOQgNgNgGgSQgHgTAAgWQAAgaAHgSQAHgRANgOQANgMARgGQARgGATAAQAHAAAHACIALADIAAg/IAMgCIAQgBIAOABQAFAAAGAEQAEAFACAFQACAFAAAKIAAC2QAAASgQALQgLAIgQAFQgRAFgVAAQgXAAgSgHgAgRgFQgKALAAAZQAAAXAKANQAKAMARAAQAHAAAEgCQAGgCACgDIAAhUQgGgFgLAAQgSAAgLAMg");
	this.shape_78.setTransform(213.7,139.6,0.667,0.667);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAsBhQgGgBgEgEQgFgDgCgGQgDgHABgJIAAhaQAAgMgHgFQgGgGgLAAIgNACIgMAGIAACEIgMADIgQABIgNgBQgIgBgDgEQgFgDgCgGQgCgGAAgKIAAhzQAAgLAEgGQAEgFAHgHQANgJASgGQAUgFAUAAQApAAAWATQAWATAAAiIAAB3IgMADIgPABg");
	this.shape_79.setTransform(200,141.6,0.667,0.667);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AggBcQgQgEgMgKQgMgJgGgQQgHgOAAgXIAAhsIALgDIAQgBIAOABQAHACAEACQAEAEACAGQADAHAAAJIAABRQAAAQAHAHQAIAHAMAAQAJAAAEgCQAHgCABgBIAAiFIAMgDIAQgBIAPABQAFACAFACQAFAEACAGQACAHAAAJIAAB0QAAAUgPAJQgNAIgRAEQgSAFgUAAQgTAAgQgFg");
	this.shape_80.setTransform(186,141.8,0.667,0.667);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgpBhQgHgCgDgDQgEgDgDgGQgCgGAAgKIAAhzQAAgJADgGQACgFAGgGQAGgFAJgEIASgHQAMgEAHgBIAVgCQASAAAJAHQAKAHAAARQAAAFgBAFIgEAKIgPAAIgeAGIgLAEIAACCIgLADIgQABg");
	this.shape_81.setTransform(169.7,141.6,0.667,0.667);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgaBdQgSgFgOgOQgNgNgIgTQgIgSAAgaQAAgaAIgSQAHgRANgMQAMgMARgGQARgGAPAAQATABAQAFQAPAGAMAMQALAKAHAQQAGAQAAAQQAAANgHAGQgGAHgNACIhYAOQAEANAMAGQAMAHAQgBQAPABAMgEQAOgFAHgFQAGAEAEAHQAFAHAAAHQAAASgQAIQgKAGgQADQgMACgPAAQgUABgSgHgAgMgwQgHADgDAFQgEAGgCAFIgDAMIA9gLQAAgHgIgIQgGgIgOAAQgIAAgGADg");
	this.shape_82.setTransform(157.8,141.7,0.667,0.667);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AhGCCQgHgCgEgDQgEgEgCgFQgCgHgBgJIAAi4QABgLAEgGQAEgGAHgGQAMgIAQgEQARgFAUAAQAVAAASAGQASAGAOAMQAMAMAJATQAHATAAAaQAAAXgGATQgHATgMAMQgNANgPAGQgRAGgUAAQgQAAgMgFIAABAQgFACgGAAIgRACgAgThNQgFABgEADIAABUIAJAEQAFABAFAAQAlAAgBguQABgZgKgMQgJgMgQAAQgFAAgHACg");
	this.shape_83.setTransform(144.4,143.8,0.667,0.667);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgNgNgIgTQgIgSAAgaQAAgZAIgTQAIgTAMgKQAMgMARgGQARgGAPAAQATABAQAFQAPAGAMAMQALAKAHAQQAGAPAAARQAAAOgHAFQgGAHgNACIhYAOQAEANAMAGQALAHAQgBQAQABAMgEQAOgFAIgFQAGAFADAGQAEAHAAAHQAAATgPAHQgKAGgQADQgMACgPAAQgVABgRgHgAgMgwQgGADgEAFQgEAGgCAFQgCAGAAAGIA8gLQAAgHgIgIQgHgIgNAAQgIAAgGADg");
	this.shape_84.setTransform(130.6,141.7,0.667,0.667);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgOgOgHgSQgIgSAAgaQAAgZAIgTQAHgSANgLQAMgLARgHQARgGAPAAQATABAQAFQAPAGAMAMQALAKAGAQQAHAOAAASQAAANgHAGQgGAHgNACIhYAOQAEAOAMAFQALAHAQgBQAQABAMgEQAOgFAHgFQAHAFADAGQAEAHAAAHQAAATgPAHQgKAGgQADQgMACgPAAQgVABgRgHgAgMgwQgGADgEAFQgEAGgCAFIgCAMIA8gLQgBgIgHgHQgHgIgNAAQgIAAgGADg");
	this.shape_85.setTransform(117.4,141.7,0.667,0.667);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AggB7QgTgHgMgNQgNgMgGgTQgHgSAAgXQAAgbAHgRQAIgTAMgMQANgMARgGQARgGATAAQAHAAAHACIALADIAAg/IALgCIAQgBIAPABQAFAAAGAEQAEAEACAGQACAFAAAKIAAC2QAAASgQALQgLAIgQAFQgRAFgVAAQgXAAgSgHgAgRgFQgKALAAAZQAAAXAKANQAKAMARAAQAHAAAEgCQAGgDACgCIAAhUQgHgFgKAAQgTAAgKAMg");
	this.shape_86.setTransform(103.5,139.6,0.667,0.667);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AghBfQgRgDgKgIQgKgHgHgMQgFgNgBgPQAAgbAPgNQAPgPAfgDIAugFIAAgDQAAgLgJgFQgJgFgRABQgNAAgNACQgMADgLAFQgFgDgEgHQgDgIAAgIQAAgKAEgGQAFgEAKgGQAKgEAOgBQANgDAOAAQARAAARAFQARAEALAIQALAJAGAOQAHANgBASIAABVQAAAKgFAHQgFAFgHAGQgYAOgqAAQgUAAgNgEgAAAASQgLACgGADQgGAEgBAHQABAJAFAEQAGAFAMAAIANgCQAJgBACgCIAAgfg");
	this.shape_87.setTransform(85.1,141.7,0.667,0.667);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAsCAQgGgCgEgDQgEgDgDgGQgCgHAAgJIAAhWQAAgOgIgHQgHgGgKAAQgFAAgIACIgLAEIAACGIgLADIgQABIgOgBQgHgCgEgDQgFgEgCgFQgCgHAAgJIAAjeIAMgDIAPgBIAPABQAEABAGAEQAFADACAGQACAHAAAJIAAAmQAFgDAJgCQAKgCAKAAQAkAAAUATQAUATAAAlIAAB0IgLADIgQABg");
	this.shape_88.setTransform(67.1,139.5,0.667,0.667);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgmBmQgSgQAAgjIAAijIALgCQAIgCAIAAQAQAAAJAGQAIAGAAATIAAAZIAvAAIAEALQACAFAAAIQAAANgGAHQgFAGgKAAIggAAIAAA5QAAAKAFAEQAHAEAKABIAMgBIAKgDIAFAJQADAHAAAGQAAAPgLAJQgKAJgaAAQgfAAgQgPg");
	this.shape_89.setTransform(55.5,140.5,0.667,0.667);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgKCJQgHgBgDgEQgEgCgEgHQgBgFAAgKIAAicIALgCQAHgCAJABIANAAQAGACAFADQAEADACAHQADAFAAAKIAACcIgMACQgIACgIgBgAgXhOQgJgKAAgPQAAgOAJgLQAJgJAOgBQAOABAKAJQAKALgBAOQABAPgKAKQgKAKgOAAQgOAAgJgKg");
	this.shape_90.setTransform(47.1,138.9,0.667,0.667);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAbBSIgThEIgGgZIgYBiQgGAFgIADQgIADgNAAQgOAAgLgFQgLgEgEgIQgDgIgGgVQgGgZgEgTIgRhbQAGgGAIgEQAIgEALAAQAMAAAIAGQAIAGACAPIANBhIACAKIABAAIAahvIAOgHQAHgCAJAAQANAAAJAEQAJAFACAIIAZBnIACAAIAPh+QAHgEAGgCQAHgCAIAAQAMAAAJAGQAIAGAAAOIgcCLIgGATQgFAFgKADQgLADgMAAQgeAAgFgQg");
	this.shape_91.setTransform(34.1,141.7,0.667,0.667);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AggBcQgRgEgLgKQgNgKgFgPQgHgOAAgWIAAhuIALgCIAQgBQAIAAAHABQAFABAFAEQAEACADAHQACAFAAALIAABSQAAAQAIAGQAGAHANAAQAIAAAGgCIAHgDIAAiGIAMgCQAHgBAJAAQAIAAAGABQAGABAFAEQAEACACAHQADAHAAAJIAAB0QAAATgPAKQgOAIgQAFQgSAEgUAAQgRAAgSgFg");
	this.shape_92.setTransform(333.5,113.1,0.667,0.667);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgmBdQgSgIgLgMQgNgNgHgTQgGgRAAgYQAAgXAGgRQAHgTANgNQAMgNARgHQASgHAUAAQAVAAARAIQASAHAMANQANANAGASQAHATAAAVQAAAXgHATQgGATgNANQgNANgRAGQgSAHgUAAQgUAAgSgHgAgWgjQgJAMAAAXQAAAXAJANQAIAMAOAAQAQAAAHgMQAJgNAAgXQAAgWgJgNQgIgMgPAAQgOAAgIAMg");
	this.shape_93.setTransform(319.5,112.9,0.667,0.667);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("Ag4B4QgJgKgCgPIAXgVQANgNAIgMQgGgBgHgIQgHgGgIgUIgJgVIgehsQAEgFAJgFQAJgEAKAAQAMAAAJAGQAIAGAEAPIAbBpIACAAQAFgOADgOIAWhgQANgIAPAAQAMAAAJAGQAIAFAAAPQAAAJgCAPIgHAdIgKAgIgYA9IgNAZQgKAVgIAKQgHAKgKAJQgHAGgIADQgIADgIAAQgPAAgKgKg");
	this.shape_94.setTransform(305.8,115,0.667,0.667);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AggB7QgTgHgMgNQgNgNgHgSQgGgSAAgXQAAgZAHgTQAIgTAMgLQAMgNASgGQARgGATAAQAHAAAHABIALAEIAAg/IALgCIARgBIAOAAQAHACADAEQAFADACAGQACAGAAAJIAAC2QAAASgQALQgMAIgPAEQgQAHgWgBQgVABgUgIgAgRgEQgKALAAAYQAAAYAJAMQAKAMARgBQAIAAAEgCQAGgBACgEIAAhTQgHgFgKABQgSAAgLAMg");
	this.shape_95.setTransform(287.1,110.8,0.667,0.667);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgaBdQgTgHgNgMQgMgMgJgUQgIgTAAgZQAAgZAIgTQAIgTAMgLQAMgLARgGQARgGAPAAQAUAAAPAHQAQAGALALQALAKAHAPQAGAPAAASQAAANgHAGQgHAHgMACIhYAOQAEANAMAGQAMAHAPAAQAOAAAOgEQAPgFAHgFQAGAFADAGQAEAIAAAHQAAARgPAIQgMAHgOACQgQADgLAAQgTAAgTgHgAgMgwQgGADgEAFQgEAFgCAGIgCAMIA8gLQgBgIgHgHQgGgIgOAAQgIAAgGADg");
	this.shape_96.setTransform(273.8,112.9,0.667,0.667);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AggB7QgTgHgMgNQgNgNgHgSQgGgSAAgXQAAgZAHgTQAIgTAMgLQAMgNASgGQARgGATAAQAHAAAHABIALAEIAAg/IALgCIARgBIAOAAQAHACADAEQAEACADAHQACAGAAAJIAAC2QAAASgQALQgMAIgPAEQgQAHgWgBQgWABgTgIgAgRgEQgKALAAAYQAAAYAJAMQAKAMARgBQAIAAAEgCQAGgBACgEIAAhTQgHgFgKABQgTAAgKAMg");
	this.shape_97.setTransform(259.9,110.8,0.667,0.667);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgKCJQgEAAgHgEQgDgDgEgHQgCgFAAgKIAAicIAMgCIAQgBQAHgBAGACQAGABAEAEQAEACAEAHQACAFgBAKIAACcIgLACIgQABIgNgBgAgXhOQgKgJABgQQgBgOAKgKQAKgLANAAQAPAAAJALQAJAKAAAOQAAAQgJAJQgJAKgPAAQgOAAgJgKg");
	this.shape_98.setTransform(249.8,110.1,0.667,0.667);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgWBeQgKgEgEgIIgHgSIguiTQAEgFAJgFQAKgEAJAAQAMAAAJAGQAIAGAEAPIAaBvIACAAIAOg+QAHgdAHgnQAFgDAJgDQAGgCAIAAQANAAAJAGQAIAGAAAOIgCASIgHAbIgKAeIggBUQgGAFgJACQgIADgOAAQgOAAgKgEg");
	this.shape_99.setTransform(239.8,112.9,0.667,0.667);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgmBdQgSgIgLgMQgNgNgHgTQgGgRAAgYQAAgXAGgRQAHgTANgNQAMgNARgHQASgHAUAAQAVAAARAIQASAHAMANQANANAGASQAHATAAAVQAAAXgHATQgGATgNANQgNANgRAGQgSAHgUAAQgUAAgSgHgAgXgjQgIAMAAAXQAAAYAJAMQAIAMAOAAQAQAAAHgMQAIgNAAgXQAAgXgIgMQgIgMgPAAQgPAAgIAMg");
	this.shape_100.setTransform(226.3,112.9,0.667,0.667);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgpBhQgGgBgEgEQgFgEgCgFQgCgGAAgKIAAhyQAAgJADgHQADgGAFgFIAPgJIASgHQAJgDAKgCQAJgCAMAAQARAAAKAHQAKAIAAAQQAAAFgBAFIgEAKIgPABIgeAFIgLAEIAACCQgEACgHABIgQABIgOgBg");
	this.shape_101.setTransform(214.7,112.8,0.667,0.667);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AhGCCQgFgBgGgEQgEgDgCgGQgCgGAAgKIAAi4QAAgLAEgGQADgGAIgGQALgHARgFQAPgFAWAAQAVAAASAGQATAGANANQANAMAIATQAHATAAAZQAAAZgGARQgHATgMAMQgLANgRAGQgQAGgVAAQgNAAgPgFIAABAIgMADIgQABIgOgBgAgThNIgKAEIAABUIAKAEQAEACAHAAQAkAAAAgvQAAgZgKgLQgJgMgQAAQgHAAgFABg");
	this.shape_102.setTransform(202.6,115,0.667,0.667);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AggBiQgNgDgJgFQgKgEgFgIQgFgHAAgKQAAgJAEgHIAIgKQANAHALAEQANAFASAAQAKAAAHgEQAGgDAAgGQAAgGgFgDQgEgDgJgCIgLgCQgfgGgQgOQgPgNAAgbQAAgPAGgLQAGgLAKgIQAKgHAPgFQANgEASAAQAPAAAKACQALACAKAEQAIAFAFAGQAFAHAAAJQAAAJgDAHQgDAGgEAEIgJgEIgbgHIgMgBQgLAAgHADQgGADAAAGQAAAEADADQAFADAIACIALADQAkAJANAOQAPAOAAAYQAAAdgVAQQgUARgnAAQgQAAgMgCg");
	this.shape_103.setTransform(184.7,112.9,0.667,0.667);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AghBgQgPgEgMgIQgKgIgHgMQgFgLAAgQQAAgbAOgNQAPgOAfgEIAvgFIAAgDQAAgLgKgFQgJgFgQAAQgOAAgNADQgLADgNAFQgEgDgEgHQgCgIAAgHQgBgKAFgGQAFgGAJgFQAKgEAPgCIAbgCQASAAAQAFQAPADAMAKQAMAIAFANQAHAOgBASIAABVQAAAKgEAHQgGAGgHAFQgXAPgrAAQgRAAgQgEgAAAASQgKABgHAEQgGAEgBAHQAAAIAHAFQAEAFANAAQAHAAAGgCQAIAAAEgDIAAgfg");
	this.shape_104.setTransform(171.9,112.9,0.667,0.667);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAsCAQgFgBgFgEQgFgEgCgFQgCgGAAgKIAAhVQAAgPgIgHQgHgGgKAAQgIAAgFACQgGACgFADIAACFQgFACgGABIgQABIgOgBQgFgBgGgEQgEgDgCgGQgDgFAAgLIAAjeIAcgEIANABQAHACAEADQAEADADAGQACAGAAAKIAAAmIAOgFQAKgCAKAAQAkAAAUATQAUATAAAlIAAB0QgFACgGABIgQABIgPgBg");
	this.shape_105.setTransform(158.7,110.7,0.667,0.667);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgaBdQgTgHgNgMQgNgMgIgUQgIgTAAgZQAAgaAIgSQAIgSAMgMQAMgLARgGQARgGAPAAQAUAAAPAHQAQAGALALQALAJAHAQQAGAPAAASQAAANgHAGQgHAHgMACIhYAOQAEANAMAGQAMAHAPAAQAPAAANgEQAOgFAIgFQAFAEAEAHQAEAGAAAJQAAARgPAIQgLAHgPACQgQADgLAAQgSAAgUgHgAgMgwQgGAEgEAEQgEAFgCAGIgCAMIA8gLQAAgHgIgIQgGgIgOAAQgHAAgHADg");
	this.shape_106.setTransform(140.2,112.9,0.667,0.667);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgRBdQgSgJgNgMQgNgMgHgTQgIgSABgWQAAgYAHgTQAJgUAMgMQANgMASgGQAQgHAUAAQAZABAPAJQAOALAAAPQAAAJgEAFQgDAGgEAFIgOgGQgIgCgLgBQgJAAgIADQgIAEgGAFQgFAGgEAJQgEAIABAMQAAAYAMAMQAMAMATAAQAKAAAIgDIAOgFQAHAEAEAHQADAGABAKQgBAQgOAHQgNAJgZAAQgWAAgTgGg");
	this.shape_107.setTransform(127.8,112.9,0.667,0.667);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAtBhQgFgBgGgEQgEgDgCgGQgDgGAAgKIAAhaQAAgMgGgFQgGgGgMABQgHAAgGACQgHABgFAEIAACEQgEACgHABIgQABIgOgBQgFgBgGgEQgFgEgBgFQgDgGAAgKIAAhyQAAgKAFgHQADgGAHgGQAOgKARgFQATgGAVAAQAoAAAXATQAWAUAAAhIAAB3QgEACgHABIgQABg");
	this.shape_108.setTransform(114.9,112.8,0.667,0.667);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgaBdQgTgHgNgMQgMgMgJgUQgIgTAAgZQAAgZAIgTQAIgTAMgLQAMgLARgGQARgGAPAAQAUAAAPAHQAQAGALALQALAKAHAPQAGAPAAASQAAANgHAGQgIAHgLACIhYAOQAEANAMAGQAMAHAPAAQAOAAAOgEQAPgFAHgFQAGAFADAGQAEAIAAAHQAAARgPAIQgLAHgPACQgQADgLAAQgTAAgTgHgAgMgwQgGAEgEAEQgEAFgCAGQgCAGAAAGIA8gLQAAgHgIgIQgGgIgOAAQgIAAgGADg");
	this.shape_109.setTransform(101.3,112.9,0.667,0.667);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgKCJQgEAAgHgEQgEgDgCgHQgCgEgBgLIAAicIAMgCIAQgBQAHgBAGACQAHABADAEQAEACAEAHQABAFABAKIAACcIgMACIgQABIgNgBgAgXhOQgKgJABgQQgBgOAKgKQAKgLANAAQAPAAAJALQAJAKAAAOQAAAQgJAJQgJAKgPAAQgOAAgJgKg");
	this.shape_110.setTransform(91.4,110.1,0.667,0.667);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgpBhQgFgBgGgEQgEgDgCgGQgCgHgBgJIAAhyQAAgJADgHQAEgHAFgEQAGgFAIgEIATgHIATgFQAJgCAMAAQARAAAKAHQALAIAAAQQgBAFgBAFIgEAKIgPABIgPACIgPADIgLAEIAACCQgDACgHABIgQABIgPgBg");
	this.shape_111.setTransform(83.5,112.8,0.667,0.667);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgaBdQgTgHgNgMQgOgNgHgTQgIgTAAgZQAAgZAIgTQAHgRANgNQAMgLARgGQARgGAPAAQAUAAAPAHQAQAGALALQALALAGAOQAHAPAAASQAAAMgHAHQgHAHgMACIhYAOQAFAOALAFQAMAHAPAAQAOAAAOgEQAPgFAHgFQAGAFADAGQAEAIAAAHQAAARgPAIQgMAHgOACQgQADgLAAQgTAAgTgHgAgMgwQgGADgEAFQgEAFgCAGIgCAMIA8gLQgBgIgHgHQgGgIgOAAQgIAAgGADg");
	this.shape_112.setTransform(71.5,112.9,0.667,0.667);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AhGCCQgFgBgGgEQgEgDgCgGQgCgGAAgKIAAi4QAAgLAEgGQADgGAIgGQAKgHASgFQAPgFAWAAQAVAAASAGQATAGANANQANAMAIATQAHATAAAZQAAAZgGARQgHATgMAMQgKAMgSAHQgQAGgVAAQgNAAgPgFIAABAIgMADIgQABIgOgBgAgThNIgKAEIAABUIAKAEQAEACAHAAQAkAAAAgvQAAgZgKgLQgJgMgQAAQgHAAgFABg");
	this.shape_113.setTransform(58.2,115,0.667,0.667);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAfBZQgJgLgGgJIgTgeIgkA5IgEAAIgDAAQgTAAgKgIQgJgIAAgMQAAgIAEgIIArg2Igwg9QACgOAJgKQAJgJAMAAQALAAAIAGQADAEALANIAWAhIAmg4QAUAAAMAHQALAIAAANQABAFgCAEIgDAIIgHAKIgiApIAwBCQgCAOgJAJQgJAIgMAAQgPgBgIgHg");
	this.shape_114.setTransform(44.7,112.9,0.667,0.667);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgaBdQgTgHgNgMQgOgNgHgTQgIgTAAgZQAAgZAIgTQAHgRANgNQAMgLARgGQARgGAPAAQAUAAAPAHQAQAGALALQALALAGAOQAHAPAAASQAAAMgHAHQgHAHgMACIhYAOQAFAOALAFQAMAHAPAAQAOAAAOgEQANgFAJgFQAGAFADAGQAEAIAAAHQAAARgPAIQgMAHgOACQgQADgLAAQgTAAgTgHgAgMgwQgGADgEAFQgEAFgCAGIgCAMIA8gLQgBgIgHgHQgGgIgOAAQgIAAgGADg");
	this.shape_115.setTransform(31.8,112.9,0.667,0.667);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AghBiQgMgDgJgFQgKgFgFgGQgFgIAAgKQAAgKADgGQAEgGAFgEQAKAGAOAEQANAFASABQALAAAFgEQAHgDAAgGQgBgGgEgDQgGgDgHgBIgLgDQgggHgPgOQgPgNAAgaQAAgNAFgMQAGgLALgJQALgHAOgFQAPgEAQAAQAPAAAKACQAMACAJAFQAJAFAEAGQAFAGAAAKQAAAIgDAGQgDAIgFADIgJgEIgZgHIgOgBQgMAAgFADQgHAEAAAFQAAAEAFADQACACAKADIALADQAiAIAPAPQAPAOAAAXQAAAegVAQQgUARgnAAQgNAAgQgCg");
	this.shape_116.setTransform(283.4,84.1,0.667,0.667);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgKCJQgGgBgFgEQgEgDgCgGQgDgGAAgKIAAibIAMgCIAQgCIANACQAGABAFADQAEAFACAEQADAHAAAJIAACcIgMACQgIACgIAAQgHAAgGgCgAgXhOQgJgLAAgOQAAgOAJgKQAJgLAOABQAPgBAJALQAJAKAAAOQAAAOgJALQgJAKgPAAQgOAAgJgKg");
	this.shape_117.setTransform(274,81.3,0.667,0.667);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AAsB/QgGAAgEgEQgEgDgDgHQgDgGABgJIAAhWQAAgPgIgFQgHgHgKAAQgIAAgFACIgLAFIAACGIgMABQgHACgJAAQgHAAgGgCQgHAAgEgEQgEgDgDgHQgCgFAAgKIAAjeIAMgCQAHgCAIAAQAIAAAGACQAHAAAEAEQAEAEACAFQADAHAAAJIAAAmIAOgEQAIgDAMAAQAlAAATATQAUATAAAlIAAB1IgMABQgHACgIAAQgIAAgHgCg");
	this.shape_118.setTransform(263.6,81.9,0.667,0.667);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgnBlQgRgPAAgiIAAilIALgCIAQgBQAQAAAJAGQAIAGAAATIAAAZIAvAAIAEAKQACAGAAAJQAAAMgGAHQgFAGgKAAIggAAIAAA5QAAAKAFAEQAGAFALgBIALgBQAGAAAEgCIAGAKQACAEAAAIQAAAOgKAKQgKAJgaAAQgfAAgRgQg");
	this.shape_119.setTransform(252,82.9,0.667,0.667);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgnBlQgRgPAAgiIAAilIALgCIAQgBQAQAAAJAGQAIAGAAATIAAAZIAvAAIAEAKQACAGAAAJQAAAMgGAHQgFAGgKAAIggAAIAAA5QAAAKAFAEQAGAFALgBIALgBQAGAAAEgCIAGAKQACAEAAAIQAAAOgKAKQgKAJgaAAQgfAAgRgQg");
	this.shape_120.setTransform(237.6,82.9,0.667,0.667);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AggBiQgNgDgJgFQgKgFgEgGQgGgJAAgJQAAgJAEgHQADgGAFgEQALAGANAEQAOAFARABQALAAAFgEQAHgDgBgGQAAgGgDgDQgGgDgIgBIgLgDQgggHgOgOQgQgNAAgaQAAgOAGgLQAFgMALgIQAKgHAPgFQAQgEAQAAQAOAAAKACQANACAIAFQAIAEAFAHQAGAGAAAKQAAAIgEAGQgDAIgEADIgJgEIgNgDIgNgEIgNgBQgMAAgGADQgGADAAAGQAAAFAEACQADACAJADIAMADQAhAIAPAPQAPAOAAAXQAAAegVAQQgTARgoAAQgOAAgOgCg");
	this.shape_121.setTransform(226.8,84.1,0.667,0.667);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AggBcQgRgEgLgKQgMgKgGgOQgHgPAAgWIAAhuIALgCIAQgBIAPABQAGABAEAEQAFAEACAFQACAGAAAJIAABTQAAAPAIAHQAGAHANAAQAHAAAHgCIAIgDIAAiGIALgCIAQgBIAOABQAGABAFAEQAFADACAGQACAFAAAKIAAB1QAAATgPAKQgMAIgSAEQgSAFgUAAQgSAAgRgFg");
	this.shape_122.setTransform(213.8,84.3,0.667,0.667);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgpBgQgGAAgFgEQgDgCgDgIQgCgGgBgJIAAhyQAAgJADgHQADgFAGgGQAGgFAIgEQAGgDANgEQAJgEAKgBIAVgCQARAAAKAHQALAIAAAQQgBAFgBAFIgEAJIgPABIgPADIgPADIgLAEIAACDIgaADQgIAAgHgCg");
	this.shape_123.setTransform(202.3,84,0.667,0.667);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgnBlQgRgPAAgiIAAilIALgCIAQgBQAQAAAJAGQAIAGAAATIAAAZIAvAAIAEAKQACAGAAAJQAAAMgGAHQgGAGgIAAIghAAIAAA5QgBAKAHAEQAGAFAKgBIAMgBQAFAAAFgCQADAEACAGQADAEAAAIQgBAOgJAKQgLAJgaAAQgfAAgRgQg");
	this.shape_124.setTransform(192.4,82.9,0.667,0.667);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgOgOgHgSQgIgSAAgaQAAgaAIgRQAHgTANgMQANgMAQgFQAPgFARAAQATgBAQAHQAPAFAMALQAMALAFAPQAHAPAAASQAAANgHAGQgHAGgMADIhYAOQAFAOALAFQALAHAQAAQAOgBAOgEQALgDALgGQAGAEADAHQAEAHAAAIQAAAQgPAKQgNAGgNACQgQACgLABQgVgBgRgGgAgMgwQgEACgGAGQgEAFgCAGIgCAMIA8gLQgBgIgHgHQgGgIgOAAQgIAAgGADg");
	this.shape_125.setTransform(175.9,84.1,0.667,0.667);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AAmByQgLgEgDgKIgWhTIgTBaQgFAFgLAEQgMADgMAAQgQAAgNgFQgOgEgDgKIgHgUIgYhtIgKhMQAFgEAJgFQAJgEAKAAQAOAAAJAGQAJAGACAQIAVCTIACAAIAZh1IAMgEQAJgDAIAAQAPABAKAEQAKAFACAKIAaBoIACAAIATinQANgIAPAAQAOAAAKAGQAJAGAAAPIgMBiIgIAoQgEAWgEANQgDAQgEAJQgFAFgNAEQgOADgLAAQgSAAgLgFg");
	this.shape_126.setTransform(158.9,82.6,0.667,0.667);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgYB4QgKgLABgPQgBgQAKgKQAIgKAQAAQAQAAAJAKQAKAKgBAQQABAQgKAKQgJAKgQAAQgQAAgIgKgAgQAkQgHgCgCgLIgIiPQAGgDALgEQAJgCAIAAQAPAAAHAHQAJAIgBAPIgEBjIgFAiIgEACIgGACIgMACQgKAAgGgEg");
	this.shape_127.setTransform(140.3,82.1,0.667,0.667);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgaBdQgTgGgNgNQgOgNgHgTQgIgUAAgYQAAgZAIgSQAHgTAOgMQALgLARgGQAPgFARAAQATgBAQAHQAPAFAMALQAMALAFAPQAHAPAAASQAAANgHAGQgHAGgMADIhYAOQAEANAMAGQALAHAQAAQAOgBAOgEQAMgDAKgGQAGAEAEAHQADAHAAAIQAAAQgPAKQgMAGgNACQgRACgKABQgWgBgRgGgAgLgwQgHACgEAGQgEAFgCAGIgCAMIA9gLQgCgIgGgHQgHgIgOAAQgIAAgFADg");
	this.shape_128.setTransform(130.1,84.1,0.667,0.667);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("ABcBgQgGAAgFgEQgEgDgCgHQgDgGAAgJIAAhbQAAgMgGgEQgGgGgKAAQgFAAgGACIgJAGIABACIAACDIgMABQgIACgIAAQgHAAgGgCQgGAAgFgEQgEgDgCgHQgDgGAAgJIAAhbQAAgMgGgEQgHgGgJAAQgFAAgGACIgIAEIAACHIgMABQgHACgJAAQgIAAgGgCQgGAAgFgEQgEgDgCgHQgDgGAAgJIAAhzQAAgKAFgHQADgGAIgFQANgKARgGQAUgFASAAQAPAAAOAFQAOADAKAJQAMgIAMgEQANgFAUAAQAOAAANAEQAOAEAJAIQALAJAFANQAHANAAAUIAAB5IgMABQgHACgJAAQgIAAgGgCg");
	this.shape_129.setTransform(113.3,84,0.667,0.667);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AghBgQgPgEgMgIQgLgIgGgMQgFgLgBgRQAAgaAPgNQAPgPAfgDIAugFIAAgDQAAgLgKgFQgJgFgQAAQgNAAgOAEQgNADgKAEQgEgDgDgIQgEgHAAgHQAAgLAFgFQAEgGAJgEQALgFAOgCQANgBAOAAQAUAAAOADQARAGAKAIQAMAIAGANQAGAOABASIAABVQgBAJgFAHQgHAIgFADQgYAPgqABQgRgBgQgDgAgBASQgJABgHAEQgGADAAAJQgBAHAGAFQAFAFANAAIANgBQAJgDACgCIAAgeg");
	this.shape_130.setTransform(96.4,84.1,0.667,0.667);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("Ag3B6QgTgJAAgWQAAgJADgGQAFgHADgEQAIAFAQAGQANAEAOAAQATAAALgHQAMgHAAgPIAAgGQgQAHgTAAQgQAAgQgGQgNgFgMgLQgLgLgHgRQgGgQAAgYQAAgZAHgQQAHgRANgMQAMgMARgFQAPgFAVAAQAWAAAPAFQARAFALAKQAHAEAFAIQAEAGAAALIAACFQAAAUgHAQQgIAPgMAJQgNALgQAEQgRAEgRAAQgiAAgSgJgAgRhFQgIALgBAUQABAWAIAKQAJAJANAAQAPAAAIgHIAAhHIgHgDQgFgBgHAAQgRAAgJAKg");
	this.shape_131.setTransform(83.1,86.2,0.667,0.667);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgNgMgIgTQgIgUAAgZQAAgaAIgRQAHgSANgNQAMgLARgGQARgFAPAAQATgBAQAHQAQAHALAJQAMAMAFAOQAHARAAAQQAAANgHAGQgHAIgMABIhYAPQADALANAIQAMAFAPABQARgBALgEQANgDAIgGQAGADAFAIQADAGAAAJQAAARgPAJQgMAGgOADQgNACgOgBQgUABgSgHgAgMgvQgGADgEAEQgDAFgDAGIgCAMIA8gKQgBgJgGgHQgIgIgNAAQgHAAgHAEg");
	this.shape_132.setTransform(316.6,55.3,0.667,0.667);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AAsCAQgGgCgFgDQgEgEgCgFQgCgHgBgJIAAhVQABgPgIgHQgHgGgKAAIgNACQgIACgDADIAACFIgMADIgPABIgOgBQgHgCgEgDQgFgEgCgFQgCgGAAgKIAAjeIALgDIAQgBIAOABQAHACAEADQAEADACAGQADAHAAAJIAAAmIAOgFQAKgCALAAQAjAAAUATQAUAUAAAkIAAB0IgLADIgQABg");
	this.shape_133.setTransform(303,53.2,0.667,0.667);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgnBmQgRgQAAgiIAAikIALgDQAIgBAIAAQAQAAAJAGQAIAGAAATIAAAZIAvAAQADAFABAFQACAGAAAIQAAANgGAHQgFAGgKAAIggAAIAAA5QAAAKAFAEQAGAEALAAIALgBQAGAAAEgCIAGAJQACAFAAAIQAAAPgKAJQgLAJgZAAQgeAAgSgPg");
	this.shape_134.setTransform(291.5,54.1,0.667,0.667);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("Ag3B6QgTgJAAgWQAAgIADgHQAEgIAEgCQAKAGAOAEQAOAEANAAQASAAAMgHQALgGAAgQIAAgGQgPAHgUAAQgRAAgNgFQgPgFgLgMQgLgKgHgSQgGgSAAgWQAAgXAHgSQAGgRANgMQANgLARgGQASgFASAAQAUAAARAFQASAHALAIQAHAGAEAGQAEAHAAAKIAACGQAAAUgHAPQgGANgOALQgNALgQAEQgRAEgSAAQggAAgTgJgAgRhEQgIALAAATQAAAWAIAKQAJAJANAAQAPAAAIgGIAAhHIgHgDQgFgCgHAAQgRAAgJALg");
	this.shape_135.setTransform(274.5,57.4,0.667,0.667);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AAsBhQgFgCgFgCQgFgEgCgGQgCgFAAgKIAAhaQAAgNgHgFQgFgFgMgBIgMACQgIACgEAEIAACFIgMACIgQABIgOgBQgGgCgFgCQgEgEgDgGQgCgHAAgIIAAhzQAAgLAEgGQAEgGAHgGQAMgJAUgGQASgGAVAAQApAAAWATQAWATAAAiIAAB4IgLACIgQABg");
	this.shape_136.setTransform(261,55.2,0.667,0.667);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgKCKQgGgCgFgDQgEgEgCgFQgCgHgBgJIAAicIAcgEIANACQAHABAEADQAEAEADAFQACAGAAALIAACbIgMACQgIACgHAAgAgXhOQgJgKAAgOQAAgPAJgLQAJgKAOABQAQgBAIAKQAKALgBAPQABAOgKAKQgIAKgQAAQgOAAgJgKg");
	this.shape_137.setTransform(250.6,52.5,0.667,0.667);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("Ag4B4QgJgJgCgQQAMgJALgMQAMgLAJgNQgGgCgHgIQgHgGgIgUIgJgVIgehsQAGgGAHgDQAKgFAJAAQAMABAJAFQAIAGAEAPIAcBpIABAAIAeh8QANgHAPgBQANABAIAFQAIAGAAAOQAAANgCAMQgDAPgEAOIgJAfIgMAgQgHASgGALIgMAZQgNAXgGAJQgJAMgIAGQgGAHgIACQgHACgKABQgPAAgKgKg");
	this.shape_138.setTransform(240.5,57.4,0.667,0.667);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AghBgQgPgDgMgJQgLgIgGgMQgGgMAAgPQAAgaAPgOQAQgOAegDIAugGIAAgDQAAgLgJgEQgJgGgRAAQgNAAgNAEQgOADgKAEQgEgDgDgIQgEgGAAgIQAAgKAFgGQAEgGAKgEQANgGALgBQANgBAOAAQASAAARAEQAPADAMAKQALAIAGANQAHAPAAARIAABVQAAAKgGAGQgFAHgHAEQgXAPgrAAQgTAAgOgDgAAAASQgLACgGADQgGADAAAJQAAAIAFAEQAFAFANAAIAOgBQAIgDACgBIAAgfg");
	this.shape_139.setTransform(227.2,55.3,0.667,0.667);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgKCAQgGgCgFgDQgEgEgCgFQgDgHAAgJIAAjeIAMgDIAQgBIANABQAGACAFADQAEAEACAFQADAHAAAJIAADeIgMACQgIACgIAAg");
	this.shape_140.setTransform(217.6,53.2,0.667,0.667);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AhGCCQgGgCgFgDQgEgDgCgGQgCgGAAgKIAAi4QAAgKAEgHQAFgHAGgFQANgIAPgEQAQgFAVAAQAVAAASAGQATAGANANQANAMAIATQAHATAAAZQAAAZgGARQgGASgMANQgMANgRAGQgSAGgTAAQgNAAgPgFIAABAQgEACgIAAQgHACgJAAgAgThNIgJAEIAABUIAJAEIALABQAkAAAAguQAAgZgJgMQgJgLgRAAQgGAAgGABg");
	this.shape_141.setTransform(207.4,57.4,0.667,0.667);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgpBhQgGgCgFgDQgEgDgCgGQgCgHgBgJIAAhzQAAgJADgGQAEgGAFgFIAOgJIAmgMIAVgCQARAAAKAHQALAIAAAQQgBAFgBAFIgEAKIgPAAIgeAGIgLAEIAACCIgKADIgQABg");
	this.shape_142.setTransform(190.9,55.2,0.667,0.667);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AglBcQgRgGgNgNQgNgNgGgSQgHgUAAgWQAAgVAHgUQAHgRAMgNQAMgOASgGQASgIATABQAVgBASAIQASAHALANQAMAMAIATQAGASAAAWQAAAYgGATQgIATgMAMQgMANgRAGQgRAGgWAAQgVABgQgIgAgWgjQgJANAAAWQAAAXAJANQAIAMAOAAQAPAAAJgMQAIgMAAgYQAAgWgJgNQgIgMgPAAQgOAAgIAMg");
	this.shape_143.setTransform(178.5,55.3,0.667,0.667);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgtCDQgGgBgFgDQgEgEgCgGQgDgGAAgJIAAifQAAgUAHgOQAGgOALgJQAKgJAPgEQAPgEAPAAQAbAAAMAHQANAIAAASQAAAIgDAGQgDAGgEADIgOgDIgRgCQgPAAgJAGQgIAGAAANIAAANIA6AAQADAFABAFQACAGAAAIQAAANgFAGQgFAGgKAAIgpAAIAAB6IgLACIgQABg");
	this.shape_144.setTransform(166.8,52.9,0.667,0.667);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AggBcQgPgDgNgLQgMgJgHgPQgGgRAAgUIAAhuIALgCIAQgBIAPABQAGACAEADQAEADADAGQACAHAAAJIAABSQAAAPAHAHQAIAHAMAAQAJAAAFgBIAIgEIAAiGIALgCIAQgBIAOABQAHACAEADQAEADADAGQACAHAAAJIAAB0QAAATgPAKQgNAJgRADQgRAFgVAAQgSAAgRgFg");
	this.shape_145.setTransform(149.3,55.5,0.667,0.667);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgmBcQgRgHgMgMQgNgMgGgTQgIgUABgWQgBgVAIgUQAGgSANgMQAMgOARgGQASgIAUABQAUgBATAIQARAHAMANQAOAOAFARQAIATAAAVQAAAXgIAUQgGASgNANQgNANgQAGQgRAGgWAAQgWABgQgIgAgWgjQgJAMABAXQAAAYAIAMQAIAMAOAAQAPAAAIgMQAJgMAAgYQAAgXgJgMQgIgMgPAAQgPAAgHAMg");
	this.shape_146.setTransform(135.3,55.3,0.667,0.667);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("Ag4B4QgJgJgCgQIAXgVQAMgMAJgMQgGgCgHgIQgHgGgIgUIgJgVIgJgbIgKgjIgLguQAGgGAHgDQAJgFAKAAQAMABAJAFQAIAGAEAPIAbBpIACAAIAeh8QANgHAPgBQAMABAJAFQAIAGAAAOQAAAIgCARIgHAdIgKAfIgLAgIgNAdQgEAKgJAPQgIARgKAPQgLANgGAFQgHAHgIACQgHACgJABQgQAAgJgKg");
	this.shape_147.setTransform(121.6,57.4,0.667,0.667);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AAfB7QgKgGgKgOIgigwIAABGIgMACIgQACIgNgBQgIgDgDgCQgEgDgDgGQgCgGAAgKIAAjfIAMgCIAPgBIAOABQAHABAEAEQAEADACAGQADAFAAAKIAABmIA9hEQATABALAIQAMAKAAANQAAAGgCAFQgCAEgEAFIgKALIgjAfIA6A+QgBARgJALQgIAJgPAAQgMAAgJgGg");
	this.shape_148.setTransform(103.9,53.2,0.667,0.667);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AAsBhQgGgCgFgCQgEgFgCgFQgCgHgBgIIAAhaQABgMgHgGQgFgFgMgBIgNACIgMAGIAACFIgMACIgQABIgNgBQgHgCgEgCQgFgFgCgFQgCgFAAgKIAAhzQAAgMAEgFQADgGAIgGQANgKASgFQATgGAVAAQAoAAAXATQAWATAAAiIAAB4IgLACIgQABg");
	this.shape_149.setTransform(90,55.2,0.667,0.667);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgiBgQgOgDgMgJQgLgIgGgMQgFgMgBgPQAAgbAPgNQAPgOAfgDIAugGIAAgDQAAgLgJgEQgJgGgQAAQgOAAgOAEQgNADgKAEQgEgDgDgIQgEgGAAgIQAAgKAFgGQAEgGAJgEQAOgGALgBQAMgBAPAAQASAAARAEQAOADANAKQALAIAGANQAHAOAAASIAABVQAAAKgGAGQgFAHgHAEQgXAPgrAAQgUAAgOgDgAgBASQgKACgGADQgHADABAJQgBAIAGAEQAFAFANAAIAOgBIAKgEIAAgfg");
	this.shape_150.setTransform(76.2,55.3,0.667,0.667);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AAsCAQgFgCgFgDQgFgDgCgGQgCgFAAgLIAAhVQAAgPgIgHQgHgGgKAAIgNACQgIACgDADIAACFIgLADIgQABIgOgBQgHgCgEgDQgEgDgCgGQgDgHAAgJIAAjeIAMgDIAQgBIANABQAIACADADQAFAEACAFQACAGAAAKIAAAmIAOgFQALgCAJAAQAlAAATATQAUATAAAlIAAB0IgLADIgQABg");
	this.shape_151.setTransform(62.9,53.2,0.667,0.667);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgMB1QgGgCgFgDQgEgDgCgHQgCgFAAgLIAAiUIg2AAQgDgEgCgIQgCgGAAgJQAAgPAGgHQAGgGAKAAICcAAIAFALQACAJAAAHQAAAPgGAGQgGAHgLAAIgnAAIAACxIgNACIgRABQgHAAgGgBg");
	this.shape_152.setTransform(49.2,53.8,0.667,0.667);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("Al0i4IBJgJQBcgFBdASQEsA4DQEFQiVgcitgHQlZgNh4Bqg");
	this.shape_153.setTransform(381.3,100.7,0.667,0.667);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#18721A").s().p("AEKD8QhigTiBgLQkAgXikAfIhuAXIAAoiIBkAGQC6ALCoBPQDbBnCnDQICPC0gAArAyQikh8jHghIAACcQBJgIBZAAQBaABBvAIIAAAAg");
	this.shape_154.setTransform(391.9,100.1,0.667,0.667);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#18721A").s().p("EgjnAgHQjCAAiKiKQiKiKAAjCMAAAgxhQAAjCCKiKQCKiKDCAAMBHPAAAQDCAACKCKQCKCKAADCMAAAAxhQAADCiKCKQiKCKjCAAgEgnhgcrQhoBoAACTMAAAAxhQAACTBoBoQBoBnCSAAMBHPAAAQCSAABohnQBohoAAiTMAAAgxhQAAiThohoQhohniSAAMhHPAAAQiSAAhoBng");
	this.shape_155.setTransform(183.3,137,0.667,0.667);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("EAnigASQhohniSAAMhHPAAAQiSAAhoBnQhjBjgFCLIAAhWQAAiRBohoQBohoCSAAMBHPAAAQCSAABoBoQBoBoAACRIAABWQgFiLhjhjg");
	this.shape_156.setTransform(183.3,22.4,0.667,0.667);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("EgjnAeTQiSAAhohnQhohoAAiTMAAAgxhQAAiTBohoQBohnCSAAMBHPAAAQCSAABoBnQBoBoAACTMAAAAxhQAACThoBoQhoBniSAAg");
	this.shape_157.setTransform(183.3,137,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,424.7,274);


(lib.man_head_loop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#632C26").ss(3.3,1,1).p("ABTATQAAgDgOgLQgSgLgUgGQg+gTgzAy");
	this.shape.setTransform(158.1,142.7,0.667,0.667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#632C26").ss(3.3,1,1).p("AiaAAQAABAAtAuQAtAuBAAAIAPgCQA2gEApgnQAVgWAMgcQAMgdAAggQAAg/gtguQgtguhBAAQgaAAgaAKQg2AUgcAyQgUAiAAApg");
	this.shape_1.setTransform(173.9,142.6,0.667,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#632C26").ss(3.3,1,1).p("AiaAAQAAA9ApAsQAoAsA8AFIANACQA4AAAqgkQAbgWAPgeQAPggAAgkQAAg/gtguQguguhAAAQgOAAgPADQg3ALgjAsQgjAqAAA3g");
	this.shape_2.setTransform(142.3,143,0.667,0.667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDFDFD").s().p("Ah6hPQAdgzA2gTIChD/QgoAog2AEQhfiSg3hTg");
	this.shape_3.setTransform(173,142.9,0.667,0.667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDFDFD").s().p("AgCCZIhqj8QAjgsA3gKIB/EPQgqAkg4AAg");
	this.shape_4.setTransform(141.5,143.1,0.667,0.667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A7D7F9").s().p("AhtBuQgtguAAhAQAAgpATgiQAdgyA2gUQAagKAaAAQBAAAAuAuQAtAtAABAQAAAfgMAeQgMAcgWAWQgoAng2AFIgPABQg/gBgugtg");
	this.shape_5.setTransform(173.9,142.6,0.667,0.667);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A7D7F9").s().p("AgNCbQg8gGgogsQgpgtAAg8QAAg3AjgqQAjgsA3gKQAPgEAOAAQBAAAAuAuQAtAuAAA/QAAAkgPAgQgPAegbAWQgqAkg4AAg");
	this.shape_6.setTransform(142.3,143,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},52).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},21).to({state:[]},1).wait(16));

	// Layer_4
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#514030").s().p("AhvBSQgQgQAJgVIAshpQAIgUAVgIQAUgHAUAKIBsA2QAVALgCAWQgCAXgXAGQhMAVhgAlQgHADgHAAQgMAAgKgKg");
	this.shape_7.setTransform(117.3,78.6,0.667,0.667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#514030").s().p("ABNBTQhWgahSgOQgWgEgEgVQgEgVASgMIBjg9QARgLAUAFQAUAFAKATIAzBfQAKATgNAQQgKANgOAAIgKgCg");
	this.shape_8.setTransform(188.4,74,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8,p:{y:74}},{t:this.shape_7,p:{y:78.6}}]}).to({state:[{t:this.shape_8,p:{y:76.5}},{t:this.shape_7,p:{y:81.1}}]},29).to({state:[{t:this.shape_8,p:{y:81.5}},{t:this.shape_7,p:{y:86.1}}]},2).to({state:[{t:this.shape_8,p:{y:89}},{t:this.shape_7,p:{y:93.6}}]},2).to({state:[{t:this.shape_8,p:{y:81.5}},{t:this.shape_7,p:{y:86.1}}]},16).to({state:[{t:this.shape_8,p:{y:76.5}},{t:this.shape_7,p:{y:81.1}}]},2).to({state:[]},1).to({state:[{t:this.shape_8,p:{y:74}},{t:this.shape_7,p:{y:78.6}}]},21).to({state:[]},1).wait(16));

	// Layer_2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#632C26").s().p("AhPAAQAAigBPAAQBQAAAACgQAAChhQgBQhPABAAihg");
	this.shape_9.setTransform(190.1,130.5,0.667,0.667);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#632C26").s().p("AhPAAQAAifBPgBQBQABAACfQAABKgQAoQgUAugsABQhPgBAAigg");
	this.shape_10.setTransform(123.7,135.2,0.667,0.667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#632C26").s().p("AgzAFQgBgSA0gDQA1gDgBANQAAANg0AIQgPADgLAAQgZAAAAgNg");
	this.shape_11.setTransform(189.9,129.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#632C26").s().p("Ag1ANQABgYA0gMQA2gLAAAaQAAAKgNgBQgNgBgoATQgSAIgKAAQgNAAAAgOg");
	this.shape_12.setTransform(123.6,136.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10,p:{scaleY:0.667,y:135.2}},{t:this.shape_9,p:{scaleY:0.667,y:130.5}}]}).to({state:[{t:this.shape_10,p:{scaleY:0.282,y:136.3}},{t:this.shape_9,p:{scaleY:0.322,y:130.5}}]},29).to({state:[{t:this.shape_10,p:{scaleY:0.159,y:135.5}},{t:this.shape_9,p:{scaleY:0.181,y:131.4}}]},2).to({state:[{t:this.shape_12},{t:this.shape_11}]},2).to({state:[{t:this.shape_10,p:{scaleY:0.159,y:135.5}},{t:this.shape_9,p:{scaleY:0.181,y:131.4}}]},16).to({state:[{t:this.shape_10,p:{scaleY:0.282,y:136.3}},{t:this.shape_9,p:{scaleY:0.322,y:130.5}}]},2).to({state:[]},1).to({state:[{t:this.shape_10,p:{scaleY:0.667,y:135.2}},{t:this.shape_9,p:{scaleY:0.667,y:130.5}}]},21).to({state:[]},1).wait(16));

	// mouth
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#B75D52").ss(3.2,1,1).p("AA/g5QgqAOgfAgQgXAWgdAv");
	this.shape_13.setTransform(121.2,172,0.667,0.667);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#B75D52").ss(4,1,1).p("ADMgLQgyAphvACQiDAChyhB");
	this.shape_14.setTransform(146.5,178.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#B75D52").ss(4,1,1).p("ADZAAQhUAliFABQiEABhUhM");
	this.shape_15.setTransform(145.1,177.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#B75D52").ss(4,1,1).p("ADugiQhqBHiJABQiKABhfhM");
	this.shape_16.setTransform(147.3,177.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#873A34").s().p("AifgqQCiAQCXgQQARAYgjAuQh/gaiDApQgggggFg1g");
	this.shape_17.setTransform(143.7,177.8,1.403,1.403);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C15B53").s().p("AiBgJQCDgpCAAaIgGAHQgpA0hhAAQhNgHgmglg");
	this.shape_18.setTransform(144.7,185.2,1.403,1.403);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#B75D52").ss(3.2,1,1).p("AA/g5Qg4ABgbAcQgbAcgPA6");
	this.shape_19.setTransform(119.2,169.7,0.667,0.667);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#873A34").s().p("AiCAKQgigPgFgcQCtAICggIQATAMglAYIgGAEQgsAbhoAAQhRgEgpgUg");
	this.shape_20.setTransform(143.7,181);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#B75D52").ss(4,1,1).p("ADBgZQhWA0hvABQhwAAhMg3");
	this.shape_21.setTransform(147.3,177.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#B75D52").ss(3.2,1,1).p("ABNgyQhSgEgZAgQgaAggUAp");
	this.shape_22.setTransform(126.5,172.6,0.667,0.667);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#B75D52").ss(4,1,1).p("ACoABQh2BIhUgaQhUgagxhK");
	this.shape_23.setTransform(144.8,179.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13,p:{x:121.2,y:172}}]}).to({state:[{t:this.shape_15},{t:this.shape_13,p:{x:119.2,y:169.7}}]},29).to({state:[{t:this.shape_16},{t:this.shape_13,p:{x:119.2,y:169.7}}]},2).to({state:[{t:this.shape_19,p:{scaleX:0.667,scaleY:0.667,x:119.2,y:169.7}},{t:this.shape_18},{t:this.shape_17}]},7).to({state:[{t:this.shape_19,p:{scaleX:0.453,scaleY:0.453,x:124.4,y:176.2}},{t:this.shape_20}]},3).to({state:[{t:this.shape_21},{t:this.shape_13,p:{x:122.8,y:169.7}}]},3).to({state:[{t:this.shape_19,p:{scaleX:0.667,scaleY:0.667,x:119.2,y:169.7}},{t:this.shape_18},{t:this.shape_17}]},3).to({state:[{t:this.shape_23},{t:this.shape_22}]},3).to({state:[]},2).to({state:[{t:this.shape_16},{t:this.shape_13,p:{x:119.2,y:169.7}}]},21).to({state:[]},1).wait(16));

	// Layer_6
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#B75D52").ss(2.4,1,1).p("AC+AHQgVAVgwALQgwAKg5gEQiJgKhEhQ");
	this.shape_24.setTransform(114.3,149.5,0.667,0.667);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#B75D52").ss(3.2,1,1).p("ABCgMQgdARgeAGQgpAIgfgU");
	this.shape_25.setTransform(95.1,136,0.667,0.667);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#B75D52").ss(3.2,1,1).p("ABBAJQgaAPgtgKQgugKgMgV");
	this.shape_26.setTransform(96.5,130.7,0.667,0.667);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#B75D52").ss(2.4,1,1).p("ACXg6QgYBVhrAZQhoAZhDg8");
	this.shape_27.setTransform(195.7,143.7,0.667,0.667);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#B75D52").ss(3.2,1,1).p("AAqAAQgSAHgYgBQgYgBgRgK");
	this.shape_28.setTransform(208.2,130.5,0.667,0.667);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#B75D52").ss(3.2,1,1).p("AAdgRQgFAOgVALQgTAMgNgD");
	this.shape_29.setTransform(207.2,125.7,0.667,0.667);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#B75D52").ss(2.4,1,1).p("AC+AJQgVAVgwALQgwAKhwgWQhwgWgmgy");
	this.shape_30.setTransform(114.3,149.4,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29,p:{scaleX:0.667,x:207.2,y:125.7}},{t:this.shape_28,p:{scaleX:0.667,x:208.2,y:130.5}},{t:this.shape_27,p:{scaleY:0.667,rotation:0,y:143.7,scaleX:0.667}},{t:this.shape_26,p:{scaleX:0.667,rotation:0,x:96.5,y:130.7}},{t:this.shape_25,p:{rotation:0,x:95.1,y:136}},{t:this.shape_24}]}).to({state:[{t:this.shape_29,p:{scaleX:1.084,x:206.2,y:125.7}},{t:this.shape_28,p:{scaleX:0.817,x:207,y:130.5}},{t:this.shape_27,p:{scaleY:0.431,rotation:-7.5,y:143.8,scaleX:0.667}},{t:this.shape_26,p:{scaleX:0.765,rotation:15,x:98.4,y:130.8}},{t:this.shape_25,p:{rotation:15,x:96.8,y:137}},{t:this.shape_30,p:{scaleX:0.667}}]},29).to({state:[{t:this.shape_29,p:{scaleX:1.084,x:207.3,y:123.5}},{t:this.shape_28,p:{scaleX:0.817,x:208.4,y:131.8}},{t:this.shape_27,p:{scaleY:0.431,rotation:-7.5,y:143.7,scaleX:0.744}},{t:this.shape_26,p:{scaleX:0.765,rotation:15,x:98.4,y:128.2}},{t:this.shape_25,p:{rotation:15,x:94.7,y:137.3}},{t:this.shape_30,p:{scaleX:0.713}}]},2).to({state:[{t:this.shape_29,p:{scaleX:1.084,x:206.2,y:125.7}},{t:this.shape_28,p:{scaleX:0.817,x:207,y:130.5}},{t:this.shape_27,p:{scaleY:0.431,rotation:-7.5,y:143.8,scaleX:0.667}},{t:this.shape_26,p:{scaleX:0.765,rotation:15,x:98.4,y:130.8}},{t:this.shape_25,p:{rotation:15,x:96.8,y:137}},{t:this.shape_30,p:{scaleX:0.667}}]},20).to({state:[]},1).to({state:[{t:this.shape_29,p:{scaleX:0.667,x:207.2,y:125.7}},{t:this.shape_28,p:{scaleX:0.667,x:208.2,y:130.5}},{t:this.shape_27,p:{scaleY:0.667,rotation:0,y:143.7,scaleX:0.667}},{t:this.shape_26,p:{scaleX:0.667,rotation:0,x:96.5,y:130.7}},{t:this.shape_25,p:{rotation:0,x:95.1,y:136}},{t:this.shape_24}]},21).to({state:[]},1).wait(16));

	// Layer_1
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#B75D52").ss(6.4,1,1).p("AABAdQAAgTAAgKQAAgRgBgL");
	this.shape_31.setTransform(158.7,149.2,0.667,0.667);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EF8F7B").s().p("AifCgQhDhCABheQgBhcBDhDQBDhCBcAAQBeAABCBCQBCBDAABcQAABehCBCQhCBCheAAQhcAAhDhCg");
	this.shape_32.setTransform(108.5,149.9,0.667,0.667);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EF8F7B").s().p("AiJCgQhDhCAAheQAAhdBDhCQBChDBdAAQA3AAAxAaQAvAYAgArQglCFhAB+QgWAtgiA2QgMACgOAAQhdAAhChDg");
	this.shape_33.setTransform(199.3,147.6,0.667,0.667);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#B75D52").ss(3.2,1,1).p("Ahth7QAzgWBCAaQBHAbAJA2QAFAZgTAVQgLANgaAYQgiAlAhAcQAcAZAugB");
	this.shape_34.setTransform(15.1,120.1,0.667,0.667);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FAB28D").s().p("Ag6DtQisgygHiiQgHixBxhGQBig8B5AtQBZAgAnBnQAUAzACAsIh+EHQgSABgTAAQhCAAhDgUg");
	this.shape_35.setTransform(15.9,119.8,0.667,0.667);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#848280").ss(2.4,1,1).p("AB7gGQgnABhUAGQhPAGgrAA");
	this.shape_36.setTransform(41,109.6,0.667,0.667);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#848280").ss(2.4,1,1).p("ABjgEQg+gDgxAEQgaABgRAAQghACgKAG");
	this.shape_37.setTransform(34.7,103.6,0.667,0.667);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#848280").ss(2.4,1,1).p("AAWAAQgGAAgQAAQgNACgIgB");
	this.shape_38.setTransform(46,102.6,0.667,0.667);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#848280").ss(2.4,1,1).p("AizhvQgSAnAqAwQAdAgAuAcQAuAeArAOQA5AUAfAGQA6AMAegN");
	this.shape_39.setTransform(25.4,84.5,0.667,0.667);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#848280").ss(2.4,1,1).p("AiHiDQgPAcACAdQACAdATAZQAdAmAxAfQAlAYA3AYQARAHAlALQAlAKAQAH");
	this.shape_40.setTransform(48.7,50.3,0.667,0.667);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#848280").ss(2.4,1,1).p("AificQgPAngCAUQgDAdAOAeQAdA8BEAoQArAZAXAMQAkATAfALQAxAQAJADQAmALARgD");
	this.shape_41.setTransform(56.9,46.3,0.667,0.667);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#848280").ss(2.4,1,1).p("AmKjcQgbAlANAxQAMAtAkAiQAoAmA7AgQAdARBQAnQDYBoCrAcQBIALAQACQA3AHAjgE");
	this.shape_42.setTransform(87,44.6,0.667,0.667);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#848280").ss(2.4,1,1).p("AqulDQFMgcGqBbQCZAgCGBHQCQBMBjBtQA3A+AVBSQAWBaghBDQgCADAAgCQABgDgBgB");
	this.shape_43.setTransform(125.2,39.7,0.667,0.667);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#848280").ss(2.4,1,1).p("Aprl3QEVAQBTAHQChAOBpAYQB3AbBpA0QBqA1B+BfQBuBTAjCVQAiCPg7BVIAAgCQAAAEAAAB");
	this.shape_44.setTransform(134.7,36.9,0.667,0.667);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#848280").ss(2.4,1,1).p("Al3mXQFuAqDNDhQCECQAoC1QAPBDgMA3QgOBCgzAjQADgEgCAAQgCABAAAA");
	this.shape_45.setTransform(163.3,33.2,0.667,0.667);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#848280").ss(2.4,1,1).p("ACWgYQglANguAIQgdAEg3AHQgqAHgeAFQg4AIgEgG");
	this.shape_46.setTransform(43.9,126.9,0.667,0.667);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#848280").ss(2.4,1,1).p("ACVgWQgUABgnAIQgoAIgTACQhtAIhGAS");
	this.shape_47.setTransform(42.9,121.6,0.667,0.667);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#514030").s().p("AxeN4QgzgEgchBQgcg9gogXIgjgLIhJgDIg8BiQgghngQiOQgfkdBPjEQA9iYA1hZQBQiIB0hqQEmkMJniYQB/ggCkgWQCrgXB1AAQDxAADiA2QDWAzChBaQCgBYBIBrQBMBvgkBrQgtCGhaBQQhYBNiOAmQjiA8ojgbQkAgmkVgMQosgahsB8QhTBfAECRQACA+AsDTQAbCFgaAwQgWAohUAJQhPAOgkAAIgJAAg");
	this.shape_48.setTransform(109.4,59.2,0.667,0.667);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FAB28D").s().p("Al7NgQiwhHiHiCQiHiChKioQhMiuAAi/QAAi+BMiuQBKioCHiCQCHiCCwhHQC1hJDGAAQDGAAC2BJQCwBHCHCCQCHCCBJCoQBOCuAAC+QAABugaBoQgZBmgwBfQh5DujpCOQjvCSkdAAQjGAAi1hJg");
	this.shape_49.setTransform(118.4,114.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]}).to({state:[]},52).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},21).to({state:[]},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,216.1,208.6);


(lib.ClipGroup_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhCNADkIAAnHMCEbAAAIAAHHg");
	mask.setTransform(423.8,22.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg/eADkQhIAAg0g0QgzgzAAhJIAAkXQErCXNlBIQPxBTe4AAUAi5AAAAPhgBTQG9gmEQg7QDjgxCYhNIAAEXQAABJgzAzQgzA0hJAAg");
	this.shape.setTransform(423.8,22.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18, new cjs.Rectangle(0,0,847.7,45.5), null);


(lib.ClipGroup_16 = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16, new cjs.Rectangle(0,0,274.2,45.5), null);


(lib.ClipGroup_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD876").s().p("AhpCrQgKgBgHgGQgHgIAAgJIAAggQgsgUgZgxQgXgwAAhAIAAhPQAAgKAHgIQAIgGAJAAIGKAAQAKAAAIAGQAHAIAAAKIAABPQAABAgYAwQgYAxgsAUIAAAgQAAAKgHAHQgHAGgKABg");
	this.shape.setTransform(907.5,833.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E98B6F").ss(1.7,1,1).p("AAJgvQgbAPACAVQACARAVAOQgBAVALAH");
	this.shape_1.setTransform(868.6,836.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E98B6F").ss(1.7,1,1).p("AgTgSQALABAOARQAKAMAFAI");
	this.shape_2.setTransform(859.1,839.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FEB992").ss(2.2,1).p("AAjgEQgIAGgWACQgWADgRgF");
	this.shape_3.setTransform(873,843.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E98B6F").ss(1.7,1,1).p("AAngUQgFAIgbAOQgcAQgRAC");
	this.shape_4.setTransform(875.8,835.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEB992").s().p("AgcBQQgfgEADgeQgUgMAEgVQAEgVAegPQAPgHARgWQAQgWACgBQAegOAOAdQAHAPABAIQACAOgJANQAWAXgHAXQgEAMgTANQgQALgOAEQgUAFgPAAIgMgBg");
	this.shape_5.setTransform(875.3,833.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E98B6F").ss(1.7,1,1).p("ABLghQgNAhgnATQgrAXg2gM");
	this.shape_6.setTransform(859.5,830);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEB992").s().p("AiVA1QgIgRACgUQACgSAKgJQAmghAugTQA0gXAyABQA2ACAgAMQAbALAAAPQABAUgtAEQg1AAgOACQgNACgdAtQgcAwgZAFQgVAFgRAAQgsAAgRghg");
	this.shape_7.setTransform(866.8,824.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFCA55").ss(4.5,1).p("ABuhYIiiAAQgcAAgQAZQgRAZAGAfQAIApAeAcQAeAbAlAAIBwAA");
	this.shape_8.setTransform(883.4,831.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4A67F").s().p("AhAAsQgNgKAFgPIAIgMQgDgNABgGQACgKAOgIQANgHAagGQAVgFAUgCQASgCANAJQAMAIABAOQACAYgeAIQgBAJgEAFQgHAIgQAHQgOAHgYAEIgPABQgUAAgJgIg");
	this.shape_9.setTransform(874.8,843);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEB992").s().p("AAWCSQgcgFgugWQg6gbgZgoQgTgeADgfQADgkBUg2QAqgbApgUIAMANQAQAOARABQATABAjBBQAjA+gBAZQgBAbgOAeQgPAhgSAJQgdANgeAAQgLAAgMgBg");
	this.shape_10.setTransform(859.3,832.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E26380").s().p("AlqDMQh/gYkYhgQAki6AoiMQC5BTDcAlQDXAkEpAAQBbAAC0gZQCvgYA+gTQAXCLAPCqQhFAciaAcQizAfiQAAQl8AAjOgmg");
	this.shape_11.setTransform(716.5,787);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FE8D70").s().p("Ah3hwIDvANIhJDUg");
	this.shape_12.setTransform(742.1,748.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E26380").s().p("AC2ENQi7hEjCiJQi4iAAAgzQADgZAPgrQASgzATgXQAJgJAKgCQALgDAKAEQAnARCYBRQDDBfEdBsIivDjQgEAGgHADIgHABIgIgCg");
	this.shape_13.setTransform(698.3,737.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E26380").s().p("AAnCfQgXAAgNgTIjPkaIEHAAICSgQIhhEjQgIAagRAAg");
	this.shape_14.setTransform(741.9,756);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E26380").s().p("AA9CVIjBjEID/hsIAKA1IgfDfQgDAWgOAIQgFAFgGAAQgGAAgHgHg");
	this.shape_15.setTransform(767.2,745.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEF100").s().p("AnEETQhJgShbgjQh5gugrgOQAbiXAWhhQAfiGAihqQCfBGDbAmQDoAnEdAAQB9gGCWgYQB+gUBcgYQArDYAQESQhGAcijAdQi2AhiJAAQnQAAjZg0g");
	this.shape_16.setTransform(716,787.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#AAAAAA").s().p("AlqK6QjQghiRg1Qg7gVgZgjQgWgfAJgjQBDmGAsi6QBLlCB9jKQBFhvDCgLQA/gEBrAGQB+AHAjAAIEgAAQBOAAAoAQQA9AZA6BRQBRBzA2EnQA5E1AGGQQAAAkgJAcQgKAigWAMQhnA1hOAUQhpAai8AFQhHADhFAAQkbAAjwglg");
	this.shape_17.setTransform(713.5,785.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FE8D70").s().p("AgnhsIBPAAIhPDYg");
	this.shape_18.setTransform(724.1,748.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEB992").s().p("AhwAoQiGg8gXgUQg5gvAjhLQAkhPBfAjQAhANAyAeIBOAwQCgBeCRB0IgcB7g");
	this.shape_19.setTransform(829,823.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#67606D").s().p("Ai/BqQiDkCgDhHQgEhUBJgeQBHgdBSApQByA6CLCqQCICnAnB+QADAHgDAHQgDAHgHADQhHAdhvAnQiDAvg9APQhChzhCiBg");
	this.shape_20.setTransform(783.8,759.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEB992").s().p("AApD9QgngDgWgrQg+hygnhMQguhZgHgpQgOhOBDgnQBGgpAqAiQAWATA/BrIA6BkQARAfAWBAQAMAjgTAqQgSAogjAaQgiAaggAAIgGAAg");
	this.shape_21.setTransform(800.3,794.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#916A48").ss(1.7,1,1).p("AhWC3QBThIA1h+QAzh3gVgw");
	this.shape_22.setTransform(708.5,893);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#7B393B").ss(1.6,1,1).p("AhBBsQARgDAJgPIBiijQALgVgGgN");
	this.shape_23.setTransform(683.8,885.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#7B393B").ss(1.5,1,1).p("Ag9gcIB6A5");
	this.shape_24.setTransform(692.2,890.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9E6A3E").s().p("AiTBdQgEgCgCgEQgBgFACgEICKjlQACgDAEgBQAEgBAEACICbBYIiHDeg");
	this.shape_25.setTransform(675.3,881.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9E6A3E").s().p("AA/CxIkNiJQgOgHgGgKQgGgKAFgJIBriwQAFgIANgCQANgBAOAGIEXB4QAPAHAHALQAHALgFAIIh1DBQgFAJgOABIgEAAQgNAAgMgGg");
	this.shape_26.setTransform(684.3,886);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7B393B").s().p("ADHFOQgjgEh0ghQh+glg9gcIh4g7QhlhBghhzQgLgogFg0IgFhOIAAicIF8AQQAfAaDEBmQDBBlATAQQATASgPBDQgPA/gkBNQgmBPgpAyQgsA0ggAAIgEAAg");
	this.shape_27.setTransform(681.3,882);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEB992").s().p("AiACQQhWAAg8gsQhFg0AMhXQAMhUAjgOQAQgGAeAAIBFADQBiABA9AkQAmAXBjBJQAcADBPgDQBGADAVAiQAaAug1AjQgzAhhRAAg");
	this.shape_28.setTransform(735.6,964.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEB992").s().p("ACKIUQgggdAAgmIAFn7QjIhziHhRIhfg7QgrgqgFg4QgGg6Akg1QAfgwBRgEQBOgFBGAkIBGAfQBSAoBGAqQDgCIAABvQAABYg3IgQAAAmggAdQggAcgoAAQgoAAgggcg");
	this.shape_29.setTransform(697.1,916.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#916A48").ss(1.7,1,1).p("ACChYQgYA2hEAvQhEAvhjAd");
	this.shape_30.setTransform(768.4,868.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#916A48").ss(1.7,1,1).p("ACHBQQACgWhig6Qhig7hLgU");
	this.shape_31.setTransform(710.3,867.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#916A48").ss(1.7,1,1).p("Ag6g4QAAAtAcAfQAfAlA6AA");
	this.shape_32.setTransform(730.5,864.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#916A48").ss(1.7,1,1).p("AAAhiIAADF");
	this.shape_33.setTransform(737.1,870.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#7B393B").s().p("ABqDWQkBAAjNgaQljguAAhtIAAj2IWPAAIAAD2QgMA6iwA/QimA8h1AAg");
	this.shape_34.setTransform(711,861.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#916A48").ss(1.7,1,1).p("AhOCfQAzguA3htQA4hvgFgz");
	this.shape_35.setTransform(793.6,891.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7B393B").s().p("ACWFOQgYgChVgoQhgguglgQQgugUhuhTIhkhOIAehXQAYhGAkgyQBxiYEIgYIAACpQBHAhA/AnQA1AhAjAdQAQANgRA7QgQA3gkBGQhVCpgzAAIgCgBg");
	this.shape_36.setTransform(770.3,877.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FEB992").s().p("Ah6CJQhSAAg4gqQhBgxALhTQALhQAhgNQAPgGAdAAIBBADQBdABA6AiQAlAWBeBFQAaADBLgCQBDADATAgQAZArgzAhQgwAghMAAg");
	this.shape_37.setTransform(814.6,955.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FEB992").s().p("ACDH5QgfgbAAgkIAFniQi+htiAhNIhag4QgpgogFg1QgFg3AhgzQAegtBNgFQBKgEBCAiIBDAeQBPAmBCAoQDVCBAABpQAABUg0IFQAAAkgfAbQgeAbgnAAQgmAAgegbg");
	this.shape_38.setTransform(778,910.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF854C").s().p("AybBQQghghAPgvQAOguBDggQBCgiBOAAId7AAQBOAABJAgQBIAhAYAuQAXAtgUAhQgUAig0AAQhnABjUABI9kAAQg8AAghghg");
	this.shape_39.setTransform(694.5,892.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#BF6439").s().p("At6GeQhOAAhGg2QhGg2gThMIg9jpQgUhMgEhXQgDhXAOgvQAPguBCghQBCgiBOAAId8AAQBOAABIAgQBJAhAXAuQAYAuADBXQADBWgTBMIg9DtQgTBMhFA2QhGA2hOAAg");
	this.shape_40.setTransform(694.9,922.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BF6439").s().p("AATS1QhDgsgShMImF5hQgShMAGhqQAHhrAbhJIAuh9QAbhJBLg7QBLg7BNgIIAHgBQBNgJBZAmQBZAmAxA+IAkAvQAwA+AnBjQAmBkAGBOIB8aoQAGBOgzBCQgyBChNAOIiGAaQgTADgTAAQg3AAgzggg");
	this.shape_41.setTransform(572.5,804);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF854C").s().p("Ar/T8QhEgsgShMImG5gQgShMAHhrQAGhqAbhKIAvh9QAbhJBKg6QBLg7BOgJIT/iPQBOgJBkAbQBkAbA/AvICiB5QA/AvA0BYQA0BZALBNIDXYLQAKBNgvBCQgvBChNAOI61FHQgTAEgTAAQg3AAgzghg");
	this.shape_42.setTransform(651.3,796.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF9D70").s().p("AAeFNQgzABgqgmQgrgkgIg0Ig+mgQgIgzAgglQAfglA0AAIB6AAQA0AAAlAlQAlAmAAA0IAAGdQAAA0glAlQglAmg0gBg");
	this.shape_43.setTransform(843.4,857);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#BF6439").s().p("AoOFNQg0ABgggmQgfgkAHg0IA8mgQAHgzArglQAqglA0AAIOsAAQA0AAAmAlQAlAmAAA0IAAGdQAAA0glAlQgmAmg0gBg");
	this.shape_44.setTransform(797.7,857);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF854C").s().p("AhzFcQgfgmAAg0IAAoDQAAg0AlgmQAlglA0AAIA3AAQA1AAAgAlQAhAlgHA0IhAIFQgHA0gjAlQgkAlgrAAQgsAAggglg");
	this.shape_45.setTransform(840.3,912);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BF6439").s().p("Al7GBQg0AAgoglQgpglgEg0IgroFQgEg0AiglQAiglA0AAIN7AAQA0AAAhAlQAgAlgGA0IhBIFQgGA0gqAlQgqAlg0AAg");
	this.shape_46.setTransform(799,912);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF9D70").s().p("Ag0FNQg0ABglgmQglglAAg0IAAmdQAAg0AlgmQAlglA0AAIB6AAQA0AAAgAlQAfAlgIAzIg+GgQgIA0gqAkQgrAmgzgBg");
	this.shape_47.setTransform(985.2,857);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BF6439").s().p("An9FNQg0ABgmgmQglglAAg0IAAmdQAAg0AlgmQAmglA0AAIOsAAQA0AAAqAlQArAlAHAzIA8GgQAHA0gfAkQggAmg0gBg");
	this.shape_48.setTransform(1030.9,857);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF854C").s().p("AgmFcQgkglgHg0IhAoFQgHg0AhglQAhglA0AAIA3AAQA0AAAlAlQAlAmAAA0IAAIDQAAA0gfAmQgfAlgsAAQgrAAgkglg");
	this.shape_49.setTransform(988.3,912);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BF6439").s().p("AlfGBQg0AAgqglQgqglgGg0IhBoFQgGg0AhglQAgglA0AAIN7AAQA0AAAiAlQAiAlgEA0IgrIFQgEA0goAlQgpAlg0AAg");
	this.shape_50.setTransform(1029.6,912);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7FD45D").s().p("AhRgTQAUgsAwgwQAXgZAUgQQgNBFAmB9QATA+AWAxQjxghBAiLg");
	this.shape_51.setTransform(856.3,827.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7FD45D").s().p("Agdh6QBPgIBdAlQhHAZhoBiQg1AygmAtQhCjmCggRg");
	this.shape_52.setTransform(827.3,777);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#7FD45D").s().p("AAygtQBAAaAvA4QhDgOiFARIh5ATQBTibB/Azg");
	this.shape_53.setTransform(824.4,764.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#7FD45D").s().p("AgVAYIhMgKQBbiBA9BPQAeAmAOBBQgkgchUgPg");
	this.shape_54.setTransform(827.9,714.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#7FD45D").s().p("AgfhoQBCgFBTAjQg7AThPBSIhFBPQhNjICHgKg");
	this.shape_55.setTransform(835.2,729);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#7FD45D").s().p("AgYASIhlgbQCSicBDB1QAiA6AEBZQgqgshsglg");
	this.shape_56.setTransform(943.7,720.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#7FD45D").s().p("Agrg0QAqgpBJgYQgcAtgGBjQgDAyACApQijhYBThSg");
	this.shape_57.setTransform(930.3,774.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#7FD45D").s().p("AAhg7QA5AjAvBLQg7gShwAUIhmAZQA2jPBzBGg");
	this.shape_58.setTransform(950.4,775);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#7FD45D").s().p("AAhg7QA5AjAvBMQg7gThwAVIhmAYQA2jPBzBGg");
	this.shape_59.setTransform(850.1,691.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#7FD45D").s().p("Agkh0QBKgGBcAlQhBAWhXBcIhKBYQhZjbCVgOg");
	this.shape_60.setTransform(903.8,685.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#7FD45D").s().p("ABCg5QBOAtA5BZQhTgainAOIiXASQBujlCcBZg");
	this.shape_61.setTransform(941.1,807.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#7FD45D").s().p("AgkhiQA9gOBRAWQg0AZg+BXIg1BTQhjivB8gcg");
	this.shape_62.setTransform(927.6,800.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#7FD45D").s().p("AgpAWIilgvQDojkByC1QA5BZAJCIQhGhGixg9g");
	this.shape_63.setTransform(931.4,825.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#7FD45D").s().p("AiNgGQhEjAFqANQgpA5goBLQhPCVAHBbQhqhjgjheg");
	this.shape_64.setTransform(911.1,836.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#7FD45D").s().p("AiOAsQAmhDAogmQCBh6BsDhQhDgChNAGQiZAOgwAtg");
	this.shape_65.setTransform(906.5,814.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#7FD45D").s().p("Ag4AsIjBgVQDMj9CnCdQBVBNArCCQhfg5jTghg");
	this.shape_66.setTransform(885.4,788.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#7FD45D").s().p("Agfh6QBQABBgAyQhJARhnBZIhbBYQhHj3CiACg");
	this.shape_67.setTransform(874.4,773.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#7FD45D").s().p("AgtgPQhAgohFgmIg5gdQFjjYBYEDQAtCAgbCsQhEhsjLiAg");
	this.shape_68.setTransform(869,809.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#7FD45D").s().p("AjPg1QgekCG/B6QhEA7hHBSQiOCjgSByQhoiZgOiBg");
	this.shape_69.setTransform(845.4,813.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#7FD45D").s().p("AAsBOQjCgdhKArQAWgeAhglQBEhJA9gkQDFhyBEE5QhTgXhigOg");
	this.shape_70.setTransform(840.6,783.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#7FD45D").s().p("AgwgWQhFgphKgnIg9geQFTi+B1D6QA6B8gKCjQhQhqjciDg");
	this.shape_71.setTransform(914.6,739.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#7FD45D").s().p("AAUhrQBZAlBTBiQhYgOibA1IiMA4QAhkxCyBLg");
	this.shape_72.setTransform(912.7,708.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#7FD45D").s().p("AhJhRQg1hKg8hJIgyg6QHrhOgTFGQgGBlg4CCQgcBBgbAsQgaiWimjpg");
	this.shape_73.setTransform(893.5,754.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#7FD45D").s().p("AkKB9QgNiRAahdQAliDBtgHQCIgJDyC5QhlAjh0A5QjnB1hIB2QgLg2gGhJg");
	this.shape_74.setTransform(867.1,740.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#7FD45D").s().p("AA2AxQjKh3hlAOIBbgxQBsg0BTgLQEOglhCF5QhRg/hmg8g");
	this.shape_75.setTransform(866.6,714.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#49A46C").s().p("AjyJyQAgCLiTAuQguAPg6AEIgxAAQBMhABRi9IgwAAQATgQAWgcQjlCIhICEQgJhDgBhWQgBisAqhfQh+AQhBArQAkguA1g5QBqhyBag2QAGgTAJgWQh/ARhAAqQAagiApgtQBShbBLg6Qg9AggtAlQglAngUAlQgIg3AAhGQgBiNAjhPQhpAOg0AjIBWhjQBmhqBRglQAJgtANgfQhoANg1AkIBDhOQBRhYBGgvQAjiDAzg3QBJhQBbBtQgrhtBcgVQAvgLA2ALQgbAUgdA0QAyg0A0AKQArAJAqAvQBVgaCNA1QBGAbA1AgQhfALiRBPQA4AOBEAwQAsg+BhApQAwAUAoAhQgsAHhDArQCfg0AxCrQAbBcgKB7QARALAKAIQgtAHhCArQCng4AuDAQAXBfgLBqQguhJh0hUQAHAngFAvQA1A0AzBOQAZAoAOAcQhDgghxgPQgNAjgSApQAvBeAaCQQANBIAEA1QhWhtjOhwQBmBkhjB3QgfAlgvAiIgpAbQAVhCgLh9QgHhRgTheQghA/gZA8QAGBQgHBCQgOgYgWgYQglB1AFBVQgQgTgXgfQgug+gjg9IgPAfIgDgVQgUBYgtBmQgWAzgTAhQgOiJhxjNgAkDEdIAEASIAEgXgAKfjiQguhEhuhQQAIAqgHA4IAFAIQANgDAOAAQA0AABHAtgAjGp1QAJAWAHAgIAAAAQAHg2ATgfQgFgRAAgQQgXAngOAZg");
	this.shape_76.setTransform(886.4,769.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#B0B0B0").s().p("AnLKCIAA0DIOXAAIAAUDg");
	this.shape_77.setTransform(885.9,858.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFC2C2").s().p("AgkClQABjAAIhVQAJhnASBZQAUBiARDEg");
	this.shape_78.setTransform(1142.5,513.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFC2C2").s().p("AgnDFQgBjbAIhrQAKiEAUBiQAVBtAWEEg");
	this.shape_79.setTransform(1010.9,509.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFC2C2").s().p("Ag9EFQAqkCAiiaQAsjCADB2QAECPgnFlQgxgFgngHg");
	this.shape_80.setTransform(758,507.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFC2C2").s().p("AhAEXQgakFABilQACjNAxByQA9CPBDFzQg4AEhBAAIghgBg");
	this.shape_81.setTransform(1164,502.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFC2C2").s().p("AhFDOQgTjtAFh9QAGibAsBmQA3CCA/FKQhYgQhCgdg");
	this.shape_82.setTransform(872.2,504.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFC2C2").s().p("AhxkgQAbhKAmgGQAjgGAbA1QAmBEAvDVQAfCPAeCyQgUgNgQgGQgUgIgXgBQgwgDg6AoQhIA1gwAaQgmnXBGi6g");
	this.shape_83.setTransform(1062.4,486.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFC2C2").s().p("ABPk5QA+hJAqgDQAogDgJA3Ih0KpQgQgYgPgHQgVgMgtAEQg1AFg0AbQhQAqgfAMQB8n0CqjMg");
	this.shape_84.setTransform(978.9,484.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFC2C2").s().p("AiThpQgEkMA5gBQA4AABOEBQA1CqA3EAQgigbgPgKQgWgPgVABQgZABgoAlQg8A2gpAZQgikWgDjKg");
	this.shape_85.setTransform(841.2,488.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFC2C2").s().p("AgUE6QgggfgLgIQgagUgkgJQApkgA8jBQA/jNAmBAQAfAzAMEbQAIC5gCD6QhagYg4g3g");
	this.shape_86.setTransform(733.2,493);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFDADA").s().p("A8JH4QhqgChXgIQgygFgngHQgfgFgdgIQhZgXg5g4QgggfgLgIQgagTglgJIgYgFQg9gKhiAaQiAAohYAXQlmBgnDgXQgFhZAGhwQAMjfA3htQA0hnAug1QBKhWB5g4QE1iPLQAIQPkAKF/ABQKvACJvgPQKggRN5AnQOIAnD0A7QDgA2BZCfQAoBJAbBwQATBUAXChQgXAchDAgQiHA/jcAUQjYATiJgrQhvgxg4gDQgegCgjAPQguAWgiAOQiKA6jmALQhGAEhWgBQg7AAg2gCIhKgDQkigQibg1Qg3gTgsgaIg8gnQgUgNgQgGQgUgIgXgBQgwgDg7AoQhIA1gwAaQg+AihDAPQhUAThogGIgLgBQgugDgjgGQhYgNgtgeQgagRgXgjQgQgYgOgIQgWgLgtAEQg2AFgzAbQhQAqgfALQiPA1klAOQjEAJiGgXQhZgQhCgdQgvgVgtgiQgigcgPgJQgWgPgVAAQgZABgpAlQg8A2gpAZQikBkk2AAIgbAAg");
	this.shape_87.setTransform(960.2,485.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFC2C2").s().p("AB8GvQjcg/i7iRQgqgghxhHQhohDgygpQARijAgh1QAqiaA6gXQCvhDGeClQDPBTCtBgIAbCgQAdDKALDYQhuA3iGAAQhpAAh4gig");
	this.shape_88.setTransform(1263.6,528);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFDADA").s().p("AEpQBQjqhOkMk3QjSj1humXQhkl2AekzQANiFAnhVQAphZA/gZQCvhEGeCmQDPBTCtBgIAbCfQAdDLALDYQAOEkgWEVQgcFYhUEuQgYAJgfAAQg0AAhJgZg");
	this.shape_89.setTransform(1263.2,586.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFC2C2").s().p("AheEJQiEgZiKhzQB8jDB5hnQCbiECNAmIBCB8QBLCeAvCpQhaAzhjAYQhLARhLAAQg7AAg9gLg");
	this.shape_90.setTransform(1279,684.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFDADA").s().p("AhAHXQkRgrhlheQgggdgLgfIgFgZQARgpAfg+QA+h9BEhrQB7jEB5hnQCciECNAmIBBB8QBLCfAvCpQA7DUAIDJQgdAnhUAdQhhAjiFAAQhfAAhxgSg");
	this.shape_91.setTransform(1273.5,706);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFC2C2").s().p("ApTFzQAKjAAdi0IAbiOIBwg0QCLg9CBguQGeiTCvA8QA/AWApBPQAnBMANB2Qi5CIhsBKQjhCbjBBKQilA+iEAAQhlAAhSgkg");
	this.shape_92.setTransform(657.8,529.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFDADA").s().p("AmuOkIgugGQhUkLgckzQgXj2APkDQAKjAAei1IAbiOIBwg0QCKg9CCguQGdiTCvA8QBAAWApBQQAmBLAOB2QAeEShkFMQhuFqjTDZQkLEVjqBGQhDATg5AAIgKAAg");
	this.shape_93.setTransform(657.8,581.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFC2C2").s().p("AivDmQhigUhbguQAviWBLiMIBBhvQCOgiCbB2QB5BbB8CtQiLBniEAWQg8AKg7AAQhLAAhLgQg");
	this.shape_94.setTransform(642,669.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFDADA").s().p("Al1GUQg0gRgkgXIgZgUQAIi1A6i7QAviWBLiNIBChvQCNgiCbB2QB5BbB8CuQBEBfA9BvQAfA4ARAkQAEAigzAqQhmBTkQAmQhxAQhgAAQiEAAhhgeg");
	this.shape_95.setTransform(647.6,688.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#BBAAB9").s().p("AghSkMAAAglHIBDAAMAAAAlHg");
	this.shape_96.setTransform(1119.7,593.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FEFEFE").s().p("AzbQ4MAm3ghuIAAJnI7mYHg");
	this.shape_97.setTransform(1139.6,600);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FEFEFE").s().p("AxjlmIKppfIYeAAMgjHAeLg");
	this.shape_98.setTransform(1087.8,575.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#ADE1FE").s().p("A1DR5QgoAAgbgbQgcgcAAgnMAAAgg0QAAgoAcgbQAbgcAoAAMAqHAAAQAnAAAcAcQAcAbAAAoMAAAAg0QAAAngcAcQgcAbgnAAg");
	this.shape_99.setTransform(1119.7,593.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#BBAAB9").s().p("A3pT9QgnAAgcgbQgcgcAAgnMAAAgk9QAAgnAcgbQAcgcAnAAMAvUAAAQAnAAAcAcQAbAbAAAnMAAAAk9QAAAngbAcQgcAbgnAAg");
	this.shape_100.setTransform(1119.7,593.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#BBAAB9").s().p("AghSkMAAAglHIBEAAMAAAAlHg");
	this.shape_101.setTransform(815.2,593.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FEFEFE").s().p("AzbQ4MAm3ghuIAAJnI7mYHg");
	this.shape_102.setTransform(835,600);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FEFEFE").s().p("AxjlmIKqpfIYdAAMgjHAeLg");
	this.shape_103.setTransform(783.3,575.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#ADE1FE").s().p("A1DR5QgnAAgcgbQgcgcAAgnMAAAgg0QAAgoAcgbQAcgcAnAAMAqHAAAQAnAAAcAcQAcAbAAAoMAAAAg0QAAAngcAcQgcAbgnAAg");
	this.shape_104.setTransform(815.2,593.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#BBAAB9").s().p("A3qT9QgmAAgdgbQgbgcAAgnMAAAgk9QAAgnAbgbQAdgcAmAAMAvUAAAQAnAAAcAcQAdAbAAAnMAAAAk9QAAAngdAcQgcAbgnAAg");
	this.shape_105.setTransform(815.2,593.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15, new cjs.Rectangle(525.6,435,797.9,543.8), null);


(lib.ClipGroup_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhFD1Qg5gZgVgnQgVgoAdgkQAsg1gagxQgTgkhGgxQg3gmAXg+QAVg5AtgFIFMAAQBBAAAVBDQAVBCgoAzQgiArgsAcQg7AlgPANQg2AxAKA3QAHAoApAog");
	mask.setTransform(29.1,24.5);

	// Layer_3
	this.instance = new lib.Path();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14, new cjs.Rectangle(4.1,0,49.9,49), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AHuLJIvegDQhAAAgrgxQgqgxAJhAQA5mbBTlPQBfl8BeiGIIkABQBnByBpEoQBcEGBLFcQAgCZgNBlQgUCWh4AAIgBAAg");
	mask.setTransform(66.5,71.3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape.setTransform(83.7,56.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_1.setTransform(97,51);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_2.setTransform(82.5,51.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEA401").s().p("AgGAYQgJgBgGgGQgGgFAAgJQgBgHAFgHQAKgNAQABQATAAAGASQACAJgFAHQgFAGgKAEIgBABIAAAAQgGACgFAAIgEAAgAgLAHIADACIADABIAFAAIABgBIAFgBIAAAAIABAAIABgBIADgCIABAAIABgCIAAABIABgCIAAgBIAAgBIAAgCIAAAAIgBgBIgBgBIAAgBIgBgBIgBAAIABAAIgCgBIgBgBIgDAAIgBgBIgEAAIgCABIgCAAIgEACIAAABIgBAAIgBACIgBAAIABgBIgBABIgCAFIAAACIAAABIACACIgBAAg");
	this.shape_3.setTransform(117.9,177.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEA401").s().p("AgLAWQgNgKABgPQABgHAFgHQAFgGAJgCQAJgCAGAFQAHAFADAKIAAAAQADAHgBAHQgCAIgFAFQgFAGgJAAQgHAAgHgEgAgEAJIADACIACABIAEAAIABgBIABgBIABgBIABgCIAAABIAAgBIAAgBIABgCIAAgEIgBgEIgBAAIAAgCIgCgCIAAAAIgBgCIgCgBIAAAAIgCAAIgBAAIAAAAIgCABIAAgBIgBABIgCABIABAAIgBAAIgBABIAAABIgCACIABgBIgBABIAAADIAAADIABAEIAAgBIABADIABABIAAgBg");
	this.shape_4.setTransform(67.4,51);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_5.setTransform(56.3,114.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_6.setTransform(51.1,115.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_7.setTransform(75.2,110.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEA401").s().p("AgKAaQgGgGgEgJQgDgHAAgIQAAgJAFgGIAAgBIAAAAIABgBQAHgJAKABQAIABAHAHQAMAMgEAQQgEARgOAFIgFABQgEAAgGgEgAgGAIIACADIAAABIADADIABAAIAAAAIABABIABgBIgBAAIABAAIABgBIADgCIABgDIABgCIAAAAIABgBIABgFIAAAAIAAgBIAAgCIgCgFIgBgCIgEgDIgBgBIgBgBIAAAAIgCAAIgCAAIgBAAIAAABIgBAAIgDAEQAAABABgBIgBADIgBABQAAABABgCIgBADIABADIAAACIABAEIAAABIAAgBg");
	this.shape_8.setTransform(31.1,52.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEA401").s().p("AgQAcIgBAAIgCgBQgLgFgDgLQgCgKAGgKQAEgJAKgFQAGgEAJgBQATgBAKALQAHAIgCAJQgCAJgJAJQgIAHgLAEQgFABgFAAQgFAAgFgBgAgRAMIABAAIABABIABABIABAAIACABIABAAIAGAAIABAAIAEgBIACgBIABgBIAFgCIACgCIABAAIAAgBIAGgGIACgDIAAgCIAAgBIgBgDIgBgBIgDgCIgJgDIgIAAIgBABIgCAAIgBABIAAgBIgEADIAAAAIgBABIgCABIgCADIAAABIgCADIgBAAIAAABIAAAAIgBADIAAAEIAAABIABABIAAAAIAAABIABABIAAAAg");
	this.shape_9.setTransform(55.5,39.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEA401").s().p("AgJAYQgJgDgEgIQgIgNAHgMQAIgPAUADQAIABAHAGQAGAHABAIQACAJgFAGQgFAJgKACIgBABIgIABQgFAAgEgCgAACALIABAAIACgBIACAAIABAAIABgBIABgBIACgBIAAgBIABgBIAAgCIABgBIAAgCIgCgDIgBgDIAAABIgDgDIgDgBIgDgBIAAAAIgCgBIgFABIgBABIgCABIgBAAIAAABIgBABIgBABIAAABIgBACIAAAAIAAABIAAgBIAAADIABACIAAABIABACIADADIACABIAAAAIABABIACAAIABAAIABAAIADAAg");
	this.shape_10.setTransform(23,182.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEA401").s().p("AgSAYQgSgMAAgRQAAgJAHgHQAHgHANgBQAJgCALAFQAMAEAGAHQAIAIgBAKQgBALgNAKQgJAHgLAAQgLAAgJgHg");
	this.shape_11.setTransform(11.4,161.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEA401").s().p("AgDAfIgDAAQgNgBgHgGQgIgGABgKQAAgPAQgMQARgPARAHQANAEADALQADAKgFAKQgFAKgJAGQgKAGgIABIgCAAgAgDgMIgEADIAAAAIgBAAIgFAFIgEAGIgCAEIAAAEIABACIACACIAFACIADAAIAAAAIAAABIAIAAIAAgBIACAAIABgBIAAAAIABAAIABAAIACgCIACgBIAAAAIABgBIADgDIACgCIAAAAIADgEIABgCIAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgEIgBgCIgCgCIgCgBIgCgBIABABIgDgBIgDgBIABAAQABAAgCAAIAAAAIAAAAIgCAAIgCAAIgDABIgBAAIAAABIAAgBg");
	this.shape_12.setTransform(26.7,152.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEA401").s().p("AgYAaQgMgIAAgNQAAgKAHgJQAHgJAKgEQATgJAQAHQAJAFAEAKQADAKgDAJQgDAMgLAIQgKAHgMABIgDAAQgMAAgJgHgAgUAKIABABIABABIABACIAAAAIACABIADACIAEABIABAAIAHAAIABAAIAAAAIADAAIAFgCIABgBIACgBIACgBIABgBIAEgEIABgBIACgDIAAgBIABgBIAAgCIAAgBIAAgFIAAgBIgBgDIAAAAIAAAAIgBgCIgBgBIgBgBIgBgBIAAAAIgCgBIAAgBIgBAAIgDgBIgIAAIgBABIgGABIgJAFIgFAFIgDAFIgBABIgBACIAAAEIABACQABACgBgBg");
	this.shape_13.setTransform(32.3,100.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEA401").s().p("AgNAWQgJgEgFgJQgFgJACgJQACgIAIgFQAHgEAJAAQAVAAAJAPIABABIABACQAFAJgCAJQgCAJgJAEQgIAEgIAAQgIAAgJgFgAgGAKIACAAIAAAAIAFACIAGAAIABAAIADgBIACAAIACgBIAAgBIABAAIABgBIAAgBIABgCIAAgCIgBgBIAAgCIAAABIgCgEIgBAAIgBgCIgBgBIgBAAIgDgDIgBAAIgBgBIAAAAIgGgCQAAABAAAAIgBgBIgGAAIgBABIgDAAIgBABIgEACIABAAIgBABIAAADIABAFIAAAAIABABIAAABIABABIAAAAIABABIACACIABAAQAAABAAAAg");
	this.shape_14.setTransform(116.7,32.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEA401").s().p("AgIAbIgCAAQgMgDgGgIQgFgHADgJQAFgRASgHQAHgDAKABQALACAGAHQAGAHgBAKQgCAIgHAHQgMAMgOAAIgFAAgAgOAKIACABIABABIABAAIAEABIABAAIAEAAIAEgBIAAAAIABgBIAFgDIABAAIAFgGIABgBIABgBIAAAAIABgCIAAgDIgBgBIgBgBIgBgCIAAAAIAAAAIgEgCIgBAAIgDgBIgFAAIgEABIAAABIgBAAIgCABIgCACIgCAAIgEAFIgDAEIgBACQAAABABgBIgBABIAAABIABAAIAAABIAAABIABABIgBgBg");
	this.shape_15.setTransform(40.6,127.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEA401").s().p("AgZAfQgLgIgBgNQgCgUASgOQATgPATAGQALADAGAKQAGAJgCALQgCAMgLALQgLAJgMADIgBAAIgCABIgGAAQgLAAgHgFgAgQAUIACABIABAAIACABIABAAIACAAIACAAIAFgBQAJgCAIgIQAEgEACgFIAAgBIABgBIABgCIAAgBIAAgDIAAgBIAAgBIgBgEIAAAAIgCgDIgDgDIgCgBIAAAAIgFgBIgHAAIgBAAIgCAAIgCABIgCABIgCAAIgBABIgGAEIgGAFIgBACIgBACIgDAHIAAAIIABACIAAABIACADIABAAIABACQABABgBgBg");
	this.shape_16.setTransform(53,139.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEA401").s().p("AAAAjQgOAAgKgIQgJgHgBgNQgCgVATgOQAJgHALABQAMAAAIAIQAIAGADALQACAJgDAKQgDALgJAHQgJAHgMAAgAgSgFIgCAFIAAAGIABAEIABABIAAABIABABIAAABIABABIACABIABABIADACIAAAAIAFABIABABIAHAAIABgBQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAIADgCIAAAAIABAAIADgDIACgFIABAAIABgHIAAgGIgBgFIgBgBIgCgDIAAAAIgDgDIgBgBIgCgBQABAAgCgBIgEgBIgFAAIgEABIgCABIAAAAIgBAAIgDADIgBAAIgDADIAAABIgBABIgBABIgCAEIABgBIgBABg");
	this.shape_17.setTransform(97.2,150.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEA401").s().p("AgJAfIgCAAIAAgBQgOgEgHgHQgGgJACgKQADgQATgKQAUgKASAMQAMAJABAMQABAIgIALQgHAJgMAEQgHADgGAAIgHgBgAgMAQIAFABIACABIAAAAIABAAIAEAAIAFgCIACAAIAGgDIABgBIABgBIAEgEIAAAAIABgBIACgEIAAAAIABgCIAAAAIAAgEIgBgBIAAgBIgBgCIgDgDIgHgDIAAgBIgEgBIgBAAIAAAAIgDAAIgCAAIgBAAIgGACIgBAAIABAAIgCABIgFADIgFAFIgDAEIgCAEIAAACIACAFIACACQACABgBgBg");
	this.shape_18.setTransform(119.9,162.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEA401").s().p("AgTAbQgKgHgEgMIAAAAQgEgJAFgKQAEgKAJgFQAJgGALABQAPABAIAGQAIAGADAKQACAIgDAJQgFALgGAEQgHAHgOACIgCAAQgKAAgJgGgAgSAIIABACIABABIAEAEIADACIABAAIAAAAIAEABIABAAQADABACgBIACAAIAFgBIADgCIABgBIABAAIACgDIACgBIABgDIABgCIAAABIAAgBIABgDIAAgCIABAAIAAgDIgBgBIAAgCIAAgBIgBgBIgBgBIAAAAIgDgDIgDgCIgBAAIAAgBIAAAAIgIgCIgEAAIgDAAIgBAAIgGACIgBAAIgBABIgCABQgBABABgBIgCADIgBAAIAAAAIgBABIgBADIAAAAIgBACIAAACIAAAEIAAACIABACIAAAAg");
	this.shape_19.setTransform(12.9,83.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEA401").s().p("AgRAcQgPgIACgUIAAgCIAAAAQADgMAIgIQAJgIAKgBQALAAAJAHQAJAHACALQACAQgQANQgHAGgIACIgGABQgGAAgHgEgAgPgEIAAABIAAAAIgBADIAAAHIABADIAAABIABABIADADIABABIABAAIAEABIAEAAIABAAIACgBIgBAAIAFgCIABgCIADgCIACgCIAAAAIAAAAIABgCIACgEIAAAAIACgEIAAgDIgBgBIAAgBIAAgBIgBgBIgGgFIgCgBIgBAAIgCgBIgEAAIgEABIgEACIAAAAIgBABIgDADIAAABIAAgBg");
	this.shape_20.setTransform(22.7,42.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEA401").s().p("AgFAZQgLgCgHgGQgHgFgBgJQgCgJAFgHQAKgNASACQAUABAIAMQAJALgHAKQgEAIgMAFIgBAAIgBAAQgGACgGAAIgFAAgAgPAFIACACIADACIAAAAIAGACIAEAAIACAAIABAAIACAAIABgBIADAAIABgBIABAAIACgBIACgBIABgBIgBAAIACgCIABgBIABgBIAAgBIgBgBIAAgBIgBgCIgBAAIgBgCIgFgCIgEgCIgDAAIgGgBIgEABIgBAAIgEABIgCABIgCACIAAAAIAAABIgBADIAAACIAAAAIAAACIACACIAAAAIAAAAg");
	this.shape_21.setTransform(131.6,100.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_22.setTransform(6.7,175.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_23.setTransform(134.2,168);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_24.setTransform(137.6,167);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_25.setTransform(132.9,164.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_26.setTransform(24.8,143.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_27.setTransform(100.2,89.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_28.setTransform(27.7,173.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_29.setTransform(23.7,172.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_30.setTransform(27.8,168.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_31.setTransform(100,181.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FEA401").s().p("AgBAHIgCgBIABAAIAAAAIgBAAIgBgBIgBgBIgCgDIgBgBIABgCQAAgBABAAQAAAAAAgBQAAAAAAAAQABAAAAgBIACgBIADgBIABAAIAAABIADABIAAAAIACABIACAEIAAABIgBADIgBACIgCABIgDABg");
	this.shape_32.setTransform(95.7,170.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_33.setTransform(92.6,167.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_34.setTransform(104.7,164.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_35.setTransform(48.7,49.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_36.setTransform(54.5,53.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_37.setTransform(19.9,59.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_38.setTransform(19.9,64.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_39.setTransform(19.5,89);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_40.setTransform(17,93.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_41.setTransform(65.2,63.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_42.setTransform(68.3,67.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_43.setTransform(31.5,138.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_44.setTransform(25.6,136.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_45.setTransform(24.3,112.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_46.setTransform(29.9,111.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_47.setTransform(92.1,136.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_48.setTransform(89.2,132.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_49.setTransform(132,184);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_50.setTransform(116.8,103.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_51.setTransform(38.7,45.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_52.setTransform(43.2,39.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_53.setTransform(81,96.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_54.setTransform(79,91.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FEA401").s().p("AgUAdIgCgBIAAAAQgHgFgBgLQgBgIAEgJQAJgTANgGQAIgEAIACQAKADAGALQAFAKgCAKQgCAMgIAIQgJAIgLACIgHABQgIAAgFgEgAgDgOIgDACIgCADIgBABIgEAIIgCAGIAAABIgBADIAAABIABADIAAABIABACIABABIACAAIAAABIADAAIABAAIACAAIABAAIAEgBIABgBIABAAIAAAAIAGgDIACgDIACgBIABgBIAAAAIAAgBIABgCIABgBIABgFIAAAAIABgBIAAgEIgBgBIgBgDIAAgBIgBgCIgBgCIgBAAIgBgCIgBgBIgCgBIAAAAIgBAAIgBgBIgCAAIgBABIgCAAIgDADIAAAAg");
	this.shape_55.setTransform(103,110.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FEA401").s().p("AgWAWQgJgHgBgJQgBgKAGgJQAGgJAKgDQAIgDAHABQAWACAGAPIAAAAIAAABIAAABIABABQACAIgGAJQgGAJgLAFQgJAEgHAAQgJAAgJgGgAgQAIIAAABIABAAIAAABIAGADIADAAIACAAIADAAIABAAIADgBIAFgCIADgCIABgBIAEgDIAAgBIABgBIABgBIAAgBIAAAAIABgCIAAgBIAAgCIgBgBIAAgBIgCgBIgBgBIABAAIgBAAIgCgBIgBgBIABABIgHgCIgBAAIgBgBIgGAAIgBABIAAAAIgGABIgCABIAAAAIgCACIgEAGIgBAEIAAACIABADIAAgBg");
	this.shape_56.setTransform(115.4,94.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FEA401").s().p("AgLAhQgJgDgEgIQgFgKAAgLQAAgLAGgKQAGgLAKgCQAKgCAMAHIACACQAKAHACAJQADAKgEAIQgHARgRAHQgEACgEAAIgHgBgAgIgRIgCACIAAABIgDAFIgBAEIgBACIAAAKIABACIABAEIAAABIABABIABABIAAABIABABIABAAIAAABIACAAIAAABIABAAIADAAIAFgCIAEgDIAFgFIABgBIACgDIACgFIAAgBIAAgBIAAgDIgBgEIgCgDIgCgDIgBAAIgCgCIgDgBIgBgBIAAAAIgDgBIgBAAIgEAAIgBAAIAAAAIgBABIgBABIgBAAg");
	this.shape_57.setTransform(74.6,129.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FEA401").s().p("AgPAZQgHgEgEgGQgEgIADgKQABgJAJgHQAIgHAIgBQAIgCAJAFQAHAFADAIIABACQADAJgCAJQgCAKgIAGQgGAEgLAAQgHAAgJgEgAgJAMIABABIADAAIADABIAIAAIADgBIABAAIACgCIABgBIABgBIAAgDIAAgBQABgDgBgCIAAAAIAAgCIgBgDIAAgBIgBgCIgBgBIgBgBIgBgBIAAgBIgBAAIgBgBIgBAAIgBAAIgBAAIgBgBIgCABIgCAAIgBABIgEACIgBAAIgEAEIgBACIgBACQgBABABgBIgBADIAAAAIAAACIAAACIAAABIAAgBIABAEIABABIAAgBg");
	this.shape_58.setTransform(88.8,102.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FEA401").s().p("AgHAXQgHgCgEgGQgEgHABgIQABgHAGgHQAFgHAIgBQAIgBAFADQAGADADAJIAAABIABADQACALgKAKQgJAHgHAAIgFgBgAgFAIIABABIABAAIAAAAIABAAIAAAAIACAAIABgBIACgBIACgCQACgCgCACIABAAIACgFIAAAAIAAgDIAAAAIgBgCIgBgBIAAgBIgBgBIgBgBIgCAAIgCABIgBABIgBAAIgCADIAAABIgBABIgBABIAAABIgBAAIAAAEIABAAIAAADIAAgBg");
	this.shape_59.setTransform(82.7,73.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FEA401").s().p("AgPAYQgKgGgDgJQgCgIAGgJQAFgKAEgEQAIgFAHAAQAUABAHAPQADAIgCAHQgBAIgHAHIAAABQgHAHgKABIgDAAQgIAAgHgEgAgIgIIgFAIIAAAAIAAAAIAAABIgBADIABADIAAABIAAAAIABAAIAAABIAGAEIADAAIABABIADAAIABgBIADAAIABgBIABAAIABgBIAEgEIACgDIAAAAIAAgBIABgDIAAgCIgCgEIgBgBIgBgCIgCgBIgCgBIAAAAIAAAAIgCAAIgDgBIgBAAIgBgBIgCAAIgCABIABAAIgBAAIgDADIAAAAg");
	this.shape_60.setTransform(65.5,95.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FEA401").s().p("AgLDIQgZgpgJg2IgEgbQgCgOACgLQgXAhgqAVQgyAXgdgYQgQgNAHgYQAFgSAQgUQAOgOAVgLQAKgGAcgLQgmgDgrg3Qgvg8AmgeQAegZArAaQAYAPAoAjQgSgtAcgyQAdg1AuARQA3AUgPA6QgLApgeAdQAggWArAFQAyAHAlAlQAaAaAEAXQAFAbgcAUQgVAQgeADQgVACghgFIgqgIQAUAGATAiQASAgAGAfQAGAfgKAcQgLAhgbAHQgIACgHAAQgjAAgbgsg");
	this.shape_61.setTransform(46.2,78.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FEA401").s().p("Ag6CkQAKg4AZgpQgbAXgcAPQgWALgbAGQgfAHgUgGQgYgHgHgfQgGgaAJgaQAQgtBDgSIAdgJQAQgFAOAAIAQABIAQAAQgLgRgJghQgFgVgDgPQgHgoAGgaQAJgmAlgCQAPgBAPAPQAJAIAQASQALALAQApQASAvgIAUIAJgXQAEgQAFgIQATgeAUgLQAMgIAPACQAOABALAJQAQAMAGAQQAFANgBAWQAAAogYAjQgXAjglAQQAWARAOAaQAIARAEALQAKAigIAXQgPAugzgdQgwgcgGgnQgFAxgLAbQgHARgSARQgUATgSAAIgBAAQgxAAANhIg");
	this.shape_62.setTransform(111.5,63.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FEA401").s().p("AAFDLQgJgDgLgOQgJgLgGgNQgDgFgEgMIgGgRIgPALQgJAIgGADQgSAKgQAEQgRAEgPgJQgOgJgHgRQgRgoAYgaQAKgKAVgGIAjgKIAbgMQgVAJgigFQgngGgagfQgaghAOgkQAPgjApgDQAYgBAeAPQAYANAVATQgMgLABgYQABgTAIgSQAUgwAhgOQAugSAQAgQASAjgHA1QgCAKgKAYQgEAKACACQACABAKgBQASgCAXAHQAWAHAPAMQARAMAJAQQAKASgBATQAAATgQAPQgOANgTAGQglAKgugqQAUAUAAAoIgBAcIgDARQgEANgIAIQgNAMgRAGQgLADgJAAQgIAAgHgDg");
	this.shape_63.setTransform(126.9,134.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FEA401").s().p("AhmDWQACgUAIgTQAIgTAKgLQgPAMghAHQghAGgfgEQhQgKAcg5QAQgiAngGQAPgCATADQAQABAYgDQATgCAGACQgSgIgWgPQgQgIgFgFQgIgGgHgMIgMgTQgQgeAKgcQASgyA8ATQAxAQAhAmQgOgtATg7QAUhDAxAIQAyAIgGBFQgBAZgWBOQANgrAzgRQA0gSAjAdQAjAdgrAzQgiAmguAXQAvAEAnA0QAqA4gtAgIgEADQgZAPghgLQgogNg0g4QALAggdApIhDABIhWgBg");
	this.shape_64.setTransform(60.4,169.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FEA401").s().p("AhLCxIgKgKQgJhwgLixIABgCQAggzAkgQQA8gbgKBOQgJA/gbAsQAagSAvAFQAzAGADAjQADAegvAQQgWAIgzAHQAhARAJAiQAIAdgOAcQgOAcgaAGIgLABQgYAAgYgWg");
	this.shape_65.setTransform(10.6,120.4);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(2.6,30.3,127.8,112.4), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArHDtQAAh+AehxQAkiGBEhGQBAg/CYghQCJgdC3AAQDQAAC2AjQC6AkA4A2QBPBNAbC0QAPBmAACzg");
	mask.setTransform(71.3,121.9);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape.setTransform(88,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_1.setTransform(101.2,20.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_2.setTransform(86.8,21);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEA401").s().p("AgVARQgGgFAAgJQgBgHAFgHQAJgNARABQATABAGARQACAJgFAHQgFAGgJAEIgCAAIAAABQgHACgFAAQgKAAgIgHgAgJgFIgCABIgBADIgBACIAAADIABACIABABIADABIADABIAGAAIAFgBIAAAAIAAgBIACAAIADgCIACgCIABgBIAAgCIAAgBIgBgBIAAgBIgBgCIgBgBIgDgCIAAAAIgBAAIgCgBIgBAAIgEAAIgBAAIgBAAIgCABIgBAAIAAABIgDABIgBABIABgBg");
	this.shape_3.setTransform(122.6,147.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEA401").s().p("AgLAWQgNgJABgPQABgJAFgGQAFgGAJgCQAIgBAHAEQAGAFADAIIABACIAAAAQADAHgBAHQgCAIgFAGQgFAFgJAAQgHAAgHgEgAgFgJIgBACIgCACIAAABIAAACIAAADIAAADIACADIABABIAAAAIABABIABABIACABIABABIABAAIADAAIACgBQABAAgCABIABAAIABgBIABgBIAAgBIABgBIAAAAIAAgBIABgDIAAgEIgBgDIAAgBIgBAAIAAgCIgDgEIgCAAIAAgBIgBAAIgCAAIAAAAIgCABIgBAAIgCABIAAAAIAAAAIAAAAgAAKAFIAAgBIAAAAIAAAAIAAABg");
	this.shape_4.setTransform(71.6,20.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_5.setTransform(60.8,84.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_6.setTransform(55.6,85.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_7.setTransform(79.7,80.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEA401").s().p("AgDAHIAAAAIgBABgAAFgHIAAAAIAAABg");
	this.shape_8.setTransform(35.8,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEA401").s().p("AgQAcIgBAAIAAAAQgNgGgDgLQgCgLAGgJQAEgJAKgGQAHgEAIAAQAUgBAJALQAHAHgCAKQgCAIgJAJQgIAIgLADQgFACgGAAIgJgBgAgTAIIABABIAAAAIABACIABABIABABIACABIAAAAIABAAIABABIAHAAIACgBIADgBIACgBIACAAIAGgEIAFgFIAAgBIACgBIABgDIABAAIAAgCIAAgCIAAgBIAAAAIgBgBIAAgBIgBgBIgEgCIAAAAIgGgCIgBAAQABAAgCAAIgIAAIgBAAIgCABIAAAAIgBAAIgBABIgDACIgBABIgCABIgBABIgBABIAAABIgCADIgBABIAAABIAAAAIgBABIAAACIAAADQAAACAAgBg");
	this.shape_9.setTransform(59.7,9.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEA401").s().p("AgJAYQgJgDgEgIQgIgNAHgMQAIgPAUADQAIABAHAGQAGAHABAIQACAJgEAHQgGAIgKACIAAAAIgJACQgFAAgEgCgAgKAGIABABIACACIABABIABAAIADABIAAAAIABAAIADAAIABAAIACAAIACgBIABAAIADgCIAAgBIABgBIABgBIABgCIAAgDIgCgDIgBgCIAAAAIAAABIgCgDIgBgBIgDgBIgDgBIgEAAIgDAAIgBABIgCABIgCACIgBACIgBACIAAABIAAACIABACIAAABIAAABIAAgBIAAABIAAAAgAgFALIgBgBIAAAAg");
	this.shape_10.setTransform(27.6,152.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEA401").s().p("AgTAYQgRgMAAgRQAAgJAHgHQAIgHAMgBQAJgBALADQALAFAHAHQAIAIgBAJQAAAMgMAIIgCABIgBABQgJAGgLAAIgBAAQgKAAgJgGgAgLAMIAFADIAGABIADAAIAGgBIgBAAIACAAIAFgDIAAgBIAEgDIAAgBQAAABABgBIABgCIABAAIgBgBIABgCIAAgBIAAAAIAAgBIAAAAIgBgCIAAABIAAgBIgBgCIAAAAIgBAAIgBgCIgCgCIAAABIAAgBIgIgEIgBgBIgGgCIgCAAIgBAAIgHAAIgBAAIgFABIAAAAIgDACIAAAAIgCACIAAAAIgBACIAAABIgBABIAAADIACAEIACADIABABIAAABIAFAFIAAAAg");
	this.shape_11.setTransform(16,131.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEA401").s().p("AgDAfIAAAAQgPAAgIgHQgHgGAAgKQAAgPAQgNQARgPARAHQANAFADALQADAJgFAKQgFAKgJAHQgKAGgJABIgBAAgAgOgDIgDAFIgBABIAAADIgBABIAAACIABABIAAABIAAABIACACIAFACIADAAIAHAAIABAAIADgBIABgBIABAAIACgBIACgBIAAgBIABAAIADgDIACgCIAAgBIAEgGIABgEIAAgBIAAgBIAAAAIAAAAIAAgCIgBgBIgCgCIgCgBIgCgBIABAAIgDgBIgBAAIgEgBIgCABIABAAIgEAAIgBABIAAAAIAAAAIgDABIgEADIAAAAIAAABIgDACIgDADIAAABQgBABABgCgAAUgHIAAAAIAAAAg");
	this.shape_12.setTransform(34.1,123.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEA401").s().p("AgYAbQgMgIAAgOQAAgKAHgJQAHgIAKgFQATgJAQAHQAJAFAEALQADAKgDAJQgDALgLAIQgJAGgLABIgCABIgBAAIgCAAQgMAAgJgGgAABATIABgBIAHgCIAGgDIAEgEIABgBIACgEIAAAAIABgCIAAgCIAAgDIAAgCIAAgDIgBgCIAAABIgCgEIgCgCIgCgBIgBAAIAAAAIgDgBIgBAAIgDgBIgDABIgCAAIgIACIAAAAIgGAEIgGAGIgDAEIgBABIAAABIgBABIAAAFIABACQABABgBgBIABACIABABIABABIABABIAAABIAFACIAGACIAGAAIAAAAIABAAg");
	this.shape_13.setTransform(36.7,70.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEA401").s().p("AgNAWQgJgEgFgJQgFgJACgJQACgIAIgFQAHgEAJAAQATAAALAPIABABQAHAKgDAKQgCAJgJAEQgIAEgHAAQgIAAgKgFgAgJAIIADACIACABIAFABIAHAAIAFgBIgBAAIADgBIAAgBIABAAIABgBIAAgBIABgCIAAgBIgBgEIAAAAIgDgDIAAgBIgBgBIgBgBIgBgBIAAABIgDgCIgDgCIAAAAIgFgBIgBAAIgCgBIgEABIgBAAIgDABIgBAAIgBAAIAAAAIgBABIgCACIAAABIgBABQAAAAAAABQAAAAAAAAQAAAAAAgBQABAAAAAAIAAADIAAACIABAAIAAAAIABADIABACIADADQABABgBgCg");
	this.shape_14.setTransform(120.9,2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEA401").s().p("AgIAbIgCAAIAAAAQgMgDgGgIQgFgIADgIQAFgRASgHQAJgDAIABQAKACAHAHQAHAHgDAKQgBAIgHAHQgMAMgOAAIgFAAgAgOAKIABABIACABIABAAIADABIAFAAIAFgBIAHgEIAFgGIgBABIABgBIABgBIABgBIAAAAIABgCIAAgDIgBgBIAAgBIgCgCIgEgCIgBAAIgDgBIgFAAIgCABIgCABIgBAAIAAAAIgCABIgDACIgFAFIAAAAIgBABIgCACIAAABIgBADIAAABIABACIAAgBIAAABIAAABIACABIAAAAg");
	this.shape_15.setTransform(45.1,97.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEA401").s().p("AgYAfQgLgHgCgOQgCgUATgPQASgOATAFQAMADAFAKQAGAKgCALQgCAMgLAKQgKAKgNADIgCAAIgIABQgJAAgHgFgAgUAQIABABIACACIABABIABAAIAFACIAFAAIAEgBIABAAQAJgCAHgJIAHgJIAAAAIAAgBIABgCIAAgCIAAgEIgBgEIAAgBIgCgDIAAABIAAgBIgBgBIgBgBIAAAAIgBAAIgCgBIgFgCIgHABIgBAAIgGACIgBAAIgBABIgCAAIgEACIgGAHIgDAEIgBABIgBAEIAAACIgBABIAAAFIABAEIABABIgBgBg");
	this.shape_16.setTransform(57.5,111.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEA401").s().p("AgYAbQgIgHgCgOQgBgJAFgJQAEgKAJgGQAJgHALABQAMAAAIAIQAIAGADALQACAJgDAKQgDALgJAHQgJAGgKABIgCAAIgCAAQgNAAgJgIgAgKATIAFABIABAAIAEABIADgBIABAAIAFgBIABgBIADgBIAAgBIADgDIACgEQAAABABgCIABgEIAAgBIAAgHIgBgFIgBgBIgEgGIgBAAIgDgDIgBAAIgEgBIgBAAIgCAAIgCAAIAAAAIgEABIgBABIAAgBIgFADIgEAEIAAABIgBABIgBABIgCAEIABgBIgBABIgCAFIAAAGIABAEIABACIABABIABABIgBAAIABABIACABIAAABIAEACIgBAAg");
	this.shape_17.setTransform(101.7,120.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEA401").s().p("AgKAfIgBAAQgOgEgGgIQgHgJACgKQADgRATgJQAUgKASAMQANAIAAAMQACAJgJAKQgHAKgLAEQgIADgGAAIgIgBgAgVAIIAAABIADADIAFADIAHACIABAAIAFAAIAFgBIADgBIAFgDIACgBQgBABABgBIAFgFIgBAAIABgBIABgBIACgDIAAgCIAAgDIAAgCIgBgBIgBgBIAAgBIgCgCIgBgBIgFgCIgBAAIAAgBIAAABIgDgCIgCAAIgGAAIgGACIgBAAIgCABIgDABIgBABIgBABQgBABABgBIgFAEIAAABIAAAAIgDAEIgBADIAAADIAAADIAAgBg");
	this.shape_18.setTransform(124.4,132.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEA401").s().p("AgUAbQgJgHgEgMIAAAAQgEgJAFgKQAEgKAJgGQAKgFAKABQAPABAIAGQAIAGADAJQACAJgDAJQgFALgGAEQgIAHgMACIgDAAQgMAAgIgGgAgSAIIACADIAEAEIADACIADABIACAAIABAAQADABACgBIABAAIABAAIAFgBQACgBgBAAIACgBIABgBIAEgDIADgGIABgDIAAgCIABgCIAAgBIAAAAIgCgEIABAAIgBgBIgCgDIgBgBIgBAAIgDgCIgBAAQABgBgBAAIgIgCIgBAAIgDAAIgDAAIgBAAIgGACIgBAAIgBABIgCABQgBABABgBIgDADIgBABIgBADIAAABIgBABIAAACIAAAEIAAACIABABIAAABIAAAAg");
	this.shape_19.setTransform(17.3,53.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEA401").s().p("AgQAcQgRgIAEgWIAAgBQACgKAJgIQAJgJAKAAQAKgBAJAHQAKAHABALQACAPgPAOQgIAGgHACIgGAAQgHAAgGgDgAgOgDIgCAEIAAAFIABABIABADIAAABIABABIAAABIACACIACABIAAAAIADABIABAAIAFAAIADgBIgBAAIABAAIABgBIAEgCIgBAAIABgBIADgCIADgEIABgDIABAAIAAgBIAAAAIABgCIAAgFIAAgBIAAgBQgBABAAgCIgBgBQgCgEgDgBIgDgBIAAAAIgCgBIgBAAIgEAAIgDABIAAAAIgEACIAAABIAAgBIgBABIgDADIAAAAIAAABIgDAEIAAAAg");
	this.shape_20.setTransform(26.8,12.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEA401").s().p("AgFAZQgKgCgIgGQgHgFgBgJQgCgJAFgHQAJgMATABQAUACAIALQAJAKgHALQgEAJgNAEIgBABQgGABgGAAIgFAAgAgQgFIgBABIAAACIAAACIAAABIAAACIABABIABABIAAAAIACACIADACIAFABIABAAIABABIAHAAIABgBIABAAIAEgBIABAAIACgBIACgCIABAAIgBAAIACgCIABAAIAAgBIABgCIAAgBIgBAAIAAAAIAAgBIgBgBIAAgBIgBAAIAAgBIgBgBQgDgDgCAAIABABIgCgBIgDgBIgDgBIgKAAIgBABIgDAAIgBABIgCABIAAAAIgBABIgBAAg");
	this.shape_21.setTransform(136,70.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_22.setTransform(11.3,146);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_23.setTransform(138.8,137.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_24.setTransform(142.2,136.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_25.setTransform(137.5,134.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_26.setTransform(29.3,113.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_27.setTransform(104.6,59.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_28.setTransform(32.3,144);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_29.setTransform(28.3,142.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_30.setTransform(32.4,138.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_31.setTransform(104.6,151.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FEA401").s().p("AgBAHIgBgBIABAAIABAAIgCAAIgBAAIgBgBIgBAAIgCgDIAAgCIAAgDIACgBIACgCIADAAIABAAIADABIAAAAIACACIAAAAIACACIAAABIgBAEIgBABQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgDAAg");
	this.shape_32.setTransform(100.3,140.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_33.setTransform(97.2,137.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_34.setTransform(79.6,121.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_35.setTransform(63.6,99.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_36.setTransform(118.9,117.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_37.setTransform(109.3,134.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_38.setTransform(52.9,19.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_39.setTransform(58.7,23.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_40.setTransform(24.2,29.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_41.setTransform(24.2,34.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_42.setTransform(23.9,59.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_43.setTransform(21.4,63.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_44.setTransform(69.5,33.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_45.setTransform(72.6,37.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_46.setTransform(36,108.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_47.setTransform(30.1,106.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_48.setTransform(28.7,82.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_49.setTransform(34.3,81.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_50.setTransform(96.6,106.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_51.setTransform(93.7,102.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_52.setTransform(136.6,153.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_53.setTransform(121.2,73.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_54.setTransform(43,15.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_55.setTransform(47.5,9.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_56.setTransform(85.4,66.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FEA401").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_57.setTransform(83.3,61.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FEA401").s().p("AgEAcQgMgDgIgIQgKgIAAgJIAAgCIAAgDQADgPAVgGQARgEAPAHQAJAEADAJQADAJgDAIQgEALgMAGQgIAEgIAAIgGAAgAgJgLIgFACIgCABIgCACIgBACIgBABIAAAAIAAABIAAACIAAAAIABABIABACIABABIACACIACACIABABIAHAEIAEABIACAAQAIABAGgFIAFgGIABgEIAAgFIAAgBIAAABIgBgCIgCgCIgDgCIgBAAIgGgCIgHAAIgDAAIgCAAg");
	this.shape_58.setTransform(106.9,86.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FEA401").s().p("AgWAWQgJgGgBgJQgCgKAHgKQAFgJALgEQAFgBAKAAQAWACAGAPIAAABIABABQACAIgHAKQgGAJgKAFQgJAEgHAAQgKAAgIgGgAgPAJIABABIAAAAIACACIACAAIABAAIADABIAGAAIADgBIABAAIABgBIADgBIADgDIAAABIABgBIABgBIACgDIACgBIABgCIAAAAIABgCIAAgCIgBgCIAAABIAAgBIgBgBIAAgBIgBgBIgCgBIgBAAIgBgBIABAAIgHgCIgKAAIgFACIAAAAIgCABIAAAAIgCACIgEAFQgBADAAACIAAACIAAACIABACQABACAAgCg");
	this.shape_59.setTransform(119.8,64);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FEA401").s().p("AgLAiQgIgCgFgKQgFgJAAgMQAAgLAFgJQAIgLAJgCQAJgEANAJIABAAQAKAHADALQADAJgEAJQgHARgRAHQgEABgFAAIgGAAgAgNAOIACADIABABIAEACIADAAIADgBIABAAIABgBIADgCIABgBIAFgEIAAgBIAAAAIADgEIACgGIAAgCIgBgFIAAgBIAAABIAAAAIgBgCIgBgBQABABgBgCIgFgEIgFgDIABAAIgEgBIgEAAIgCABIAAAAIgBABIgBAAIAAABIgCACIgCACIgBACIAAABIgBAEIgBADIAAAAIAAAIIAAABIACAHIAAgBg");
	this.shape_60.setTransform(79.1,99.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FEA401").s().p("AgPAZQgHgDgEgHQgEgJADgJQACgJAHgHQAIgHAJgBQAJgCAHAFQAIAEAEAKIAAABIAAABQADAIgCAJQgCAKgIAGQgFAEgMAAQgJAAgHgEgAAFAPIABgBIABAAIACAAIACgCIABgBIABgCIABAAIAAgDIABgBIAAgEIAAgBIgCgGIgCgDIgBgBIgBgBIgBgBIABABIgCgCIgBAAIgBAAIgEAAIgCABIgBAAIgGAEIgDACIAAABIgBACIgCAEIAAAEIABAEIABABIABABIACABIAEACIADAAIABAAIAGAAg");
	this.shape_61.setTransform(93.2,72.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FEA401").s().p("AgHAXQgHgCgEgHQgEgGABgHQAAgJAIgIQAGgGAGAAQAHgCAGAEQAGAFADAHIAAABIABACQACAMgLAKQgHAHgHAAIgGgBgAgGAGIAAABIABABIACABIABAAIABAAIADgCIABAAIAAAAIACgCIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIgBgBIAAgBIAAgBIgBgBIgBgCIgBAAIgBAAIgBgBIABABIgBgBIgBABIgBAAIgCABIAAAAIgDADIgBACIAAABIgBABIAAAEIABADIAAgBg");
	this.shape_62.setTransform(87,43.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FEA401").s().p("AgPAYQgJgFgDgJQgCgJAFgJIAEgHIAGgGQAGgGAIAAQAUABAHAPQADAIgBAIQgCAIgGAGQgHAIgLABIgDAAQgIAAgHgEgAgGANIADABIAGAAIAEgCIABgBIABAAIADgDIAAAAIAAgBIACgDIABgDIAAgDIgCgFIgCgCIgEgCIAAAAIgFgBIgEAAIgBAAIgBAAIAAABIgDACIgFAIIAAABIgBABIgBACIAAABIAAACIABABIAAAAIAAABIADADIAEACIgBgBg");
	this.shape_63.setTransform(69.9,65.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FEA401").s().p("AgJDIQgagpgJg2IgEgaQgCgPACgLQgXAigqAUQgyAYgcgYQgRgNAHgYQAFgSAQgUQAOgOAUgMIAmgQQglgEgsg3Qgvg7AmgeQAegZArAaQAZAPAnAjQgSguAcgyQAdg0AuAQQA3AUgPA6QgKApgfAdQAggWArAFQAzAGAlAmQAaAaAEAXQAEAbgbAUQgVAQgeADQgWACgggFQgRgCgYgGQATAHATAhQASAgAGAfQAGAfgJAcQgMAhgbAHQgIACgHAAQgjAAgagsg");
	this.shape_64.setTransform(50.5,48.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FEA401").s().p("Ag6CkQAKg5AZgoQgaAWgdARQgWALgbAGQgfAHgTgGQgZgHgHgfQgGgbAJgaQAQgrBCgUIAdgJQARgFANAAIAQABIARAAQgMgTgIgfQgGgVgCgPQgIgoAHgaQAIglAlgDQAPgBAPAPQAJAIAQASQAMALAQApQASAvgIAUIAIgYQAEgPAGgIQASgdAUgNQANgHAOABQAOABAMAJQAPAMAGAQQAFANAAAWQAAAogYAkQgXAiglAQQAWARAOAaQAIARAEAMQAKAggIAYQgPAvgygdQgxgcgGgnQgFAwgLAbQgGASgTARQgTATgSAAIgBAAQgwAAALhIg");
	this.shape_65.setTransform(115.8,33.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FEA401").s().p("AhjChQgPgIgGgTQgFgRAEgSQAGgiA2gUQgZAIgggRIgXgMQgIgFgEgEQgJgKgCgIQgFgPADgRQADgSALgKQANgMAjAAQALAAAWAEQAAgFgDgLQgCgLAAgGQAAgXACgLQAEgPAOgIQANgHARABQAnADAKAdQAEANgEATIgHAgIgBAdQABgVASgbQAVgcAlgIQAmgHAXAaQAXAbgQAiQgJAUgZASQgUANgYAJQANgFATAKQAPAJAMAOQAeAjgDAiQgFAtgfAAQgkAAgpgdQgGgFgQgTQgGgHgDABQgBABgEAJQgGAPgOAQQgPAPgPAHQgSAIgQABIgDAAQgRAAgOgIg");
	this.shape_66.setTransform(116.7,92.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FEA401").s().p("AhmDWQACgUAIgTQAIgSAKgMQgPANghAGQghAGgfgDQhRgKAcg5QAQgjAngFQAOgCAUACQAKABAegCIANgCQAIgBAFACQgVgJgTgNQgQgJgGgFQgIgGgHgLIgLgTQgRgfAKgbQASgyA8ATQAxAPAiAmQgOgtASg7QAUhDAxAIQAxAIgFBFQgBAWgVBQQAMgrA0gRQAzgRAjAdQAjAcgrAzQghAnguAXQAvADAnA1QAqA4gsAfIgFADQgZAPghgKQgqgOgyg4QALAhgdApIhCABIhXgBg");
	this.shape_67.setTransform(65.7,140.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FEA401").s().p("AhOCxQgdgHgOgmQgDgHgBgHQAyh2BAiTIAAgBIACgBQAzgfAnACQBDAEgtBBQglA1gtAaQAhgEAnAaQArAbgNAhQgMAdgxgHQgZgEgvgRQAWAfgHAhQgGAegZATQgTANgTAAQgHAAgHgCg");
	this.shape_68.setTransform(12.6,107.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(0.1,88.7,142.4,66.4), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#74DDE8").s().p("AhmCnQgKAAgHgHQgHgHAAgJIAAggQgrgSgYgxQgXguAAg/IAAhOQAAgKAHgHQAHgHAKAAIGCAAQAKAAAGAHQAHAHAAAKIAABOQAAA/gXAuQgYAxgrASIAAAgQAAAJgHAHQgGAHgKAAg");
	this.shape.setTransform(1003.9,811.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E98B6F").ss(1.6,1,1).p("AgHgfQAVAMgEAOQgDAKgRAMQABAKgBAF");
	this.shape_1.setTransform(1041.6,812.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E98B6F").ss(2.2,1,1).p("AAQgOQgJABgLANQgIAJgDAG");
	this.shape_2.setTransform(1048.6,815.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FEB992").ss(2.2,1).p("AgXgBQALADAMAAQAJAAAPgD");
	this.shape_3.setTransform(1038,819.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E98B6F").ss(2.2,1,1).p("AgegPQAEAGAVALQAWAMAOAC");
	this.shape_4.setTransform(1035.5,812.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEB992").s().p("AgNA7QgMgDgMgIQgPgKgDgKQgGgRASgTQgHgKABgLQABgGAGgMQAKgWAYAKQACABAMASQANARAMAFQAXAMADAQQADAQgPAKQACAXgYAEIgJAAQgMAAgPgEg");
	this.shape_5.setTransform(1035.8,810.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E98B6F").ss(2.2,1,1).p("Ag5gaQAJAaAfAPQAiASApgK");
	this.shape_6.setTransform(1048.2,808.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEB992").s().p("AAoBGQgUgFgWgrQgWgpgKgCQghAAgTgBQgkgDABgQQAAgLAWgJQAYgKAqgBQA/gBBTBHQAHAFACAPQACAQgHAOQgNAZgjAAQgNAAgQgDg");
	this.shape_7.setTransform(1042.5,803);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5ACBD1").ss(4.5,1).p("AhrhWICfAAQAaAAARAZQARAYgGAeQgJApgdAaQgdAbglAAIhtAA");
	this.shape_8.setTransform(1027.4,810.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4A67F").s().p("AARAoQgSgDgMgFQgVgKgBgNQgXgHABgSQABgKAJgHQALgIAOACQArAFATALQALAGACAIQABAFgDAJIAGAKQAEAMgKAIQgHAFgPAAIgMAAg");
	this.shape_9.setTransform(1036.2,818.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEB992").s().p("AhQBoQgPgGgLgaQgLgYgBgVQgBgUAcgwQAbgzAPgBQAVgBAOgUIBBAkQBCAqACAdQACAYgPAXQgTAfgtAWQglARgVAEIgSABQgYAAgWgLg");
	this.shape_10.setTransform(1048.4,810.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEA400").s().p("AkBAJIH0hcIAPBKIn3BdQgJgvgDgcg");
	this.shape_11.setTransform(1201.5,814.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D72E4E").s().p("AkJAeQACi3A+hUQA0hFAtgNQA4gPBOA2QBXA9BDCgQA0B9AeCiIn3BfQgdieABiHg");
	this.shape_12.setTransform(1200.6,791);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFE98").s().p("AgYATQgXgQgDgPIBkgTQADASgGASQgJAXgTADIgIABQgQAAgTgNg");
	this.shape_13.setTransform(1212.2,818.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEFE98").s().p("AgcATQgSgQgEgQIBkgTQADARgLAUQgMAXgUAEIgGABQgQAAgQgOg");
	this.shape_14.setTransform(1202.1,820.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEFE98").s().p("AghATQgNgPgDgSIBjgTQADAQgPAXQgRAYgUADIgFABQgQAAgNgPg");
	this.shape_15.setTransform(1192,822.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFE98").s().p("AgYATQgZgOgDgQIBkgTQAIAVgFARQgFATgUAEIgLAAQgSAAgVgMg");
	this.shape_16.setTransform(1222.5,816.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFE98").s().p("AgnAWQgLgPAAgWIBkgTQADARgRAWQgTAZgYAEIgIABQgOAAgKgNg");
	this.shape_17.setTransform(1181.9,824.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#E98B6F").ss(0.9,1,1).p("AgVglQAQAQANAYQANAXABAM");
	this.shape_18.setTransform(1230,892.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#E98B6F").ss(0.9,1,1).p("AgcgtQANAKAUAiQAWAiACAN");
	this.shape_19.setTransform(1227.3,894.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#E98B6F").ss(0.9,1,1).p("AgigzQANAIAaApQAcAoACAO");
	this.shape_20.setTransform(1223.9,895.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEB992").s().p("AA4BzQgqg/gxgpQgNgKgIABQgJACAQAWQAxBDgQANQgNAKgKgEQgPgHgcgoQghgugKgQQgPgXgGgfQgEgdAZgYQAWgXAZABQAaAAA6AYQBBAaAbAbQAeAmAFAIQANAWABAeQABAUgVAbQgXAbgWAEIgGAAQgMAAgIgMg");
	this.shape_21.setTransform(1219.2,890.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEB992").s().p("AAcGvIgmi0QgJgqg7jwQg5jogMg/QgZiAAEgtQAIhNBIgPQBHgQAqBZQAXAyAVBqQARBZAhDLQAoDxAFBFQAMCqgNC1IhrAEQgGg3gWhtg");
	this.shape_22.setTransform(1200.7,827.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(982.2,758.7,251.8,144.4), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhIDvQAngnAHgnQAKg2g1gvQgPgOg5gkQgsgbghgqQgngyAVg/QAVhCA/AAIFEAAQAtAFAUA3QAXA8g2AmQhEAwgTAjQgZAwArA0QAcAjgVAnQgUAmg4AYg");
	mask.setTransform(26.9,23.9);

	// Layer_3
	this.instance = new lib.Path_0();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(2.5,0,48.8,47.9), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	mask.setTransform(960,540);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#67606D").s().p("AC7FnQgvgSjJhPQjOhQgrgTQgHgDgFgNQgGgNACgHQAxiRBVh9QBniZBugrQBggkBFAeQA/AbAsBSQA3BoggC3QgaCRhDCTQgDAHgNAFQgJAFgGAAIgFgBg");
	this.shape.setTransform(650.9,761.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E98B6F").ss(1.7,1,1).p("AgTgSQAqAGgDAf");
	this.shape_1.setTransform(673.1,833.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E98B6F").ss(1.7,1,1).p("AgWgWQAvAKgCAj");
	this.shape_2.setTransform(682.7,832.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E98B6F").ss(1.7,1,1).p("AgYgaQAxAKAAAr");
	this.shape_3.setTransform(691,830.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E98B6F").ss(1.7,1,1).p("AAaAsQAHgOgBgSQgCgTgOgMQgQgOgfgK");
	this.shape_4.setTransform(699.6,830);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEB992").s().p("AhCApQgSgHgCgRQgBgRALgNQASgYAugEQAggDAdANQAhANAEAXQADAQgTAHQgOAFghADIhHAGIgDABQgHAAgIgCg");
	this.shape_5.setTransform(701.9,831.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEB992").s().p("AiaBKQg0gRgBglQgBgkA0gcQA2gfBagIQA6gFAwARQAdAKA8AjQAXANABAhQABAigZADIjyAcIgWABQgoAAghgMg");
	this.shape_6.setTransform(682.8,829.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E98B6F").ss(1.7,1,1).p("AgsALIAWgHQAcgHAngH");
	this.shape_7.setTransform(638.4,814.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#E98B6F").ss(1.7,1,1).p("AA1g2QgmAEghAfQgmAhAEAp");
	this.shape_8.setTransform(667.1,827.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEB992").s().p("AjkB3Ig+gDQgqgDgagLQhNgfAMhqQAMhsB/AEQAsABBHAQIBxAaQHkBmgCACIgIBlIinAfg");
	this.shape_9.setTransform(650.4,823);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEB992").s().p("AiVGBQhDgQgfguQgjgzAdhKQBJjAAzh+QA9iXAogyQBLhhBsAoQBwApAABYQAAAmgTA/IgtCFQgpB3geBHQgSAqguBbQgZAzhBAVQgjALgkAAQgcAAgcgGg");
	this.shape_10.setTransform(634.4,794.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#706B54").s().p("Egr7AB2IAAjrMBX3AAAIAADrg");
	this.shape_11.setTransform(1019.1,910.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A3986A").s().p("A4JF7IAAr1MAwTAAAIAAL1g");
	this.shape_12.setTransform(1128.3,948.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BAB290").s().p("EgpMAF7IAAr1MBSaAAAIAAL1g");
	this.shape_13.setTransform(1019.1,948.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#515666").s().p("AiqA+IAAh7IFVAAIAAB7g");
	this.shape_14.setTransform(973.7,990.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#515666").s().p("AiqA+IAAh7IFVAAIAAB7g");
	this.shape_15.setTransform(1258.3,990.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#515666").s().p("AiqA+IAAh7IFVAAIAAB7g");
	this.shape_16.setTransform(779.9,990.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#804326").ss(6.7,1,1).p("AmoAAINRAA");
	this.shape_17.setTransform(1316.2,904.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF9D70").s().p("Ah9FvQg0AAglglQglgmAAg0IAAnfQAAg1AlglQAlglA0AAIEPAAQA0AAAfAlQAeAkgKA0IhcHkQgKAzgsAkQgsAlg0AAg");
	this.shape_18.setTransform(1241.7,867.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BF6439").s().p("Ar8FvQg1AAglglQglglAAg1IAAnfQAAg1AlglQAlglA1AAIWIAAQA0AAAsAlQArAkAKA0IBYHkQAKAzgfAkQgfAlg0AAg");
	this.shape_19.setTransform(1305.7,867.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF854C").s().p("AAjGnQgzABgrgmQgrgkgIg0IhepTQgIg0AfglQAfglA0AAICzAAQA0AAAlAlQAlAmAAA0IAAJRQAAA0glAlQglAmg0gBg");
	this.shape_20.setTransform(1245.8,928.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BF6439").s().p("AoeGnQg0ABgrgmQgrgkgJg0IhepUQgIg0AfgkQAgglA0AAIVDAAQA0AAAhAlQAiAlgGA0Ig/JSQgFA0gpAlQgpAmg0gBg");
	this.shape_21.setTransform(1303.7,928.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEB992").s().p("ABYDiQgVgShLhnIjfkvIBlguQAAgEBNBGQBXBQBGBOIA4A7QAjAlARAbQAvBLg+AtQgeAWgcAAQgaAAgZgTg");
	this.shape_22.setTransform(1071.6,830.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#74DDE8").ss(2.2,1).p("AgwAAIBhAA");
	this.shape_23.setTransform(998.4,822.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#5ACBD1").ss(2.2,1).p("AgqAAIBVAA");
	this.shape_24.setTransform(1009.9,822.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#5ACBD1").s().p("Ag4CnQgKAAgHgHQgHgHAAgJIAAggQgrgSgYgxQgXguAAg/IAAhOQAAgKAHgHQAHgHAKAAIAWAAQAHAPAVA0QAXA2AaAnQBQB5CKAnQgHANgOAAg");
	this.shape_25.setTransform(999.2,811.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(607.7,725.1,787.1,271.9), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ay5GxQhDABgvgwQgvguAAhDIAAohQAAhCAvgwQAvguBDgBMAlzAAAQBDABAvAuQAvAwAABCIAAIhQAABDgvAuQgvAwhDgBg");
	mask.setTransform(137.1,43.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7E519C","#8253A0","#9B62BB","#A467C5"],[0,0.082,0.659,1],0,42.3,0,-42.2).s().p("A1aGxIAAtiMAq1AAAIAANig");
	this.shape.setTransform(137.1,43.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0,0,274.2,86.7), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ay5GxQhDABgvgwQgvguAAhDIAAohQAAhCAvgwQAvguBDgBMAlzAAAQBDABAvAuQAvAwAABCIAAIhQAABDgvAuQgvAwhDgBg");
	mask.setTransform(137.1,43.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7E519C","#8253A0","#9B62BB","#A467C5"],[0,0.082,0.659,1],0,42.3,0,-42.2).s().p("A1aGxIAAtiMAq1AAAIAANig");
	this.shape.setTransform(137.1,43.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,274.2,86.7), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,274.2,45.5), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ap+LJIAA2RIT9AAIAAWRg");
	mask.setTransform(63.9,71.3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AHuLJIvegDQhAAAgrgxQgqgxAJhAQA5mbBTlPQBfl8BeiGIIkACQBnBxBpEoQBcEGBLFcQAgCZgNBlQgUCWh4AAIgBAAg");
	this.shape.setTransform(63.9,71.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,127.8,142.7), null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg/sAGxQhDABgvgwQgvguAAhDIAAogQAAhDAvgwQAvguBDgBMB/ZAAAQBDABAvAuQAvAwAABDIAAIgQAABDgvAuQgvAwhDgBg");
	mask.setTransform(423.8,43.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9C041C","#A1041B","#BB0117","#C50016"],[0,0.094,0.663,1],0,42.3,0,-42.2).s().p("EhCNAGxIAAtiMCEbAAAIAANig");
	this.shape.setTransform(423.8,43.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, new cjs.Rectangle(0,0,847.7,86.7), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjWH7IAAv1IGtAAIAAP1g");
	mask.setTransform(21.5,50.7);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("Ai/HqQgXllAAiIQAAhfBciuQBAh3Asg4QAmgxA0gIQAvgHAoAbQAoAbAJAtQALAxggAwQgrBBhIBfQgzBNgGBLIgiHtQgKAQhHAAQhGAAgZgQg");
	this.shape.setTransform(21.5,50.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,43.1,101.3), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiNBEIAAiIIEbAAIAACIg");
	mask.setTransform(14.2,6.9);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AhtBEQgkgCAFgUQAEgSAXgNIBOgoQAVgLAAggICcAAQgEBYAAAUQAAAcghAAg");
	this.shape.setTransform(14.2,6.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,28.4,13.7), null);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApcMeIAA47IS5AAIAAY7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.4,-79.8,120.9,159.6);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_18();
	this.instance.parent = this;
	this.instance.setTransform(423.8,22.8,1,1,0,0,0,423.8,22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,847.7,45.5), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_16();
	this.instance.parent = this;
	this.instance.setTransform(137.1,22.8,1,1,0,0,0,137.1,22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,274.2,45.5), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(137.1,22.8,1,1,0,0,0,137.1,22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,274.2,45.5), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(14.2,6.9,1,1,0,0,0,14.2,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,28.4,13.7), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(63.9,71.3,1,1,0,0,0,63.9,71.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,127.8,142.7), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(21.5,50.6,1,1,0,0,0,21.5,50.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,43.1,101.3), null);


(lib.ClipGroup_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	mask.setTransform(960,540);

	// Layer_3
	this.instance = new lib.Group_4();
	this.instance.parent = this;
	this.instance.setTransform(968.5,306.5,1,1,0,0,0,423.8,22.8);
	this.instance.alpha = 0.102;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79011D").s().p("Eg/eAH2QhlAAhHhHQhIhIAAhlIAAoDQAAhlBIhIQBHhHBlAAMB+9AAAQBlAABHBHQBIBIAABlIAAIDQAABlhIBIQhHBHhlAAgEhBagF9QgzAzAABJIAAIDQAABJAzAzQA0AzBIABMB+9AAAQBJgBAzgzQAzgzAAhJIAAoDQAAhJgzgzQgzg0hJAAMh+9AAAQhIAAg0A0g");
	this.shape.setTransform(968.5,285.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EBBbgAFQgzgzhJAAMh+9AAAQhIAAg0AzQgyAygBBGIAAg3QAAhHAzgzQA0g0BIAAMB+9AAAQBJAAAzA0QAzAzAABHIAAA3QgBhGgygyg");
	this.shape_1.setTransform(968.5,254);

	var maskedShapeInstanceList = [this.instance,this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17, new cjs.Rectangle(537.8,235.6,861.5,100.5), null);


(lib.ClipGroup_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	mask.setTransform(960,540);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F44A6A").s().p("AHuLJIvegDQhAAAgrgxQgqgxAJhAQA5mbBTlPQBfl8BeiGIIkACQBnBxBpEoQBcEGBLFcQAgCZgNBlQgUCWh4AAIgBAAg");
	this.shape.setTransform(1155.9,812);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#337598").s().p("AizH7QgYl4AAiQQAAhlBLisQA6iGAggpQAog0A4gIQAxgIAqAdQAqAdAKAvQALA0ghAyQhRB4gTAnQgeBAgGBWIglIIQgJARhLAAQhLAAgagRg");
	this.shape_1.setTransform(1175.8,901.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEB992").s().p("AhzBIQgmgCAFgWQAEgRAZgOIBSgrQAWgLAAgiIClAAIgFBwQAAAfgjAAg");
	this.shape_2.setTransform(1160.2,959.2);

	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(1108.3,903.4,1,1,0,0,0,21.5,50.6);
	this.instance.alpha = 0.301;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#337598").s().p("Ai/HqQgXllAAiIQAAhfBciuQBAh3Asg4QAmgxA0gIQAvgHAoAbQAoAbAJAtQALAxggAwQhUBxgfAvQgzBNgGBLIgiHtQgKAQhHAAQhGAAgZgQg");
	this.shape_3.setTransform(1108.3,903.4);

	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1091.4,959.1,1,1,0,0,0,14.2,6.9);
	this.instance_1.alpha = 0.301;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEB992").s().p("AhtBFQgkgDAEgUQAFgSAWgMIBPgpQAVgLAAggICcAAIgFBrQAAAeggAAg");
	this.shape_4.setTransform(1091.4,959);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEA400").s().p("AgLAgQhwgagqgMIgEgBIALg8IFJBMIgMA7Qg1gJh1gbg");
	this.shape_5.setTransform(1093.6,821.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFE98").s().p("AgGAeQgRgDgMgVQgJgTACgQQAwAHAlAEQgBARgQAPQgOAQgOAAIgEAAg");
	this.shape_6.setTransform(1105.6,828.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFE98").s().p("AgIAfQgRgDgKgWQgKgTAEgRQAmAIAuAIQgCAPgQAQQgPAOgNAAIgFAAg");
	this.shape_7.setTransform(1096.9,826.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEFE98").s().p("AgKAfQgRgEgKgWQgIgUAEgQQAtAMAnAHQgDAQgQAPQgPANgNAAIgGgBg");
	this.shape_8.setTransform(1088.4,824.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEFE98").s().p("AgWAdQgQgEgCgRQgBgJAGgcQAcAJAwAJQgEAPgVAPQgQALgNAAIgJgBg");
	this.shape_9.setTransform(1080.1,822.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D72E4E").s().p("AhIEcQh2gbgigMQAkjTBLiPQBpjKCcgJIBNAPIh4JyQg4gIh5gdg");
	this.shape_10.setTransform(1099.1,795.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEB992").s().p("AhDD1QgngUgZgkQgagmAFgkQAKhEALgiIAnhsQArh0ATgXQAigpBMAbQBJAbABBPQAAAogdBiIhADMQgPAvgnAKQgJADgKAAQgaAAgdgPg");
	this.shape_11.setTransform(1089.7,827);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF854C").ss(6.7,1,1).p("Ah4AAIDxAA");
	this.shape_12.setTransform(591.2,833.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#804326").ss(6.7,1,1).p("AkBAAIIDAA");
	this.shape_13.setTransform(618.5,906.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF9D70").s().p("AgGFvQg0AAgsgkQgsglgKg0IhdnkQgJgzAeglQAegkA0AAIEPAAQA0AAAmAlQAlAlAAA0IAAHhQAAAzglAmQgmAlg0AAg");
	this.shape_14.setTransform(681.4,869.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BF6439").s().p("AsQFvQg0AAgfgkQgfglAKgzIBYnlQAKgzAsglQAsgkA0AAIWIAAQA0AAAlAlQAlAlAAA0IAAHhQAAA0glAlQglAlg0AAg");
	this.shape_15.setTransform(617.4,869.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF854C").s().p("AhQGoQg0gBglgkQglgmAAg0IAApRQAAg0AlglQAlgmA0ABICyAAQA0gBAgAmQAfAkgIA0IheJTQgIA0grAlQgrAlgzAAg");
	this.shape_16.setTransform(677.3,930.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BF6439").s().p("ApFGoQg0gBgpgkQgpglgGg0Ig+pSQgGg0AhglQAigmA0ABIVDAAQA0AAAfAkQAgAlgIA0IhfJTQgIA1grAkQgrAlg0AAg");
	this.shape_17.setTransform(619.4,930.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#BF6439").ss(6.7,1,1).p("AyBAAMAkDAAA");
	this.shape_18.setTransform(1198.2,881.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF854C").s().p("AbzBxMgxrgABQjfAAicgBIgVAAQhPgBgdghQgdghAmgtQAlguBTghQBSggBPAAMAzUAAAQBPAABIAiQBJAgAXAuQAXAvgnAhQgnAhhNAAIgCAAg");
	this.shape_19.setTransform(1208.5,892.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BF6439").s().p("A4NGeQhOAAhNg0QhNg0gdhIIhnj9QgdhJAFhTQAHhVAlguQAlguBTghQBSggBPAAMAzUAAAQBPAABIAiQBJAhAXAuQAXAvgEBVQgGBVgdBHIhpD7QgeBIhMAzQhOA0hOAAg");
	this.shape_20.setTransform(1207.9,922.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BF6439").s().p("ACcTeImXgwQhNgJg8g+Qg8g+gGhOIiH5sQgGhOAfhiQAfhjAyg8IBih1QAzg8BbgpQBbgoBOAEIApACQBNADBgApQBgApA5A1IC1CqQA5A1AiBeQAhBdgKBOIjbahQgKBOg/AxQg0AphAAAIgYgBg");
	this.shape_21.setTransform(1331,793.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF854C").s().p("AR/TzMgoRgEtQhOgJgtg9Qgtg9AOhNIEZ4AQAPhNA9hMQA+hLBJgdIGripQBJgdBrgSQBsgTBOADITnAuQBOADBhAoQBgAoA5A2IC1CpQA5A2AhBdQAiBegKBNIjbaiQgKBNg/AxQg1Apg/AAQgMAAgMgBg");
	this.shape_22.setTransform(1231.6,791.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFD876").ss(2.2,1).p("AAyAAIhjAA");
	this.shape_23.setTransform(913,844.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFCA55").ss(2.2,1).p("AAsAAIhXAA");
	this.shape_24.setTransform(901.3,844.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCA55").s().p("AiZCrQgOAAgGgOQCMgnBSh8QAshCAjhhIAWAAQAKAAAIAGQAGAIAAAKIAABPQAABAgXAwQgYAxgtAUIAAAgQAAAKgHAHQgHAGgJABg");
	this.shape_25.setTransform(912.2,833.1);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.instance,this.shape_3,this.instance_1,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_1},{t:this.shape_3},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13, new cjs.Rectangle(528.3,664.3,873.5,308.5), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	mask.setTransform(960,540);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F44A6A").s().p("ArHDtQAAh+AehxQAkiGBEhGQBFhGCwggQCdgdDLAHQDAAGCdAiQCjAjAzAxQBPBNAbC0QAPBmAACzg");
	this.shape.setTransform(1138.8,889);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFA377").s().p("AgQBrQgQgBgHgNIhyjHIEzAAIiTDKQgHALgOAAIgCAAg");
	this.shape_1.setTransform(1141.8,751.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D72E4E").s().p("AhBCrQgLgCgHgJIiWi6IAAiQIFtAAIBmCCIkWDNQgIAGgJAAIgEAAg");
	this.shape_2.setTransform(1167.1,758);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEA400").s().p("AhXDMQgMgBgHgJIh/ijQgNgPAAgTIAAjIIFtAAICACkIk5DuQgIAFgJAAIgEAAg");
	this.shape_3.setTransform(1168.4,761.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFE98").s().p("AgHAdQgWgGgLgOIAdgUQANgJANgLQAQAJAHARQAHATgOALQgJAHgNAAQgHAAgJgDg");
	this.shape_4.setTransform(1190,759.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFE98").s().p("AgJAlQgWgGgLgOIBKg4QAKAOABAXQABAYgPALQgJAHgMAAQgIAAgJgDg");
	this.shape_5.setTransform(1183,764.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFE98").s().p("AgJAlQgWgHgLgNQAigaAqgeQAKAOgBAYQAAAYgOALQgIAGgMAAQgJAAgJgDg");
	this.shape_6.setTransform(1176.5,770.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFE98").s().p("AgJAmQgWgHgKgOQAXgRAwgoQAKAOACAXQABAYgOAMQgIAIgOAAQgHAAgJgDg");
	this.shape_7.setTransform(1169.3,775.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEFE98").s().p("AgEAoQgHAAgGgDQgFgCgEgGQgHgHAAgMQAAgIAEgJIADABIACAAIAGgCIAFgDQANgKANgTQAPAMAFAWQAGAZgTAOQgDADgIADIgJACIgEgBg");
	this.shape_8.setTransform(1163.2,780.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEFE98").s().p("AgHAoQgMgBgIgHQgPgNAFgZQAFgVAPgMQAeAmAaAJQgHAUgSAIQgKAEgJAAIgCAAg");
	this.shape_9.setTransform(1156.9,778.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEFE98").s().p("AghAaQgFgHAAgLQAAgJAFgKQAIgVAQgJQAJASANATIAaAiQgPAMgWAAIgCAAQgXAAgKgQg");
	this.shape_10.setTransform(1151.6,772.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFE98").s().p("AAAAqQgZgCgIgSQgIgQAMgVQAMgUAQgHQARApAWAlQgNAHgQAAIgJgBg");
	this.shape_11.setTransform(1146.8,764.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D72E4E").s().p("AgtCWQgLgEgCgLIgijCQgCgIACgFIAWhOICjAAIABCoIh4B/QgFAGgIAAIgGgBg");
	this.shape_12.setTransform(1128.1,756);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEA400").s().p("AgyCUQgXgHgEgYIgfjMQgCgLAFgKQAEgKAKgHIAlgYICjAAIABCPQAAAGgFAGIh0CDQgMANgPAAQgGAAgGgCg");
	this.shape_13.setTransform(1126.5,762.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEFE98").s().p("AgeAaQALgPAIgPQAKgSABgLQAQACAJAOQAFAIABAJQABAJgEAIQgHAOgVACIgFABQgPAAgKgIg");
	this.shape_14.setTransform(1134.7,765.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEFE98").s().p("AgEAiQgTgCgJgLQAZgXAVggQAMAJAGASQAFATgKAMQgJALgPAAIgHgBg");
	this.shape_15.setTransform(1130.2,771.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFE98").s().p("AgLAeQgNgEgDgKQgDgIAFgIIAKgKIAAABIAIgDQAJgEAQgOQALALAAASQAAAVgSAJQgGACgGAAIgKgBg");
	this.shape_16.setTransform(1125,776.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFE98").s().p("AgOAbQgIgEgEgHQgGgOANgPQAKgNAOgEQAJAiAPAQQgMALgQAAIgBAAQgIAAgGgEg");
	this.shape_17.setTransform(1119.4,774.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEFE98").s().p("AgEAcQgSgHgCgOQgCgNAPgNQANgLAOgBQAFApAFAVIgLABQgKAAgJgEg");
	this.shape_18.setTransform(1117.3,768.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFE98").s().p("AgFAaQgRgKgBgNQgBgNAQgLQANgLAPAAQAAAUAEAtIgEAAQgMAAgNgHg");
	this.shape_19.setTransform(1116.4,761.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEFE98").s().p("AgGAXQgRgLAAgMQABgPARgJQAPgJAOACQgDAZABAmIgBAAQgOAAgNgJg");
	this.shape_20.setTransform(1116.2,755.3);

	this.instance = new lib.Group_0();
	this.instance.parent = this;
	this.instance.setTransform(1155.9,812,1,1,0,0,0,63.9,71.3);
	this.instance.alpha = 0.102;

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(1067.6,740.7,152.2,181.6), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	mask.setTransform(960,540);

	// Layer_3
	this.instance = new lib.Group_2();
	this.instance.parent = this;
	this.instance.setTransform(1574,958.6,1,1,0,0,0,137.1,22.8);
	this.instance.alpha = 0.102;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5F3F79").s().p("AzNH3QhRgBg6hHQg5hIAAhlIAAoDQAAhlA5hIQA6hIBRAAMAmbAAAQBRAAA6BIQA5BIAABlIAAIDQAABlg5BIQg6BHhRABgA0xl9QgpA0AABIIAAIDQAABJApAzQAqAzA6AAMAmbAAAQA6AAAqgzQApgzAAhJIAAoDQAAhIgpg0Qgqg0g6AAMgmbAAAQg6AAgqA0g");
	this.shape.setTransform(1574,938);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AUygDQgqg0g6AAMgmbAAAQg6AAgqA0QgnAwgCBEIAAgzQAAhHApg0QAqgzA6AAMAmbAAAQA6AAAqAzQApA0AABHIAAAzQgChEgngwg");
	this.shape_1.setTransform(1574,905.9);

	var maskedShapeInstanceList = [this.instance,this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(1431.4,887.7,285.3,100.5), null);


(lib.ClipGroup_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	mask.setTransform(960,540);

	// Layer_3
	this.instance = new lib.Group_3();
	this.instance.parent = this;
	this.instance.setTransform(346,958.6,1,1,0,0,0,137.1,22.8);
	this.instance.alpha = 0.102;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5F3F79").s().p("AzNH3QhRgBg6hHQg5hIAAhlIAAoDQAAhlA5hIQA6hIBRAAMAmbAAAQBRAAA6BIQA5BIAABlIAAIDQAABlg5BIQg6BHhRABgA0xl9QgpA0AABIIAAIDQAABJApAzQAqAzA6AAMAmbAAAQA6AAAqgzQApgzAAhJIAAoDQAAhIgpg0Qgqg0g6AAMgmbAAAQg6AAgqA0g");
	this.shape.setTransform(346,938);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AUygDQgqg0g6AAMgmbAAAQg6AAgqA0QgnAwgCBEIAAgzQAAhHApg0QAqgzA6AAMAmbAAAQA6AAAqAzQApA0AABHIAAAzQgChEgngwg");
	this.shape_1.setTransform(346,905.9);

	var maskedShapeInstanceList = [this.instance,this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0, new cjs.Rectangle(203.4,887.7,285.3,100.5), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZB4QgIgKgBgQQAAgQAJgKQAJgLAQABQAQgBAJALQAKAKAAAQQAAAQgKAKQgJAKgQAAQgQAAgJgKgAgRAkQgGgCgDgLIgHiPQAHgEAJgDQAIgCAJAAQAQAAAIAHQAHAIABAOIgFBkIgFAiIgEACIgGACIgMACQgKgBgHgDg");
	this.shape.setTransform(541.2,114.9,0.667,0.667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaBdQgTgGgNgNQgOgNgHgTQgIgUAAgYQAAgYAIgUQAIgSANgLQALgMARgGQAPgFARgBQAUAAAPAHQAPAFAMAMQAMAKAGAQQAGAOAAASQAAANgHAGQgGAGgNADIhYAOQAEANAMAGQALAGAQABQAOAAAPgFQALgDAKgGQAGAEADAHQAEAHABAHQgBARgPAJQgMAHgOACQgQADgLgBQgVAAgRgGgAgMgwQgFACgFAGQgEAGgCAFIgCAMIA9gLQgCgIgHgHQgGgIgOAAQgHAAgHADg");
	this.shape_1.setTransform(531,116.9,0.667,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAtBhQgIgCgDgDQgEgDgDgGQgCgGAAgKIAAhaQAAgLgHgGQgGgGgLAAQgHAAgGACQgIACgEAEIAACEIgLADIgQABIgOgBQgHgCgEgDQgEgDgCgGQgDgGAAgKIAAhzQAAgKAEgHQAFgHAGgEQAMgJATgHQATgFAVAAQAqAAAVATQAWATAAAiIAAB3IgMADIgQABg");
	this.shape_2.setTransform(517.4,116.8,0.667,0.667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmBcQgRgGgMgOQgMgLgIgTQgGgTAAgXQAAgXAGgRQAIgVAMgLQANgNAQgGQAQgIAWAAQAWAAAQAIQAQAFAOAOQANAOAGASQAHARAAAXQAAAZgHASQgGARgNANQgNAOgRAGQgQAGgWAAQgUABgSgIgAgWgjQgJANAAAWQAAAXAJAMQAIAOAOAAQAPAAAJgOQAIgNAAgWQAAgWgJgNQgIgMgPAAQgOAAgIAMg");
	this.shape_3.setTransform(503.4,116.9,0.667,0.667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggB7QgTgGgMgOQgNgMgHgTQgGgRAAgZQAAgYAHgTQAHgSANgMQANgNARgFQARgHATAAIAOABIALAEIAAg+IALgDIARgCQAIABAGABQAHABADAEQAFADACAGQACAHAAAJIAAC1QAAATgQAKQgJAHgSAGQgRAGgVgBQgWABgTgIgAgRgFQgKALAAAYQAAAZAJALQAKANARAAQAFAAAHgCIAIgFIAAhUQgHgFgKABQgSgBgLAMg");
	this.shape_4.setTransform(489.1,114.8,0.667,0.667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKCAQgHgCgEgDQgEgDgCgGQgDgGAAgKIAAjfIAMgBQAIgCAHAAQAHAAAHACQAGABAEADQAFADACAGQADAHgBAJIAADeIgLACIgQACg");
	this.shape_5.setTransform(474.2,114.7,0.667,0.667);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKCAQgHgCgEgDQgEgDgCgGQgCgHgBgJIAAjfIAcgDQAHAAAGACQAHABADADQAFAEADAFQABAGAAAKIAADeIgLACQgHACgJAAg");
	this.shape_6.setTransform(467.4,114.7,0.667,0.667);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaBdQgSgFgOgOQgOgNgHgTQgIgUAAgYQAAgYAIgUQAHgSANgLQAMgMARgGQAPgFARgBQATAAAQAHQAPAFAMAMQAMAKAFAQQAHAOAAASQAAANgHAGQgHAGgMADIhYAOQAEANANAGQAKAGAQABQAPAAANgFQALgDAKgGQAGADAEAIQAFAHgBAHQAAARgPAJQgMAHgOACQgQADgLgBQgUAAgSgGgAgLgwQgHACgEAGQgEAGgCAFIgCAMIA8gLQgBgIgGgHQgHgIgOAAQgIAAgFADg");
	this.shape_7.setTransform(457.5,116.9,0.667,0.667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAmByQgMgEgCgKIgWhTIgTBaQgGAFgKADQgKAEgOAAQgQAAgNgFQgNgEgEgKQgDgEgEgQIgIgfIgaiaQAEgEAKgFQAJgEAKAAQAOAAAJAGQAJAIACANIAVCVIACAAIAZh2IAMgEQAJgCAIAAQAPAAAKAEQAKAFACAKIAaBpIACAAIATioQANgIAPAAQAOAAAJAGQAKAGAAAPIgBAYIgbCVIgIAZQgFAFgMADQgLAEgOAAQgSAAgLgFg");
	this.shape_8.setTransform(440.5,115.4,0.667,0.667);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYB4QgKgKAAgQQAAgQAKgKQAJgLAPABQAQgBAJALQAKALAAAPQAAAPgKALQgJAKgQAAQgPAAgJgKgAgQAkQgIgDgBgKQgCgJgBgRIgFh1QAGgEALgDQAHgCAKAAQAPAAAIAHQAIAIAAAOIgCA+QgBATgCATIgEAiIgLAEIgMACQgKgBgGgDg");
	this.shape_9.setTransform(421.8,114.9,0.667,0.667);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggBhQgNgBgKgGQgJgFgFgGQgFgIAAgKQAAgKADgGQAEgGAFgEQAJAFAPAGQANAEATABQAKgBAFgDQAHgDgBgGQABgGgFgDQgFgDgJgBIgKgDQgggHgPgOQgPgNAAgaQAAgOAGgLQAFgLALgJQALgIAOgEQAPgEAQAAQAPAAAKACQAMADAJADQAJAGAEAFQAFAHAAAKQAAAIgDAHQgDAGgEAEIgJgEIgagGIgOgBQgMAAgFACQgHAEABAFQgBAFAEACQAEACAJADIALADQAiAIAPAPQAPAOAAAXQAAAegUAQQgWARgmAAQgOAAgOgDg");
	this.shape_10.setTransform(412.5,116.9,0.667,0.667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKCAQgGgCgFgDQgEgDgCgGQgDgHAAgJIAAjfIAMgBIAQgCQAHAAAGACQAHABADADQAGAEABAFQACAGAAAKIAADeIgLACQgHACgJAAg");
	this.shape_11.setTransform(403.1,114.7,0.667,0.667);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaBdQgSgFgOgOQgOgNgHgTQgIgUAAgYQAAgYAIgUQAHgSAOgLQALgMARgGQAPgFARgBQATAAAQAHQAPAFAMAMQAMAKAFAQQAHAOAAASQAAANgHAGQgHAGgMADIhYAOQAEANAMAGQAMAGAPABQAPAAANgFQAMgDAKgGQAFADAFAIQADAHAAAHQAAARgPAJQgMAHgNACQgRADgKgBQgWAAgRgGgAgLgwQgGACgFAGQgEAGgCAFIgCAMIA9gLQgCgIgGgHQgHgIgOAAQgIAAgFADg");
	this.shape_12.setTransform(393.1,116.9,0.667,0.667);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWBeQgKgEgEgIQgDgGgFgNIgtiTQAFgFAIgEQAIgEALAAQANAAAIAGQAHAFAFAQIAaBvIABAAIAciDIAOgFIAPgCQAOAAAIAGQAIAGAAAOQAAAGgDAMIgGAaIgKAfIghBUQgGAFgIACQgLADgLAAQgNAAgLgEg");
	this.shape_13.setTransform(380,116.9,0.667,0.667);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaBdQgSgGgOgNQgNgMgIgUQgIgTAAgZQAAgaAIgSQAIgTAMgKQANgNAQgFQAPgFARgBQATAAAQAHQAPAFAMAMQAMAKAFAQQAHAOAAASQAAANgHAGQgHAHgMACIhYAOQAFANALAGQALAGAQABQAOAAAOgFQAMgDAKgGQAGAFADAGQAEAHAAAHQAAARgPAJQgNAHgNACQgQADgLgBQgVAAgRgGgAgMgwQgEACgGAGQgEAGgCAFIgCAMIA8gLQgBgIgHgHQgGgIgOAAQgIAAgGADg");
	this.shape_14.setTransform(366.9,116.9,0.667,0.667);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKCAQgHgCgEgDQgEgEgCgFQgDgHAAgJIAAjfIAMgBQAIgCAIAAQAHAAAGACQAGABAFADQAEADACAGQADAHAAAJIAADeIgMACQgIACgIAAg");
	this.shape_15.setTransform(356.9,114.7,0.667,0.667);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaBdQgSgGgOgNQgNgMgIgUQgIgTAAgZQAAgaAIgSQAIgTAMgKQAOgNAPgFQAPgFARgBQATAAAQAHQAPAFAMAMQALAKAHAQQAGAOAAASQAAANgHAGQgHAHgMACIhYAOQAEANAMAGQALAGAQABQAOAAAOgFQAMgDAKgGQAGAFADAGQAEAHAAAHQAAARgPAJQgNAHgNACQgQADgLgBQgVAAgRgGgAgMgwQgFACgFAGQgEAGgCAFQgCAGAAAGIA8gLQAAgHgIgIQgGgIgOAAQgIAAgGADg");
	this.shape_16.setTransform(342.2,116.9,0.667,0.667);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAsCAQgGgCgEgDQgEgDgDgGQgCgHAAgJIAAhWQAAgPgIgGQgGgGgLAAQgIAAgFACIgLAEIAACGIgLADIgQABIgOgBQgHgCgEgDQgEgDgCgGQgDgHAAgJIAAjfIAMgBQAHgCAJAAQAHAAAGACQAHAAAEAEQAFAEACAFQACAHAAAJIAAAmQAFgCAJgCQAJgDALAAQAlAAATATQAUATAAAkIAAB1IgLADIgQABg");
	this.shape_17.setTransform(328.6,114.7,0.667,0.667);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgnBlQgRgPAAgiIAAikQAEgCAIgBQAHgBAIAAQAQAAAJAGQAIAGgBATIAAAZIAwAAIAEALQACAIAAAFQAAANgFAHQgHAGgIAAIgiAAIAAA5QABALAFADQAGAFAMgBIAKgBIAKgCIAGAJQACAHAAAGQAAAOgKAKQgJAJgbAAQgfAAgRgQg");
	this.shape_18.setTransform(317,115.7,0.667,0.667);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgKCAQgHgCgEgDQgEgEgCgFQgDgHAAgJIAAjfIAMgBQAIgCAIAAQAHAAAGACQAGAAAFAEQAEADACAGQADAHAAAJIAADeIgMACQgIACgIAAg");
	this.shape_19.setTransform(303.8,114.7,0.667,0.667);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgKCAQgHgCgDgDQgEgCgEgHQgBgGAAgKIAAjfIALgBQAHgCAJAAQAGAAAHACQAGABAFADQAEADACAGQADAGAAAKIAADeIgMACIgQACg");
	this.shape_20.setTransform(297.1,114.7,0.667,0.667);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AghBgQgPgEgMgIQgLgJgGgLQgFgMgBgQQAAgaAPgNQAPgPAfgDIAugFIAAgDQAAgKgJgGQgJgFgRABQgNAAgOADQgNADgJAEQgFgEgDgGQgEgIAAgHQAAgKAEgHQAEgFALgFQAKgEAOgCQANgCAOAAQARAAARAFQARAEALAIQALAJAGANQAGANABATIAABVQgBAKgFAGQgHAIgFAEQgYAPgqgBQgRAAgQgDgAAAASQgKABgHAEQgGADAAAIQAAAIAFAFQAFAEANABIANgBQAJgCACgDIAAgeg");
	this.shape_21.setTransform(286.9,116.9,0.667,0.667);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AggB7QgTgGgMgOQgNgMgHgTQgGgRAAgZQAAgYAHgTQAHgSANgMQANgNARgFQARgHATAAIAOABIALAEIAAg+IALgDIARgCQAIABAGABQAHABADAEQAFADACAGQACAHAAAJIAAC1QAAATgQAKQgJAHgSAGQgRAGgVgBQgWABgTgIgAgRgFQgKALAAAYQAAAZAJALQAKANARAAQAFAAAHgCIAIgFIAAhUQgHgFgKABQgSgBgLAMg");
	this.shape_22.setTransform(268.6,114.8,0.667,0.667);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgaBdQgSgGgOgNQgOgNgHgTQgIgTAAgZQAAgaAIgSQAHgSANgLQANgNAQgFQAPgFARgBQATAAAQAHQAPAFAMAMQAMAKAFAQQAHAOAAASQAAANgHAGQgHAGgMADIhYAOQAFANALAGQALAGAQABQAOAAAOgFQAMgDAJgGQAHAEADAHQAEAHAAAHQAAARgPAJQgNAHgNACQgQADgLgBQgVAAgRgGgAgMgwQgGACgEAGQgEAGgCAFIgCAMIA8gLQgBgIgHgHQgGgIgOAAQgIAAgGADg");
	this.shape_23.setTransform(255.2,116.9,0.667,0.667);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgpBhQgGgCgEgDQgEgCgDgHQgCgGAAgKIAAhzQAAgJADgGQACgGAHgFQAFgFAJgEQAGgEAMgDQAIgEALgBIAVgCQASAAAJAHQAKAHAAAQQAAAGgBAFQgBAFgDAEIgPABIgQADIgOADIgLAEIAACCIgKADIgRABg");
	this.shape_24.setTransform(244.1,116.8,0.667,0.667);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AghBgQgPgFgLgHQgMgHgFgNQgGgMgBgQQAAgaAPgNQAPgOAfgEIAugFIAAgDQAAgKgJgGQgJgFgRABQgNAAgNADQgMADgLAEQgGgEgCgGQgEgJAAgGQAAgKAEgHQAEgFALgFQAKgEAOgCQANgCAOAAQARAAARAFQASAEAKAIQAMAKAFAMQAHAOAAASIAABVQgBAKgFAGQgFAHgHAFQgYAPgqgBQgQAAgRgDgAgBASQgIABgIAEQgGADAAAIQAAAHAFAGQAGAEAMABIANgBQAJgCACgDIAAgeg");
	this.shape_25.setTransform(231.9,116.9,0.667,0.667);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgaBdQgSgGgOgNQgNgMgIgUQgIgTAAgZQAAgaAIgSQAIgTAMgKQANgNAQgFQAPgFARgBQATAAAQAHQAPAFAMAMQAMAKAFAQQAHAOAAASQAAANgHAGQgHAHgMACIhYAOQAFANALAGQALAGAQABQAOAAAOgFQAMgDAKgGQAGAFADAGQAEAHAAAHQAAARgPAJQgNAHgNACQgQADgLgBQgVAAgRgGgAgMgwQgEACgGAGQgEAGgCAFIgCAMIA8gLQgBgIgHgHQgGgIgOAAQgIAAgGADg");
	this.shape_26.setTransform(219.1,116.9,0.667,0.667);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKCAQgHgCgEgDQgEgEgCgFQgDgHAAgJIAAjfIAMgBQAIgCAIAAQAHAAAGACQAGABAFADQAEADACAGQADAHAAAJIAADeIgMACQgIACgIAAg");
	this.shape_27.setTransform(209.2,114.7,0.667,0.667);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgQBcQgTgHgNgNQgNgNgHgSQgIgSAAgWQAAgZAIgSQAIgUANgMQAOgMARgGQARgGATAAQAaAAAOAKQAOAJAAAQQAAAIgDAGIgIALIgPgGQgJgDgKAAQgIAAgJADQgHADgFAGQgGAGgEAJQgDAJgBALQAAAYANAMQAMAMASAAQALAAAIgDIAOgGQAHAFAEAHQAEAGgBAJQABAQgOAJQgPAIgZAAQgVAAgSgHg");
	this.shape_28.setTransform(199.9,116.9,0.667,0.667);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgaBdQgSgGgOgNQgNgMgIgUQgIgTAAgZQAAgaAIgSQAIgTAMgKQAOgNAPgFQAPgFARgBQATAAAQAHQAPAFAMAMQALAKAHAQQAGAOAAASQAAANgHAGQgHAHgMACIhYAOQAEANAMAGQALAGAQABQAOAAAOgFQAMgDAKgGQAGAFADAGQAEAHAAAHQAAARgPAJQgNAHgNACQgQADgLgBQgVAAgRgGgAgMgwQgEACgGAGQgEAGgCAFIgCAMIA8gLQgBgIgHgHQgGgIgOAAQgIAAgGADg");
	this.shape_29.setTransform(182.7,116.9,0.667,0.667);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgWBeQgKgEgEgIIgmhsIgPg6QAFgFAIgEQAIgEALAAQANAAAIAGQAIAFAEAQIAaBvIACAAIAOg+QAHghAHgkIAOgFIAOgCQAOAAAIAGQAIAGAAAOIgCASIgHAaIgKAfIghBUQgFAEgJADQgLADgLAAQgNAAgLgEg");
	this.shape_30.setTransform(169.5,116.9,0.667,0.667);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgVAzIgLgFIAGhZIANgFQAJgEAGAAQAGABAFABQAFABAFADQAEADADAFQADAGAAAFIgCASIgEARIgGASQgDAHgEAHQgFAHgFADQgEADgIAAQgHgBgGgBg");
	this.shape_31.setTransform(160.4,109.6,0.667,0.667);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AggBcQgQgEgMgKQgMgKgGgOQgHgQAAgVIAAhtIALgDIAQgBIAPABQAGACAFADQAEAEACAFQACAHABAJIAABSQgBAPAIAHQAHAHAMAAQAHAAAHgCIAIgDIAAiFIAMgDIAPgBIAOABQAHACAEADQAFAEACAFQACAGAAAKIAAB0QAAATgPAKQgMAHgSAFQgRAFgVAAQgSAAgRgFg");
	this.shape_32.setTransform(150.6,117.1,0.667,0.667);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AglBcQgSgGgMgOQgMgNgHgRQgHgUAAgWQAAgVAHgTQAGgTANgNQANgNARgGQAQgIAVAAQAXAAAQAIQARAGAMANQANAOAHASQAGARAAAXQAAAZgGASQgHASgNAMQgMANgRAHQgRAGgWAAQgTABgSgIgAgWgjQgJANAAAWQAAAXAJAMQAJAOAOAAQAOAAAJgOQAIgMAAgXQAAgXgIgMQgIgMgQAAQgOAAgIAMg");
	this.shape_33.setTransform(136.6,116.9,0.667,0.667);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgRBwQgIgFAAgUIAAg0Ig6hmQgJgRgGgPQAEgFAJgIQAJgFALgBQANAAAKAHQAJAGAHARIAdBBIADAAIAghXQAGgDAJgCIAPgDQAMAAAKAIQAJAHAAAOIgCAMQgBAFgIAOIg0BfIAABOIgdAEQgPAAgJgHg");
	this.shape_34.setTransform(122.6,115.4,0.667,0.667);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgYB4QgJgKAAgQQAAgQAJgKQAJgLAPABQARgBAIALQAJAKAAAQQAAAQgJAKQgIAKgRAAQgPAAgJgKgAgQAkQgIgDgBgKQgCgJgBgRIgDgnQgBgWAAgUIAAgkQAFgEALgDQAHgCAKAAQAQAAAGAHQAJAIAAAOIgCA+QgBATgCATIgEAiIgKAEIgNACQgKgBgGgDg");
	this.shape_35.setTransform(107.4,114.9,0.667,0.667);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ag4B4QgJgJgCgQQAKgJANgMIAVgZQgHgCgGgHQgIgIgIgTIgIgUIgJgbIgKgjIgLguQAEgGAJgDQAIgFALAAQANAAAIAGQAIAGAEAPIAbBpIACAAIAeh9QAMgGAQgBQANAAAIAGQAIAGAAAOQAAAJgCAPIgHAdIgKAgIgYA9QgEAKgJAPQgHAPgLAQQgKANgHAGQgHAHgIACQgJADgHgBQgQAAgJgJg");
	this.shape_36.setTransform(97.2,119,0.667,0.667);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgiBgQgPgEgLgIQgLgIgFgMQgHgMABgQQgBgaAPgNQAPgPAfgDIAugFIAAgDQAAgKgJgGQgJgFgRABQgNAAgNADQgNADgLAEQgEgEgDgGQgEgJAAgGQAAgKAFgHQADgFAKgFQALgEAOgCQAMgCAPAAQASAAARAFQARAEAKAIQALAJAHANQAFAOABASIAABVQAAAKgGAGQgHAHgFAFQgYAPgqgBQgRAAgRgDgAgBASQgJABgHAEQgHADABAIQgBAHAGAGQAFAEANABIAOgBQAHgCAEgDIAAgeg");
	this.shape_37.setTransform(83.8,116.9,0.667,0.667);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgpBhQgHgCgEgDQgDgDgDgGQgCgHAAgJIAAhzQAAgJACgGQADgGAGgFQAHgGAIgDQAHgEALgDQAJgEAKgBIAVgCQARAAAKAHQALAIAAAPQAAAGgCAFIgEAJIgPABIgPADIgPADQgFABgGADIAACCIgKADIgQABg");
	this.shape_38.setTransform(73.1,116.8,0.667,0.667);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AglBcQgSgGgMgOQgMgNgHgRQgHgUAAgWQAAgVAHgTQAGgTANgNQANgNARgGQAQgIAVAAQAXAAAQAIQARAGAMANQANAOAHASQAGARAAAXQAAAZgGASQgHASgNAMQgMANgRAHQgRAGgWAAQgTABgSgIgAgWgjQgJANAAAWQAAAXAJAMQAJAOANAAQAPAAAJgOQAIgMAAgXQAAgXgIgMQgJgMgPAAQgOAAgIAMg");
	this.shape_39.setTransform(60.7,116.9,0.667,0.667);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AglBcQgSgGgMgOQgMgNgHgRQgHgUAAgWQAAgVAHgTQAGgTANgNQANgNARgGQAQgIAVAAQAXAAAQAIQARAGAMANQANAOAHASQAGARAAAXQAAAZgGASQgHASgNAMQgMANgRAHQgRAGgWAAQgTABgSgIgAgWgjQgJANAAAWQAAAXAJAMQAJAOAOAAQAOAAAJgOQAIgMAAgXQAAgXgIgMQgIgMgQAAQgOAAgIAMg");
	this.shape_40.setTransform(46.6,116.9,0.667,0.667);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AA2B2QgHgBgEgEQgEgEgCgGQgDgFAAgLIAAg8IhDAAIAABZIgdAEQgJgBgGgBQgHgBgEgEQgEgDgDgHQgBgFAAgLIAAjKIAcgEQAJABAGABQAFABAGAEQAFAEABAFQACAHABAKIAAA9IBDAAIAAhaIAegEQAIABAGABQAFABAGAEQAEADACAGQACAGAAALIAADKIgdAEQgIgBgGgBg");
	this.shape_41.setTransform(31.6,115.3,0.667,0.667);

	this.instance = new lib.ClipGroup_17();
	this.instance.parent = this;
	this.instance.setTransform(281.5,283.6,0.667,0.667,0,0,0,960,540);

	this.instance_1 = new lib.ClipGroup_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(287.2,114.2,0.667,0.667,0,0,0,423.8,43.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AiKFCQgVgDgPgMQgOgLgIgVQgIgUAAggIAAmAQAAgdALgWQAJgUAUgRQASgRAegOQAcgNAggKQAigMAggFQAkgFAigBQA6AAAhAYQAiAYAAA2QAAASgFASQgFARgHAOQgdAAgWACQgaACgaAGIgwALQgVAGgQAIIAAG1QgLADgaAEQgbAFgbAAQgZAAgWgFg");
	this.shape_42.setTransform(521.2,35.6,0.667,0.667);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AhZE3Qg8gUgugrQgugrgZhAQgag/AAhWQAAhWAag8QAag9AqgoQApgmA3gTQA3gTA3AAQBAAAAzAVQA0AUAnAkQAlAkAVAyQAVAzAAA6QAAAsgXAWQgXAYgpAGIknAvQAOArAoAVQAoAVA1AAQAxAAAsgNQAsgOAcgSQASANAOAXQANAYAAAZQAAA6gzAcQgmAWgwAIQgwAHgqAAQhGAAg8gVgAgqihQgUAJgNARQgNAQgIAUQgGATgCAVIDNgkQgEgagXgZQgWgagsAAQgcAAgWALg");
	this.shape_43.setTransform(481.5,35.8,0.667,0.667);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AiKFCQgVgDgPgMQgOgLgIgVQgIgUAAggIAAmAQAAgdALgWQAJgUAUgRQASgQAdgPQAegOAfgJQAigMAggFQAkgFAigBQA6AAAhAYQAiAYAAA2QAAASgFASQgFARgHAOQgdAAgWACQgaACgaAGIgwALQgXAGgOAIIAAG1QgLADgaAEQgbAFgbAAQgZAAgWgFg");
	this.shape_44.setTransform(444.4,35.6,0.667,0.667);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("Ah/E1Qg6gXgqgrQgpgsgXg9QgXg9AAhNQAAhMAXg9QAWg8AqgtQAqgrA6gXQA5gXBGAAQBHAAA6AYQA7AZAoAqQApArAXA9QAXA9AABLQAABQgXA+QgXA+gpAqQgoApg7AYQg5AVhIAAQhHAAg4gXgAhNh2QgcArAABLQAABOAdAqQAbApAyAAQAzAAAbgqQAbgqAAhNQAAhNgcgpQgbgqgzAAQgxAAgcAqg");
	this.shape_45.setTransform(403.1,35.8,0.667,0.667);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgkGqQgUgEgPgMQgPgLgHgUQgIgTAAghIAArpIAngHQAagEAaAAQAYAAAXAEQAVADAOAMQAPAMAHAUQAIAVAAAfIAALoIgnAIQgaAEgaAAQgYAAgXgEg");
	this.shape_46.setTransform(368.5,28.7,0.667,0.667);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AjtGwQgUgDgPgMQgOgLgIgVQgGgTgBghIAApnQAAgjAOgWQAOgWAYgSQAkgZA4gQQA6gPBCAAQBGgBA/AVQA+ATAtAqQAsApAZA+QAZA+AABXQAABRgVA+QgWA9goAqQgnApg4AVQg4AVhDAAQg1AAgsgRIAADVQgOAFgYAEQgaAFgcAAQgZAAgXgFgAhDkDQgSAHgMAHIAAEZQAMAHASAHQARAEATAAQB7AAAAicQAAhSgegpQgfgng4AAQgXAAgTAFg");
	this.shape_47.setTransform(334.7,42.8,0.667,0.667);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("ABqEoQgZgZgbgpIhAhjIh6C9IgaABQg9AAgfgbQghgbAAgnQAAggAPgXQAMgVAigsIBhh2IihjKQAJgwAcggQAdgfAqAAQAoAAAVAVQAXAWAZAkIBMBsICBi7QBCAAAmAZQAnAaAAAqQAAAPgFAPQgFAPgHANQgJAOgNASIhvCJICeDeQgGAwgeAdQgeAcgqAAQgtgBgcgbg");
	this.shape_48.setTransform(289.7,36,0.667,0.667);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AiaGHQg0AAgeggQgeggAAg3IAAofQAAg3AeggQAeggA0AAIGLAAQAIANAHAYQAHAZAAAYQAAAxgUAUQgUAVggAAIj9AAIAAB3IENAAQAJAPAGAWQAHAVAAAbQAAAxgTATQgTAVghAAIjcAAIAACHIE0AAQAIAOAHAXQAGAXAAAaQAAAxgTAVQgUAVghAAg");
	this.shape_49.setTransform(247.7,30.8,0.667,0.667);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CA0303").s().p("AibGHQgzAAgeggQgeggAAg3IAAofQAAg3AeggQAeggAzAAIGMAAQAIANAHAYQAGAWAAAbQAAAxgUAUQgTAVghAAIj8AAIAAB3IENAAQAJAPAGAWQAHAXAAAZQAAAwgUAUQgSAVghAAIjcAAIAACHIEzAAQAJAOAGAXQAHAYAAAZQAAAwgUAWQgUAVggAAg");
	this.shape_50.setTransform(187.8,30.8,0.667,0.667);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CA0303").s().p("AiCGRQgwgKgjgSQgjgTgUgbQgUgcAAgkQAAglAVgbQAUgaAYgOQAkAdAuATQAwAVA7AAQA5AAAZgTQAYgTAAgaQAAgagUgOQgSgNgjgNIgygSQg3gUgpgTQgrgTgggcQgfgcgRgoQgSgnAAg4QAAhuBPhBQBPhBCMAAQA0AAAsAHQAuAJAfAPQAeAPAUAaQASAaAAAgQAAAigPAYQgOAWgVASQgagSgtgNQgsgOg1AAQg1AAgZAQQgZAQAAAZQAAATAPAMQAQANAfAJIA/AXQBxAnA8A6QA9A7AABoQAABthRBDQhQBDibAAQg5AAgugJg");
	this.shape_51.setTransform(143.1,30.6,0.667,0.667);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CA0303").s().p("ADAGNQgTgFgNgKQgNgLgHgQQgIgPgHgYIgVhZIjYAAIgUBQIgTBQQgOAGgWAFQgSAEgbAAQg8AAgegWQgdgXAAgoQgBgTAGgRIAKgqQAHgcAQg6IAhhvIAnh6IBfkdQAWgOAogLQAqgLApAAQA7AAAvASQAtATAOAoQATA6AcBhICNITQgOASgcALQgdALgoAAQgbAAgWgFgAgohPQgUBAgSBFICUAAIhCj+IgGAAg");
	this.shape_52.setTransform(95.8,30.7,0.667,0.667);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CA0303").s().p("AiaGHQgzAAgfggQgeggAAg3IAAofQAAg3AeggQAeggA0AAIGLAAQAIANAHAYQAHAZgBAYQABAxgVAUQgTAVghAAIj8AAIAAB3IENAAQAJAPAGAWQAHAXAAAZQAAAwgUAUQgSAVghAAIjcAAIAACHIEzAAQAJAOAGAXQAHAXAAAaQAAAxgTAVQgUAVghAAg");
	this.shape_53.setTransform(49.6,30.8,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.instance_1},{t:this.instance},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-358.5,-76.4,1280,720);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		this.parent.playSfx('sfx1');
		this.parent.initContentButton();
	}
	this.frame_52 = function() {
		this.parent.playSfx('sfx2');
	}
	this.frame_100 = function() {
		this.parent.playSfx('sfx2');
	}
	this.frame_179 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(50).call(this.frame_52).wait(48).call(this.frame_100).wait(79).call(this.frame_179).wait(1));

	// Layer 10
	this.b2 = new lib.Symbol2copy();
	this.b2.parent = this;
	this.b2.setTransform(406.7,266.7,1.765,0.419,0,0,0,-0.1,0.1);
	new cjs.ButtonHelper(this.b2, 0, 1, 1);

	this.b1 = new lib.Symbol2copy();
	this.b1.parent = this;
	this.b1.setTransform(-410.8,266.7,1.765,0.419,0,0,0,-0.1,0.1);
	new cjs.ButtonHelper(this.b1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2}]}).wait(180));

	// title
	this.instance = new lib.Symbol3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-34.5,1,1,0,0,0,281.5,283.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0,alpha:1},13,cjs.Ease.get(1)).wait(167));

	// txt1
	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(181.2,30.2,0.1,0.1,0,0,0,1.5,93);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100).to({_off:false},0).to({regX:1.6,regY:92.9,scaleX:1.1,scaleY:1.1,x:181.3},5).to({scaleX:1,scaleY:1},8).wait(67));

	// txt2
	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-179.2,0.6,0.1,0.1,0,0,0,419.6,119);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(52).to({_off:false},0).to({regX:419.4,scaleX:1.1,scaleY:1.1,y:0.7},5).to({scaleX:1,scaleY:1,x:-179.3},8).wait(115));

	// woman_head
	this.instance_3 = new lib.women_head_talking("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(127,140.2,0.686,0.686,0,0,0,112.6,176.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100).to({mode:"synched",loop:false},0).wait(80));

	// man_head
	this.instance_4 = new lib.man_head_loop("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-156.4,130.5,0.614,0.614,0,0,0,113.8,196.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21).to({mode:"synched",loop:false},0).wait(52).to({mode:"single",startPosition:73},0).wait(107));

	// Layer_1
	this.instance_5 = new lib.ClipGroup_7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,0.667,0.667,0,0,0,960,540);

	this.instance_6 = new lib.ClipGroup_8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(29.2,153.8,0.667,0.667,0,0,0,28.1,24);

	this.instance_7 = new lib.ClipGroup_9();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.667,0.667,0,0,0,960,540);

	this.instance_8 = new lib.ClipGroup_10();
	this.instance_8.parent = this;
	this.instance_8.setTransform(119.3,205.4,0.667,0.667,0,0,0,71.4,81);

	this.instance_9 = new lib.ClipGroup_11();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,0,0.667,0.667,0,0,0,960,540);

	this.instance_10 = new lib.ClipGroup_12();
	this.instance_10.parent = this;
	this.instance_10.setTransform(135.2,197.4,0.667,0.667,0,0,0,73.4,95.5);

	this.instance_11 = new lib.ClipGroup_13();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,0.667,0.667,0,0,0,960,540);

	this.instance_12 = new lib.ClipGroup_14();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-34.5,167.7,0.667,0.667,0,0,0,28.5,24.5);

	this.instance_13 = new lib.ClipGroup_15();
	this.instance_13.parent = this;
	this.instance_13.setTransform(0,0,0.667,0.667,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(180));

	// btns
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AheB6QgJgNAAgOQAAgTAJgMQAKgLARgJIBagwIh/hHIgBgQQAAgIACgLQACgJAFgGQAEgHAIgEQAGgEANAAQALAAAKAFQAKAEAQAKIBvBFQANATAAAfQAAAWgGANQgGAMgMAIIiOBYQgYgHgKgMg");
	this.shape.setTransform(451.9,269.3,0.667,0.667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag4CSQgZgWAAgyIAAjsIAQgDQAKgDANAAQAWAAANAJQAMAJAAAbIAAAkIBEAAIAGAPQADAKAAAKQAAAUgIAIQgJAJgNAAIgvAAIAABTQAAAPAJAFQAIAGAQAAIAQgBIAOgEIAIAOQAEAJAAAJQAAAWgPAMQgOAOgmAAQgsAAgZgXg");
	this.shape_1.setTransform(430.4,268.2,0.667,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAuB/QgLgKgMgSIgbgrIg1BSIgKAAQgbAAgOgLQgNgLAAgSQAAgNAGgLQAIgNAMgPIAqgyIhGhXQAEgVAMgNQANgOASAAQARAAAJAJQALALAKAOIAgAvIA3hRQAdAAARALQAQALAAASQAAAFgCAIQgBAGgEAGIg5BJIBEBfQgDAWgNALQgNANgSAAQgTgBgMgMg");
	this.shape_2.setTransform(414.1,270,0.667,0.667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmCGQgZgIgVgTQgSgSgMgcQgMgdAAgjQAAgkAMgbQALgaASgRQATgRAWgIQAXgIAYAAQAbAAAXAJQAXAJAQAPQARAPAIAWQAJAWAAAZQAAASgKAKQgJAKgSADIh/AUQAGATASAJQAQAJAXAAQAVAAATgGQATgGAMgHQAIAFAGAKQAFAKAAALQABAZgWAMQgQAKgVADQgUADgUAAQgdAAgagJgAgShFQgIAEgGAHQgFAGgDAKQgDAIgBAJIBXgPQgBgLgKgLQgJgLgUAAQgLAAgKAEg");
	this.shape_3.setTransform(395.5,269.9,0.667,0.667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA0CnQgRgGgLgYIhOizIgDABQADAhAAAbIAACTIgRAEIgXABIgVgBQgJgDgFgFQgGgEgDgJQgDgHAAgQIAAkUQAHgKAPgGQAOgFASgBQAUABARAGQARAGALAXIAyBwIAOAfIAOAkIACgBIgCg7IgBiVIASgEQALgBAMgBQAWABAMAIQAMAJAAAbIAAEcQgHAHgOAFQgOADgTAAQgSAAgSgFg");
	this.shape_4.setTransform(374.3,267.7,0.667,0.667);

	this.instance_14 = new lib.ClipGroup_5();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,0,0.667,0.667,0,0,0,960,540);

	this.instance_15 = new lib.ClipGroup_6();
	this.instance_15.parent = this;
	this.instance_15.setTransform(409.3,265.4,0.667,0.667,0,0,0,137.1,43.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAtCxQgMgHgQgWIgzhFIAABlIgRADQgJACgNAAIgUgBQgIgCgHgFQgHgGgDgIQgDgIAAgOIAAlAIAQgDQAKgCANAAIAUABQAIABAIAGQAGAEADAJQAEAIgBAPIAACRIBYhhQAcAAAQANQAQANAAATQAAAKgCAGQgDAGgFAHQgGAIgJAIIgxAtIBTBZQgDAagMAOQgLAOgXAAQgRAAgMgJg");
	this.shape_5.setTransform(-370.8,266.9,0.667,0.667);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYCEQgbgJgTgTQgSgTgLgaQgKgaAAgfQAAglALgbQAMgbASgSQASgQAagKQAZgJAbAAQAlAAAVAOQAUAPABAWQgBALgFAJQgDAJgHAHQgLgGgKgDQgLgDgQAAQgMAAgNADQgMAGgHAIQgJAIgFANQgFAMAAARQAAAiATARQAQARAbAAQAQAAALgDQAMgEAIgEQALAHAFAKQAFAJAAANQAAAWgUANQgUAMgkAAQggAAgagLg");
	this.shape_6.setTransform(-389.3,269.9,0.667,0.667);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgwCKQgWgFgQgMQgQgLgJgRQgIgSAAgWQAAgnAVgTQAVgUAtgFIBDgIIAAgEQAAgQgOgHQgMgHgZAAQgTAAgTAFQgUAFgOAGQgGgFgFgLQgFgJAAgMQAAgOAHgJQAGgIAOgHQAQgGATgCQAVgDASAAQAbAAAXAGQAWAFARANQAQANAJATQAJATAAAaIAAB7QAAAPgHAJQgIAJgKAHQgiAVg9AAQgZAAgXgFgAgBAaQgQACgIAFQgJAFAAAMQAAALAIAHQAIAHASAAIATgCQAMgDAEgDIAAgsg");
	this.shape_7.setTransform(-407.5,269.9,0.667,0.667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag5CvIgZgFQgMgCgLgFQgdgLAAgdIAAkCQAAgMAGgGQAFgGAMgEQATgHAZgDQAagDAcAAQBBAAAkAYQAkAXAAAyQAAAagOARQgNASgXAJQAaAIARATQASAVAAAfQAAA2gmAbQgmAahHAAgAguBjQAIACALABIAWABQATAAAOgJQAOgKAAgTQAAgTgLgHQgLgIgXABIgrAAgAgehmIgQACIAABAIAmAAQAWAAAKgIQAKgJAAgRQAAgPgMgJQgMgJgWAAg");
	this.shape_8.setTransform(-426.7,267.7,0.667,0.667);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAtCIQgQgIgKgGIhvhFQgNgSAAggQAAgWAGgNQAGgMAMgIICOhYQAZAHAJAMQAJANAAAOQAAAUgJAKQgJALgSAKIhaAwIB/BHIABAQIgCATQgCAIgFAHQgEAHgIAEQgIAEgLAAQgLAAgKgFg");
	this.shape_9.setTransform(-452.9,269.3,0.667,0.667);

	this.instance_16 = new lib.ClipGroup_3_0();
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,0.667,0.667,0,0,0,960,540);

	this.instance_17 = new lib.ClipGroup_4();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-409.3,265.4,0.667,0.667,0,0,0,137.1,43.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_15},{t:this.instance_14},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(180));

	// bg
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DAC2C0").s().p("EiV/ALGIAA2LMEr/AAAIAAWLg");
	this.shape_10.setTransform(0,312.7,0.667,0.667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFDD").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_11.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-360,1280,720);


// stage content:
(lib.scene11 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		createjs.Touch.enable(stage, true, true);
		
		var audioPath = "audio/";
		var sounds = [
			{src:{mp3:"notification.mp3", ogg:"notification.ogg"}, id:"sfx1"},
			{src:{mp3:"popup.mp3", ogg:"popup.ogg"}, id:"sfx2"}
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
				window.location = "../scene10/scene10.html";
			});
			
			_this.mc_main.b2.addEventListener("click", function () {
				window.location = "../scene12/scene12.html";
			});
		}
		
		this.playSfx = function (pSfx) {
			createjs.Sound.play(pSfx);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.mc_main = new lib.Symbol4();
	this.mc_main.parent = this;
	this.mc_main.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.mc_main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,325.5,1280,754.5);
// library properties:
lib.properties = {
	id: '8C57FB36DEEE483FA89D6DC3957FC516',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/scene11_atlas_.png", id:"scene11_atlas_"}
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
an.compositions['8C57FB36DEEE483FA89D6DC3957FC516'] = {
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