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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{scaleY:0.667,y:126}},{t:this.shape_4,p:{x:116.1,y:116.9}},{t:this.shape_3,p:{scaleY:0.667,y:120}},{t:this.shape_2,p:{x:52.3,y:110.9}},{t:this.shape_1,p:{y:87.9}},{t:this.shape,p:{y:79.4}}]}).to({state:[{t:this.shape_5,p:{scaleY:0.423,y:124.9}},{t:this.shape_4,p:{x:116,y:120.3}},{t:this.shape_3,p:{scaleY:0.423,y:121.1}},{t:this.shape_2,p:{x:52.1,y:114.3}},{t:this.shape_1,p:{y:86.7}},{t:this.shape,p:{y:78.2}}]},59).to({state:[{t:this.shape_7},{t:this.shape_4,p:{x:116,y:120.3}},{t:this.shape_6},{t:this.shape_2,p:{x:51.8,y:116}},{t:this.shape_1,p:{y:83.9}},{t:this.shape,p:{y:77.2}}]},2).to({state:[{t:this.shape_5,p:{scaleY:0.423,y:124.9}},{t:this.shape_4,p:{x:116,y:120.3}},{t:this.shape_3,p:{scaleY:0.423,y:121.1}},{t:this.shape_2,p:{x:52.1,y:114.3}},{t:this.shape_1,p:{y:86.7}},{t:this.shape,p:{y:78.2}}]},38).to({state:[{t:this.shape_5,p:{scaleY:0.667,y:126}},{t:this.shape_4,p:{x:116.1,y:116.9}},{t:this.shape_3,p:{scaleY:0.667,y:120}},{t:this.shape_2,p:{x:52.3,y:110.9}},{t:this.shape_1,p:{y:87.9}},{t:this.shape,p:{y:79.4}}]},3).to({state:[]},49).wait(29));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11,p:{y:120.9}},{t:this.shape_10,p:{y:127.8}},{t:this.shape_9,p:{scaleX:0.667,x:36}},{t:this.shape_8,p:{x:36.8,y:117.4}}]}).to({state:[{t:this.shape_11,p:{y:122.8}},{t:this.shape_10,p:{y:130}},{t:this.shape_9,p:{scaleX:0.813,x:37.8}},{t:this.shape_8,p:{x:38.5,y:117.8}}]},59).to({state:[{t:this.shape_11,p:{y:122.8}},{t:this.shape_10,p:{y:130}},{t:this.shape_9,p:{scaleX:0.813,x:37.8}},{t:this.shape_8,p:{x:38.5,y:117.8}}]},2).to({state:[{t:this.shape_11,p:{y:122.8}},{t:this.shape_10,p:{y:130}},{t:this.shape_9,p:{scaleX:0.813,x:37.8}},{t:this.shape_8,p:{x:38.5,y:117.8}}]},38).to({state:[{t:this.shape_11,p:{y:120.9}},{t:this.shape_10,p:{y:127.8}},{t:this.shape_9,p:{scaleX:0.667,x:36}},{t:this.shape_8,p:{x:36.8,y:117.4}}]},3).to({state:[]},49).wait(29));

	// mouth
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#B75F53").ss(6.3,1,1).p("ADigmQgkAthHAaQhCAZhKgBQhMgBg2gcQg7gdgOg3");
	this.shape_12.setTransform(86.3,164.6,0.667,0.667);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#B75F53").ss(3.2,1,1).p("AhBhLQA3ARAoAqQAuAvgNAs");
	this.shape_13.setTransform(106.7,157.7,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13,p:{x:106.7,y:157.7}},{t:this.shape_12,p:{scaleX:0.667,x:86.3,y:164.6}}]}).to({state:[{t:this.shape_13,p:{x:108.2,y:157.7}},{t:this.shape_12,p:{scaleX:0.741,x:86.4,y:164.6}}]},59).to({state:[{t:this.shape_13,p:{x:108.8,y:156.7}},{t:this.shape_12,p:{scaleX:0.741,x:86.4,y:162.6}}]},2).to({state:[{t:this.shape_13,p:{x:108.2,y:157.7}},{t:this.shape_12,p:{scaleX:0.741,x:86.4,y:164.6}}]},38).to({state:[{t:this.shape_13,p:{x:106.7,y:157.7}},{t:this.shape_12,p:{scaleX:0.667,x:86.3,y:164.6}}]},3).to({state:[]},49).wait(29));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).to({state:[]},151).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,263.2,200.3);


(lib.txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQBTQgHgHAAgLQAAgLAHgHQAFgHALAAQAMAAAFAHQAHAHAAALQAAALgHAHQgFAHgMAAQgLAAgFgHgAAAAbQgHAAgEgBQgFgDgCgHIgEhjQAFgDAGgCIALgBQAKAAAGAFQAGAEAAALIgDBFQgCAOgCAKIgCACIgJABg");
	this.shape.setTransform(615.9,67.8,0.667,0.667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaBAQgMgEgJgKQgIgJgFgMQgFgMAAgRQAAgOAFgNQAGgNAHgKQAJgIAMgFQAMgFAOAAQAPAAAMAFQAKAEAKAKQAKAJADANQAGAMAAAPQAAASgGALQgEANgJAKQgJAIgLAEQgNAFgOAAQgOAAgMgFgAgPgYQgGAJAAAPQAAAQAGAJQAFAJAKAAQAKAAAHgJQAFgKAAgPQAAgPgGgJQgFgJgLAAQgKAAgFAJg");
	this.shape_1.setTransform(608.5,69.2,0.667,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaBAQgMgEgIgKQgJgJgFgMQgFgMABgRQgBgOAFgNQAFgNAJgKQAIgIAMgFQAMgFAOAAQAPAAAMAFQAKAEAKAKQAJAJAFANQAEAMAAAPQAAASgEALQgFANgJAKQgJAIgLAEQgNAFgOAAQgOAAgMgFgAgQgYQgFAJAAAPQAAAQAGAJQAGAJAJAAQAKAAAHgJQAFgKAAgPQAAgPgGgJQgFgJgLAAQgKAAgGAJg");
	this.shape_2.setTransform(598.7,69.2,0.667,0.667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaBGQgMgKAAgYIAAhyIAIgCIALAAQALAAAGAEQAEAEAAANIAAARIAhAAIADAIIABAJQAAAKgDAEQgFAEgFAAIgYAAIAAAoQAAAGAFADQAEADAHAAIAIAAIAHgCIAEAHQABADAAAFQAAAKgGAHQgHAGgSAAQgWAAgLgLg");
	this.shape_3.setTransform(590.7,68.3,0.667,0.667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgmBTQgHgHgBgLQAIgFAIgJQAJgJAFgIQgCAAgHgGQgEgFgGgNIgGgPIgVhLQADgEAGgDQAFgCAIAAQAJAAAFADQAGAFADAKIATBJIABAAIAUhWQAJgFALAAQAJAAAGAEQAFADAAALIgBARIgFAUIggBRQgGAMgHAJQgGAJgGAFQgFAEgFACQgHACgEAAQgKAAgHgHg");
	this.shape_4.setTransform(579.2,70.7,0.667,0.667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGBZQgFgCgDgCQgDgCgBgEQgCgEAAgHIAAiaIATgCIAJABIAHACQADACACAFQABAEAAAHIAACaIgIACIgLABIgIgBg");
	this.shape_5.setTransform(572.3,67.7,0.667,0.667);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgwBaQgFgBgDgCQgCgCgCgFQgCgEAAgHIAAh/QAAgHADgFQAEgFAEgDQAGgEANgFQAMgDAOAAQANAAAOAEQAOAFAIAIQAKAJAFANQAFAMAAASQAAASgFALQgFAOgHAIQgJAJgLAEQgLAEgPAAQgKAAgJgDIAAAsIgTADIgKgBgAgNg1IgGADIAAA6IAGACIAIABQAYAAAAggQAAgQgGgJQgHgIgKAAg");
	this.shape_6.setTransform(565.3,70.6,0.667,0.667);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgwBaQgFgBgDgCQgCgCgCgFQgCgEAAgHIAAh/QAAgHADgFQACgEAGgEQAGgEANgFQAMgDAOAAQANAAAOAEQAOAFAIAIQAJAIAFAOQAGANAAARQAAASgFALQgEANgJAJQgIAJgLAEQgMAEgOAAQgLAAgIgDIAAAsIgUADIgJgBgAgNg1IgHADIAAA6IAHACIAHABQAZAAAAggQAAgRgGgIQgGgIgMAAg");
	this.shape_7.setTransform(555.5,70.6,0.667,0.667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXBCQgJgBgJgHQgHgEgFgJQgEgJAAgKQAAgTAKgIQAKgKAWgDIAggEIAAgBQAAgIgHgEQgGgDgLAAQgKAAgJACIgQAGQgDgDgCgFQgDgFAAgFQAAgHAEgEQACgEAHgDQAIgEAKgBIASgBQAMAAAMADQALADAIAGQAIAGADAJQAFAJAAANIAAA7QAAAGgEAFQgCAEgHAEQgPAKgeAAQgOAAgJgDgAAAANQgHAAgEADQgFADAAAFQAAAGAEACQADAEAJAAIAJgBIAIgDIAAgVg");
	this.shape_8.setTransform(545.8,69.2,0.667,0.667);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZBAQgOgFgHgJQgJgJgFgMQgEgOgBgPQABgNAEgOQAFgNAJgKQAHgIAOgFQAMgFANAAQAPAAAMAFQALAFAKAJQAJAJAEANQAEANAAAOQAAARgEAMQgEANgJAKQgJAIgMAEQgMAFgPAAQgNAAgMgFgAgPgYQgGAJAAAPQAAAQAGAJQAGAJAKAAQAKAAAGgJQAFgIAAgRQAAgQgFgIQgHgJgKAAQgJAAgGAJg");
	this.shape_9.setTransform(533.2,69.2,0.667,0.667);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgbBGQgMgKAAgYIAAhyIAJgCIAKAAQALAAAGAEQAFAEABANIAAARIAgAAIADAIQACAEAAAFQAAAKgFAEQgDAEgHAAIgWAAIAAAoQAAAGADADQAFADAHAAIAIAAIAHgCIAEAHQABADABAFQgBAKgGAHQgIAGgSAAQgWAAgLgLg");
	this.shape_10.setTransform(525.2,68.3,0.667,0.667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgSBBQgMgEgKgJQgKgKgEgNQgGgMAAgSQAAgTAGgMQAFgMAIgIQAKgJAKgDQAKgEANAAQANAAALAEQAKAEAJAIQAHAIAEAKQAFALAAALQAAAKgFADQgFAGgIABIg9AKQADAIAIAFQAHAEAMAAQALAAAIgDQALgDAEgDQAEACADAGQACADAAAHQAAALgKAHQgHAEgLABIgSACQgOAAgNgEgAgIghIgHAGQgEAEAAADIgCAIIAqgHQAAgFgFgGQgFgFgJAAQgEAAgGACg");
	this.shape_11.setTransform(513.8,69.2,0.667,0.667);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHBZQgFgCgCgCQgDgCgCgEQgBgEAAgHIAAiaIATgCIAJABIAHACIAFAHQABAEAAAHIAACaIgIACIgLABIgJgBg");
	this.shape_12.setTransform(506.8,67.7,0.667,0.667);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AggBXQgKgEgJgHQgLgIAAgNIAAiOIAIgCIALAAIAKAAIAHADQADACACAFQABAEAAAHIAAAaIAMgDIAMgBQAMgBAKAFQAKAEAJAJQAJAKAEALQAFANAAAQQAAASgFANQgEAMgJAJQgKAJgMAFQgLADgQAAQgRAAgLgDgAgMgKIgIADIAAA6QADACAEABQAEABAFAAQALAAAGgJQAHgHAAgSQAAgRgHgGQgHgJgJAAg");
	this.shape_13.setTransform(499.8,67.7,0.667,0.667);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGBfQgFgBgDgCQgDgDgBgEQgCgDAAgHIAAhsIAIgBIALgBIAJAAQADABAEADQADACACAEQABAEAAAHIAABrIgIACIgLABIgIgBgAgQg2QgGgIAAgJQAAgKAGgHQAHgHAJAAQALAAAGAHQAGAHAAAKQAAAKgGAHQgHAHgKAAQgJAAgHgHg");
	this.shape_14.setTransform(492.3,67.2,0.667,0.667);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgmBVQgNgHAAgPQAAgGACgFQADgFADgCQAHAFAJADQAJADAKAAQALAAAKgFQAHgFABgLIAAgEQgLAFgOAAQgLAAgKgEQgKgDgHgIQgJgHgEgNQgFgLABgQQAAgRAEgMQAFgLAJgJQAIgHAMgEQALgEAOAAQAQAAAKAEQANAEAHAGQAEADAEAFQACAEAAAIIAABcQAAAPgEAKQgGAKgIAHQgJAHgLADQgLADgOAAQgVAAgOgGgAgLgvQgHAHAAAOQAAAPAHAHQAGAGAJAAQAKAAAGgEIAAgyIgGgCIgIgBQgLAAgGAIg");
	this.shape_15.setTransform(485.1,70.6,0.667,0.667);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHBfQgFgBgCgCQgDgDgCgEQgBgDAAgHIAAhsIAIgBIALgBIAJAAQADABAEADQADACACAEQABAEAAAHIAABrIgIACIgLABIgJgBgAgQg2QgGgHAAgKQAAgLAGgGQAGgHAKAAQALAAAGAHQAGAGAAALQAAAKgGAHQgGAHgLAAQgKAAgGgHg");
	this.shape_16.setTransform(478.2,67.2,0.667,0.667);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgGBZQgFgCgDgCQgDgCgBgEQgCgEAAgHIAAiaIATgCIAJABIAHACQADACACAFQABAEAAAHIAACaIgIACIgLABIgIgBg");
	this.shape_17.setTransform(473.5,67.7,0.667,0.667);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgSBBQgMgEgKgJQgJgKgGgNQgFgMAAgSQAAgTAFgMQAFgMAJgIQAKgJAKgDQALgEAMAAQANAAALAEQAKAEAJAIQAHAIAFAKQAEALAAALQAAAKgFADQgFAGgIABIg9AKQADAIAJAFQAGAEAMAAQAMAAAHgDQALgDAEgDQAEACADAGQACADABAHQAAALgLAHQgHAEgLABIgSACQgNAAgOgEgAgIghIgHAGQgEAEAAADIgCAIIAqgHQgBgFgFgGQgEgFgJAAQgEAAgGACg");
	this.shape_18.setTransform(466.6,69.2,0.667,0.667);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgSBBQgMgFgJgIQgKgKgGgNQgFgOAAgQQAAgRAFgOQAFgLAKgJQAIgJALgDQALgEAMAAQAMAAAMAEQAMAFAGAHQAJAHAEALQAEALAAALQAAAKgEADQgGAGgIABIg9AKQADAIAJAFQAGAEAMAAQAMAAAIgDQAKgDAFgDQAEACACAGQADAEAAAGQAAALgLAHQgHAEgLABIgTACQgNAAgNgEgAgIghQgEACgDAEIgEAHIgCAIIAqgHQgBgGgFgFQgEgFgJAAQgEAAgGACg");
	this.shape_19.setTransform(454.1,69.2,0.667,0.667);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgcBDQgFgBgCgCQgDgDgCgEQgCgDAAgHIAAhQQAAgFADgFQABgDAFgFQADgDAHgEIAMgEIANgEIAPgBQALAAAIAFQAHAGAAALIgBAGIgDAHIgfAFIgIADIAABZIgHACIgLABIgKgBg");
	this.shape_20.setTransform(446.4,69.1,0.667,0.667);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgXBCQgKgBgIgHQgIgFgDgIQgFgIAAgLQAAgTALgIQAJgKAWgDIAggEIAAgBQAAgJgHgDQgGgDgLAAQgKAAgJACQgJADgHADQgDgDgCgFQgDgGAAgEQAAgGAEgFQADgFAHgCQAIgEAJgBIASgBQANAAALADQAKADAJAGQAIAGAEAJQAEAIAAAOIAAA7QAAAHgEAEQgDAFgFADQgRAKgdAAQgOAAgJgDgAAAANQgHAAgEADQgFADAAAFQAAAFAEADQAEAEAIAAIAJgBQAFAAADgDIAAgVg");
	this.shape_21.setTransform(437.9,69.2,0.667,0.667);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgWBAQgLgDgIgHQgJgHgEgKQgFgKAAgPIAAhMIAIgCIALAAIAKAAQAEABAEADQADACABAEQACAEAAAHIAAA5QAAAKAFAFQAFAFAIAAIAKgBIAFgCIAAhdIAIgCIALAAIAKAAQAEABAEADQADACABAEQACAEAAAHIAABQQAAAOgLAGQgIAGgMADQgMADgPAAQgMAAgMgDg");
	this.shape_22.setTransform(425.4,69.3,0.667,0.667);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgaBAQgLgEgKgKQgIgJgFgMQgEgMgBgRQABgOAEgNQAFgNAIgKQAKgIALgFQAMgFAOAAQAPAAALAFQALAEALAKQAIAJAEANQAFAMABAPQgBASgFALQgEANgIAKQgKAIgMAEQgMAFgOAAQgOAAgMgFgAgPgYQgGAJAAAPQAAAQAGAJQAGAJAJAAQALAAAFgJQAGgKAAgPQAAgPgGgJQgGgJgKAAQgKAAgFAJg");
	this.shape_23.setTransform(415.7,69.2,0.667,0.667);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgmBTQgHgHgBgLQAIgFAIgJQAJgJAFgIQgCAAgHgGQgEgFgGgNIgGgPIgVhLQADgEAGgDQAFgCAIAAQAJAAAFADQAGAFADAKIATBJIABAAIAUhWQAJgFALAAQAJAAAGAEQAFADAAALIgBARIgFAUIggBRQgGAMgHAJQgGAJgGAFQgFAEgFACQgHACgEAAQgKAAgHgHg");
	this.shape_24.setTransform(406.2,70.7,0.667,0.667);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgcAgQAGgOAEgTIAGgfIAKgFIALgBQAIAAAGAEQAGADAAAKIgCANIgJAaIgHAKQgDAFgGAEQgDACgIAAQgLAAgIgHg");
	this.shape_25.setTransform(396,72.9,0.667,0.667);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgYBoQgFgFgDgEIALgUIAIgWQADgLACgOQABgNAAgPQAAgOgBgOQgCgOgDgLQgDgKgFgLQgFgMgGgIQAEgFAEgDQAFgFAHAAQALABAFAGQAIAIAEAIQAIAOAEAWQAEAUAAAcQAAAcgEAVQgEAVgIAPQgEAIgIAHQgFAIgLgBQgGAAgGgDg");
	this.shape_26.setTransform(391.4,68.8,0.667,0.667);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgdBTQgKAAgHgHQgGgGAAgMIAAiJIAUgDIALABQADABAEADQACACACAEQACAFAAAHIAABoIA4AAIADAIQACAFAAAFQAAAMgEAEQgEAEgIAAg");
	this.shape_27.setTransform(385.2,68,0.667,0.667);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AghBUIgMgCIgLgDQgOgFAAgPIAAh8QAAgFADgDIAIgFQAKgEANgBIAVgBQAUAAAPAFQAQAFALAKQALALAGAQQAHAQAAAVQAAAWgGAPQgHARgKAKQgLALgQAFQgPAFgSAAgAgaguIAABcIAOACQAHAAAIgDQAHgDAFgFQAFgFADgKQADgJAAgMQAAgXgLgNQgKgMgRAAg");
	this.shape_28.setTransform(375.3,68.1,0.667,0.667);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAoBTQgFgBgCgCQgDgCgBgEIgDgIIgEgTIgsAAIgIAiIgIACIgJABQgNAAgGgFQgGgFgBgIIABgHIAriGQAGgEAGgBQAKgDAHAAQALAAALAEQAKAEACAIIAnCPQgCAEgHACQgFACgJAAIgKgBgAgQALIAfAAIgOg0IgBAAg");
	this.shape_29.setTransform(364.3,68.1,0.667,0.667);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDBkQgIgHgEgIQgHgQgFgUQgFgYAAgZQAAgZAFgXQAFgVAHgPQAEgIAIgIQAFgGALgBQAHAAAFAFQAEADAEAFQgGAIgFAMQgFALgDAKQgDALgBAOQgCASAAAKIACAcQABAOADALIAIAWIALAUQgDAEgFAFQgGADgGAAQgKABgGgIg");
	this.shape_30.setTransform(356.8,68.8,0.667,0.667);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgmBVQgNgHAAgPQAAgFADgGQACgFACgCQAIAFAJADQAJADAKAAQAMAAAJgFQAHgFABgLIAAgEQgKAFgOAAQgMAAgKgEQgKgDgIgIQgIgJgEgLQgFgLABgQQAAgRAEgMQAFgLAJgJQAJgHAMgEQAKgEAOAAQAQAAAKAEQANAEAHAGQAEADAEAFQACAEAAAIIAABcQABAPgGAKQgEAKgJAHQgKAHgKADQgLADgNAAQgWAAgOgGgAgLgvQgGAIgBANQABAOAGAIQAGAGAJAAQAKAAAFgEIAAgyIgEgCIgJgBQgLAAgGAIg");
	this.shape_31.setTransform(345.7,70.6,0.667,0.667);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAfBDQgFgBgCgCQgDgDgCgEQgCgFAAgFIAAg+QAAgJgEgDQgFgFgHAAIgJACQgEABgEADIAABbIgIACIgLABIgKgBQgFgBgCgCQgDgDgCgEQgCgFAAgFIAAhQQAAgHADgEQADgFAFgDQAIgHAOgEQANgEAOAAQAcAAAQANQAPANAAAYIAABSIgIACIgLABIgKgBg");
	this.shape_32.setTransform(336.3,69.1,0.667,0.667);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgGBfQgFgBgDgCQgDgDgBgEQgCgFAAgFIAAhsIAIgBIALgBIAJAAQADABAEADQADACACAEQABAEAAAHIAABrIgIACIgLABIgIgBgAgQg2QgGgIAAgJQAAgKAGgHQAHgHAJAAQALAAAGAHQAGAHAAAKQAAAKgGAHQgHAHgKAAQgJAAgHgHg");
	this.shape_33.setTransform(329.1,67.2,0.667,0.667);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgPBBQgHgDgDgFIglhzQAEgDAGgDQAFgDAIAAQAJAAAFAEQAFADADALIASBNIABAAIAUhaIAKgEIAKgBQAJAAAFAEQAHAEgBAKIgBAMIgjBiQgCADgHACQgHACgJAAQgKAAgGgDg");
	this.shape_34.setTransform(322.2,69.2,0.667,0.667);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgHBfQgFgBgCgCQgDgDgCgEQgBgDAAgHIAAhsIAIgBIALgBIAJAAQADABAEADQAEACABAEQABAEAAAHIAABrIgIACIgLABIgJgBgAgQg2QgGgHAAgKQAAgLAGgGQAGgHAKAAQALAAAGAHQAGAGAAALQAAAKgGAHQgGAHgLAAQgKAAgGgHg");
	this.shape_35.setTransform(315.3,67.2,0.667,0.667);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgdBTQgKAAgHgHQgGgGAAgMIAAiJIAUgDIALABQADABAEADQACACACAEQACAFAAAHIAABoIA4AAIADAIQACAFAAAFQAAAMgEAEQgEAEgIAAg");
	this.shape_36.setTransform(309,68,0.667,0.667);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgnBTQgGgHgBgLIAPgOQAJgJAHgIQgDAAgHgGQgFgFgFgNIgHgPIgUhLQADgEAGgDQAFgCAHAAQAKAAAGADQAFAFADAKIATBJIAAAAIAVhWQAJgFALAAQAJAAAFAEQAHAEAAAKIgCARIgFAUIghBRQgFAMgIAJQgFAJgGAFQgFAEgFACQgHACgFAAQgKAAgHgHg");
	this.shape_37.setTransform(296.5,70.7,0.667,0.667);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgGBZQgFgCgDgCQgDgCgBgEQgCgFAAgGIAAiaIATgCIAJABIAHACQADACACAFQABAEAAAHIAACaIgIACIgLABIgIgBg");
	this.shape_38.setTransform(289.6,67.7,0.667,0.667);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgHBfQgFgBgCgCQgEgDgBgEQgBgDAAgHIAAhsIAIgBIALgBIAJAAQADABAEADQAEADABADQABAEAAAHIAABrIgIACIgLABIgJgBgAgQg2QgGgHAAgKQAAgLAGgGQAGgHAKAAQALAAAGAHQAGAGAAALQAAAKgGAHQgGAHgLAAQgKAAgGgHg");
	this.shape_39.setTransform(284.9,67.2,0.667,0.667);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgXBCQgJgBgJgHQgIgEgEgJQgEgJAAgKQAAgTAKgIQAKgKAWgDIAggEIAAgBQAAgIgGgEQgHgDgLAAQgLAAgHACIgQAGQgDgCgDgGQgCgGgBgEQABgHACgEQAEgFAGgCQAIgDAJgCIATgBQAMAAALADQAMADAHAGQAJAFAEAKQAEAJAAANIAAA7QAAAHgDAEIgJAIQgRAKgdAAQgOAAgJgDgAAAANQgHAAgFADQgEADAAAFQAAAFAEADQADAEAJAAIAKgBQAFAAACgDIAAgVg");
	this.shape_40.setTransform(277.8,69.2,0.667,0.667);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgiBUIgLgCIgLgDQgOgFAAgPIAAh8QAAgGADgCQAEgEAEgBQAJgEAOgBIAVgBQATAAAPAFQARAFALAKQALALAGAQQAHASAAATQAAAWgGAPQgGAQgMALQgLALgPAFQgPAFgSAAgAgaguIAABcIAOACQAIAAAGgDQAIgDAFgFQAFgFADgKQADgJAAgMQAAgXgLgNQgKgMgRAAg");
	this.shape_41.setTransform(268.2,68.1,0.667,0.667);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgfBbIgHgDQgEgDgBgEQgCgEAAgHIAAhtQAAgOAFgKQAEgKAIgGQAJgHAIgCQALgDAKAAQATAAAIAFQAJAGAAAMQAAAGgCAEIgFAGIgKgCIgMgBQgKAAgGAEQgFAEAAAJIAAAJIAoAAIACAHQACAFAAAFQAAAJgEADQgEAFgGAAIgcAAIAABUIgIACIgLABIgKgBg");
	this.shape_42.setTransform(255.8,67.5,0.667,0.667);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgaBAQgNgFgIgJQgJgJgEgMQgEgMgBgRQABgOAEgNQAEgNAJgKQAIgIANgFQAMgFAOAAQAPAAALAFQAMAFAJAJQAJAJAFANQAEAOABANQgBAPgEAOQgFANgJAKQgJAIgMAEQgMAFgOAAQgOAAgMgFgAgQgYQgFAIAAAQQAAARAFAIQAHAJAJAAQALAAAFgJQAGgJAAgQQAAgPgGgJQgGgJgKAAQgJAAgHAJg");
	this.shape_43.setTransform(247,69.2,0.667,0.667);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgWBEQgIgBgHgEQgHgEgDgEQgEgFAAgHQAAgHADgFQACgEAEgCIAQAHQAJADANAAQAHAAAEgCQAEgDAAgDQAAgEgDgDQgDgCgGgBIgIgBQgVgFgLgKQgLgIAAgTQAAgKAEgHQAEgJAIgFQAHgGAKgDQAKgDALAAIASACQAIACAGADQAFADAEAEQAEAFAAAHQAAAGgCAEIgGAHIgOgGIgKgCIgJAAQgIAAgEACQgEACAAAEQAAAEACABQADACAGACIAIACQAYAFAKAKQAKALAAAPQAAAVgOALQgPAMgaAAg");
	this.shape_44.setTransform(234.8,69.2,0.667,0.667);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgSBBQgMgEgKgJQgJgKgGgNQgFgOAAgQQAAgRAFgOQAFgMAKgIQAIgJAMgDQAJgEAMAAQANAAALAEQALAEAIAIQAIAIAFAKQAEALAAALQAAAKgEADQgHAGgHABIg9AKQADAIAIAFQAHAEAMAAQAMAAAIgDQAKgDAEgDQAEACADAGQADAEAAAGQAAALgLAHQgHAEgLABIgTACQgMAAgOgEgAgIghIgHAGIgEAHIgBAIIApgHQgBgFgEgGQgFgFgKAAQgDAAgGACg");
	this.shape_45.setTransform(226,69.2,0.667,0.667);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgHBfQgFgBgCgCQgDgDgCgEQgBgDAAgHIAAhsIAIgBIALgBIAIAAQAEABAEADQADACABAEQACAFAAAGIAABrIgIACIgLABIgJgBgAgQg2QgGgHAAgKQAAgKAGgHQAGgHAKAAQAKAAAHAHQAGAHAAAKQAAAJgGAIQgHAHgKAAQgJAAgHgHg");
	this.shape_46.setTransform(219.1,67.2,0.667,0.667);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgbBGQgMgKAAgYIAAhyIAIgCIALAAQALAAAGAEQAFAEABANIAAARIAgAAIADAIQABAEABAFQgBAKgDAEQgEAEgHAAIgWAAIAAAoQAAAHADACQAFADAHAAIAIAAIAHgCIAEAHQACAEAAAEQgBAKgHAHQgHAGgSAAQgWAAgLgLg");
	this.shape_47.setTransform(213.6,68.3,0.667,0.667);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgHBfQgFgBgCgCQgDgDgCgEQgBgDAAgHIAAhsIAIgBIALgBIAIAAQAEABAEADQADACABAEQACAFAAAGIAABrIgIACIgLABIgJgBgAgQg2QgGgHAAgKQAAgKAGgHQAGgHAKAAQAKAAAHAHQAGAHAAAKQAAAJgGAIQgHAHgKAAQgJAAgHgHg");
	this.shape_48.setTransform(207.7,67.2,0.667,0.667);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgPBBQgHgDgDgFIglhzQAEgDAGgDQAFgDAIAAQAJAAAFAEQAFADADALIASBNIABAAIAUhaIAJgEIALgBQAJAAAGAEQAGAEAAAKIgCAMIgiBiQgDADgIACQgGACgJAAQgKAAgGgDg");
	this.shape_49.setTransform(200.8,69.2,0.667,0.667);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgHBfIgHgDQgEgDgBgEQgBgDAAgHIAAhsIAIgBIALgBIAJAAQADABAEADQADACACAEQABAEAAAHIAABrIgIACIgLABIgJgBgAgQg2QgGgHAAgKQAAgLAGgGQAGgHAKAAQALAAAGAHQAGAGAAALQAAAKgGAHQgGAHgLAAQgKAAgGgHg");
	this.shape_50.setTransform(193.9,67.2,0.667,0.667);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgbBGQgMgKABgYIAAhyIAIgCIALAAQALAAAGAEQAEAEAAANIAAARIAhAAIADAIQACAEAAAFQgBAKgEAEQgDAEgHAAIgXAAIAAAoQABAGAEADQAEADAHAAIAIAAIAHgCIAEAHQABADAAAFQAAAKgGAHQgIAGgRAAQgWAAgMgLg");
	this.shape_51.setTransform(188.5,68.3,0.667,0.667);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgLBAQgOgFgIgJQgJgJgFgMQgFgNAAgPQAAgQAFgOQAFgNAKgJQAJgJAMgEQAMgEANAAQATAAAJAHQAJAHAAALQAAAGgCADIgFAIIgKgEQgGgCgHAAQgIAAgEACQgFACgEAEQgFAGgCAEQgCAHAAAHQAAARAJAIQAHAIANAAQAJAAAEgCIAKgEIAIAJQACAEAAAGQAAALgKAGQgJAGgSAAQgQAAgLgFg");
	this.shape_52.setTransform(180.8,69.2,0.667,0.667);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAoBTQgFgBgCgCQgDgCgBgEIgHgbIgtAAIgIAiIgHACIgJABQgNAAgGgFQgGgEAAgJIABgHIACgJIAnh9QAHgEAGgBQAJgDAIAAQALAAALAEQAJAEADAIIAnCPQgDAEgGACQgFACgJAAIgKgBgAgIgQQgFAQgCALIAeAAIgOg0IgBAAg");
	this.shape_53.setTransform(171.6,68.1,0.667,0.667);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAfBDQgFgBgDgCQgDgDgBgEQgCgDAAgHIAAg+QAAgJgEgDQgFgFgHAAIgJACQgFABgDADIAABbIgIACIgLABIgKgBQgFgBgDgCQgDgDgBgEQgCgDAAgHIAAhQQAAgIADgDQADgFAFgDQAIgHANgEQAOgEAOAAQAcAAAPANQAQAOAAAXIAABSIgIACIgLABIgKgBg");
	this.shape_54.setTransform(158.1,69.1,0.667,0.667);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgHBfQgFgBgCgCQgDgDgCgEQgBgDAAgHIAAhsIAIgBIALgBIAIAAQAEABAEADQADACABAEQACAFAAAGIAABrIgIACIgLABIgJgBgAgQg2QgGgHAAgKQAAgKAGgHQAGgHAKAAQAKAAAHAHQAGAHAAAKQAAAJgGAIQgHAHgKAAQgJAAgHgHg");
	this.shape_55.setTransform(150.9,67.2,0.667,0.667);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgSBBQgNgFgJgIQgKgKgFgNQgFgNAAgRQAAgSAFgNQAFgLAJgJQAJgIAMgEQAJgEAMAAQAMAAANAEQALAFAHAHQAIAHAEALQAFALAAALQAAAKgFADQgGAGgHABIg9AKQADAJAIAEQAHAEAMAAQALAAAIgDQAKgDAFgDQAEACADAGQADAEgBAGQAAALgKAHQgIAEgKABIgSACQgOAAgNgEgAgIghQgFACgCAEIgEAHIgCAIIAqgHQgBgFgEgGQgGgFgJAAQgDAAgGACg");
	this.shape_56.setTransform(140.7,69.2,0.667,0.667);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgLBAQgOgFgIgJQgJgJgFgMQgFgNAAgPQAAgQAFgOQAFgNAKgJQAJgJAMgEQAMgEANAAQATAAAJAHQAJAHAAALQAAAGgCADIgFAIIgKgEQgGgCgHAAQgIAAgEACQgFACgEAEQgFAGgCAEQgCAHAAAHQAAARAJAIQAHAIANAAQAJAAAEgCIAKgEIAIAJQACAEAAAGQAAALgKAGQgJAGgSAAQgQAAgLgFg");
	this.shape_57.setTransform(132,69.2,0.667,0.667);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAfBDIgHgDQgEgDgBgEQgCgDAAgHIAAg+QAAgJgEgDQgFgFgHAAQgEABgFABQgEABgEADIAABbIgIACIgLABIgKgBIgHgDQgEgDgBgEQgCgDAAgHIAAhQQAAgHADgEQADgFAFgDQAJgHAMgEQAOgEAOAAQAcAAAQANQAPANAAAYIAABSIgIACIgLABIgKgBg");
	this.shape_58.setTransform(123.1,69.1,0.667,0.667);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgXBCQgKgBgIgHQgHgEgFgJQgEgJAAgKQAAgTAKgIQAKgKAWgDIAggEIAAgBQAAgIgGgEQgHgDgLAAQgKAAgIACIgRAGQgCgCgDgGQgCgGgBgEQAAgHADgEQAEgFAHgCQAHgDAJgCIATgBQAMAAALADQAMADAHAGQAJAFAEAKQAEAJAAANIAAA7QAAAHgDAEIgJAIQgRAKgdAAQgOAAgJgDgAAAANQgHAAgFADQgEADAAAFQAAAFAEADQAEAEAIAAIAKgBQAEAAADgDIAAgVg");
	this.shape_59.setTransform(113.5,69.2,0.667,0.667);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgbBGQgMgKABgYIAAhyIAIgCIAKAAQAMAAAGAEQAEAEABANIAAARIAgAAIADAIQACAEAAAFQAAAKgFAEQgDAEgHAAIgWAAIAAAoQAAAGADADQAFADAHAAIAIAAIAHgCIAEAHQACADAAAFQgBAKgGAHQgIAGgSAAQgVAAgMgLg");
	this.shape_60.setTransform(106,68.3,0.667,0.667);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgWBEQgIgBgHgEQgHgEgDgEQgEgFAAgHQAAgHADgFQACgEAEgCIAQAHQAJADANAAQAHAAAEgCQAEgDAAgDQAAgEgDgDQgDgCgGgBIgIgBQgVgFgLgKQgLgIAAgTQAAgKAEgHQAEgJAIgFQAHgGAKgDQAKgDALAAIASACQAIACAGADQAFADAEAEQAEAFAAAHQAAAGgCAEIgGAHIgOgGIgKgCIgJAAQgIAAgEACQgEACAAAEQAAAEACABQADACAGACIAIACQAYAFAKAKQAKALAAAPQAAAVgOALQgPAMgaAAg");
	this.shape_61.setTransform(98.5,69.2,0.667,0.667);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgHBfIgHgDQgDgCgCgFQgBgDAAgHIAAhsIAIgBIALgBIAJAAQADABAEADQADACACAEQABAEAAAHIAABrIgIACIgLABIgJgBgAgQg2QgGgHAAgKQAAgLAGgGQAGgHAKAAQALAAAGAHQAGAGAAALQAAAKgGAHQgGAHgLAAQgKAAgGgHg");
	this.shape_62.setTransform(91.9,67.2,0.667,0.667);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgWBEQgIgBgHgEQgHgEgDgEQgEgFAAgHQAAgHADgFQACgEAEgCIAQAHQAJADANAAQAHAAAEgCQAEgDAAgDQAAgEgDgDQgDgCgGgBIgIgBQgVgFgLgKQgLgIAAgTQAAgKAEgHQAEgJAIgFQAHgGAKgDQAKgDALAAIASACQAIACAGADQAFADAEAEQAEAFAAAHQAAAGgCAEIgGAHIgOgGIgKgCIgJAAQgIAAgEACQgEACAAAEQAAAEACABQADACAGACIAIACQAYAFAKAKQAKALAAAPQAAAVgOALQgPAMgaAAg");
	this.shape_63.setTransform(85.6,69.2,0.667,0.667);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgWBEQgIgBgHgEQgHgEgDgEQgEgFAAgHQAAgHADgFQACgEAEgCIAQAHQAJADANAAQAHAAAEgCQAEgDAAgDQAAgEgDgDQgDgCgGgBIgIgBQgVgFgLgKQgLgIAAgTQAAgKAEgHQAEgJAIgFQAHgGAKgDQAKgDALAAIASACQAIACAGADQAFADAEAEQAEAFAAAHQAAAGgCAEIgGAHIgOgGIgKgCIgJAAQgIAAgEACQgEACAAAEQAAAEACABQADACAGACIAIACQAYAFAKAKQAKALAAAPQAAAVgOALQgPAMgaAAg");
	this.shape_64.setTransform(77.4,69.2,0.667,0.667);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgXBCQgJgBgJgHQgIgEgEgJQgEgJAAgKQAAgTALgIQAJgKAWgDIAggEIAAgBQAAgIgHgEQgGgDgLAAQgKAAgJACIgQAGQgCgCgDgGQgCgGAAgEQAAgHADgEQAEgFAFgCQAIgDAKgCIASgBQANAAALADQALADAIAGQAHAFAFAKQAEAJAAANIAAA7QAAAHgEAEIgIAIQgRAKgdAAQgOAAgJgDgAAAANQgHAAgEADQgFADAAAFQAAAFAEADQADAEAJAAIAJgBQAFAAADgDIAAgVg");
	this.shape_65.setTransform(68.5,69.2,0.667,0.667);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgmBVQgNgHAAgPQAAgGACgFIAGgHQAHAFAJADQAJADAKAAQALAAAJgFQAJgGgBgKIAAgEQgKAFgOAAQgMAAgJgEQgJgDgJgIQgIgIgEgMQgEgLgBgQQABgRAEgMQAFgLAJgJQAJgIALgDQAKgEAPAAQAQAAAKAEQAMAEAHAGQAGADACAFQADAEAAAIIAABcQAAANgEAMQgFAKgKAHQgIAHgMADQgLADgNAAQgVAAgOgGgAgMgvQgFAHAAAOQAAAPAFAHQAHAGAIAAQALAAAGgEIAAgyIgGgCIgIgBQgKAAgIAIg");
	this.shape_66.setTransform(55.9,70.6,0.667,0.667);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAfBDIgHgDQgDgCgCgFQgCgDAAgHIAAg+QAAgJgEgDQgEgFgIAAQgEABgFABQgEABgEADIAABbIgIACIgLABIgKgBIgHgDQgEgDgBgEQgCgDAAgHIAAhQQAAgHADgEQADgFAFgDQAJgHAMgEQAPgEANAAQAcAAAQANQAPANAAAYIAABSIgIACIgLABIgKgBg");
	this.shape_67.setTransform(46.5,69.1,0.667,0.667);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgHBfIgHgDQgDgCgCgFQgBgDAAgHIAAhsIAIgBIALgBIAJAAQADABAEADQADACACAEQABAEAAAHIAABrIgIACIgLABIgJgBgAgQg2QgGgHAAgKQAAgLAGgGQAGgHAKAAQALAAAGAHQAGAGAAALQAAAKgGAHQgGAHgLAAQgKAAgGgHg");
	this.shape_68.setTransform(39.3,67.2,0.667,0.667);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgWBWQgMgFgKgJQgIgJgFgNQgEgMgBgRQAAgSAGgLQAEgNAJgIQAIgJANgFQANgDALAAIALABIAHABIAAgrIAIgCIAMAAIAJAAIAHADQADACACAFQACAEgBAHIAAB+QABANgLAHQgIAFgLAEQgLADgPAAQgPAAgOgEgAgLgCQgIAGABARQAAASAGAHQAHAJAMAAQAFAAADgBIAFgEIAAg6QgEgDgIAAQgMAAgHAJg");
	this.shape_69.setTransform(31.9,67.7,0.667,0.667);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgSBBQgNgFgJgIQgKgKgEgNQgGgOAAgQQAAgRAGgOQAEgMAJgIQAJgJALgDQALgEAMAAQANAAALAEQAKAEAJAIQAIAJADAJQAFALAAALQAAAKgFADQgFAGgIABIg8AKQABAIAKAFQAGAEAMAAQAMAAAHgDQAKgDAGgDQADACADAGQADAEAAAGQAAALgKAHQgIAEgKABIgTACQgNAAgOgEgAgIghIgHAGIgEAHIgCAIIAqgHQgBgFgFgGQgEgFgJAAQgEAAgGACg");
	this.shape_70.setTransform(22.6,69.2,0.667,0.667);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgSBBQgNgFgJgIQgJgJgGgOQgFgNAAgRQAAgSAFgNQAGgMAJgIQAHgIAMgEQALgEAMAAQALAAAMAEQAMAFAHAHQAIAHAFALQAEALAAALQAAAKgFADQgGAGgHABIg9AKQADAJAJAEQAGAEAMAAQAMAAAHgDQAJgDAGgDQAEACADAGQADAEAAAGQAAALgLAHQgIAEgKABIgTACQgNAAgNgEgAgIghQgFACgCAEIgFAHIgBAIIAqgHQAAgFgGgGQgFgFgIAAQgEAAgGACg");
	this.shape_71.setTransform(13.5,69.2,0.667,0.667);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAfBDQgFgBgDgCQgDgDgBgEQgCgDAAgHIAAg+QAAgJgEgDQgFgFgHAAIgJACQgFABgDADIAABbIgIACIgLABIgKgBQgFgBgDgCQgDgDgBgEQgCgDAAgHIAAhQQAAgHADgEQADgFAFgDQAIgHANgEQAOgEAOAAQAcAAAPANQAQAOAAAXIAABSIgIACIgLABIgKgBg");
	this.shape_72.setTransform(4,69.1,0.667,0.667);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgcAhQAGgPAEgTIAGgfIAKgFIALgBQAIAAAGADQAGAFAAAJIgCAMIgEANIgMAYQgEAFgFADQgDADgIAAQgLAAgIgGg");
	this.shape_73.setTransform(526.3,52.9,0.667,0.667);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AARBTIgHgDQgDgCgCgEQgBgDAAgHIAAgPIg+AAQgGgDgEgGQgDgGAAgKIABgLQABgGADgEIA8hSIAKgCIALgBIAMABIAKAEQAEAEACAEQACAEABAIIAABGIAWAAIADAHIACALQgBAKgEAEQgEAEgHAAIgLAAIAAAgIgIABIgLABIgKAAgAgaANIAgAAIAAgyIgBAAg");
	this.shape_74.setTransform(519.7,48.1,0.667,0.667);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgsBAQgQgVAAgnQAAgWAFgQQAFgSAJgKQAKgMANgFQALgFAQAAQAUAAALAFQALAGAAAMQAAAFgDAGQgCAFgDADQgGgDgJgCQgGgCgHAAQgPAAgHAJQgIAIgDAQQAGgEAHgDQAIgDAIAAQAYAAANAOQANAOAAAaQAAAMgDAKQgEAJgIAJQgIAJgKAEQgLAEgPAAQgcAAgSgVgAgIAKQgEABgEAFIAAAHQAAAOAFAGQAGAGAHAAQAJAAADgGQAFgFAAgKQAAgJgFgGQgEgFgIAAQgDAAgHACg");
	this.shape_75.setTransform(509.9,48.1,0.667,0.667);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgaBBQgNgGgIgJQgIgHgFgOQgEgNgBgQQABgPAEgNQAGgOAHgHQAIgJANgGQAMgEAOAAQAPAAALAFQAMAFAJAJQAJAJAEAMQAGANAAAPQgBARgFANQgEANgJAIQgIAJgNAFQgMAEgOAAQgOAAgMgEgAgQgYQgFAKAAAOQAAAPAFAKQAHAIAJAAQAKAAAGgIQAGgJAAgQQAAgPgGgJQgGgIgKAAQgJAAgHAIg");
	this.shape_76.setTransform(497,49.2,0.667,0.667);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgbBGQgLgKgBgYIAAhyIAJgCIAKAAQAMAAAFAEQAFAEABANIAAARIAgAAIADAIQABAEABAFQAAAKgFAEQgDAEgHAAIgWAAIAAAoQAAAGADADQAFADAIAAIAHAAIAHgCIAEAHQABADABAFQgBAKgHAHQgGAGgTAAQgVAAgMgLg");
	this.shape_77.setTransform(489,48.3,0.667,0.667);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgbBQQgMgFgIgMQgJgKgGgQQgEgRAAgUQAAgUAEgQQAGgQAJgKQAIgLAMgGQAMgFAPAAQAPAAALAFQANAFAJAMQAJAKAFAQQAFASAAASQAAASgFATQgFAQgJAKQgJAMgNAFQgLAFgPAAQgPAAgMgFgAgSgkQgFAOgBAWQABAYAFAMQAHANALAAQAMAAAFgNQAHgMAAgYQAAgXgHgNQgFgMgMAAQgLAAgHAMg");
	this.shape_78.setTransform(477.1,48.1,0.667,0.667);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgsBAQgQgVAAgnQAAgWAFgQQAFgSAJgKQAKgMANgFQALgFAQAAQAUAAALAFQALAGAAAMQAAAFgDAGQgCAFgDADQgGgDgJgCQgGgCgHAAQgPAAgHAJQgIAIgDAQQAGgEAHgDQAIgDAIAAQAYAAANAOQANAOAAAaQAAAMgDAKQgEAJgIAJQgIAJgKAEQgLAEgPAAQgcAAgSgVgAgIAKQgEABgEAFIAAAHQAAAOAFAGQAGAGAHAAQAJAAADgGQAFgFAAgKQAAgJgFgGQgEgFgIAAQgDAAgHACg");
	this.shape_79.setTransform(467.4,48.1,0.667,0.667);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgWBWQgNgFgIgJQgKgJgEgNQgFgNABgQQAAgSAEgLQAFgMAJgKQAIgHANgFQANgFALAAIAKABIAIADIAAgrIAIgCIALgBIAKABIAHACQADACACAFQACAFAAAGIAAB+QAAAMgMAIQgGAFgMAEQgLAEgQAAQgOAAgOgFgAgMgDQgHAIAAAQQAAARAHAJQAHAIALAAQAGAAACgBIAGgEIAAg6QgEgDgHAAQgNAAgIAIg");
	this.shape_80.setTransform(454.3,47.7,0.667,0.667);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgSBBQgMgEgKgKQgKgJgFgMQgFgOAAgRQAAgRAFgNQAFgLAKgKQAIgJAMgDQAJgEAMAAQANAAALAEQALAEAIAIQAJAIAEAKQAEAKAAAMQAAAKgEAEQgHAFgHAAIg9AKQADAJAIAFQAHAEAMAAQAMAAAIgDQAJgDAFgDQAFADACAEQADAFAAAFQAAANgLAFQgHAFgLABIgTACQgMAAgOgEgAgIghIgHAFIgEAIIgBAIIApgHQgBgGgFgFQgEgFgKAAQgDAAgGACg");
	this.shape_81.setTransform(445,49.2,0.667,0.667);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgmBVQgNgHAAgPQAAgFACgGQADgEADgDQAHAFAJADQAKADAJAAQAMAAAIgFQAIgFAAgLIAAgEQgJAFgPAAQgLAAgKgEQgJgDgJgIQgGgHgGgNQgEgLgBgQQAAgRAGgMQAEgLAJgJQAIgHANgEQAKgEAOAAQAQAAAKAEQAMAEAIAGQAGAFABADQADAEABAIIAABcQgBAPgFAKQgDAJgKAIQgKAHgLADQgKADgNAAQgWAAgOgGgAgLgvQgGAHAAAOQAAAPAGAHQAGAGAIAAQALAAAGgEIAAgyIgGgCIgHgBQgMAAgGAIg");
	this.shape_82.setTransform(435.5,50.6,0.667,0.667);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgXBDQgJgDgJgFQgIgFgEgJQgEgJAAgLQAAgRAKgKQAKgKAWgCIAggEIAAgCQAAgHgGgEQgHgDgLAAQgLAAgIACIgPAFQgDgBgDgGQgDgGABgFQAAgGACgFQAFgEAFgDQAIgDAJgBIATgBQANAAALADQALADAHAGQAJAGAEAJQAEAKAAAMIAAA7QAAAHgEAEIgIAIQgRAKgdAAQgNAAgKgCgAAAANQgHAAgFADQgEADAAAFQAAAFAEADQADAEAJAAIAJgBQAGgBACgCIAAgVg");
	this.shape_83.setTransform(426.3,49.2,0.667,0.667);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgcBEQgFgCgDgCQgCgCgCgEQgCgEABgHIAAhPQAAgHACgEQABgEAFgEIAKgGIAMgGIANgDIAOgBQAMAAAHAFQAHAFAAALIgBAHIgCAHIggAEIgHAEIAABaIgHACIgLAAIgKAAg");
	this.shape_84.setTransform(415.5,49.1,0.667,0.667);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgSBBQgNgEgJgKQgJgHgGgOQgFgOAAgRQAAgTAFgLQAGgNAIgIQAIgIAMgEQALgEAMAAQAMAAALAEQAMAFAHAHQAIAHAEALQAFAKAAAMQAAAKgFAEQgGAFgHAAIg9AKQADAKAJAEQAGAEAMAAQALAAAIgDQAKgDAFgDQAEACADAFQACAGABAEQAAANgLAFQgHAFgLABIgSACQgNAAgOgEgAgIghQgEACgDADIgFAIIgBAIIAqgHQgBgFgFgGQgFgFgIAAQgEAAgGACg");
	this.shape_85.setTransform(407.2,49.2,0.667,0.667);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AggBWQgKgDgJgHQgLgIAAgNIAAiNIAIgCIALgBIAKABIAHACQADACACAFQABAFAAAGIAAAaIAMgEIAMgBQAMAAAKAFQAKAEAJAJQAJAJAEANQAFAMAAAQQAAAQgFAPQgFAMgIAKQgKAIgMAEQgLAEgQABQgRgBgLgEgAgMgKIgIAEIAAA4QACACAFACQAEABAFAAQAKAAAHgIQAHgKAAgQQAAgPgHgJQgHgIgJAAg");
	this.shape_86.setTransform(397.9,47.7,0.667,0.667);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("ABABEQgFgCgCgCQgDgCgCgEQgCgEAAgHIAAhAQAAgHgEgEQgEgEgHABIgIABIgGAEIAABcIgIACIgLAAIgIAAQgFgCgDgCQgDgCgBgEQgCgEAAgHIAAhAQAAgHgFgEQgEgEgHABIgIABIgFADIAABdIgIACIgLAAIgKAAQgFgCgCgCQgDgCgCgEQgCgEAAgHIAAhQQAAgHADgFQADgEAFgEQAJgGAMgEQAOgEANAAQAKAAAKADQAKADAGAGQAHgGAKgDQAJgDANAAQAIAAALACQALAEAFAFQAHAFAFALQAEAJAAANIAABUIgIACIgLAAIgKAAg");
	this.shape_87.setTransform(385.7,49.1,0.667,0.667);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgRBBQgOgEgJgKQgJgJgFgMQgGgOAAgRQAAgRAGgNQAEgLAJgKQAKgJALgDQAJgEAMAAQANAAAMAEQALAFAHAHQAJAHAEALQAEALAAALQAAAKgFAEQgGAFgHAAIg8AKQACAJAIAFQAIAEALAAQAMAAAIgDQAJgDAFgDQAFADACAEQADAFAAAFQAAANgLAFQgHAFgLABIgTACQgMAAgNgEgAgIghQgDACgEADIgEAIIgBAIIApgHQgBgGgEgFQgFgFgKAAQgEAAgFACg");
	this.shape_88.setTransform(374.1,49.2,0.667,0.667);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("ABABEQgFgCgDgCQgDgCgBgEQgCgEAAgHIAAhAQAAgHgEgEQgEgEgIABIgHABIgGAEIAAACIAABaIgIACIgLAAIgJAAQgFgCgCgCQgDgCgCgEQgBgEAAgHIAAhAQAAgHgFgEQgFgEgGABQgFgBgDACIgFADIAABdIgIACIgLAAIgKAAQgFgCgDgCQgDgCgBgEQgCgEAAgHIAAhQQAAgHADgFQACgCAGgGQAJgGAMgEQANgEANAAQAKAAALADQAJADAHAGQAIgGAJgDQAIgDAOAAQAJAAAKACQAKAEAGAFQAIAHADAJQAFAIAAAOIAABUIgIACIgLAAIgKAAg");
	this.shape_89.setTransform(362.5,49.1,0.667,0.667);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgSBBQgMgEgKgKQgJgJgGgMQgFgNAAgSQAAgTAFgLQAFgNAKgIQAHgIANgEQAKgEALAAQANAAALAEQALAEAIAIQAIAIAFAKQAEAKAAAMQAAAKgFAEQgFAFgIAAIg9AKQADAKAIAEQAHAEAMAAQALAAAJgDQAJgDAFgDQAEACADAFQACAGAAAEQABANgLAFQgHAFgLABIgTACQgMAAgOgEgAgIghQgFACgCADQgDAEgBAEIgCAIIAqgHQgBgFgEgGQgGgFgJAAQgDAAgGACg");
	this.shape_90.setTransform(347.5,49.2,0.667,0.667);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAfBEQgFgCgDgCQgDgCgBgEQgCgEAAgHIAAg+QAAgIgEgFQgFgDgHAAQgEgBgFACQgFABgDADIAABcIgIACIgLAAIgKAAQgFgCgDgCQgDgCgBgEQgCgEAAgHIAAhPQAAgIADgFQACgCAGgGQAJgGAMgEQAOgEAOAAQAcAAAPANQAQANAAAYIAABTIgIACIgLAAIgKAAg");
	this.shape_91.setTransform(338.1,49.1,0.667,0.667);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgaBBQgNgGgHgJQgJgJgEgMQgGgMAAgRQAAgPAGgNQAEgMAJgJQAHgJANgGQANgEANAAQAQAAALAFQAMAFAJAJQAHAIAGANQAFANAAAPQAAARgFANQgGAOgHAHQgJAJgMAFQgMAEgPAAQgNAAgNgEgAgPgYQgGAJAAAPQAAAQAGAJQAGAIAJAAQALAAAFgIQAGgIAAgRQAAgOgGgKQgFgIgLAAQgKAAgFAIg");
	this.shape_92.setTransform(328.3,49.2,0.667,0.667);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgbBGQgMgKAAgYIAAhyIAJgCIAKAAQALAAAHAEQAEAEABANIAAARIAgAAIADAIQABAEABAFQAAAKgFAEQgDAEgHAAIgWAAIAAAoQAAAGADADQAFADAHAAIAIAAIAHgCIAEAHQACADAAAFQgBAKgGAHQgIAGgSAAQgWAAgLgLg");
	this.shape_93.setTransform(317,48.3,0.667,0.667);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgWBEQgIgBgHgEQgIgEgCgEQgEgGAAgHQAAgGACgEIAGgIIARAIQAJADANAAQAHAAAEgCQAEgDAAgEQAAgDgDgCQgDgCgGgCIgIgCQgVgEgLgKQgLgJAAgSQAAgLAEgGQAEgIAHgGQAIgGAKgDQAKgCALAAIASABQAIACAGACQAFADAEAFQAEAGAAAGQAAAEgCAGIgGAHIgGgDIgSgEIgJgBQgIAAgEACQgEABAAAFQAAAEACABQAEACAFABIAHADQAZAGAKAJQAKALAAAPQAAAVgPALQgOALgbAAg");
	this.shape_94.setTransform(309.4,49.2,0.667,0.667);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgXBDQgKgDgIgFQgHgFgFgJQgEgJAAgLQAAgRAKgKQAKgKAWgCIAggEIAAgCQAAgHgHgEQgGgDgLAAQgKAAgJACIgQAFQgEgCgBgFQgDgEAAgHQAAgGAEgFQADgDAGgEQAJgDAJgBIASgBQANAAAKADQAMADAIAGQAIAGAEAJQAEAJAAANIAAA7QAAAGgEAFQgDAEgFAEQgQAKgeAAQgOAAgJgCgAAAANQgHAAgEADQgFADAAAFQAAAGAEACQAEAEAIAAIAJgBQAEgBAEgCIAAgVg");
	this.shape_95.setTransform(300.5,49.2,0.667,0.667);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgSBBQgMgEgKgKQgJgJgGgMQgFgNAAgSQAAgTAFgLQAGgNAIgIQAJgIALgEQALgEAMAAQANAAAKAEQALAEAJAIQAHAIAFAKQAEAKAAAMQAAAKgFAEQgGAFgHAAIg9AKQADAKAJAEQAGAEAMAAQAMAAAHgDQALgDAEgDQAEACADAFQACAGABAEQAAANgLAFQgHAFgLABIgSACQgNAAgOgEgAgIghQgFACgCADQgDAEgBAEIgCAIIAqgHQAAgFgGgGQgFgFgIAAQgEAAgGACg");
	this.shape_96.setTransform(291.6,49.2,0.667,0.667);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgHBZQgFgBgCgDQgDgCgCgEQgBgEAAgHIAAiaIATgCIAJABIAHACIAFAHQABAFAAAGIAACaIgIABIgLABIgJAAg");
	this.shape_97.setTransform(284.7,47.7,0.667,0.667);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgbBGQgMgKAAgYIAAhyIAJgCIAKAAQAMAAAFAEQAFAEABANIAAARIAgAAIAEAIIABAJQgBAKgDAEQgEAEgHAAIgWAAIAAAoQgBAGAFADQAEADAHAAIAIAAIAHgCIAEAHQACADAAAFQgBAKgGAHQgHAGgTAAQgVAAgMgLg");
	this.shape_98.setTransform(275.9,48.3,0.667,0.667);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgWBDQgLgDgIgFQgIgGgDgIQgFgIAAgMQAAgRAKgKQAKgKAWgCIAggEIAAgCQAAgHgGgEQgHgDgLAAQgLAAgHACIgQAFQgDgBgDgGQgCgGAAgFQAAgGADgFQADgEAGgDQAIgDAJgBIATgBQANAAALADQALADAIAGQAHAGAFAJQAEAKAAAMIAAA7QAAAHgDAEIgJAIQgRAKgdAAQgNAAgJgCgAAAANQgHAAgFADQgEADAAAFQAAAFAEADQADAEAJAAIAKgBQAFgBACgCIAAgVg");
	this.shape_99.setTransform(267.6,49.2,0.667,0.667);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgWBEQgHgBgIgEQgHgEgDgEQgEgGAAgHQAAgGADgEQACgFAEgDIAQAIQAKADAMAAQAHAAAEgCQAEgDAAgEQAAgDgDgCQgDgCgGgCIgIgCQgVgEgLgKQgLgJAAgSQAAgKAEgHQAFgKAHgEQAHgGAKgDQAKgCALAAIASABQAIACAGACQAHAEACAEQAEAFAAAHQAAAGgCAEQgCAFgEACIgOgFIgKgCIgJgBQgIAAgEACQgEABAAAFQAAADACACIAJADIAIADQAZAGAJAJQAKAKAAAQQAAAVgOALQgPALgaAAg");
	this.shape_100.setTransform(255.9,49.2,0.667,0.667);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgWBDQgKgDgJgFQgIgGgEgIQgEgIAAgMQAAgRAKgKQAKgKAWgCIAggEIAAgCQAAgHgHgEQgFgDgMAAQgKAAgJACIgPAFQgDgBgDgGQgCgGAAgFQgBgGAEgFQAEgEAFgDQAIgDAJgBIATgBQANAAALADQALADAIAGQAHAGAFAJQAEAKAAAMIAAA7QAAAHgEAEIgIAIQgRAKgdAAQgOAAgIgCgAAAANQgHAAgEADQgFADAAAFQAAAFAEADQAEAEAIAAIAJgBQAFgBADgCIAAgVg");
	this.shape_101.setTransform(247,49.2,0.667,0.667);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAfBZQgFgBgDgDQgDgCgBgEQgCgEAAgHIAAg7QAAgKgFgEQgFgFgHAAQgFAAgEABQgEABgDADIAABcIgIACIgLAAIgKAAQgFgBgDgDQgDgCgBgEQgCgEAAgHIAAiaIATgCIAKABIAHACIAFAHQACAFAAAGIAAAaIAKgDQAGgCAHAAQAZAAAOAOQAOANAAAZIAABRIgIACIgLAAIgKAAg");
	this.shape_102.setTransform(237.8,47.7,0.667,0.667);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgWBWQgOgGgHgIQgJgJgFgNQgFgMAAgRQAAgQAFgNQAGgNAIgJQAIgHANgFQAMgFANAAIAJABIAIADIAAgrIAIgCIALgBIAKABIAIACQACACACAFQACAFAAAGIAAB+QAAAMgLAIQgIAGgLADQgLAEgQAAQgPAAgNgFgAgLgDQgIAIAAAQQAAARAHAJQAHAIAMAAQAEAAAEgBQAEgCABgCIAAg6QgEgDgIAAQgMAAgHAIg");
	this.shape_103.setTransform(224.5,47.7,0.667,0.667);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgGBZQgFgBgDgDQgDgCgBgEQgCgEAAgHIAAiaIATgCIAJABIAHACQADADACAEQABAFAAAGIAACaIgIABIgLABIgIAAg");
	this.shape_104.setTransform(217.5,47.7,0.667,0.667);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgaBBQgMgGgIgJQgJgJgFgMQgEgMAAgRQAAgPAEgNQAFgMAJgJQAIgJAMgGQAMgEAOAAQAQAAALAFQALAFAJAJQAJAIAFANQAFANgBAPQABARgFANQgGAOgIAHQgIAJgMAFQgMAEgPAAQgOAAgMgEgAgPgYQgGAJAAAPQAAAQAGAJQAGAIAJAAQALAAAGgIQAFgIAAgRQAAgOgFgKQgHgIgKAAQgKAAgFAIg");
	this.shape_105.setTransform(210.3,49.2,0.667,0.667);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAfBZQgFgBgCgDQgDgCgCgEQgCgEAAgHIAAg7QAAgKgFgEQgFgFgHAAQgEAAgFABIgHAEIAABcIgIACIgLAAIgKAAQgFgBgCgDQgDgCgCgEQgCgEAAgHIAAiaIATgCIAKABIAIACQACADACAEQACAFAAAGIAAAaIAKgDQAGgCAHAAQAZAAAOAOQAOANAAAZIAABRIgIACIgLAAIgKAAg");
	this.shape_106.setTransform(200.5,47.7,0.667,0.667);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgSBBQgNgEgIgKQgLgJgEgMQgGgOAAgRQAAgRAGgNQAEgLAJgKQAKgJALgDQAJgEAMAAQANAAAMAEQALAFAIAHQAIAHAEALQAEALAAALQAAAKgFAEQgGAFgHAAIg9AKQADAJAIAFQAIAEALAAQAMAAAIgDQAJgDAFgDQAFADACAEQADAFAAAFQAAANgLAFQgIAFgKABIgTACQgMAAgOgEgAgIghQgDACgEADIgEAIIgBAIIApgHQgBgGgEgFQgFgFgKAAQgEAAgFACg");
	this.shape_107.setTransform(191.1,49.2,0.667,0.667);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgWBEQgIgBgHgEQgIgEgCgEQgEgGAAgHQAAgGACgEIAGgIIARAIQAJADANAAQAHAAAEgCQAEgDAAgEQAAgDgDgCQgDgCgGgCIgIgCQgVgEgLgKQgLgJAAgSQAAgLAEgGQAEgIAHgGQAIgGAKgDQAKgCALAAIASABQAIACAGACQAFADAEAFQAEAGAAAGQAAAEgCAGIgGAHIgPgFIgJgCIgJgBQgIAAgEACQgEABAAAFQAAAEACABQAEACAFABIAHADQAZAGAKAJQAKALAAAPQAAAVgPALQgOALgbAAg");
	this.shape_108.setTransform(182.5,49.2,0.667,0.667);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgWBAQgLgDgJgHQgIgGgEgLQgFgKAAgPIAAhMIAIgCIALAAIAKAAQADABAEADQADACACAEQACAEAAAHIAAA5QAAALAFAEQAEAFAJAAIAKgBIAFgCIAAhdIAIgCIALAAIAKAAQADABAEADQADACACAEQACAEAAAHIAABQQAAAOgLAGQgJAGgMADQgMADgOAAQgMAAgMgDg");
	this.shape_109.setTransform(173.5,49.3,0.667,0.667);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgaBBQgMgGgIgJQgJgJgFgMQgEgMAAgRQAAgPAEgNQAFgMAJgJQAIgJAMgGQAMgEAOAAQAQAAALAFQAMAFAIAJQAJAIAFANQAFANgBAPQABARgFANQgGAOgIAHQgIAJgMAFQgMAEgPAAQgOAAgMgEgAgPgYQgGAJAAAPQAAAQAGAJQAGAIAJAAQALAAAGgIQAFgIAAgRQAAgOgFgKQgHgIgKAAQgJAAgGAIg");
	this.shape_110.setTransform(163.7,49.2,0.667,0.667);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAfBZQgFgBgCgDQgDgCgCgEQgCgEAAgHIAAg7QAAgKgFgEQgFgFgHAAQgEAAgFABIgHAEIAABcIgIACIgLAAIgKAAQgFgBgCgDQgDgCgCgEQgCgEAAgHIAAiaIATgCIAKABIAIACQACADACAEQACAFAAAGIAAAaIAKgDQAGgCAHAAQAZAAAOAOQAOANAAAZIAABRIgIACIgLAAIgKAAg");
	this.shape_111.setTransform(154,47.7,0.667,0.667);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgcBEQgFgCgDgCQgDgCgBgEQgBgEAAgHIAAhPQAAgHACgEQABgEAEgEIALgGIAMgGIANgDIAOgBQAMAAAHAFQAIAFgBALIAAAHIgDAHIgWADIgJABIgIAEIAABaIgHACIgLAAIgKAAg");
	this.shape_112.setTransform(142.6,49.1,0.667,0.667);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgWBAQgLgDgJgHQgIgGgEgLQgFgKAAgPIAAhMIAIgCIALAAIAKAAQADABAEADQADACACAEQACAEAAAHIAAA5QAAALAFAEQAEAFAJAAIAKgBIAFgCIAAhdIAIgCIALAAIAKAAQADABAEADQADACACAEQACAEAAAHIAABQQAAAOgLAGQgJAGgMADQgMADgOAAQgMAAgMgDg");
	this.shape_113.setTransform(134.1,49.3,0.667,0.667);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgaBBQgNgGgHgJQgJgJgEgMQgGgMAAgRQAAgPAGgNQAEgMAJgJQAHgJANgGQANgEANAAQAPAAAMAFQAMAFAJAJQAHAIAGANQAFANAAAPQAAARgFANQgGAOgHAHQgJAJgMAFQgMAEgPAAQgNAAgNgEgAgPgYQgGAJAAAPQAAAQAGAJQAGAIAJAAQALAAAFgIQAGgIAAgRQAAgOgGgKQgFgIgLAAQgKAAgFAIg");
	this.shape_114.setTransform(124.3,49.2,0.667,0.667);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgmBTQgIgIAAgJIAQgPIAOgRQgDgBgGgFQgFgFgFgNIgGgOIgGgTIgHgZIgIggQADgDAGgDQAFgDAIAAQAJAAAGAEQAFADADALIASBJIABAAIAWhWQAIgFALAAQAKAAAEAEQAHAEAAAJQgBAJgBAIIgLAqIgJAWIgIAVIgJASQgHALgHAJQgGAKgFAEQgFAFgFABQgHACgFAAQgJAAgHgHg");
	this.shape_115.setTransform(114.8,50.7,0.667,0.667);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgfBbQgFgBgCgCQgDgDgCgEQgCgEAAgHIAAhtQAAgOAFgKQAEgKAIgGQAIgGAJgDQALgDAKAAQATAAAIAFQAJAGAAAMQAAAGgCAEIgFAGIgKgCIgMgBQgKAAgGAEQgFAEAAAJIAAAJIAoAAIADAHIABAKQAAAKgEACQgEAFgGAAIgcAAIAABUIgIACIgLABIgKgBg");
	this.shape_116.setTransform(103.7,47.5,0.667,0.667);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgHBSQgGgBgCgCQgDgCgCgFQgBgFAAgGIAAiNIAJgBIALgBIAKABIAHADQADADACAEQABAEAAAHIAACMIgUADg");
	this.shape_117.setTransform(97.2,48.1,0.667,0.667);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AAJAlIgGgJIgCgEIgIAQIgGAAQgJAAgDgDQgFgDAAgHIACgGIAEgHIAEgFIgQgEQgBgFAAgEQAAgHAEgEQADgDAHAAIAEAAIAIADIAAgTIAFgEQADgBAEAAQAGAAADADQAEADAAAGIgBAMIAPgGIAHAGQADAEAAAGQAAAFgDACIgIAFIgFACIAMASQgDAHgDADQgEADgGAAQgGAAgDgDg");
	this.shape_118.setTransform(91.7,44.6,0.667,0.667);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#CA0303").s().p("AgfCWQgLgMAAgUQAAgVALgMQAMgNATAAQAUAAAMANQALAMAAAVQAAATgLANQgLANgVAAQgTAAgMgNgAgVAuQgJgGgCgLQgCgJgBgYIgHiSQAHgEAOgEQAMgDAKgBQATABAJAIQALAKgBATIgFB9QgCAVgEAUIgFAEIgHACIgQACQgMAAgJgEg");
	this.shape_119.setTransform(409.7,12.6,0.667,0.667);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#CA0303").s().p("AghB1QgWgHgSgRQgQgQgKgYQgKgXAAghQAAggAKgWQAKgXAPgPQAPgOAVgHQAVgIAUABQAWgBAVAJQATAHAPANQAOAOAIATQAIASAAAXQAAAQgJAIQgKAJgOACIhuARQAEAQAQAJQAPAHAUABQATgBAPgFQARgFAKgGQAIAGAEAHQAFAJAAAJQAAAWgTALQgOAIgSADQgUACgOAAQgaAAgWgHgAgPg7QgJAEgEAFQgFAGgCAHQgDAIAAAIIBMgNQgCgLgIgJQgIgKgRAAQgLABgHAEg");
	this.shape_120.setTransform(397,15,0.667,0.667);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#CA0303").s().p("AgNCgQgIgCgFgEQgGgFgCgHQgDgHAAgMIAAkXIAPgCQAIgCALAAQAJAAAIABQAIACAFAEQAGAGACAGQADAHAAAMIAAEXIgOACIgUACg");
	this.shape_121.setTransform(384.5,12.3,0.667,0.667);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#CA0303").s().p("Ag6CbQgWgIgNgKQgUgQAAgWIAAkAIAPgDQAIgCAMAAQAKAAAIACQAIABAFAFQAFAEADAHQADAHAAAMIAAAwQAIgEANgDQAOgCAIAAQAVAAAUAIQATAJAPAPQAOAPAJAYQAJAXAAAdQAAAggJAXQgIAWgRARQgRAQgVAHQgWAIgbAAQgeAAgVgIgAgWgTIgOAGIAABoQAFADAGADQAHACALAAQAUgBALgPQALgOAAgfQAAgegLgOQgMgPgTAAQgGAAgJACg");
	this.shape_122.setTransform(371.8,12.5,0.667,0.667);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#CA0303").s().p("AgMCsQgJgCgFgEQgGgFgDgHQgDgHAAgMIAAjDIAQgDIATgCIARACQAHABAGAEQAFAFADAHQADAHAAANIAADDIgPACIgTACQgJAAgHgBgAgdhiQgMgNAAgSQAAgSAMgNQAMgMARAAQASAAANAMQALANAAASQAAASgLANQgNANgSAAQgRAAgMgNg");
	this.shape_123.setTransform(358.4,11.5,0.667,0.667);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#CA0303").s().p("AhFCZQgYgMAAgbQAAgLAFgIQAFgKAEgDQAMAHASAGQAPAFATAAQAWAAAQgIQAOgJAAgTIAAgIQgTAJgZAAQgVAAgSgHQgSgHgNgNQgNgNgKgWQgIgUAAgfQAAgdAJgWQAJgWAPgOQAQgOAVgHQAWgHAYAAQAYAAAWAHQAUAHAQALQAIAGAGAJQAFAIAAANIAACoQAAAZgJATQgJASgQANQgOAMgWAGQgVAFgXAAQgoAAgYgLgAgVhWQgLANAAAZQAAAdALALQAMAMAPAAQASAAAMgJIAAhYIgKgEQgIgCgHAAQgUAAgMANg");
	this.shape_124.setTransform(345.3,17.7,0.667,0.667);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#CA0303").s().p("AgNCsQgIgCgFgEQgGgFgCgHQgDgHAAgMIAAjDIAOgDIAUgCQAJAAAHACQAJABAFAEQAGAFADAHQACAJAAALIAADDIgOACIgUACgAgdhiQgMgNAAgSQAAgSAMgNQALgMASAAQASAAAMAMQAMANAAASQAAASgMANQgLANgTAAQgSAAgLgNg");
	this.shape_125.setTransform(332.9,11.5,0.667,0.667);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#CA0303").s().p("AgMCgQgIgCgGgEQgGgFgCgHQgDgHAAgMIAAkXIAPgCQAIgCALAAQAJAAAIABQAIACAFAEQAGAFADAHQACAGAAANIAAEXIgOACIgUACQgJAAgHgBg");
	this.shape_126.setTransform(324.5,12.3,0.667,0.667);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#CA0303").s().p("AghB1QgWgHgSgRQgQgQgKgYQgKgXAAghQAAggAKgWQAKgXAPgPQAPgOAVgHQAVgIAUABQAWgBAVAJQATAHAPANQAOAOAIATQAIASAAAXQAAAQgJAIQgKAJgOACIhuARQAFAQAPAJQAPAHAUABQATgBAPgFQARgFAKgGQAIAGAEAHQAFAJAAAJQAAAWgTALQgOAIgSADQgUACgOAAQgaAAgWgHgAgPg7QgJAEgEAFQgFAGgCAHQgDAIAAAIIBMgNQgCgLgIgJQgIgKgRAAQgLABgHAEg");
	this.shape_127.setTransform(312.1,15,0.667,0.667);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#CA0303").s().p("AghB1QgWgHgSgRQgQgQgKgYQgKgXAAghQAAggAKgWQAKgXAPgPQAPgOAVgHQAVgIAUABQAWgBAVAJQATAHAPANQAOAOAIATQAIASAAAXQAAAQgJAIQgJAJgPACIhuARQAEAQAQAJQAPAHAUABQATgBAPgFQARgFAKgGQAHAFAFAIQAFAJAAAJQAAAWgTALQgOAIgSADQgUACgOAAQgaAAgWgHgAgPg7QgJAEgEAFQgFAGgCAHQgDAIAAAIIBMgNQgCgKgIgKQgIgKgRAAQgLABgHAEg");
	this.shape_128.setTransform(289.6,15,0.667,0.667);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#CA0303").s().p("AgzB5QgIgBgGgFQgGgFgCgHQgDgHAAgMIAAiQQAAgLAEgIQADgGAIgIQAJgHAJgEQAKgFAMgEQAOgEALgCQAOgDAMAAQAWABAMAIQANAJAAAVIgCANQgBAFgEAHIgTAAIglAHQgJADgFADIAACjIgOADIgUACQgKAAgHgCg");
	this.shape_129.setTransform(275.7,14.9,0.667,0.667);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#CA0303").s().p("AgaBAIgOgGIAIhwIAQgHQAMgEAHAAIAOACQAGABAGAEQAEADAFAHQADAGAAAJQAAAKgCALIgFAWIgIAWIgJASQgFAIgGAEQgGADgLABQgJAAgGgCg");
	this.shape_130.setTransform(265.7,6,0.667,0.667);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#CA0303").s().p("AgoB0QgUgGgPgMQgPgNgIgSQgJgUAAgaIAAiJIAPgDIAUgBIARABQAJACAFAEQAGAFACAHQADAHAAAMIAABnQAAAUAJAIQAJAIAQAAQAMAAAFgCQAFgBAFgCIAAioIAOgDIAUgBQAKAAAIABQAIACAGAEQAFAFADAHQADAGgBANIAACSQAAAYgSAMQgRALgUAFQgVAFgbAAQgXAAgVgFg");
	this.shape_131.setTransform(253.6,15.2,0.667,0.667);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#CA0303").s().p("AgvB0QgXgKgPgPQgPgRgJgWQgIgYAAgcQAAgaAIgYQAIgWAQgSQARgRAVgHQAVgKAaABQAbgBAVAKQAWAIAPARQAQAQAJAXQAIAYAAAaQAAAdgIAYQgKAZgPAPQgPAPgWAJQgVAHgbAAQgbABgUgJgAgdgrQgKAPAAAcQAAAdALAQQALAPASAAQASAAALgPQAJgRABgcQAAgbgLgQQgLgRgSABQgSgBgLARg");
	this.shape_132.setTransform(236.1,15,0.667,0.667);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#CA0303").s().p("AgVCNQgLgIAAgYIAAhBIhJh/QgJgSgIgXQAFgJALgHQAKgHAPAAQAQAAANAIQALAIAJAVIAkBQIAEAAIAohrQAJgGAJgBQALgDAIAAQAQAAALAJQALAKAAARQAAAFgDAJQgBAGgJATIgYAtQgPAdgaAsIAABiIgQACIgUACQgTAAgLgHg");
	this.shape_133.setTransform(218.6,13.1,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,617.5,76.7);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgnBmQgRgQAAgjIAAijIALgCQAIgCAIAAQAQAAAJAGQAIAGAAATIAAAZIAvAAIAEAKQACAGAAAJQAAANgGAGQgFAGgKAAIggAAIAAA5QAAAKAFAFQAHAEAKgBIAMAAIAKgDQADADACAHQACAFAAAHQAAAPgKAJQgKAJgaAAQgfAAgRgPg");
	this.shape.setTransform(229.6,68.4,0.667,0.667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiBfQgQgEgKgHQgKgHgHgMQgFgNAAgPQgBgbAPgNQAPgOAfgEIAugFIAAgDQAAgLgJgFQgJgEgQgBQgOAAgNADQgNADgLAFQgEgEgEgHQgDgGAAgJQABgJAEgGQAFgGAIgEQALgFAPgBQAMgCAOAAQARAAASADQAPAFAMAJQAMAJAGANQAFANAAASIAABVQAAALgEAGQgFAFgIAFQgXAPgrABQgUAAgOgFgAAAATQgKAAgHAEQgHADAAAJQAAAHAGAFQAHAFALAAIAOgCQAIgBADgCIAAgfg");
	this.shape_1.setTransform(217.7,69.6,0.667,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKCAQgGgCgEgDQgFgDgCgGQgCgFAAgLIAAjeIALgDIAQgBIANABQAGACAEADQAFADACAGQACAGAAAKIAADeIgLACQgIACgIAAg");
	this.shape_2.setTransform(208.1,67.5,0.667,0.667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag8B0QgGgBgEgEQgEgCgDgHQgCgGAAgKIAAinQAAgQAJgKQAJgKAQAAIB2AAQADAFACAHQACAGAAAIQAAAPgGAHQgGAGgKAAIhLAAIAAAsIBOAAIAFALIACAOQAAAOgGAHQgGAGgKAAIg+AAIAABRIgdAEQgIAAgHgCg");
	this.shape_3.setTransform(198.9,68.2,0.667,0.667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag5B3IgPgGQgVgHABgVIAAizQAAgHAEgFQAEgFAHgCQAKgEAVgDQAQgCAWAAQAtAAAZARQAYAQAAAjQAAARgJANQgKAMgPAGQARAGAMANQAMAOAAAVQAAAmgaATQgbASgwAAgAggBFIAOACIAPABQANAAAKgHQAJgGAAgNQABgMgJgHQgHgFgPAAIgfAAgAgghFIAAAtIAbAAQAOAAAIgHQAGgFABgNQgBgKgHgGQgIgGgQAAIgMAAg");
	this.shape_4.setTransform(180.1,68.1,0.667,0.667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhCB3IgPgGQgUgHAAgVIAAizQAAgIAEgEQAEgEAIgDQAMgFAUgDIAfgBQAbAAAXAIQAXAGAQAQQARAPAJAXQAJAYAAAeQAAAegJAYQgJAWgQAQQgQARgWAGQgWAIgaAAgAgmhCIAACFIAUACQAMAAAKgEQAKgDAHgJQAIgJAEgMQAEgLAAgUQAAghgPgSQgPgSgYAAIgLAAg");
	this.shape_5.setTransform(164.7,68.1,0.667,0.667);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA1B2QgGgBgEgEQgEgDgDgGQgCgGAAgKIAAg9IhDAAIAABZIgeADQgIAAgGgBQgHgBgEgEQgEgDgCgGQgCgGAAgKIAAjLIAdgDQAIgBAGACQAHACAEACQAFAFABAGQADAGAAAJIAAA+IBDAAIAAhaIAdgDQAJgBAGACQAGACAFACQAFAGABAFQACAFAAAKIAADLIgdADQgIAAgHgBg");
	this.shape_6.setTransform(148.3,68,0.667,0.667);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAsBhQgGgCgEgDQgFgEgCgFQgCgHgBgJIAAhaQABgLgHgGQgGgGgLAAQgEAAgJACIgMAGIAACFIgMACIgQABIgNgBQgIgCgDgDQgFgDgCgGQgCgGAAgKIAAhyQAAgMAEgFQAEgHAHgFQAMgKATgFQAUgGAUAAQApAAAWATQAWATAAAiIAAB4IgLACIgQABg");
	this.shape_7.setTransform(128.4,69.5,0.667,0.667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiBfQgQgEgKgHQgMgIgEgLQgHgNAAgPQABgbAOgNQAPgOAfgEIAugFIAAgDQAAgLgJgFQgJgEgRgBQgNAAgOADQgNAEgKAEQgEgDgDgIQgEgGAAgJQAAgJAFgGQAFgHAIgDQALgFAOgBQAMgCAPAAQARAAASADQAOAEANAKQALAIAGAOQAHANAAASIAABVQAAAKgGAHQgFAGgHAEQgYAPgqABQgUAAgOgFgAgBATQgKAAgGAEQgHADABAJQgBAIAGAEQAGAFAMAAIAOgCQAHgBADgCIAAgfg");
	this.shape_8.setTransform(114.6,69.6,0.667,0.667);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAsBhQgGgCgEgDQgEgDgDgGQgCgFAAgLIAAhaQAAgMgHgFQgFgGgMAAIgMACQgIADgFADIAACFIgLACIgQABIgOgBQgHgCgEgDQgEgDgCgGQgDgHAAgJIAAhyQAAgLAEgGQAFgHAGgFQAMgJAUgGQATgGAUAAQApAAAWATQAWASAAAjIAAB4IgLACIgQABg");
	this.shape_9.setTransform(96.6,69.5,0.667,0.667);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKCJQgHgBgEgDQgDgEgDgFQgCgHAAgKIAAibIALgCIAQgCIANABQAHACAEADQAEAEADAGQACAFAAALIAACbIgMACQgIABgHAAgAgXhOQgKgKABgPQgBgOAKgKQAJgKAOAAQAPAAAJAKQAKAKgBAOQABAOgKALQgJAKgPAAQgOAAgJgKg");
	this.shape_10.setTransform(86.2,66.8,0.667,0.667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag3B6QgTgJAAgWQAAgIADgHQAEgIAEgCQAMAHAMADQANAEAOAAQASAAAMgHQALgGAAgQIAAgGQgPAHgUAAQgPAAgPgGQgPgEgLgMQgLgLgHgRQgGgQAAgYQAAgXAHgSQAHgRAMgMQANgLARgGQASgFASAAQAUAAARAFQASAHALAIQAHAGAEAGQAEAHAAAKIAACFQAAAVgHAPQgGANgOALQgNALgQAEQgRAEgSAAQghAAgSgJgAgRhEQgIALAAATQAAAWAIAKQAJAJANAAQAPAAAIgHIAAhGQgDgDgEgBQgFgBgHAAQgRAAgJALg");
	this.shape_11.setTransform(70.9,71.8,0.667,0.667);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAsBhQgGgCgEgDQgEgDgDgGQgCgFAAgLIAAhaQAAgMgHgFQgGgGgKAAIgOACQgHADgEADIAACFIgMACIgQABIgOgBQgHgCgEgDQgEgDgDgGQgCgHAAgJIAAhyQAAgLAEgGQAFgIAHgEQALgJATgGQATgGAWAAQAoAAAWATQAWASAAAjIAAB4IgLACIgQABg");
	this.shape_12.setTransform(57.4,69.5,0.667,0.667);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgKCJQgGgBgFgDQgEgEgCgFQgCgHgBgKIAAibIAcgEIANABQAHACAEADQAEAEADAGQABAFAAALIAACbIgLACQgHABgJAAgAgXhOQgJgKAAgPQAAgOAJgKQAJgKAOAAQAQAAAIAKQAJAKAAAOQAAAOgJALQgIAKgQAAQgOAAgJgKg");
	this.shape_13.setTransform(47,66.8,0.667,0.667);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgWBeQgLgEgDgIIgHgTIgoh4IgGgaQAFgGAJgEQAHgEALAAQANAAAHAGQAJAFAEAQIAaBvIACAAIAbiDQAIgEAHgBQAGgCAIAAQANAAAJAGQAIAFAAAPQAAAIgDAKIgHAaIgJAfIggBUQgFAEgLADQgLADgKAAQgPAAgJgEg");
	this.shape_14.setTransform(37.1,69.7,0.667,0.667);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgKCJQgHgBgDgDQgGgEgBgFQgCgGAAgLIAAibIALgCQAHgBAJgBIANABQAGACAEADQAFADACAHQACAGAAAKIAACbIgLACIgQABgAgYhOQgIgLgBgOQABgOAIgKQAJgKAPAAQAPAAAJAKQAKAKAAAOQAAAPgKAKQgJAKgPAAQgPAAgJgKg");
	this.shape_15.setTransform(27.2,66.8,0.667,0.667);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgqB3QgPAAgJgJQgJgKAAgQIAAjHIAdgDQAJAAAFABQAIACADADQAEADACAHQADAGAAAKIAACXIBSAAIAEALQACAHAAAIQAAAQgGAGQgGAGgKAAg");
	this.shape_16.setTransform(18.1,68,0.667,0.667);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgfAiQgMgOAAgUQAAgTAMgOQAMgNATAAQAVAAALANQAMAOAAATQAAAUgMAOQgLANgVAAQgTAAgMgNg");
	this.shape_17.setTransform(2.9,68.6,0.667,0.667);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgbBdQgRgGgOgNQgOgNgHgTQgIgSAAgaQAAgaAIgRQAHgTANgMQAMgLARgGQARgGAPABQATAAAQAFQAPAGAMALQAMAMAFAOQAHARAAAQQAAANgHAGQgGAHgNACIhYAPQAEALAMAIQAMAFAPAAQARAAALgDQAOgEAIgGQAGAFADAGQAEAGAAAJQAAARgPAJQgMAGgOADQgNACgOAAQgTAAgUgHgAgMgwQgHAEgDAEQgDAEgDAHIgCAMIA8gKQAAgIgIgIQgHgIgNAAQgHAAgHADg");
	this.shape_18.setTransform(218.7,40.8,0.667,0.667);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgWBeQgKgEgEgIIgchMIgZhZQAGgGAHgEQAIgEALAAQAMAAAIAGQAJAFADAQIAaBvIACAAIAciDQAIgDAGgCQAHgCAIAAQANAAAIAGQAJAGAAAOQAAAHgDALQgCAKgFAQIgJAfIghBUQgEAEgLADQgLADgLAAQgNAAgKgEg");
	this.shape_19.setTransform(205.5,40.9,0.667,0.667);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgmBcQgQgGgNgNQgNgOgGgSQgHgRAAgYQAAgXAHgSQAGgRANgOQANgNAQgHQASgGAUAAQAUAAATAGQARAIAMANQANAMAGATQAHARAAAXQAAAZgHARQgGATgNANQgMAMgRAHQgSAGgVABQgWgBgQgHgAgWgjQgJANAAAWQAAAXAJANQAIAMAOAAQAPABAJgNQAIgOAAgWQAAgWgJgNQgIgNgPAAQgOAAgIANg");
	this.shape_20.setTransform(191.9,40.8,0.667,0.667);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AguB8QgPgFgNgJQgQgMAAgTIAAjNIAMgCIAQgBIAOABQAFAAAGAEQAEAFACAFQACAFAAAKIAAAmQALgEAGgBIARgCQASAAAPAHQAQAHALAMQALALAIAUQAHARAAAZQAAAagHARQgHATgNAMQgMANgTAGQgRAGgWAAQgXAAgRgGgAgSgPIgLAFIAABTIAJAEQAGACAIAAQAQAAAJgMQAJgMAAgYQAAgZgJgLQgJgMgPAAQgHAAgGACg");
	this.shape_21.setTransform(178.1,38.8,0.667,0.667);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgiBfQgPgEgLgHQgLgHgGgMQgFgNAAgPQAAgbAOgNQAPgOAfgEIAugFIAAgDQAAgKgJgGQgJgEgQgBQgOAAgNADQgOADgKAFQgEgCgEgJQgCgGAAgJQAAgJAEgGQAFgHAJgDQAJgFAQgBQAMgCAOAAQARAAASADQAPAFAMAJQAMAJAGAMQAFAOAAASIAABVQAAALgEAGQgGAGgHAEQgXAPgrABQgTAAgPgFgAAAATQgKAAgHAEQgHAEAAAIQABAHAFAFQAGAFAMAAIANgCQAIgBAEgCIAAgfg");
	this.shape_22.setTransform(163.9,40.8,0.667,0.667);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AggB7QgSgHgNgNQgMgMgHgTQgHgTAAgWQAAgaAHgSQAHgRANgOQANgMARgGQARgGATAAQAHAAAHACIALADIAAg/IAMgCIAQgBIAOABQAFAAAGAEQAEAEACAGQACAFAAAKIAAC2QAAASgPALQgMAIgQAFQgRAFgVAAQgXAAgSgHgAgRgFQgKALAAAZQAAAXAKANQAKAMARAAQAHAAAEgCQAGgDADgCIAAhUQgHgFgLAAQgSAAgLAMg");
	this.shape_23.setTransform(145.6,38.8,0.667,0.667);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAtBhQgIgCgDgDQgFgDgCgGQgCgGAAgKIAAhaQAAgLgHgGQgFgGgMAAIgNACIgMAGIAACFIgLACIgQABIgOgBQgHgCgEgDQgEgDgCgGQgDgFAAgLIAAhyQAAgLAEgGQAGgIAFgEQAMgJATgGQATgGAVAAQApAAAWATQAWATAAAiIAAB4IgMACIgQABg");
	this.shape_24.setTransform(131.8,40.7,0.667,0.667);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgiBfQgQgEgKgHQgLgHgGgMQgFgNAAgPQAAgbAOgNQAQgOAegEIAugFIAAgDQAAgKgJgGQgJgEgQgBQgOAAgNADQgNADgLAFQgFgDgDgIQgDgHAAgIQAAgJAEgGQAFgGAKgEQAKgFAOgBQAMgCAPAAQARAAASADQAPAFAMAJQAMAJAGAMQAFAOAAASIAABVQAAAKgEAHQgFAFgIAFQgYAPgqABQgTAAgPgFgAAAATQgKAAgHAEQgGADgBAJQABAHAFAFQAHAFALAAIANgCQAIgBAEgCIAAgfg");
	this.shape_25.setTransform(118,40.8,0.667,0.667);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AglB2QgOgEgJgEQgLgHgEgHQgGgIAAgKQABgLAFgHQAGgHAIgFQAHAHAOAHQALAGASAAQARAAAGgIQAIgIAAgLQAAgMgHgHQgGgHgOAAQgJAAgIACIgPAHQgRgBgKgKQgLgJAAgTIAFhEQABgQAIgKQAJgKAQAAIBnAAIAEALQACAJAAAGQAAAOgGAHQgGAGgKAAIhEAAIgCAkIAOgDQAGgCALAAQASAAAOAGQAOAGAJAKQAIAMAEAMQAFANAAAQQgBAOgFARQgEAOgMALQgJAKgSAIQgQAGgXAAQgQAAgPgCg");
	this.shape_26.setTransform(101,39.5,0.667,0.667);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag/BdQgYgfgBg4QAAgfAIgYQAHgYAOgQQAOgRASgIQASgIAXAAQAcAAAPAJQAQAHAAASQAAAJgDAHQgEAIgEADIgVgHQgMgCgIAAQgVAAgLALQgMAOgDAWQAIgHAKgDQALgFANAAQAhAAAUAVQAUATAAAmQgBAQgFAQQgFAOgLANQgLALgQAHQgPAGgXAAQgpAAgYgegAgLAOQgHADgGAGIAAAJQABAWAHAIQAJAJAKAAQAMAAAGgIQAGgJAAgOQAAgNgHgHQgFgJgNABQgFAAgIACg");
	this.shape_27.setTransform(87.8,39.3,0.667,0.667);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AggB7QgTgHgMgNQgNgMgGgTQgHgSAAgXQAAgbAHgRQAIgTAMgMQANgMARgGQAQgGAUAAIAOACIALADIAAg/IAMgCIAPgBIAPABQAFAAAFAEQAFAEACAGQACAFAAAKIAAC2QAAASgQALQgKAIgRAFQgSAFgUAAQgYAAgRgHgAgRgFQgLALAAAZQAAAXAKANQALAMAQAAQAIAAAEgCQAGgDACgCIAAhUQgGgFgLAAQgTAAgKAMg");
	this.shape_28.setTransform(69,38.8,0.667,0.667);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgOgNgHgTQgIgSAAgaQAAgaAIgRQAHgTANgMQAMgLARgGQARgGAPABQATAAAQAFQAPAGAMALQAMAMAFAOQAHARAAAQQAAANgHAGQgGAHgNACIhYAPQAEALAMAIQAMAFAPAAQARAAALgDQAOgEAHgGQAGAEAEAHQAEAGAAAJQAAARgPAJQgLAGgPADQgMACgPAAQgUAAgSgHgAgMgwQgGAEgEAEQgEAFgCAGIgDAMIA9gKQAAgIgIgIQgHgIgNAAQgIAAgGADg");
	this.shape_29.setTransform(55.6,40.8,0.667,0.667);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ag3B6QgTgJAAgWQAAgJAEgGQADgHAEgDQALAGANAEQANAEAOAAQASAAAMgHQAMgHAAgPIAAgGQgQAHgTAAQgQAAgPgGQgOgEgMgMQgMgMgFgQQgHgRAAgXQAAgXAHgSQAHgRAMgMQANgLARgGQASgFASAAQAUAAARAFQARAGAMAJQAHAGAEAGQAEAHAAAKIAACFQAAAVgHAPQgHAOgNAKQgMAKgRAFQgRAEgSAAQghAAgSgJgAgQhEQgJAKAAAUQAAAWAJAKQAIAJANAAQAPAAAIgHIAAhGIgHgEQgFgBgHAAQgRAAgIALg");
	this.shape_30.setTransform(41.9,43,0.667,0.667);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AA5B3IgJgFQgEgDgCgFIgEgLIgHgbIhAAAIgLAwIgLADQgGACgIAAQgSAAgJgHQgJgHAAgMIACgLIADgMIA5i1QAGgEAMgDQAPgEAKAAQAQAAAPAGQAOAGAEAMIAOAuQAHAUAJAiIAbBpQgFAFgIADQgKAEgKAAQgJAAgHgCgAgLgXIgMAnIAsAAIgUhLIgBAAg");
	this.shape_31.setTransform(28,39.3,0.667,0.667);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgfAiQgMgOAAgUQAAgTAMgOQAMgNATAAQAUAAAMANQAMAOAAATQAAAUgMAOQgMANgUAAQgTAAgMgNg");
	this.shape_32.setTransform(11.8,39.8,0.667,0.667);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAsBhQgHgCgEgDQgEgDgCgGQgCgHgBgJIAAhaQABgLgHgGQgGgGgKAAIgOACIgMAGIAACFIgMACIgQABIgOgBQgHgCgDgDQgFgDgCgGQgCgGAAgKIAAhyQAAgMAEgFQAEgHAIgFQALgKATgFQAUgGAVAAQAoAAAWATQAWATAAAiIAAB4IgLACIgQABg");
	this.shape_33.setTransform(225.4,11.9,0.667,0.667);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgOgNgHgTQgIgSAAgaQAAgaAIgRQAHgTANgMQAMgLARgGQASgGAOABQATAAAQAFQAPAGAMALQAMAMAFAOQAHARAAAQQAAANgHAGQgGAHgNACIhYAPQAEALAMAIQAMAFAPAAQAQAAAMgDQANgEAJgGQAFAEAFAHQADAHAAAIQAAARgPAJQgKAFgQAEQgNACgOAAQgVgBgRgGgAgMgwQgHAEgDAEQgEAFgCAGIgCAMIA8gKQgBgIgGgIQgJgIgMAAQgIAAgGADg");
	this.shape_34.setTransform(211.8,12,0.667,0.667);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ag/BdQgFgFgEgHQgDgHAAgKQAAgIADgHIAJgOIA+hNIhDAAIgEgKQgCgHAAgIQAAgNAGgHQAGgFAJgBIBwAAQAGAGADAIQAEAGAAAKQAAAIgEAHQgDAIgFAGIg8BNIBGAAIAEALQACAIAAAGQAAANgFAGQgGAHgJgBg");
	this.shape_35.setTransform(199.6,12,0.667,0.667);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgKCJQgHgBgEgDQgDgDgDgGQgCgGAAgLIAAibIAbgEIANABQAHACAEADQAEAEADAGQACAFAAALIAACbIgMACQgIABgHAAgAgXhOQgKgKABgPQgBgOAKgKQAJgKAOAAQAOAAAKAKQAKAKgBAOQABAOgKALQgKAKgOAAQgOAAgJgKg");
	this.shape_36.setTransform(190.3,9.2,0.667,0.667);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgnBmQgRgQAAgjIAAijIALgCQAIgCAIAAQAQAAAJAGQAHAFAAAUIAAAZIAwAAIAEAKQACAGAAAJQAAANgGAGQgGAGgJAAIghAAIAAA5QAAAKAGAFQAHADAKAAIALAAQAGgBAEgCQADADADAHQACAEAAAIQAAAPgKAJQgKAJgaAAQgeAAgSgPg");
	this.shape_37.setTransform(182.4,10.8,0.667,0.667);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgKCJQgGgBgFgDQgEgDgCgGQgDgGAAgLIAAibIAMgCIAQgCIANABQAHACADADQAFADADAHQACAFgBALIAACbIgLACQgHABgJAAgAgXhOQgJgKAAgPQAAgOAJgKQAJgKAOAAQAPAAAJAKQAJAKAAAOQAAAOgJALQgJAKgPAAQgOAAgJgKg");
	this.shape_38.setTransform(173.9,9.2,0.667,0.667);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgTB1QgWgIgPgPQgQgPgJgXQgJgXAAghQAAgdAIgXQAJgYAQgPQAPgQAUgHQAWgJAVAAQAhAAATALQASANAAARQAAALgFAGQgFAIgGAFQgJgIgLgEQgKgEgOAAQgcAAgOASQgPASAAAgQAAAiARARQAPATAcgBQAOAAALgDIAUgKQAGAGADAGQADAIAAAKQAAAQgQALQgRALghAAQgXAAgVgHg");
	this.shape_39.setTransform(163.8,10.5,0.667,0.667);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAtBhQgHgCgEgDQgEgDgDgGQgCgFAAgLIAAhaQAAgMgGgFQgGgGgMAAIgMACQgIADgFADIAACFIgLACIgQABIgOgBQgHgCgEgDQgEgDgCgGQgDgHAAgJIAAhyQAAgLAEgGQAGgIAFgEQAMgJAUgGQASgGAVAAQApAAAWATQAWASAAAjIAAB4IgLACIgQABg");
	this.shape_40.setTransform(145,11.9,0.667,0.667);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgiBfQgPgEgLgHQgLgHgGgMQgFgNAAgPQAAgbAOgNQAPgOAfgEIAugFIAAgDQAAgLgJgFQgJgEgQgBQgOAAgNADQgNADgLAFQgDgCgFgJQgCgGAAgJQAAgJAEgGQAFgHAJgDQAKgFAPgBQAMgCAOAAQARAAASADQAPAFAMAJQAMAJAGANQAFANAAASIAABVQAAALgEAGQgGAGgHAEQgXAPgrABQgTAAgPgFgAAAATQgKABgHADQgGAEgBAIQAAAHAGAFQAGAFAMAAIANgCQAIgBAEgCIAAgfg");
	this.shape_41.setTransform(131.2,12,0.667,0.667);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgNgNgIgTQgIgSAAgaQAAgaAIgRQAIgUAMgLQAMgLARgGQARgGAPABQAUAAAPAFQAOAGANALQALALAHAPQAGAPAAASQAAAOgHAFQgGAHgNACIhYAPQAEALAMAIQALAFAQAAQARAAALgDQAOgEAIgGQAGAFADAGQAEAGAAAJQAAARgPAJQgJAFgRAEQgMACgPAAQgUgBgSgGgAgMgwQgGAEgEAEQgEAFgCAGIgCAMIA8gKQAAgIgIgIQgHgIgNAAQgHAAgHADg");
	this.shape_42.setTransform(118.4,12,0.667,0.667);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgpBhQgGgCgFgDQgEgEgCgFQgCgHgBgJIAAhzQAAgJAEgGQACgGAHgFQAGgGAHgDIATgHIATgFIAVgCQARAAALAHQAJAHABARQgBAFgBAFIgEAKIgPAAIgeAGIgLAEIAACCIgKADIgQABg");
	this.shape_43.setTransform(107.3,12,0.667,0.667);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AglBcQgSgGgNgNQgMgOgHgSQgGgTgBgWQABgVAGgUQAHgRAMgOQANgMASgIQASgGATAAQAVAAARAGQATAJALAMQANAMAHATQAGAUAAAUQAAAXgGATQgHAUgNAMQgLAMgTAHQgQAGgWABQgVAAgQgIgAgXgjQgHAMgBAXQABAXAHANQAKAMAOAAQAOABAJgNQAHgNAAgXQAAgXgHgMQgJgNgPAAQgOAAgJANg");
	this.shape_44.setTransform(94.9,12,0.667,0.667);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AhGCCQgHgCgEgDQgFgEgCgFQgBgIAAgIIAAi4QAAgKADgHQAFgGAHgGQANgIAPgEQAQgFAVAAQAUAAATAGQASAGAOAMQAMANAJASQAHATAAAaQAAAXgGATQgHATgMAMQgNANgPAGQgRAGgUAAQgQAAgMgFIAABAIgMACIgQACgAgThNQgFABgEADIAABUIAJAEIALABQAkAAAAguQAAgZgKgMQgJgMgQAAQgFAAgHACg");
	this.shape_45.setTransform(81.1,14.1,0.667,0.667);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AghBfQgQgEgLgHQgLgHgGgMQgFgNAAgPQAAgbAOgNQAPgOAfgEIAvgFIAAgDQAAgLgKgFQgJgEgQgBQgOAAgNADQgOADgKAFQgEgCgEgJQgCgGAAgJQAAgJAEgGQAFgHAJgDQAKgFAPgBQAMgCAPAAQAQAAASADQAPAFAMAJQAMAJAGANQAFANAAASIAABVQAAALgEAGQgGAGgHAEQgXAPgrABQgTAAgOgFgAAAATQgKABgHADQgGAEgBAIQABAHAFAFQAHAFALAAIANgCQAIgBAEgCIAAgfg");
	this.shape_46.setTransform(67,12,0.667,0.667);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("Ag3B6QgTgJAAgWQAAgJAEgGQADgHAEgDQALAGANAEQANAEAOAAQASAAAMgHQAMgHAAgPIAAgGQgQAHgTAAQgQAAgPgGQgOgEgMgMQgLgLgGgRQgHgRAAgXQAAgXAHgSQAHgRAMgMQAMgKASgHQASgFASAAQAUAAARAFQATAHAKAIQAGAEAFAIQAEAHAAAKIAACFQAAAUgHAQQgHAPgNAJQgMAKgRAFQgQAEgTAAQghAAgSgJgAgQhEQgJAKAAAUQAAAWAJAKQAJAJAMAAQAPAAAJgHIAAhGIgIgEQgFgBgHAAQgQAAgJALg");
	this.shape_47.setTransform(53.7,14.2,0.667,0.667);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAtBhQgHgCgFgDQgEgDgCgGQgDgHAAgJIAAhaQAAgLgFgGQgHgGgLAAIgNACIgMAGIAACFIgLACIgQABIgPgBQgGgCgEgDQgFgDgCgGQgCgGAAgKIAAhyQAAgMAEgFQADgGAIgGQAMgKATgFQAUgGAUAAQAoAAAXATQAWATAAAiIAAB4IgLACIgRABg");
	this.shape_48.setTransform(40.2,11.9,0.667,0.667);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgKCJQgHgBgEgDQgEgEgCgFQgDgHAAgKIAAibIAMgCQAIgBAIgBIANABQAGACAEADQAFAEACAGQACAGAAAKIAACbIgMACQgHABgIAAgAgYhOQgIgLgBgOQABgOAIgKQAJgKAPAAQAPAAAJAKQAKALAAANQAAAOgKALQgJAKgPAAQgPAAgJgKg");
	this.shape_49.setTransform(29.8,9.2,0.667,0.667);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgmB4QgOgCgLgHQgKgEgHgJQgFgIgBgLQABgLAFgJQAIgIAGgDQAJAHAPAHQAPAGASAAQAQAAAIgFQAGgGAAgIQABgIgGgDQgFgFgLgDIgPgGQgMgEgQgIQgNgGgJgHQgJgIgGgNQgGgLAAgRQABghAXgUQAYgTApAAQASAAALACQAOADAJAEQAJAFAGAHQAFAIAAAKQAAALgEAGQgFAHgFAGQgIgGgOgEQgNgEgQAAQgQAAgHAFQgHAEAAAIQAAAGAEADQAEAEALADIASAGQAiANASAQQASASAAAfQAAAhgYAUQgYAUgvAAQgQAAgOgDg");
	this.shape_50.setTransform(19.9,10.5,0.667,0.667);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgfAiQgMgOAAgUQAAgTAMgOQAMgNATAAQAUAAAMANQAMAOAAATQAAAUgMAOQgMANgUAAQgTAAgMgNg");
	this.shape_51.setTransform(4.6,11,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.4,80.5);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CA0303").s().p("AhODYQgSgUAAgdQAAgfASgUQARgTAgAAQAdAAASATQARAUAAAfQAAAdgRAUQgSATgdAAQggAAgRgTgAhfAuQgKgQAAgZQAAgWALgLQAMgLAVgHIA2gOQAhgJAAgZQAAgOgMgLQgNgKgeAAQgcAAgZAIQgYAHgPALQgMgKgJgNQgIgOAAgUQAAgSAKgPQALgNASgLQASgJAagEQAYgEAfgBQBQAAApAnQAqAnAAA/QAABziaAiIhGAPQgMgHgKgRg");
	this.shape.setTransform(452.9,20,0.667,0.667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CA0303").s().p("AhYDgQgdAAgSgSQgRgTAAgfIAAk3QAAgfARgTQASgSAdAAIDiAAQAFAKADAMQAEAMAAAQQAAAcgLALQgLAMgTAAIiQAAIAABEICZAAQAFAIAEAOQAEANAAAOQAAAbgLALQgLAMgTAAIh9AAIAABOICwAAQAEAGAEAPQAEAPAAANQAAAbgLANQgMAMgSAAg");
	this.shape_1.setTransform(429.8,20.1,0.667,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CA0303").s().p("AhKDmQgbgGgUgLQgUgKgMgQQgLgQAAgVQAAgUALgQQAMgPAOgIQASAPAdANQAcAMAhAAQAgAAAOgLQAOgLAAgPQAAgPgLgIQgKgHgUgIIgdgKQgagJgdgNQgagNgRgOQgSgRgJgWQgKgVAAgiQAAg+AtgmQAtglBQAAQAdAAAaAEQAZAFATAJQASAKAKANQAKAQAAASQAAAUgIANQgHAMgNALQgPgLgZgHQgagIgeAAQgeAAgOAJQgPAJAAAOQAAALAJAIQAJAGASAGIAjANQBCAXAiAgQAiAiAAA7QAAA/guAmQgtAnhZAAQgeAAgdgFg");
	this.shape_2.setTransform(404.2,20,0.667,0.667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CA0303").s().p("ABuDjQgMgDgGgGQgIgGgEgJIgIgWIgMgzIh8AAIgLAuIgLAtIgUAHQgMACgOAAQgjAAgRgNQgRgMAAgXQAAgLADgKIAGgYIAOgyIATg/IAWhGIA2ijQALgHAYgHQAXgGAZAAQAiAAAaAKQAaALAIAXQANAnAOAyIBREvQgJALgQAGQgQAGgXAAQgQAAgMgDgAgWgtQgLAjgLApIBUAAIgliRIgEAAg");
	this.shape_3.setTransform(377.1,20,0.667,0.667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CA0303").s().p("AhYDgQgdAAgSgSQgRgTAAgfIAAk3QAAgeARgUQASgSAdAAIDiAAQAFAKADAMQAFAOgBAOQAAAbgLAMQgLAMgTAAIiQAAIAABEICZAAQAGAJADANQAEALAAAQQAAAbgLALQgLAMgTAAIh9AAIAABOICwAAQAFAIAEANQADANAAAPQAAAcgLAMQgMAMgSAAg");
	this.shape_4.setTransform(350.6,20.1,0.667,0.667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhPC4QgNgCgHgGQgIgHgFgLQgEgMAAgSIAAjbQAAgSAGgMQAFgMALgJQALgKARgIQAOgHAUgHQATgFATgEQATgDAVAAQAhAAATAOQATAOAAAfQAAAIgCAMIgHASIgeABQgPACgOACIgcAGQgNAEgIAEIAAD7IgVADQgQADgPAAQgNAAgOgDg");
	this.shape_5.setTransform(319.6,22.8,0.667,0.667);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhJCxQgggOgYgYQgXgYgOgkQgNgkAAgrQAAgqANgkQAOgkAXgYQAYgZAggNQAigNAnAAQApAAAhANQAhAOAXAZQAXAXAOAkQANAlAAApQAAAsgNAlQgOAlgXAXQgXAYghANQgjAMgnAAQgoAAghgNgAgshEQgPAYAAAsQAAAtAQAXQAQAYAcAAQAdAAAPgYQAQgZAAgrQAAgrgQgZQgQgXgdAAQgcAAgQAXg");
	this.shape_6.setTransform(296,23,0.667,0.667);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhXD6QgNgCgIgGQgJgIgDgKQgFgMAAgSIAAkwQAAglAMgbQAMgbAVgRQAUgRAcgJQAbgIAgAAQA0AAAXAPQAYAOAAAiQAAAQgGALQgGAMgHAGIgbgHQgPgCgSAAQgdAAgRAKQgPAMAAAaIAAAXIBwAAIAHAUQAEANAAAOQAAAagKAKQgMAMgRAAIhOAAIAADpIgWAEQgQADgOAAQgOAAgNgDg");
	this.shape_7.setTransform(273.7,18.4,0.667,0.667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgzCyQgjgMgZgZQgagXgPgmQgPglAAgwQAAgvAPgkQAPgkAYgWQAYgWAfgLQAfgKAfAAQAkAAAeALQAeAMAWAVQAXAWALAbQAMAdAAAiQAAAZgNAMQgNANgYAEIipAbQAIAYAXAMQAWANAfAAQAdAAAYgIQAagIAPgKQALAHAIANQAHAOAAAOQAAAhgdARQgVAMgcAFQgbAEgZAAQgmAAgkgMgAgXhcQgNAGgHAJQgHAIgEAMQgEAMgBAMIB1gVQgDgPgMgOQgOgPgZAAQgPAAgMAGg");
	this.shape_8.setTransform(241.1,23,0.667,0.667);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUD0QgNgDgIgGQgIgGgEgMQgEgMgBgSIAAmpIAXgEQAPgDAPAAQAMAAAOACQALACAJAHQAIAHAFALQAEAMAAASIAAGqIgWAEQgQACgOAAQgMAAgOgCg");
	this.shape_9.setTransform(222.1,18.9,0.667,0.667);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhZDuQgggMgVgRQgfgWAAglIAAmHIAWgEQAPgDAQAAQAOAAANACQAMACAJAHQAIAGAEAMQAEANAAARIAABIQATgHAOgDQAQgDARAAQAiAAAcAMQAfANAWAYQAXAYAMAjQAOAiAAAuQAAAxgOAjQgNAkgYAXQgYAYgjAMQgiAMgqAAQgtAAgggLgAgjgeQgJADgNAGIAACgQAHAEAMAEQAKADAQAAQAfAAARgXQASgWAAgvQAAgtgSgXQgRgWgeAAQgNAAgLACg");
	this.shape_10.setTransform(202.7,19.1,0.667,0.667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUEGQgNgDgIgFQgHgHgFgLQgFgNABgRIAAkrIAWgEQAQgCANAAQARAAAKACQALABAJAIQAIAGAFAMQAFALAAASIAAErIgXAEQgRADgNgBQgNABgNgDgAgtiWQgSgUAAgbQAAgbASgVQARgTAcAAQAdAAARATQASAVAAAbQAAAbgSAUQgRATgdAAQgcAAgRgTg");
	this.shape_11.setTransform(182.2,17.6,0.667,0.667);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhqDpQgkgSAAgpQAAgPAHgOQAHgNAHgHQAXANAWAHQAaAIAbAAQAkAAAWgNQAVgNAAgeIAAgMQgcAOgoAAQgeAAgcgKQgcgKgVgVQgVgVgMghQgNghgBgtQAAgtAOghQANghAZgWQAXgWAggKQAigLAlAAQAnAAAgALQAfAKAXARQAOAMAHALQAJANgBAUIAAEAQAAAogNAbQgPAdgWATQgYASghAJQggAJgjAAQg+AAgkgSgAggiEQgRAUAAAmQAAArARASQARASAZAAQAdAAAQgNIAAiHIgPgGQgHgDgPAAQgiAAgQAUg");
	this.shape_12.setTransform(162.2,27,0.667,0.667);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUEGQgMgDgIgFQgJgIgEgKQgFgNABgRIAAkrIAWgEQAQgCAOAAQAPAAALACQAMACAJAHQAHAGAFAMQAFALAAASIAAErIgXAEQgQADgNgBQgOABgNgDgAguiWQgRgUAAgbQAAgbARgVQATgTAbAAQAdAAARATQASAVAAAbQAAAbgSAUQgQATgeAAQgcAAgSgTg");
	this.shape_13.setTransform(143.3,17.6,0.667,0.667);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUD0QgNgDgIgGQgHgGgFgMQgFgMAAgSIAAmpIAXgEQAOgDAPAAQAOAAANACQALACAJAHQAIAHAFALQAEAMAAASIAAGqIgWAEQgQACgOAAQgMAAgOgCg");
	this.shape_14.setTransform(130.4,18.9,0.667,0.667);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgzCyQgjgMgZgZQgagXgPgmQgPglAAgwQAAgvAPgkQAPgkAYgWQAYgWAfgLQAfgKAfAAQAkAAAeALQAeAMAWAVQAXAWALAbQAMAdAAAiQAAAZgNAMQgNANgYAEIipAbQAIAYAXAMQAWANAfAAQAdAAAYgIQAZgIAQgKQALAHAIANQAHAOAAAOQAAAhgdARQgVAMgcAFQgbAEgZAAQgmAAgkgMgAgXhcQgMAGgIAJQgHAIgEAMQgEAMgBAMIB1gVQgDgPgMgOQgOgPgZAAQgPAAgMAGg");
	this.shape_15.setTransform(111.4,23,0.667,0.667);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgWDiQgNgDgIgGQgIgHgEgMQgEgNAAgSIAAmDIAYgFQASgCAOAAQANAAANACQANAEAIAGQAHAFAFANQAEANAAASIAAGDQgHADgRACQgOACgSAAQgQAAgKgCg");
	this.shape_16.setTransform(82.6,19.9,0.667,0.667);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ACwC5QgNgDgHgGQgJgHgFgLQgEgMAAgSIAAivQAAgWgMgKQgLgJgUAAQgKAAgKAEQgLAFgGAFIABAGIAAD5QgEABgTADQgQACgOAAQgMAAgOgCQgNgDgHgGQgJgGgEgMQgEgMAAgSIAAivQAAgVgNgLQgNgJgSAAQgNAAgIAEIgPAHIAAECIgWAEQgQACgPAAQgNAAgOgCQgNgDgHgGQgIgGgEgMQgFgMAAgSIAAjdQAAgUAIgMQAHgLAOgLQAXgRAkgLQAhgLAnAAQAeAAAZAIQAcAJASAQQAWgOAZgKQAZgJAlAAQAaAAAaAHQAYAHAUAQQAUAQALAaQAMAbAAAlIAADnIgWAEQgQACgOAAQgOAAgNgCg");
	this.shape_17.setTransform(47.1,22.8,0.667,0.667);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("ABuDjQgLgDgIgGQgHgGgEgJIgIgWIgNgzIh7AAIgLAuIgLAtIgUAHQgNACgNAAQgjAAgRgNQgRgMAAgXQAAgMADgJIBzlyQAKgHAZgHQAXgGAZAAQAiAAAaAKQAaALAIAXIBsGIQgIALgRAGQgQAGgXAAQgRAAgLgDgAgXgtQgLAjgKApIBUAAIgUhNIgShEIgDAAg");
	this.shape_18.setTransform(13.5,20,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,462.9,43.8);


(lib.text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYBXQgKgKAAgRQAAgQAKgKQAJgLAPAAQAQAAAKALQAJAKAAAQQAAARgJAKQgKALgQAAQgPAAgJgLgAgYghQgKgKAAgQQAAgRAKgKQAJgLAPAAQAQAAAKALQAJAKAAARQAAAQgJAKQgKALgQAAQgPAAgJgLg");
	this.shape.setTransform(397.4,69.8,0.667,0.667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgNgNgIgTQgIgSAAgaQAAgaAIgRQAIgUAMgLQAMgLARgGQARgGAPABQAUAAAPAFQAOAGANALQALALAHAPQAGAPAAASQAAAOgHAFQgGAHgNACIhYAPQAEALAMAIQALAFAQAAQARAAALgDQAOgEAIgGQAGAFADAGQAEAGAAAJQAAARgPAJQgJAFgRAEQgMACgPAAQgUgBgSgGgAgMgwQgGAEgEAEQgEAFgCAGIgCAMIA8gKQAAgIgIgIQgHgIgNAAQgHAAgHADg");
	this.shape_1.setTransform(387.8,69.6,0.667,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgpBhQgHgCgEgDQgEgEgCgFQgCgHgBgJIAAhzQAAgJAEgGQACgGAHgFQAGgGAHgDIATgHIATgFIAVgCQASAAAKAHQAKAHAAARQgBAFgBAFIgEAKIgPAAIgeAGIgLAEIAACCIgKADIgRABg");
	this.shape_2.setTransform(376.6,69.6,0.667,0.667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghBfQgQgEgKgHQgMgHgFgMQgHgNAAgPQABgbAPgNQAPgOAegEIAugFIAAgDQABgKgKgGQgJgEgQgBQgOAAgNADQgNADgLAFQgEgCgDgJQgEgGAAgJQABgJAEgGQAFgHAJgDQALgFANgBQANgCAOAAQARAAASADQAPAFAMAJQAMAJAGAMQAFAOABASIAABVQgBALgEAGQgFAGgIAEQgXAPgrABQgUAAgNgFgAgBATQgJABgHADQgHAEABAIQAAAHAFAFQAHAFALAAQAHAAAHgCQAIgBACgCIAAgfg");
	this.shape_3.setTransform(364.5,69.6,0.667,0.667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AggBdQgQgFgMgKQgMgIgHgRQgGgQAAgVIAAhtIALgCIAQgBIAPABQAGABAEADQAFAEACAGQACAGAAAKIAABRQAAAQAHAHQAIAHAMAAQAJAAAFgCQAFgBADgCIAAiGIALgCIAQgBIAOABQAHABAEADQAFAFACAFQACAGAAAKIAAB0QAAATgPAKQgMAIgSAFQgRAEgVAAQgSAAgRgEg");
	this.shape_4.setTransform(743.2,41,0.667,0.667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglBcQgSgHgMgMQgNgOgHgSQgGgTAAgWQAAgVAGgUQAHgRANgOQAMgMASgIQARgGAUAAQAUAAASAGQASAIANANQAMAMAHATQAGAUABAUQgBAXgGATQgHATgMANQgMAMgTAHQgQAGgWABQgWAAgPgIgAgXgjQgHAMAAAXQgBAYAJAMQAJAMANAAQAPABAJgNQAHgNABgXQgBgXgHgMQgJgNgPAAQgOAAgJANg");
	this.shape_5.setTransform(729.2,40.8,0.667,0.667);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag4B4QgJgKgCgPIAXgWIAVgXQgFgDgIgGQgIgJgHgSIgJgVIgJgbIgKgkIgLgtQAGgGAHgEQAIgDALAAQANAAAIAFQAIAFAEAQIAbBpIACAAIAeh8QANgIAPABQAMAAAJAFQAIAGAAAOQAAAJgCAPIgHAeIgKAfIgLAgQgGAOgHAPQgEAKgJAQQgHAPgLAPQgKANgHAGQgHAHgIACQgHADgJAAQgQAAgJgKg");
	this.shape_6.setTransform(715.5,43,0.667,0.667);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgtCDQgIgCgDgDQgDgCgEgHQgCgFAAgLIAAieQAAgTAGgPQAHgOALgJQAKgJAPgEQAQgEAOAAQAbAAAMAHQANAIAAASQAAAIgDAGQgDAGgEADIgOgDQgIgCgJAAQgQAAgIAGQgIAFAAAOIAAANIA6AAIAEAKQACAGAAAIQAAANgFAGQgGAGgJAAIgpAAIAAB6IgLACIgQABg");
	this.shape_7.setTransform(699.5,38.5,0.667,0.667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgLB2QgHgCgEgDQgEgDgDgGQgCgGAAgKIAAjLIAdgDQAIgBAHACQAFACAFACQAFAEACAHQABAFAAAKIAADLIgcADQgIAAgGgBg");
	this.shape_8.setTransform(690.2,39.2,0.667,0.667);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZB3QgIgJgBgRQAAgPAJgLQAJgJAQgBQAQABAKAJQAJALAAAPQAAARgJAJQgKALgQAAQgQAAgJgLgAAAAnQgJAAgIgDQgGgDgDgKIgHiPIAQgGQAIgDAJAAQAPAAAJAHQAHAHABAQIgFBjQgCAUgDAOIgEACIgMADg");
	this.shape_9.setTransform(678.1,38.9,0.667,0.667);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgNgMgIgUQgIgSAAgaQAAgaAIgRQAIgUAMgLQAMgLARgGQARgGAPABQATAAAQAFQAPAGAMALQAMAMAFAOQAHAPAAASQAAANgHAGQgGAHgNACIhYAPQAFAMALAHQALAFAQAAQAQAAAMgDQAOgEAIgGQAGAGADAFQAEAHAAAIQAAARgPAJQgKAFgQAEQgMACgPAAQgVgBgRgGgAgMgwQgFADgFAFQgEAFgCAGIgCAMIA8gKQgBgJgHgHQgHgIgNAAQgIAAgGADg");
	this.shape_10.setTransform(668,40.8,0.667,0.667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgKCAQgHgCgEgDQgEgEgCgFQgDgHAAgJIAAjeIAMgDIAQgBIANABQAGACAFADQAEADACAGQADAHAAAJIAADeIgMACQgIACgIAAg");
	this.shape_11.setTransform(658,38.7,0.667,0.667);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhGCCQgHgCgEgDQgFgEgCgFQgCgIAAgIIAAi4QAAgKAEgHQAGgHAGgFQAMgIAQgEQARgFAUAAQAVAAASAGQATAGANAMQANANAHASQAIAUAAAZQAAAXgGATQgHATgMAMQgNANgPAGQgRAGgUAAQgPAAgNgFIAABAIgMACQgHACgJAAgAgThNIgJAEIAABUIAJAEIAKABQAkAAAAguQABgZgKgMQgIgMgRAAIgMACg");
	this.shape_12.setTransform(647.9,42.9,0.667,0.667);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABcBhQgGgCgEgDQgEgDgDgGQgCgGAAgKIAAhbQgBgLgFgGQgIgFgKAAQgEAAgGACQgHAEgBACIAACFIgMACIgQABIgNgBQgHgCgEgDQgEgDgCgGQgDgFAAgLIAAhbQAAgLgGgGQgHgFgJAAQgGAAgGACIgIAFIAACGIgLACIgPABIgPgBQgGgCgEgDQgFgDgCgGQgDgFABgLIAAhzQAAgKADgGQAFgHAHgFQALgKAUgFQASgGATAAQAPAAAOAFQAOADAKAJQAJgGAQgGQAMgFAUAAQAPAAALAEQAPAEAJAIQAKAIAHAOQAFANAAAUIAAB5IgLACIgQABg");
	this.shape_13.setTransform(630.5,40.7,0.667,0.667);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgKCJQgGgBgEgDQgEgDgDgGQgCgGAAgKIAAicIALgCQAIgBAIgBIANABQAGACAEADQAFADACAHQACAFAAALIAACbIgLACIgQABgAgYhOQgIgLgBgOQABgOAIgKQAKgKAOAAQAPAAAKAKQAIAKABAOQgBAOgIALQgKAKgPAAQgOAAgKgKg");
	this.shape_14.setTransform(616.9,38,0.667,0.667);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AggBiQgNgDgKgEQgIgFgGgIQgFgHAAgKQAAgJADgGQAFgHAEgEQAKAFAOAGQAOAFARgBQALABAFgEQAHgDgBgGQAAgGgEgDQgEgCgJgDIgLgCQgfgGgPgOQgQgOAAgaQAAgOAGgLQAFgLALgJQALgIAOgEQAPgEAQAAQAKAAAPACQANACAIAFQAJAEAEAHQAFAGABAKQgBAJgDAFQgDAHgFAEQgDgCgFgCIgagHIgOgBQgKAAgHADQgGADAAAGQAAAFAEACIAMAGIALACQAiAIAPAPQAPAOAAAYQAAAdgVAQQgUARgnAAQgOAAgOgCg");
	this.shape_15.setTransform(607.8,40.8,0.667,0.667);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AggBiQgPgDgIgEQgJgFgFgIQgFgGAAgLQAAgKAEgFQADgHAFgEQAJAFAPAGQANAFATgBQAKABAGgEQAFgDAAgGQABgGgFgDQgEgCgKgDIgKgCQgfgGgQgOQgPgOAAgaQAAgOAGgLQAFgLALgJQAMgIANgEQAOgEARAAQAKAAAPACQAMACAIAFQAKAFAEAGQAFAGAAAKQAAAIgDAGQgDAHgEAEQgEgCgFgCIgbgHIgMgBQgLAAgHADQgHADABAGQAAAEADADQADADAKADIALACQAjAIAOAPQAPAOAAAYQAAAdgUAQQgWARgmAAQgNAAgPgCg");
	this.shape_16.setTransform(591.2,40.8,0.667,0.667);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgKCJQgHgBgEgDQgDgDgDgGQgCgHgBgJIAAicIAMgCQAIgBAIgBIANABQAHACAEADQAFAFABAFQADAGAAAKIAACbIgMACQgIABgHAAgAgXhOQgKgLABgOQgBgNAKgLQAJgKAOAAQAPAAAJAKQAKAKgBAOQABAOgKALQgJAKgPAAQgOAAgJgKg");
	this.shape_17.setTransform(581.7,38,0.667,0.667);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAsBhQgGgCgFgDQgEgDgCgGQgDgHAAgJIAAhaQAAgLgFgGQgHgGgKAAQgFAAgJACIgMAGIAACFIgMACIgPABIgPgBQgGgCgEgDQgFgDgCgGQgCgGAAgKIAAhyQAAgMAEgFQAEgHAIgFQALgKATgFQATgGAWAAQAoAAAWATQAWATAAAiIAAB4IgLACIgRABg");
	this.shape_18.setTransform(566.6,40.7,0.667,0.667);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgmBcQgRgHgMgMQgNgOgHgSQgGgRAAgYQAAgXAGgSQAHgRANgOQAMgMARgIQASgGAUAAQAUAAASAGQASAIAMANQANAMAGATQAHAUAAAUQAAAXgHATQgGATgNANQgMAMgSAHQgQAGgWABQgWAAgQgIgAgXgjQgIAMAAAXQAAAYAJAMQAIAMAOAAQAQABAHgNQAJgNAAgXQAAgWgJgNQgIgNgPAAQgOAAgJANg");
	this.shape_19.setTransform(552.6,40.8,0.667,0.667);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgKCJQgHgBgEgDQgFgDgCgGQgCgGAAgKIAAicIAMgCQAHgBAJgBIANABQAGACAFADQAEAEACAGQACAGABAKIAACbIgMACIgQABgAgXhOQgJgLAAgOQAAgOAJgKQAIgKAPAAQAPAAAJAKQAJAJAAAPQAAAPgJAKQgJAKgPAAQgPAAgIgKg");
	this.shape_20.setTransform(542.1,38,0.667,0.667);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgnBmQgRgQAAgjIAAijIAMgCQAHgCAIAAQAQAAAIAGQAJAGgBATIAAAZIAvAAIAFAKQACAIAAAHQAAANgGAGQgFAGgJAAIgiAAIAAA5QAAAKAHAFQAGADAKAAIAMAAIAKgDIAFAKQACAFABAHQAAAPgLAJQgJAJgbAAQgeAAgSgPg");
	this.shape_21.setTransform(534.2,39.6,0.667,0.667);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgiBfQgQgEgKgHQgLgHgFgMQgHgNAAgPQAAgbAPgNQAPgOAfgEIAugFIAAgDQAAgKgJgGQgKgEgQgBQgNAAgOADQgMADgKAFQgGgDgCgIQgEgGAAgJQAAgJAFgGQAEgGAJgEQALgFAOgBQAMgCAPAAQASAAARADQAOAEANAKQALAIAHANQAFAOABASIAABVQAAAKgGAHQgFAFgHAFQgYAPgqABQgUAAgOgFgAgBATQgKABgGADQgHADABAJQgBAIAGAEQAGAFAMAAIAOgCQAHgBADgCIAAgfg");
	this.shape_22.setTransform(522.3,40.8,0.667,0.667);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgRBcQgSgGgNgOQgNgMgIgTQgGgSAAgWQgBgYAIgTQAJgTAMgNQAPgMAQgGQAQgGAUAAQAZAAAPAKQAOAKAAAQQAAAHgDAGQgEAHgEAEIgOgGQgKgDgKAAQgIAAgJADQgIADgFAGQgFAGgEAJQgDAJAAALQgBAYANAMQAMAMASAAQAKAAAJgDIAOgGQAHAFAEAHQAEAHAAAIQAAAQgPAJQgNAIgZAAQgYAAgRgHg");
	this.shape_23.setTransform(510.2,40.8,0.667,0.667);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgKCJQgHgBgDgDQgEgDgEgGQgBgGAAgKIAAicIALgCQAHgBAJgBIANABQAGACAFADQAEAEACAGQADAEAAAMIAACbIgMACIgQABgAgXhOQgJgLAAgOQAAgOAJgKQAJgKAOAAQAOAAAKAKQAKAKgBAOQABAOgKALQgKAKgOAAQgOAAgJgKg");
	this.shape_24.setTransform(501,38,0.667,0.667);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKCAQgHgCgEgDQgEgEgCgFQgDgHAAgJIAAjeIAMgDIAQgBIANABQAGACAFADQAEADACAGQADAHAAAJIAADeIgMACQgIACgIAAg");
	this.shape_25.setTransform(494.2,38.7,0.667,0.667);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhGCCQgHgCgEgDQgFgEgCgFQgCgIAAgIIAAi4QAAgKAFgHQAFgHAGgFQAMgIAQgEQARgFAUAAQAVAAASAGQASAGAOAMQANANAHASQAIAUAAAZQAAAXgGATQgHATgMAMQgNANgPAGQgRAGgUAAQgPAAgNgFIAABAIgMACQgIACgIAAgAgThNIgJAEIAABUIAJAEIAKABQAlAAgBguQABgZgKgMQgIgMgRAAIgMACg");
	this.shape_26.setTransform(484.1,42.9,0.667,0.667);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhGCCQgHgCgEgDQgEgDgCgGQgCgGAAgKIAAi4QAAgKAEgHQAFgHAGgFQANgIAPgEQAQgFAVAAQAVAAASAGQATAHANALQANANAIASQAHATAAAaQAAAZgGARQgGARgMAOQgNANgQAGQgRAGgUAAQgPAAgNgFIAABAIgMACQgHACgJAAgAgThNIgJAEIAABUIAJAEIALABQAkAAAAguQAAgZgJgMQgKgMgQAAQgFAAgHACg");
	this.shape_27.setTransform(470.1,42.9,0.667,0.667);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AA5B3IgJgFQgDgDgEgFIgDgLIgHgbIhAAAIgLAwIgLADQgGACgIAAQgRAAgKgHQgIgHgBgMIABgLIA9jBQAGgEANgDQAOgEAKAAQAQAAAPAGQAOAGAEAMIAOAuIAPA2IAPA4IAMAxQgEAGgIACQgKAEgLAAQgIAAgHgCgAgMgXIgLAnIAsAAIgKgnQgDgNgHgXIgBAAg");
	this.shape_28.setTransform(455.3,39.3,0.667,0.667);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgZAbQgJgLAAgQQAAgPAJgLQAKgLAPAAQAQAAAJALQAKAKAAAQQAAARgKAKQgJALgQAAQgPAAgKgLg");
	this.shape_29.setTransform(440.1,45,0.667,0.667);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AggBiQgPgDgHgEQgJgFgFgIQgGgHAAgKQAAgJAEgGQADgHAFgEQAKAFAOAGQAOAFASgBQAKABAFgEQAHgDgBgGQAAgGgEgDQgDgCgKgDIgLgCQgfgGgPgOQgQgOAAgaQAAgOAGgLQAFgLALgJQALgIAOgEQAPgEARAAIAZACQANACAHAFQAIAEAFAHQAGAHAAAJQAAAIgDAGQgDAGgFAFQgEgDgFgBIgagHIgOgBQgLAAgGADQgGADAAAGQAAAFADACIANAGIAMACQAhAIAPAPQAPAOAAAYQAAAdgUAQQgVARgnAAQgOAAgOgCg");
	this.shape_30.setTransform(431.4,40.8,0.667,0.667);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgpBhQgGgCgEgDQgEgDgDgGQgCgFAAgLIAAhzQAAgJADgGQACgGAHgFQAFgFAJgEIASgHQAMgEAHgBIAVgCQASAAAJAHQAKAHAAARIgBAKIgEAKIgPAAIgeAGIgLAEIAACCIgKADIgQABg");
	this.shape_31.setTransform(420.9,40.8,0.667,0.667);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgiBfQgQgEgKgHQgKgHgHgMQgFgNAAgPQAAgbAOgNQAQgOAegEIAugFIAAgDQAAgKgJgGQgJgEgQgBQgOAAgNADQgNADgLAFQgEgEgEgHQgCgGgBgJQABgJAEgGQAFgGAIgEQALgFAPgBQAMgCAOAAQARAAASADQAPAFAMAJQAMAJAGAMQAFAOAAASIAABVQAAALgEAGQgFAFgIAFQgXAPgrABQgUAAgOgFgAAAATQgKABgHADQgHADAAAJQAAAHAGAFQAHAFALAAIAOgCQAIgBADgCIAAgfg");
	this.shape_32.setTransform(408.7,40.8,0.667,0.667);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgNgMgIgUQgIgSAAgaQAAgaAIgRQAIgUAMgLQAMgLARgGQARgGAPABQATAAAQAFQAPAGAMALQALAMAHAOQAGAPAAASQAAANgHAGQgGAHgNACIhYAPQAEALAMAIQALAFAQAAQAQAAAMgDQAOgEAIgGQAGAGADAFQAEAHAAAIQAAARgPAJQgKAFgQAEQgMACgPAAQgVgBgRgGgAgMgwQgGAEgEAEQgEAGgCAFQgCAGAAAGIA8gKQAAgIgIgIQgHgIgNAAQgIAAgGADg");
	this.shape_33.setTransform(395.9,40.8,0.667,0.667);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag4B4QgJgLgCgOIAXgWIAVgXQgGgDgHgGQgHgIgIgTIgSgwIgVhRQAGgGAHgEQAIgDALAAQANAAAIAFQAIAFAEAQIAbBpIACAAIAQg7QAFgSADgPIAGggQANgIAPABQANAAAIAFQAIAGAAAOQAAANgCALIgHAeIgKAfIgLAgQgHASgGALIgMAaQgMAUgHAKQgJAMgIAHQgGAGgJADQgGADgKAAQgPAAgKgKg");
	this.shape_34.setTransform(382.7,43,0.667,0.667);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAsBhQgGgCgFgDQgEgDgCgGQgCgHgBgJIAAhaQAAgLgFgGQgHgGgLAAIgNACIgMAGIAACFIgMACIgPABIgPgBQgGgCgEgDQgFgDgCgGQgCgGAAgKIAAhyQAAgMAEgFQAEgGAHgGQAMgKATgFQATgGAVAAQAoAAAXATQAWATAAAiIAAB4IgLACIgQABg");
	this.shape_35.setTransform(364.3,40.7,0.667,0.667);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgNgNgIgTQgIgSAAgaQAAgaAIgRQAIgUAMgLQAMgLARgGQARgGAPABQAUAAAPAFQAOAGANALQALALAHAPQAGAPAAASQAAANgHAGQgGAHgNACIhYAPQAEALAMAIQAMAFAPAAQARAAALgDQAOgEAIgGQAGAFADAGQAEAGAAAJQAAARgPAJQgJAFgRAEQgMACgPAAQgUgBgSgGgAgMgwQgGAEgEAEQgEAFgCAGIgCAMIA8gKQAAgIgIgIQgHgIgNAAQgHAAgHADg");
	this.shape_36.setTransform(350.7,40.8,0.667,0.667);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AggB7QgTgHgMgNQgNgNgGgSQgHgTAAgWQAAgaAHgSQAHgRANgOQANgMARgGQARgGATAAQAHAAAHACIALADIAAg/IAMgCIAQgBIAOABQAFAAAGAEQAEAFACAFQACAIAAAHIAAC2QAAASgQALQgLAIgQAFQgRAFgVAAQgXAAgSgHgAgRgFQgKALAAAZQAAAXAJANQAKAMASAAQAHAAAEgCQAGgCACgDIAAhUQgGgFgLAAQgSAAgLAMg");
	this.shape_37.setTransform(336.8,38.8,0.667,0.667);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgKCAQgGgCgFgDQgEgDgCgGQgDgFAAgLIAAjeIAMgDIAQgBIANABQAHACADADQAEADADAGQACAGAAAKIAADeIgLACQgHACgJAAg");
	this.shape_38.setTransform(326.7,38.7,0.667,0.667);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgmBcQgRgHgMgMQgNgOgHgSQgGgRAAgYQAAgXAGgSQAHgRANgOQAMgMARgIQASgGAUAAQAUAAASAGQASAIAMANQANAMAGATQAHAUAAAUQAAAXgHATQgGATgNANQgMAMgSAHQgQAGgWABQgWAAgQgIgAgWgjQgJAMAAAXQAAAXAJANQAIAMAOAAQAQABAHgNQAJgNAAgXQAAgWgJgNQgIgNgPAAQgOAAgIANg");
	this.shape_39.setTransform(316.3,40.8,0.667,0.667);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("Ag3B6QgTgJAAgWQAAgJAEgGQADgIAEgCQALAGANAEQANAEAOAAQASAAAMgHQAMgHAAgPIAAgGQgQAHgTAAQgQAAgQgGQgNgEgMgMQgMgMgFgQQgHgQAAgYQAAgZAHgQQAHgRANgMQALgKASgHQARgFATAAQATAAASAFQATAHAJAIQAHAEAFAIQAEAHAAAKIAACFQAAAUgHAQQgIAOgMAKQgNALgQAEQgRAEgSAAQggAAgTgJgAgQhEQgJAKAAAUQAAAWAJAKQAIAJANAAQAPAAAJgHIAAhGIgIgEQgEgBgIAAQgRAAgIALg");
	this.shape_40.setTransform(302.2,43,0.667,0.667);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgpBhQgHgCgDgDQgFgDgCgGQgCgGAAgKIAAhzQAAgJADgGQACgFAGgGQAGgFAJgEIASgHQAMgEAHgBIAVgCQASAAAJAHQAKAHAAARQAAAFgBAFIgEAKIgPAAIgeAGIgLAEIAACCIgLADIgQABg");
	this.shape_41.setTransform(286.4,40.8,0.667,0.667);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AggBdQgQgFgNgKQgLgJgHgQQgGgPAAgWIAAhtIALgCIAQgBIAOABQAGABAFADQAEAEADAGQACAGAAAKIAABRQAAAQAHAHQAIAHAMAAQAIAAAGgCQAGgBACgCIAAiGIALgCIAQgBIAOABQAHABAEADQAEAEACAGQADAGAAAKIAAB0QAAATgPAKQgMAIgSAFQgSAEgVAAQgRAAgRgEg");
	this.shape_42.setTransform(274,41,0.667,0.667);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgmBcQgRgHgMgMQgNgOgHgSQgGgRAAgYQAAgXAGgSQAHgRANgOQAMgMARgIQASgGAUAAQAUAAASAGQASAIAMANQANAMAGATQAHAUAAAUQAAAXgHATQgGATgNANQgMAMgSAHQgQAGgWABQgWAAgQgIgAgXgjQgIAMAAAXQAAAXAJANQAIAMAOAAQAQABAHgNQAJgNAAgXQAAgWgJgNQgIgNgPAAQgOAAgJANg");
	this.shape_43.setTransform(260,40.8,0.667,0.667);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgmBcQgRgHgMgMQgNgOgHgSQgGgRAAgYQAAgXAGgSQAHgRANgOQAMgMARgIQASgGAUAAQAUAAASAGQASAIAMANQANAMAGATQAHAUAAAUQAAAXgHATQgGATgNANQgMAMgSAHQgQAGgWABQgWAAgQgIgAgWgjQgJAMAAAXQAAAXAJANQAIAMAOAAQAQABAHgNQAJgNAAgXQAAgWgJgNQgIgNgPAAQgOAAgIANg");
	this.shape_44.setTransform(241.2,40.8,0.667,0.667);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgnBmQgRgQAAgjIAAijIALgCQAIgCAIAAQAQAAAJAGQAIAGAAATIAAAZIAvAAIAEAKQACAIAAAHQAAANgGAGQgGAGgIAAIghAAIAAA5QgBAKAHAFQAGADAKAAIAMAAIAKgDIAFAKQADAFAAAHQAAAPgLAJQgKAJgaAAQgeAAgSgPg");
	this.shape_45.setTransform(229.6,39.6,0.667,0.667);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAtBhQgHgCgEgDQgEgDgCgGQgDgFAAgLIAAhaQAAgMgGgFQgHgGgLAAIgNACQgGACgGAEIAACFIgLACIgQABIgPgBQgGgCgEgDQgEgDgCgGQgDgHAAgJIAAhyQAAgLAEgGQAGgIAFgEQAMgJATgGQATgGAVAAQApAAAWATQAWASAAAjIAAB4IgLACIgQABg");
	this.shape_46.setTransform(212.7,40.7,0.667,0.667);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgKCJQgGgBgEgDQgFgDgCgGQgCgGAAgKIAAicIAbgEIANABQAHACADADQAFADACAHQACAFAAALIAACbIgLACQgIABgIAAgAgXhOQgKgKAAgPQAAgPAKgJQAJgKAOAAQAPAAAKAKQAIAKABAOQgBAOgIALQgKAKgPAAQgOAAgJgKg");
	this.shape_47.setTransform(202.3,38,0.667,0.667);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgOgOgHgSQgIgSAAgaQAAgaAIgRQAHgTANgMQAMgLARgGQARgGAPABQATAAAQAFQAPAGAMALQAMAMAFAOQAHAPAAASQAAANgHAGQgGAHgNACIhYAPQAFAMALAHQALAFAQAAQAQAAAMgDQAOgEAHgGQAHAFADAGQAEAHAAAIQAAARgPAJQgKAFgQAEQgMACgPAAQgVgBgRgGgAgMgwQgGAEgEAEQgEAFgCAGIgCAMIA8gKQgBgJgHgHQgHgIgNAAQgIAAgGADg");
	this.shape_48.setTransform(187.6,40.8,0.667,0.667);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgWBeQgKgEgEgIIgRgtIgkh4QAGgGAHgEQAIgEALAAQANAAAIAGQAIAFAEAQIAaBvIACAAIAciDQAHgEAGgBQAIgCAHAAQAMAAAKAGQAIAGAAAOQAAAFgCANIgRA5IghBUQgDAEgLADQgLADgLAAQgOAAgKgEg");
	this.shape_49.setTransform(174.4,40.9,0.667,0.667);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgKCJQgHgBgEgDQgDgDgDgGQgCgHgBgJIAAicIAMgCQAIgBAIgBIANABQAHACAEADQAEAFADAFQACAGAAAKIAACbIgMACQgHABgIAAgAgXhOQgJgLAAgOQAAgNAJgLQAJgKAOAAQAQAAAIAKQAJAKAAAOQAAAOgJALQgIAKgQAAQgOAAgJgKg");
	this.shape_50.setTransform(164.5,38,0.667,0.667);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgKCAQgHgCgDgDQgEgDgDgGQgDgFABgLIAAjeIALgDIAQgBIANABQAHACAEADQADADADAGQADAGAAAKIAADeIgMACQgIACgHAAg");
	this.shape_51.setTransform(157.8,38.7,0.667,0.667);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgmBcQgRgHgMgMQgNgOgHgSQgGgRAAgYQAAgXAGgSQAHgRANgOQAMgMARgIQASgGAUAAQAUAAASAGQASAIAMANQANAMAGATQAHAUAAAUQAAAXgHATQgGATgNANQgMAMgSAHQgQAGgWABQgWAAgQgIgAgXgjQgIAMAAAXQAAAXAJANQAIAMAOAAQAQABAHgNQAJgNAAgXQAAgWgJgNQgIgNgPAAQgNAAgKANg");
	this.shape_52.setTransform(142.6,40.8,0.667,0.667);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgnBmQgRgQAAgjIAAijIAMgCQAHgCAIAAQAQAAAJAGQAHAGAAATIAAAZIAwAAIAEAKQACAIAAAHQAAANgGAGQgGAGgIAAIgiAAIAAA5QAAAKAHAFQAGADALAAIALAAIAKgDIAFAKQACAFABAHQAAAPgLAJQgKAJgaAAQgfAAgRgPg");
	this.shape_53.setTransform(131,39.6,0.667,0.667);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgOgNgHgTQgIgUAAgYQAAgZAIgSQAHgTAOgMQAKgKASgHQASgGAOABQATAAAQAFQAPAGAMALQAMAMAFAOQAHAPAAASQAAANgHAGQgGAHgNACIhYAPQAEALAMAIQAMAFAPAAQAQAAAMgDQANgEAJgGQAFAEAFAHQADAHAAAIQAAARgPAJQgKAFgPAEQgOACgNAAQgWgBgRgGgAgLgwQgHAEgEAEQgEAFgCAGIgCAMIA9gKQgCgJgGgHQgIgIgNAAQgIAAgFADg");
	this.shape_54.setTransform(114.6,40.8,0.667,0.667);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgWBeQgKgEgEgIQgDgGgFgNIgtiSQAGgGAHgEQAIgEALAAQANAAAIAGQAHAFAFAQIAaBvIABAAIAciDIAOgFQAHgCAIAAQANAAAIAGQAJAGAAAOQAAAHgDALIgGAaIgKAfIghBUQgEAEgKADQgLADgLAAQgOAAgKgEg");
	this.shape_55.setTransform(101.4,40.9,0.667,0.667);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgKCJQgGgBgFgDQgEgDgCgGQgDgGAAgKIAAicIAMgCIAQgCIANABQAHACADADQAGAEACAGQABAFAAALIAACbIgLACQgHABgJAAgAgXhOQgKgKAAgPQAAgPAKgJQAJgKAOAAQAOAAALAKQAIAKABAOQgBAOgIALQgLAKgOAAQgOAAgJgKg");
	this.shape_56.setTransform(91.5,38,0.667,0.667);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgRBcQgSgGgNgOQgMgMgIgTQgIgSABgWQAAgYAHgTQAJgTAMgNQAPgMAQgGQARgGATAAQAZAAAPAKQAOAKAAAQQAAAHgEAGQgDAHgEAEIgOgGQgKgDgJAAQgJAAgIADQgIADgGAGQgFAGgEAJQgEAJABALQAAAYAMAMQAMAMATAAQAJAAAJgDIAOgGQAHAFAEAHQADAHABAIQgBARgOAIQgNAIgaAAQgXAAgRgHg");
	this.shape_57.setTransform(82.2,40.8,0.667,0.667);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AggBdQgRgFgLgKQgMgIgGgRQgHgPAAgWIAAhtIALgCIAQgBIAPABQAGABAEADQAFAEACAGQACAFAAALIAABRQAAARAIAGQAGAHAOAAQAIAAAFgCIAIgDIAAiGIALgCIAQgBIAPABQAFABAFADQAFAEACAGQACAFAAALIAAB0QAAATgPAKQgMAIgSAFQgSAEgUAAQgSAAgRgEg");
	this.shape_58.setTransform(69.4,41,0.667,0.667);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AggB7QgTgHgMgNQgNgMgHgTQgGgSAAgXQAAgZAHgTQAIgTAMgMQANgMARgGQARgGATAAQAHAAAHACIALADIAAg/IALgCIARgBIAOABQAFAAAFAEQAFAEACAGQACAGAAAJIAAC2QAAASgQALQgLAIgQAFQgRAFgVAAQgYAAgRgHgAgRgFQgKALAAAZQAAAYAJAMQAKAMARAAQAIAAAEgCQAGgCACgDIAAhUQgHgFgKAAQgSAAgLAMg");
	this.shape_59.setTransform(55.1,38.8,0.667,0.667);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAtBhQgHgCgEgDQgEgDgCgGQgDgHAAgJIAAhaQAAgMgGgFQgHgGgKAAIgOACQgHADgFADIAACFIgLACIgQABIgOgBQgHgCgEgDQgEgDgDgGQgCgHAAgJIAAhyQAAgLAFgGQADgGAIgGQAMgKASgFQAUgGAVAAQAnAAAYATQAVASAAAjIAAB4IgLACIgQABg");
	this.shape_60.setTransform(41.3,40.7,0.667,0.667);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgmBcQgQgGgNgNQgOgOgFgSQgIgTABgWQgBgVAIgUQAGgRANgOQANgMAQgIQASgGAUAAQAUAAATAGQASAJALAMQANAMAGATQAIAUAAAUQAAAXgIATQgGAUgNAMQgLAMgSAHQgRAGgWABQgWAAgQgIgAgWgjQgJAMABAXQgBAXAJANQAJAMANAAQAPABAJgNQAIgNAAgXQAAgXgIgMQgJgNgPAAQgOAAgIANg");
	this.shape_61.setTransform(27.3,40.8,0.667,0.667);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgQBcQgRgGgPgOQgOgNgGgSQgIgSAAgWQABgZAHgSQAIgTAOgNQAOgNAQgFQARgGATAAQAZAAAPAKQAOAJAAARQAAAHgDAGIgHALIgQgGQgIgDgKAAQgJAAgJADQgIAEgEAFQgGAGgEAJQgDAJgBALQABAYANAMQAMAMARAAQALAAAIgDIAOgGQAHAFAEAHQAEAGgBAJQAAARgNAIQgOAIgaAAQgXAAgQgHg");
	this.shape_62.setTransform(14.4,40.8,0.667,0.667);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgOgOgHgSQgIgTAAgZQAAgaAIgRQAHgTANgMQAMgLARgGQARgGAPABQATAAAQAFQAPAGAMALQAMAMAFAOQAHAPAAASQAAANgHAGQgGAHgNACIhYAPQAFAMALAHQALAFAQAAQAQAAAMgDQAOgEAHgGQAHAFADAGQAEAHAAAIQAAARgPAJQgMAGgOADQgMACgPAAQgUAAgSgHgAgMgwQgGAEgEAEQgEAFgCAGIgCAMIA8gKQgBgJgHgHQgHgIgNAAQgIAAgGADg");
	this.shape_63.setTransform(753.8,12,0.667,0.667);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgpBhQgGgCgEgDQgEgDgDgGQgCgFAAgLIAAhzQAAgJADgGQACgGAHgFQAFgFAJgEIASgHQAMgEAHgBIAVgCQASAAAJAHQAKAHAAARQAAAFgBAFIgEAKIgPAAIgeAGIgLAEIAACCIgKADIgQABg");
	this.shape_64.setTransform(742.6,12,0.667,0.667);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgmBdQgQgHgNgNQgMgMgIgUQgGgRAAgYQAAgXAGgSQAIgTAMgMQANgNAQgHQASgGAUAAQAUAAASAGQARAIANANQANAMAGATQAHARAAAXQAAAZgHARQgGATgNANQgMAMgSAHQgQAGgWABQgWAAgQgHgAgWgjQgJANAAAWQAAAXAJANQAIAMAOAAQAPABAJgNQAIgOAAgWQAAgWgJgNQgIgNgPAAQgOAAgIANg");
	this.shape_65.setTransform(730.3,12,0.667,0.667);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("ABcBhQgHgCgEgDQgEgDgDgGQgCgGAAgKIAAhbQABgLgHgGQgGgFgKAAQgFAAgGACIgJAGIABADIAACCIgMACIgQABIgNgBQgIgCgCgDQgEgCgEgHQgBgGAAgKIAAhbQAAgLgIgGQgGgFgKAAQgGAAgFACIgIAFIAACGIgKACIgRABIgOgBQgGgCgFgDQgDgCgDgHQgDgGAAgKIAAhzQABgKAEgGQAEgHAHgFQALgKAUgFQASgGAUAAQAPAAANAFQAOAEAKAIQAKgGAOgGQANgFAUAAQAPAAAMAEQAMADALAJQALAIAFAOQAHANgBAUIAAB5IgLACIgQABg");
	this.shape_66.setTransform(713.1,11.9,0.667,0.667);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AggB7QgTgHgMgNQgMgMgHgTQgHgSAAgXQAAgZAHgTQAIgTAMgMQANgMARgGQASgGASAAQAHAAAHACIALADIAAg/IAMgCIAQgBIAOABQAFAAAFAEQAFAEACAGQACAFAAAKIAAC2QAAASgQALQgKAIgRAFQgRAFgVAAQgXAAgSgHgAgRgFQgKAMAAAYQAAAYAJAMQALAMAQAAQAIAAAFgCQAFgCACgDIAAhUQgGgFgLAAQgTAAgKAMg");
	this.shape_67.setTransform(690.8,10,0.667,0.667);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAtBhQgHgCgEgDQgEgDgCgGQgDgFAAgLIAAhaQAAgMgGgFQgHgGgKAAIgOACQgHADgEADIAACFIgMACIgQABIgPgBQgGgCgEgDQgEgDgDgGQgCgHAAgJIAAhyQAAgLAEgGQAGgIAGgEQALgJATgGQATgGAWAAQAoAAAWATQAWASAAAjIAAB4IgLACIgQABg");
	this.shape_68.setTransform(677,11.9,0.667,0.667);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AghBfQgQgEgLgHQgKgHgHgMQgGgNAAgPQAAgbAPgNQAPgOAfgEIAugFIAAgDQAAgKgJgGQgJgEgRgBQgNAAgNADQgNADgKAFQgEgCgFgJQgCgGAAgJQgBgJAFgGQAFgGAJgEQAKgFAOgBQANgCAOAAQARAAARADQAQAFAMAJQAMAJAFAMQAHAOgBASIAABVQABALgGAGQgEAGgIAEQgXAPgrABQgTAAgOgFgAgBATQgJAAgHAEQgGAEgBAIQABAHAFAFQAHAFALAAIANgCQAJgBACgCIAAgfg");
	this.shape_69.setTransform(663.2,12,0.667,0.667);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgpBhQgHgCgDgDQgFgDgCgGQgCgGAAgKIAAhzQAAgJADgGQACgFAGgGQAHgGAIgDIASgHIATgFIAVgCQARAAAKAHQAKAHAAARQAAAFgBAFIgEAKIgPAAIgeAGIgLAEIAACCIgLADIgQABg");
	this.shape_70.setTransform(647.7,12,0.667,0.667);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgNgNgIgTQgIgSAAgaQAAgaAIgRQAIgUAMgLQAMgLARgGQARgGAPABQAUAAAPAFQAOAGANALQALALAHAPQAGAPAAASQAAAOgHAFQgGAHgNACIhYAPQAEALAMAIQAMAFAPAAQARAAALgDQAOgEAIgGQAGAFADAGQAEAGAAAJQAAARgPAJQgLAGgPADQgMACgPAAQgTAAgTgHgAgMgwQgGAEgEAEQgEAFgCAGIgCAMIA8gKQAAgIgIgIQgHgIgNAAQgHAAgHADg");
	this.shape_71.setTransform(635.8,12,0.667,0.667);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgtCDQgHgBgEgEQgEgDgCgGQgDgGAAgKIAAieQAAgUAGgOQAGgNALgKQALgJAPgEQAPgEAPAAQAbAAAMAHQANAIAAASQAAAIgDAGQgEAHgDACIgOgDQgIgCgJAAQgPAAgJAGQgIAGAAANIAAANIA6AAIAEAKQACAGAAAIQAAAOgGAFQgEAGgKAAIgpAAIAAB6IgLACIgQABg");
	this.shape_72.setTransform(624.5,9.7,0.667,0.667);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AghBfQgRgEgKgHQgLgHgFgMQgHgNAAgPQAAgbAPgNQAPgOAfgEIAugFIAAgDQAAgKgJgGQgKgEgQgBQgNAAgOADQgMADgKAFQgGgDgCgIQgEgGAAgJQAAgJAFgGQAEgGAJgEQALgFAOgBQAMgCAPAAQASAAAQADQAPAEANAKQALAIAGANQAGAOABASIAABVQAAAKgGAHQgFAFgHAFQgYAPgqABQgUAAgNgFgAgBATQgKAAgGAEQgHADABAJQgBAIAGAEQAGAFAMAAIAOgCQAHgBADgCIAAgfg");
	this.shape_73.setTransform(612,12,0.667,0.667);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AggBiQgOgDgIgEQgJgFgGgIQgFgHAAgKQAAgJAEgGQADgHAGgEQAIAFAQAGQANAFASgBQAKABAGgEQAFgDAAgGQAAgGgEgDQgDgCgKgDIgLgCQgfgGgQgOQgPgOAAgaQAAgOAGgLQAFgLALgJQALgIAOgEQAPgEAQAAIAZACQAOADAGAEQAJAEAGAHQAEAHAAAJQAAAIgDAGQgDAIgFADQgDgCgFgBIgbgIIgMgBQgMAAgFADQgHADAAAGQAAAFADACIANAGIALACQAiAIAQAPQAOAOAAAYQAAAdgVAQQgTARgoAAQgOAAgOgCg");
	this.shape_74.setTransform(600,12,0.667,0.667);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgNgNgIgTQgIgUAAgYQAAgZAIgSQAHgTANgMQAMgLARgGQARgGAPABQATAAAQAFQAPAGAMALQAMAMAGAOQAGARAAAQQAAANgHAGQgGAHgNACIhYAPQAEALAMAIQAMAFAQAAQAPAAAMgDQAOgEAHgGQAGAEAEAHQAFAHAAAIQAAARgQAJQgLAGgPADQgNACgOAAQgUAAgSgHgAgMgwQgHAEgDAEQgEAFgCAGIgDAMIA9gKQgBgJgHgHQgGgIgOAAQgIAAgGADg");
	this.shape_75.setTransform(582.6,12,0.667,0.667);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("ABcBhQgHgCgEgDQgEgDgCgGQgDgHAAgJIAAhbQAAgLgGgGQgGgFgKAAQgFAAgGACIgJAGIABADIAACCIgMACIgQABIgNgBQgHgCgEgDQgEgEgCgFQgDgHAAgJIAAhbQAAgLgGgGQgHgFgJAAQgGAAgFACQgFABgDAEIAACGIgMACIgQABIgOgBQgHgCgEgDQgEgEgCgFQgDgHAAgJIAAhzQAAgLAFgFQADgGAIgGQAMgKASgFQATgGATAAQAPAAAOAFQAOADAKAJQAKgGAOgGQANgFAUAAQAPAAAMAEQANAEAKAIQAKAJAGANQAHAOAAATIAAB5IgMACIgQABg");
	this.shape_76.setTransform(565.9,11.9,0.667,0.667);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgmBdQgRgIgMgMQgNgOgGgSQgIgTABgWQgBgVAIgUQAGgRANgOQAMgMARgIQASgGAUAAQAUAAATAGQARAJAMAMQANAMAHATQAHAUAAAUQAAAXgHATQgHATgNANQgLAMgSAHQgRAGgWABQgWAAgQgHgAgWgjQgJAMABAXQAAAYAIAMQAJAMANAAQAPABAJgNQAHgNABgXQgBgXgHgMQgJgNgPAAQgOAAgIANg");
	this.shape_77.setTransform(548.7,12,0.667,0.667);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAsCAQgHgCgEgDQgEgEgCgFQgCgHgBgJIAAhWQABgOgIgHQgIgGgJAAIgNACIgLAEIAACGIgMADIgQABIgOgBQgHgCgDgDQgFgDgCgGQgCgGAAgKIAAjeIALgDIAQgBIAOABQAHACAEADQAEADACAGQADAFAAALIAAAmIAOgFQAKgCALAAQAjAAAUATQAUASAAAmIAAB0IgLADIgQABg");
	this.shape_78.setTransform(534.6,9.9,0.667,0.667);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("Ag5B3IgQgGQgTgHAAgVIAAizQAAgHADgFQAGgFAGgCQAKgEAUgDQARgCAVAAQAtAAAZARQAZAQAAAjQAAASgJAMQgJAMgRAGQASAGAMANQANAOAAAWQgBAlgaATQgaASgxAAgAgfBFIAMACIAQABQAOAAAIgHQAKgGAAgNQAAgNgHgGQgIgFgQAAIgdAAgAgfhFIAAAtIAaAAQAPAAAGgHQAIgFgBgNQABgKgJgGQgHgGgQAAIgNAAg");
	this.shape_79.setTransform(515.7,10.5,0.667,0.667);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AhBB3IgQgGQgUgIAAgUIAAizQAAgHAEgFQAFgEAGgDQANgFAUgDIAggBQAbAAAWAIQAXAGARAQQAQAPAJAXQAJAYAAAeQAAAegJAYQgIAWgQAQQgRAQgVAHQgXAIgaAAgAgmhCIAACFIAUACQAMAAAKgEQAKgEAIgIQAHgJAEgMQAEgLAAgUQAAghgPgSQgPgSgZAAIgJAAg");
	this.shape_80.setTransform(500.3,10.5,0.667,0.667);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AA2B2QgHgCgEgDQgEgDgCgGQgCgGAAgKIAAg9IhFAAIAABZIgdADQgIAAgHgBQgGgCgEgDQgEgDgDgGQgCgGAAgKIAAjLIAdgDQAJgBAGACQAHACAEACQAEAEACAHQACAGAAAJIAAA+IBFAAIAAhaIAdgDQAIgBAGACQAHACAEACQAFAFABAGQADAGAAAJIAADLIgeADQgIAAgGgBg");
	this.shape_81.setTransform(483.9,10.4,0.667,0.667);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgpBhQgGgCgEgDQgFgEgCgFQgCgHgBgJIAAhzQAAgJADgGQADgGAGgFQAHgGAIgDIASgHIATgFIAVgCQARAAALAHQAJAHABARQAAAFgCAFIgEAKIgPAAIgeAGIgLAEIAACCIgKADIgQABg");
	this.shape_82.setTransform(466.5,12,0.667,0.667);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AggBdQgPgFgNgKQgMgIgHgRQgGgQAAgVIAAhtIALgCIARgBIANABQAHABAFADQAEAFACAFQACAGAAAKIAABRQAAARAHAGQAJAHAMAAQAIAAAFgCQAFgBADgCIAAiGIALgCIAQgBIAPABQAGABAEADQAFAEACAGQACAFAAALIAAB0QAAATgPAKQgMAIgSAFQgRAEgVAAQgSAAgRgEg");
	this.shape_83.setTransform(454.2,12.2,0.667,0.667);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AglBdQgSgHgNgNQgMgOgHgSQgGgTgBgWQABgVAGgUQAHgRAMgOQANgMASgIQASgGATAAQAVAAARAGQASAJAMAMQANAMAHATQAGAUAAAUQAAAXgGATQgHATgNANQgLAMgTAHQgQAGgWABQgVAAgQgHgAgXgjQgIAMAAAXQAAAXAIANQAKAMANAAQAPABAJgNQAHgNAAgXQAAgXgHgMQgJgNgPAAQgOAAgJANg");
	this.shape_84.setTransform(440.2,12,0.667,0.667);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AguCDQgGgBgEgEQgEgDgDgGQgCgGAAgKIAAieQAAgUAHgOQAFgNAMgKQAKgJAPgEQAPgEAPAAQAbAAAMAHQANAIAAASQAAAIgDAGQgDAFgEAEIgOgDQgIgCgJAAQgPAAgJAGQgIAGAAANIAAANIA6AAIAEAKQACAGAAAIQAAAOgGAFQgFAGgJAAIgpAAIAAB6IgLACIgQABg");
	this.shape_85.setTransform(423.7,9.7,0.667,0.667);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgmBdQgRgIgMgMQgMgMgIgUQgGgRAAgYQAAgXAGgSQAIgTAMgMQAMgMARgIQASgGAUAAQAUAAASAGQASAIAMANQANAMAGATQAHAUAAAUQAAAXgHATQgGATgNANQgMAMgSAHQgQAGgWABQgWAAgQgHgAgWgjQgJANAAAWQAAAXAJANQAIAMAOAAQAPABAJgNQAIgOAAgWQAAgWgJgNQgIgNgPAAQgOAAgIANg");
	this.shape_86.setTransform(411,12,0.667,0.667);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgnBmQgRgQAAgjIAAijIALgCQAIgCAIAAQAQAAAJAGQAIAGgBATIAAAZIAwAAIAEAKQACAIAAAHQAAANgFAGQgHAGgJAAIghAAIAAA5QABAKAFAFQAHAEALAAIAKgBIAKgDIAGAKQADAFgBAHQAAAPgKAJQgKAJgaAAQgfAAgRgPg");
	this.shape_87.setTransform(394.6,10.8,0.667,0.667);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAsBhQgGgCgEgDQgEgDgDgGQgCgFAAgLIAAhaQAAgMgHgFQgGgGgKAAIgNACQgIADgEADIAACFIgMACIgQABIgPgBQgGgCgEgDQgEgDgDgGQgCgHAAgJIAAhyQAAgLAEgGQAFgIAHgEQALgJATgGQATgGAWAAQAoAAAWATQAWASAAAjIAAB4IgLACIgQABg");
	this.shape_88.setTransform(382.5,11.9,0.667,0.667);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgNgNgIgTQgIgTAAgZQAAgaAIgRQAIgUAMgLQAMgLARgGQARgGAPABQATAAAQAFQAPAGAMALQAMAMAFAOQAHAPAAASQAAAOgHAFQgGAHgNACIhYAPQAFAMALAHQALAFAQAAQAQAAAMgDQAOgEAIgGQAGAGADAFQAEAHAAAIQAAARgPAJQgMAGgOADQgMACgPAAQgUAAgSgHgAgMgwQgFADgFAFQgEAFgCAGIgCAMIA8gKQgBgJgHgHQgHgIgNAAQgIAAgGADg");
	this.shape_89.setTransform(369,12,0.667,0.667);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("ABcBhQgHgCgEgDQgEgDgCgGQgDgGAAgKIAAhbQABgLgHgGQgGgFgKAAQgFAAgGACIgJAGIABADIAACCIgMACIgQABIgNgBQgHgCgEgDQgEgDgDgGQgBgGAAgKIAAhbQAAgLgIgGQgGgFgKAAQgFAAgGACIgIAFIAACGIgLACIgQABIgOgBQgHgCgDgDQgEgCgDgHQgCgGAAgKIAAhzQAAgLADgFQAFgHAHgFQALgKAUgFQASgGATAAQAPAAAOAFQAOAEAKAIQAKgGAOgGQANgFAUAAQAPAAALAEQANADALAJQAKAIAHAOQAFANAAAUIAAB5IgLACIgQABg");
	this.shape_90.setTransform(352.2,11.9,0.667,0.667);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAsBhQgHgCgDgDQgEgCgDgHQgCgGAAgKIAAhaQAAgMgHgFQgFgGgMAAIgNACIgMAGIAACFIgLACIgQABIgOgBQgHgCgEgDQgEgDgDgGQgCgHAAgJIAAhyQAAgLAEgGQAFgIAGgEQAMgJATgGQAUgGAUAAQApAAAWATQAWATAAAiIAAB4IgLACIgQABg");
	this.shape_91.setTransform(335.1,11.9,0.667,0.667);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AglBdQgRgHgNgNQgNgOgGgSQgHgRAAgYQAAgXAHgSQAGgRANgOQANgNARgHQASgGATAAQAVAAASAGQARAIAMANQAMALAIAUQAGASAAAWQAAAZgGARQgIAVgMALQgMAMgRAHQgRAGgWABQgVAAgQgHgAgWgjQgJANAAAWQAAAXAJANQAIAMAOAAQAPABAJgNQAIgNAAgXQAAgWgJgNQgIgNgPAAQgOAAgIANg");
	this.shape_92.setTransform(321.1,12,0.667,0.667);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgpBhQgHgCgEgDQgEgDgCgGQgDgHAAgJIAAhzQAAgJAEgGQACgGAHgFQAGgGAHgDIATgHIATgFIAVgCQASAAAJAHQAKAHAAARQAAAFgBAFIgEAKIgPAAIgeAGIgLAEIAACCIgKADIgRABg");
	this.shape_93.setTransform(309.5,12,0.667,0.667);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgKCJQgGgBgFgDQgEgDgCgGQgCgHgBgKIAAibIAcgEIANABQAHACAEADQAEAEADAGQABAFAAALIAACbIgLACQgHABgJAAgAgXhOQgJgKAAgPQAAgOAJgKQAJgKAOAAQAQAAAIAKQAJAKAAAOQAAAOgJALQgIAKgQAAQgOAAgJgKg");
	this.shape_94.setTransform(300.8,9.2,0.667,0.667);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgWBeQgLgEgDgIIgviLIgGgaQAFgGAJgEQAHgEALAAQAMAAAIAGQAJAFAEAQIAaBvIACAAIAbiDQAIgEAHgBQAGgCAIAAQANAAAJAGQAIAFAAAPQAAAIgDAKIgHAaIgJAfIggBUQgFAEgLADQgLADgKAAQgPAAgJgEg");
	this.shape_95.setTransform(290.8,12.1,0.667,0.667);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAsBhQgHgCgDgDQgFgDgCgGQgCgGAAgKIAAhaQAAgLgGgGQgHgGgKAAIgOACIgMAGIAACFIgLACIgQABIgPgBQgGgCgEgDQgEgDgDgGQgCgFAAgLIAAhyQAAgLAEgGQAFgIAHgEQAKgJAUgGQATgGAWAAQAoAAAWATQAWATAAAiIAAB4IgLACIgQABg");
	this.shape_96.setTransform(277.3,11.9,0.667,0.667);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgOgOgHgSQgIgTAAgZQAAgaAIgRQAHgTANgMQALgKASgHQARgGAPABQATAAAQAFQAPAGAMALQAMAMAFAOQAHAPAAASQAAANgHAGQgGAHgNACIhYAPQAFAMALAHQALAFAQAAQAQAAAMgDQAOgEAHgGQAHAFADAGQAEAHAAAIQAAARgPAJQgMAGgOADQgMACgPAAQgUAAgSgHgAgMgwQgGAEgEAEQgEAFgCAGIgCAMIA8gKQgBgJgHgHQgHgIgNAAQgIAAgGADg");
	this.shape_97.setTransform(263.8,12,0.667,0.667);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgOgNgHgTQgIgSAAgaQAAgaAIgRQAHgTANgMQAMgLARgGQASgGAOABQATAAAQAFQAPAGAMALQAMAMAGAOQAGARAAAQQAAANgHAGQgGAHgNACIhYAPQAEALAMAIQAMAFAQAAQAQAAALgDQAOgEAHgGQAGAEAEAHQAFAHAAAIQAAARgQAJQgLAGgPADQgMACgPAAQgUAAgSgHgAgMgwQgHAEgDAEQgEAFgCAGIgDAMIA9gKQAAgIgIgIQgHgIgNAAQgIAAgGADg");
	this.shape_98.setTransform(245.8,12,0.667,0.667);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAsCAQgGgCgEgDQgFgEgCgFQgCgHgBgJIAAhWQABgOgIgHQgIgGgJAAIgNACIgLAEIAACGIgMADIgQABIgNgBQgIgCgDgDQgFgDgCgGQgCgGAAgKIAAjeIAMgDIAPgBIAOABQAHACAEADQAEADACAGQADAHAAAJIAAAmIAOgFQAKgCAKAAQAkAAAUATQAUATAAAlIAAB0IgLADIgQABg");
	this.shape_99.setTransform(232.2,9.9,0.667,0.667);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgnBmQgRgQAAgjIAAijIALgCQAIgCAIAAQAQAAAJAGQAIAGAAATIAAAZIAvAAIAEAKQACAGAAAJQAAANgGAGQgFAGgKAAIggAAIAAA5QAAAKAFAFQAHAEAKAAIALgBQAGgBAEgCIAGAKQACAEAAAIQAAAPgKAJQgKAJgaAAQgeAAgSgPg");
	this.shape_100.setTransform(220.6,10.8,0.667,0.667);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgNgNgIgTQgIgTAAgZQAAgaAIgRQAIgUAMgLQAMgLARgGQARgGAPABQATAAAQAFQAPAGAMALQALAMAHAOQAGAPAAASQAAAOgHAFQgGAHgNACIhYAPQAEAMAMAHQALAFAQAAQAQAAAMgDQAOgEAIgGQAGAGADAFQAEAHAAAIQAAARgPAJQgMAGgOADQgMACgPAAQgUAAgSgHgAgMgwQgGAEgEAEQgEAGgCAFQgCAGAAAGIA8gKQAAgIgIgIQgHgIgNAAQgIAAgGADg");
	this.shape_101.setTransform(204.2,12,0.667,0.667);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAfB7QgIgFgLgPIgjgwIAABGIgLACIgQABIgPgBQgGgBgEgDQgEgDgDgGQgCgGAAgLIAAjeIALgCIAQgBIAPABQAFACAFACQAEAEADAGQACAFAAAKIAABmIA9hEQATAAALAKQALAIAAANQAAAHgCAFQgBAFgEAEQgEAGgGAFIgiAfIA5A9QgCASgHAKQgJAKgQAAQgLAAgJgGg");
	this.shape_102.setTransform(191.2,9.9,0.667,0.667);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AghBfQgQgEgKgHQgMgHgFgMQgHgNAAgPQABgbAPgNQAPgOAegEIAugFIAAgDQAAgLgJgFQgJgEgRgBQgNAAgNADQgOADgJAFQgFgCgDgJQgDgGgBgJQAAgJAFgGQAFgHAJgDQALgFANgBQANgCAOAAQASAAARADQAPAFAMAJQAMAJAFAMQAHAOAAASIAABVQAAALgGAGQgEAGgIAEQgXAPgrABQgUAAgNgFgAAAATQgKAAgHAEQgHAEABAIQAAAHAFAFQAHAFALAAQAHAAAGgCQAJgBACgCIAAgfg");
	this.shape_103.setTransform(177.4,12,0.667,0.667);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("ABcBhQgHgCgEgDQgEgEgDgFQgCgHAAgJIAAhbQAAgLgGgGQgHgFgKAAQgEAAgHACIgIAGIAAADIAACCIgLACIgQABIgNgBQgHgCgEgDQgFgEgBgFQgDgHAAgJIAAhbQAAgLgGgGQgIgFgIAAQgHAAgEACIgIAFIAACGIgMACIgQABIgOgBQgHgCgDgDQgFgDgDgGQgBgGAAgKIAAhzQAAgLADgFQAEgGAIgGQAMgKASgFQATgGATAAQAPAAAOAFQAOAEAKAIQAJgGAPgGQANgFATAAQAQAAALAEQANAEALAIQAJAIAIAOQAFANABAUIAAB5IgMACIgQABg");
	this.shape_104.setTransform(161,11.9,0.667,0.667);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AglBdQgSgIgMgMQgNgOgHgSQgGgTAAgWQAAgVAGgUQAIgRAMgOQAMgMASgIQARgGAUAAQAUAAASAGQASAIANANQAMAMAHATQAGAUABAUQgBAXgGATQgHATgMANQgMAMgTAHQgQAGgWABQgWAAgPgHgAgXgjQgHAMAAAXQgBAYAJAMQAJAMANAAQAPABAJgNQAIgNAAgXQAAgWgIgNQgJgNgPAAQgOAAgJANg");
	this.shape_105.setTransform(139,12,0.667,0.667);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgnBmQgRgQAAgjIAAijIAMgCQAHgCAIAAQARAAAHAGQAIAGAAATIAAAZIAvAAIAFAKQACAIAAAHQAAANgGAGQgFAGgJAAIgiAAIAAA5QAAAKAHAFQAGAEAKAAIALgBIAKgDIAGAKQACAFABAHQgBAPgKAJQgJAJgbAAQgfAAgRgPg");
	this.shape_106.setTransform(127.5,10.8,0.667,0.667);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AghBiQgOgDgHgEQgKgFgFgIQgFgGAAgLQAAgKAEgFQADgHAFgEQAJAFAPAGQAOAFASgBQAKABAGgEQAFgDAAgGQABgGgFgDQgEgCgKgDIgKgCQgfgGgQgOQgPgOAAgaQAAgOAGgLQAFgLALgJQALgIAOgEQAOgEARAAQAKAAAPACQAMADAIAEQAKAFAEAGQAFAGAAAKQAAAIgDAGQgDAHgFAEQgDgCgGgBIgagIIgMgBQgLAAgHADQgGADAAAGQgBAEAEADQADADAKADIALACQAiAIAPAPQAPAOAAAYQAAAdgUAQQgWARgmAAQgNAAgQgCg");
	this.shape_107.setTransform(111.8,12,0.667,0.667);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AhGCCQgHgCgEgDQgFgEgBgFQgDgHAAgJIAAi4QAAgKAFgHQADgGAIgGQAMgIAQgEQAQgFAVAAQAUAAATAGQATAGANAMQAMAMAJATQAIATgBAaQABAXgHATQgHATgLAMQgNANgQAGQgRAGgUAAQgQAAgMgFIAABAQgFACgGAAIgRACgAgThNQgFABgFADIAABUQAEACAGACQAFABAFAAQAkAAAAguQAAgZgJgMQgIgMgRAAQgFAAgHACg");
	this.shape_108.setTransform(99,14.1,0.667,0.667);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgKCAQgHgCgDgDQgEgDgEgGQgBgGAAgKIAAjeIALgDIAQgBIANABQAGACAFADQAEADACAGQADAFAAALIAADeIgMACIgQACg");
	this.shape_109.setTransform(88.4,9.9,0.667,0.667);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgaBdQgSgGgOgNQgNgNgIgTQgIgSAAgaQAAgaAIgRQAHgTANgMQAMgLARgGQARgGAPABQAUAAAPAFQAPAGAMALQAMAMAGAOQAGARAAAQQAAANgHAGQgGAHgNACIhYAPQAEALAMAIQAMAFAPAAQAQAAAMgDQANgEAIgGQAGAEAEAHQAEAGAAAJQAAARgPAJQgLAGgPADQgMACgPAAQgUAAgSgHgAgMgwQgHAEgDAEQgEAFgCAGIgDAMIA9gKQAAgIgIgIQgHgIgNAAQgHAAgHADg");
	this.shape_110.setTransform(78.5,12,0.667,0.667);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAtCAQgIgCgDgDQgFgEgCgFQgCgHAAgJIAAhWQgBgOgGgHQgJgGgJAAQgFAAgJACIgKAEIAACGIgLADIgRABIgNgBQgIgCgDgDQgFgDgCgGQgCgGAAgKIAAjeIAMgDIAPgBIAOABQAGACAFADQAFADACAGQACAHAAAJIAAAmIAOgFQAKgCAKAAQAjAAAVATQAUATAAAlIAAB0IgMADIgQABg");
	this.shape_111.setTransform(64.9,9.9,0.667,0.667);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AguB1QgPAAgJgJQgJgKAAgQIAAiiQAAgRAJgKQAJgJAPAAIB2AAQAEAFABAGQACAGgBAJQAAAOgFAGQgHAHgJAAIhLAAIAAAjIBQAAQADAFACAGQACAGAAAJQgBANgFAHQgGAGgJAAIhCAAIAAAoIBbAAQAEAFABAGQACAGAAAJQAAAPgGAGQgFAGgKAAg");
	this.shape_112.setTransform(46.8,10.5,0.667,0.667);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgmB4QgOgCgLgHQgLgEgGgJQgGgIAAgLQAAgLAGgJQAIgIAGgDQAJAHAPAHQAPAGARAAQARAAAHgFQAHgGAAgIQAAgIgFgDQgGgFgKgDIgPgGQgMgEgRgHQgMgGgKgIQgJgIgFgNQgGgLAAgRQAAghAYgUQAYgTApAAQASAAALACQAOADAJAEQAKAFAFAHQAFAIAAAKQAAALgEAGQgFAHgGAGQgHgFgOgFQgOgEgPAAQgQAAgHAFQgHAEAAAIQAAAGAEAEQAEACAKAEIASAGQAjANARAQQATASAAAfQAAAggZAVQgXAUgvAAQgQAAgOgDg");
	this.shape_113.setTransform(33.4,10.5,0.667,0.667);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AA5B3IgJgFQgEgDgDgFIgEgLIgGgbIhAAAIgLAwIgLADQgGACgIAAQgSAAgJgHQgJgHAAgMIABgLIA9jBQAGgEAMgDQAOgEALAAQAQAAAPAGQAPAGADAMIAOAuIAPA2IAPA4IANAxQgGAGgIACQgJAEgLAAQgIAAgHgCgAgMgXIgLAnIAsAAIgUhLIgBAAg");
	this.shape_114.setTransform(19.2,10.5,0.667,0.667);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AguB1QgPAAgJgJQgJgKAAgQIAAiiQAAgRAJgKQAJgJAPAAIB2AAIAFALIACAPQAAAOgGAGQgHAHgJAAIhLAAIAAAjIBQAAIAFALQACAJAAAGQAAANgGAHQgGAGgKAAIhBAAIAAAoIBcAAIAEALQACAJAAAGQAAAPgGAGQgGAGgKAAg");
	this.shape_115.setTransform(5.4,10.5,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,759.6,76.3);


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
	this.shape_28.graphics.f("#FAB28D").s().p("Ag6DtQisgygHiiQgHixBxhGQBig8B5AtQBZAgAnBnQAUAzACAsIh+EHQgSABgTAAQhCAAhDgUg");
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
	this.shape_42.graphics.f("#FAB28D").s().p("Al7NgQiwhHiHiCQiHiChKioQhMiuAAi/QAAi+BMiuQBKioCHiCQCHiCCwhHQC1hJDGAAQDGAAC2BJQCwBHCHCCQCHCCBJCoQBOCuAAC+QAABugaBoQgZBmgwBfQh5DujpCOQjvCSkdAAQjGAAi1hJg");
	this.shape_42.setTransform(118.4,114.9);

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
	this.shape_11.graphics.f("#F1A83D").s().p("AgfAoQgegWABgcQAAgQAMgKQALgLAVgDQAQgBASAGQAUAHAKAMQAOAOgBAQQgCATgWAQIgBABQgPAKgSABQgSAAgQgLgAgSAUIAIAEIAAABIAGABIAJABIACAAIABAAIABAAIAFgCIACgBIAJgFIACgCIABgBIAEgDIABgCQgBACABgCIACgDIAAgBIABgBIAAgCIABgBIAAAAIgBABIABAAIAAgCIAAgCIAAAAIAAgBIgBgCIAAAAIgDgEIAAgBIgDgDIgCgCIgBAAIAAgBIgBAAIgMgHIAAAAIgFgCIgKgDIgBAAIgNAAIgDAAIgIADIABAAIgFACIgBABIAAAAIgCACIAAABIgBABIgBACIgBACIAAABIAAAGIABAFIAEAHIACACIAAABIAAgBIAAABIAAAAIAIAIIABABIAAgBg");
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


(lib.Symbol3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4BC98").s().p("AhZD9QgbgCgHgaQgOg1AChPQAChIAOhIQAQhZAOgfQAMgaAfgYQAjgZAXgFQAfgFAbAaQAXAxALAxIAZCXQANBOgOAdQgJAUgcABQgPAAgMgpQgIgcgLhAQgIgsgMgCQgJgBgHAZIgYBvQgUBSgSAsQgJAYgYAAIgDAAg");
	this.shape_1.setTransform(10.3,19.2,0.759,0.759);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.6,38.4);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApcMeIAA47IS5AAIAAY7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.4,-79.8,120.9,159.6);


(lib.Symbol2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4BC98").s().p("AihFxQgHiIAGh2QAEhwAEgyQAGhVAShFQAThHAviHIAahKIDLBLIhPD4QgPAtgQBLQgKAqgXB3QgQBOgMBuIgRCoIiDADQgEgtgDhEg");
	this.shape_1.setTransform(16.6,81.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,32.9,33.1,96.4);


(lib.Symbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1A83D").s().p("AgSA2Qi8grhFgVIgIgDQAHgrAMg4IIkB/IgTBiQhZgOjCgtg");
	this.shape_1.setTransform(22.2,72.6,0.759,0.759);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFEA5").s().p("AgLAyQgcgEgTgkQgRggAFgbQBGALBIAIQgDAcgZAaQgYAagYAAIgHAAg");
	this.shape_2.setTransform(37.3,81.6,0.759,0.759);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFEA5").s().p("AgOAzQgdgFgRglQgPggAFgbQBHAOBHALQgEAbgaAaQgYAXgXAAIgJAAg");
	this.shape_3.setTransform(26.4,79.7,0.759,0.759);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFEA5").s().p("AgSA0QgcgHgPglQgOghAHgbQA+AQBOAQQgFAbgcAYQgYAWgWAAIgLgBg");
	this.shape_4.setTransform(15.6,77.4,0.759,0.759);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFEA5").s().p("AglAxQgbgIgDgbQgBgQAKgvQAaAIAkAIIBAAOQgGAZgjAZQgbATgXAAQgHAAgHgBg");
	this.shape_5.setTransform(5.2,74.9,0.759,0.759);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C64153").s().p("Ah4HZQjDgtg6gTQA8lhB8juQCvlPEFgRIB/AaIjHQTQhdgOjKgwg");
	this.shape_6.setTransform(29.1,40.6,0.759,0.759);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.5,85.4);


(lib.women_hand_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(44.4,29.3,1,1,0,0,0,44.4,29.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({startPosition:0},0).to({rotation:-5.5,x:44.5},4).wait(1).to({startPosition:0},0).to({rotation:9.5,x:44.4,y:29.4},19,cjs.Ease.get(1)).wait(109).to({startPosition:0},0).to({rotation:-5.5,x:44.5,y:29.3},11,cjs.Ease.get(1)).wait(6));

	// Layer_5
	this.instance_1 = new lib.Symbol2_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(27.9,78.4,1,1,0,20,-160,16.4,69.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({_off:false},0).to({skewX:80,skewY:-100,x:4.7,y:70.7},19,cjs.Ease.get(1)).wait(109).to({startPosition:0},0).to({skewX:20,skewY:-160,x:27.9,y:78.4},11,cjs.Ease.get(1)).wait(6));

	// Layer_2
	this.instance_2 = new lib.Symbol2_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(23.5,72.5,1,1,0,0,0,18.4,64.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({startPosition:0},0).to({rotation:-5,x:27.8,y:72.9},4).to({_off:true},1).wait(145));

	// Layer_4
	this.instance_3 = new lib.Symbol3_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(22.4,130.8,1,1,0,35,-145,10.3,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({_off:false},0).to({skewX:103.7,skewY:-76.3,x:-46.5,y:90.7},19,cjs.Ease.get(1)).wait(109).to({startPosition:0},0).to({skewX:35,skewY:-145,x:22.4,y:130.8},11,cjs.Ease.get(1)).wait(6));

	// Layer_3
	this.instance_4 = new lib.Symbol3_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(13.2,129.7,1,1,0,0,0,10.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({startPosition:0},0).to({regX:10.4,rotation:-5,x:22.4,y:130.8},4).to({_off:true},1).wait(145));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.5,168.1);


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

	// timeline functions:
	this.frame_179 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(179).call(this.frame_179).wait(1));

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
	this.shape_20.graphics.f("#FAB28D").s().p("Ah+KQQgjgfAAgpQAPljABiWQAAhcgIkNIgJj6QAAg+A3guQA1gsBAAAQA/AAAtAsQAtAtAAA/IgLEMQgNEXgIA6IhFH/QAAApgjAfQghAdgrAAQgrAAgigdg");
	this.shape_20.setTransform(152.9,392.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FAB28D").s().p("AiFKyQgkggAAgrQAPl2ABidQAAhigIkbIgJkHQAAhAA5gxQA4gvBEAAQBCAAAvAvQAvAvAABCIgMEbQgNElgJA9IhIIaQAAArglAgQgiAfguAAQgtAAgkgfg");
	this.shape_21.setTransform(57.7,399.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(180));

	// hand
	this.instance_3 = new lib.men_hand_moving("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(177,278.7,1,1,0,0,0,31.9,91.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({mode:"synched",loop:false},0).wait(151));

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


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(21.1,94.5,1,1,0,0,0,21.1,94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,42.1,189.1), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_1_1();
	this.instance.parent = this;
	this.instance.setTransform(137.1,22.8,1,1,0,0,0,137.1,22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,274.2,45.5), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.ClipGroup_0_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(137.1,22.8,1,1,0,0,0,137.1,22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,274.2,45.5), null);


(lib.alltxt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.title("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(379.2,4.9,1,1,0,0,0,231.5,21.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:21.9,alpha:1},19,cjs.Ease.get(1)).wait(41));

	// Layer_4
	this.instance_1 = new lib.text1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(379.8,129.6,1,1,0,0,0,379.8,38.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({y:146.6,alpha:1},19,cjs.Ease.get(1)).wait(32));

	// Layer_3
	this.instance_2 = new lib.txt2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(379.5,247,1,1,0,0,0,116.7,40.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({y:264,alpha:1},19,cjs.Ease.get(1)).wait(22));

	// Layer_1
	this.instance_3 = new lib.txt3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(379.4,363,1,1,0,0,0,308.7,38.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({_off:false},0).to({y:380,alpha:1},19,cjs.Ease.get(1)).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(147.7,-17,462.9,43.8);


(lib.woman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head
	this.instance = new lib.woman_head("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(131.6,200.3,1,1,0,0,0,131.6,200.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},151).wait(29));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},151).wait(29));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).to({state:[]},151).wait(29));

	// hand
	this.instance_3 = new lib.women_hand_right("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(94.9,251.6,1,1,0,0,0,35.4,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},151).wait(29));

	// legs
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#467495").s().p("Ai1PGQgKicgKi7QgUl0AAiXQAAjkAEkiQAFlFAFgmQAQhuBJg5QBBg0BTAHQBUAGA2A8QA7BBgGBkQgKCOgIE6QgIEzgHBjIg9NiQgRAdh7AAQh9AAgrgdg");
	this.shape_32.setTransform(182,375.4,0.775,0.775);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#693B39").s().p("AjPB/QhQAAAQg1QAKghAhgeQA5gyBLgwQAmgYAagOIEzAAIAADDQAAA4hAABg");
	this.shape_33.setTransform(170.5,460,0.775,0.775);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F4BC98").s().p("AjBB4Qg+gDAIgkQAHgeAogXQAsgZBegvQAlgUAAg3IESAAIgEBSQgEBWAAAVQAAAyg5AAg");
	this.shape_34.setTransform(171.1,459.1,0.775,0.775);

	this.instance_4 = new lib.Group();
	this.instance_4.parent = this;
	this.instance_4.setTransform(112.7,371.1,0.775,0.775,0,0,0,21.3,94.7);
	this.instance_4.alpha = 0.301;

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#467495").s().p("AisOWQgJiVgKixQgTlhAAiPQAAjdAEkPQAEk1AGglQAPhoBFg3QA+gxBPAHQBPAGA0A4QA4A+gGBfQgJCIgIEqQgHEkgHBeIg6M2QgQAbh1AAQh2AAgqgbg");
	this.shape_35.setTransform(112.7,371.2,0.775,0.775);

	this.instance_5 = new lib.Group_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(101.7,451.5,0.775,0.775,0,0,0,26.2,12.2);
	this.instance_5.alpha = 0.301;

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#693B39").s().p("AjFB4QhMAAAPgxQAKggAfgcQA2gwBIguQAjgXAZgNIEkAAIAAC5QAAA2g9AAg");
	this.shape_36.setTransform(101.8,451.6,0.775,0.775);

	this.instance_6 = new lib.Group_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(102.2,450.7,0.775,0.775,0,0,0,23.7,11.5);
	this.instance_6.alpha = 0.301;

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F4BC98").s().p("Ai3ByQg8gDAIgiQAHgdAmgWQAkgUBfgwQAjgSAAg1IEEAAIgHCyQAAAxg3AAg");
	this.shape_37.setTransform(102.2,450.8,0.775,0.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.instance_6},{t:this.shape_36},{t:this.instance_5},{t:this.shape_35},{t:this.instance_4},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]}).to({state:[]},151).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,263.2,469.9);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		this.parent.initContentButton();
	}
	this.frame_6 = function() {
		this.parent.playSfx();
	}
	this.frame_179 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(4).call(this.frame_6).wait(173).call(this.frame_179).wait(1));

	// Layer 8
	this.b2 = new lib.Symbol2copy();
	this.b2.parent = this;
	this.b2.setTransform(406.7,266.7,1.765,0.419,0,0,0,-0.1,0.1);
	new cjs.ButtonHelper(this.b2, 0, 1, 1);

	this.b1 = new lib.Symbol2copy();
	this.b1.parent = this;
	this.b1.setTransform(-410.8,266.7,1.765,0.419,0,0,0,-0.1,0.1);
	new cjs.ButtonHelper(this.b1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2}]}).wait(180));

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

	this.instance = new lib.Group_4();
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.instance_1},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(180));

	// texts
	this.instance_2 = new lib.alltxt2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.4,-75.7,1,1,0,0,0,379.8,209.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(180));

	// men
	this.instance_3 = new lib.manstanding("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-410.7,39.2,0.649,0.649,0,0,0,110.4,240.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DDDCC3").s().p("AvpCtQmfhHAAhmQAAhkGfhIQGfhIJKAAQJLAAGfBIQGfBIAABkQAABmmfBHQmfBIpLAAQpKAAmfhIg");
	this.shape_16.setTransform(-410.3,188.7,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.instance_3}]}).wait(180));

	// women
	this.instance_4 = new lib.woman("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(407,46.1,0.664,0.664,0,0,0,131.7,237.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DDDCC3").s().p("AvpCtQmfhHAAhmQAAhkGfhIQGfhIJKAAQJLAAGfBIQGfBIAABkQAABmmfBHQmfBIpLAAQpKAAmfhIg");
	this.shape_17.setTransform(413.2,196.4,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{mode:"synched",startPosition:0}}]}).to({state:[{t:this.shape_17},{t:this.instance_4,p:{mode:"single",startPosition:150}}]},150).wait(30));

	// shadow
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DDDCC3").s().p("AvpCtQmfhHAAhmQAAhkGfhIQGfhIJKAAQJLAAGfBIQGfBIAABkQAABmmfBHQmfBIpLAAQpKAAmfhIg");
	this.shape_18.setTransform(413.2,196.4,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(180));

	// panel
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#18721A").s().p("EhV8ArmQiiABiUg/QiOg7hvhtQhuhsg8iNQg/iSAAifMAAAg+rQAAigA/iRQA8iNBuhtQBvhsCOg7QCUg/CiABMCr5AAAQCigBCUA/QCOA7BvBsQBuBtA8CNQA/CRAACgMAAAA+rQAACfg/CSQg8CNhuBsQhvBtiOA7QiUA/iigBgEhckgl3QiwCtAAD1MAAAA+rQAAD1CwCtQCvCtD5AAMCr5AAAQD5AACvitQCwitAAj1MAAAg+rQAAj1iwitQivitj5AAMir5AAAQj5AAivCtg");
	this.shape_19.setTransform(0,-24.6,0.667,0.667);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("EBclgAeQivitj5AAMir5AAAQj5AAivCtQioClgHDoIgBiPQAAj0CwitQCvitD5AAMCr5AAAQD5AACvCtQCwCtAAD0IgBCPQgHjoioilg");
	this.shape_20.setTransform(0,-173.3,0.667,0.667);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("EhV8AolQj5AAivitQiwitAAj1MAAAg+rQAAj1CwitQCvitD5AAMCr5AAAQD5AACvCtQCwCtAAD1MAAAA+rQAAD1iwCtQivCtj5AAg");
	this.shape_21.setTransform(0,-24.6,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(180));

	// bg
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFDD").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_22.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-360,1280,720);


// stage content:
(lib.scene5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		createjs.Touch.enable(stage, true, true);
		
		var audioPath = "audio/";
		var sounds = [
			{src:{mp3:"miracle.mp3", ogg:"miracle.ogg"}, id:"audio_notification"}
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
				window.location = "../scene4/scene4.html";
			});
			
			_this.mc_main.b2.addEventListener("click", function () {
				window.location = "../scene6/scene6.html";
			});
		}
		
		this.playSfx = function () {
			createjs.Sound.play("audio_notification");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.mc_main = new lib.Symbol4();
	this.mc_main.parent = this;
	this.mc_main.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.mc_main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280,720);
// library properties:
lib.properties = {
	id: '3D7ED38973014EC995693BE0E2097A1F',
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
an.compositions['3D7ED38973014EC995693BE0E2097A1F'] = {
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