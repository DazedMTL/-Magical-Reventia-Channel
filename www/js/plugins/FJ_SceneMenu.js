
var globMoveTo = function (value, real_value, speed) {
  speed = speed || 20;
  if (value == real_value) { return value };
  var dnspeed = 3 + (Math.abs(value - real_value) / speed);
  if (value > real_value) {
    value -= dnspeed;
    if (value < real_value) { value = real_value };
  }
  else if (value < real_value) {
    value += dnspeed;
    if (value > real_value) { value = real_value };
  };
  return Math.floor(value);
};

Scene_Menu.prototype.loadMenuBgImg = function () {
  this._BG = ImageManager.loadMenuBg("mainMenuUI");
}


ImageManager.loadMenuScreen = function (filename) {
  return this.loadBitmap('img/pictures/', filename, 0, true);
}

Scene_Menu.prototype.loadCG = function () {
  this._machoCG1 = ImageManager.loadMenuCg("machoCG_1");
  this._machoCG2 = ImageManager.loadMenuCg("machoCG_2");
  this._machoCG3 = ImageManager.loadMenuCg("machoCG_3");
  this._machoCG4 = ImageManager.loadMenuCg("machoCG_4");
  this._machoCG5 = ImageManager.loadMenuCg("machoCG_5");
  this._machoCG6 = ImageManager.loadMenuCg("machoCG_6");

  this._leaderCG1 = ImageManager.loadMenuCg("leaderCG_1");
  this._leaderCG2 = ImageManager.loadMenuCg("leaderCG_2");
  this._leaderCG3 = ImageManager.loadMenuCg("leaderCG_3");
  this._leaderCG4 = ImageManager.loadMenuCg("leaderCG_4");
  this._leaderCG5 = ImageManager.loadMenuCg("leaderCG_5");
  this._leaderCG6 = ImageManager.loadMenuCg("leaderCG_6");

  this._succuCG1 = ImageManager.loadMenuCg("succuCG_1");
  this._succuCG2 = ImageManager.loadMenuCg("succuCG_2");
  this._succuCG3 = ImageManager.loadMenuCg("succuCG_3");
  this._succuCG4 = ImageManager.loadMenuCg("succuCG_4");
  this._succuCG5 = ImageManager.loadMenuCg("succuCG_5");
  this._succuCG6 = ImageManager.loadMenuCg("succuCG_6");

  this._slimeCG1 = ImageManager.loadMenuCg("slimeCG_1");
  this._slimeCG2 = ImageManager.loadMenuCg("slimeCG_2");
  this._slimeCG3 = ImageManager.loadMenuCg("slimeCG_3");
  this._slimeCG4 = ImageManager.loadMenuCg("slimeCG_4");
  this._slimeCG5 = ImageManager.loadMenuCg("slimeCG_5");
  this._slimeCG6 = ImageManager.loadMenuCg("slimeCG_6");
}

Scene_Menu.prototype.createFields = function () {
  this._field = new Sprite();
  this.addChild(this._field);
}

Scene_Menu.prototype.createMenuSprites = function () {
  this.create_layMain();
  this.create_Com();
  this.loadCG();
  this.createMachoMeters();
  this.createLeaderMeters();
  this.createSuccuMeters();
  this.createSlimeMeters();

  this.create_Screen1();
  this.create_Screen2();
  this.create_Screen3();
  this.create_Screen4();
  this.create_tv1();
  this.create_tv2();
  this.create_tv1_name();
  this.create_tv2_name();

  this.kindCountSubs();
  this.badCountSubs();
  this.sexyLevelSubs();
  this.moraleSubs();
  this.ruisekiSubs();
  this.maxSexyLevel();
  if ($gameVariables.value(422) == 3) {
    this.sexyDead();
  }


}

Scene_Menu.prototype.create_layMain = function () {
  this._layMain = new Sprite(this._BG);
  this._field.addChild(this._layMain);
  this._layMain.setFrame(0, 0, 652, 768);
}

Scene_Menu.prototype.create_Com = function () {
  this._comField = new Sprite();
  this._field.addChild(this._comField);

  this._acCom = [];
  this._inCom = [];
  this._comPosX = [];
  this._comPosY = [];
  this._comList = this._commandWindow._list;
  for (var i = 0; i < this._comList.length; i++) {
    this._comPosX[i] = 35 + (108 * i);
    var frame = 8 + (108 * i);
    this._acCom[i] = new Sprite(this._BG);
    this._acCom[i].x = this._comPosX[i];
    this._acCom[i].y = 670;
    this._acCom[i].anchor.x = 0;
    this._acCom[i].anchor.y = 0.15;
    this._acCom[i].setFrame(frame, 780, 109, 60);
    this._comField.addChild(this._acCom[i]);

    this._inCom[i] = new Sprite(this._BG);
    this._inCom[i].x = this._comPosX[i];
    this._inCom[i].y = 670;
    this._inCom[i].anchor.x = 0;
    this._inCom[i].anchor.y = 0;
    this._inCom[i].setFrame(frame, 840, 109, 60);
    this._comField.addChild(this._inCom[i]);
  }
}

Scene_Menu.prototype.isComEnabled = function (index) {
  if (index != this._commandWindow._index) { return false };
  return true;
};

Scene_Menu.prototype.updateCommands = function () {
  for (var i = 0; i < this._acCom.length; i++) {
    if (this.isComEnabled(i)) {
      if (this._commandWindow.isCurrentItemEnabled()) {
        this._inCom[i].visible = false;
      }
    } else {
      this._inCom[i].visible = true;
    }
    this._acCom[i].visible = !this._inCom[i].visible;
    this._acCom[i].y = 684;
    var yi = this._acCom[i].visible ? 1 : 0;
    this._acCom[i].y = globMoveTo(this._acCom[i].y, this._comPosY[yi], 6);
  }
};


Scene_Menu.prototype.create_tv1 = function () {
  this._tv1 = new Sprite();
  this._field.addChild(this._tv1);
  this._tv1.y = 186;

  this._tv1Frame = [];
  this._tv1PosX = [];

  for (var i = 0; i < 2; i++) {


    this._framePosY = [6, 233];
    this._tv1PosX[i] = 38 + (282 * i);
    this._tv1Frame[i] = new Sprite(this._BG);
    this._tv1Frame[i].x = this._tv1PosX[i];
    this._tv1Frame[i].setFrame(654, this._framePosY[i], 252, 220);
    this._tv1.addChild(this._tv1Frame[i]);
  }
}

Scene_Menu.prototype.create_tv1_name = function () {
  this._tv1_name = new Sprite();
  this._field.addChild(this._tv1_name);
  this._tv1_name.y = 174;
  this._name1 = [];
  this._name1PosX = [];

  for (var i = 0; i < 2; i++) {
    this._machoSwitch = $gameSwitches.value(221);
    this._leaderSwitch = $gameSwitches.value(227);
    this._PosX = [];
    this._PosY = [];
    this._width = [];
    this._height = 40;
    this._PosX[i] = 980;
    this._width[i] = 200;


    this._PosY[i] = 18 + (46 * i);
    this._name1PosX[i] = 51 + (282 * i);
    this._name1[i] = new Sprite(this._BG);
    this._name1[i].x = this._name1PosX[i];
    this._name1[i].setFrame(this._PosX[i], this._PosY[i], this._width[i], this._height);
    this._tv1_name.addChild(this._name1[i]);
  }
}

Scene_Menu.prototype.create_tv2 = function () {
  this._tv2 = new Sprite();
  this._field.addChild(this._tv2);
  this._tv2.y = 433;

  this._tv2Frame = [];
  this._tv2PosX = [];

  for (var i = 0; i < 2; i++) {
    this._framePosY = [460, 687];
    this._tv2PosX[i] = 38 + (282 * i);
    this._tv2Frame[i] = new Sprite(this._BG);
    this._tv2Frame[i].x = this._tv2PosX[i];
    this._tv2Frame[i].setFrame(654, this._framePosY[i], 252, 220);
    this._tv2.addChild(this._tv2Frame[i]);
  }
}

Scene_Menu.prototype.create_tv2_name = function () {
  this._tv2_name = new Sprite();
  this._field.addChild(this._tv2_name);
  this._tv2_name.y = 421;

  this._name2 = [];
  this._name2PosX = [];

  for (var i = 0; i < 2; i++) {
    this._succuSwitch = $gameSwitches.value(233);
    this._slimeSwitch = $gameSwitches.value(239);
    this._PosX = [];
    this._PosY = [];
    this._width = [];

    this._height = 40;
    this._PosX[i] = 980;
    this._width[i] = 150;


    this._PosY[i] = 110 + (46 * i);
    this._name2PosX[i] = 51 + (282 * i);
    this._name2[i] = new Sprite(this._BG);
    this._name2[i].x = this._name2PosX[i];
    this._name2[i].setFrame(this._PosX[i], this._PosY[i], this._width[i], this._height);
    this._tv2_name.addChild(this._name2[i]);
  }
}

Scene_Menu.prototype.turnoff_switch = function (param) {
  for (let i = 1; i < this._switchNum; i++) {
    $gameSwitches.setValue(param + i, false);
  }
}

Scene_Menu.prototype.create_Screen1 = function () {
  this._machoSwitch1 = $gameSwitches.value(221);
  this._machoSwitch2 = $gameSwitches.value(222);
  this._machoSwitch3 = $gameSwitches.value(223);
  this._machoSwitch4 = $gameSwitches.value(224);
  this._machoSwitch5 = $gameSwitches.value(225);
  this._machoSwitch6 = $gameSwitches.value(226);
  this._machoSwitchNum;

  if (this._machoSwitch1) { this._machoSwitchNum = 1 };
  if (this._machoSwitch2) { this._machoSwitchNum = 2 };
  if (this._machoSwitch3) { this._machoSwitchNum = 3 };
  if (this._machoSwitch4) { this._machoSwitchNum = 4 };
  if (this._machoSwitch5) { this._machoSwitchNum = 5 };
  if (this._machoSwitch6) { this._machoSwitchNum = 6 };

  switch (this._machoSwitchNum) {
    case 1:
      this._tvScreen1 = new Sprite(this._machoCG1);
      break;
    case 2:
      this.turnoff_switch(220);
      this._tvScreen1 = new Sprite(this._machoCG2);
      break;
    case 3:
      this.turnoff_switch(220);
      this._tvScreen1 = new Sprite(this._machoCG3);
      break;
    case 4:
      this.turnoff_switch(220);
      this._tvScreen1 = new Sprite(this._machoCG4);
      break;
    case 5:
      this.turnoff_switch(220);
      this._tvScreen1 = new Sprite(this._machoCG5);
      break;
    case 6:
      this.turnoff_switch(220);
      this._tvScreen1 = new Sprite(this._machoCG6);
      break;
    default:
      this._tvScreen1 = new Sprite(this._BG);
      this._tvScreen1.setFrame(922, 543, 245, 175);
  }
  this._field.addChild(this._tvScreen1);
  this._tvScreen1.x = 41;
  this._tvScreen1.y = 189;
}
Scene_Menu.prototype.create_Screen2 = function () {
  this._leaderSwitch1 = $gameSwitches.value(227);
  this._leaderSwitch2 = $gameSwitches.value(228);
  this._leaderSwitch3 = $gameSwitches.value(229);
  this._leaderSwitch4 = $gameSwitches.value(230);
  this._leaderSwitch5 = $gameSwitches.value(231);
  this._leaderSwitch6 = $gameSwitches.value(232);
  this._leaderSwitchNum;

  if (this._leaderSwitch1) { this._leaderSwitchNum = 1 };
  if (this._leaderSwitch2) { this._leaderSwitchNum = 2 };
  if (this._leaderSwitch3) { this._leaderSwitchNum = 3 };
  if (this._leaderSwitch4) { this._leaderSwitchNum = 4 };
  if (this._leaderSwitch5) { this._leaderSwitchNum = 5 };
  if (this._leaderSwitch6) { this._leaderSwitchNum = 6 };

  switch (this._leaderSwitchNum) {
    case 1:
      this._tvScreen2 = new Sprite(this._leaderCG1);
      break;
    case 2:
      this.turnoff_switch(226);
      this._tvScreen2 = new Sprite(this._leaderCG2);
      break;
    case 3:
      this.turnoff_switch(226);
      this._tvScreen2 = new Sprite(this._leaderCG3);
      break;
    case 4:
      this.turnoff_switch(226);
      this._tvScreen2 = new Sprite(this._leaderCG4);
      break;
    case 5:
      this.turnoff_switch(226);
      this._tvScreen2 = new Sprite(this._leaderCG5);
      break;
    case 6:
      this.turnoff_switch(226);
      this._tvScreen2 = new Sprite(this._leaderCG6);
      break;
    default:
      this._tvScreen2 = new Sprite(this._BG);
      this._tvScreen2.setFrame(922, 543, 245, 175);
  }
  this._field.addChild(this._tvScreen2);
  this._tvScreen2.x = 323;
  this._tvScreen2.y = 189;
}

Scene_Menu.prototype.create_Screen3 = function () {
  this._succuSwitch1 = $gameSwitches.value(233);
  this._succuSwitch2 = $gameSwitches.value(234);
  this._succuSwitch3 = $gameSwitches.value(235);
  this._succuSwitch4 = $gameSwitches.value(236);
  this._succuSwitch5 = $gameSwitches.value(237);
  this._succuSwitch6 = $gameSwitches.value(238);
  this._succuSwitchNum;

  if (this._succuSwitch1) { this._succuSwitchNum = 1 };
  if (this._succuSwitch2) { this._succuSwitchNum = 2 };
  if (this._succuSwitch3) { this._succuSwitchNum = 3 };
  if (this._succuSwitch4) { this._succuSwitchNum = 4 };
  if (this._succuSwitch5) { this._succuSwitchNum = 5 };
  if (this._succuSwitch6) { this._succuSwitchNum = 6 };

  switch (this._succuSwitchNum) {
    case 1:
      this._tvScreen3 = new Sprite(this._succuCG1);
      break;
    case 2:
      this.turnoff_switch(232);
      this._tvScreen3 = new Sprite(this._succuCG2);
      break;
    case 3:
      this.turnoff_switch(232);
      this._tvScreen3 = new Sprite(this._succuCG3);
      break;
    case 4:
      this.turnoff_switch(232);
      this._tvScreen3 = new Sprite(this._succuCG4);
      break;
    case 5:
      this.turnoff_switch(232);
      this._tvScreen3 = new Sprite(this._succuCG5);
      break;
    case 6:
      this.turnoff_switch(232);
      this._tvScreen3 = new Sprite(this._succuCG6);
      break;
    default:
      this._tvScreen3 = new Sprite(this._BG);
      this._tvScreen3.setFrame(922, 543, 245, 175);
  }
  this._field.addChild(this._tvScreen3);
  this._tvScreen3.x = 41;
  this._tvScreen3.y = 436;
}
Scene_Menu.prototype.create_Screen4 = function () {
  this._slimeSwitch1 = $gameSwitches.value(239);
  this._slimeSwitch2 = $gameSwitches.value(240);
  this._slimeSwitch3 = $gameSwitches.value(241);
  this._slimeSwitch4 = $gameSwitches.value(242);
  this._slimeSwitch5 = $gameSwitches.value(243);
  this._slimeSwitch6 = $gameSwitches.value(244);
  this._slimeSwitchNum;

  if (this._slimeSwitch1) { this._slimeSwitchNum = 1 };
  if (this._slimeSwitch2) { this._slimeSwitchNum = 2 };
  if (this._slimeSwitch3) { this._slimeSwitchNum = 3 };
  if (this._slimeSwitch4) { this._slimeSwitchNum = 4 };
  if (this._slimeSwitch5) { this._slimeSwitchNum = 5 };
  if (this._slimeSwitch6) { this._slimeSwitchNum = 6 };

  switch (this._slimeSwitchNum) {
    case 1:
      this._tvScreen4 = new Sprite(this._slimeCG1);
      break;
    case 2:
      this.turnoff_switch(238);
      this._tvScreen4 = new Sprite(this._slimeCG2);
      break;
    case 3:
      this.turnoff_switch(238);
      this._tvScreen4 = new Sprite(this._slimeCG3);
      break;
    case 4:
      this.turnoff_switch(238);
      this._tvScreen4 = new Sprite(this._slimeCG4);
      break;
    case 5:
      this.turnoff_switch(238);
      this._tvScreen4 = new Sprite(this._slimeCG5);
      break;
    case 6:
      this.turnoff_switch(238);
      this._tvScreen4 = new Sprite(this._slimeCG6);
      break;
    default:
      this._tvScreen4 = new Sprite(this._BG);
      this._tvScreen4.setFrame(922, 543, 245, 175);
  }
  this._field.addChild(this._tvScreen4);
  this._tvScreen4.x = 323;
  this._tvScreen4.y = 436;
}

Scene_Menu.prototype.createMachoMeters = function () {
  this._machoMeter = new Sprite(this._BG);
  this._field.addChild(this._machoMeter);
  this._machoMeter.x = 41;
  this._machoMeter.y = 365;
  this._machoStat = $gameVariables.value(41);
  this._max = 100;
  this._ratio = Math.floor(250 * this._machoStat / this._max);
  this._machoMeter.setFrame(922, 732, this._ratio, 27);
}

Scene_Menu.prototype.createLeaderMeters = function () {
  this._leaderMeter = new Sprite(this._BG);
  this._field.addChild(this._leaderMeter);
  this._leaderMeter.x = 323;
  this._leaderMeter.y = 365;
  this._leaderStat = $gameVariables.value(42);
  this._ratio = Math.floor(250 * this._leaderStat / this._max);
  this._leaderMeter.setFrame(922, 774, this._ratio, 27);
}

Scene_Menu.prototype.createSuccuMeters = function () {
  this._succuMeter = new Sprite(this._BG);
  this._field.addChild(this._succuMeter);
  this._succuMeter.x = 41;
  this._succuMeter.y = 610;
  this._succuStat = $gameVariables.value(43);
  this._ratio = Math.floor(250 * this._succuStat / this._max);
  this._succuMeter.setFrame(922, 816, this._ratio, 27);
}

Scene_Menu.prototype.createSlimeMeters = function () {
  this._slimeMeter = new Sprite(this._BG);
  this._field.addChild(this._slimeMeter);
  this._slimeMeter.x = 323;
  this._slimeMeter.y = 610;
  this._slimeStat = $gameVariables.value(44);
  this._ratio = Math.floor(250 * this._slimeStat / this._max);
  this._slimeMeter.setFrame(922, 858, this._ratio, 27);
}

Scene_Menu.prototype.playerHPBar = function () {
  this._HpBar = new Sprite(this._BG);
  this._field.addChild(this._HpBar);
  this._HpBar.x = 779;
  this._HpBar.y = 71;
  this._HpBar.setFrame(922, 735, 215, 45);
}

Scene_Menu.prototype.HPGauge = function () {
  this._HPGauge = new Sprite(this._BG);
  this._field.addChild(this._HPGauge);
  this._HPGauge.x = 779;
  this._HPGauge.y = 71;
  this._HPStat = $gameVariables.value(7);
  this._HPMax = $gameVariables.value(9);
  this._HPRatio = Math.floor(215 * this._HPStat / this._HPMax);
  this._HPGauge.setFrame(922, 784, this._HPRatio, 30);
}

Scene_Menu.prototype.HPNumber = function () {
  this._HPNumber = new Sprite(this._BG);
  this._field.addChild(this._HPNumber);
  this._HPNumber.x = 779;
  this._HPNumber.y = 71;
  this._HPNumber.setFrame(922, 735, 215, 45);
}

MCharStatus.prototype.createMachoNumber = function () {
  this._machoNumber = [];
  this._NumberData2 = [this._machoNumberImg.width / 10, this._machoNumberImg.height]
  var x = 166;
  var y = 381;
  for (var i = 0; i < 5; i++) {
    this._machoNumber[i] = new Sprite(this._machoNumberImg);
    this._machoNumber[i].visible = false;
    this._machoNumber[i].opacity = 255;
    this._machoNumber[i].x = x;
    this._machoNumber[i].y = y;
    this.addChild(this._machoNumber[i]);
  };

  if ($gameVariables.value(41) <= 100) {
    this._machoNumberStat = $gameVariables.value(41);
  } else {
    this._machoNumberStat = 100;
  }

  this.refresh_number(this._machoNumber, this._machoNumberStat, this._NumberData2, x)
};

MCharStatus.prototype.createLeaderNumber = function () {
  this._leaderNumber = [];
  this._NumberData2 = [this._leaderNumberImg.width / 10, this._leaderNumberImg.height]
  var x = 447;
  var y = 381;
  for (var i = 0; i < 5; i++) {
    this._leaderNumber[i] = new Sprite(this._leaderNumberImg);
    this._leaderNumber[i].visible = false;
    this._leaderNumber[i].opacity = 255;
    this._leaderNumber[i].x = x;
    this._leaderNumber[i].y = y;
    this.addChild(this._leaderNumber[i]);
  };

  if ($gameVariables.value(42) <= 100) {
    this._leaderNumberStat = $gameVariables.value(42);
  } else {
    this._leaderNumberStat = 100;
  }

  this.refresh_number(this._leaderNumber, this._leaderNumberStat, this._NumberData2, x)
};

MCharStatus.prototype.createSuccuNumber = function () {
  this._succuNumber = [];
  this._NumberData2 = [this._succuNumberImg.width / 10, this._succuNumberImg.height]
  var x = 166;
  var y = 628;
  for (var i = 0; i < 5; i++) {
    this._succuNumber[i] = new Sprite(this._succuNumberImg);
    this._succuNumber[i].visible = false;
    this._succuNumber[i].opacity = 255;
    this._succuNumber[i].x = x;
    this._succuNumber[i].y = y;
    this.addChild(this._succuNumber[i]);
  };

  if ($gameVariables.value(43) <= 100) {
    this._succuNumberStat = $gameVariables.value(43);
  } else {
    this._succuNumberStat = 100;
  }
  this.refresh_number(this._succuNumber, this._succuNumberStat, this._NumberData2, x)
};

MCharStatus.prototype.createSlimeNumber = function () {
  this._slimeNumber = [];
  this._NumberData2 = [this._slimeNumberImg.width / 10, this._slimeNumberImg.height]
  var x = 447;
  var y = 628;
  for (var i = 0; i < 5; i++) {
    this._slimeNumber[i] = new Sprite(this._slimeNumberImg);
    this._slimeNumber[i].visible = false;
    this._slimeNumber[i].opacity = 255;
    this._slimeNumber[i].x = x;
    this._slimeNumber[i].y = y;
    this.addChild(this._slimeNumber[i]);
  };

  if ($gameVariables.value(44) <= 100) {
    this._slimeNumberStat = $gameVariables.value(44);
  } else {
    this._slimeNumberStat = 100;
  }
  this.refresh_number(this._slimeNumber, this._slimeNumberStat, this._NumberData2, x)
};

Scene_Menu.prototype.kindCountSubs = function () {
  this._kindCountSubs = new Sprite(this._BG);
  this._field.addChild(this._kindCountSubs);
  this._kindCountSubs.x = 875;
  this._kindCountSubs.y = 47;
  this._kindCountSubs.setFrame(922, 368, 120, 30);
}

MCharStatus.prototype.kindCountSubsNumber = function () {
  this._kindCountNumbers = [];
  this._NumberData2 = [this._numberImg.width / 10, this._numberImg.height]
  var x = 946;
  var y = 24;
  for (var i = 0; i < 7; i++) {
    this._kindCountNumbers[i] = new Sprite(this._numberImg);
    this._kindCountNumbers[i].visible = false;
    this._kindCountNumbers[i].opacity = 255;
    this._kindCountNumbers[i].x = x;
    this._kindCountNumbers[i].y = y;
    this.addChild(this._kindCountNumbers[i]);
  };
  this._kindCountNumbersStat = $gameVariables.value(2);
  this.refresh_number(this._kindCountNumbers, this._kindCountNumbersStat, this._NumberData2, x)
};

Scene_Menu.prototype.badCountSubs = function () {
  this._badCountSubs = new Sprite(this._BG);
  this._field.addChild(this._badCountSubs);
  this._badCountSubs.x = 875;
  this._badCountSubs.y = 110;
  this._badCountSubs.setFrame(922, 325, 120, 30);
}

MCharStatus.prototype.badCountSubsNumber = function () {
  this._badCountNumbers = [];
  this._NumberData3 = [this._numberImg.width / 10, this._numberImg.height]
  var x = 946;
  var y = 87;
  for (var i = 0; i < 7; i++) {
    this._badCountNumbers[i] = new Sprite(this._numberImg);
    this._badCountNumbers[i].visible = false;
    this._badCountNumbers[i].opacity = 255;
    this._badCountNumbers[i].x = x;
    this._badCountNumbers[i].y = y;
    this.addChild(this._badCountNumbers[i]);
  };
  this._badCountNumbersStat = $gameVariables.value(3);
  this.refresh_number(this._badCountNumbers, this._badCountNumbersStat, this._NumberData2, x)
};

Scene_Menu.prototype.sexyLevelSubs = function () {
  this._sexyLevelSubs = new Sprite(this._BG);
  this._field.addChild(this._sexyLevelSubs);
  this._sexyLevelSubs.x = 670;
  this._sexyLevelSubs.y = 47;
  this._sexyLevelSubs.setFrame(921, 421, 130, 30);
}

Scene_Menu.prototype.maxSexyLevel = function () {
  this._maxSexyLevel = new Sprite(this._BG);
  this._field.addChild(this._maxSexyLevel);

  switch ($gameVariables.value(422)) {
    case 0:
      this._maxSexyLevel.x = 726;
      break;

    case 1:
      this._maxSexyLevel.x = 726;
      break;

    case 2:
      this._maxSexyLevel.x = 710;
      break;

    case 3:
      this._maxSexyLevel.x = 710;
      break;
  }
  this._maxSexyLevel.y = 17;
  this._maxSexyLevel.setFrame(1060, 421, 30, 30);
}

Scene_Menu.prototype.sexyDead = function () {
  this._sexyDead = new Sprite(this._BG);
  this._field.addChild(this._sexyDead);
  this._sexyDead.x = 794;
  this._sexyDead.y = 17;
  this._sexyDead.setFrame(1090, 421, 130, 30);
}

MCharStatus.prototype.sexyLevelNumber = function () {
  this._sexyLevelNumbers = [];
  this._NumberData3 = [this._numberImg.width / 10, this._numberImg.height]
  switch ($gameVariables.value(422)) {
    case 0:
      var x = 680;
      break;

    case 1:
      var x = 680;
      break;

    case 2:
      var x = 662;
      break;

    case 3:
      var x = 662;
      break;
  }
  var y = 24;
  for (var i = 0; i < 7; i++) {
    this._sexyLevelNumbers[i] = new Sprite(this._numberImg);
    this._sexyLevelNumbers[i].visible = false;
    this._sexyLevelNumbers[i].opacity = 255;
    this._sexyLevelNumbers[i].x = x;
    this._sexyLevelNumbers[i].y = y;
    this.addChild(this._sexyLevelNumbers[i]);
  };
  this._sexyLevelNumbersStat = $gameVariables.value(45);
  this.refresh_number(this._sexyLevelNumbers, this._sexyLevelNumbersStat, this._NumberData2, x)
};

MCharStatus.prototype.maxsexyLevelNumber = function () {
  this._maxsexyLevelNumbers = [];
  this._NumberData3 = [this._numberImg.width / 10, this._numberImg.height]
  var x = 740;
  var y = 24;
  for (var i = 0; i < 7; i++) {
    this._maxsexyLevelNumbers[i] = new Sprite(this._numberImg);
    this._maxsexyLevelNumbers[i].visible = false;
    this._maxsexyLevelNumbers[i].opacity = 255;
    this._maxsexyLevelNumbers[i].x = x;
    this._maxsexyLevelNumbers[i].y = y;
    this.addChild(this._maxsexyLevelNumbers[i]);
  };
  this._maxsexyLevelNumbersStat = $gameVariables.value(423);
  this.refresh_number(this._maxsexyLevelNumbers, this._maxsexyLevelNumbersStat, this._NumberData2, x)
};


Scene_Menu.prototype.ruisekiSubs = function () {
  this._ruisekiSubs = new Sprite(this._BG);
  this._field.addChild(this._ruisekiSubs);
  this._ruisekiSubs.x = 631;
  this._ruisekiSubs.y = 110;
  this._ruisekiSubs.setFrame(922, 503, 180, 30);
}

MCharStatus.prototype.ruisekiNumber = function () {
  this._ruisekiNumbers = [];
  this._NumberData3 = [this._numberImg.width / 10, this._numberImg.height]
  var x = 740;
  var y = 87;
  for (var i = 0; i < 7; i++) {
    this._ruisekiNumbers[i] = new Sprite(this._numberImg);
    this._ruisekiNumbers[i].visible = false;
    this._ruisekiNumbers[i].opacity = 255;
    this._ruisekiNumbers[i].x = x;
    this._ruisekiNumbers[i].y = y;
    this.addChild(this._ruisekiNumbers[i]);
  };
  this._ruisekiNumbersStat = $gameVariables.value(421);
  this.refresh_number(this._ruisekiNumbers, this._ruisekiNumbersStat, this._NumberData2, x)
};

Scene_Menu.prototype.moraleSubs = function () {
  this._moraleSubs = new Sprite(this._BG);
  this._field.addChild(this._moraleSubs);
  this._moraleSubs.x = 930;
  this._moraleSubs.y = 173;
  this._moraleSubs.setFrame(920, 463, 80, 30);
}

MCharStatus.prototype.moraleNumber = function () {
  this._moraleNumbers = [];
  this._NumberData3 = [this._numberImg.width / 10, this._numberImg.height]
  var x = 946;
  var y = 148;
  for (var i = 0; i < 7; i++) {
    this._moraleNumbers[i] = new Sprite(this._numberImg);
    this._moraleNumbers[i].visible = false;
    this._moraleNumbers[i].opacity = 255;
    this._moraleNumbers[i].x = x;
    this._moraleNumbers[i].y = y;
    this.addChild(this._moraleNumbers[i]);
  };
  this._moraleNumbersStat = $gameVariables.value(201);
  this.refresh_number(this._moraleNumbers, this._moraleNumbersStat, this._NumberData2, x)
};	