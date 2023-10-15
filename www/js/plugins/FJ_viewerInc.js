function viewerIncrease() {
    const all = {
        // all
        plAct : $gameVariables.value(26),
        enemyHp : $gameVariables.value(50),
        round : $gameVariables.value(19),
        camera : $gameVariables.value(22),
        adsPlus : $gameVariables.value(51),
        totalViewer : $gameVariables.value(4),
        totalInc : $gameVariables.value(53),
        cameraInc : 0,
        adsPlusInc : 0,
        moneyInc : 0,
        manageInc : 0,
        roundInc : 0,
        subdueInc : 0,

        // switch
        money100 : $gameSwitches.value(28),
        money1000 : $gameSwitches.value(29),
        money10000 : $gameSwitches.value(30),
        manageNon : $gameSwitches.value(31),
        manageNormal : $gameSwitches.value(32),
        managePro : $gameSwitches.value(33),
        subdue : $gameSwitches.value(5),

        // used Skill
        Atk_1: $gameSwitches.value(85),
        Atk_2: $gameSwitches.value(86),
        Atk_3: $gameSwitches.value(87),
        Atk_4: $gameSwitches.value(88),
        Bar_1: $gameSwitches.value(89),
        Bar_2: $gameSwitches.value(90),
        Shi_1: $gameSwitches.value(91),
        Shi_2: $gameSwitches.value(92),
        Hea_1: $gameSwitches.value(93),
        Hea_2: $gameSwitches.value(94),
        Eva_1: $gameSwitches.value(95),
        Eva_2: $gameSwitches.value(96),

        // kind
        kv : $gameVariables.value(5),
        ks : $gameVariables.value(2),
        kvInc : $gameVariables.value(7),
        goodAct : $gameVariables.value(9),
        goodActInc : $gameVariables.value(10),
        manyAct : $gameVariables.value(11),
        manyActInc : $gameVariables.value(12),

        // bad
        bv : $gameVariables.value(6),
        bs : $gameVariables.value(3),
        bvInc : $gameVariables.value(8),
        badAct : $gameVariables.value(13),
        badActInc : $gameVariables.value(14),
        wantAct : $gameVariables.value(15),
        wantActInc : 0,
        penalty : $gameVariables.value(104),
        penaltyInc : 0,
    }
    manyActChecker(all);
    kindViewerIncrease(all);


    badViewerIncrease(all);

    $gameVariables.setValue(53, $gameVariables.value(7) + $gameVariables.value(8));
    
    wantActCreator(all);
}

function kindViewerIncrease(v) {
    switch(v.camera) {case 1: v.cameraInc = 1; break; 
                      case 2: v.cameraInc = 1.2; break;
                      case 3: v.cameraInc = 1.3; break;
                      case 4: v.cameraInc = 1.5; break;
                     default: v.cameraInc = 1;}; // Camera
    if (v.adsPlus == 0) {v.adsPlusInc = 1.3} //ads
    else if (v.adsPlus == 1) {v.adsPlusInc = 1}
    else if (v.adsPlus == 2) {v.adsPlusInc = 1};

    if (v.money100) {v.moneyInc = 1.3} // 100 money
    else if (v.money1000) {v.moneyInc = 1.1} // 1000 money
    else if (v.money10000) {v.moneyInc = 1}; // 10000 money

    if (v.manageNormal) {v.manageInc = 1} // manage normal
    else if (v.managePro) {v.manageInc = 1.3} // manage pro
    else if (v.manageNon) {v.manageInc = 1}; // non
    
    if (v.enemyHp != 1 && v.round >= 10) {v.roundInc = 1.5} else {v.roundInc = 1}; // enemyHp 1 & round 10 +

    if (v.subdue) {v.subdueInc = 0} else {v.subdueInc = 1}

    if (v.plAct == v.goodAct) {v.goodActInc}; // Good Act

    v.kvInc = (v.ks * 0.1 * v.cameraInc * v.adsPlusInc * v.moneyInc
                         * v.manageInc * v.roundInc * v.subdueInc);

    $gameVariables.setValue(7, Math.floor(v.kvInc));
    $gameVariables.setValue(5, $gameVariables.value(5) + $gameVariables.value(7));
}

function badViewerIncrease(v) {
    switch(v.camera) {case 5: v.cameraInc = 1.3; break; 
                      case 6: v.cameraInc = 1.5; break;
                     default: v.cameraInc = 1;}; // Camera
    if (v.adsPlus == 0) {v.adsPlusInc = 1.3}
    else if (v.adsPlus == 1) {v.adsPlusInc = 1}
    else if (v.adsPlus == 2) {v.adsPlusInc = 1.5};

    if (v.money100) {v.moneyInc = 1.3} // 100 money
    else if (v.money1000) {v.moneyInc = 1.1} // 1000 money
    else if (v.money10000) {v.moneyInc = 1.5} // 10000 money

    if (v.manageNormal) {v.manageInc = 1} // manage normal
    else if (v.manageNon) {v.manageInc = 1.3} // non
    else if (v.managePro) {v.manageInc = 1}; // pro

    if (v.subdue) {v.subdueInc = 2}
    else if (!v.subdue) {v.subdueInc = 1}; // subdue

    if (v.enemyHp == 1) {v.roundInc = 2}
    else {v.roundInc = 1}; // enemyHp 1

    if (v.plAct == v.badAct) {v.badActInc}; // bad Act

    v.bvInc = v.bs * 0.1 * (v.cameraInc * v.adsPlusInc * v.moneyInc
                         * v.manageInc * v.roundInc * v.subdueInc)
                         + v.penaltyInc;
    
    $gameVariables.setValue(8, Math.floor(v.bvInc));
    $gameVariables.setValue(16, 0);
    $gameVariables.setValue(6, $gameVariables.value(6) + $gameVariables.value(8));
}

