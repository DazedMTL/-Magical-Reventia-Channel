function EnemyPattern() {
  var round = $gameVariables.value(19);
  //final

  if ($gameSwitches.value(136)) {
    final_FirstPattern(round);
  }

  if ($gameSwitches.value(137)) {
    final_SecondPattern(round);
  }

  // macho
  if ($gameSwitches.value(61)) {
    var count = $gameVariables.value(46);
    switch (count) {
      case 0:
        macho_FirstPattern(round);
        break;
      case 1:
        macho_SecondPattern(round);
        break;
      case 2:
        macho_ThirdPattern(round);
        break;
      case 3:
        macho_FourthPattern(round);
        break;
      case 4:
        macho_LastPattern(round);
        break;
      default:
        return;
    }
  }
  // leader
  if ($gameSwitches.value(62)) {
    var count = $gameVariables.value(47);
    switch (count) {
      case 0:
        leader_FirstPattern(round);
        break;
      case 1:
        leader_SecondPattern(round);
        break;
      case 2:
        leader_ThirdPattern(round);
        break;
      case 3:
        leader_FourthPattern(round);
        break;
      case 4:
        leader_LastPattern(round);
        break;
      default:
        return;
    }
  }
  // succu
  if ($gameSwitches.value(63)) {
    var count = $gameVariables.value(48);
    switch (count) {
      case 0:
        succu_FirstPattern(round);
        break;
      case 1:
        succu_SecondPattern(round);
        break;
      case 2:
        succu_ThirdPattern(round);
        break;
      case 3:
        succu_FourthPattern(round);
        break;
      case 4:
        succu_LastPattern(round);
        break;
      default:
        return;
    }
  }
  // slime
  if ($gameSwitches.value(64)) {
    var count = $gameVariables.value(49);
    switch (count) {
      case 0:
        slime_FirstPattern(round);
        break;
      case 1:
        slime_SecondPattern(round);
        break;
      case 2:
        slime_ThirdPattern(round);
        break;
      case 3:
        slime_FourthPattern(round);
        break;
      case 4:
        slime_LastPattern(round);
        break;
      default:
        return;
    }
  }
}

// -------------------------------------------------------------- Macho
// =====================
// Macho First Pattern
// =====================
function macho_FirstPattern(round) {
  var array = [1, 1, 2];

  Pattern_Spawner(round, array);
}
// =====================
// Macho Second Pattern
// =====================
function macho_SecondPattern(round) {
  var array = [1, 1, 3];

  Pattern_Spawner(round, array);
}
// =====================
// Macho Third Pattern
// =====================
function macho_ThirdPattern(round) {
  var array = [1, 4, 3, 1, 4, 3, 1, 4, 3, 1, 4, 3, 1, 4, 3, 1, 4, 3, 1, 4, 3];

  Pattern_Spawner(round, array);
}
// =====================
// Macho Fourth Pattern
// =====================
function macho_FourthPattern(round) {
  var array = [1, 3, 1, 1, 1, 3, 1, 1, 1];

  Pattern_Spawner(round, array);
}
// =====================
// Macho Last Pattern
// =====================
function macho_LastPattern(round) {
  var array = [4, 3, 5, 1];

  Pattern_Spawner(round, array);
}

// -------------------------------------------------------------- Leader
// =====================
// Leader First Pattern
// =====================
function leader_FirstPattern(round) {
  var array = [3, 3, 3, 3, 3, 3, 3, 3];

  Pattern_Spawner(round, array);
}
// =====================
// Leader Second Pattern
// =====================
function leader_SecondPattern(round) {
  var array = [1, 2, 3];

  Pattern_Spawner(round, array);
}
// =====================
// Leader Third Pattern
// =====================
function leader_ThirdPattern(round) {
  var array = [
    3, 1, 1, 3, 1, 1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 1, 1,
    1, 1,
  ];

  Pattern_Spawner(round, array);
}
// =====================
// Leader Fourth Pattern
// =====================
function leader_FourthPattern(round) {
  var array = [1, 1, 3, 1, 1, 3, 1, 1, 3, 1, 1, 3, 1, 1, 3];

  Pattern_Spawner(round, array);
}
// =====================
// Leader Last Pattern
// =====================
function leader_LastPattern(round) {
  var array = [5, 1, 1, 1, 1, 5, 1, 1, 1, 1, 5, 1, 1, 1, 1];

  Pattern_Spawner(round, array);
}

// -------------------------------------------------------------- Succu
// =====================
// Succu First Pattern
// =====================
function succu_FirstPattern(round) {
  var array = [1, 3, 2, 1, 1, 2, 4, 1, 5, 2, 1, 2, 2, 1, 3, 1, 2, 5];

  Pattern_Spawner(round, array);
}
// =====================
// Succu Second Pattern
// =====================
function succu_SecondPattern(round) {
  var array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  Pattern_Spawner(round, array);
}
// =====================
// Succu Third Pattern
// =====================
function succu_ThirdPattern(round) {
  var array = [2, 1, 4, 3, 2, 2, 1, 4, 3, 2, 2, 1, 4, 3, 2, 2, 1, 4, 3];

  Pattern_Spawner(round, array);
}
// =====================
// Succu Fourth Pattern
// =====================
function succu_FourthPattern(round) {
  var array = [5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3, 5, 1, 1, 3, 3];

  Pattern_Spawner(round, array);
}
// =====================
// Succu Last Pattern
// =====================
function succu_LastPattern(round) {
  var array = [1, 1, 4, 3, 1, 1, 4, 5];

  Pattern_Spawner(round, array);
}

// -------------------------------------------------------------- Slime
// =====================
// Slime First Pattern
// =====================
function slime_FirstPattern(round) {
  var array = [3, 3, 3, 3, 3, 3, 3, 3];

  Pattern_Spawner(round, array);
}
// =====================
// Slime Second Pattern
// =====================
function slime_SecondPattern(round) {
  var array = [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3];

  Pattern_Spawner(round, array);
}
// =====================
// Slime Third Pattern
// =====================
function slime_ThirdPattern(round) {
  var array = [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1];

  Pattern_Spawner(round, array);
}
// =====================
// Slime Fourth Pattern
// =====================
function slime_FourthPattern(round) {
  var array = [
    1, 1, 2, 4, 4, 1, 2, 1, 1, 4, 4, 1, 2, 1, 1, 4, 4, 1, 2, 1, 1, 4, 4, 1, 2,
    1, 1, 4, 4, 1, 2, 1, 1, 4, 4, 1, 2, 1, 1, 4, 4, 1, 2, 1, 1, 4, 4, 1, 2,
  ];

  Pattern_Spawner(round, array);
}
// =====================
// Slime Last Pattern
// =====================
function slime_LastPattern(round) {
  var array = [1, 2, 1];

  Pattern_Spawner(round, array);
}

// -------------------------------------------------------------- final
// =====================
// final First Pattern
// =====================
function final_FirstPattern(round) {
  var array = [1, 2, 4, 3, 2, 2, 4, 3, 1, 2, 4, 3];

  Pattern_Spawner(round, array);
}
// =====================
// final Second Pattern
// =====================
function final_SecondPattern(round) {
  var array = [1, 2, 4, 3, 2, 2, 4, 3, 1, 2, 4, 3];

  Pattern_Spawner(round, array);
}

// =====================
// Pattern Spawner
// =====================
function Pattern_Spawner(round, array) {
  //
  if (round % array.length == 1) {
    $gameVariables.setValue(28, array[0]);
  } else if (round % array.length == 2) {
    $gameVariables.setValue(28, array[1]);
  } else if (round % array.length == 3) {
    $gameVariables.setValue(28, array[2]);
  } else if (round % array.length == 4) {
    $gameVariables.setValue(28, array[3]);
  } else if (round % array.length == 5) {
    $gameVariables.setValue(28, array[4]);
  } else if (round % array.length == 6) {
    $gameVariables.setValue(28, array[5]);
  } else if (round % array.length == 7) {
    $gameVariables.setValue(28, array[6]);
  } else if (round % array.length == 8) {
    $gameVariables.setValue(28, array[7]);
  } else if (round % array.length == 9) {
    $gameVariables.setValue(28, array[8]);
  } else if (round % array.length == 10) {
    $gameVariables.setValue(28, array[9]);
  } else if (round % array.length == 11) {
    $gameVariables.setValue(28, array[10]);
  } else if (round % array.length == 12) {
    $gameVariables.setValue(28, array[11]);
  } else if (round % array.length == 13) {
    $gameVariables.setValue(28, array[12]);
  } else if (round % array.length == 14) {
    $gameVariables.setValue(28, array[13]);
  } else if (round % array.length == 15) {
    $gameVariables.setValue(28, array[14]);
  } else if (round % array.length == 16) {
    $gameVariables.setValue(28, array[15]);
  } else if (round % array.length == 17) {
    $gameVariables.setValue(28, array[16]);
  } else if (round % array.length == 18) {
    $gameVariables.setValue(28, array[17]);
  } else if (round % array.length == 19) {
    $gameVariables.setValue(28, array[18]);
  } else if (round % array.length == 20) {
    $gameVariables.setValue(28, array[19]);
  } else if (round % array.length == 0) {
    var lastArray = array.length - 1;
    $gameVariables.setValue(28, array[lastArray]);
  }
}
