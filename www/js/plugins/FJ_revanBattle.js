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
                    if ($gameSwitches.value(77)) { $gameVariables.setValue(279, 'レヴァンティアが振り回した鋭い剣が\\v[101]をとらえた。'); }
                    if ($gameSwitches.value(78)) { $gameVariables.setValue(279, 'レヴァンティアが振り回した鋭い剣が\\v[82]をとらえた。'); }
                    if ($gameSwitches.value(79)) { $gameVariables.setValue(279, 'レヴァンティアが振り回した鋭い剣が\\v[86]をとらえた。'); }
                    if ($gameSwitches.value(80)) { $gameVariables.setValue(279, 'レヴァンティアが振り回した鋭い剣が\\v[90]をとらえた。'); }
                } else if (vari.kindMind >= 800 && vari.kindMind < 5000) {
                    vari.atk = 150;
                    $gameVariables.setValue(18, vari.atk);
                    $gameVariables.setValue(10, 9000);
                    if ($gameSwitches.value(77)) { $gameVariables.setValue(279, '意思を貫かんとする絶え間ない連撃が\\v[101]に向かって降り注ぐ。'); }
                    if ($gameSwitches.value(78)) { $gameVariables.setValue(279, '意思を貫かんとする絶え間ない連撃が\\v[82]に向かって降り注ぐ。'); }
                    if ($gameSwitches.value(79)) { $gameVariables.setValue(279, '意思を貫かんとする絶え間ない連撃が\\v[86]に向かって降り注ぐ。'); }
                    if ($gameSwitches.value(80)) { $gameVariables.setValue(279, '意思を貫かんとする絶え間ない連撃が\\v[90]に向かって降り注ぐ。'); }
                } else if (vari.kindMind >= 5000 && vari.kindMind < 30000) {
                    vari.atk = 250;
                    $gameVariables.setValue(18, vari.atk);
                    $gameVariables.setValue(10, 60000);
                    if ($gameSwitches.value(77)) { $gameVariables.setValue(279, '目で追えない一閃が\\v[101]の中心を正しく貫いた！'); }
                    if ($gameSwitches.value(78)) { $gameVariables.setValue(279, '目で追えない一閃が\\v[82]の中心を正しく貫いた！'); }
                    if ($gameSwitches.value(79)) { $gameVariables.setValue(279, '目で追えない一閃が\\v[86]の中心を正しく貫いた！'); }
                    if ($gameSwitches.value(80)) { $gameVariables.setValue(279, '目で追えない一閃が\\v[90]の中心を正しく貫いた！'); }
                } else if (vari.kindMind >= 30000) {
                    vari.atk = 500;
                    $gameVariables.setValue(18, vari.atk);
                    $gameVariables.setValue(10, 150000);
                    $gameVariables.setValue(279, '誰かを救うための意思が光の刃となって、目の前の苦難を切り裂いた！');
                };
            } else {
                $gameVariables.setValue(18, 1000);
                $gameVariables.setValue(10, 300000);
                $gameVariables.setValue(279, '誰かを救うための意思が光の刃となって、目の前の苦難を切り裂いた！');
            }
            break;

        case 2:
            if (vari.kindMind >= 400 && vari.kindMind < 2500) {
                vari.atk = 100;
                $gameVariables.setValue(18, vari.atk);
                $gameVariables.setValue(10, 200);
                if ($gameSwitches.value(77)) { $gameVariables.setValue(279, 'レヴァンティアが放つ魔力の光が\\v[101]に的中した。'); }
                if ($gameSwitches.value(78)) { $gameVariables.setValue(279, 'レヴァンティアが放つ魔力の光が\\v[82]に的中した。'); }
                if ($gameSwitches.value(79)) { $gameVariables.setValue(279, 'レヴァンティアが放つ魔力の光が\\v[86]に的中した。'); }
                if ($gameSwitches.value(80)) { $gameVariables.setValue(279, 'レヴァンティアが放つ魔力の光が\\v[90]に的中した。'); }
            } else if (vari.kindMind >= 2500 && vari.kindMind < 20000) {
                vari.atk = 100;
                $gameVariables.setValue(18, vari.atk);
                $gameVariables.setValue(10, 5000);
                if ($gameSwitches.value(77)) { $gameVariables.setValue(279, 'レヴァンティアが呼び起こす風の力が\\v[101]の戦意を吹き飛ばす。'); }
                if ($gameSwitches.value(78)) { $gameVariables.setValue(279, 'レヴァンティアが呼び起こす風の力が\\v[82]の戦意を吹き飛ばす。'); }
                if ($gameSwitches.value(79)) { $gameVariables.setValue(279, 'レヴァンティアが呼び起こす風の力が\\v[86]の戦意を吹き飛ばす。'); }
                if ($gameSwitches.value(80)) { $gameVariables.setValue(279, 'レヴァンティアが呼び起こす風の力が\\v[90]の戦意を吹き飛ばす。'); }
            } else if (vari.kindMind >= 20000 && vari.kindMind < 70000) {
                vari.atk = 150;
                $gameVariables.setValue(18, vari.atk);
                $gameVariables.setValue(10, 40000);
                $gameVariables.setValue(279, '煌めく閃光が敵陣を走り、感電された敵をマヒさせた！');
            } else if (vari.kindMind >= 70000) {
                vari.atk = 200;
                $gameSwitches.setValue(36, true);
                $gameVariables.setValue(18, vari.atk);
                $gameVariables.setValue(10, 150000);
                $gameVariables.setValue(279, 'レヴァンティアの意思のこもった破魔の炎が邪悪な存在を焼き尽くして浄化する！');
            }
            break;

        case 3:
            if (vari.badMind >= 100 && vari.badMind < 800) {
                vari.atk = 150;
                $gameVariables.setValue(18, vari.atk);
                $gameVariables.setValue(14, 400);
                if ($gameSwitches.value(77)) { $gameVariables.setValue(279, 'レヴァンティアが振り回した鋭い剣が\\v[101]の体を切り刻む。'); }
                if ($gameSwitches.value(78)) { $gameVariables.setValue(279, 'レヴァンティアが振り回した鋭い剣が\\v[82]の体を切り刻む。'); }
                if ($gameSwitches.value(79)) { $gameVariables.setValue(279, 'レヴァンティアが振り回した鋭い剣が\\v[86]の体を切り刻む。'); }
                if ($gameSwitches.value(80)) { $gameVariables.setValue(279, 'レヴァンティアが振り回した鋭い剣が\\v[90]の体を切り刻む。'); }
            } else if (vari.badMind >= 800 && vari.badMind < 5000) {
                vari.atk = 250;
                $gameVariables.setValue(18, vari.atk);
                $gameVariables.setValue(14, 9000);
                $gameVariables.setValue(279, '加減なき連撃がヴィランの体に数多くの刺し傷を残した！');
            } else if (vari.badMind >= 5000 && vari.badMind < 30000) {
                vari.atk = 400;
                $gameVariables.setValue(18, vari.atk);
                $gameVariables.setValue(14, 60000);
                $gameVariables.setValue(279, '上空から振り回された強靭な一撃に周辺が無差別的に爆散した！');
            } else if (vari.badMind >= 30000) {
                vari.atk = 750;
                $gameVariables.setValue(18, vari.atk);
                $gameVariables.setValue(14, 150000);
                $gameVariables.setValue(279, '悪を討伐する苛烈な正義が蒼炎の剣となって目の前のすべてを両断する！');
            }
            break;

        case 4:
            if (vari.badMind >= 200 && vari.badMind < 1500) {
                vari.atk = 100;
                $gameVariables.setValue(18, vari.atk);
                $gameVariables.setValue(14, 800);
                if ($gameSwitches.value(77)) { $gameVariables.setValue(279, 'レヴァンティアが放つ魔力の矢が\\v[101]を貫いた！'); }
                if ($gameSwitches.value(78)) { $gameVariables.setValue(279, 'レヴァンティアが放つ魔力の矢が\\v[82]を貫いた！'); }
                if ($gameSwitches.value(79)) { $gameVariables.setValue(279, 'レヴァンティアが放つ魔力の矢が\\v[86]を貫いた！'); }
                if ($gameSwitches.value(80)) { $gameVariables.setValue(279, 'レヴァンティアが放つ魔力の矢が\\v[90]を貫いた！'); }
            } else if (vari.badMind >= 1500 && vari.badMind < 10000) {
                vari.atk = 150;
                $gameVariables.setValue(18, vari.atk);
                $gameVariables.setValue(14, 20000);
                if ($gameSwitches.value(77)) { $gameVariables.setValue(279, 'レヴァンティアの手ぶりに従い、風の刃が\\v[101]の全身を加減なく切り刻む！'); }
                if ($gameSwitches.value(78)) { $gameVariables.setValue(279, 'レヴァンティアの手ぶりに従い、風の刃が\\v[82]の全身を加減なく切り刻む！'); }
                if ($gameSwitches.value(79)) { $gameVariables.setValue(279, 'レヴァンティアの手ぶりに従い、風の刃が\\v[86]の全身を加減なく切り刻む！'); }
                if ($gameSwitches.value(80)) { $gameVariables.setValue(279, 'レヴァンティアの手ぶりに従い、風の刃が\\v[90]の全身を加減なく切り刻む！'); }
            } else if (vari.badMind >= 10000 && vari.badMind < 50000) {
                vari.atk = 200;
                $gameSwitches.setValue(36, true);
                $gameVariables.setValue(18, vari.atk);
                $gameVariables.setValue(14, 150000);
                $gameVariables.setValue(279, '地面から浮き上がった大きい手が、掌の上の虫けらどもを軽く踏みつぶした。');
            } else if (vari.badMind >= 50000) {
                vari.atk = 350;
                $gameSwitches.setValue(36, true);
                $gameVariables.setValue(18, vari.atk);
                $gameVariables.setValue(14, 150000);
                $gameVariables.setValue(279, '絶対零度の凍土がレヴァンティア以外のすべてを凍らせ、静寂な平穏が漂った…。');
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

