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


(lib.woman_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B75F53").ss(6.3,1,1).p("AhjAiQAegmA3gSQA6gVA4AR");
	this.shape.setTransform(42.2,79.4,0.667,0.667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#B75F53").ss(6.3,1,1).p("AiDggQBCgSBHASQBQATAuA3");
	this.shape_1.setTransform(141,87.9,0.667,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5A342D").ss(6.3,1,1).p("AgqgfQgHAfAaATQAaAVApgN");
	this.shape_2.setTransform(52.3,110.9,0.667,0.667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5A342D").s().p("AgZCMQgngHgUguQgTgtAKg6QAKg7AhgjQAiglAoAIQBeAQgaCLQgLBBgZAfQgYAeglAAQgKAAgKgCg");
	this.shape_3.setTransform(55,120,0.667,0.667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5A342D").ss(6.3,1,1).p("AgqgfQgHAfAaATQAaAVApgN");
	this.shape_4.setTransform(116.1,116.9,0.667,0.667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5A342D").s().p("AgYCMQgogHgUguQgTgtAKg6QAKg7AhgjQAigkAoAHQA0AJAPAtQANAmgLA/QgMBBgZAfQgYAdglAAQgJAAgKgBg");
	this.shape_5.setTransform(118.8,126,0.667,0.667);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5A342D").s().p("AhOAYQgNgHAHgIQAHgJArgQQAqgSAxARQAxAQgfAJQgfAKgSgJQgTgJgjAPQgaALgOAAQgGAAgEgCg");
	this.shape_6.setTransform(57.3,120);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5A342D").s().p("AADASIhSgKQgTgCACgGQADgHAVgIQAVgIAyAAQAxgBASANQATAMAJALQAJAMgSAAIgDAAQgTAAg8gGg");
	this.shape_7.setTransform(121.8,124.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{scaleY:0.667,y:126}},{t:this.shape_4,p:{x:116.1,y:116.9}},{t:this.shape_3,p:{scaleY:0.667,y:120}},{t:this.shape_2,p:{x:52.3,y:110.9}},{t:this.shape_1,p:{y:87.9}},{t:this.shape,p:{y:79.4}}]}).to({state:[{t:this.shape_5,p:{scaleY:0.423,y:124.9}},{t:this.shape_4,p:{x:116,y:120.3}},{t:this.shape_3,p:{scaleY:0.423,y:121.1}},{t:this.shape_2,p:{x:52.1,y:114.3}},{t:this.shape_1,p:{y:86.7}},{t:this.shape,p:{y:78.2}}]},59).to({state:[{t:this.shape_7},{t:this.shape_4,p:{x:116,y:120.3}},{t:this.shape_6},{t:this.shape_2,p:{x:51.8,y:116}},{t:this.shape_1,p:{y:83.9}},{t:this.shape,p:{y:77.2}}]},2).to({state:[{t:this.shape_5,p:{scaleY:0.423,y:124.9}},{t:this.shape_4,p:{x:116,y:120.3}},{t:this.shape_3,p:{scaleY:0.423,y:121.1}},{t:this.shape_2,p:{x:52.1,y:114.3}},{t:this.shape_1,p:{y:86.7}},{t:this.shape,p:{y:78.2}}]},38).to({state:[{t:this.shape_5,p:{scaleY:0.667,y:126}},{t:this.shape_4,p:{x:116.1,y:116.9}},{t:this.shape_3,p:{scaleY:0.667,y:120}},{t:this.shape_2,p:{x:52.3,y:110.9}},{t:this.shape_1,p:{y:87.9}},{t:this.shape,p:{y:79.4}}]},3).wait(78));

	// eyes
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B75F53").ss(3.2,1,1).p("AAegFQgNAAgRAFQgUAEgJAC");
	this.shape_8.setTransform(36.8,117.4,0.667,0.667);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#B75F53").ss(3.2,1,1).p("AgpgSQAOALAcAKQAQAHAZAJ");
	this.shape_9.setTransform(36,111.6,0.667,0.667);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#B75F53").ss(3.2,1,1).p("AgigNQAPAEAVAJQALAEAWAK");
	this.shape_10.setTransform(136.6,127.8,0.667,0.667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#B75F53").ss(3.2,1,1).p("AA3gNQgTAJglAHQgoAIgNAD");
	this.shape_11.setTransform(138.7,120.9,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11,p:{y:120.9}},{t:this.shape_10,p:{y:127.8}},{t:this.shape_9,p:{scaleX:0.667,x:36}},{t:this.shape_8,p:{x:36.8,y:117.4}}]}).to({state:[{t:this.shape_11,p:{y:122.8}},{t:this.shape_10,p:{y:130}},{t:this.shape_9,p:{scaleX:0.813,x:37.8}},{t:this.shape_8,p:{x:38.5,y:117.8}}]},59).to({state:[{t:this.shape_11,p:{y:122.8}},{t:this.shape_10,p:{y:130}},{t:this.shape_9,p:{scaleX:0.813,x:37.8}},{t:this.shape_8,p:{x:38.5,y:117.8}}]},2).to({state:[{t:this.shape_11,p:{y:122.8}},{t:this.shape_10,p:{y:130}},{t:this.shape_9,p:{scaleX:0.813,x:37.8}},{t:this.shape_8,p:{x:38.5,y:117.8}}]},38).to({state:[{t:this.shape_11,p:{y:120.9}},{t:this.shape_10,p:{y:127.8}},{t:this.shape_9,p:{scaleX:0.667,x:36}},{t:this.shape_8,p:{x:36.8,y:117.4}}]},3).wait(78));

	// mouth
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#B75F53").ss(6.3,1,1).p("ADigmQgkAthHAaQhCAZhKgBQhMgBg2gcQg7gdgOg3");
	this.shape_12.setTransform(86.3,164.6,0.667,0.667);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#B75F53").ss(3.2,1,1).p("AhBhLQA3ARAoAqQAuAvgNAs");
	this.shape_13.setTransform(106.7,157.7,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13,p:{x:106.7,y:157.7}},{t:this.shape_12,p:{scaleX:0.667,x:86.3,y:164.6}}]}).to({state:[{t:this.shape_13,p:{x:108.2,y:157.7}},{t:this.shape_12,p:{scaleX:0.741,x:86.4,y:164.6}}]},59).to({state:[{t:this.shape_13,p:{x:108.8,y:156.7}},{t:this.shape_12,p:{scaleX:0.741,x:86.4,y:162.6}}]},2).to({state:[{t:this.shape_13,p:{x:108.2,y:157.7}},{t:this.shape_12,p:{scaleX:0.741,x:86.4,y:164.6}}]},38).to({state:[{t:this.shape_13,p:{x:106.7,y:157.7}},{t:this.shape_12,p:{scaleX:0.667,x:86.3,y:164.6}}]},3).wait(78));

	// face
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#818181").ss(2.4,1,1).p("ABwAlQAtgbgCgjQgCggglgZQgmgZgxgCQg2gBgtAfQg5AogTA9QgPAzAOAl");
	this.shape_14.setTransform(190,165.9,0.667,0.667);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#818181").ss(2.4,1,1).p("AAABSQA7AVAmgoQAjgkgSglQgYg5hTgRQhQgQguAk");
	this.shape_15.setTransform(213.8,159.5,0.667,0.667);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#818181").ss(2.4,1,1).p("ABLBVQgsAQgmgUQgjgSgTgmQgTglAJghQAKgkAogK");
	this.shape_16.setTransform(194.9,171.5,0.667,0.667);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#818181").ss(2.4,1,1).p("AAxhoQAbAcAEAmQADAkgSAgQgrBOhmgD");
	this.shape_17.setTransform(235.4,143.7,0.667,0.667);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#818181").ss(2.4,1,1).p("ACfhaQAOAcgNAmQgOAngnAdQhiBMiugu");
	this.shape_18.setTransform(222.4,173.9,0.667,0.667);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#818181").ss(2.4,1,1).p("AgaCVQA8ABAmgvQAkgtgEg6QgEhAgxgoQg3guhjAC");
	this.shape_19.setTransform(245.9,168.6,0.667,0.667);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#514030").s().p("AjNCVQhVg+AAhXQAAhWBVg9QBVg+B4AAQB4AABVA+QBWA9AABWQAABXhWA+QhVA9h4AAQh4AAhVg9g");
	this.shape_20.setTransform(210.2,174.1,0.667,0.667);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#514030").s().p("AknDSQh6hSAAh2QAAh1CEhcQCFhdCrAAQCpAAB1BdQBxBaAAB3QAAB2h6BSQh7BTitAAQisAAh7hTg");
	this.shape_21.setTransform(220.6,157,0.667,0.667);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#514030").s().p("AkHDCQhuhQAAhyQAAhxBuhQQBthRCaAAQCbAABtBRQBtBQAABxQAAByhtBQQhtBRibAAQiaAAhthRg");
	this.shape_22.setTransform(238.3,171.5,0.667,0.667);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#514030").s().p("AinDpQhPgtgahWQghhvBchzQBZhwB9gYQB0gWBHA9QBCA5AXB3QAVBthHBXQhFBVh8AYQgjAHghAAQhJAAg8gig");
	this.shape_23.setTransform(190,168.5,0.667,0.667);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#B75F53").ss(3.2,1,1).p("ABCiwQgbgEgiAZQghAZgRAkQgUApAOAjQAQApA8AZQAbABAJARQAIAQgMAXQgeA3hcAR");
	this.shape_24.setTransform(217.1,120,0.667,0.667);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F4BC98").s().p("AjsEHIAAmFQADgNAIgTQARglAYgdQBPhdCBAVQB5AUA7B6QA2ByggB1QgmCOiQA4QhAAag/AAQhOAAhLgmg");
	this.shape_25.setTransform(220.2,120.7,0.667,0.667);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#727272").ss(6.3,1,1).p("ACYAnQgjgng3gWQhtgthnBU");
	this.shape_26.setTransform(88.2,118,0.667,0.667);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#727272").ss(6.3,1,1).p("AmgCHINBkN");
	this.shape_27.setTransform(181.5,116.9,0.667,0.667);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#727272").ss(6.3,1,1).p("AGOBGQgcCgiIBdQiJBcikgdQilgdhgiGQhhiFAcifQAcigCJhdQCIhcCkAdQClAdBhCGQBgCFgcCfg");
	this.shape_28.setTransform(51.7,112.2,0.667,0.667);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhDGCQilgdhgiGQhhiFAcifQAcigCJhdQCIhcCkAdQClAdBhCGQBgCFgcCfQgcCgiIBdQhoBGh4AAQglAAgogHg");
	this.shape_29.setTransform(51.7,112.2,0.667,0.667);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#727272").ss(6.3,1,1).p("AGcBJQgcCfiMBcQiNBciqgeQirgehliHQhkiGAcifQAcigCNhbQCMhcCqAeQCrAeBlCGQBkCHgcCfg");
	this.shape_30.setTransform(126.2,121.1,0.667,0.667);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhDGCQirgehliHQhkiGAcifQAcigCNhbQCMhcCqAeQCrAeBlCGQBkCHgcCfQgcCfiMBcQhqBFh7AAQgoAAgqgHg");
	this.shape_31.setTransform(126.2,121.1,0.667,0.667);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EF8F7B").s().p("AiyCzQhKhKAAhpQAAhnBKhLQBLhKBnAAQBpAABKBKQBKBLAABnQAABphKBKQhKBKhpAAQhnAAhLhKg");
	this.shape_32.setTransform(140,153.8,0.667,0.667);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EF8F7B").s().p("AiVilQgHgagHgfQAlgMAmAAQBoAABKBKQBKBKAABoQAABEgiA6QgiA5g4AiQiEizg5jdg");
	this.shape_33.setTransform(40.1,147.4,0.667,0.667);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#B75F53").ss(6.3,1,1).p("AAMhPQgTApgDA8QgDBXAGgr");
	this.shape_34.setTransform(84.7,139,0.667,0.667);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#818181").ss(2.4,1,1).p("AEnAzQhrg/iMgYQipgeiuAk");
	this.shape_35.setTransform(149.2,11.9,0.667,0.667);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#818181").ss(2.4,1,1).p("AiFmUQgpDqAlCuQA4EODsCE");
	this.shape_36.setTransform(185.7,66.6,0.667,0.667);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#818181").ss(2.4,1,1).p("AjRg7QA7AuBLAYQBgAeC9AT");
	this.shape_37.setTransform(72.7,41.4,0.667,0.667);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#818181").ss(2.4,1,1).p("ALvi+QhcBWiPBRQimBbi6A3QnbCMm3iW");
	this.shape_38.setTransform(116,40.6,0.667,0.667);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#818181").ss(2.4,1,1).p("AkznuQD2BRC+FUQBQCOAwCbQAvCYAEB4");
	this.shape_39.setTransform(201.1,60.6,0.667,0.667);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#514030").s().p("AT0N5QlliBhvg4QjHhkhhiRQiykIAtk8QAOhjAjhcIAghJQgaAhg2AvQhsBfiMBHQm/DjpVhcQjegijPhkQgRgIgHgSQgGgRAGgSQCClIGKjDQCnhSC/gsQC0gqCmAAQGNAAFKCsQFECpDDEqQC4EaA+EgQA8Eeg+EXQgWAHgeAAg");
	this.shape_40.setTransform(140.2,59.4,0.667,0.667);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#514030").s().p("AgtF2QhlgNhNgkQhRgmgOgsQDSjLgfi1QgXiKiThgIAXgDQAegCAhACQBoAGBiAwQDRBeBWCmQBcCvhiCxQggA7hdAWQgvALg4AAQgoAAgtgGg");
	this.shape_41.setTransform(232.8,139,0.667,0.667);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F4BC98").s().p("An1VrQjzhBjOiGQi4h3h4iWIgEgFQiUi7hAjzQhDkDAskRQAvknCpkRQAqhEAyhCQEElWFwi+QGejVGQBGQEgAzE8ERQEmEAC1FCQB/DhAkEFQAoEkhZEGQhNDiioC0Qi7DHkkCGQmYC7mIAAQjYAAjTg4g");
	this.shape_42.setTransform(128.1,104,0.667,0.667);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#818181").ss(2.2,1,1).p("AgugxQgPAmAeAjQAfAoA0gV");
	this.shape_43.setTransform(45.1,169,0.667,0.667);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#818181").ss(2.2,1,1).p("AiIhaQgMAcALAmQAMAmAiAeQBVBLCVgt");
	this.shape_44.setTransform(43.2,173.8,0.667,0.667);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#818181").ss(2.2,1,1).p("AAfCEQg0ABglgnQgkglAAgyQgBg1AsglQAygrBhgG");
	this.shape_45.setTransform(22.4,169.6,0.667,0.667);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#514030").s().p("AjkDlQh0hCgQhyQgQhwBfhfQBfheCVgVQCVgUB0BBQB1BCAQByQAPBwheBfQhfBfiWAUQgjAFghAAQhsAAhZgyg");
	this.shape_46.setTransform(77.3,174.4,0.667,0.667);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#514030").s().p("AjRCVQhXg+AAhXQAAhWBXg9QBXg+B6AAQB7AABXA+QBXA9AABWQAABXhXA+QhXA9h7AAQh6AAhXg9g");
	this.shape_47.setTransform(50.8,174.1,0.667,0.667);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#514030").s().p("Aj+DdQhphbAAiCQAAiBBphcQBqhbCUAAQCWAABpBbQBpBcAACBQAACChpBbQhqBciVAAQiUAAhqhcg");
	this.shape_48.setTransform(41.9,153.6,0.667,0.667);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#514030").s().p("Aj+CVQhpg+AAhXQAAhWBpg9QBqg+CUAAQCVAABqA+QBpA9AABWQAABXhpA+QhqA9iVAAQiUAAhqg9g");
	this.shape_49.setTransform(24,171.7,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,263.2,200.3);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0B0B0B").s().p("AjLHYQgfgGgVgQQgVgRgLgdQgMgfAAguIAAozQAAgrAPggQAPgeAcgZQAegZAogTQAogTAxgQQAsgOA1gJQA0gJAyAAQBUAAAyAjQAxAkAABOQAAAZgHAbQgHAYgLAVQgiAAgpAEQgpAFgjAHQggAGglAJQgiAKgVALIAAKAQgVAGgiAFQgmAGgoAAQgnAAgfgGg");
	this.shape.setTransform(426.5,160.5,0.667,0.667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0B0B0B").s().p("AiEHHQhZgfhBg+QhDg+glheQgmhdAAh+QAAh9AmhZQAlhZA+g5QA8g5BRgcQBPgbBSAAQBcAABNAeQBNAeA3A0QA4A1AeBKQAfBJAABWQAABBghAgQgiAig8AJImxBGQAUA+A7AfQA8AfBNAAQBIAAA/gUQBAgTApgbQAdATASAiQAUAiAAAmQAABUhKAqQg5AghFALQhIALg9AAQhlAAhagfgAg9jtQgfAOgUAYQgSAYgKAdQgLAegBAdIErg0QgEglgignQghglhBAAQgpAAgfAPg");
	this.shape_1.setTransform(368.3,160.9,0.667,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0B0B0B").s().p("AjLHYQgfgFgVgRQgVgRgLgdQgMgdAAgwIAAozQAAgrAPggQAQgfAbgYQAdgYApgUQAngTAxgQQAtgOA1gJQA0gJAyAAQBUAAAxAjQAyAkAABOQAAAZgHAbQgJAcgJARQgiAAgqAEQgpAFgiAHQgeAGgoAJQgiAKgUALIAAKAQgVAGgiAFQgmAGgpAAQgmAAgfgGg");
	this.shape_2.setTransform(314,160.5,0.667,0.667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0B0B0B").s().p("Ai7HEQhVghg8hAQg9g/ghhaQgihaAAhwQAAhvAihaQAhhbA9g/QA7g+BWgjQBTghBoAAQBoAABUAiQBUAjA9A/QA9BAAhBaQAiBZAABuQAAB0giBbQghBag9A/Qg+A+hTAgQhWAghmAAQhnAAhUgigAhxiuQgpA9AABxQAAByAqA9QAoA9BKAAQBJAAAog+QAng+ABhwQgBhxgog9Qgpg9hJAAQhJAAgoA9g");
	this.shape_3.setTransform(253.6,160.9,0.667,0.667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0B0B0B").s().p("Ag1JvQgegFgWgRQgUgQgMgeQgLgdAAgvIAAxCIA5gLQAkgGAoAAQAlAAAgAFQAeAGAVARQAVARAMAdQALAcAAAwIAARCIg5AKQgnAHglAAQgmAAgfgGg");
	this.shape_4.setTransform(202.8,150.4,0.667,0.667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0B0B0B").s().p("AlaJ5QgfgGgVgRQgVgRgLgdQgKgcAAgwIAAuGQAAgyAUghQAVggAigaQA3gmBRgWQBRgWBkgBQBqAABZAeQBcAdA/A8QBCA8AkBbQAlBaAACAQAAB4gfBZQggBag6A+Qg6A9hSAeQhRAehkAAQhMAAhAgYIAAE4QgTAGgmAGQglAHgqgBQglABgggGgAhhl7QgcAIgSAMIAAGcQAWAMAYAHQAZAIAbAAQC0AAAAjmQAAh6gsg5Qgtg6hUgBQggAAgbAJg");
	this.shape_5.setTransform(153.4,171.1,0.667,0.667);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0B0B0B").s().p("ACcGwQgpgpgkg2IheiRIizEUIgTABIgSABQhaAAgugoQgvgnAAg6QAAguAUgiQATghAzg+ICNiuIjsknQAOhIApgtQAqgtA9AAQA6AAAgAeQAeAdAoA3IBwCfIC8kRQBhAAA4AlQA4AkAAA/QAAAYgGAUQgGAUgNAUQgLAUgUAbIguA+Ih0CMIDmFEQgJBHgrApQgtAqg9AAQhDgCgngog");
	this.shape_6.setTransform(87.5,161.1,0.667,0.667);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0B0B0B").s().p("AjjI9QhLAAgsgvQgsgwAAhQIAAsbQAAhRAsgvQAsgvBLAAIJEAAQAMAVAKAiQAJAjAAAkQAABIgdAeQgdAegvAAIlyAAIAACvIGKAAQANAWAJAfQAKAgAAAnQAABHgcAdQgcAfgwAAIlCAAIAADFIHDAAQAMAVAKAiQAJAjAAAkQAABIgdAfQgdAfgvAAg");
	this.shape_7.setTransform(26.1,153.5,0.667,0.667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B92B20").s().p("AjjI9QhLAAgsgvQgsgwAAhQIAAsbQAAhRAsgvQAsgvBLAAIJEAAQANAWAIAhQAKAiAAAlQAABHgdAfQgdAegvAAIlyAAIAACvIGKAAQANAVAJAgQAKAgAAAnQAABHgcAdQgcAegwAAIlCAAIAADGIHDAAQANAWAJAhQAJAjAAAkQAABIgdAfQgdAfgvAAg");
	this.shape_8.setTransform(323.1,40.3,0.667,0.667);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B92B20").s().p("Ai/JLQhEgOg1gcQg0gcgdgnQgdgoAAg2QAAg2AegmQAegnAjgVQAzAqBGAdQBHAeBUABQBWAAAjgdQAjgcAAgmQAAgkgcgVQgegUgxgTIhJgZQhQgeg9gcQhAgegtgoQgugogZg7Qgag5AAhSQAAihBzhgQB0hfDOAAQBNAABAALQBBAMAuAXQAvAXAaAlQAbAlAAAwQAAAygVAiQgXAkgcAYQgogchAgSQhBgUhOAAQhOAAglAXQglAYAAAkQAAAbAXATQAYASAtAPIBcAfQClA5BZBWQBZBXAACYQAACfh2BjQh1BjjkAAQhQAAhHgOg");
	this.shape_9.setTransform(257.7,40.1,0.667,0.667);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B92B20").s().p("AEZJFQgdgHgTgPQgSgPgLgZQgLgXgJghIggiCIk9AAIgcB1IgcB0QgcAKgYAGQgbAHgnAAQhaAAgrghQgrghAAg6QAAgdAHgYIAPg+QANgzAWhLIAxijQAchgAchTICKmhQAfgUA8gQQA8gRA+AAQBXAABEAbQBEAcATA6QAhBmAkB+QAjB+AmCNIBJEQIA9DuQgUAbgrAQQgrAQg6AAQgqAAgdgIgAg7h1QgfBigYBiIDZAAQgUhSgfhzIguiuIgJAAg");
	this.shape_10.setTransform(188.5,40.1,0.667,0.667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B92B20").s().p("AiXF+QgyAAgdggQgegfAAg2IAAoSQAAg2AegfQAdgfAyAAIGCAAQAIAOAHAWQAGAWAAAaQAAAwgTAUQgTAUggAAIj3AAIAAB0IEHAAQAJAOAGAWQAGAXAAAYQAAAugSAVQgTAUggAAIjXAAIAACDIEtAAQAIAPAGAWQAHAWAAAaQAAAvgUAVQgTAVggAAg");
	this.shape_11.setTransform(120.9,40.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(0,0,446.5,213.7), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BC98").s().p("AhZD9QgbgCgHgaQgOg1AChPQAChIAOhIQAQhZAOgfQAMgaAfgYQAjgZAXgFQAfgFAbAaQAXAxALAxIAZCXQANBOgOAdQgJAUgcABQgPAAgMgpQgIgcgLhAQgIgsgMgCQgJgBgHAZIgYBvQgUBSgSAsQgJAYgYAAIgDAAg");
	this.shape.setTransform(10.3,19.2,0.759,0.759);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.6,38.4);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BC98").s().p("AihFxQgHiIAGh2QAEhwAEgyQAGhVAShFQAThHAviHIAahKIDLBLIhPD4QgPAtgQBLQgKAqgXB3QgQBOgMBuIgRCoIiDADQgEgtgDhEg");
	this.shape.setTransform(16.6,81.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,32.9,33.1,96.4);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1A83D").s().p("AgSA2Qi8grhFgVIgIgDQAHgrAMg4IIkB/IgTBiQhZgOjCgtg");
	this.shape.setTransform(22.2,72.6,0.759,0.759);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFEA5").s().p("AgLAyQgcgEgTgkQgRggAFgbQBGALBIAIQgDAcgZAaQgYAagYAAIgHAAg");
	this.shape_1.setTransform(37.3,81.6,0.759,0.759);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFEA5").s().p("AgOAzQgdgFgRglQgPggAFgbQBHAOBHALQgEAbgaAaQgYAXgXAAIgJAAg");
	this.shape_2.setTransform(26.4,79.7,0.759,0.759);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFEA5").s().p("AgSA0QgcgHgPglQgOghAHgbQA+AQBOAQQgFAbgcAYQgYAWgWAAIgLgBg");
	this.shape_3.setTransform(15.6,77.4,0.759,0.759);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFEA5").s().p("AglAxQgbgIgDgbQgBgQAKgvQAaAIAkAIIBAAOQgGAZgjAZQgbATgXAAQgHAAgHgBg");
	this.shape_4.setTransform(5.2,74.9,0.759,0.759);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C64153").s().p("Ah4HZQjDgtg6gTQA8lhB8juQCvlPEFgRIB/AaIjHQTQhdgOjKgwg");
	this.shape_5.setTransform(29.1,40.6,0.759,0.759);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.5,85.4);


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

	// Layer_5
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#B75D52").ss(3.2,1,1).p("AA/g5QgqAOgfAgQgXAWgdAv");
	this.shape_13.setTransform(121.2,172,0.667,0.667);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#B75D52").ss(6.4,1,1).p("ADMgLQgyAphvACQiDAChyhB");
	this.shape_14.setTransform(146.5,178.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#B75D52").ss(6.4,1,1).p("ADZAAQhUAliFABQiEABhUhM");
	this.shape_15.setTransform(145.1,177.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#B75D52").ss(6.4,1,1).p("ADugiQhqBHiJABQiKABhfhM");
	this.shape_16.setTransform(147.3,177.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13,p:{x:121.2,y:172}}]}).to({state:[{t:this.shape_15},{t:this.shape_13,p:{x:119.2,y:169.7}}]},29).to({state:[{t:this.shape_16},{t:this.shape_13,p:{x:119.2,y:169.7}}]},2).to({state:[{t:this.shape_15},{t:this.shape_13,p:{x:119.2,y:169.7}}]},22).to({state:[{t:this.shape_14},{t:this.shape_13,p:{x:121.2,y:172}}]},2).wait(35));

	// Layer_6
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#B75D52").ss(2.4,1,1).p("AC+AHQgVAVgwALQgwAKg5gEQiJgKhEhQ");
	this.shape_17.setTransform(114.3,149.5,0.667,0.667);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#B75D52").ss(3.2,1,1).p("ABCgMQgdARgeAGQgpAIgfgU");
	this.shape_18.setTransform(95.1,136,0.667,0.667);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#B75D52").ss(3.2,1,1).p("ABBAJQgaAPgtgKQgugKgMgV");
	this.shape_19.setTransform(96.5,130.7,0.667,0.667);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#B75D52").ss(2.4,1,1).p("ACXg6QgYBVhrAZQhoAZhDg8");
	this.shape_20.setTransform(195.7,143.7,0.667,0.667);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#B75D52").ss(3.2,1,1).p("AAqAAQgSAHgYgBQgYgBgRgK");
	this.shape_21.setTransform(208.2,130.5,0.667,0.667);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#B75D52").ss(3.2,1,1).p("AAdgRQgFAOgVALQgTAMgNgD");
	this.shape_22.setTransform(207.2,125.7,0.667,0.667);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#B75D52").ss(2.4,1,1).p("AC+AJQgVAVgwALQgwAKhwgWQhwgWgmgy");
	this.shape_23.setTransform(114.3,149.4,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22,p:{scaleX:0.667,x:207.2,y:125.7}},{t:this.shape_21,p:{scaleX:0.667,x:208.2,y:130.5}},{t:this.shape_20,p:{scaleY:0.667,rotation:0,y:143.7,scaleX:0.667}},{t:this.shape_19,p:{scaleX:0.667,rotation:0,x:96.5,y:130.7}},{t:this.shape_18,p:{rotation:0,x:95.1,y:136}},{t:this.shape_17}]}).to({state:[{t:this.shape_22,p:{scaleX:1.084,x:206.2,y:125.7}},{t:this.shape_21,p:{scaleX:0.817,x:207,y:130.5}},{t:this.shape_20,p:{scaleY:0.431,rotation:-7.5,y:143.8,scaleX:0.667}},{t:this.shape_19,p:{scaleX:0.765,rotation:15,x:98.4,y:130.8}},{t:this.shape_18,p:{rotation:15,x:96.8,y:137}},{t:this.shape_23,p:{scaleX:0.667}}]},29).to({state:[{t:this.shape_22,p:{scaleX:1.084,x:207.3,y:123.5}},{t:this.shape_21,p:{scaleX:0.817,x:208.4,y:131.8}},{t:this.shape_20,p:{scaleY:0.431,rotation:-7.5,y:143.7,scaleX:0.744}},{t:this.shape_19,p:{scaleX:0.765,rotation:15,x:98.4,y:128.2}},{t:this.shape_18,p:{rotation:15,x:94.7,y:137.3}},{t:this.shape_23,p:{scaleX:0.713}}]},2).to({state:[{t:this.shape_22,p:{scaleX:1.084,x:206.2,y:125.7}},{t:this.shape_21,p:{scaleX:0.817,x:207,y:130.5}},{t:this.shape_20,p:{scaleY:0.431,rotation:-7.5,y:143.8,scaleX:0.667}},{t:this.shape_19,p:{scaleX:0.765,rotation:15,x:98.4,y:130.8}},{t:this.shape_18,p:{rotation:15,x:96.8,y:137}},{t:this.shape_23,p:{scaleX:0.667}}]},20).to({state:[{t:this.shape_22,p:{scaleX:0.667,x:207.2,y:125.7}},{t:this.shape_21,p:{scaleX:0.667,x:208.2,y:130.5}},{t:this.shape_20,p:{scaleY:0.667,rotation:0,y:143.7,scaleX:0.667}},{t:this.shape_19,p:{scaleX:0.667,rotation:0,x:96.5,y:130.7}},{t:this.shape_18,p:{rotation:0,x:95.1,y:136}},{t:this.shape_17}]},2).wait(37));

	// Layer_1
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#B75D52").ss(6.4,1,1).p("AABAdQAAgTAAgKQAAgRgBgL");
	this.shape_24.setTransform(158.7,149.2,0.667,0.667);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EF8F7B").s().p("AifCgQhDhCABheQgBhcBDhDQBDhCBcAAQBeAABCBCQBCBDAABcQAABehCBCQhCBCheAAQhcAAhDhCg");
	this.shape_25.setTransform(108.5,149.9,0.667,0.667);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EF8F7B").s().p("AiJCgQhDhCAAheQAAhdBDhCQBChDBdAAQA3AAAxAaQAvAYAgArQglCFhAB+QgWAtgiA2QgMACgOAAQhdAAhChDg");
	this.shape_26.setTransform(199.3,147.6,0.667,0.667);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#B75D52").ss(3.2,1,1).p("Ahth7QAzgWBCAaQBHAbAJA2QAFAZgTAVQgLANgaAYQgiAlAhAcQAcAZAugB");
	this.shape_27.setTransform(15.1,120.1,0.667,0.667);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F4BC98").s().p("Ag6DtQisgygHiiQgHixBxhGQBig8B5AtQBZAgAnBnQAUAzACAsIh+EHQgSABgTAAQhCAAhDgUg");
	this.shape_28.setTransform(15.9,119.8,0.667,0.667);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#848280").ss(2.4,1,1).p("AB7gGQgnABhUAGQhPAGgrAA");
	this.shape_29.setTransform(41,109.6,0.667,0.667);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#848280").ss(2.4,1,1).p("ABjgEQg+gDgxAEQgaABgRAAQghACgKAG");
	this.shape_30.setTransform(34.7,103.6,0.667,0.667);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#848280").ss(2.4,1,1).p("AAWAAQgGAAgQAAQgNACgIgB");
	this.shape_31.setTransform(46,102.6,0.667,0.667);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#848280").ss(2.4,1,1).p("AizhvQgSAnAqAwQAdAgAuAcQAuAeArAOQA5AUAfAGQA6AMAegN");
	this.shape_32.setTransform(25.4,84.5,0.667,0.667);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#848280").ss(2.4,1,1).p("AiHiDQgPAcACAdQACAdATAZQAdAmAxAfQAlAYA3AYQARAHAlALQAlAKAQAH");
	this.shape_33.setTransform(48.7,50.3,0.667,0.667);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#848280").ss(2.4,1,1).p("AificQgPAngCAUQgDAdAOAeQAdA8BEAoQArAZAXAMQAkATAfALQAxAQAJADQAmALARgD");
	this.shape_34.setTransform(56.9,46.3,0.667,0.667);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#848280").ss(2.4,1,1).p("AmKjcQgbAlANAxQAMAtAkAiQAoAmA7AgQAdARBQAnQDYBoCrAcQBIALAQACQA3AHAjgE");
	this.shape_35.setTransform(87,44.6,0.667,0.667);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#848280").ss(2.4,1,1).p("AqulDQFMgcGqBbQCZAgCGBHQCQBMBjBtQA3A+AVBSQAWBaghBDQgCADAAgCQABgDgBgB");
	this.shape_36.setTransform(125.2,39.7,0.667,0.667);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#848280").ss(2.4,1,1).p("Aprl3QEVAQBTAHQChAOBpAYQB3AbBpA0QBqA1B+BfQBuBTAjCVQAiCPg7BVIAAgCQAAAEAAAB");
	this.shape_37.setTransform(134.7,36.9,0.667,0.667);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#848280").ss(2.4,1,1).p("Al3mXQFuAqDNDhQCECQAoC1QAPBDgMA3QgOBCgzAjQADgEgCAAQgCABAAAA");
	this.shape_38.setTransform(163.3,33.2,0.667,0.667);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#848280").ss(2.4,1,1).p("ACWgYQglANguAIQgdAEg3AHQgqAHgeAFQg4AIgEgG");
	this.shape_39.setTransform(43.9,126.9,0.667,0.667);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#848280").ss(2.4,1,1).p("ACVgWQgUABgnAIQgoAIgTACQhtAIhGAS");
	this.shape_40.setTransform(42.9,121.6,0.667,0.667);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#514030").s().p("AxeN4QgzgEgchBQgcg9gogXIgjgLIhJgDIg8BiQgghngQiOQgfkdBPjEQA9iYA1hZQBQiIB0hqQEmkMJniYQB/ggCkgWQCrgXB1AAQDxAADiA2QDWAzChBaQCgBYBIBrQBMBvgkBrQgtCGhaBQQhYBNiOAmQjiA8ojgbQkAgmkVgMQosgahsB8QhTBfAECRQACA+AsDTQAbCFgaAwQgWAohUAJQhPAOgkAAIgJAAg");
	this.shape_41.setTransform(109.4,59.2,0.667,0.667);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F4BC98").s().p("Ao5UQQkHhrjLjDQjLjDhvj8QhzkFAAkeQAAkdBzkFQBvj9DLjCQDLjDEHhqQEQhvEpAAQEqAAEQBvQEHBqDLDDQDLDCBvD9QBzEFAAEdQAACkgmCdQglCZhJCOQi1FlldDVQlnDcmsAAQkpAAkQhug");
	this.shape_42.setTransform(118.4,114.9,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).wait(90));

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
	this.shape_4.graphics.f("#F4BC98").s().p("Ah2FXQgwgpgVg0QgHgTgZhiQgZhpAtifQAliCApg1QAggpBDgJQBHgJAqAtQAtA0AVBBQAOAuAlCVQAbBjgIAhQgFAVggAJQgaAHgZgzQgSglgWhOQgPg3gOAMQgNALABAjQABCPA5CnQAQAuhrAQQggAEgaAAQg6AAgbgXg");
	this.shape_4.setTransform(22.4,160.2,0.667,0.667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4BC98").s().p("AkBPWQgnllARlSQAGh5AhkhQAnlQADgqQATjVAmhnQBFi5CXANQCcAOAmCgQAYBogWD8QgLB8hAEBQhQFGgLA4QgfCggeDGQgeDLgLB+g");
	this.shape_5.setTransform(28.8,81,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.man_hand_right, new cjs.Rectangle(0,0,69.4,184.6), null);


(lib.man_hand_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#67616D").s().p("AlhCfQiLnWARh3QATiMCDgcQB/gbB8BeQCsCCCzFHQCuE/AbDeQACANgHAKQgIAKgMADQh+AajEAgQjoAmhsAGQhKjThGjrg");
	this.shape.setTransform(31.9,40.3,0.667,0.667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4BC98").s().p("AgNFdQghgDgBghQgBg9ANhrIATiSQAEgigRgLQgSgLgLA5QgPBUgLAhQgQA1gTgBQgjgBgMgaQgSglAShkQAXiXAKguQAQhDAog4QAlguBLARQBDAPAnAqQAgAhADBHQAEBDgWB5QgQBbgeBRQggBZgpA6QgTAagbAAIgGgBg");
	this.shape_1.setTransform(44.8,159.1,0.667,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4BC98").s().p("AB+PRQgKi9gHhrQgNjCgViJQgUiJgticIhCjcQg1i4hcjeQhdjghWiYIA5gXQBHgWBDAJQBeAMBdBTQBeBSA6B1QAdA6AvCZQAyChAeCJQAnCzAMBJQATB9ABCNQABDQgVDvQgLB3gLBOg");
	this.shape_2.setTransform(32.8,77.2,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.man_hand_left, new cjs.Rectangle(0,0,63.8,182.4), null);


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


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EjxHBUYMAAAiovMHiPAAAMAAACovg");
	mask.setTransform(1543.2,540);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AALAUIgegeQgEgFAEgEQACgCADgBQABAAABABQAAAAABAAQAAAAABABQAAAAABABIAdAeQAEAFgEAEQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape.setTransform(1484.7,224.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALANIgbgOQgGgDADgGQAEgFAFADIAcAOQAAAAABABQAAAAABABQAAAAAAAAQABABAAABQAAADgBACQgCADgDAAIgEgBg");
	this.shape_1.setTransform(1487.2,223);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOBAIgkgNQgRgGAHgRIAghTQACgHAFgCQAGgCAHACQAGADADAFQACAFgCAHIgdBLIAXAJQAPAGgEAMQgDAIgIAAIgJgCg");
	this.shape_2.setTransform(1485.6,214.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDBMIghgTQgRgIAKgQIA9hoQAEgGAFgBQAGgCAGAEQAOAHgIANIg5BiIAVAMQAGADADAFQACAGgDAFQgEAHgGAAQgFAAgFgEg");
	this.shape_3.setTransform(1479,213.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLA2QgcgHgLgUQgJgRAFgUQAGgZATgMQATgLAYAGQAYAFAMASQAKARgEASQgCAHgEACQgDACgHgCIhCgPQgCALAFAIQAFAJANADQALADAKgFQALgEAEABQAFABADAEQADAEgBAEQgDAMgTAEIgMABQgIAAgKgCgAgWgQIAzAMQABgKgFgIQgFgIgKgCIgIgBQgOAAgKARg");
	this.shape_4.setTransform(1469,209.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfBPQgJAAgEgFQgEgEgCgJIgNhYIgBAAIgdBVQgDAIgFAEQgFADgJgBQgJAAgEgEQgEgEgCgJIgUhuIgBgKQABgHAGgDQAFgEAGABQANABACANIAMBgIAfhdQACgHAEgCQAEgCAIAAQAKABAEAFQADADABAIIAOBeIABAAIAchdQAEgNAMABQAHABAEAEQAFAEgBAHIgCAKIgmBpQgDAJgFADQgEACgGAAIgEAAg");
	this.shape_5.setTransform(1454.3,205.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjAsQgPgMgDgWQgEgYANgRQAMgSAbgEQAXgDASAMQAQAMADATQABAHgCADQgDADgHAAIhDAKQACALAIAGQAJAHAMgCQAMgCAIgIQAHgJAFAAQAFgBAFADQADADABAEQACAMgQAKQgNAIgQACIgLABQgVAAgOgLgAgCghQgWADgBAYIAzgIQgDgKgIgFQgGgEgIAAIgDAAg");
	this.shape_6.setTransform(1433.7,207.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKBOQgPgCgDgKQgCgFADgFQACgEAFgCQAFgBALAEQAJAFAJgCQANgEAEgJQAEgJgGgQIgCgGQgCAHgHAGQgGAGgJADQgVAGgQgJQgQgJgGgWQgIgYAJgTQAIgQATgGQAWgGANAOIAAAAIgBgEQgEgNANgEQANgDAEANIAaBQQAHAYgKARQgKAQgYAHQgLADgKAAIgKgBgAgNgtQgYAGAJAfQAEAKAHAGQAJAHAKgEQAXgGgIgbQgIgYgOAAIgIABg");
	this.shape_7.setTransform(1421.8,211.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguBKQgCgEgBgJIgVh1QgCgKALgHIAHgEQAMgGAKAIIBcBLQAGADADAFQADAGgBAFQgCAGgGAEQgKAFgIgGIgUgQIguAaIAFAZQACAKgLAFQgFADgEAAQgHAAgFgHgAgaAPIAhgSIgugpIAAAAg");
	this.shape_8.setTransform(1409.6,214.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAFCIQghgBgbgNQgbgNgXgcQgFgFAFgFIAZgZQACgDAEABQADAAACADQAeApAwABQAWABAOgIQAMgIABgOQAAgMgJgIQgJgIgWgGIgsgOQgggJgSgTQgSgUABgZQABghAcgVQAcgVArABQA7ABAiAmQAFAFgFAGIgYAXQgCAEgEAAQgDAAgCgEQgagcghgBQgWAAgOAIQgOAIAAAOQAAAWAqAMIAvAOQBBARgCA5QAAAigdAVQgbAUgrAAIgEAAg");
	this.shape_9.setTransform(1432,233.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDCIQg6gBgmgoQglgmABg6QABg8AnglQAngmA6ABQA7AAAqAqQAFAFgFAGIgXAXQgFAHgHgHQgPgPgQgGQgQgIgVAAQgjgBgYAZQgXAZgBAnQgBAmAXAZQAXAZAkABQAfABAWgQQAXgPAIgdIhSgBQgIgBAAgHIABgeQABgJAGABIB/ACQAJAAgBAIIAAAKQgBA7gnAlQgnAlg4AAIgDAAg");
	this.shape_10.setTransform(1458,234.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DB3C45").s().p("AnCA2Qg4g4gcg/Qgcg/AChCQACg7AZg2QAZg2AugrQAtgqA5gXQA4gXA9AAQCHAABvBsQA5g0BAgZQBAgaBCACQA9ABA4AZQA4AYAsAsQAsAsAXA3QAYA3gBA7QAABCgeA/QgfA+g6A3InFGpg");
	this.shape_11.setTransform(1446,228.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0B0B0B").s().p("AhXB/QgPgFgLgKQgJgIgHgOQgGgMAAgNQAAgcAQgTQARgSAmgOQgIgOgEgSQgCgIAAgIQAAgdATgUQAUgTAiAAQAdAAASAOQARAOAAAWQAAAYgVAQQgMAKgbALIAxBKIAMgSQAFgKAAgIQAAgMgMgEQgGgCgOAAIAAgQIBfAAIAAARQgSABgIAFQgJAHgIAOIgTAgIgHAJIATAUQAHAFAJAAQAMAAAFgIQAFgHAEgPIAQADQgFAbgOASQgOARgdAAQgNAAgOgFQgOgEgPgOQgOALgSAHQgUAGgVAAQgRAAgPgEgAg9ADQgEACgGAJQgFAJAAAMQAAAWAPAXQAQAYAaAAQAHAAAJgEIAHgFQgNgRgUgfQgRgYgFgLQgFgKgDAAIgCABgAgYhpQgHAJAAANQAAAIAGAPQAFALAKAPQAOgHAHgGQALgNAAgSQAAgLgEgJQgIgPgPAAQgMAAgHAIg");
	this.shape_12.setTransform(1193.5,196.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0B0B0B").s().p("ABXCDIgRgjQgSAQgOAIQgUALgcAAQg8AAgignQgegiAAg0QAAhIAygnQAngZArAAQAXAAAUAHQALAEAOAIIAUgRIAPAAIADBiIgRACQgMgmgOgRQgWgegkAAQglAAgQAjQgQAkAAAvQAAA1AQAcQAPAbAgAAQAhAAALgaQAGgNAAgbQAAgLgCgDQgBgEgJgBIgYAAIAAgSIB8AAIAAASQgWABgEACQgFACAAAJIAABZg");
	this.shape_13.setTransform(1155.6,196.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0B0B0B").s().p("ABTB/IikjCIAACEQAAAZANAJQAJAGASAAIAAATIhkAAIAAgTQAZAAAGgKQAHgKAAggIAAiPIgGgGQgFgFgHgEIgHgCIgNgCIAAgRIBZAAICGCfIAAhpQAAgXgNgIQgIgFgSgBIAAgRIBjAAIAAARQgYACgGAKQgHAKAAAcIAAC6g");
	this.shape_14.setTransform(1128.6,196.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0B0B0B").s().p("AhDB+IAAgTIAXgBQAJABADgFQACgEAAgKIAAiwQAAgLgEgDQgDgEgHABIgXgBIAAgSICHAAIAAASIgUABQgKAAgEADQgDADAAAMIAAC0QAAAIAEADQADACALAAIATABIAAATg");
	this.shape_15.setTransform(1106.1,196.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0B0B0B").s().p("AgbB9QgTgGgPgMIgVAWIgQAAIgChjIARAAQAOAjAXAYQAWAYAjAAQATAAAPgLQAOgLABgSQgBgTgOgKQgHgFgUgEIgYgFQgkgHgUgMQgmgVAAgqQAAgjAagWQAYgVApAAQAVAAARAGQALAEAMAJIASgRIAQAAIAEBbIgSAAQgPgogXgRQgXgSgYAAQgTAAgOAKQgPAJAAARQAAARAQAJQAJAGAPADIAcAGQAsAJATAOQAfAUAAApQAAAjgZAYQgaAXgnAAQgTAAgTgGg");
	this.shape_16.setTransform(1087.8,196.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0B0B0B").s().p("AhAB0QgogUAAgzIAAiJIgBgHQAAgFgDgCQgEgDgLAAIgRAAIAAgSICGAAIAAASQgaAAgFADQgFACAAAMIAAB7QAAAhAHAOQANAYAngBQApABAOgdQAIgQAAgdIAAhjQAAgWgJgIQgJgHgUgBIAAgSIBjAAIAAASQgUADgHAEQgKAIgBAXIgBBvQAAA0ggASQgfATgngBQgnAAgZgMg");
	this.shape_17.setTransform(1063.6,196.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0B0B0B").s().p("AhgBaQgigmAAg0QAAg4AogmQAlgkA1AAQA9AAAmAsQAgAlAAAxQAAAyghAmQgmArg8AAQg6AAgmgpgAg1hCQgJAbABAqQAAArANAhQANAjAmAAQAfAAAOgdQAOgcAAg5QAAgvgOghQgMgggjAAQgoAAgOAug");
	this.shape_18.setTransform(1037,196.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0B0B0B").s().p("AALB+IAAgTIAOgBQAOAAAEgDQADgEAAgOIAAhNIhcAAIAABQQABAMADADQAEADALAAIARABIAAATIiFAAIAAgSIAUgBQALAAACgEQACgFAAgKIAAixQABgMgFgCQgEgCgbgBIAAgSICFAAIAAASIgVABQgJAAgEADQgCAFAAAJIAABLIBcAAIAAhJQAAgNgCgDQgCgCgJgBIgWgBIAAgSICEAAIAAASIgVABIgGABQgFABgCAEQgBAEAAAJIAACnQAAAUAFACQAFAEAaAAIAAATg");
	this.shape_19.setTransform(1009.2,196.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0B0B0B").s().p("AhGB9IAAgSIAZAAQAHAAAEgEQAEgEAAgJIAAi7QAAgFgCgCQgCgEgKAAQgcABgPAeQgJAQgGAfIgRAAIAFhfIDlAAIAFBfIgRAAQgDgXgLgVQgRghgdAAQgJAAgCAEQgCAFAAAIIAAC2QAAALAGACQAFACAdAAIAAASg");
	this.shape_20.setTransform(1279.2,228.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0B0B0B").s().p("ABTB/IikjCIAACEQAAAaANAIQAJAGASAAIAAATIhkAAIAAgTQAZAAAGgKQAHgKAAggIAAiOQAAgCgGgFQgFgFgHgEIgHgCIgNgCIAAgRIBZAAICGCfIAAhpQAAgXgNgIQgIgFgSgBIAAgRIBjAAIAAARQgYACgGAKQgIALAAAbIAAC6g");
	this.shape_21.setTransform(1252.5,228.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0B0B0B").s().p("Ah3B9IAAgSQAXABAHgDQAGgCABgNIAAi2QgBgKgFgBQgGgCgZgBIAAgTIDoAAIADBbIgRAAQgLgrgWgPQgWgPgfAAQgVABgGAFQgHAEAAAPIAABGIAEABIACAAQAZAAANgTQAGgKAFgVIARAAIAAB4IgRAAQgDgfgPgMQgPgLgWABIAABQQAAAOAGAEQAGADAZAAQAqAAAUgXQAMgOAMglIASABIgEBbg");
	this.shape_22.setTransform(1224,228.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0B0B0B").s().p("AAjB9IAAgSIAUAAQAKgBACgGQACgDAAgHIAAi/IhMDiIgRAAIhQjgIAACgQAAAaAJALQAKAJAUAAIAAASIhjAAIAAgSQASgBAGgFQANgJAAgXIABicQAAgLgDgDQgCgDgMgCIgUAAIAAgTIBxAAIA1CYIA0iYIBuAAIAAATIgVAAQgKAAgCAGQgCAGAAAPIAACkQAAANACAEQADAEAKABIAUAAIAAASg");
	this.shape_23.setTransform(1194.1,228.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0B0B0B").s().p("Ah7B9IAAgSIAUAAIAHgBQAGgCABgCQACgFAAgHIAAixQAAgNgGgCQgFgDgZgBIAAgTICUABQAnABAUAJQAoAQAAAuQAAAtgrAPQgcAMgmgCIgnAAIAABIQAAAIACAFQADADALABIAVAAIAAASgAgThmQgFAEAAAKIAABYIAGAAQApAAAOgGQAVgLAAgmQAAgdgMgLQgNgLggAAQgNAAgHAEg");
	this.shape_24.setTransform(1165.1,228.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0B0B0B").s().p("AhfBaQgjgmAAg0QAAg4AngmQAmgkA1AAQA9AAAmAsQAgAmAAAwQAAAxgiAnQglArg9AAQg5AAglgpgAg2hCQgIAbAAAqQAAAqAOAjQANAiAlAAQAgAAAOgdQAOgcAAg5QAAgvgOghQgNgggiAAQgoAAgPAug");
	this.shape_25.setTransform(1138.5,228.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0B0B0B").s().p("Ah2B9IAAgSIAUAAIAIgBQAEAAADgDQACgCAAgIIAAisQAAgSgDgEQgCgDgNgCIgTAAIAAgTICJAAIAAATIgaAAQgIABgCAEQgCADAAAGIAAC0QAAALAGAFQAFADATAAQAWAAASgEQAQgGALgNQAKgMAGgQQAGgQABgIIASAAIgFBdg");
	this.shape_26.setTransform(1111.8,228.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0B0B0B").s().p("Ah3B9IAAgSQAYABAGgDQAHgDAAgMIAAi2QAAgJgGgCQgGgCgZgBIAAgTIDoAAIADBbIgSAAQgKgqgVgQQgWgPggAAQgUABgHAFQgGAEgBAPIAABGIAEABIADAAQAYAAANgTQAHgKADgVIASAAIAAB4IgRAAQgDgfgPgMQgOgLgXABIAABQQAAAOAHAEQAGADAXAAQAqAAAVgXQAMgNANgmIARABIgEBbg");
	this.shape_27.setTransform(1086.2,228.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0B0B0B").s().p("AgQCAIhWjWQgGgOgFgEQgIgDgRgBIAAgTIB+AAIAAATIgWABIgFACQgCABAAAFIABADIA5CWIAthtQAHgSABgGIABgHQAAgMgNgHQgFgCgQgBIAAgTIBmAAIAAATQgPADgJAGQgOALgKAYIhPDAg");
	this.shape_28.setTransform(1059.8,228.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0B0B0B").s().p("Ah3B9IAAgSQAXABAIgDQAGgCAAgNIAAi2QAAgJgGgCQgHgCgYgBIAAgTIDoAAIADBbIgRAAQgMgrgVgPQgWgPgfAAQgUABgHAFQgHAEAAAPIAABGIAEABIADAAQAZAAAMgTQAHgLADgUIASAAIAAB4IgRAAQgCgfgQgMQgPgLgWABIAABQQAAAOAHAEQAFADAZAAQAqAAAUgXQALgMAOgnIARABIgEBbg");
	this.shape_29.setTransform(1032.8,228.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0B0B0B").s().p("AiGB9IAAgSIAXAAQAHgBAEgDQADgDAAgKIAAiyQAAgNgJgDQgDgCgIAAIgRAAIAAgTICbABQAzACAfAfQAgAiAAA5QAAAlgMAXQgLAYgSAQQgTAQgWAFQgWAFgkgBgAgehmQgFADAAAJIAACuQAAAOAEAFQAFAFASAAQAgAAASgPQAagZAAhCQAAhCgUgVQgUgVgigBQgSAAgGAFg");
	this.shape_30.setTransform(1008.1,228.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0B0B0B").s().p("AiGB+IAAgTIAWAAQAJgBADgDQACgEAAgJIAAiyQAAgOgIgDIgLgBIgRAAIAAgTICaABQAzACAgAgQAgAhAAA5QAAAjgMAaQgLAWgSARQgUAQgVAFQgWAEgkABgAgehnQgGAFAAAJIAACtQAAAPAFAEQADAFAUAAQAgAAASgQQAagYAAhCQAAhBgUgWQgVgWghAAQgSAAgGAEg");
	this.shape_31.setTransform(1118.8,260.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0B0B0B").s().p("AApBzQgOgNgCgXIgCgdQgCgZgIgKQgHgMgWAAIgXAAIAABUQAAAMAEADQADACAPABIAQAAIAAATIiJAAIAAgTQAaAAAFgCQAFgCABgLIAAiqQAAgRgCgFQgCgEgKgCIgXAAIAAgTICoABQAsACAVAYQANARAAAUQgBAjggAQQgQAJgbACQATAFAIAFQATANAGAXIAHAfIAFAQQAEAHAFAAQAHABADgJQAFgHABgSIARABQAAAigRAOQgQAMgYAAQgaAAgOgMgAghhqQgFAEgBAMIAABLQAtABAOgHQAWgJgBgkQgBgZgNgJQgOgJgYABQgQAAgGACg");
	this.shape_32.setTransform(1090.9,260.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0B0B0B").s().p("AARCAIAAgTIATgBQAHgDABgGIAAgDIgSgtIhYAAIgIAWQgCAFAAAHQAAAOAMAFQAFADARACIAAATIhkAAIAAgTQARgCAKgKQAKgLAMgbIBQi5IAZAAIBaDVQAFAPAHADQAEADAQABIAAATgAg0AeIBFAAIghhWg");
	this.shape_33.setTransform(1063.2,260.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0B0B0B").s().p("AhfBaQgjgnAAgzQAAg3AngnQAmgkA1AAQA9AAAmAsQAgAmAAAwQAAAyghAmQgnArg8AAQg6AAgkgpgAg1hCQgIAYAAAtQAAAqANAjQAOAiAlAAQAfAAAOgdQAOgdAAg4QAAgvgNghQgOgggiAAQgoAAgOAug");
	this.shape_34.setTransform(1035.5,260.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0B0B0B").s().p("Ah8B+IAAgTIAVAAIAHgBQAEgBACgDQADgCAAgHIAAi5QAAgGgEgDQgEgEgFAAIgYgBIAAgTICWAAQAZABAXAIQAnAQAAAlQAAAcgYAPQgPAJgiAGQAjAFASAJQAgASAAAhQAAAVgNAQQgMAQgUAGQgLADgMACQgSACglAAgAgaBaQAAALAEAEQAGADAOAAQAbgBAOgHQAVgMAAggQAAgfgWgMQgLgGgVAAIggAAgAgWhlQgEAFAAAQIAABFIAngCQAHAAAJgEQALgIAFgKQAFgLAAgQQAAgcgTgKQgLgGgUAAQgTAAgDAFg");
	this.shape_35.setTransform(1007.1,260.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#DA3A3B").ss(5.3,0,0,3.9).p("AnXkmQAAhJA0gzQAzgzBJAAIJPAAQBJAAAzAzQA0AzAABJIAAJNQAABJg0AzQgzAzhJAAIpPAAQhJAAgzgzQg0gzAAhJg");
	this.shape_36.setTransform(932.9,227.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DA3A3B").s().p("Aj4GEIAAlyQhWgBgVABQgJAAgHgGQgIgFgBgHQgDgOAFgMIAFgIIFalSIAOgMQAFgEAHAAQAKAAAQARIAVASIB9B9QCKCJA+A5QAHAGADAKQADALgEAJQgDALgPADQgJACgYAAIhXAAIAAFzgAALjwQgMAEAAAZIAAIHICdgBIAAmrIhmhgIgVgTQgGgFgJAAIgHAAg");
	this.shape_37.setTransform(932.9,226.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(883.1,178.3,619.1,99.4), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A6wDkIAAnHMA1hAAAIAAHHg");
	mask.setTransform(171.3,22.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0B0B0B").s().p("A4BDkQhIAAg0g0QgzgzAAhJIAAkXQEZCOG9BRQHLBTIPAAQIPAAHLhTQG9hREaiOIAAEXQAABJg0AzQgyA0hJAAg");
	this.shape.setTransform(171.3,22.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(0,0,342.6,45.5), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	mask.setTransform(1199.4,540);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CBCEDF").ss(10.4,1,1).p("AtO9EQSKGsEFByQBtAwA8BSQA3BMAYB3QASBhADCiQACBigCDkMAAAAjd");
	this.shape.setTransform(2034.3,764);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFEFE").s().p("ALXfqQgEgQAAgRMAABgnqQAClcgdh0QgThMgnguQgmgthEgdQjwhpyTmxIgBAAIhNgcQgNgXgHgdQgJgiAAgoQAAgsAKglQANgtAWgVIAAAAIBcAhQS7G+ETB3QDtBnBGD5QAdBnAICYQAFBdgCDLMAAAAnoQAAAUgFAQQg5AQhBAAQhFAAg+gTg");
	this.shape_1.setTransform(2036.1,762.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#939CAF").s().p("AiCBVQg+gNgkgWQglgXAAgbQAAgaAkgXQAjgWA8gNQA+gNBIAAQBHAAA4AMQA/AMAmAXQAmAXAAAbQAAAcgoAYQgnAXhBAMQg6ALhAAAQhDAAg/gNg");
	this.shape_2.setTransform(2121.6,965.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#897389").s().p("AkJAaIAAgzIITAAIAAAzg");
	this.shape_3.setTransform(2121.6,967.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#897389").s().p("AiCBWQg+gNgkgXQglgXAAgbQAAgZAkgXQAjgWA8gNQBBgOBFAAQBDAAA8AMQA/AMAmAXQAmAYAAAaQAAAcgoAYQgnAXhBAMQg2ALhEAAQhGAAg8gMg");
	this.shape_4.setTransform(2121.6,970.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#939CAF").s().p("AgzDiQgXgngMhBQgLg2AAhEQAAhGAMg8QANg+AXgkQAXglAaAAQAaAAAXAkQAWAjANA8QAOBBAABFQAABDgMA8QgMA/gXAmQgYAmgbAAQgbAAgYgog");
	this.shape_5.setTransform(1938.4,571.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#897389").s().p("AgZEKIAAoTIAzAAIAAITg");
	this.shape_6.setTransform(1935.8,571.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#897389").s().p("AgzDiQgXgngMhBQgLg6AAhAQAAhGAMg8QANg+AXgkQAXglAaAAQAaAAAXAkQAWAjANA8QAOA9AABJQAABDgMA8QgMA/gXAmQgYAmgbAAQgbAAgYgog");
	this.shape_7.setTransform(1933.2,571.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8DBA1").s().p("AkVMiQgpAAgdgcQgdgdAAgpIAA1/QAAgoAdgdQAdgdApAAIIsAAQAoAAAdAdQAdAdAAAoIAAV/QAAApgdAdQgdAcgoAAg");
	this.shape_8.setTransform(2086.5,859);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DCB871").s().p("At6MiQgoAAgdgcQgdgdAAgpIAA1/QAAgoAdgdQAdgdAoAAIb1AAQAoAAAdAdQAdAdAAAoIAAV/QAAApgdAdQgdAcgoAAg");
	this.shape_9.setTransform(2025.3,859);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEFEFE").s().p("A7UXuMA2pgvaIAANhMgmzAh5g");
	this.shape_10.setTransform(254.2,394.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("A4rn3IO+tWMAiZAAAMgxXAqbg");
	this.shape_11.setTransform(181.4,359.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A7D8FA").s().p("A9YZKQg9AAgsgrQgrgrAAg9MAAAgttQAAg8ArgsQAsgrA9AAMA6yAAAQA8AAArArQAsAsgBA8MAAAAttQABA9gsArQgrArg8AAg");
	this.shape_12.setTransform(226.2,385.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#897389").s().p("EghDAcEQg8gBgrgrQgrgrAAg8MAAAgzhQAAg9ArgqQArgsA8ABMBCGAAAQA9gBArAsQArAqAAA9MAAAAzhQAAA8grArQgrArg9ABg");
	this.shape_13.setTransform(226.2,385.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#B6BF3E").ss(3.5,1,1).p("ACehrQgNAEgWAIQgsARgqAVQiFBGg+Bg");
	this.shape_14.setTransform(269.2,754.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#B6BF3E").ss(3.5,1,1).p("AkRjLIAyAOQBBAWBCAkQDUB0CaDb");
	this.shape_15.setTransform(315.5,838.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#B6BF3E").ss(3.5,1,1).p("AiujAIAiAWQArAeAsAmQCKB7BaCs");
	this.shape_16.setTransform(256.8,814.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#B6BF3E").ss(3.5,1,1).p("Ajkl7IA4BDQBEBVA+BZQDHEeBIDn");
	this.shape_17.setTransform(247.3,874.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F5C745").s().p("ADMERQjGgqiYiCQiaiCgzhiQgQgfgEgYIAAgRQBCg0BZgXQB1geB3AkQCMAqBsCiQBwCpgJC3IgeABQg7AAhOgQg");
	this.shape_18.setTransform(247.9,815.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7F9232").s().p("ADuIAQjZhMjgi0QjNijh3i0QhtilAZhIQAsg8Bhg6QDEh1ENAIQEkAJB/ByQA2AwAiBLQAZA3AYBeQA2DYAKCZQAODdhOBMQgsAqhQAAQhOAAhvgog");
	this.shape_19.setTransform(228,877.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7F9232").s().p("Ag3C9QiGgFhEhpQgMgTAYgsQAagwA5gsQCbh5D8AKIAIAhQAJApAAAnQAAB9hVA+QhpBMh0AAIgLAAg");
	this.shape_20.setTransform(265.5,757.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#418D5D").s().p("AjkD2QjpiNhbicQglhAgBgxQgBguAggQIB8g6QCbg9CbgOQClgQBtA/QAtAaA1AwQAMAKBYBWQBgBdBNCVQA/B4AIA6QADAWhQAaQhWAah1AIQgrADgpAAQkGAAjBh1g");
	this.shape_21.setTransform(295.7,839.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AB876E").s().p("AoWLxQgoAAgdgcQgdgeAAgoIAA0dQAAgpAdgcQAdgdAoAAIQtAAQAoAAAdAdQAdAcAAApIAAUdQAAAogdAeQgdAcgoAAg");
	this.shape_22.setTransform(239.6,902.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#55B260").s().p("Ah5MxQl/h/jDhsQjlh/hGiWQAOgJAXgMQAvgYAygQQChgxCIA4IBYhaQgagXgSgoQgjhPAohSQgcAHgpABQhSACg+gdQAPg+A0g8QBoh3C4ALQghhJAag2QA1htElBgQAAhJAThWQAlitBfhGIARAPQAVAVASAZQA6BPAMBeQAhggAygdQBkg5BYATIAAApQgDAzgNAuQgqCTiBAxIA9AQQBGAVAyAbQCgBUhoBoIAxgEQA9gCA5AJQC5AfBWCIIg9AvQhKAxhDAFIAbAWQAhAeAbAiQBUBrgPBvQgJBDhmBYQhpBaiZBDQipBLitAUQg6AGg4AAQiDAAh2gmg");
	this.shape_23.setTransform(224.4,776.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DCB871").s().p("A8PF1QgoAAgcgcQgegdAAgpIAAolQAAgpAegcQAdgdAnAAMA4eAAAQApAAAdAdQAcAcABApIAAIlQgBApgcAdQgdAcgpAAg");
	this.shape_24.setTransform(2244,901.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F8DBA1").s().p("A8OF1QgpAAgcgcQgdgdAAgpIAAolQAAgpAdgcQAcgdApAAMA4dAAAQApAAAdAdQAcAcAAApIAAIlQAAApgcAdQgdAcgpAAg");
	this.shape_25.setTransform(2183.4,833.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#897389").s().p("EgIPAxHIAApSILEAAQAeAAAWgWQAWgWAAgeIAAo8QAAgfgWgWQgVgVgfAAIrEAAIAAjfILEAAQAfAAAVgVQAWgWAAgfIAAo8QAAgfgWgVQgWgWgeAAIrEAAIAAjfILEAAQAfABAVgWQAWgWAAgfIAAo7QAAgegWgWQgVgWgfAAIrEAAIAAjeILEAAQAfAAAVgXQAWgVAAgfIAAo7QAAgfgWgWQgVgWgfAAIrEAAIAAjeILEAAQAeAAAWgXQAWgVAAgeIAAo9QAAgegWgWQgWgVgeAAIrEAAIAAjgILEAAQAfABAVgWQAWgWAAgeIAAo9QAAgegWgWQgWgVgeAAIrEAAIAAkCIPVAAQAeAAAWAWQAWAWAAAeMAAABf5QAAAegWAWQgVAWgfAAg");
	this.shape_26.setTransform(2023.3,515.4);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(239.4,201.1,1920,779.2), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2596E").s().p("AygWOQAAkoA0m4QA0m3BXm8QBdnZBtlfQB4mEB2iqIOQAAQCbCpCdGeQCNFzB7H7QBxHXBFHSQBEHPAAEqg");
	this.shape.setTransform(1870.9,719.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(1752.4,561.4,236.9,316), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AygWOQAAkoA0m5QA0m2BXm8QBdnZBtlfQB4mEB2iqIOQAAQCbCpCdGeQCNFzB7H7QBxHXBFHSQBEHPAAEqg");
	mask.setTransform(118.5,158);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1A83D").s().p("AgLAAQAAgLALAAQAMAAAAALQAAAMgMAAQgLAAAAgMg");
	this.shape.setTransform(141.9,94.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMAAQgKAAAAgMg");
	this.shape_1.setTransform(164,84.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1A83D").s().p("AgLAAQAAgLALAAQAMAAAAALQAAAMgMAAQgLAAAAgMg");
	this.shape_2.setTransform(139.9,84.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1A83D").s().p("AgLAnQgPgCgKgIQgKgJAAgOQgBgNAIgLQAHgLAMgFQAMgFAMAAQAPABALAIQALAIAFANQAFAPgKAMQgHAKgRAIIgCAAIgCABQgJADgIAAIgHgBgAgVALIABABIADACIAIACIABAAIAAAAIADAAIAFAAIABAAIAJgDIADgCIAFgDIABAAIAAAAIACgCIABgBIgBABIACgCIAAgCIABgBIAAAAIgBgCIAAAAIgBgDIAAAAIAAgBIgCgDIgDgDIgDgCIgBAAIgBgBIgGgBIgIAAIgGACIgBAAIgBAAIgEADIgCABIgCADIgBABIAAgBIAAABIAAAAIgBAAIgCADIAAAAIAAABIgBAEIAAAEIABACIAAgBIABACIgBgBg");
	this.shape_3.setTransform(198.6,294.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F1A83D").s().p("AgTAkQgKgHgFgLQgGgMABgLQACgOAIgKQAIgKAPgDQAPgEALAJQAKAIAGAPIABABIAAACQAEALgCAMQgCAOgJAIQgJAJgPABQgMAAgLgIgAAAATIACABIAFAAIACAAIAAgBIADgBIAAgCIABAAIAAAAIAAgBIABgCIABAAIAAgCIABgEIAAABIAAgCIAAgEIAAgBIAAgBIgCgGIAAgBIgEgHIgBgBIgBgCIgBAAIgCgBIgBgBIgBAAIgCAAIgBAAIgFABIAAAAIAAAAIgBAAIgDADIgBAAIABAAIgBABIgCABIABgBIgBACIAAgBIgCAEIABgBIgBACIgBAEIAAAGIABAEIABABIAAAAIACAEIAEAFIAEACIAAAAgAgHAQIAAAAIgBgBg");
	this.shape_4.setTransform(114.7,84.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLAAQgKAAAAgMg");
	this.shape_5.setTransform(96.2,190.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLAAQgKAAAAgMg");
	this.shape_6.setTransform(87.5,192.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F1A83D").s().p("AgLAAQAAgLALAAQAMAAAAALQAAAMgMAAQgLAAAAgMg");
	this.shape_7.setTransform(127.6,183.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F1A83D").s().p("AgRArQgLgJgGgPQgGgNABgNQAAgQAIgKIABgBIABgBQALgPARACQANAAANANQAVAVgIAaQgHAdgWAHQgFACgEAAQgIAAgJgHgAABAaIAAAAIACgBIgBAAIACAAIABgBIADgDIABgBIAAgBIAFgIIAAAAIAAgBIACgIIABgBIAAgDIgCgHIgBAAIgBgDIgCgEIgFgFIgDgBIgCgCIgBAAIgCgBIgBAAIgEABIgCABIgCADIgCAEIgBACIgBADIAAAAIAAAGIAAAFIAAABIABADIACAHIAEAHIABABIABACIADADIABAAIACACIAAgBg");
	this.shape_8.setTransform(54.3,86.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F1A83D").s().p("AgaAvIgCgBIgEgBQgSgJgFgRQgEgRAKgSQAIgPAPgJQAMgHAOgBQAhgBAQASQALANgDAQQgDAPgPAOQgPANgRAGQgKADgJAAQgIAAgGgCgAgWAXIAAAAIAEACIACAAIAGAAIADAAIACAAIALgEIACgBIAHgEIADgCIABgBIABgBIAGgGIAGgJIACgEIAAgCIgBgCIAAgBIAAgBIgCgCIgBgBIgEgDIgCgBIgKgDIgIgBIgJAAIgHACIAAAAIgIAFQACgCgCACIgBABIgCACIgEAFQABgCgBABIgDAEIgBADIgBABIgBACIAAACIgBADIAAAGIAAADIABABIABACIABACIgBgBIAAAAIABABIACACIAAAAIABAAIgBAAIABAAIADACIAAAAIAAAAIAAAAIABABIgBgBg");
	this.shape_9.setTransform(94.9,66);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F1A83D").s().p("AgRAoQgPgGgHgMQgGgKAAgMQAAgLAGgKQAHgMANgGQANgEAOACQANACALAKQALALACAOQADAPgIALQgJAOgRAEIAAAAQgJADgGAAQgIAAgIgDgAgIASIADAAIABAAIABABIACAAIAFgBIABAAIABAAIACgBIAFgBIgBAAIADgCIACgBIABgBIACgCIgBABIABgBIABgCIABgDIAAgBIAAgEIgCgGIgDgEIABABIgFgFIgEgCIgDgBIgIgBIgJACIAAAAIgEACIgBABIAAAAIgBACIgBABIgBABIgBACIAAABIgBACIAAAAIAAACIAAgCIAAABIAAADIAAACIAAABIABAEIABABIgBgBIADAFIADACIABABIAEACIgBAAg");
	this.shape_10.setTransform(40.6,304);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F1A83D").s().p("AgfAoQgegWABgcQAAgQAMgKQALgLAVgDQAQgBASAGQAUAHAKAMQAOAOgBAQQgCATgWAQIgBABQgPAKgSABQgSAAgQgLgAgSAUIAIAEIAAABIAGABIAJABIACAAIABAAIABAAIAFgCIACgBIAJgFIACgCIABgBIAEgDIABgCQgBACABgCIACgDIAAgBIABgBIAAgCIABAAIAAgCIAAgCIAAAAIAAgBIgBgCIAAAAIgDgEIAAgBIgDgDIgCgCIgBAAIAAgBIgBAAIgMgHIAAAAIgFgCIgKgDIgBAAIgNAAIgDAAIgIADIABAAIgFACIgBABIAAAAIgCACIAAABIgBABIgBACIgBACIAAABIAAAGIABAFIAEAHIACACIAAABIAAgBIAAABIAAAAIAIAIIABABIAAgBgAAkAEIABgBIAAAAIgBABg");
	this.shape_11.setTransform(21.3,268.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F1A83D").s().p("AgGAzIgCAAQgYAAgMgLQgNgKABgRQAAgaAbgVQAdgYAcALQAVAIAGASQAFARgKARQgIAQgPALQgQALgQAAgAgWAZIADABIAEABIABAAIAIAAIAEAAIAEgBIACgBIABAAIABgBIABAAIAHgEIABgCIAGgFIADgDIAAAAIABgBIAEgHIACgDIACgHIAAgEIgBgDIgCgEIgDgCIgFgDIAAAAIAAAAIgBAAIABAAIgEgBIgFgBIgGAAIgJADIABgBQgCAAgDADIgFADIgCACIAAgBIgJAJIgCACIABgBIgBABIgGAJIAAABIAAgBIgBADIgBAEIAAABIAAAFIAAACIAAAAIABACIADADIADABIAAAAIADABg");
	this.shape_12.setTransform(46.9,253.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F1A83D").s().p("AgpAsQgUgNAAgXQAAgQAMgQQALgOARgHQAggPAaAMQAQAHAGASQAGARgFAQQgGATgRANQgRALgUACIAAAAIgBAAIgEAAQgUAAgQgLgAgiAUIACABIACACIABABIAGAEIACAAIAGACIADABIABAAIABAAIAKAAIABAAIABAAIAMgEIACgBIAHgEIABAAIABgCIAGgFIABgBIAAgBIADgDIACgFIABgFIAAgKQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIgBgDIgBgDIAAABIgCgFIAAAAIgBgBIAAAAIgCgCIAAgBIgCAAIgDgCIgBgBIgBAAIgCgBIgDAAIgBAAIgKgBIgDABIgBAAIgKADIgDABIgBAAIgMAHQgCACACgBIgIAIQgDADgCAEIgBACIgCAFIAAAFIABACIAAgBIAAADIABACIAAgBg");
	this.shape_13.setTransform(56.3,167);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F1A83D").s().p("AAFAsQgOAAgNgHQgPgHgIgPQgJgPADgPQADgOANgIQAMgHAQAAQAjABAQAZIABABQALATgEAPQgEAPgPAHQgMAGgOAAIgCgBgAgKARIABAAIABABIAKACIABAAIACABIAFAAIAIgCIADgBIAAAAIgBABIACgBIgBAAIAEgCIABAAIAAgBIABgBIABgBIAAAAIABgCIAAgBIAAgEIAAgCIgBgDIgBgBIgDgFIgBgBIgEgFIgJgFIgBAAIAAAAIgJgDIgBAAIgBgBIgKAAIgDABIgHACIgCABIgBABIgBABIAAAAIgBABIgBACIAAACIAAADIAAADIACAFIAEAGIgBgBIAGAGIgBgBg");
	this.shape_14.setTransform(196.8,54.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F1A83D").s().p("AgRAsIgBAAIgCAAQgSgFgJgNQgJgMAGgPQAIgbAegMQANgFAPABQATAEAJALQAMANgDAQQgDANgLALQgLAMgQAGQgJADgJAAIgLgBgAgSAUIAHACIAIAAIAFgCIADgBIAAAAIABAAIAGgDIADgCIACgBIABgCIADgCIADgEIABgBIADgEIABgFIABgBIAAgBIgBgCIAAgCIgBgBIgDgDIgHgEQADABgCAAIgEgCIgIgBIgHACIgFABIgBABIgCABIgFADIgCABIgIAIIgEAGIAAABIAAAAIgBAEIAAADIAAACIAAAAIABACIADADIACABIADACIAAgBg");
	this.shape_15.setTransform(70,211.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F1A83D").s().p("AgqA0QgRgMgDgXQgEgiAfgZQAfgYAhAJQATAFAJARQAJAQgDATQgEAUgSARQgRAQgUAFIgCAAIgBABIgOABQgQAAgNgIgAgXAjIAGABIAHAAIAHgBQARgEANgNQAGgGAEgJIABgBIACgGIAAgCIAAgFIAAgCQAAABAAgCIgBgDIgBgFIAAABIgDgFIAAAAIgBgBIgBgCIgCgBIABABIAAgBIgFgCIgBgBIABAAIgIgCIgMAAIgCABIgIACIgDABIgCABIgCABIgLAGIgBABIgHAHIgFAIIgEAMIAAABIgBAHIABADIAAACIACAFIgBAAIADAEIABABIACADIABAAIACACIAEABIAAAAIABABg");
	this.shape_16.setTransform(90.5,232.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F1A83D").s().p("AgoAtQgPgNgBgVQgCgQAIgQQAHgQAOgKQAQgLATABQAUAAAOANQAMALAEARQAEAQgEAQQgFATgQAMQgOAKgTABIgBAAIgDAAQgXAAgPgNgAgIAiIAJABIAFgBIAAAAIAJgCIAAAAIACgBIADgCIABgBIABAAIAFgGQgBACABgBIAFgJIACgKIAAgBIABgDIgBgGIAAgBIgCgJIgEgGIgBgBIABAAIgFgFIgGgDQACAAgDgBIgIgCIgIAAIgBABIABgBIgKADIAAAAIgBABIgGAEIgGAFIgBABIgBACIgEAHIgBABIAAABIgDAJIAAALIABACIABAFIABACIACACIABACIgBgBIACACIACACIABABIAAAAIABAAIAFADIgBAAg");
	this.shape_17.setTransform(164,250.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F1A83D").s().p("AgSAzIAAAAQgXgGgLgOQgMgOAEgSQACgNALgNQAKgLANgGQARgIAQABQASABAOAKQAUANABAUQACAQgOARQgMAPgTAHQgMAEgKAAQgIAAgHgBgAgSgUIgDACIgCABIgDADIgEAEIgCACIgDAFIgBADIgBAEIgBABIAAABIAAACIACAFIADAEIACADIAIAEIADACIAIACIABAAIADABIAAAAIACAAIAGAAIAJgCIAEgCIACAAIAHgFIACgBIAAgBIABAAIACgBIAGgGIAAgBIAEgHIAAgBIACgFIAAgBIAAgDIAAAAIgBgDIgBgBIAAAAIgCgDIABAAIgBgBIgDgDIgNgIIgEgBIgDAAIgBgBIgBAAIgFAAIgEAAIgKADIgBABIgBAAg");
	this.shape_18.setTransform(201.8,270.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F1A83D").s().p("AghAsQgQgKgHgUIAAgBIAAgBQgFgPAGgRQAHgQAQgJQAOgJAUABQAYACAOAKQAOAKAEAQQAEAPgGAPQgHARgLAIQgOAMgVACIgFAAQgRAAgOgKgAgOAcIAGACIACAAIAKAAIALgDIAFgCIABgBIAGgGIABgBIAAAAIABgBIADgFIABgCIAAAAIAAgBIAAABIAAgCIACgFIAAgCQAAACABgCIAAgGIgBgFIgBAAIgBgDIgBgCIAAgBIgFgFIgGgDIgCAAIgDgCIgLgCIgFAAIgGAAIgCAAIgJACIgHAEIgFAFIgBACIgCAEIgBABIAAABIgCAFIAAAHIABAFIABACIAEAHIABACIAFAFIABABIABAAIADACIADABIAAABIAAAAIABAAg");
	this.shape_19.setTransform(24,138);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F1A83D").s().p("AgcAvQgOgHgGgPQgEgNACgPIAAgCIAAgBQAEgSAOgNQAPgOASgBQASAAASAPQANAKABARQACAMgHAOQgGANgLAJQgNALgMACIgKACQgMAAgKgGgAgIAdIAGAAIAEgCIAAAAIACgBIAGgDIABgBIACgBIAJgLIADgEIABgDIAAAAIACgFIAAgHIgBgDIAAAAIgBgCIgBgCIAAAAIgBgBIgIgHIgEgCIAAAAIgCAAIgDgBIgCgBIgFAAIgDABIgDABIAAAAIgGADIgCABIgGAGIgBACIABgBIgCACIgDAGIgBABIABAAIgBACIgBAEIAAACIgBADIABAFIAAACIAAADIABACIAAAAIABABIABACIABABIAEAEIAKAEQABAAgBgBg");
	this.shape_20.setTransform(40.3,69.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F1A83D").s().p("AgKApQgRgDgMgJQgLgJgDgQQgDgPAJgMQAPgUAgACQAhADAOATQANATgKARQgHAOgWAHIAAABIgBAAQgKADgKAAIgKgBgAgegDIAAAEIABABIABACIAAABIACADIAAABIADACIAFADIACABIAAAAIAOADIAFAAIACAAIADAAIAHgCIAAAAIAGgDIADgCIAFgEIACgEIAAgBIAAgBIgBgCIgBgCIgCgDIAAAAIgBgBIgCgCIABAAIgKgFIgFgBIgHgCIgBAAIgJAAIgFAAIgCABIgHACIAAAAIgEACQACgBgCABIgCACIAAABIgBABIgCAFIABgBIgBABg");
	this.shape_21.setTransform(221.5,167.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLAAQgKAAAAgMg");
	this.shape_22.setTransform(13.4,292.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLAAQgKAAAAgMg");
	this.shape_23.setTransform(225.7,279.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLAAQgKAAAAgMg");
	this.shape_24.setTransform(231.3,277.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F1A83D").s().p("AgLAAQAAgLALAAQAMAAAAALQAAAMgMAAQgLAAAAgMg");
	this.shape_25.setTransform(223.6,274.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLAAQgKAAAAgMg");
	this.shape_26.setTransform(43.6,237.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLAAQgKAAAAgMg");
	this.shape_27.setTransform(169.2,148.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLAAQgKAAAAgMg");
	this.shape_28.setTransform(48.4,289.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQAMAAAAALQAAAMgMAAQgKAAAAgMg");
	this.shape_29.setTransform(41.7,286.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLAAQgKAAAAgMg");
	this.shape_30.setTransform(48.6,279.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F1A83D").s().p("AgLAAQAAgLALAAQAMAAAAALQAAAMgMAAQgLAAAAgMg");
	this.shape_31.setTransform(168.7,302.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F1A83D").s().p("AgCAMIgCgBIABAAIAAAAIgBgBIAAAAIgBgBIAAABIABABIgDgCIgCgBQgCgCgBgEIgBgCIABgFIADgDIADgCIAFgCIAAABIADAAIAEACIABAAIAAAAIADACIAAAAQACACABAEIABACIgCAGIgCACIgDADIgFABg");
	this.shape_32.setTransform(161.5,283.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F1A83D").s().p("AgLAAQAAgLALAAQAMAAAAALQAAAMgMAAQgLAAAAgMg");
	this.shape_33.setTransform(156.4,278.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQAMAAgBALQABAMgMAAQgKAAAAgMg");
	this.shape_34.setTransform(176.6,273.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLAAQgKAAAAgMg");
	this.shape_35.setTransform(83.5,81.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLAAQgKAAAAgMg");
	this.shape_36.setTransform(93.2,88.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLAAQgKAAAAgMg");
	this.shape_37.setTransform(35.6,98.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F1A83D").s().p("AgLAAQAAgLALAAQAMAAAAALQAAAMgMAAQgLAAAAgMg");
	this.shape_38.setTransform(35.7,107.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLAAQgKAAAAgMg");
	this.shape_39.setTransform(35,147.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLAAQgKAAAAgMg");
	this.shape_40.setTransform(30.7,155.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F1A83D").s().p("AgLAAQAAgLALAAQAMAAAAALQAAAMgMAAQgLAAAAgMg");
	this.shape_41.setTransform(111.1,105.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLAAQgKAAAAgMg");
	this.shape_42.setTransform(116.2,112.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F1A83D").s().p("AgLAAQAAgLALAAQAMAAAAALQAAAMgMAAQgLAAAAgMg");
	this.shape_43.setTransform(54.7,229.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLAAQgKAAAAgMg");
	this.shape_44.setTransform(45,226.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F1A83D").s().p("AgLAAQAAgLALAAQAMAAAAALQAAAMgMAAQgLAAAAgMg");
	this.shape_45.setTransform(42.9,186.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLAAQgKAAAAgMg");
	this.shape_46.setTransform(52.1,184.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F1A83D").s().p("AgLAAQAAgLALAAQAMAAAAALQAAAMgMAAQgLAAAAgMg");
	this.shape_47.setTransform(155.6,227.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLAAQgKAAAAgMg");
	this.shape_48.setTransform(150.9,220);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLAAQgKAAAAgMg");
	this.shape_49.setTransform(221.9,306.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLAAQgKAAAAgMg");
	this.shape_50.setTransform(196.9,172.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLAAQgKAAAAgMg");
	this.shape_51.setTransform(67,75.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLAAQgKAAAAgMg");
	this.shape_52.setTransform(74.5,66.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F1A83D").s().p("AgLAAQAAgLALAAQAMAAAAALQAAAMgMAAQgLAAAAgMg");
	this.shape_53.setTransform(137.3,160.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F1A83D").s().p("AgKAAQAAgLAKAAQALAAAAALQAAAMgLAAQgKAAAAgMg");
	this.shape_54.setTransform(133.9,152.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F1A83D").s().p("AgIAuQgTgEgPgOQgPgOgBgQIAAgCIAAgDQACgNALgKQALgKAQgEQAdgHAaAMQAOAHAGAOQAFAPgGAOQgHATgTALQgOAHgNAAIgLgCgAgGgWIgKACIgDACIgCAAIgDACIgEACIgBAAIgDADIgBADIgBAEIAAACIAAACIAAAAIABACIACADIAAAAIACACIAHAHQAKAGACABIAIACIACABIACAAQANAAAKgIQAFgEADgGIACgGIAAgEIAAgDIAAABIAAgCIgBgDIgBgCIAAAAIgDgCIgBgBIgFgDIgFgCIgHgBIAAAAIgBAAIAAAAIgKgBIgFABIgCAAg");
	this.shape_55.setTransform(173,193.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F1A83D").s().p("AgJAuQgQAAgMgJQgPgKgCgQQgCgSALgPQALgQAQgEQANgEAMABQAjADAKAYIACADIAAACQAEAPgKAQQgKAOgSAIQgNAGgOAAIgCAAgAgdAMIABACIABABIABABIACACIAFACIAJADIAKAAIAHgDIAMgHIABgBIACgBIAGgGIAAgBIACgDIABgBIAAAAIABgDIAAgDIAAgBIgBAAIAAgCIAAAAIgBgBIAAgCQgBgBAAABIAAgBIgCgBIgBgBIgEgCIgBgBIABAAIgLgDIgCAAIgCAAIgLAAIgCAAIAAAAIgJACIgDACIgBABIgDACQgEAEgCAGIgDAIIAAACIABACIgBAAIACADIgBAAg");
	this.shape_56.setTransform(194.5,156.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F1A83D").s().p("AgTA3QgOgDgIgPQgJgQAAgUQABgTAJgPQAKgSARgEQASgFAVANIAAAAIACACQARAMAEAQQAEARgGANQgMAegdALQgGADgHAAQgGAAgGgCgAgNAgIAEABIAEAAIACgBIADgBIABAAIAHgEIABgBIABgBIAIgIIACgCIAEgIIACgFIABgDIAAgBIAAgEIgBgCIgBgFIAAgBIAAACIAAgBIgBgDIgCgCIgGgGIgCgCIgHgEIgIgDIgEAAIgBABIABgBIgBAAIAAABIgBAAIgCAAQgBABABAAIABgBQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgCACIgBAAIAAABIgDADIgBABIgEAHIABgBIgBACIgDALIAAABIAAANIAAADIADAKIAAgBIAAACIAFAHIAAAAg");
	this.shape_57.setTransform(126.6,215.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F1A83D").s().p("AACAwQgQgBgLgFQgMgFgGgNQgHgOAEgQQADgPAOgMQAOgLAOgCQAPgDAMAIQAMAIAGARIABABIAAAAQAFAQgDAOQgEARgNAJQgJAHgPAAIgEAAgAgBAYQAFABAEgBQACAAgBAAIABAAIADgBIACgBIgBABIAFgDIACgCIABgCIABgBIABgEIAAgDQABgEgBgFIgBgDIAAgDIgBgCIgBgCIgDgFIgDgEIgDgCIgCAAIgCgBQABAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgFAAIgEABIgCABIAAAAIgIAEIgGAHIgEAFIAAABIgBAFIAAABIgBADIAAACIABACIgBgBIABAEIABACIABABIAAAAIAEAEIACABIACABIgBAAIAKADIACAAIgBAAg");
	this.shape_58.setTransform(150.2,171);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F1A83D").s().p("AgMAmQgLgDgHgLQgGgLABgMQABgNAJgLQAJgMAOgDQAOgCAJAHQAKAHAEANIABABIAAABQACAKgDAKQgEALgIAIQgOALgMAAIgJgBgAgHAPIABABIACAAIABAAIAAAAIAEgCIADgBIABgBIABgBIgCABIAFgEIAAgBIAAAAIACgCIABgCIAAAAIAAAAIABgCIAAgCIAAgCQAAABAAgCIAAgBIAAABIgBgFIgBgCIgBgBIgBAAIgBgBIgBgBIgDgBIgCABQADgBgDAAIgCACIgCABIgCABIgCACIgCACQAAAAAAgBQABAAAAAAQAAAAgBAAQAAAAAAAAIgCAEIgBACIAAABIgBACIAAAFIABABIAAADIAAAAIABABIgBgBIABAAIAAACIABACIAAgBIABABIAAAAIABABIgBgBgAAJAHIAAACIABgCg");
	this.shape_59.setTransform(140.1,122.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F1A83D").s().p("AgaAoQgQgJgFgQQgDgOAJgPQAHgPAJgIQALgJAOABQAOABAMAGQANAHAGANQAFANgDANQgCAMgKAKIAAABIgBAAIAAABIgBABQgLALgRACIgGAAQgNAAgMgGgAgXAMIABABIABABIADADIAGADQgBAAABABIABAAIAHACIAGAAIABgBIAGgBIABAAIABgBIACgBIABgBIACgBIABgCIACgCIABgBIADgFIAAAAIABgDIABgEIAAgEIgCgFIgCgDIgCgCIgCgBIgBgCIgMgEIgCAAIgCgBIgEAAIgCABIgBAAIgCACIAAAAIgDADIgBABIgBABIgGALIgCACIAAABIgBAAIAAABIgBADIAAACIAAACIAAABIABACIAAgBg");
	this.shape_60.setTransform(111.5,159.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F1A83D").s().p("AgSFNQgrhEgPhaIgHgsQgCgZAEgSQgnA3hGAiQhTAogwgoQgbgWAMgoQAJgfAaggQAXgYAigSQAPgJAwgTQgZgDgngcQgogdgegmQhOhjA/gzQAygpBIAsQAoAYBCA7QgNgiAFgtQAFgrAUglQAxhXBMAcQBcAigZBgQgSBDgzAxQA1glBJAJQBTALA+A+QArArAGAoQAIAtguAhQgjAagyAFQgjADg2gHQgUgDg0gMQAiAKAgA6QAeA1AKAzQAKA0gRAvQgTA3gtALQgNADgMAAQg6AAgshJg");
	this.shape_61.setTransform(79.4,130.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F1A83D").s().p("AhiEQQAQhdAqhEQgoAjgzAdQglATgsAJQg1ALgggKQgogLgMg0QgKgsAPgrQAQgqAogbQAfgWAzgPIAwgPQAcgHAWAAIAbABQARACAKgBQgVgjgMgxIgNg7QgMhDALgsQAPg+A8gEQAZgBAaAYQAOAOAcAeQATASAaBFQAeBOgNAhQAFgLAJgcQAHgZAJgOQAfgyAggTQAWgMAXACQAYACATAPQAaAUAKAaQAIAXAAAkQgBBCgoA7QgnA6g8AbQAjAbAXAsQAPAdAFATQAHAXACAYQACAbgHAUQgZBOhUgxQgigUgaggQgagggFgcQgJBSgSAsQgLAdgfAdQghAfgdAAIgCAAQhSAAAVh5g");
	this.shape_62.setTransform(188.1,105.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F1A83D").s().p("AAQFLQgdgMgWgZQgpgwAehjQgRAsg8AcQggAPgLAEQgRAGgKACQgWADgSgIQgbgKgVgXQgXgZgCgaQgCgRANgbQAKgVAPgTQAGgJAPgNIAWgWQgHgFgUgJQgSgIgJgHQgfgWgPgSQgTgXAEgeQAEgaAVgXQAXgaAXgKQAbgLAeAKQAXAIAXAcQAhAoAHAGIAUAQIANAMQgMgMgKgUQgMgVgGgXQgJgfADghQAEgfAOgeQAfg/BAgDQA/gEAhA+QASAjgCA4QgCAtgOAtQAJgaAkgPQAdgNAigBQBWgDAsApQA8A6gkAuQgoAzhWAaQgMADgSACIgeABQgSABgBAFQgBADAJAPQAQAaAGAoQAFAmgHAfQgHAhgTAaQgUAbgdANQgOAGgPAAQgQAAgRgGg");
	this.shape_63.setTransform(220.4,224.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F1A83D").s().p("AirFjQADghAOgfQANggARgSQgYAVg4AKQg3AKg0gGQg6gIgYgZQgdgeAYgwQAbg6BBgJQAXgDAiAEQAbACAngFIAWgCQAMgBAJACQgcgLgngaQgagOgKgIQgNgLgMgSIgSghQgcgzARguQAehTBjAgQBSAaA4BAQgXhMAfhhQAihwBSAOQBSANgJBzQgDAlgjCGQAVhIBWgcQBWgdA5AxQA7AvhIBVQg4BAhNAnQAiACApAbQApAbAbAlQBGBdhLA1IgIAFQgqAYg1gRQhFgXhUhdQARA2gwBFIhgABQhOAAhRgDg");
	this.shape_64.setTransform(102.8,282);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F1A83D").s().p("Ah9EnIgRgSQgWkqgLi2IAAgBIADgDQA1hXA7gZQBmgtgSCCQgHAugUA6QgSAygQAZQAtgfBNAJQBWAKAFA7QAEAyhOAbQgmANhUALQA4AdAOA3QAOAxgYAvQgYAugrAKQgJACgKAAQgoAAgngkg");
	this.shape_65.setTransform(20,200);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(2.4,50.1,234.6,266), null);


(lib.ClipGroup_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4QGxQhCABgvgwQgvguAAhDIAAohQAAhCAvgwQAvguBCgBMAwgAAAQBDABAvAuQAvAwAABCIAAIhQAABDgvAuQgvAwhDgBg");
	mask.setTransform(171.3,43.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#785498","#7C579C","#9365B6","#9C6BC0"],[0,0.082,0.659,1],0,42.3,0,-42.2).s().p("A6wGxIAAtiMA1hAAAIAANig");
	this.shape.setTransform(171.3,43.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0, new cjs.Rectangle(0,0,342.6,86.7), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjSOxIAA9hIGlAAIAAdhg");
	mask.setTransform(21.1,94.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#676767").s().p("AisOWQgJiVgKixQgTlhAAiPQAAjdAEkPQAEk1AGglQAPhoBFg3QA+gxBPAHQBPAGA0A4QA4A+gGBfQgJCIgIEqQgHEkgHBeIg6M2QgQAbh1AAQh2AAgqgbg");
	this.shape.setTransform(21.1,94.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,42.1,189), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkFB4IAAjvIIKAAIAADvg");
	mask.setTransform(26.2,12);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#676767").s().p("AjFB4QhMAAAPgxQAKggAfgcQA2gwBIguQAjgXAZgNIEkAAIAAC5QAAA2g9AAg");
	this.shape.setTransform(26.2,12);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,52.3,24.1), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjsByIAAjjIHZAAIAADjg");
	mask.setTransform(23.7,11.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#676767").s().p("Ai3ByQg8gDAIgiQAHgdAmgWQAkgUBfgwQAjgSAAg1IEEAAQgHCTAAAfQAAAxg3AAg");
	this.shape.setTransform(23.7,11.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,47.3,22.8), null);


(lib.Symbol2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("ApcMeIAA47IS5AAIAAY7g");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.4,-79.8,120.9,159.6);


(lib.women_hand_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(44.4,29.3,1,1,0,0,0,44.4,29.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({startPosition:0},0).to({rotation:-5.5,x:44.5},4).wait(1).to({startPosition:0},0).to({rotation:9.5,x:44.4,y:29.4},19,cjs.Ease.get(1)).wait(109).to({startPosition:0},0).to({rotation:-5.5,x:44.5,y:29.3},11,cjs.Ease.get(1)).wait(6));

	// Layer_5
	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(27.9,78.4,1,1,0,20,-160,16.4,69.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({_off:false},0).to({skewX:80,skewY:-100,x:4.7,y:70.7},19,cjs.Ease.get(1)).wait(109).to({startPosition:0},0).to({skewX:20,skewY:-160,x:27.9,y:78.4},11,cjs.Ease.get(1)).wait(6));

	// Layer_2
	this.instance_2 = new lib.Symbol2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(23.5,72.5,1,1,0,0,0,18.4,64.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({startPosition:0},0).to({rotation:-5,x:27.8,y:72.9},4).to({_off:true},1).wait(145));

	// Layer_4
	this.instance_3 = new lib.Symbol3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(22.4,130.8,1,1,0,35,-145,10.3,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({_off:false},0).to({skewX:103.7,skewY:-76.3,x:-46.5,y:90.7},19,cjs.Ease.get(1)).wait(109).to({startPosition:0},0).to({skewX:35,skewY:-145,x:22.4,y:130.8},11,cjs.Ease.get(1)).wait(6));

	// Layer_3
	this.instance_4 = new lib.Symbol3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(13.2,129.7,1,1,0,0,0,10.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({startPosition:0},0).to({regX:10.4,rotation:-5,x:22.4,y:130.8},4).to({_off:true},1).wait(145));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.5,168.1);


(lib.manstanding = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head
	this.instance = new lib.man_head_loop("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(119.9,196.3,1,1,0,0,0,113.7,196.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({startPosition:29},0).to({y:199.3,startPosition:32},9).to({y:196.3,startPosition:36},8).wait(134));

	// hand
	this.instance_1 = new lib.man_hand_right();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.6,219,1,1,0,0,0,50.6,30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({rotation:-3.7,x:50.7,y:218},9).to({rotation:0,x:50.6,y:219},16).wait(126));

	// body_upper
	this.instance_2 = new lib.man_body();
	this.instance_2.parent = this;
	this.instance_2.setTransform(116.8,330.3,1,1,0,0,0,106.9,158.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({y:333.3},9).to({y:330.3},8).wait(134));

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
	this.shape_20.graphics.f("#F4BC98").s().p("Ai9PYQg1gvAAg9QAXoVABjgQAAiLgNmUIgMl2QAAhdBShFQBPhDBiAAQBeAABDBDQBDBCAABgIgRGSQgTGjgMBXIhnL+QAAA9g0AvQgyAshAAAQhBAAgzgsg");
	this.shape_20.setTransform(152.9,392.7,0.667,0.667);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F4BC98").s().p("AjHQLQg3gwAAhBQAXowABjtQABiSgNmpIgOmKQAAhhBXhJQBThHBmAAQBkAABGBHQBHBGAABkIgSGoQgUG4gNBcIhsMmQAABBg3AwQg1AvhEAAQhEAAg1gvg");
	this.shape_21.setTransform(57.7,399.2,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(180));

	// hand
	this.instance_3 = new lib.man_hand_left();
	this.instance_3.parent = this;
	this.instance_3.setTransform(169.2,229,1,1,0,0,0,24.1,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({regX:24.2,regY:41.6,rotation:2.2,x:169.4,y:229.1},9).to({regX:24.1,regY:41.5,rotation:0,x:169.2,y:229},16).wait(126));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,222.2,481.4);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(23.7,11.4,1,1,0,0,0,23.7,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,47.4,22.8), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(26.2,12,1,1,0,0,0,26.2,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,52.3,24.1), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_8();
	this.instance.parent = this;
	this.instance.setTransform(171.3,22.8,1,1,0,0,0,171.3,22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,342.6,45.5), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(21.1,94.5,1,1,0,0,0,21.1,94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,42.1,189.1), null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EjxHBUYMAAAiovMHiPAAAMAAACovg");
	mask.setTransform(1543.2,540);

	// Layer_3
	this.instance = new lib.Group_0();
	this.instance.parent = this;
	this.instance.setTransform(1199.4,885.6,1,1,0,0,0,171.3,22.8);
	this.instance.alpha = 0.102;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C4276").s().p("A4AH3QhmAAhHhIQhIhHAAhmIAAoDQAAhlBIhIQBHhIBmAAMAwBAAAQBmAABIBIQBHBIAABlIAAIDQAABmhHBHQhIBIhmAAgA59l9QgzAzAABJIAAIDQAABJAzAzQA0A0BJgBMAwBAAAQBJABAzg0QA0gzAAhJIAAoDQAAhJg0gzQgzg0hJABMgwBAAAQhJgBg0A0g");
	this.shape.setTransform(1199.4,865);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AZ9gFQgzg0hJABMgwBAAAQhJgBg0A0QgyAxgBBHIAAg2QAAhIAzg0QA0gzBJAAMAwBAAAQBJAAAzAzQA0A0AABIIAAA2QgBhHgzgxg");
	this.shape_1.setTransform(1199.4,833.1);

	var maskedShapeInstanceList = [this.instance,this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, new cjs.Rectangle(1021.2,814.7,356.4,100.5), null);


(lib.woman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head
	this.instance = new lib.woman_head("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(131.6,200.3,1,1,0,0,0,131.6,200.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180));

	// hand
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1A83D").s().p("AmsgZINLhKQAIA8AGBBItRBKQgEgzgEhKg");
	this.shape.setTransform(184.3,270.3,0.667,0.667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C64153").s().p("AmhAhQAhkwB1iAQBhhrBNgNQBdgRB6BnQCIBzBTEVQBCDWAYETItRBKQgYkJAZjgg");
	this.shape_1.setTransform(184.2,242.2,0.667,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFEA5").s().p("AguAWQgkgdgCgcICpgOQACAfgOAdQgRAkggADIgGAAQgeAAgigcg");
	this.shape_2.setTransform(195.9,276.4,0.667,0.667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFEA5").s().p("Ag2AWQgcgcgCgdICpgPQACAdgWAgQgYAlghADIgFAAQgdAAgcgdg");
	this.shape_3.setTransform(184.6,277.4,0.667,0.667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFEA5").s().p("Ag+AWQgTgagDggICpgPQACAcgeAiQgfAlghADIgFABQgdAAgVgeg");
	this.shape_4.setTransform(173.2,278.5,0.667,0.667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFEA5").s().p("AguAWQgmgcgDgcICpgPQALAlgLAbQgMAfghADIgJABQgkAAgmgcg");
	this.shape_5.setTransform(207.4,275.4,0.667,0.667);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEA5").s().p("AhIAaQgQgaAEglICpgOQADAcghAiQgkAmgpADIgGAAQgdAAgPgag");
	this.shape_6.setTransform(161.9,279.5,0.667,0.667);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#DC9076").ss(1.6,1,1).p("AAhhBQgIAmgVApQgTAngRAM");
	this.shape_7.setTransform(189.4,358.1,0.667,0.667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#DC9076").ss(1.6,1,1).p("AAmhSQgCAbgcA8QgcA+gRAQ");
	this.shape_8.setTransform(185.7,357,0.667,0.667);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#DC9076").ss(1.6,1,1).p("AAohfQABAZgfBLQgfBMgSAP");
	this.shape_9.setTransform(182.3,354.7,0.667,0.667);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F4BC98").s().p("AgCENQg6gGgagcQgJgJgBgNQgCgNAFgLQAyh1AKhqQADgcgKgJQgKgKgQAqQgWA7gQAcQgXAmgVgHQgZgKgDgRQgFgcAehJQAihaANgcQAUgpAmgmQAkggA3AMQA0ALAWAjQAYAkAVBpQAXBxgNA/QgaBLgHAOQgUAogpAdQgVAPgnAAIgWgBg");
	this.shape_10.setTransform(183.5,346.6,0.667,0.667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F4BC98").s().p("AgfOfQAAhVgSivIgekdQgHhCg2mBQg0lygJhkQgRjJAPhGQAah2B7gLQB3gKA2CSQAeBRAPCoQAMCOASFBQAVF8gFBsQgKEKg3EWg");
	this.shape_11.setTransform(181.6,275.3,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(180));

	// body
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2A880").s().p("AgdCyQgZgBgNgWIi9lMIIBAAIj2FQQgNATgXAAIgEAAg");
	this.shape_12.setTransform(122.1,201.5,0.667,0.667);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C64153").s().p("AhsEcQgTgCgMgPIj5k4IAAjvIJgAAICpDaInPFVQgNAKgPAAIgGgBg");
	this.shape_13.setTransform(150.1,208.6,0.667,0.667);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F1A83D").s().p("AiSFTQgTgCgMgPIjUkOQgVgbAAgfIAAlNIJgAAIDVESIoLGLQgMAKgPAAIgHgBg");
	this.shape_14.setTransform(151.6,212.3,0.667,0.667);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEFEA5").s().p("AgMAxQglgLgSgXIAwghQAXgQAVgSQAaAPAMAdQANAfgYATQgPALgUAAQgOAAgPgEg");
	this.shape_15.setTransform(175.4,210.1,0.667,0.667);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFEA5").s().p("AgPA+QglgKgSgXIB7heQARAXABAmQABAqgXASQgPAKgVAAQgNAAgPgEg");
	this.shape_16.setTransform(167.8,215.8,0.667,0.667);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFEA5").s().p("AgPA9QglgLgTgWQArgiBUg7QAQAYAAAnQgBApgXARQgOAKgUAAQgNAAgQgFg");
	this.shape_17.setTransform(160.5,222.2,0.667,0.667);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEFEA5").s().p("AgPA/QgkgLgSgYQAngcBQhDQASAYACAmQACApgXATQgPANgWAAQgMAAgPgFg");
	this.shape_18.setTransform(152.5,228.2,0.667,0.667);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFEA5").s().p("AgIBDQgJAAgMgGQgIgDgIgJQgLgOABgTQAAgOAGgOIADABIADAAIACABIACgBQACAAAFgDIAKgGQATgOAYghQALAIAJAPQAKAPAEARQAIAtgdAWQgHAGgNAEQgHADgJAAIgGgBg");
	this.shape_19.setTransform(145.7,233.8,0.667,0.667);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEFEA5").s().p("AgMBDQgUgCgNgLQgNgMgFgSQgDgRAEgRQAIgkAZgUQAvA/AvARQgEANgLAMQgMAOgQAHQgOAHgOAAIgGAAg");
	this.shape_20.setTransform(138.8,231.8,0.667,0.667);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEFEA5").s().p("AgeBAQgRgHgIgNQgJgMABgSQAAgQAHgRQAHgQALgOQALgOAMgGQASAgAUAeQAaAlAQAUQgZAUgkAAIgDAAQgRAAgOgGg");
	this.shape_21.setTransform(132.8,224.3,0.667,0.667);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEFEA5").s().p("AAABGQgqgEgOgdQgOgbAWgkQASggAcgMQAaBAAmBBQgUAMgbAAIgPgBg");
	this.shape_22.setTransform(127.6,216,0.667,0.667);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C64153").s().p("AhLD5QgTgGgDgTIg5lEQgCgKADgLIAkiBIEQAAIABEYIjHDTQgKAKgMAAIgKgCg");
	this.shape_23.setTransform(106.8,206.4,0.667,0.667);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F1A83D").s().p("AhVD2QgmgLgGgoIg0lVQgDgSAIgRQAIgRAPgKIA+goIEQAAIABDuQAAAMgIAIIjCDaQgTAVgZAAQgKAAgLgDg");
	this.shape_24.setTransform(105,213.8,0.667,0.667);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FEFEA5").s().p("AgzAsQAVgfAKgTQAQgfAEgSQAKABALAHQANAHAHAMQAJANACAPQABAPgGANQgNAYgjAEIgJAAQgYAAgRgMg");
	this.shape_25.setTransform(114.2,216.6,0.667,0.667);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEFEA5").s().p("AgIA5QgegEgRgTQApgjAmg4QAVAPAHAdQAKAggSAVQgJALgPAEQgJADgJAAIgKgBg");
	this.shape_26.setTransform(109.1,223.4,0.667,0.667);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FEFEA5").s().p("AgSAyQgWgHgFgRQgFgOAIgMQAEgHANgKIAAAAQAFAAAJgEQAQgHAagXQASATgBAdQABAlgfAOQgJAEgKAAQgIAAgJgCg");
	this.shape_27.setTransform(103.3,229.1,0.667,0.667);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEFEA5").s().p("AgZAtQgNgGgFgNQgGgLADgOQADgMAKgLQARgWAYgGQAPA1AZAeQgTASgcAAQgNAAgNgGg");
	this.shape_28.setTransform(97.1,227,0.667,0.667);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEFEA5").s().p("AATA1QgPgBgLgFQgOgFgJgJQgKgKgCgLQgDgWAagVQAWgTAXgCQAGA/ALApQgIABgJAAIgHAAg");
	this.shape_29.setTransform(94.8,220.1,0.667,0.667);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FEFEA5").s().p("AgJArQgdgPgBgXQgCgVAbgUQAXgRAXgBQACAvAGA+IgGAAQgVAAgWgMg");
	this.shape_30.setTransform(93.9,212.9,0.667,0.667);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FEFEA5").s().p("AgLAnQgcgSABgWQAAgXAdgQQAXgPAZACQgEAxACA6IgDAAQgWAAgXgPg");
	this.shape_31.setTransform(93.6,205.6,0.667,0.667);

	this.instance_1 = new lib.ClipGroup_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(146.3,295.6,0.667,0.667,0,0,0,127.4,158.9);

	this.instance_2 = new lib.ClipGroup_6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-78.2,175.4,0.667,0.667,0,0,0,1543.1,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(180));

	// hand
	this.instance_3 = new lib.women_hand_right("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(94.9,251.6,1,1,0,0,0,35.4,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(180));

	// legs
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#467495").s().p("Ai1PGQgKicgKi7QgUl0AAiXQAAjkAEkiQAFlFAFgmQAQhuBJg5QBBg0BTAHQBUAGA2A8QA7BBgGBkQgKCOgIE6QgIEzgHBjIg9NiQgRAdh7AAQh9AAgrgdg");
	this.shape_32.setTransform(182,375.3,0.775,0.775);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#693B39").s().p("AjPB/QhQAAAQg1QAKghAhgeQA5gyBLgwQAmgYAagOIEzAAIAADDQAAA4hAABg");
	this.shape_33.setTransform(170.5,459.9,0.775,0.775);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F4BC98").s().p("AjBB4Qg+gDAIgkQAHgeAogXQAsgZBegvQAlgUAAg3IESAAIgEBSQgEBWAAAVQAAAyg5AAg");
	this.shape_34.setTransform(171,459,0.775,0.775);

	this.instance_4 = new lib.Group();
	this.instance_4.parent = this;
	this.instance_4.setTransform(112.6,371,0.775,0.775,0,0,0,21.1,94.5);
	this.instance_4.alpha = 0.301;

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#467495").s().p("AisOWQgJiVgKixQgTlhAAiPQAAjdAEkPQAEk1AGglQAPhoBFg3QA+gxBPAHQBPAGA0A4QA4A+gGBfQgJCIgIEqQgHEkgHBeIg6M2QgQAbh1AAQh2AAgqgbg");
	this.shape_35.setTransform(112.6,371.1,0.775,0.775);

	this.instance_5 = new lib.Group_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(101.7,451.5,0.775,0.775,0,0,0,26.2,12.2);
	this.instance_5.alpha = 0.301;

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#693B39").s().p("AjFB4QhMAAAPgxQAKggAfgcQA2gwBIguQAjgXAZgNIEkAAIAAC5QAAA2g9AAg");
	this.shape_36.setTransform(101.7,451.5,0.775,0.775);

	this.instance_6 = new lib.Group_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(102.2,450.6,0.775,0.775,0,0,0,23.8,11.4);
	this.instance_6.alpha = 0.301;

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F4BC98").s().p("Ai3ByQg8gDAIgiQAHgdAmgWQAkgUBfgwQAjgSAAg1IEEAAIgHCyQAAAxg3AAg");
	this.shape_37.setTransform(102.2,450.6,0.775,0.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.instance_6},{t:this.shape_36},{t:this.instance_5},{t:this.shape_35},{t:this.instance_4},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]}).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,263.2,469.8);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_6 = function() {
		this.parent.playSfx();
	}
	this.frame_26 = function() {
		this.parent.initContentButton();
	}
	this.frame_179 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(20).call(this.frame_26).wait(153).call(this.frame_179).wait(1));

	// startnow
	this.b1 = new lib.Symbol2_1();
	this.b1.parent = this;
	this.b1.setTransform(-0.2,216.8,1.965,0.419,0,0,0,-0.1,0.1);
	new cjs.ButtonHelper(this.b1, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAmB1IgjiFQgDAPgFAYIgcBnQgIAHgLADQgNAFgSAAQgTAAgRgHQgQgHgEgLQgHgNgHgdIgOg/IgZiEQAIgHAMgGQANgGANAAQATAAAMAJQALAIACAVIAVCbIADAAIAFgaIAfiGQAJgFAMgFQAKgDAOAAQARAAAOAGQANAGADANIAkCUIACAAIAWi1QAJgGALgDQALgDAJAAQATAAALAIQAMAJABAUQAAAJgEASIglCtQgDAPgGAOQgHAHgPADQgPAFgRAAQgrAAgIgYg");
	this.shape.setTransform(65,221.3,0.667,0.667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2CFQgZgKgSgSQgSgUgKgZQgKgcAAggQAAgfAKgcQAKgZASgUQASgSAZgKQAZgKAdAAQAfAAAYAKQAZAKASATQASASAKAbQAKAbAAAfQAAAigKAbQgKAbgSASQgTATgYAJQgYAJgfAAQgdAAgZgKgAghgyQgLARAAAhQAAAiAMASQAMASAVAAQAVAAAMgTQAMgSAAghQAAgggMgSQgMgSgWAAQgVAAgMASg");
	this.shape_1.setTransform(41.2,221.2,0.667,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA0CnQgRgHgLgXIhOizIgDABIADA8IAACTIgRAEIgYABIgUgBQgJgDgFgFQgFgDgEgKQgDgIAAgPIAAkUQAHgLAPgFQAOgFASAAQAUAAARAGQASAHAJAWIBPCzIACgBIgCg7IgBiWQAIgCAKgBIAXgBQAWAAAMAIQAMAJAAAbIAAEbQgHAIgOAFQgOADgTAAQgTAAgRgFg");
	this.shape_2.setTransform(19.4,219,0.667,0.667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag4CSQgZgWAAgyIAAjsIARgEQAJgCANAAQAXAAAMAJQAMAJAAAbIAAAkIBEAAIAGAPQADAKAAAKQAAATgIAJQgJAJgNAAIgvAAIAABSQAAAPAJAGQAJAGAPAAIAQgBIAPgEIAIAOQADAJAAAJQAAAVgPANQgPAOglAAQgsAAgZgXg");
	this.shape_3.setTransform(-5.7,219.5,0.667,0.667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7CLQgIgBgHgFQgGgFgEgJQgDgIAAgOIAAimQAAgLAEgLQAEgJAJgHQAJgIALgFQANgGANgEQALgEARgDQARgDANAAQAZAAAPALQAOAKAAAXIgCAPIgFAOIgWABIgrAIQgJACgHAEIAAC8IgQADQgLACgMAAg");
	this.shape_4.setTransform(-19.5,221.1,0.667,0.667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwCKQgWgFgQgMQgQgLgJgRQgIgSAAgWQAAgnAVgTQAVgUAtgFIBDgIIAAgEQAAgQgNgHQgNgHgZAAQgTAAgTAFQgTAEgOAHQgIgGgEgKQgFgLAAgKQAAgOAHgJQAGgIAOgHQAQgGATgCQAVgDASAAQAbAAAXAGQAWAFARANQARANAIATQAJATAAAaIAAB7QAAAPgHAJQgIAJgKAHQgiAVg9AAQgZAAgXgFgAgBAaQgQACgIAFQgJAFAAAMQAAALAIAHQAIAHASAAIATgCQAMgDAEgDIAAgsg");
	this.shape_5.setTransform(-37,221.2,0.667,0.667);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag4CSQgZgWAAgyIAAjsIARgEQAJgCANAAQAXAAANAJQALAJAAAbIAAAkIBEAAIAGAPQADALAAAJQAAAUgIAIQgIAJgOAAIgvAAIAABSQAAAPAJAGQAIAGAQAAIAQgBIAOgEQAFAGADAIQAEAHAAALQAAAVgPANQgPAOglAAQgsAAgZgXg");
	this.shape_6.setTransform(-52.5,219.5,0.667,0.667);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag3CtQgWgFgOgHQgPgIgJgMQgIgLgBgQQABgRAIgLQAJgMAKgFQAOAMAWAJQAVAJAYgBQAYAAALgIQALgIAAgLQAAgMgJgFQgIgHgOgEIgWgIQgXgJgSgJQgRgIgPgLQgNgMgIgRQgHgRgBgYQAAgwAjgcQAhgcA8AAQAYAAASAEQATACAOAIQAOAGAHAMQAIAKAAAPQAAAOgHAKQgFALgKAGQgLgHgTgGQgTgGgXAAQgWAAgLAHQgLAHAAALQAAAHAHAGQAHAGANAEIAbAKQAwAQAbAYQAaAaAAAtQAAAvgjAdQgjAdhCAAQgXAAgVgEg");
	this.shape_7.setTransform(-69.2,219,0.667,0.667);

	this.instance = new lib.ClipGroup_1_0();
	this.instance.parent = this;
	this.instance.setTransform(229.2,0,0.667,0.667,0,0,0,1543.1,540);

	this.instance_1 = new lib.ClipGroup_2_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,216.7,0.667,0.667,0,0,0,171.3,43.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.b1}]},24).wait(156));

	// man
	this.instance_2 = new lib.manstanding("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(229.3,0,1,1,0,0,0,784.9,182);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(180));

	// women
	this.instance_3 = new lib.woman("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(439,61.7,1,1,0,0,0,131.6,237);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(180));

	// title
	this.instance_4 = new lib.title();
	this.instance_4.parent = this;
	this.instance_4.setTransform(2.7,-61.9,1,1,0,0,0,223.2,106.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({y:38.1,alpha:1},10).to({y:18.1},10).wait(156));

	// logo
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0B0B0B").s().p("AAFBDIAAhnIANAAIAAAKQADgFAEgDQAHgEAIAAQANAAAKAJQAIALAAARQAAAYgNAKQgHAHgMAAQgIAAgGgDIgHgIIAAAmgAAUgOQgDAHAAAKQAAAIADAGQAFAMANAAQAJAAAFgHQAHgHgBgPQAAgIgCgGQgFgNgNAAQgNAAgFANgAhKBDIAAhnIANAAIAAAKQADgFAFgDQAGgEAIAAQANAAAKAJQAIALAAARQAAAYgNAKQgHAHgMAAQgIAAgGgDIgHgIIAAAmgAg7gOQgDAHAAAKQAAAIADAGQAFAMANAAQAIAAAHgHQAFgHAAgPQAAgIgCgGQgFgNgNAAQgNAAgFANgAjyAfQgLgKAAgRIAOAAQAAAJADAGQAHAKARAAQAIAAAFgDQAMgEABgLQAAgIgGgDQgEgEgMgCIgNgDQgNgDgFgEQgKgGAAgNQAAgOAJgJQAKgIARgBQAPABALAHQALAIAAARIgNAAQgBgIgDgFQgHgHgOgBQgLABgGAFQgFAFAAAGQAAAIAGADQAEADAOADIAOADQAKADAFAEQAKAHAAANQAAARgMAHQgMAHgQAAQgTABgKgKgAEwAeQgJgLAAgRQAAgSAJgMQAKgKAQgBQAOAAAKAKQALAKgBASQABASgKAMQgIALgTAAQgPAAgJgKgAE5gTQgFAJAAAMQAAALAFAJQAFAHALABQANAAAEgKQAFgJAAgLQAAgLgDgGQgGgLgMAAQgMABgFAIgABbAeQgJgLAAgRQAAgSAJgMQAJgKARgBQAOAAAKAKQAKAKAAASQAAASgJAMQgJALgSAAQgQAAgIgKgABkgTQgGAJAAAMQAAALAGAJQAFAHALABQANAAAEgKQAEgJABgLQAAgLgDgGQgGgLgMAAQgMABgFAIgAiWAdQgDgGgBgKIAAgyIAOAAIAAAyQgBAFACAEQAEAGAIABQANAAAEgNQADgFAAgLIAAglIAMAAIAABLIgLAAIAAgMIgGAHQgHAHgKAAQgQAAgFgLgADsAnQgJgBgEgEQgDgFAAgHIAAgwIgKAAIAAgLIAKAAIAAgUIANAAIAAAUIAMAAIAAALIgMAAIAAAwQAAAEADABIAEABIADAAIACAAIAAAKIgFABgAGAAmIAAhAIgKAAIAAgKIAKAAIAAgMQAAgHADgEQAEgGANgBIAFAAIAAAMIgEAAQgGAAgBADQgBADAAAMIAMAAIAAAKIgMAAIAABAgACnAmIAAhLIANAAIAAAOQABgEAFgFQAHgGAHAAIABAAIADAAIAAAOIgEAAQgJAAgGAFQgFAGAAAJIAAAqgAlEAmIAAgvQAAgGgCgFQgDgGgJgBIgIACQgFABgEAEQgDAEAAAEIgBALIAAAnIgOAAIAAhLIAMAAIAAAMQAGgHAGgDQAGgDAHAAQAQAAAGALQADAGAAALIAAAwgAmZAmIAAhmIAPAAIAABmg");
	this.shape_8.setTransform(168,-255.6);

	this.instance_5 = new lib.ClipGroup_9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(229.2,0,0.667,0.667,0,0,0,1543.1,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.shape_8}]}).wait(180));

	// bg
	this.instance_6 = new lib.ClipGroup_7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(12,0,0.667,0.667,0,0,0,1217.3,540);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B9A699").s().p("EgOvAxHMAAAhiNIdfAAMAAABiNg");
	this.shape_9.setTransform(577.1,-16.4,0.667,0.667);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D6C3C1").s().p("EiV/ALAIAA1/MEr/AAAIAAV/g");
	this.shape_10.setTransform(0,313.1,0.667,0.667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFE0").s().p("Eh+tBJYMAAAiSvMD9bAAAMAAACSvg");
	this.shape_11.setTransform(-99.3,-46.9,0.667,0.667);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FCEDCB").s().p("EgYSBJYMAAAiSvMAwlAAAMAAACSvg");
	this.shape_12.setTransform(536.4,-46.9,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_6}]}).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-799.5,-360,2057.6,720);


// stage content:
(lib.scene1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		createjs.Touch.enable(stage, true, true);
		
		var audioPath = "audio/";
		var sounds = [
			{src:{mp3:"notification.mp3", ogg:"notification.ogg"}, id:"audio_notification"}
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
				window.location = "../scene2/scene2.html";
			});
		}
		
		this.playSfx = function () {
			createjs.Sound.play("audio_notification");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.mc_main = new lib.Symbol4();
	this.mc_main.parent = this;
	this.mc_main.setTransform(1280,720,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.mc_main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480.5,360,2057.6,720);
// library properties:
lib.properties = {
	id: '44376C3DE64D4279886B6BAA1ABA0160',
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
an.compositions['44376C3DE64D4279886B6BAA1ABA0160'] = {
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