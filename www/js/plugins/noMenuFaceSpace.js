(function (alias) {
	Window_MenuStatus.prototype.itemRect = function (index) {
		var rect = alias.call(this, index);
		rect.x -= Window_Base._faceWidth;
		rect.x -= this.standardPadding();
		return rect;
	};
})(Window_MenuStatus.prototype.itemRect);