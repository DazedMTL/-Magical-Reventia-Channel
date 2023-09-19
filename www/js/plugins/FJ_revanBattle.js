function revanAtk() {

    const vari = {
        act: $gameVariables.value(26),

        kindMind: $gameVariables.value(33),
        badMind: $gameVariables.value(34),

        atk: $gameVariables.value(18),
        enemyhp: $gameVariables.value(50),

        enemy1atk: $gameSwitches.value(77),

        enemy2atk: $gameSwitches.value(78),
        enemy2hp: $gameVariables.value(84),

        enemy3atk: $gameSwitches.value(79),
        enemy3hp: $gameVariables.value(88),

        enemy4atk: $gameSwitches.value(80),
        enemy4hp: $gameVariables.value(92),

        enemyCount: $gameVariables.value(66),

        atkText1: $gameVariables.value(293),
        atkText2: $gameVariables.value(294),
        atkText3: $gameVariables.value(280),

        manyActInc: 0,
        wantAct: $gameVariables.value(15),
        wantActInc: 0,
    }
    manyActChecker(vari);
    $gameVariables.setValue(12, vari.manyActInc);

    if ($gameVariables.value(47) == 2 && $gameSwitches.value(62)) {
        leader1checker(vari);
    } else {
        wantActChecker(vari);
    }
    $gameVariables.setValue(16, vari.wantActInc);

    switch (vari.act) {
        case 1:
            if (!$gameSwitches.value(137)) {
                if (vari.kindMind >= 1 && vari.kindMind < 800) {
                    vari.atk = 100;
                    $gameVariables.setValue(18, vari.atk);
                    $gameVariables.setValue(10, 400);
                    if ($gameSwitches.value(77)) { $gameVariables.setValue(279, 'The sharp sword swung by Levantia has caught \\v[101].'); }
                    if ($gameSwitches.value(78)) { $gameVariables.setValue(279, 'The sharp sword swung by Levantia has caught \\v[82].'); }
                    if ($gameSwitches.value(79)) { $gameVariables.setValue(279, 'The sharp sword swung by Levantia has caught \\v[86].'); }
                    if ($gameSwitches.value(80)) { $gameVariables.setValue(279, 'The sharp sword swung by Levantia has caught \\v[90].'); }
                } else if (vari.kindMind >= 800 && vari.kindMind < 5000) {
                    vari.atk = 150;
                    $gameVariables.setValue(18, vari.atk);
                    $gameVariables.setValue(10, 9000);
                    if ($gameSwitches.value(77)) { $gameVariables.setValue(279, 'Unrelenting continuous attacks, determined to pierce through, rain down on \\v[101].'); }
                    if ($gameSwitches.value(78)) { $gameVariables.setValue(279, 'Unrelenting continuous attacks, determined to pierce through, rain down on \\v[82].'); }
                    if ($gameSwitches.value(79)) { $gameVariables.setValue(279, 'Unrelenting continuous attacks, determined to pierce through, rain down on \\v[86].'); }
                    if ($gameSwitches.value(80)) { $gameVariables.setValue(279, 'Unrelenting continuous attacks, determined to pierce through, rain down on \\v[90].'); }
                } else if (vari.kindMind >= 5000 && vari.kindMind < 30000) {
                    vari.atk = 250;
                    $gameVariables.setValue(18, vari.atk);
                    $gameVariables.setValue(10, 60000);
                    if ($gameSwitches.value(77)) { $gameVariables.setValue(279, 'An untraceable flash accurately pierced through the center of \\v[101]!'); }
                    if ($gameSwitches.value(78)) { $gameVariables.setValue(279, 'An untraceable flash accurately pierced through the center of \\v[82]!'); }
                    if ($gameSwitches.value(79)) { $gameVariables.setValue(279, 'An untraceable flash accurately pierced through the center of \\v[86]!'); }
                    if ($gameSwitches.value(80)) { $gameVariables.setValue(279, 'An untraceable flash accurately pierced through the center of \\v[90]!'); }
                } else if (vari.kindMind >= 30000) {
                    vari.atk = 500;
                    $gameVariables.setValue(18, vari.atk);
                    $gameVariables.setValue(10, 150000);
                    $gameVariables.setValue(279, 'The determination to save someone transformed into a blade of light and tore through the adversity in front!');                };
            } else {
                $gameVariables.setValue(18, 1000);
                $gameVariables.setValue(10, 300000);
                $gameVariables.setValue(279, 'The will to save someone transformed into a blade of light and cleaved through the adversity in front!');            }
            break;

        case 2:
            if (vari.kindMind >= 400 && vari.kindMind < 2500) {
                vari.atk = 100;
                $gameVariables.setValue(18, vari.atk);
                $gameVariables.setValue(10, 200);
                if ($gameSwitches.value(77)) { $gameVariables.setValue(279, 'The magical light unleashed by Levantia struck \\v[101].'); }
                if ($gameSwitches.value(78)) { $gameVariables.setValue(279, 'The magical light unleashed by Levantia struck \\v[82].'); }
                if ($gameSwitches.value(79)) { $gameVariables.setValue(279, 'The magical light unleashed by Levantia struck \\v[86].'); }
                if ($gameSwitches.value(80)) { $gameVariables.setValue(279, 'The magical light unleashed by Levantia struck \\v[90].'); }
            } else if (vari.kindMind >= 2500 && vari.kindMind < 20000) {
                vari.atk = 100;
                $gameVariables.setValue(18, vari.atk);
                $gameVariables.setValue(10, 5000);
                if ($gameSwitches.value(77)) { $gameVariables.setValue(279, 'The power of wind summoned by Levantia blows away the fighting spirit of \\v[101].'); }
                if ($gameSwitches.value(78)) { $gameVariables.setValue(279, 'The power of wind summoned by Levantia blows away the fighting spirit of \\v[82].'); }
                if ($gameSwitches.value(79)) { $gameVariables.setValue(279, 'The power of wind summoned by Levantia blows away the fighting spirit of \\v[86].'); }
                if ($gameSwitches.value(80)) { $gameVariables.setValue(279, 'The power of wind summoned by Levantia blows away the fighting spirit of \\v[90].'); }
            } else if (vari.kindMind >= 20000 && vari.kindMind < 70000) {
                vari.atk = 150;
                $gameVariables.setValue(18, vari.atk);
                $gameVariables.setValue(10, 40000);
                $gameVariables.setValue(279, 'Gleaming flashes of light raced through the enemy ranks, paralyzing the electrified foes!');
            } else if (vari.kindMind >= 70000) {
                vari.atk = 200;
                $gameSwitches.setValue(36, true);
                $gameVariables.setValue(18, vari.atk);
                $gameVariables.setValue(10, 150000);
                $gameVariables.setValue(279, 'The purifying flames imbued with Levantias determination engulf and cleanse the wicked presence, completely incinerating it!');
            }
            break;

        case 3:
            if (vari.badMind >= 100 && vari.badMind < 800) {
                vari.atk = 150;
                $gameVariables.setValue(18, vari.atk);
                $gameVariables.setValue(14, 400);
                if ($gameSwitches.value(77)) { $gameVariables.setValue(279, 'The sharp sword swung by Levantia cuts through the body of \\v[101].'); }
                if ($gameSwitches.value(78)) { $gameVariables.setValue(279, 'The sharp sword swung by Levantia cuts through the body of \\v[82].'); }
                if ($gameSwitches.value(79)) { $gameVariables.setValue(279, 'The sharp sword swung by Levantia cuts through the body of \\v[86].'); }
                if ($gameSwitches.value(80)) { $gameVariables.setValue(279, 'The sharp sword swung by Levantia cuts through the body of \\v[90].'); }
            } else if (vari.badMind >= 800 && vari.badMind < 5000) {
                vari.atk = 250;
                $gameVariables.setValue(18, vari.atk);
                $gameVariables.setValue(14, 9000);
                $gameVariables.setValue(279, 'Relentless barrage of attacks left numerous stab wounds on the body of the villain!');
            } else if (vari.badMind >= 5000 && vari.badMind < 30000) {
                vari.atk = 400;
                $gameVariables.setValue(18, vari.atk);
                $gameVariables.setValue(14, 60000);
                $gameVariables.setValue(279, 'The surrounding area exploded indiscriminately from a powerful blow swung from above!');
            } else if (vari.badMind >= 30000) {
                vari.atk = 750;
                $gameVariables.setValue(18, vari.atk);
                $gameVariables.setValue(14, 150000);
                $gameVariables.setValue(279, 'The relentless justice that defeats evil transforms into a sword of azure flames and cleaves everything before it in half!');
            }
            break;

        case 4:
            if (vari.badMind >= 200 && vari.badMind < 1500) {
                vari.atk = 100;
                $gameVariables.setValue(18, vari.atk);
                $gameVariables.setValue(14, 800);
                if ($gameSwitches.value(77)) { $gameVariables.setValue(279, 'The magical arrow released by Levantia pierced through \\v[101]!'); }
                if ($gameSwitches.value(78)) { $gameVariables.setValue(279, 'The magical arrow released by Levantia pierced through \\v[82]!'); }
                if ($gameSwitches.value(79)) { $gameVariables.setValue(279, 'The magical arrow released by Levantia pierced through \\v[86]!'); }
                if ($gameSwitches.value(80)) { $gameVariables.setValue(279, 'The magical arrow released by Levantia pierced through \\v[90]!'); }
            } else if (vari.badMind >= 1500 && vari.badMind < 10000) {
                vari.atk = 150;
                $gameVariables.setValue(18, vari.atk);
                $gameVariables.setValue(14, 20000);
                if ($gameSwitches.value(77)) { $gameVariables.setValue(279, 'Following Levantias gesture, blades of wind ruthlessly cut through the entire body of \\v[101]!'); }
                if ($gameSwitches.value(78)) { $gameVariables.setValue(279, 'Following Levantias gesture, blades of wind ruthlessly cut through the entire body of \\v[82]!'); }
                if ($gameSwitches.value(79)) { $gameVariables.setValue(279, 'Following Levantias gesture, blades of wind ruthlessly cut through the entire body of \\v[86]!'); }
                if ($gameSwitches.value(80)) { $gameVariables.setValue(279, 'Following Levantias gesture, blades of wind ruthlessly cut through the entire body of \\v[90]!'); }
            } else if (vari.badMind >= 10000 && vari.badMind < 50000) {
                vari.atk = 200;
                $gameSwitches.setValue(36, true);
                $gameVariables.setValue(18, vari.atk);
                $gameVariables.setValue(14, 150000);
                $gameVariables.setValue(279, 'A large hand rising from the ground lightly crushed the insignificant insects upon its palm.');
            } else if (vari.badMind >= 50000) {
                vari.atk = 350;
                $gameSwitches.setValue(36, true);
                $gameVariables.setValue(18, vari.atk);
                $gameVariables.setValue(14, 150000);
                $gameVariables.setValue(279, 'The absolute zero frozen terrain froze everything except for Levantia, and a calm silence permeated the surroundings...');
            }
            break;
    }
}


function manyActChecker(v) {
    switch (v.act) {
        case 1: if (!v.Atk_1) { v.manyActInc = 1000; }; break;
        case 2: if (!v.Atk_2) { v.manyActInc = 1000; }; break;
        case 3: if (!v.Atk_3) { v.manyActInc = 1000; }; break;
        case 4: if (!v.Atk_4) { v.manyActInc = 1000; }; break;
        case 5: if (!v.Bar_1) { v.manyActInc = 1000; }; break;
        case 6: if (!v.Shi_1) { v.manyActInc = 1000; }; break;
        case 7: if (!v.Hea_1) { v.manyActInc = 1000; }; break;
        case 8: if (!v.Eva_1) { v.manyActInc = 1000; }; break;
        case 13: if (!v.Bar_2) { v.manyActInc = 1000; }; break;
        case 14: if (!v.Shi_2) { v.manyActInc = 1000; }; break;
        case 15: if (!v.Hea_2) { v.manyActInc = 1000; }; break;
        case 16: if (!v.Eva_2) { v.manyActInc = 1000; }; break;
    }
}

function leader1checker(v) {
    switch (v.act) {
        case 1: v.wantActInc = 200; break;
        case 2: v.wantActInc = 200; break;
        case 3: v.wantActInc = 200; break;
        case 4: v.wantActInc = 200; break;
        case 5: v.wantActInc = 200; break;
        case 6: v.wantActInc = 200; break;
        case 7: v.wantActInc = 200; break;
        case 8: v.wantActInc = 200; break;
        case 13: v.wantActInc = 200; break;
        case 14: v.wantActInc = 200; break;
        case 15: v.wantActInc = 200; break;
        case 16: v.wantActInc = 200; break;
        default: v.wantActInc = 0;
    }
}

function wantActCreator(v) {
    v.wantAct = Math.floor(Math.random() * 12 + 1);

    switch (v.wantAct) {
        case 9: v.wantAct = 13; break;
        case 10: v.wantAct = 14; break;
        case 11: v.wantAct = 15; break;
        case 12: v.wantAct = 16; break;
    }
    $gameVariables.setValue(15, v.wantAct);
}


function wantActChecker(v) {
    if (v.act == v.wantAct) {
        switch (v.act) {
            case 1: v.wantActInc = 200; break;
            case 2: v.wantActInc = 200; break;
            case 3: v.wantActInc = 200; break;
            case 4: v.wantActInc = 200; break;
            case 5: v.wantActInc = 200; break;
            case 6: v.wantActInc = 200; break;
            case 7: v.wantActInc = 200; break;
            case 8: v.wantActInc = 200; break;
            case 13: v.wantActInc = 200; break;
            case 14: v.wantActInc = 200; break;
            case 15: v.wantActInc = 200; break;
            case 16: v.wantActInc = 200; break;
            default: v.wantActInc = 0;
        }
        $gameVariables.setValue(16, v.wantActInc);
    }
    if (v.act == v.penalty) {
        switch (v.penalty) {
            case 1: v.penaltyInc = 200; break;
            case 2: v.penaltyInc = 200; break;
            case 3: v.penaltyInc = 200; break;
            case 4: v.penaltyInc = 200; break;
            case 5: v.penaltyInc = 200; break;
            case 6: v.penaltyInc = 200; break;
            case 7: v.penaltyInc = 200; break;
            case 8: v.penaltyInc = 200; break;
            case 13: v.penaltyInc = 200; break;
            case 14: v.penaltyInc = 200; break;
            case 15: v.penaltyInc = 200; break;
            case 16: v.penaltyInc = 200; break;
            default: v.penaltyInc = 0;
        }
    }
}

