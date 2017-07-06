var Always = function (handle) {

	this.ww = window.innerWidth;
	this.wh = window.innerHeight;

	this.set = function (handle) {
		if((typeof handle) == 'string')
			return document.querySelectorAll(handle);
		else if((typeof handle) == 'object')
			return handle;
		else
			return document.querySelectorAll('.always');
	}

	this.list = this.set(handle);

	window.addEventListener('resize', () => {
		this.ww = window.innerWidth;
		this.wh = window.innerHeight;
		this.resize();
	}, true);

	this.resize = function () {
		var ll = this.list.length;
		var reg = new RegExp(/([1-9][0-9]{0,})\:([1-9][0-9]{0,})/);

		for(var i = ll - 1; i >= 0; i--) {
			var l = this.list[i];
			var attr = l.getAttribute('data-always');
			var m = attr.match(reg);
			var mw = m[1] || false;
			var mh = m[2] || false;
			var w = l.offsetWidth;
			if(!mw || !mh)
				continue;
			var oh = (w / mw) * mh;
			l.style = "height: "+oh+"px";
		}
	}

	this.resize();

}

var a = new Always('.always');
