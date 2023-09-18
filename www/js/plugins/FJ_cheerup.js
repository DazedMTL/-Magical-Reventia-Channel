function cheerUp() {
    array = ['27歳ニートオオハラの、レヴァンティアガチコイの思いが届いた！',
        '32歳警察官ダケダの、市民の安寧を願う思いが届いた！',
        '8歳魔法少女になりたいヒメノの、レヴァンティアへの憧れの思いが届いた！',
        '45歳ラーメンマスター高橋の、みんなにおいしいラーメンを作ってあげたい思いが届いた！',
        '17歳高校生オガワの、初々しい初恋の思いが届いた！',
        '63歳引退した教師マツモトの、若者の未来にかける思いが届いた！',
        '54歳ゲーム会社社長オヤマの、レヴァンティアを素材にするゲームを作りたい思いが届いた！',
        '41歳科学者ナカモトの、常温超電導武器を作ってあげたい思いが届いた！',
        '23歳海外ニキジェイムスの、国境を超えた応援の思いが届いた！',
        '15歳デュフチューバーになりたいタナカの、レヴァンティアへの憧れの思いが届いた！',
    ]
    switch ($gameVariables.value(275)) {
        case 0:
            $gameVariables.setValue(276, array[0]);
            break;

        case 1:
            $gameVariables.setValue(276, array[1]);
            break;

        case 2:
            $gameVariables.setValue(276, array[2]);
            break;

        case 3:
            $gameVariables.setValue(276, array[3]);
            break;

        case 4:
            $gameVariables.setValue(276, array[4]);
            break;

        case 5:
            $gameVariables.setValue(276, array[5]);
            break;

        case 6:
            $gameVariables.setValue(276, array[6]);
            break;

        case 7:
            $gameVariables.setValue(276, array[7]);
            break;

        case 8:
            $gameVariables.setValue(276, array[8]);
            break;

        case 9:
            $gameVariables.setValue(276, array[9]);
            $gameVariables.setValue(275, -1);
            break;
    }
}










