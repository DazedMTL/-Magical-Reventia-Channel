function 이름() {
    this.initialize.apply(this, arguments); // 초기화
}

이름.prototype = Object.create(Scene_MenuBase.prototype);
이름.prototype.constructor = 이름; // 클래스 생성

이름.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
    this._인스턴스 = '';
}

이름.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    함수();
}

이름.prototype.loadBitmaps = function() {
    this._인스턴스 = ImageManager.loadBackground("파일명"); // 이미지 가져오기
}

이름.prototype.새이름 = function() {
    this._새이름 = new _새이름();
}

function 새이름() {
    this.initialize.apply(this, arguments); 
}

새이름.prototype = Object.create(Window_Command.prototype); // 커맨드에 새이름 클래스 생성
새이름.prototype.constructor = 새이름; // 클래스 생성

새이름.prototype.initialize = function() {
    Window_Command.prototype.initialize.call(this); // window_command에 새이름 불러오기
}