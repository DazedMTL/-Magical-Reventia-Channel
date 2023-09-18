/*:
 * @plugindesc v1.2 - Patches DreamX's ChoiceHelp plugin to work with nested choices and some hidden choice plugins.
 * @author Caethyril
 *
 * @help Place this immediately below DreamX_ChoiceHelp in the Plugin Manager.
 *  - If using HIME_LargeChoices,           load it after ChoiceHelp.
 *  - If using HIME_HiddenChoiceConditions, load ChoiceHelp after it;
 *  - If using YEP_X_ExtMsgPack1,           load ChoiceHelp after it;
 * (You can rearrange plugins by drag+drop in the Plugin Manager.)
 *
 * Overrides DreamX's alias for setupChoices (Game_Interpreter):
 *   - choice identification should now respect command indentation.
 * If using Yanfly's Extended Message Pack 1
 *       or Hime's Hidden Choice Conditions,
 *  overrides DreamX's updateHelp method (Window_ChoiceList):
 *   - choice identification should now account for hidden choices.
 *
 * Original plugin:
 *   https://forums.rpgmakerweb.com/index.php?threads/choice-help-window.59930/
 */

Game_Interpreter.prototype.setupChoices = function (params) {

	DreamX.ChoiceHelp.Game_Interpreter_setupChoices.call(this, params);

	var choicesDetected = 0;
	var choiceHelps = [];
	var choiceMessages = [];
	var choiceFaces = [];
	var name;
	var index;
	var helpRegExp = new RegExp("^ChoiceHelp ");
	var msgRegExp = new RegExp("^ChoiceMessage ");
	var faceRegExp = new RegExp("^ChoiceFace ");

	var whenIndent = Infinity;			// Added variable to track indent

	for (var i = 0; i < params[0].length; i++) {
		choiceHelps.push("");
		choiceMessages.push("");
		choiceFaces.push("");
	}

	for (var i = 0; choicesDetected !== params[0].length; i++) {
		var command = this._list[this._index + i];
		if (command && command.code === 402 && command.indent <= whenIndent) {		// Compare indent
			whenIndent = command.indent;						// Set indent
			choicesDetected++;
			var nextCommand = this._list[this._index + i + 1];
			for (var j = 0; nextCommand && nextCommand.code !== 402; j++) {
				var nextCommand = this._list[this._index + i + 1 + j];
				if (nextCommand && nextCommand.code === 108) {
					var param = nextCommand.parameters[0];
					if (helpRegExp.test(param)) {
						var splitParam = param.split(helpRegExp);
						choiceHelps[choicesDetected - 1] = splitParam[1];
					}
					if (msgRegExp.test(param)) {
						var splitParam = param.split(msgRegExp);
						choiceMessages[choicesDetected - 1] = splitParam[1];
					}
					if (faceRegExp.test(param)) {
						var splitParam = param.split(faceRegExp)[1].split(" ");
						if (splitParam.length === 2) {
							name = splitParam[0];
							ImageManager.loadFace(name);
							index = splitParam[1];
						} else if (splitParam.length === 1) {
							index = splitParam[0];
						}
						choiceFaces[choicesDetected - 1] = { name: name, index: index };
					}
				}
			}
			name = undefined;
			index = undefined;
		}
	}

	$gameMessage.setChoiceHelps(choiceHelps);
	$gameMessage.setChoiceMessages(choiceMessages);
	$gameMessage.setChoiceFaces(choiceFaces);

};

(function () {
	if (!Imported.YEP_X_ExtMesPack1) return;

	'use strict';

	var paramCloseHelpOnEmpty = eval(DreamX.Parameters['Hide On Empty'] || 8);	// scope it here too

	// Override (YEP_X_ExtMesPack1): reference memorised (original) choice index
	Window_ChoiceList.prototype.updateHelp = function () {
		let help = $gameMessage._choiceHelps[this.currentExt()];		// <- edit 1/3
		if (help) {
			this._helpWindow.setText(help);
			this._helpWindow.visible = true;
		} else {
			this._helpWindow.setText("");
			if (paramCloseHelpOnEmpty === true) {
				this._helpWindow.visible = false;
			}
		}
		let message = $gameMessage._choiceMessages[this.currentExt()];	// <- edit 2/3
		let face = $gameMessage._choiceFaces[this.currentExt()];		// <- edit 3/3
		let faceName = $gameMessage._originalFaceName;
		let faceIndex = $gameMessage._originalFaceIndex;
		let messageWindow = SceneManager._scene._messageWindow;
		if (message && message.length >= 1) {
			this.hasChoiceMessage = true;
		}
		if (this.hasChoiceMessage === true) {
			messageWindow.contents.clear();
			if ((face) && (face.index || face.name)) {
				if (face.index) {
					faceIndex = face.index;
				}
				if (face.name) {
					faceName = face.name;
				}
			}
			if (faceIndex !== $gameMessage.faceIndex() || faceName !== $gameMessage.faceName()) {
				$gameMessage.setFaceImage(faceName, faceIndex);
			}
			messageWindow.drawMessageFace();
			if (message) {
				messageWindow._textState = {};
				messageWindow._textState.index = 0;
				messageWindow._textState.text = messageWindow.convertEscapeCharacters(message);
				messageWindow._textState.x = messageWindow.newLineX();
				messageWindow._textState.y = 0;
				messageWindow._textState.left = messageWindow.newLineX();
				messageWindow._textState.height = messageWindow.calcTextHeight(messageWindow._textState, false);
				while (!messageWindow.isEndOfText(messageWindow._textState)) {
					if (messageWindow.needsNewPage(messageWindow._textState)) {
						messageWindow.newPage(messageWindow._textState);
					}
					messageWindow.updateShowFast();
					messageWindow.processCharacter(messageWindow._textState);
				}
			}
		}
	};

})();

(function () {
	if (!Imported.HiddenChoiceConditions) return;

	'use strict';

	var paramCloseHelpOnEmpty = eval(DreamX.Parameters['Hide On Empty'] || 2);	// scope it here too

	// Override (HIME_HiddenChoiceConditions): reference mapped choice index
	Window_ChoiceList.prototype.updateHelp = function () {
		var help = $gameMessage._choiceHelps[this._choiceMap[this.index()]];		// <- edit 1/3
		if (help) {
			this._helpWindow.setText(help);
			this._helpWindow.visible = true;
		} else {
			this._helpWindow.setText("");
			if (paramCloseHelpOnEmpty === true) {
				this._helpWindow.visible = false;
			}
		}
		var message = $gameMessage._choiceMessages[this._choiceMap[this.index()]];	// <- edit 2/3
		var face = $gameMessage._choiceFaces[this._choiceMap[this.index()]];		// <- edit 3/3
		var faceName = $gameMessage._originalFaceName;
		var faceIndex = $gameMessage._originalFaceIndex;
		var messageWindow = SceneManager._scene._messageWindow;

		if (message && message.length >= 1) {
			this.hasChoiceMessage = true;
		}
		if (this.hasChoiceMessage === true) {
			messageWindow.contents.clear();
			if ((face) && (face.index || face.name)) {
				if (face.index) {
					faceIndex = face.index;
				}
				if (face.name) {
					faceName = face.name;
				}
			}
			if (faceIndex !== $gameMessage.faceIndex() || faceName !== $gameMessage.faceName()) {
				$gameMessage.setFaceImage(faceName, faceIndex);
			}
			messageWindow.drawMessageFace();
			if (message) {
				messageWindow._textState = {};
				messageWindow._textState.index = 0;
				messageWindow._textState.text = messageWindow.convertEscapeCharacters(message);
				messageWindow._textState.x = messageWindow.newLineX();
				messageWindow._textState.y = 0;
				messageWindow._textState.left = messageWindow.newLineX();
				messageWindow._textState.height = messageWindow.calcTextHeight(messageWindow._textState, false);
				while (!messageWindow.isEndOfText(messageWindow._textState)) {
					if (messageWindow.needsNewPage(messageWindow._textState)) {
						messageWindow.newPage(messageWindow._textState);
					}
					messageWindow.updateShowFast();
					messageWindow.processCharacter(messageWindow._textState);
				}
			}
		}
	};

})();