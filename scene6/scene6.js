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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22,p:{x:97.3,y:143.8,scaleX:0.667,scaleY:0.667}},{t:this.shape_21}]}).to({state:[{t:this.shape_22,p:{x:102.4,y:140.8,scaleX:0.667,scaleY:0.667}},{t:this.shape_24,p:{scaleX:1,scaleY:1,x:79.4,y:148.7}},{t:this.shape_23,p:{scaleX:1,scaleY:1,x:80.7,y:154.6}}]},2).to({state:[{t:this.shape_25},{t:this.shape_22,p:{x:95.8,y:146.3,scaleX:0.465,scaleY:0.434}}]},3).to({state:[{t:this.shape_22,p:{x:96.5,y:144.9,scaleX:0.378,scaleY:0.414}},{t:this.shape_24,p:{scaleX:0.829,scaleY:0.582,x:79.5,y:149.6}},{t:this.shape_23,p:{scaleX:0.829,scaleY:0.582,x:80.5,y:153.1}}]},3).to({state:[{t:this.shape_25},{t:this.shape_22,p:{x:95.8,y:146.3,scaleX:0.465,scaleY:0.434}}]},3).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_22,p:{x:98,y:139.9,scaleX:0.465,scaleY:0.434}}]},3).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_22,p:{x:95.4,y:144.1,scaleX:0.465,scaleY:0.434}}]},3).to({state:[{t:this.shape_22,p:{x:97.3,y:143.8,scaleX:0.667,scaleY:0.667}},{t:this.shape_21}]},3).wait(40));

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


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E98B6F").ss(1.4,1,1).p("AA0gWQgaAagRAWQgKATgFATAATg/QgaAagVAZQgRASgGAM");
	this.shape.setTransform(5.5,36.3,1,1,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEB992").s().p("Ag7DXQgQgDgLgDQAFgTALgTQAQgWAagbQgaAbgQAWQgLATgFATQgLgDgHgFQgTgNgHgXIgBgCQAGgMAQgTQAVgZAcgaQgcAagVAZQgQATgGAMQgMgdAJgbQAFgSAUgXIAbghQg4hTgTgzQgUgtAkg1IACgDQBTg8gBBOIAAAIIAAAKQAABTBWBNIgIADQAkAZAhAoQA5BJASBDIiNAbIhTgOg");
	this.shape_1.setTransform(17,24.4,1,1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,0,28.7,48.2);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEB992").s().p("Ag9C8QgHg+gbi/IgWibIDYAAIAICOQAKC7ABBPQgrAhgtAAQgsAAgvghg");
	this.shape.setTransform(11.7,0,1,1,0,0,0,0,-22.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.5,44.2);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E98B6F").ss(1.4,1,1).p("AAdg7QgGAjgUAlQgRAkgPAL");
	this.shape.setTransform(16.2,26.9,0.667,0.667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E98B6F").ss(1.4,1,1).p("AAjhLQgCAYgaA3QgZA5gQAO");
	this.shape_1.setTransform(12.8,25.9,0.667,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E98B6F").ss(1.4,1,1).p("AAkhXQABAXgcBEQgcBGgQAO");
	this.shape_2.setTransform(9.7,23.8,0.667,0.667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEB992").s().p("AgBD1Qg1gFgYgaQgRgRAKgZQAthpAKhiQADgZgJgJQgJgJgPAnQgUA2gPAZQgVAjgTgHQgXgJgDgQQgEgZAchDQAfhRAMgaQARgmAjgiQAhgdAyALQAwAKAUAfQAWAiASBfQAVBngMA5QgXBFgGANQgTAkglAbQgTANgiAAIgVgBg");
	this.shape_3.setTransform(10.9,16.4,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.7,32.8);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEB992").s().p("Ag5CoQAAgzgLhrIgSisIgDgWQBXhHBcBHIgBAfQgGChghCpQgXArgaAAQgbAAgfg0g");
	this.shape.setTransform(9,2.6,1,1,0,0,0,0,-19.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18,44.1);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEA400").s().p("AmGgXIMBhDQAGAyAGBAIsGBDQgFg0gCg+g");
	this.shape.setTransform(26.3,57.5,0.667,0.667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D72E4E").s().p("Al9AfQAekWBrh0QBZhiBGgMQBVgPBvBdQB8BpBMD9QA8DEAWD6IsGBEQgWjzAWjLg");
	this.shape_1.setTransform(26.2,31.8,0.667,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFE98").s().p("AgqAUQghgagCgZICagOQADAdgOAbQgQAggdADIgGAAQgaAAgfgag");
	this.shape_2.setTransform(36.9,63,0.667,0.667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFE98").s().p("AgxAUQgagagCgaICagOQACAbgUAdQgWAhgeADIgEABQgbAAgZgbg");
	this.shape_3.setTransform(26.5,64,0.667,0.667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFE98").s().p("Ag5AUQgRgYgDgdICagNQACAZgbAfQgcAigeADIgFAAQgaAAgUgbg");
	this.shape_4.setTransform(16.2,64.9,0.667,0.667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFE98").s().p("AgpAUQgkgZgCgaICagNQAKAhgKAZQgLAcgeADIgJAAQghAAghgZg");
	this.shape_5.setTransform(47.4,62.1,0.667,0.667);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFE98").s().p("AhCAYQgOgYAEghICagOQACAageAfQghAiglAEIgFAAQgbAAgOgYg");
	this.shape_6.setTransform(5.9,65.8,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.7,69);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB28D").s().p("AgIDpQgXgCAAgWQgBgpAJhIIANhgQACgXgLgHQgMgIgHAmQgLA4gHAWQgKAjgNAAQgYgBgIgRQgMgZAMhCQAQhlAHgfQAKgtAbglQAYgfAyAMQAtAKAaAcQAVAWACAvQADAtgPBRQgKA8gUA2QgWA7gbAnQgMARgSAAIgEAAg");
	this.shape.setTransform(17.3,21.7,1,1,0,-26.7,153.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.6,42.7);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB28D").s().p("AiOFDQgPigABiKQABhdANhUQAHgwAah4IAPg+QCgiOBbCOIgWBIIgtCTQgdBogOBaQgOBcgJCBIgLDFIiNAFQgHg0gHhPg");
	this.shape.setTransform(25.7,43.9,1,1,-26.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.1,90.2);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#67616D").s().p("AlhCfQiLnWARh3QATiMCDgcQB/gbB8BeQCsCCCzFHQCuE/AbDeQACANgHAKQgIAKgMADQh+AajEAgQjoAmhsAGQhKjThGjrg");
	this.shape.setTransform(23.2,21.3,0.667,0.667,13,0,0,-12,-31.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50.6,83.2);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(90));

	// Layer_4
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#514030").s().p("AhvBSQgQgQAJgVIAshpQAIgUAVgIQAUgHAUAKIBsA2QAVALgCAWQgCAXgXAGQhMAVhgAlQgHADgHAAQgMAAgKgKg");
	this.shape_7.setTransform(117.3,78.6,0.667,0.667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#514030").s().p("ABNBTQhWgahSgOQgWgEgEgVQgEgVASgMIBjg9QARgLAUAFQAUAFAKATIAzBfQAKATgNAQQgKANgOAAIgKgCg");
	this.shape_8.setTransform(188.4,74,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8,p:{y:74}},{t:this.shape_7,p:{y:78.6}}]}).to({state:[{t:this.shape_8,p:{y:76.5}},{t:this.shape_7,p:{y:81.1}}]},29).to({state:[{t:this.shape_8,p:{y:81.5}},{t:this.shape_7,p:{y:86.1}}]},2).to({state:[{t:this.shape_8,p:{y:89}},{t:this.shape_7,p:{y:93.6}}]},2).to({state:[{t:this.shape_8,p:{y:81.5}},{t:this.shape_7,p:{y:86.1}}]},16).to({state:[{t:this.shape_8,p:{y:76.5}},{t:this.shape_7,p:{y:81.1}}]},2).to({state:[{t:this.shape_8,p:{y:74}},{t:this.shape_7,p:{y:78.6}}]},2).wait(37));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10,p:{scaleY:0.667,y:135.2}},{t:this.shape_9,p:{scaleY:0.667,y:130.5}}]}).to({state:[{t:this.shape_10,p:{scaleY:0.282,y:136.3}},{t:this.shape_9,p:{scaleY:0.322,y:130.5}}]},29).to({state:[{t:this.shape_10,p:{scaleY:0.159,y:135.5}},{t:this.shape_9,p:{scaleY:0.181,y:131.4}}]},2).to({state:[{t:this.shape_12},{t:this.shape_11}]},2).to({state:[{t:this.shape_10,p:{scaleY:0.159,y:135.5}},{t:this.shape_9,p:{scaleY:0.181,y:131.4}}]},16).to({state:[{t:this.shape_10,p:{scaleY:0.282,y:136.3}},{t:this.shape_9,p:{scaleY:0.322,y:130.5}}]},2).to({state:[{t:this.shape_10,p:{scaleY:0.667,y:135.2}},{t:this.shape_9,p:{scaleY:0.667,y:130.5}}]},2).wait(37));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13,p:{x:121.2,y:172}}]}).to({state:[{t:this.shape_15},{t:this.shape_13,p:{x:119.2,y:169.7}}]},29).to({state:[{t:this.shape_16},{t:this.shape_13,p:{x:119.2,y:169.7}}]},2).to({state:[{t:this.shape_19,p:{scaleX:0.667,scaleY:0.667,x:119.2,y:169.7}},{t:this.shape_18},{t:this.shape_17}]},7).to({state:[{t:this.shape_19,p:{scaleX:0.453,scaleY:0.453,x:124.4,y:176.2}},{t:this.shape_20,p:{scaleY:1,y:181}}]},3).to({state:[{t:this.shape_21},{t:this.shape_13,p:{x:122.8,y:169.7}}]},3).to({state:[{t:this.shape_19,p:{scaleX:0.667,scaleY:0.667,x:119.2,y:169.7}},{t:this.shape_18},{t:this.shape_17}]},3).to({state:[{t:this.shape_23},{t:this.shape_22}]},3).to({state:[{t:this.shape_19,p:{scaleX:0.453,scaleY:0.877,x:124.4,y:173.6}},{t:this.shape_20,p:{scaleY:1.935,y:182.9}}]},3).to({state:[{t:this.shape_16},{t:this.shape_13,p:{x:119.2,y:169.7}}]},3).wait(34));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29,p:{scaleX:0.667,x:207.2,y:125.7}},{t:this.shape_28,p:{scaleX:0.667,x:208.2,y:130.5}},{t:this.shape_27,p:{scaleY:0.667,rotation:0,y:143.7,scaleX:0.667}},{t:this.shape_26,p:{scaleX:0.667,rotation:0,x:96.5,y:130.7}},{t:this.shape_25,p:{rotation:0,x:95.1,y:136}},{t:this.shape_24}]}).to({state:[{t:this.shape_29,p:{scaleX:1.084,x:206.2,y:125.7}},{t:this.shape_28,p:{scaleX:0.817,x:207,y:130.5}},{t:this.shape_27,p:{scaleY:0.431,rotation:-7.5,y:143.8,scaleX:0.667}},{t:this.shape_26,p:{scaleX:0.765,rotation:15,x:98.4,y:130.8}},{t:this.shape_25,p:{rotation:15,x:96.8,y:137}},{t:this.shape_30,p:{scaleX:0.667}}]},29).to({state:[{t:this.shape_29,p:{scaleX:1.084,x:207.3,y:123.5}},{t:this.shape_28,p:{scaleX:0.817,x:208.4,y:131.8}},{t:this.shape_27,p:{scaleY:0.431,rotation:-7.5,y:143.7,scaleX:0.744}},{t:this.shape_26,p:{scaleX:0.765,rotation:15,x:98.4,y:128.2}},{t:this.shape_25,p:{rotation:15,x:94.7,y:137.3}},{t:this.shape_30,p:{scaleX:0.713}}]},2).to({state:[{t:this.shape_29,p:{scaleX:1.084,x:206.2,y:125.7}},{t:this.shape_28,p:{scaleX:0.817,x:207,y:130.5}},{t:this.shape_27,p:{scaleY:0.431,rotation:-7.5,y:143.8,scaleX:0.667}},{t:this.shape_26,p:{scaleX:0.765,rotation:15,x:98.4,y:130.8}},{t:this.shape_25,p:{rotation:15,x:96.8,y:137}},{t:this.shape_30,p:{scaleX:0.667}}]},20).to({state:[{t:this.shape_29,p:{scaleX:0.667,x:207.2,y:125.7}},{t:this.shape_28,p:{scaleX:0.667,x:208.2,y:130.5}},{t:this.shape_27,p:{scaleY:0.667,rotation:0,y:143.7,scaleX:0.667}},{t:this.shape_26,p:{scaleX:0.667,rotation:0,x:96.5,y:130.7}},{t:this.shape_25,p:{rotation:0,x:95.1,y:136}},{t:this.shape_24}]},2).wait(37));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]}).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,216.1,208.6);


(lib.man_hand_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#67616D").s().p("AGZJLQhRgMlshAQlthAhQgRQgMgDgOgTQgOgUACgNQAfkDBjjrQB4kfCrhsQCRhcB9AaQBxAYBkB6QB+CZAJE8QAGD3g+ELQgDAMgUAOQgRAMgLAAIgEAAg");
	this.shape.setTransform(34.7,39.1,0.667,0.667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DC9076").ss(1.6,1,1).p("AghhVQAFAwAWA3QAVA0ATAQ");
	this.shape_1.setTransform(14.5,176.1,0.667,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#DC9076").ss(1.6,1,1).p("AgmhsQgBAiAdBPQAcBSAVAW");
	this.shape_2.setTransform(19.3,175.1,0.667,0.667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#DC9076").ss(1.6,1,1).p("Agnh9QgEAfAfBjQAfBkAVAV");
	this.shape_3.setTransform(23.8,172.5,0.667,0.667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FAB28D").s().p("AhODlQgggcgOgjQgFgMgQhCQgRhFAehqQAYhXAcgjQAVgcAtgFQAvgGAcAdQAeAjAOAsQAJAeAZBkQASBBgFAWQgEAOgVAGQgSAFgQgiQgMgZgPgzQgKglgJAIQgJAHABAXQAABgAmBvQALAfhHAKQgVADgRAAQgnAAgSgPg");
	this.shape_4.setTransform(22.4,160.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAB28D").s().p("AirKOQgajuALjhQAEhQAWjBQAajgACgcQANiOAZhFQAuh7BkAJQBpAJAZBrQAQBFgPCoQgHBTgrCrQg1DZgIAlQgUBrgUCEQgUCHgIBVg");
	this.shape_5.setTransform(28.8,81);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.man_hand_right, new cjs.Rectangle(0,0,69.4,184.6), null);


(lib.man_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D36C81").s().p("ApmFZQicgeiwg2QhRgZkSheQA/lHBBjgQE5CMFzA+QFsA9H3AAQCaAAEygqQEngoBpghQApDxAXEaQh0AvkGAvQkvA2jzAAQqCAAlehBg");
	this.shape.setTransform(95.2,86.3,0.667,0.667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF9378").s().p("AjJi+IGTAWIh7Fng");
	this.shape_1.setTransform(124.2,42.7,0.667,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D36C81").s().p("AE0HHQk9hzlIjnQiLhihVhSQhXhUAAgnQAGgrAZhIQAehWAhgoQANgPASgEQASgFARAIQBCAdECCHQFLCiHiC2IkoGBQgIAKgNAEQgFABgGAAQgHAAgGgCg");
	this.shape_2.setTransform(74.7,30.5,0.667,0.667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D36C81").s().p("ABBENQgSAAgQgIQgRgJgKgOIlengIG8AAID5gaIilHuQgGAUgMALQgMAMgMAAg");
	this.shape_3.setTransform(123.9,51.4,0.667,0.667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D36C81").s().p("ABnD9IlGlMIGui3IARBZIgzF6QgHAlgVAOQgKAHgJAAQgLAAgMgKg");
	this.shape_4.setTransform(152.4,39.6,0.667,0.667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCF152").s().p("Ar8HRQh9geiag8QjMhPhJgXQAvkAAlikQAzjiA8izQEKB3FzA/QGIBDHjAAQDUgKD9gqQDXghCYgoQBKFwAcHMQh2AwkUAyQk1A2jnAAQsQAAlvhXg");
	this.shape_5.setTransform(94.7,87.4,0.667,0.667);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AAAAAA").s().p("ApkSbQlgg2j1haQhjgjgrg7Qglg1AOg8QAPhMBLmgQA3kqAri5QB/ofDTlVQB1i8FIgTQBqgHC1AKQDYAMA6AAIHmAAQCEAABDAcQBoAqBhCJQCJDDBcHxQBhIMAJKkQAAA+gOAuQgSA7glATQitBaiFAhQixArk/AKQh3AEh0AAQnfAAmWg/g");
	this.shape_6.setTransform(91.9,84.8,0.667,0.667);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EF9378").s().p("AhCi3ICFAAIiFFvg");
	this.shape_7.setTransform(103.9,43.2,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.man_body, new cjs.Rectangle(0,0,183.9,167.6), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	mask.setTransform(960,540);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18721A").s().p("AKALhQjch3j/iyI1YAAQiwAAh9h9Qh9h9AAixIAAn6QAAiwB9h+QB9h9CwAAMAlnAAAQCwAAB9B9QB9B+AACwIAAH6QAACxh9B9Qh9B9iwAAIk/AAQApDTB1CcQA6BOAxAkQi7gKlDiugA2WrQQheBeAACFIAAH6QAACFBeBfQBeBeCFAAIWPAAQDnC5ECCUQCBBLBSAlQhRhXgvi+QgPg8gLg+IgGgzIG8AFQCEAABfheQBehfAAiFIAAn6QAAiGhehdQhfheiEgBMglnAAAQiFABheBeg");
	this.shape.setTransform(396.4,389.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AWXgQQhfheiEAAMglnAAAQiFAAheBeQhaBZgEB+IAAhNQAAiEBeheQBeheCFAAMAlnAAAQCEAABfBeQBeBeAACEIAABNQgEh+hahZg");
	this.shape_1.setTransform(396.4,327.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AMuL4QlXifm5k1IzRAAQiFAAheheQheheAAiEIAAn8QAAiFBeheQBeheCFAAMAlnAAAQCEAABfBeQBeBeAACFIAAH8QAACEheBeQhfBeiEAAImKAAQAMCeAnBqQA+CsCTCCQhUgSishQg");
	this.shape_2.setTransform(396.4,393.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(233.4,297.4,326,184.1), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aw4URQAAkPAwmRQAvmQBQmUQBUmwBklAQBtliBsibIM/AAQCOCaCPF6QCBFSBwHPQBnGtA+GpQA/GmgBEQg");
	mask.setTransform(108.1,144.1);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEA401").s().p("AgJAAQgBgKAKAAQALAAAAAKQAAALgLAAQgKAAABgLg");
	this.shape.setTransform(129.4,86);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEA401").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_1.setTransform(149.5,77.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEA401").s().p("AgKAAQABgKAJAAQAKAAAAAKQAAALgKAAQgJAAgBgLg");
	this.shape_2.setTransform(127.5,77.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEA401").s().p("AgKAkQgNgCgKgIQgJgHAAgOQgBgLAHgKQAPgUAZABQANAAAKAHQALAIAEAMQAEAOgIALQgHAKgQAGIgBAAQgIADgIAAIgIAAgAgVAGIAAAAIABACIABABIABACIADACIABAAIAAAAIABAAIAFACIAIAAIAIgDIABAAIABAAIACgBIAFgDIAAgBIACgBIADgFIgBgBIABAAIgDgHIgDgCIgDgDIgBAAIAAAAIgBAAIgFgCIAAAAIgBAAIgGABIgGABIgCAAIAAABIgFADIgEAEIABgBIgBABIgCACIAAABIAAAAIgBAEIAAACIAAAAIAAABg");
	this.shape_3.setTransform(181.1,268.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEA401").s().p("AgRAhQgJgGgFgLQgFgKABgKQABgOAIgIQAIgKAMgCQAPgDAJAIQAJAHAGAOIABABIAAAAQAEALgCALQgCANgIAIQgJAIgNAAQgMAAgJgHgAAHASIACAAIgBAAIACgBIAAAAIABgBIABgCIABgDIAAACIAAgBIACgFQgBABAAgBIABgBIAAgFIgCgGIAAgBIgBAAIgBgDIgCgDIAAAAIgBgBIgCgDIgBAAIgBgBIAAAAIgBAAIgCAAIgBAAIgEABIgBAAIABAAIgBAAIgEADIAAAAIgCACIABgBIgCAEIAAgBIgCAGIAAAEIABAAIABAEIAAACIAAAAIACADIABACIABABIABABIABABIAAAAIAEACIAAAAIAAAAIADABIAGAAIABAAg");
	this.shape_4.setTransform(104.6,77.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEA401").s().p("AgJAAQAAgKAJAAQAKAAAAAKQAAALgKAAQgJAAAAgLg");
	this.shape_5.setTransform(87.7,173.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEA401").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_6.setTransform(79.8,175.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEA401").s().p("AgKAAQAAgKAKAAQALAAgBAKQABALgLAAQgKAAAAgLg");
	this.shape_7.setTransform(116.4,167.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEA401").s().p("AgQAnQgKgIgFgOQgFgMAAgLQABgPAHgJIABgBIAAgBQAKgNAPABQAOABAKALQATATgGAYQgIAbgTAGIgIABQgHAAgJgGgAgIgVIgEAGIgBACIgBADIAAAAIAAAFIAAAFIAAABIABADIABAFIABABIABACIADAGIAEAEIABAAIACABIAAABIABAAIABgBIAAAAIABgBIABAAIAEgEIAAgBIACgDIACgEIAAAAIABgBIACgHIAAgEIgDgJIgCgDIAAAAIgBgBIgEgEIgBAAIgBgBIgDgBIgCgBIgDAAIgBAAIAAAAIgBAAIABAAIAAAAIgCACIABgBg");
	this.shape_8.setTransform(49.5,79);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEA401").s().p("AgZAqIgBAAIgCgBQgSgIgEgQQgEgQAJgPQAHgOAOgJQALgGANgBQAegBAOARQAKALgCAPQgDANgOAOQgMALgRAGQgIADgIAAQgIAAgHgDgAgaARIACACIAAAAIADACIAAAAIABAAIADABIACAAQgBAAABABIABAAIAFAAIADgBIACAAIAGgCIADgBIACgBIAKgGIABgBIAAAAIAGgGIABgBIACgDIACgDIAAgBIABgBIABgCIAAgDIgBgCIAAAAIAAgBIgBgBIAAgBIgGgDIgCgBIgJgDIgCgBIgFAAIgIAAIAAAAIgFACIgBAAIAAAAIgHAEIgGAGIgBABIgBABIgCAFIgBABIAAABIgCADIAAACIAAAGIAAACIABABIAAACIACACIgBgBg");
	this.shape_9.setTransform(86.5,60.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEA401").s().p("AgPAkQgNgEgHgMQgMgUAMgTQAGgLANgFQALgEAMACQANACAKAJQAJAKACAMQADAOgHALQgHALgPAEIgCABQgIACgGAAQgHAAgHgDgAgEARIABAAIADAAIAEAAIAAAAIADgBIAEgBIABAAIACgCIACgBIABgBIADgEIABgEIgBgCQAAAAABgBIgCgDIgBgCIgCgDIABAAIgBAAIAAgBIgCgCIgGgEIgCAAIgDgBIgHAAIgEABIgCABIAAAAIgDABIgCACIgCADIgBABIgBADIAAABIAAAEIABAEIABACIAAAAIABACIABABIACADIACABIgBAAIAEACIgBAAg");
	this.shape_10.setTransform(37,277.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEA401").s().p("AgcAkQgcgUACgZQAAgPAKgJQALgLATgBQAOgCARAGQASAHAJAKQANAOgCAOQgBARgUAPIAAAAQgOAKgRAAQgRAAgOgKgAAHAZIAHgCIABgBIAIgFIABAAIACgCIADgDIACgCIgBAAIACgDIACgEIAAgDIgBgCIAAAAIgBgCIgBgCIAAAAIgGgGIgBgBIgLgGIAAAAIgLgEIgDAAIgCgBIgLAAIgFABIgDABIgBABIAAAAIgEACIgBABIgCABIgBACIABgBIgCADIAAACIgBABIAAAFIACAGIAEAHIABABIAAgBIADAFIAEADIABABIAAAAIACABIAHAEIgBAAIABAAIAJADIAEAAIADgBIAAABg");
	this.shape_11.setTransform(19.4,244.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEA401").s().p("AgFAuQgXAAgMgKQgMgJABgPQABgYAXgTQAbgVAZAJQAUAHAFARQAFANgJARQgHAPgOAKQgPAKgPAAgAgFgTIgFACIgGAGIgGAGIgFAHIAAACIgBABIgBAEIAAABIAAADIAAACIABACIAAAAIADAEIACABIAGACIADAAIABAAIAMABQABgBgBAAIABAAIAEgBIAAgBIABAAIACgBIADgBIADgCIAAgBIABAAIAGgFIACgDIAAAAIABgBIAEgGIACgDIABgGIAAgEIgBgCIAAgBIAAgBIAAAAIgBgBIAAgBIgBAAIgCgCIAAAAIgFgDIAAAAIABAAIgBAAIAAAAIgDgBIgEgBIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgCAAIgFABIgDACIABgBIgFADg");
	this.shape_12.setTransform(42.7,231.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEA401").s().p("AgmAoQgSgMAAgUQAAgQALgNQAKgNAQgHQAdgOAYAMQAOAGAGAQQAFAQgEAOQgGASgQALQgOAKgTACIAAAAIgCAAIgCAAQgSAAgQgKgAggARIABABIACACIACACIAGAEIABAAIAJACIABAAIABABIAJAAIABgBIAAAAIAEAAIAIgDIACgBIAGgEIABAAIAAAAIABgBIAGgGIAAgBIAEgGIAAAAIACgGIAAgJIgBgBIAAgCIgBgDIgDgFQABABgBgBIgCgCIgBAAIgDgCIgBgBIgBAAIgFgBIgBgBIABABIgKgBIgDABIAAAAIgMADIgBABIgEABIgFAEIgCABQgCABACAAIgIAHIgFAIIgBAEIAAABIAAABIAAAEIABADIAAABIAAAAg");
	this.shape_13.setTransform(51.4,152.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEA401").s().p("AgVAiQgNgHgIgOQgIgNADgOQADgNAMgHQALgGAOAAQAgAAAPAYIAAAAQALAQgEAPQgEANgNAHQgLAGgMAAQgNAAgPgHgAgOAMIAFADIACABIAIACIABAAIACABIAFAAIAKgCIABgBIgCABIAFgDQgBABABAAIABgBIABgCIAAAAIABgBIAAAAIAAgBIAAgFIgBgFIAAABIAAgBIgEgFIAAgBIgEgEIgIgFIgBAAIAAAAIgKgDIAAAAIgDAAIgGAAIgCAAIACAAIgHABIgCABIgCABIgBABIAAAAIgBABIgBABIgBACIAAACQAAABAAgCIAAADIAAABIAAAAIAAACIACAEIABABIADAFIADAEIABAAIAAAAg");
	this.shape_14.setTransform(179.5,49.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEA401").s().p("AgQAoIgBAAQgSgEgIgMQgHgLAEgOQAIgZAcgLQAKgEAPABQARADAJALQAKALgDAPQgCALgKALQgLALgNAFQgJADgIAAIgLgBgAgQASIAGACIABAAIADAAIADAAIAAAAIAFgBIAMgGIABgBIACgCIACgCIADgDIABgBIAAgBIACgCIABgBIABgEIAAgEIAAgCIgBgBIgBgBIgCgBIAAgBIgGgDIgBAAIgCgBIgDgBIgHAAIgEACIgDAAIgBABIAAAAIgBAAIgCABIgGAEQgCABACAAIgHAGIgBACIgDADIAAABIAAgBIgBAGIAAACIAAACIAAAAIABACIgBgBIABABIAAAAIADACIAEADIAAgBg");
	this.shape_15.setTransform(63.8,193);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEA401").s().p("AAAA1QgWAAgPgMQgNgMgCgTQgBgOAHgPQAHgPAMgJQAPgKARABQASABANALQALAKAEAQQAEAOgFAPQgFARgNAKQgOALgSAAgAgPAdIADABIAEABIACAAIAGABIAFgBIAAAAIAJgCIABgBIADgCIABgBIADgCIACgDIABAAIADgGIAAgBIABgDIACgHIAAgBIAAgCIAAgFIAAgBIgBgDIgDgJIgCgCIgFgFIgCgCIgDgBQACAAgDgBIgGgBIgBgBIgHAAIgBABIABgBIgJADIAAAAIgBAAIABAAIgBABIgGADIgBABIgCABIgCADIgBABIgBACIgEAGIgBACIgBADIgBAFIAAAKIAAACIABADIABABIAAACIACACIAAABIACACIACACIAAAAIABABIAAAAIAFADIgBgBg");
	this.shape_16.setTransform(149.6,228.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEA401").s().p("AgPAvIgBgBIgBAAIAAAAQgVgFgKgNQgKgNADgQQACgMAKgLQAJgLAMgFQAPgIAPABQARABANAJQARAMACATQABAPgMAPQgLANgSAHQgLAEgKAAIgLgBgAgXAVIACABIADABIAKADIABAAIABAAIAFAAIACAAIgBAAIAIgCIADgBIABAAIABgBIAHgEIACgBIAAAAIABgBIAHgHIACgDIACgDIAAgBIABgEIAAgFIgBgCIAAAAIAAgBIgCgDIgBgBIgCgCIgFgEIgHgEIgDAAIgDgBIgBAAIgFgBIgDABIgBAAQgBgBgJADIgKAGIgBAAIgEAEIgFAGIABgBIgBABIgDAFIAAABIgBABIgBADIAAAEIABAEIAAABIADAEIACACQACABgCgBg");
	this.shape_17.setTransform(184,247.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEA401").s().p("AgeAoQgPgKgGgSIAAAAQgFgOAHgQQAGgPAOgIQAOgJARACQAWABANAKQAMAJAEAOQAEAOgGAOQgGAOgKAJQgNAKgTACIgFAAQgPAAgNgJgAgagQIgBACIgDAEIAAADIgBACIAAACIAAABIAAAEIABAEIABACIADAGIABACIAFAFIABABIADACIACABIABAAIABAAIACABIADABIACAAIABAAIAHAAIABAAIAHgBIADgBIAFgDIABgBIgBABIACgCIAEgEIABgBIAAAAIABgBIAEgHIAAAAIABgFIABgCIAAgFIAAgBIgBgEIgBgBIAAgCIgCgCIAAAAIgEgFIgFgDIgBAAIgPgEIgDAAIgGAAIgCAAIgDABIgHACIgCACIgCABQgCABACgBg");
	this.shape_18.setTransform(21.9,125.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEA401").s().p("AgZArQgNgGgFgOQgFgNACgNIAAAAIABgBIAAgBQADgQANgMQAOgNAQgBQARAAAQANQAMAKABAPQACALgHANQgFAMgKAIQgMAKgLACIgIABQgLAAgKgFgAgXgDIgBADIAAACIgBADIABAFIAAABIAAADIABACIAAAAIABABIABADIAEADIAAAAIADACIADABIADAAIAGAAIAFgBIAAAAIABgBIACgBIAEgCIABgBIAAAAIABgBIAJgJIADgHIACgDIAAgDIAAABIAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgFIAAABIAAgBIAAAAIgCgCIAAgBIgIgGIgFgDIgDAAIgBgBIgGAAIgFACIAAgBIgBABIgFADIgHAHIgBACIgDAFIgBABIABAAgAAZgMg");
	this.shape_19.setTransform(36.7,63.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEA401").s().p("AgJAlQgQgCgKgJQgLgJgCgOQgCgNAHgLQAOgSAdACQAfADAMARQAMARgJAPQgHAMgSAIIgCAAIgBABQgIACgJAAIgKgBgAgbgDIAAAFIADAFIABABIABABIABABIABABIAEACIABAAIAAABIALACIAKAAIABAAIAGgCIAGgCIADgCIACgBIABgCIABgBIACgCIAAgBIAAgBIAAAAIAAgCQAAACAAgBIgBgCIgBgCIgBgCIAAgBIgBgBIgCgBIgJgFIgLgCIgIgBIgFABIgGABIgCABIAAAAIgEACIgCACIgBACIAAAAg");
	this.shape_20.setTransform(202,152.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEA401").s().p("AgJAAQAAgKAJAAQAKAAAAAKQAAALgKAAQgJAAAAgLg");
	this.shape_21.setTransform(12.2,266.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEA401").s().p("AgJAAQAAgKAJAAQAKAAAAAKQAAALgKAAQgJAAAAgLg");
	this.shape_22.setTransform(205.8,254.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEA401").s().p("AgJAAQAAgKAJAAQAKAAAAAKQAAALgKAAQgJAAAAgLg");
	this.shape_23.setTransform(210.9,253.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEA401").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_24.setTransform(203.9,249.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FEA401").s().p("AgJAAQAAgKAJAAQAKAAAAAKQAAALgKAAQgJAAAAgLg");
	this.shape_25.setTransform(39.8,217);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEA401").s().p("AgJAAQAAgKAJAAQAKAAAAAKQAAALgKAAQgJAAAAgLg");
	this.shape_26.setTransform(154.3,135.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FEA401").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_27.setTransform(44.1,263.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEA401").s().p("AgJAAQAAgKAJAAQAKAAAAAKQAAALgKAAQgJAAAAgLg");
	this.shape_28.setTransform(38,261.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEA401").s().p("AgJAAQAAgKAJAAQAKAAAAAKQAAALgKAAQgJAAAAgLg");
	this.shape_29.setTransform(44.3,254.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FEA401").s().p("AgJAAQAAgKAJAAQAKAAAAAKQAAALgKAAQgJAAAAgLg");
	this.shape_30.setTransform(153.8,275.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FEA401").s().p("AgBALIgCgBIAAAAIgBgBIABAAIgBAAIAAAAIgBAAIABAAIgBAAIAAAAIgCgBIgCgBIgCgFIAAgCIABgEQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAEgDIAEgBIAAAAIACABIABAAIAEABIABABIACACIAAAAIADAFIABACQAAADgCACIgCADIgDACIgEABIgDgBg");
	this.shape_31.setTransform(147.3,258.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FEA401").s().p("AgJAAQAAgKAJAAQAKAAAAAKQAAALgKAAQgJAAAAgLg");
	this.shape_32.setTransform(142.6,253.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FEA401").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_33.setTransform(161,249.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEA401").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_34.setTransform(76.2,74.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FEA401").s().p("AgJAAQAAgKAJAAQAKAAAAAKQAAALgKAAQgJAAAAgLg");
	this.shape_35.setTransform(85,80.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FEA401").s().p("AgJAAQAAgKAJAAQAKAAAAAKQAAALgKAAQgJAAAAgLg");
	this.shape_36.setTransform(32.5,90.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FEA401").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_37.setTransform(32.5,98);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FEA401").s().p("AgJAAQAAgKAJAAQAKAAAAAKQAAALgKAAQgJAAAAgLg");
	this.shape_38.setTransform(31.9,134.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FEA401").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_39.setTransform(28,141.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FEA401").s().p("AgKAAQABgKAJAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_40.setTransform(101.3,96);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FEA401").s().p("AgKAAQAAgKAKAAQAKAAAAAKQAAALgKAAQgKAAAAgLg");
	this.shape_41.setTransform(105.9,102.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FEA401").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_42.setTransform(49.9,209.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FEA401").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_43.setTransform(41.1,206.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FEA401").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_44.setTransform(39.1,169.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FEA401").s().p("AgJAAQAAgKAJAAQAKAAAAAKQAAALgKAAQgJAAAAgLg");
	this.shape_45.setTransform(47.5,168.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FEA401").s().p("AgKAAQAAgKAKAAQAKAAAAAKQAAALgKAAQgKAAAAgLg");
	this.shape_46.setTransform(141.9,207.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FEA401").s().p("AgJAAQAAgKAJAAQAKAAAAAKQAAALgKAAQgJAAAAgLg");
	this.shape_47.setTransform(137.6,200.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FEA401").s().p("AgJAAQAAgKAJAAQAKAAAAAKQAAALgKAAQgJAAAAgLg");
	this.shape_48.setTransform(202.4,279.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FEA401").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_49.setTransform(179.6,157.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FEA401").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_50.setTransform(61.1,68.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FEA401").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_51.setTransform(68,60.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FEA401").s().p("AgJAAQAAgKAJAAQAKAAAAAKQAAALgKAAQgJAAAAgLg");
	this.shape_52.setTransform(125.2,146.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FEA401").s().p("AgKAAQAAgKAKAAQAKAAAAAKQAAALgKAAQgKAAAAgLg");
	this.shape_53.setTransform(122.1,138.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FEA401").s().p("AgHAqQgSgEgNgMQgPgNAAgPIAAgCQABgOALgJQAKgJAPgEQAcgHAVALQAOAHAFANQAFANgGANQgGASgSAJQgMAGgMAAIgKgBgAgaAHIAGAGIAMAGIAIADIACAAQAMAAAJgHQAEgEADgGIACgEIAAgFIAAgBIAAgCIAAgBIgCgEIgCgCIgBgBIgFgCIgEgCIgHgBIABAAIgCAAIgOAAIgLACIgDABIAAAAIgEACIgDADIAAgBIgBABIgCACIgCADIgBAEIAAABIABAEIACADQABABgBgBg");
	this.shape_54.setTransform(157.8,176.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FEA401").s().p("AgIAqQgPAAgLgIQgNgKgCgOQgDgQAKgOQALgPAOgEQALgDAMABQAgADAKAVIABADIABADQADANgKAOQgJANgQAIQgMAFgLAAIgDAAgAgZANIAAAAIABACIACABIAEACIACABIAGACIAJAAIACgBIAHgCIAJgGIABgBIACgBIAEgEIABgBIABgBIACgEIABgDIAAgCIAAgBIgBgCIAAAAIAAgBIgBgCIAAABIgBgBIgBgCIgCgBIABABIgEgDIgBAAIAAAAIgKgDIgBAAIgCAAIgKAAIgBAAIgBAAIgIACIgDACIgDADQgEADgCAFIgCAIIAAACQABADgBgDIABAEIAAAAg");
	this.shape_55.setTransform(177.4,142.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FEA401").s().p("AgRAzQgNgFgHgMQgIgPAAgSQAAgRAJgOQAJgRAPgDQAQgEATALQARAMAEAQQAEAOgFANQgLAbgaAKQgGADgHAAIgKgBgAgTAXIACACIACACIABABIAAAAIACABIAEABIADAAIAFgBIABgBIAHgEIABgBIAHgHIABgBIABgCIAEgGIAAgCIAAABIABgEIABgDIAAgBIAAgFIgCgGIAAgBIgCgCIAAgBIgFgFIgKgGIAAAAIgGgCIgBAAIgDABIgDAAIABAAIgFACIgBACIgCACIgBABIgEAGIAAAAIgCAIIgBADIAAABIAAANIAAABIABAEIACAGIAAgBg");
	this.shape_56.setTransform(115.5,196.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FEA401").s().p("AACArQgMAAgMgFQgNgGgEgKQgGgNADgOQAEgPAMgJQANgMAMgBQANgCAMAHQALAHAGAQIAAABIAAAAQAFANgDAOQgDAPgMAIQgKAHgNAAIgDgBgAAAAWIAIAAIABAAIAEgBIABAAQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBIACgCIABgBIABgBIAAAAIABgEIAAgDQABgFgBgDIABABIgBgBIgCgHIAAgCIgCgCIgBgDIgDgDIgCgBIgCgBQADAAgDAAIgCgBIgGAAIgEABIgBABIgCABIgEACIgBABIgGAFIgCADIgBADIgBABIgBAEIAAACIAAAEQgBABAAAAQAAABAAAAQAAABABAAQAAABABAAIABACIABACIACABIABABIABABIACABIAAAAIAEACIAFABIABAAIgBAAg");
	this.shape_57.setTransform(136.9,156);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FEA401").s().p("AgLAjQgKgDgHgKQgGgKABgLQABgMAJgKQAJgLAMgCQALgDAJAGQAKAHAEAMIAAABIABAAQAFAVgSAPQgMALgMAAIgHgBgAgKAJIABACIABABIAAABIABAAIACABIAEAAIAEgDIAFgFIACgCIAAgBIABAAIAAgBIAAgBIABgCIAAgDIgCgEIAAAAIgBgCIAAgBIgBAAIgBgBIgDgBIABAAIgCgBIABABIgCAAIgEABIgBABQABAAgBAAIgDADIgBABIgCADIgBACIAAABIgBABIAAABIAAAEIABAEIAAAAIAAABIAAgBg");
	this.shape_58.setTransform(127.8,111.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FEA401").s().p("AgXAkQgPgHgEgPQgDgNAIgOQAHgOAIgHQAKgJAMACQANABALAFQAMAHAFALQAFAMgDAMQgCAKgJALIgBABIgBABQgKAKgPACIgGAAQgMAAgKgGgAgIgSIgDADIgJAPIAAAAIgBABIgBAEIAAACIABABIAAACIABACIAEADIAGAEIAFABIABAAIABAAIAGAAIAFgBIABAAIABgBIACgBIACgBIAEgFIAAgBIADgEIAAgBIAAABIACgGIAAgEIgCgEIgBgCIAAAAIAAAAIgBgBIgDgDQACABgCgBIgBgBIgEgCIgBAAIgCgBIgFgBIgBgBIgFAAIgDABIABAAIgBAAg");
	this.shape_59.setTransform(101.7,145.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FEA401").s().p("AgREvQgng+gNhSIgHgoQgCgWAEgRQgjAzhBAfQhLAkgsgkQgZgUALglQAIgcAYgeQAVgWAfgQQAMgHAugTQgXgCgkgaQglgagbgjQhHhaA6guQAtgmBCAoQAlAXA8A1QgbhFArhMQAshQBFAaQBUAfgXBYQgQA9guAsQAwghBCAIQBMAKA5A5QAnAnAGAkQAGApgpAeQghAYgtAFQghADgxgHQgUgEgsgJQAeAJAdA1QAbAwAJAuQAKAvgPAsQgRAygqAJQgLADgMAAQg0AAgphDg");
	this.shape_60.setTransform(72.4,118.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FEA401").s().p("AhZD4QAPhVAmg9QgmAhgtAZQgiAQgoAJQgwAKgdgJQglgKgLgvQgJgpAOgnQAOgmAkgYQAdgUAugOIAtgNQAZgHAUgBIAZACIAYAAQgTgfgLgtIgMg2QgKg+AJgnQAOg5A3gDQAXgBAXAWQANAMAZAcQASARAYA+QAbBIgMAeQAEgJAIgbQAHgXAIgNQAdguAdgRQAUgLAVACQAWACASAOQAXASAJAYQAHAUAAAhQgBA9gkA2QgkA0g3AZQAgAXAVAqQAOAbAFAQQAPAygMAkQgXBHhNgtQgegRgYgeQgYgdgEgZQgHBIgSAqQgKAbgcAaQgeAdgbAAIgCAAQhKAAAThvg");
	this.shape_61.setTransform(171.5,96.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FEA401").s().p("AAOEuQgagLgUgXQgWgZAAgoQAAgcAMgpQgPAng3AbIgnARQgQAGgJABQgUADgRgHQgYgJgTgVQgVgXgCgYQgCgQAMgYQAKgTANgRQAGgIANgNQAPgNAFgGQgHgFgSgIQgRgIgIgGQgcgUgOgQQgQgVAEgbQADgZASgUQAWgYAVgJQAYgKAcAJQAVAHAVAaQAeAkAGAGIASAPIALAKQgWgYgOgtQgQg4Acg6QAcg5A6gEQA6gDAeA4QARAggCAzQgCApgNApQAIgXAhgOQAbgLAegBQBPgDAoAlQA3A1ghAqQglAvhOAXQgNADgqADQgQABgBAEQgBADAJAOQAOAYAFAkQAFAigHAdQgGAegRAXQgSAagbALQgNAGgOAAQgOAAgQgGg");
	this.shape_62.setTransform(201,204.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FEA401").s().p("AicFEQAEgeALgdQAMgcAQgRQgWATgzAJQgzAJgvgGQg0gGgXgXQgagbAWgtQAZg1A7gHQATgDAhADQAUACAogEIAUgCQAMgBAHACQgegNgfgVQgYgMgJgIQgMgKgKgRIgRgeQgZgtAPgrQAchMBaAeQBKAXA0A6QgVhFAchZQAfhmBKANQBLAMgIBpQgCAkghB4QAUhBBOgaQBOgbA0AtQA2ArhCBNQgzA7hGAjQAfACAmAZQAlAYAZAiQA/BVhDAwIgIAFQgmAWgxgQQhAgVhLhVQAPAygsA+IhXABQhHAAhKgCg");
	this.shape_63.setTransform(93.8,257.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FEA401").s().p("AhyENIgQgQQgUkXgJifIAAgBIACgDQAxhPA1gXQBdgogRB2QgFAqgSA1QgRAugOAWQAogcBHAIQBNAJAFA2QAEAthHAZQgiALhOALQAzAaAOAzQAMAtgWAqQgWAqgmAJQgJACgJAAQgkAAgkghg");
	this.shape_64.setTransform(18.2,182.4);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(2.2,45.7,213.9,242.5), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai/NeIAA67IF/AAIAAa7g");
	mask.setTransform(19.2,86.2);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AicNFQgjoeAAjQQAAjEADj9QAEkZAFgiQAOhfA/gyQA4gsBIAGQBJAFAvA0QAzA4gGBXQgIB7gHEQQgHEKgGBWIg1LuQgOAZhrAAQhsAAglgZg");
	this.shape.setTransform(19.2,86.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0.1,38.4,172.4), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjuBtIAAjaIHdAAIAADag");
	mask.setTransform(23.9,11);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("Ai0BtQhFABAOguQAJgdAcgZQAygsBBgpQAggWAXgMIEKAAIAACqQAAAxg3gBg");
	this.shape.setTransform(23.9,11);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,47.7,21.9), null);


(lib.ClipGroup_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	mask.setTransform(960,540);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18721A").s().p("A8KR8QAnglAlgxQB0icApjTIzhAAQiwAAh9h9Qh9h9AAixIAAv5QAAiwB9h9QB9h9CwAAMBYEAAAQCxAAB9B9QB9B9AACwIAAP5QAACxh9B9Qh9B9ixAAMg5TAAAQj9CxjeB3QlDCvi7AKgA2rJ8QgKA/gOA7QgwC+hRBYIA5gcQBKgmBQguQECiVDni5MA6KAAAQCFAABfheQBehfAAiFIAAv5QAAiFheheQhfheiFAAMhYEAAAQiFAAheBeQheBeAACFIAAP5QAACFBeBfQBeBeCFAAIVegEg");
	this.shape.setTransform(1519.9,306);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EAvmgAQQhfheiFAAMhYEAAAQiFAAheBeQhaBZgEB+IAAhNQAAiEBeheQBeheCFAAMBYEAAAQCFAABfBeQBeBeAACEIAABNQgEh+hahZg");
	this.shape_1.setTransform(1519.9,218.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("A4JMrQAmhqANieI0sAAQiFABheheQhehfAAiFIAAv5QAAiFBeheQBeheCFAAMBYEAAAQCFAABfBeQBeBeAACFIAAP5QAACFheBfQhfBdiFAAMg3MAAAQm5E1lXCgQhsAxhVAdIg/ATQCTiBA+itg");
	this.shape_2.setTransform(1519.9,310.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0, new cjs.Rectangle(1195.4,188.4,649,235.2), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjXBoIAAjPIGvAAIAADPg");
	mask.setTransform(21.6,10.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AinBoQg2gDAHgfQAGgaAjgUQAngWBQgoQAggQAAgxIDuAAQgHCGAAAdQAAAsgyAAg");
	this.shape.setTransform(21.6,10.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,43.2,20.8), null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	mask.setTransform(960,540);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18721A").s().p("A1NR8QAnglAlgxQB0icApjTIn9AAQiwAAh9h9Qh9h9AAixIAAv5QAAiwB9h9QB9h9CwAAMAzCAAAQCxAAB9B9QB9B9AACwIAAP5QAACxh9B9Qh9B9ixAAI/1AAQj+CxjdB3QlDCvi7AKgAvtJ8QgLA/gOA7QgwC+hRBYIA5gcQBKgmBQguQECiVDni5MAgsAAAQCFAABfheQBehfAAiFIAAv5QAAiFheheQhfheiFAAMgzCAAAQiFAAheBeQheBeAACFIAAP5QAACFBeBfQBeBeCFAAIJ6gEg");
	this.shape.setTransform(1609.4,548);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AdFgQQhfheiFAAMgzCAAAQiFAAheBeQhaBZgEB+IAAhNQAAiEBeheQBeheCFAAMAzCAAAQCFAABfBeQBeBeAACEIAABNQgEh+hahZg");
	this.shape_1.setTransform(1609.4,460.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AxMMrQAnhqAMidIpIAAQiFgBheheQheheAAiFIAAv5QAAiFBeheQBeheCFAAMAzCAAAQCFAABfBeQBeBeAACFIAAP5QAACFheBeQhfBeiFABI9uAAQm5E0lYCgQhrAxhVAdIg/ATQCTiCA+isg");
	this.shape_2.setTransform(1609.4,552.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, new cjs.Rectangle(1403.4,430.4,412,235.2), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A/aFcIAAq3MA+1AAAIAAK3g");
	mask.setTransform(201.1,34.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5682BB").s().p("A2ND2QkWgwiZg/QiehAAAhHQAAhFCehBQCZg/EWgwQJNhmNAAAQNAAAJOBmQEWAwCZA/QCeBBAABFQAABHieBAQiZA/kWAwQpOBmtAAAQtAAApNhmg");
	this.shape.setTransform(201.1,34.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,402.2,69.6), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A/aFbIAAq2MA+1AAAIAAK2g");
	mask.setTransform(201.1,34.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5682BB").s().p("A2ND2QkWgxiZg9QiehBAAhHQAAhGCehAQCZg+EWgxQJNhlNAgBQNBABJNBlQEWAxCZA+QCeBAAABGQAABHieBBQiZA9kWAxQpNBmtBgBQtAABpNhmg");
	this.shape.setTransform(201.1,34.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,402.2,69.5), null);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApcMeIAA47IS5AAIAAY7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.4,-79.8,120.9,159.6);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A1aDkIAAnHMAq1AAAIAAHHg");
	mask_1.setTransform(137.1,22.8);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AzNDkQg6AAgqg0QgpgzAAhJIAAkXQDhCOFkBRQFwBTGlAAQGmAAFwhTQFkhRDhiOIAAEXQAABJgpAzQgqA0g6AAg");
	this.shape_1.setTransform(137.1,22.8);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(0,0,274.2,45.5), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A1aDkIAAnHMAq1AAAIAAHHg");
	mask_1.setTransform(137.1,22.8);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AzNDkQg6AAgqg0QgpgzAAhJIAAkXQDhCOFkBRQFwBTGlAAQGmAAFwhTQFkhRDhiOIAAEXQAABJgpAzQgqA0g6AAg");
	this.shape_1.setTransform(137.1,22.8);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(0,0,274.2,45.5), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZB4QgIgLgBgPQABgQAIgKQAKgKAPAAQARAAAJAKQAIAKABAQQAAAPgJALQgKAKgQAAQgPAAgKgKgAgRAkQgGgDgCgKQgCgIgBgSIgCgnQgCgVAAgVIgBgkQAGgDAKgEQALgCAHAAQAPAAAIAHQAIAIAAAPIgCA9QAAAUgDASIgEAiIgLAEIgMACQgJAAgIgEg");
	this.shape.setTransform(291.4,82.2,0.667,0.667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhGCBQgGAAgFgEQgEgEgDgGQgBgIAAgHIAAi4QAAgKADgHQAFgGAHgGQALgIARgEQARgFAUAAQAUAAATAGQASAGAOAMQANAOAIARQAIASAAAbQgBAXgGATQgHATgMAMQgMANgQAGQgRAGgUAAQgQAAgMgFIAABAIgMACIgQACQgIAAgGgCgAgThNQgFABgFADIAABUIAKAEQAEABAHAAQAjAAABguQgBgZgIgMQgJgMgRAAQgIAAgEACg");
	this.shape_1.setTransform(281.1,86.2,0.667,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKCAQgHgBgEgEQgDgCgEgIQgCgFAAgKIAAjeIAMgDQAIgBAHAAQAIAAAGABQAGABAEAEQAFAEACAGQACAEAAALIAADeIgLADIgQABQgHAAgGgBg");
	this.shape_2.setTransform(270.4,82,0.667,0.667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbBdQgRgGgOgNQgOgNgHgTQgIgSAAgaQAAgaAIgSQAHgRANgNQAOgMAPgFQAPgGARABQATAAAQAFQAPAGAMALQAMAMAFAPQAHAQAAAQQAAANgHAGQgHAHgMACIhYAOQAEANAMAGQALAGAQAAQAOAAAOgDQALgDAKgHQAHADADAIQAEAGAAAJQAAARgPAIQgMAHgOACQgQADgLAAQgVAAgSgHgAgMgwQgGADgEAFQgEAEgCAHIgCAMIA8gLQgBgIgHgHQgHgIgNAAQgHAAgHADg");
	this.shape_3.setTransform(260.5,84.1,0.667,0.667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAsCAQgGgBgFgEQgDgEgDgGQgCgGgBgJIAAhVQABgPgIgHQgGgGgLAAQgIAAgFACIgLAEIAACGIgMADQgHABgIAAQgJAAgGgBQgGgBgEgEQgEgDgDgHQgCgFAAgKIAAjeIALgDQAIgBAIAAQAIAAAGABQAHABAEAEQAEAEACAGQADAGAAAJIAAAmIAOgFQAIgCAMAAQAlAAATATQAUATAAAkIAAB1IgLADQgIABgIAAQgJAAgGgBg");
	this.shape_4.setTransform(246.9,82,0.667,0.667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAsBhQgGgBgEgEQgEgDgDgHQgCgGAAgJIAAhaQAAgLgGgHQgHgFgLAAQgHAAgGACQgJADgDADIAACEIgLADQgIABgIAAQgIAAgGgBQgHgBgEgEQgEgEgDgGQgCgGAAgJIAAhyQAAgLAEgGQAEgHAHgGQANgJASgFQAUgGAUAAQApAAAWATQAWATAAAiIAAB3IgLADIgQABQgIAAgHgBg");
	this.shape_5.setTransform(228,84,0.667,0.667);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AghBfQgOgDgNgIQgKgHgHgMQgFgMAAgQQAAgaAOgOQAPgOAfgEIAvgFIAAgDQAAgLgKgFQgJgEgQAAQgOgBgNADQgNAEgLAEQgEgEgEgGQgCgIAAgIQAAgJAEgGQAEgGAKgFQALgEAOgBQAMgCAPAAQATAAAPAEQAQAEALAIQAMAKAGANQAFANAAASIAABVQAAAKgEAHQgHAHgGAEQgXAPgrAAQgRAAgQgFgAAAASQgJAAgIAFQgHAEAAAHQAAAIAHAFQAFAFAMgBIANgBQAJgBADgCIAAgfg");
	this.shape_6.setTransform(214.2,84.1,0.667,0.667);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQBcQgTgHgNgNQgNgNgHgSQgIgSAAgWQAAgXAIgUQAIgUANgMQAPgNARgFQAQgGATAAQAbAAANAKQAOAJAAAQQAAAIgDAGQgDAGgEAFIgQgGQgHgDgLAAQgKAAgHADQgJAEgEAFQgGAHgEAIQgDALgBAJQABAYANAMQALAMATAAQAJAAAJgDIAPgGQAGAGAEAGQADAGAAAJQAAAQgNAJQgOAIgZAAQgWAAgSgHg");
	this.shape_7.setTransform(202.1,84.1,0.667,0.667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AguB1QgPAAgJgJQgJgKAAgRIAAiiQAAgQAJgKQAJgJAPAAIB2AAIAFALQACAGAAAIQAAAPgGAGQgGAGgKAAIhLAAIAAAkIBQAAIAFALQACAJAAAGQAAANgGAGQgFAHgLAAIhBAAIAAAoIBcAAIAEALQACAJAAAGQAAAPgGAGQgGAGgJAAg");
	this.shape_8.setTransform(185.2,82.6,0.667,0.667);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgmB4QgQgDgJgFQgLgHgGgHQgFgJAAgLQAAgKAFgJQAHgHAHgEQALAIAOAGQAPAGAQAAQARABAHgHQAIgFAAgIQgBgHgGgEQgGgFgJgDIgOgGQgQgGgOgGQgLgFgLgIQgKgKgFgLQgEgLAAgRQAAgiAXgTQAXgTAqAAQARAAAMACQAOADAIAFQALAEAEAHQAGAJAAAJQAAAKgFAHQgDAIgHAEQgIgGgNgDQgOgEgPAAQgPAAgIAEQgHAGAAAHQAAAGAEAEQAFADAJADIASAGQAiANATAQQARASABAfQAAAhgZAUQgYAUguAAQgQAAgOgDg");
	this.shape_9.setTransform(171.8,82.6,0.667,0.667);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AA6B3QgHgCgDgDQgEgCgCgGIgEgLIgHgbIhAAAIgMAwIgKAEIgOABQgTgBgIgGQgJgHAAgMIACgKIADgNIA5i1QAFgDANgEQAMgDANgBQAQABAPAFQAOAGAEAMIA5DNQgEAEgJAFQgJADgMAAQgJgBgFgBgAgLgXQgGARgGAWIAsAAIgUhLIgBAAg");
	this.shape_10.setTransform(157.7,82.6,0.667,0.667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgtB1QgQAAgJgJQgJgKAAgRIAAiiQAAgQAJgKQAJgJAQAAIB1AAQADADACAIQACAGAAAIQAAAPgHAGQgFAGgKAAIhLAAIAAAkIBQAAIAEALQADAGAAAJQgBANgFAGQgGAHgKAAIhBAAIAAAoIBbAAIAFALQACAGAAAJQAAAPgGAGQgGAGgKAAg");
	this.shape_11.setTransform(143.8,82.6,0.667,0.667);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAaBSIgMgpIgHgbIgFgZIgZBiQgFAGgIACQgJADgMAAQgOAAgMgFQgLgFgDgHQgEgIgFgVIgUhcIgHgrQAFgGAJgEQAJgEAJAAQANAAAIAGQAIAGACAPIAOBrIACAAIAZhvIAOgHQAHgCAKAAQANAAAIAEQAKAFACAIIAZBnIACAAIAOh+QAHgEAHgCQAGgCAIAAQANAAAIAGQAJAGAAAOIgCASIgaB5IgGATQgGAGgKACQgKADgMAAQgeAAgGgQg");
	this.shape_12.setTransform(391.5,55.4,0.667,0.667);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgmBdQgRgIgMgMQgNgMgHgUQgGgRAAgYQAAgXAGgSQAHgSANgMQALgNASgIQASgGAUAAQAUAAASAGQASAIAMANQANAOAGARQAHAUAAAUQAAAXgHATQgGATgNANQgNANgRAGQgQAHgWAAQgWgBgQgGgAgXgiQgIALAAAXQAAAYAJAMQAIAMAOAAQAQABAHgNQAJgNAAgXQAAgWgJgMQgIgNgPAAQgPAAgIANg");
	this.shape_13.setTransform(375,55.4,0.667,0.667);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAtCAQgHgCgEgDQgFgEgCgFQgCgGAAgKIAAhVQAAgPgHgHQgIgGgKAAIgOACIgKAFIAACFIgLADIgQABIgOgBQgHgCgEgDQgFgDgBgGQgDgFAAgLIAAjeIAMgDIAPgBIAPABQAGACAEADQAEADADAGQACAGAAAKIAAAmIAPgFQAJgCAKAAQAkAAAUATQAUATAAAlIAAB0IgMADIgQABg");
	this.shape_14.setTransform(360.9,53.2,0.667,0.667);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAtBhQgHgCgEgDQgFgEgCgFQgDgHABgJIAAhaQgBgMgGgFQgFgGgMABIgNABIgMAGIAACEIgMADIgQABIgNgBQgIgCgDgDQgFgEgCgFQgCgGAAgKIAAhyQAAgLAEgGQAEgHAHgFQANgKASgFQATgGAVAAQApAAAWATQAWATAAAiIAAB3IgMADIgPABg");
	this.shape_15.setTransform(342.1,55.3,0.667,0.667);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgpBhQgGgCgEgDQgEgDgDgGQgCgGAAgKIAAhzQAAgJADgGQADgGAGgFIAOgJIASgHIATgFIAVgCQARAAAKAHQAKAHAAARQAAAFgBAFIgEAKIgPAAIgeAGIgLAEIAACCIgLADIgQABg");
	this.shape_16.setTransform(330.6,55.3,0.667,0.667);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AghBgQgPgEgLgIQgMgIgGgLQgGgNAAgPQAAgbAPgNQAQgPAegDIAugFIAAgDQAAgLgJgEQgJgGgRAAQgNAAgNADQgMAEgLAEQgGgDgCgIQgEgIAAgGQAAgKAEgGQAEgFALgGQANgEALgBQANgCAOAAQATgBAPAFQAQAEAMAIQAKAJAHAOQAHANAAASIAABVQgBAKgFAHQgFAGgHAEQgYAQgqAAQgTAAgOgEgAgBATQgKAAgGAEQgGAEAAAHQAAAJAFAEQAFAFANAAIANgCQAJgBACgCIAAgfg");
	this.shape_17.setTransform(318.4,55.4,0.667,0.667);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgaBdQgSgGgOgMQgMgMgJgVQgIgTAAgZQAAgZAIgTQAIgSAMgMQAMgLARgGQARgGAPABQATAAAQAFQAQAHALAKQAMANAFANQAHAPAAASQAAANgHAGQgHAIgMABIhYAOQAEANAMAHQALAFAQAAQAQAAAMgDQAOgFAIgEQAGAEADAGQAEAHAAAIQAAASgPAHQgMAIgOABQgMADgPAAQgUgBgSgGgAgMgwQgGADgEAFQgEAFgCAGIgCAMIA8gLQgBgIgHgHQgGgHgOAAQgIAAgGACg");
	this.shape_18.setTransform(305.6,55.4,0.667,0.667);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgKCAQgGgCgFgDQgEgEgCgFQgDgHAAgJIAAjeIAMgDIAQgBIANABQAGACAFADQAEADACAGQADAHAAAJIAADeIgMACQgIACgIAAg");
	this.shape_19.setTransform(295.6,53.2,0.667,0.667);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AggB7QgTgHgMgNQgNgNgGgSQgHgTAAgWQAAgZAHgSQAHgTANgMQAMgMASgHQARgGATAAQAHAAAHACIALADIAAg/IAMgCIAQgBIAOABQAGABAFADQAEAFACAFQACAIAAAHIAAC2QAAASgQALQgLAIgQAFQgPAFgXAAQgXAAgSgHgAgRgFQgKALAAAZQAAAXAJANQAKAMASAAQAHAAAEgCQAGgCACgDIAAhUQgGgEgLAAQgTAAgKALg");
	this.shape_20.setTransform(280.2,53.3,0.667,0.667);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAtBhQgHgCgEgDQgFgEgCgFQgCgHAAgJIAAhaQgBgMgGgFQgFgGgMABQgGgBgHACIgMAGIAACEIgLADIgRABIgNgBQgHgCgEgDQgFgEgCgFQgCgGAAgKIAAhyQAAgLAEgGQAEgHAHgFQANgKASgFQATgGAVAAQApAAAWATQAWATAAAiIAAB3IgMADIgQABg");
	this.shape_21.setTransform(266.4,55.3,0.667,0.667);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgiBgQgOgEgMgIQgMgJgFgKQgGgNABgPQAAgbAOgNQAQgPAegDIAugFIAAgDQAAgLgJgEQgKgGgPAAQgOAAgNADQgOAEgKAEQgFgDgDgIQgDgGAAgIQAAgKAEgGQAFgGAKgFQANgEALgBQAMgCAPAAQASgBARAFQAOAEANAIQALAJAGAOQAGANAAASIAABVQAAAKgFAHQgFAGgIAEQgWAQgrAAQgTAAgPgEgAAAATQgLAAgGAEQgGAEgBAHQABAJAFAEQAFAFANAAIANgCIAMgDIAAgfg");
	this.shape_22.setTransform(252.6,55.4,0.667,0.667);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgaBdQgTgHgNgLQgNgNgIgUQgIgUAAgYQAAgYAIgUQAHgRANgNQALgKASgHQARgGAPABQATAAAQAFQARAHAKAKQAMANAFANQAHAPAAASQAAANgHAGQgHAIgMABIhYAOQAEAMANAIQALAFAPAAQAQAAAMgDQAOgEAHgFQAHADADAHQAFAHgBAIQAAASgPAHQgLAIgPABQgNADgOAAQgUgBgSgGgAgLgwQgIADgDAFQgEAFgCAGIgCAMIA8gLQgBgIgGgHQgHgHgOAAQgIAAgFACg");
	this.shape_23.setTransform(235,55.4,0.667,0.667);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("ABcBhQgGgCgFgDQgEgEgCgFQgDgHAAgJIAAhbQAAgLgGgGQgFgEgLAAQgGgBgFADQgGADgDACIABADIAACBIgMADIgQABIgNgBQgGgCgFgDQgEgEgCgFQgDgHAAgJIAAhbQAAgLgGgGQgHgEgJAAQgHAAgEACIgIADIAACGIgMADIgQABIgOgBQgGgCgEgDQgFgEgCgFQgDgHAAgJIAAhzQAAgLAFgFQADgGAIgGQANgKARgFQATgGATAAQAPAAAOAFQAOAEAKAIQAKgGAOgGQANgFAUAAQAMAAAPAEQANAEAKAIQAKAJAGANQAHANAAAUIAAB4IgMADIgQABg");
	this.shape_24.setTransform(218.2,55.3,0.667,0.667);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AghBgQgPgEgMgIQgLgJgGgKQgFgMgBgQQAAgbAPgNQAQgPAegDIAugFIAAgDQAAgLgKgEQgIgGgRAAQgNAAgOADQgNAEgKAEQgEgDgDgIQgEgGAAgIQAAgKAFgGQAEgGAJgFQAOgEALgBQAMgCAPAAQASgBARAFQAOAEAMAIQAMAJAGAOQAHANAAASIAABVQgBAKgFAHQgFAGgHAEQgYAQgqAAQgUAAgNgEgAgBATQgKAAgGAEQgHAEABAHQgBAJAGAEQAFAFANAAIAOgCIAKgDIAAgfg");
	this.shape_25.setTransform(201.3,55.4,0.667,0.667);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag3B6QgTgKAAgVQAAgHADgIQAFgIADgCQAKAGAOAEQANAEAOAAQATAAALgHQALgHAAgPIAAgGQgPAHgUAAQgQAAgPgFQgOgFgLgMQgKgKgIgSQgGgQAAgYQAAgZAHgQQAGgRANgMQAMgKASgHQARgFATAAQAUAAARAFQASAHAKAIQAHAEAFAIQAEAHAAAKIAACGQAAATgHAQQgHAOgMAKQgOALgQAEQgRAEgRAAQghAAgTgJgAgRhEQgIAKgBAUQABAWAIAKQAJAJANAAQAOAAAJgGIAAhHIgHgDQgFgCgHAAQgRAAgJALg");
	this.shape_26.setTransform(188,57.5,0.667,0.667);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgaBdQgSgGgOgMQgNgNgIgUQgIgSAAgaQAAgaAIgSQAHgRANgNQAMgLARgGQARgGAPABQAUAAAPAFQARAHAKAKQAMANAGANQAGARAAAQQAAANgHAGQgGAIgNABIhYAOQAEAMAMAIQAMAFAPAAQAQAAAMgDQANgEAIgFQAGADAEAHQAEAHAAAIQAAASgPAHQgLAIgPABQgMADgPAAQgUgBgSgGgAgMgwQgHAEgDAEQgDAFgDAGIgDAMIA9gLQgBgHgHgIQgHgHgNAAQgHAAgHACg");
	this.shape_27.setTransform(170.1,55.4,0.667,0.667);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAsCAQgGgCgEgDQgFgEgCgFQgDgHABgJIAAhVQAAgPgIgHQgHgGgKAAQgIAAgFACQgIACgDADIAACFIgMADIgQABIgNgBQgHgCgEgDQgFgEgCgFQgCgGAAgKIAAjeIAMgDIAPgBIAOABQAHACAEADQAEADACAGQADAHAAAJIAAAmIAOgFQAKgCAKAAQAjAAAVATQAUAUAAAkIAAB0IgMADIgPABg");
	this.shape_28.setTransform(156.5,53.2,0.667,0.667);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgnBmQgRgQAAgiIAAikIALgDQAIgBAIAAQAQAAAJAGQAIAGAAATIAAAZIAvAAIAEAKQACAGAAAIQAAANgGAHQgGAGgJAAIggAAIAAA5QAAAKAFAEQAGAEALAAIALgBQAGAAAEgCIAGAJQACAFAAAIQAAAPgKAJQgLAJgZAAQgeAAgSgPg");
	this.shape_29.setTransform(144.9,54.2,0.667,0.667);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ag4B4QgJgKgCgPQAMgJALgNQAMgKAJgNQgGgCgHgHQgHgHgIgUIgSgwIgVhRQAGgGAHgEQAKgDAJAAQAMgBAJAGQAIAGAEAPIAcBpIABAAIAeh8QANgHAPAAQANgBAIAGQAIAGAAAPQAAAMgCALQgDAPgEAPIgJAfIgMAgQgHATgGAKIgMAaQgNAWgGAIQgJANgIAGQgGAGgIADQgHADgKAAQgPAAgKgKg");
	this.shape_30.setTransform(128.4,57.5,0.667,0.667);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AghBgQgPgEgMgIQgLgJgGgKQgGgNAAgPQAAgbAPgNQAQgPAegDIAugFIAAgDQAAgLgJgEQgJgGgRAAQgNAAgNADQgOAEgKAEQgEgDgDgIQgEgGAAgIQAAgKAFgGQAEgGAKgFQANgEALgBQANgCAOAAQASgBARAFQAPAEAMAIQALAKAGANQAHAOAAARIAABVQAAAKgGAHQgFAGgHAEQgXAQgrAAQgTAAgOgEgAAAATQgKAAgHAEQgGAEAAAHQAAAJAFAEQAFAFANAAQAHAAAGgCQAJgBACgCIAAgfg");
	this.shape_31.setTransform(115,55.4,0.667,0.667);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgKCAQgGgCgFgDQgEgEgCgFQgDgHAAgJIAAjeIAMgDIAQgBIANABQAGACAFADQAEAEACAFQADAHAAAJIAADeIgMACQgIACgIAAg");
	this.shape_32.setTransform(105.4,53.2,0.667,0.667);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhGCCQgGgCgFgDQgEgDgCgGQgCgGAAgKIAAi4QAAgKAEgHQAFgHAGgFQANgIAPgEQAQgFAVAAQAVAAASAGQAUAHAMAMQANAMAIATQAHATAAAZQAAAZgGARQgGASgMANQgMANgRAGQgSAGgTAAQgNAAgPgFIAABAQgEACgIAAQgHACgJAAgAgThNIgJAEIAABUIAJAEIALABQAkAAAAguQAAgZgJgMQgJgLgRAAQgGAAgGABg");
	this.shape_33.setTransform(95.3,57.4,0.667,0.667);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AggBhQgNgCgKgEQgIgFgFgIQgGgHAAgKQAAgIADgHQAFgHAEgEQAJAFAPAGQAOAFASgBQAJAAAGgCQAHgEgBgGQAAgFgEgDQgDgDgKgDIgLgCQgfgGgPgOQgQgNAAgbQAAgOAGgMQAGgLAKgIQALgHAOgFQAPgEAQAAQAMAAAOADQAJABALAEQAIAFAFAHQAGAHAAAIQAAAJgEAHQgEAGgDAEIgJgDIgagIIgOgBQgKAAgHADQgGAEAAAFQAAAFAEACQAEADAIADIALACQAiAIAPAPQAPAOAAAYQAAAdgVARQgUAQgnAAQgRAAgLgDg");
	this.shape_34.setTransform(77.4,55.4,0.667,0.667);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgVAzIgLgEIAGhaIANgGQAJgCAGAAIALABQAHABADADQAEACADAGQADAFAAAGIgCARIgEASIgGARQgDAHgEAIQgEAGgFADQgFADgIAAQgHAAgGgBg");
	this.shape_35.setTransform(68.7,48.1,0.667,0.667);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgnBmQgRgQAAgiIAAikIAMgDQAHgBAIAAQAQAAAJAGQAIAGAAATIAAAZIAvAAIAEAKQACAGAAAIQAAAOgGAGQgFAGgKAAIggAAIAAA5QAAAKAGAEQAFAEALAAIAMgBIAKgCIAFAJQADAGAAAHQAAAPgLAJQgLAJgZAAQgeAAgSgPg");
	this.shape_36.setTransform(61.5,54.2,0.667,0.667);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgaBdQgSgGgOgMQgNgNgIgUQgIgSAAgaQAAgaAIgSQAIgSAMgMQAMgLARgGQARgGAPABQAUAAAPAFQAQAHALAKQALALAHAPQAGAQAAARQAAAOgHAFQgGAIgNABIhYAOQAEAMAMAIQALAFAQAAQARAAALgDQANgEAJgFQAFADAEAHQAEAGAAAJQAAASgPAHQgLAHgPACQgMADgPAAQgTgBgTgGgAgMgwQgGAEgEAEQgEAFgCAGIgCAMIA8gLQAAgHgIgIQgGgHgOAAQgHAAgHACg");
	this.shape_37.setTransform(49.8,55.4,0.667,0.667);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgqB3QgPAAgJgJQgJgKAAgQIAAjHIAdgDQAIAAAHABQAGACAEADQAEADADAHQACAFAAALIAACXIBRAAQAEAGABAFQACAJAAAGQAAAQgGAGQgGAGgKAAg");
	this.shape_38.setTransform(37.6,53.7,0.667,0.667);

	this.instance = new lib.ClipGroup_2_0();
	this.instance.parent = this;
	this.instance.setTransform(-156.9,234.4,0.667,0.667,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-796.9,-125.6,1280,720);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYB4QgKgLAAgPQAAgQAKgKQAJgLAPAAQAQAAAJALQAKAJAAARQAAAQgKAKQgJAKgQAAQgPAAgJgKgAgQAlQgIgEgBgKIgIiPQAIgEAJgDQAKgCAHAAQAPAAAIAHQAIAHAAAPIgJCGIgFADIgGACIgMABQgKAAgGgDg");
	this.shape.setTransform(214.9,95.6,0.667,0.667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABcBhQgFgBgGgEQgEgEgDgFQgCgGAAgKIAAhaQAAgMgGgGQgGgEgKAAQgHAAgFACIgIAFIABADIAACBQgFACgHABIgQABIgNgBQgGgBgEgEQgGgDgCgGQgBgFAAgLIAAhaQgBgMgHgGQgGgEgKAAQgHAAgDACIgJADIAACGQgEACgHABIgQABIgOgBQgFgBgGgEQgEgDgCgGQgDgFAAgLIAAhzQAAgLAFgGQADgGAIgFQAMgJASgGQATgGATAAQAPAAAOAEQAOAFAKAJQAKgHAOgGQAPgFASAAQAMAAAPAEQAMADALAJQAJAHAHAPQAHANgBAVIAAB3QgEACgHABIgQABIgOgBg");
	this.shape_1.setTransform(201.2,97.5,0.667,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKCJQgFAAgGgEQgEgEgDgGQgCgGAAgJIAAicIAMgCQAIgCAHABQAIgBAGACQAGABAEAEQAEACADAHQACAHAAAIIAACcIgLACIgQABIgNgBgAgXhOQgKgJABgQQgBgOAKgKQAIgLAPAAQAPAAAJALQAJALAAANQAAAPgJAKQgJAKgPAAQgOAAgJgKg");
	this.shape_2.setTransform(187.6,94.8,0.667,0.667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgpB3QgQAAgJgKQgJgJAAgRIAAjGIAMgCIARgBIAPABQAHACADADQAFADACAGQACAHAAAKIAACXIBRAAQADAEACAHQACAGAAAJQAAAPgGAHQgHAGgKAAg");
	this.shape_3.setTransform(178.6,96,0.667,0.667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaBdQgTgHgNgMQgMgMgJgUQgIgTAAgZQAAgZAIgTQAIgTAMgLQAMgLARgGQARgGAPAAQAUAAAPAHQAQAGALAKQALAMAHAOQAGAPAAASQAAANgHAGQgHAHgMACIhYAOQAEANAMAGQAMAHAPAAQAOAAAOgEQAPgFAHgFQAGAFADAGQAEAIAAAHQAAARgPAIQgMAHgOACQgQADgLAAQgTAAgTgHgAgMgwQgGADgEAFQgEAFgCAGQgCAGAAAGIA8gLQAAgHgIgIQgGgIgOAAQgIAAgGADg");
	this.shape_4.setTransform(160.5,97.6,0.667,0.667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABcBhQgGgBgFgEQgFgDgCgGQgCgFAAgLIAAhaQAAgNgGgFQgGgEgLAAQgGAAgEACIgJAFIAAADIAACBQgEACgHABIgQABIgNgBQgGgBgEgEQgFgCgCgHQgCgFAAgLIAAhaQgBgMgGgGQgGgEgLAAQgGAAgEACIgIADIAACGQgFACgGABIgRABIgOgBQgFgBgGgEQgDgCgEgHQgCgFAAgLIAAhzQAAgKAFgHQAFgGAGgFQAMgJASgGQATgGATAAQAQAAAOAEQAOAGAJAIQAJgHAPgGQAPgFASAAQANAAAOAEQAMADALAJQALAIAFAOQAHANAAAVIAAB3QgFACgHABIgQABIgOgBg");
	this.shape_5.setTransform(143.8,97.5,0.667,0.667);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAbBSIgThDIgGgaIgYBjQgGAEgIADQgHADgOAAQgPAAgKgEQgLgFgEgIIgJgdQgGgZgEgTIgRhbQAFgFAJgFQAJgEAKAAQAMAAAIAGQAIAGACAPIAPBrIABAAIAahvIAOgHQAGgCAKAAQAMAAAKAEQAJAFACAJIAZBmIACAAIAPh+IANgGQAHgCAIAAQANAAAIAGQAIAFAAAPIgHAuIgGAgIgVBRQgFAEgKADQgJADgOAAQgeAAgFgQg");
	this.shape_6.setTransform(119.3,97.6,0.667,0.667);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgmBdQgRgIgMgMQgNgNgHgTQgGgSAAgXQAAgWAGgSQAHgTANgNQANgNAQgHQASgHAUAAQAVAAASAIQARAHAMANQAMAMAHATQAHATABAVQgBAXgHATQgGATgNANQgMANgRAGQgTAHgUAAQgUAAgSgHgAgWgjQgJAMABAXQgBAXAJANQAIAMAOAAQAPAAAJgMQAHgNABgXQgBgXgHgMQgJgMgPAAQgPAAgHAMg");
	this.shape_7.setTransform(102.8,97.6,0.667,0.667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgKCAQgEgBgHgEQgEgDgCgGQgCgHAAgJIAAjeIALgCIAQgCIANABQAHACADADQAGADABAGQACAGAAAKIAADeIgLADIgQABg");
	this.shape_8.setTransform(92.4,95.4,0.667,0.667);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgKCAQgFgBgGgEQgEgEgCgFQgDgHAAgJIAAjeIAMgCQAIgCAIAAIANABQAHACAEADQAEADACAGQADAHAAAJIAADeIgMADIgQABIgNgBg");
	this.shape_9.setTransform(85.7,95.4,0.667,0.667);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AglBdQgSgIgMgMQgNgNgGgTQgHgSAAgXQAAgWAHgSQAGgTANgNQANgNARgHQASgHATAAQAWAAARAIQASAHALANQANAMAHATQAGASAAAWQAAAYgGASQgHATgNANQgMANgRAGQgSAHgVAAQgTAAgSgHgAgWgjQgJANAAAWQAAAXAJANQAJAMAOAAQAPAAAIgMQAIgNAAgXQAAgXgIgMQgIgMgQAAQgOAAgIAMg");
	this.shape_10.setTransform(75.3,97.6,0.667,0.667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag8B0QgFAAgFgEQgFgEgCgGQgCgHAAgJIAAinQAAgRAJgJQAJgKAQAAIB2AAIAFAMQACAGAAAJQAAAPgGAGQgGAGgKAAIhLAAIAAAsIBPAAIAEALQACAGAAAIQAAAOgGAHQgGAGgKAAIg+AAIAABRIgMADIgRABQgIAAgHgCg");
	this.shape_11.setTransform(62.4,96.1,0.667,0.667);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAbQgKgKAAgRQAAgPAKgLQAIgLAQAAQAQAAAJALQAKAMAAAOQAAAQgKALQgJALgQAAQgQAAgIgLg");
	this.shape_12.setTransform(228.1,73,0.667,0.667);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABcBgQgGAAgFgEQgEgDgCgHQgDgGAAgJIAAhbQAAgMgGgEQgGgGgKAAQgFAAgGACIgJAGIABACIAACDIgMABQgIACgIAAQgHAAgGgCQgGAAgFgEQgEgDgCgHQgDgGAAgJIAAhbQAAgMgGgEQgHgGgJAAQgFAAgGACIgIAEIAACHIgMABQgHACgJAAQgIAAgGgCQgGAAgFgEQgEgDgCgHQgDgGAAgJIAAhzQAAgKAFgHQADgGAIgFQANgKARgGQATgFATAAQAPAAAOAFQAPAEAJAIQANgIALgEQANgFAUAAQAOAAANAEQAMADALAJQALAJAFANQAHANAAAUIAAB5IgMABQgHACgJAAQgIAAgGgCg");
	this.shape_13.setTransform(215,68.7,0.667,0.667);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AglBcQgTgGgLgOQgNgMgHgSQgGgUAAgWQAAgVAGgUQAHgSANgNQAMgNASgGQAPgIAWABQAWgBAQAIQASAGAMAOQANAMAHATQAGASABAWQgBAXgGAUQgIASgMAMQgMANgSAHQgQAGgWAAQgUABgRgIgAgWgjQgIAMAAAXQgBAYAJAMQAIAMAOAAQAPAAAJgMQAHgNABgXQgBgXgHgMQgJgMgPAAQgPAAgHAMg");
	this.shape_14.setTransform(197.9,68.8,0.667,0.667);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgmBcQgSgGgLgOQgNgMgHgSQgGgTAAgXQAAgWAGgTQAHgSANgNQAMgNARgGQAQgIAWABQAWgBAQAIQARAGANAOQANAMAGATQAHASAAAWQAAAXgHAUQgGARgNANQgMANgSAHQgQAGgWAAQgUABgSgIgAgXgjQgIAMAAAXQAAAYAJAMQAIAMAOAAQAQAAAHgMQAIgNAAgXQAAgXgIgMQgIgMgPAAQgPAAgIAMg");
	this.shape_15.setTransform(183.8,68.8,0.667,0.667);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgpBgQgHgBgDgDQgFgDgCgHQgCgFAAgKIAAhyQAAgJADgHQACgFAGgGQAGgFAJgEQAGgEAMgDQAIgEALgBIAVgCQASAAAJAHQAKAIAAAQQAAAFgBAFIgEAJIgPABIgQADIgOADIgLAEIAACDIgLABQgHACgJAAQgIAAgGgCg");
	this.shape_16.setTransform(172.2,68.7,0.667,0.667);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAsB/QgGgBgEgDQgEgCgDgIQgCgFAAgKIAAhWQAAgPgIgFQgGgHgLAAQgHAAgGACIgLAFIAACGIgLABIgQACQgIAAgGgCQgGAAgFgEQgEgCgDgIQgCgEAAgLIAAjeIAcgEQAHAAAGACQAIAAADAEQAFAEACAFQACAGAAAKIAAAmIAOgEQAIgDAMAAQAlAAATATQAUASAAAmIAAB1IgLABQgIACgIAAQgJAAgGgCg");
	this.shape_17.setTransform(159.9,66.6,0.667,0.667);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgnBlQgRgPAAgiIAAilIAMgCIAPgBQARAAAIAGQAIAGAAATIAAAYIAvAAIAEALQACAGAAAJQAAANgGAGQgFAGgKAAIggAAIAAA5QAAAKAGAEQAGAFAKgBIAMgBIAKgCIAFAKQADAFAAAHQAAAPgLAJQgKAJgaAAQgfAAgRgQg");
	this.shape_18.setTransform(148.3,67.6,0.667,0.667);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgiBgQgOgEgMgIQgMgIgFgMQgGgMABgQQAAgaAOgNQAPgPAfgDIAugFIAAgDQAAgLgKgFQgJgFgPAAQgLAAgQAEQgOADgKAEQgFgDgDgIQgDgHAAgHQAAgLAEgFQAGgHAJgDQAKgFAOgCQANgBAOAAQAUAAAOADQARAGAKAIQALAHAHAOQAGAOAAASIAABVQAAAJgFAHQgHAIgGADQgXAPgqAAQgSAAgQgDgAAAASQgKAAgHAFQgGADgBAJQABAHAFAFQAGAFAMAAIANgBQAIgCADgDIAAgeg");
	this.shape_19.setTransform(136.5,68.8,0.667,0.667);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AguB8QgQgFgMgJQgQgNAAgSIAAjNIAMgCQAHgBAJAAQAIAAAGABQAHAAAEAFQAEAEADAFQACAIAAAHIAAAnQAHgFAKgBIARgBQARAAAPAGQAPAGAMANQAMAMAHATQAHAQAAAaQAAAYgHAUQgHARgNANQgNANgRAGQgSAGgWAAQgXABgRgHgAgSgPIgLAEIAABUQADACAHACQAFACAIAAQAQAAAJgMQAJgMAAgYQAAgZgJgKQgJgMgPAAQgHAAgGABg");
	this.shape_20.setTransform(123.4,66.7,0.667,0.667);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag0CWQgHgHgBgPQAAgLAEgKIBCkHIALAAIAIAAQAOAAAKAGQAHAHABAOQAAAOgDAHIhEEIIgSACQgPAAgJgIg");
	this.shape_21.setTransform(107.1,67.3,0.667,0.667);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgnBlQgRgPAAgiIAAilIALgCIAQgBQAQAAAJAGQAHAFAAAUIAAAYIAwAAIAEALQACAGAAAJQAAAMgGAHQgGAGgJAAIghAAIAAA5QAAAKAGAEQAGAFALgBIALgBQAGAAAEgCQADAEADAGQACAEAAAIQAAAOgKAKQgKAJgaAAQgfAAgRgQg");
	this.shape_22.setTransform(98.5,67.6,0.667,0.667);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgNgMgIgUQgIgTAAgZQAAgaAIgRQAIgUAMgLQAOgMAPgFQAPgFARAAQATgBAQAHQAQAGALAKQALAMAGAOQAHAPAAASQAAANgHAGQgHAHgMACIhYAOQAFAOALAFQALAHAQAAQAOgBAOgEQAMgDAKgGQAGAEADAHQAEAHAAAIQAAAQgPAKQgNAGgNACQgQACgLAAQgVAAgRgGgAgMgwQgEACgGAGQgEAFgCAGIgCAMIA8gLQgBgIgHgHQgGgIgOAAQgIAAgGADg");
	this.shape_23.setTransform(86.8,68.8,0.667,0.667);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgKB/QgGAAgFgEQgEgDgCgHQgDgGAAgJIAAjeIAMgCQAIgCAIAAQAHAAAGACQAGAAAFAEQAEAEACAFQADAHAAAJIAADfIgMABQgIACgIAAQgHAAgGgCg");
	this.shape_24.setTransform(76.9,66.6,0.667,0.667);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKCJQgGgBgEgDQgFgDgCgHQgDgGABgKIAAibIALgCIAQgCIANACQAHABAEADQAEAEACAFQADAGAAAKIAACcIgMACQgIACgHAAQgHAAgHgCgAgXhOQgKgKABgPQgBgPAKgKQAJgKAOABQAPgBAJAKQAKALgBAOQABAOgKALQgJAKgPAAQgOAAgJgKg");
	this.shape_25.setTransform(70.1,66,0.667,0.667);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AglBcQgSgGgMgOQgMgNgHgRQgHgUAAgWQAAgVAHgUQAGgSANgNQANgNARgGQAQgIAVABQAXgBAQAIQARAGAMAOQANAMAHATQAGARAAAXQAAAYgGATQgHASgNAMQgMANgRAHQgRAGgWAAQgTABgSgIgAgWgjQgJANAAAWQAAAXAJANQAJAMANAAQAQAAAIgMQAIgNAAgXQAAgXgIgMQgIgMgQAAQgOAAgIAMg");
	this.shape_26.setTransform(59.7,68.8,0.667,0.667);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgnBlQgRgPAAgiIAAilIALgCIAQgBQAQAAAJAGQAIAGAAATIAAAYIAvAAQADAGABAFQACAGAAAJQAAANgGAGQgFAGgKAAIggAAIAAA5QAAAKAGAEQAFAFALgBIALgBIALgCIAFAKQACAEAAAIQAAAPgKAJQgKAJgaAAQgfAAgRgQg");
	this.shape_27.setTransform(48.2,67.6,0.667,0.667);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgOgNgHgSQgIgUAAgZQAAgaAIgRQAHgSANgNQAMgKARgHQARgFAPAAQATgBAQAHQAQAHALAJQAMAMAFAOQAHAPAAASQAAANgHAGQgHAIgMABIhYAPQAEAMAMAHQALAFAQABQAQgBAMgEQANgDAIgGQAHAEADAHQAEAHAAAIQAAARgPAJQgMAGgOADQgMACgPgBQgUABgSgHgAgMgvQgHADgDAEQgEAFgCAGIgCAMIA8gKQgBgJgHgHQgGgIgOAAQgIAAgGAEg");
	this.shape_28.setTransform(233.8,40,0.667,0.667);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAtCAQgHgCgEgDQgEgDgDgGQgCgGAAgKIAAhVQAAgPgHgHQgIgGgKAAIgOACQgGACgEADIAACFIgLADIgQABIgOgBQgHgCgEgDQgEgDgCgGQgDgHAAgJIAAjeIAMgDIAPgBIAOABQAHACAEADQAFAEACAFQACAGAAAKIAAAmIAPgFQAJgCAKAAQAkAAAUATQAUATAAAlIAAB0IgMADIgQABg");
	this.shape_29.setTransform(220.2,37.9,0.667,0.667);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgnBmQgRgQAAgiIAAikIAMgDQAHgBAIAAQAQAAAIAGQAJAGgBATIAAAZIAvAAIAFAKIACAOQAAAOgGAGQgFAGgKAAIghAAIAAA5QAAAKAHAEQAFAEALAAIAMgBIAKgCIAFAJQACAGABAHQAAAPgLAJQgLAJgZAAQgeAAgSgPg");
	this.shape_30.setTransform(208.7,38.8,0.667,0.667);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAsCAQgGgCgEgDQgFgEgCgFQgCgGAAgKIAAhVQAAgPgHgHQgIgGgKAAIgOACQgHACgDADIAACFIgLADIgRABIgNgBQgHgCgEgDQgEgDgDgGQgCgGAAgKIAAjeIAMgDIAQgBIANABQAGACAFADQAEADADAGQACAGAAAKIAAAmIAPgFQAJgCAKAAQAjAAAVATQAUATAAAlIAAB0IgMADIgPABg");
	this.shape_31.setTransform(191.8,37.9,0.667,0.667);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgnBmQgRgQAAgiIAAikIALgDQAIgBAIAAQAQAAAJAGQAIAGAAATIAAAZIAvAAQADAFABAFQACAGAAAIQAAAOgGAGQgFAGgKAAIggAAIAAA5QAAAKAGAEQAFAEALAAIALgBIALgCIAFAJQACAFAAAIQAAAPgKAJQgLAJgZAAQgeAAgSgPg");
	this.shape_32.setTransform(180.2,38.8,0.667,0.667);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgKCKQgGgCgEgDQgFgEgCgFQgDgHABgJIAAicIALgCQAIgCAIAAIANACQAHABAEADQAEAEACAFQADAHAAAKIAACbIgMACQgIACgIAAgAgXhOQgKgLAAgNQAAgOAKgMQAJgKAOABQAPgBAKAKQAJALAAAPQAAAOgJAKQgKAKgPAAQgOAAgJgKg");
	this.shape_33.setTransform(171.8,37.2,0.667,0.667);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAaBSIgYhdIgZBiQgEAFgJADQgJADgMAAQgPAAgKgFQgLgEgEgIQgEgKgFgTIgUhcIgHgrQAGgGAIgEQAJgEAJAAQANAAAIAGQAIAGACAPIAOBrIACAAIAZhvIAOgHQAHgCAKAAQAOAAAIAEQAIAFADAIIAZBnIACAAIAOh+QAHgEAHgCQAGgCAJAAQAMAAAIAGQAJAGAAAOQAAAIgCAKIgaB5QgDANgDAGQgGAGgKACQgKADgMAAQgeAAgGgQg");
	this.shape_34.setTransform(158.9,40,0.667,0.667);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgnBmQgRgQAAgiIAAikIALgDQAIgBAIAAQAQAAAJAGQAIAGAAATIAAAZIAvAAIAEAKIACAOQAAANgGAHQgFAGgKAAIggAAIAAA5QAAAKAFAEQAGAEALAAIALgBIALgCIAFAJQADAGAAAHQAAAPgLAJQgKAJgaAAQgeAAgSgPg");
	this.shape_35.setTransform(140.1,38.8,0.667,0.667);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgpBhQgGgCgEgDQgFgDgCgGQgCgFAAgLIAAhzQAAgJADgGQADgGAGgFIAOgJIASgHIATgFIAVgCQARAAAKAHQAKAHAAARIgBAKIgEAKIgPAAIgeAGIgLAEIAACCIgKADIgQABg");
	this.shape_36.setTransform(130.5,39.9,0.667,0.667);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AghBgQgRgFgJgHQgMgHgGgNQgGgMAAgPQAAgaAPgOQAPgOAfgDIAugGIAAgDQAAgLgJgEQgIgGgSAAQgNAAgNAEQgMADgLAEQgGgDgCgIQgEgGAAgIQAAgKAFgGQAEgGAKgEQANgGALgBQANgBAOAAQATAAAPAEQAQADAMAKQAMAIAFANQAHAOAAASIAABVQAAALgGAFQgEAGgIAFQgXAPgrAAQgTAAgOgDgAgBASQgJACgHADQgGADAAAJQAAAHAFAFQAFAFANAAIANgBQAJgCACgCIAAgfg");
	this.shape_37.setTransform(118.3,40,0.667,0.667);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgnBmQgRgQAAgiIAAikIALgDQAIgBAIAAQAQAAAJAGQAIAGAAATIAAAZIAvAAQADAFABAFQACAGAAAIQAAANgGAHQgFAGgKAAIggAAIAAA5QAAAKAGAEQAEAEAMAAIALgBQAGAAAEgCIAGAJQACAFAAAIQAAAPgKAJQgLAJgZAAQgeAAgSgPg");
	this.shape_38.setTransform(107.6,38.8,0.667,0.667);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AggBiQgOgDgIgEQgJgFgGgHQgEgIAAgKQgBgJAEgGQAFgHADgEQAKAFAPAGQANAFARAAQALgBAFgDQAGgDABgGQAAgGgFgDQgDgCgKgCIgLgDQgfgGgQgPQgPgMAAgaQAAgOAGgMQAHgNAJgGQAKgIAPgFQAPgEAQAAQAMAAANACQAKACAKAFQAKAEAFAGQAEAHABAKQgBAIgDAHQgCAGgGAFQgDgEgFgBIgbgHIgMgBQgMAAgGAEQgGACAAAHQAAADAEADQAEAEAIABIALADQAjAIAPAPQAOAOAAAXQAAAegVAQQgTARgoAAQgRAAgLgCg");
	this.shape_39.setTransform(96.7,40,0.667,0.667);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AggBiQgPgDgHgEQgJgFgFgHQgGgJAAgJQAAgIAEgHQADgGAFgFQAKAFAOAGQAOAFARAAQALgBAFgDQAHgDgBgGQAAgGgEgDQgDgCgKgCIgLgDQgfgGgPgPQgQgMAAgaQAAgOAGgMQAFgMALgHQAKgIAPgFQAPgEARAAQALAAANACQAKACALAFQAIAEAFAGQAGAIAAAJQAAAIgDAHIgIALQgEgDgFgCIgagHIgOgBQgLAAgGAEQgGACAAAHQAAADADADQAFAEAIABIAMADQAhAIAPAPQAPAOAAAXQAAAegUAQQgVARgnAAQgRAAgLgCg");
	this.shape_40.setTransform(80.1,40,0.667,0.667);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgVAzIgLgEIAGhaIANgGQAJgCAGAAIALABQAHABADADQAFADACAFQADAFAAAGIgCARIgKAjQgDAIgEAHQgEAGgFADQgFADgIAAQgHAAgGgBg");
	this.shape_41.setTransform(71.4,32.8,0.667,0.667);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgnBmQgRgQAAgiIAAikIAMgDQAHgBAIAAQAQAAAJAGQAIAGAAATIAAAZIAvAAIAEAKIACAOQAAAOgGAGQgFAGgKAAIggAAIAAA5QAAAKAGAEQAFAEALAAIAMgBIAKgCIAFAJQADAGAAAHQAAAPgLAJQgLAJgZAAQgeAAgSgPg");
	this.shape_42.setTransform(64.2,38.8,0.667,0.667);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgNgMgIgTQgIgUAAgZQAAgaAIgRQAIgTAMgMQAMgLARgGQARgFAPAAQAUgBAPAHQAQAHALAJQALALAHAPQAGAPAAASQAAANgHAGQgGAIgNABIhYAPQAEALAMAIQAMAFAPABQARgBALgEQANgDAJgGQAFAEAEAHQAEAGAAAJQAAARgPAJQgLAGgPADQgMACgPgBQgTABgTgHgAgMgvQgGADgEAEQgEAFgCAGIgCAMIA8gKQgBgJgHgHQgGgIgOAAQgHAAgHAEg");
	this.shape_43.setTransform(52.5,40,0.667,0.667);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgqB3QgPAAgJgJQgJgKAAgQIAAjHIAdgDQAIAAAHABQAGACAEADQAEADADAHQACAFAAALIAACXIBRAAQAEAGABAFQACAJAAAGQAAAQgGAGQgGAGgKAAg");
	this.shape_44.setTransform(40.2,38.4,0.667,0.667);

	this.instance = new lib.ClipGroup_1_0();
	this.instance.parent = this;
	this.instance.setTransform(-295.6,73.1,0.667,0.667,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-935.6,-286.9,1280,720);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZB3QgIgJgBgRQABgPAIgKQALgLAOAAQAQAAAJALQAKAKgBAPQABARgKAJQgJALgQAAQgOAAgLgLgAgRAkQgGgDgCgKQgCgJgBgRIgCgoQgCgUAAgVIAAgkQAIgEAHgCQALgDAHAAQAPAAAIAHQAIAIAAAPIgCA+QgBATgCASQgBAQgDASIgFACIgFACIgNACQgIAAgJgEg");
	this.shape.setTransform(158.9,48.1,0.667,0.667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAsBhQgGgBgEgEQgFgEgCgFQgDgHABgIIAAhaQAAgMgHgGQgFgFgMgBIgNACIgMAGIAACFIgMACIgQABIgNgBQgHgBgEgEQgFgEgCgFQgCgGAAgJIAAhzQAAgLAEgGQAEgGAHgGQANgKASgFQATgGAVAAQApAAAWATQAWATAAAiIAAB4IgMACIgPABg");
	this.shape_1.setTransform(148.4,49.9,0.667,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmBcQgRgGgMgNQgNgNgHgTQgGgRAAgYQAAgWAGgTQAHgSANgMQALgOASgGQASgIAUABQAUgBASAIQASAHAMANQANAOAGARQAHAUAAAUQAAAXgHAUQgGASgNANQgNANgRAGQgQAGgWABQgWAAgQgIgAgXgiQgIALAAAXQAAAXAJANQAIAMAOAAQAQABAHgNQAJgNAAgXQAAgWgJgMQgIgNgPAAQgPAAgIANg");
	this.shape_2.setTransform(134.4,50,0.667,0.667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgNgMgIgTQgIgUAAgZQAAgaAIgRQAHgSANgNQALgLASgGQARgGAPABQAUAAAPAFQAQAIALAJQAMAMAGAOQAGARAAAQQAAANgHAGQgGAHgNACIhYAPQADALANAIQAMAFAQAAQAPAAAMgDQANgEAIgGQAFADAFAIQAEAHABAIQgBARgPAJQgLAHgPACQgNACgNAAQgVAAgSgHgAgMgwQgHAEgDAEQgEAFgCAGIgDAMIA9gKQgBgJgHgHQgGgHgOgBQgHAAgHADg");
	this.shape_3.setTransform(115.9,50,0.667,0.667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABcBhQgGgBgFgEQgEgDgCgGQgDgHAAgIIAAhcQAAgLgGgFQgFgGgLAAQgGABgFACQgGACgDADIABADIAACCIgMACIgQABIgNgBQgGgBgFgEQgEgEgCgFQgDgHAAgIIAAhcQAAgMgGgEQgHgGgJAAQgHAAgEACIgIAFIAACGIgMACIgQABIgOgBQgGgBgFgEQgEgEgCgFQgDgHAAgIIAAh0QAAgLAFgFQADgGAIgGQANgKARgFQASgGAUAAQAPAAAOAFQAOAEAKAIQAKgGAOgGQANgFAUAAQAMAAAPAEQANAEAKAIQAKAIAGAOQAHANAAAUIAAB5IgMACIgQABg");
	this.shape_4.setTransform(99.2,49.9,0.667,0.667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghBgQgOgDgMgJQgMgHgFgNQgHgLAAgQQABgbAPgNQAPgOAegEIAugFIAAgDQAAgLgJgEQgJgGgRAAQgNAAgNAEQgOADgJAEQgFgCgDgJQgEgGAAgIQAAgKAFgGQAFgGAJgEQANgGALgBQANgBAOAAQATgBAQAFQAPADAMAKQALAIAHANQAFAOABASIAABVQgBALgFAFQgEAHgIAEQgXAPgrABQgTgBgOgDgAAAATQgKAAgHAEQgHAEABAIQAAAHAFAFQAGAFAMAAQAHAAAHgCQAIgBACgCIAAgfg");
	this.shape_5.setTransform(82.2,50,0.667,0.667);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgbB0QgXgIgRgPQgQgOgKgYQgKgXAAgeQAAgeALgYQALgYARgPQAQgOAYgJQAWgIAXAAQAiAAAUAMQAUALAAAUQAAAJgFAIQgEAHgGAEQgKgGgNgFQgMgFgSgBQgeAAgRATQgSASAAAgQAAATAFALQAEANAJAJQAIAIALAEQAJAEANAAQAIAAAGgCIAJgDIAAgkIgmAAQgDgGgBgFQgCgGAAgJQAAgMAGgHQAGgGAJAAIA9AAQAKAAAGAHQAGAFAAAMIAABOQAAAMgEAFQgDAGgJAGIgNAFQgJAFgHABIgTADIgUABQgZAAgWgHg");
	this.shape_6.setTransform(67.8,48.5,0.667,0.667);

	this.instance = new lib.ClipGroup_12();
	this.instance.parent = this;
	this.instance.setTransform(484.4,161.8,0.667,0.667,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.6,-198.2,1280,720);


(lib.men_hand_moving = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(20.7,28.6,1,1,-6.5,0,0,19.9,30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:20,rotation:0,x:20.8},13,cjs.Ease.get(1)).wait(1).to({startPosition:0},0).to({regX:19.9,rotation:-76.7,x:9.6,y:33.6},25,cjs.Ease.get(1)).wait(21));

	// Layer_2
	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(30,75.2,1,1,11.2,0,0,15.3,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:17,rotation:8.5,x:26.4,y:75.3},13,cjs.Ease.get(1)).wait(1).to({startPosition:0},0).to({regY:17.1,rotation:-66.5,x:56.9,y:34.5},25,cjs.Ease.get(1)).wait(21));

	// Layer_1
	this.instance_2 = new lib.Symbol3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(38.4,139.4,1,1,0,-30,150,5.5,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},13,cjs.Ease.get(1)).wait(1).to({skewX:0,skewY:0,y:139.5},0).wait(1).to({regX:17.3,regY:21.7,rotation:-10,x:61.9,y:150},0).wait(1).to({rotation:-19.6,x:72.8,y:141.6},0).wait(1).to({rotation:-28.8,x:82.7,y:133.1},0).wait(1).to({rotation:-37.6,x:91.7,y:124.8},0).wait(1).to({rotation:-45.9,x:99.9,y:116.7},0).wait(1).to({regX:5.5,regY:2.8,rotation:-53.9,x:85,y:107.3},0).wait(1).to({regX:17.3,regY:21.7,rotation:-52.3,x:111,y:102.6},0).wait(1).to({rotation:-50.9,x:114.6,y:96.6},0).wait(1).to({rotation:-49.5,x:118,y:91},0).wait(1).to({rotation:-48.2,x:121.2,y:85.7},0).wait(1).to({regX:5.5,regY:2.8,rotation:-47,x:102.2,y:76.5},0).wait(1).to({regX:17.3,regY:21.7,rotation:-49.9,x:127.8,y:74.3},0).wait(1).to({rotation:-52.7,x:131.3,y:68.4},0).wait(1).to({rotation:-55.2,x:134.3,y:63},0).wait(1).to({rotation:-57.5,x:137.2,y:57.9},0).wait(1).to({regX:5.5,regY:2.9,rotation:-59.6,x:117.5,y:54.1},0).wait(1).to({regX:17.3,regY:21.7,rotation:-61.4,x:141.8,y:49.4},0).wait(1).to({rotation:-63.1,x:143.8,y:45.8},0).wait(1).to({rotation:-64.5,x:145.4,y:42.8},0).wait(1).to({rotation:-65.7,x:146.8,y:40.1},0).wait(1).to({rotation:-66.7,x:147.9,y:38},0).wait(1).to({rotation:-67.5,x:148.7,y:36.3},0).wait(1).to({rotation:-68,x:149.3,y:35.1},0).wait(1).to({rotation:-68.3,x:149.7,y:34.4},0).wait(1).to({regX:5.5,regY:2.8,rotation:-68.5,x:128,y:38.3},0).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-1.3,57,186.3);


(lib.manstanding = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head
	this.instance = new lib.man_head_loop("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(119.9,196.3,1,1,0,0,0,113.7,196.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({startPosition:29},0).to({y:199.3,startPosition:32},9).to({y:196.3,startPosition:36},8).wait(8).to({startPosition:44,loop:false},0).to({_off:true},107).wait(19));

	// hand
	this.instance_1 = new lib.man_hand_right();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.6,219,1,1,0,0,0,50.6,30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({rotation:-3.7,x:50.7,y:218},9).to({rotation:0,x:50.6,y:219},16).to({_off:true},107).wait(19));

	// body_upper
	this.instance_2 = new lib.man_body();
	this.instance_2.parent = this;
	this.instance_2.setTransform(116.8,330.3,1,1,0,0,0,106.9,158.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({y:333.3},9).to({y:330.3},8).to({_off:true},115).wait(19));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B4850").s().p("Ag8BrQhWgmgqgXQgHgEgCgIQgBgIAGgGQAqgmAxggQBLgxA7gJQAJgCAHADICVA3QhFAWibCEQgKAIgKAAQgHAAgHgDg");
	this.shape.setTransform(73.1,459.7,0.667,0.667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5C4117").s().p("AjpBIQhbgMhlgaQgjgJhZgbQgNgDgHgKQgIgKABgNIAAg7IBmAlQB9ApB3AOQEPAgD6gQQDsgOAzguIgCBGQAAA0j1ATQhUAGhaAAQi3AAjPgag");
	this.shape_1.setTransform(71.5,474.9,0.667,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#67616D").s().p("AjlDqQh2gUh+gkIhnghIAAiPQAAhfAshWQAphQAdAMQgfA/BAAyQA/AyByAFQAzACgIgtQgUg4AAgXQAAgfBPgWQBOgWAtARQANAFAGAPQAYBKBnAoQA6AXCSAbQC9AfAvBWQARAfABArQABAYgCAsQAAAZhGAVQhFAUhyAKQhXAHhYAAQi5AAjAghg");
	this.shape_2.setTransform(71.5,462.5,0.667,0.667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4BC98").s().p("AjZD0QiSAAhkhLQh0hYAUiUQATiOA8gYQAagKA0ABIBzAEQCmACBoA9QAeASBGA0QBNA4A4AjQAuAGCGgEQB2AFAiA6QAtBNhaA7QhWA5iHAAg");
	this.shape_3.setTransform(72.2,461.9,0.667,0.667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4B4850").s().p("Ag4BlQhTgkgogVQgGgEgBgIQgBgHAFgGQAngjAvggQBHguA5gJQAIgBAHACICNA1QhCAUiTB+QgJAHgJAAQgHAAgGgDg");
	this.shape_4.setTransform(167.6,450.1,0.667,0.667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5C4117").s().p("AjeBEQhVgLhggZIh3ghQgMgEgGgKQgIgJABgMIAAg4IBgAjQB4AnBvANQEDAfDtgQQDhgNAwgrIgCBCQAAAyjoARQhQAGhVAAQiuAAjGgZg");
	this.shape_5.setTransform(166.1,464.5,0.667,0.667);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#67616D").s().p("AjaDfQhvgTh4gjIhigfIAAiHQAAhbAphSQAnhMAcAMQgdA7A8AwQA8AwBsAEQAyACgJgqQgTg2AAgWQAAgdBLgVQBKgVArAQQANAFAFAOQAXBGBiAnQA3AVCKAaQC0AeAtBRQAQAdABApQABAYgCApQAAAYhCATQhCAUhsAJQhSAHhTAAQixAAi3gfg");
	this.shape_6.setTransform(166,452.7,0.667,0.667);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F4BC98").s().p("AjODoQiLAAhfhIQhuhTATiNQASiGA5gXQAZgKAyABIBsAEQCeACBjA6QAcARBDAxQBJA2A2AhQArAGB/gFQBxAGAgA2QAqBJhVA5QhSA2iAAAg");
	this.shape_7.setTransform(166.7,452.2,0.667,0.667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#8C6D4F").ss(2.5,1,1).p("AnbgeQCrBKFvgHQCagEBygTQB3gUAbge");
	this.shape_8.setTransform(61.8,393.3,0.667,0.667);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#743F3F").ss(2.8,1,1).p("AjSgeQAQAXAcAEIFDAhQAlADARgU");
	this.shape_9.setTransform(46.1,367.2,0.667,0.667);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#743F3F").ss(2.5,1,1).p("AAAhyIAADl");
	this.shape_10.setTransform(45.3,377.6,0.667,0.667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#976D47").s().p("AjbCJIgVkWQgBgSAMgMQANgMARACIGWAqQAPACAKAMQAKALgBAQIgWEZg");
	this.shape_11.setTransform(46.2,356.4,0.667,0.667);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#976D47").s().p("AC+FUIl7goQgRgCgMgVQgMgVABgcIAQn+QABgaAMgQQALgRAQACIFbAkQAQACALATQAMATABAaIAQICQABAbgMATQgKARgQAAIgDAAg");
	this.shape_12.setTransform(46.1,367,0.667,0.667);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#743F3F").s().p("AgVJTQjMgBiPgbQihgfgSg2QgUg5gfjJQgjjeAAhwIAAnlITzAAIAAJ3QgXBUgyCmQgpCKgaBSQgNAqieAZQiNAXi6AAIgRgBg");
	this.shape_13.setTransform(63,362.4,0.667,0.667);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#8C6D4F").ss(2.9,1,1).p("AhihPQAABGAuAqQA0AvBjAA");
	this.shape_14.setTransform(123,345.5,0.667,0.667);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#8C6D4F").ss(2.9,1,1).p("AAAinIAAFP");
	this.shape_15.setTransform(130.4,351.6,0.667,0.667);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#743F3F").s().p("AJ2FBQm2AAlXgsQpYhMAAi6IAAlPIXfAAIAAKBg");
	this.shape_16.setTransform(70.9,343.9,0.667,0.667);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#743F3F").s().p("AnCFBIAAqBIOFAAIAAFPQgUBjkpBqQkYBljFAAg");
	this.shape_17.setTransform(151.2,343.9,0.667,0.667);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#8C6D4F").ss(2.5,1,1).p("AkogOQBsAtDMgDQDRgDBIg1");
	this.shape_18.setTransform(152.8,394.2,0.667,0.667);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#743F3F").s().p("AAMI/QifgDhygWQh/gYgPgnQgSg0gRiPQgSiYAAh2IAApUIORAAIAAJ3QAACHgNCDQgNB2gSBFQgIAih8ASQhfANh/AAIgvAAg");
	this.shape_19.setTransform(150.8,363.7,0.667,0.667);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FAB28D").s().p("Ah+KQQgjgfAAgpQAPljABiWQAAhcgIkNIgJj6QAAg+A3guQA1gsBAAAQA/AAAtAsQAtAtAAA/IgLEMQgNEXgIA6IhFH/QAAApgjAfQghAdgrAAQgrAAgigdg");
	this.shape_20.setTransform(152.9,392.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FAB28D").s().p("AiFKyQgkggAAgrQAPl2ABidQAAhigIkbIgJkHQAAhAA5gxQA4gvBEAAQBCAAAvAvQAvAvAABCIgMEbQgNElgJA9IhIIaQAAArglAgQgiAfguAAQgtAAgkgfg");
	this.shape_21.setTransform(57.7,399.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},161).wait(19));

	// hand
	this.instance_3 = new lib.men_hand_moving("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(177,278.7,1,1,0,0,0,31.9,91.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({mode:"synched",loop:false},0).to({_off:true},132).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,222.2,481.4);


(lib.hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand
	this.instance = new lib.Symbol8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(30,113,1,1,0,0,0,15.3,2.4);

	this.instance_1 = new lib.Symbol10("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-30.1,65.3,1,1,-45,0,0,13.6,24.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:2.3,rotation:84.7,x:21.3,y:103.6},4,cjs.Ease.get(1)).to({rotation:138.7,x:-12.7,y:77.3},6,cjs.Ease.get(1)).to({_off:true},1).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({rotation:0,x:3.7,y:15.8},4).wait(23));

	// Layer_1
	this.instance_2 = new lib.Symbol7("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(27.7,79.5,1,1,0,0,0,9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:45,x:47.1,y:74.3},4,cjs.Ease.get(1)).to({regY:-0.1,scaleY:1.3,rotation:99,x:37.3,y:81.9},6,cjs.Ease.get(1)).wait(1).to({startPosition:0},0).to({regX:8.9,regY:-0.2,scaleX:1.28,scaleY:1.31,rotation:156.7,x:31,y:87.5},4).wait(23));

	// shoulder
	this.instance_3 = new lib.Symbol6("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(23,14.7,1,1,0,0,0,23,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:22.9,rotation:-10,y:14.8},4,cjs.Ease.get(1)).to({regX:23,rotation:0.7,x:23.1,y:14.9},6,cjs.Ease.get(1)).wait(28));

	// Layer_2
	this.instance_4 = new lib.Symbol9("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(22.2,22,1,1,0,0,0,9,-20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-13.2},4,cjs.Ease.get(1)).to({regX:9.1,rotation:-4.2,y:21.9},6,cjs.Ease.get(1)).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.7,143.4);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(201.1,34.8,1,1,0,0,0,201.1,34.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,402.2,69.5), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(201.1,34.8,1,1,0,0,0,201.1,34.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,402.2,69.6), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(21.6,10.4,1,1,0,0,0,21.6,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,43.2,20.8), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(23.9,11,1,1,0,0,0,23.9,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,47.7,21.9), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_4();
	this.instance.parent = this;
	this.instance.setTransform(19.2,86.2,1,1,0,0,0,19.2,86.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,38.4,172.4), null);


(lib.Group_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(137.1,22.8,1,1,0,0,0,137.1,22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3_1, new cjs.Rectangle(0,0,274.2,45.5), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.ClipGroup_0_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(137.1,22.8,1,1,0,0,0,137.1,22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,274.2,45.5), null);


(lib.women = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head
	this.instance = new lib.women_head_talking("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(112.5,176.5,1,1,0,0,0,112.5,176.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({mode:"single",startPosition:39},0).wait(80).to({mode:"synched",startPosition:0,loop:false},0).wait(61));

	// hand
	this.instance_1 = new lib.hand("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(168.1,260.7,1,1,0,0,0,26.3,71.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180));

	// body
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA377").s().p("AgaCiQgXgBgMgVIiskuIHTAAIjfEzQgMASgVAAIgEgBg");
	this.shape.setTransform(111.3,183.7,0.667,0.667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D72E4E").s().p("AhjEDQgRgCgLgOIjjkcIAAjaIIqAAICbDHImnE3QgLAJgOAAIgGgBg");
	this.shape_1.setTransform(136.9,190.2,0.667,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEA400").s().p("AiFE1QgRgCgLgOIjCj2QgTgXAAgeIAAkvIIrAAIDCD6IncFoQgMAJgNAAIgHgBg");
	this.shape_2.setTransform(138.2,193.5,0.667,0.667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFE98").s().p("AgLAtQghgKgRgVIAsgeQAVgPATgRQAYAPALAaQALAdgWARQgNAKgTAAQgMAAgOgEg");
	this.shape_3.setTransform(160,191.5,0.667,0.667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFE98").s().p("AgOA5QghgKgRgVIBwhWQAQAVABAkQABAlgWARQgNAKgTAAQgMAAgOgEg");
	this.shape_4.setTransform(153,196.7,0.667,0.667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFE98").s().p("AgOA4QgigKgRgVQAsgiBIgyQAPAVgBAkQgBAlgVAQQgNAJgSAAQgMAAgOgEg");
	this.shape_5.setTransform(146.4,202.6,0.667,0.667);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFE98").s().p("AgOA6QgPgFgOgJQgNgIgHgKQAWgQAggZIA2gtQARAVACAjQACAlgVASQgOAKgUAAQgLAAgOgDg");
	this.shape_6.setTransform(139.1,208.1,0.667,0.667);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFE98").s().p("AgHA9QgIAAgMgFQgGgDgIgJQgLgMABgSQAAgLAGgOIADABIACAAIACABIACgBQACAAAFgCIAJgGQAQgMAXgfQAXARAHAiQAJAogcAVQgHAFgLADQgGADgHAAIgGgBg");
	this.shape_7.setTransform(132.9,213.1,0.667,0.667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEFE98").s().p("AgLA9QgSgCgMgKQgMgLgEgRQgDgPAEgQQAHggAWgSQAtA5AqAPQgEAMgKALQgLANgOAHQgNAGgNAAIgGAAg");
	this.shape_8.setTransform(126.6,211.4,0.667,0.667);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEFE98").s().p("AgyApQgIgMAAgQQABgOAGgRQANgfAYgOQAOAYAVAhQATAcATAYQgVARgjABQgmAAgPgXg");
	this.shape_9.setTransform(121.1,204.5,0.667,0.667);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEFE98").s().p("AAABAQgmgFgNgZQgNgaAUggQARgdAagLQAYA8AiA6QgSALgYAAIgPgBg");
	this.shape_10.setTransform(116.3,197,0.667,0.667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D72E4E").s().p("AhEDjQgRgFgDgRIg0koQgCgLADgIIAhh2ID3AAIABEAIi1DAQgJAJgLAAQgEAAgFgCg");
	this.shape_11.setTransform(97.4,188.1,0.667,0.667);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEA400").s().p("AhNDhQgjgLgGgkIgvk3QgCgRAHgPQAHgQAOgJIA5glID3AAIACDZQAAAKgIAJIixDHQgSAUgXAAQgJAAgJgDg");
	this.shape_12.setTransform(95.8,195,0.667,0.667);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFE98").s().p("AguApQASgbAKgUQAQgcACgQQAZADANAWQAIAMABANQACAOgGALQgMAXgfADIgJAAQgWAAgPgKg");
	this.shape_13.setTransform(104.1,197.4,0.667,0.667);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEFE98").s().p("AgHA0QgbgEgQgRQAmghAigyQASAMAIAcQAIAegQASQgOARgXAAIgKgBg");
	this.shape_14.setTransform(99.5,203.7,0.667,0.667);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEFE98").s().p("AgQAtQgUgFgFgQQgFgNAIgLQAEgIALgHIAAAAIAEgBIAIgDQASgIAVgUQAQASAAAbQAAAhgcAMQgIAFgJAAQgHAAgIgDg");
	this.shape_15.setTransform(94.2,208.9,0.667,0.667);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFE98").s().p("AgXAqQgMgHgFgKQgKgWAUgXQARgVAUgFQAOAyAXAaQgSARgZAAQgNAAgLgFg");
	this.shape_16.setTransform(88.6,206.9,0.667,0.667);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFE98").s().p("AARAxQgNgBgKgFQgcgLgEgVQgDgUAYgTQAUgSAVgCQAGA6AJAlQgHACgIAAIgHAAg");
	this.shape_17.setTransform(86.5,200.6,0.667,0.667);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEFE98").s().p("AgIAnQgagOgCgUQgBgUAYgSQAVgQAVAAQABAmAHA9IgGAAQgTAAgUgLg");
	this.shape_18.setTransform(85.6,194.1,0.667,0.667);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFE98").s().p("AgKAkQgZgRAAgTQAAgWAbgPQAVgNAXACQgEAlABA8IgEAAQgTAAgUgNg");
	this.shape_19.setTransform(85.4,187.4,0.667,0.667);

	this.instance_2 = new lib.ClipGroup_8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(133.4,269.5,0.667,0.667,0,0,0,116.2,145);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F44A6A").s().p("Aw3URQgBkPAwmRQAvmQBQmUQBUmwBjlAQBuliBsibIM/AAQCOCaCPF6QCBFSBvHPQBoGtA+GpQA/GmAAEQg");
	this.shape_20.setTransform(128,268.9,0.667,0.667);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#337598").s().p("AilNxQgJiPgJiqQgSlUAAiJQAAjRADkHQAFkoAFgjQAOhkBCg1QA8gvBMAGQBMAGAyA2QA2A7gGBcQgJCDgHEdQgHEZgHBZIg4MWQgPAahxAAQhxAAgogag");
	this.shape_21.setTransform(164.2,358.1,0.667,0.667);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6F3535").s().p("Ai9BzQhJAAAPgvQAJgfAegaQA0guBFgsQAigWAXgNIEZAAIAACyQAAAzg6AAg");
	this.shape_22.setTransform(155.2,424.5,0.667,0.667);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEB992").s().p("AiwBuQg5gEAIggQAGgcAlgVIB9hBQAigSAAgzID6AAIgHCsQAAAug1ABg");
	this.shape_23.setTransform(155.6,423.9,0.667,0.667);

	this.instance_3 = new lib.Group();
	this.instance_3.parent = this;
	this.instance_3.setTransform(93.8,352.2,0.667,0.667,0,0,0,19.2,86.2);
	this.instance_3.alpha = 0.301;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#337598").s().p("AicNFQgjoeAAjQQAAjEADj9QAEkZAFgiQAOhfA/gyQA4gsBIAGQBJAFAvA0QAzA4gGBXQgIB7gHEQQgHEKgGBWIg1LuQgOAZhrAAQhsAAglgZg");
	this.shape_24.setTransform(93.8,352.2,0.667,0.667);

	this.instance_4 = new lib.Group_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(85.3,415.4,0.667,0.667,0,0,0,23.9,11);
	this.instance_4.alpha = 0.301;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6F3535").s().p("Ai0BtQhFABAOguQAJgdAcgZQAygrBBgqQAggWAXgMIEKAAIAACpQAAAyg3gBg");
	this.shape_25.setTransform(85.3,415.3,0.667,0.667);

	this.instance_5 = new lib.Group_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(85.7,414.7,0.667,0.667,0,0,0,21.6,10.4);
	this.instance_5.alpha = 0.301;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEB992").s().p("AinBoQg2gDAHgfQAGgZAjgVQAngWBQgoQAggQAAgxIDuAAIgHCjQAAAsgyAAg");
	this.shape_26.setTransform(85.7,414.7,0.667,0.667);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FEFE98").s().p("AgcAyQgZgLgHgkQgHggALgXQA7AcA9AYQgJAXgdASQgVAMgQAAQgJAAgIgDg");
	this.shape_27.setTransform(74.1,253.8,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.instance_5},{t:this.shape_25},{t:this.instance_4},{t:this.shape_24},{t:this.instance_3},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_2},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(180));

	// hand
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEA400").s().p("AgdAqQiahTg4gkIgGgEIAphSIHCD2IgpBRQhKgiighYg");
	this.shape_28.setTransform(63.9,244.2,0.667,0.667);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEFE98").s().p("AgfAyQgYgMgGgkQgFggALgXQAxAZBFAgQgKAXgdAQQgUALgPAAQgLAAgJgEg");
	this.shape_29.setTransform(66.1,250,0.667,0.667);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FEFE98").s().p("AgiAyQgXgNgEgkQgEghANgWQA6AiA5AcQgMAXgeAPQgSAJgPAAQgMAAgKgFg");
	this.shape_30.setTransform(58.2,245.9,0.667,0.667);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FEFE98").s().p("AgtAqQgWgNAEgYQADgPAVgnQAUAOAeAQQApAUAMAHQgMAWgkANQgSAHgQAAQgPAAgMgIg");
	this.shape_31.setTransform(50.4,241.7,0.667,0.667);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D72E4E").s().p("AjpFTQihhZgvgfQCMklCoi0QDrj8DqAyIBqA2ImxNjQhMgjimhbg");
	this.shape_32.setTransform(77,224.1,0.667,0.667);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FEB992").s().p("Ah5DQQgXgIABgZQAAgxAWhGQATg9Aeg9QAkhLAUgXQAQgUAhgNQAlgOAWACQAdADARAeQAJAwgEAuIgPCLQgHBIgUAVQgNAPgZgGQgNgDAAgnQgBgaAHg8QAEgogKgEQgIgEgMATIgxBcQglBEgbAiQgLAOgOAAQgGAAgHgCg");
	this.shape_33.setTransform(39.2,300.5,0.667,0.667);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEB992").s().p("AnYKcQAJg1AThPQAligAsiHQApiAAVg6QAjhfArhKQAthMBiiOQBTh4AjgsQBNhkA/guQAxglBFgUQA1gQBDAUQAiAKAXAOQg6BCirEEQi1EXgxBHQgfAvgsBRIhbCxQgrBWgyB6QgcBFgvB4g");
	this.shape_34.setTransform(69.2,246,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]}).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,432.2);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		this.parent.initContentButton();
		this.parent.playSfx();
	}
	this.frame_61 = function() {
		this.parent.playSfx();
	}
	this.frame_122 = function() {
		this.parent.playSfx();
	}
	this.frame_184 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(59).call(this.frame_61).wait(61).call(this.frame_122).wait(62).call(this.frame_184).wait(1));

	// Layer 9
	this.b2 = new lib.Symbol2copy();
	this.b2.parent = this;
	this.b2.setTransform(406.7,266.7,1.765,0.419,0,0,0,-0.1,0.1);
	new cjs.ButtonHelper(this.b2, 0, 1, 1);

	this.b1 = new lib.Symbol2copy();
	this.b1.parent = this;
	this.b1.setTransform(-410.8,266.7,1.765,0.419,0,0,0,-0.1,0.1);
	new cjs.ButtonHelper(this.b1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2}]}).wait(185));

	// Layer 1
	this.instance = new lib.txt1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(261.2,-81.1,0.1,0.1,0,0,0,104.5,153.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:104.3,regY:153.3,scaleX:1.1,scaleY:1.1,x:261.3},7,cjs.Ease.get(1)).to({regX:104.2,scaleX:1,scaleY:1,x:261.2},12,cjs.Ease.get(1)).wait(166));

	// Layer 2
	this.instance_1 = new lib.Symbol4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-303.8,-41.9,0.1,0.1,0,0,0,180.5,120);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({regX:180.6,regY:119.8,scaleX:1.1,scaleY:1.1},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},12,cjs.Ease.get(1)).wait(107));

	// texts
	this.instance_2 = new lib.Symbol5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(346.4,81.1,0.1,0.1,0,0,0,51,154.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120).to({_off:false},0).to({regX:50.8,regY:154.2,scaleX:1.1,scaleY:1.1},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:81.2},12,cjs.Ease.get(1)).wait(46));

	// btns
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

	this.instance_3 = new lib.Group_5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(409.3,279.1,0.667,0.667,0,0,0,137.1,22.8);
	this.instance_3.alpha = 0.102;

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

	this.instance_4 = new lib.Group_3_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-409.3,279.1,0.667,0.667,0,0,0,137.1,22.8);
	this.instance_4.alpha = 0.102;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5F3F79").s().p("AzNH3QhRgBg6hHQg5hIAAhlIAAoDQAAhlA5hIQA6hIBRAAMAmbAAAQBRAAA6BIQA5BIAABlIAAIDQAABlg5BIQg6BHhRABgA0xl9QgpA0AABIIAAIDQAABJApAzQAqAzA6AAMAmbAAAQA6AAAqgzQApgzAAhJIAAoDQAAhIgpg0Qgqg0g6AAMgmbAAAQg6AAgqA0g");
	this.shape_13.setTransform(-409.3,265.3,0.667,0.667);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AUygDQgqg0g6AAMgmbAAAQg6AAgqA0QgnAwgCBEIAAgzQAAhHApg0QAqgzA6AAMAmbAAAQA6AAAqAzQApA0AABHIAAAzQgChEgngwg");
	this.shape_14.setTransform(-409.3,243.9,0.667,0.667);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#7E519C","#8253A0","#9B62BB","#A467C5"],[0,0.082,0.659,1],0,42.3,0,-42.2).s().p("A1aGxIAAtiMAq1AAAIAANig");
	this.shape_15.setTransform(-409.4,265.3,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.instance_4},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_3},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(185));

	// men
	this.instance_5 = new lib.manstanding("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-181.3,100.8,0.91,0.91,0,0,0,110.5,240.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({mode:"synched",loop:false},0).wait(161));

	// women
	this.instance_6 = new lib.women("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(166.4,108.8,1,1,0,0,0,120,216.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(185));

	// shadow
	this.instance_7 = new lib.Group_3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-146.5,309.9,0.667,0.667,0,0,0,201.1,34.8);
	this.instance_7.alpha = 0.211;

	this.instance_8 = new lib.Group_4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(154.9,314.2,0.667,0.667,0,0,0,201.1,34.8);
	this.instance_8.alpha = 0.211;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(185));

	// bg
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFC2C2").s().p("AgzDmQABkLALh4QAOiQAZB8QAbCHAZEVg");
	this.shape_16.setTransform(168.9,-145.4,0.667,0.667);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFC2C2").s().p("Ag4EUQgBk1ALiUQAOi3AcCHQAeCVAfFwg");
	this.shape_17.setTransform(46.4,-149.6,0.667,0.667);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFC2C2").s().p("AhWFsQA7loAwjXQA9kPAECkQAGDMg3HvQg7gFhAgMg");
	this.shape_18.setTransform(-189.2,-151.1,0.667,0.667);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFC2C2").s().p("AhbGGQgkltACjmQADkfBFCgQBUDFBfIJQhaAFhSAAIgtgBg");
	this.shape_19.setTransform(189,-155.6,0.667,0.667);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFC2C2").s().p("AhhEgQgalOAGitQAJjYA9COQBNCzBZHQQh4gUhggqg");
	this.shape_20.setTransform(-82.8,-154.3,0.667,0.667);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFC2C2").s().p("AiemTQAmhmA0gJQAxgIAnBJQA0BfBCEqQAsDMApD0QgcgSgWgIQgcgKghgCQhCgEhSA3QhjBKhEAlQg0qSBhkFg");
	this.shape_21.setTransform(94.3,-170.5,0.667,0.667);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFC2C2").s().p("AhahdQBhjdBoh8QBWhmA7gEQA4gEgMBNQgZCZiKMeQgWghgUgLQgfgQg/AGQhKAHhIAmQhvA6gtAQQBdl0B2kKg");
	this.shape_22.setTransform(16.6,-172.2,0.667,0.667);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFC2C2").s().p("AjOiTQgGl4BRAAQBOAABtFnQBLDvBMFlQgwgmgUgNQgggVgcAAQgkABg4A0QhUBMg5AjQgwmDgEkcg");
	this.shape_23.setTransform(-111.7,-169,0.667,0.667);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFC2C2").s().p("AgcG1QgsgqgQgMQglgagygNQA5mTBUkPQBYkdA2BZQArBHAQGLQALEDgCFdQh9ghhPhOg");
	this.shape_24.setTransform(-212.2,-164.6,0.667,0.667);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFDADA").s().p("EgnVALAQidgChwgMQg9gFg/gLQgngGgsgMQh9gihQhNQgsgrgQgLQglgbgygNIgigGQhVgOiIAkQi1A3h6AhQn0CGp3ggQgHh9AJicQAQk4BOiZQBJiPBAhLQBnh4CqhOQGvjHPtALQVzAPIUABQPAACNmgVQOsgXTYA2QTvA2FVBTQCmAoBrBKQBlBHA/BxQA4BlAlCdQAbB1AgDhQggAnheAsQi8BakzAbQkuAai/g7Ih9gvQg/gYgugDQgpgCgyAVQhAAfgvAUQjBBQlBAQQhzAGhngCQhKAAhTgDIhpgEQmUgWjZhLQhNgag+gkIhUg3QgbgSgXgJQgbgKghgCQhDgDhSA2QhkBLhEAlQhVAvheAVQh2AbiRgJIgPgBQhAgFgygHQh7gUg/gpQgjgYghgxQgWgigUgKQgfgQg+AFQhMAHhIAmQhuA6gsARQjFBImcAVQkQAOi9giQh5gVhggqQhDgeg9guQgwgngUgNQgggVgdABQgjABg6A0QhTBMg6AiQjlCLm1AAIgiAAg");
	this.shape_25.setTransform(-0.9,-171.8,0.667,0.667);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFC2C2").s().p("ACtJaQk1hXkFjLQg6gtidhkQiRhdhGg5QAXjkAtijQA6jYBSgfQD1hfJCDnQEhB0DxCGIAmDfQApEbAPEtQiZBOi8AAQiTAAingwg");
	this.shape_26.setTransform(281.7,-132,0.667,0.667);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFDADA").s().p("AGfWZQlHhsl3m0QkmlViZo5QhDj8gaj7QgYj3AUjKQASi6A2h2QA5h9BZgiQD0hfJCDnQEiB0DxCGIAmDfQApEcAPEtQAUGYggGDQgnHhh1GlQgWAIgqABIgOABQhQAAhdggg");
	this.shape_27.setTransform(281.3,-77.7,0.667,0.667);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFC2C2").s().p("AiDFyQi4gjjBihQCskRCpiPQDai4DFA1IBbCuQBpDcBBDsQh+BIiJAgQhoAZhpAAQhTAAhVgQg");
	this.shape_28.setTransform(296,13.9,0.667,0.667);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFDADA").s().p("AhaKRQl9g8iOiDQgsgpgPgrIgHgjQAYg5ArhXQBWiuBfiXQCskSCpiOQDbi4DFA0IBbCuQBoDeBCDsQBSEkALEdQgpA2h1ApQiHAwi6AAQiFAAiegZg");
	this.shape_29.setTransform(290.9,33.7,0.667,0.667);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFC2C2").s().p("AtAIGQAPkNApj7IAmjGICchJQDBhVC1hAQJCjOD1BUQBZAfA5BvQA2BpASClQkCC+iYBoQk7DZkOBnQjmBXi4AAQiOAAhygzg");
	this.shape_30.setTransform(-282.5,-130.7,0.667,0.667);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFDADA").s().p("ApYUWIhBgIQh1l2gnmsQgglYAUlqQAPkNApj8IAmjGICdhJQDAhVC2hAQJCjOD0BUQBZAfA5BvQA2BpATClQAUC0gZDbQgZDghEDgQiZH6kmEvQl3GDlGBhQheAbhQAAIgNAAg");
	this.shape_31.setTransform(-282.5,-81.8,0.667,0.667);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFC2C2").s().p("Aj1FBQiJgdh+g/QBBjSBpjEIBbibQDEgvDbCkQCpB/CtDzQjDCPi3AfQhVAOhTAAQhoAAhpgWg");
	this.shape_32.setTransform(-297.2,-0.4,0.667,0.667);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFDADA").s().p("AoJI0QhJgXgyghIgjgcQALj+BSkEQBCjSBojEIBcibQDEgvDbCkQCpB/CsDzQBfCGBWCbQArBNAYAzQAFAvhHA7QiOB0l9A1QifAXiGAAQi4AAiHgrg");
	this.shape_33.setTransform(-292,17.2,0.667,0.667);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BBAAB9").s().p("AgvZ7MAAAgz2IBfAAMAAAAz2g");
	this.shape_34.setTransform(147.7,-71.2,0.667,0.667);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FEFEFE").s().p("A7JXkMA2TgvHIAANcMgmjAhrg");
	this.shape_35.setTransform(166.2,-65,0.667,0.667);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FEFEFE").s().p("A4hn0IO4tRMAiLAAAMgxDAqKg");
	this.shape_36.setTransform(118,-87.9,0.667,0.667);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#ADE1FE").s().p("A9aZAQg3AAgngnQgngnAAg3MAAAgt1QAAg3AngnQAngnA3AAMA61AAAQA3AAAnAnQAnAnAAA3MAAAAt1QAAA3gnAnQgnAng3AAg");
	this.shape_37.setTransform(147.7,-71.2,0.667,0.667);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#BBAAB9").s().p("EghCAb4Qg3AAgngnQgngmAAg3MAAAgznQAAg2AngnQAngnA3AAMBCFAAAQA3AAAnAnQAnAnAAA2MAAAAznQAAA3gnAmQgnAng3AAg");
	this.shape_38.setTransform(147.7,-71.2,0.667,0.667);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BBAAB9").s().p("AgvZ7MAAAgz2IBfAAMAAAAz2g");
	this.shape_39.setTransform(-135.9,-71.2,0.667,0.667);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FEFEFE").s().p("A7JXkMA2TgvHIAANcMgmjAhrg");
	this.shape_40.setTransform(-117.4,-65,0.667,0.667);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FEFEFE").s().p("A4hn0IO4tRMAiLAAAMgxDAqKg");
	this.shape_41.setTransform(-165.6,-87.9,0.667,0.667);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#ADE1FE").s().p("A9aZAQg2AAgngnQgngnAAg3MAAAgt1QAAg3AngnQAngnA2AAMA61AAAQA3AAAmAnQAoAnAAA3MAAAAt1QAAA3goAnQgmAng3AAg");
	this.shape_42.setTransform(-135.9,-71.2,0.667,0.667);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BBAAB9").s().p("EghCAb4Qg3AAgngnQgngnAAg2MAAAgznQAAg2AngnQAngnA3AAMBCGAAAQA3AAAmAnQAnAnAAA2MAAAAznQAAA3gnAmQgmAng3AAg");
	this.shape_43.setTransform(-135.9,-71.2,0.667,0.667);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DAC2C0").s().p("EiV/ALGIAA2LMEr/AAAIAAWLg");
	this.shape_44.setTransform(0,312.7,0.667,0.667);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFDD").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_45.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(185));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-360,1280,720);


// stage content:
(lib.scene6 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		createjs.Touch.enable(stage, true, true);
		
		var audioPath = "audio/";
		var sounds = [
			{src:{mp3:"popup.mp3", ogg:"popup.ogg"}, id:"audio_notification"}
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
				window.location = "../scene5/scene5.html";
			});
			
			_this.mc_main.b2.addEventListener("click", function () {
				window.location = "../scene7/scene7.html";
			});
		}
		
		this.playSfx = function () {
			createjs.Sound.play("audio_notification");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.mc_main = new lib.Symbol11();
	this.mc_main.parent = this;
	this.mc_main.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.mc_main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280,720);
// library properties:
lib.properties = {
	id: '823978D5E5A042D080B766A169BA619D',
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
an.compositions['823978D5E5A042D080B766A169BA619D'] = {
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