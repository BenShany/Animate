(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"LovebirdsStavBen_atlas_", frames: [[0,2708,250,327],[0,0,4529,2706],[304,3020,150,328],[4531,0,620,970],[4531,972,499,487],[4531,2205,250,364],[456,3191,250,188],[1008,2708,200,301],[765,2958,150,317],[152,3037,150,328],[0,3037,150,328],[504,2962,259,227],[4531,2571,250,353],[252,3367,150,214],[4531,1461,292,370],[1210,2708,250,166],[0,3367,250,166],[756,2708,250,248],[504,2708,250,252],[4531,1833,292,370],[152,3535,90,128],[1332,2876,120,103],[252,2708,250,310],[0,3535,150,168],[1210,2876,120,107]]}
];


// symbols:



(lib.annmargarett = function() {
	this.spriteSheet = ss["LovebirdsStavBen_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.backround = function() {
	this.spriteSheet = ss["LovebirdsStavBen_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.climb = function() {
	this.spriteSheet = ss["LovebirdsStavBen_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.climbnew = function() {
	this.spriteSheet = ss["LovebirdsStavBen_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.clock2 = function() {
	this.spriteSheet = ss["LovebirdsStavBen_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hedylamarr = function() {
	this.spriteSheet = ss["LovebirdsStavBen_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.japan = function() {
	this.spriteSheet = ss["LovebirdsStavBen_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.joker = function() {
	this.spriteSheet = ss["LovebirdsStavBen_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.kido = function() {
	this.spriteSheet = ss["LovebirdsStavBen_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.kidsad = function() {
	this.spriteSheet = ss["LovebirdsStavBen_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.kidwow = function() {
	this.spriteSheet = ss["LovebirdsStavBen_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.love1 = function() {
	this.spriteSheet = ss["LovebirdsStavBen_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.marilynmonroe = function() {
	this.spriteSheet = ss["LovebirdsStavBen_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.mygirl = function() {
	this.spriteSheet = ss["LovebirdsStavBen_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.myplantpngcopy = function() {
	this.spriteSheet = ss["LovebirdsStavBen_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.newball = function() {
	this.spriteSheet = ss["LovebirdsStavBen_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.newbasctball = function() {
	this.spriteSheet = ss["LovebirdsStavBen_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.newbowling = function() {
	this.spriteSheet = ss["LovebirdsStavBen_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.newtenis = function() {
	this.spriteSheet = ss["LovebirdsStavBen_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.plantpngcopy = function() {
	this.spriteSheet = ss["LovebirdsStavBen_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.smallgirl = function() {
	this.spriteSheet = ss["LovebirdsStavBen_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.V = function() {
	this.spriteSheet = ss["LovebirdsStavBen_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.veronicalake = function() {
	this.spriteSheet = ss["LovebirdsStavBen_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.wateringcan48877_1280 = function() {
	this.spriteSheet = ss["LovebirdsStavBen_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.X = function() {
	this.spriteSheet = ss["LovebirdsStavBen_atlas_"];
	this.gotoAndStop(24);
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


(lib.xix = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.X();
	this.instance.parent = this;
	this.instance.setTransform(-15,-14,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-14,30,26.8);


(lib.whitbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().rr(-248.25,-170.5,496.5,341,18.8);
	this.shape.setTransform(0,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248.2,-172.1,496.5,341);


(lib.whitbig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("A+ZtHMA8TAAAA9rNIMA7vAAAA97gcMA8VAAA");
	this.shape.setTransform(-30.3,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().rr(-241,-100,482,200,8);
	this.shape_1.setTransform(-3.9,7.2,1.011,1.606);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.6,-153.3,487.4,321);


(lib.v = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.V();
	this.instance.parent = this;
	this.instance.setTransform(-18,-16,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-16,36,30.9);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.climbnew();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.049,0.049);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,30.4,47.6), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.kidwow();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,97,212), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0066").ss(0.1,1,1).p("AhKIfQhugehTh6QhviiAAjkQAAjkBviiQBviiCcAAQCdAABuCiQBwCiAADkQAADkhwCiQhmCViNAM");
	this.shape.setTransform(37.9,55.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag3LrQAAghABgQQACgaAJgVQAFgIAkgxQAYgjgBgaQgBgUgPgbQgVglgDgHQgLgcAGgdQAFgeATgVIARgSQAKgLAEgJQAEgLgDgZIgLhrQgRgJgJgXQgGgPgFgcQgGgkgBgUQgBgdAGgYQAEgQAMgZIASgpQAZhHgZhKIgRgzQgJgdADgXQACgQAMgaQAOgdADgKQALgogSg6IgghhQgKgrAChDQAAgqABgoIASgEIgCA0QgFBqAOAyIAeBPQASAwgFAhQgDASgRAnQgPAlgCAVQgBAUAJAeQAMAhAFARQARA3gPA+QgEAOgZBAQgSAuAAAfQgBAYAIAcQAEASAOAhQAZANACAoIAAAeQAAAUADALIAIAbQAFAQgBAKQgDAUgTAOQgOALgZAKQgDAoABAVQACAiANAWIANAUQAHALAEAIQANAigYAtIgVAjQgPAWgHAMQgWArADAzQADAxAbAoQgqgIgChPg");
	this.shape_1.setTransform(37.7,201);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAdIACgDIgDgKQAAgFgCgEIgFgHQgCgDgCgFQgKAKgEAJIgFAKQgDAFgEADQgFACgCgDQgCgCACgEQAIgSANgOIAKgKIgCgMQgCgIABgEQAJgBADALIAAAFIALgKIAIgHIgBgEIgIgJQgFgHAEgEQAMABAGANIABAEIABgBQAGgEAPgGIAkgOQAKgEACAFQABAFgFADIgJACQgGABgHAEIgLAHIgTAGIgLAIIABAIQABAHADANIAAADIAAgBIAQgNQAhgeAXgDIAEABQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgCADgFABQgVAGgiAdIgLAKQAHARALALQAHAHAJAFQAFACAAACQABAEgGABQgDAAgEgCQgPgIgGgHQgIgJgFgPIgDADIgKAPQAGAOALALQAEAEAAAEQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQgCABgDgBQgDgBgEgGIgLgRQgHASABAVIgIABQgGgZALgZgAgQggIgSAQQAAAEADAFIAFAJIAEALIAEgFIALgKQgFgRgCgOIgCABg");
	this.shape_2.setTransform(23.6,14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0066").s().p("AhaJVQgIAAgIgEQgHgFgDgIQgEgMAOgTIANgMQAGgHAEgGQADgGAFgRIACgEQhugehUh6QhuiigBjjQABjlBuiiQBvihCcAAQCdAABvChQBuCiAADlQAADjhuCiQhnCViMAMQAKAHASABQAeABAKAEQAKAEAGAJQAGAKgDAJQgDAKgOAFQgJADgRABQgnACgkAHIgSAEQgRADgRAGQgTAFgKAAIgDAAgAi2nJIAFAIQACAEAAAFIADAKIgCADQgLAZAGAZIAIgBQgBgVAHgSIALARQAEAGAEABQACABADgBQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgEgFgEQgLgLgGgOIAKgPIAEgDQAFAPAIAJQAGAHAQAIQADACADAAQAGgBgBgEQAAgCgFgCQgJgFgHgHQgLgLgGgRIAKgLQAigdAVgGQAGgBACgDQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAgBgBQAAAAAAAAIgFgBQgWADgiAeIgQANIAAABIgBgDQgDgNAAgHIgCgIIANgIIASgGIALgHQAIgEAFgBIAJgCQAGgDgCgFQgCgFgKAEIgjAOQgRAGgGAEIgBABIgBgEQgGgNgMgBQgEAEAFAHIAIAJIABAEIgIAHIgLAKIAAgFQgDgLgIABQgCAEACAIIACAMIgKAKQgMAPgJASQgCAEACACQACADAFgCQAEgDADgFIAFgKQAFgJAJgLQACAFACADgAipnGIgEgKQgEgFAAgEIASgQIACgBQACAOAFARIgLALIgDAFIgFgLg");
	this.shape_3.setTransform(37.9,59.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-1,-1,77.7,285.4), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.plantpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.245,0.245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,71.6,90.7), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.love1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.049,0.049);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,12.6,11.1), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.mygirl();
	this.instance.parent = this;
	this.instance.setTransform(-10,-15,1.162,1.162);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-10,-15,174.3,248.6), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.kido();
	this.instance.parent = this;
	this.instance.setTransform(9,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(9,-51,150,317), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.wateringcan48877_1280();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.297,0.244);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,44.5,41), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("בחר", "bold 21px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 97;
	this.text.parent = this;
	this.text.setTransform(0.8,-14.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666D97").s("#686977").ss(4,1,1).rr(-57.5,-22,115,44,8);
	this.shape.setTransform(1.9,-1.3,0.795,0.582);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-49.7,-16.2,101,34), null);


(lib.swhitboxs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().rr(-96.7,-53.75,193.4,107.5,16.1);
	this.shape.setTransform(0,-0.9,1.022,1.348);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.8,-73.3,197.6,144.9);


(lib.start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("התחל", "bold 26px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 151;
	this.text.parent = this;
	this.text.setTransform(76.6,4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666D97").s("#686977").ss(4,1,1).rr(-76.7,-32.8,153.4,65.6,18.8);
	this.shape.setTransform(74.6,19.6,0.689,0.599);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.start, new cjs.Rectangle(-1,-2,155.3,43.3), null);


(lib.smallgirl_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.smallgirl();
	this.instance.parent = this;
	this.instance.setTransform(-40,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-62,90,128);


(lib.photo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.veronicalake();
	this.instance.parent = this;
	this.instance.setTransform(-103,-128,0.815,0.815);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-128,203.9,252.8);


(lib.photo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hedylamarr();
	this.instance.parent = this;
	this.instance.setTransform(-91,-131,0.717,0.717);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,-131,179.2,260.8);


(lib.photo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.annmargarett();
	this.instance.parent = this;
	this.instance.setTransform(-97,-129,0.779,0.779);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-129,194.7,254.6);


(lib.photo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.marilynmonroe();
	this.instance.parent = this;
	this.instance.setTransform(-96,-136,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-136,192.4,271.6);


(lib.newGame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("משחק חדש", "bold 26px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 146;
	this.text.parent = this;
	this.text.setTransform(-0.1,-17.7,0.907,0.907);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666D97").s("#686977").ss(4,1,1).rr(-53.9,-19.05,107.8,38.1,12);
	this.shape.setTransform(0,-3.3,1.154,1.163);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newGame, new cjs.Rectangle(-67.9,-27.5,135.8,53.3), null);


(lib.myplant1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.myplantpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-35,-47,0.245,0.245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-47,71.6,90.7);


(lib.mainMenw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("תפריט ראשי", "bold 26px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 146;
	this.text.parent = this;
	this.text.setTransform(2,-18.2,0.92,0.92);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666D97").s("#686977").ss(4,1,1).rr(-53.9,-19.05,107.8,38.1,12);
	this.shape.setTransform(1.8,-4.3,1.171,1.18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mainMenw, new cjs.Rectangle(-66.9,-28.8,137.8,54.7), null);


(lib.kid3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.kidsad();
	this.instance.parent = this;
	this.instance.setTransform(-78,-164);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-164,150,328);


(lib.joker_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.joker();
	this.instance.parent = this;
	this.instance.setTransform(-111,-157);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,-157,200,301);


(lib.japan_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.japan();
	this.instance.parent = this;
	this.instance.setTransform(-125,-98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-98,250,188);


(lib.fade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.51)").s().dr(-278,-196.1,556,392.2);
	this.shape.setTransform(493.9,369.2,1.783,1.891,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-1.2,991.5,741.7);


(lib.continue1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("המשך", "bold 28px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 33;
	this.text.lineWidth = 188;
	this.text.parent = this;
	this.text.setTransform(-1.1,-17.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666D97").s("#686977").ss(4,1,1).rr(-126.8,-47.3,253.6,94.6,30.3);
	this.shape.setTransform(-1.2,0.4,0.411,0.411);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.continue1, new cjs.Rectangle(-97.3,-21,192.4,84.6), null);


(lib.an_ComboBox = function(options) {
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.cloud1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvhG4QjEhWhqhwQhuh0AAh+QAAh+BuhzQBqhwDEhWQGbi2JGAAQJGAAGdC2QDCBWBrBwQBvBzAAB+QAAB+hvB0QhrBwjCBWQmdC2pGAAQpGAAmbi2g");
	this.shape.setTransform(201.3,42.4,0.341,0.341);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AvhG4QjDhWhrhwQhvh0ABh+QgBh9Bvh0QBrhvDDhXQGbi2JGAAQJGAAGdC2QDCBXBrBvQBuB0AAB9QAAB+huB0QhrBwjCBWQmdC2pGAAQpGAAmbi2g");
	this.shape_1.setTransform(144,21.2,0.341,0.341);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AviG4QjChWhrhwQhvh0AAh+QAAh+BvhzQBrhwDChWQGdi2JFAAQJHAAGbC2QDDBWBrBwQBuBzAAB+QAAB+huB0QhrBwjDBWQmbC2pHAAQpFAAmdi2g");
	this.shape_2.setTransform(122.5,53.9,0.341,0.341);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AviG4QjChWhrhwQhuhzgBh/QABh+BuhzQBrhwDChWQGci2JGAAQJGAAGdC2QDCBWBrBwQBuBzABB+QgBB/huBzQhrBwjCBWQmdC2pGAAQpGAAmci2g");
	this.shape_3.setTransform(47.9,49,0.341,0.341);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AvhG4QjDhXhrhvQhuh0AAh+QAAh+BuhzQBrhwDDhWQGci2JFAAQJHAAGbC2QDDBWBrBwQBuBzAAB+QAAB+huB0QhrBwjDBWQmbC2pHAAQpFAAmci2g");
	this.shape_4.setTransform(92.1,34.1,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,249.2,75.1);


(lib.clock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.clock2();
	this.instance.parent = this;
	this.instance.setTransform(-84,-83,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-83,169.2,165.1);


(lib.climb_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.climb();
	this.instance.parent = this;
	this.instance.setTransform(-73,-164);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-164,150,328);


(lib.ball4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.newbasctball();
	this.instance.parent = this;
	this.instance.setTransform(-118,-81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118,-81,250,166);


(lib.ball3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.newball();
	this.instance.parent = this;
	this.instance.setTransform(-124,-83);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124,-83,250,166);


(lib.ball2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.newtenis();
	this.instance.parent = this;
	this.instance.setTransform(-116,-116,0.936,0.936);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116,-116,234,235.9);


(lib.ball1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.newbowling();
	this.instance.parent = this;
	this.instance.setTransform(-129,-134);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129,-134,250,248);


(lib.backround1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.backround();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000.6,597.8);


(lib.ale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C7632").s().p("AgCABQgCgCACgEQAEACACAEQgDACAAADIgDgFg");
	this.shape.setTransform(16.4,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C7E34").s().p("AgCgBIACgDQACABABADQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAABg");
	this.shape_1.setTransform(9.5,16.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#03782C").s().p("AADAGQgFgDgCgIQAGAEADAEQAAABAAABQAAAAAAAAQAAABAAAAQgBAAAAAAIgBAAg");
	this.shape_2.setTransform(8.9,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A933C").s().p("AAAAAIAAgFQABACAAADIAAAGQgBgCAAgEg");
	this.shape_3.setTransform(0.6,3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F963A").s().p("AACgUIAAAPQgCAFAAAIIAAANQgEgTAGgWg");
	this.shape_4.setTransform(0.2,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#37A32D").s().p("AAeAoIgIgKQgogtgPgPQgIgIgBgHQAqASAZAaQASATAAAbIgBABQgGAAgGgGg");
	this.shape_5.setTransform(23.7,21);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#04882C").s().p("AAvA5QgFgDgCgFQgVgOgogoQgEgCgCgCIgIgKIgug0QgJgKAAgGIA3AfQAAAEAEAFIBbBhQAOARAJAIQAHAFABAIQgcgWgQgJg");
	this.shape_6.setTransform(12,17.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#249A2C").s().p("Ag4g6QgRgSgEgIQAfAKAnAVIBHBOQAGAHAIAFIAAAwg");
	this.shape_7.setTransform(20.2,21.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#12902E").s().p("AgEASQAAgEgDgJQgDgHABgFIgBgOQgBgHAEgGIABAOQABACAAAEIABAGQABAVAPARQgFgBgEAGg");
	this.shape_8.setTransform(1.2,5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#06892D").s().p("AAVAxQgqg3gnhPQAHADAFAKIAJAQIA+BZIAmA1QgSgJgWgcg");
	this.shape_9.setTransform(10.2,23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#016E29").s().p("AAFAmQgGgLgUgaQgRgWgIgPIgGgGQgDgEAEgCQAaAJATAXQASASArAfIgBAIIgiAIQgJgBgGgKg");
	this.shape_10.setTransform(21.8,27.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00772A").s().p("AAjBTQAEgFgDgFIgGgGQhHhmgZgmIgDgEQgDgDAEgCQAEABAFAEIAIAIIAvAqQAAAGAGAGIASAZIATAZIAPAWQAJANAJAHQgRAGgOAAIgGAAg");
	this.shape_11.setTransform(16.6,24.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#118F2D").s().p("ABaBfIgFgEIgzgnIgHgIQgCgHgFgFIgogrIgpgrIgggjQgHgHAEgEQAVAGATAMIBQBVIA0A4QAQAQAHALIgHAPQABgEgDgCg");
	this.shape_12.setTransform(18.1,21.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#007F2B").s().p("AA0BwQgMgMgNgSIgWggIg4hRIgIgPQgFgJgFgEQgMgVgOgnQACgJAHAEIAFAEQAPAUAiAkQAHAHABADQADAIAEAFIAGAHQAMASAgAtIAbAmIAaAmIAIAOQAEAGgIABQgVgBgRgNg");
	this.shape_13.setTransform(11.1,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28,33.2);


(lib.waterC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(64).call(this.frame_64).wait(72));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3296C8").ss(1,1,1).p("AADgeIgcASAAOgLIgaAVAAaAEIgVAb");
	this.shape.setTransform(-27.7,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3296C8").ss(1,1,1).p("AATAcIgTAYAgCAFIgZAZAgUgQIgdARAAcgzIgcASAAmghIgbAXAAygQIgVAZ");
	this.shape_1.setTransform(-30.1,13.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#3296C8").ss(1,1,1).p("AA+gzIgbAXAAzhFIgcASAgsABIgdASAgDAuIgVAYAgaAXIgZAZAAVgMIgYAYAArAKIgUAYABKgiIgVAaAACgiIgbAS");
	this.shape_2.setTransform(-32.5,15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#3296C8").ss(1,1,1).p("AAlhAIAagSAgSgWIgdATAAAAAIgZAYABfg5IgUAbAA0gWIgUAaAABgmIAYgSABXhJIgbAWAAWAXIgVAYAAogmIgbAXAgvAkIgZAZAgZA7IgUAYAhCAOIgcAR");
	this.shape_3.setTransform(-32.4,18.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3296C8").s().p("AgbBzQgDgBgCgDQgBgDABgDIAAgWQAAgDACgCQACgCADAAQADAAACACQADACAAADQABAYgCADQgBADgDABIgDABIgCAAgAhDBmQgEgBABgIIADgHIABgBQAFgJAQgLQACgCADABQAEAAABADQACACgBADQAAAEgDABQgMAJgEAGIAAABIgBABIAAACQAAADgDACQgDADgDAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBgAhgBNQgEgCAGgHIAGgGIAAAAIATgTQADgCADAAQADAAACACQACADAAADQAAADgCACIgUASIAAABIgEAEIgCACQgEAEgDAAQgDAAgCgGgAgVA9QgBgCACgDQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAIACgDQAGgIAJgMQACgCADAAQADgBADACQACADAAADQAAADgCACIgNASIgFAHQgDACgCAAIgDABQgEAAgCgHgAhwAzQgDAAgCgDQgBgDAAgDQADgMALgEIAUgHQADgBACABQADACABADQABADgBACQgBADgDABIgUAHQgDACgBAEQgBADgCABIgEACIgCgBgAgrAsQgDgBgCgDQgBgCABgDQAFgNAIgCQAEgCAJgJQACgDADAAQADAAACACQADACAAADQAAADgCADQgMANgHACQgCABgCAFQgBADgDABIgDABIgCgBgAAOAZQgHAAABgJQABgDACgCIAEgCIACgDQAIgIAEgKQACgDADgBQADgBACABQADACABADQABADgBACQgFALgJAKIgHAIQgEADgCAAIgCgBgAhCAPQgCgBgCgDQgGgJAQgJIABgBQAKgFANgDQADgBACACQADABABADQABADgCADQgBADgEAAQgKACgJAFIAAAAQgBAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQABADgBADQgBADgDABIgDABIgDgBgAgGADQgCgCgBgCQgEgIANgJIABAAQAIgEAKgJQADgCADAAQADABACACQACACAAADQgBADgCACQgMALgJAEIAAAAQAAAAgBABQgBAAAAAAQgBAAAAAAQAAAAgBgBQABADgBACQgCADgCAAIgCABIgEgBgAA4gLQgDgBgBgDQgBgCABgDQABgDADgBIAEgBQADgGAKgRQACgCACgBQAEgBACACQADACAAACQABADgCADQgKARgCAFIAAgBQgCAHgFACIgEABIgGgCgAgQgTQgDgBgCgDQgGgKAhgRQADgBADABIADACIgBgDQAAgDACgDQAPgPAHgCIAAAAIADgBQADgCADAAQADAAACACQACADAAADQAAADgCACQgBACgJACQgEADgLALQgCACgDAAQgDAAgCgCQABADgBADQgBADgDABQgTAKgBgDQABADgBACQgBADgDACIgDABIgCgBgAAogfQgCgCgBgDQgBgDACgDQABgCADgBQAHgCABgCIAAAAQACgFAOgMQADgCADAAQADABACACQACACAAADQgBADgCACQgKAJgCADIAAAAQgCAIgQAEIgCABIgEgBgABbg+QgFAAgEgGQgBgDABgDQABgDADgBQACgBADAAIAGgIQACgCACgBIAEAAIAFgFQAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAAAQABAAABAAQAAAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABIgHAHIgBACQgGAKgEAEQgEADgDAAIgBAAgAA/hNQgDAAgCgDQgBgCAAgEQABgCADgCQAMgIAGgHIAAgBIABgBIACgCIABgCIABgBIABgBIABAAQAJgEABAJQADABgEAFIAAABIgBABIgDAEIgBAAQgHAJgOAJIgEACIgCgBg");
	this.shape_4.setTransform(-36.1,23.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3296C8").s().p("AhXDZQgFgCAAgFQgBgDADgEIAAAAQAEgIAJgFQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgHAEgDAFIABgBIgBACIABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQAAABgBAAQAAAAgBABIgCAAIgBAAgAhGC9QgBgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAIgQAEgCQADgDADgGQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgFAKgEADQgDACgGAMQgBABAAAAQAAABgBAAQAAAAgBAAQAAABAAAAIgCAAIgCAAgAgtCXQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBAAABgBQAAAAAAgBQAFgOAGABQABAAAAAAQABAAAAAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgCAHQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABIgDAAIgBAAgAghCAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBIADgEIABAAQADgDAGgKIAAgBQAGgJACgGQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABgBQAAAAABABQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgCAGgIAMIAAAAQgGALgEAEIAAAAIgEAEQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAABIgBAAIgDgCgAhcB7QgBgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIAHgMQAEgGAIgGQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQgHAFgDAEIgGALQgBABAAAAQAAABgBAAQAAAAgBAAQAAABAAAAIgCAAIgCAAgAiWBaQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQgBgBABAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABgBAAAAIADgCQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQgDAFgDAAIgDgBgAhCBaQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBAAABgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIADgEIAJgMQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIgJAMQgDAFgDACIgCAAIgCAAgAiKBOQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAIgMAIgEIAIgFQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABAAAAABQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQgDADgIAEQgFADgGAKQgBAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgCAAIgCgBgAAEBFQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQANgOABgEQABgGAGgJQABgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgFAIgBAEQgBAFgQASQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgBAAIgDgBgAgiAwQgFgCACgGIADgHQAGgGAGgEQAAgBABAAQAAAAABAAQAAAAABgBQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAABIgKAJIgBABQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABIgCAAIgCAAgAhkAqQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgCAEgGIAAAAQADgEAMgHQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgJAGgDADIgBACQAAAAgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAgAiYApQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAABgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAIALgIIABgBQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAIADAAQAAAAABAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAAAQAAABAAABQAAAAAAABQAAABAAAAIgEAEIgNAJIgCABIgBAAgAAnAVQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBAAABgBQABgJAHgGIAAgBQAGgFADgIIAAAAQAFgKAGgFQABgBAAAAQABAAAAAAQABAAAAAAQABgBAAABQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAABABQAAAAAAABQgBABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgFAFgEAHIAAAAQgEAKgHAGIAAAAQgFAFAAAGQgBAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgDABIgBAAgAiAAVQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIAMgKIAAAAQAFgFAHgDQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAABQgGACgEAEIAAABQgFAFgIAGIgDABIgBAAgAgLATQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAABgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABAAQADgBABgEIABAAQACgFAHgLQAIgLAEgDQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgKAMIgJANQgCAIgIADIgBABIgCgBgAhGATQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBAAABAAQAAgBAAgBQAAAAAAAAQAAgBABAAQAAgBABAAIALgIIAAgBQADgBAGgHQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgHAJgFACIgKAIIgDABIgBAAgAhhgGQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIABAAIAAAAIAAgBQAEgKAKgCQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgEABgCAFIAAAAQgCAGgDABIgEACQgDAAgCgDgAgogHQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAABgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAIAFgFIALgLQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAABAAQAAABAAABQgBAAAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgKAJIgIAHIgCABIgBAAgAiPgLQgBgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAFgKAHAAIABAAQADgBAEgFQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABgBAAABQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABABAAQAAABAAAAQgBABAAAAQAAAAAAABQAAAAgBABQgHAJgHAAQgCAAgCAEQgBABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAIgCAAIgCAAgAhxghQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQgBAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAGgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQACAGgOAHIgDAAIgBAAgAg7gjQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQALgIADgCIAMgMQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgLAKQgCAEgOAIIgDABIgBAAgAAfglQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAMgRADACQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAQABABgHAKQgBAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgCAAIgCgBgAgEgrQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQgDgMAJgBQAEgCAHgFQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQgJAIgGABIAAABQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAAAIgCAAIgCgBgABQguQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAJgMACgGIAAAAQADgHAHgGQAAgBAAAAQABAAAAAAQABAAAAAAQABgBAAABQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgFAFgDAEQgCAGgJAPQgBAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgCAAIgCgBgAhQg6QAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAQgNADABQABAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAIgMAKIgDABIgBAAgAAxg+QAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBIAMgQIAKgMQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABABABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgJAMIgOARQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBABIAAAAIgEgCgAgWhFQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIABAAIAAAAIABAAQADgGAIgHQAAgBABAAQAAAAABAAQAAAAABAAQAAgBABABQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAIgJALIAAAAQgDAFgDABIgDAAQgDAAgCgDgAAhhNQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAIACgHIABgBQABgFAPgFQAAAAABAAQAAgBABAAQAAABABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAABABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQgJAEgBABIgDAIQgBAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIgCABIgCgBgAg0hSQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAIABAAIABgCIAAAAQAFgJALgCQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAAAAAQgGABgDAFIAAgBIgEAGQgDADgCAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgABthXQAAgBgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQgBgBABAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAABAAIAFgFIAAgBQAAgEAHgKQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgFAJQAAAFgJAIIgDABIgBAAgAAFhbQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBgEAGgEQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIgBADQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAgAARhlQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAIAJgKQADgDACABQAEgBABAEIABADQgBABAAAAQAAABAAAAQAAAAgBABQAAAAAAABIgEABIgHAHQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAIAAAAIgEgBgABShlQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQADgIAEgEIgDACQgBAAAAAAQgBAAAAABQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQgBgBABAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIACgBIAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAIAEAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAABIgBACIACgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgCABgDAIQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABIgCAAIgCAAgAgYhmQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIANgGQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQADAHgVAKIgCABIgCgBgAA9hoQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAJgKADABQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgEAGQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBABIAAAAIgDgCgAB9h2QAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAIABgBIAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABgBQAAAAABABQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgCAFQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAIgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAAvh7QgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQACgGAFgDIABgBIALgGQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAABQgJAGgFACIgBACQAAABgBAAQAAABAAAAQAAAAgBABQAAAAAAAAIgDABIgBAAgAAJh/QgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQAHgEACgCIAAgBQAEgEAIgFQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQgBAAAAABIgKAIIAAAAQgDAEgKAFIgCABIgBgBgACJiFQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQgBgBABAAQAAgBAAAAQACgFAEgFIAIgNQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABgBAAQAAABAAAAQgGALgEAEIgEAGQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAIgDABIgBgBgABsiIIgCgDIgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQAKgGABABQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAABABIAAAAIACABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgIALQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIAAAAIgDgBgABLiQQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIAAAAIAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAABABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQACAGgEADQgCACgFAAIAAAAgAAuieQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAOgOAEAEQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAABAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQABABgHAHQgBAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAgABYidQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBAAABgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIAIgFIAKgKQAAgBAAAAQABAAAAAAQABAAAAAAQABgBAAABQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgKAKQgEAEgGADIgCAAIgCAAgAB+ieIgCgCIgBgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBIAIgJQAGgFACADQAFABgEAIIgHALQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIgBAAIgCgBgABIiuQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAFgEABgDQAAgGARgDQABgBAAAAQABAAAAAAQAAABABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBABIgKACQgBAFgHAHIgDABIgBAAgABzi2QAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAIAGgHQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAEAAACADIAAADQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAABIgCABIgFAEQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAIAAAAIgEgBgABrjIQgBgBAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBgBAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAGgGQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAIgGAGIgEABIAAAAg");
	this.shape_5.setTransform(-37,32.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3296C8").s().p("AhTDTQgCgCAAgDQAAgDACgCIACgCIACgEQACgCACAAQgBgDACgDIAFgLQADgFACAAIACgBIABgEQAKgYAJAGQADAAABADQACADgCADQgBADgCABQgDACgDgBIAAAAIAAAAQAEABgEAJQgBACgDACIgCAAIAAADQAAADgCACIgCABIgEAIQgBADgDABIgCABIABADIgCAFIgEAFQgCACgDAAIgBAAQgCAAgDgCgAhdCAQgDgCAAgDQAAgDABgCQAHgKABgEQABgGATgPQACgCADABQAEAAABADQACACAAADQgBADgCACQgNAJgBAEQgBAGgKANQgBACgDABIgBAAQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAgAgZB/QgDgBgBgDQgCgDABgDQABgDADgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgDADgCQACgCACAAIAAgBQgBgDACgDQAKgWAGACIAAAAIAAgEQAAgDACgCQAFgEADgHIABAAIALgUQABgDADgBQADgBADABQADACABADQABADgCACIgMAWIABgBQgGAKgGAFQgCACgDAAIAAADQAAADgCACQgCACgDABQABABgEALQgBACgDACIgCAAIAAADQABAKgLAGIgEABIgCAAgAiXBfQgCgDgBgDQAAgDACgCQAEgEAAgEQABgKAYgHIAEAAIAAAAQAAgDACgDQAQgTAHAAQADAAACACQADACAAADQAAADgCACQgCADgDAAQgCABgLANQgCACgDABIgDgBQABADgCACQgBADgDABQgMADgCACQgBAIgHAHQgCACgDAAIAAABQgDAAgCgCgAg3BUQgDgBgCgDQgBgCABgDIADgHQAEgGAEACQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAFgIQADgDACAAIADgBIAAgCQAAgDADgCIAEgEIAAgCQABgDADgBQACgCADABIgBgDQAAgDACgCIAFgHIABAAIAAgBIABgBIABAAQAIgGACAGIABACQADACgDAFIAAABIgBABIgBABIgFAGQgCADgDAAIgCAAIABAEQAAACgDAEIgIAIQgCACgDAAIAAACQAAADgCACIgDACIgBACQgBADgDABIgEABIABACQAAADgBACIgDACIAAABQgBADgDACIgDAAIgCAAgAiaAuQgDgCgBgDQgBgKAFgCQADgFAHAFIAAgBQABgDACgCIATgRIAFgEQAEgCACACQAFAAABAGIgBAEIgCADIgEACIAAABIgTAQQgCACgEAAIgBAAQAAADgCACIgEADIAAAAQgCADgDABIgBAAIgEgCgAhJAcQgDgBgCgCQgBgDABgDQAAgDADgCIALgHIAAAAIAAgBQABgDACgBQADgCACABIAAgBQABgCACgCIALgKIABgBIACgCIACgBIABAAQABgDACgCIAKgJQACgCADAAQAEAAACACQACACAAADQAAADgCACIgLAKIgEACIgBADIgBAAIgBACIgBABIgBABIgLAIQgCADgDAAQABAEgHAGIgNAKIgEABIgCgBgAAxALQgDgCgCgDQgBgCABgDIADgDIABgCQABgDADAAIACgBIgBgDQABgDACgCQAGgFAAgDQAAgDACgCQACgDADAAIACAAIgBgCQAAgDABgDIAMgRQACgCADAAQADAAACACQACACAAADQAAADgCACIgJAPQgCADgDAAIgDAAIABAEQACAJgNALIgDACQADADgEAFQgBADgHADIgCAAIgDAAgAhkAGQgDAAgCgCQgCgDAAgCQAAgDACgCIAQgOIAEgDIACgBQABAAABAAQABgBAAAAQABAAAAAAQABAAAAABQAGAAAAAHQAAADgCACIgDACIAAAAIgDACIgPAMQgCACgDAAIAAAAgAAHgCQgCgCAAgDQAAgEACgCIAEgDQAAgDADgCQACgCADAAQADAAACACQACACAAADQACAEgKAKQgCACgEAAQgDAAgCgCgAiPgFQgDgCgBgDQgBgDACgCQABgDADgBIAJgDQAAgDACgCQACgDADAAQADAAACACQADACAAADQADALgWAHIgDABIgDgBgAg/gZQgDAAgBgDQgCgDABgCQAAgEADgBQASgMADgGQACgCADgBQABAAAAAAQABgBAAAAQABABAAAAQABAAAAAAIABgCQAAgEADgBIADgBIACgEQADgCADABQADAAACACIAEAGQACAHgFADQgDAEgMgDIgBAAQABABAAAAQgBABAAAAQAAABAAABQAAAAgBABQgEAIgWAOIgEABIgCAAgAh0gbQgDgBAAgDQgBgEACgCQAHgLAFABIASgNQACgCADAAIADABIAAgEQABgCADgCQAMgHADgDQABgDADgCQACAAADAAIABgDQADgIACgBQAEgDADABIADABQAAgBAAAAQABgBAAgBQAAAAABgBQAAAAAAgBQAKgIAKgFIAAAAQAHgDAGgIQABgDADAAIAFAAIAAgDQABgDACgCQABAAAAAAQABAAAAAAQAAAAAAAAQAAABAAABQABgDACgCQACgCADAAQADAAACACQACACAAADQACAEgLAHQgDACgDgBIgBgBIAAABQAAADgCADQgJAMgJAEIAAAAQgIAEgIAHQgCACgDAAIgDgBIAAABQAAADgCACIgEACQgBADgDABQgCABgDgBIgBADQgCAIgTAKQgDACgDgBIgBgBIAAACQAAADgDACQgXATgEgBQABAAAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQgCADgDAAIgBAAIgEgBgAgJgfQgDgCgBgCQgBgEACgCQABgDADAAQABgDACgBQABgBAAAAQABAAABAAQAAgBABAAQAAAAABABIAAgDQACgHABAAQAEgEADABQAEAAACAFIABAFQAAADgCACIgCABQAAABgBAAQAAABAAAAQgBAAAAABQgBAAgBAAIgEABIAAACQgCAIgHACIgCAAIgDgBgAAhgiQgCgCgBgDQAAgDABgCQANgSAEgDQAEgDAFgKQACgDADgBQADgBADACQACACABADQABACgCADQgIAPgFADQgDADgLAPQgBACgDABIgBAAQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAgAAag+QgDgBgCgDQgBgDABgDQABgDACgBQAMgGABgCQAAgDACgCQACgDADAAQADAAACACQADACAAADQADAKgYAMIgDABIgCAAgAgLhEQgDgBgCgDQgBgCABgDQABgDADgCIABAAQACgDACgBQABAAAAAAQABAAABgBQAAAAABABQAAAAABAAQgBgLALgGIABAAQAHgDALgJQACgCADABQADAAACACQACADAAADQAAADgDACQgNAKgJAEIgCACQAAADgCACQgCADgDAAIgCAAQACAIgFACQgBACgEAAIgGgBgABjhGQgCgBgBgEQAAgDABgCIAEgHQABgDADgBIABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAHgNAGgHQACgDADAAQADAAADACQACACAAADQABADgCACQgFAGgGAMQgCADgDABIgBAAIAAAEIgFAJQgCADgDAAIgCAAIgEgBgABKhSQgFAAgBgHQAAgEADgCIADgCIAEgFIgMAIQgDACgDgBQgDAAgCgDQgBgCAAgEQABgDACgBQAYgQACgDIAAgBQACgGANgMQADgCADAAQADAAACADQACACAAADQAAADgDACQgIAIgDAEIABABQADABABADQABADgCADQgMAUgEAEIgFADIgEACIgCgBgAAvh1QgDgCgBgDQgBgDACgCQABgDADgBQANgEAEgHIAAAAQAGgLANgJQACgCADABIABAAIAAAAQAAgDACgCQACgDADAAQAFAAADgDIABgBQAFgEAKgOQACgDADAAQADAAADACQACABABADQAAADgCADQgMASgHAEIABgBQgIAGgJABIgDAAIAAACQAAADgDACQgJAGgFAIIAAAAQgFALgUAHIgDAAIgDAAgACHh/QgCgCgBgDQAAgDACgDIACgCQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAgBIAIgLQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgHAMIAAADIgBAEIgEAGQgCACgDABIgBAAQgDAAgCgCgAAgiLQgDgCgBgCQgBgDACgDQABgDADgBQAMgEAFgDIAAgCQAAgDACgCQACgDADAAIAEABIAAgEQADgJANgGQAJgEAIgIQACgCADAAQADAAACACQACACAAAEQAAADgCACQgJAJgMAFQgGADgCAEQgBADgDABQgDABgCAAQABADgBADQgBAEgFAEQgGAFgQAFIgDAAIgDAAgAB1iPQgDgBgCgCQgCgCAAgDQAAgDACgCQAHgHACABIABAAIABABIAGADIAGgGQABAAAAgBQAAAAAAAAQAAgBAAABQAAAAAAAAIAAACIABAEQAAADgCACQgBADgDABIgDgBIgFAFQgDADgDAAIAAAAgABtjFQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBIAGgFQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgGAFIgEABIAAAAg");
	this.shape_6.setTransform(-36.8,31.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3296C8").s().p("AAGDVQgDgDAAgEIAAgLIAAgBIAAgBIAAAAQAGgQAEgGQAEAGAGAQIAAAAIAAABIAAABIAAAAIAAALQAAAEgDADQgDACgEABQgEgBgDgCgAg2DHQgDgCgBgEQgBgEADgEIAPgXIADgEIAAAAQABgEADgCQAIgEADAEQAHABgCAKIgCAEIgEAGIgQAYQgCADgEABIgCAAQgDAAgDgCgAgTCSQgDgCgBgEQgBgEACgEIAMgSQACgDAEgBIAAAAIAAgEQADgNACgGQAGgIAGAAIAAgCQAKgeAOgEIACgBQgBgDABgDQALgcAMgCQADgBAEACQAEACABAFQABADgCAEQgCAEgFABQgDACgFAPQgCAEgDACIgDAAQABAEgBADQgCAEgEABQgGAEgGASQgBADgDACIgCABQABADgCAEQgCADgEABIgCABIgCAIQgBAEgDADIgEABQABAEgDAEIgKASQgCADgEABIgDABQgCAAgDgCgAhVBvQgDgDAAgEQgBgEADgDQACgDAEgBIAMgBQARAAgDALQAAAEgDADQgDADgEAAIgEgBIgJABIgCAAQgDAAgDgCgAh1BMQgDgDAAgEQAAgEADgDQAQgSANgIIAEgBIACgFQAJgLAFgEQAEgEADgBIAGgBIAAgBQABgEAEgCQAMgGACgEQABgEAEgCIAEgBQgCgFAGgFQACgCAIgCQAEgCADACQAEACACAEQAAAEgBADQgCAEgEACIAAAAQgCADgDABIgEABIgBADQgCAIgVANQgDACgDAAIgBAEQgCAEgEABIgCABIgLAMQgDADgEABIAAAAIAAAAQgBAEgEACQgLAHgOAPQgCADgEABIgBAAQgEAAgDgDgAgRA4QgEgCgBgEQgBgEACgEIAQgXIAFgGQAEgEADABQAIgBADAIQABAEgCAEQgCAEgEABIAAAAIgBABIgOAWQgCADgEABIgCABQgDAAgCgCgAizAjIgMAAQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAPAAQALAAgBAFQAIAOgSABIAAAAIgDAAgAh1AgQgEAAgDgEQgCgDAAgEQAAgEAEgDIAOgLIADgCIABgBIgBABIABgBIAAAAQADgCAEAAIACgFQAOgRAIgGQAGgGAEAAIAFgBQACgDADgCQALgGACgDQACgEAEgCQADgBADABIABgFQADgHAEgCQAIgHAIAGQADACABAEQAAAEgCAEQgCADgEABIgBAAIgBACQgCADgDACIgGAAIAAADQgDAJgTALIgFABIAAACQgCAEgDABQgEACgDgBIAAAAQgHAGgNAOQgCADgEABIgBAAIAAAAIgCAEIAAAAIgBABIgBABIgEADIgPAMQgDACgDAAIgBAAgAhrAEIABAAIAAAAgAAhgUQgBgDADgFQABgEAEgBQADgBADAAQAIgGAFgTQABgEAEgCQACgBAEAAIgBgDQAAgEADgDQAIgJAGgJIgDAAQAAACgHAIQgDADgEAAIAAAAIgBADQgCAFgKAGQgDACgEAAQAAAEgCADQgDACgFABQgDABgFAJQgCAEgEABQgEABgDgCQgEgCgBgEQgBgEACgEQANgWAMACIACAAIAAgDQABgEAEgCIAEgDQACgEAEgBIACAAQABgDACgCQAPgRAGAAQAAgDACgCIAKgKIAGgEIAEgBQAAgDADgCIAEgEIAAAAIABAAQADgDAEAAIABAAIAAgDQAAgFACgCIAEgEQADgDAEAAIAEABQAAgDACgDQADgDADAAIAAgBIgBAAIgBABIgCACIgDACQgEAFgNgDQgEgBgCgDQgCgEABgEQABgEADgCIACgBIABgBIADgDIACgBIACgBIAAAAIABgCIABgCQANgTANACQAEAAADADQACACAAAFQAAAEgCADQgDACgEABQgDAAgEAFIABAEQAJgFADACQAIAAABAHQABADgCAEIgDAFQgCADgEABIgDAAIAAAFQgBAEgEAEQgFAEgLAGQgEABgEgBIAAAAIAAACIAEAEQACADgBAEQgCAHgCADQgEAFgEAAIAAAAIgBACIgBADIgCADIgHAIQgCACgDABIgBAFQgHANgMAMQgDACgEABIgBAAQABACgBAEQgHAcgOAIQgJAGgDAAIgCAAQgKAAAAgJgABdhlIAAgBIAAAAIAAAAIAAAAIAAABgABVgOQgEgCgBgEQgBgEACgDQAHgRAFgGQADgGADgBIAEgDQAAgEADgCQAPgRABgGQAAgEADgDIAEgCQgBgEACgDIAIgKIAAgBIAAgCIABgBQADgGADgDQAEgJAEgCIADgBIAAgBQAAgEACgDIAFgHQAAgDADgCQADgDAEAAQAIAAACAGQABACgBAFIgCAFIgHAJQgCADgDABIAAACQAAAEgEADIgDAGIgBABIgDADIAAACIgBACIgCAEIgIAMQgCACgDABIAAABQABAKgWAaQgCACgCABIgBAFQgCAEgEABIAAABIgLAUQgCAEgEACIgDAAIgFgBgAhxgRQgEgBgCgEQgCgEABgDQACgFAEgBQASgKACACQgBgEACgEQACgEAEgBIADAAQABgDACgBIAOgOIABgBIAEgFIACgCIAGgDIASgKQAEgCAEACQAEABABAEQACADgBAEQgBAEgEACIgSAJIgCABIgFAHIgQAPQgCACgEAAQgDALgcAPIgFABIgDgBgAAdhYQgEgBgDgDQgCgDABgEQAAgFAEgCQAEgDABADQAAgEADgDQADgDAEAAIADABIABgGQABgEAEgBQASgIABgEQABgEADgDQACgDAFAAQAEAAACADQADADABAEQACAQgiAOQgEACgDgBIAAABQADAEgQAMQgDACgEAAIgBAAgAgOhhQgDgCAAgEQgBgFADgDQACgDAFAAIACAAIABgDIAAAAQAIgJARgMQADgCAEAAIAAgBQABgEADgDIAEgCIABgBQADgCAEAAIAAAAIACgFQAIgJAFACQABgEAEgCIARgLIABgBIACgDQADgDADAAIADgEIAPgNQAFgFAFgBIABgBQADgCAFABQADABACAEQADADgBAEQgBAEgEACIgEADIgEACIgBAAIgOAMQgCACgCABIgEAFIgFAFIgTAMIgFABIgCAFQgDACgFABQABAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABQgDADgEAAIAAAAIgCADIgCACIgCACIgEADQgEACgDgBIgBACQAAAEgEACQgPALgHAHIAAABQgJAKgHAAQgEAAgDgEgABeiPQgEgBgCgDQgDgDABgEQABgEAEgDIAIgFIABgCQADgDAEAAQALAAgBAJQACADgEAFIgEADIgJAHQgDABgDAAIgCAAgADBihQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgRQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIAAARQAAAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_7.setTransform(-39.8,32.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3296C8").s().p("AgFD2QgEgBgCgDQgCgEAAgEIABgEQgBgDAAgEQABgEAEgCQAEgCADABQADAAADAEQACACABAGIgCAKQgBAEgDACQgCACgDAAIgCAAgABHDtQgCABgDAAQgEAAgDgDQgDgDAAgEQAAgRAMADQAGgBAJAIQADACAAAEQABAEgDAEQgDADgEAAIgBAAQgDAAgCgBgAADDKQgDgCAAgEQgCgEACgEIAGgMIADgDIADgDQAIgEADAFQAEABAAAHQAAAEgDADIAAAAIgBABIgGALQgCAEgEABIgDAAIgFgBgAjWC5IgCAAIgWAAQgEgBgDgCQgDgDAAgEQAAgFADgCQADgDAEAAIAWAAIACAAIAAAAIABAAIAAAAQAIAFADAFQgDAEgIAGgAg0CwQgDgDgBgEQAAgEADgDQAAgBABAAQABgBAAAAQABAAAAAAQAAAAABABQAAgFADgCQACgDADAAQgBgEADgDQAFgGABABQAAgFADgCIAFgDQgDgKAPgLIABAAQAIgGAGgMQACgDAEgBQADgCAEACQAEACABAEQABAEgCAEQgJARgLAIIAAgBQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAQABAEgCAEQgCADgEABIgBABQACABgMAQQgDADgDABIAAABQACACgLAMQgDADgEABIgBAAQgDAAgDgDgAAdCqQgFAAgCgEQgDgDABgEQAAgEADgDQAIgGABgFQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQABAOgRANQgDACgDAAIgBAAgAiLCcQgDgCgCgDQgCgEABgEQABgEADgCQALgFACACQgBgEABgEQADgDADgBIADgBQAAgDACgCQAMgQAGgGQAGgGAEAAIAEAAQABgEAEgBIAKgGQAAgDACgDQACgDAEgBIAFABIAAgDIAAgEQABgEADgDQADgDAEAAQAEAAADAEQADADAAAEIgBAEQAAAEgDADQgDADgEAAIgCgBQABADgBADQgBAEgEAFQgFAEgMAHIgEABIgCAEQgCADgFABIgDAAIgOASQgDADgEABIAAAAQABAKgYANIgFABIgDAAgAAvCEQgEgDAAgEQgCgOANgNIAAAAQAJgJAGgJQACgDAEgBIABAAIAAgBQgBgEACgEIAFgGIACgDIABgBIABgBIAAAAQADgCACABQAJAAABAIQACABgDAGIgBACIgFAHQgCADgFABIAAAAIAAABQABAEgDAEQgHAKgKAKIAAAAQgFAGAAAFQAAAEgDADQgCAEgEAAIgBAAQgEAAgCgCgAitBzQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIANAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgNAAgAAcBIQgDgCgBgEQAAgFACgDQAFgGAIgIQAIgHAOgTIAAAAQANgSAGgLQACgEADgBQAEgBAEACQAEABABAEQACAEgCAEQgGALgPAVIAAgBQgQAVgIAIIgLAMQgCADgEABIgCAAQgDAAgDgCgAhWAwQgDgCgBgEQgBgEADgEQAQgXANADQAEgBAIgMQACgDAEgBIACAAQABgDADgCIAQgOIACgCIABgBIABAAQAIgEADAFQAIACgGALIgBACIgEADIgPAMQgDACgEAAIgBADQgRAagOgDIAAAAQgEABgHALQgCADgEABIgDAAQgCAAgDgCgAgQAuQgEgBgDgDQgCgEAAgEQABgEADgCIAWgUQADgDAEAAQAEAAADADQAEACAAAFQAAAEgDADQgEAFgUARQgDACgEAAIgBAAgABvAkQgDgBgCgEQgCgEACgEQACgEADgBQAEgDAEgHQAFgNAMgRQACgEAEgBIACAAQgBgEABgEIAKgTIAFgGQAEgEADAAIAAgEQABgDACgCIAAAAQACgEAEgBIAFgBQAKABgBAIQACADgEAFIgGAFIgEABIAAADQAAAEgDADIgCACIgBABIgJARQgBADgEACIgDABIAAABQABAEgCAEQgLAPgFAMQgIARgKADIgEABIgEgBgAhqAUQgEgBgCgEQgBgEABgEQACgEAEgBIARgHQADgCANgPQADgDAEAAQAEgBADADQADADABAEQAAAEgDADQgRATgFACIgSAIIgEABIgEgBgAAWAJQgEAAgCgEQgCgDAAgDQABgEAEgDIAIgGIABgCQACgEAFgBIAEAAIADABIgBgFQABgEADgDQAGgEADgGIAAAAQAFgJAXgOQADgCADAAQAAgEADgDIAEgCIABgCQACgDAEgBQAEgCADACQgBgDABgDQABgEADgCQAPgIAGgFIAAgBQAAgEADgDQACgDAEgBQAEAAADACQAFADAAAFIACgDIgDgDQgEgDABgGQgBgDAFgFIAJgJIAAAAIgCABQgFAFgOAGIgEABQgBACgCACIgIAIQgDACgFAAQgEAAgCgDQgDgEAAgEQABgEADgCIAIgIQADgCADAAIAAgBQACgEAEgCIAMgFIABgEQABgEAEgBIADgBIADgEIAHgIIAFgCQAGgDADADQAFABAAAIQAAAEgDADIgDADIgGAFQgCACgDAAIAAACQAAACgCADIABAAQAFgGAFADQAAgEACgDQACgDAEgBIACAAIACgCQABgDABgDQADgDAEAAIAAAAIABgBIgFgBQgEgBgBgEIgCgDIgBgCQgCgEACgEQACgEADgBQAMgFABgCQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQABAGgEAFIADAAQAEAAADADQACACABAEQAAAEgCADIgHAJIAAABQgDADgEAAIAAABIgGACIgBAAIAAAEIgCAEQgDAFgHAEIgBABQgDADgEABQgEAAgDgCIABADQABAEgCADIgCACQADACAAAGQAAAEgDADIgBABIgBACIgKAOQgDADgEABQAAADgBADQgNAUgFAGIgVAYQgCADgEAAQgFAAgDgCQgDgDAAgEQgBgEADgDIAUgYIAKgPIgPAJQgEACgDgBIgCAAIAAAAQADALgGAFQgEAEgKAAIAAABQgBAEgDADQgSALgEAGQgFAIgJAHQgDACgEAAIgCAAIAAADQADADgHAHIgOAJQgDABgCAAIgDAAgAAAgWQgCgCgBgEQgCgKAFgDQAEgEAIABQAEABADADQACAEgBAEQAAAEgDACIgDABIAAABQgCADgEABIgCAAQgDAAgDgCgAgsgYQgEgBgCgDQgCgEABgEQABgEADgCIAXgOQABgDACgCQADgDADAAQABgDADgCIAOgLQACgHAHgDQAGgEAHAAQAEAAADADIABACIABAAIABAFQAAAEgDADIgBABIgBABIgFABIgBAAQgCABgBAEIgDADIgDACIgBAAIgBAAIgMALIgEACIgCAEQgBACgGAEIgYAQQgDACgCAAIgDgBgAAyg+QgEgBgCgDQgDgEABgEQABgEADgCQANgJAIgJIAAAAIAQgOIgEgCQgDAFgLAHQgDADgEgBQgEgBgDgDQgCgEABgEQABgEADgCQAFgDABAEQAAgFADgCQADgDAEAAIAAAAIABgCQACgEAEgBQAEgBAEACIABABIABgDIABAAQAHgQANgHQAEgDAEABIABABIAAgCQABgFADgCIAIgHIAFgCQAGgCADAEQAGACgDAJIgCADQgCADgDABIgFAEQgEADgEAAIgDgBIAAADQgBAEgDADQgJAFgEAJIAAAAIgCAEQADABACADQACADAAAFQgBAEgDACQgRAMgJAJIABAAQgKAKgPAKQgCACgDAAIgCAAgAC3hPQgDgDgBgEQAAgEACgDIAKgNQAAgEADgDIAEgCQAAgEACgDIAGgJIACgDIAFgIQACgDAEgBQAEgBAEACQADADABAEQABAEgDADIgEAIQgCADgHAKQgCACgDABIAAABQACAFgQAUQgCADgEABIgCAAQgDAAgDgCgAAxhaIAAAAIAAABIgCAAgADxiGQgBAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgXQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIAAAXQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAgACWiqQgEgCgCgEQgCgDACgEQABgEAEgCQAIgEAGgGQADgDAEAAQAEgBADADQADADAAAEQAAAEgDADQgIAKgMAFIgEABIgDAAgAC4jKQgBAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAGgGADgBIAHgFQABgBAAAAQABAAAAAAQAAAAABgBQAAAAABABQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABIgIAGIAAAAIgEABIAAgBQAAABgDAEQgBAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAgACIjrQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAgAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_8.setTransform(-45.5,32.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#3296C8").ss(1.5,1,1).p("ABOiYIgxAlABgiwIgSALACBihQAAABgCABIgCACQgCACgCABIgMAKAB3h1IgSARABkiJIgtAlABTiAIggAbABniqIgPALADJi/IgKAJACzinIAUgTIACgCACHjCIgJAHACfi5IgLAJACQiIIgIAEIAUgTACiiYIgSAQIgNAMACeiFIgQAVAC/iDIgDAEAC/iDIAFgJIgBABQAAABgBACgAC2iuIgHAGAC1h0QgFAHgEAHIgHAKACmjcIgRALACBjEIgJAFADFjYIgbAWAB7hZQgBABgBACIAMgPQgFAGgFAGgABwhKIgfAoAAxgyIgIAGABDgPIgHAJABlAHIgFAIABygMIgEAGABRhPIgXAUAA7BIIgWAiABZAaIgXAkACZhKIggAzAB5hzIgdAaAALh7IgDACAi5AAIgPAKAAPhoIgUAPQgBABAAAAQgBABgCABQgBABgBABIgLAIAg0hSIgWAOAgfhFIgkAbAgGAAIgiAeAgEgzIgmAfAhlgzIgIAFAhcgXIgcAUAh5gnIgqAbAifAtIgPAAAiCBuIgXAVAhdBNIgbAZAhAAzQgBABgCAAIAEgDgAgdBtIgdAmAAIA9IgbAjAhIAEIgWASAg6AuIgYAVAgBhyIgpAaAiPDJIgMAAAAFCbIgNAXAgUDTIAAAKAAbB6IgMASAAhhRIgbAVABCidIgtAcAAyAGIgiAsAAfgiIgaAY");
	this.shape_9.setTransform(-42.9,34.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#3296C8").ss(1,1,1).p("AAeANIAAAXAgWgjIgHAEAAFAAIAFgGIgFAE");
	this.shape_10.setTransform(-23.3,15.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#3296C8").ss(1.5,1,1).p("ABiiKIgtAkABeiyIgTAMAB/iiQgBABgBAAIgDADQgCABgCACIgLAJAB1h3IgTARABMiZIgyAkABRiCIggAbABlisIgQALACxipIAUgSIAHgKIgQANACdi7IgMAKACEjEIgIAHACOiKIgOAMACOiKIgJAEIAVgTACbiHIgQAWACfiZIgRAPAC8iFIAGgJIgBABQgBABgBACIgDAFIgCAEACyh2QgEAHgFAHIgHALACziwIgHAGACfjbIgMAIADCjaIgaAWAB+jGIgIAFABuhMIgfAoAB5hbQgBACgBABIAMgPQgFAGgFAGgAAug0IgHAHABAgRIgHAJABwgOIgEAGABjAFIgGAJABOhRIgWAUAA5BGIgWAjABWAZIgXAjACXhLIghAzAB3h1IgdAaAAJh8IgDABAi7AAIgQAIAAMhqIgTAPQgBABgBAAQgBABgBABQgBABgBABIgLAIAg3hUIgWAOAgihHIgjAbAgGg0IgmAeAgJgBIgiAdAhng1IgJAFAhfgZIgbAUAh7gpIgrAbAiiArIgOAAAiEBsIgYAVAhfBLIgcAZAhDAxQgBABgBAAIAEgDgAgfBrIgeAmAAFA7IgaAjAhKACIgWASAg9AsIgYAWAgEh0IgpAaAiRDHIgNAAAADCZIgOAYAgXDRIAAAKAA/ifIgtAdAAwAEIgjAsAAcgkIgaAYAAYB5IgLARAAehTIgaAW");
	this.shape_11.setTransform(-42.7,34.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#3296C8").ss(1,1,1).p("AAhANIAAAXAgUgjIgMAI");
	this.shape_12.setTransform(-23.5,15.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3296C8").s().p("AgFD1QgDgBgCgDQgCgCAAgDIABgGIAAAAQgBgDABgDQABgDADgBQADgCADACQACAAACAEIAAAFIAAAJQgBAEgCABIgEACIgBAAgAA7DqQgCgCAAgDQAAgMAKABQAEAAAIAFQADACAAADQABADgCACQgBADgEAAQgDABgCgCIgCAAQgCACgCAAQgEAAgCgDgAADDJQgCgCgBgDQAAgDABgDIAGgLIADgDIABgBQADgDACABQAFAAACAEIgBgBQABABAAAAQAAAAAAABQAAAAAAABQAAABAAAAQAAADgCACIAAAAIgBACIgHALQgBADgDAAIgCABIgEgBgAjXC3IgEAAIgUAAQgEAAgCgCQgCgCAAgDQAAgDACgDQACgCAEAAIAUAAIAEAAIABAAQAMAFAFADQgFADgMAEgAg0CvQgCgCgBgDQAAgDACgCQAEgEABABQAAgDACgDQACgCADAAIABAAIAAgCQAAgDABgCIAJgMQACgCADgBIACAAQgBgCABgDQAGgPAJgGIAAgBQAGgEAFgJQABgCADgBQADgBADACQACABABADQABADgCADQgGAMgJAGQgFAFgEAJQgBADgDACIgEAAIABACQAAADgCACIgIAMQgCACgEABIgCAAIABADQABABgJAMQgCACgEAAIAAAAQgDAAgCgCgAAXCmQgCgCAAgDQAAgDACgCQAJgJABgFQAAgDACgCQACgCADAAQAEAAACACQACACAAADQABAJgPAPQgCADgDAAQgEAAgCgDgAiLCaQgDAAgBgDQgCgDABgDQAAgDADgBQAMgIACABQgBgDABgDQACgCADgBIAEAAIAAgDQABgDACgCIACgBIACgEIAAAAQAHgOAQgEIADAAIABgDQABgDACgCIAMgIQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQACgDAEAAQADgBACACQAFAEgCAHQgBACgDAEQgFAEgKAGQgDACgDgBIAAAAQAAACgBADQgCADgDAAQgIADgEAHIAAAAIgFAJQgDAEgDAAQgBAAAAAAQgBABAAAAQgBAAAAgBQgBAAgBAAQADAIgXAPIgEABIgCgBgAAxCEQgCgBgCgCQgCgDABgDQAGgTAIgIIAMgOQACgCADAAQADgBADACQACACABADQAAADgCADIgNAOQgGAHgEAOQgBADgDACIgEABIgCgBgAiuByQgDAAgCgDQgCgCgBgDQABgDACgCQACgCADAAIANAAQADAAACACQACACAAADQAAADgCACQgCADgDAAIgNAAgABQBQQgDgCAAgDQAAgDABgCIAFgHIAAAAQABgDADgBQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAFAAAAAHQABAAAAABQAAAAAAABQAAAAgBABQAAAAAAABIgCADIgEAHQgCACgDABIgBAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBgAgxBKQgDAAgCgDQgCgCAAgDIABgDQAAgDADgCQACgCADAAQADAAACADQACACAAADIgBADQAAADgCACQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgBAAgAAdBHQgDgCgBgDQAAgDACgCQASgXAGgGQAFgFAKgOIAAAAQALgOAEgIQABgCADgBQADgBADABQACABABADQACADgCADQgEAIgLAPIgBABQgLAPgGAGQgGAFgQAWQgCACgDABIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAhWAvQgDgCAAgDQAAgDACgDQAXgZAIACQADgBAHgJQABgDAEAAIADAAIAAAAQABgDACgDIAPgNIAEgCIADgBQAGgCABAEQADACgBAFIgCAEIgEACIAAAAIgPAMQgCACgEAAIgCgBQABADgCACQgNATgKgCQgEABgPARQgCADgDAAIAAAAQgDAAgCgCgAgTArQgDgBgBgDQgBgDABgDQADgGAHgDIAAAAQAEgCAMgLQACgCADAAQADAAACACQACADAAADQAAADgDACQgOANgFACIAAABIgCACQgCADgDABIgCAAIgDgBgABtAiQgCgCgBgEQAAgDADgCQALgNAEgIIAAAAQAEgJAJgNQABgCADgBQADgBADACQADACAAADQABADgCACQgHAMgEAIIAAAAQgEAKgOAPQgDADgDAAIAAAAQgDAAgCgCgAhpATQgDAAgCgDQgCgDABgDQABgDADgBIAXgMIAMgNQACgCADgBQADAAACACQADACAAADQAAADgCACQgNAPgEABIgWANIgDABIgCgBgAAWAIQgDAAgCgDQgCgDAAgCQABgDADgBIAJgIIABgCQACgDADAAIAFAAQAHACgCAHQAAACgEAEIgNAJQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgBAAgAAygPQgDAAgCgDQgDgCAAgDQABgDACgCQANgMADgFIAAgBQAEgFARgLQADgCADABIACAAIgBgBQgBgDACgDQACgCADgBIABAAIABgCQABgDADgBQADgBADACQADABABADQACAHgFAFQgDADgHABQgDABgCgCQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAADgDABQgNAJgDAEIAAAAQgEAGgPAOQgCACgDAAIAAAAgAAEgVQgDgBgBgCQgCgCAAgEQABgMALACQADAAACACQACADAAADQAAADgDACIgDABIgCADQgCACgDAAIAAAAgACUgXQgCgBgBgDQgBgDABgDIALgSIADgFIADgDQAHgDADAGQACACAAADQgBADgCACIgCABIgBACIgJARQgCADgDABIgCAAIgEgBgAgtgZQgDgBgCgDQgBgDABgDQACgDACgBQADgCADACIAFgDIAAgBQAGgGAHgJQADgCADAAIACAAIAAgBQABgDACgCIAQgMQADgFAFgEQAEgDAEAAIAPgLIADgCIgBABIABgBIAAAAIAAAAIAAAAIABgBIALgFIAAgBQABgDACgCQAGgEABADQAAgDACgDQACgCADAAIADABQAAgDACgCQACgCADgBQALgBAEgGQAFgLAKgGQADgCADABQADABABACQACADgBADQAAADgDABQgGAEgEAIQgFANgWACIgDAAQACADgPAKQgDACgDAAIgCgBIgGAKIAAAAIAAAAIgBAAIAAABIgEACIgOALIgBABIAAAAIgCABIgDABIgCAAQgCACgDAEIgDADIgBAAIgBABIgNALQgDACgDAAIgBgBQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQgHAKgIAHIAAAAQgIAHgHAAIgFgBgABvghQgDgCgBgDQgDgLALgHIAAAAQAGgDAHgJIAAgBIASgYQABgCADgBIADAAIAAgCQgBgDACgCIAHgKIgEgBQgCgBgBgDQgCgDACgDIAGgMIAAgBQAEgEADgBQAGgDAFAFIABABIACAFQABAEgCACQgBADgDAAIAAABQAFAAABAHQgBADgCACIgBABIgCACIgKAPQgCACgDABIgCAAIAAABQABADgCACIgSAaIAAAAQgKAMgIAEIABAAIgBABQABADgCADQgCADgDAAIgCABIgDgBgACtg6QgDAAgCgDQgBgCAAgDQABgDACgCIAAgBQACgCADgBQAEAAACABQAFACgBAGIgCAEIgEADIgEACIgCgBgAAxhAQgDAAgCgDQgCgCABgDQACgKAJgDQAEgCALgJQANgMANgKQADgCADABQADAAABADQACACAAADQAAADgDACQgNAJgMAMQgOANgGABIgBABQgBAEgCABIgEACIgCgBgABwhPQgCgCAAgDQgDgGARgHQAIgDAEgLQABgCADgCQADgBADABQADABABADQABADgBADQgHARgNAFQgFACgBgDQAAADgCACQgCACgDAAQgDAAgCgCgAC3hQQgCgCAAgDQgBgDACgCIAKgPQABgDACgCQACgCADAAIAAgEQACgUAPgGQADgBADABQADABABADQABADgBACQgBADgDABQgHAEgCALQAAADgDACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIABADQAAAEgOAUQgCACgDABIgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAgBgBgAB4hzQgEAAgCgDQgCgCAAgDQABgDACgCIAIgIQADgCADAAIABAAIAAgCQABgDADgBIAOgIIABgEQACgCADgBIADAAIAAAAQABgDACgDIAHgHIADgCQADgBACABQAGAAABAHQgBADgCACIgDACIgGAGQgCACgDAAIgBAAIgBAFQAAADgFADQgFAEgMAGQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAIAAAAQAAADgDACIgIAIQgCACgDAAIAAAAgADviFQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgXQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIAAAXQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBgBgAC3iMIAAgBQgDgBgBgDQgBgDABgDQACgCACgBIAGgCIACgCQgBgDACgCQACgCADgBIADAAIAAgCQAAgDADgCIAJgFQAKgDABAHQADADgFAGQgBADgDAAIgDAAIgDACIgEABQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAADgDABIgBABIgEAEIgFAFQgCACgDAAIgBAAQgCAAgDgCgAB9iYQgDAAgCgDQgCgCABgDQAAgDACgCIAIgGIADgCIAEgBQAHABAAAHQABABgDAEIgDACIgHAFQgCACgDAAIgBAAgACWisQgDAAgBgDQgCgDABgDQABgDACgBQALgGAFgFQACgDADAAQADAAACACQACACAAADQABADgDADQgGAGgMAIIgEABIgCgBgADBitQgDgBgBgDIgBgDIgBgBIgBgDIABgDIADgDIABgBQANgGABgDQABgDACgCQACgCADAAQADAAACACQACACAAADQACAJgTALIAAADQgBADgDABIgDABIgDgBgAC5jHQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAAAIAQgMQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABIgQAMIgDABIgBAAgACHjqQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQABAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAgAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAg");
	this.shape_13.setTransform(-45.3,32.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#3296C8").ss(1.5,1,1).p("ABGifIgGAFABli3IgWARAAzhtIgJAIABehrIgOANABaiNIgaAVAA2iTIgGAEAC1iXIgEAGACriwIAKgOIgPAOAB2ikQgFAEgGAEACVi+IAAAAQgCACgDACQgCACgBABACVi+IgIAHIgGAFACQicIgDADAB+jKIgQANACCiMIgFAFAB7hzIgIAKACHiEIgFAHACqiGIgDAFQgBABgBABIgBADIgDAEQgBACgBABQAAABAAAAIgJAOACkh8IgFAHACjjKIgOAMACeilIgOANAB0h/IgNAMABrhfIgCADQgFAHgFAGQgDADgCADABQg7IgZAgAAzhFIgRAQABLANIgPAXAA0AxIgSAbAAbBXIgLARAB2g0IgRAaACPhcIgSAdABGhWIgIAHAgUhZIgGAEIgBAAIglAdAAAhDQgBACgDABIgEAEAgTgyIgSAOAgPgIIgTAPAgtASIgSAQAgvgcIgdAYAAAgXIgFAFAilAWIgPAAAg1BkIgOAAAhIApIgVATQgDADgDACAhJgxIgaATAhWAEIgTAPAAYDAIAAALAgRCdIgUAfAAIB0IgKASAATARIgUAcAAkiFIghAZ");
	this.shape_14.setTransform(-40.9,33);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#3296C8").ss(1,1,1).p("AApgEIAAAQAATAVIgFAHAABgaIgEAFAgggbIgIAG");
	this.shape_15.setTransform(-24.2,15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3296C8").s().p("AhRDQQgGgFAHgGQAGgGADAIQADAIgEADIgDABQgDAAgDgDgAhHC5QgEgGAGgDQAGgEAEAGQAEAFgHAEIgEACQgDAAgCgEgAg1CfQgEgGAHgEQAGgFAEAHQAEAGgHAEIgEACQgEAAgCgEgAgXB4QgFgIAIgDQAHgDAEAIQADAHgGAEIgDABQgEAAgEgGgAhVBtQgDgHAGgCQAGgDACAFQABAFgFAEIgDACQgDAAgBgEgAhJBfQgEgHAHgEQAHgEAFAHQAEAGgHAEQgDACgCAAQgEAAgDgEgAiXBaQgEgHAIgHQAIgGAGAJQAGAJgKAEIgGACQgFAAgDgEgAgGBaQgEgGAFgCQAFgDACAEQADAFgFADIgCACQgCAAgCgDgAg6BPQgEgEAFgEQAEgEAFAFQAEAGgFADIgEABQgDAAgCgDgAh/BJQgEgIAFgDQAEgBADABQAAgFAFgEQAHgFADAHQADAGgIAFIgEABQADAFgFAEIgFABQgEAAgDgEgAAHBDQgFgGAHgEQAGgEAFAFQAFAGgGAEQgDABgDAAQgDAAgDgCgAgtA8QgGgGAJgGQAIgGAFAJQAEAIgHAEIgFABQgEAAgEgEgAAYAvQgEgGAFgDQAGgDAFAGQAEAGgGADIgEABQgEAAgCgEgAhpAvQgFgIAIgGQAIgFAFAIQAEAHgHAGQgDACgDAAQgEAAgDgEgAgiAsQgDgHAFgCQAEgDAFAGQAEAFgGAEIgEABQgDAAgCgEgAicAmQgEgGAHgEQAHgDAEAGQADAHgGADIgFABQgDAAgDgEgAiJAfQgDgHAGgDQAHgDAFAHQAFAGgJAEIgFABQgEAAgCgFgAgTAZQgFgLAIgCQAJgCAGAHQAGAIgJAFIgGACQgFAAgEgHgAhEAPQgGgHAJgFQAJgEAEAGQADAHgGAFQgDACgCAAQgEAAgEgEgAiCALQgHgIALgCQAKgCADAFQACAFgGAFQgCACgDAAQgEAAgEgFgAApAFQgGgGAGgEQAGgEAGAGQAGAGgHAFQgCACgCAAQgEAAgDgFgAhpAAQgEgGAHgFQAIgFAEAIQAEAHgIAEIgFABQgEAAgCgEgAg0AAQgEgIAJgHQAJgIAEAJQAEAJgJAFQgEADgDAAQgDAAgDgDgAAHgIQgEgHAIgEQAIgEADAGQAEAFgIAFQgDADgDAAQgDAAgCgEgAhXgJQgFgIAIgEQAIgDAFAFQAEAGgHAFQgDADgDAAQgEAAgDgEgAiGgRQgFgHAGgEQAHgDADAGQADAHgEAEIgDABQgDAAgEgEgAgXgSQgEgGAFgFQAGgFAEAHQAEAHgFAEQAAAAgBABQAAAAgBAAQgBAAAAAAQgBABAAAAQgDAAgDgEgAA+gTQgFgHAGgEQAGgDADAGQAEAHgFAEIgDABQgDAAgDgEgAhBgcQgFgHAHgFQAGgFAFAHQAFAIgGAEIgFABQgEAAgDgDgAhtgjQgGgIAJgEQAJgEAFAIQAEAHgIAEIgFACQgFAAgDgFgAgOgnQgGgHAJgFQAGgEAEADQgBgDAEgEQAGgFAGAIQAGAIgHADQgHACgFgFQADAHgFAEQgDACgDAAQgEAAgDgEgAgsgvQgEgHAHgEQAGgEAEAHQADAHgGAEIgFABQgDAAgCgEgAAmgwQgGgJAJgFQAJgEAFAIQAGAIgJAFQgDACgDAAQgFAAgDgFgAhggwQgEgHAHgFQAHgEADAHQAEAGgGAFQgBAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAQgDAAgDgEgABLgxQgEgGAGgEQAFgEAEAIQADAHgFADIgDAAQgDAAgDgEgAgeg8QgEgGAFgEQAGgEAEAGQAEAHgGADIgEABQgDAAgCgDgAAzhEQgEgHAIgEQAHgDADAGQAEAGgHAFQgDABgCAAQgEAAgCgEgAhChIQgEgIAHgDQAGgEADAHQAEAGgGAFQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgEAAgCgFgAgNhHQgCgGAFgGQAFgFAFAHQADAHgGAEQgDACgCAAQgDAAgCgDgABjhOQgDgEAGgFIACgCQgBgFAGgDQAHgFAEAIQAFAIgIAFQgDACgCAAIgDACQgCACgDAAQgCAAgDgDgAAkhPQgFgHAGgEQAHgDADAGQADAHgEAEIgDABQgDAAgEgEgAgwhPQgCgEAEgDQADgCACAEQABAEgDACIgDABQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAgABKhaQgEgGAHgFQAGgFAEAHQAEAHgGAFQgDABgCAAQgDAAgDgEgAAEhbQgEgEAFgEQAFgFAEAGQAFAGgFADIgEABQgDAAgDgDgAAUhmQgEgIAIgEQAIgFAEAHQAEAIgIAEQgDACgCAAQgEAAgDgEgABBhnQgDgGAFgGQAGgGAEAIQADAIgGADIgFACQgCAAgCgDgAgWhrQgEgHAGgDQAGgDAEAGQAEAGgGAEIgEACQgDAAgDgFgAB2hqQgCgFAFgEQAGgEADAHQAEAGgHACIgDABQgEAAgCgDgABVhtIgCgFQgDAAgDgEQgGgJAIgFQAIgGAGAJQAEAFgCAEIADACQAEAEgFAGQgDADgCAAQgEAAgDgEgAgDhzQgFgGAHgGQAFgFADAHQAEAGgGAFQgCACgCAAQgCAAgCgDgACEh/QgEgIAHgEQAIgEADAHQACAIgGAFIgEABQgEAAgCgFgAAuh8QgCgEAEgCQADgDACAEQACADgDADIgDABQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBgBAAgAANh/QgEgGAHgFQAGgFAEAIQAEAHgGADIgFABQgDAAgDgDgABgiEQgEgGAFgFQAGgEAEAFQAEAGgFAFQgDACgCAAQgDAAgCgDgAA+iMQgFgGAGgFQAHgEAFAGQAEAHgGAEIgFACQgDAAgDgEgABTiUQgGgIAIgEQAHgDAGAGQAGAGgIAGQgDACgDAAQgEAAgDgFgABuiTQgEgHAGgEIABgBQgBgGAHgEQAEgDADAAIADgDQAHgDACAHQACAGgFADIgBAAQABAGgGAFQgEADgDAAIgCADQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgDAAgCgEgAAjiVQgFgFAGgDQAFgEAFAFQAEAFgFAEQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgDAAgCgDgACTiZQgCgFAFgEQAEgEADAGQAEAGgGADIgDABQgDAAgCgDgAAwicQgEgGAGgDQAGgEAEAGQAEAGgGADIgEABQgDAAgDgDgABjipQgDgGAGgEQAGgEAEAIQADAHgGACIgEABQgDAAgDgEgABGiuQgGgIAHgEQAHgEAGAHQAGAHgHAFQgDABgDAAQgEAAgDgEgAB3i4QgEgHAFgCQAGgDAEAGQAEAGgGADIgDABQgDAAgDgEgABci8QgDgHAFgDQAEgDAEACIgBgCQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAIAGgFQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgGAFQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgBAAQAFAHgHADIgEABQgEAAgDgEg");
	this.shape_16.setTransform(-36.5,31.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3296C8").s().p("AghCkQgEgGAGgFQAHgEADAGQAEAHgGAEIgFACQgDAAgCgEgAhSCSQgHgKAKgFQAKgEAEAIQAEAJgHAGQgDACgDAAQgEAAgEgGgAgPCOQgEgHAGgDQAFgDAEAFQAEAGgFAEQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgDAAgDgEgAhBCDQgGgGAHgFQAGgGADAIQADAIgEADIgDABQgDAAgDgDgAgCBxQgFgGAGgDQAEgDAEAGQADAFgEADIgDACQgDAAgCgEgAiCBtQgDgHAHgEQAHgEADAHQACAHgGAEIgFABQgDAAgCgEgAg1BuQgDgFAEgEQAEgDADAFQADAGgDADIgDABQgDAAgCgDgAhyBiQgDgFAHgEQAIgDADAFQADAEgHAFQgEACgCAAQgEAAgBgEgAgpBfQgEgGAGgEQAFgDAFAFQAFAGgHAEQgDACgCAAQgDAAgCgEgAAHBeQgDgFAFgDQAFgEAFAGQAGAFgIADIgFACQgDAAgCgEgAgXBQQgFgIAGgDQAHgDAEAGQAFAHgGAEQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgDAAgEgFgAiQBLQgEgGAGgDQAFgDAEAGQAEAFgGAEIgEABQgDAAgCgEgAhNBAQgDgGAHgEQAHgDAEAGQAEAGgHAEIgGABQgDAAgDgEgAiKA4QgFgHAGgDQAGgDAFAHQAFAHgGADIgEABQgEAAgDgFgAAgA0QgFgHAHgDQAGgCAEAFQADAEgFAFQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgDAAgDgEgAg2AuQgCgHAEgDQAEgEAEAHQADAGgFAEIgDABQgDAAgCgEgAhvAuQgEgGAHgFQAHgEAEAGQAFAGgHAFQgEACgCAAQgEAAgCgEgAhcAlQgFgHAIgDQAIgDAEAGQADAHgHADIgEACQgEAAgDgFgAACAmQgCgEADgDQAEgCADADQACAEgDADQgBABAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBgAgpAbQgEgIAGgDQAGgCAFAGQAFAGgHAEIgFACQgEAAgCgFgAAxAZQgFgHAIgDQAHgCAFAGQAEAGgHADIgFABQgEAAgDgEgAiNAZQgEgFAFgEQAGgEACAFQACAFgEAEQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgCAAgCgDgAhMATQgDgHAFgCQAFgDAEAGQAEAFgGAEIgEABQgDAAgCgEgAgWAOQgGgKAKgEIADAAQgCgFAHgEQAJgGADAJQAFAHgHAFIgDABQADAIgHAEQgDACgDAAQgFAAgEgHgAh4ANQgGgIAIgDQAHgDADAGQADAGgFAFQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgDAAgDgFgAAbAAQgHgHAJgJQAKgIAEALQAFAMgHAEQgDACgDAAQgEAAgEgFgABLAAQgDgFAFgDQAFgDAEAFQAEAFgGACIgEACQgDAAgCgDgAgyAAQgDgFAFgDQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQgBgFAEgDQAFgEAFAHQAFAGgHAEQgDACgDgBQABADgEABIgEACQgDAAgCgDgAhogCQgFgGAHgEQAEgCACABQAAgEAEgCQAIgFAFAIQAGAIgHAFQgGADgFgEQgBACgCACIgFABQgDAAgCgDgAArgQQgGgLAIgHQAJgGAHAKQAHAKgJAIQgEAEgDAAQgFAAgEgIgAhLgTQgEgEAGgFQAGgFAEAGQADAGgGAEIgEABQgDAAgCgDgAgagXQgEgHAIgFQAIgEADAHQADAGgGAFQgDACgCAAQgEAAgDgEgAAYgbQgEgEAGgFQAGgFAEAGQADAGgGAEIgEABQgDAAgCgDgAg5gfQgDgEAFgDQAGgCADAEQADAEgGADIgDABQgDAAgCgDgABggiIgBgBIgCABQgGAEgCgFQgDgEAGgEQAEgCADADIACgDQAGgGAFAIQAFAHgGAEIgFACQgDAAgDgEgAA/gpIgBgCIgBABQgJAEgEgIQgFgIAJgFQAJgFAEAJIAAACIABAAQAHgFADAHQADAGgGAFQgDADgCAAQgDAAgCgEgAAAgrQgEgHAHgHQAIgGAGAIIADgDQAHgFAEAHQAEAGgGAGQgFAFgFgGQgBADgEACQgEACgDAAQgFAAgCgFgAgcgzQgDgIAGgFQAFgEAFAJQAEAJgHAEIgEABQgEAAgCgGgABLg5QgDgEABgEQgDgBgCgDQgFgIAIgDQAHgDAFAGIACAEQAFAAAEAFQAHAJgKAFQgEACgDAAQgGAAgDgFgABvg5QgDgHAGgEQAGgDAEAGQADAGgGAEIgFACQgDAAgCgEgAgThCQgFgJAHgFQAHgFAFAIQAEAIgHAGQgDACgCAAQgEAAgCgFgAAlhIQgDgGAGgEQAHgEAFAHQAFAHgIADIgGACQgEAAgCgFgAAGhOQgDgHAGgFQAEgDAEACQgFgGAIgGQAIgGAGAIQAFAJgIAEQgGAEgFgEQADAGgGAGQgEADgCAAQgDAAgCgFgAB7hRQgFgIAHgDQAHgEADAHQAEAGgFAFQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgDAAgEgFgAA1hXQgDgHAHgEQAGgDACAHQACAHgFADIgDACQgDAAgDgFgABVhaQgEgHAGgCQAGgCAEAEQAFAEgHAEQgCACgDAAQgDAAgCgDgABKhfQgCgEADgDQADgDADAFQACAEgDADIgDABQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAgBAAgBgABlhfQgEgEAGgEIABgBQgCgGAIgEIAEgBQgCgEAGgEQAHgFAFAGQAFAGgHAFIgDACQAEAGgJAEQgEABgEAAQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAABIgEABQgDAAgCgCgACFhnQgEgGAGgEQAHgEADAGQAEAGgGAEIgEACQgDAAgDgEgAAmhvQgEgGAGgEQAFgDAEAGQAEAFgGAEIgEACQgDAAgCgEgABVhvQgDgFAHgGQAHgFADAHQAEAIgHADIgFABQgDAAgDgDgABBh9QgDgFAFgDQAFgEADAFQAEAFgFAEIgEABQgDAAgCgDgABoiEQgEgGAHgEQAHgEAFAGQAFAGgIAEIgGACQgDAAgDgEgABOiJQgFgGAIgGQAIgFAFAIQAFAJgIADIgFACQgEAAgEgFgABZibQgFgFAHgFQAGgEAEAGQAFAGgGAEIgFACQgEAAgCgEg");
	this.shape_17.setTransform(-41,30.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3296C8").s().p("AgjCbQgDgEAEgCQAEgCADAEQADAEgFACIgDABQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBgAgZCPQgEgHAIgFQAJgEADAIQAEAHgIAEIgFACQgEAAgDgFgAhXCGQgCgEAFgFQAFgEADAGQACAGgFADIgEABQgCAAgCgDgAhOB3QgFgKAKgHQALgHAEALQADAKgJAHQgEACgDAAQgFAAgCgGgAAABoQgCgGAFgDQAGgDADAFQAEAGgHADIgEABQgDAAgCgDgAgsBWQgEgIAGgFQAHgFAEAHQAEAHgGAFQgDADgDAAQgDAAgCgEgAANBTQgEgHAIgEQAIgDAEAHQADAIgIAEIgEABQgFAAgCgGgAiGBMQgEgGAIgDQAHgEAFAGQAEAFgIAEIgGACQgEAAgCgEgAhnBCQgDgHAHgDQAGgDAFAHQAGAGgJAEIgGABQgEAAgCgFgAAaA6QgDgGAEgFQAFgEAFAHQAEAHgGAEIgEABQgDAAgCgEgAgUA5QgFgGAGgEIAAAAQgFgHALgIQALgIACAKQACAKgGAFIgEADQACAFgFADIgEABQgDAAgCgEgAhlArQgGgIAKgCQAKgDADAGQADAFgGAFQgDACgCAAQgFAAgEgFgAArAnQgDgFAFgCQAEgDADAEQADAEgEADIgEABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAAzAbQgDgEAEgEQAFgEAFAFQAGAFgHADIgFACQgDAAgCgDgAh7AYQgFgGAGgEQAFgDAEAGQAEAGgFADIgEACQgDAAgCgEgAg2AQQgDgHAHgFQAGgEAEAGQAEAHgHAFQgEACgCAAQgEAAgBgEgAhxAOQgFgIAGgFQAHgDAFAGQAEAIgGAFQgCACgDAAQgDAAgDgFgAAPAGQgEgGAIgFQAIgFAEAKQADAIgHADIgEABQgFAAgDgGgAgiABQgDgEAFgDQAFgDACAGQACAEgEACIgCABQgDAAgCgDgAiOAAQgDgGAFgDQAFgEADAGQACAGgEADIgDACQgDAAgCgEgAh+gKQgCgGAFgEQAFgEADAGQADAGgGAEIgEABQgCAAgCgDgAAmgMQgEgGAGgDQAGgCADAFQADAFgFADIgEACQgDAAgCgEgABKgRQgEgLAHgIQAHgIAIALQAIALgLAIQgFADgDAAQgFAAgCgGgAhEgVQgDgHAGgGQAGgFAEAIQAEAJgHAEIgFACQgDAAgCgFgAACgaQgCAAgCgDQgDgDAAgDQgCgHAGgFQAFgFAFAIQADAFgCADQABAEgCADQABABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgDAAIgDgBgAAoggQgGgKAJgGQAJgHAIAJQAIAJgLAIQgFADgEAAQgFAAgDgGgAgugfQgEgFAFgDQAFgEAEAFQAFAGgGADIgEACQgDAAgCgEgABbglQgEgEAFgEQAGgDAEAFQAEAGgFACIgEABQgDAAgDgDgAhUgpQgCgDAEgCQAEgCACAEQACAEgEABIgBABQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBgABng4QgGgFAHgFQAHgFAFAIQAGAHgHADIgEABQgFAAgDgEgAhBg6QgCgEAEgDQAFgDADAFQADAGgFACIgDABQgDAAgCgEgABDg+IgCgCQgHADgEgIQgGgIAKgDQAHgCAEADQAGgFAFACIADgDQAGgEAFAFQAFAFgHAEQgDACgDAAQADAHgHAGQgDAEgEAAQgEAAgEgGgAAhg+QgDgFAGgCQAGgDACAEQACAEgGADIgEACQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBgAgJhEQgEgGAHgGQgBgEAEgDQAFgEAGAHQAGAGgHAFQgBAEgEACQgDACgDAAQgDAAgCgDgAgphOQgCgEAEgCQAEgCABADQACAEgDACIgDABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAgAAMhUQgDgIAHgEQAIgFADAHQADAHgHAGQgDACgCAAQgEAAgCgFgABAhdQgEgFAGgFQAGgFAEAHQAFAHgGADIgFACQgDAAgDgEgABmheQgDgGAFgDQAFgDAFAGQAFAFgGAEIgFABQgDAAgDgEgACAhgQgCgIAHgEQAHgDADAHQAEAHgIAEIgFACQgEAAgCgFgABQhqQgEgHAIgFQAIgEADAHQADAGgHAFQgDACgCAAQgEAAgCgEgAAnhrQgEgGAGgFQAHgGAEAIQAEAIgGAEIgFABQgDAAgDgEgAAJhxQgGgKAKgDQAJgEAFAHQAFAGgJAHQgDADgDAAQgFAAgDgGgAA+iBQgFgEACgEQgKAFgEgJQgFgJAIgFQAJgFAHAIQAEAGgDAEQAIgEAEAIQAFAIgHAFIgEABQgFAAgEgFgAAZiEQgCgEAEgBQAEgCACACQADADgEADIgEABQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBgABSiOQgEgFAFgDQAGgDAEAGQAEAGgFACIgDABQgDAAgEgEg");
	this.shape_18.setTransform(-41.4,31.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3296C8").s().p("AAQCdQgDgDAEgEQAEgDACAEQADAEgDADIgDABQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBgBgAguCLQgHgJAKgFQAJgEAEAIQAEAIgHAGQgDACgCAAQgEAAgEgGgAAUCNQgFgFAHgEQAHgFAGAFQAGAFgIAEQgEADgDAAQgDAAgDgDgAh1BtQgEgHAHgEQAHgDACAGQACAGgFAEIgEACQgDAAgCgEgAAtBnQgFgGAJgFQAIgEAFAIQAFAIgJADIgEABQgGAAgDgFgAgOBiQgFgFAGgDQAFgDAEAGQAEAGgEACIgDABQgEAAgDgEgAhTBUQgFgJAIgFQAIgEAFAIQAGAJgJAFQgDABgDAAQgFAAgCgFgAgFBTQgHgIAJgFQAIgFAEAIQAFAJgHAEIgEACQgEAAgEgFgAg2A7QgDgHAGgDQAHgDAFAHQAFAGgJAEIgFABQgEAAgCgFgAh7A5QgHgJAJgHQAJgHAGALQAGAKgIAGQgDACgCAAQgFAAgFgGgABJA7QgCgFAEgEQAEgDADAFQACAFgEADIgEACQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBgBAAAAgAAYAzQgDgGAIgIQAJgIAEAKQAFAKgKAEIgGABQgEAAgDgDgAgwAmQgGgIAKgCQAKgDADAGQADAFgGAFQgDACgCAAQgEAAgFgFgABVAoQgDgEAGgDQAGgDADAEQADAEgGADIgEACQgDAAgCgDgAiOAeQgEgGAHgFQAGgFAEAHQAEAIgGAEIgFABQgDAAgDgEgAhXAbQgFgIAHgHQAGgFAFAFQADgBACAEQACAFgCADQgBADgEADQgEACgDAAQgEAAgCgEgABoAOQgEgGAFgDQAFgEAEAGQAEAFgFAEIgDABQgDAAgDgDgAAvALQgGgIAKgGQAKgHAEAJQADAIgHAGQgDADgDAAQgEAAgEgFgAh2AMQgDgFAFgCQAEgCAEAEQADAEgFADIgDABQgDAAgCgDgAgzAAQgFgGAIgFQAFgEAEACQABgCACgDQAHgFAEAHQAEAHgGAEQgEACgDgBQAAADgEACQgDACgDAAQgDAAgEgDgABxgBQgEgGAFgEQAGgEAEAGQAEAFgGAEQgCACgCAAQgDAAgCgDgAAOgJQgHgIAIgFQAIgFAHAIQAGAJgIAFQgDABgCAAQgFAAgEgFgAhOgUQgDgIAGgFQAHgFAEAHQAFAGgIAGQgEADgCAAQgEAAgBgEgAAcgXQgFgJAIgGQAIgHAHAKQAHAJgKAHQgEACgDAAQgFAAgDgGgAgZgZQgFgJAJgDQAIgCAFAFQAGAGgJAGQgDADgDAAQgEAAgEgGgABWghQgHgJAJgHQAIgHAGANQAGAMgIADIgEAAQgFAAgFgFgAg9ghQgGgHAHgGQAGgGAGAJQAFAJgGADIgFABQgEAAgDgDgAA9gwQgDgHAGgEQAFgEACAHQADAHgGAEIgDABQgDAAgBgEgAAOgwQgFgGAGgDQAGgEADAGQADAFgEAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgCAAgDgDgABvgvQgDgEAFgDQAEgEADAEQACAFgEADIgDABQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAgAgbg2QgEgEAFgEQAGgDADAFQAEAFgFADIgEABQgDAAgCgDgABOg9QgCgGAFgGQAFgFAFAHQAEAHgHAEQgDACgCAAQgDAAgCgDgAB9g9QgEgFAGgFQAGgGADAHQAEAHgGADIgEABQgDAAgCgCgAAghDQgCgFAFgEQAFgEADAGQADAGgGADIgEACQgDAAgBgEgAgOhIQgEgGAIgEQAHgFADAHQABAHgFAEIgFABQgDAAgCgEgABdhNQgDgGAGgFQAFgEADAIQADAIgFADIgDABQgDAAgDgFgAAxhSQgEgGAGgGQAHgHAFAJQAGAJgIADIgGACQgEAAgCgEgABEhdQgEgIAHgEQAHgEAFAGQAFAHgIAGQgEACgCAAQgEAAgCgFgAAXhjQgDgHAHgDQAGgDAEAFQAEAGgIAEIgFACQgDAAgCgEgACAiPQgEgIAHgFQAIgFAEAIQAEAHgIAFIgFACQgEAAgCgEg");
	this.shape_19.setTransform(-46.1,31.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#3296C8").ss(1,1,1).p("AB9ghIgKAPABfg+IgPAUABXAZIgEAHAA3hIIgLAKAASgmIgKAIAA6gPIgEAFAAvhvIgvAmAhogeIgUAPAgbgzIgeAZAg6hBIgRANAhGAoIgdAaAAkBoIgIAMABEA3IgPAWAAhARIgPASAAAgWIgrAmAgBA9IgcAkAhTgGIgeAYAAIh0IgQAN");
	this.shape_20.setTransform(-47.9,36.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#3296C8").ss(1,1,1).p("ABqAAIgEAGAASgvIgNAMAAlhAIgKAJABNgoIgEAFAhVg3IgUAPAgIhMIgeAYAgnhaIgRANAgVgLIgDADAgzAPIgdAaAA3BPIgIAMAAzgHIgOARABWAeIgOAWAARAkIgJAMAALgJIgcAiAhAgfIgeAY");
	this.shape_21.setTransform(-49.8,38.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#3296C8").ss(1,1,1).p("AhLhJIgUAPAgLgdIgEADAgpgCIgeAaABBA9IgIANAA9gZIgOASABgAMIgOAWAAaATIgJALAAVgbIgcAiAg3gxIgeAZ");
	this.shape_22.setTransform(-50.8,40.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#3296C8").ss(1,1,1).p("AhNhCIgDACAgagIIgdAZABNgfIgDAEABRA2IgJANAg3gqIgOAL");
	this.shape_23.setTransform(-52.3,41.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},6).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_5}]},3).to({state:[{t:this.shape_6}]},3).to({state:[{t:this.shape_7}]},3).to({state:[{t:this.shape_8}]},3).to({state:[{t:this.shape_10},{t:this.shape_9}]},3).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_15},{t:this.shape_14}]},4).to({state:[{t:this.shape_16}]},3).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[]},1).to({state:[]},14).wait(71));

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(-7.7,-6.5,1,1,0,0,0,22.2,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:22.3,regY:20.5,rotation:-2.6,x:-7.6,y:-6.4},0).wait(1).to({rotation:-5.2},0).wait(1).to({regX:21.9,regY:20.1,rotation:-7.8,x:-7.7},0).wait(1).to({regX:21.6,regY:20.2,scaleX:1,scaleY:1,rotation:-44.4,y:-6.5},0).wait(1).to({regX:22.3,regY:20.5,scaleX:1,scaleY:1,rotation:-47,x:-6.9,y:-6.7},0).wait(1).to({rotation:-49.6,x:-7},0).wait(1).to({rotation:-52.2,x:-6.9,y:-6.8},0).wait(1).to({rotation:-54.8,x:-7},0).wait(1).to({rotation:-57.4,y:-6.9},0).wait(1).to({rotation:-60},0).wait(1).to({regX:22.2,regY:20.4,scaleX:1,scaleY:1,x:-7.8,y:-6.3},0).wait(30).to({regX:20.8,regY:19.7,scaleX:1,scaleY:1,rotation:-57.4,x:-7.6,y:-6.4},0).wait(1).to({regX:22.3,regY:20.5,scaleX:1,scaleY:1,rotation:-55,x:-6.1,y:-7.2},0).wait(1).to({rotation:-52.5,y:-7.1},0).wait(1).to({rotation:-50,y:-7},0).wait(1).to({rotation:-47.5},0).wait(1).to({rotation:-45,x:-6,y:-6.9},0).wait(1).to({rotation:-42.5,y:-6.8},0).wait(1).to({rotation:-40},0).wait(1).to({rotation:-37.5,x:-5.9,y:-6.7},0).wait(1).to({rotation:-35,x:-6,y:-6.6},0).wait(1).to({rotation:-32.5,y:-6.5},0).wait(1).to({rotation:-30},0).wait(1).to({rotation:-27.5,y:-6.4},0).wait(1).to({rotation:-25,y:-6.3},0).wait(1).to({rotation:-22.5,y:-6.2},0).wait(1).to({rotation:-20},0).wait(1).to({rotation:-17.5,y:-6.1},0).wait(1).to({rotation:-15,y:-6},0).wait(1).to({rotation:-12.5},0).wait(1).to({rotation:-10,x:-6.1,y:-5.8},0).wait(1).to({rotation:-7.5},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-2.5,y:-5.6},0).wait(1).to({rotation:0,x:-6.2},0).wait(1).to({regX:25.3,regY:27.1,scaleX:1,scaleY:1,x:5.5,y:4.7},0).wait(1).to({regX:22.3,regY:20.5,rotation:-2.5,x:2.3,y:-1.7},0).wait(1).to({rotation:-5,x:2,y:-1.6},0).wait(1).to({rotation:-7.5,x:1.7,y:-1.4},0).wait(1).to({rotation:-10,x:1.5,y:-1.3},0).wait(1).to({rotation:-12.5,x:1.2,y:-1.1},0).wait(1).to({rotation:-15,x:0.9,y:-0.9},0).wait(1).to({rotation:-17.5,x:0.7,y:-0.7},0).wait(1).to({rotation:-20,x:0.5,y:-0.4},0).wait(1).to({rotation:-22.5,x:0.2,y:-0.2},0).wait(1).to({rotation:-25,x:0.1,y:0},0).wait(1).to({rotation:-27.5,x:-0.2,y:0.3},0).wait(1).to({rotation:-30,x:-0.3,y:0.5},0).wait(1).to({rotation:-32.5,x:-0.5,y:0.7},0).wait(1).to({rotation:-35,x:-0.7,y:1},0).wait(1).to({rotation:-37.5,x:-0.9,y:1.3},0).wait(1).to({rotation:-40,x:-1,y:1.5},0).wait(1).to({rotation:-42.5,x:-1.2,y:1.8},0).wait(1).to({rotation:-45,x:-1.3,y:2.1},0).wait(1).to({rotation:-47.5,y:2.4},0).wait(1).to({rotation:-50,x:-1.4,y:2.7},0).wait(1).to({rotation:-52.5,x:-1.5,y:3},0).wait(1).to({rotation:-55,x:-1.6,y:3.3},0).wait(1).to({rotation:-57.5,y:3.6},0).wait(1).to({rotation:-60,y:3.9},0).wait(1).to({rotation:-56.2,x:-0.8,y:1.8},0).wait(1).to({rotation:-52.5,x:0,y:-0.5},0).wait(1).to({rotation:-48.7,x:0.9,y:-2.7},0).wait(1).to({rotation:-45,x:1.7,y:-4.9},0).wait(1).to({rotation:-47.9,x:1.6,y:-2.6},0).wait(1).to({rotation:-50.9,y:-0.2},0).wait(1).to({rotation:-53.9,x:1.5,y:2.2},0).wait(1).to({rotation:-56.9,x:1.4,y:4.6},0).wait(1).to({rotation:-59.9,x:1.3,y:6.9},0).wait(1).to({rotation:-52.4,x:2,y:4.5},0).wait(1).to({rotation:-44.9,x:2.7,y:2.1},0).wait(1).to({rotation:-37.4,x:3.7,y:-0.2},0).wait(1).to({rotation:-29.9,x:4.6,y:-2.5},0).wait(1).to({rotation:-33.7,x:3.2,y:0.1},0).wait(1).to({rotation:-37.4,x:1.7,y:2.8},0).wait(1).to({rotation:-41.1,x:0.2,y:5.4},0).wait(1).to({rotation:-44.8,x:-1.2,y:8.1},0).wait(1).to({rotation:-48.6,x:-1.4,y:10},0).wait(1).to({rotation:-52.3,x:-1.5,y:12},0).wait(1).to({rotation:-56.1,x:-1.6,y:13.9},0).wait(1).to({rotation:-59.9,y:16},0).wait(1).to({rotation:-57.5,y:15.6},0).wait(1).to({rotation:-55.1,y:15.3},0).wait(1).to({rotation:-52.7,x:-1.5,y:15},0).wait(1).to({rotation:-50.3,x:-1.4,y:14.7},0).wait(1).to({rotation:-47.9,x:-1.3,y:14.5},0).wait(1).to({rotation:-45.5,y:14.1},0).wait(1).to({rotation:-43.1,x:-1.1,y:13.9},0).wait(1).to({rotation:-40.7,x:-1,y:13.6},0).wait(1).to({rotation:-38.3,x:-0.9,y:13.3},0).wait(1).to({rotation:-35.9,x:-0.7,y:13.1},0).wait(1).to({rotation:-33.5,x:-0.6,y:12.8},0).wait(1).to({rotation:-31.1,x:-0.4,y:12.6},0).wait(1).to({rotation:-28.7,x:-0.2,y:12.3},0).wait(1).to({rotation:-26.3,x:-0.1,y:12.1},0).wait(1).to({rotation:-23.9,x:0.1,y:11.8},0).wait(1).to({rotation:-21.6,x:0.3,y:11.6},0).wait(1).to({rotation:-19.2,x:0.5,y:11.5},0).wait(1).to({rotation:-16.8,x:0.7,y:11.3},0).wait(1).to({rotation:-14.4,x:1,y:11.1},0).wait(1).to({rotation:-12,x:1.2,y:10.9},0).wait(1).to({rotation:-9.6,x:1.5,y:10.7},0).wait(1).to({rotation:-7.2,x:1.7,y:10.5},0).wait(1).to({rotation:-4.8,x:2,y:10.4},0).wait(1).to({rotation:-2.4,x:2.2,y:10.2},0).wait(1).to({rotation:0,x:2.5,y:10.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-26.9,44.5,41);


(lib.plant1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
	}
	this.frame_22 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}
	this.frame_26 = function() {
		this.stop();
	}
	this.frame_27 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1).call(this.frame_22).wait(1).call(this.frame_23).wait(1).call(this.frame_24).wait(1).call(this.frame_25).wait(1).call(this.frame_26).wait(1).call(this.frame_27).wait(1).call(this.frame_28).wait(1).call(this.frame_29).wait(2));

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(0.8,-1.6,1,1,0,0,0,35.8,45.4);

	this.instance_1 = new lib.ale("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.instance_2 = new lib.plantpngcopy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-35,-47,0.245,0.245);

	this.instance_3 = new lib.ale("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1F982C").ss(1,1,1).p("Ag1AbIBrg1");
	this.shape.setTransform(7,-54.6);

	this.instance_4 = new lib.ale("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#017029").s().p("AgEAAIAAgBIAJACIgEABIgBAAQgDAAgBgCg");
	this.shape_1.setTransform(63.1,-85);

	this.instance_5 = new lib.ale("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.instance_6 = new lib.ale("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.instance_7 = new lib.ale("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1F982C").ss(1,1,1).p("Ag2EFIBqg1AgFjOIA8g2");
	this.shape_2.setTransform(7.1,-78);

	this.instance_8 = new lib.ale("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.instance_9 = new lib.ale("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.instance_10 = new lib.ale("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-13.5,-50.1,1,1,0,0,0,14,16.6);

	this.instance_11 = new lib.ale("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.instance_12 = new lib.ale("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.instance_13 = new lib.ale("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.instance_14 = new lib.ale("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.instance_15 = new lib.ale("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.instance_16 = new lib.ale("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.instance_17 = new lib.ale("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.instance_18 = new lib.ale("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.instance_19 = new lib.ale("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.instance_20 = new lib.ale("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.instance_21 = new lib.ale("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.instance_22 = new lib.ale("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.instance_23 = new lib.ale("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.instance_24 = new lib.ale("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.instance_25 = new lib.ale("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.instance_26 = new lib.ale("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.instance_27 = new lib.ale("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.instance_28 = new lib.ale("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.instance_29 = new lib.ale("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.instance_30 = new lib.ale("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(-12.3,-50.1,1,1,0,0,0,14,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1,scaleY:1}}]},1).to({state:[{t:this.shape,p:{x:7,y:-54.6}},{t:this.instance_2},{t:this.instance_3,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1,scaleY:1}},{t:this.instance_1,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-66.4,scaleY:1}}]},1).to({state:[{t:this.shape,p:{x:7,y:-54.6}},{t:this.instance_2},{t:this.instance_4,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1,scaleY:1}},{t:this.instance_3,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-66.4,scaleY:1}},{t:this.instance_1,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-79.4,scaleY:1}}]},1).to({state:[{t:this.shape,p:{x:7,y:-54.6}},{t:this.instance_2},{t:this.instance_5,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1,scaleY:1}},{t:this.instance_4,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-66.4,scaleY:1}},{t:this.instance_3,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-79.4,scaleY:1}},{t:this.shape_1,p:{scaleX:1,x:63.1,y:-85}},{t:this.instance_1,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:23.1,y:-93.3,scaleY:1}}]},1).to({state:[{t:this.shape,p:{x:7,y:-54.6}},{t:this.instance_2},{t:this.instance_6,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1,scaleY:1}},{t:this.instance_5,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-66.4,scaleY:1}},{t:this.instance_4,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-79.4,scaleY:1}},{t:this.shape_1,p:{scaleX:1,x:63.1,y:-85}},{t:this.instance_3,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:24.1,y:-93.3,scaleY:1}},{t:this.instance_1,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-10.3,y:-104.8,scaleY:1}}]},1).to({state:[{t:this.shape_2},{t:this.instance_2},{t:this.instance_7,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1,scaleY:1}},{t:this.instance_6,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-66.4,scaleY:1}},{t:this.instance_5,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-79.4,scaleY:1}},{t:this.shape_1,p:{scaleX:0.78,x:14.3,y:-87.5}},{t:this.instance_4,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:23.5,y:-93.3,scaleY:1}},{t:this.instance_3,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-9.9,y:-103.3,scaleY:1}},{t:this.instance_1,p:{regX:13.9,regY:16.6,scaleX:1.125,skewX:0,skewY:180,x:24.9,y:-115.4,scaleY:1}}]},1).to({state:[{t:this.shape,p:{x:7,y:-54.6}},{t:this.instance_2},{t:this.instance_8,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1,scaleY:1}},{t:this.instance_7,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-66.4,scaleY:1}},{t:this.instance_6,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-79.4,scaleY:1}},{t:this.shape_1,p:{scaleX:0.78,x:14.3,y:-87.5}},{t:this.instance_5,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:22.9,y:-93.3,scaleY:1}},{t:this.instance_4,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-9.9,y:-106,scaleY:1}},{t:this.instance_3,p:{regX:13.9,regY:16.6,scaleX:1.125,skewX:0,skewY:180,x:25.4,y:-117.3,scaleY:1}},{t:this.instance_1,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-4.5,y:-125.9,scaleY:1}}]},1).to({state:[{t:this.shape,p:{x:7,y:-54.6}},{t:this.instance_2},{t:this.instance_9,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1,scaleY:1}},{t:this.instance_8,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-66.4,scaleY:1}},{t:this.instance_7,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-79.4,scaleY:1}},{t:this.shape_1,p:{scaleX:0.78,x:14.3,y:-87.5}},{t:this.instance_6,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:23.1,y:-93.3,scaleY:1}},{t:this.instance_5,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-9.8,y:-107,scaleY:1}},{t:this.instance_4,p:{regX:14,regY:16.6,scaleX:1.125,skewX:0,skewY:180,x:24.6,y:-118.9,scaleY:1}},{t:this.instance_3,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-4.5,y:-128.2,scaleY:1}},{t:this.instance_1,p:{regX:14.1,regY:16.6,scaleX:0.757,skewX:0,skewY:180,x:19.2,y:-143.5,scaleY:1}}]},1).to({state:[{t:this.shape,p:{x:6.6,y:-54.6}},{t:this.instance_2},{t:this.instance_10,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-13.5,y:-50.1,scaleY:1}},{t:this.instance_9,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:17.9,y:-66.4,scaleY:1}},{t:this.instance_8,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-7.7,y:-79.4,scaleY:1}},{t:this.shape_1,p:{scaleX:0.78,x:13.9,y:-87.5}},{t:this.instance_7,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:23.2,y:-90.1,scaleY:1}},{t:this.instance_6,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-10.6,y:-101.4,scaleY:1}},{t:this.instance_5,p:{regX:13.9,regY:16.6,scaleX:1.125,skewX:0,skewY:180,x:23.2,y:-114.9,scaleY:1}},{t:this.instance_4,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-4.9,y:-124.8,scaleY:1}},{t:this.instance_3,p:{regX:14.1,regY:16.6,scaleX:0.757,skewX:0,skewY:180,x:22.1,y:-137.8,scaleY:1}},{t:this.instance_1,p:{regX:13.9,regY:22.6,scaleX:0.963,skewX:0,skewY:0,x:-4.9,y:-140.9,scaleY:0.843}}]},1).to({state:[{t:this.shape,p:{x:7,y:-53}},{t:this.instance_2},{t:this.instance_11,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1,scaleY:1}},{t:this.instance_10,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-64.8,scaleY:1}},{t:this.instance_9,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-77.8,scaleY:1}},{t:this.shape_1,p:{scaleX:0.78,x:14.3,y:-85.9}},{t:this.instance_8,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:23.2,y:-90.9,scaleY:1}},{t:this.instance_7,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-10.2,y:-103.2,scaleY:1}},{t:this.instance_6,p:{regX:14,regY:16.6,scaleX:1.125,skewX:0,skewY:180,x:24.6,y:-114.1,scaleY:1}},{t:this.instance_5,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-4.5,y:-125,scaleY:1}},{t:this.instance_4,p:{regX:14.1,regY:16.6,scaleX:0.757,skewX:0,skewY:180,x:21.7,y:-136.6,scaleY:1}},{t:this.instance_3,p:{regX:14,regY:22.6,scaleX:0.777,skewX:0,skewY:180,x:21.8,y:-153.9,scaleY:0.843}},{t:this.instance_1,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.4,y:-149.3,scaleY:1}}]},1).to({state:[{t:this.shape,p:{x:7,y:-53}},{t:this.instance_2},{t:this.instance_11,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1,scaleY:1}},{t:this.instance_10,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-64.8,scaleY:1}},{t:this.instance_9,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-77.8,scaleY:1}},{t:this.shape_1,p:{scaleX:0.78,x:14.3,y:-85.9}},{t:this.instance_8,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:23.2,y:-90.9,scaleY:1}},{t:this.instance_7,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-10.2,y:-103.2,scaleY:1}},{t:this.instance_6,p:{regX:14,regY:16.6,scaleX:1.125,skewX:0,skewY:180,x:24.6,y:-114.1,scaleY:1}},{t:this.instance_5,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-4.5,y:-125,scaleY:1}},{t:this.instance_4,p:{regX:14.1,regY:16.6,scaleX:0.757,skewX:0,skewY:180,x:21.7,y:-136.6,scaleY:1}},{t:this.instance_3,p:{regX:14,regY:22.6,scaleX:0.777,skewX:0,skewY:180,x:21.8,y:-153.9,scaleY:0.843}},{t:this.instance_1,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.4,y:-149.3,scaleY:1}}]},1).to({state:[{t:this.shape,p:{x:7,y:-53}},{t:this.instance_2},{t:this.instance_12,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1,scaleY:1}},{t:this.instance_11,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-64.8,scaleY:1}},{t:this.instance_10,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-77.8,scaleY:1}},{t:this.shape_1,p:{scaleX:0.78,x:14.3,y:-85.9}},{t:this.instance_9,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:23.2,y:-90.9,scaleY:1}},{t:this.instance_8,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-10.2,y:-103.2,scaleY:1}},{t:this.instance_7,p:{regX:14,regY:16.6,scaleX:1.125,skewX:0,skewY:180,x:24.6,y:-114.1,scaleY:1}},{t:this.instance_6,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-4.5,y:-125,scaleY:1}},{t:this.instance_5,p:{regX:14.1,regY:16.6,scaleX:0.757,skewX:0,skewY:180,x:21.7,y:-136.6,scaleY:1}},{t:this.instance_4,p:{regX:14,regY:22.6,scaleX:0.777,skewX:0,skewY:180,x:21.8,y:-153.9,scaleY:0.843}},{t:this.instance_3,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.4,y:-149.3,scaleY:1}},{t:this.instance_1,p:{regX:14,regY:16.6,scaleX:0.547,skewX:0,skewY:180,x:15,y:-180.6,scaleY:0.681}}]},1).to({state:[{t:this.shape,p:{x:7,y:-53}},{t:this.instance_2},{t:this.instance_13,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1,scaleY:1}},{t:this.instance_12,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-64.8,scaleY:1}},{t:this.instance_11,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-77.8,scaleY:1}},{t:this.shape_1,p:{scaleX:0.78,x:14.3,y:-85.9}},{t:this.instance_10,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:23.2,y:-90.9,scaleY:1}},{t:this.instance_9,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-10.2,y:-103.2,scaleY:1}},{t:this.instance_8,p:{regX:14,regY:16.6,scaleX:1.125,skewX:0,skewY:180,x:24.6,y:-114.1,scaleY:1}},{t:this.instance_7,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-4.5,y:-125,scaleY:1}},{t:this.instance_6,p:{regX:14.1,regY:16.6,scaleX:0.757,skewX:0,skewY:180,x:21.7,y:-136.6,scaleY:1}},{t:this.instance_5,p:{regX:14,regY:22.6,scaleX:0.777,skewX:0,skewY:180,x:21.8,y:-153.9,scaleY:0.843}},{t:this.instance_4,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.4,y:-149.3,scaleY:1}},{t:this.instance_3,p:{regX:14,regY:16.6,scaleX:0.547,skewX:0,skewY:180,x:15,y:-180.6,scaleY:0.681}},{t:this.instance_1,p:{regX:14,regY:16.6,scaleX:0.669,skewX:0,skewY:0,x:0.9,y:-192.1,scaleY:0.669}}]},1).to({state:[{t:this.shape,p:{x:7,y:-53}},{t:this.instance_2},{t:this.instance_14,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1,scaleY:1}},{t:this.instance_13,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-64.8,scaleY:1}},{t:this.instance_12,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-77.8,scaleY:1}},{t:this.shape_1,p:{scaleX:0.78,x:14.3,y:-85.9}},{t:this.instance_11,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:23.2,y:-90.9,scaleY:1}},{t:this.instance_10,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-10.2,y:-103.2,scaleY:1}},{t:this.instance_9,p:{regX:14,regY:16.6,scaleX:1.125,skewX:0,skewY:180,x:24.6,y:-114.1,scaleY:1}},{t:this.instance_8,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-4.5,y:-125,scaleY:1}},{t:this.instance_7,p:{regX:14.1,regY:16.6,scaleX:0.757,skewX:0,skewY:180,x:21.7,y:-136.6,scaleY:1}},{t:this.instance_6,p:{regX:14,regY:22.6,scaleX:0.777,skewX:0,skewY:180,x:21.8,y:-153.9,scaleY:0.843}},{t:this.instance_5,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.4,y:-149.3,scaleY:1}},{t:this.instance_4,p:{regX:14,regY:16.6,scaleX:0.547,skewX:0,skewY:180,x:15,y:-180.6,scaleY:0.681}},{t:this.instance_3,p:{regX:14,regY:16.6,scaleX:0.669,skewX:0,skewY:0,x:0.9,y:-192.1,scaleY:0.669}},{t:this.instance_1,p:{regX:14,regY:16.6,scaleX:0.568,skewX:0,skewY:180,x:16.9,y:-204.8,scaleY:0.765}}]},1).to({state:[{t:this.shape,p:{x:7,y:-53}},{t:this.instance_2},{t:this.instance_15,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1,scaleY:1}},{t:this.instance_14,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-64.8,scaleY:1}},{t:this.instance_13,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-77.8,scaleY:1}},{t:this.shape_1,p:{scaleX:0.78,x:14.3,y:-85.9}},{t:this.instance_12,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:23.2,y:-90.9,scaleY:1}},{t:this.instance_11,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-10.2,y:-103.2,scaleY:1}},{t:this.instance_10,p:{regX:14,regY:16.6,scaleX:1.125,skewX:0,skewY:180,x:24.6,y:-114.1,scaleY:1}},{t:this.instance_9,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-4.5,y:-125,scaleY:1}},{t:this.instance_8,p:{regX:14.1,regY:16.6,scaleX:0.757,skewX:0,skewY:180,x:21.7,y:-136.6,scaleY:1}},{t:this.instance_7,p:{regX:14,regY:22.6,scaleX:0.777,skewX:0,skewY:180,x:21.8,y:-153.9,scaleY:0.843}},{t:this.instance_6,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.4,y:-149.3,scaleY:1}},{t:this.instance_5,p:{regX:14,regY:16.6,scaleX:0.547,skewX:0,skewY:180,x:15,y:-180.6,scaleY:0.681}},{t:this.instance_4,p:{regX:14,regY:16.6,scaleX:0.669,skewX:0,skewY:0,x:0.9,y:-192.1,scaleY:0.669}},{t:this.instance_3,p:{regX:14,regY:16.6,scaleX:0.568,skewX:0,skewY:180,x:16.9,y:-204.8,scaleY:0.765}},{t:this.instance_1,p:{regX:14,regY:16.4,scaleX:0.68,skewX:0,skewY:0,x:-3,y:-214.5,scaleY:0.68}}]},1).to({state:[{t:this.shape,p:{x:7,y:-53}},{t:this.instance_2},{t:this.instance_16,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1,scaleY:1}},{t:this.instance_15,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-64.8,scaleY:1}},{t:this.instance_14,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-77.8,scaleY:1}},{t:this.shape_1,p:{scaleX:0.78,x:14.3,y:-85.9}},{t:this.instance_13,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:23.2,y:-90.9,scaleY:1}},{t:this.instance_12,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-10.2,y:-103.2,scaleY:1}},{t:this.instance_11,p:{regX:14,regY:16.6,scaleX:1.125,skewX:0,skewY:180,x:24.6,y:-114.1,scaleY:1}},{t:this.instance_10,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-4.5,y:-125,scaleY:1}},{t:this.instance_9,p:{regX:14.1,regY:16.6,scaleX:0.757,skewX:0,skewY:180,x:21.7,y:-136.6,scaleY:1}},{t:this.instance_8,p:{regX:14,regY:22.6,scaleX:0.777,skewX:0,skewY:180,x:21.8,y:-153.9,scaleY:0.843}},{t:this.instance_7,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.4,y:-149.3,scaleY:1}},{t:this.instance_6,p:{regX:14,regY:16.6,scaleX:0.547,skewX:0,skewY:180,x:15,y:-180.6,scaleY:0.681}},{t:this.instance_5,p:{regX:14,regY:16.6,scaleX:0.669,skewX:0,skewY:0,x:0.9,y:-192.1,scaleY:0.669}},{t:this.instance_4,p:{regX:14,regY:16.6,scaleX:0.568,skewX:0,skewY:180,x:16.9,y:-204.8,scaleY:0.765}},{t:this.instance_3,p:{regX:14,regY:16.4,scaleX:0.68,skewX:0,skewY:0,x:-3,y:-214.5,scaleY:0.68}},{t:this.instance_1,p:{regX:14,regY:16.6,scaleX:0.608,skewX:0,skewY:180,x:17.6,y:-225.4,scaleY:0.665}}]},1).to({state:[{t:this.shape,p:{x:7,y:-53}},{t:this.instance_2},{t:this.instance_17,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1,scaleY:1}},{t:this.instance_16,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-64.8,scaleY:1}},{t:this.instance_15,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-77.8,scaleY:1}},{t:this.shape_1,p:{scaleX:0.78,x:14.3,y:-85.9}},{t:this.instance_14,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:23.2,y:-90.9,scaleY:1}},{t:this.instance_13,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-10.2,y:-103.2,scaleY:1}},{t:this.instance_12,p:{regX:14,regY:16.6,scaleX:1.125,skewX:0,skewY:180,x:24.6,y:-114.1,scaleY:1}},{t:this.instance_11,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-4.5,y:-125,scaleY:1}},{t:this.instance_10,p:{regX:14.1,regY:16.6,scaleX:0.757,skewX:0,skewY:180,x:21.7,y:-136.6,scaleY:1}},{t:this.instance_9,p:{regX:14,regY:22.6,scaleX:0.777,skewX:0,skewY:180,x:21.8,y:-153.9,scaleY:0.843}},{t:this.instance_8,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.4,y:-149.3,scaleY:1}},{t:this.instance_7,p:{regX:14,regY:16.6,scaleX:0.547,skewX:0,skewY:180,x:15,y:-180.6,scaleY:0.681}},{t:this.instance_6,p:{regX:14,regY:16.6,scaleX:0.669,skewX:0,skewY:0,x:0.9,y:-192.1,scaleY:0.669}},{t:this.instance_5,p:{regX:14,regY:16.6,scaleX:0.568,skewX:0,skewY:180,x:16.9,y:-204.8,scaleY:0.765}},{t:this.instance_4,p:{regX:14,regY:16.4,scaleX:0.68,skewX:0,skewY:0,x:-3,y:-214.5,scaleY:0.68}},{t:this.instance_3,p:{regX:14,regY:16.6,scaleX:0.608,skewX:0,skewY:180,x:17.6,y:-225.4,scaleY:0.665}},{t:this.instance_1,p:{regX:14.1,regY:16.6,scaleX:0.663,skewX:0,skewY:0,x:2,y:-235,scaleY:0.663}}]},1).to({state:[{t:this.shape,p:{x:7,y:-53}},{t:this.instance_2},{t:this.instance_18,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1,scaleY:1}},{t:this.instance_17,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-64.8,scaleY:1}},{t:this.instance_16,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-77.8,scaleY:1}},{t:this.shape_1,p:{scaleX:0.78,x:14.3,y:-85.9}},{t:this.instance_15,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:23.2,y:-90.9,scaleY:1}},{t:this.instance_14,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-10.2,y:-103.2,scaleY:1}},{t:this.instance_13,p:{regX:14,regY:16.6,scaleX:1.125,skewX:0,skewY:180,x:24.6,y:-114.1,scaleY:1}},{t:this.instance_12,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-4.5,y:-125,scaleY:1}},{t:this.instance_11,p:{regX:14.1,regY:16.6,scaleX:0.757,skewX:0,skewY:180,x:21.7,y:-136.6,scaleY:1}},{t:this.instance_10,p:{regX:14,regY:22.6,scaleX:0.777,skewX:0,skewY:180,x:21.8,y:-153.9,scaleY:0.843}},{t:this.instance_9,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.4,y:-149.3,scaleY:1}},{t:this.instance_8,p:{regX:14,regY:16.6,scaleX:0.547,skewX:0,skewY:180,x:15,y:-180.6,scaleY:0.681}},{t:this.instance_7,p:{regX:14,regY:16.6,scaleX:0.669,skewX:0,skewY:0,x:0.9,y:-192.1,scaleY:0.669}},{t:this.instance_6,p:{regX:14,regY:16.6,scaleX:0.568,skewX:0,skewY:180,x:16.9,y:-204.8,scaleY:0.765}},{t:this.instance_5,p:{regX:14,regY:16.4,scaleX:0.68,skewX:0,skewY:0,x:-3,y:-214.5,scaleY:0.68}},{t:this.instance_4,p:{regX:14,regY:16.6,scaleX:0.608,skewX:0,skewY:180,x:17.6,y:-225.4,scaleY:0.665}},{t:this.instance_3,p:{regX:14.1,regY:16.6,scaleX:0.663,skewX:0,skewY:0,x:2,y:-235,scaleY:0.663}},{t:this.instance_1,p:{regX:13.8,regY:16.6,scaleX:0.524,skewX:0,skewY:180,x:17.4,y:-247.1,scaleY:0.72}}]},1).to({state:[{t:this.shape,p:{x:7,y:-53}},{t:this.instance_2},{t:this.instance_19,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1,scaleY:1}},{t:this.instance_18,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-64.8,scaleY:1}},{t:this.instance_17,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-77.8,scaleY:1}},{t:this.shape_1,p:{scaleX:0.78,x:14.3,y:-85.9}},{t:this.instance_16,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:23.2,y:-90.9,scaleY:1}},{t:this.instance_15,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-10.2,y:-103.2,scaleY:1}},{t:this.instance_14,p:{regX:14,regY:16.6,scaleX:1.125,skewX:0,skewY:180,x:24.6,y:-114.1,scaleY:1}},{t:this.instance_13,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-4.5,y:-125,scaleY:1}},{t:this.instance_12,p:{regX:14.1,regY:16.6,scaleX:0.757,skewX:0,skewY:180,x:21.7,y:-136.6,scaleY:1}},{t:this.instance_11,p:{regX:14,regY:22.6,scaleX:0.777,skewX:0,skewY:180,x:21.8,y:-153.9,scaleY:0.843}},{t:this.instance_10,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.4,y:-149.3,scaleY:1}},{t:this.instance_9,p:{regX:14,regY:16.6,scaleX:0.547,skewX:0,skewY:180,x:15,y:-180.6,scaleY:0.681}},{t:this.instance_8,p:{regX:14,regY:16.6,scaleX:0.669,skewX:0,skewY:0,x:0.9,y:-192.1,scaleY:0.669}},{t:this.instance_7,p:{regX:14,regY:16.6,scaleX:0.568,skewX:0,skewY:180,x:16.9,y:-204.8,scaleY:0.765}},{t:this.instance_6,p:{regX:14,regY:16.4,scaleX:0.68,skewX:0,skewY:0,x:-3,y:-214.5,scaleY:0.68}},{t:this.instance_5,p:{regX:14,regY:16.6,scaleX:0.608,skewX:0,skewY:180,x:17.6,y:-225.4,scaleY:0.665}},{t:this.instance_4,p:{regX:14.1,regY:16.6,scaleX:0.663,skewX:0,skewY:0,x:2,y:-235,scaleY:0.663}},{t:this.instance_3,p:{regX:13.8,regY:16.6,scaleX:0.524,skewX:0,skewY:180,x:17.4,y:-247.1,scaleY:0.72}},{t:this.instance_1,p:{regX:13.9,regY:16.6,scaleX:0.621,skewX:0,skewY:0,x:-0.7,y:-253.4,scaleY:0.621}}]},1).to({state:[{t:this.shape,p:{x:7,y:-53}},{t:this.instance_2},{t:this.instance_20,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1,scaleY:1}},{t:this.instance_19,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-64.8,scaleY:1}},{t:this.instance_18,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-77.8,scaleY:1}},{t:this.shape_1,p:{scaleX:0.78,x:14.3,y:-85.9}},{t:this.instance_17,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:23.2,y:-90.9,scaleY:1}},{t:this.instance_16,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-10.2,y:-103.2,scaleY:1}},{t:this.instance_15,p:{regX:14,regY:16.6,scaleX:1.125,skewX:0,skewY:180,x:24.6,y:-114.1,scaleY:1}},{t:this.instance_14,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-4.5,y:-125,scaleY:1}},{t:this.instance_13,p:{regX:14.1,regY:16.6,scaleX:0.757,skewX:0,skewY:180,x:21.7,y:-136.6,scaleY:1}},{t:this.instance_12,p:{regX:14,regY:22.6,scaleX:0.777,skewX:0,skewY:180,x:21.8,y:-153.9,scaleY:0.843}},{t:this.instance_11,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.4,y:-149.3,scaleY:1}},{t:this.instance_10,p:{regX:14,regY:16.6,scaleX:0.547,skewX:0,skewY:180,x:15,y:-180.6,scaleY:0.681}},{t:this.instance_9,p:{regX:14,regY:16.6,scaleX:0.669,skewX:0,skewY:0,x:0.9,y:-192.1,scaleY:0.669}},{t:this.instance_8,p:{regX:14,regY:16.6,scaleX:0.568,skewX:0,skewY:180,x:16.9,y:-204.8,scaleY:0.765}},{t:this.instance_7,p:{regX:14,regY:16.4,scaleX:0.68,skewX:0,skewY:0,x:-3,y:-214.5,scaleY:0.68}},{t:this.instance_6,p:{regX:14,regY:16.6,scaleX:0.608,skewX:0,skewY:180,x:17.6,y:-225.4,scaleY:0.665}},{t:this.instance_5,p:{regX:14.1,regY:16.6,scaleX:0.663,skewX:0,skewY:0,x:2,y:-235,scaleY:0.663}},{t:this.instance_4,p:{regX:13.8,regY:16.6,scaleX:0.524,skewX:0,skewY:180,x:17.4,y:-247.1,scaleY:0.72}},{t:this.instance_3,p:{regX:13.9,regY:16.6,scaleX:0.621,skewX:0,skewY:0,x:-0.7,y:-253.4,scaleY:0.621}},{t:this.instance_1,p:{regX:14,regY:16.6,scaleX:0.479,skewX:15,skewY:-165,x:21.4,y:-262.1,scaleY:0.524}}]},1).to({state:[{t:this.shape,p:{x:7,y:-53}},{t:this.instance_2},{t:this.instance_21,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1,scaleY:1}},{t:this.instance_20,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-64.8,scaleY:1}},{t:this.instance_19,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-77.8,scaleY:1}},{t:this.shape_1,p:{scaleX:0.78,x:14.3,y:-85.9}},{t:this.instance_18,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:23.2,y:-90.9,scaleY:1}},{t:this.instance_17,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-10.2,y:-103.2,scaleY:1}},{t:this.instance_16,p:{regX:14,regY:16.6,scaleX:1.125,skewX:0,skewY:180,x:24.6,y:-114.1,scaleY:1}},{t:this.instance_15,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-4.5,y:-125,scaleY:1}},{t:this.instance_14,p:{regX:14.1,regY:16.6,scaleX:0.757,skewX:0,skewY:180,x:21.7,y:-136.6,scaleY:1}},{t:this.instance_13,p:{regX:14,regY:22.6,scaleX:0.777,skewX:0,skewY:180,x:21.8,y:-153.9,scaleY:0.843}},{t:this.instance_12,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.4,y:-149.3,scaleY:1}},{t:this.instance_11,p:{regX:14,regY:16.6,scaleX:0.547,skewX:0,skewY:180,x:15,y:-180.6,scaleY:0.681}},{t:this.instance_10,p:{regX:14,regY:16.6,scaleX:0.669,skewX:0,skewY:0,x:0.9,y:-192.1,scaleY:0.669}},{t:this.instance_9,p:{regX:14,regY:16.6,scaleX:0.568,skewX:0,skewY:180,x:16.9,y:-204.8,scaleY:0.765}},{t:this.instance_8,p:{regX:14,regY:16.4,scaleX:0.68,skewX:0,skewY:0,x:-3,y:-214.5,scaleY:0.68}},{t:this.instance_7,p:{regX:14,regY:16.6,scaleX:0.608,skewX:0,skewY:180,x:17.6,y:-225.4,scaleY:0.665}},{t:this.instance_6,p:{regX:14.1,regY:16.6,scaleX:0.663,skewX:0,skewY:0,x:2,y:-235,scaleY:0.663}},{t:this.instance_5,p:{regX:13.8,regY:16.6,scaleX:0.524,skewX:0,skewY:180,x:17.4,y:-247.1,scaleY:0.72}},{t:this.instance_4,p:{regX:13.9,regY:16.6,scaleX:0.621,skewX:0,skewY:0,x:-0.7,y:-253.4,scaleY:0.621}},{t:this.instance_3,p:{regX:14,regY:16.6,scaleX:0.479,skewX:15,skewY:-165,x:21.4,y:-262.1,scaleY:0.524}},{t:this.instance_1,p:{regX:14,regY:16.6,scaleX:0.493,skewX:0,skewY:0,x:6.4,y:-267.3,scaleY:0.493}}]},1).to({state:[{t:this.shape,p:{x:7,y:-53}},{t:this.instance_2},{t:this.instance_22,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1,scaleY:1}},{t:this.instance_21,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-64.8,scaleY:1}},{t:this.instance_20,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-77.8,scaleY:1}},{t:this.shape_1,p:{scaleX:0.78,x:14.3,y:-85.9}},{t:this.instance_19,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:23.2,y:-90.9,scaleY:1}},{t:this.instance_18,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-10.2,y:-103.2,scaleY:1}},{t:this.instance_17,p:{regX:14,regY:16.6,scaleX:1.125,skewX:0,skewY:180,x:24.6,y:-114.1,scaleY:1}},{t:this.instance_16,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-4.5,y:-125,scaleY:1}},{t:this.instance_15,p:{regX:14.1,regY:16.6,scaleX:0.757,skewX:0,skewY:180,x:21.7,y:-136.6,scaleY:1}},{t:this.instance_14,p:{regX:14,regY:22.6,scaleX:0.777,skewX:0,skewY:180,x:21.8,y:-153.9,scaleY:0.843}},{t:this.instance_13,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.4,y:-149.3,scaleY:1}},{t:this.instance_12,p:{regX:14,regY:16.6,scaleX:0.547,skewX:0,skewY:180,x:15,y:-180.6,scaleY:0.681}},{t:this.instance_11,p:{regX:14,regY:16.6,scaleX:0.669,skewX:0,skewY:0,x:0.9,y:-192.1,scaleY:0.669}},{t:this.instance_10,p:{regX:14,regY:16.6,scaleX:0.568,skewX:0,skewY:180,x:16.9,y:-204.8,scaleY:0.765}},{t:this.instance_9,p:{regX:14,regY:16.4,scaleX:0.68,skewX:0,skewY:0,x:-3,y:-214.5,scaleY:0.68}},{t:this.instance_8,p:{regX:14,regY:16.6,scaleX:0.608,skewX:0,skewY:180,x:17.6,y:-225.4,scaleY:0.665}},{t:this.instance_7,p:{regX:14.1,regY:16.6,scaleX:0.663,skewX:0,skewY:0,x:2,y:-235,scaleY:0.663}},{t:this.instance_6,p:{regX:13.8,regY:16.6,scaleX:0.524,skewX:0,skewY:180,x:17.4,y:-247.1,scaleY:0.72}},{t:this.instance_5,p:{regX:13.9,regY:16.6,scaleX:0.621,skewX:0,skewY:0,x:-0.7,y:-253.4,scaleY:0.621}},{t:this.instance_4,p:{regX:14,regY:16.6,scaleX:0.479,skewX:15,skewY:-165,x:21.4,y:-262.1,scaleY:0.524}},{t:this.instance_3,p:{regX:14,regY:16.6,scaleX:0.493,skewX:0,skewY:0,x:6.4,y:-267.3,scaleY:0.493}},{t:this.instance_1,p:{regX:13.8,regY:16.6,scaleX:0.33,skewX:0,skewY:180,x:17.6,y:-274.7,scaleY:0.479}}]},1).to({state:[{t:this.shape,p:{x:7,y:-53}},{t:this.instance_2},{t:this.instance_23,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1}},{t:this.instance_22,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-64.8,scaleY:1}},{t:this.instance_21,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-77.8,scaleY:1}},{t:this.shape_1,p:{scaleX:0.78,x:14.3,y:-85.9}},{t:this.instance_20,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:23.2,y:-90.9,scaleY:1}},{t:this.instance_19,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-10.2,y:-103.2,scaleY:1}},{t:this.instance_18,p:{regX:14,regY:16.6,scaleX:1.125,skewX:0,skewY:180,x:24.6,y:-114.1,scaleY:1}},{t:this.instance_17,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-4.5,y:-125,scaleY:1}},{t:this.instance_16,p:{regX:14.1,regY:16.6,scaleX:0.757,skewX:0,skewY:180,x:21.7,y:-136.6,scaleY:1}},{t:this.instance_15,p:{regX:14,regY:22.6,scaleX:0.777,skewX:0,skewY:180,x:21.8,y:-153.9,scaleY:0.843}},{t:this.instance_14,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.4,y:-149.3,scaleY:1}},{t:this.instance_13,p:{regX:14,regY:16.6,scaleX:0.547,skewX:0,skewY:180,x:15,y:-180.6,scaleY:0.681}},{t:this.instance_12,p:{regX:14,regY:16.6,scaleX:0.669,skewX:0,skewY:0,x:0.9,y:-192.1,scaleY:0.669}},{t:this.instance_11,p:{regX:14,regY:16.6,scaleX:0.568,skewX:0,skewY:180,x:16.9,y:-204.8,scaleY:0.765}},{t:this.instance_10,p:{regX:14,regY:16.4,scaleX:0.68,skewX:0,skewY:0,x:-3,y:-214.5,scaleY:0.68}},{t:this.instance_9,p:{regX:14,regY:16.6,scaleX:0.608,skewX:0,skewY:180,x:17.6,y:-225.4,scaleY:0.665}},{t:this.instance_8,p:{regX:14.1,regY:16.6,scaleX:0.663,skewX:0,skewY:0,x:2,y:-235,scaleY:0.663}},{t:this.instance_7,p:{regX:13.8,regY:16.6,scaleX:0.524,skewX:0,skewY:180,x:17.4,y:-247.1,scaleY:0.72}},{t:this.instance_6,p:{regX:13.9,regY:16.6,scaleX:0.621,skewX:0,skewY:0,x:-0.7,y:-253.4,scaleY:0.621}},{t:this.instance_5,p:{regX:14,regY:16.6,scaleX:0.479,skewX:15,skewY:-165,x:21.4,y:-262.1,scaleY:0.524}},{t:this.instance_4,p:{regX:14,regY:16.6,scaleX:0.493,skewX:0,skewY:0,x:6.4,y:-267.3,scaleY:0.493}},{t:this.instance_3,p:{regX:13.9,regY:16.6,scaleX:0.384,skewX:0,skewY:0,x:4.8,y:-280.7,scaleY:0.384}},{t:this.instance_1,p:{regX:13.8,regY:16.6,scaleX:0.33,skewX:0,skewY:180,x:17.4,y:-276,scaleY:0.479}}]},1).to({state:[{t:this.shape,p:{x:7,y:-53}},{t:this.instance_2},{t:this.instance_24,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1}},{t:this.instance_23,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-64.8}},{t:this.instance_22,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-77.8,scaleY:1}},{t:this.shape_1,p:{scaleX:0.78,x:14.3,y:-85.9}},{t:this.instance_21,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:23.2,y:-90.9,scaleY:1}},{t:this.instance_20,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-10.2,y:-103.2,scaleY:1}},{t:this.instance_19,p:{regX:14,regY:16.6,scaleX:1.125,skewX:0,skewY:180,x:24.6,y:-114.1,scaleY:1}},{t:this.instance_18,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-4.5,y:-125,scaleY:1}},{t:this.instance_17,p:{regX:14.1,regY:16.6,scaleX:0.757,skewX:0,skewY:180,x:21.7,y:-136.6,scaleY:1}},{t:this.instance_16,p:{regX:14,regY:22.6,scaleX:0.777,skewX:0,skewY:180,x:21.8,y:-153.9,scaleY:0.843}},{t:this.instance_15,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.4,y:-149.3,scaleY:1}},{t:this.instance_14,p:{regX:14,regY:16.6,scaleX:0.547,skewX:0,skewY:180,x:15,y:-180.6,scaleY:0.681}},{t:this.instance_13,p:{regX:14,regY:16.6,scaleX:0.669,skewX:0,skewY:0,x:0.9,y:-192.1,scaleY:0.669}},{t:this.instance_12,p:{regX:14,regY:16.6,scaleX:0.568,skewX:0,skewY:180,x:16.9,y:-204.8,scaleY:0.765}},{t:this.instance_11,p:{regX:14,regY:16.4,scaleX:0.68,skewX:0,skewY:0,x:-3,y:-214.5,scaleY:0.68}},{t:this.instance_10,p:{regX:14,regY:16.6,scaleX:0.608,skewX:0,skewY:180,x:17.6,y:-225.4,scaleY:0.665}},{t:this.instance_9,p:{regX:14.1,regY:16.6,scaleX:0.663,skewX:0,skewY:0,x:2,y:-235,scaleY:0.663}},{t:this.instance_8,p:{regX:13.8,regY:16.6,scaleX:0.524,skewX:0,skewY:180,x:17.4,y:-247.1,scaleY:0.72}},{t:this.instance_7,p:{regX:13.9,regY:16.6,scaleX:0.621,skewX:0,skewY:0,x:-0.7,y:-253.4,scaleY:0.621}},{t:this.instance_6,p:{regX:14,regY:16.6,scaleX:0.479,skewX:15,skewY:-165,x:21.4,y:-262.1,scaleY:0.524}},{t:this.instance_5,p:{regX:14,regY:16.6,scaleX:0.493,skewX:0,skewY:0,x:6.4,y:-267.3,scaleY:0.493}},{t:this.instance_4,p:{regX:13.9,regY:16.6,scaleX:0.384,skewX:0,skewY:0,x:4.8,y:-280.7,scaleY:0.384}},{t:this.instance_3,p:{regX:13.8,regY:16.6,scaleX:0.33,skewX:0,skewY:180,x:15.2,y:-285.7,scaleY:0.479}},{t:this.instance_1,p:{regX:13.8,regY:16.6,scaleX:0.33,skewX:0,skewY:180,x:17.4,y:-275.2,scaleY:0.479}}]},1).to({state:[{t:this.shape,p:{x:7,y:-53}},{t:this.instance_2},{t:this.instance_25,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1}},{t:this.instance_24,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-64.8}},{t:this.instance_23,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-77.8}},{t:this.shape_1,p:{scaleX:0.78,x:14.3,y:-85.9}},{t:this.instance_22,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:23.2,y:-90.9,scaleY:1}},{t:this.instance_21,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-10.2,y:-103.2,scaleY:1}},{t:this.instance_20,p:{regX:14,regY:16.6,scaleX:1.125,skewX:0,skewY:180,x:24.6,y:-114.1,scaleY:1}},{t:this.instance_19,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-4.5,y:-125,scaleY:1}},{t:this.instance_18,p:{regX:14.1,regY:16.6,scaleX:0.757,skewX:0,skewY:180,x:21.7,y:-136.6,scaleY:1}},{t:this.instance_17,p:{regX:14,regY:22.6,scaleX:0.777,skewX:0,skewY:180,x:21.8,y:-153.9,scaleY:0.843}},{t:this.instance_16,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.4,y:-149.3,scaleY:1}},{t:this.instance_15,p:{regX:14,regY:16.6,scaleX:0.547,skewX:0,skewY:180,x:15,y:-180.6,scaleY:0.681}},{t:this.instance_14,p:{regX:14,regY:16.6,scaleX:0.669,skewX:0,skewY:0,x:0.9,y:-192.1,scaleY:0.669}},{t:this.instance_13,p:{regX:14,regY:16.6,scaleX:0.568,skewX:0,skewY:180,x:16.9,y:-204.8,scaleY:0.765}},{t:this.instance_12,p:{regX:14,regY:16.4,scaleX:0.68,skewX:0,skewY:0,x:-3,y:-214.5,scaleY:0.68}},{t:this.instance_11,p:{regX:14,regY:16.6,scaleX:0.608,skewX:0,skewY:180,x:17.6,y:-225.4,scaleY:0.665}},{t:this.instance_10,p:{regX:14.1,regY:16.6,scaleX:0.663,skewX:0,skewY:0,x:2,y:-235,scaleY:0.663}},{t:this.instance_9,p:{regX:13.8,regY:16.6,scaleX:0.524,skewX:0,skewY:180,x:17.4,y:-247.1,scaleY:0.72}},{t:this.instance_8,p:{regX:13.9,regY:16.6,scaleX:0.621,skewX:0,skewY:0,x:-0.7,y:-253.4,scaleY:0.621}},{t:this.instance_7,p:{regX:14,regY:16.6,scaleX:0.479,skewX:15,skewY:-165,x:21.4,y:-262.1,scaleY:0.524}},{t:this.instance_6,p:{regX:14,regY:16.6,scaleX:0.493,skewX:0,skewY:0,x:6.4,y:-267.3,scaleY:0.493}},{t:this.instance_5,p:{regX:13.9,regY:16.6,scaleX:0.384,skewX:0,skewY:0,x:4.8,y:-280.7,scaleY:0.384}},{t:this.instance_4,p:{regX:13.9,regY:16.6,scaleX:0.384,skewX:0,skewY:0,x:5.3,y:-293.2,scaleY:0.384}},{t:this.instance_3,p:{regX:13.8,regY:16.6,scaleX:0.33,skewX:0,skewY:180,x:17.4,y:-276,scaleY:0.479}},{t:this.instance_1,p:{regX:13.8,regY:16.6,scaleX:0.33,skewX:0,skewY:180,x:15.7,y:-286.6,scaleY:0.479}}]},1).to({state:[{t:this.shape,p:{x:7,y:-53}},{t:this.instance_2},{t:this.instance_26,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1}},{t:this.instance_25,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-64.8}},{t:this.instance_24,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-77.8}},{t:this.shape_1,p:{scaleX:0.78,x:14.3,y:-85.9}},{t:this.instance_23,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:23.2,y:-90.9}},{t:this.instance_22,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-10.2,y:-103.2,scaleY:1}},{t:this.instance_21,p:{regX:14,regY:16.6,scaleX:1.125,skewX:0,skewY:180,x:24.6,y:-114.1,scaleY:1}},{t:this.instance_20,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-4.5,y:-125,scaleY:1}},{t:this.instance_19,p:{regX:14.1,regY:16.6,scaleX:0.757,skewX:0,skewY:180,x:21.7,y:-136.6,scaleY:1}},{t:this.instance_18,p:{regX:14,regY:22.6,scaleX:0.777,skewX:0,skewY:180,x:21.8,y:-153.9,scaleY:0.843}},{t:this.instance_17,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.4,y:-149.3,scaleY:1}},{t:this.instance_16,p:{regX:14,regY:16.6,scaleX:0.547,skewX:0,skewY:180,x:15,y:-180.6,scaleY:0.681}},{t:this.instance_15,p:{regX:14,regY:16.6,scaleX:0.669,skewX:0,skewY:0,x:0.9,y:-192.1,scaleY:0.669}},{t:this.instance_14,p:{regX:14,regY:16.6,scaleX:0.568,skewX:0,skewY:180,x:16.9,y:-204.8,scaleY:0.765}},{t:this.instance_13,p:{regX:14,regY:16.4,scaleX:0.68,skewX:0,skewY:0,x:-3,y:-214.5,scaleY:0.68}},{t:this.instance_12,p:{regX:14,regY:16.6,scaleX:0.608,skewX:0,skewY:180,x:17.6,y:-225.4,scaleY:0.665}},{t:this.instance_11,p:{regX:14.1,regY:16.6,scaleX:0.663,skewX:0,skewY:0,x:2,y:-235,scaleY:0.663}},{t:this.instance_10,p:{regX:13.8,regY:16.6,scaleX:0.524,skewX:0,skewY:180,x:17.4,y:-247.1,scaleY:0.72}},{t:this.instance_9,p:{regX:13.9,regY:16.6,scaleX:0.621,skewX:0,skewY:0,x:-0.7,y:-253.4,scaleY:0.621}},{t:this.instance_8,p:{regX:14,regY:16.6,scaleX:0.479,skewX:15,skewY:-165,x:21.4,y:-262.1,scaleY:0.524}},{t:this.instance_7,p:{regX:14,regY:16.6,scaleX:0.493,skewX:0,skewY:0,x:6.4,y:-267.3,scaleY:0.493}},{t:this.instance_6,p:{regX:13.9,regY:16.6,scaleX:0.384,skewX:0,skewY:0,x:4.8,y:-280.7,scaleY:0.384}},{t:this.instance_5,p:{regX:13.9,regY:16.6,scaleX:0.384,skewX:0,skewY:0,x:5.3,y:-293.2,scaleY:0.384}},{t:this.instance_4,p:{regX:13.9,regY:16.6,scaleX:0.384,skewX:0,skewY:0,x:7.1,y:-301.1,scaleY:0.384}},{t:this.instance_3,p:{regX:13.8,regY:16.6,scaleX:0.33,skewX:0,skewY:180,x:17.3,y:-275.4,scaleY:0.479}},{t:this.instance_1,p:{regX:13.8,regY:16.6,scaleX:0.33,skewX:0,skewY:180,x:15.6,y:-286,scaleY:0.479}}]},1).to({state:[{t:this.shape,p:{x:7,y:-53}},{t:this.instance_2},{t:this.instance_27,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1}},{t:this.instance_26,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-64.8}},{t:this.instance_25,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-77.8}},{t:this.shape_1,p:{scaleX:0.78,x:14.3,y:-85.9}},{t:this.instance_24,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:23.2,y:-90.9}},{t:this.instance_23,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-10.2,y:-103.2}},{t:this.instance_22,p:{regX:14,regY:16.6,scaleX:1.125,skewX:0,skewY:180,x:24.6,y:-114.1,scaleY:1}},{t:this.instance_21,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-4.5,y:-125,scaleY:1}},{t:this.instance_20,p:{regX:14.1,regY:16.6,scaleX:0.757,skewX:0,skewY:180,x:21.7,y:-136.6,scaleY:1}},{t:this.instance_19,p:{regX:14,regY:22.6,scaleX:0.777,skewX:0,skewY:180,x:21.8,y:-153.9,scaleY:0.843}},{t:this.instance_18,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.4,y:-149.3,scaleY:1}},{t:this.instance_17,p:{regX:14,regY:16.6,scaleX:0.547,skewX:0,skewY:180,x:15,y:-180.6,scaleY:0.681}},{t:this.instance_16,p:{regX:14,regY:16.6,scaleX:0.669,skewX:0,skewY:0,x:0.9,y:-192.1,scaleY:0.669}},{t:this.instance_15,p:{regX:14,regY:16.6,scaleX:0.568,skewX:0,skewY:180,x:16.9,y:-204.8,scaleY:0.765}},{t:this.instance_14,p:{regX:14,regY:16.4,scaleX:0.68,skewX:0,skewY:0,x:-3,y:-214.5,scaleY:0.68}},{t:this.instance_13,p:{regX:14,regY:16.6,scaleX:0.608,skewX:0,skewY:180,x:17.6,y:-225.4,scaleY:0.665}},{t:this.instance_12,p:{regX:14.1,regY:16.6,scaleX:0.663,skewX:0,skewY:0,x:2,y:-235,scaleY:0.663}},{t:this.instance_11,p:{regX:13.8,regY:16.6,scaleX:0.524,skewX:0,skewY:180,x:17.4,y:-247.1,scaleY:0.72}},{t:this.instance_10,p:{regX:13.9,regY:16.6,scaleX:0.621,skewX:0,skewY:0,x:-0.7,y:-253.4,scaleY:0.621}},{t:this.instance_9,p:{regX:14,regY:16.6,scaleX:0.479,skewX:15,skewY:-165,x:21.4,y:-262.1,scaleY:0.524}},{t:this.instance_8,p:{regX:14,regY:16.6,scaleX:0.493,skewX:0,skewY:0,x:6.4,y:-267.3,scaleY:0.493}},{t:this.instance_7,p:{regX:13.9,regY:16.6,scaleX:0.384,skewX:0,skewY:0,x:4.8,y:-280.7,scaleY:0.384}},{t:this.instance_6,p:{regX:13.9,regY:16.6,scaleX:0.384,skewX:0,skewY:0,x:5.3,y:-293.2,scaleY:0.384}},{t:this.instance_5,p:{regX:13.9,regY:16.6,scaleX:0.384,skewX:0,skewY:0,x:6.9,y:-300.8,scaleY:0.384}},{t:this.instance_4,p:{regX:13.8,regY:16.6,scaleX:0.287,skewX:15,skewY:-165,x:18.7,y:-299.8,scaleY:0.417}},{t:this.instance_3,p:{regX:13.8,regY:16.6,scaleX:0.33,skewX:0,skewY:180,x:17.3,y:-275.7,scaleY:0.479}},{t:this.instance_1,p:{regX:13.8,regY:16.6,scaleX:0.33,skewX:0,skewY:180,x:15.6,y:-286.4,scaleY:0.479}}]},1).to({state:[{t:this.shape,p:{x:7,y:-53}},{t:this.instance_2},{t:this.instance_28,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1}},{t:this.instance_27,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-64.8}},{t:this.instance_26,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-77.8}},{t:this.shape_1,p:{scaleX:0.78,x:14.3,y:-85.9}},{t:this.instance_25,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:23.2,y:-90.9}},{t:this.instance_24,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-10.2,y:-103.2}},{t:this.instance_23,p:{regX:14,regY:16.6,scaleX:1.125,skewX:0,skewY:180,x:24.6,y:-114.1}},{t:this.instance_22,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-4.5,y:-125,scaleY:1}},{t:this.instance_21,p:{regX:14.1,regY:16.6,scaleX:0.757,skewX:0,skewY:180,x:21.7,y:-136.6,scaleY:1}},{t:this.instance_20,p:{regX:14,regY:22.6,scaleX:0.777,skewX:0,skewY:180,x:21.8,y:-153.9,scaleY:0.843}},{t:this.instance_19,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.4,y:-149.3,scaleY:1}},{t:this.instance_18,p:{regX:14,regY:16.6,scaleX:0.547,skewX:0,skewY:180,x:15,y:-180.6,scaleY:0.681}},{t:this.instance_17,p:{regX:14,regY:16.6,scaleX:0.669,skewX:0,skewY:0,x:0.9,y:-192.1,scaleY:0.669}},{t:this.instance_16,p:{regX:14,regY:16.6,scaleX:0.568,skewX:0,skewY:180,x:16.9,y:-204.8,scaleY:0.765}},{t:this.instance_15,p:{regX:14,regY:16.4,scaleX:0.68,skewX:0,skewY:0,x:-3,y:-214.5,scaleY:0.68}},{t:this.instance_14,p:{regX:14,regY:16.6,scaleX:0.608,skewX:0,skewY:180,x:17.6,y:-225.4,scaleY:0.665}},{t:this.instance_13,p:{regX:14.1,regY:16.6,scaleX:0.663,skewX:0,skewY:0,x:2,y:-235,scaleY:0.663}},{t:this.instance_12,p:{regX:13.8,regY:16.6,scaleX:0.524,skewX:0,skewY:180,x:17.4,y:-247.1,scaleY:0.72}},{t:this.instance_11,p:{regX:13.9,regY:16.6,scaleX:0.621,skewX:0,skewY:0,x:-0.7,y:-253.4,scaleY:0.621}},{t:this.instance_10,p:{regX:14,regY:16.6,scaleX:0.479,skewX:15,skewY:-165,x:21.4,y:-262.1,scaleY:0.524}},{t:this.instance_9,p:{regX:14,regY:16.6,scaleX:0.493,skewX:0,skewY:0,x:6.4,y:-267.3,scaleY:0.493}},{t:this.instance_8,p:{regX:13.9,regY:16.6,scaleX:0.384,skewX:0,skewY:0,x:4.8,y:-280.7,scaleY:0.384}},{t:this.instance_7,p:{regX:13.9,regY:16.6,scaleX:0.384,skewX:0,skewY:0,x:5.3,y:-293.2,scaleY:0.384}},{t:this.instance_6,p:{regX:13.9,regY:16.6,scaleX:0.384,skewX:0,skewY:0,x:6.9,y:-300.8,scaleY:0.384}},{t:this.instance_5,p:{regX:13.8,regY:16.6,scaleX:0.287,skewX:15,skewY:-165,x:18.4,y:-299.8,scaleY:0.417}},{t:this.instance_4,p:{regX:14.2,regY:16.6,scaleX:0.265,skewX:0,skewY:0,x:9.7,y:-308,scaleY:0.265}},{t:this.instance_3,p:{regX:13.8,regY:16.6,scaleX:0.33,skewX:0,skewY:180,x:16.9,y:-275.4,scaleY:0.479}},{t:this.instance_1,p:{regX:13.8,regY:16.6,scaleX:0.33,skewX:0,skewY:180,x:15.2,y:-286,scaleY:0.479}}]},1).to({state:[{t:this.shape,p:{x:7,y:-53}},{t:this.instance_2},{t:this.instance_29,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-12.3,y:-50.1}},{t:this.instance_28,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-64.8}},{t:this.instance_27,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-77.8}},{t:this.shape_1,p:{scaleX:0.78,x:14.3,y:-85.9}},{t:this.instance_26,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:23.2,y:-90.9}},{t:this.instance_25,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-10.2,y:-103.2}},{t:this.instance_24,p:{regX:14,regY:16.6,scaleX:1.125,skewX:0,skewY:180,x:24.6,y:-114.1}},{t:this.instance_23,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-4.5,y:-125}},{t:this.instance_22,p:{regX:14.1,regY:16.6,scaleX:0.757,skewX:0,skewY:180,x:21.7,y:-136.6,scaleY:1}},{t:this.instance_21,p:{regX:14,regY:22.6,scaleX:0.777,skewX:0,skewY:180,x:21.8,y:-153.9,scaleY:0.843}},{t:this.instance_20,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.4,y:-149.3,scaleY:1}},{t:this.instance_19,p:{regX:14,regY:16.6,scaleX:0.547,skewX:0,skewY:180,x:15,y:-180.6,scaleY:0.681}},{t:this.instance_18,p:{regX:14,regY:16.6,scaleX:0.669,skewX:0,skewY:0,x:0.9,y:-192.1,scaleY:0.669}},{t:this.instance_17,p:{regX:14,regY:16.6,scaleX:0.568,skewX:0,skewY:180,x:16.9,y:-204.8,scaleY:0.765}},{t:this.instance_16,p:{regX:14,regY:16.4,scaleX:0.68,skewX:0,skewY:0,x:-3,y:-214.5,scaleY:0.68}},{t:this.instance_15,p:{regX:14,regY:16.6,scaleX:0.608,skewX:0,skewY:180,x:17.6,y:-225.4,scaleY:0.665}},{t:this.instance_14,p:{regX:14.1,regY:16.6,scaleX:0.663,skewX:0,skewY:0,x:2,y:-235,scaleY:0.663}},{t:this.instance_13,p:{regX:13.8,regY:16.6,scaleX:0.524,skewX:0,skewY:180,x:17.4,y:-247.1,scaleY:0.72}},{t:this.instance_12,p:{regX:13.9,regY:16.6,scaleX:0.621,skewX:0,skewY:0,x:-0.7,y:-253.4,scaleY:0.621}},{t:this.instance_11,p:{regX:14,regY:16.6,scaleX:0.479,skewX:15,skewY:-165,x:21.4,y:-262.1,scaleY:0.524}},{t:this.instance_10,p:{regX:14,regY:16.6,scaleX:0.493,skewX:0,skewY:0,x:6.4,y:-267.3,scaleY:0.493}},{t:this.instance_9,p:{regX:13.9,regY:16.6,scaleX:0.384,skewX:0,skewY:0,x:4.8,y:-280.7,scaleY:0.384}},{t:this.instance_8,p:{regX:13.9,regY:16.6,scaleX:0.384,skewX:0,skewY:0,x:5.3,y:-293.2,scaleY:0.384}},{t:this.instance_7,p:{regX:13.9,regY:16.6,scaleX:0.384,skewX:0,skewY:0,x:6.9,y:-300.8,scaleY:0.384}},{t:this.instance_6,p:{regX:13.8,regY:16.6,scaleX:0.287,skewX:15,skewY:-165,x:18.4,y:-299.8,scaleY:0.417}},{t:this.instance_5,p:{regX:14.2,regY:16.6,scaleX:0.265,skewX:0,skewY:0,x:9.7,y:-308,scaleY:0.265}},{t:this.instance_4,p:{regX:17.9,regY:16.7,scaleX:0.261,skewX:15,skewY:-165,x:17.5,y:-309.5,scaleY:0.379}},{t:this.instance_3,p:{regX:13.8,regY:16.6,scaleX:0.33,skewX:0,skewY:180,x:17.3,y:-275.8,scaleY:0.479}},{t:this.instance_1,p:{regX:13.8,regY:16.6,scaleX:0.33,skewX:0,skewY:180,x:15.6,y:-286.5,scaleY:0.479}}]},1).to({state:[{t:this.shape,p:{x:7,y:-53}},{t:this.instance_2},{t:this.instance_30},{t:this.instance_29,p:{regX:14.1,regY:16.4,scaleX:0.757,skewX:15,skewY:-165,x:19.1,y:-64.8}},{t:this.instance_28,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.5,y:-77.8}},{t:this.shape_1,p:{scaleX:0.78,x:14.3,y:-85.9}},{t:this.instance_27,p:{regX:14,regY:16.6,scaleX:0.943,skewX:15,skewY:-165,x:23.2,y:-90.9}},{t:this.instance_26,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-10.2,y:-103.2}},{t:this.instance_25,p:{regX:14,regY:16.6,scaleX:1.125,skewX:0,skewY:180,x:24.6,y:-114.1}},{t:this.instance_24,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-4.5,y:-125}},{t:this.instance_23,p:{regX:14.1,regY:16.6,scaleX:0.757,skewX:0,skewY:180,x:21.7,y:-136.6}},{t:this.instance_22,p:{regX:14,regY:22.6,scaleX:0.777,skewX:0,skewY:180,x:21.8,y:-153.9,scaleY:0.843}},{t:this.instance_21,p:{regX:14,regY:16.6,scaleX:1,skewX:0,skewY:0,x:-6.4,y:-149.3,scaleY:1}},{t:this.instance_20,p:{regX:14,regY:16.6,scaleX:0.547,skewX:0,skewY:180,x:15,y:-180.6,scaleY:0.681}},{t:this.instance_19,p:{regX:14,regY:16.6,scaleX:0.669,skewX:0,skewY:0,x:0.9,y:-192.1,scaleY:0.669}},{t:this.instance_18,p:{regX:14,regY:16.6,scaleX:0.568,skewX:0,skewY:180,x:16.9,y:-204.8,scaleY:0.765}},{t:this.instance_17,p:{regX:14,regY:16.4,scaleX:0.68,skewX:0,skewY:0,x:-3,y:-214.5,scaleY:0.68}},{t:this.instance_16,p:{regX:14,regY:16.6,scaleX:0.608,skewX:0,skewY:180,x:17.6,y:-225.4,scaleY:0.665}},{t:this.instance_15,p:{regX:14.1,regY:16.6,scaleX:0.663,skewX:0,skewY:0,x:2,y:-235,scaleY:0.663}},{t:this.instance_14,p:{regX:13.8,regY:16.6,scaleX:0.524,skewX:0,skewY:180,x:17.4,y:-247.1,scaleY:0.72}},{t:this.instance_13,p:{regX:13.9,regY:16.6,scaleX:0.621,skewX:0,skewY:0,x:-0.7,y:-253.4,scaleY:0.621}},{t:this.instance_12,p:{regX:14,regY:16.6,scaleX:0.479,skewX:15,skewY:-165,x:21.4,y:-262.1,scaleY:0.524}},{t:this.instance_11,p:{regX:14,regY:16.6,scaleX:0.493,skewX:0,skewY:0,x:6.4,y:-267.3,scaleY:0.493}},{t:this.instance_10,p:{regX:13.9,regY:16.6,scaleX:0.384,skewX:0,skewY:0,x:4.8,y:-280.7,scaleY:0.384}},{t:this.instance_9,p:{regX:13.9,regY:16.6,scaleX:0.384,skewX:0,skewY:0,x:5.3,y:-293.2,scaleY:0.384}},{t:this.instance_8,p:{regX:13.9,regY:16.6,scaleX:0.384,skewX:0,skewY:0,x:6.9,y:-300.8,scaleY:0.384}},{t:this.instance_7,p:{regX:13.8,regY:16.6,scaleX:0.287,skewX:15,skewY:-165,x:18.4,y:-299.8,scaleY:0.417}},{t:this.instance_6,p:{regX:14.2,regY:16.6,scaleX:0.265,skewX:0,skewY:0,x:9.7,y:-308,scaleY:0.265}},{t:this.instance_5,p:{regX:17.9,regY:16.7,scaleX:0.261,skewX:15,skewY:-165,x:17.5,y:-309.5,scaleY:0.379}},{t:this.instance_4,p:{regX:13.8,regY:16.6,scaleX:0.33,skewX:0,skewY:180,x:17.3,y:-275.8,scaleY:0.479}},{t:this.instance_3,p:{regX:13.8,regY:16.6,scaleX:0.33,skewX:0,skewY:180,x:15.6,y:-286.5,scaleY:0.479}},{t:this.instance_1,p:{regX:17.8,regY:16.7,scaleX:0.261,skewX:-30,skewY:150,x:12.1,y:-314.6,scaleY:0.379}}]},1).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#51412D").s().p("AAAAAIABAAIgBABIAAgBg");
	this.shape_3.setTransform(106.6,-90.4,0.78,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#988160").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_4.setTransform(106.6,-90.4,0.78,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BF9F6B").s().p("AAAAGIAAgLQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAALg");
	this.shape_5.setTransform(7.5,-76);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B59562").s().p("AAAAFQgCgEACgFIACAJg");
	this.shape_6.setTransform(8.3,-74.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B29361").s().p("AgBAFIgBgFQABgCABgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAEgDAFg");
	this.shape_7.setTransform(7.4,-74.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B99965").s().p("AgBAGIABgLQABAAAAgBQAAAAAAAAQABAAAAAAQAAABAAAAIAAAFQAAAEgCACIAAABIgBgBg");
	this.shape_8.setTransform(7.6,-77.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BC9D68").s().p("AAAAJIAAgQQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAQg");
	this.shape_9.setTransform(7.3,-73.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C8AD82").s().p("AgBAOQgBgSACgJIAAAFQAAAFACABQgCADAAAFIAAAIIAAABg");
	this.shape_10.setTransform(5.7,-73);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3A2711").s().p("AgCABQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBIABgDQACACAAAEQABABAAABQAAAAAAABQAAAAgBABQAAAAgBABg");
	this.shape_11.setTransform(5.5,-75.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#746043").s().p("AgCAGIAAgFIAAgEIACgFIABAGQAFAFgGAGQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_12.setTransform(5.8,-76.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A6955E").s().p("AAAADIgCgDQACgDABgBQAAABACAEIAAADIgDABIAAgCg");
	this.shape_13.setTransform(9.1,-71.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BE9E6B").s().p("AgEgHQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAAAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIABgDIAEAHIgGAEQgDgJAAgGg");
	this.shape_14.setTransform(8.8,-73.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#53422E").s().p("AgDAJIABgMIABgSQADAAACAGIgBAHIgDAaIAAAEQgDgFAAgIg");
	this.shape_15.setTransform(5.4,-73.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3F2C16").s().p("AgIgBIAAgDQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQADgBAAgDQAAgEACgCIAKAWQgFAEgEAFQgGgLgCgGg");
	this.shape_16.setTransform(6.3,-71);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1F972C").s().p("AgDAGIACgIQABgDAFgBIAAAJQgDADgCABQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_17.setTransform(8.8,-72.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B89864").s().p("AgBAEIACgHQACAEgDADg");
	this.shape_18.setTransform(1.5,-51.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BF9F6B").s().p("AAAAGIAAgLQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAALg");
	this.shape_19.setTransform(1.1,-49.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B59562").s().p("AAAAFQgCgEACgFIACAJg");
	this.shape_20.setTransform(1.9,-47.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B29361").s().p("AgBAFIgBgFQABgCABgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAEgDAFg");
	this.shape_21.setTransform(1,-48.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B99965").s().p("AgBAGIABgLQABAAAAgBQAAAAAAAAQABAAAAAAQAAABAAAAIAAAFQAAAEgCACIAAABIgBgBg");
	this.shape_22.setTransform(1.2,-50.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BC9D68").s().p("AAAAJIAAgQQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAQg");
	this.shape_23.setTransform(0.9,-46.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#98864D").s().p("AABgEIABADIgBABIgCAFIACgJg");
	this.shape_24.setTransform(53.6,13.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#59462E").s().p("AAAgLIABAAQACAPgDAIg");
	this.shape_25.setTransform(8.1,-71.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BFAF76").s().p("AgCAGIAAgGQACgCAAgGIADAAQgBALgCAFg");
	this.shape_26.setTransform(8.1,-68.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C8AD82").s().p("AgBAOQgBgSACgJIAAAFQAAAFACABQgCADAAAFIAAAIIAAABg");
	this.shape_27.setTransform(-0.7,-46.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CCAE7D").s().p("AgBAOIgBgFQACgEgBgHQAAgIABgEQADAFgBAJIAAAOIgCABIgBgBg");
	this.shape_28.setTransform(8.2,-70.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D6B682").s().p("AgRAmIAZg5QAGgLgBgGIADgEQAEgBgCAEQgEASgKAVIgTAng");
	this.shape_29.setTransform(6.1,-64);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D3B380").s().p("AgaA/IACgHIgBgHIABgEQACgCAAgEIAAgGQATg1AcgvQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIgUAnQgLAYgGAQQgLAggBAWQgEgCAAgDg");
	this.shape_30.setTransform(1.8,-53.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3A2711").s().p("AgCABQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBIABgDQACACAAAEQABABAAABQAAAAAAABQAAAAgBABQAAAAgBABg");
	this.shape_31.setTransform(-0.9,-49);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5D4E3B").s().p("AgBAAIACgFIACAFIgDAGQgDgDACgDg");
	this.shape_32.setTransform(3.7,-54);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#BF9E68").s().p("AgCgDIADAAQACACAAAEQgEABgBgHg");
	this.shape_33.setTransform(3.8,-41.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#594834").s().p("AADgFQAAAFgEAGQgDgJAHgCg");
	this.shape_34.setTransform(7.9,-62.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#746043").s().p("AgCAGIAAgFIAAgEIACgFIABAGQAFAFgGAGQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_35.setTransform(-0.6,-49.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A6955E").s().p("AAAACIgCgCQACgEABgBQAAABACAEQABAEgCACQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_36.setTransform(2.7,-44.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1D942C").s().p("AAFADIgFgBQgBgCgGAAQADgCAEAAIAHAAQACAFgDAAIgBAAg");
	this.shape_37.setTransform(4.9,-73.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D3B586").s().p("AgCACQgDgCAFgFQAEAFAAAGQgFgCgBgCg");
	this.shape_38.setTransform(4.6,-40.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BE9E6B").s().p("AgEgHQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAAAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIABgDIAEAHIgGAEQgDgJAAgGg");
	this.shape_39.setTransform(2.4,-46.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#8F7650").s().p("AgGgKQAHABADAIQACACABAKIgDAAQgIgNgCgIg");
	this.shape_40.setTransform(1.2,-40.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#422E16").s().p("AgGgHQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAEADAEAGIACAGIgFACg");
	this.shape_41.setTransform(2.3,-38.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#53422E").s().p("AgDAJIABgMIABgSQADAAACAGIgBAHIgDAaIAAAEQgDgFAAgIg");
	this.shape_42.setTransform(-1,-46.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3A2711").s().p("AAAAiIAAgCQAGgbgMgnQAFAAABAFQABAGACABQgCADACAHQACAIgBADQADAEAAAGIgBAMIAAAGIAAAFQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_43.setTransform(7.5,-72.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#43301B").s().p("AgRAfQAEgNALgSIAQggIAFgDQgFAPgKATIgRAgIgCAFQgEgBACgEg");
	this.shape_44.setTransform(5.7,-57.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#05702C").s().p("AAFAZIgOgHQgLgPgBgIQAAgJAKgLIAEgBQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQgNAJAGAPQAHASAQABIAJgBIABACIgBABQgFAFgFAAIgGgCg");
	this.shape_45.setTransform(5.3,-71.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#169131").s().p("AgRAAIAAgLQADgCAFADQAJAIANgFIADABQADADgBADQgCAEgDAAQAAABgBAAQgBAAAAAAQgBABAAAAQAAAAgBABIgDADIgLACIgCABQgMAAACgNg");
	this.shape_46.setTransform(6.1,-68.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2E9E2E").s().p("AgKAAQACgYASgIIgCAHQACAMgBAXIAAAHQAAAEABADQgCAEAAAFQgSgJAAgYg");
	this.shape_47.setTransform(1.6,-70.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#94723C").s().p("AgnBWIgBgDQAHgcAbgyQAdg5AHgRIACgGQACgEgBgDQAAgHAIACQABAIgEAJIgHAQIgVAqQgiBAgKAiIgCACQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_48.setTransform(3.4,-58.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3F2C16").s().p("AAGAZIgFgMQgDgHgFgDQgLgTgDgLIgBgDQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQACgBAAgEQABgEABgBIAZAxIANAdIgIADIgJgQg");
	this.shape_49.setTransform(1.3,-41.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#20972D").s().p("AgOAfQgCgCABgJIgBguQgBgFAFgDQAPgJAOALQgCACgEAAQgFABgCACQgHAIAAAHQgBAHAFAIIAGALIABANQABAHAHADQgGACgFAAQgKAAgJgIg");
	this.shape_50.setTransform(3.9,-70.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1F972C").s().p("AgDAGIACgIQABgDAFgBIAAAJQgDADgCABQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_51.setTransform(2.4,-45.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0B8930").s().p("AABgBIAAABIgBACQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAg");
	this.shape_52.setTransform(53.7,13.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#8E6B32").s().p("AhMGOIAFgJQgDANgEAKQAAgIACgGgAgSDwIAAgBIACgCQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABIgCADIgBABIgDAEIAEgKgAAdgHIACAAIgCABgAANg6QgNgdgLgUQgEgGgBgHIAAAAIAAABIAAAFQAAACgFgCQgDgFADgLQAFgyAjhCIAKgTIATgnQAKgVAFgSIAEgSIAAgNQABgIgCgFIgCgDQAAgDgCgIQgCgGAEgEQAcA0gYBCQgCACgDALIgBABQgLASgTAmIgFALIgDAGQgCAEAAADIgFATQgEANgBAHIgBAZQABAGgDgBIgBgBIACAHIAAAGQgBADACABQAEAEAAAEQAHAIADALQgBAFADACIAEAGQgBADACADIAEAGIAHALIgXAIIgHgPg");
	this.shape_53.setTransform(1.4,-33.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#BC9B67").s().p("AgCgBIACgDIADAIQgDAAgCgFg");
	this.shape_54.setTransform(6.1,-80.8,0.692,1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A7844C").s().p("AAAAGIAAgLQABADAAAIg");
	this.shape_55.setTransform(7.7,-78,0.692,1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#BF9F6B").s().p("AAAAGIAAgLQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAALg");
	this.shape_56.setTransform(4.6,-93.4,0.692,1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#63523D").s().p("AgBACQgBgDAFgBIgDAFIgBgBg");
	this.shape_57.setTransform(8.1,-63.2,0.692,1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B49564").s().p("AAAgHIABAAIAAAHQAAAEgBAEQAAgDAAgMg");
	this.shape_58.setTransform(7.8,-74.1,0.692,1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B99965").s().p("AgBAGIABgLQAAAAABgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAFQAAAEgCACIAAABIgBgBg");
	this.shape_59.setTransform(4.7,-94.6,0.692,1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#8B8043").s().p("AgBACIgBgGIAFAAQgBAGgCACIAAABQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_60.setTransform(7.6,-68.3,0.692,1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D0B283").s().p("AgBAHIAAgLIAAgCQADAGAAAHg");
	this.shape_61.setTransform(7.2,-76.5,0.692,1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#BC9D68").s().p("AAAANIAAgZQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABABIAAAZIgBABIAAgBg");
	this.shape_62.setTransform(7.8,-76.1,0.692,1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CAAD7A").s().p("AgCAAIAEgIIACAFIgGANQgCgFACgFg");
	this.shape_63.setTransform(6.5,-67.9,0.692,1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D4B380").s().p("AgEAHIAEgIQABgFAEgDQAAAJgGAKg");
	this.shape_64.setTransform(5.7,-65,0.692,1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B59562").s().p("AAAAPIAAgeIABAAIAAAeIgBABIAAgBg");
	this.shape_65.setTransform(7.7,-70.3,0.692,1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D2B380").s().p("AgCAaIgBgDQAHgdgFgTIAAgCQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAABQAEANgCAPIgEAcIgCgDg");
	this.shape_66.setTransform(7.2,-73,0.692,1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D7B682").s().p("AAAgDQAEgBgBAEIgCAEIgDAAg");
	this.shape_67.setTransform(5.3,-63.9,0.692,1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F9FAF9").s().p("AgCAEIABgCQAAgCACgBIACgDIgDAJIgCgBg");
	this.shape_68.setTransform(8.3,-63.3,0.692,1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#947C58").s().p("AAAACQgBgCgDAAIAAgCIAEgCIAEAIIgBABQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_69.setTransform(6.5,-79.4,0.692,1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#5C4A33").s().p("AgBACIgDgGQADgCACADIADADIABACIgBAEIgBAAQgDAAgBgEg");
	this.shape_70.setTransform(6.5,-78.9,0.692,1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#624D30").s().p("AgCAAQgDgEAFgBQABAAABAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAABQAAAAAAAAQAAAAAAABQABAAAAAAIABACIgFADQABgBgCgFg");
	this.shape_71.setTransform(6.8,-77.4,0.692,1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#53412A").s().p("AAAAHIgEgNIACAAQACABACAFIADAFQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_72.setTransform(6.1,-80.4,0.692,1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#BE9E6B").s().p("AgEgHQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAAAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIABgDIAEAHIgGAEQgDgJAAgGg");
	this.shape_73.setTransform(5.5,-90.8,0.692,1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#594937").s().p("AAAABQAAgKgCgIQACgEACACIABALIgBADIAAANQAAAIgCAFIAAgUg");
	this.shape_74.setTransform(6.9,-75,0.692,1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#8F7650").s().p("AgGgKQAIABACAIQACACABAKIgDAAQgIgNgCgIg");
	this.shape_75.setTransform(4.7,-84.5,0.692,1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#4D3B23").s().p("AgEARIADgOQABgDAAgKQgBgJACgEQAFAIgBAQQgBARgFAGg");
	this.shape_76.setTransform(7,-73.1,0.692,1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#422E16").s().p("AAEAMIgMgXQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAFADADAHIAGALIgDAEIgCgBg");
	this.shape_77.setTransform(5.5,-82.2,0.692,1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#3A2711").s().p("AAAAiIAAgCQAFgbgLgnQAFAAABAFQABAGABABQgBADACAHQACAIAAADQACAEAAAGIAAAMIAAAGIgBAFQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAg");
	this.shape_78.setTransform(9,-116.4,0.692,1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#2E9E2E").s().p("AgKAAQACgYATgIIgDAHQACAMAAAXIgBAHQAAAEACADQgDAEAAAFQgRgJgBgYg");
	this.shape_79.setTransform(4.9,-114.9,0.692,1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#94723C").s().p("AgnBWIgBgDQAHgcAbgyQAdg5AHgRIADgNQAAgHAIACQABAIgEAJIgHAQIgVAqQgiBAgKAiIgCACQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_80.setTransform(6.2,-103,0.692,1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#3F2C16").s().p("AAXA3QgDgEgBgFIgDgGIgDgJQgEgJgIgNIgEgLQgEgHgFgDQgLgUgDgKIgBgDQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAQACgBAAgDQABgEABgCIAZAyQAPAdAGAWIACAGQABAEgDACg");
	this.shape_81.setTransform(5.1,-84.4,0.692,1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#1F972C").s().p("AgDAGIACgIQABgDAEgBIAAAJQgCADgCABQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_82.setTransform(5.5,-89.7,0.692,1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#93713B").s().p("AgDAJQALgdACgLQAEAEAAAFQAAADgDAHQgCAFAAAEIgEAJIgEAJIgEAKIgCAGIgIABIAKgXg");
	this.shape_83.setTransform(5.7,-66.6,0.692,1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#118F2D").s().p("AgCANQgCgBgCgEIgCgJIAEgQQADABABAFIACAHIAEALIACADQABABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgDAEgDAAQgBAAgCgFg");
	this.shape_84.setTransform(7,-69.6,0.692,1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#8E6B32").s().p("AAAESQgLgBgKABIADgGQAEgHADgMIAIgTQACgEACgBIAFACQACABADgBQADgCABgCIAAgGIABgZIgBAcQgCACgEgBQgEgDgBgKIAEgbQABgQgDgLQAAgJgDgHQgCgCABgIIAAgDIgBgDQAAgMgEgNIgLgXQgNgegMgTQgDgGgBgIIgBAAIAAABIABAGQgBABgEgBQgEgFADgLQAFgyAkhCIAJgSIAUgnQAKgWAFgSIAEgSIAAgMQAAgJgCgFIgCgDQABgCgCgIQgCgGADgEQAdA0gZBCQgCACgCAKIgBACQgLASgTAmIgFALIgDAGQgCAEABACIgGAUQgEANgBAHIgBAYQABAFgDAAIgBgBIADAHIgBAFQAAADACACQAEADAAAFQAGAHADAMQAAAFACACIAEAFQgBADACAEIAEAGQAmA+gGBFIAAAJQAAABAAABQAAABAAAAQAAABAAAAQAAABAAAAQgIALgCAPIgDAcIgCAEQgEADgBAEQgLgEgKgCg");
	this.shape_85.setTransform(6.7,-90.8,0.692,1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#B89864").s().p("AgBAEIACgHQACAEgDADg");
	this.shape_86.setTransform(1.5,-51.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B59562").s().p("AAAAFQgCgEACgFIACAJg");
	this.shape_87.setTransform(1.9,-47.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#B29361").s().p("AgBAFIgBgFQABgCABgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAEgDAFg");
	this.shape_88.setTransform(1,-48.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#BC9D68").s().p("AAAAJIAAgQQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAQg");
	this.shape_89.setTransform(0.9,-46.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#59462E").s().p("AAAgLIABAAQACAPgDAIg");
	this.shape_90.setTransform(8.1,-71.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#BFAF76").s().p("AgCAGIAAgGQACgCAAgGIADAAQgBALgCAFg");
	this.shape_91.setTransform(8.1,-68.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#C8AD82").s().p("AgBAOQgBgSACgJIAAAFQAAAFACABQgCADAAAFIAAAIIAAABg");
	this.shape_92.setTransform(-0.7,-46.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#CCAE7D").s().p("AgBAOIgBgFQACgEgBgHQAAgIABgEQADAFgBAJIAAAOIgCABIgBgBg");
	this.shape_93.setTransform(8.2,-70.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#D6B682").s().p("AgRAmIAZg5QAGgLgBgGIADgEQAEgBgCAEQgEASgKAVIgTAng");
	this.shape_94.setTransform(6.1,-64);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D3B380").s().p("AgaA/IACgHIgBgHIABgEQACgCAAgEIAAgGQATg1AcgvQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIgUAnQgLAYgGAQQgLAggBAWQgEgCAAgDg");
	this.shape_95.setTransform(1.8,-53.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#3A2711").s().p("AgCABQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBIABgDQACACAAAEQABABAAABQAAAAAAABQAAAAgBABQAAAAgBABg");
	this.shape_96.setTransform(-0.9,-49);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#5D4E3B").s().p("AgBAAIACgFIACAFIgDAGQgDgDACgDg");
	this.shape_97.setTransform(3.7,-54);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#BF9E68").s().p("AgCgDIADAAQACACAAAEQgEABgBgHg");
	this.shape_98.setTransform(3.8,-41.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#594834").s().p("AADgFQAAAFgEAGQgDgJAHgCg");
	this.shape_99.setTransform(7.9,-62.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#746043").s().p("AgCAGIAAgFIAAgEIACgFIABAGQAFAFgGAGQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_100.setTransform(-0.6,-49.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#A6955E").s().p("AAAACIgCgCQACgEABgBQAAABACAEQABAEgCACQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_101.setTransform(2.7,-44.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#1D942C").s().p("AAFADIgFgBQgBgCgGAAQADgCAEAAIAHAAQACAFgDAAIgBAAg");
	this.shape_102.setTransform(4.9,-73.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D3B586").s().p("AgCACQgDgCAFgFQAEAFAAAGQgFgCgBgCg");
	this.shape_103.setTransform(4.6,-40.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#53422E").s().p("AgDAJIABgMIABgSQADAAACAGIgBAHIgDAaIAAAEQgDgFAAgIg");
	this.shape_104.setTransform(-1,-46.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#43301B").s().p("AgRAfQAEgNALgSIAQggIAFgDQgFAPgKATIgRAgIgCAFQgEgBACgEg");
	this.shape_105.setTransform(5.7,-57.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#05702C").s().p("AAFAZIgOgHQgLgPgBgIQAAgJAKgLIAEgBQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQgNAJAGAPQAHASAQABIAJgBIABACIgBABQgFAFgFAAIgGgCg");
	this.shape_106.setTransform(5.3,-71.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#169131").s().p("AgRAAIAAgLQADgCAFADQAJAIANgFIADABQADADgBADQgCAEgDAAQAAABgBAAQgBAAAAAAQgBABAAAAQAAAAgBABIgDADIgLACIgCABQgMAAACgNg");
	this.shape_107.setTransform(6.1,-68.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#20972D").s().p("AgOAfQgCgCABgJIgBguQgBgFAFgDQAPgJAOALQgCACgEAAQgFABgCACQgHAIAAAHQgBAHAFAIIAGALIABANQABAHAHADQgGACgFAAQgKAAgJgIg");
	this.shape_108.setTransform(3.9,-70.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#63523D").s().p("AADgEQgDAIAAABQgEgHAHgCg");
	this.shape_109.setTransform(11.7,-108.7,0.643,1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#4B3820").s().p("AgBACIADgEIgBAFIgCgBg");
	this.shape_110.setTransform(11.4,-108,0.643,1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D7B682").s().p("AgDAFIAEgKQAEgBgBAEIgEAIIgDgBg");
	this.shape_111.setTransform(9,-109.3,0.643,1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#F9FAF9").s().p("AgEAIIADgFIAAABIABgFQAAgDACgBIADgDIgHARIgCgBg");
	this.shape_112.setTransform(11.7,-108.6,0.643,1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#93713B").s().p("AgOAgIALgZQAMgdACgKQAEAEAAAFQAAADgDAGQgDAGABAEIgFAJIgEAJIgDAJIgEAKIgIgBg");
	this.shape_113.setTransform(9.4,-112.1,0.643,1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#8E6B32").s().p("AgWERIAEgJQAEgHADgMIAIgTQACgEACgBIAFACQACABADgBQADgCABgCIAAgGIABgZIgBAcQgCACgEgBQgEgDgBgKIAEgbQABgQgDgLQAAgJgDgHQgCgCABgIIAAgDIgBgDQAAgMgEgNIgLgXQgNgegMgTQgDgGgBgIIgBAAIAAABIABAGQgBABgEgBQgEgFADgLQAFgyAkhCIAJgTIAUgmQAKgWAFgSIAEgSIAAgMQAAgJgCgFIgCgDQABgCgCgIQgCgGADgEQAdA0gZBCQgCACgCAKIgBACQgLASgTAmIgFALIgDAGQgCAEABACIgGAUQgEANgBAHIgBAYQABAGgDgBIgBAAIADAGIgBAFQAAADACACQAEADAAAFQAGAHADAMQAAAFACACIAEAFQgBADACAEIAEAGQAmA+gGBFIAAAJQAAABAAABQAAABAAAAQAAABAAAAQAAABAAAAQgIALgCAPIgDAcIgCAEQgFAEgBAEIgBADIgCAEQgSgHgVgEg");
	this.shape_114.setTransform(10.3,-136.1,0.643,1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#BC9B67").s().p("AgCgBIACgDIADAIQgDAAgCgFg");
	this.shape_115.setTransform(6.1,-80.8,0.692,1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#A7844C").s().p("AAAAGIAAgLQABADAAAIg");
	this.shape_116.setTransform(7.7,-78,0.692,1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#BF9F6B").s().p("AAAAGIAAgLQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAALg");
	this.shape_117.setTransform(4.6,-93.4,0.692,1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B49564").s().p("AAAgHIABAAIAAAHQAAAEgBAEQAAgDAAgMg");
	this.shape_118.setTransform(7.8,-74.1,0.692,1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B99965").s().p("AgBAGIABgLQAAAAABgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAFQAAAEgCACIAAABIgBgBg");
	this.shape_119.setTransform(4.7,-94.6,0.692,1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#8B8043").s().p("AgBACIgBgGIAFAAQgBAGgCACIAAABQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_120.setTransform(7.6,-68.3,0.692,1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#D0B283").s().p("AgBAHIAAgLIAAgCQADAGAAAHg");
	this.shape_121.setTransform(7.2,-76.5,0.692,1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#BC9D68").s().p("AAAANIAAgZQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABABIAAAZIgBABIAAgBg");
	this.shape_122.setTransform(7.8,-76.1,0.692,1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#CAAD7A").s().p("AgCAAIAEgIIACAFIgGANQgCgFACgFg");
	this.shape_123.setTransform(6.5,-67.9,0.692,1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#D4B380").s().p("AgEAHIAEgIQABgFAEgDQAAAJgGAKg");
	this.shape_124.setTransform(5.7,-65,0.692,1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#B59562").s().p("AAAAPIAAgeIABAAIAAAeIgBABIAAgBg");
	this.shape_125.setTransform(7.7,-70.3,0.692,1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#D2B380").s().p("AgCAaIgBgDQAHgdgFgTIAAgCQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAABQAEANgCAPIgEAcIgCgDg");
	this.shape_126.setTransform(7.2,-73,0.692,1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#947C58").s().p("AAAACQgBgCgDAAIAAgCIAEgCIAEAIIgBABQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_127.setTransform(6.5,-79.4,0.692,1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#5C4A33").s().p("AgBACIgDgGQADgCACADIADADIABACIgBAEIgBAAQgDAAgBgEg");
	this.shape_128.setTransform(6.5,-78.9,0.692,1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#624D30").s().p("AgCAAQgDgEAFgBQABAAABAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAABQAAAAAAAAQAAAAAAABQABAAAAAAIABACIgFADQABgBgCgFg");
	this.shape_129.setTransform(6.8,-77.4,0.692,1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#53412A").s().p("AAAAHIgEgNIACAAQACABACAFIADAFQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_130.setTransform(6.1,-80.4,0.692,1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#BE9E6B").s().p("AgEgHQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAAAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIABgDIAEAHIgGAEQgDgJAAgGg");
	this.shape_131.setTransform(5.5,-90.8,0.692,1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#594937").s().p("AAAABQAAgKgCgIQACgEACACIABALIgBADIAAANQAAAIgCAFIAAgUg");
	this.shape_132.setTransform(6.9,-75,0.692,1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#8F7650").s().p("AgGgKQAIABACAIQACACABAKIgDAAQgIgNgCgIg");
	this.shape_133.setTransform(4.7,-84.5,0.692,1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#4D3B23").s().p("AgEARIADgOQABgDAAgKQgBgJACgEQAFAIgBAQQgBARgFAGg");
	this.shape_134.setTransform(7,-73.1,0.692,1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#422E16").s().p("AAEAMIgMgXQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAFADADAHIAGALIgDAEIgCgBg");
	this.shape_135.setTransform(5.5,-82.2,0.692,1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#3A2711").s().p("AAAAiIAAgCQAFgbgLgnQAFAAABAFQABAGABABQgBADACAHQACAIAAADQACAEAAAGIAAAMIAAAGIgBAFQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAg");
	this.shape_136.setTransform(9,-116.4,0.692,1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#2E9E2E").s().p("AgKAAQACgYATgIIgDAHQACAMAAAXIgBAHQAAAEACADQgDAEAAAFQgRgJgBgYg");
	this.shape_137.setTransform(4.9,-114.9,0.692,1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#94723C").s().p("AgnBWIgBgDQAHgcAbgyQAdg5AHgRIADgNQAAgHAIACQABAIgEAJIgHAQIgVAqQgiBAgKAiIgCACQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_138.setTransform(6.2,-103,0.692,1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#3F2C16").s().p("AAXA3QgDgEgBgFIgDgGIgDgJQgEgJgIgNIgEgLQgEgHgFgDQgLgUgDgKIgBgDQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAQACgBAAgDQABgEABgCIAZAyQAPAdAGAWIACAGQABAEgDACg");
	this.shape_139.setTransform(5.1,-84.4,0.692,1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#1F972C").s().p("AgDAGIACgIQABgDAEgBIAAAJQgCADgCABQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_140.setTransform(5.5,-89.7,0.692,1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#118F2D").s().p("AgCANQgCgBgCgEIgCgJIAEgQQADABABAFIACAHIAEALIACADQABABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgDAEgDAAQgBAAgCgFg");
	this.shape_141.setTransform(7,-69.6,0.692,1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#B89864").s().p("AgBAEIACgHQACAEgDADg");
	this.shape_142.setTransform(1.5,-51.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#B59562").s().p("AAAAFQgCgEACgFIACAJg");
	this.shape_143.setTransform(1.9,-47.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#B29361").s().p("AgBAFIgBgFQABgCABgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAEgDAFg");
	this.shape_144.setTransform(1,-48.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#BC9D68").s().p("AAAAJIAAgQQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAQg");
	this.shape_145.setTransform(0.9,-46.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#59462E").s().p("AAAgLIABAAQACAPgDAIg");
	this.shape_146.setTransform(8.1,-71.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#BFAF76").s().p("AgCAGIAAgGQACgCAAgGIADAAQgBALgCAFg");
	this.shape_147.setTransform(8.1,-68.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#C8AD82").s().p("AgBAOQgBgSACgJIAAAFQAAAFACABQgCADAAAFIAAAIIAAABg");
	this.shape_148.setTransform(-0.7,-46.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#CCAE7D").s().p("AgBAOIgBgFQACgEgBgHQAAgIABgEQADAFgBAJIAAAOIgCABIgBgBg");
	this.shape_149.setTransform(8.2,-70.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#D6B682").s().p("AgRAmIAZg5QAGgLgBgGIADgEQAEgBgCAEQgEASgKAVIgTAng");
	this.shape_150.setTransform(6.1,-64);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#D3B380").s().p("AgaA/IACgHIgBgHIABgEQACgCAAgEIAAgGQATg1AcgvQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIgUAnQgLAYgGAQQgLAggBAWQgEgCAAgDg");
	this.shape_151.setTransform(1.8,-53.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#3A2711").s().p("AgCABQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBIABgDQACACAAAEQABABAAABQAAAAAAABQAAAAgBABQAAAAgBABg");
	this.shape_152.setTransform(-0.9,-49);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#5D4E3B").s().p("AgBAAIACgFIACAFIgDAGQgDgDACgDg");
	this.shape_153.setTransform(3.7,-54);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#BF9E68").s().p("AgCgDIADAAQACACAAAEQgEABgBgHg");
	this.shape_154.setTransform(3.8,-41.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#594834").s().p("AADgFQAAAFgEAGQgDgJAHgCg");
	this.shape_155.setTransform(7.9,-62.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#746043").s().p("AgCAGIAAgFIAAgEIACgFIABAGQAFAFgGAGQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_156.setTransform(-0.6,-49.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#A6955E").s().p("AAAACIgCgCQACgEABgBQAAABACAEQABAEgCACQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_157.setTransform(2.7,-44.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#1D942C").s().p("AAFADIgFgBQgBgCgGAAQADgCAEAAIAHAAQACAFgDAAIgBAAg");
	this.shape_158.setTransform(4.9,-73.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#D3B586").s().p("AgCACQgDgCAFgFQAEAFAAAGQgFgCgBgCg");
	this.shape_159.setTransform(4.6,-40.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#53422E").s().p("AgDAJIABgMIABgSQADAAACAGIgBAHIgDAaIAAAEQgDgFAAgIg");
	this.shape_160.setTransform(-1,-46.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#43301B").s().p("AgRAfQAEgNALgSIAQggIAFgDQgFAPgKATIgRAgIgCAFQgEgBACgEg");
	this.shape_161.setTransform(5.7,-57.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#05702C").s().p("AAFAZIgOgHQgLgPgBgIQAAgJAKgLIAEgBQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQgNAJAGAPQAHASAQABIAJgBIABACIgBABQgFAFgFAAIgGgCg");
	this.shape_162.setTransform(5.3,-71.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#169131").s().p("AgRAAIAAgLQADgCAFADQAJAIANgFIADABQADADgBADQgCAEgDAAQAAABgBAAQgBAAAAAAQgBABAAAAQAAAAgBABIgDADIgLACIgCABQgMAAACgNg");
	this.shape_163.setTransform(6.1,-68.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#20972D").s().p("AgOAfQgCgCABgJIgBguQgBgFAFgDQAPgJAOALQgCACgEAAQgFABgCACQgHAIAAAHQgBAHAFAIIAGALIABANQABAHAHADQgGACgFAAQgKAAgJgIg");
	this.shape_164.setTransform(3.9,-70.6);

	this.instance_31 = new lib.ale("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(-7.3,-172.5,0.868,0.868,0,0,0,14,16.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#BF9E68").s().p("AgCgDIACAAIACAEIABACIAAAAQgEABgBgHg");
	this.shape_165.setTransform(7.1,-157.7,0.731,1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#8E6B32").s().p("AAAEQIgTACIABgBQAEgHADgMIAIgSQACgEACgCIAFACQACABADgBQADgCABgCIAAgGIABgYIgBAbQgCACgEgBQgEgDgBgKIAEgbQABgQgDgLQAAgJgDgGQgCgDABgHIAAgEIgBgDQAAgLgEgOIgLgXQgNgegMgTQgDgGgBgHIgBAAIAAABIABAFQgBACgEgCQgEgFADgLQAFgxAkhCIAJgTIAUgnQAKgWAFgSIAEgSIAAgMQAAgIgCgFIgCgEQABgCgCgIQgCgGADgEQAdA0gZBCQgCACgCALIgBABQgLASgTAmIgFALIgDAGQgCAEABADIgGATQgEANgBAHIgBAYQABAFgDAAIgBgBIADAHIgBAFQAAAEACABQAEADAAAFQAEAGADAHQgBAGADAEIACADIAEAFQgBAEACADIAEAGQAmA/gGBEIAAAKQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAAAQgIALgCAPIgDAcQgOgCgOAAg");
	this.shape_166.setTransform(7.3,-163.1,0.731,1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#D6B682").s().p("AgQAfIAag5IACgFIABAAIAEgBQgEANgHAPIgTAlg");
	this.shape_167.setTransform(11.3,-153.1,0.643,1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#2E9E2E").s().p("AgBgEIADAEIAAAFQgCgEgBgFg");
	this.shape_168.setTransform(8.1,-158.6,0.643,1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#94723C").s().p("AgnBRIgBgEQAHgbAbgyQAdg5AHgRIABgFIAIgCIABAAIgBAFIgIAQIgUAqQgjBAgKAjIgCABQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAgBAAg");
	this.shape_169.setTransform(9.6,-148.1,0.643,1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#8E6B32").s().p("AgWDtIAEgJQAEgHADgMIAIgSQACgEACgCIAFACQACABADgBQADgCABgCIAAgGIABgYIgBAbQgCACgEgBQgEgDgBgKIAEgbQABgQgDgLQAAgJgDgGQgCgDABgHIAAgEIgBgDQAAgLgEgOIgLgXQgNgegMgSQgDgGgBgHIgBAAIAAABIABAFQgBACgEgCQgEgFADgLQAFgyAkhCIAJgTIAUgnIAKgaIABAAQAMgEAHgGQgCAXgJAYQgCACgCALIgBABQgLASgTAmIgFALIgDAGQgCAEABADIgGATQgEANgBAHIgBAZQABAFgDAAIgBgBIADAHIgBAFQAAAEACABQAEADAAAFQAGAIADAKQAAAFACACIAEAFQgBAEACADIAEAGQAmA/gGBEIAAAKQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgIALgCAPIgDAcIgCAEQgFAEgBAFIgBADIgCADQgSgHgVgEg");
	this.shape_170.setTransform(10.1,-132.5,0.643,1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#BC9B67").s().p("AgCgBIACgDIADAIQgDAAgCgFg");
	this.shape_171.setTransform(5.9,-80.8,0.692,1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#A7844C").s().p("AAAAGIAAgLQABADAAAIg");
	this.shape_172.setTransform(7.5,-78,0.692,1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#BF9F6B").s().p("AAAAGIAAgLQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAALg");
	this.shape_173.setTransform(4.3,-93.4,0.692,1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#B99965").s().p("AgBAGIABgLQAAAAABgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAFQAAAEgCACIAAABIgBgBg");
	this.shape_174.setTransform(4.4,-94.6,0.692,1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#D0B283").s().p("AgBAHIAAgLIAAgCQADAGAAAHg");
	this.shape_175.setTransform(6.9,-76.5,0.692,1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#BC9D68").s().p("AAAANIAAgZQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABABIAAAZIgBABIAAgBg");
	this.shape_176.setTransform(7.5,-76.1,0.692,1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#947C58").s().p("AAAACQgBgCgDAAIAAgCIAEgCIAEAIIgBABQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_177.setTransform(6.2,-79.4,0.692,1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#5C4A33").s().p("AgBACIgDgGQADgCACADIADADIABACIgBAEIgBAAQgDAAgBgEg");
	this.shape_178.setTransform(6.3,-78.9,0.692,1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#624D30").s().p("AgCAAQgDgEAFgBQABAAABAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAABQAAAAAAAAQAAAAAAABQABAAAAAAIABACIgFADQABgBgCgFg");
	this.shape_179.setTransform(6.5,-77.4,0.692,1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#53412A").s().p("AAAAHIgEgNIACAAQACABACAFIADAFQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_180.setTransform(5.9,-80.4,0.692,1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#BE9E6B").s().p("AgEgHQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAAAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIABgDIAEAHIgGAEQgDgJAAgGg");
	this.shape_181.setTransform(5.2,-90.8,0.692,1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#594937").s().p("AAAABQAAgKgCgIQACgEACACIABALIgBADIAAANQAAAIgCAFIAAgUg");
	this.shape_182.setTransform(6.6,-75,0.692,1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#8F7650").s().p("AgGgKQAIABACAIQACACABAKIgDAAQgIgNgCgIg");
	this.shape_183.setTransform(4.4,-84.5,0.692,1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#422E16").s().p("AAEAMIgMgXQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAFADADAHIAGALIgDAEIgCgBg");
	this.shape_184.setTransform(5.3,-82.2,0.692,1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#3F2C16").s().p("AAXA3QgDgEgBgFIgDgGIgDgJQgEgJgIgNIgEgLQgEgHgFgDQgLgUgDgKIgBgDQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAQACgBAAgDQABgEABgCIAZAyQAPAdAGAWIACAGQABAEgDACg");
	this.shape_185.setTransform(4.8,-84.4,0.692,1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#1F972C").s().p("AgDAGIACgIQABgDAEgBIAAAJQgCADgCABQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_186.setTransform(5.2,-89.7,0.692,1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#B89864").s().p("AgBAEIACgHQACAEgDADg");
	this.shape_187.setTransform(1.2,-51.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#B59562").s().p("AAAAFQgCgEACgFIACAJg");
	this.shape_188.setTransform(1.7,-47.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#B29361").s().p("AgBAFIgBgFQABgCABgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAEgDAFg");
	this.shape_189.setTransform(0.7,-48.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#BC9D68").s().p("AAAAJIAAgQQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAQg");
	this.shape_190.setTransform(0.6,-46.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#C8AD82").s().p("AgBAOQgBgSACgJIAAAFQAAAFACABQgCADAAAFIAAAIIAAABg");
	this.shape_191.setTransform(-1,-46.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#D3B380").s().p("AgaA/IACgHIgBgHIABgEQACgCAAgEIAAgGQATg1AcgvQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIgUAnQgLAYgGAQQgLAggBAWQgEgCAAgDg");
	this.shape_192.setTransform(1.6,-53.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#3A2711").s().p("AgCABQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBIABgDQACACAAAEQABABAAABQAAAAAAABQAAAAgBABQAAAAgBABg");
	this.shape_193.setTransform(-1.1,-49);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#5D4E3B").s().p("AgBAAIACgFIACAFIgDAGQgDgDACgDg");
	this.shape_194.setTransform(3.5,-54);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#594834").s().p("AADgFQAAAFgEAGQgDgJAHgCg");
	this.shape_195.setTransform(7.6,-62.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#746043").s().p("AgCAGIAAgFIAAgEIACgFIABAGQAFAFgGAGQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_196.setTransform(-0.8,-49.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#A6955E").s().p("AAAACIgCgCQACgEABgBQAAABACAEQABAEgCACQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_197.setTransform(2.5,-44.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#D3B586").s().p("AgCACQgDgCAFgFQAEAFAAAGQgFgCgBgCg");
	this.shape_198.setTransform(4.4,-40.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#53422E").s().p("AgDAJIABgMIABgSQADAAACAGIgBAHIgDAaIAAAEQgDgFAAgIg");
	this.shape_199.setTransform(-1.2,-46.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#43301B").s().p("AgRAfQAEgNALgSIAQggIAFgDQgFAPgKATIgRAgIgCAFQgEgBACgEg");
	this.shape_200.setTransform(5.4,-57.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#63523D").s().p("AAAAAIAAgBIABgCIgBAHIAAgEg");
	this.shape_201.setTransform(10.3,-176.4,0.688,1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#D4B380").s().p("AgEAIIAEgIQABgGAEgCQAAAHgFAIIgCACg");
	this.shape_202.setTransform(7.8,-178.2,0.688,1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#D7B682").s().p("AAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAIgDADg");
	this.shape_203.setTransform(7.5,-177.2,0.688,1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#F9FAF9").s().p("AgBABIAAgBIABgCIADgDIgFALIABgFg");
	this.shape_204.setTransform(10.4,-176.4,0.688,1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#93713B").s().p("AgCAGQAMgdACgLQAEAEAAAFQAAADgDAHQgDAFABAEIgFAJIgEAJIgDAKIgBAAIgDADIgKAKIANgdg");
	this.shape_205.setTransform(7.7,-179.5,0.688,1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#8E6B32").s().p("AAVEVQAAgGgGgFQgHgGgIAAQgIAAgLAJIABgBQAEgHADgMIAIgSQACgEACgCIAFACQACABADgBQADgCABgCIAAgGIABgYIgBAbQgCACgEgBQgEgDgBgKIAEgbQABgQgDgLQAAgJgDgGQgCgDABgHIAAgEIgBgDQAAgLgEgOIgLgXQgNgegMgTQgDgGgBgHIgBAAIAAABIABAFQgBACgEgCQgEgFADgLQAFgxAkhCIAJgTIAUgnQAKgWAFgSIAEgSIAAgMQAAgIgCgFIgCgEQABgCgCgIQgCgGADgEQAdA0gZBCQgCACgCALIgBABQgLASgTAmIgFALIgDAGQgCAEABADIgGATQgEANgBAHIgBAZQABAEgDAAIgBgBIADAHIgBAFQAAAEACABQAEADAAAFQAGAIADALQAAAFACACIAEAFQgBAEACADIAEAGQAmA/gGBEIAAAKQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgIALgCAPIgDAcIgCAEQgEADgBADIAAgCg");
	this.shape_206.setTransform(8.8,-204.1,0.688,1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#BC9B67").s().p("AgCgBIACgDIADAIQgDAAgCgFg");
	this.shape_207.setTransform(5.9,-80.8,0.692,1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#A7844C").s().p("AAAAGIAAgLQABADAAAIg");
	this.shape_208.setTransform(7.5,-78,0.692,1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#BF9F6B").s().p("AAAAGIAAgLQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAALg");
	this.shape_209.setTransform(4.3,-93.4,0.692,1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#B49564").s().p("AAAgHIABAAIAAAHQAAAEgBAEQAAgDAAgMg");
	this.shape_210.setTransform(7.5,-74.1,0.692,1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#B99965").s().p("AgBAGIABgLQAAAAABgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAFQAAAEgCACIAAABIgBgBg");
	this.shape_211.setTransform(4.4,-94.6,0.692,1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#8B8043").s().p("AgBACIgBgGIAFAAQgBAGgCACIAAABQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_212.setTransform(7.4,-68.3,0.692,1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#D0B283").s().p("AgBAHIAAgLIAAgCQADAGAAAHg");
	this.shape_213.setTransform(6.9,-76.5,0.692,1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#BC9D68").s().p("AAAANIAAgZQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABABIAAAZIgBABIAAgBg");
	this.shape_214.setTransform(7.5,-76.1,0.692,1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#CAAD7A").s().p("AgCAAIAEgIIACAFIgGANQgCgFACgFg");
	this.shape_215.setTransform(6.3,-67.9,0.692,1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#B59562").s().p("AAAAPIAAgeIABAAIAAAeIgBABIAAgBg");
	this.shape_216.setTransform(7.5,-70.3,0.692,1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#D2B380").s().p("AgCAaIgBgDQAHgdgFgTIAAgCQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAABQAEANgCAPIgEAcIgCgDg");
	this.shape_217.setTransform(6.9,-73,0.692,1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#947C58").s().p("AAAACQgBgCgDAAIAAgCIAEgCIAEAIIgBABQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_218.setTransform(6.2,-79.4,0.692,1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#5C4A33").s().p("AgBACIgDgGQADgCACADIADADIABACIgBAEIgBAAQgDAAgBgEg");
	this.shape_219.setTransform(6.3,-78.9,0.692,1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#624D30").s().p("AgCAAQgDgEAFgBQABAAABAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAABQAAAAAAAAQAAAAAAABQABAAAAAAIABACIgFADQABgBgCgFg");
	this.shape_220.setTransform(6.5,-77.4,0.692,1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#53412A").s().p("AAAAHIgEgNIACAAQACABACAFIADAFQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_221.setTransform(5.9,-80.4,0.692,1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#BE9E6B").s().p("AgEgHQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAAAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIABgDIAEAHIgGAEQgDgJAAgGg");
	this.shape_222.setTransform(5.2,-90.8,0.692,1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#594937").s().p("AAAABQAAgKgCgIQACgEACACIABALIgBADIAAANQAAAIgCAFIAAgUg");
	this.shape_223.setTransform(6.6,-75,0.692,1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#8F7650").s().p("AgGgKQAIABACAIQACACABAKIgDAAQgIgNgCgIg");
	this.shape_224.setTransform(4.4,-84.5,0.692,1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#4D3B23").s().p("AgEARIADgOQABgDAAgKQgBgJACgEQAFAIgBAQQgBARgFAGg");
	this.shape_225.setTransform(6.8,-73.1,0.692,1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#422E16").s().p("AAEAMIgMgXQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAFADADAHIAGALIgDAEIgCgBg");
	this.shape_226.setTransform(5.3,-82.2,0.692,1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#3A2711").s().p("AAAAiIAAgCQAFgbgLgnQAFAAABAFQABAGABABQgBADACAHQACAIAAADQACAEAAAGIAAAMIAAAGIgBAFQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAg");
	this.shape_227.setTransform(8.8,-116.4,0.692,1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#2E9E2E").s().p("AgKAAQACgYATgIIgDAHQACAMAAAXIgBAHQAAAEACADQgDAEAAAFQgRgJgBgYg");
	this.shape_228.setTransform(4.7,-114.9,0.692,1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#94723C").s().p("AgnBWIgBgDQAHgcAbgyQAdg5AHgRIADgNQAAgHAIACQABAIgEAJIgHAQIgVAqQgiBAgKAiIgCACQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_229.setTransform(6,-103,0.692,1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#3F2C16").s().p("AAXA3QgDgEgBgFIgDgGIgDgJQgEgJgIgNIgEgLQgEgHgFgDQgLgUgDgKIgBgDQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAQACgBAAgDQABgEABgCIAZAyQAPAdAGAWIACAGQABAEgDACg");
	this.shape_230.setTransform(4.8,-84.4,0.692,1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#1F972C").s().p("AgDAGIACgIQABgDAEgBIAAAJQgCADgCABQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_231.setTransform(5.2,-89.7,0.692,1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#118F2D").s().p("AgCANQgCgBgCgEIgCgJIAEgQQADABABAFIACAHIAEALIACADQABABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgDAEgDAAQgBAAgCgFg");
	this.shape_232.setTransform(6.7,-69.6,0.692,1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#B89864").s().p("AgBAEIACgHQACAEgDADg");
	this.shape_233.setTransform(1.2,-51.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#B59562").s().p("AAAAFQgCgEACgFIACAJg");
	this.shape_234.setTransform(1.7,-47.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#B29361").s().p("AgBAFIgBgFQABgCABgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAEgDAFg");
	this.shape_235.setTransform(0.7,-48.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#BC9D68").s().p("AAAAJIAAgQQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAQg");
	this.shape_236.setTransform(0.6,-46.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#59462E").s().p("AAAgLIABAAQACAPgDAIg");
	this.shape_237.setTransform(7.8,-71.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#BFAF76").s().p("AgCAGIAAgGQACgCAAgGIADAAQgBALgCAFg");
	this.shape_238.setTransform(7.8,-68.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#C8AD82").s().p("AgBAOQgBgSACgJIAAAFQAAAFACABQgCADAAAFIAAAIIAAABg");
	this.shape_239.setTransform(-1,-46.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#CCAE7D").s().p("AgBAOIgBgFQACgEgBgHQAAgIABgEQADAFgBAJIAAAOIgCABIgBgBg");
	this.shape_240.setTransform(8,-70.9);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#D6B682").s().p("AgRAmIAZg5QAGgLgBgGIADgEQAEgBgCAEQgEASgKAVIgTAng");
	this.shape_241.setTransform(5.9,-64);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#D3B380").s().p("AgaA/IACgHIgBgHIABgEQACgCAAgEIAAgGQATg1AcgvQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIgUAnQgLAYgGAQQgLAggBAWQgEgCAAgDg");
	this.shape_242.setTransform(1.6,-53.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#3A2711").s().p("AgCABQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBIABgDQACACAAAEQABABAAABQAAAAAAABQAAAAgBABQAAAAgBABg");
	this.shape_243.setTransform(-1.1,-49);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#5D4E3B").s().p("AgBAAIACgFIACAFIgDAGQgDgDACgDg");
	this.shape_244.setTransform(3.5,-54);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#BF9E68").s().p("AgCgDIADAAQACACAAAEQgEABgBgHg");
	this.shape_245.setTransform(3.5,-41.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#594834").s().p("AADgFQAAAFgEAGQgDgJAHgCg");
	this.shape_246.setTransform(7.6,-62.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#746043").s().p("AgCAGIAAgFIAAgEIACgFIABAGQAFAFgGAGQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_247.setTransform(-0.8,-49.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#A6955E").s().p("AAAACIgCgCQACgEABgBQAAABACAEQABAEgCACQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_248.setTransform(2.5,-44.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#1D942C").s().p("AAFADIgFgBQgBgCgGAAQADgCAEAAIAHAAQACAFgDAAIgBAAg");
	this.shape_249.setTransform(4.6,-73.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#D3B586").s().p("AgCACQgDgCAFgFQAEAFAAAGQgFgCgBgCg");
	this.shape_250.setTransform(4.4,-40.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#53422E").s().p("AgDAJIABgMIABgSQADAAACAGIgBAHIgDAaIAAAEQgDgFAAgIg");
	this.shape_251.setTransform(-1.2,-46.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#43301B").s().p("AgRAfQAEgNALgSIAQggIAFgDQgFAPgKATIgRAgIgCAFQgEgBACgEg");
	this.shape_252.setTransform(5.4,-57.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#05702C").s().p("AAFAZIgOgHQgLgPgBgIQAAgJAKgLIAEgBQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQgNAJAGAPQAHASAQABIAJgBIABACIgBABQgFAFgFAAIgGgCg");
	this.shape_253.setTransform(5.1,-71.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#169131").s().p("AgRAAIAAgLQADgCAFADQAJAIANgFIADABQADADgBADQgCAEgDAAQAAABgBAAQgBAAAAAAQgBABAAAAQAAAAgBABIgDADIgLACIgCABQgMAAACgNg");
	this.shape_254.setTransform(5.9,-68.1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#20972D").s().p("AgOAfQgCgCABgJIgBguQgBgFAFgDQAPgJAOALQgCACgEAAQgFABgCACQgHAIAAAHQgBAHAFAIIAGALIABANQABAHAHADQgGACgFAAQgKAAgJgIg");
	this.shape_255.setTransform(3.7,-70.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#4B3820").s().p("AADgEQAAAEgDAFQgEgFAHgEg");
	this.shape_256.setTransform(11.9,-216.4,0.654,0.88);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#D7B682").s().p("AABgEQAEgBgCAEIgBADIgCABIgDACg");
	this.shape_257.setTransform(9.6,-217.9,0.654,0.88);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#F9FAF9").s().p("AgFAMQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgDAFgIIAAABIAAgFQABgDACgBIADgDIgKAXg");
	this.shape_258.setTransform(12.2,-216.8,0.654,0.88);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#93713B").s().p("AgBAEQAMgdACgKQAEADAAAGQAAADgDAGQgDAGABAEIgFAIIgEAJIgDAKIgDAGIAAABQgHADgGAHIAPghg");
	this.shape_259.setTransform(9.8,-219.9,0.654,0.88);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#8E6B32").s().p("AAIEfIAAAAIAAgBQADgNgHgGQgJgIgPAIIgBAAIADgHQAEgHADgLIAIgTQACgEACgCIAFADQACABADgCQADgBABgDIAAgGIABgYIgBAcQgCABgEAAQgEgEgBgKIAEgbQABgPgDgMQAAgIgDgHQgCgDABgHIAAgEIgBgCQAAgMgEgOIgLgXQgNgdgMgUQgDgGgBgHIgBAAIAAABIABAFQgBACgEgCQgEgFADgKQAFgyAkhCIAJgTIAUgnQAKgVAFgSIAEgSIAAgNQAAgIgCgFIgCgDQABgDgCgIQgCgGADgEQAdA0gZBCQgCACgCALIgBABQgLASgTAmIgFALIgDAGQgCAEABADIgGATQgEANgBAHIgBAZQABAGgDgBIgBgBIADAGIgBAGQAAADACABQAEAEAAAEQAGAIADALQAAAFACACIAEAGQgBADACADIAEAGQAmA/gGBFIAAAJQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgIALgCAPIgDAcIgCAFQgFAEgBAEIgBADQgDAEgBAFIAAABIgHAAg");
	this.shape_260.setTransform(10.9,-241,0.654,0.88);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#63523D").s().p("AADgEQgDAIAAABQgEgHAHgCg");
	this.shape_261.setTransform(11.4,-108.7,0.643,1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#BC9B67").s().p("AgCgBIACgDIADAIQgDAAgCgFg");
	this.shape_262.setTransform(5.9,-80.8,0.692,1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#A7844C").s().p("AAAAGIAAgLQABADAAAIg");
	this.shape_263.setTransform(7.5,-78,0.692,1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#BF9F6B").s().p("AAAAGIAAgLQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAALg");
	this.shape_264.setTransform(4.3,-93.4,0.692,1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#B49564").s().p("AAAgHIABAAIAAAHQAAAEgBAEQAAgDAAgMg");
	this.shape_265.setTransform(7.5,-74.1,0.692,1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#B99965").s().p("AgBAGIABgLQAAAAABgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAFQAAAEgCACIAAABIgBgBg");
	this.shape_266.setTransform(4.4,-94.6,0.692,1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#8B8043").s().p("AgBACIgBgGIAFAAQgBAGgCACIAAABQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_267.setTransform(7.4,-68.3,0.692,1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#D0B283").s().p("AgBAHIAAgLIAAgCQADAGAAAHg");
	this.shape_268.setTransform(6.9,-76.5,0.692,1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#BC9D68").s().p("AAAANIAAgZQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABABIAAAZIgBABIAAgBg");
	this.shape_269.setTransform(7.5,-76.1,0.692,1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#CAAD7A").s().p("AgCAAIAEgIIACAFIgGANQgCgFACgFg");
	this.shape_270.setTransform(6.3,-67.9,0.692,1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#D4B380").s().p("AgEAHIAEgIQABgFAEgDQAAAJgGAKg");
	this.shape_271.setTransform(5.4,-65,0.692,1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#B59562").s().p("AAAAPIAAgeIABAAIAAAeIgBABIAAgBg");
	this.shape_272.setTransform(7.5,-70.3,0.692,1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#D2B380").s().p("AgCAaIgBgDQAHgdgFgTIAAgCQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAABQAEANgCAPIgEAcIgCgDg");
	this.shape_273.setTransform(6.9,-73,0.692,1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#947C58").s().p("AAAACQgBgCgDAAIAAgCIAEgCIAEAIIgBABQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_274.setTransform(6.2,-79.4,0.692,1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#5C4A33").s().p("AgBACIgDgGQADgCACADIADADIABACIgBAEIgBAAQgDAAgBgEg");
	this.shape_275.setTransform(6.3,-78.9,0.692,1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#624D30").s().p("AgCAAQgDgEAFgBQABAAABAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAABQAAAAAAAAQAAAAAAABQABAAAAAAIABACIgFADQABgBgCgFg");
	this.shape_276.setTransform(6.5,-77.4,0.692,1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#53412A").s().p("AAAAHIgEgNIACAAQACABACAFIADAFQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_277.setTransform(5.9,-80.4,0.692,1);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#BE9E6B").s().p("AgEgHQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAAAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIABgDIAEAHIgGAEQgDgJAAgGg");
	this.shape_278.setTransform(5.2,-90.8,0.692,1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#594937").s().p("AAAABQAAgKgCgIQACgEACACIABALIgBADIAAANQAAAIgCAFIAAgUg");
	this.shape_279.setTransform(6.6,-75,0.692,1);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#8F7650").s().p("AgGgKQAIABACAIQACACABAKIgDAAQgIgNgCgIg");
	this.shape_280.setTransform(4.4,-84.5,0.692,1);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#4D3B23").s().p("AgEARIADgOQABgDAAgKQgBgJACgEQAFAIgBAQQgBARgFAGg");
	this.shape_281.setTransform(6.8,-73.1,0.692,1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#422E16").s().p("AAEAMIgMgXQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAFADADAHIAGALIgDAEIgCgBg");
	this.shape_282.setTransform(5.3,-82.2,0.692,1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#3A2711").s().p("AAAAiIAAgCQAFgbgLgnQAFAAABAFQABAGABABQgBADACAHQACAIAAADQACAEAAAGIAAAMIAAAGIgBAFQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAg");
	this.shape_283.setTransform(8.8,-116.4,0.692,1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#2E9E2E").s().p("AgKAAQACgYATgIIgDAHQACAMAAAXIgBAHQAAAEACADQgDAEAAAFQgRgJgBgYg");
	this.shape_284.setTransform(4.7,-114.9,0.692,1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#94723C").s().p("AgnBWIgBgDQAHgcAbgyQAdg5AHgRIADgNQAAgHAIACQABAIgEAJIgHAQIgVAqQgiBAgKAiIgCACQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_285.setTransform(6,-103,0.692,1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#3F2C16").s().p("AAXA3QgDgEgBgFIgDgGIgDgJQgEgJgIgNIgEgLQgEgHgFgDQgLgUgDgKIgBgDQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAQACgBAAgDQABgEABgCIAZAyQAPAdAGAWIACAGQABAEgDACg");
	this.shape_286.setTransform(4.8,-84.4,0.692,1);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#1F972C").s().p("AgDAGIACgIQABgDAEgBIAAAJQgCADgCABQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_287.setTransform(5.2,-89.7,0.692,1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#118F2D").s().p("AgCANQgCgBgCgEIgCgJIAEgQQADABABAFIACAHIAEALIACADQABABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgDAEgDAAQgBAAgCgFg");
	this.shape_288.setTransform(6.7,-69.6,0.692,1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#B89864").s().p("AgBAEIACgHQACAEgDADg");
	this.shape_289.setTransform(1.2,-51.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#B59562").s().p("AAAAFQgCgEACgFIACAJg");
	this.shape_290.setTransform(1.7,-47.9);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#B29361").s().p("AgBAFIgBgFQABgCABgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAEgDAFg");
	this.shape_291.setTransform(0.7,-48.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#BC9D68").s().p("AAAAJIAAgQQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAQg");
	this.shape_292.setTransform(0.6,-46.9);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#59462E").s().p("AAAgLIABAAQACAPgDAIg");
	this.shape_293.setTransform(7.8,-71.2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#BFAF76").s().p("AgCAGIAAgGQACgCAAgGIADAAQgBALgCAFg");
	this.shape_294.setTransform(7.8,-68.7);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#C8AD82").s().p("AgBAOQgBgSACgJIAAAFQAAAFACABQgCADAAAFIAAAIIAAABg");
	this.shape_295.setTransform(-1,-46.3);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#CCAE7D").s().p("AgBAOIgBgFQACgEgBgHQAAgIABgEQADAFgBAJIAAAOIgCABIgBgBg");
	this.shape_296.setTransform(8,-70.9);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#D6B682").s().p("AgRAmIAZg5QAGgLgBgGIADgEQAEgBgCAEQgEASgKAVIgTAng");
	this.shape_297.setTransform(5.9,-64);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#D3B380").s().p("AgaA/IACgHIgBgHIABgEQACgCAAgEIAAgGQATg1AcgvQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIgUAnQgLAYgGAQQgLAggBAWQgEgCAAgDg");
	this.shape_298.setTransform(1.6,-53.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#3A2711").s().p("AgCABQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBIABgDQACACAAAEQABABAAABQAAAAAAABQAAAAgBABQAAAAgBABg");
	this.shape_299.setTransform(-1.1,-49);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#5D4E3B").s().p("AgBAAIACgFIACAFIgDAGQgDgDACgDg");
	this.shape_300.setTransform(3.5,-54);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#BF9E68").s().p("AgCgDIADAAQACACAAAEQgEABgBgHg");
	this.shape_301.setTransform(3.5,-41.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#594834").s().p("AADgFQAAAFgEAGQgDgJAHgCg");
	this.shape_302.setTransform(7.6,-62.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#746043").s().p("AgCAGIAAgFIAAgEIACgFIABAGQAFAFgGAGQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_303.setTransform(-0.8,-49.7);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#A6955E").s().p("AAAACIgCgCQACgEABgBQAAABACAEQABAEgCACQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_304.setTransform(2.5,-44.7);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#1D942C").s().p("AAFADIgFgBQgBgCgGAAQADgCAEAAIAHAAQACAFgDAAIgBAAg");
	this.shape_305.setTransform(4.6,-73.6);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#D3B586").s().p("AgCACQgDgCAFgFQAEAFAAAGQgFgCgBgCg");
	this.shape_306.setTransform(4.4,-40.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#53422E").s().p("AgDAJIABgMIABgSQADAAACAGIgBAHIgDAaIAAAEQgDgFAAgIg");
	this.shape_307.setTransform(-1.2,-46.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#43301B").s().p("AgRAfQAEgNALgSIAQggIAFgDQgFAPgKATIgRAgIgCAFQgEgBACgEg");
	this.shape_308.setTransform(5.4,-57.8);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#05702C").s().p("AAFAZIgOgHQgLgPgBgIQAAgJAKgLIAEgBQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQgNAJAGAPQAHASAQABIAJgBIABACIgBABQgFAFgFAAIgGgCg");
	this.shape_309.setTransform(5.1,-71.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#169131").s().p("AgRAAIAAgLQADgCAFADQAJAIANgFIADABQADADgBADQgCAEgDAAQAAABgBAAQgBAAAAAAQgBABAAAAQAAAAgBABIgDADIgLACIgCABQgMAAACgNg");
	this.shape_310.setTransform(5.9,-68.1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#20972D").s().p("AgOAfQgCgCABgJIgBguQgBgFAFgDQAPgJAOALQgCACgEAAQgFABgCACQgHAIAAAHQgBAHAFAIIAGALIABANQABAHAHADQgGACgFAAQgKAAgJgIg");
	this.shape_311.setTransform(3.7,-70.6);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#D7B682").s().p("AgEAIIAHgPQAEgBgCADIgFANIgEAAg");
	this.shape_312.setTransform(10.7,-252.2,0.462,1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#93713B").s().p("AgBAFQALgdACgLQAEAEAAAFQAAADgDAGQgCAGAAAEIgEAJIgEAJIgEAKIgGAOIgIABIAOgfg");
	this.shape_313.setTransform(10.9,-254.9,0.462,1);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#8E6B32").s().p("AgOEWIgKgBIAGgOQAEgHADgMIAIgSQACgEACgCIAFACQACABADgBQADgCABgCIAAgGIABgYIgBAbQgCACgEgBQgEgDgBgKIAEgbQABgQgDgLQAAgJgDgGQgCgDABgHIAAgEIgBgDQAAgLgEgOIgLgXQgNgegMgTQgDgGgBgHIgBAAIAAABIABAFQgBACgEgCQgEgFADgKQAFgyAkhCIAJgTIAUgnQAKgWAFgSIAEgSIAAgMQAAgIgCgFIgCgEQABgCgCgIQgCgGADgEQAdA0gZBCQgCACgCALIgBABQgLASgTAmIgFALIgDAGQgCAEABADIgGATQgEANgBAHIgBAZQABAFgDAAIgBgBIADAGIgBAFQAAAEACABQAEADAAAFQAGAIADALQAAAFACACIAEAFQgBAEACADIAEAGQAmA/gGBEIAAAKQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAAAQgIALgCAPIgDAaQgGABgFACQgKAFgHAOQgDgEgLgCg");
	this.shape_314.setTransform(11.7,-279.1,0.462,1);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#BC9B67").s().p("AgCgBIACgDIADAIQgDAAgCgFg");
	this.shape_315.setTransform(5.9,-80.8,0.692,1);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#A7844C").s().p("AAAAGIAAgLQABADAAAIg");
	this.shape_316.setTransform(7.5,-78,0.692,1);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#BF9F6B").s().p("AAAAGIAAgLQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAALg");
	this.shape_317.setTransform(4.3,-93.4,0.692,1);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#B49564").s().p("AAAgHIABAAIAAAHQAAAEgBAEQAAgDAAgMg");
	this.shape_318.setTransform(7.5,-74.1,0.692,1);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#B99965").s().p("AgBAGIABgLQAAAAABgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAFQAAAEgCACIAAABIgBgBg");
	this.shape_319.setTransform(4.4,-94.6,0.692,1);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#8B8043").s().p("AgBACIgBgGIAFAAQgBAGgCACIAAABQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_320.setTransform(7.4,-68.3,0.692,1);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#D0B283").s().p("AgBAHIAAgLIAAgCQADAGAAAHg");
	this.shape_321.setTransform(6.9,-76.5,0.692,1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#BC9D68").s().p("AAAANIAAgZQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABABIAAAZIgBABIAAgBg");
	this.shape_322.setTransform(7.5,-76.1,0.692,1);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#CAAD7A").s().p("AgCAAIAEgIIACAFIgGANQgCgFACgFg");
	this.shape_323.setTransform(6.3,-67.9,0.692,1);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#D4B380").s().p("AgEAHIAEgIQABgFAEgDQAAAJgGAKg");
	this.shape_324.setTransform(5.4,-65,0.692,1);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#B59562").s().p("AAAAPIAAgeIABAAIAAAeIgBABIAAgBg");
	this.shape_325.setTransform(7.5,-70.3,0.692,1);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#D2B380").s().p("AgCAaIgBgDQAHgdgFgTIAAgCQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAABQAEANgCAPIgEAcIgCgDg");
	this.shape_326.setTransform(6.9,-73,0.692,1);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#947C58").s().p("AAAACQgBgCgDAAIAAgCIAEgCIAEAIIgBABQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_327.setTransform(6.2,-79.4,0.692,1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#5C4A33").s().p("AgBACIgDgGQADgCACADIADADIABACIgBAEIgBAAQgDAAgBgEg");
	this.shape_328.setTransform(6.3,-78.9,0.692,1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#624D30").s().p("AgCAAQgDgEAFgBQABAAABAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAABQAAAAAAAAQAAAAAAABQABAAAAAAIABACIgFADQABgBgCgFg");
	this.shape_329.setTransform(6.5,-77.4,0.692,1);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#53412A").s().p("AAAAHIgEgNIACAAQACABACAFIADAFQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_330.setTransform(5.9,-80.4,0.692,1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#BE9E6B").s().p("AgEgHQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAAAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIABgDIAEAHIgGAEQgDgJAAgGg");
	this.shape_331.setTransform(5.2,-90.8,0.692,1);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#594937").s().p("AAAABQAAgKgCgIQACgEACACIABALIgBADIAAANQAAAIgCAFIAAgUg");
	this.shape_332.setTransform(6.6,-75,0.692,1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#8F7650").s().p("AgGgKQAIABACAIQACACABAKIgDAAQgIgNgCgIg");
	this.shape_333.setTransform(4.4,-84.5,0.692,1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#4D3B23").s().p("AgEARIADgOQABgDAAgKQgBgJACgEQAFAIgBAQQgBARgFAGg");
	this.shape_334.setTransform(6.8,-73.1,0.692,1);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#422E16").s().p("AAEAMIgMgXQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAFADADAHIAGALIgDAEIgCgBg");
	this.shape_335.setTransform(5.3,-82.2,0.692,1);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#3A2711").s().p("AAAAiIAAgCQAFgbgLgnQAFAAABAFQABAGABABQgBADACAHQACAIAAADQACAEAAAGIAAAMIAAAGIgBAFQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAg");
	this.shape_336.setTransform(8.8,-116.4,0.692,1);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#2E9E2E").s().p("AgKAAQACgYATgIIgDAHQACAMAAAXIgBAHQAAAEACADQgDAEAAAFQgRgJgBgYg");
	this.shape_337.setTransform(4.7,-114.9,0.692,1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#94723C").s().p("AgnBWIgBgDQAHgcAbgyQAdg5AHgRIADgNQAAgHAIACQABAIgEAJIgHAQIgVAqQgiBAgKAiIgCACQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_338.setTransform(6,-103,0.692,1);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#3F2C16").s().p("AAXA3QgDgEgBgFIgDgGIgDgJQgEgJgIgNIgEgLQgEgHgFgDQgLgUgDgKIgBgDQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAQACgBAAgDQABgEABgCIAZAyQAPAdAGAWIACAGQABAEgDACg");
	this.shape_339.setTransform(4.8,-84.4,0.692,1);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#1F972C").s().p("AgDAGIACgIQABgDAEgBIAAAJQgCADgCABQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_340.setTransform(5.2,-89.7,0.692,1);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#118F2D").s().p("AgCANQgCgBgCgEIgCgJIAEgQQADABABAFIACAHIAEALIACADQABABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgDAEgDAAQgBAAgCgFg");
	this.shape_341.setTransform(6.7,-69.6,0.692,1);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#B89864").s().p("AgBAEIACgHQACAEgDADg");
	this.shape_342.setTransform(1.2,-51.5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#B59562").s().p("AAAAFQgCgEACgFIACAJg");
	this.shape_343.setTransform(1.7,-47.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#B29361").s().p("AgBAFIgBgFQABgCABgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAEgDAFg");
	this.shape_344.setTransform(0.7,-48.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#BC9D68").s().p("AAAAJIAAgQQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAQg");
	this.shape_345.setTransform(0.6,-46.9);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#59462E").s().p("AAAgLIABAAQACAPgDAIg");
	this.shape_346.setTransform(7.8,-71.2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#BFAF76").s().p("AgCAGIAAgGQACgCAAgGIADAAQgBALgCAFg");
	this.shape_347.setTransform(7.8,-68.7);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#C8AD82").s().p("AgBAOQgBgSACgJIAAAFQAAAFACABQgCADAAAFIAAAIIAAABg");
	this.shape_348.setTransform(-1,-46.3);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#CCAE7D").s().p("AgBAOIgBgFQACgEgBgHQAAgIABgEQADAFgBAJIAAAOIgCABIgBgBg");
	this.shape_349.setTransform(8,-70.9);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#D6B682").s().p("AgRAmIAZg5QAGgLgBgGIADgEQAEgBgCAEQgEASgKAVIgTAng");
	this.shape_350.setTransform(5.9,-64);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#D3B380").s().p("AgaA/IACgHIgBgHIABgEQACgCAAgEIAAgGQATg1AcgvQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIgUAnQgLAYgGAQQgLAggBAWQgEgCAAgDg");
	this.shape_351.setTransform(1.6,-53.4);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#3A2711").s().p("AgCABQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBIABgDQACACAAAEQABABAAABQAAAAAAABQAAAAgBABQAAAAgBABg");
	this.shape_352.setTransform(-1.1,-49);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#5D4E3B").s().p("AgBAAIACgFIACAFIgDAGQgDgDACgDg");
	this.shape_353.setTransform(3.5,-54);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#BF9E68").s().p("AgCgDIADAAQACACAAAEQgEABgBgHg");
	this.shape_354.setTransform(3.5,-41.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#594834").s().p("AADgFQAAAFgEAGQgDgJAHgCg");
	this.shape_355.setTransform(7.6,-62.2);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#746043").s().p("AgCAGIAAgFIAAgEIACgFIABAGQAFAFgGAGQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_356.setTransform(-0.8,-49.7);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#A6955E").s().p("AAAACIgCgCQACgEABgBQAAABACAEQABAEgCACQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_357.setTransform(2.5,-44.7);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#1D942C").s().p("AAFADIgFgBQgBgCgGAAQADgCAEAAIAHAAQACAFgDAAIgBAAg");
	this.shape_358.setTransform(4.6,-73.6);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#D3B586").s().p("AgCACQgDgCAFgFQAEAFAAAGQgFgCgBgCg");
	this.shape_359.setTransform(4.4,-40.4);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#53422E").s().p("AgDAJIABgMIABgSQADAAACAGIgBAHIgDAaIAAAEQgDgFAAgIg");
	this.shape_360.setTransform(-1.2,-46.7);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#43301B").s().p("AgRAfQAEgNALgSIAQggIAFgDQgFAPgKATIgRAgIgCAFQgEgBACgEg");
	this.shape_361.setTransform(5.4,-57.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#05702C").s().p("AAFAZIgOgHQgLgPgBgIQAAgJAKgLIAEgBQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQgNAJAGAPQAHASAQABIAJgBIABACIgBABQgFAFgFAAIgGgCg");
	this.shape_362.setTransform(5.1,-71.1);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#169131").s().p("AgRAAIAAgLQADgCAFADQAJAIANgFIADABQADADgBADQgCAEgDAAQAAABgBAAQgBAAAAAAQgBABAAAAQAAAAgBABIgDADIgLACIgCABQgMAAACgNg");
	this.shape_363.setTransform(5.9,-68.1);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#20972D").s().p("AgOAfQgCgCABgJIgBguQgBgFAFgDQAPgJAOALQgCACgEAAQgFABgCACQgHAIAAAHQgBAHAFAIIAGALIABANQABAHAHADQgGACgFAAQgKAAgJgIg");
	this.shape_364.setTransform(3.7,-70.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_53,p:{x:1.4}},{t:this.shape_52,p:{x:53.7}},{t:this.shape_51,p:{x:2.4}},{t:this.shape_50,p:{scaleX:1,x:3.9,y:-70.6,scaleY:1}},{t:this.shape_49,p:{x:1.3}},{t:this.shape_48,p:{x:3.4}},{t:this.shape_47,p:{x:1.6}},{t:this.shape_46,p:{scaleX:1,x:6.1,y:-68.1,scaleY:1}},{t:this.shape_45,p:{scaleX:1,x:5.3,y:-71.1,scaleY:1}},{t:this.shape_44,p:{scaleX:1,x:5.7,y:-57.8,scaleY:1}},{t:this.shape_43,p:{x:7.5}},{t:this.shape_42,p:{x:-1,y:-46.7,scaleX:1,scaleY:1}},{t:this.shape_41,p:{x:2.3}},{t:this.shape_40,p:{x:1.2}},{t:this.shape_39,p:{x:2.4}},{t:this.shape_38,p:{scaleX:1,x:4.6,y:-40.4,scaleY:1}},{t:this.shape_37,p:{scaleX:1,x:4.9,y:-73.6,scaleY:1}},{t:this.shape_36,p:{scaleX:1,x:2.7,y:-44.7,scaleY:1}},{t:this.shape_35,p:{x:-0.6,y:-49.7,scaleX:1,scaleY:1}},{t:this.shape_34,p:{scaleX:1,x:7.9,y:-62.2,scaleY:1}},{t:this.shape_33,p:{scaleX:1,x:3.8,y:-41.8,scaleY:1}},{t:this.shape_32,p:{scaleX:1,x:3.7,y:-54,scaleY:1}},{t:this.shape_31,p:{x:-0.9,y:-49,scaleX:1,scaleY:1}},{t:this.shape_30,p:{scaleX:1,x:1.8,y:-53.4,scaleY:1}},{t:this.shape_29,p:{scaleX:1,x:6.1,y:-64,scaleY:1}},{t:this.shape_28,p:{scaleX:1,x:8.2,y:-70.9,scaleY:1}},{t:this.shape_27,p:{x:-0.7,y:-46.3,scaleX:1,scaleY:1}},{t:this.shape_26,p:{scaleX:1,x:8.1,y:-68.7,scaleY:1}},{t:this.shape_25,p:{scaleX:1,x:8.1,y:-71.2,scaleY:1}},{t:this.shape_24,p:{x:53.6}},{t:this.shape_23,p:{x:0.9,y:-46.9,scaleX:1,scaleY:1}},{t:this.shape_22,p:{x:1.2}},{t:this.shape_21,p:{x:1,y:-48.2,scaleX:1,scaleY:1}},{t:this.shape_20,p:{x:1.9,y:-47.9,scaleX:1,scaleY:1}},{t:this.shape_19,p:{x:1.1}},{t:this.shape_18,p:{scaleX:1,x:1.5,y:-51.5,scaleY:1}},{t:this.shape_17,p:{x:8.8}},{t:this.shape_16,p:{x:6.3}},{t:this.shape_15,p:{scaleX:1,x:5.4,y:-73.4,scaleY:1}},{t:this.shape_14,p:{x:8.8}},{t:this.shape_13,p:{x:9.1}},{t:this.shape_12,p:{scaleX:1,x:5.8,y:-76.4,scaleY:1}},{t:this.shape_11,p:{scaleX:1,x:5.5,y:-75.7,scaleY:1}},{t:this.shape_10,p:{scaleX:1,x:5.7,y:-73,scaleY:1}},{t:this.shape_9,p:{scaleX:1,x:7.3,y:-73.6,scaleY:1}},{t:this.shape_8,p:{x:7.6}},{t:this.shape_7,p:{scaleX:1,x:7.4,y:-74.9,scaleY:1}},{t:this.shape_6,p:{scaleX:1,x:8.3,y:-74.6,scaleY:1}},{t:this.shape_5,p:{x:7.5}},{t:this.shape_4,p:{x:106.6,y:-90.4}},{t:this.shape_3,p:{x:106.6,y:-90.4}}]},2).to({state:[{t:this.shape_53,p:{x:1.4}},{t:this.shape_52,p:{x:53.7}},{t:this.shape_51,p:{x:2.4}},{t:this.shape_108,p:{scaleX:1,x:3.9,y:-70.6,scaleY:1}},{t:this.shape_49,p:{x:1.3}},{t:this.shape_48,p:{x:3.4}},{t:this.shape_47,p:{x:1.6}},{t:this.shape_107,p:{scaleX:1,x:6.1,y:-68.1,scaleY:1}},{t:this.shape_106,p:{scaleX:1,x:5.3,y:-71.1,scaleY:1}},{t:this.shape_105,p:{scaleX:1,x:5.7,y:-57.8,scaleY:1}},{t:this.shape_43,p:{x:7.5}},{t:this.shape_104,p:{x:-1,y:-46.7,scaleX:1}},{t:this.shape_41,p:{x:2.3}},{t:this.shape_40,p:{x:1.2}},{t:this.shape_39,p:{x:2.4}},{t:this.shape_103,p:{scaleX:1,x:4.6,y:-40.4,scaleY:1}},{t:this.shape_102,p:{scaleX:1,x:4.9,y:-73.6,scaleY:1}},{t:this.shape_101,p:{scaleX:1,x:2.7,y:-44.7,scaleY:1}},{t:this.shape_100,p:{x:-0.6,y:-49.7,scaleX:1}},{t:this.shape_99,p:{scaleX:1,x:7.9,y:-62.2,scaleY:1}},{t:this.shape_98,p:{scaleX:1,x:3.8,y:-41.8,scaleY:1}},{t:this.shape_97,p:{scaleX:1,x:3.7,y:-54,scaleY:1}},{t:this.shape_96,p:{x:-0.9,y:-49,scaleX:1}},{t:this.shape_95,p:{scaleX:1,x:1.8,y:-53.4,scaleY:1}},{t:this.shape_94,p:{scaleX:1,x:6.1,y:-64,scaleY:1}},{t:this.shape_93,p:{scaleX:1,x:8.2,y:-70.9,scaleY:1}},{t:this.shape_92,p:{x:-0.7,y:-46.3,scaleX:1}},{t:this.shape_91,p:{scaleX:1,x:8.1,y:-68.7,scaleY:1}},{t:this.shape_90,p:{scaleX:1,x:8.1,y:-71.2,scaleY:1}},{t:this.shape_24,p:{x:53.6}},{t:this.shape_89,p:{x:0.9,y:-46.9,scaleX:1}},{t:this.shape_22,p:{x:1.2}},{t:this.shape_88,p:{x:1,y:-48.2,scaleX:1}},{t:this.shape_87,p:{x:1.9,y:-47.9,scaleX:1}},{t:this.shape_19,p:{x:1.1}},{t:this.shape_86,p:{scaleX:1,x:1.5,y:-51.5,scaleY:1}},{t:this.shape_17,p:{x:8.8}},{t:this.shape_16,p:{x:6.3}},{t:this.shape_42,p:{x:5.4,y:-73.4,scaleX:1,scaleY:1}},{t:this.shape_14,p:{x:8.8}},{t:this.shape_13,p:{x:9.1}},{t:this.shape_35,p:{x:5.8,y:-76.4,scaleX:1,scaleY:1}},{t:this.shape_31,p:{x:5.5,y:-75.7,scaleX:1,scaleY:1}},{t:this.shape_27,p:{x:5.7,y:-73,scaleX:1,scaleY:1}},{t:this.shape_23,p:{x:7.3,y:-73.6,scaleX:1,scaleY:1}},{t:this.shape_8,p:{x:7.6}},{t:this.shape_21,p:{x:7.4,y:-74.9,scaleX:1,scaleY:1}},{t:this.shape_20,p:{x:8.3,y:-74.6,scaleX:1,scaleY:1}},{t:this.shape_5,p:{x:7.5}},{t:this.shape_85,p:{x:6.7}},{t:this.shape_84,p:{scaleX:0.692,x:7,y:-69.6,scaleY:1}},{t:this.shape_83,p:{x:5.7}},{t:this.shape_82,p:{scaleX:0.692,x:5.5,y:-89.7,scaleY:1}},{t:this.shape_50,p:{scaleX:0.692,x:6.5,y:-114.7,scaleY:1}},{t:this.shape_81,p:{scaleX:0.692,x:5.1,y:-84.4,scaleY:1}},{t:this.shape_80,p:{scaleX:0.692,x:6.2,y:-103,scaleY:1}},{t:this.shape_79,p:{scaleX:0.692,x:4.9,y:-114.9,scaleY:1}},{t:this.shape_46,p:{scaleX:0.692,x:8.1,y:-112.3,scaleY:1}},{t:this.shape_45,p:{scaleX:0.692,x:7.5,y:-115.2,scaleY:1}},{t:this.shape_44,p:{scaleX:0.692,x:7.8,y:-101.9,scaleY:1}},{t:this.shape_78,p:{scaleX:0.692,x:9,y:-116.4,scaleY:1}},{t:this.shape_15,p:{scaleX:0.692,x:3.2,y:-90.9,scaleY:1}},{t:this.shape_77,p:{scaleX:0.692,x:5.5,y:-82.2,scaleY:1}},{t:this.shape_76,p:{scaleX:0.692,x:7,y:-73.1,scaleY:1}},{t:this.shape_75,p:{scaleX:0.692,x:4.7,y:-84.5,scaleY:1}},{t:this.shape_74,p:{scaleX:0.692,x:6.9,y:-75,scaleY:1}},{t:this.shape_73,p:{scaleX:0.692,x:5.5,y:-90.8,scaleY:1}},{t:this.shape_38,p:{scaleX:0.692,x:7,y:-84.5,scaleY:1}},{t:this.shape_37,p:{scaleX:0.692,x:7.2,y:-117.8,scaleY:1}},{t:this.shape_72,p:{scaleX:0.692,x:6.1,y:-80.4,scaleY:1}},{t:this.shape_71,p:{scaleX:0.692,x:6.8,y:-77.4,scaleY:1}},{t:this.shape_70,p:{scaleX:0.692,x:6.5,y:-78.9,scaleY:1}},{t:this.shape_36,p:{scaleX:0.692,x:5.7,y:-88.8,scaleY:1}},{t:this.shape_12,p:{scaleX:0.692,x:3.4,y:-93.9,scaleY:1}},{t:this.shape_34,p:{scaleX:0.692,x:9.3,y:-106.3,scaleY:1}},{t:this.shape_33,p:{scaleX:0.692,x:6.4,y:-86,scaleY:1}},{t:this.shape_32,p:{scaleX:0.692,x:6.4,y:-98.2,scaleY:1}},{t:this.shape_69,p:{scaleX:0.692,x:6.5,y:-79.4,scaleY:1}},{t:this.shape_11,p:{scaleX:0.692,x:3.2,y:-93.2,scaleY:1}},{t:this.shape_30,p:{scaleX:0.692,x:5.1,y:-97.5,scaleY:1}},{t:this.shape_68,p:{x:8.3}},{t:this.shape_29,p:{scaleX:0.692,x:8.1,y:-108.2,scaleY:1}},{t:this.shape_67,p:{x:5.3}},{t:this.shape_66,p:{scaleX:0.692,x:7.2,y:-73,scaleY:1}},{t:this.shape_28,p:{scaleX:0.692,x:9.5,y:-115.1,scaleY:1}},{t:this.shape_65,p:{scaleX:0.692,x:7.7,y:-70.3,scaleY:1}},{t:this.shape_64,p:{scaleX:0.692,x:5.7,y:-65,scaleY:1}},{t:this.shape_63,p:{scaleX:0.692,x:6.5,y:-67.9,scaleY:1}},{t:this.shape_10,p:{scaleX:0.692,x:3.3,y:-90.4,scaleY:1}},{t:this.shape_26,p:{scaleX:0.692,x:9.4,y:-112.8,scaleY:1}},{t:this.shape_62,p:{scaleX:0.692,x:7.8,y:-76.1,scaleY:1}},{t:this.shape_25,p:{scaleX:0.692,x:9.4,y:-115.4,scaleY:1}},{t:this.shape_61,p:{scaleX:0.692,x:7.2,y:-76.5,scaleY:1}},{t:this.shape_60,p:{scaleX:0.692,x:7.6,y:-68.3,scaleY:1}},{t:this.shape_9,p:{scaleX:0.692,x:4.4,y:-91.1,scaleY:1}},{t:this.shape_59,p:{scaleX:0.692,x:4.7,y:-94.6,scaleY:1}},{t:this.shape_58,p:{scaleX:0.692,x:7.8,y:-74.1,scaleY:1}},{t:this.shape_7,p:{scaleX:0.692,x:4.5,y:-92.4,scaleY:1}},{t:this.shape_57,p:{x:8.1}},{t:this.shape_6,p:{scaleX:0.692,x:5.2,y:-92,scaleY:1}},{t:this.shape_56,p:{scaleX:0.692,x:4.6,y:-93.4,scaleY:1}},{t:this.shape_55,p:{scaleX:0.692,x:7.7,y:-78,scaleY:1}},{t:this.shape_18,p:{scaleX:0.692,x:4.8,y:-95.6,scaleY:1}},{t:this.shape_54,p:{scaleX:0.692,x:6.1,y:-80.8,scaleY:1}}]},2).to({state:[{t:this.shape_53,p:{x:1.4}},{t:this.shape_52,p:{x:53.7}},{t:this.shape_51,p:{x:2.4}},{t:this.shape_164,p:{x:3.9,scaleX:1,y:-70.6}},{t:this.shape_49,p:{x:1.3}},{t:this.shape_48,p:{x:3.4}},{t:this.shape_47,p:{x:1.6}},{t:this.shape_163,p:{x:6.1,scaleX:1,y:-68.1}},{t:this.shape_162,p:{x:5.3,scaleX:1,y:-71.1}},{t:this.shape_161,p:{scaleX:1,x:5.7,y:-57.8}},{t:this.shape_43,p:{x:7.5}},{t:this.shape_160,p:{x:-1,y:-46.7,scaleX:1}},{t:this.shape_41,p:{x:2.3}},{t:this.shape_40,p:{x:1.2}},{t:this.shape_39,p:{x:2.4}},{t:this.shape_159,p:{scaleX:1,x:4.6,y:-40.4}},{t:this.shape_158,p:{x:4.9,scaleX:1,y:-73.6}},{t:this.shape_157,p:{scaleX:1,x:2.7,y:-44.7}},{t:this.shape_156,p:{x:-0.6,y:-49.7,scaleX:1}},{t:this.shape_155,p:{scaleX:1,x:7.9,y:-62.2}},{t:this.shape_154,p:{x:3.8,scaleX:1,y:-41.8}},{t:this.shape_153,p:{scaleX:1,x:3.7,y:-54}},{t:this.shape_152,p:{x:-0.9,y:-49,scaleX:1}},{t:this.shape_151,p:{scaleX:1,x:1.8,y:-53.4}},{t:this.shape_150,p:{x:6.1,scaleX:1,y:-64}},{t:this.shape_149,p:{x:8.2,scaleX:1,y:-70.9}},{t:this.shape_148,p:{x:-0.7,y:-46.3,scaleX:1}},{t:this.shape_147,p:{x:8.1,scaleX:1,y:-68.7}},{t:this.shape_146,p:{x:8.1,scaleX:1,y:-71.2}},{t:this.shape_24,p:{x:53.6}},{t:this.shape_145,p:{x:0.9,y:-46.9,scaleX:1}},{t:this.shape_22,p:{x:1.2}},{t:this.shape_144,p:{x:1,y:-48.2,scaleX:1}},{t:this.shape_143,p:{x:1.9,y:-47.9,scaleX:1}},{t:this.shape_19,p:{x:1.1}},{t:this.shape_142,p:{scaleX:1,x:1.5,y:-51.5}},{t:this.shape_17,p:{x:8.8}},{t:this.shape_16,p:{x:6.3}},{t:this.shape_104,p:{x:5.4,y:-73.4,scaleX:1}},{t:this.shape_14,p:{x:8.8}},{t:this.shape_13,p:{x:9.1}},{t:this.shape_100,p:{x:5.8,y:-76.4,scaleX:1}},{t:this.shape_96,p:{x:5.5,y:-75.7,scaleX:1}},{t:this.shape_92,p:{x:5.7,y:-73,scaleX:1}},{t:this.shape_89,p:{x:7.3,y:-73.6,scaleX:1}},{t:this.shape_8,p:{x:7.6}},{t:this.shape_88,p:{x:7.4,y:-74.9,scaleX:1}},{t:this.shape_87,p:{x:8.3,y:-74.6,scaleX:1}},{t:this.shape_5,p:{x:7.5}},{t:this.shape_85,p:{x:6.7}},{t:this.shape_141,p:{x:7,scaleX:0.692,y:-69.6,scaleY:1}},{t:this.shape_83,p:{x:5.7}},{t:this.shape_140,p:{scaleX:0.692,x:5.5,y:-89.7,scaleY:1}},{t:this.shape_108,p:{scaleX:0.692,x:6.5,y:-114.7,scaleY:1}},{t:this.shape_139,p:{scaleX:0.692,x:5.1,y:-84.4,scaleY:1}},{t:this.shape_138,p:{x:6.2,scaleX:0.692,y:-103,scaleY:1}},{t:this.shape_137,p:{x:4.9,scaleX:0.692,y:-114.9,scaleY:1}},{t:this.shape_107,p:{scaleX:0.692,x:8.1,y:-112.3,scaleY:1}},{t:this.shape_106,p:{scaleX:0.692,x:7.5,y:-115.2,scaleY:1}},{t:this.shape_105,p:{scaleX:0.692,x:7.8,y:-101.9,scaleY:1}},{t:this.shape_136,p:{x:9,scaleX:0.692,y:-116.4,scaleY:1}},{t:this.shape_42,p:{x:3.2,y:-90.9,scaleX:0.692,scaleY:1}},{t:this.shape_135,p:{scaleX:0.692,x:5.5,y:-82.2,scaleY:1}},{t:this.shape_134,p:{x:7,scaleX:0.692,y:-73.1,scaleY:1}},{t:this.shape_133,p:{scaleX:0.692,x:4.7,y:-84.5,scaleY:1}},{t:this.shape_132,p:{scaleX:0.692,x:6.9,y:-75,scaleY:1}},{t:this.shape_131,p:{scaleX:0.692,x:5.5,y:-90.8,scaleY:1}},{t:this.shape_103,p:{scaleX:0.692,x:7,y:-84.5,scaleY:1}},{t:this.shape_102,p:{scaleX:0.692,x:7.2,y:-117.8,scaleY:1}},{t:this.shape_130,p:{scaleX:0.692,x:6.1,y:-80.4,scaleY:1}},{t:this.shape_129,p:{scaleX:0.692,x:6.8,y:-77.4,scaleY:1}},{t:this.shape_128,p:{scaleX:0.692,x:6.5,y:-78.9,scaleY:1}},{t:this.shape_101,p:{scaleX:0.692,x:5.7,y:-88.8,scaleY:1}},{t:this.shape_35,p:{x:3.4,y:-93.9,scaleX:0.692,scaleY:1}},{t:this.shape_99,p:{scaleX:0.692,x:9.3,y:-106.3,scaleY:1}},{t:this.shape_98,p:{scaleX:0.692,x:6.4,y:-86,scaleY:1}},{t:this.shape_97,p:{scaleX:0.692,x:6.4,y:-98.2,scaleY:1}},{t:this.shape_127,p:{scaleX:0.692,x:6.5,y:-79.4,scaleY:1}},{t:this.shape_31,p:{x:3.2,y:-93.2,scaleX:0.692,scaleY:1}},{t:this.shape_95,p:{scaleX:0.692,x:5.1,y:-97.5,scaleY:1}},{t:this.shape_68,p:{x:8.3}},{t:this.shape_94,p:{scaleX:0.692,x:8.1,y:-108.2,scaleY:1}},{t:this.shape_67,p:{x:5.3}},{t:this.shape_126,p:{x:7.2,scaleX:0.692,y:-73,scaleY:1}},{t:this.shape_93,p:{scaleX:0.692,x:9.5,y:-115.1,scaleY:1}},{t:this.shape_125,p:{x:7.7,scaleX:0.692,y:-70.3,scaleY:1}},{t:this.shape_124,p:{x:5.7,scaleX:0.692,y:-65,scaleY:1}},{t:this.shape_123,p:{x:6.5,scaleX:0.692,y:-67.9,scaleY:1}},{t:this.shape_27,p:{x:3.3,y:-90.4,scaleX:0.692,scaleY:1}},{t:this.shape_91,p:{scaleX:0.692,x:9.4,y:-112.8,scaleY:1}},{t:this.shape_122,p:{scaleX:0.692,x:7.8,y:-76.1,scaleY:1}},{t:this.shape_90,p:{scaleX:0.692,x:9.4,y:-115.4,scaleY:1}},{t:this.shape_121,p:{scaleX:0.692,x:7.2,y:-76.5,scaleY:1}},{t:this.shape_120,p:{x:7.6,scaleX:0.692,y:-68.3,scaleY:1}},{t:this.shape_23,p:{x:4.4,y:-91.1,scaleX:0.692,scaleY:1}},{t:this.shape_119,p:{scaleX:0.692,x:4.7,y:-94.6,scaleY:1}},{t:this.shape_118,p:{x:7.8,scaleX:0.692,y:-74.1,scaleY:1}},{t:this.shape_21,p:{x:4.5,y:-92.4,scaleX:0.692,scaleY:1}},{t:this.shape_57,p:{x:8.1}},{t:this.shape_20,p:{x:5.2,y:-92,scaleX:0.692,scaleY:1}},{t:this.shape_117,p:{scaleX:0.692,x:4.6,y:-93.4,scaleY:1}},{t:this.shape_116,p:{scaleX:0.692,x:7.7,y:-78,scaleY:1}},{t:this.shape_86,p:{scaleX:0.692,x:4.8,y:-95.6,scaleY:1}},{t:this.shape_115,p:{scaleX:0.692,x:6.1,y:-80.8,scaleY:1}},{t:this.shape_4,p:{x:-0.8,y:-137.6}},{t:this.shape_3,p:{x:-0.9,y:-137.6}},{t:this.shape_114},{t:this.shape_84,p:{scaleX:0.643,x:10.6,y:-115.2,scaleY:1}},{t:this.shape_113,p:{x:9.4}},{t:this.shape_82,p:{scaleX:0.643,x:9.2,y:-135.3,scaleY:1}},{t:this.shape_50,p:{scaleX:0.643,x:10.2,y:-160.4,scaleY:1}},{t:this.shape_81,p:{scaleX:0.643,x:8.8,y:-130,scaleY:1}},{t:this.shape_80,p:{scaleX:0.643,x:9.9,y:-148.7,scaleY:1}},{t:this.shape_79,p:{scaleX:0.643,x:8.7,y:-160.6,scaleY:1}},{t:this.shape_46,p:{scaleX:0.643,x:11.6,y:-157.9,scaleY:1}},{t:this.shape_45,p:{scaleX:0.643,x:11.1,y:-160.9,scaleY:1}},{t:this.shape_44,p:{scaleX:0.643,x:11.3,y:-147.6,scaleY:1}},{t:this.shape_78,p:{scaleX:0.643,x:12.5,y:-162.1,scaleY:1}},{t:this.shape_15,p:{scaleX:0.643,x:7,y:-136.5,scaleY:1}},{t:this.shape_77,p:{scaleX:0.643,x:9.3,y:-127.9,scaleY:1}},{t:this.shape_76,p:{scaleX:0.643,x:10.6,y:-118.8,scaleY:1}},{t:this.shape_75,p:{scaleX:0.643,x:8.4,y:-130.2,scaleY:1}},{t:this.shape_74,p:{scaleX:0.643,x:10.5,y:-120.6,scaleY:1}},{t:this.shape_73,p:{scaleX:0.643,x:9.2,y:-136.4,scaleY:1}},{t:this.shape_38,p:{scaleX:0.643,x:10.6,y:-130.2,scaleY:1}},{t:this.shape_37,p:{scaleX:0.643,x:10.8,y:-163.4,scaleY:1}},{t:this.shape_72,p:{scaleX:0.643,x:9.8,y:-126,scaleY:1}},{t:this.shape_71,p:{scaleX:0.643,x:10.4,y:-123,scaleY:1}},{t:this.shape_70,p:{scaleX:0.643,x:10.2,y:-124.6,scaleY:1}},{t:this.shape_36,p:{scaleX:0.643,x:9.4,y:-134.5,scaleY:1}},{t:this.shape_12,p:{scaleX:0.643,x:7.3,y:-139.5,scaleY:1}},{t:this.shape_34,p:{scaleX:0.643,x:12.7,y:-152,scaleY:1}},{t:this.shape_33,p:{scaleX:0.643,x:10.1,y:-131.6,scaleY:1}},{t:this.shape_32,p:{scaleX:0.643,x:10.1,y:-143.8,scaleY:1}},{t:this.shape_69,p:{scaleX:0.643,x:10.2,y:-125,scaleY:1}},{t:this.shape_11,p:{scaleX:0.643,x:7.1,y:-138.8,scaleY:1}},{t:this.shape_30,p:{scaleX:0.643,x:8.9,y:-143.2,scaleY:1}},{t:this.shape_112,p:{x:11.7}},{t:this.shape_29,p:{scaleX:0.643,x:11.6,y:-153.8,scaleY:1}},{t:this.shape_111,p:{x:9}},{t:this.shape_66,p:{scaleX:0.643,x:10.8,y:-118.6,scaleY:1}},{t:this.shape_28,p:{scaleX:0.643,x:13,y:-160.7,scaleY:1}},{t:this.shape_65,p:{scaleX:0.643,x:11.3,y:-116,scaleY:1}},{t:this.shape_64,p:{scaleX:0.643,x:9.4,y:-110.6,scaleY:1}},{t:this.shape_63,p:{scaleX:0.643,x:10.2,y:-113.5,scaleY:1}},{t:this.shape_10,p:{scaleX:0.643,x:7.2,y:-136.1,scaleY:1}},{t:this.shape_26,p:{scaleX:0.643,x:12.9,y:-158.5,scaleY:1}},{t:this.shape_62,p:{scaleX:0.643,x:11.3,y:-121.8,scaleY:1}},{t:this.shape_25,p:{scaleX:0.643,x:12.9,y:-161,scaleY:1}},{t:this.shape_61,p:{scaleX:0.643,x:10.8,y:-122.2,scaleY:1}},{t:this.shape_60,p:{scaleX:0.643,x:11.2,y:-114,scaleY:1}},{t:this.shape_9,p:{scaleX:0.643,x:8.2,y:-136.7,scaleY:1}},{t:this.shape_59,p:{scaleX:0.643,x:8.5,y:-140.2,scaleY:1}},{t:this.shape_58,p:{scaleX:0.643,x:11.3,y:-119.7,scaleY:1}},{t:this.shape_7,p:{scaleX:0.643,x:8.3,y:-138,scaleY:1}},{t:this.shape_110,p:{x:11.4}},{t:this.shape_109,p:{x:11.7,scaleX:0.643,scaleY:1,y:-108.7}},{t:this.shape_6,p:{scaleX:0.643,x:8.9,y:-137.7,scaleY:1}},{t:this.shape_56,p:{scaleX:0.643,x:8.4,y:-139.1,scaleY:1}},{t:this.shape_55,p:{scaleX:0.643,x:11.3,y:-123.7,scaleY:1}},{t:this.shape_18,p:{scaleX:0.643,x:8.6,y:-141.3,scaleY:1}},{t:this.shape_54,p:{scaleX:0.643,x:9.8,y:-126.5,scaleY:1}}]},4).to({state:[{t:this.shape_53,p:{x:1.4}},{t:this.shape_52,p:{x:53.7}},{t:this.shape_51,p:{x:2.4}},{t:this.shape_164,p:{x:3.9,scaleX:1,y:-70.6}},{t:this.shape_49,p:{x:1.3}},{t:this.shape_48,p:{x:3.4}},{t:this.shape_47,p:{x:1.6}},{t:this.shape_163,p:{x:6.1,scaleX:1,y:-68.1}},{t:this.shape_162,p:{x:5.3,scaleX:1,y:-71.1}},{t:this.shape_161,p:{scaleX:1,x:5.7,y:-57.8}},{t:this.shape_43,p:{x:7.5}},{t:this.shape_160,p:{x:-1,y:-46.7,scaleX:1}},{t:this.shape_41,p:{x:2.3}},{t:this.shape_40,p:{x:1.2}},{t:this.shape_39,p:{x:2.4}},{t:this.shape_159,p:{scaleX:1,x:4.6,y:-40.4}},{t:this.shape_158,p:{x:4.9,scaleX:1,y:-73.6}},{t:this.shape_157,p:{scaleX:1,x:2.7,y:-44.7}},{t:this.shape_156,p:{x:-0.6,y:-49.7,scaleX:1}},{t:this.shape_155,p:{scaleX:1,x:7.9,y:-62.2}},{t:this.shape_154,p:{x:3.8,scaleX:1,y:-41.8}},{t:this.shape_153,p:{scaleX:1,x:3.7,y:-54}},{t:this.shape_152,p:{x:-0.9,y:-49,scaleX:1}},{t:this.shape_151,p:{scaleX:1,x:1.8,y:-53.4}},{t:this.shape_150,p:{x:6.1,scaleX:1,y:-64}},{t:this.shape_149,p:{x:8.2,scaleX:1,y:-70.9}},{t:this.shape_148,p:{x:-0.7,y:-46.3,scaleX:1}},{t:this.shape_147,p:{x:8.1,scaleX:1,y:-68.7}},{t:this.shape_146,p:{x:8.1,scaleX:1,y:-71.2}},{t:this.shape_24,p:{x:53.6}},{t:this.shape_145,p:{x:0.9,y:-46.9,scaleX:1}},{t:this.shape_22,p:{x:1.2}},{t:this.shape_144,p:{x:1,y:-48.2,scaleX:1}},{t:this.shape_143,p:{x:1.9,y:-47.9,scaleX:1}},{t:this.shape_19,p:{x:1.1}},{t:this.shape_142,p:{scaleX:1,x:1.5,y:-51.5}},{t:this.shape_17,p:{x:8.8}},{t:this.shape_16,p:{x:6.3}},{t:this.shape_104,p:{x:5.4,y:-73.4,scaleX:1}},{t:this.shape_14,p:{x:8.8}},{t:this.shape_13,p:{x:9.1}},{t:this.shape_100,p:{x:5.8,y:-76.4,scaleX:1}},{t:this.shape_96,p:{x:5.5,y:-75.7,scaleX:1}},{t:this.shape_92,p:{x:5.7,y:-73,scaleX:1}},{t:this.shape_89,p:{x:7.3,y:-73.6,scaleX:1}},{t:this.shape_8,p:{x:7.6}},{t:this.shape_88,p:{x:7.4,y:-74.9,scaleX:1}},{t:this.shape_87,p:{x:8.3,y:-74.6,scaleX:1}},{t:this.shape_5,p:{x:7.5}},{t:this.shape_85,p:{x:6.7}},{t:this.shape_141,p:{x:7,scaleX:0.692,y:-69.6,scaleY:1}},{t:this.shape_83,p:{x:5.7}},{t:this.shape_140,p:{scaleX:0.692,x:5.5,y:-89.7,scaleY:1}},{t:this.shape_108,p:{scaleX:0.692,x:6.5,y:-114.7,scaleY:1}},{t:this.shape_139,p:{scaleX:0.692,x:5.1,y:-84.4,scaleY:1}},{t:this.shape_138,p:{x:6.2,scaleX:0.692,y:-103,scaleY:1}},{t:this.shape_137,p:{x:4.9,scaleX:0.692,y:-114.9,scaleY:1}},{t:this.shape_107,p:{scaleX:0.692,x:8.1,y:-112.3,scaleY:1}},{t:this.shape_106,p:{scaleX:0.692,x:7.5,y:-115.2,scaleY:1}},{t:this.shape_105,p:{scaleX:0.692,x:7.8,y:-101.9,scaleY:1}},{t:this.shape_136,p:{x:9,scaleX:0.692,y:-116.4,scaleY:1}},{t:this.shape_42,p:{x:3.2,y:-90.9,scaleX:0.692,scaleY:1}},{t:this.shape_135,p:{scaleX:0.692,x:5.5,y:-82.2,scaleY:1}},{t:this.shape_134,p:{x:7,scaleX:0.692,y:-73.1,scaleY:1}},{t:this.shape_133,p:{scaleX:0.692,x:4.7,y:-84.5,scaleY:1}},{t:this.shape_132,p:{scaleX:0.692,x:6.9,y:-75,scaleY:1}},{t:this.shape_131,p:{scaleX:0.692,x:5.5,y:-90.8,scaleY:1}},{t:this.shape_103,p:{scaleX:0.692,x:7,y:-84.5,scaleY:1}},{t:this.shape_102,p:{scaleX:0.692,x:7.2,y:-117.8,scaleY:1}},{t:this.shape_130,p:{scaleX:0.692,x:6.1,y:-80.4,scaleY:1}},{t:this.shape_129,p:{scaleX:0.692,x:6.8,y:-77.4,scaleY:1}},{t:this.shape_128,p:{scaleX:0.692,x:6.5,y:-78.9,scaleY:1}},{t:this.shape_101,p:{scaleX:0.692,x:5.7,y:-88.8,scaleY:1}},{t:this.shape_35,p:{x:3.4,y:-93.9,scaleX:0.692,scaleY:1}},{t:this.shape_99,p:{scaleX:0.692,x:9.3,y:-106.3,scaleY:1}},{t:this.shape_98,p:{scaleX:0.692,x:6.4,y:-86,scaleY:1}},{t:this.shape_97,p:{scaleX:0.692,x:6.4,y:-98.2,scaleY:1}},{t:this.shape_127,p:{scaleX:0.692,x:6.5,y:-79.4,scaleY:1}},{t:this.shape_31,p:{x:3.2,y:-93.2,scaleX:0.692,scaleY:1}},{t:this.shape_95,p:{scaleX:0.692,x:5.1,y:-97.5,scaleY:1}},{t:this.shape_68,p:{x:8.3}},{t:this.shape_94,p:{scaleX:0.692,x:8.1,y:-108.2,scaleY:1}},{t:this.shape_67,p:{x:5.3}},{t:this.shape_126,p:{x:7.2,scaleX:0.692,y:-73,scaleY:1}},{t:this.shape_93,p:{scaleX:0.692,x:9.5,y:-115.1,scaleY:1}},{t:this.shape_125,p:{x:7.7,scaleX:0.692,y:-70.3,scaleY:1}},{t:this.shape_124,p:{x:5.7,scaleX:0.692,y:-65,scaleY:1}},{t:this.shape_123,p:{x:6.5,scaleX:0.692,y:-67.9,scaleY:1}},{t:this.shape_27,p:{x:3.3,y:-90.4,scaleX:0.692,scaleY:1}},{t:this.shape_91,p:{scaleX:0.692,x:9.4,y:-112.8,scaleY:1}},{t:this.shape_122,p:{scaleX:0.692,x:7.8,y:-76.1,scaleY:1}},{t:this.shape_90,p:{scaleX:0.692,x:9.4,y:-115.4,scaleY:1}},{t:this.shape_121,p:{scaleX:0.692,x:7.2,y:-76.5,scaleY:1}},{t:this.shape_120,p:{x:7.6,scaleX:0.692,y:-68.3,scaleY:1}},{t:this.shape_23,p:{x:4.4,y:-91.1,scaleX:0.692,scaleY:1}},{t:this.shape_119,p:{scaleX:0.692,x:4.7,y:-94.6,scaleY:1}},{t:this.shape_118,p:{x:7.8,scaleX:0.692,y:-74.1,scaleY:1}},{t:this.shape_21,p:{x:4.5,y:-92.4,scaleX:0.692,scaleY:1}},{t:this.shape_57,p:{x:8.1}},{t:this.shape_20,p:{x:5.2,y:-92,scaleX:0.692,scaleY:1}},{t:this.shape_117,p:{scaleX:0.692,x:4.6,y:-93.4,scaleY:1}},{t:this.shape_116,p:{scaleX:0.692,x:7.7,y:-78,scaleY:1}},{t:this.shape_86,p:{scaleX:0.692,x:4.8,y:-95.6,scaleY:1}},{t:this.shape_115,p:{scaleX:0.692,x:6.1,y:-80.8,scaleY:1}},{t:this.shape_4,p:{x:-0.8,y:-137.6}},{t:this.shape_3,p:{x:-0.9,y:-137.6}},{t:this.shape_114},{t:this.shape_84,p:{scaleX:0.643,x:10.6,y:-115.2,scaleY:1}},{t:this.shape_113,p:{x:9.4}},{t:this.shape_82,p:{scaleX:0.643,x:9.2,y:-135.3,scaleY:1}},{t:this.shape_50,p:{scaleX:0.643,x:10.2,y:-160.4,scaleY:1}},{t:this.shape_81,p:{scaleX:0.643,x:8.8,y:-130,scaleY:1}},{t:this.shape_80,p:{scaleX:0.643,x:9.9,y:-148.7,scaleY:1}},{t:this.shape_79,p:{scaleX:0.643,x:8.7,y:-160.6,scaleY:1}},{t:this.shape_46,p:{scaleX:0.643,x:11.6,y:-157.9,scaleY:1}},{t:this.shape_45,p:{scaleX:0.643,x:11.1,y:-160.9,scaleY:1}},{t:this.shape_44,p:{scaleX:0.643,x:11.3,y:-147.6,scaleY:1}},{t:this.shape_78,p:{scaleX:0.643,x:12.5,y:-162.1,scaleY:1}},{t:this.shape_15,p:{scaleX:0.643,x:7,y:-136.5,scaleY:1}},{t:this.shape_77,p:{scaleX:0.643,x:9.3,y:-127.9,scaleY:1}},{t:this.shape_76,p:{scaleX:0.643,x:10.6,y:-118.8,scaleY:1}},{t:this.shape_75,p:{scaleX:0.643,x:8.4,y:-130.2,scaleY:1}},{t:this.shape_74,p:{scaleX:0.643,x:10.5,y:-120.6,scaleY:1}},{t:this.shape_73,p:{scaleX:0.643,x:9.2,y:-136.4,scaleY:1}},{t:this.shape_38,p:{scaleX:0.643,x:10.6,y:-130.2,scaleY:1}},{t:this.shape_37,p:{scaleX:0.643,x:10.8,y:-163.4,scaleY:1}},{t:this.shape_72,p:{scaleX:0.643,x:9.8,y:-126,scaleY:1}},{t:this.shape_71,p:{scaleX:0.643,x:10.4,y:-123,scaleY:1}},{t:this.shape_70,p:{scaleX:0.643,x:10.2,y:-124.6,scaleY:1}},{t:this.shape_36,p:{scaleX:0.643,x:9.4,y:-134.5,scaleY:1}},{t:this.shape_12,p:{scaleX:0.643,x:7.3,y:-139.5,scaleY:1}},{t:this.shape_34,p:{scaleX:0.643,x:12.7,y:-152,scaleY:1}},{t:this.shape_33,p:{scaleX:0.643,x:10.1,y:-131.6,scaleY:1}},{t:this.shape_32,p:{scaleX:0.643,x:10.1,y:-143.8,scaleY:1}},{t:this.shape_69,p:{scaleX:0.643,x:10.2,y:-125,scaleY:1}},{t:this.shape_11,p:{scaleX:0.643,x:7.1,y:-138.8,scaleY:1}},{t:this.shape_30,p:{scaleX:0.643,x:8.9,y:-143.2,scaleY:1}},{t:this.shape_112,p:{x:11.7}},{t:this.shape_29,p:{scaleX:0.643,x:11.6,y:-153.8,scaleY:1}},{t:this.shape_111,p:{x:9}},{t:this.shape_66,p:{scaleX:0.643,x:10.8,y:-118.6,scaleY:1}},{t:this.shape_28,p:{scaleX:0.643,x:13,y:-160.7,scaleY:1}},{t:this.shape_65,p:{scaleX:0.643,x:11.3,y:-116,scaleY:1}},{t:this.shape_64,p:{scaleX:0.643,x:9.4,y:-110.6,scaleY:1}},{t:this.shape_63,p:{scaleX:0.643,x:10.2,y:-113.5,scaleY:1}},{t:this.shape_10,p:{scaleX:0.643,x:7.2,y:-136.1,scaleY:1}},{t:this.shape_26,p:{scaleX:0.643,x:12.9,y:-158.5,scaleY:1}},{t:this.shape_62,p:{scaleX:0.643,x:11.3,y:-121.8,scaleY:1}},{t:this.shape_25,p:{scaleX:0.643,x:12.9,y:-161,scaleY:1}},{t:this.shape_61,p:{scaleX:0.643,x:10.8,y:-122.2,scaleY:1}},{t:this.shape_60,p:{scaleX:0.643,x:11.2,y:-114,scaleY:1}},{t:this.shape_9,p:{scaleX:0.643,x:8.2,y:-136.7,scaleY:1}},{t:this.shape_59,p:{scaleX:0.643,x:8.5,y:-140.2,scaleY:1}},{t:this.shape_58,p:{scaleX:0.643,x:11.3,y:-119.7,scaleY:1}},{t:this.shape_7,p:{scaleX:0.643,x:8.3,y:-138,scaleY:1}},{t:this.shape_110,p:{x:11.4}},{t:this.shape_109,p:{x:11.7,scaleX:0.643,scaleY:1,y:-108.7}},{t:this.shape_6,p:{scaleX:0.643,x:8.9,y:-137.7,scaleY:1}},{t:this.shape_56,p:{scaleX:0.643,x:8.4,y:-139.1,scaleY:1}},{t:this.shape_55,p:{scaleX:0.643,x:11.3,y:-123.7,scaleY:1}},{t:this.shape_18,p:{scaleX:0.643,x:8.6,y:-141.3,scaleY:1}},{t:this.shape_54,p:{scaleX:0.643,x:9.8,y:-126.5,scaleY:1}}]},2).to({state:[{t:this.shape_53,p:{x:1.1}},{t:this.shape_52,p:{x:53.4}},{t:this.shape_51,p:{x:2.2}},{t:this.shape_164,p:{x:3.7,scaleX:1,y:-70.6}},{t:this.shape_49,p:{x:1}},{t:this.shape_48,p:{x:3.2}},{t:this.shape_47,p:{x:1.4}},{t:this.shape_163,p:{x:5.9,scaleX:1,y:-68.1}},{t:this.shape_162,p:{x:5.1,scaleX:1,y:-71.1}},{t:this.shape_200,p:{scaleX:1,x:5.4,y:-57.8}},{t:this.shape_43,p:{x:7.3}},{t:this.shape_199,p:{x:-1.2,y:-46.7,scaleX:1}},{t:this.shape_41,p:{x:2.1}},{t:this.shape_40,p:{x:1}},{t:this.shape_39,p:{x:2.1}},{t:this.shape_198,p:{scaleX:1,x:4.4,y:-40.4}},{t:this.shape_158,p:{x:4.6,scaleX:1,y:-73.6}},{t:this.shape_197,p:{scaleX:1,x:2.5,y:-44.7}},{t:this.shape_196,p:{x:-0.8,y:-49.7,scaleX:1}},{t:this.shape_195,p:{scaleX:1,x:7.6,y:-62.2}},{t:this.shape_154,p:{x:3.5,scaleX:1,y:-41.8}},{t:this.shape_194,p:{scaleX:1,x:3.5,y:-54}},{t:this.shape_193,p:{x:-1.1,y:-49,scaleX:1}},{t:this.shape_192,p:{scaleX:1,x:1.6,y:-53.4}},{t:this.shape_150,p:{x:5.9,scaleX:1,y:-64}},{t:this.shape_149,p:{x:8,scaleX:1,y:-70.9}},{t:this.shape_191,p:{x:-1,y:-46.3,scaleX:1}},{t:this.shape_147,p:{x:7.8,scaleX:1,y:-68.7}},{t:this.shape_146,p:{x:7.8,scaleX:1,y:-71.2}},{t:this.shape_24,p:{x:53.3}},{t:this.shape_190,p:{x:0.6,y:-46.9,scaleX:1}},{t:this.shape_22,p:{x:1}},{t:this.shape_189,p:{x:0.7,y:-48.2,scaleX:1}},{t:this.shape_188,p:{x:1.7,y:-47.9,scaleX:1}},{t:this.shape_19,p:{x:0.8}},{t:this.shape_187,p:{scaleX:1,x:1.2,y:-51.5}},{t:this.shape_17,p:{x:8.6}},{t:this.shape_16,p:{x:6.1}},{t:this.shape_160,p:{x:5.2,y:-73.4,scaleX:1}},{t:this.shape_14,p:{x:8.5}},{t:this.shape_13,p:{x:8.9}},{t:this.shape_156,p:{x:5.6,y:-76.4,scaleX:1}},{t:this.shape_152,p:{x:5.3,y:-75.7,scaleX:1}},{t:this.shape_148,p:{x:5.4,y:-73,scaleX:1}},{t:this.shape_145,p:{x:7,y:-73.6,scaleX:1}},{t:this.shape_8,p:{x:7.4}},{t:this.shape_144,p:{x:7.1,y:-74.9,scaleX:1}},{t:this.shape_143,p:{x:8.1,y:-74.6,scaleX:1}},{t:this.shape_5,p:{x:7.2}},{t:this.shape_85,p:{x:6.4}},{t:this.shape_141,p:{x:6.7,scaleX:0.692,y:-69.6,scaleY:1}},{t:this.shape_83,p:{x:5.4}},{t:this.shape_186,p:{scaleX:0.692,x:5.2,y:-89.7}},{t:this.shape_108,p:{scaleX:0.692,x:6.3,y:-114.7,scaleY:1}},{t:this.shape_185,p:{scaleX:0.692,x:4.8,y:-84.4}},{t:this.shape_138,p:{x:6,scaleX:0.692,y:-103,scaleY:1}},{t:this.shape_137,p:{x:4.7,scaleX:0.692,y:-114.9,scaleY:1}},{t:this.shape_107,p:{scaleX:0.692,x:7.8,y:-112.3,scaleY:1}},{t:this.shape_106,p:{scaleX:0.692,x:7.3,y:-115.2,scaleY:1}},{t:this.shape_161,p:{scaleX:0.692,x:7.5,y:-101.9}},{t:this.shape_136,p:{x:8.8,scaleX:0.692,y:-116.4,scaleY:1}},{t:this.shape_104,p:{x:2.9,y:-90.9,scaleX:0.692}},{t:this.shape_184,p:{scaleX:0.692,x:5.3,y:-82.2}},{t:this.shape_134,p:{x:6.8,scaleX:0.692,y:-73.1,scaleY:1}},{t:this.shape_183,p:{scaleX:0.692,x:4.4,y:-84.5}},{t:this.shape_182,p:{scaleX:0.692,x:6.6,y:-75}},{t:this.shape_181,p:{scaleX:0.692,x:5.2,y:-90.8}},{t:this.shape_159,p:{scaleX:0.692,x:6.8,y:-84.5}},{t:this.shape_102,p:{scaleX:0.692,x:7,y:-117.8,scaleY:1}},{t:this.shape_180,p:{scaleX:0.692,x:5.9,y:-80.4}},{t:this.shape_179,p:{scaleX:0.692,x:6.5,y:-77.4}},{t:this.shape_178,p:{scaleX:0.692,x:6.3,y:-78.9}},{t:this.shape_157,p:{scaleX:0.692,x:5.5,y:-88.8}},{t:this.shape_100,p:{x:3.2,y:-93.9,scaleX:0.692}},{t:this.shape_155,p:{scaleX:0.692,x:9,y:-106.3}},{t:this.shape_98,p:{scaleX:0.692,x:6.2,y:-86,scaleY:1}},{t:this.shape_153,p:{scaleX:0.692,x:6.2,y:-98.2}},{t:this.shape_177,p:{scaleX:0.692,x:6.2,y:-79.4}},{t:this.shape_96,p:{x:3,y:-93.2,scaleX:0.692}},{t:this.shape_151,p:{scaleX:0.692,x:4.9,y:-97.5}},{t:this.shape_68,p:{x:8}},{t:this.shape_94,p:{scaleX:0.692,x:7.8,y:-108.2,scaleY:1}},{t:this.shape_67,p:{x:5.1}},{t:this.shape_126,p:{x:6.9,scaleX:0.692,y:-73,scaleY:1}},{t:this.shape_93,p:{scaleX:0.692,x:9.3,y:-115.1,scaleY:1}},{t:this.shape_125,p:{x:7.5,scaleX:0.692,y:-70.3,scaleY:1}},{t:this.shape_124,p:{x:5.4,scaleX:0.692,y:-65,scaleY:1}},{t:this.shape_123,p:{x:6.3,scaleX:0.692,y:-67.9,scaleY:1}},{t:this.shape_92,p:{x:3.1,y:-90.4,scaleX:0.692}},{t:this.shape_91,p:{scaleX:0.692,x:9.2,y:-112.8,scaleY:1}},{t:this.shape_176,p:{scaleX:0.692,x:7.5,y:-76.1}},{t:this.shape_90,p:{scaleX:0.692,x:9.2,y:-115.4,scaleY:1}},{t:this.shape_175,p:{scaleX:0.692,x:6.9,y:-76.5}},{t:this.shape_120,p:{x:7.4,scaleX:0.692,y:-68.3,scaleY:1}},{t:this.shape_89,p:{x:4.2,y:-91.1,scaleX:0.692}},{t:this.shape_174,p:{scaleX:0.692,x:4.4,y:-94.6}},{t:this.shape_118,p:{x:7.5,scaleX:0.692,y:-74.1,scaleY:1}},{t:this.shape_88,p:{x:4.2,y:-92.4,scaleX:0.692}},{t:this.shape_57,p:{x:7.9}},{t:this.shape_87,p:{x:4.9,y:-92,scaleX:0.692}},{t:this.shape_173,p:{scaleX:0.692,x:4.3,y:-93.4}},{t:this.shape_172,p:{scaleX:0.692,x:7.5,y:-78}},{t:this.shape_142,p:{scaleX:0.692,x:4.6,y:-95.6}},{t:this.shape_171,p:{scaleX:0.692,x:5.9,y:-80.8}},{t:this.shape_4,p:{x:-1.1,y:-137.6}},{t:this.shape_3,p:{x:-1.1,y:-137.6}},{t:this.shape_170},{t:this.shape_84,p:{scaleX:0.643,x:10.4,y:-115.2,scaleY:1}},{t:this.shape_113,p:{x:9.1}},{t:this.shape_140,p:{scaleX:0.643,x:9,y:-135.3,scaleY:1}},{t:this.shape_139,p:{scaleX:0.643,x:8.6,y:-130,scaleY:1}},{t:this.shape_169},{t:this.shape_168},{t:this.shape_105,p:{scaleX:0.643,x:11.1,y:-147.6,scaleY:1}},{t:this.shape_42,p:{x:6.8,y:-136.5,scaleX:0.643,scaleY:1}},{t:this.shape_135,p:{scaleX:0.643,x:9,y:-127.9,scaleY:1}},{t:this.shape_76,p:{scaleX:0.643,x:10.4,y:-118.8,scaleY:1}},{t:this.shape_133,p:{scaleX:0.643,x:8.2,y:-130.2,scaleY:1}},{t:this.shape_132,p:{scaleX:0.643,x:10.3,y:-120.6,scaleY:1}},{t:this.shape_131,p:{scaleX:0.643,x:9,y:-136.4,scaleY:1}},{t:this.shape_103,p:{scaleX:0.643,x:10.4,y:-130.2,scaleY:1}},{t:this.shape_130,p:{scaleX:0.643,x:9.6,y:-126,scaleY:1}},{t:this.shape_129,p:{scaleX:0.643,x:10.2,y:-123,scaleY:1}},{t:this.shape_128,p:{scaleX:0.643,x:9.9,y:-124.6,scaleY:1}},{t:this.shape_101,p:{scaleX:0.643,x:9.2,y:-134.5,scaleY:1}},{t:this.shape_35,p:{x:7.1,y:-139.5,scaleX:0.643,scaleY:1}},{t:this.shape_99,p:{scaleX:0.643,x:12.5,y:-152,scaleY:1}},{t:this.shape_33,p:{scaleX:0.643,x:9.9,y:-131.6,scaleY:1}},{t:this.shape_97,p:{scaleX:0.643,x:9.8,y:-143.8,scaleY:1}},{t:this.shape_127,p:{scaleX:0.643,x:9.9,y:-125,scaleY:1}},{t:this.shape_31,p:{x:6.9,y:-138.8,scaleX:0.643,scaleY:1}},{t:this.shape_95,p:{scaleX:0.643,x:8.6,y:-143.2,scaleY:1}},{t:this.shape_112,p:{x:11.4}},{t:this.shape_167},{t:this.shape_111,p:{x:8.8}},{t:this.shape_66,p:{scaleX:0.643,x:10.5,y:-118.6,scaleY:1}},{t:this.shape_65,p:{scaleX:0.643,x:11.1,y:-116,scaleY:1}},{t:this.shape_64,p:{scaleX:0.643,x:9.1,y:-110.6,scaleY:1}},{t:this.shape_63,p:{scaleX:0.643,x:9.9,y:-113.5,scaleY:1}},{t:this.shape_27,p:{x:7,y:-136.1,scaleX:0.643,scaleY:1}},{t:this.shape_122,p:{scaleX:0.643,x:11.1,y:-121.8,scaleY:1}},{t:this.shape_121,p:{scaleX:0.643,x:10.5,y:-122.2,scaleY:1}},{t:this.shape_60,p:{scaleX:0.643,x:10.9,y:-114,scaleY:1}},{t:this.shape_23,p:{x:8,y:-136.7,scaleX:0.643,scaleY:1}},{t:this.shape_119,p:{scaleX:0.643,x:8.2,y:-140.2,scaleY:1}},{t:this.shape_58,p:{scaleX:0.643,x:11.1,y:-119.7,scaleY:1}},{t:this.shape_21,p:{x:8,y:-138,scaleX:0.643,scaleY:1}},{t:this.shape_110,p:{x:11.1}},{t:this.shape_109,p:{x:11.4,scaleX:0.643,scaleY:1,y:-108.7}},{t:this.shape_20,p:{x:8.7,y:-137.7,scaleX:0.643,scaleY:1}},{t:this.shape_117,p:{scaleX:0.643,x:8.1,y:-139.1,scaleY:1}},{t:this.shape_116,p:{scaleX:0.643,x:11.1,y:-123.7,scaleY:1}},{t:this.shape_86,p:{scaleX:0.643,x:8.4,y:-141.3,scaleY:1}},{t:this.shape_115,p:{scaleX:0.643,x:9.6,y:-126.5,scaleY:1}},{t:this.shape_166},{t:this.shape_82,p:{scaleX:0.731,x:6.1,y:-161.4,scaleY:1}},{t:this.shape_50,p:{scaleX:0.731,x:7.2,y:-186.5,scaleY:1}},{t:this.shape_81,p:{scaleX:0.731,x:5.6,y:-156.1,scaleY:1}},{t:this.shape_80,p:{scaleX:0.731,x:6.8,y:-174.8,scaleY:1}},{t:this.shape_79,p:{scaleX:0.731,x:5.5,y:-186.7,scaleY:1}},{t:this.shape_46,p:{scaleX:0.731,x:8.8,y:-184,scaleY:1}},{t:this.shape_45,p:{scaleX:0.731,x:8.2,y:-187,scaleY:1}},{t:this.shape_44,p:{scaleX:0.731,x:8.5,y:-173.7,scaleY:1}},{t:this.shape_78,p:{scaleX:0.731,x:9.8,y:-188.2,scaleY:1}},{t:this.shape_15,p:{scaleX:0.731,x:3.6,y:-162.6,scaleY:1}},{t:this.shape_77,p:{scaleX:0.731,x:6.1,y:-154,scaleY:1}},{t:this.shape_75,p:{scaleX:0.731,x:5.2,y:-156.3,scaleY:1}},{t:this.shape_74,p:{scaleX:0.731,x:7.5,y:-146.7,scaleY:1}},{t:this.shape_73,p:{scaleX:0.731,x:6,y:-162.5,scaleY:1}},{t:this.shape_38,p:{scaleX:0.731,x:7.7,y:-156.3,scaleY:1}},{t:this.shape_37,p:{scaleX:0.731,x:7.9,y:-189.5,scaleY:1}},{t:this.shape_72,p:{scaleX:0.731,x:6.7,y:-152.1,scaleY:1}},{t:this.shape_71,p:{scaleX:0.731,x:7.4,y:-149.1,scaleY:1}},{t:this.shape_70,p:{scaleX:0.731,x:7.1,y:-150.7,scaleY:1}},{t:this.shape_36,p:{scaleX:0.731,x:6.3,y:-160.6,scaleY:1}},{t:this.shape_12,p:{scaleX:0.731,x:3.9,y:-165.6,scaleY:1}},{t:this.shape_34,p:{scaleX:0.731,x:10.1,y:-178.1,scaleY:1}},{t:this.shape_165},{t:this.shape_32,p:{scaleX:0.731,x:7,y:-169.9,scaleY:1}},{t:this.shape_69,p:{scaleX:0.731,x:7.1,y:-151.1,scaleY:1}},{t:this.shape_11,p:{scaleX:0.731,x:3.6,y:-164.9,scaleY:1}},{t:this.shape_30,p:{scaleX:0.731,x:5.6,y:-169.3,scaleY:1}},{t:this.shape_29,p:{scaleX:0.731,x:8.8,y:-179.9,scaleY:1}},{t:this.shape_28,p:{scaleX:0.731,x:10.3,y:-186.8,scaleY:1}},{t:this.shape_10,p:{scaleX:0.731,x:3.8,y:-162.2,scaleY:1}},{t:this.shape_26,p:{scaleX:0.731,x:10.2,y:-184.6,scaleY:1}},{t:this.shape_62,p:{scaleX:0.731,x:8.4,y:-147.9,scaleY:1}},{t:this.shape_25,p:{scaleX:0.731,x:10.2,y:-187.1,scaleY:1}},{t:this.shape_61,p:{scaleX:0.731,x:7.8,y:-148.3,scaleY:1}},{t:this.shape_9,p:{scaleX:0.731,x:4.9,y:-162.8,scaleY:1}},{t:this.shape_59,p:{scaleX:0.731,x:5.2,y:-166.3,scaleY:1}},{t:this.shape_7,p:{scaleX:0.731,x:5,y:-164.1,scaleY:1}},{t:this.shape_6,p:{scaleX:0.731,x:5.7,y:-163.8,scaleY:1}},{t:this.shape_56,p:{scaleX:0.731,x:5.1,y:-165.2,scaleY:1}},{t:this.shape_55,p:{scaleX:0.731,x:8.4,y:-149.8,scaleY:1}},{t:this.shape_18,p:{scaleX:0.731,x:5.4,y:-167.4,scaleY:1}},{t:this.shape_54,p:{scaleX:0.731,x:6.7,y:-152.6,scaleY:1}},{t:this.instance_31}]},1).to({state:[{t:this.shape_53,p:{x:1.1}},{t:this.shape_52,p:{x:53.4}},{t:this.shape_51,p:{x:2.2}},{t:this.shape_255,p:{scaleX:1,x:3.7,y:-70.6}},{t:this.shape_49,p:{x:1}},{t:this.shape_48,p:{x:3.2}},{t:this.shape_47,p:{x:1.4}},{t:this.shape_254,p:{scaleX:1,x:5.9,y:-68.1}},{t:this.shape_253,p:{scaleX:1,x:5.1,y:-71.1}},{t:this.shape_252,p:{scaleX:1,x:5.4,y:-57.8}},{t:this.shape_43,p:{x:7.3}},{t:this.shape_251,p:{x:-1.2,y:-46.7,scaleX:1}},{t:this.shape_41,p:{x:2.1}},{t:this.shape_40,p:{x:1}},{t:this.shape_39,p:{x:2.1}},{t:this.shape_250,p:{scaleX:1,x:4.4,y:-40.4}},{t:this.shape_249,p:{scaleX:1,x:4.6,y:-73.6}},{t:this.shape_248,p:{scaleX:1,x:2.5,y:-44.7}},{t:this.shape_247,p:{x:-0.8,y:-49.7,scaleX:1}},{t:this.shape_246,p:{scaleX:1,x:7.6,y:-62.2}},{t:this.shape_245,p:{scaleX:1,x:3.5,y:-41.8}},{t:this.shape_244,p:{scaleX:1,x:3.5,y:-54}},{t:this.shape_243,p:{x:-1.1,y:-49,scaleX:1}},{t:this.shape_242,p:{scaleX:1,x:1.6,y:-53.4}},{t:this.shape_241,p:{scaleX:1,x:5.9,y:-64}},{t:this.shape_240,p:{scaleX:1,x:8,y:-70.9}},{t:this.shape_239,p:{x:-1,y:-46.3,scaleX:1}},{t:this.shape_238,p:{scaleX:1,x:7.8,y:-68.7}},{t:this.shape_237,p:{scaleX:1,x:7.8,y:-71.2}},{t:this.shape_24,p:{x:53.3}},{t:this.shape_236,p:{x:0.6,y:-46.9,scaleX:1}},{t:this.shape_22,p:{x:1}},{t:this.shape_235,p:{x:0.7,y:-48.2,scaleX:1}},{t:this.shape_234,p:{x:1.7,y:-47.9,scaleX:1}},{t:this.shape_19,p:{x:0.8}},{t:this.shape_233,p:{scaleX:1,x:1.2,y:-51.5}},{t:this.shape_17,p:{x:8.6}},{t:this.shape_16,p:{x:6.1}},{t:this.shape_199,p:{x:5.2,y:-73.4,scaleX:1}},{t:this.shape_14,p:{x:8.5}},{t:this.shape_13,p:{x:8.9}},{t:this.shape_196,p:{x:5.6,y:-76.4,scaleX:1}},{t:this.shape_193,p:{x:5.3,y:-75.7,scaleX:1}},{t:this.shape_191,p:{x:5.4,y:-73,scaleX:1}},{t:this.shape_190,p:{x:7,y:-73.6,scaleX:1}},{t:this.shape_8,p:{x:7.4}},{t:this.shape_189,p:{x:7.1,y:-74.9,scaleX:1}},{t:this.shape_188,p:{x:8.1,y:-74.6,scaleX:1}},{t:this.shape_5,p:{x:7.2}},{t:this.shape_85,p:{x:6.4}},{t:this.shape_232,p:{scaleX:0.692,x:6.7,y:-69.6}},{t:this.shape_83,p:{x:5.4}},{t:this.shape_231,p:{scaleX:0.692,x:5.2,y:-89.7}},{t:this.shape_164,p:{x:6.3,scaleX:0.692,y:-114.7}},{t:this.shape_230,p:{scaleX:0.692,x:4.8,y:-84.4}},{t:this.shape_229,p:{scaleX:0.692,x:6,y:-103}},{t:this.shape_228,p:{scaleX:0.692,x:4.7,y:-114.9}},{t:this.shape_163,p:{x:7.8,scaleX:0.692,y:-112.3}},{t:this.shape_162,p:{x:7.3,scaleX:0.692,y:-115.2}},{t:this.shape_200,p:{scaleX:0.692,x:7.5,y:-101.9}},{t:this.shape_227,p:{scaleX:0.692,x:8.8,y:-116.4}},{t:this.shape_160,p:{x:2.9,y:-90.9,scaleX:0.692}},{t:this.shape_226,p:{scaleX:0.692,x:5.3,y:-82.2}},{t:this.shape_225,p:{scaleX:0.692,x:6.8,y:-73.1}},{t:this.shape_224,p:{scaleX:0.692,x:4.4,y:-84.5}},{t:this.shape_223,p:{scaleX:0.692,x:6.6,y:-75}},{t:this.shape_222,p:{scaleX:0.692,x:5.2,y:-90.8}},{t:this.shape_198,p:{scaleX:0.692,x:6.8,y:-84.5}},{t:this.shape_158,p:{x:7,scaleX:0.692,y:-117.8}},{t:this.shape_221,p:{scaleX:0.692,x:5.9,y:-80.4}},{t:this.shape_220,p:{scaleX:0.692,x:6.5,y:-77.4}},{t:this.shape_219,p:{scaleX:0.692,x:6.3,y:-78.9}},{t:this.shape_197,p:{scaleX:0.692,x:5.5,y:-88.8}},{t:this.shape_156,p:{x:3.2,y:-93.9,scaleX:0.692}},{t:this.shape_195,p:{scaleX:0.692,x:9,y:-106.3}},{t:this.shape_154,p:{x:6.2,scaleX:0.692,y:-86}},{t:this.shape_194,p:{scaleX:0.692,x:6.2,y:-98.2}},{t:this.shape_218,p:{scaleX:0.692,x:6.2,y:-79.4}},{t:this.shape_152,p:{x:3,y:-93.2,scaleX:0.692}},{t:this.shape_192,p:{scaleX:0.692,x:4.9,y:-97.5}},{t:this.shape_68,p:{x:8}},{t:this.shape_150,p:{x:7.8,scaleX:0.692,y:-108.2}},{t:this.shape_67,p:{x:5.1}},{t:this.shape_217,p:{scaleX:0.692,x:6.9,y:-73}},{t:this.shape_149,p:{x:9.3,scaleX:0.692,y:-115.1}},{t:this.shape_216,p:{scaleX:0.692,x:7.5,y:-70.3}},{t:this.shape_124,p:{x:5.4,scaleX:0.692,y:-65,scaleY:1}},{t:this.shape_215,p:{scaleX:0.692,x:6.3,y:-67.9}},{t:this.shape_148,p:{x:3.1,y:-90.4,scaleX:0.692}},{t:this.shape_147,p:{x:9.2,scaleX:0.692,y:-112.8}},{t:this.shape_214,p:{scaleX:0.692,x:7.5,y:-76.1}},{t:this.shape_146,p:{x:9.2,scaleX:0.692,y:-115.4}},{t:this.shape_213,p:{scaleX:0.692,x:6.9,y:-76.5}},{t:this.shape_212,p:{scaleX:0.692,x:7.4,y:-68.3}},{t:this.shape_145,p:{x:4.2,y:-91.1,scaleX:0.692}},{t:this.shape_211,p:{scaleX:0.692,x:4.4,y:-94.6}},{t:this.shape_210,p:{scaleX:0.692,x:7.5,y:-74.1}},{t:this.shape_144,p:{x:4.2,y:-92.4,scaleX:0.692}},{t:this.shape_57,p:{x:7.9}},{t:this.shape_143,p:{x:4.9,y:-92,scaleX:0.692}},{t:this.shape_209,p:{scaleX:0.692,x:4.3,y:-93.4}},{t:this.shape_208,p:{scaleX:0.692,x:7.5,y:-78}},{t:this.shape_187,p:{scaleX:0.692,x:4.6,y:-95.6}},{t:this.shape_207,p:{scaleX:0.692,x:5.9,y:-80.8}},{t:this.shape_4,p:{x:-1.1,y:-137.6}},{t:this.shape_3,p:{x:-1.1,y:-137.6}},{t:this.shape_170},{t:this.shape_141,p:{x:10.4,scaleX:0.643,y:-115.2,scaleY:1}},{t:this.shape_113,p:{x:9.1}},{t:this.shape_186,p:{scaleX:0.643,x:9,y:-135.3}},{t:this.shape_185,p:{scaleX:0.643,x:8.6,y:-130}},{t:this.shape_169},{t:this.shape_168},{t:this.shape_161,p:{scaleX:0.643,x:11.1,y:-147.6}},{t:this.shape_104,p:{x:6.8,y:-136.5,scaleX:0.643}},{t:this.shape_184,p:{scaleX:0.643,x:9,y:-127.9}},{t:this.shape_134,p:{x:10.4,scaleX:0.643,y:-118.8,scaleY:1}},{t:this.shape_183,p:{scaleX:0.643,x:8.2,y:-130.2}},{t:this.shape_182,p:{scaleX:0.643,x:10.3,y:-120.6}},{t:this.shape_181,p:{scaleX:0.643,x:9,y:-136.4}},{t:this.shape_159,p:{scaleX:0.643,x:10.4,y:-130.2}},{t:this.shape_180,p:{scaleX:0.643,x:9.6,y:-126}},{t:this.shape_179,p:{scaleX:0.643,x:10.2,y:-123}},{t:this.shape_178,p:{scaleX:0.643,x:9.9,y:-124.6}},{t:this.shape_157,p:{scaleX:0.643,x:9.2,y:-134.5}},{t:this.shape_100,p:{x:7.1,y:-139.5,scaleX:0.643}},{t:this.shape_155,p:{scaleX:0.643,x:12.5,y:-152}},{t:this.shape_98,p:{scaleX:0.643,x:9.9,y:-131.6,scaleY:1}},{t:this.shape_153,p:{scaleX:0.643,x:9.8,y:-143.8}},{t:this.shape_177,p:{scaleX:0.643,x:9.9,y:-125}},{t:this.shape_96,p:{x:6.9,y:-138.8,scaleX:0.643}},{t:this.shape_151,p:{scaleX:0.643,x:8.6,y:-143.2}},{t:this.shape_112,p:{x:11.4}},{t:this.shape_167},{t:this.shape_111,p:{x:8.8}},{t:this.shape_126,p:{x:10.5,scaleX:0.643,y:-118.6,scaleY:1}},{t:this.shape_125,p:{x:11.1,scaleX:0.643,y:-116,scaleY:1}},{t:this.shape_64,p:{scaleX:0.643,x:9.1,y:-110.6,scaleY:1}},{t:this.shape_123,p:{x:9.9,scaleX:0.643,y:-113.5,scaleY:1}},{t:this.shape_92,p:{x:7,y:-136.1,scaleX:0.643}},{t:this.shape_176,p:{scaleX:0.643,x:11.1,y:-121.8}},{t:this.shape_175,p:{scaleX:0.643,x:10.5,y:-122.2}},{t:this.shape_120,p:{x:10.9,scaleX:0.643,y:-114,scaleY:1}},{t:this.shape_89,p:{x:8,y:-136.7,scaleX:0.643}},{t:this.shape_174,p:{scaleX:0.643,x:8.2,y:-140.2}},{t:this.shape_118,p:{x:11.1,scaleX:0.643,y:-119.7,scaleY:1}},{t:this.shape_88,p:{x:8,y:-138,scaleX:0.643}},{t:this.shape_110,p:{x:11.1}},{t:this.shape_109,p:{x:11.4,scaleX:0.643,scaleY:1,y:-108.7}},{t:this.shape_87,p:{x:8.7,y:-137.7,scaleX:0.643}},{t:this.shape_173,p:{scaleX:0.643,x:8.1,y:-139.1}},{t:this.shape_172,p:{scaleX:0.643,x:11.1,y:-123.7}},{t:this.shape_142,p:{scaleX:0.643,x:8.4,y:-141.3}},{t:this.shape_171,p:{scaleX:0.643,x:9.6,y:-126.5}},{t:this.shape_166},{t:this.shape_140,p:{scaleX:0.731,x:6.1,y:-161.4,scaleY:1}},{t:this.shape_108,p:{scaleX:0.731,x:7.2,y:-186.5,scaleY:1}},{t:this.shape_139,p:{scaleX:0.731,x:5.6,y:-156.1,scaleY:1}},{t:this.shape_138,p:{x:6.8,scaleX:0.731,y:-174.8,scaleY:1}},{t:this.shape_137,p:{x:5.5,scaleX:0.731,y:-186.7,scaleY:1}},{t:this.shape_107,p:{scaleX:0.731,x:8.8,y:-184,scaleY:1}},{t:this.shape_106,p:{scaleX:0.731,x:8.2,y:-187,scaleY:1}},{t:this.shape_105,p:{scaleX:0.731,x:8.5,y:-173.7,scaleY:1}},{t:this.shape_136,p:{x:9.8,scaleX:0.731,y:-188.2,scaleY:1}},{t:this.shape_42,p:{x:3.6,y:-162.6,scaleX:0.731,scaleY:1}},{t:this.shape_135,p:{scaleX:0.731,x:6.1,y:-154,scaleY:1}},{t:this.shape_133,p:{scaleX:0.731,x:5.2,y:-156.3,scaleY:1}},{t:this.shape_132,p:{scaleX:0.731,x:7.5,y:-146.7,scaleY:1}},{t:this.shape_131,p:{scaleX:0.731,x:6,y:-162.5,scaleY:1}},{t:this.shape_103,p:{scaleX:0.731,x:7.7,y:-156.3,scaleY:1}},{t:this.shape_102,p:{scaleX:0.731,x:7.9,y:-189.5,scaleY:1}},{t:this.shape_130,p:{scaleX:0.731,x:6.7,y:-152.1,scaleY:1}},{t:this.shape_129,p:{scaleX:0.731,x:7.4,y:-149.1,scaleY:1}},{t:this.shape_128,p:{scaleX:0.731,x:7.1,y:-150.7,scaleY:1}},{t:this.shape_101,p:{scaleX:0.731,x:6.3,y:-160.6,scaleY:1}},{t:this.shape_35,p:{x:3.9,y:-165.6,scaleX:0.731,scaleY:1}},{t:this.shape_99,p:{scaleX:0.731,x:10.1,y:-178.1,scaleY:1}},{t:this.shape_165},{t:this.shape_97,p:{scaleX:0.731,x:7,y:-169.9,scaleY:1}},{t:this.shape_127,p:{scaleX:0.731,x:7.1,y:-151.1,scaleY:1}},{t:this.shape_31,p:{x:3.6,y:-164.9,scaleX:0.731,scaleY:1}},{t:this.shape_95,p:{scaleX:0.731,x:5.6,y:-169.3,scaleY:1}},{t:this.shape_94,p:{scaleX:0.731,x:8.8,y:-179.9,scaleY:1}},{t:this.shape_93,p:{scaleX:0.731,x:10.3,y:-186.8,scaleY:1}},{t:this.shape_27,p:{x:3.8,y:-162.2,scaleX:0.731,scaleY:1}},{t:this.shape_91,p:{scaleX:0.731,x:10.2,y:-184.6,scaleY:1}},{t:this.shape_122,p:{scaleX:0.731,x:8.4,y:-147.9,scaleY:1}},{t:this.shape_90,p:{scaleX:0.731,x:10.2,y:-187.1,scaleY:1}},{t:this.shape_121,p:{scaleX:0.731,x:7.8,y:-148.3,scaleY:1}},{t:this.shape_23,p:{x:4.9,y:-162.8,scaleX:0.731,scaleY:1}},{t:this.shape_119,p:{scaleX:0.731,x:5.2,y:-166.3,scaleY:1}},{t:this.shape_21,p:{x:5,y:-164.1,scaleX:0.731,scaleY:1}},{t:this.shape_20,p:{x:5.7,y:-163.8,scaleX:0.731,scaleY:1}},{t:this.shape_117,p:{scaleX:0.731,x:5.1,y:-165.2,scaleY:1}},{t:this.shape_116,p:{scaleX:0.731,x:8.4,y:-149.8,scaleY:1}},{t:this.shape_86,p:{scaleX:0.731,x:5.4,y:-167.4,scaleY:1}},{t:this.shape_115,p:{scaleX:0.731,x:6.7,y:-152.6,scaleY:1}},{t:this.instance_31},{t:this.shape_206},{t:this.shape_84,p:{scaleX:0.688,x:9.1,y:-182.8,scaleY:1}},{t:this.shape_205},{t:this.shape_82,p:{scaleX:0.688,x:7.6,y:-202.9,scaleY:1}},{t:this.shape_50,p:{scaleX:0.688,x:8.6,y:-227.9,scaleY:1}},{t:this.shape_81,p:{scaleX:0.688,x:7.2,y:-197.6,scaleY:1}},{t:this.shape_80,p:{scaleX:0.688,x:8.3,y:-216.2,scaleY:1}},{t:this.shape_79,p:{scaleX:0.688,x:7.1,y:-228.1,scaleY:1}},{t:this.shape_46,p:{scaleX:0.688,x:10.2,y:-225.5,scaleY:1}},{t:this.shape_45,p:{scaleX:0.688,x:9.6,y:-228.4,scaleY:1}},{t:this.shape_44,p:{scaleX:0.688,x:9.9,y:-215.1,scaleY:1}},{t:this.shape_78,p:{scaleX:0.688,x:11.1,y:-229.6,scaleY:1}},{t:this.shape_15,p:{scaleX:0.688,x:5.3,y:-204.1,scaleY:1}},{t:this.shape_77,p:{scaleX:0.688,x:7.7,y:-195.4,scaleY:1}},{t:this.shape_76,p:{scaleX:0.688,x:9.1,y:-186.3,scaleY:1}},{t:this.shape_75,p:{scaleX:0.688,x:6.8,y:-197.7,scaleY:1}},{t:this.shape_74,p:{scaleX:0.688,x:9,y:-188.2,scaleY:1}},{t:this.shape_73,p:{scaleX:0.688,x:7.6,y:-204,scaleY:1}},{t:this.shape_38,p:{scaleX:0.688,x:9.1,y:-197.7,scaleY:1}},{t:this.shape_37,p:{scaleX:0.688,x:9.3,y:-231,scaleY:1}},{t:this.shape_72,p:{scaleX:0.688,x:8.3,y:-193.6,scaleY:1}},{t:this.shape_71,p:{scaleX:0.688,x:8.9,y:-190.6,scaleY:1}},{t:this.shape_70,p:{scaleX:0.688,x:8.6,y:-192.1,scaleY:1}},{t:this.shape_36,p:{scaleX:0.688,x:7.8,y:-202,scaleY:1}},{t:this.shape_12,p:{scaleX:0.688,x:5.5,y:-207.1,scaleY:1}},{t:this.shape_34,p:{scaleX:0.688,x:11.4,y:-219.5,scaleY:1}},{t:this.shape_33,p:{scaleX:0.688,x:8.5,y:-199.2,scaleY:1}},{t:this.shape_32,p:{scaleX:0.688,x:8.5,y:-211.4,scaleY:1}},{t:this.shape_69,p:{scaleX:0.688,x:8.6,y:-192.6,scaleY:1}},{t:this.shape_11,p:{scaleX:0.688,x:5.3,y:-206.4,scaleY:1}},{t:this.shape_30,p:{scaleX:0.688,x:7.2,y:-210.7,scaleY:1}},{t:this.shape_204},{t:this.shape_29,p:{scaleX:0.688,x:10.2,y:-221.4,scaleY:1}},{t:this.shape_203},{t:this.shape_66,p:{scaleX:0.688,x:9.3,y:-186.2,scaleY:1}},{t:this.shape_28,p:{scaleX:0.688,x:11.6,y:-228.3,scaleY:1}},{t:this.shape_65,p:{scaleX:0.688,x:9.8,y:-183.5,scaleY:1}},{t:this.shape_202},{t:this.shape_63,p:{scaleX:0.688,x:8.6,y:-181.1,scaleY:1}},{t:this.shape_10,p:{scaleX:0.688,x:5.4,y:-203.6,scaleY:1}},{t:this.shape_26,p:{scaleX:0.688,x:11.5,y:-226,scaleY:1}},{t:this.shape_62,p:{scaleX:0.688,x:9.9,y:-189.3,scaleY:1}},{t:this.shape_25,p:{scaleX:0.688,x:11.5,y:-228.6,scaleY:1}},{t:this.shape_61,p:{scaleX:0.688,x:9.3,y:-189.7,scaleY:1}},{t:this.shape_60,p:{scaleX:0.688,x:9.7,y:-181.5,scaleY:1}},{t:this.shape_9,p:{scaleX:0.688,x:6.6,y:-204.3,scaleY:1}},{t:this.shape_59,p:{scaleX:0.688,x:6.8,y:-207.8,scaleY:1}},{t:this.shape_58,p:{scaleX:0.688,x:9.9,y:-187.3,scaleY:1}},{t:this.shape_7,p:{scaleX:0.688,x:6.6,y:-205.6,scaleY:1}},{t:this.shape_201},{t:this.shape_6,p:{scaleX:0.688,x:7.3,y:-205.2,scaleY:1}},{t:this.shape_56,p:{scaleX:0.688,x:6.7,y:-206.6,scaleY:1}},{t:this.shape_55,p:{scaleX:0.688,x:9.8,y:-191.2,scaleY:1}},{t:this.shape_18,p:{scaleX:0.688,x:7,y:-208.8,scaleY:1}},{t:this.shape_54,p:{scaleX:0.688,x:8.2,y:-194,scaleY:1}}]},3).to({state:[{t:this.shape_53,p:{x:1.1}},{t:this.shape_52,p:{x:53.4}},{t:this.shape_51,p:{x:2.2}},{t:this.shape_255,p:{scaleX:1,x:3.7,y:-70.6}},{t:this.shape_49,p:{x:1}},{t:this.shape_48,p:{x:3.2}},{t:this.shape_47,p:{x:1.4}},{t:this.shape_254,p:{scaleX:1,x:5.9,y:-68.1}},{t:this.shape_253,p:{scaleX:1,x:5.1,y:-71.1}},{t:this.shape_252,p:{scaleX:1,x:5.4,y:-57.8}},{t:this.shape_43,p:{x:7.3}},{t:this.shape_251,p:{x:-1.2,y:-46.7,scaleX:1}},{t:this.shape_41,p:{x:2.1}},{t:this.shape_40,p:{x:1}},{t:this.shape_39,p:{x:2.1}},{t:this.shape_250,p:{scaleX:1,x:4.4,y:-40.4}},{t:this.shape_249,p:{scaleX:1,x:4.6,y:-73.6}},{t:this.shape_248,p:{scaleX:1,x:2.5,y:-44.7}},{t:this.shape_247,p:{x:-0.8,y:-49.7,scaleX:1}},{t:this.shape_246,p:{scaleX:1,x:7.6,y:-62.2}},{t:this.shape_245,p:{scaleX:1,x:3.5,y:-41.8}},{t:this.shape_244,p:{scaleX:1,x:3.5,y:-54}},{t:this.shape_243,p:{x:-1.1,y:-49,scaleX:1}},{t:this.shape_242,p:{scaleX:1,x:1.6,y:-53.4}},{t:this.shape_241,p:{scaleX:1,x:5.9,y:-64}},{t:this.shape_240,p:{scaleX:1,x:8,y:-70.9}},{t:this.shape_239,p:{x:-1,y:-46.3,scaleX:1}},{t:this.shape_238,p:{scaleX:1,x:7.8,y:-68.7}},{t:this.shape_237,p:{scaleX:1,x:7.8,y:-71.2}},{t:this.shape_24,p:{x:53.3}},{t:this.shape_236,p:{x:0.6,y:-46.9,scaleX:1}},{t:this.shape_22,p:{x:1}},{t:this.shape_235,p:{x:0.7,y:-48.2,scaleX:1}},{t:this.shape_234,p:{x:1.7,y:-47.9,scaleX:1}},{t:this.shape_19,p:{x:0.8}},{t:this.shape_233,p:{scaleX:1,x:1.2,y:-51.5}},{t:this.shape_17,p:{x:8.6}},{t:this.shape_16,p:{x:6.1}},{t:this.shape_199,p:{x:5.2,y:-73.4,scaleX:1}},{t:this.shape_14,p:{x:8.5}},{t:this.shape_13,p:{x:8.9}},{t:this.shape_196,p:{x:5.6,y:-76.4,scaleX:1}},{t:this.shape_193,p:{x:5.3,y:-75.7,scaleX:1}},{t:this.shape_191,p:{x:5.4,y:-73,scaleX:1}},{t:this.shape_190,p:{x:7,y:-73.6,scaleX:1}},{t:this.shape_8,p:{x:7.4}},{t:this.shape_189,p:{x:7.1,y:-74.9,scaleX:1}},{t:this.shape_188,p:{x:8.1,y:-74.6,scaleX:1}},{t:this.shape_5,p:{x:7.2}},{t:this.shape_85,p:{x:6.4}},{t:this.shape_232,p:{scaleX:0.692,x:6.7,y:-69.6}},{t:this.shape_83,p:{x:5.4}},{t:this.shape_231,p:{scaleX:0.692,x:5.2,y:-89.7}},{t:this.shape_164,p:{x:6.3,scaleX:0.692,y:-114.7}},{t:this.shape_230,p:{scaleX:0.692,x:4.8,y:-84.4}},{t:this.shape_229,p:{scaleX:0.692,x:6,y:-103}},{t:this.shape_228,p:{scaleX:0.692,x:4.7,y:-114.9}},{t:this.shape_163,p:{x:7.8,scaleX:0.692,y:-112.3}},{t:this.shape_162,p:{x:7.3,scaleX:0.692,y:-115.2}},{t:this.shape_200,p:{scaleX:0.692,x:7.5,y:-101.9}},{t:this.shape_227,p:{scaleX:0.692,x:8.8,y:-116.4}},{t:this.shape_160,p:{x:2.9,y:-90.9,scaleX:0.692}},{t:this.shape_226,p:{scaleX:0.692,x:5.3,y:-82.2}},{t:this.shape_225,p:{scaleX:0.692,x:6.8,y:-73.1}},{t:this.shape_224,p:{scaleX:0.692,x:4.4,y:-84.5}},{t:this.shape_223,p:{scaleX:0.692,x:6.6,y:-75}},{t:this.shape_222,p:{scaleX:0.692,x:5.2,y:-90.8}},{t:this.shape_198,p:{scaleX:0.692,x:6.8,y:-84.5}},{t:this.shape_158,p:{x:7,scaleX:0.692,y:-117.8}},{t:this.shape_221,p:{scaleX:0.692,x:5.9,y:-80.4}},{t:this.shape_220,p:{scaleX:0.692,x:6.5,y:-77.4}},{t:this.shape_219,p:{scaleX:0.692,x:6.3,y:-78.9}},{t:this.shape_197,p:{scaleX:0.692,x:5.5,y:-88.8}},{t:this.shape_156,p:{x:3.2,y:-93.9,scaleX:0.692}},{t:this.shape_195,p:{scaleX:0.692,x:9,y:-106.3}},{t:this.shape_154,p:{x:6.2,scaleX:0.692,y:-86}},{t:this.shape_194,p:{scaleX:0.692,x:6.2,y:-98.2}},{t:this.shape_218,p:{scaleX:0.692,x:6.2,y:-79.4}},{t:this.shape_152,p:{x:3,y:-93.2,scaleX:0.692}},{t:this.shape_192,p:{scaleX:0.692,x:4.9,y:-97.5}},{t:this.shape_68,p:{x:8}},{t:this.shape_150,p:{x:7.8,scaleX:0.692,y:-108.2}},{t:this.shape_67,p:{x:5.1}},{t:this.shape_217,p:{scaleX:0.692,x:6.9,y:-73}},{t:this.shape_149,p:{x:9.3,scaleX:0.692,y:-115.1}},{t:this.shape_216,p:{scaleX:0.692,x:7.5,y:-70.3}},{t:this.shape_124,p:{x:5.4,scaleX:0.692,y:-65,scaleY:1}},{t:this.shape_215,p:{scaleX:0.692,x:6.3,y:-67.9}},{t:this.shape_148,p:{x:3.1,y:-90.4,scaleX:0.692}},{t:this.shape_147,p:{x:9.2,scaleX:0.692,y:-112.8}},{t:this.shape_214,p:{scaleX:0.692,x:7.5,y:-76.1}},{t:this.shape_146,p:{x:9.2,scaleX:0.692,y:-115.4}},{t:this.shape_213,p:{scaleX:0.692,x:6.9,y:-76.5}},{t:this.shape_212,p:{scaleX:0.692,x:7.4,y:-68.3}},{t:this.shape_145,p:{x:4.2,y:-91.1,scaleX:0.692}},{t:this.shape_211,p:{scaleX:0.692,x:4.4,y:-94.6}},{t:this.shape_210,p:{scaleX:0.692,x:7.5,y:-74.1}},{t:this.shape_144,p:{x:4.2,y:-92.4,scaleX:0.692}},{t:this.shape_57,p:{x:7.9}},{t:this.shape_143,p:{x:4.9,y:-92,scaleX:0.692}},{t:this.shape_209,p:{scaleX:0.692,x:4.3,y:-93.4}},{t:this.shape_208,p:{scaleX:0.692,x:7.5,y:-78}},{t:this.shape_187,p:{scaleX:0.692,x:4.6,y:-95.6}},{t:this.shape_207,p:{scaleX:0.692,x:5.9,y:-80.8}},{t:this.shape_4,p:{x:-1.1,y:-137.6}},{t:this.shape_3,p:{x:-1.1,y:-137.6}},{t:this.shape_170},{t:this.shape_141,p:{x:10.4,scaleX:0.643,y:-115.2,scaleY:1}},{t:this.shape_113,p:{x:9.1}},{t:this.shape_186,p:{scaleX:0.643,x:9,y:-135.3}},{t:this.shape_185,p:{scaleX:0.643,x:8.6,y:-130}},{t:this.shape_169},{t:this.shape_168},{t:this.shape_161,p:{scaleX:0.643,x:11.1,y:-147.6}},{t:this.shape_104,p:{x:6.8,y:-136.5,scaleX:0.643}},{t:this.shape_184,p:{scaleX:0.643,x:9,y:-127.9}},{t:this.shape_134,p:{x:10.4,scaleX:0.643,y:-118.8,scaleY:1}},{t:this.shape_183,p:{scaleX:0.643,x:8.2,y:-130.2}},{t:this.shape_182,p:{scaleX:0.643,x:10.3,y:-120.6}},{t:this.shape_181,p:{scaleX:0.643,x:9,y:-136.4}},{t:this.shape_159,p:{scaleX:0.643,x:10.4,y:-130.2}},{t:this.shape_180,p:{scaleX:0.643,x:9.6,y:-126}},{t:this.shape_179,p:{scaleX:0.643,x:10.2,y:-123}},{t:this.shape_178,p:{scaleX:0.643,x:9.9,y:-124.6}},{t:this.shape_157,p:{scaleX:0.643,x:9.2,y:-134.5}},{t:this.shape_100,p:{x:7.1,y:-139.5,scaleX:0.643}},{t:this.shape_155,p:{scaleX:0.643,x:12.5,y:-152}},{t:this.shape_98,p:{scaleX:0.643,x:9.9,y:-131.6,scaleY:1}},{t:this.shape_153,p:{scaleX:0.643,x:9.8,y:-143.8}},{t:this.shape_177,p:{scaleX:0.643,x:9.9,y:-125}},{t:this.shape_96,p:{x:6.9,y:-138.8,scaleX:0.643}},{t:this.shape_151,p:{scaleX:0.643,x:8.6,y:-143.2}},{t:this.shape_112,p:{x:11.4}},{t:this.shape_167},{t:this.shape_111,p:{x:8.8}},{t:this.shape_126,p:{x:10.5,scaleX:0.643,y:-118.6,scaleY:1}},{t:this.shape_125,p:{x:11.1,scaleX:0.643,y:-116,scaleY:1}},{t:this.shape_64,p:{scaleX:0.643,x:9.1,y:-110.6,scaleY:1}},{t:this.shape_123,p:{x:9.9,scaleX:0.643,y:-113.5,scaleY:1}},{t:this.shape_92,p:{x:7,y:-136.1,scaleX:0.643}},{t:this.shape_176,p:{scaleX:0.643,x:11.1,y:-121.8}},{t:this.shape_175,p:{scaleX:0.643,x:10.5,y:-122.2}},{t:this.shape_120,p:{x:10.9,scaleX:0.643,y:-114,scaleY:1}},{t:this.shape_89,p:{x:8,y:-136.7,scaleX:0.643}},{t:this.shape_174,p:{scaleX:0.643,x:8.2,y:-140.2}},{t:this.shape_118,p:{x:11.1,scaleX:0.643,y:-119.7,scaleY:1}},{t:this.shape_88,p:{x:8,y:-138,scaleX:0.643}},{t:this.shape_110,p:{x:11.1}},{t:this.shape_109,p:{x:11.4,scaleX:0.643,scaleY:1,y:-108.7}},{t:this.shape_87,p:{x:8.7,y:-137.7,scaleX:0.643}},{t:this.shape_173,p:{scaleX:0.643,x:8.1,y:-139.1}},{t:this.shape_172,p:{scaleX:0.643,x:11.1,y:-123.7}},{t:this.shape_142,p:{scaleX:0.643,x:8.4,y:-141.3}},{t:this.shape_171,p:{scaleX:0.643,x:9.6,y:-126.5}},{t:this.shape_166},{t:this.shape_140,p:{scaleX:0.731,x:6.1,y:-161.4,scaleY:1}},{t:this.shape_108,p:{scaleX:0.731,x:7.2,y:-186.5,scaleY:1}},{t:this.shape_139,p:{scaleX:0.731,x:5.6,y:-156.1,scaleY:1}},{t:this.shape_138,p:{x:6.8,scaleX:0.731,y:-174.8,scaleY:1}},{t:this.shape_137,p:{x:5.5,scaleX:0.731,y:-186.7,scaleY:1}},{t:this.shape_107,p:{scaleX:0.731,x:8.8,y:-184,scaleY:1}},{t:this.shape_106,p:{scaleX:0.731,x:8.2,y:-187,scaleY:1}},{t:this.shape_105,p:{scaleX:0.731,x:8.5,y:-173.7,scaleY:1}},{t:this.shape_136,p:{x:9.8,scaleX:0.731,y:-188.2,scaleY:1}},{t:this.shape_42,p:{x:3.6,y:-162.6,scaleX:0.731,scaleY:1}},{t:this.shape_135,p:{scaleX:0.731,x:6.1,y:-154,scaleY:1}},{t:this.shape_133,p:{scaleX:0.731,x:5.2,y:-156.3,scaleY:1}},{t:this.shape_132,p:{scaleX:0.731,x:7.5,y:-146.7,scaleY:1}},{t:this.shape_131,p:{scaleX:0.731,x:6,y:-162.5,scaleY:1}},{t:this.shape_103,p:{scaleX:0.731,x:7.7,y:-156.3,scaleY:1}},{t:this.shape_102,p:{scaleX:0.731,x:7.9,y:-189.5,scaleY:1}},{t:this.shape_130,p:{scaleX:0.731,x:6.7,y:-152.1,scaleY:1}},{t:this.shape_129,p:{scaleX:0.731,x:7.4,y:-149.1,scaleY:1}},{t:this.shape_128,p:{scaleX:0.731,x:7.1,y:-150.7,scaleY:1}},{t:this.shape_101,p:{scaleX:0.731,x:6.3,y:-160.6,scaleY:1}},{t:this.shape_35,p:{x:3.9,y:-165.6,scaleX:0.731,scaleY:1}},{t:this.shape_99,p:{scaleX:0.731,x:10.1,y:-178.1,scaleY:1}},{t:this.shape_165},{t:this.shape_97,p:{scaleX:0.731,x:7,y:-169.9,scaleY:1}},{t:this.shape_127,p:{scaleX:0.731,x:7.1,y:-151.1,scaleY:1}},{t:this.shape_31,p:{x:3.6,y:-164.9,scaleX:0.731,scaleY:1}},{t:this.shape_95,p:{scaleX:0.731,x:5.6,y:-169.3,scaleY:1}},{t:this.shape_94,p:{scaleX:0.731,x:8.8,y:-179.9,scaleY:1}},{t:this.shape_93,p:{scaleX:0.731,x:10.3,y:-186.8,scaleY:1}},{t:this.shape_27,p:{x:3.8,y:-162.2,scaleX:0.731,scaleY:1}},{t:this.shape_91,p:{scaleX:0.731,x:10.2,y:-184.6,scaleY:1}},{t:this.shape_122,p:{scaleX:0.731,x:8.4,y:-147.9,scaleY:1}},{t:this.shape_90,p:{scaleX:0.731,x:10.2,y:-187.1,scaleY:1}},{t:this.shape_121,p:{scaleX:0.731,x:7.8,y:-148.3,scaleY:1}},{t:this.shape_23,p:{x:4.9,y:-162.8,scaleX:0.731,scaleY:1}},{t:this.shape_119,p:{scaleX:0.731,x:5.2,y:-166.3,scaleY:1}},{t:this.shape_21,p:{x:5,y:-164.1,scaleX:0.731,scaleY:1}},{t:this.shape_20,p:{x:5.7,y:-163.8,scaleX:0.731,scaleY:1}},{t:this.shape_117,p:{scaleX:0.731,x:5.1,y:-165.2,scaleY:1}},{t:this.shape_116,p:{scaleX:0.731,x:8.4,y:-149.8,scaleY:1}},{t:this.shape_86,p:{scaleX:0.731,x:5.4,y:-167.4,scaleY:1}},{t:this.shape_115,p:{scaleX:0.731,x:6.7,y:-152.6,scaleY:1}},{t:this.instance_31},{t:this.shape_206},{t:this.shape_84,p:{scaleX:0.688,x:9.1,y:-182.8,scaleY:1}},{t:this.shape_205},{t:this.shape_82,p:{scaleX:0.688,x:7.6,y:-202.9,scaleY:1}},{t:this.shape_50,p:{scaleX:0.688,x:8.6,y:-227.9,scaleY:1}},{t:this.shape_81,p:{scaleX:0.688,x:7.2,y:-197.6,scaleY:1}},{t:this.shape_80,p:{scaleX:0.688,x:8.3,y:-216.2,scaleY:1}},{t:this.shape_79,p:{scaleX:0.688,x:7.1,y:-228.1,scaleY:1}},{t:this.shape_46,p:{scaleX:0.688,x:10.2,y:-225.5,scaleY:1}},{t:this.shape_45,p:{scaleX:0.688,x:9.6,y:-228.4,scaleY:1}},{t:this.shape_44,p:{scaleX:0.688,x:9.9,y:-215.1,scaleY:1}},{t:this.shape_78,p:{scaleX:0.688,x:11.1,y:-229.6,scaleY:1}},{t:this.shape_15,p:{scaleX:0.688,x:5.3,y:-204.1,scaleY:1}},{t:this.shape_77,p:{scaleX:0.688,x:7.7,y:-195.4,scaleY:1}},{t:this.shape_76,p:{scaleX:0.688,x:9.1,y:-186.3,scaleY:1}},{t:this.shape_75,p:{scaleX:0.688,x:6.8,y:-197.7,scaleY:1}},{t:this.shape_74,p:{scaleX:0.688,x:9,y:-188.2,scaleY:1}},{t:this.shape_73,p:{scaleX:0.688,x:7.6,y:-204,scaleY:1}},{t:this.shape_38,p:{scaleX:0.688,x:9.1,y:-197.7,scaleY:1}},{t:this.shape_37,p:{scaleX:0.688,x:9.3,y:-231,scaleY:1}},{t:this.shape_72,p:{scaleX:0.688,x:8.3,y:-193.6,scaleY:1}},{t:this.shape_71,p:{scaleX:0.688,x:8.9,y:-190.6,scaleY:1}},{t:this.shape_70,p:{scaleX:0.688,x:8.6,y:-192.1,scaleY:1}},{t:this.shape_36,p:{scaleX:0.688,x:7.8,y:-202,scaleY:1}},{t:this.shape_12,p:{scaleX:0.688,x:5.5,y:-207.1,scaleY:1}},{t:this.shape_34,p:{scaleX:0.688,x:11.4,y:-219.5,scaleY:1}},{t:this.shape_33,p:{scaleX:0.688,x:8.5,y:-199.2,scaleY:1}},{t:this.shape_32,p:{scaleX:0.688,x:8.5,y:-211.4,scaleY:1}},{t:this.shape_69,p:{scaleX:0.688,x:8.6,y:-192.6,scaleY:1}},{t:this.shape_11,p:{scaleX:0.688,x:5.3,y:-206.4,scaleY:1}},{t:this.shape_30,p:{scaleX:0.688,x:7.2,y:-210.7,scaleY:1}},{t:this.shape_204},{t:this.shape_29,p:{scaleX:0.688,x:10.2,y:-221.4,scaleY:1}},{t:this.shape_203},{t:this.shape_66,p:{scaleX:0.688,x:9.3,y:-186.2,scaleY:1}},{t:this.shape_28,p:{scaleX:0.688,x:11.6,y:-228.3,scaleY:1}},{t:this.shape_65,p:{scaleX:0.688,x:9.8,y:-183.5,scaleY:1}},{t:this.shape_202},{t:this.shape_63,p:{scaleX:0.688,x:8.6,y:-181.1,scaleY:1}},{t:this.shape_10,p:{scaleX:0.688,x:5.4,y:-203.6,scaleY:1}},{t:this.shape_26,p:{scaleX:0.688,x:11.5,y:-226,scaleY:1}},{t:this.shape_62,p:{scaleX:0.688,x:9.9,y:-189.3,scaleY:1}},{t:this.shape_25,p:{scaleX:0.688,x:11.5,y:-228.6,scaleY:1}},{t:this.shape_61,p:{scaleX:0.688,x:9.3,y:-189.7,scaleY:1}},{t:this.shape_60,p:{scaleX:0.688,x:9.7,y:-181.5,scaleY:1}},{t:this.shape_9,p:{scaleX:0.688,x:6.6,y:-204.3,scaleY:1}},{t:this.shape_59,p:{scaleX:0.688,x:6.8,y:-207.8,scaleY:1}},{t:this.shape_58,p:{scaleX:0.688,x:9.9,y:-187.3,scaleY:1}},{t:this.shape_7,p:{scaleX:0.688,x:6.6,y:-205.6,scaleY:1}},{t:this.shape_201},{t:this.shape_6,p:{scaleX:0.688,x:7.3,y:-205.2,scaleY:1}},{t:this.shape_56,p:{scaleX:0.688,x:6.7,y:-206.6,scaleY:1}},{t:this.shape_55,p:{scaleX:0.688,x:9.8,y:-191.2,scaleY:1}},{t:this.shape_18,p:{scaleX:0.688,x:7,y:-208.8,scaleY:1}},{t:this.shape_54,p:{scaleX:0.688,x:8.2,y:-194,scaleY:1}}]},3).to({state:[{t:this.shape_53,p:{x:1.1}},{t:this.shape_52,p:{x:53.4}},{t:this.shape_51,p:{x:2.2}},{t:this.shape_311,p:{scaleX:1,x:3.7,y:-70.6}},{t:this.shape_49,p:{x:1}},{t:this.shape_48,p:{x:3.2}},{t:this.shape_47,p:{x:1.4}},{t:this.shape_310,p:{scaleX:1,x:5.9,y:-68.1}},{t:this.shape_309,p:{scaleX:1,x:5.1,y:-71.1}},{t:this.shape_308,p:{scaleX:1,x:5.4,y:-57.8}},{t:this.shape_43,p:{x:7.3}},{t:this.shape_307,p:{x:-1.2,y:-46.7}},{t:this.shape_41,p:{x:2.1}},{t:this.shape_40,p:{x:1}},{t:this.shape_39,p:{x:2.1}},{t:this.shape_306,p:{scaleX:1,x:4.4,y:-40.4}},{t:this.shape_305,p:{scaleX:1,x:4.6,y:-73.6}},{t:this.shape_304,p:{scaleX:1,x:2.5,y:-44.7}},{t:this.shape_303,p:{x:-0.8,y:-49.7}},{t:this.shape_302,p:{scaleX:1,x:7.6,y:-62.2}},{t:this.shape_301,p:{scaleX:1,x:3.5,y:-41.8}},{t:this.shape_300,p:{scaleX:1,x:3.5,y:-54}},{t:this.shape_299,p:{x:-1.1,y:-49}},{t:this.shape_298,p:{scaleX:1,x:1.6,y:-53.4}},{t:this.shape_297,p:{scaleX:1,x:5.9,y:-64}},{t:this.shape_296,p:{scaleX:1,x:8,y:-70.9}},{t:this.shape_295,p:{x:-1,y:-46.3}},{t:this.shape_294,p:{scaleX:1,x:7.8,y:-68.7}},{t:this.shape_293,p:{scaleX:1,x:7.8,y:-71.2}},{t:this.shape_24,p:{x:53.3}},{t:this.shape_292,p:{x:0.6,y:-46.9}},{t:this.shape_22,p:{x:1}},{t:this.shape_291,p:{x:0.7,y:-48.2}},{t:this.shape_290,p:{x:1.7,y:-47.9}},{t:this.shape_19,p:{x:0.8}},{t:this.shape_289,p:{scaleX:1,x:1.2,y:-51.5}},{t:this.shape_17,p:{x:8.6}},{t:this.shape_16,p:{x:6.1}},{t:this.shape_251,p:{x:5.2,y:-73.4,scaleX:1}},{t:this.shape_14,p:{x:8.5}},{t:this.shape_13,p:{x:8.9}},{t:this.shape_247,p:{x:5.6,y:-76.4,scaleX:1}},{t:this.shape_243,p:{x:5.3,y:-75.7,scaleX:1}},{t:this.shape_239,p:{x:5.4,y:-73,scaleX:1}},{t:this.shape_236,p:{x:7,y:-73.6,scaleX:1}},{t:this.shape_8,p:{x:7.4}},{t:this.shape_235,p:{x:7.1,y:-74.9,scaleX:1}},{t:this.shape_234,p:{x:8.1,y:-74.6,scaleX:1}},{t:this.shape_5,p:{x:7.2}},{t:this.shape_85,p:{x:6.4}},{t:this.shape_288,p:{scaleX:0.692,x:6.7,y:-69.6}},{t:this.shape_83,p:{x:5.4}},{t:this.shape_287,p:{scaleX:0.692,x:5.2,y:-89.7}},{t:this.shape_255,p:{scaleX:0.692,x:6.3,y:-114.7}},{t:this.shape_286,p:{scaleX:0.692,x:4.8,y:-84.4}},{t:this.shape_285,p:{scaleX:0.692,x:6,y:-103}},{t:this.shape_284,p:{scaleX:0.692,x:4.7,y:-114.9}},{t:this.shape_254,p:{scaleX:0.692,x:7.8,y:-112.3}},{t:this.shape_253,p:{scaleX:0.692,x:7.3,y:-115.2}},{t:this.shape_252,p:{scaleX:0.692,x:7.5,y:-101.9}},{t:this.shape_283,p:{scaleX:0.692,x:8.8,y:-116.4}},{t:this.shape_199,p:{x:2.9,y:-90.9,scaleX:0.692}},{t:this.shape_282,p:{scaleX:0.692,x:5.3,y:-82.2}},{t:this.shape_281,p:{scaleX:0.692,x:6.8,y:-73.1}},{t:this.shape_280,p:{scaleX:0.692,x:4.4,y:-84.5}},{t:this.shape_279,p:{scaleX:0.692,x:6.6,y:-75}},{t:this.shape_278,p:{scaleX:0.692,x:5.2,y:-90.8}},{t:this.shape_250,p:{scaleX:0.692,x:6.8,y:-84.5}},{t:this.shape_249,p:{scaleX:0.692,x:7,y:-117.8}},{t:this.shape_277,p:{scaleX:0.692,x:5.9,y:-80.4}},{t:this.shape_276,p:{scaleX:0.692,x:6.5,y:-77.4}},{t:this.shape_275,p:{scaleX:0.692,x:6.3,y:-78.9}},{t:this.shape_248,p:{scaleX:0.692,x:5.5,y:-88.8}},{t:this.shape_196,p:{x:3.2,y:-93.9,scaleX:0.692}},{t:this.shape_246,p:{scaleX:0.692,x:9,y:-106.3}},{t:this.shape_245,p:{scaleX:0.692,x:6.2,y:-86}},{t:this.shape_244,p:{scaleX:0.692,x:6.2,y:-98.2}},{t:this.shape_274,p:{scaleX:0.692,x:6.2,y:-79.4}},{t:this.shape_193,p:{x:3,y:-93.2,scaleX:0.692}},{t:this.shape_242,p:{scaleX:0.692,x:4.9,y:-97.5}},{t:this.shape_68,p:{x:8}},{t:this.shape_241,p:{scaleX:0.692,x:7.8,y:-108.2}},{t:this.shape_67,p:{x:5.1}},{t:this.shape_273,p:{scaleX:0.692,x:6.9,y:-73}},{t:this.shape_240,p:{scaleX:0.692,x:9.3,y:-115.1}},{t:this.shape_272,p:{scaleX:0.692,x:7.5,y:-70.3}},{t:this.shape_271,p:{scaleX:0.692,x:5.4,y:-65}},{t:this.shape_270,p:{scaleX:0.692,x:6.3,y:-67.9}},{t:this.shape_191,p:{x:3.1,y:-90.4,scaleX:0.692}},{t:this.shape_238,p:{scaleX:0.692,x:9.2,y:-112.8}},{t:this.shape_269,p:{scaleX:0.692,x:7.5,y:-76.1}},{t:this.shape_237,p:{scaleX:0.692,x:9.2,y:-115.4}},{t:this.shape_268,p:{scaleX:0.692,x:6.9,y:-76.5}},{t:this.shape_267,p:{scaleX:0.692,x:7.4,y:-68.3}},{t:this.shape_190,p:{x:4.2,y:-91.1,scaleX:0.692}},{t:this.shape_266,p:{scaleX:0.692,x:4.4,y:-94.6}},{t:this.shape_265,p:{scaleX:0.692,x:7.5,y:-74.1}},{t:this.shape_189,p:{x:4.2,y:-92.4,scaleX:0.692}},{t:this.shape_57,p:{x:7.9}},{t:this.shape_188,p:{x:4.9,y:-92,scaleX:0.692}},{t:this.shape_264,p:{scaleX:0.692,x:4.3,y:-93.4}},{t:this.shape_263,p:{scaleX:0.692,x:7.5,y:-78}},{t:this.shape_233,p:{scaleX:0.692,x:4.6,y:-95.6}},{t:this.shape_262,p:{scaleX:0.692,x:5.9,y:-80.8}},{t:this.shape_4,p:{x:-1.1,y:-137.6}},{t:this.shape_3,p:{x:-1.1,y:-137.6}},{t:this.shape_170},{t:this.shape_232,p:{scaleX:0.643,x:10.4,y:-115.2}},{t:this.shape_113,p:{x:9.1}},{t:this.shape_231,p:{scaleX:0.643,x:9,y:-135.3}},{t:this.shape_230,p:{scaleX:0.643,x:8.6,y:-130}},{t:this.shape_169},{t:this.shape_168},{t:this.shape_200,p:{scaleX:0.643,x:11.1,y:-147.6}},{t:this.shape_160,p:{x:6.8,y:-136.5,scaleX:0.643}},{t:this.shape_226,p:{scaleX:0.643,x:9,y:-127.9}},{t:this.shape_225,p:{scaleX:0.643,x:10.4,y:-118.8}},{t:this.shape_224,p:{scaleX:0.643,x:8.2,y:-130.2}},{t:this.shape_223,p:{scaleX:0.643,x:10.3,y:-120.6}},{t:this.shape_222,p:{scaleX:0.643,x:9,y:-136.4}},{t:this.shape_198,p:{scaleX:0.643,x:10.4,y:-130.2}},{t:this.shape_221,p:{scaleX:0.643,x:9.6,y:-126}},{t:this.shape_220,p:{scaleX:0.643,x:10.2,y:-123}},{t:this.shape_219,p:{scaleX:0.643,x:9.9,y:-124.6}},{t:this.shape_197,p:{scaleX:0.643,x:9.2,y:-134.5}},{t:this.shape_156,p:{x:7.1,y:-139.5,scaleX:0.643}},{t:this.shape_195,p:{scaleX:0.643,x:12.5,y:-152}},{t:this.shape_154,p:{x:9.9,scaleX:0.643,y:-131.6}},{t:this.shape_194,p:{scaleX:0.643,x:9.8,y:-143.8}},{t:this.shape_218,p:{scaleX:0.643,x:9.9,y:-125}},{t:this.shape_152,p:{x:6.9,y:-138.8,scaleX:0.643}},{t:this.shape_192,p:{scaleX:0.643,x:8.6,y:-143.2}},{t:this.shape_112,p:{x:11.4}},{t:this.shape_167},{t:this.shape_111,p:{x:8.8}},{t:this.shape_217,p:{scaleX:0.643,x:10.5,y:-118.6}},{t:this.shape_216,p:{scaleX:0.643,x:11.1,y:-116}},{t:this.shape_124,p:{x:9.1,scaleX:0.643,y:-110.6,scaleY:1}},{t:this.shape_215,p:{scaleX:0.643,x:9.9,y:-113.5}},{t:this.shape_148,p:{x:7,y:-136.1,scaleX:0.643}},{t:this.shape_214,p:{scaleX:0.643,x:11.1,y:-121.8}},{t:this.shape_213,p:{scaleX:0.643,x:10.5,y:-122.2}},{t:this.shape_212,p:{scaleX:0.643,x:10.9,y:-114}},{t:this.shape_145,p:{x:8,y:-136.7,scaleX:0.643}},{t:this.shape_211,p:{scaleX:0.643,x:8.2,y:-140.2}},{t:this.shape_210,p:{scaleX:0.643,x:11.1,y:-119.7}},{t:this.shape_144,p:{x:8,y:-138,scaleX:0.643}},{t:this.shape_110,p:{x:11.1}},{t:this.shape_261},{t:this.shape_143,p:{x:8.7,y:-137.7,scaleX:0.643}},{t:this.shape_209,p:{scaleX:0.643,x:8.1,y:-139.1}},{t:this.shape_208,p:{scaleX:0.643,x:11.1,y:-123.7}},{t:this.shape_187,p:{scaleX:0.643,x:8.4,y:-141.3}},{t:this.shape_207,p:{scaleX:0.643,x:9.6,y:-126.5}},{t:this.shape_166},{t:this.shape_186,p:{scaleX:0.731,x:6.1,y:-161.4}},{t:this.shape_164,p:{x:7.2,scaleX:0.731,y:-186.5}},{t:this.shape_185,p:{scaleX:0.731,x:5.6,y:-156.1}},{t:this.shape_229,p:{scaleX:0.731,x:6.8,y:-174.8}},{t:this.shape_228,p:{scaleX:0.731,x:5.5,y:-186.7}},{t:this.shape_163,p:{x:8.8,scaleX:0.731,y:-184}},{t:this.shape_162,p:{x:8.2,scaleX:0.731,y:-187}},{t:this.shape_161,p:{scaleX:0.731,x:8.5,y:-173.7}},{t:this.shape_227,p:{scaleX:0.731,x:9.8,y:-188.2}},{t:this.shape_104,p:{x:3.6,y:-162.6,scaleX:0.731}},{t:this.shape_184,p:{scaleX:0.731,x:6.1,y:-154}},{t:this.shape_183,p:{scaleX:0.731,x:5.2,y:-156.3}},{t:this.shape_182,p:{scaleX:0.731,x:7.5,y:-146.7}},{t:this.shape_181,p:{scaleX:0.731,x:6,y:-162.5}},{t:this.shape_159,p:{scaleX:0.731,x:7.7,y:-156.3}},{t:this.shape_158,p:{x:7.9,scaleX:0.731,y:-189.5}},{t:this.shape_180,p:{scaleX:0.731,x:6.7,y:-152.1}},{t:this.shape_179,p:{scaleX:0.731,x:7.4,y:-149.1}},{t:this.shape_178,p:{scaleX:0.731,x:7.1,y:-150.7}},{t:this.shape_157,p:{scaleX:0.731,x:6.3,y:-160.6}},{t:this.shape_100,p:{x:3.9,y:-165.6,scaleX:0.731}},{t:this.shape_155,p:{scaleX:0.731,x:10.1,y:-178.1}},{t:this.shape_165},{t:this.shape_153,p:{scaleX:0.731,x:7,y:-169.9}},{t:this.shape_177,p:{scaleX:0.731,x:7.1,y:-151.1}},{t:this.shape_96,p:{x:3.6,y:-164.9,scaleX:0.731}},{t:this.shape_151,p:{scaleX:0.731,x:5.6,y:-169.3}},{t:this.shape_150,p:{x:8.8,scaleX:0.731,y:-179.9}},{t:this.shape_149,p:{x:10.3,scaleX:0.731,y:-186.8}},{t:this.shape_92,p:{x:3.8,y:-162.2,scaleX:0.731}},{t:this.shape_147,p:{x:10.2,scaleX:0.731,y:-184.6}},{t:this.shape_176,p:{scaleX:0.731,x:8.4,y:-147.9}},{t:this.shape_146,p:{x:10.2,scaleX:0.731,y:-187.1}},{t:this.shape_175,p:{scaleX:0.731,x:7.8,y:-148.3}},{t:this.shape_89,p:{x:4.9,y:-162.8,scaleX:0.731}},{t:this.shape_174,p:{scaleX:0.731,x:5.2,y:-166.3}},{t:this.shape_88,p:{x:5,y:-164.1,scaleX:0.731}},{t:this.shape_87,p:{x:5.7,y:-163.8,scaleX:0.731}},{t:this.shape_173,p:{scaleX:0.731,x:5.1,y:-165.2}},{t:this.shape_172,p:{scaleX:0.731,x:8.4,y:-149.8}},{t:this.shape_142,p:{scaleX:0.731,x:5.4,y:-167.4}},{t:this.shape_171,p:{scaleX:0.731,x:6.7,y:-152.6}},{t:this.instance_31},{t:this.shape_206},{t:this.shape_141,p:{x:9.1,scaleX:0.688,y:-182.8,scaleY:1}},{t:this.shape_205},{t:this.shape_140,p:{scaleX:0.688,x:7.6,y:-202.9,scaleY:1}},{t:this.shape_108,p:{scaleX:0.688,x:8.6,y:-227.9,scaleY:1}},{t:this.shape_139,p:{scaleX:0.688,x:7.2,y:-197.6,scaleY:1}},{t:this.shape_138,p:{x:8.3,scaleX:0.688,y:-216.2,scaleY:1}},{t:this.shape_137,p:{x:7.1,scaleX:0.688,y:-228.1,scaleY:1}},{t:this.shape_107,p:{scaleX:0.688,x:10.2,y:-225.5,scaleY:1}},{t:this.shape_106,p:{scaleX:0.688,x:9.6,y:-228.4,scaleY:1}},{t:this.shape_105,p:{scaleX:0.688,x:9.9,y:-215.1,scaleY:1}},{t:this.shape_136,p:{x:11.1,scaleX:0.688,y:-229.6,scaleY:1}},{t:this.shape_42,p:{x:5.3,y:-204.1,scaleX:0.688,scaleY:1}},{t:this.shape_135,p:{scaleX:0.688,x:7.7,y:-195.4,scaleY:1}},{t:this.shape_134,p:{x:9.1,scaleX:0.688,y:-186.3,scaleY:1}},{t:this.shape_133,p:{scaleX:0.688,x:6.8,y:-197.7,scaleY:1}},{t:this.shape_132,p:{scaleX:0.688,x:9,y:-188.2,scaleY:1}},{t:this.shape_131,p:{scaleX:0.688,x:7.6,y:-204,scaleY:1}},{t:this.shape_103,p:{scaleX:0.688,x:9.1,y:-197.7,scaleY:1}},{t:this.shape_102,p:{scaleX:0.688,x:9.3,y:-231,scaleY:1}},{t:this.shape_130,p:{scaleX:0.688,x:8.3,y:-193.6,scaleY:1}},{t:this.shape_129,p:{scaleX:0.688,x:8.9,y:-190.6,scaleY:1}},{t:this.shape_128,p:{scaleX:0.688,x:8.6,y:-192.1,scaleY:1}},{t:this.shape_101,p:{scaleX:0.688,x:7.8,y:-202,scaleY:1}},{t:this.shape_35,p:{x:5.5,y:-207.1,scaleX:0.688,scaleY:1}},{t:this.shape_99,p:{scaleX:0.688,x:11.4,y:-219.5,scaleY:1}},{t:this.shape_98,p:{scaleX:0.688,x:8.5,y:-199.2,scaleY:1}},{t:this.shape_97,p:{scaleX:0.688,x:8.5,y:-211.4,scaleY:1}},{t:this.shape_127,p:{scaleX:0.688,x:8.6,y:-192.6,scaleY:1}},{t:this.shape_31,p:{x:5.3,y:-206.4,scaleX:0.688,scaleY:1}},{t:this.shape_95,p:{scaleX:0.688,x:7.2,y:-210.7,scaleY:1}},{t:this.shape_204},{t:this.shape_94,p:{scaleX:0.688,x:10.2,y:-221.4,scaleY:1}},{t:this.shape_203},{t:this.shape_126,p:{x:9.3,scaleX:0.688,y:-186.2,scaleY:1}},{t:this.shape_93,p:{scaleX:0.688,x:11.6,y:-228.3,scaleY:1}},{t:this.shape_125,p:{x:9.8,scaleX:0.688,y:-183.5,scaleY:1}},{t:this.shape_202},{t:this.shape_123,p:{x:8.6,scaleX:0.688,y:-181.1,scaleY:1}},{t:this.shape_27,p:{x:5.4,y:-203.6,scaleX:0.688,scaleY:1}},{t:this.shape_91,p:{scaleX:0.688,x:11.5,y:-226,scaleY:1}},{t:this.shape_122,p:{scaleX:0.688,x:9.9,y:-189.3,scaleY:1}},{t:this.shape_90,p:{scaleX:0.688,x:11.5,y:-228.6,scaleY:1}},{t:this.shape_121,p:{scaleX:0.688,x:9.3,y:-189.7,scaleY:1}},{t:this.shape_120,p:{x:9.7,scaleX:0.688,y:-181.5,scaleY:1}},{t:this.shape_23,p:{x:6.6,y:-204.3,scaleX:0.688,scaleY:1}},{t:this.shape_119,p:{scaleX:0.688,x:6.8,y:-207.8,scaleY:1}},{t:this.shape_118,p:{x:9.9,scaleX:0.688,y:-187.3,scaleY:1}},{t:this.shape_21,p:{x:6.6,y:-205.6,scaleX:0.688,scaleY:1}},{t:this.shape_201},{t:this.shape_20,p:{x:7.3,y:-205.2,scaleX:0.688,scaleY:1}},{t:this.shape_117,p:{scaleX:0.688,x:6.7,y:-206.6,scaleY:1}},{t:this.shape_116,p:{scaleX:0.688,x:9.8,y:-191.2,scaleY:1}},{t:this.shape_86,p:{scaleX:0.688,x:7,y:-208.8,scaleY:1}},{t:this.shape_115,p:{scaleX:0.688,x:8.2,y:-194,scaleY:1}},{t:this.shape_260},{t:this.shape_84,p:{scaleX:0.654,x:11.2,y:-223,scaleY:0.88}},{t:this.shape_259},{t:this.shape_82,p:{scaleX:0.654,x:9.7,y:-240.7,scaleY:0.88}},{t:this.shape_50,p:{scaleX:0.654,x:10.7,y:-262.7,scaleY:0.88}},{t:this.shape_81,p:{scaleX:0.654,x:9.4,y:-236,scaleY:0.88}},{t:this.shape_80,p:{scaleX:0.654,x:10.4,y:-252.4,scaleY:0.88}},{t:this.shape_79,p:{scaleX:0.654,x:9.2,y:-262.9,scaleY:0.88}},{t:this.shape_46,p:{scaleX:0.654,x:12.2,y:-260.6,scaleY:0.88}},{t:this.shape_45,p:{scaleX:0.654,x:11.7,y:-263.2,scaleY:0.88}},{t:this.shape_44,p:{scaleX:0.654,x:11.9,y:-251.5,scaleY:0.88}},{t:this.shape_78,p:{scaleX:0.654,x:13.1,y:-264.2,scaleY:0.88}},{t:this.shape_15,p:{scaleX:0.654,x:7.5,y:-241.7,scaleY:0.88}},{t:this.shape_77,p:{scaleX:0.654,x:9.8,y:-234.1,scaleY:0.88}},{t:this.shape_76,p:{scaleX:0.654,x:11.2,y:-226.1,scaleY:0.88}},{t:this.shape_75,p:{scaleX:0.654,x:9,y:-236.1,scaleY:0.88}},{t:this.shape_74,p:{scaleX:0.654,x:11.1,y:-227.7,scaleY:0.88}},{t:this.shape_73,p:{scaleX:0.654,x:9.7,y:-241.6,scaleY:0.88}},{t:this.shape_38,p:{scaleX:0.654,x:11.2,y:-236.1,scaleY:0.88}},{t:this.shape_37,p:{scaleX:0.654,x:11.4,y:-265.4,scaleY:0.88}},{t:this.shape_72,p:{scaleX:0.654,x:10.4,y:-232.4,scaleY:0.88}},{t:this.shape_71,p:{scaleX:0.654,x:11,y:-229.8,scaleY:0.88}},{t:this.shape_70,p:{scaleX:0.654,x:10.7,y:-231.2,scaleY:0.88}},{t:this.shape_36,p:{scaleX:0.654,x:10,y:-239.9,scaleY:0.88}},{t:this.shape_12,p:{scaleX:0.654,x:7.8,y:-244.4,scaleY:0.88}},{t:this.shape_34,p:{scaleX:0.654,x:13.3,y:-255.3,scaleY:0.88}},{t:this.shape_33,p:{scaleX:0.654,x:10.6,y:-237.4,scaleY:0.88}},{t:this.shape_32,p:{scaleX:0.654,x:10.6,y:-248.2,scaleY:0.88}},{t:this.shape_69,p:{scaleX:0.654,x:10.7,y:-231.6,scaleY:0.88}},{t:this.shape_11,p:{scaleX:0.654,x:7.6,y:-243.7,scaleY:0.88}},{t:this.shape_30,p:{scaleX:0.654,x:9.4,y:-247.6,scaleY:0.88}},{t:this.shape_258},{t:this.shape_29,p:{scaleX:0.654,x:12.2,y:-256.9,scaleY:0.88}},{t:this.shape_257},{t:this.shape_66,p:{scaleX:0.654,x:11.3,y:-225.9,scaleY:0.88}},{t:this.shape_28,p:{scaleX:0.654,x:13.5,y:-263,scaleY:0.88}},{t:this.shape_65,p:{scaleX:0.654,x:11.9,y:-223.6,scaleY:0.88}},{t:this.shape_64,p:{scaleX:0.654,x:9.9,y:-218.9,scaleY:0.88}},{t:this.shape_63,p:{scaleX:0.654,x:10.7,y:-221.5,scaleY:0.88}},{t:this.shape_10,p:{scaleX:0.654,x:7.7,y:-241.3,scaleY:0.88}},{t:this.shape_26,p:{scaleX:0.654,x:13.5,y:-261.1,scaleY:0.88}},{t:this.shape_62,p:{scaleX:0.654,x:11.9,y:-228.7,scaleY:0.88}},{t:this.shape_25,p:{scaleX:0.654,x:13.5,y:-263.3,scaleY:0.88}},{t:this.shape_61,p:{scaleX:0.654,x:11.3,y:-229.1,scaleY:0.88}},{t:this.shape_60,p:{scaleX:0.654,x:11.7,y:-221.9,scaleY:0.88}},{t:this.shape_9,p:{scaleX:0.654,x:8.8,y:-241.9,scaleY:0.88}},{t:this.shape_59,p:{scaleX:0.654,x:9,y:-245,scaleY:0.88}},{t:this.shape_58,p:{scaleX:0.654,x:11.9,y:-226.9,scaleY:0.88}},{t:this.shape_7,p:{scaleX:0.654,x:8.8,y:-243,scaleY:0.88}},{t:this.shape_256},{t:this.shape_109,p:{x:12.2,scaleX:0.654,scaleY:0.88,y:-217.2}},{t:this.shape_6,p:{scaleX:0.654,x:9.4,y:-242.7,scaleY:0.88}},{t:this.shape_56,p:{scaleX:0.654,x:8.9,y:-244,scaleY:0.88}},{t:this.shape_55,p:{scaleX:0.654,x:11.9,y:-230.4,scaleY:0.88}},{t:this.shape_18,p:{scaleX:0.654,x:9.1,y:-245.9,scaleY:0.88}},{t:this.shape_54,p:{scaleX:0.654,x:10.4,y:-232.9,scaleY:0.88}}]},1).to({state:[{t:this.shape_53,p:{x:1.1}},{t:this.shape_52,p:{x:53.4}},{t:this.shape_51,p:{x:2.2}},{t:this.shape_364},{t:this.shape_49,p:{x:1}},{t:this.shape_48,p:{x:3.2}},{t:this.shape_47,p:{x:1.4}},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_43,p:{x:7.3}},{t:this.shape_360},{t:this.shape_41,p:{x:2.1}},{t:this.shape_40,p:{x:1}},{t:this.shape_39,p:{x:2.1}},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_24,p:{x:53.3}},{t:this.shape_345},{t:this.shape_22,p:{x:1}},{t:this.shape_344},{t:this.shape_343},{t:this.shape_19,p:{x:0.8}},{t:this.shape_342},{t:this.shape_17,p:{x:8.6}},{t:this.shape_16,p:{x:6.1}},{t:this.shape_307,p:{x:5.2,y:-73.4}},{t:this.shape_14,p:{x:8.5}},{t:this.shape_13,p:{x:8.9}},{t:this.shape_303,p:{x:5.6,y:-76.4}},{t:this.shape_299,p:{x:5.3,y:-75.7}},{t:this.shape_295,p:{x:5.4,y:-73}},{t:this.shape_292,p:{x:7,y:-73.6}},{t:this.shape_8,p:{x:7.4}},{t:this.shape_291,p:{x:7.1,y:-74.9}},{t:this.shape_290,p:{x:8.1,y:-74.6}},{t:this.shape_5,p:{x:7.2}},{t:this.shape_85,p:{x:6.4}},{t:this.shape_341},{t:this.shape_83,p:{x:5.4}},{t:this.shape_340},{t:this.shape_311,p:{scaleX:0.692,x:6.3,y:-114.7}},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_310,p:{scaleX:0.692,x:7.8,y:-112.3}},{t:this.shape_309,p:{scaleX:0.692,x:7.3,y:-115.2}},{t:this.shape_308,p:{scaleX:0.692,x:7.5,y:-101.9}},{t:this.shape_336},{t:this.shape_251,p:{x:2.9,y:-90.9,scaleX:0.692}},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_306,p:{scaleX:0.692,x:6.8,y:-84.5}},{t:this.shape_305,p:{scaleX:0.692,x:7,y:-117.8}},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_304,p:{scaleX:0.692,x:5.5,y:-88.8}},{t:this.shape_247,p:{x:3.2,y:-93.9,scaleX:0.692}},{t:this.shape_302,p:{scaleX:0.692,x:9,y:-106.3}},{t:this.shape_301,p:{scaleX:0.692,x:6.2,y:-86}},{t:this.shape_300,p:{scaleX:0.692,x:6.2,y:-98.2}},{t:this.shape_327},{t:this.shape_243,p:{x:3,y:-93.2,scaleX:0.692}},{t:this.shape_298,p:{scaleX:0.692,x:4.9,y:-97.5}},{t:this.shape_68,p:{x:8}},{t:this.shape_297,p:{scaleX:0.692,x:7.8,y:-108.2}},{t:this.shape_67,p:{x:5.1}},{t:this.shape_326},{t:this.shape_296,p:{scaleX:0.692,x:9.3,y:-115.1}},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_239,p:{x:3.1,y:-90.4,scaleX:0.692}},{t:this.shape_294,p:{scaleX:0.692,x:9.2,y:-112.8}},{t:this.shape_322},{t:this.shape_293,p:{scaleX:0.692,x:9.2,y:-115.4}},{t:this.shape_321},{t:this.shape_320},{t:this.shape_236,p:{x:4.2,y:-91.1,scaleX:0.692}},{t:this.shape_319},{t:this.shape_318},{t:this.shape_235,p:{x:4.2,y:-92.4,scaleX:0.692}},{t:this.shape_57,p:{x:7.9}},{t:this.shape_234,p:{x:4.9,y:-92,scaleX:0.692}},{t:this.shape_317},{t:this.shape_316},{t:this.shape_289,p:{scaleX:0.692,x:4.6,y:-95.6}},{t:this.shape_315},{t:this.shape_4,p:{x:-1.1,y:-137.6}},{t:this.shape_3,p:{x:-1.1,y:-137.6}},{t:this.shape_170},{t:this.shape_288,p:{scaleX:0.643,x:10.4,y:-115.2}},{t:this.shape_113,p:{x:9.1}},{t:this.shape_287,p:{scaleX:0.643,x:9,y:-135.3}},{t:this.shape_286,p:{scaleX:0.643,x:8.6,y:-130}},{t:this.shape_169},{t:this.shape_168},{t:this.shape_252,p:{scaleX:0.643,x:11.1,y:-147.6}},{t:this.shape_199,p:{x:6.8,y:-136.5,scaleX:0.643}},{t:this.shape_282,p:{scaleX:0.643,x:9,y:-127.9}},{t:this.shape_281,p:{scaleX:0.643,x:10.4,y:-118.8}},{t:this.shape_280,p:{scaleX:0.643,x:8.2,y:-130.2}},{t:this.shape_279,p:{scaleX:0.643,x:10.3,y:-120.6}},{t:this.shape_278,p:{scaleX:0.643,x:9,y:-136.4}},{t:this.shape_250,p:{scaleX:0.643,x:10.4,y:-130.2}},{t:this.shape_277,p:{scaleX:0.643,x:9.6,y:-126}},{t:this.shape_276,p:{scaleX:0.643,x:10.2,y:-123}},{t:this.shape_275,p:{scaleX:0.643,x:9.9,y:-124.6}},{t:this.shape_248,p:{scaleX:0.643,x:9.2,y:-134.5}},{t:this.shape_196,p:{x:7.1,y:-139.5,scaleX:0.643}},{t:this.shape_246,p:{scaleX:0.643,x:12.5,y:-152}},{t:this.shape_245,p:{scaleX:0.643,x:9.9,y:-131.6}},{t:this.shape_244,p:{scaleX:0.643,x:9.8,y:-143.8}},{t:this.shape_274,p:{scaleX:0.643,x:9.9,y:-125}},{t:this.shape_193,p:{x:6.9,y:-138.8,scaleX:0.643}},{t:this.shape_242,p:{scaleX:0.643,x:8.6,y:-143.2}},{t:this.shape_112,p:{x:11.4}},{t:this.shape_167},{t:this.shape_111,p:{x:8.8}},{t:this.shape_273,p:{scaleX:0.643,x:10.5,y:-118.6}},{t:this.shape_272,p:{scaleX:0.643,x:11.1,y:-116}},{t:this.shape_271,p:{scaleX:0.643,x:9.1,y:-110.6}},{t:this.shape_270,p:{scaleX:0.643,x:9.9,y:-113.5}},{t:this.shape_191,p:{x:7,y:-136.1,scaleX:0.643}},{t:this.shape_269,p:{scaleX:0.643,x:11.1,y:-121.8}},{t:this.shape_268,p:{scaleX:0.643,x:10.5,y:-122.2}},{t:this.shape_267,p:{scaleX:0.643,x:10.9,y:-114}},{t:this.shape_190,p:{x:8,y:-136.7,scaleX:0.643}},{t:this.shape_266,p:{scaleX:0.643,x:8.2,y:-140.2}},{t:this.shape_265,p:{scaleX:0.643,x:11.1,y:-119.7}},{t:this.shape_189,p:{x:8,y:-138,scaleX:0.643}},{t:this.shape_110,p:{x:11.1}},{t:this.shape_261},{t:this.shape_188,p:{x:8.7,y:-137.7,scaleX:0.643}},{t:this.shape_264,p:{scaleX:0.643,x:8.1,y:-139.1}},{t:this.shape_263,p:{scaleX:0.643,x:11.1,y:-123.7}},{t:this.shape_233,p:{scaleX:0.643,x:8.4,y:-141.3}},{t:this.shape_262,p:{scaleX:0.643,x:9.6,y:-126.5}},{t:this.shape_166},{t:this.shape_231,p:{scaleX:0.731,x:6.1,y:-161.4}},{t:this.shape_255,p:{scaleX:0.731,x:7.2,y:-186.5}},{t:this.shape_230,p:{scaleX:0.731,x:5.6,y:-156.1}},{t:this.shape_285,p:{scaleX:0.731,x:6.8,y:-174.8}},{t:this.shape_284,p:{scaleX:0.731,x:5.5,y:-186.7}},{t:this.shape_254,p:{scaleX:0.731,x:8.8,y:-184}},{t:this.shape_253,p:{scaleX:0.731,x:8.2,y:-187}},{t:this.shape_200,p:{scaleX:0.731,x:8.5,y:-173.7}},{t:this.shape_283,p:{scaleX:0.731,x:9.8,y:-188.2}},{t:this.shape_160,p:{x:3.6,y:-162.6,scaleX:0.731}},{t:this.shape_226,p:{scaleX:0.731,x:6.1,y:-154}},{t:this.shape_224,p:{scaleX:0.731,x:5.2,y:-156.3}},{t:this.shape_223,p:{scaleX:0.731,x:7.5,y:-146.7}},{t:this.shape_222,p:{scaleX:0.731,x:6,y:-162.5}},{t:this.shape_198,p:{scaleX:0.731,x:7.7,y:-156.3}},{t:this.shape_249,p:{scaleX:0.731,x:7.9,y:-189.5}},{t:this.shape_221,p:{scaleX:0.731,x:6.7,y:-152.1}},{t:this.shape_220,p:{scaleX:0.731,x:7.4,y:-149.1}},{t:this.shape_219,p:{scaleX:0.731,x:7.1,y:-150.7}},{t:this.shape_197,p:{scaleX:0.731,x:6.3,y:-160.6}},{t:this.shape_156,p:{x:3.9,y:-165.6,scaleX:0.731}},{t:this.shape_195,p:{scaleX:0.731,x:10.1,y:-178.1}},{t:this.shape_165},{t:this.shape_194,p:{scaleX:0.731,x:7,y:-169.9}},{t:this.shape_218,p:{scaleX:0.731,x:7.1,y:-151.1}},{t:this.shape_152,p:{x:3.6,y:-164.9,scaleX:0.731}},{t:this.shape_192,p:{scaleX:0.731,x:5.6,y:-169.3}},{t:this.shape_241,p:{scaleX:0.731,x:8.8,y:-179.9}},{t:this.shape_240,p:{scaleX:0.731,x:10.3,y:-186.8}},{t:this.shape_148,p:{x:3.8,y:-162.2,scaleX:0.731}},{t:this.shape_238,p:{scaleX:0.731,x:10.2,y:-184.6}},{t:this.shape_214,p:{scaleX:0.731,x:8.4,y:-147.9}},{t:this.shape_237,p:{scaleX:0.731,x:10.2,y:-187.1}},{t:this.shape_213,p:{scaleX:0.731,x:7.8,y:-148.3}},{t:this.shape_145,p:{x:4.9,y:-162.8,scaleX:0.731}},{t:this.shape_211,p:{scaleX:0.731,x:5.2,y:-166.3}},{t:this.shape_144,p:{x:5,y:-164.1,scaleX:0.731}},{t:this.shape_143,p:{x:5.7,y:-163.8,scaleX:0.731}},{t:this.shape_209,p:{scaleX:0.731,x:5.1,y:-165.2}},{t:this.shape_208,p:{scaleX:0.731,x:8.4,y:-149.8}},{t:this.shape_187,p:{scaleX:0.731,x:5.4,y:-167.4}},{t:this.shape_207,p:{scaleX:0.731,x:6.7,y:-152.6}},{t:this.instance_31},{t:this.shape_206},{t:this.shape_232,p:{scaleX:0.688,x:9.1,y:-182.8}},{t:this.shape_205},{t:this.shape_186,p:{scaleX:0.688,x:7.6,y:-202.9}},{t:this.shape_164,p:{x:8.6,scaleX:0.688,y:-227.9}},{t:this.shape_185,p:{scaleX:0.688,x:7.2,y:-197.6}},{t:this.shape_229,p:{scaleX:0.688,x:8.3,y:-216.2}},{t:this.shape_228,p:{scaleX:0.688,x:7.1,y:-228.1}},{t:this.shape_163,p:{x:10.2,scaleX:0.688,y:-225.5}},{t:this.shape_162,p:{x:9.6,scaleX:0.688,y:-228.4}},{t:this.shape_161,p:{scaleX:0.688,x:9.9,y:-215.1}},{t:this.shape_227,p:{scaleX:0.688,x:11.1,y:-229.6}},{t:this.shape_104,p:{x:5.3,y:-204.1,scaleX:0.688}},{t:this.shape_184,p:{scaleX:0.688,x:7.7,y:-195.4}},{t:this.shape_225,p:{scaleX:0.688,x:9.1,y:-186.3}},{t:this.shape_183,p:{scaleX:0.688,x:6.8,y:-197.7}},{t:this.shape_182,p:{scaleX:0.688,x:9,y:-188.2}},{t:this.shape_181,p:{scaleX:0.688,x:7.6,y:-204}},{t:this.shape_159,p:{scaleX:0.688,x:9.1,y:-197.7}},{t:this.shape_158,p:{x:9.3,scaleX:0.688,y:-231}},{t:this.shape_180,p:{scaleX:0.688,x:8.3,y:-193.6}},{t:this.shape_179,p:{scaleX:0.688,x:8.9,y:-190.6}},{t:this.shape_178,p:{scaleX:0.688,x:8.6,y:-192.1}},{t:this.shape_157,p:{scaleX:0.688,x:7.8,y:-202}},{t:this.shape_100,p:{x:5.5,y:-207.1,scaleX:0.688}},{t:this.shape_155,p:{scaleX:0.688,x:11.4,y:-219.5}},{t:this.shape_154,p:{x:8.5,scaleX:0.688,y:-199.2}},{t:this.shape_153,p:{scaleX:0.688,x:8.5,y:-211.4}},{t:this.shape_177,p:{scaleX:0.688,x:8.6,y:-192.6}},{t:this.shape_96,p:{x:5.3,y:-206.4,scaleX:0.688}},{t:this.shape_151,p:{scaleX:0.688,x:7.2,y:-210.7}},{t:this.shape_204},{t:this.shape_150,p:{x:10.2,scaleX:0.688,y:-221.4}},{t:this.shape_203},{t:this.shape_217,p:{scaleX:0.688,x:9.3,y:-186.2}},{t:this.shape_149,p:{x:11.6,scaleX:0.688,y:-228.3}},{t:this.shape_216,p:{scaleX:0.688,x:9.8,y:-183.5}},{t:this.shape_202},{t:this.shape_215,p:{scaleX:0.688,x:8.6,y:-181.1}},{t:this.shape_92,p:{x:5.4,y:-203.6,scaleX:0.688}},{t:this.shape_147,p:{x:11.5,scaleX:0.688,y:-226}},{t:this.shape_176,p:{scaleX:0.688,x:9.9,y:-189.3}},{t:this.shape_146,p:{x:11.5,scaleX:0.688,y:-228.6}},{t:this.shape_175,p:{scaleX:0.688,x:9.3,y:-189.7}},{t:this.shape_212,p:{scaleX:0.688,x:9.7,y:-181.5}},{t:this.shape_89,p:{x:6.6,y:-204.3,scaleX:0.688}},{t:this.shape_174,p:{scaleX:0.688,x:6.8,y:-207.8}},{t:this.shape_210,p:{scaleX:0.688,x:9.9,y:-187.3}},{t:this.shape_88,p:{x:6.6,y:-205.6,scaleX:0.688}},{t:this.shape_201},{t:this.shape_87,p:{x:7.3,y:-205.2,scaleX:0.688}},{t:this.shape_173,p:{scaleX:0.688,x:6.7,y:-206.6}},{t:this.shape_172,p:{scaleX:0.688,x:9.8,y:-191.2}},{t:this.shape_142,p:{scaleX:0.688,x:7,y:-208.8}},{t:this.shape_171,p:{scaleX:0.688,x:8.2,y:-194}},{t:this.shape_260},{t:this.shape_141,p:{x:11.2,scaleX:0.654,y:-223,scaleY:0.88}},{t:this.shape_259},{t:this.shape_140,p:{scaleX:0.654,x:9.7,y:-240.7,scaleY:0.88}},{t:this.shape_108,p:{scaleX:0.654,x:10.7,y:-262.7,scaleY:0.88}},{t:this.shape_139,p:{scaleX:0.654,x:9.4,y:-236,scaleY:0.88}},{t:this.shape_138,p:{x:10.4,scaleX:0.654,y:-252.4,scaleY:0.88}},{t:this.shape_137,p:{x:9.2,scaleX:0.654,y:-262.9,scaleY:0.88}},{t:this.shape_107,p:{scaleX:0.654,x:12.2,y:-260.6,scaleY:0.88}},{t:this.shape_106,p:{scaleX:0.654,x:11.7,y:-263.2,scaleY:0.88}},{t:this.shape_105,p:{scaleX:0.654,x:11.9,y:-251.5,scaleY:0.88}},{t:this.shape_136,p:{x:13.1,scaleX:0.654,y:-264.2,scaleY:0.88}},{t:this.shape_42,p:{x:7.5,y:-241.7,scaleX:0.654,scaleY:0.88}},{t:this.shape_135,p:{scaleX:0.654,x:9.8,y:-234.1,scaleY:0.88}},{t:this.shape_134,p:{x:11.2,scaleX:0.654,y:-226.1,scaleY:0.88}},{t:this.shape_133,p:{scaleX:0.654,x:9,y:-236.1,scaleY:0.88}},{t:this.shape_132,p:{scaleX:0.654,x:11.1,y:-227.7,scaleY:0.88}},{t:this.shape_131,p:{scaleX:0.654,x:9.7,y:-241.6,scaleY:0.88}},{t:this.shape_103,p:{scaleX:0.654,x:11.2,y:-236.1,scaleY:0.88}},{t:this.shape_102,p:{scaleX:0.654,x:11.4,y:-265.4,scaleY:0.88}},{t:this.shape_130,p:{scaleX:0.654,x:10.4,y:-232.4,scaleY:0.88}},{t:this.shape_129,p:{scaleX:0.654,x:11,y:-229.8,scaleY:0.88}},{t:this.shape_128,p:{scaleX:0.654,x:10.7,y:-231.2,scaleY:0.88}},{t:this.shape_101,p:{scaleX:0.654,x:10,y:-239.9,scaleY:0.88}},{t:this.shape_35,p:{x:7.8,y:-244.4,scaleX:0.654,scaleY:0.88}},{t:this.shape_99,p:{scaleX:0.654,x:13.3,y:-255.3,scaleY:0.88}},{t:this.shape_98,p:{scaleX:0.654,x:10.6,y:-237.4,scaleY:0.88}},{t:this.shape_97,p:{scaleX:0.654,x:10.6,y:-248.2,scaleY:0.88}},{t:this.shape_127,p:{scaleX:0.654,x:10.7,y:-231.6,scaleY:0.88}},{t:this.shape_31,p:{x:7.6,y:-243.7,scaleX:0.654,scaleY:0.88}},{t:this.shape_95,p:{scaleX:0.654,x:9.4,y:-247.6,scaleY:0.88}},{t:this.shape_258},{t:this.shape_94,p:{scaleX:0.654,x:12.2,y:-256.9,scaleY:0.88}},{t:this.shape_257},{t:this.shape_126,p:{x:11.3,scaleX:0.654,y:-225.9,scaleY:0.88}},{t:this.shape_93,p:{scaleX:0.654,x:13.5,y:-263,scaleY:0.88}},{t:this.shape_125,p:{x:11.9,scaleX:0.654,y:-223.6,scaleY:0.88}},{t:this.shape_124,p:{x:9.9,scaleX:0.654,y:-218.9,scaleY:0.88}},{t:this.shape_123,p:{x:10.7,scaleX:0.654,y:-221.5,scaleY:0.88}},{t:this.shape_27,p:{x:7.7,y:-241.3,scaleX:0.654,scaleY:0.88}},{t:this.shape_91,p:{scaleX:0.654,x:13.5,y:-261.1,scaleY:0.88}},{t:this.shape_122,p:{scaleX:0.654,x:11.9,y:-228.7,scaleY:0.88}},{t:this.shape_90,p:{scaleX:0.654,x:13.5,y:-263.3,scaleY:0.88}},{t:this.shape_121,p:{scaleX:0.654,x:11.3,y:-229.1,scaleY:0.88}},{t:this.shape_120,p:{x:11.7,scaleX:0.654,y:-221.9,scaleY:0.88}},{t:this.shape_23,p:{x:8.8,y:-241.9,scaleX:0.654,scaleY:0.88}},{t:this.shape_119,p:{scaleX:0.654,x:9,y:-245,scaleY:0.88}},{t:this.shape_118,p:{x:11.9,scaleX:0.654,y:-226.9,scaleY:0.88}},{t:this.shape_21,p:{x:8.8,y:-243,scaleX:0.654,scaleY:0.88}},{t:this.shape_256},{t:this.shape_109,p:{x:12.2,scaleX:0.654,scaleY:0.88,y:-217.2}},{t:this.shape_20,p:{x:9.4,y:-242.7,scaleX:0.654,scaleY:0.88}},{t:this.shape_117,p:{scaleX:0.654,x:8.9,y:-244,scaleY:0.88}},{t:this.shape_116,p:{scaleX:0.654,x:11.9,y:-230.4,scaleY:0.88}},{t:this.shape_86,p:{scaleX:0.654,x:9.1,y:-245.9,scaleY:0.88}},{t:this.shape_115,p:{scaleX:0.654,x:10.4,y:-232.9,scaleY:0.88}},{t:this.shape_314},{t:this.shape_84,p:{scaleX:0.462,x:11.9,y:-258.3,scaleY:1}},{t:this.shape_313},{t:this.shape_82,p:{scaleX:0.462,x:10.9,y:-278.4,scaleY:1}},{t:this.shape_50,p:{scaleX:0.462,x:11.6,y:-303.5,scaleY:1}},{t:this.shape_81,p:{scaleX:0.462,x:10.6,y:-273.1,scaleY:1}},{t:this.shape_80,p:{scaleX:0.462,x:11.4,y:-291.8,scaleY:1}},{t:this.shape_79,p:{scaleX:0.462,x:10.5,y:-303.7,scaleY:1}},{t:this.shape_46,p:{scaleX:0.462,x:12.6,y:-301,scaleY:1}},{t:this.shape_45,p:{scaleX:0.462,x:12.3,y:-304,scaleY:1}},{t:this.shape_44,p:{scaleX:0.462,x:12.4,y:-290.7,scaleY:1}},{t:this.shape_78,p:{scaleX:0.462,x:13.3,y:-305.2,scaleY:1}},{t:this.shape_15,p:{scaleX:0.462,x:9.3,y:-279.6,scaleY:1}},{t:this.shape_77,p:{scaleX:0.462,x:10.9,y:-271,scaleY:1}},{t:this.shape_76,p:{scaleX:0.462,x:11.9,y:-261.9,scaleY:1}},{t:this.shape_75,p:{scaleX:0.462,x:10.4,y:-273.3,scaleY:1}},{t:this.shape_74,p:{scaleX:0.462,x:11.8,y:-263.7,scaleY:1}},{t:this.shape_73,p:{scaleX:0.462,x:10.9,y:-279.5,scaleY:1}},{t:this.shape_38,p:{scaleX:0.462,x:11.9,y:-273.3,scaleY:1}},{t:this.shape_37,p:{scaleX:0.462,x:12.1,y:-306.5,scaleY:1}},{t:this.shape_72,p:{scaleX:0.462,x:11.3,y:-269.1,scaleY:1}},{t:this.shape_71,p:{scaleX:0.462,x:11.8,y:-266.1,scaleY:1}},{t:this.shape_70,p:{scaleX:0.462,x:11.6,y:-267.7,scaleY:1}},{t:this.shape_36,p:{scaleX:0.462,x:11.1,y:-277.6,scaleY:1}},{t:this.shape_12,p:{scaleX:0.462,x:9.5,y:-282.6,scaleY:1}},{t:this.shape_34,p:{scaleX:0.462,x:13.4,y:-295.1,scaleY:1}},{t:this.shape_33,p:{scaleX:0.462,x:11.5,y:-274.7,scaleY:1}},{t:this.shape_32,p:{scaleX:0.462,x:11.5,y:-286.9,scaleY:1}},{t:this.shape_69,p:{scaleX:0.462,x:11.6,y:-268.1,scaleY:1}},{t:this.shape_11,p:{scaleX:0.462,x:9.4,y:-281.9,scaleY:1}},{t:this.shape_30,p:{scaleX:0.462,x:10.7,y:-286.3,scaleY:1}},{t:this.shape_29,p:{scaleX:0.462,x:12.6,y:-296.9,scaleY:1}},{t:this.shape_312},{t:this.shape_66,p:{scaleX:0.462,x:12,y:-261.7,scaleY:1}},{t:this.shape_28,p:{scaleX:0.462,x:13.6,y:-303.8,scaleY:1}},{t:this.shape_65,p:{scaleX:0.462,x:12.4,y:-259.1,scaleY:1}},{t:this.shape_64,p:{scaleX:0.462,x:11,y:-253.7,scaleY:1}},{t:this.shape_63,p:{scaleX:0.462,x:11.6,y:-256.6,scaleY:1}},{t:this.shape_10,p:{scaleX:0.462,x:9.5,y:-279.2,scaleY:1}},{t:this.shape_26,p:{scaleX:0.462,x:13.5,y:-301.6,scaleY:1}},{t:this.shape_62,p:{scaleX:0.462,x:12.4,y:-264.9,scaleY:1}},{t:this.shape_25,p:{scaleX:0.462,x:13.5,y:-304.1,scaleY:1}},{t:this.shape_61,p:{scaleX:0.462,x:12,y:-265.3,scaleY:1}},{t:this.shape_60,p:{scaleX:0.462,x:12.3,y:-257.1,scaleY:1}},{t:this.shape_9,p:{scaleX:0.462,x:10.2,y:-279.8,scaleY:1}},{t:this.shape_59,p:{scaleX:0.462,x:10.4,y:-283.3,scaleY:1}},{t:this.shape_58,p:{scaleX:0.462,x:12.4,y:-262.8,scaleY:1}},{t:this.shape_7,p:{scaleX:0.462,x:10.2,y:-281.1,scaleY:1}},{t:this.shape_6,p:{scaleX:0.462,x:10.7,y:-280.8,scaleY:1}},{t:this.shape_56,p:{scaleX:0.462,x:10.3,y:-282.2,scaleY:1}},{t:this.shape_55,p:{scaleX:0.462,x:12.4,y:-266.8,scaleY:1}},{t:this.shape_18,p:{scaleX:0.462,x:10.5,y:-284.4,scaleY:1}},{t:this.shape_54,p:{scaleX:0.462,x:11.3,y:-269.6,scaleY:1}}]},4).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-47,71.6,90.7);


(lib.forcomb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.startbtn = new lib.Symbol1();
	this.startbtn.parent = this;
	this.startbtn.setTransform(-69.3,41.5,1.432,1.432,0,0,0,52.5,17.1);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחר נושא, 0, ספורט, 1, קולנוע, 2', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.setTransform(20.2,15.6,1.562,1.921,0,0,0,49.9,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.startbtn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.forcomb, new cjs.Rectangle(-215.8,-6.6,315.1,49.1), null);


(lib.kid2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(232.3,96.7,0.773,0.773,0,0,0,48.6,106.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.kid2, new cjs.Rectangle(194.7,14.5,74.9,163.9), null);


(lib.kid1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(336));

	// Layer_3
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(20.7,85.3,1,1,0,0,0,75,158.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:84,regY:107.5,x:35.8,y:19.9},0).wait(1).to({x:42.6,y:1},0).wait(1).to({x:45.9,y:-12.4},0).wait(1).to({x:49.5,y:-32.9},0).wait(1).to({x:51.5,y:-48},0).wait(1).to({x:54.4,y:-69.2},0).wait(1).to({x:57.4,y:-81.9},0).wait(1).to({x:66.4,y:-100.4},0).wait(1).to({x:76.8,y:-109.4},0).wait(1).to({x:95.1,y:-119.8},0).wait(1).to({x:111.8,y:-125.7},0).wait(1).to({x:128.5,y:-131.3},0).wait(1).to({x:145.4,y:-136.5},0).wait(1).to({x:161.7,y:-139.1},0).wait(1).to({x:179.9,y:-140.3},0).wait(1).to({x:197.6,y:-141},0).wait(1).to({x:215.4,y:-141.3},0).wait(1).to({x:233,y:-141.5},0).wait(1).to({x:250.7,y:-141.6},0).wait(1).to({x:268.4},0).wait(1).to({x:286.2,y:-141.5},0).wait(1).to({x:304.4,y:-141.3},0).wait(1).to({x:321,y:-140.9},0).wait(81).to({regX:75,regY:158.5,x:311.6,y:-90.1},0).wait(1).to({regX:84,regY:107.5,x:320.6,y:-141.1},0).wait(231));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.3,-124.2,150,317);


(lib.heart1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(-1.7,4.5,1,1,0,0,0,6.3,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.41,scaleY:1.41,y:4.6},0).wait(1).to({scaleX:1.81,scaleY:1.81,y:4.5},0).wait(1).to({scaleX:2.22,scaleY:2.22,y:4.6},0).wait(1).to({scaleX:2.62,scaleY:2.62,y:4.5},0).wait(1).to({scaleX:3.03,scaleY:3.03,x:-1.6},0).wait(1).to({scaleX:3.43,scaleY:3.43,y:4.6},0).wait(1).to({scaleX:3.84,scaleY:3.84,y:4.5},0).wait(1).to({scaleX:4.25,scaleY:4.25,y:4.6},0).wait(1).to({scaleX:4.65,scaleY:4.65},0).wait(1).to({scaleX:5.06,scaleY:5.06,x:-1.7,y:4.5},0).wait(1).to({scaleX:5.46,scaleY:5.46,y:4.6},0).wait(1).to({scaleX:5.87,scaleY:5.87,y:4.5},0).wait(1).to({scaleX:6.27,scaleY:6.27},0).wait(1).to({scaleX:6.68,scaleY:6.68,y:4.6},0).wait(1).to({scaleX:7.08,scaleY:7.08,x:-1.6,y:4.5},0).wait(1).to({scaleX:7.49,scaleY:7.49,y:4.6},0).wait(1).to({scaleX:7.9,scaleY:7.9,y:4.5},0).wait(1).to({scaleX:8.3,scaleY:8.3},0).wait(1).to({scaleX:8.71,scaleY:8.71,y:4.6},0).wait(1).to({scaleX:9.11,scaleY:9.11,x:-1.7,y:4.5},0).wait(1).to({scaleX:9.52,scaleY:9.52,y:4.6},0).wait(1).to({scaleX:9.92,scaleY:9.92},0).wait(1).to({scaleX:10.33,scaleY:10.33,y:4.5},0).wait(1).to({scaleX:10.73,scaleY:10.73,x:-1.6,y:4.6},0).wait(1).to({scaleX:11.14,scaleY:11.14,y:4.5},0).wait(1).to({scaleX:11.55,scaleY:11.55},0).wait(1).to({scaleX:11.26,scaleY:11.26,x:-1.7,y:4.6},0).wait(1).to({scaleX:10.98,scaleY:10.98,x:-1.6},0).wait(1).to({scaleX:10.7,scaleY:10.7},0).wait(1).to({scaleX:10.42,scaleY:10.42,x:-1.7,y:4.7},0).wait(1).to({scaleX:10.13,scaleY:10.13,x:-1.6},0).wait(1).to({scaleX:9.85,scaleY:9.85,x:-1.7},0).wait(1).to({scaleX:9.57,scaleY:9.57,x:-1.6},0).wait(1).to({scaleX:9.29,scaleY:9.29,x:-1.7},0).wait(1).to({scaleX:9,scaleY:9,y:4.8},0).wait(1).to({scaleX:8.72,scaleY:8.72,x:-1.6},0).wait(1).to({scaleX:8.44,scaleY:8.44,x:-1.7},0).wait(1).to({scaleX:8.16,scaleY:8.16,x:-1.6},0).wait(1).to({scaleX:7.87,scaleY:7.87,x:-1.7,y:4.9},0).wait(1).to({scaleX:7.59,scaleY:7.59},0).wait(1).to({scaleX:7.31,scaleY:7.31,x:-1.6},0).wait(1).to({scaleX:7.03,scaleY:7.03,x:-1.7,y:5},0).wait(1).to({scaleX:6.74,scaleY:6.74,x:-1.6},0).wait(1).to({scaleX:6.46,scaleY:6.46,x:-1.7},0).wait(1).to({scaleX:6.18,scaleY:6.18,x:-1.6},0).wait(1).to({scaleX:5.9,scaleY:5.9,y:5.1},0).wait(1).to({scaleX:5.61,scaleY:5.61,x:-1.7},0).wait(1).to({scaleX:5.33,scaleY:5.33,x:-1.6},0).wait(1).to({scaleX:5.57,scaleY:5.57,x:-1.7},0).wait(1).to({scaleX:5.8,scaleY:5.8,x:-1.6,y:5.2},0).wait(1).to({scaleX:6.03,scaleY:6.03,x:-1.7},0).wait(1).to({scaleX:6.27,scaleY:6.27,x:-1.6},0).wait(1).to({scaleX:6.5,scaleY:6.5,x:-1.7},0).wait(1).to({scaleX:6.74,scaleY:6.74,x:-1.6,y:5.3},0).wait(1).to({scaleX:6.97,scaleY:6.97,x:-1.7},0).wait(1).to({scaleX:7.21,scaleY:7.21,x:-1.6},0).wait(1).to({scaleX:7.44,scaleY:7.44,x:-1.7},0).wait(1).to({scaleX:7.67,scaleY:7.67,x:-1.6,y:5.4},0).wait(1).to({scaleX:7.91,scaleY:7.91,x:-1.7},0).wait(1).to({scaleX:8.14,scaleY:8.14,x:-1.6},0).wait(1).to({scaleX:8.38,scaleY:8.38,x:-1.7},0).wait(1).to({scaleX:8.61,scaleY:8.61,x:-1.6,y:5.5},0).wait(1).to({scaleX:8.85,scaleY:8.85,x:-1.7},0).wait(1).to({scaleX:9.08,scaleY:9.08,x:-1.6},0).wait(1).to({scaleX:9.31,scaleY:9.31},0).wait(1).to({scaleX:9.55,scaleY:9.55,x:-1.7,y:5.6},0).wait(1).to({scaleX:9.78,scaleY:9.78,x:-1.6},0).wait(1).to({scaleX:10.02,scaleY:10.02,x:-1.7,y:5.7},0).wait(1).to({scaleX:10.25,scaleY:10.25,x:-1.6},0).wait(1).to({scaleX:10.49,scaleY:10.49,x:-1.7},0).wait(1).to({scaleX:10.72,scaleY:10.72,x:-1.6},0).wait(1).to({scaleX:10.95,scaleY:10.95,x:-1.7,y:5.8},0).wait(1).to({scaleX:11.55,scaleY:11.55,x:-1,y:4.5},0).wait(1).to({scaleX:11.26,scaleY:11.26,y:4.6},0).wait(1).to({scaleX:10.98,scaleY:10.98},0).wait(1).to({scaleX:10.7,scaleY:10.7,x:-1.1},0).wait(1).to({scaleX:10.42,scaleY:10.42,y:4.7},0).wait(1).to({scaleX:10.13,scaleY:10.13},0).wait(1).to({scaleX:9.85,scaleY:9.85},0).wait(1).to({scaleX:9.57,scaleY:9.57},0).wait(1).to({scaleX:9.29,scaleY:9.29},0).wait(1).to({scaleX:9,scaleY:9,x:-1.2,y:4.8},0).wait(1).to({scaleX:8.72,scaleY:8.72,x:-1.1},0).wait(1).to({scaleX:8.44,scaleY:8.44,x:-1.2},0).wait(1).to({scaleX:8.16,scaleY:8.16},0).wait(1).to({scaleX:7.87,scaleY:7.87,y:4.9},0).wait(1).to({scaleX:7.59,scaleY:7.59},0).wait(1).to({scaleX:7.31,scaleY:7.31},0).wait(1).to({scaleX:7.03,scaleY:7.03,x:-1.3,y:5},0).wait(1).to({scaleX:6.74,scaleY:6.74,x:-1.2},0).wait(1).to({scaleX:6.46,scaleY:6.46,x:-1.3},0).wait(1).to({scaleX:6.18,scaleY:6.18},0).wait(1).to({scaleX:5.9,scaleY:5.9,y:5.1},0).wait(1).to({scaleX:5.61,scaleY:5.61},0).wait(1).to({scaleX:5.33,scaleY:5.33},0).wait(1).to({scaleX:5.57,scaleY:5.57},0).wait(1).to({scaleX:5.8,scaleY:5.8,y:5.2},0).wait(1).to({scaleX:6.03,scaleY:6.03},0).wait(1).to({scaleX:6.27,scaleY:6.27},0).wait(1).to({scaleX:6.5,scaleY:6.5},0).wait(1).to({scaleX:6.74,scaleY:6.74,x:-1.2,y:5.3},0).wait(1).to({scaleX:6.97,scaleY:6.97,x:-1.3},0).wait(1).to({scaleX:7.21,scaleY:7.21,x:-1.2},0).wait(1).to({scaleX:7.44,scaleY:7.44},0).wait(1).to({scaleX:7.67,scaleY:7.67,y:5.4},0).wait(1).to({scaleX:7.91,scaleY:7.91},0).wait(1).to({scaleX:8.14,scaleY:8.14},0).wait(1).to({scaleX:8.38,scaleY:8.38},0).wait(1).to({scaleX:8.61,scaleY:8.61,y:5.5},0).wait(1).to({scaleX:8.85,scaleY:8.85},0).wait(1).to({scaleX:9.08,scaleY:9.08,x:-1.1},0).wait(1).to({scaleX:9.31,scaleY:9.31},0).wait(1).to({scaleX:9.55,scaleY:9.55,y:5.6},0).wait(1).to({scaleX:9.78,scaleY:9.78},0).wait(1).to({scaleX:10.02,scaleY:10.02,y:5.7},0).wait(1).to({scaleX:10.25,scaleY:10.25},0).wait(1).to({scaleX:10.49,scaleY:10.49},0).wait(1).to({scaleX:10.72,scaleY:10.72,x:-1},0).wait(1).to({scaleX:10.95,scaleY:10.95,y:5.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-1,12.6,11.1);


(lib.girl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_334 = function() {
		this.stop();
	}
	this.frame_407 = function() {
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(334).call(this.frame_334).wait(73).call(this.frame_407).wait(1));

	// Layer_5
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(502.1,-50.9,1,1,0,0,0,37.9,142.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(335).to({_off:false},0).wait(1).to({scaleX:1,scaleY:1,x:492.8,y:-56},0).wait(1).to({regY:142.1,scaleX:0.99,scaleY:0.99,x:483.6,y:-61.1},0).wait(1).to({regY:142.2,scaleX:0.99,scaleY:0.99,x:474.3,y:-66},0).wait(1).to({regY:142.1,scaleX:0.98,scaleY:0.98,x:465,y:-71.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:455.8,y:-76.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:446.5,y:-81.2},0).wait(1).to({regY:142.2,scaleX:0.96,scaleY:0.96,x:437.3,y:-86.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:428,y:-91.1},0).wait(1).to({regY:142.1,scaleX:0.95,scaleY:0.95,x:418.7,y:-96.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:409.5,y:-101.3},0).wait(1).to({regY:142.2,scaleX:0.94,scaleY:0.94,x:400.2,y:-106.2},0).wait(1).to({regY:142.1,scaleX:0.94,scaleY:0.94,x:390.9,y:-111.3},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:381.7,y:-116.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:372.4,y:-121.4},0).wait(1).to({regY:142.2,scaleX:0.92,scaleY:0.92,x:363.2,y:-126.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:353.9,y:-131.3},0).wait(1).to({regY:142.1,scaleX:0.91,scaleY:0.91,x:344.6,y:-136.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:335.4,y:-141.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:326.1,y:-146.5},0).wait(1).to({regY:142.2,scaleX:0.9,scaleY:0.9,x:316.8,y:-151.5},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:307.6,y:-156.5},0).wait(1).to({regY:142.1,scaleX:0.89,scaleY:0.89,x:298.3,y:-161.6},0).wait(1).to({regY:142.2,scaleX:0.88,scaleY:0.88,x:289,y:-166.5},0).wait(1).to({regY:142.1,scaleX:0.88,scaleY:0.88,x:279.8,y:-171.6},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:270.5,y:-176.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:261.3,y:-181.7},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:252,y:-186.8},0).wait(1).to({regY:142.2,scaleX:0.86,scaleY:0.86,x:242.7,y:-191.7},0).wait(1).to({regY:142.1,scaleX:0.85,scaleY:0.85,x:233.4,y:-196.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:224.2,y:-201.8},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:214.9,y:-206.9},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:205.6,y:-211.8},0).wait(1).to({regY:142.2,scaleX:0.83,scaleY:0.83,x:196.4,y:-216.8},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:187.2,y:-221.9},0).wait(1).to({regY:142.1,scaleX:0.82,scaleY:0.82,x:177.9,y:-227},0).wait(1).to({regY:142.2,scaleX:0.82,scaleY:0.82,x:168.6,y:-231.9},0).wait(1).to({regY:142.1,scaleX:0.81,scaleY:0.81,x:159.4,y:-237},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:150.1,y:-242.1},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:140.8,y:-247},0).wait(1).to({regY:142.2,scaleX:0.79,scaleY:0.79,x:131.6,y:-252},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:122.3,y:-257},0).wait(1).to({regX:38,regY:142.1,scaleX:0.78,scaleY:0.78,x:113.1,y:-262.2},0).wait(1).to({regX:37.9,scaleX:0.78,scaleY:0.78,x:103.8,y:-267.2},0).wait(1).to({regY:142.2,scaleX:0.77,scaleY:0.77,x:94.5,y:-272.1},0).wait(1).to({regY:142.1,scaleX:0.77,scaleY:0.77,x:85.3,y:-277.2},0).wait(1).to({regY:142.2,scaleX:0.76,scaleY:0.76,x:76,y:-282.2},0).wait(1).to({regY:142.1,scaleX:0.76,scaleY:0.76,x:66.7,y:-287.3},0).wait(1).to({regY:142.2,scaleX:0.75,scaleY:0.75,x:57.4,y:-292.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:48.2,y:-297.3},0).wait(1).to({regY:142.1,scaleX:0.74,scaleY:0.74,x:38.9,y:-302.4},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:29.6,y:-307.4},0).wait(1).to({regX:37.8,scaleX:0.73,scaleY:0.73,x:20.4,y:-312.4},0).wait(1).to({regY:142.2,scaleX:0.73,scaleY:0.73,x:11.1,y:-317.4},0).wait(1).to({regX:37.9,scaleX:0.72,scaleY:0.72,x:1.9,y:-322.4},0).wait(1).to({regY:142.1,scaleX:0.72,scaleY:0.72,x:-7.4,y:-327.5},0).wait(1).to({regX:37.8,scaleX:0.71,scaleY:0.71,x:-16.7,y:-332.6},0).wait(1).to({regX:37.9,scaleX:0.71,scaleY:0.71,x:-25.9,y:-337.5},0).wait(1).to({regX:37.8,scaleX:0.7,scaleY:0.7,x:-35.2,y:-342.6},0).wait(1).to({regY:142.2,scaleX:0.7,scaleY:0.7,x:-44.4,y:-347.6},0).wait(1).to({regY:142.1,scaleX:0.69,scaleY:0.69,x:-53.7,y:-352.7},0).wait(1).to({regX:37.9,regY:142.2,scaleX:0.69,scaleY:0.69,x:-63,y:-357.6},0).wait(1).to({regX:37.8,regY:142.1,scaleX:0.68,scaleY:0.68,x:-72.2,y:-362.7},0).wait(1).to({regX:37.9,scaleX:0.68,scaleY:0.68,x:-81.4,y:-367.8},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:-90.7,y:-372.7},0).wait(1).to({regX:37.8,scaleX:0.67,scaleY:0.67,x:-100,y:-377.8},0).wait(1).to({regX:37.9,regY:142.2,scaleX:0.66,scaleY:0.66,x:-109.2,y:-382.7},0).wait(1).to({regX:37.8,regY:142.1,scaleX:0.66,scaleY:0.66,x:-118.6,y:-387.9},0).wait(1).to({regX:37.9,scaleX:0.65,scaleY:0.65,x:-127.8,y:-392.9},0).wait(1).to({regX:37.8,regY:142.2,scaleX:0.65,scaleY:0.65,x:-137.1,y:-397.8},0).wait(1).to({regY:142.1,scaleX:0.64,scaleY:0.64,x:-146.4,y:-402.9},0).wait(1).to({regX:37.9,scaleX:0.64,scaleY:0.64,x:-155.5,y:-408},0).wait(1).to({regX:37.8,scaleX:0.63,scaleY:0.63,x:-164.9,y:-413},0).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14,0.1,1,1,0,0,0,75,107);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-1.8,y:-9.2},0).wait(1).to({x:-17.5,y:-18.6},0).wait(1).to({x:-33.1,y:-28.3},0).wait(1).to({x:-48.7,y:-37.9},0).wait(1).to({x:-64.6,y:-47.1},0).wait(1).to({x:-81.8,y:-53.5},0).wait(1).to({x:-99.7,y:-57.1},0).wait(1).to({x:-118.1,y:-57.5},0).wait(1).to({x:-136.4,y:-57.3},0).wait(1).to({x:-154.8,y:-56.2},0).wait(1).to({x:-173.1,y:-54.7},0).wait(1).to({x:-191.3,y:-53},0).wait(1).to({x:-209.5,y:-50.7},0).wait(1).to({x:-227.6,y:-47.2},0).wait(1).to({x:-245.5,y:-43.6},0).wait(1).to({x:-263.5,y:-39.9},0).wait(1).to({x:-281.5,y:-36.2},0).wait(1).to({x:-299.5,y:-32.4},0).wait(1).to({x:-317.4,y:-28.5},0).wait(1).to({x:-335.3,y:-24.6},0).wait(1).to({x:-353.3,y:-20.7},0).wait(1).to({x:-371.2,y:-16.6},0).wait(1).to({x:-388.9,y:-11.9},0).wait(2).to({x:-392.4,y:-14},0).wait(310).to({regX:77,regY:93.3,scaleX:0.82,scaleY:0.82,x:443.4,y:76.5},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:434.5,y:70.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:425.5,y:65},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:416.5,y:59.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:407.5,y:53.3},0).wait(1).to({regX:76.9,scaleX:0.8,scaleY:0.8,x:398.4,y:47.6},0).wait(1).to({regX:77,scaleX:0.8,scaleY:0.8,x:389.5,y:41.8},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:380.5,y:36},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:371.5,y:30.2},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:362.5,y:24.4},0).wait(1).to({regY:93.2,scaleX:0.78,scaleY:0.78,x:353.5,y:18.5},0).wait(1).to({regY:93.3,scaleX:0.78,scaleY:0.78,x:344.4,y:12.8},0).wait(1).to({regY:93.2,scaleX:0.78,scaleY:0.78,x:335.5,y:7},0).wait(1).to({regY:93.3,scaleX:0.77,scaleY:0.77,x:326.5,y:1.3},0).wait(1).to({regX:76.9,regY:93.2,scaleX:0.77,scaleY:0.77,x:317.4,y:-4.6},0).wait(1).to({regX:77,regY:93.3,scaleX:0.77,scaleY:0.77,x:308.4,y:-10.3},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:299.5,y:-16.2},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:290.5,y:-21.9},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:281.5,y:-27.7},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:272.5,y:-33.5},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:263.4,y:-39.3},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:254.5,y:-45.1},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:245.4,y:-50.9},0).wait(1).to({regY:93.2,scaleX:0.74,scaleY:0.74,x:236.5,y:-56.7},0).wait(1).to({regY:93.3,scaleX:0.74,scaleY:0.74,x:227.5,y:-62.4},0).wait(1).to({regY:93.2,scaleX:0.73,scaleY:0.73,x:218.5,y:-68.3},0).wait(1).to({regY:93.3,scaleX:0.73,scaleY:0.73,x:209.5,y:-74},0).wait(1).to({regY:93.2,scaleX:0.73,scaleY:0.73,x:200.5,y:-79.9},0).wait(1).to({regY:93.3,scaleX:0.72,scaleY:0.72,x:191.5,y:-85.6},0).wait(1).to({regY:93.2,scaleX:0.72,scaleY:0.72,x:182.5,y:-91.5},0).wait(1).to({regY:93.3,scaleX:0.72,scaleY:0.72,x:173.5,y:-97.2},0).wait(1).to({regY:93.2,scaleX:0.71,scaleY:0.71,x:164.5,y:-103.1},0).wait(1).to({regY:93.3,scaleX:0.71,scaleY:0.71,x:155.5,y:-108.8},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:146.5,y:-114.6},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:137.5,y:-120.4},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:128.5,y:-126.1},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:119.5,y:-132},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:110.5,y:-137.7},0).wait(1).to({regY:93.2,scaleX:0.69,scaleY:0.69,x:101.5,y:-143.6},0).wait(1).to({regY:93.3,scaleX:0.68,scaleY:0.68,x:92.5,y:-149.3},0).wait(1).to({regY:93.2,scaleX:0.68,scaleY:0.68,x:83.5,y:-155.2},0).wait(1).to({regY:93.3,scaleX:0.68,scaleY:0.68,x:74.5,y:-160.9},0).wait(1).to({regY:93.2,scaleX:0.67,scaleY:0.67,x:65.5,y:-166.8},0).wait(1).to({regY:93.3,scaleX:0.67,scaleY:0.67,x:56.5,y:-172.5},0).wait(1).to({regX:76.9,regY:93.2,scaleX:0.67,scaleY:0.67,x:47.5,y:-178.4},0).wait(1).to({regX:77,regY:93.3,scaleX:0.66,scaleY:0.66,x:38.6,y:-184},0).wait(1).to({regX:76.9,regY:93.2,scaleX:0.66,scaleY:0.66,x:29.5,y:-189.9},0).wait(1).to({regY:93.3,scaleX:0.66,scaleY:0.66,x:20.5,y:-195.6},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:11.5,y:-201.5},0).wait(1).to({regX:77,scaleX:0.65,scaleY:0.65,x:2.6,y:-207.2},0).wait(1).to({regX:76.9,scaleX:0.65,scaleY:0.65,x:-6.5,y:-213},0).wait(1).to({regX:77,regY:93.2,scaleX:0.64,scaleY:0.64,x:-15.4,y:-218.9},0).wait(1).to({regX:76.9,regY:93.3,scaleX:0.64,scaleY:0.64,x:-24.5,y:-224.6},0).wait(1).to({regY:93.2,scaleX:0.64,scaleY:0.64,x:-33.4,y:-230.5},0).wait(1).to({regY:93.3,scaleX:0.63,scaleY:0.63,x:-42.5,y:-236.2},0).wait(1).to({regY:93.2,scaleX:0.63,scaleY:0.63,x:-51.5,y:-242.1},0).wait(1).to({regY:93.3,scaleX:0.63,scaleY:0.63,x:-60.4,y:-247.7},0).wait(1).to({regY:93.2,scaleX:0.62,scaleY:0.62,x:-69.5,y:-253.6},0).wait(1).to({regY:93.3,scaleX:0.62,scaleY:0.62,x:-78.4,y:-259.3},0).wait(1).to({regY:93.2,scaleX:0.61,scaleY:0.61,x:-87.4,y:-265.2},0).wait(1).to({regX:77,regY:93.3,scaleX:0.61,scaleY:0.61,x:-96.4,y:-270.9},0).wait(1).to({regX:76.9,regY:93.2,scaleX:0.61,scaleY:0.61,x:-105.5,y:-276.8},0).wait(1).to({regY:93.3,scaleX:0.6,scaleY:0.6,x:-114.4,y:-282.5},0).wait(1).to({regY:93.2,scaleX:0.6,scaleY:0.6,x:-123.5,y:-288.4},0).wait(1).to({regX:77,scaleX:0.6,scaleY:0.6,x:-132.4,y:-294.1},0).wait(1).to({regX:76.9,regY:93.3,scaleX:0.59,scaleY:0.59,x:-141.5,y:-299.9},0).wait(1).to({regX:77,regY:93.2,scaleX:0.59,scaleY:0.59,x:-150.4,y:-305.8},0).wait(1).to({regX:76.9,regY:93.3,scaleX:0.59,scaleY:0.59,x:-159.5,y:-311.5},0).wait(1).to({regY:93.2,scaleX:0.58,scaleY:0.58,x:-168.4,y:-317.3},0).wait(1).to({regY:93.3,scaleX:0.58,scaleY:0.58,x:-177.5,y:-323},0).wait(1).to({regY:93.2,scaleX:0.58,scaleY:0.58,x:-186.5,y:-328.9},0).wait(1).to({regY:93.3,scaleX:0.57,scaleY:0.57,x:-195.5,y:-334.6},0).wait(1).to({regY:93.2,scaleX:0.57,scaleY:0.57,x:-204.5,y:-340.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-121.9,174.3,248.6);


(lib.fullPlant = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ale("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-4.4,-176.3,0.309,0.309,45,0,0,14.4,16);

	this.instance_1 = new lib.ale("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,-170.9,0.261,0.379,0,15,-165,17.9,16.7);

	this.instance_2 = new lib.ale("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-8.3,-169.4,0.265,0.265,0,0,0,14.2,16.6);

	this.instance_3 = new lib.ale("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.4,-161.2,0.287,0.417,0,15,-165,13.8,16.6);

	this.instance_4 = new lib.ale("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-11.1,-162.2,0.384,0.384,0,0,0,13.9,16.6);

	this.instance_5 = new lib.ale("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-12.7,-154.6,0.384,0.384,0,0,0,13.9,16.6);

	this.instance_6 = new lib.ale("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-13.2,-142.1,0.384,0.384,0,0,0,13.9,16.6);

	this.instance_7 = new lib.ale("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-11.6,-128.7,0.493,0.493,0,0,0,14,16.6);

	this.instance_8 = new lib.ale("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(3.4,-123.5,0.479,0.524,0,15,-165,14,16.6);

	this.instance_9 = new lib.ale("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-18.7,-114.8,0.621,0.621,0,0,0,13.9,16.6);

	this.instance_10 = new lib.ale("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-0.6,-108.5,0.524,0.72,0,0,180,13.8,16.6);

	this.instance_11 = new lib.ale("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-16,-96.4,0.663,0.663,0,0,0,14.1,16.6);

	this.instance_12 = new lib.ale("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-0.4,-86.8,0.608,0.665,0,0,180,14,16.6);

	this.instance_13 = new lib.ale("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-21,-75.9,0.68,0.68,0,0,0,14,16.4);

	this.instance_14 = new lib.ale("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-1.1,-66.2,0.568,0.765,0,0,180,14,16.6);

	this.instance_15 = new lib.ale("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-17.1,-53.5,0.669,0.669,0,0,0,14,16.6);

	this.instance_16 = new lib.ale("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-3,-42,0.547,0.681,0,0,180,14,16.6);

	this.instance_17 = new lib.ale("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(-24.4,-10.7,1,1,0,0,0,14,16.6);

	this.instance_18 = new lib.ale("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(3.8,-15.3,0.777,0.843,0,0,180,14,22.6);

	this.instance_19 = new lib.ale("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(3.7,2,0.757,1,0,0,180,14.1,16.6);

	this.instance_20 = new lib.ale("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(-22.5,13.6,1,1,0,0,0,14,16.6);

	this.instance_21 = new lib.ale("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(6.6,24.5,1.125,1,0,0,180,14,16.6);

	this.instance_22 = new lib.ale("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(-28.2,35.4,1,1,0,0,0,14,16.6);

	this.instance_23 = new lib.ale("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(5.2,47.7,0.943,1,0,15,-165,14,16.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#017029").s().p("AgEAAIAAgBIAJACIgEABIgBAAQgDAAgBgCg");
	this.shape.setTransform(-3.7,52.7,0.78,1);

	this.instance_24 = new lib.ale("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(-24.5,60.8,1,1,0,0,0,14,16.6);

	this.instance_25 = new lib.ale("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(1.1,73.8,0.757,1,0,15,-165,14.1,16.4);

	this.instance_26 = new lib.ale("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(-30.3,88.5,1,1,0,0,0,14,16.6);

	this.instance_27 = new lib.plantpngcopy();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-53,92,0.245,0.245);

	this.instance_28 = new lib.ale("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(-2.3,-149.7,0.33,0.479,0,0,180,13.8,16.6);

	this.instance_29 = new lib.ale("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(-0.6,-137,0.33,0.479,0,0,180,13.8,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BC9B67").s().p("AgCgBIACgDIADAIQgDAAgCgFg");
	this.shape_1.setTransform(-6.7,-131,0.462,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B89864").s().p("AgBAEIACgHQACAEgDADg");
	this.shape_2.setTransform(-7.5,-145.8,0.462,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A7844C").s().p("AAAAGIAAgLQABADAAAIg");
	this.shape_3.setTransform(-5.6,-128.2,0.462,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BF9F6B").s().p("AAAAGIAAgLQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAALg");
	this.shape_4.setTransform(-7.7,-143.6,0.462,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B59562").s().p("AAAAFQgCgEACgFIACAJg");
	this.shape_5.setTransform(-7.3,-142.2,0.462,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B29361").s().p("AgBAFIgBgFQABgCABgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAEgDAFg");
	this.shape_6.setTransform(-7.8,-142.5,0.462,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B49564").s().p("AAAgHIABAAIAAAHQAAAEgBAEQAAgDAAgMg");
	this.shape_7.setTransform(-5.6,-124.2,0.462,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B99965").s().p("AgBAGIABgLQAAAAABgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAFQAAAEgCACIAAABIgBgBg");
	this.shape_8.setTransform(-7.6,-144.7,0.462,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BC9D68").s().p("AAAAJIAAgQQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAQg");
	this.shape_9.setTransform(-7.8,-141.2,0.462,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8B8043").s().p("AgBACIgBgGIAFAAQgBAGgCACIAAABQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_10.setTransform(-5.7,-118.5,0.462,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D0B283").s().p("AgBAHIAAgLIAAgCQADAGAAAHg");
	this.shape_11.setTransform(-6,-126.7,0.462,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#59462E").s().p("AAAgLIABAAQACAPgDAIg");
	this.shape_12.setTransform(-4.5,-165.5,0.462,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BC9D68").s().p("AAAANIAAgZQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABABIAAAZIgBABIAAgBg");
	this.shape_13.setTransform(-5.6,-126.3,0.462,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BFAF76").s().p("AgCAGIAAgGQACgCAAgGIADAAQgBALgCAFg");
	this.shape_14.setTransform(-4.5,-163,0.462,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C8AD82").s().p("AgBAOQgBgSACgJIAAAFQAAAFACABQgCADAAAFIAAAIIAAABg");
	this.shape_15.setTransform(-8.5,-140.6,0.462,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CAAD7A").s().p("AgCAAIAEgIIACAFIgGANQgCgFACgFg");
	this.shape_16.setTransform(-6.4,-118,0.462,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D4B380").s().p("AgEAHIAEgIQABgFAEgDQAAAJgGAKg");
	this.shape_17.setTransform(-7,-115.1,0.462,1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B59562").s().p("AAAAPIAAgeIABAAIAAAeIgBABIAAgBg");
	this.shape_18.setTransform(-5.6,-120.5,0.462,1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCAE7D").s().p("AgBAOIgBgFQACgEgBgHQAAgIABgEQADAFgBAJIAAAOIgCABIgBgBg");
	this.shape_19.setTransform(-4.4,-165.2,0.462,1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D2B380").s().p("AgCAaIgBgDQAHgdgFgTIAAgCQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAABQAEANgCAPIgEAcIgCgDg");
	this.shape_20.setTransform(-6,-123.1,0.462,1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D7B682").s().p("AgEAIIAHgPQAEgBgCADIgFANIgEAAg");
	this.shape_21.setTransform(-7.3,-113.6,0.462,1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D6B682").s().p("AgRAmIAZg5QAGgLgBgGIADgEQAEgBgCAEQgEASgKAVIgTAng");
	this.shape_22.setTransform(-5.4,-158.3,0.462,1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D3B380").s().p("AgaA/IACgHIgBgHIABgEQACgCAAgEIAAgGQATg1AcgvQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIgUAnQgLAYgGAQQgLAggBAWQgEgCAAgDg");
	this.shape_23.setTransform(-7.3,-147.7,0.462,1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3A2711").s().p("AgCABQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBIABgDQACACAAAEQABABAAABQAAAAAAABQAAAAgBABQAAAAgBABg");
	this.shape_24.setTransform(-8.6,-143.3,0.462,1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#947C58").s().p("AAAACQgBgCgDAAIAAgCIAEgCIAEAIIgBABQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_25.setTransform(-6.4,-129.5,0.462,1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5D4E3B").s().p("AgBAAIACgFIACAFIgDAGQgDgDACgDg");
	this.shape_26.setTransform(-6.5,-148.3,0.462,1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BF9E68").s().p("AgCgDIADAAQACACAAAEQgEABgBgHg");
	this.shape_27.setTransform(-6.5,-136.1,0.462,1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#594834").s().p("AADgFQAAAFgEAGQgDgJAHgCg");
	this.shape_28.setTransform(-4.6,-156.5,0.462,1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#746043").s().p("AgCAGIAAgFIAAgEIACgFIABAGQAFAFgGAGQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_29.setTransform(-8.5,-144,0.462,1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A6955E").s().p("AAAACIgCgCQACgEABgBQAAABACAEQABAEgCACQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_30.setTransform(-6.9,-139,0.462,1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5C4A33").s().p("AgBACIgDgGQADgCACADIADADIABACIgBAEIgBAAQgDAAgBgEg");
	this.shape_31.setTransform(-6.4,-129.1,0.462,1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#624D30").s().p("AgCAAQgDgEAFgBQABAAABAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAABQAAAAAAAAQAAAAAAABQABAAAAAAIABACIgFADQABgBgCgFg");
	this.shape_32.setTransform(-6.2,-127.5,0.462,1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#53412A").s().p("AAAAHIgEgNIACAAQACABACAFIADAFQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_33.setTransform(-6.7,-130.5,0.462,1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1D942C").s().p("AAFADIgFgBQgBgCgGAAQADgCAEAAIAHAAQACAFgDAAIgBAAg");
	this.shape_34.setTransform(-5.9,-167.9,0.462,1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D3B586").s().p("AgCACQgDgCAFgFQAEAFAAAGQgFgCgBgCg");
	this.shape_35.setTransform(-6.1,-134.7,0.462,1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#BE9E6B").s().p("AgEgHQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAAAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIABgDIAEAHIgGAEQgDgJAAgGg");
	this.shape_36.setTransform(-7.1,-140.9,0.462,1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#594937").s().p("AAAABQAAgKgCgIQACgEACACIABALIgBADIAAANQAAAIgCAFIAAgUg");
	this.shape_37.setTransform(-6.2,-125.1,0.462,1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#8F7650").s().p("AgGgKQAIABACAIQACACABAKIgDAAQgIgNgCgIg");
	this.shape_38.setTransform(-7.6,-134.7,0.462,1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#4D3B23").s().p("AgEARIADgOQABgDAAgKQgBgJACgEQAFAIgBAQQgBARgFAGg");
	this.shape_39.setTransform(-6.1,-123.3,0.462,1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#422E16").s().p("AAEAMIgMgXQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAFADADAHIAGALIgDAEIgCgBg");
	this.shape_40.setTransform(-7.1,-132.4,0.462,1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#53422E").s().p("AgDAJIABgMIABgSQADAAACAGIgBAHIgDAaIAAAEQgDgFAAgIg");
	this.shape_41.setTransform(-8.7,-141,0.462,1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3A2711").s().p("AAAAiIAAgCQAFgbgLgnQAFAAABAFQABAGABABQgBADACAHQACAIAAADQACAEAAAGIAAAMIAAAGIgBAFQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAg");
	this.shape_42.setTransform(-4.7,-166.6,0.462,1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#43301B").s().p("AgRAfQAEgNALgSIAQggIAFgDQgFAPgKATIgRAgIgCAFQgEgBACgEg");
	this.shape_43.setTransform(-5.6,-152.1,0.462,1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#05702C").s().p("AAFAZIgOgHQgLgPgBgIQAAgJAKgLIAEgBQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQgNAJAGAPQAHASAQABIAJgBIABACIgBABQgFAFgFAAIgGgCg");
	this.shape_44.setTransform(-5.7,-165.4,0.462,1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#169131").s().p("AgRAAIAAgLQADgCAFADQAJAIANgFIADABQADADgBADQgCAEgDAAQAAABgBAAQgBAAAAAAQgBABAAAAQAAAAgBABIgDADIgLACIgCABQgMAAACgNg");
	this.shape_45.setTransform(-5.4,-162.4,0.462,1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2E9E2E").s().p("AgKAAQACgYATgIIgDAHQACAMAAAXIgBAHQAAAEACADQgDAEAAAFQgRgJgBgYg");
	this.shape_46.setTransform(-7.5,-165.1,0.462,1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#94723C").s().p("AgnBWIgBgDQAHgcAbgyQAdg5AHgRIADgNQAAgHAIACQABAIgEAJIgHAQIgVAqQgiBAgKAiIgCACQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_47.setTransform(-6.6,-153.2,0.462,1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3F2C16").s().p("AAXA3QgDgEgBgFIgDgGIgDgJQgEgJgIgNIgEgLQgEgHgFgDQgLgUgDgKIgBgDQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAQACgBAAgDQABgEABgCIAZAyQAPAdAGAWIACAGQABAEgDACg");
	this.shape_48.setTransform(-7.4,-134.5,0.462,1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#20972D").s().p("AgOAfQgCgCABgJIgBguQgBgFAFgDQAPgJAOALQgCACgEAAQgFABgCACQgHAIAAAHQgBAHAFAIIAGALIABANQABAHAHADQgGACgFAAQgKAAgJgIg");
	this.shape_49.setTransform(-6.4,-164.9,0.462,1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1F972C").s().p("AgDAGIACgIQABgDAEgBIAAAJQgCADgCABQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_50.setTransform(-7.1,-139.8,0.462,1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#93713B").s().p("AgBAFQALgdACgLQAEAEAAAFQAAADgDAGQgCAGAAAEIgEAJIgEAJIgEAKIgGAOIgIABIAOgfg");
	this.shape_51.setTransform(-7.1,-116.3,0.462,1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#118F2D").s().p("AgCANQgCgBgCgEIgCgJIAEgQQADABABAFIACAHIAEALIACADQABABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgDAEgDAAQgBAAgCgFg");
	this.shape_52.setTransform(-6.1,-119.7,0.462,1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#8E6B32").s().p("AgOEWIgKgBIAGgOQAEgHADgMIAIgSQACgEACgCIAFACQACABADgBQADgCABgCIAAgGIABgYIgBAbQgCACgEgBQgEgDgBgKIAEgbQABgQgDgLQAAgJgDgGQgCgDABgHIAAgEIgBgDQAAgLgEgOIgLgXQgNgegMgTQgDgGgBgHIgBAAIAAABIABAFQgBACgEgCQgEgFADgKQAFgyAkhCIAJgTIAUgnQAKgWAFgSIAEgSIAAgMQAAgIgCgFIgCgEQABgCgCgIQgCgGADgEQAdA0gZBCQgCACgCALIgBABQgLASgTAmIgFALIgDAGQgCAEABADIgGATQgEANgBAHIgBAZQABAFgDAAIgBgBIADAGIgBAFQAAAEACABQAEADAAAFQAGAIADALQAAAFACACIAEAFQgBAEACADIAEAGQAmA/gGBEIAAAKQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAAAQgIALgCAPIgDAaQgGABgFACQgKAFgHAOQgDgEgLgCg");
	this.shape_53.setTransform(-6.3,-140.5,0.462,1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#BC9B67").s().p("AgCgBIACgDIADAIQgDAAgCgFg");
	this.shape_54.setTransform(-7.6,-94.3,0.654,0.88);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B89864").s().p("AgBAEIACgHQACAEgDADg");
	this.shape_55.setTransform(-8.9,-107.3,0.654,0.88);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A7844C").s().p("AAAAGIAAgLQABADAAAIg");
	this.shape_56.setTransform(-6.1,-91.8,0.654,0.88);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#BF9F6B").s().p("AAAAGIAAgLQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAALg");
	this.shape_57.setTransform(-9.1,-105.4,0.654,0.88);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B59562").s().p("AAAAFQgCgEACgFIACAJg");
	this.shape_58.setTransform(-8.6,-104.1,0.654,0.88);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#63523D").s().p("AADgEQgDAIAAABQgEgHAHgCg");
	this.shape_59.setTransform(-5.8,-78.6,0.654,0.88);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#4B3820").s().p("AADgEQAAAEgDAFQgEgFAHgEg");
	this.shape_60.setTransform(-6.1,-77.8,0.654,0.88);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B29361").s().p("AgBAFIgBgFQABgCABgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAEgDAFg");
	this.shape_61.setTransform(-9.2,-104.4,0.654,0.88);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B49564").s().p("AAAgHIABAAIAAAHQAAAEgBAEQAAgDAAgMg");
	this.shape_62.setTransform(-6.1,-88.3,0.654,0.88);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B99965").s().p("AgBAGIABgLQAAAAABgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAFQAAAEgCACIAAABIgBgBg");
	this.shape_63.setTransform(-9,-106.4,0.654,0.88);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#BC9D68").s().p("AAAAJIAAgQQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAQg");
	this.shape_64.setTransform(-9.2,-103.3,0.654,0.88);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#8B8043").s().p("AgBACIgBgGIAFAAQgBAGgCACIAAABQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_65.setTransform(-6.3,-83.3,0.654,0.88);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D0B283").s().p("AgBAHIAAgLIAAgCQADAGAAAHg");
	this.shape_66.setTransform(-6.7,-90.5,0.654,0.88);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#59462E").s().p("AAAgLIABAAQACAPgDAIg");
	this.shape_67.setTransform(-4.5,-124.7,0.654,0.88);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#BC9D68").s().p("AAAANIAAgZQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABABIAAAZIgBABIAAgBg");
	this.shape_68.setTransform(-6.1,-90.1,0.654,0.88);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#BFAF76").s().p("AgCAGIAAgGQACgCAAgGIADAAQgBALgCAFg");
	this.shape_69.setTransform(-4.5,-122.5,0.654,0.88);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#C8AD82").s().p("AgBAOQgBgSACgJIAAAFQAAAFACABQgCADAAAFIAAAIIAAABg");
	this.shape_70.setTransform(-10.3,-102.7,0.654,0.88);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CAAD7A").s().p("AgCAAIAEgIIACAFIgGANQgCgFACgFg");
	this.shape_71.setTransform(-7.3,-82.9,0.654,0.88);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D4B380").s().p("AgEAHIAEgIQABgFAEgDQAAAJgGAKg");
	this.shape_72.setTransform(-8.1,-80.3,0.654,0.88);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#B59562").s().p("AAAAPIAAgeIABAAIAAAeIgBABIAAgBg");
	this.shape_73.setTransform(-6.1,-85,0.654,0.88);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CCAE7D").s().p("AgBAOIgBgFQACgEgBgHQAAgIABgEQADAFgBAJIAAAOIgCABIgBgBg");
	this.shape_74.setTransform(-4.5,-124.4,0.654,0.88);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D2B380").s().p("AgCAaIgBgDQAHgdgFgTIAAgCQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAABQAEANgCAPIgEAcIgCgDg");
	this.shape_75.setTransform(-6.7,-87.3,0.654,0.88);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D7B682").s().p("AABgEQAEgBgCAEIgBADIgCABIgDACg");
	this.shape_76.setTransform(-8.4,-79.3,0.654,0.88);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D6B682").s().p("AgRAmIAZg5QAGgLgBgGIADgEQAEgBgCAEQgEASgKAVIgTAng");
	this.shape_77.setTransform(-5.8,-118.3,0.654,0.88);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F9FAF9").s().p("AgFAMQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgDAFgIIAAABIAAgFQABgDACgBIADgDIgKAXg");
	this.shape_78.setTransform(-5.8,-78.2,0.654,0.88);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D3B380").s().p("AgaA/IACgHIgBgHIABgEQACgCAAgEIAAgGQATg1AcgvQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIgUAnQgLAYgGAQQgLAggBAWQgEgCAAgDg");
	this.shape_79.setTransform(-8.6,-109,0.654,0.88);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#3A2711").s().p("AgCABQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBIABgDQACACAAAEQABABAAABQAAAAAAABQAAAAgBABQAAAAgBABg");
	this.shape_80.setTransform(-10.4,-105.1,0.654,0.88);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#947C58").s().p("AAAACQgBgCgDAAIAAgCIAEgCIAEAIIgBABQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_81.setTransform(-7.3,-93,0.654,0.88);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#5D4E3B").s().p("AgBAAIACgFIACAFIgDAGQgDgDACgDg");
	this.shape_82.setTransform(-7.4,-109.6,0.654,0.88);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#BF9E68").s().p("AgCgDIADAAQACACAAAEQgEABgBgHg");
	this.shape_83.setTransform(-7.4,-98.8,0.654,0.88);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#594834").s().p("AADgFQAAAFgEAGQgDgJAHgCg");
	this.shape_84.setTransform(-4.7,-116.7,0.654,0.88);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#746043").s().p("AgCAGIAAgFIAAgEIACgFIABAGQAFAFgGAGQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_85.setTransform(-10.2,-105.8,0.654,0.88);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#A6955E").s().p("AAAACIgCgCQACgEABgBQAAABACAEQABAEgCACQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_86.setTransform(-8,-101.3,0.654,0.88);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#5C4A33").s().p("AgBACIgDgGQADgCACADIADADIABACIgBAEIgBAAQgDAAgBgEg");
	this.shape_87.setTransform(-7.3,-92.6,0.654,0.88);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#624D30").s().p("AgCAAQgDgEAFgBQABAAABAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAABQAAAAAAAAQAAAAAAABQABAAAAAAIABACIgFADQABgBgCgFg");
	this.shape_88.setTransform(-7,-91.2,0.654,0.88);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#53412A").s().p("AAAAHIgEgNIACAAQACABACAFIADAFQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_89.setTransform(-7.6,-93.8,0.654,0.88);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#1D942C").s().p("AAFADIgFgBQgBgCgGAAQADgCAEAAIAHAAQACAFgDAAIgBAAg");
	this.shape_90.setTransform(-6.6,-126.8,0.654,0.88);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D3B586").s().p("AgCACQgDgCAFgFQAEAFAAAGQgFgCgBgCg");
	this.shape_91.setTransform(-6.8,-97.5,0.654,0.88);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#BE9E6B").s().p("AgEgHQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAAAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIABgDIAEAHIgGAEQgDgJAAgGg");
	this.shape_92.setTransform(-8.3,-103,0.654,0.88);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#594937").s().p("AAAABQAAgKgCgIQACgEACACIABALIgBADIAAANQAAAIgCAFIAAgUg");
	this.shape_93.setTransform(-6.9,-89.1,0.654,0.88);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#8F7650").s().p("AgGgKQAIABACAIQACACABAKIgDAAQgIgNgCgIg");
	this.shape_94.setTransform(-9,-97.5,0.654,0.88);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#4D3B23").s().p("AgEARIADgOQABgDAAgKQgBgJACgEQAFAIgBAQQgBARgFAGg");
	this.shape_95.setTransform(-6.8,-87.5,0.654,0.88);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#422E16").s().p("AAEAMIgMgXQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAFADADAHIAGALIgDAEIgCgBg");
	this.shape_96.setTransform(-8.2,-95.5,0.654,0.88);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#53422E").s().p("AgDAJIABgMIABgSQADAAACAGIgBAHIgDAaIAAAEQgDgFAAgIg");
	this.shape_97.setTransform(-10.5,-103.1,0.654,0.88);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#3A2711").s().p("AAAAiIAAgCQAFgbgLgnQAFAAABAFQABAGABABQgBADACAHQACAIAAADQACAEAAAGIAAAMIAAAGIgBAFQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAg");
	this.shape_98.setTransform(-4.9,-125.6,0.654,0.88);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#43301B").s().p("AgRAfQAEgNALgSIAQggIAFgDQgFAPgKATIgRAgIgCAFQgEgBACgEg");
	this.shape_99.setTransform(-6.1,-112.9,0.654,0.88);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#05702C").s().p("AAFAZIgOgHQgLgPgBgIQAAgJAKgLIAEgBQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQgNAJAGAPQAHASAQABIAJgBIABACIgBABQgFAFgFAAIgGgCg");
	this.shape_100.setTransform(-6.3,-124.6,0.654,0.88);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#169131").s().p("AgRAAIAAgLQADgCAFADQAJAIANgFIADABQADADgBADQgCAEgDAAQAAABgBAAQgBAAAAAAQgBABAAAAQAAAAgBABIgDADIgLACIgCABQgMAAACgNg");
	this.shape_101.setTransform(-5.8,-122,0.654,0.88);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#2E9E2E").s().p("AgKAAQACgYATgIIgDAHQACAMAAAXIgBAHQAAAEACADQgDAEAAAFQgRgJgBgYg");
	this.shape_102.setTransform(-8.8,-124.3,0.654,0.88);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#94723C").s().p("AgnBWIgBgDQAHgcAbgyQAdg5AHgRIADgNQAAgHAIACQABAIgEAJIgHAQIgVAqQgiBAgKAiIgCACQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_103.setTransform(-7.6,-113.8,0.654,0.88);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#3F2C16").s().p("AAXA3QgDgEgBgFIgDgGIgDgJQgEgJgIgNIgEgLQgEgHgFgDQgLgUgDgKIgBgDQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAQACgBAAgDQABgEABgCIAZAyQAPAdAGAWIACAGQABAEgDACg");
	this.shape_104.setTransform(-8.6,-97.4,0.654,0.88);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#20972D").s().p("AgOAfQgCgCABgJIgBguQgBgFAFgDQAPgJAOALQgCACgEAAQgFABgCACQgHAIAAAHQgBAHAFAIIAGALIABANQABAHAHADQgGACgFAAQgKAAgJgIg");
	this.shape_105.setTransform(-7.3,-124.1,0.654,0.88);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#1F972C").s().p("AgDAGIACgIQABgDAEgBIAAAJQgCADgCABQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_106.setTransform(-8.3,-102.1,0.654,0.88);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#93713B").s().p("AgBAEQAMgdACgKQAEADAAAGQAAADgDAGQgDAGABAEIgFAIIgEAJIgDAKIgDAGIAAABQgHADgGAHIAPghg");
	this.shape_107.setTransform(-8.2,-81.3,0.654,0.88);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#118F2D").s().p("AgCANQgCgBgCgEIgCgJIAEgQQADABABAFIACAHIAEALIACADQABABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgDAEgDAAQgBAAgCgFg");
	this.shape_108.setTransform(-6.8,-84.4,0.654,0.88);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#8E6B32").s().p("AAIEfIAAAAIAAgBQADgNgHgGQgJgIgPAIIgBAAIADgHQAEgHADgLIAIgTQACgEACgCIAFADQACABADgCQADgBABgDIAAgGIABgYIgBAcQgCABgEAAQgEgEgBgKIAEgbQABgPgDgMQAAgIgDgHQgCgDABgHIAAgEIgBgCQAAgMgEgOIgLgXQgNgdgMgUQgDgGgBgHIgBAAIAAABIABAFQgBACgEgCQgEgFADgKQAFgyAkhCIAJgTIAUgnQAKgVAFgSIAEgSIAAgNQAAgIgCgFIgCgDQABgDgCgIQgCgGADgEQAdA0gZBCQgCACgCALIgBABQgLASgTAmIgFALIgDAGQgCAEABADIgGATQgEANgBAHIgBAZQABAGgDgBIgBgBIADAGIgBAGQAAADACABQAEAEAAAEQAGAIADALQAAAFACACIAEAGQgBADACADIAEAGQAmA/gGBFIAAAJQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgIALgCAPIgDAcIgCAFQgFAEgBAEIgBADQgDAEgBAFIAAABIgHAAg");
	this.shape_109.setTransform(-7.1,-102.4,0.654,0.88);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#BC9B67").s().p("AgCgBIACgDIADAIQgDAAgCgFg");
	this.shape_110.setTransform(-9.8,-55.4,0.688,1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#B89864").s().p("AgBAEIACgHQACAEgDADg");
	this.shape_111.setTransform(-11,-70.2,0.688,1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#A7844C").s().p("AAAAGIAAgLQABADAAAIg");
	this.shape_112.setTransform(-8.2,-52.6,0.688,1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#BF9F6B").s().p("AAAAGIAAgLQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAALg");
	this.shape_113.setTransform(-11.3,-68,0.688,1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#B59562").s().p("AAAAFQgCgEACgFIACAJg");
	this.shape_114.setTransform(-10.7,-66.6,0.688,1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#63523D").s().p("AAAAAIAAgBIABgCIgBAHIAAgEg");
	this.shape_115.setTransform(-7.7,-37.8,0.688,1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#B29361").s().p("AgBAFIgBgFQABgCABgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAEgDAFg");
	this.shape_116.setTransform(-11.4,-67,0.688,1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B49564").s().p("AAAgHIABAAIAAAHQAAAEgBAEQAAgDAAgMg");
	this.shape_117.setTransform(-8.1,-48.7,0.688,1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B99965").s().p("AgBAGIABgLQAAAAABgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAFQAAAEgCACIAAABIgBgBg");
	this.shape_118.setTransform(-11.2,-69.2,0.688,1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#BC9D68").s().p("AAAAJIAAgQQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAQg");
	this.shape_119.setTransform(-11.4,-65.7,0.688,1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#8B8043").s().p("AgBACIgBgGIAFAAQgBAGgCACIAAABQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_120.setTransform(-8.3,-42.9,0.688,1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#D0B283").s().p("AgBAHIAAgLIAAgCQADAGAAAHg");
	this.shape_121.setTransform(-8.7,-51.1,0.688,1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#59462E").s().p("AAAgLIABAAQACAPgDAIg");
	this.shape_122.setTransform(-6.5,-90,0.688,1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#BC9D68").s().p("AAAANIAAgZQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABABIAAAZIgBABIAAgBg");
	this.shape_123.setTransform(-8.1,-50.7,0.688,1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#BFAF76").s().p("AgCAGIAAgGQACgCAAgGIADAAQgBALgCAFg");
	this.shape_124.setTransform(-6.5,-87.4,0.688,1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#C8AD82").s().p("AgBAOQgBgSACgJIAAAFQAAAFACABQgCADAAAFIAAAIIAAABg");
	this.shape_125.setTransform(-12.6,-65,0.688,1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#CAAD7A").s().p("AgCAAIAEgIIACAFIgGANQgCgFACgFg");
	this.shape_126.setTransform(-9.4,-42.5,0.688,1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#D4B380").s().p("AgEAIIAEgIQABgGAEgCQAAAHgFAIIgCACg");
	this.shape_127.setTransform(-10.2,-39.6,0.688,1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#B59562").s().p("AAAAPIAAgeIABAAIAAAeIgBABIAAgBg");
	this.shape_128.setTransform(-8.2,-44.9,0.688,1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#CCAE7D").s().p("AgBAOIgBgFQACgEgBgHQAAgIABgEQADAFgBAJIAAAOIgCABIgBgBg");
	this.shape_129.setTransform(-6.4,-89.7,0.688,1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#D2B380").s().p("AgCAaIgBgDQAHgdgFgTIAAgCQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAABQAEANgCAPIgEAcIgCgDg");
	this.shape_130.setTransform(-8.7,-47.6,0.688,1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#D7B682").s().p("AAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAIgDADg");
	this.shape_131.setTransform(-10.5,-38.6,0.688,1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#D6B682").s().p("AgRAmIAZg5QAGgLgBgGIADgEQAEgBgCAEQgEASgKAVIgTAng");
	this.shape_132.setTransform(-7.8,-82.8,0.688,1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#F9FAF9").s().p("AgBABIAAgBIABgCIADgDIgFALIABgFg");
	this.shape_133.setTransform(-7.6,-37.8,0.688,1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#D3B380").s().p("AgaA/IACgHIgBgHIABgEQACgCAAgEIAAgGQATg1AcgvQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIgUAnQgLAYgGAQQgLAggBAWQgEgCAAgDg");
	this.shape_134.setTransform(-10.8,-72.1,0.688,1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#3A2711").s().p("AgCABQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBIABgDQACACAAAEQABABAAABQAAAAAAABQAAAAgBABQAAAAgBABg");
	this.shape_135.setTransform(-12.7,-67.8,0.688,1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#947C58").s().p("AAAACQgBgCgDAAIAAgCIAEgCIAEAIIgBABQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_136.setTransform(-9.4,-54,0.688,1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#5D4E3B").s().p("AgBAAIACgFIACAFIgDAGQgDgDACgDg");
	this.shape_137.setTransform(-9.5,-72.8,0.688,1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#BF9E68").s().p("AgCgDIADAAQACACAAAEQgEABgBgHg");
	this.shape_138.setTransform(-9.5,-60.6,0.688,1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#594834").s().p("AADgFQAAAFgEAGQgDgJAHgCg");
	this.shape_139.setTransform(-6.6,-80.9,0.688,1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#746043").s().p("AgCAGIAAgFIAAgEIACgFIABAGQAFAFgGAGQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_140.setTransform(-12.5,-68.5,0.688,1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#A6955E").s().p("AAAACIgCgCQACgEABgBQAAABACAEQABAEgCACQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_141.setTransform(-10.2,-63.4,0.688,1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#5C4A33").s().p("AgBACIgDgGQADgCACADIADADIABACIgBAEIgBAAQgDAAgBgEg");
	this.shape_142.setTransform(-9.4,-53.5,0.688,1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#624D30").s().p("AgCAAQgDgEAFgBQABAAABAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAABQAAAAAAAAQAAAAAAABQABAAAAAAIABACIgFADQABgBgCgFg");
	this.shape_143.setTransform(-9.1,-52,0.688,1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#53412A").s().p("AAAAHIgEgNIACAAQACABACAFIADAFQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_144.setTransform(-9.7,-55,0.688,1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#1D942C").s().p("AAFADIgFgBQgBgCgGAAQADgCAEAAIAHAAQACAFgDAAIgBAAg");
	this.shape_145.setTransform(-8.7,-92.4,0.688,1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#D3B586").s().p("AgCACQgDgCAFgFQAEAFAAAGQgFgCgBgCg");
	this.shape_146.setTransform(-8.9,-59.1,0.688,1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#BE9E6B").s().p("AgEgHQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAAAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIABgDIAEAHIgGAEQgDgJAAgGg");
	this.shape_147.setTransform(-10.4,-65.4,0.688,1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#594937").s().p("AAAABQAAgKgCgIQACgEACACIABALIgBADIAAANQAAAIgCAFIAAgUg");
	this.shape_148.setTransform(-9,-49.6,0.688,1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#8F7650").s().p("AgGgKQAIABACAIQACACABAKIgDAAQgIgNgCgIg");
	this.shape_149.setTransform(-11.2,-59.1,0.688,1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#4D3B23").s().p("AgEARIADgOQABgDAAgKQgBgJACgEQAFAIgBAQQgBARgFAGg");
	this.shape_150.setTransform(-8.9,-47.7,0.688,1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#422E16").s().p("AAEAMIgMgXQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAFADADAHIAGALIgDAEIgCgBg");
	this.shape_151.setTransform(-10.3,-56.8,0.688,1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#53422E").s().p("AgDAJIABgMIABgSQADAAACAGIgBAHIgDAaIAAAEQgDgFAAgIg");
	this.shape_152.setTransform(-12.7,-65.5,0.688,1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#3A2711").s().p("AAAAiIAAgCQAFgbgLgnQAFAAABAFQABAGABABQgBADACAHQACAIAAADQACAEAAAGIAAAMIAAAGIgBAFQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAg");
	this.shape_153.setTransform(-6.9,-91,0.688,1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#43301B").s().p("AgRAfQAEgNALgSIAQggIAFgDQgFAPgKATIgRAgIgCAFQgEgBACgEg");
	this.shape_154.setTransform(-8.1,-76.5,0.688,1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#05702C").s().p("AAFAZIgOgHQgLgPgBgIQAAgJAKgLIAEgBQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQgNAJAGAPQAHASAQABIAJgBIABACIgBABQgFAFgFAAIgGgCg");
	this.shape_155.setTransform(-8.4,-89.8,0.688,1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#169131").s().p("AgRAAIAAgLQADgCAFADQAJAIANgFIADABQADADgBADQgCAEgDAAQAAABgBAAQgBAAAAAAQgBABAAAAQAAAAgBABIgDADIgLACIgCABQgMAAACgNg");
	this.shape_156.setTransform(-7.8,-86.9,0.688,1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#2E9E2E").s().p("AgKAAQACgYATgIIgDAHQACAMAAAXIgBAHQAAAEACADQgDAEAAAFQgRgJgBgYg");
	this.shape_157.setTransform(-10.9,-89.5,0.688,1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#94723C").s().p("AgnBWIgBgDQAHgcAbgyQAdg5AHgRIADgNQAAgHAIACQABAIgEAJIgHAQIgVAqQgiBAgKAiIgCACQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_158.setTransform(-9.7,-77.6,0.688,1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#3F2C16").s().p("AAXA3QgDgEgBgFIgDgGIgDgJQgEgJgIgNIgEgLQgEgHgFgDQgLgUgDgKIgBgDQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAQACgBAAgDQABgEABgCIAZAyQAPAdAGAWIACAGQABAEgDACg");
	this.shape_159.setTransform(-10.8,-59,0.688,1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#20972D").s().p("AgOAfQgCgCABgJIgBguQgBgFAFgDQAPgJAOALQgCACgEAAQgFABgCACQgHAIAAAHQgBAHAFAIIAGALIABANQABAHAHADQgGACgFAAQgKAAgJgIg");
	this.shape_160.setTransform(-9.4,-89.3,0.688,1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#1F972C").s().p("AgDAGIACgIQABgDAEgBIAAAJQgCADgCABQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_161.setTransform(-10.4,-64.3,0.688,1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#93713B").s().p("AgCAGQAMgdACgLQAEAEAAAFQAAADgDAHQgDAFABAEIgFAJIgEAJIgDAKIgBAAIgDADIgKAKIANgdg");
	this.shape_162.setTransform(-10.3,-40.9,0.688,1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#118F2D").s().p("AgCANQgCgBgCgEIgCgJIAEgQQADABABAFIACAHIAEALIACADQABABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgDAEgDAAQgBAAgCgFg");
	this.shape_163.setTransform(-8.9,-44.2,0.688,1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#8E6B32").s().p("AAVEVQAAgGgGgFQgHgGgIAAQgIAAgLAJIABgBQAEgHADgMIAIgSQACgEACgCIAFACQACABADgBQADgCABgCIAAgGIABgYIgBAbQgCACgEgBQgEgDgBgKIAEgbQABgQgDgLQAAgJgDgGQgCgDABgHIAAgEIgBgDQAAgLgEgOIgLgXQgNgegMgTQgDgGgBgHIgBAAIAAABIABAFQgBACgEgCQgEgFADgLQAFgxAkhCIAJgTIAUgnQAKgWAFgSIAEgSIAAgMQAAgIgCgFIgCgEQABgCgCgIQgCgGADgEQAdA0gZBCQgCACgCALIgBABQgLASgTAmIgFALIgDAGQgCAEABADIgGATQgEANgBAHIgBAZQABAEgDAAIgBgBIADAHIgBAFQAAAEACABQAEADAAAFQAGAIADALQAAAFACACIAEAFQgBAEACADIAEAGQAmA/gGBEIAAAKQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgIALgCAPIgDAcIgCAEQgEADgBADIAAgCg");
	this.shape_164.setTransform(-9.2,-65.5,0.688,1);

	this.instance_30 = new lib.ale("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(-25.3,-33.9,0.868,0.868,0,0,0,14,16.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#BC9B67").s().p("AgCgBIACgDIADAIQgDAAgCgFg");
	this.shape_165.setTransform(-11.3,-14,0.731,1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#B89864").s().p("AgBAEIACgHQACAEgDADg");
	this.shape_166.setTransform(-12.6,-28.8,0.731,1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#A7844C").s().p("AAAAGIAAgLQABADAAAIg");
	this.shape_167.setTransform(-9.6,-11.2,0.731,1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#BF9F6B").s().p("AAAAGIAAgLQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAALg");
	this.shape_168.setTransform(-12.9,-26.6,0.731,1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#B59562").s().p("AAAAFQgCgEACgFIACAJg");
	this.shape_169.setTransform(-12.3,-25.2,0.731,1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#B29361").s().p("AgBAFIgBgFQABgCABgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAEgDAFg");
	this.shape_170.setTransform(-13,-25.5,0.731,1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#B99965").s().p("AgBAGIABgLQAAAAABgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAFQAAAEgCACIAAABIgBgBg");
	this.shape_171.setTransform(-12.8,-27.7,0.731,1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#BC9D68").s().p("AAAAJIAAgQQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAQg");
	this.shape_172.setTransform(-13.1,-24.2,0.731,1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#D0B283").s().p("AgBAHIAAgLIAAgCQADAGAAAHg");
	this.shape_173.setTransform(-10.2,-9.7,0.731,1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#59462E").s().p("AAAgLIABAAQACAPgDAIg");
	this.shape_174.setTransform(-7.8,-48.5,0.731,1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#BC9D68").s().p("AAAANIAAgZQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABABIAAAZIgBABIAAgBg");
	this.shape_175.setTransform(-9.6,-9.3,0.731,1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#BFAF76").s().p("AgCAGIAAgGQACgCAAgGIADAAQgBALgCAFg");
	this.shape_176.setTransform(-7.8,-46,0.731,1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#C8AD82").s().p("AgBAOQgBgSACgJIAAAFQAAAFACABQgCADAAAFIAAAIIAAABg");
	this.shape_177.setTransform(-14.2,-23.6,0.731,1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#CCAE7D").s().p("AgBAOIgBgFQACgEgBgHQAAgIABgEQADAFgBAJIAAAOIgCABIgBgBg");
	this.shape_178.setTransform(-7.7,-48.2,0.731,1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#D6B682").s().p("AgRAmIAZg5QAGgLgBgGIADgEQAEgBgCAEQgEASgKAVIgTAng");
	this.shape_179.setTransform(-9.2,-41.3,0.731,1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#D3B380").s().p("AgaA/IACgHIgBgHIABgEQACgCAAgEIAAgGQATg1AcgvQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIgUAnQgLAYgGAQQgLAggBAWQgEgCAAgDg");
	this.shape_180.setTransform(-12.4,-30.7,0.731,1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#3A2711").s().p("AgCABQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBIABgDQACACAAAEQABABAAABQAAAAAAABQAAAAgBABQAAAAgBABg");
	this.shape_181.setTransform(-14.4,-26.3,0.731,1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#947C58").s().p("AAAACQgBgCgDAAIAAgCIAEgCIAEAIIgBABQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_182.setTransform(-10.9,-12.5,0.731,1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#5D4E3B").s().p("AgBAAIACgFIACAFIgDAGQgDgDACgDg");
	this.shape_183.setTransform(-11,-31.3,0.731,1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#BF9E68").s().p("AgCgDIACAAIACAEIABACIAAAAQgEABgBgHg");
	this.shape_184.setTransform(-10.9,-19.1,0.731,1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#594834").s().p("AADgFQAAAFgEAGQgDgJAHgCg");
	this.shape_185.setTransform(-7.9,-39.5,0.731,1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#746043").s().p("AgCAGIAAgFIAAgEIACgFIABAGQAFAFgGAGQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_186.setTransform(-14.1,-27,0.731,1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#A6955E").s().p("AAAACIgCgCQACgEABgBQAAABACAEQABAEgCACQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_187.setTransform(-11.7,-22,0.731,1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#5C4A33").s().p("AgBACIgDgGQADgCACADIADADIABACIgBAEIgBAAQgDAAgBgEg");
	this.shape_188.setTransform(-10.9,-12.1,0.731,1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#624D30").s().p("AgCAAQgDgEAFgBQABAAABAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAABQAAAAAAAAQAAAAAAABQABAAAAAAIABACIgFADQABgBgCgFg");
	this.shape_189.setTransform(-10.6,-10.5,0.731,1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#53412A").s().p("AAAAHIgEgNIACAAQACABACAFIADAFQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_190.setTransform(-11.3,-13.5,0.731,1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#1D942C").s().p("AAFADIgFgBQgBgCgGAAQADgCAEAAIAHAAQACAFgDAAIgBAAg");
	this.shape_191.setTransform(-10.1,-50.9,0.731,1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#D3B586").s().p("AgCACQgDgCAFgFQAEAFAAAGQgFgCgBgCg");
	this.shape_192.setTransform(-10.3,-17.7,0.731,1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#BE9E6B").s().p("AgEgHQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAAAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIABgDIAEAHIgGAEQgDgJAAgGg");
	this.shape_193.setTransform(-12,-23.9,0.731,1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#594937").s().p("AAAABQAAgKgCgIQACgEACACIABALIgBADIAAANQAAAIgCAFIAAgUg");
	this.shape_194.setTransform(-10.5,-8.1,0.731,1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#8F7650").s().p("AgGgKQAIABACAIQACACABAKIgDAAQgIgNgCgIg");
	this.shape_195.setTransform(-12.8,-17.7,0.731,1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#422E16").s().p("AAEAMIgMgXQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAFADADAHIAGALIgDAEIgCgBg");
	this.shape_196.setTransform(-11.9,-15.4,0.731,1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#53422E").s().p("AgDAJIABgMIABgSQADAAACAGIgBAHIgDAaIAAAEQgDgFAAgIg");
	this.shape_197.setTransform(-14.4,-24,0.731,1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#3A2711").s().p("AAAAiIAAgCQAFgbgLgnQAFAAABAFQABAGABABQgBADACAHQACAIAAADQACAEAAAGIAAAMIAAAGIgBAFQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAg");
	this.shape_198.setTransform(-8.2,-49.6,0.731,1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#43301B").s().p("AgRAfQAEgNALgSIAQggIAFgDQgFAPgKATIgRAgIgCAFQgEgBACgEg");
	this.shape_199.setTransform(-9.5,-35.1,0.731,1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#05702C").s().p("AAFAZIgOgHQgLgPgBgIQAAgJAKgLIAEgBQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQgNAJAGAPQAHASAQABIAJgBIABACIgBABQgFAFgFAAIgGgCg");
	this.shape_200.setTransform(-9.8,-48.4,0.731,1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#169131").s().p("AgRAAIAAgLQADgCAFADQAJAIANgFIADABQADADgBADQgCAEgDAAQAAABgBAAQgBAAAAAAQgBABAAAAQAAAAgBABIgDADIgLACIgCABQgMAAACgNg");
	this.shape_201.setTransform(-9.2,-45.4,0.731,1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#2E9E2E").s().p("AgKAAQACgYATgIIgDAHQACAMAAAXIgBAHQAAAEACADQgDAEAAAFQgRgJgBgYg");
	this.shape_202.setTransform(-12.5,-48.1,0.731,1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#94723C").s().p("AgnBWIgBgDQAHgcAbgyQAdg5AHgRIADgNQAAgHAIACQABAIgEAJIgHAQIgVAqQgiBAgKAiIgCACQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_203.setTransform(-11.2,-36.2,0.731,1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#3F2C16").s().p("AAXA3QgDgEgBgFIgDgGIgDgJQgEgJgIgNIgEgLQgEgHgFgDQgLgUgDgKIgBgDQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAQACgBAAgDQABgEABgCIAZAyQAPAdAGAWIACAGQABAEgDACg");
	this.shape_204.setTransform(-12.4,-17.5,0.731,1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#20972D").s().p("AgOAfQgCgCABgJIgBguQgBgFAFgDQAPgJAOALQgCACgEAAQgFABgCACQgHAIAAAHQgBAHAFAIIAGALIABANQABAHAHADQgGACgFAAQgKAAgJgIg");
	this.shape_205.setTransform(-10.8,-47.9,0.731,1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#1F972C").s().p("AgDAGIACgIQABgDAEgBIAAAJQgCADgCABQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_206.setTransform(-11.9,-22.8,0.731,1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#8E6B32").s().p("AAAEQIgTACIABgBQAEgHADgMIAIgSQACgEACgCIAFACQACABADgBQADgCABgCIAAgGIABgYIgBAbQgCACgEgBQgEgDgBgKIAEgbQABgQgDgLQAAgJgDgGQgCgDABgHIAAgEIgBgDQAAgLgEgOIgLgXQgNgegMgTQgDgGgBgHIgBAAIAAABIABAFQgBACgEgCQgEgFADgLQAFgxAkhCIAJgTIAUgnQAKgWAFgSIAEgSIAAgMQAAgIgCgFIgCgEQABgCgCgIQgCgGADgEQAdA0gZBCQgCACgCALIgBABQgLASgTAmIgFALIgDAGQgCAEABADIgGATQgEANgBAHIgBAYQABAFgDAAIgBgBIADAHIgBAFQAAAEACABQAEADAAAFQAEAGADAHQgBAGADAEIACADIAEAFQgBAEACADIAEAGQAmA/gGBEIAAAKQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAAAQgIALgCAPIgDAcQgOgCgOAAg");
	this.shape_207.setTransform(-10.7,-24.5,0.731,1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#BC9B67").s().p("AgCgBIACgDIADAIQgDAAgCgFg");
	this.shape_208.setTransform(-8.4,12.1,0.643,1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#B89864").s().p("AgBAEIACgHQACAEgDADg");
	this.shape_209.setTransform(-9.6,-2.7,0.643,1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#A7844C").s().p("AAAAGIAAgLQABADAAAIg");
	this.shape_210.setTransform(-6.9,14.9,0.643,1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#BF9F6B").s().p("AAAAGIAAgLQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAALg");
	this.shape_211.setTransform(-9.9,-0.5,0.643,1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#B59562").s().p("AAAAFQgCgEACgFIACAJg");
	this.shape_212.setTransform(-9.3,0.9,0.643,1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#63523D").s().p("AADgEQgDAIAAABQgEgHAHgCg");
	this.shape_213.setTransform(-6.6,29.9,0.643,1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#4B3820").s().p("AgBACIADgEIgBAFIgCgBg");
	this.shape_214.setTransform(-6.9,30.6,0.643,1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#B29361").s().p("AgBAFIgBgFQABgCABgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAEgDAFg");
	this.shape_215.setTransform(-10,0.6,0.643,1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#B49564").s().p("AAAgHIABAAIAAAHQAAAEgBAEQAAgDAAgMg");
	this.shape_216.setTransform(-6.9,18.9,0.643,1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#B99965").s().p("AgBAGIABgLQAAAAABgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAFQAAAEgCACIAAABIgBgBg");
	this.shape_217.setTransform(-9.8,-1.6,0.643,1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#BC9D68").s().p("AAAAJIAAgQQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAQg");
	this.shape_218.setTransform(-10,1.9,0.643,1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#8B8043").s().p("AgBACIgBgGIAFAAQgBAGgCACIAAABQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_219.setTransform(-7.1,24.6,0.643,1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#D0B283").s().p("AgBAHIAAgLIAAgCQADAGAAAHg");
	this.shape_220.setTransform(-7.5,16.4,0.643,1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#BC9D68").s().p("AAAANIAAgZQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABABIAAAZIgBABIAAgBg");
	this.shape_221.setTransform(-6.9,16.8,0.643,1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#C8AD82").s().p("AgBAOQgBgSACgJIAAAFQAAAFACABQgCADAAAFIAAAIIAAABg");
	this.shape_222.setTransform(-11,2.5,0.643,1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#CAAD7A").s().p("AgCAAIAEgIIACAFIgGANQgCgFACgFg");
	this.shape_223.setTransform(-8.1,25.1,0.643,1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#D4B380").s().p("AgEAHIAEgIQABgFAEgDQAAAJgGAKg");
	this.shape_224.setTransform(-8.9,28,0.643,1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#B59562").s().p("AAAAPIAAgeIABAAIAAAeIgBABIAAgBg");
	this.shape_225.setTransform(-6.9,22.6,0.643,1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#D2B380").s().p("AgCAaIgBgDQAHgdgFgTIAAgCQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAABQAEANgCAPIgEAcIgCgDg");
	this.shape_226.setTransform(-7.5,20,0.643,1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#D7B682").s().p("AgDAFIAEgKQAEgBgBAEIgEAIIgDgBg");
	this.shape_227.setTransform(-9.2,29.3,0.643,1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#D6B682").s().p("AgQAfIAag5IACgFIABAAIAEgBQgEANgHAPIgTAlg");
	this.shape_228.setTransform(-6.7,-14.5,0.643,1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#F9FAF9").s().p("AgEAIIADgFIAAABIABgFQAAgDACgBIADgDIgHARIgCgBg");
	this.shape_229.setTransform(-6.6,30,0.643,1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#D3B380").s().p("AgaA/IACgHIgBgHIABgEQACgCAAgEIAAgGQATg1AcgvQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIgUAnQgLAYgGAQQgLAggBAWQgEgCAAgDg");
	this.shape_230.setTransform(-9.4,-4.6,0.643,1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#3A2711").s().p("AgCABQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBIABgDQACACAAAEQABABAAABQAAAAAAABQAAAAgBABQAAAAgBABg");
	this.shape_231.setTransform(-11.1,-0.2,0.643,1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#947C58").s().p("AAAACQgBgCgDAAIAAgCIAEgCIAEAIIgBABQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_232.setTransform(-8.1,13.6,0.643,1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#5D4E3B").s().p("AgBAAIACgFIACAFIgDAGQgDgDACgDg");
	this.shape_233.setTransform(-8.2,-5.2,0.643,1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#BF9E68").s().p("AgCgDIADAAQACACAAAEQgEABgBgHg");
	this.shape_234.setTransform(-8.1,7,0.643,1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#594834").s().p("AADgFQAAAFgEAGQgDgJAHgCg");
	this.shape_235.setTransform(-5.5,-13.4,0.643,1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#746043").s().p("AgCAGIAAgFIAAgEIACgFIABAGQAFAFgGAGQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_236.setTransform(-10.9,-0.9,0.643,1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#A6955E").s().p("AAAACIgCgCQACgEABgBQAAABACAEQABAEgCACQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_237.setTransform(-8.8,4.1,0.643,1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#5C4A33").s().p("AgBACIgDgGQADgCACADIADADIABACIgBAEIgBAAQgDAAgBgEg");
	this.shape_238.setTransform(-8.1,14,0.643,1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#624D30").s().p("AgCAAQgDgEAFgBQABAAABAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAABQAAAAAAAAQAAAAAAABQABAAAAAAIABACIgFADQABgBgCgFg");
	this.shape_239.setTransform(-7.8,15.6,0.643,1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#53412A").s().p("AAAAHIgEgNIACAAQACABACAFIADAFQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_240.setTransform(-8.4,12.6,0.643,1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#D3B586").s().p("AgCACQgDgCAFgFQAEAFAAAGQgFgCgBgCg");
	this.shape_241.setTransform(-7.6,8.4,0.643,1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#BE9E6B").s().p("AgEgHQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAAAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIABgDIAEAHIgGAEQgDgJAAgGg");
	this.shape_242.setTransform(-9,2.2,0.643,1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#594937").s().p("AAAABQAAgKgCgIQACgEACACIABALIgBADIAAANQAAAIgCAFIAAgUg");
	this.shape_243.setTransform(-7.7,18,0.643,1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#8F7650").s().p("AgGgKQAIABACAIQACACABAKIgDAAQgIgNgCgIg");
	this.shape_244.setTransform(-9.8,8.4,0.643,1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#4D3B23").s().p("AgEARIADgOQABgDAAgKQgBgJACgEQAFAIgBAQQgBARgFAGg");
	this.shape_245.setTransform(-7.6,19.8,0.643,1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#422E16").s().p("AAEAMIgMgXQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAFADADAHIAGALIgDAEIgCgBg");
	this.shape_246.setTransform(-9,10.7,0.643,1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#53422E").s().p("AgDAJIABgMIABgSQADAAACAGIgBAHIgDAaIAAAEQgDgFAAgIg");
	this.shape_247.setTransform(-11.2,2.1,0.643,1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#43301B").s().p("AgRAfQAEgNALgSIAQggIAFgDQgFAPgKATIgRAgIgCAFQgEgBACgEg");
	this.shape_248.setTransform(-6.9,-9,0.643,1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#2E9E2E").s().p("AgBgEIADAEIAAAFQgCgEgBgFg");
	this.shape_249.setTransform(-9.9,-20,0.643,1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#94723C").s().p("AgnBRIgBgEQAHgbAbgyQAdg5AHgRIABgFIAIgCIABAAIgBAFIgIAQIgUAqQgjBAgKAjIgCABQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAgBAAg");
	this.shape_250.setTransform(-8.4,-9.5,0.643,1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#3F2C16").s().p("AAXA3QgDgEgBgFIgDgGIgDgJQgEgJgIgNIgEgLQgEgHgFgDQgLgUgDgKIgBgDQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAQACgBAAgDQABgEABgCIAZAyQAPAdAGAWIACAGQABAEgDACg");
	this.shape_251.setTransform(-9.4,8.6,0.643,1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#1F972C").s().p("AgDAGIACgIQABgDAEgBIAAAJQgCADgCABQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_252.setTransform(-9,3.3,0.643,1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#93713B").s().p("AgOAgIALgZQAMgdACgKQAEAEAAAFQAAADgDAGQgDAGABAEIgFAJIgEAJIgDAJIgEAKIgIgBg");
	this.shape_253.setTransform(-8.9,26.5,0.643,1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#118F2D").s().p("AgCANQgCgBgCgEIgCgJIAEgQQADABABAFIACAHIAEALIACADQABABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgDAEgDAAQgBAAgCgFg");
	this.shape_254.setTransform(-7.6,23.4,0.643,1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#8E6B32").s().p("AgWDtIAEgJQAEgHADgMIAIgSQACgEACgCIAFACQACABADgBQADgCABgCIAAgGIABgYIgBAbQgCACgEgBQgEgDgBgKIAEgbQABgQgDgLQAAgJgDgGQgCgDABgHIAAgEIgBgDQAAgLgEgOIgLgXQgNgegMgSQgDgGgBgHIgBAAIAAABIABAFQgBACgEgCQgEgFADgLQAFgyAkhCIAJgTIAUgnIAKgaIABAAQAMgEAHgGQgCAXgJAYQgCACgCALIgBABQgLASgTAmIgFALIgDAGQgCAEABADIgGATQgEANgBAHIgBAZQABAFgDAAIgBgBIADAHIgBAFQAAAEACABQAEADAAAFQAGAIADAKQAAAFACACIAEAFQgBAEACADIAEAGQAmA/gGBEIAAAKQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgIALgCAPIgDAcIgCAEQgFAEgBAFIgBADIgCADQgSgHgVgEg");
	this.shape_255.setTransform(-7.9,6.1,0.643,1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#51412D").s().p("AAAAAIABAAIgBABIAAgBg");
	this.shape_256.setTransform(-19.1,1,0.78,1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#988160").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_257.setTransform(-19.1,1,0.78,1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#BC9B67").s().p("AgCgBIACgDIADAIQgDAAgCgFg");
	this.shape_258.setTransform(-12.1,57.8,0.692,1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#B89864").s().p("AgBAEIACgHQACAEgDADg");
	this.shape_259.setTransform(-13.4,43,0.692,1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#A7844C").s().p("AAAAGIAAgLQABADAAAIg");
	this.shape_260.setTransform(-10.5,60.6,0.692,1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#BF9F6B").s().p("AAAAGIAAgLQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAALg");
	this.shape_261.setTransform(-13.7,45.2,0.692,1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#B59562").s().p("AAAAFQgCgEACgFIACAJg");
	this.shape_262.setTransform(-13.1,46.6,0.692,1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#63523D").s().p("AgBACQgBgDAFgBIgDAFIgBgBg");
	this.shape_263.setTransform(-10.1,75.4,0.692,1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#B29361").s().p("AgBAFIgBgFQABgCABgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAEgDAFg");
	this.shape_264.setTransform(-13.8,46.2,0.692,1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#B49564").s().p("AAAgHIABAAIAAAHQAAAEgBAEQAAgDAAgMg");
	this.shape_265.setTransform(-10.5,64.5,0.692,1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#B99965").s().p("AgBAGIABgLQAAAAABgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAFQAAAEgCACIAAABIgBgBg");
	this.shape_266.setTransform(-13.6,44,0.692,1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#BC9D68").s().p("AAAAJIAAgQQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAQg");
	this.shape_267.setTransform(-13.8,47.5,0.692,1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#8B8043").s().p("AgBACIgBgGIAFAAQgBAGgCACIAAABQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_268.setTransform(-10.6,70.3,0.692,1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#D0B283").s().p("AgBAHIAAgLIAAgCQADAGAAAHg");
	this.shape_269.setTransform(-11.1,62.1,0.692,1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#59462E").s().p("AAAgLIABAAQACAPgDAIg");
	this.shape_270.setTransform(-8.8,23.2,0.692,1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#BC9D68").s().p("AAAANIAAgZQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABABIAAAZIgBABIAAgBg");
	this.shape_271.setTransform(-10.5,62.5,0.692,1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#BFAF76").s().p("AgCAGIAAgGQACgCAAgGIADAAQgBALgCAFg");
	this.shape_272.setTransform(-8.8,25.8,0.692,1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#C8AD82").s().p("AgBAOQgBgSACgJIAAAFQAAAFACABQgCADAAAFIAAAIIAAABg");
	this.shape_273.setTransform(-14.9,48.2,0.692,1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#CAAD7A").s().p("AgCAAIAEgIIACAFIgGANQgCgFACgFg");
	this.shape_274.setTransform(-11.7,70.7,0.692,1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#D4B380").s().p("AgEAHIAEgIQABgFAEgDQAAAJgGAKg");
	this.shape_275.setTransform(-12.6,73.6,0.692,1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#B59562").s().p("AAAAPIAAgeIABAAIAAAeIgBABIAAgBg");
	this.shape_276.setTransform(-10.5,68.3,0.692,1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#CCAE7D").s().p("AgBAOIgBgFQACgEgBgHQAAgIABgEQADAFgBAJIAAAOIgCABIgBgBg");
	this.shape_277.setTransform(-8.7,23.5,0.692,1);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#D2B380").s().p("AgCAaIgBgDQAHgdgFgTIAAgCQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAABQAEANgCAPIgEAcIgCgDg");
	this.shape_278.setTransform(-11.1,65.6,0.692,1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#D7B682").s().p("AAAgDQAEgBgBAEIgCAEIgDAAg");
	this.shape_279.setTransform(-12.9,74.7,0.692,1);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#D6B682").s().p("AgRAmIAZg5QAGgLgBgGIADgEQAEgBgCAEQgEASgKAVIgTAng");
	this.shape_280.setTransform(-10.2,30.4,0.692,1);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#F9FAF9").s().p("AgCAEIABgCQAAgCACgBIACgDIgDAJIgCgBg");
	this.shape_281.setTransform(-10,75.3,0.692,1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#D3B380").s().p("AgaA/IACgHIgBgHIABgEQACgCAAgEIAAgGQATg1AcgvQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIgUAnQgLAYgGAQQgLAggBAWQgEgCAAgDg");
	this.shape_282.setTransform(-13.1,41.1,0.692,1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#3A2711").s().p("AgCABQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBIABgDQACACAAAEQABABAAABQAAAAAAABQAAAAgBABQAAAAgBABg");
	this.shape_283.setTransform(-15,45.4,0.692,1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#947C58").s().p("AAAACQgBgCgDAAIAAgCIAEgCIAEAIIgBABQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_284.setTransform(-11.8,59.2,0.692,1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#5D4E3B").s().p("AgBAAIACgFIACAFIgDAGQgDgDACgDg");
	this.shape_285.setTransform(-11.8,40.4,0.692,1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#BF9E68").s().p("AgCgDIADAAQACACAAAEQgEABgBgHg");
	this.shape_286.setTransform(-11.8,52.6,0.692,1);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#594834").s().p("AADgFQAAAFgEAGQgDgJAHgCg");
	this.shape_287.setTransform(-9,32.3,0.692,1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#746043").s().p("AgCAGIAAgFIAAgEIACgFIABAGQAFAFgGAGQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_288.setTransform(-14.8,44.7,0.692,1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#A6955E").s().p("AAAACIgCgCQACgEABgBQAAABACAEQABAEgCACQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_289.setTransform(-12.5,49.8,0.692,1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#5C4A33").s().p("AgBACIgDgGQADgCACADIADADIABACIgBAEIgBAAQgDAAgBgEg");
	this.shape_290.setTransform(-11.7,59.7,0.692,1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#624D30").s().p("AgCAAQgDgEAFgBQABAAABAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAABQAAAAAAAAQAAAAAAABQABAAAAAAIABACIgFADQABgBgCgFg");
	this.shape_291.setTransform(-11.5,61.2,0.692,1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#53412A").s().p("AAAAHIgEgNIACAAQACABACAFIADAFQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_292.setTransform(-12.1,58.2,0.692,1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#1D942C").s().p("AAFADIgFgBQgBgCgGAAQADgCAEAAIAHAAQACAFgDAAIgBAAg");
	this.shape_293.setTransform(-11,20.8,0.692,1);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#D3B586").s().p("AgCACQgDgCAFgFQAEAFAAAGQgFgCgBgCg");
	this.shape_294.setTransform(-11.2,54.1,0.692,1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#BE9E6B").s().p("AgEgHQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAAAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIABgDIAEAHIgGAEQgDgJAAgGg");
	this.shape_295.setTransform(-12.8,47.8,0.692,1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#594937").s().p("AAAABQAAgKgCgIQACgEACACIABALIgBADIAAANQAAAIgCAFIAAgUg");
	this.shape_296.setTransform(-11.4,63.6,0.692,1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#8F7650").s().p("AgGgKQAIABACAIQACACABAKIgDAAQgIgNgCgIg");
	this.shape_297.setTransform(-13.6,54.1,0.692,1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#4D3B23").s().p("AgEARIADgOQABgDAAgKQgBgJACgEQAFAIgBAQQgBARgFAGg");
	this.shape_298.setTransform(-11.2,65.5,0.692,1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#422E16").s().p("AAEAMIgMgXQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAFADADAHIAGALIgDAEIgCgBg");
	this.shape_299.setTransform(-12.7,56.4,0.692,1);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#53422E").s().p("AgDAJIABgMIABgSQADAAACAGIgBAHIgDAaIAAAEQgDgFAAgIg");
	this.shape_300.setTransform(-15.1,47.7,0.692,1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#3A2711").s().p("AAAAiIAAgCQAFgbgLgnQAFAAABAFQABAGABABQgBADACAHQACAIAAADQACAEAAAGIAAAMIAAAGIgBAFQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAg");
	this.shape_301.setTransform(-9.2,22.2,0.692,1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#43301B").s().p("AgRAfQAEgNALgSIAQggIAFgDQgFAPgKATIgRAgIgCAFQgEgBACgEg");
	this.shape_302.setTransform(-10.5,36.7,0.692,1);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#05702C").s().p("AAFAZIgOgHQgLgPgBgIQAAgJAKgLIAEgBQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQgNAJAGAPQAHASAQABIAJgBIABACIgBABQgFAFgFAAIgGgCg");
	this.shape_303.setTransform(-10.7,23.4,0.692,1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#169131").s().p("AgRAAIAAgLQADgCAFADQAJAIANgFIADABQADADgBADQgCAEgDAAQAAABgBAAQgBAAAAAAQgBABAAAAQAAAAgBABIgDADIgLACIgCABQgMAAACgNg");
	this.shape_304.setTransform(-10.2,26.3,0.692,1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#2E9E2E").s().p("AgKAAQACgYATgIIgDAHQACAMAAAXIgBAHQAAAEACADQgDAEAAAFQgRgJgBgYg");
	this.shape_305.setTransform(-13.3,23.7,0.692,1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#94723C").s().p("AgnBWIgBgDQAHgcAbgyQAdg5AHgRIADgNQAAgHAIACQABAIgEAJIgHAQIgVAqQgiBAgKAiIgCACQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_306.setTransform(-12,35.6,0.692,1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#3F2C16").s().p("AAXA3QgDgEgBgFIgDgGIgDgJQgEgJgIgNIgEgLQgEgHgFgDQgLgUgDgKIgBgDQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAQACgBAAgDQABgEABgCIAZAyQAPAdAGAWIACAGQABAEgDACg");
	this.shape_307.setTransform(-13.2,54.2,0.692,1);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#20972D").s().p("AgOAfQgCgCABgJIgBguQgBgFAFgDQAPgJAOALQgCACgEAAQgFABgCACQgHAIAAAHQgBAHAFAIIAGALIABANQABAHAHADQgGACgFAAQgKAAgJgIg");
	this.shape_308.setTransform(-11.7,23.9,0.692,1);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#1F972C").s().p("AgDAGIACgIQABgDAEgBIAAAJQgCADgCABQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_309.setTransform(-12.8,48.9,0.692,1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#93713B").s().p("AgDAJQALgdACgLQAEAEAAAFQAAADgDAHQgCAFAAAEIgEAJIgEAJIgEAKIgCAGIgIABIAKgXg");
	this.shape_310.setTransform(-12.6,72,0.692,1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#118F2D").s().p("AgCANQgCgBgCgEIgCgJIAEgQQADABABAFIACAHIAEALIACADQABABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgDAEgDAAQgBAAgCgFg");
	this.shape_311.setTransform(-11.3,69,0.692,1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#8E6B32").s().p("AAAESQgLgBgKABIADgGQAEgHADgMIAIgTQACgEACgBIAFACQACABADgBQADgCABgCIAAgGIABgZIgBAcQgCACgEgBQgEgDgBgKIAEgbQABgQgDgLQAAgJgDgHQgCgCABgIIAAgDIgBgDQAAgMgEgNIgLgXQgNgegMgTQgDgGgBgIIgBAAIAAABIABAGQgBABgEgBQgEgFADgLQAFgyAkhCIAJgSIAUgnQAKgWAFgSIAEgSIAAgMQAAgJgCgFIgCgDQABgCgCgIQgCgGADgEQAdA0gZBCQgCACgCAKIgBACQgLASgTAmIgFALIgDAGQgCAEABACIgGAUQgEANgBAHIgBAYQABAFgDAAIgBgBIADAHIgBAFQAAADACACQAEADAAAFQAGAHADAMQAAAFACACIAEAFQgBADACAEIAEAGQAmA+gGBFIAAAJQAAABAAABQAAABAAAAQAAABAAAAQAAABAAAAQgIALgCAPIgDAcIgCAEQgEADgBAEQgLgEgKgCg");
	this.shape_312.setTransform(-11.6,47.8,0.692,1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#BF9F6B").s().p("AAAAGIAAgLQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAALg");
	this.shape_313.setTransform(-10.8,62.6);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#B59562").s().p("AAAAFQgCgEACgFIACAJg");
	this.shape_314.setTransform(-9.9,64);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#B29361").s().p("AgBAFIgBgFQABgCABgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAEgDAFg");
	this.shape_315.setTransform(-10.9,63.7);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#B99965").s().p("AgBAGIABgLQABAAAAgBQAAAAAAAAQABAAAAAAQAAABAAAAIAAAFQAAAEgCACIAAABIgBgBg");
	this.shape_316.setTransform(-10.6,61.5);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#BC9D68").s().p("AAAAJIAAgQQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAQg");
	this.shape_317.setTransform(-11,65);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#C8AD82").s().p("AgBAOQgBgSACgJIAAAFQAAAFACABQgCADAAAFIAAAIIAAABg");
	this.shape_318.setTransform(-12.6,65.6);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#3A2711").s().p("AgCABQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBIABgDQACACAAAEQABABAAABQAAAAAAABQAAAAgBABQAAAAgBABg");
	this.shape_319.setTransform(-12.7,62.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#746043").s().p("AgCAGIAAgFIAAgEIACgFIABAGQAFAFgGAGQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_320.setTransform(-12.4,62.2);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#A6955E").s().p("AAAADIgCgDQACgDABgBQAAABACAEIAAADIgDABIAAgCg");
	this.shape_321.setTransform(-9.1,67.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#BE9E6B").s().p("AgEgHQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAAAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIABgDIAEAHIgGAEQgDgJAAgGg");
	this.shape_322.setTransform(-9.5,65.3);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#53422E").s().p("AgDAJIABgMIABgSQADAAACAGIgBAHIgDAaIAAAEQgDgFAAgIg");
	this.shape_323.setTransform(-12.8,65.2);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#3F2C16").s().p("AgIgBIAAgDQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQADgBAAgDQAAgEACgCIAKAWQgFAEgEAFQgGgLgCgGg");
	this.shape_324.setTransform(-11.9,67.6);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#1F972C").s().p("AgDAGIACgIQABgDAFgBIAAAJQgDADgCABQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_325.setTransform(-9.4,66.4);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#B89864").s().p("AgBAEIACgHQACAEgDADg");
	this.shape_326.setTransform(-16.8,87.1);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#BF9F6B").s().p("AAAAGIAAgLQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAALg");
	this.shape_327.setTransform(-17.2,89.3);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#B59562").s().p("AAAAFQgCgEACgFIACAJg");
	this.shape_328.setTransform(-16.3,90.7);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#B29361").s().p("AgBAFIgBgFQABgCABgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAEgDAFg");
	this.shape_329.setTransform(-17.3,90.4);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#B99965").s().p("AgBAGIABgLQABAAAAgBQAAAAAAAAQABAAAAAAQAAABAAAAIAAAFQAAAEgCACIAAABIgBgBg");
	this.shape_330.setTransform(-17,88.2);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#BC9D68").s().p("AAAAJIAAgQQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIAAAQg");
	this.shape_331.setTransform(-17.4,91.7);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#98864D").s().p("AABgEIABADIgBABIgCAFIACgJg");
	this.shape_332.setTransform(35.3,152.2);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#59462E").s().p("AAAgLIABAAQACAPgDAIg");
	this.shape_333.setTransform(-10.2,67.4);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#BFAF76").s().p("AgCAGIAAgGQACgCAAgGIADAAQgBALgCAFg");
	this.shape_334.setTransform(-10.2,69.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#C8AD82").s().p("AgBAOQgBgSACgJIAAAFQAAAFACABQgCADAAAFIAAAIIAAABg");
	this.shape_335.setTransform(-19,92.3);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#CCAE7D").s().p("AgBAOIgBgFQACgEgBgHQAAgIABgEQADAFgBAJIAAAOIgCABIgBgBg");
	this.shape_336.setTransform(-10,67.7);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#D6B682").s().p("AgRAmIAZg5QAGgLgBgGIADgEQAEgBgCAEQgEASgKAVIgTAng");
	this.shape_337.setTransform(-12.1,74.6);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#D3B380").s().p("AgaA/IACgHIgBgHIABgEQACgCAAgEIAAgGQATg1AcgvQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIgUAnQgLAYgGAQQgLAggBAWQgEgCAAgDg");
	this.shape_338.setTransform(-16.4,85.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#3A2711").s().p("AgCABQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBIABgDQACACAAAEQABABAAABQAAAAAAABQAAAAgBABQAAAAgBABg");
	this.shape_339.setTransform(-19.1,89.6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#5D4E3B").s().p("AgBAAIACgFIACAFIgDAGQgDgDACgDg");
	this.shape_340.setTransform(-14.5,84.6);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#BF9E68").s().p("AgCgDIADAAQACACAAAEQgEABgBgHg");
	this.shape_341.setTransform(-14.5,96.8);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#594834").s().p("AADgFQAAAFgEAGQgDgJAHgCg");
	this.shape_342.setTransform(-10.4,76.4);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#746043").s().p("AgCAGIAAgFIAAgEIACgFIABAGQAFAFgGAGQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_343.setTransform(-18.8,88.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#A6955E").s().p("AAAACIgCgCQACgEABgBQAAABACAEQABAEgCACQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_344.setTransform(-15.5,93.9);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#1D942C").s().p("AAFADIgFgBQgBgCgGAAQADgCAEAAIAHAAQACAFgDAAIgBAAg");
	this.shape_345.setTransform(-13.4,65);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#D3B586").s().p("AgCACQgDgCAFgFQAEAFAAAGQgFgCgBgCg");
	this.shape_346.setTransform(-13.6,98.2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#BE9E6B").s().p("AgEgHQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAAAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIABgDIAEAHIgGAEQgDgJAAgGg");
	this.shape_347.setTransform(-15.9,92);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#8F7650").s().p("AgGgKQAHABADAIQACACABAKIgDAAQgIgNgCgIg");
	this.shape_348.setTransform(-17,98.2);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#422E16").s().p("AgGgHQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAEADAEAGIACAGIgFACg");
	this.shape_349.setTransform(-15.9,100.1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#53422E").s().p("AgDAJIABgMIABgSQADAAACAGIgBAHIgDAaIAAAEQgDgFAAgIg");
	this.shape_350.setTransform(-19.2,91.9);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#3A2711").s().p("AAAAiIAAgCQAGgbgMgnQAFAAABAFQABAGACABQgCADACAHQACAIgBADQADAEAAAGIgBAMIAAAGIAAAFQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_351.setTransform(-10.7,66.3);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#43301B").s().p("AgRAfQAEgNALgSIAQggIAFgDQgFAPgKATIgRAgIgCAFQgEgBACgEg");
	this.shape_352.setTransform(-12.6,80.8);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#05702C").s().p("AAFAZIgOgHQgLgPgBgIQAAgJAKgLIAEgBQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQgNAJAGAPQAHASAQABIAJgBIABACIgBABQgFAFgFAAIgGgCg");
	this.shape_353.setTransform(-12.9,67.5);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#169131").s().p("AgRAAIAAgLQADgCAFADQAJAIANgFIADABQADADgBADQgCAEgDAAQAAABgBAAQgBAAAAAAQgBABAAAAQAAAAgBABIgDADIgLACIgCABQgMAAACgNg");
	this.shape_354.setTransform(-12.1,70.5);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#2E9E2E").s().p("AgKAAQACgYASgIIgCAHQACAMgBAXIAAAHQAAAEABADQgCAEAAAFQgSgJAAgYg");
	this.shape_355.setTransform(-16.6,67.8);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#94723C").s().p("AgnBWIgBgDQAHgcAbgyQAdg5AHgRIACgGQACgEgBgDQAAgHAIACQABAIgEAJIgHAQIgVAqQgiBAgKAiIgCACQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_356.setTransform(-14.8,79.7);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#3F2C16").s().p("AAGAZIgFgMQgDgHgFgDQgLgTgDgLIgBgDQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQACgBAAgEQABgEABgBIAZAxIANAdIgIADIgJgQg");
	this.shape_357.setTransform(-17,96.8);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#20972D").s().p("AgOAfQgCgCABgJIgBguQgBgFAFgDQAPgJAOALQgCACgEAAQgFABgCACQgHAIAAAHQgBAHAFAIIAGALIABANQABAHAHADQgGACgFAAQgKAAgJgIg");
	this.shape_358.setTransform(-14.3,68);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#1F972C").s().p("AgDAGIACgIQABgDAFgBIAAAJQgDADgCABQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_359.setTransform(-15.8,93.1);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#0B8930").s().p("AABgBIAAABIgBACQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAg");
	this.shape_360.setTransform(35.4,152.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#8E6B32").s().p("AhMGOIAFgJQgDANgEAKQAAgIACgGgAgSDwIAAgBIACgCQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABIgCADIgBABIgDAEIAEgKgAAdgHIACAAIgCABgAANg6QgNgdgLgUQgEgGgBgHIAAAAIAAABIAAAFQAAACgFgCQgDgFADgLQAFgyAjhCIAKgTIATgnQAKgVAFgSIAEgSIAAgNQABgIgCgFIgCgDQAAgDgCgIQgCgGAEgEQAcA0gYBCQgCACgDALIgBABQgLASgTAmIgFALIgDAGQgCAEAAADIgFATQgEANgBAHIgBAZQABAGgDgBIgBgBIACAHIAAAGQgBADACABQAEAEAAAEQAHAIADALQgBAFADACIAEAGQgBADACADIAEAGIAHALIgXAIIgHgPg");
	this.shape_361.setTransform(-16.9,105.2);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#1F982C").ss(1,1,1).p("Ag1AbIBqg1");
	this.shape_362.setTransform(-11,85.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.instance_30},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.shape},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fullPlant, new cjs.Rectangle(-53,-182.9,88.6,365.6), null);


(lib.clouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cloud1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(342.9,52.1,1.163,1.385,0,0,0,124.6,37.6);

	this.instance_1 = new lib.cloud1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(113.2,202.5,0.909,1.033,0,0,0,124.5,37.7);

	this.instance_2 = new lib.cloud1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(673.8,244.9,0.856,1.02,0,0,0,124.6,37.6);

	this.instance_3 = new lib.cloud1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(863.1,121.9,1.078,1.284,0,0,0,124.7,37.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,997.3,283.2);


(lib.backround2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cloud1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(850.1,495.4,1.525,1.435,0,0,0,124.6,37.6);

	this.instance_1 = new lib.cloud1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(203.2,537.9,1.525,2.197,0,0,0,124.5,37.6);

	this.instance_2 = new lib.clouds("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(498.7,141.6,1,1,0,0,0,498.7,141.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8E6EF").s().p("EhK3At5MAAAhbxMCVvAAAMAAABbxg");
	this.shape.setTransform(509.9,293.8,1,1.218);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-63.9,1040.1,715.5);


(lib.kidClimb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_95 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(95).call(this.frame_95).wait(1));

	// Layer_1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(-29.3,80.2,2.006,2.006,0,0,0,11.9,24.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:2,scaleY:2,x:-18.3,y:82.7},0).wait(1).to({scaleX:2,scaleY:2,x:-7.3,y:85.2},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:3.6,y:87.8},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:14.6,y:90.3},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:25.6,y:92.9},0).wait(1).to({scaleX:1.98,scaleY:1.98,x:36.5,y:95.4},0).wait(1).to({scaleX:1.98,scaleY:1.98,x:47.6,y:98},0).wait(1).to({scaleX:1.97,scaleY:1.97,x:58.6,y:100.6},0).wait(1).to({scaleX:1.96,scaleY:1.96,x:61.7,y:91},0).wait(1).to({scaleX:1.95,scaleY:1.95,x:64.9,y:81.6},0).wait(1).to({scaleX:1.94,scaleY:1.94,x:68,y:72.2},0).wait(1).to({scaleX:1.93,scaleY:1.93,x:71.3,y:62.7},0).wait(1).to({regY:24,scaleX:1.92,scaleY:1.92,x:74.5,y:53.1},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:77.6,y:43.6},0).wait(1).to({regY:24.1,scaleX:1.89,scaleY:1.89,x:80.8,y:34.4},0).wait(1).to({regY:24,scaleX:1.88,scaleY:1.88,x:84,y:24.7},0).wait(1).to({regY:24.1,scaleX:1.88,scaleY:1.88,x:83,y:23.2},0).wait(1).to({scaleX:1.89,scaleY:1.89,x:82.1,y:21.6},0).wait(1).to({regY:24,scaleX:1.89,scaleY:1.89,x:81,y:19.8},0).wait(1).to({scaleX:1.89,scaleY:1.89,x:80,y:18.1},0).wait(1).to({scaleX:1.89,scaleY:1.89,x:79,y:16.5},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:78,y:14.9},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:77,y:13.2},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:76,y:11.5},0).wait(1).to({regY:24.1,scaleX:1.9,scaleY:1.9,x:75,y:10.1},0).wait(1).to({regY:24,scaleX:1.91,scaleY:1.91,x:74,y:8.3},0).wait(1).to({scaleX:1.88,scaleY:1.88,x:76.8,y:0.1},0).wait(1).to({regX:12,scaleX:1.85,scaleY:1.85,x:79.9,y:-8},0).wait(1).to({regX:11.9,scaleX:1.83,scaleY:1.83,x:82.7,y:-16.2},0).wait(1).to({regY:24.1,scaleX:1.8,scaleY:1.8,x:85.5,y:-24.3},0).wait(1).to({regY:24,scaleX:1.77,scaleY:1.77,x:88.4,y:-32.7},0).wait(1).to({scaleX:1.75,scaleY:1.75,x:91.3,y:-40.9},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:94.1,y:-49},0).wait(1).to({regY:24.1,scaleX:1.69,scaleY:1.69,x:97,y:-57.1},0).wait(1).to({scaleX:1.67,scaleY:1.67,x:99.9,y:-65.3},0).wait(1).to({regY:24,scaleX:1.64,scaleY:1.64,x:102.7,y:-73.6},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:101,y:-78.7},0).wait(1).to({scaleX:1.61,scaleY:1.61,x:99.2,y:-83.8},0).wait(1).to({regY:24.1,scaleX:1.6,scaleY:1.6,x:97.4,y:-88.8},0).wait(1).to({regY:24,scaleX:1.58,scaleY:1.58,x:95.6,y:-94},0).wait(1).to({scaleX:1.57,scaleY:1.57,x:93.8,y:-99.1},0).wait(1).to({scaleX:1.56,scaleY:1.56,x:91.9,y:-104.1},0).wait(1).to({regY:24.1,scaleX:1.54,scaleY:1.54,x:90.2,y:-109.1},0).wait(1).to({regY:24,scaleX:1.53,scaleY:1.53,x:88.4,y:-114.3},0).wait(1).to({scaleX:1.51,scaleY:1.51,x:86.6,y:-119.5},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:88.9,y:-125.1},0).wait(1).to({regY:24.1,scaleX:1.49,scaleY:1.49,x:91.3,y:-130.8},0).wait(1).to({regX:12,regY:24,scaleX:1.47,scaleY:1.47,x:93.7,y:-136.6},0).wait(1).to({regX:11.9,regY:24.1,scaleX:1.46,scaleY:1.46,x:96,y:-142.3},0).wait(1).to({regY:24,scaleX:1.44,scaleY:1.44,x:98.3,y:-148.2},0).wait(1).to({regY:24.1,scaleX:1.43,scaleY:1.43,x:100.6,y:-153.8},0).wait(1).to({regY:24,scaleX:1.41,scaleY:1.41,x:103,y:-159.6},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:105.3,y:-165.4},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:107.7,y:-171.2},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:110.1,y:-176.8},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:108.2,y:-182.3},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:106.4,y:-187.7},0).wait(1).to({regY:24.1,scaleX:1.35,scaleY:1.35,x:104.6,y:-193},0).wait(1).to({regX:12,regY:24,scaleX:1.34,scaleY:1.34,x:102.9,y:-198.5},0).wait(1).to({regX:11.9,scaleX:1.33,scaleY:1.33,x:101,y:-204},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:99.2,y:-209.4},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:97.3,y:-214.8},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:95.6,y:-220.2},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:93.8,y:-225.7},0).wait(1).to({regY:23.9,scaleX:1.29,scaleY:1.29,x:92,y:-231.2},0).wait(1).to({regY:24,scaleX:1.35,scaleY:1.35,x:94.1,y:-238.4},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:96.2,y:-245.7},0).wait(1).to({regX:12,regY:24.1,scaleX:1.25,scaleY:1.25,x:98.4,y:-252.9},0).wait(1).to({regX:11.9,scaleX:1.2,scaleY:1.2,x:100.4,y:-260.2},0).wait(1).to({regX:12,regY:24,scaleX:1.15,scaleY:1.15,x:102.6,y:-267.6},0).wait(1).to({regX:11.9,scaleX:1.1,scaleY:1.1,x:104.7,y:-274.9},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:106.8,y:-282.2},0).wait(1).to({scaleX:1,scaleY:1,x:108.9,y:-289.5},0).wait(1).to({x:107.2,y:-298.6},0).wait(1).to({x:105.5,y:-307.7},0).wait(1).to({x:103.9,y:-316.8},0).wait(1).to({x:102.2,y:-325.9},0).wait(1).to({x:100.5,y:-335},0).wait(1).to({x:98.8,y:-344.1},0).wait(1).to({x:97.2,y:-353.2},0).wait(1).to({x:99.4,y:-358.1},0).wait(1).to({x:101.7,y:-362.9},0).wait(1).to({x:104,y:-367.8},0).wait(1).to({x:106.3,y:-372.7},0).wait(1).to({x:108.6,y:-377.5},0).wait(1).to({x:110.9,y:-382.4},0).wait(1).to({x:113.2,y:-387.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:109.8,y:-392.9},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:107.1,y:-400.5},0).wait(1).to({regX:12,scaleX:1.11,scaleY:1.11,x:105.2,y:-410},0).wait(1).to({regX:11.9,scaleX:1.15,scaleY:1.15,x:103.8,y:-421.4},0).wait(1).to({regX:12,scaleX:1.18,scaleY:1.18,x:103.2,y:-434.8},0).wait(1).to({regX:11.9,scaleX:1.22,scaleY:1.22,y:-450.1},0).wait(1).to({regX:12,scaleX:1.26,scaleY:1.26,x:104.1,y:-467.3},0).wait(1).to({regX:11.9,scaleX:1.29,scaleY:1.29,x:105.4,y:-486.5},0).wait(1));

	// Layer_2
	this.instance_1 = new lib.fullPlant();
	this.instance_1.parent = this;
	this.instance_1.setTransform(101.6,-195.3,1.681,1.681,0,0,0,-8.5,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.2,-502.6,228.8,629.8);


// stage content:
(lib.LovebirdsStavBen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		$("#canvas").css("direction", "rtl");
		var w = 0;
		var timeCount = 0;
		var forcombo;
		var subjects = ["0", "ספורט", "קולנוע"];
		var mychoice = 0;
		var timer;
		var mynewnum = [];
		var qNum;
		var counter = 0;
		//מספר השאלות הקיים
		var arrayLength = 10;
		
		var sum = 0;
		
		//בר התקדמות הצמח
		var barPart = 0; //הפריים אליו צריך להתקדם בר ההתקדמות
		var barRemainPart = 29; //מספר השלבים שיש בבר ההתקדמות
		var clicksNum = 10; //כמה שאלות יש עד שהבר יתמלא לגמרי
		var barJump; //בכמה פריימים בר ההתקדמות צריך להתקדם
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		startGame();
		
		function startGame() {
			barJump = 0;
			barPart = 0;
			clicksNum = 10;
			barRemainPart = 29;
		}
		
		//משתנה זה, בהתאם לבחירת הקומבובוקס, יהיה אחראי על בחירת משחק מתוך 2 מערכים שונים 
		var myArray;
		
		var watercan = [
			//תא ספייר כדי שיתאים לשמות המשפכים המתחילים מ1 ולא מ0
			[0, 0],
			[900, 240],
			[900, 315],
			[900, 395],
			[900, 475]
		];
		//מערך למיקומים בזמן מסך תמונות
		
		//תא ספייר כדי שיתאים לשמות המשפכים המתחילים מ1 ולא מ0
		var pici = [
			[0, 0],
			[610, 270],
			[910, 270],
			[610, 400],
			[910, 400]
		];
		
		var gameQuestions = [
			[
				["מהו הספורט הלאומי במדינה זו?", "txt", 1],
				["סומו", true],
				["כדורעף", false],
				["באולינג", false],
				["מחניים", false]
			],
			[
				["מהו האיצטדיון הגדול בעולם?", "txt", 1],
				["אצטדיון האצטקה במקסיקו סיטי", true],
				["אצטדיון המושבה בפתח תקווה", false],
				["אליאנץ ארנה במינכן", false],
				["אצטדיון הקאמפ-נואו בברצלונה", false]
			],
			[
				["אם זכיתי בגביע דייויס, אני...", "txt", 1],
				["אני שחקן בספורט שמכונה 'הספורט הלבן'", true],
				["אני שחקן במשחק מודרני שנוצר באנגליה ומשחקים בו 11 שחקנים בכל קבוצה ", false],
				["אני שחקן במשחק בו המטרה היא לקלוע לסל ", false],
				["אני שחקן במשחק כדור, שבו על השחקן להעיף כדור קטן לאורך מסלול דשא", false]
			],
			[
				["מה אורכה של בריכה אולימפית?", "txt", 1],
				["50 מטר", true],
				["100 מטר", false],
				["150 מטר", false],
				["200 מטר", false]
			],
			[
				["מי מהבאים מתמחה באמנויות לחימה?", "txt", 1],
				["קונור מקגרגור", true],
				["לאו מסי", false],
				["קובי בריאנט", false],
				["קרל לואיס", false]
			],
			[
				["באולימפיאדת אתונה שהתרחשה בשנת 2004, גל פרידמן זכה במדליית זהב עבור מדינת ישראל. באיזה סוג ספורט?", "txt", 1],
				["גלישת רוח", true],
				["סיף", false],
				["החלקה אמנותית", false],
				["קפיצה משולשת", false]
			],
			[
				["איזו מדינה אירחה לראשונה את המשחקים האולימפיים?", "txt", 1],
				["יוון", true],
				["קולומביה", false],
				["ארצות הברית", false],
				["ספרד", false]
			],
			[
				["סמלה של איזו קבוצת כדורסל אמריקאית הוא שור?", "txt", 1],
				["שיקגו בולס", true],
				["מיאמי היט", false],
				["לוס אנג'לס קליפרס", false],
				["בוסטון סלטיקס", false]
			],
			[
				["מי מהבאים נהג מירוצים מקצועי?", "txt", 1],
				["לואיס המילטון", true],
				["ערן זהבי", false],
				["מראדונה", false],
				["טייגר וודס", false]
			],
			[
				["איזה מהכדורים הבאים משמש במשחק הכדורת?", "pic", 1],
				[lib.ball1, true],
				[lib.ball2, false],
				[lib.ball3, false],
				[lib.ball4, false]
			]
		];
		
		var gameQuestions2 = [
			[
		
				["מי מהשחקנים הבאים לא גילם את הג'וקר בסרטי באטמן?", "txt", 1],
				["כריסטיאן בייל", true],
				["ג'ארד לטו", false],
				["הית' לדג'ר", false],
				["ג'ק ניקולסון", false]
			],
			[
				["בכמה אוסקרים זכה הסרט טיטאניק?", "txt", 1],
				["11", true],
				["3", false],
				["8", false],
				["0", false]
		
			],
			[
				["לאונרדו דיקפריו זכה באוסקר לשחקן הטוב ביותר, על השתתפותו בסרט...", "txt", 1],
				["האיש שנולד מחדש", true],
				["טיטאניק", false],
				["הזאב מוול סטריט", false],
				["התחלה", false]
			],
			[
				["מי השחקן הראשי בסרט שליחות קטלנית?", "txt", 1],
				["ארנולד שוורצנגר", true],
				["דוין ג'ונסון", false],
				["בראד פיט", false],
				["מאט דיימון", false]
			],
			[
				["את מי מהסרטים ביים טרנטינו?", "txt", 1],
				["ספרות זולה", true],
				["טיטאניק", false],
				["אוואטר", false],
				["וולברין", false]
			],
			[
				["באיזה סרט כיכב דב פאטל?", "txt", 1],
				["נער החידות ממומביי", true],
				["ארגו", false],
				["ספוטלייט", false],
				["כלבי אשמורת", false]
			],
			[
				["מי מגלם את מומו בסרטי אסקימו לימון?", "txt", 1],
				["יהונתן סגל", true],
				["יפתח קצור", false],
				["צחי נוי", false],
				["ששון גבאי", false]
			],
			[
				["על עלילתו של איזה ספר מבוסס הסרט בופור?", "txt", 1],
				["אם יש גן עדן", true],
				["פרא אציל", false],
				["משחק מכור", false],
				["סיפור על אהבה וחושך", false]
			],
			[
				["הסרט רפסודיה בוהמית מבוסס על קורות חייו של...", "txt", 1],
				["פרדי מרקורי", true],
				["מיק ג'אגר", false],
				["ג'ון לנון", false],
				["קורט קוביין", false]
			],
			[
				["מי מהשחקניות הבאות היא מרלין מונרו?", "pic", 1],
				[lib.photo1, true],
				[lib.photo2, false],
				[lib.photo3, false],
				[lib.photo4, false]
			]
		];
		
		createGame1();
		
		function createGame1() {
		
			cleanEND();
			var background1 = new lib.backround1();
			stage.addChildAt(background1, 0);
			background1.name = "background1";
		
			var clouds = new lib.clouds();
			stage.addChild(clouds);
			clouds.name = "clouds";
			clouds.x = -40;
			clouds.y = 50;
		
			var plant = new lib.plant1();
			stage.addChildAt(plant, 1);
			plant.gotoAndStop(0);
			plant.x = 220;
			plant.y = 500;
			plant.name = "plant";
		
			var kid = new lib.kid1();
			stage.addChild(kid);
			kid.name = "kid";
			kid.scaleY = 0.8;
			kid.scaleX = 0.8;
			kid.x = 100;
			kid.y = 420;
		
			chooseGame();
		}
		
		function chooseGame() {
		
			//הוספת הקומבו לבמה
			forcombo = new lib.forcomb();
			forcombo.x = 550;
			forcombo.y = 300;
			stage.addChild(forcombo);
			forcombo.name = "forcombo";
			//הגדרות עבור כפתור "בחר" - חלק מהקומפוננטה של הקומבו
			forcombo.startbtn.alpha = 0.3;
		
			//מאזין לשינוי ערכים בקומבו - שימו לב שהפרמטר השני, האינסטנס של הקומבו, הוגדר ידנית בתוך הקומפוננט
			$("#dom_overlay_container").on("change", "#mycb", mycb_change);
		}
		
		//בעת שינוי ערך בקומבו
		function mycb_change(evt) {
			//שימרת הערך שנבחר בקומבו
			mychoice = evt.currentTarget.value;
			console.log("הנושא הנבחר הוא  " + mychoice);
			//אם נבחר הערך הראשון - "בחר נושא
			if (mychoice == 0) {
				//ניטרול כפתור "בחר
				forcombo.startbtn.alpha = 0.3;
				forcombo.startbtn.removeEventListener("click", fl_ClickToPosition);
			} else if (mychoice == 1) {
		
				myArray = gameQuestions;
		
				forcombo.startbtn.alpha = 1;
				forcombo.startbtn.addEventListener("click", fl_ClickToPosition);
			} else if (mychoice == 2) {
		
				myArray = gameQuestions2;
		
				forcombo.startbtn.alpha = 1;
				forcombo.startbtn.addEventListener("click", fl_ClickToPosition);
			}
		}
		//לחיצה על בחר
		function fl_ClickToPosition() {
		
			//remove combo
			stage.removeChild(stage.getChildByName("forcombo"));
			stage.removeChild(stage.getChildByName("kid"));
		
			var kidWOW = new lib.kid2();
			stage.addChild(kidWOW);
			kidWOW.name = "kidWOW";
			kidWOW.x = 630;
			kidWOW.y = 400;
			kidWOW.gotoAndPlay(0);
		
			var girlAnimation = new lib.girl();
			stage.addChild(girlAnimation);
			girlAnimation.name = "girlAnimation";
			girlAnimation.x = 400;
			girlAnimation.y = 400;
			girlAnimation.gotoAndPlay(335);
		
			setTimeout(function timer() {
		
				var startButton = new lib.start();
				stage.addChild(startButton);
				startButton.name = "startButton";
				startButton.x = 400;
				startButton.y = 290;
				startButton.addEventListener("click", startfunc);
		
				var storyTxt = new createjs.Text();
				storyTxt.text = "החברה של ג'ק התעופפה גבוה לעננים, עזרו לג'ק להשקות ולטפח את הצמח כדי להגיע אליה";
				stage.addChild(storyTxt);
				storyTxt.x = 470;
				storyTxt.y = 200;
				storyTxt.lineWidth = 400;
				storyTxt.font = "24px Arial";
				storyTxt.textAlign = "center";
				storyTxt.name = "storyTxt";
		
			}, 3000);
		}
		
		function startfunc() {
			stage.removeChild(stage.getChildByName("startButton"));
			stage.removeChild(stage.getChildByName("storyTxt"));
			stage.removeChild(stage.getChildByName("girlAnimation"));
			stage.removeChild(stage.getChildByName("kidWOW"));
		
			var kid = new lib.kid1();
			stage.addChild(kid);
			kid.name = "kid";
			kid.scaleY = 0.6;
			kid.scaleX = 0.6;
			kid.x = 100;
			kid.y = 450;
		
			createGame2();
		}
		function createGame2() {
			stage.removeChild(stage.getChildByName("clouds"));
		
			var gameName = new createjs.Text();
			gameName.text = subjects[mychoice];
			gameName.x = 450;
			gameName.y = 15;
			gameName.font = "bold 16px Arial";
			gameName.color = "DarkSlateGray";
			gameName.name = "gameName";
			stage.addChild(gameName);
		
			var cloud1 = new lib.cloud1();
			stage.addChild(cloud1);
			cloud1.name = "cloud1";
			cloud1.x = 50;
			cloud1.y = 80;
		
			var girl = new lib.smallgirl();
			stage.addChild(girl);
			girl.name = "girl";
			girl.scaleY = 0.7;
			girl.scaleX = 0.7;
			girl.x = 160;
			girl.y = 10;
		
			myk();
		}
		
		function nextQuestion() {
		
			//משתנה המכיל את מספר השניות הרצוי לספירה לאחור
			var num = 30;
		
			var myclock = new lib.clock();
			stage.addChild(myclock);
			myclock.name = "myclock";
			myclock.scaleX = 0.2;
			myclock.scaleY = 0.2;
			myclock.x = 40;
			myclock.y = 30;
		
			//יצירת תיבת טקסט לשעון
			var time = new createjs.Text();
			time.text = num;
			time.x = 40;
			time.y = 55;
			time.name = "mytext";
			time.textAlign = "center";
			time.font = "16px Arial";
			stage.addChild(time);
		
			// יצירת הטיימר
			timer = setInterval(function () {
		
				//הקטנת התוכן של תיבת הטקסט באחד
				time.text = parseInt(time.text) - 1;
		
				//אם הטיימר הסתיים
				if (time.text == -1) {
		
					var fade = new lib.fade();
					stage.addChild(fade);
					fade.name = "fade";
		
					var whitbox = new lib.whitbox();
					stage.addChild(whitbox);
					whitbox.x = 480;
					whitbox.y = 230;
					whitbox.name = "whitbox";
		
					var timeOver = new createjs.Text();
					timeOver.text = "אופס! נגמר הזמן...";
					timeOver.x = 0;
					timeOver.y = 40;
					timeOver.font = "26px Arial";
					timeOver.textAlign = "center";
					whitbox.addChild(timeOver);
		
					var clock = new lib.clock();
					stage.addChild(clock);
					clock.name = "clock";
					clock.x = 470;
					clock.y = 150;
		
					var continue1 = new lib.continue1();
					whitbox.addChild(continue1);
					continue1.x = 0;
					continue1.y = 120;
					continue1.name = "continue1";
					continue1.addEventListener("click", myk);
		
					//ביטול הטיימר
					clearInterval(timer);
					stage.removeChild(time);
					clean();
				}
		
			}, 1000);
		
			myrand();
			var rndQ = Math.floor((Math.random() * myArray.length));
			qNum = rndQ;
			var mynum22 = [];
			var mynum33 = [];
			mynum22[0] = mynewnum[0];
			mynum22[1] = mynewnum[1];
			mynum33[0] = mynewnum[2];
			mynum33[1] = mynewnum[3];
		
		
			if (myArray[qNum][0][1] == "pic") {
				counter = 1;
		
				for (i = 0; i < 2; i++) {
					var swhitboxs = new lib.swhitboxs();
					stage.addChild(swhitboxs);
					swhitboxs.x = 480 + 300 * i;
					swhitboxs.y = 270;
					var d = mynum22[i];
					swhitboxs.name = "swhitboxs" + d;
		
					var ball = new(myArray[qNum][d][0]);
					swhitboxs.addChild(ball);
					ball.name = "ball" + d;
					ball.scaleY = 0.5;
					ball.scaleX = 0.5;
		
					var waterC = new lib.waterC();
					stage.addChild(waterC);
					waterC.x = 610 + 300 * i;
					waterC.y = 270;
		
					waterC.name = "waterC" + d;
					waterC.addEventListener("pressmove", dragFunc);
					waterC.addEventListener("pressup", up);
					ball.addEventListener("mouseover", picMouseOverAns);
					ball.addEventListener("mouseout", picMouseOutAns);
		
				}
				for (i = 0; i < 2; i++) {
					var swhitboxs = new lib.swhitboxs();
					stage.addChild(swhitboxs);
					swhitboxs.x = 480 + 300 * i;
					swhitboxs.y = 440;
		
					var d = mynum33[i];
					swhitboxs.name = "swhitboxs" + d;
					var ball = new(myArray[qNum][d][0]);
					swhitboxs.addChild(ball);
					ball.name = "ball" + d;
					ball.scaleY = 0.5;
					ball.scaleX = 0.5;
		
					var waterC = new lib.waterC();
					stage.addChild(waterC);
					waterC.x = 610 + 300 * i;
					waterC.y = 440;
		
					waterC.name = "waterC" + d;
					waterC.addEventListener("pressmove", dragFunc);
					waterC.addEventListener("pressup", up);
					var frequency = 10;
					stage.enableMouseOver(frequency);
					ball.addEventListener("mouseover", picMouseOverAns);
					ball.addEventListener("mouseout", picMouseOutAns);
		
				}
		
				//יצירת תיבת טקסט
				var txtQuestion = new createjs.Text();
				txtQuestion.text = myArray[rndQ][0][0];
				txtQuestion.font = "bold 22px Arial";
				txtQuestion.lineWidth = 480;
				txtQuestion.name = "txtQuestion";
				stage.addChild(txtQuestion);
				txtQuestion.x = 900;
				txtQuestion.y = 70;
				txtQuestion.textAlign = "right";
				//יצירת תיבת הטקטס של ההוראה
				var inst = new createjs.Text();
				inst.text = "גררו את המשפך שלצד התשובה הנכונה אל עבר הצמח.";
				stage.addChild(inst);
				inst.name = "inst";
				inst.font = "bold 16px Arial";
				inst.lineWidth = 500;
				inst.textAlign = "right";
				inst.x = 900;
				inst.y = 120;
		
				inst.color = "grey";
				var inst2 = new createjs.Text();
				inst2.text = "העבירו את העכבר על גבי התמונה כדי להגדיל אותה";
				stage.addChild(inst2);
				inst2.name = "inst2";
				inst2.font = "bold 16px Arial";
				inst2.lineWidth = 500;
				inst2.textAlign = "right";
				inst2.x = 900;
				inst2.y = 140;
				inst2.color = "grey";
		
		
			} else {
				counter = 0;
		
				//יצירת תיבת הטקסט של השאלה
				var txtQuestion = new createjs.Text();
				txtQuestion.text = myArray[rndQ][0][0];
				txtQuestion.font = "bold 22px Arial";
				txtQuestion.lineWidth = 480;
				txtQuestion.name = "txtQuestion";
				stage.addChild(txtQuestion);
				txtQuestion.x = 900;
				txtQuestion.y = 90;
				txtQuestion.textAlign = "right";
		
				if (rndQ == 0 && myArray[rndQ][0][0] == "מהו הספורט הלאומי במדינה זו?") {
		
					var swhitboxs1 = new lib.swhitboxs();
					stage.addChild(swhitboxs1);
					swhitboxs1.x = 350;
					swhitboxs1.y = 85;
					swhitboxs1.name = "swhitboxs1";
		
					var japan = new lib.japan();
					swhitboxs1.addChild(japan);
					japan.scaleX = 0.7;
					japan.scaleY = 0.7;
					japan.x = -88;
					japan.y = -65;
					japan.name = "japan";
					japan.addEventListener("mouseover", picMouseOverQ);
					japan.addEventListener("mouseout", picMouseOutQ);
		
					var inst2 = new createjs.Text();
					inst2.text = "העבירו את העכבר על גבי התמונה כדי להגדיל אותה";
					stage.addChild(inst2);
					inst2.name = "inst2";
					inst2.font = "bold 16px Arial";
					inst2.lineWidth = 500;
					inst2.textAlign = "right";
					inst2.x = 900;
					inst2.y = 175;
					inst2.color = "grey";
		
				}
		
				if (rndQ == 0 && myArray[rndQ][0][0] == "מי מהשחקנים הבאים לא גילם את הג'וקר בסרטי באטמן?") {
		
					var swhitboxs1 = new lib.swhitboxs();
					stage.addChild(swhitboxs1);
					swhitboxs1.x = 340;
					swhitboxs1.y = 85;
					swhitboxs1.name = "swhitboxs1";
		
					var joker = new lib.joker();
					swhitboxs1.addChild(joker);
					joker.scaleX = 0.45;
					joker.scaleY = 0.45;
					joker.x = -50;
					joker.y = -70;
					joker.name = "joker";
					joker.addEventListener("mouseover", picMouseOverQ);
					joker.addEventListener("mouseout", picMouseOutQ);
		
					var inst2 = new createjs.Text();
					inst2.text = "העבירו את העכבר על גבי התמונה כדי להגדיל אותה";
					stage.addChild(inst2);
					inst2.name = "inst2";
					inst2.font = "bold 16px Arial";
					inst2.lineWidth = 500;
					inst2.textAlign = "right";
					inst2.x = 900;
					inst2.y = 175;
					inst2.color = "grey";
		
				}
		
				//יצירת תיבת הטקטס של ההוראה
				var inst = new createjs.Text();
				inst.text = "גררו את המשפך שלצד התשובה הנכונה, אל עבר הצמח";
				stage.addChild(inst);
				inst.name = "inst";
				inst.font = "bold 16px Arial";
				inst.lineWidth = 500;
				inst.textAlign = "right";
				inst.x = 900;
				inst.y = 155;
				inst.color = "grey";
		
				var whitbig = new lib.whitbig();
				stage.addChild(whitbig);
				whitbig.x = 700;
				whitbig.y = 350;
				whitbig.name = "whitbig";
		
				for (i = 0; i < (myArray[qNum].length) - 1; i++) {
					//יצירת השאלות
					var d = mynewnum[i];
		
					var txt = new createjs.Text();
					txt.text = myArray[rndQ][d][0];
					txt.name = "QuestionTxt" + (i + 1);
					txt.font = "18px Arial";
					stage.addChild(txt);
					txt.x = 850;
					txt.y = watercan[i + 1][1] - 10;
					txt.textAlign = "right";
					txt.lineWidth = 380;
		
					var waterC = new lib.waterC();
					stage.addChild(waterC);
					waterC.x = watercan[i + 1][0];
					waterC.y = watercan[i + 1][1];
		
					//השם מתחיל מ1 עד 4 כי השאלה המערך היא במיקום ה0
					waterC.name = "waterC" + (d);
					waterC.addEventListener("pressmove", dragFunc);
					waterC.addEventListener("pressup", up);
				}
			}
		}
		
		//פונקציה המגרילה מערך
		function myrand() {
		
			var mynum = [1, 2, 3, 4];
			var a = mynum.length;
		
			for (i = 0; i < a; i++) {
				var rnd1 = Math.floor((Math.random() * mynum.length));
				mynewnum[i] = mynum[rnd1];
				mynum.splice(rnd1, 1);
			}
		
		}
		
		function dragFunc(evt) {
			var p = stage.globalToLocal(stage.mouseX, stage.mouseY);
			evt.currentTarget.x = p.x;
			evt.currentTarget.y = p.y;
		
		}
		
		function up(evt) {
		
			var place = 1;
			var targetMC = stage.getChildByName("plant");
			var objNum = evt.currentTarget.name.slice(6);
		
		
			if (counter == 1) {
		
				if (intersect(evt.currentTarget, targetMC)) {
		
					//יצירת כפתור המשך
					var continue1 = new lib.continue1();
					stage.addChild(continue1);
					continue1.x = 700;
					continue1.y = 550;
					continue1.name = "continue1";
					continue1.addEventListener("click", myk);
					//העלמת ההוראה
					stage.removeChild(stage.getChildByName("inst"));
					stage.removeChild(stage.getChildByName("inst2"));
		
					clearInterval(timer);
					timeCount += 30 - (parseInt(stage.getChildByName("mytext").text));
					stage.removeChild(stage.getChildByName("mytext"));
					console.log("the time is " + timeCount);
		
		
					for (i = 1; i < 5; i++) {
						stage.removeChild(stage.getChildByName("waterC" + i));
					}
					for (i = 0; i < mynewnum.length; i++) {
						if (mynewnum[i] == objNum) {
							w = i + 1;
						}
					}
		
					if (myArray[qNum][objNum][place]) { //בדיקה לפי האובייקט שנגרר, האם הוא מוגדר כאובייקט נכון או לא
		
		
						var v = new lib.v();
						stage.addChild(v);
						v.name = "v";
						v.x = pici[w][0];
						v.y = pici[w][1];
		
		
						//חישוב ציון
						if (myArray[qNum][0][2] != 1) {
							sum += 100 / (arrayLength * myArray[qNum][0][2]);
						} else {
							sum += 100 / arrayLength;
						};
		
						//מחיקת התא של השאלה 
						myArray.splice(qNum, 1);
		
		
						var fullwater = new lib.waterC();
						stage.addChild(fullwater);
						fullwater.x = 300;
						fullwater.y = 500;
						fullwater.gotoAndPlay(1);
						fullwater.name = "fullwater";
						nextStep();
		
						setTimeout(function timer() {
							stage.getChildByName("plant").gotoAndStop(barPart);
		
						}, 1000);
		
		
					} else {
		
						var xix = new lib.xix();
						stage.addChild(xix);
						xix.name = "x";
						xix.x = pici[w][0];
						xix.y = pici[w][1];
		
						//במידה וטעית נעלה את הקאונטר של הנסיונות מענה ב1
						myArray[qNum][0][2]++;
						console.log("ציון" + myArray[qNum][0][2]);
		
						var emptyWater = new lib.waterC();
						stage.addChild(emptyWater);
						emptyWater.x = 300;
						emptyWater.y = 500;
						emptyWater.gotoAndPlay(65);
						emptyWater.name = "emptyWater";
		
						stage.removeChild(stage.getChildByName("inst2"));
		
						setTimeout(function timer() {
							stage.removeChild(stage.getChildByName("emptyWater"));
						}, 2000);
					}
					//במידה ואין פגיעה
				} else {
					for (i = 0; i < mynewnum.length; i++) {
						if (mynewnum[i] == objNum) {
							w = i + 1;
						}
					}
					evt.currentTarget.x = pici[w][0];
					evt.currentTarget.y = pici[w][1];
				}
			}
		
			//במידה והשאלה היא לא במצב תמונה
			else {
				if (intersect(evt.currentTarget, targetMC)) {
		
					clearInterval(timer);
					timeCount += 30 - (parseInt(stage.getChildByName("mytext").text));
					stage.removeChild(stage.getChildByName("mytext"));
					console.log("the time is " + timeCount);
		
		
					//יצירת כפתור המשך
					var continue1 = new lib.continue1();
					stage.addChild(continue1);
					continue1.x = 700;
					continue1.y = 550;
					continue1.name = "continue1";
					continue1.addEventListener("click", myk);
					//העלמת ההוראה
					stage.removeChild(stage.getChildByName("inst"));
					stage.removeChild(stage.getChildByName("inst2"));
		
		
					for (i = 1; i < 5; i++) {
						stage.removeChild(stage.getChildByName("waterC" + i));
					}
					for (i = 0; i < mynewnum.length; i++) {
						if (mynewnum[i] == objNum) {
							w = i + 1;
						}
					}
		
					if (myArray[qNum][objNum][place]) { //בדיקה לפי האובייקט שנגרר, האם הוא מוגדר כאובייקט נכון או לא
		
						var v = new lib.v();
						stage.addChild(v);
						v.name = "v";
						v.x = watercan[w][0];
						v.y = watercan[w][1];
		
						//חישוב ציון
						if (myArray[qNum][0][2] != 1) {
							sum += 100 / (arrayLength * myArray[qNum][0][2]);
						} else {
							sum += 100 / arrayLength;
						};
		
						//מחיקת התא של השאלה 
						myArray.splice(qNum, 1);
		
		
						var fullwater = new lib.waterC();
						stage.addChild(fullwater);
						fullwater.x = 300;
						fullwater.y = 500;
						fullwater.gotoAndPlay(1);
						fullwater.name = "fullwater";
		
						nextStep();
		
						setTimeout(function timer() {
							stage.getChildByName("plant").gotoAndStop(barPart);
							console.log(barPart);
						}, 1000);
		
					} else {
		
						var xix = new lib.xix();
						stage.addChild(xix);
						xix.name = "x";
						xix.x = watercan[w][0];
						xix.y = watercan[w][1];
						//במידה וטעית נעלה את הקאונטר של הנסיונות מענה ב1
						myArray[qNum][0][2]++;
						console.log("ציון" + myArray[qNum][0][2]);
		
		
						var emptyWater = new lib.waterC();
						stage.addChild(emptyWater);
						emptyWater.x = 300;
						emptyWater.y = 500;
						emptyWater.gotoAndPlay(65);
						emptyWater.name = "emptyWater";
		
						setTimeout(function timer() {
							stage.removeChild(stage.getChildByName("emptyWater"));
						}, 2000);
					}
				} else {
					for (i = 0; i < mynewnum.length; i++) {
						if (mynewnum[i] == objNum) {
							w = i + 1;
						}
					}
					evt.currentTarget.x = watercan[w][0];
					evt.currentTarget.y = watercan[w][1];
				}
			}
		
		} //סגירה של הפונקציה UP
		
		function nextStep() {
		
			if (barRemainPart % clicksNum == 0) { //בדיקה האם מספר הפריימים שנשארו מתחלק בצורה שלמה במספר הלחיצות שנשארו
				barJump = barRemainPart / clicksNum; //הגדרת הקפיצה הראשונה של בר ההתקדמות
			} else { //אם לא מתחלק בצורה שלמה
				barJump = (Math.floor(barRemainPart / clicksNum)) + 1; //יצירת מספר מותאם לקפיצה הראשונה של בר ההתקדמות
		
			}
			barPart += barJump; //הגדלת מספר הפריים אליו צריך להתקדם לפי הקפיצה שחושבה
			barRemainPart -= barJump; //הקטנת מספר הפריימים שנשארו בגודל הקפיצה שנעשתה
			clicksNum--; //הקטנת מספר הלחיצות ב 1 כדי שהחישוב הבא יהיה מתאים למספר הלחיצות החדש שנשאר
		}
		
		function myk() {
			//nextStep();
		
			stage.removeChild(stage.getChildByName("fullwater"));
			stage.removeChild(stage.getChildByName("emptyWtater"));
		
			cleanme();
			clean();
			if (myArray.length ==0) {
		
				stage.removeChild(stage.getChildByName("mytext"));
				clearInterval(timer);
				endAnimition();
			} else {
				nextQuestion();
			}
		}
		function cleanme() {
		
			stage.removeChild(stage.getChildByName("whitbox"));
			stage.removeChild(stage.getChildByName("clock"));
			stage.removeChild(stage.getChildByName("fade"));
			stage.removeChild(stage.getChildByName("myclock"));
		}
		
		function clean() {
		
			stage.removeChild(stage.getChildByName("whitbig"));
			stage.removeChild(stage.getChildByName("txtQuestion"));
			stage.removeChild(stage.getChildByName("inst"));
			stage.removeChild(stage.getChildByName("inst2"));
			stage.removeChild(stage.getChildByName("x"));
			stage.removeChild(stage.getChildByName("v"));
			stage.removeChild(stage.getChildByName("continue1"));
		
			for (i = 0; i < 4; i++) {
				stage.removeChild(stage.getChildByName("QuestionTxt" + (i + 1)));
				stage.removeChild(stage.getChildByName("swhitboxs" + (i + 1)));
				stage.removeChild(stage.getChildByName("waterC" + (i + 1)));
			}
		}
		
		//הגדלת תמונות ויצירת פייד לשאר התמונות במעבר עכבר
		
		function picMouseOverQ(evt) {
			console.log("hover");
			var bigPic = evt.currentTarget.name;
		
			if (mychoice == 1) {
				var bigJapan = new lib.japan();
				stage.addChild(bigJapan);
				bigJapan.x = 150;
				bigJapan.y = 10;
				bigJapan.name = "bigJapan";
				bigJapan.scaleX = 1.2;
				bigJapan.scaleY = 1.2;
			}
			if (mychoice == 2) {
				var bigJoker = new lib.joker();
				stage.addChild(bigJoker);
				bigJoker.x = 150;
				bigJoker.y = 10;
				bigJoker.name = "bigJoker";
				bigJoker.scaleX = 1.2;
				bigJoker.scaleY = 1.2;
			}
		}
		
		function picMouseOutQ() {
			stage.removeChild(stage.getChildByName("bigJapan"));
			stage.removeChild(stage.getChildByName("bigJoker"));
		}
		
		function picMouseOverAns(evt) {
		
			var mybbb = evt.currentTarget.name.slice(4);
		
			var bigger = new myArray[qNum][mybbb][0];
			bigger.x = 650;
			bigger.y = 320;
			bigger.name = "bigger";
			stage.addChild(bigger);
			for (i = 1; i < 5; i++) {
				stage.getChildByName("swhitboxs" + i).alpha = 0.5;
			}
			//איפוס ביציאה ממעבר עכבר
		}
		
		function picMouseOutAns() {
		
			stage.removeChild(stage.getChildByName("bigger"));
			for (i = 1; i < 5; i++) {
				stage.getChildByName("swhitboxs" + i).alpha = 1;
			}
		}
		
		function endAnimition() {
			clean();
			cleanme();
		
			stage.removeChild(stage.getChildByName("gameName"));
			stage.removeChild(stage.getChildByName("plant"));
			stage.removeChild(stage.getChildByName("kid"));
			stage.removeChild(stage.getChildByName("girl"));
		
		
			var kidClimb = new lib.kidClimb();
			stage.addChild(kidClimb);
			kidClimb.name = "kidClimb";
			kidClimb.x = 400;
			kidClimb.y = 500;
			kidClimb.gotoAndPlay(1);
			
			var cloudsEND = new lib.clouds();
			stage.addChild(cloudsEND);
			cloudsEND.name = "cloudsEND";
			cloudsEND.x = 0;
			cloudsEND.y = 200;
		
			setTimeout(function timer() {
				stage.removeChild(stage.getChildByName("background1"));
				stage.removeChild(stage.getChildByName("cloudsEND"));
		
				var backround2 = new lib.backround2();
				stage.addChild(backround2);
				backround2.name = "backround2";
		
				var kidoo = new lib.kid1();
				stage.addChild(kidoo);
				kidoo.name = "kidoo";
				kidoo.x = 70;
				kidoo.y = 500;
				kidoo.gotoAndPlay(1);
		
				var girloo = new lib.girl();
				stage.addChild(girloo);
				girloo.name = "girloo";
				girloo.x = 950;
				girloo.y = 400;
				girloo.gotoAndPlay(1);
		
				var endPlant = new lib.plant1();
				stage.addChild(endPlant);
				endPlant.name = "endPlant";
				endPlant.x = 450;
				endPlant.y = 510;
		
				var heart01 = new lib.heart1();
				stage.addChild(heart01);
				heart01.name = "heart01";
				heart01.x = 460;
				heart01.y = 140;
				heart01.gotoAndPlay(1);
		
				var heart02 = new lib.heart1();
				stage.addChild(heart02);
				heart02.name = "heart02";
				heart02.x = 150;
				heart02.y = 150;
				heart02.scaleX = 0.5;
				heart02.scaleY = 0.5;
				heart02.gotoAndPlay(5);
		
				var heart03 = new lib.heart1();
				stage.addChild(heart03);
				heart03.name = "heart03";
				heart03.x = 800;
				heart03.y = 500;
				heart03.scaleX = 0.4;
				heart03.scaleY = 0.4;
				heart03.gotoAndPlay(22);
		
			}, 4550);
		
			setTimeout(function timer() {
				endScreen();
			}, 9000);
		}
		
		
		function endScreen() {
			barJump = 0;
			barPart = 0;
			var barRemainPart = 29;
			var clicksNum = 10;
			clean();
			cleanme();
		
			stage.removeChild(stage.getChildByName("kidClimb"));
			stage.removeChild(stage.getChildByName("kidoo"));
			stage.removeChild(stage.getChildByName("girloo"));
			stage.removeChild(stage.getChildByName("heart01"));
			stage.removeChild(stage.getChildByName("endPlant"));
		
			//נוסחא לחישוב הזמן והצגתו
			var Minutes = 0;
			var Seconds = 0;
			while (timeCount >= 60) {
				Minutes++;
				timeCount = timeCount - 60;
			}
			if (timeCount < 10) {
				Seconds = "0" + timeCount;
			} else {
				Seconds = timeCount;
			}
		
			for (i = 0; i < 4; i++) {
				var endText = new createjs.Text();
				stage.addChild(endText);
				endText.textAlign = "right";
				endText.font = "bold 20px Arial";
				endText.name = ("endText" + i);
				endText.x = 600;
				endText.y = 150 + i * 60;
			}
			stage.getChildByName("endText0").text = "כל הכבוד! סיימתם את המשחק";
			//stage.getChildByName("endText0").lineWidth = 150;
			//stage.getChildByName("endText0").textAlign="center";
			stage.getChildByName("endText1").text = "נושא: " + subjects[mychoice];
			stage.getChildByName("endText2").text = "ציון: " + Math.round(sum);
			stage.getChildByName("endText3").text = "זמן: " + Minutes + ":" + Seconds;
		
			var PlantEND = new lib.plant1();
			stage.addChild(PlantEND);
			PlantEND.name = "PlantEND";
			PlantEND.x = 180;
			PlantEND.y = 550;
		
			var kidEND = new lib.kid1();
			stage.addChild(kidEND);
			kidEND.x = 90;
			kidEND.y = 360;
			kidEND.name = "kidEND";
		
			var girlEND = new lib.girl();
			stage.addChild(girlEND);
			girlEND.x = 250;
			girlEND.y = 410;
			girlEND.name = "girlEND";
			girlEND.gotoAndStop(1);
		
			var heart = new lib.heart1();
			stage.addChild(heart);
			heart.x = 800;
			heart.y = 100;
			heart.scaleX = 0.4;
			heart.scaleY = 0.4;
			heart.name = "heart";
			heart.gotoAndPlay(1);
		
			var mainMenw = new lib.mainMenw();
			stage.addChild(mainMenw);
			mainMenw.x = 420;
			mainMenw.y = 430;
			mainMenw.name = "mainMenw";
			mainMenw.addEventListener("click", ENDclick1);
		
			var newGame = new lib.newGame();
			stage.addChild(newGame);
			newGame.x = 580;
			newGame.y = 430;
			newGame.name = "newGame";
			newGame.addEventListener("click", ENDclick2);
		}
		
		function ENDclick1() {
			gameQuestions = [
				[
					["מהו הספורט הלאומי במדינה זו?", "txt", 1],
					["סומו", true],
					["כדורעף", false],
					["באולינג", false],
					["מחניים", false]
				],
				[
					["מהו האיצטדיון הגדול בעולם?", "txt", 1],
					["אצטדיון האצטקה במקסיקו סיטי", true],
					["אצטדיון המושבה בפתח תקווה", false],
					["אליאנץ ארנה במינכן", false],
					["אצטדיון הקאמפ-נואו בברצלונה", false]
				],
				[
					["אם זכיתי בגביע דייויס, אני...", "txt", 1],
					["אני שחקן בספורט שמכונה 'הספורט הלבן'", true],
					["אני שחקן במשחק מודרני שנוצר באנגליה ומשחקים בו 11 שחקנים בכל קבוצה ", false],
					["אני שחקן במשחק בו המטרה היא לקלוע לסל ", false],
					["אני שחקן במשחק כדור, שבו על השחקן להעיף כדור קטן לאורך מסלול דשא", false]
				],
				[
					["מה אורכה של בריכה אולימפית?", "txt", 1],
					["50 מטר", true],
					["100 מטר", false],
					["150 מטר", false],
					["200 מטר", false]
				],
				[
					["מי מהבאים מתמחה באמנויות לחימה?", "txt", 1],
					["קונור מקגרגור", true],
					["לאו מסי", false],
					["קובי בריאנט", false],
					["קרל לואיס", false]
				],
				[
					["באולימפיאדת אתונה שהתרחשה בשנת 2004, גל פרידמן זכה במדליית זהב עבור מדינת ישראל. באיזה סוג ספורט?", "txt", 1],
					["גלישת רוח", true],
					["סיף", false],
					["החלקה אמנותית", false],
					["קפיצה משולשת", false]
				],
				[
					["איזו מדינה אירחה לראשונה את המשחקים האולימפיים?", "txt", 1],
					["יוון", true],
					["קולומביה", false],
					["ארצות הברית", false],
					["ספרד", false]
				],
				[
					["סמלה של איזו קבוצת כדורסל אמריקאית הוא שור?", "txt", 1],
					["שיקגו בולס", true],
					["מיאמי היט", false],
					["לוס אנג'לס קליפרס", false],
					["בוסטון סלטיקס", false]
				],
				[
					["מי מהבאים נהג מירוצים מקצועי?", "txt", 1],
					["לואיס המילטון", true],
					["ערן זהבי", false],
					["מראדונה", false],
					["טייגר וודס", false]
				],
				[
					["איזה מהכדורים הבאים משמש במשחק הכדורת?", "pic", 1],
					[lib.ball1, true],
					[lib.ball2, false],
					[lib.ball3, false],
					[lib.ball4, false]
				]
			];
		
			gameQuestions2 = [
				[
		
					["מי מהשחקנים הבאים לא גילם את הג'וקר בסרטי באטמן?", "txt", 1],
					["כריסטיאן בייל", true],
					["ג'ארד לטו", false],
					["הית' לדג'ר", false],
					["ג'ק ניקולסון", false]
				],
				[
					["בכמה אוסקרים זכה הסרט טיטאניק?", "txt", 1],
					["11", true],
					["3", false],
					["8", false],
					["0", false]
		
				],
				[
					["לאונרדו דיקפריו זכה באוסקר לשחקן הטוב ביותר, על השתתפותו בסרט...", "txt", 1],
					["האיש שנולד מחדש", true],
					["טיטאניק", false],
					["הזאב מוול סטריט", false],
					["התחלה", false]
				],
				[
					["מי השחקן הראשי בסרט שליחות קטלנית?", "txt", 1],
					["ארנולד שוורצנגר", true],
					["דוין ג'ונסון", false],
					["בראד פיט", false],
					["מאט דיימון", false]
				],
				[
					["את מי מהסרטים ביים טרנטינו?", "txt", 1],
					["ספרות זולה", true],
					["טיטאניק", false],
					["אוואטר", false],
					["וולברין", false]
				],
				[
					["באיזה סרט כיכב דב פאטל?", "txt", 1],
					["נער החידות ממומביי", true],
					["ארגו", false],
					["ספוטלייט", false],
					["כלבי אשמורת", false]
				],
				[
					["מי מגלם את מומו בסרטי אסקימו לימון?", "txt", 1],
					["יהונתן סגל", true],
					["יפתח קצור", false],
					["צחי נוי", false],
					["ששון גבאי", false]
				],
				[
					["על עלילתו של איזה ספר מבוסס הסרט בופור?", "txt", 1],
					["אם יש גן עדן", true],
					["פרא אציל", false],
					["משחק מכור", false],
					["סיפור על אהבה וחושך", false]
				],
				[
					["הסרט רפסודיה בוהמית מבוסס על קורות חייו של...", "txt", 1],
					["פרדי מרקורי", true],
					["מיק ג'אגר", false],
					["ג'ון לנון", false],
					["קורט קוביין", false]
				],
				[
					["מי מהשחקניות הבאות היא מרלין מונרו?", "pic", 1],
					[lib.photo1, true],
					[lib.photo2, false],
					[lib.photo3, false],
					[lib.photo4, false]
				]
			];
		
			startGame();
			createGame1();
		
		}
		
		function ENDclick2() {
			restart();
			cleanEND();
			var background1 = new lib.backround1();
			stage.addChildAt(background1, 0);
			background1.name = "background1";
		
			var plant = new lib.plant1();
			stage.addChildAt(plant, 1);
			plant.gotoAndStop(0);
			plant.x = 200;
			plant.y = 500;
			plant.name = "plant";
		
			var kid = new lib.kid1();
			stage.addChild(kid);
			kid.name = "kid";
			kid.scaleY = 0.6;
			kid.scaleX = 0.6;
			kid.x = 100;
			kid.y = 450;
		
			var clouds = new lib.clouds();
			stage.addChild(clouds);
			clouds.name = "clouds";
			clouds.x = 80;
			clouds.y = 50;
		
			startGame();
			createGame2();
		}
		
		function cleanEND() {
		
			stage.removeChild(stage.getChildByName("plant"));
			stage.removeChild(stage.getChildByName("heart01"));
			stage.removeChild(stage.getChildByName("heart02"));
			stage.removeChild(stage.getChildByName("heart03"));
			stage.removeChild(stage.getChildByName("backround2"));
			stage.removeChild(stage.getChildByName("newGame"));
			stage.removeChild(stage.getChildByName("mainMenw"));
			stage.removeChild(stage.getChildByName("heart"));
			stage.removeChild(stage.getChildByName("girlEND"));
			stage.removeChild(stage.getChildByName("kidEND"));
			stage.removeChild(stage.getChildByName("PlantEND"));
			stage.removeChild(stage.getChildByName("endPlant"));
			timeCount = 0;
			sum = 0;
		
		
		
			for (i = 0; i < 4; i++) {
				stage.removeChild(stage.getChildByName("endText" + i));
			}
		}
		
		function restart() {
			if (mychoice == 1) {
				myArray = [
					[
						["מהו הספורט הלאומי במדינה זו?", "txt", 1],
						["סומו", true],
						["כדורעף", false],
						["באולינג", false],
						["מחניים", false]
					],
					[
						["מהו האיצטדיון הגדול בעולם?", "txt", 1],
						["אצטדיון האצטקה במקסיקו סיטי", true],
						["אצטדיון המושבה בפתח תקווה", false],
						["אליאנץ ארנה במינכן", false],
						["אצטדיון הקאמפ-נואו בברצלונה", false]
					],
					[
						["אם זכיתי בגביע דייויס, אני...", "txt", 1],
						["אני שחקן בספורט שמכונה 'הספורט הלבן'", true],
						["אני שחקן במשחק מודרני שנוצר באנגליה ומשחקים בו 11 שחקנים בכל קבוצה ", false],
						["אני שחקן במשחק בו המטרה היא לקלוע לסל ", false],
						["אני שחקן במשחק כדור, שבו על השחקן להעיף כדור קטן לאורך מסלול דשא", false]
					],
					[
						["מה אורכה של בריכה אולימפית?", "txt", 1],
						["50 מטר", true],
						["100 מטר", false],
						["150 מטר", false],
						["200 מטר", false]
					],
					[
						["מי מהבאים מתמחה באמנויות לחימה?", "txt", 1],
						["קונור מקגרגור", true],
						["לאו מסי", false],
						["קובי בריאנט", false],
						["קרל לואיס", false]
					],
					[
						["באולימפיאדת אתונה שהתרחשה בשנת 2004, גל פרידמן זכה במדליית זהב עבור מדינת ישראל. באיזה סוג ספורט?", "txt", 1],
						["גלישת רוח", true],
						["סיף", false],
						["החלקה אמנותית", false],
						["קפיצה משולשת", false]
					],
					[
						["איזו מדינה אירחה לראשונה את המשחקים האולימפיים?", "txt", 1],
						["יוון", true],
						["קולומביה", false],
						["ארצות הברית", false],
						["ספרד", false]
					],
					[
						["סמלה של איזו קבוצת כדורסל אמריקאית הוא שור?", "txt", 1],
						["שיקגו בולס", true],
						["מיאמי היט", false],
						["לוס אנג'לס קליפרס", false],
						["בוסטון סלטיקס", false]
					],
					[
						["מי מהבאים נהג מירוצים מקצועי?", "txt", 1],
						["לואיס המילטון", true],
						["ערן זהבי", false],
						["מראדונה", false],
						["טייגר וודס", false]
					],
					[
						["איזה מהכדורים הבאים משמש במשחק הכדורת?", "pic", 1],
						[lib.ball1, true],
						[lib.ball2, false],
						[lib.ball3, false],
						[lib.ball4, false]
					]
				];
		
		
			} else {
				myArray = [
					[
						["מי מהשחקנים הבאים לא גילם את הג'וקר בסרטי באטמן?", "txt", 1],
						["כריסטיאן בייל", true],
						["ג'ארד לטו", false],
						["הית' לדג'ר", false],
						["ג'ק ניקולסון", false]
					],
					[
						["בכמה אוסקרים זכה הסרט טיטאניק?", "txt", 1],
						["11", true],
						["3", false],
						["8", false],
						["0", false]
		
					],
					[
						["לאונרדו דיקפריו זכה באוסקר לשחקן הטוב ביותר, על השתתפותו בסרט...", "txt", 1],
						["האיש שנולד מחדש", true],
						["טיטאניק", false],
						["הזאב מוול סטריט", false],
						["התחלה", false]
					],
					[
						["מי השחקן הראשי בסרט שליחות קטלנית?", "txt", 1],
						["ארנולד שוורצנגר", true],
						["דוין ג'ונסון", false],
						["בראד פיט", false],
						["מאט דיימון", false]
					],
					[
						["את מי מהסרטים ביים טרנטינו?", "txt", 1],
						["ספרות זולה", true],
						["טיטאניק", false],
						["אוואטר", false],
						["וולברין", false]
					],
					[
						["באיזה סרט כיכב דב פאטל?", "txt", 1],
						["נער החידות ממומביי", true],
						["ארגו", false],
						["ספוטלייט", false],
						["כלבי אשמורת", false]
					],
					[
						["מי מגלם את מומו בסרטי אסקימו לימון?", "txt", 1],
						["יהונתן סגל", true],
						["יפתח קצור", false],
						["צחי נוי", false],
						["ששון גבאי", false]
					],
					[
						["על עלילתו של איזה ספר מבוסס הסרט בופור?", "txt", 1],
						["אם יש גן עדן", true],
						["פרא אציל", false],
						["משחק מכור", false],
						["סיפור על אהבה וחושך", false]
					],
					[
						["הסרט רפסודיה בוהמית מבוסס על קורות חייו של...", "txt", 1],
						["פרדי מרקורי", true],
						["מיק ג'אגר", false],
						["ג'ון לנון", false],
						["קורט קוביין", false]
					],
					[
						["מי מהשחקניות הבאות היא מרלין מונרו?", "pic", 1],
						[lib.photo1, true],
						[lib.photo2, false],
						[lib.photo3, false],
						[lib.photo4, false]
					]
				];
			}
		}
		function intersect(obj1, obj2) {
		
			var obj1W = obj1.nominalBounds;
			var obj2W = obj2.nominalBounds;
		
			if (obj1.x + (obj1W.width / 2) <= obj2.x - (obj2W.width / 2)) {
				return false;
			} else if (obj1.y + (obj1W.height / 2) <= obj2.y - (obj2W.height / 2)) {
				return false;
			} else if (obj1.x - (obj1W.width / 2) > obj2.x + (obj2W.width / 2)) {
				return false;
			} else if (obj1.y - (obj1W.height / 2) > obj2.y + (obj2W.height / 2)) {
				return false;
			}
			return true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 960,
	height: 590,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/LovebirdsStavBen_atlas_.png?1550095187993", id:"LovebirdsStavBen_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1550095188650", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1550095188650", id:"sdk/anwidget.js"},
		{src:"components/ui/src/combobox.js?1550095188650", id:"an.ComboBox"}
	],
	preloads: []
};


function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;