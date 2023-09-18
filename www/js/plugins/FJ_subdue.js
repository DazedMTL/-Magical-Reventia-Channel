function subdueFade() {
    const vari = {
        machoCount: $gameVariables.value(46),
        leaderCount: $gameVariables.value(47),
        succuCount: $gameVariables.value(48),
        slimeCount: $gameVariables.value(49),

        hCount: $gameVariables.value(11),
        statusA: $gameSwitches.value(114),
        statusB: $gameSwitches.value(115),
        statusC: $gameSwitches.value(116),
        statusD: $gameSwitches.value(117),
        statusE: $gameSwitches.value(118),

        machoSwitch: $gameSwitches.value(61),
        leaderSwitch: $gameSwitches.value(62),
        succuSwitch: $gameSwitches.value(63),
        slimeSwitch: $gameSwitches.value(64),

    };

    if (vari.machoSwitch) { machoSubdue(vari); } else if (vari.leaderSwitch) { leaderSubdue(vari); } else if (vari.succuSwitch) { succuSubdue(vari); } else if (vari.slimeSwitch) { slimeSubdue(vari); }
}

function machoSubdue(v) { let text = []; if (v.machoCount == 1) { macho2ndText(text, v); } else if (v.machoCount == 2) { macho3rdText(text, v); } else if (v.machoCount == 3) { macho4thText(text, v); } for (let i = 0; i < text.length; i++) { $gameVariables.setValue(288 + i, '\\nc<>' + text[i]); } }
function leaderSubdue(v) { let text = []; if (v.leaderCount == 1) { leader2ndText(text, v); } else if (v.leaderCount == 2) { leader3rdText(text, v); } else if (v.leaderCount == 3) { leader4thText(text, v); } for (let i = 0; i < text.length; i++) { $gameVariables.setValue(288 + i, '\\nc<>' + text[i]); } }
function succuSubdue(v) { let text = []; if (v.succuCount == 1) { succu2ndText(text, v); } else if (v.succuCount == 2) { succu3rdText(text, v); } else if (v.succuCount == 3) { succu4thText(text, v); } for (let i = 0; i < text.length; i++) { $gameVariables.setValue(288 + i, '\\nc<>' + text[i]); } }
function slimeSubdue(v) { let text = []; if (v.slimeCount == 1) { slime2ndText(text, v); } else if (v.slimeCount == 2) { slime3rdText(text, v); } else if (v.slimeCount == 3) { slime4thText(text, v); } for (let i = 0; i < text.length; i++) { $gameVariables.setValue(288 + i, '\\nc<>' + text[i]); } }

function macho2ndText(text, v) {
    switch (v.hCount) {

        case 1:
            text.push('ブラック・マッスルのつかみ！\nレヴァンティアは不意を突かれた。');
            text.push('レヴァンティアの手足がブラック・マッスルにつかまった！');
            break;

        case 2:
            text.push('レヴァンティアは一瞬、ブラック・マッスルの動きを逃してしまった。\nブラック・マッスルのつかみ！');
            text.push('レヴァンティアの手足がブラック・マッスルにつかまった！');
            text.push('レヴァンティアの危機にチャット欄がざわついている…。');
            break;

        case 3:
            text.push('ブラック・マッスルのつかみ！\nレヴァンティアは反応できなかった。');
            text.push('レヴァンティアの手足がブラック・マッスルにつかまった！');
            text.push('ブラック・マッスルの手がレヴァンティアのレオタードをずらした！');
            text.push('レヴァンティアのアソコが丸見えになった…。');
            break;

        case 4:
            text.push('ブラック・マッスルの指がレヴァンティアの膣内に無理やり潜り込んだ！');
            text.push('魔法障壁がブラック・マッスルの指の前に立ちはだかった！');
            text.push('ブラック・マッスルの力を前にし、\n魔法障壁は簡単に崩れてしまった…。');
            break;

        case 5:

            text.push('太い指がレヴァンティアの中でうごめいている。');
            text.push('ブラック・マッスルは何かを探すように\n膣内のあちこちをこすっている….。');
            break;

        case 6:
            text.push('太い指がレヴァンティアの中を少しずつ往復している。');
            text.push('レヴァンティアは止めようとしたが、\n水気を帯びたマンコではブラック・マッスルの指の力に抵抗できなかった。');
            text.push('ブラック・マッスルの指がレヴァンティアのＧスポットを圧迫した！');
            break;
    }
}

function macho3rdText(text, v) {
    switch (v.hCount) {

        case 1:
            text.push('ブラック・マッスルの拳が風をまとって暴れた。');
            text.push('レヴァンティアは正面からブラック・マッスルの攻撃を受け止めた！');
            text.push('衝撃の余波で、レヴァンティアのスーツが破れてしまった…。');
            break;

        case 2:
            text.push('ブラック・マッスルの強烈な拳が空気を裂きながら押し寄せた。');
            text.push('だが、レヴァンティアは間一髪で回避に成功した…！');
            text.push('衝撃の余波で、レヴァンティアのスーツが破れてしまった…。');
            if (v.statusA) {
                text.push('レヴァンティアはブラック・マッスルの前に堂々と立った！');
                text.push('チャット欄はレヴァンティアへの励ましと応援でいっぱいになった。');
            }
            if (v.statusB || v.statusC) {
                text.push('レヴァンティアはブラック・マッスルの前に堂々と立った！…胸を隠して。');
                text.push('チャット欄はレヴァンティアの胸で盛り上がっている…。');
            }
            if (v.statusA) {
                text.push('レヴァンティアは周りの視線を気にしている…。');
                text.push('チャット欄はレヴァンティアへの淫乱なセクハラ発言が寄せられている…。');
            }
            break;

        case 3:
            if (v.statusD) {
                text.push('視線を意識したせいでレヴァンティアの動きが乱れた。');
            }
            text.push('ブラック・マッスルの手がレヴァンティアをつかんだ！');
            text.push('レヴァンティアは素早く振り払ったが、\nブラック・マッスルの別の手にレオタードをつかまれてしまった…。');
            text.push('レヴァンティアのレオタードが破れた！');
            text.push('レヴァンティアのツルツルしたマンコが丸見えになった…。');
            if (v.statusB || v.statusC) {
                text.push('レヴァンティアは羞恥心に耐えられず\nしゃがみこんでしまった…。');
            };
            if (v.statusD) {
                text.push('レヴァンティアは慌てて手で股を隠した。');
            }
            break;

        case 4:
            if (v.statusA) {
                text.push('レヴァンティアはブラック・マッスルの下に\n敷かれてしまった…。');
            };
            if (v.statusD) {
                text.push('思い切り縮こまっているせいで\nレヴァンティアの動きはめちゃくちゃだ…。');
                text.push('レヴァンティアは下敷きになってしまった。');
            };
            if (v.statusA || v.statusD) {
                text.push('ブラック・マッスルの指が\nレヴァンティアのマンコに無理やり潜り込んだ！');
            }
            if (v.statusA) {

                text.push('魔法障壁がブラック・マッスルの指の前に立ちはだかった。'
                );
                text.push('ブラック・マッスルはいとも簡単に魔法障壁を押し砕いてしまった…。');
            };
            if (v.statusD) {
                text.push('しかし、魔法障壁はブラック・マッスルが軽く触っただけで\n簡単に砕けてしまった…。');
            };
            if (v.statusB || v.statusC) {
                text.push('レヴァンティアは必死に股を隠している！');
                text.push('ブラック・マッスルはレヴァンティアの攻撃を気にもせず襲いかかった。');
                text.push('レヴァンティアは太ももを締めて下半身を隠そうとした！');
                text.push('しかし、ブラック・マッスルの手は閉じられた太ももを力ずくで開いてしまった…。');
            };
            break;

        case 5:

            if (v.statusA || v.statusB) {
                text.push('太い指がレヴァンティアの中でうごめいている。');
                text.push('ブラック・マッスルは何かを探すように膣内のあちこちをこすっている…。');
            }
            if (v.statusC) {

                text.push('太い指がレヴァンティアのマンコをほじくる！');
                text.push('レヴァンティアは脚を上げてどうにか隠そうとしたが、\nすでに露骨な水音が漏れていた…。');
                text.push('ブラック・マッスルはマンコを突いていた指を\nレヴァンティアに見せつけた。');
                text.push('２本の指の間からヌルヌルとした愛液がトロリと垂れる…。');
            }
            if (v.statusD) {
                text.push('太い指がレヴァンティアの膣内を愛撫している。');
                text.push('ブラック・マッスルは何かを探すように\n膣内のあちこちをこすっている…。');
                text.push('ブラック・マッスルはマンコを突いていた指を\nレヴァンティアに見せつけた。');
                text.push('２本の指の間にねっとりとした糸が引いている…。');
            }
            break;

        case 6:
            if (v.statusA) {
                text.push('レヴァンティアは必死にもがいた！');
                text.push('しかし、横腹を足で蹴っても\nブラック・マッスルの肉厚な体はビクともしなかった…。');
                text.push('巨大な肉棒がレヴァンティアの中に少しずつ潜り込み始めた。');
            } if (v.statusB) {
                text.push('限界まで膨れ上がった巨大な勃起チンポが\nレヴァンティアのへその上に影を作った…。');
                text.push('レヴァンティアは恐怖に怯え必死であがいた！');
                text.push('巨大な肉棒がレヴァンティアの蜜壺を一気に突いた！');
            } if (v.statusA || v.statusB) {
                text.push('レヴァンティアは処女を失った。');
            }; if (v.statusC) {
                text.push('ブラック・マッスルはレヴァンティアのマンコを激しく突いている！');
                text.push('気持ちいいところを突かれる快感に\nレヴァンティアは思わず集中してしまった…。');
                text.push('ブラック・マッスルの指がＧスポットをぐっと押した！');
                text.push('レヴァンティアは手マンでイってしまった…。');
            } if (v.statusD) {
                text.push('限界まで膨れ上がった巨大な勃起チンポが\nレヴァンティアのへその上に影を作った…。');
                text.push('レヴァンティアはチンポに釘付けになっている…。');
                text.push('巨大な肉棒がレヴァンティアの蜜壺を一気に突いた！');
                text.push('レヴァンティアは犯されている…。');
            }
            break;
        case 7:
            if (v.statusD) {
                text.push('これまで感じたことのない快楽にレヴァンティアは混乱している…。');
            }; if (v.statusA) {
                text.push('膣内を叩くと快感が全身に広がった。');
            }; if (v.statusB) {
                text.push('内臓を突き上げる衝撃に\nレヴァンティアは空気の抜けたような喘ぎ声を吐き出した。');
                text.push('レヴァンティアは命の危機を感じ、\n無意識に魔力を集めた！');
                text.push('レヴァンティアの耐久力がアップした。');
            } if (v.statusA || v.statusB) {
                text.push('初めての感覚にレヴァンティアは混乱している…。');
            }; if (v.statusA) {
                text.push('ブラック・マッスルはレヴァンティアを\n押し潰すようにピストンを始めた！');
                text.push('膣の中を全てほじくられるような快感にレヴァンティアは悶えた。');
            } if (v.statusC) {
                text.push('限界まで膨れ上がった巨大な勃起チンポが\nレヴァンティアのへその上に影を作った…。');
                text.push('レヴァンティアはとっさに太ももを大きく広げた――が再び閉じた。');
                text.push('しかし、レヴァンティアの股はすでにブラック・マッスルの体で塞がれている…。');
                text.push('巨大なチンポがレヴァンティアの中まで一気に潜り込んだ。');
            }
            break;
        case 8:
            if (v.statusA || v.statusB || v.statusD) {
                text.push('ブラック・マッスルは押さえつけるようにチンポをねじ込んだ！');
            }; if (v.statusC) {
                text.push('巨大な肉棒がレヴァンティアの中を容赦なく叩きつけた。');
                text.push('不意打ちの快感に、レヴァンティアの頭の中で火花が散る。');
                text.push('ブラック・マッスルは生意気なメスに腰を打ち付けた！');
                text.push('レヴァンティアはチンポに突かれ、謝罪の言葉を並べた…。');
            }
            break;
        case 9:
            if (v.statusA || v.statusB) {

                text.push('レヴァンティアはブラック・マッスルの下から抜け出すためにあがいた！');
                text.push('ブラック・マッスルはレヴァンティアにチンポを挿したまま射精した！');
                text.push('全身を押さえつけられたまま子宮を満たされる快感に\nレヴァンティアは抵抗もできず絶頂した。');
                text.push('絶頂の影響でレヴァンティアの魔力が大きく膨れ上がった！');
            }; if (v.statusA) {
                text.push('だが、何の効果もなかった。..');
            }
            if (v.statusB) {
                text.push('何の効果もなかった。..');
            } if (v.statusC) {
                text.push('ブラック・マッスルは押さえつけるようにチンポをねじ込んだ！');
            }; if (v.statusD) {
                text.push('レヴァンティアはブラック・マッスルの下で慈悲を乞うている。\nブラック・マッスルはレヴァンティアにチンポを挿したまま射精した！');
                text.push('全身を押さえつけられたまま子宮を満たされる快感に、\nレヴァンティアは感謝の言葉をこぼしながら絶頂した…。');
            }
            break;
        case 10:
            if (v.statusA || v.statusB) {
                text.push('たくましい筋肉質の肉体が、レヴァンティアをずっしりと押さえつけた。');
                text.push('ブラック・マッスルは拳を握り、レヴァンティアの腹に振り下ろした。');
                text.push('ブラック・マッスルは、縮こまったレヴァンティアにチンポを押しつけた。');
                text.push('レヴァンティアはブラック・マッスルに犯されている.');
            }; if (v.statusC) {
                text.push('レヴァンティアはブラック・マッスルの下で慈悲を乞うている.');
                text.push('ブラック・マッスルはレヴァンティアにチンポを挿したまま射精した！');
                text.push('全身を押さえつけられたまま子宮を満たされる快感に、\nレヴァンティアは抵抗もできず絶頂した.');
                text.push('絶頂の影響でレヴァンティアの魔力が大きく膨れ上がった!');
                text.push('しかし、魔力の衝突はさほど起こらなかった….');
            } if (v.statusD) {
                text.push('レヴァンティアはオスに媚びを売るように脚を広げている….');
                text.push('ブラック・マッスルは一気に奥までチンポをねじ込んだ!');
            }
            break;
        case 11:
            if (v.statusA || v.statusD) {
                text.push('ブラック・マッスルのピストンがレヴァンティアの奥を刺激している！');
            } if (v.statusA || v.statusB || v.statusD) {
                text.push('巨大なチンポがレヴァンティアの子宮の裏側を突き上げた！');
                text.push('レヴァンティアはブラック・マッスルに犯され、嬌声をこぼしている!');
            }; if (v.statusA || v.statusD) {
                text.push('ブラック・マッスルのピストンで愛液が床に飛び散り、シミを作った…。');
            } if (v.statusC) {
                text.push('たくましい筋肉質の肉体が、レヴァンティアをずっしりと押さえつけた。');
                text.push('ブラック・マッスルは拳を握り、レヴァンティアの腹に振り下ろした。');
                text.push('ブラック・マッスルは一気に奥までチンポをねじ込んだ!');
                text.push('ブラック・マッスルはチンポを挿したまま何もしなかった.');
                text.push('レヴァンティアはマンコの感覚に集中していた.');
            }
            break;
    }
} function macho4thText(text, v) {
    switch (v.hCount) {
        case 1:
            if (v.statusA || v.statusD) {
                text.push('ブラック・マッスルの強烈な連撃がレヴァンティアに放たれた！');
                text.push('レヴァンティアはギリギリのところで体を飛ばし、\nブラックマッスルの攻撃を回避した.');
                text.push('しかし、攻撃を回避した余波でスーツが破れてしまった….');
            } if (v.statusC) {
                text.push('ブラック・マッスルの強烈な連撃がレヴァンティアに放たれた!');
                text.push('レヴァンティアはギリギリのところで体を飛ばし、\nブラックマッスルの攻撃を回避した.');
                text.push('しかし、攻撃を回避した余波でスーツが破れてしまった….');
            }
            break;
        case 2:
            if (v.statusA || v.statusD) {
                text.push('レヴァンティアは相手の攻撃に合わせて素早く走り出した！');
                text.push('レヴァンティアの剣が相手の胸に長い傷痕を残した!');
                text.push('ブラック・マッスルの手に見慣れた何かが握られている.');
                text.push('レヴァンティアが視線を下ろすと、\nビリビリに破れた上衣が目に入った!');
            } if (v.statusD) {
                text.push('レヴァンティアはとっさに胸を隠した。');
            }; if (v.statusC || v.statusE) {
                text.push('レヴァンティアは相手の攻撃に合わせて素早く走り出した！');
                text.push('レヴァンティアの剣が相手の胸に長い傷痕を残した!');
            } if (v.statusC) {
                text.push('ブラック・マッスルの手に見慣れた何かが握られている.');
            } if (v.statusE) {
                text.push('レヴァンティアは胸がスースーするのを感じた。');
            } if (v.statusC || v.statusE) {
                text.push('レヴァンティアが視線を下ろすと、\nビリビリに破れた上衣が目に入った!');
                text.push('レヴァンティアはとっさに胸を隠した.');
            }
            break;
        case 3:
            if (v.statusA || v.statusD) {
                text.push('レヴァンティアの鋭い一撃がブラック・マッスルの隙を狙って放たれた!');
                text.push('しかし、レヴァンティアの攻撃は\nブラック・マッスルの堅い防御によって阻まれている….');
                text.push('ブラック・マッスルは奇声を上げながらレヴァンティアを突き飛ばした!');
                text.push('しかし、レヴァンティアのスーツが破れため、特に成果はなかった.');
            } if (v.statusC || v.statusE) {
                text.push('レヴァンティアの鋭い一撃がブラック・マッスルの隙を狙って放たれた!');
                text.push('しかし、レヴァンティアの攻撃は\nブラック・マッスルの堅い防御によって阻まれている….');
                text.push('ブラック・マッスルは奇声を上げながらレヴァンティアを突き飛ばした!');
                text.push('しかし、レヴァンティアのスーツが破れため、特に成果はなかった.');
            }
            break;
        case 4:
            if (v.statusA || v.statusD) {
                text.push('ブラック・マッスルの手がレヴァンティアを\n包囲するかのように襲いかかってきた！');
                text.push('レヴァンティアはブラック・マッスルにつかまってしまった….');
                text.push('ブラック・マッスルの指がレヴァンティアのマンコに無理やり潜り込んだ!');
            } if (v.statusD) {
                text.push('魔法防壁がブラック・マッスルの指の前に立ちはだかった.');
            } if (v.statusA || v.statusD) {
                text.push('ブラック・マッスルはいとも簡単に魔法防壁を押し砕いてしまった…。');
            } if (v.statusC || v.statusE) {
                text.push('ブラック・マッスルの手がレヴァンティアを\n包囲するかのように襲いかかってきた！');
                text.push('レヴァンティアはブラック・マッスルにつかまってしまった….');
                text.push('ブラック・マッスルの指がレヴァンティアのマンコに堂々と潜り込んだ!');
                text.push('無防備なレヴァンティアのマンコをブラック・マッスルの太い指が搔き回した!');
            }
            break;
        case 5:
            if (v.statusA || v.statusD) {
                text.push('レヴァンティアの膣内でブラック・マッスルの指がうごめいている。');
                text.push('レヴァンティアの足蹴りがブラック・マッスルの顔に直撃した!');
                text.push('ブラック・マッスルの顔が怒りで真っ赤になっている!');
                text.push('ブラック・マッスルはレヴァンティアの腹を拳で殴った!');
                text.push('レヴァンティアは苦痛に耐えきれずぐったりとした.');
            } if (v.statusC) {
                text.push('ブラック・マッスルの太い指がレヴァンティアのＧスポットを刺激した!');
            }; if (v.statusC || v.statusE) {
                text.push('レヴァンティアの足蹴りがブラック・マッスルの顔に直撃した！');
                text.push('ブラック・マッスルは拳をぎゅっと握っている.');
            } if (v.statusE) {
                text.push('レヴァンティアは思わず口元に笑みを浮かべてしまった….')
            }; if (v.statusC || v.statusE) {
                text.push('ブラック・マッスルの拳がレヴァンティアの子宮の上に直撃した！');
            } if (v.statusC) {
                text.push('押さえつけられた子宮は、\nレヴァンティアの太ももの間に愛液をダラダラと垂れ流した….');
            } if (v.statusE) {
                text.push('押さえつけられた子宮は、\nレヴァンティアの太ももの間に愛液をダラダラと垂れ流した.')
            };
            break;
        case 6:
            if (v.statusA || v.statusD) {
                text.push('レヴァンティアはブラック・マッスルに\n両腕をつかまれたままぶら下がっている。');
            } if (v.statusA) {
                text.push('レヴァンティアは挿入を避けようと必死であがいた!');
            }; if (v.statusD) {
                text.push('熱く硬い何かがレヴァンティアの太ももの間に潜り込んだ.');
            }; if (v.statusA || v.statusD) {
                text.push('ブラック・マッスルはレヴァンティアを一気に押し倒した！');
            } if (v.statusA) {
                text.push('巨大なチンポがレヴァンティアの未経験マンコを一気に突いた!');
            } if (v.statusD) {
                text.push('巨大なチンポがレヴァンティアのマンコを一気に突いた!');
                text.push('内臓を突き上げられる衝撃に、レヴァンティアの口から喘ぎ声が漏れた.')
            }; if (v.statusC) {
                text.push('しかし、ブラック・マッスルの手はレヴァンティアの腕をつかんで持ち上げた….');
                text.push('レヴァンティアはとっさに腹を隠した!');
            } if (v.statusC || v.statusE) {
                text.push('ブラック・マッスルの拳がレヴァンティアの子宮の上に直撃した！レヴァンティアは腹を殴られて絶頂してしまった…。');
                text.push('レヴァンティアは膝を寄せてガクガクしている…。')
                text.push('膝から伸びた愛液が、レヴァンティアの足元に小さな水たまりを作った。')
                text.push('レヴァンティアは腹を殴られて絶頂してしまった…♡');
            }
            break;
        case 7:
            if (v.statusD) {
                text.push('人間離れしたチンポがレヴァンティアのマンコを力ずくでほじくった!');
            } if (v.statusA || v.statusD) {
                text.push('ブラック・マッスルの手がレヴァンティアの首をぎゅっと絞めつけた！');
                text.push('反抗を止めたレヴァンティアに、ブラックマッスルのチンポが突きささった!');
                text.push('ブラック・マッスルがチンポを突き上げると、\nレヴァンティアの頭の中で快楽の火花が散った!');
                text.push('初めての感覚にレヴァンティアは混乱している….');
            } if (v.statusC) {
                text.push('レヴァンティアはブラック・マッスルに\n両腕をつかまれたままぶら下がっている.');
            } if (v.statusE) {
                text.push('ブラック・マッスルはつかまえたレヴァンティアを反対に向けた!');
            } if (v.statusC || v.statusE) {
                text.push('熱く硬い何かがレヴァンティアの太ももの間に潜り込んだ。');
            } if (v.statusC || v.statusE) {
                text.push('巨大なチンポがレヴァンティアのマンコを一気に突いた！');
            } if (v.statusC) {
                text.push('レヴァンティアはブラック・マッスルの巨大なモノを\n慣れたようにぎゅうぎゅうと締めつけている.');
            } if (v.statusE) {
                text.push('レヴァンティアの膣内はブラック・マッスルの凶悪なチンポを愛でるように、\nぎゅっと締めつけている…♡');
            }
            break;
        case 8:
            if (v.statusA || v.statusD) {
                text.push('レヴァンティアは首を絞められたまま、\n怪物のようなチンポに犯されている…。');
                text.push('レヴァンティアの首を締めていた手が緩んだ.');
            } if (v.statusA) {
                text.push('ブラック・マッスルの手がレヴァンティアの首を再びぎゅっと絞めつけた!');
            } if (v.statusA) {
                text.push('巨大なチンポに突かれるたび、\nレヴァンティアは愛液をまき散らしている….');
            } if (v.statusD) {
                text.push('ブラック・マッスルの手がレヴァンティアの首を\n再びぎゅっと絞めつけた….');
            } if (v.statusD) {
                text.push('巨大なチンポに突かれるたび、\nレヴァンティアは愛液をまき散らしている…。');
            } if (v.statusE) {
                text.push('肉と肉のぶつかる音とレヴァンティアの嬌声が混ざり合い、\n大きく響き渡った.');
            } if (v.statusC || v.statusE) {
                text.push('ブラック・マッスルの手がレヴァンティアの首を\nぎゅっと絞めつけた！');
            } if (v.statusC) {
                text.push('反抗を止めたレヴァンティアに、\nブラックマッスルのチンポが突きささった!');
                text.push('初めての感覚にレヴァンティアは混乱している….');
            } if (v.statusE) {
                text.push('ブラック・マッスルがチンポを突き上げると、\nレヴァンティアの頭の中で快楽の火花が散った!');
                text.push('窒息の快感と被虐の興奮でレヴァンティアの頭の中は\nぐちゃぐちゃになってしまった….');
            }
            break;
        case 9:
            if (v.statusA || v.statusD) {
                text.push('レヴァンティアは脚をジタバタさせながら抵抗した！');
                text.push('しかし、ブラック・マッスルがチンポを挿し込むと、\n脚をぎゅっと折りたたんでピクピクしている….');
                text.push('パンパンになったチンポがレヴァンティアの子宮を叩く!');
                text.push('レヴァンティアはブラック・マッスルに種付けプレスをされ、\n絶頂してしまった….');
                text.push('絶頂の影響でレヴァンティアの魔力が大きく膨れ上がった.');
            } if (v.statusA) {
                text.push('だが、何の効果もなかった。.');
            } if (v.statusD) {
                text.push('だが、ブラック・マッスルは気合いで魔力の爆発に絶えた.');
            } if (v.statusC || v.statusE) {
                text.push('ブラック・マッスルはレヴァンティアの首を締めながら腰を振っている。');
            } if (v.statusC) {
                text.push('レヴァンティアのマンコは命の危機を感じ、\n目の前のオスに媚びを売っている….');
            } if (v.statusC || v.statusE) {
                text.push('ブラック・マッスルの手がレヴァンティアの首を\n殺す勢いで強く絞めつけた！');
                text.push('レヴァンティアは快楽に酔いしれたような表情をしている….');
            }
            break;
        case 10:
            if (v.statusD) {
                text.push('ブラック・マッスルの肉厚な拳が\nレヴァンティアの腹に向かって放たれる!');
                text.push('レヴァンティアは大きく身震いし、下腹部を隠した.');
                text.push('しかし、ブラック・マッスルは隠していた両腕をつかんでしまった….');
            } if (v.statusA || v.statusD) {
                text.push('ブラック・マッスルはレヴァンティアを持ち上げてチンポを押し当てた！');
            } if (v.statusA) {
                text.push('膣口が押される感覚に、\nレヴァンティアの顔が青ざめた.');
                text.push('粘り気のある水音と共に\nブラック・マッスルのモノが一気に挿し込まれた.');
            } if (v.statusA || v.statusD) {
                text.push('レヴァンティアはまた犯されている…。');
            } if (v.statusC) {
                text.push('レヴァンティアは足蹴りで抵抗しようとした！');
                text.push('しかし、ブラック・マッスルがチンポを挿し込むと、\n脚をぎゅっと折りたたんでピクピクしている….');
                text.push('巨大なチンポがレヴァンティアの膣の奥を突き上げた!');
                text.push('レヴァンティアはブラック・マッスルに種付けプレスをされ、\n絶頂してしまった….');
            } if (v.statusE) {
                text.push('ブラック・マッスルがチンポを押し当てると、\nレヴァンティアは思わず太ももを開いてしまった….');
                text.push('オスを前にして、\n発情したマンコから精液と愛液の混ざったものがトロリと垂れ落ちた.');
                text.push('ブラック・マッスルのチンポが\n一気にレヴァンティアの子宮を突き上げた!');
                text.push('ブラック・マッスルは\nレヴァンティアの腰を両手でつかんでシゴいている!');
            }
            break;
        case 11:
            if (v.statusC) {
                text.push('巨大なチンポが無防備な下腹部をぐっと押さえつけた!');
                text.push('レヴァンティアの脚が左右にゆっくりと開いた….');
                text.push('オスを前にして、発情したマンコから\n精液と愛液の混ざったものがトロリと垂れ落ちた.');
                text.push('ブラック・マッスルはレヴァンティアの腰を\n両手でつかんでシゴいている!');
            } if (v.statusE) {
                text.push('ブラック・マッスルの手が\nレヴァンティアの下腹部をぐっと押した!');
                text.push('太い指が熱くなった子宮をグルグルと回している.');
                text.push('手とチンポの間で押し潰された子宮が、\nメスの快楽をダラダラを垂れ流す.');
                text.push('レヴァンティアは腹の底から絞り出したような嬌声を上げている….');
            }
            break;
        case 12:
            if (v.statusA) {
                text.push('再びブラック・マッスルの指が\nレヴァンティアの首を絞めつけはじめた!');
                text.push('レヴァンティアのマンコが絶頂の快感でぎゅうぎゅうと絞めつけた!');
                text.push('レヴァンティアは敗北宣言をしながらイってしまった….');
            } if (v.statusD) {
                text.push('ブラック・マッスルはレヴァンティアの腕をつかんで\nチンポをぐっと押し込んだ!');
                text.push('レヴァンティアのマンコからねっとりとした愛液が\nポタポタと垂れ落ちた.');
                text.push('レヴァンティアは敗北宣言をしながら絶頂してしまった….');
            } if (v.statusA || v.statusD) {
                text.push('レヴァンティアの体から魔力が抜けた！');
                text.push('レヴァンティアは弱体化してしまった….');
            } if (v.statusC) {
                text.push('レヴァンティアはとろけたメスの顔で、負けを認めた….');
                text.push('レヴァンティアは媚びを売るように自ら腰を回している.');
                text.push('レヴァンティアは敗北宣言をしながら絶頂してしまった….');
                text.push('レヴァンティアの体から魔力が抜けた!');
                text.push('レヴァンティアは弱体化してしまった….');
            } if (v.statusE) {
                text.push('レヴァンティアは迫る絶頂を予想して体を縮こまらせた!');
                text.push('しかし、ブラック・マッスルはピストンを止めてしまった….');
                text.push('レヴァンティアは自ら腰を動かそうとした.');
                text.push('しかし、ブラック・マッスルにつかまっているためまったく動けない….');
            }
            break;
        case 13:
            if (v.statusA) {
                text.push('レヴァンティアは必死で魔力をかき集めた!');
                text.push('しかし、以前に比べるとほんの少ししか集まらなかった….');
                text.push('レヴァンティアは必死に抵抗した.');
                text.push('しかし、浮いた足が空中でもがいているだけだった….');
            } if (v.statusC) {
                text.push('レヴァンティアはブラック・マッスルのチンポから\n必死に抜け出そうとした!');
                text.push('レヴァンティアはブラック・マッスルの肩をつかんで\n少しずつ体を持ち上げる!');
                text.push('レヴァンティアは手を滑らせた.');
                text.push('体重のかかった刺激がレヴァンティアの子宮を直撃した!');
                text.push('レヴァンティアは、ブラック・マッスルを\nぎゅっと抱きしめたまま絶頂してしまった….');
            } if (v.statusE) {
                text.push('レヴァンティアは、チンポに媚びを売るかのように\nマンコをぎゅうぎゅうと締めつけた.');
                text.push('レヴァンティアはブラック・マッスルの手に\n恋人のように指を絡めている….');
                text.push('ブラック・マッスルはレヴァンティアの腰をつかんで\n一気にチンポを挿し込んだ!');
                text.push('レヴァンティアは中出しされながらポルチオで絶頂した…♡');
                text.push('レヴァンティアの体から魔力が抜けた!');
                text.push('レヴァンティアは弱体化してしまった….');
            }
            break;
    }
}

function leader2ndText(text, v) {
    switch (v.hCount) {
        case 1:

            text.push('ミスター・ヒプノシスの催眠!');
            text.push('レヴァンティアは催眠状態に陥った...');
            text.push('レヴァンティアは気合いで固まった体を動かした!');
            text.push('レヴァンティアは催眠状態から抜け出した.');
            break;
        case 2:

            text.push('レヴァンティアは狂信者に下敷きになって動けない.');
            text.push('レヴァンティアは強引に魔力を引き出した!\n無理な運用の反動でレヴァンティアにダメージ！');
            text.push('苦痛がレヴァンティアの精神を目覚めさせた.\nレヴァンティアは催眠状態から抜け出した。');
            text.push('レヴァンティアは狂信者たちを一気に吹きとばした.');
            break;
        case 3:

            text.push('狂信者たちが飛び込んできてレヴァンティアの体に触りはじめた。');
            text.push('ミスター・ヒプノシスの催眠!');
            text.push('レヴァンティアの催眠深度がさらに深まった...');
            text.push('レヴァンティアは意識を保とうとするがぼうっとしてしまう.');
            break;
        case 4:

            text.push('レヴァンティアは再び男たちの下敷きになってしまった.');
            text.push('狂信者たちがレヴァンティアの体を露骨に触った。');
            text.push('ミスター・ヒプノシスの催眠!');
            text.push('レヴァンティアの感度が上昇した.');
            text.push('レヴァンティアが狂信者たちの愛撫にビクついている.');
            break;
        case 5:

            text.push('狂信者の手がレヴァンティアのレオタードの中に潜り込んだ。');
            text.push('ミスター・ヒプノシスが催眠をかけ続けている.');
            text.push('レヴァンティアは催眠に抵抗しようとするが、\n胸を触られる快感に意識が乱れた。');
            text.push('抵抗に失敗したレヴァンティアは催眠の深度がさらに深まった.');
            break;
    }
} function leader3rdText(text, v) {
    switch (v.hCount) {
        case 1:

            text.push('ミスター・ヒプノシスはレヴァンティアに向かって手を伸ばした.');
            text.push('しかし、レヴァンティアは素早く視線をそらした!');
            text.push('謎の鈴の音が鳴り響いている….');
            text.push('レヴァンティアは催眠状態に陥った.');
            break;
        case 2:
            if (v.statusA) {
                text.push('謎の鈴の音が聞こえる…。');
                text.push('レヴァンティアの催眠深度が深まった.');
            }
            text.push('催眠にかかった市民がレヴァンティアに飛び掛かって来た!');
            text.push('男の手がレヴァンティアのスーツをかすった.');
            text.push('レヴァンティアの上半身のスーツは簡単に破れてしまった.'); if (v.statusB || v.statusC) {
                text.push('レヴァンティアは胸を腕で隠したまま縮こまっている…。')
            }
            break;
        case 3:

            text.push('催眠にかかった市民がレヴァンティアに向かって飛び掛かってきた.');
            text.push('レヴァンティアが市民たちに魔法を使おうとする.');
            text.push('催眠の影響でレヴァンティアは魔法の詠唱を中断してしまった.'); if (v.statusA) {
                text.push('市民たちの手によってスーツが破れてしまった.');
            } if (v.statusB || v.statusC) {
                text.push('市民たちの手によってレヴァンティアのスーツが破れてしまった…。');
            }
            break;
        case 4:

            text.push('レヴァンティアは素早い動きで市民の群れをすり抜けた!');
            text.push('市民の中の一人が、しつこくレヴァンティアを追ってきた!');
            text.push('レヴァンティアは男に捕まってしまった...');
            text.push('立ち止まったレヴァンティアに、市民たちが押し寄せてきた!');
            text.push('男の手はレヴァンティアの胸を揉みしだいている.'); if (v.statusC || v.statusD) {
                text.push('レヴァンティアは快感で甘い声を出している…。...')
            }
            break;
        case 5:

            text.push('レヴァンティアは市民に囲まれ、身動きが取れなくなった.');
            text.push('男の手がレヴァンティアの胸を揉んだ!');
            text.push('男の手がレヴァンティアの股の間を擦りつけた!'); if (v.statusA) {
                text.push('しかし、レヴァンティアは抵抗できない…。');
            } if (v.statusC) {
                text.push('レヴァンティアは体をうねらせながら、喘ぎ声を我慢している....')
            }
            break;
        case 6:
            if (v.statusA) {
                text.push('レヴァンティアは市民に取り囲まれている。');
                text.push('男たちの手がレヴァンティアの体を好きほうだい触りだした….');
                text.push('ミスター・ヒプノシスの命令でレヴァンティアは市民に犯される');
                text.push('レヴァンティアは必死にもがくが男たちの間にギュッと挟まれ身動き一つとれない。');
                text.push('男がそのまま腰を押し込みレヴァンティアは処女を失った...');
            } if (v.statusD) {
                text.push('男たちの手がレヴァンティアの体を好きほうだい触りだした….');
                text.push('レヴァンティアは男の耳元で囁くように懇願した.');
                text.push('男はそのまま腰を押し込んだ!');
                text.push('レヴァンティアのマンコはペニスを歓迎するようにギュッと締めつけた.');
            }; if (v.statusC) {
                text.push('レヴァンティアは歯を食いしばり、必死で喘ぎ声を我慢した....');
                text.push('だが、クリトリスへの刺激は止まらない....');
                text.push('レヴァンティアはつま先立ちをしたまま、軽く痙攣した!');
                text.push('レヴァンティアは市民たちの手で絶頂してしまった....');
            }
            break;
        case 7:
            if (v.statusA) {
                text.push('レヴァンティアは犯され続けている。');
                text.push('ミスター・ヒプノシスが鈴を鳴らした.');
                text.push('レヴァンティアの催眠深度が深まった.');
                text.push('催眠の影響で苦痛が和らいだ.');
                text.push('苦痛が和らぐやレヴァンティアは快感を感じはじめた.');
            } if (v.statusC) {
                text.push('レヴァンティアは大事なところを腕で隠しながら\nミスター・ヒプノシスを睨んだ.');
                text.push('熱いペニスがレヴァンティアのお尻に当たった!');
                text.push('挿入されるのを感じたレヴァンティアは、\n反射的にお尻を突き上げた.');
                text.push('レヴァンティアのマンコは当たり前のようにペニスを受け入れた.');
            } if (v.statusD) {
                text.push('男のペニスが後ろからパンパンとレヴァンティアを突きあげる！');
                text.push('レヴァンティアは犯されている....');
                text.push('ミスター・ヒプノシスから鈴の音が鳴り響いた.');
                text.push('レヴァンティアの催眠深度が深まった.');
            }
            break;
        case 8:
            if (v.statusA) {
                text.push('男は無我夢中で腰を突き上げた！');
                text.push('レヴァンティアは前の男にしがみつき快感に耐えている.');
                text.push('男がレヴァンティアの胸をギュウッと揉んだ!');
                text.push('レヴァンティアは快感に耐えながら、\n男の理不尽な強要に謝っている.');
            } if (v.statusC) {
                text.push('男のペニスが後ろからパンパンとレヴァンティアを突きあげる！');
                text.push('レヴァンティアは犯されている....');
                text.push('ミスター・ヒプノシスから鈴の音が鳴り響いた.');
                text.push('レヴァンティアの催眠深度が深まった.');
            } if (v.statusD) {
                text.push('男は無我夢中で腰を突き上げた！');
                text.push('レヴァンティアは前の男にしがみつきながら\n快感に耐えている.');
                text.push('我慢する気配すらない嬌声が\nレヴァンティアの口から漏れ出した.');
                text.push('上と下から感じられる快感に、\nレヴァンティアはぼうっと上を見上げた.');
            }
            break;
        case 9:
            if (v.statusA) {
                text.push('レヴァンティアは前後にまとわりついた市民を\n振り払おうとした!');
                text.push('レヴァンティアに男たちの精液がぶっかけられた.');
            } if (v.statusD) {
                text.push('レヴァンティアは大きいお尻で男を押しのけようとした!');
                text.push('だが腰を動かしても、ペニスに突かれ気持ちよくなるだけだ….');
            }; if (v.statusA || v.statusD) {
                text.push('レヴァンティアは精液まみれで絶頂した…。');
                text.push('倒れたレヴァンティアを、市民が持ち上げた.');
            } if (v.statusC) {
                text.push('レヴァンティアは前の男にしがみつきながら快感に耐えている.');
                text.push('レヴァンティアの前にいた男がズボンをおろした!');
                text.push('レヴァンティアの両手が、\n男のペニスを柔らかく包み込んだ!');
            }
            break;
        case 10:
            if (v.statusA || v.statusD) {
                text.push('魔力を込めたミスター・ヒプノシスの手が光った！');
            } if (v.statusA) {
                text.push('レヴァンティアは強い催眠にかかってしまった…。');
            } if (v.statusD) {
                text.push('レヴァンティアの感度が大幅に上昇した。');
            } if (v.statusA || v.statusD) {
                text.push('レヴァンティアの股の間は愛液でベットリ濡れている。');
            }; if (v.statusA) {
                text.push('レヴァンティアは催眠にかかった市民に犯されている.');
            }; if (v.statusD) {
                text.push('今度はまた違う男が一気にペニスをぶち込んだ！')
                text.push('レヴァンティアは催眠にかかった…?市民に犯されている。');
            }; if (v.statusC) {
                text.push('レヴァンティアは犯される最中も、\nペニスへのご奉仕をやめないでいる....');
                text.push('レヴァンティアはとろけた表情で深呼吸を繰り返している....');
                text.push('レヴァンティアはトランス状態に陥った.');
                text.push('ミスター・ヒプノシスはレヴァンティアの目の前で手を叩いた!');
            }
            break;
        case 11:
            if (v.statusA || v.statusD) {
                text.push('男はレヴァンティアの後ろから、\n獣みたいに腰を動かした！');
                text.push('レヴァンティアのマンコから\nベトッとした愛液がジョロリと垂れた.');
            }; if (v.statusA) {
                text.push('発情催眠に耐えていた男たちの忍耐が\n限界に達してしまった….');
            }; if (v.statusA || v.statusD) {
                text.push('男たちはレヴァンティアを見てオナニーを始めた。');
            }; if (v.statusC) {
                text.push('レヴァンティアの目線は、\n勃起したペニスに釘付けになって離れない....');
                text.push('男はレヴァンティアの目の前にペニスを突き出した.');
                text.push('オスのにおいに、レヴァンティアの理性は桃色に染まった.');
                text.push('レヴァンティアはペニスにご奉仕している....');
            }
            break;
    }
} function leader4thText(text, v) {
    switch (v.hCount) {
        case 1:
            if (v.statusA || v.statusD) {
                text.push('ミスター・ヒプノシスが指で合図を送ると、\n周辺に薄い霧が広がった.');
                text.push('レヴァンティアの催眠深度が少し深まった.');
            }; if (v.statusC || v.statusE) {
                text.push('ミスター・ヒプノシスが指を弾くと、\nレヴァンティアはトランス状態に陥った。');
                text.push('レヴァンティアの催眠深度はすでに限界にまで達している….');
                text.push('レヴァンティアはスーツの魔力を止めた.');
                text.push('レヴァンティアの服装からは\n胸とマンコが丸出しになっている….');
            }
            break;
        case 2:
            if (v.statusA || v.
                statusD) {
                text.push('レヴァンティアはミスター・ヒプノシスに向かって剣を振るった.');
                text.push('しかし、空中に現れた硬い防壁によって攻撃は遮られた!');
                text.push('謎の鈴の音が聞こえる….');
                text.push('レヴァンティアの催眠深度がさらに深まった.');
            }; if (v.statusC || v.statusE) {
                text.push('にやりと笑うミスター・ヒプノシスの前に、\nレヴァンティアはＭ字でしゃがみこんだ.');
            }; if (v.statusC) {
                text.push('レヴァンティアは一気にミスター・ヒプノシスのズボンを引きずりおろした!');
                text.push('レヴァンティアは舌を伸ばし、\nミスター・ヒプノシスのペニスを舐めた.');
            }; if (v.statusE) {
                text.push('レヴァンティアはミスター・ヒプノシスのズボンに顔を埋め込み、\n深く息を吸い込んだ.');
                text.push('レヴァンティアは舌を伸ばし、\nミスター・ヒプノシスのペニスを舐めた.');
            }; if (v.statusC || v.statusE) {
                text.push('レヴァンティアは慣れた動きで、\nミスター・ヒプノシスにご奉仕を始めた….');
            }
            break;
        case 3:
            if (v.statusD) {
                text.push('魔力の光がレヴァンティアの視覚に入り込んだ!')
            }; if (v.statusA || v.
                statusD) {
                text.push('レヴァンティアは咄嗟にスーツの魔力を止めた!');
                text.push('レヴァンティアの服装からは胸とマンコが丸出しになっている….');
                text.push('ミスター・ヒプノシスが合図を送ると、狂信者たちが押し寄せて来た!');
            }; if (v.statusC) {
                text.push('レヴァンティアの舌が\nミスター・ヒプノシスの亀頭の下をそっと舐めている….');
            }; if (v.statusE) {
                text.push('レヴァンティアは口を開け、\nミスター・ヒプノシスのペニスを呑み込んだ.');
            }; if (v.statusC || v.statusE) {
                text.push('レヴァンティアのマンコからはベトッとした愛液を垂らしている…。');
                text.push('レヴァンティアの手が、ゆっくりお腹の下へと向かった.');
                text.push('レヴァンティアの股の間から、グッチョリとした水音が響きはじめた….');
            }
            break;
        case 4:
            if (v.statusA || v.
                statusD) {
                text.push('レヴァンティアを囲んでいた狂信者たちは\nあっという間に吹き飛んでしまった.');
                text.push('慌てたミスター・ヒプノシスの前で…、\nレヴァンティアはひざまずき正座した。');
                text.push('レヴァンティアは一気に\nミスター・ヒプノシスのズボンを引きずりおろした!');
                text.push('レヴァンティアは恐る恐る手を伸ばし、\nミスター・ヒプノシスのペニスを掴んだ.');
            }; if (v.statusE) {
                text.push('レヴァンティアはペニスを\n喉の奥深くまでのみ込み吸いつくした.');
            }; if (v.statusC || v.statusE) {
                text.push('ミスター・ヒプノシスはレヴァンティアの口の中に精液を噴き出した…。');
            }; if (v.statusC) {
                text.push('レヴァンティアはペニスが精液で汚れないように、\nペニスを掃除をしながら口から抜き取った.');
            }; if (v.statusC || v.statusE) {
                text.push('精液がベトッとしているせいで、\nレヴァンティアは３、４回に分けてやっとのことで精液を飲み込んだ。');
                text.push('息を吸う度に漏れ出る精液のにおいに、\nレヴァンティアは軽く絶頂してしまった….');
            }
            break;
        case 5:
            if (v.statusA) {
                text.push('レヴァンティアは立ったペニスを真っ白な手でゆっくりと撫でた.');
                text.push('レヴァンティアはミスター・ヒプノシスのペニスに舌をあてがった.');
                text.push('レヴァンティアは勃起したペニスを舐まわしている.');
            }; if (v.statusD) {
                text.push('レヴァンティアはミスター・ヒプノシスのペニスを口にくわえた.');
                text.push('レヴァンティアの小さな舌が\nミスター・ヒプノシスのペニスを口の中で愛撫している。');
                text.push('レヴァンティアはミスター・ヒプノシスの邪悪な心を\n浄化するために頑張っている…！');
            } if (v.statusC) {
                text.push('レヴァンティアは倒れたミスター・ヒプノシスの上に、\nマウントを取るように乗りかかった!');
            } if (v.statusE) {
                text.push('レヴァンティアはミスター・ヒプノシスに処女を捧げてしまった.')
            } if (v.statusC || v.statusE) {
                text.push('レヴァンティアはビンビンに立っているペニスの上にマンコを乗せた。');
                text.push('レヴァンティアは体勢を整えゆっくりと腰を下ろしはじめた.');
                text.push('レヴァンティアは笑みを浮かべながら喘いでいる….');
            }
            break;
        case 6:
            if (v.statusA) {
                text.push('生ぬるい愛撫にミスター・ヒプノシスのペニスがビクついた.');
                text.push('優位を立ったと思ったレヴァンティアの手の動きが早くなった!');
                text.push('まともな愛撫を受けたミスター・ヒプノシスは、やっとイくことができた。');
                text.push('ミスター・ヒプノシスはレヴァンティアの手コキで射精した!');
            }; if (v.statusD) {
                text.push('レヴァンティアはミスター・ヒプノシスに処女を捧げてしまった.');
                text.push('レヴァンティアはビンビンに立っているペニスの上にマンコを乗せた.');
                text.push('レヴァンティアは体勢を整えゆっくりと腰を下ろしはじめた.');
                text.push('レヴァンティアは笑みを浮かべながら喘いでいる….');
            } if (v.statusE) {
                text.push('レヴァンティアは正義のマンコで邪悪なペニスを浄化している.');
            }; if (v.statusC || v.statusE) {
                text.push('レヴァンティアの目の前に魔力の光が揺らめいた…。');
            }; if (v.statusC) {
                text.push('レヴァンティアの腰の動きがさらに鈍くなった。');
            }; if (v.statusC || v.statusE) {
                text.push('レヴァンティアは歯を食いしばり、声を我慢しようとした。');
                text.push('だが、膣の奥を搔き回される度に嬌声がダラダラと漏れ出している….');
            }
            break;
        case 7:
            if (v.statusA) {
                text.push('レヴァンティアは倒れたミスター・ヒプノシスの上に、\nマウントを取るように乗りかかった!');
                text.push('レヴァンティアはゆっくりと腰を下ろしはじめた.');
                text.push('ミスター・ヒプノシスのペニスがレヴァンティアの膣にゆっくり潜り込んだ….');
                text.push('レヴァンティアはミスター・ヒプノシスに処女を捧げてしまった….');
            }; if (v.statusD) {
                text.push('レヴァンティアは正義のマンコで邪悪なペニスを浄化中だ.');
                text.push('レヴァンティアの腰がまるで餅をつくのように\nペタッペタッとついている!');
                text.push('マンコから垂れた愛液が\nミスター・ヒプノシスのお腹をベットリ濡らした。');
                text.push('レヴァンティアはペニスが気持ちいいところに当たるようにして動いている….');
            } if (v.statusC) {
                text.push('ミスター・ヒプノシスは動きが鈍くなったレヴァンティアの腰を掴み、\n上に持ち上げた.');
                text.push('ミスター・ヒプノシスは掴んだ腰をそのままペニスに押し込んだ!');
            }; if (v.statusE) {
                text.push('レヴァンティアはミスター・ヒプノシスの上に乗りかかり、\n巧妙に腰だけを突き動かしている.');
                text.push('いやらしい水音が周りに響く.');
            }; if (v.statusC || v.statusE) {
                text.push('ミスター・ヒプノシスはレヴァンティアの腰を掴みオナニーするように腰を動かした!');
                text.push('レヴァンティアは抵抗すらできず、無抵抗にマンコを使われている….');
            }
            break;
        case 8:
            if (v.statusA) {
                text.push('レヴァンティアの目の前に魔力の光が揺らめいた…。');
                text.push('レヴァンティアの腰がゆっくりと上下に動いた.');
                text.push('レヴァンティアは本格的に腰を動かしはじめた.');
                text.push('ミスター・ヒプノシスのペニスがレヴァンティアの膣の奥を擦りつけた.');
            }; if (v.statusD) {
                text.push('レヴァンティアはミスター・ヒプノシスの上に乗ってクルクル腰を回している。');
                text.push('子宮が押さえつけられる感覚に、レヴァンティアの腰が反り返った！');
                text.push('ミスター・ヒプノシスはレヴァンティアの腰を掴み、荒く腰を打ちつけた!');
                text.push('レヴァンティアはわけもわからぬまま、マンコを使われている….');
            } if (v.statusC || v.statusE) {
                text.push('レヴァンティアは腰を持ち上げ、ペニスを抜こうとした。');
            }; if (v.statusC) {
                text.push('ミスター・ヒプノシスのペニスがねっとりしたマンコを突いた!');
            }; if (v.statusE) {
                text.push('うずうずする快感が、レヴァンティアの思考を停止させた.');
                text.push('レヴァンティアはまたミスター・ヒプノシスの上に座りこんでしまった….');
            }; if (v.statusC || v.statusE) {
                text.push('ミスター・ヒプノシスはレヴァンティアにペニスを突っ込んで射精した。');
            }; if (v.statusC) {
                text.push('レヴァンティアはヴィランに中出しされ、絶頂してしまった…。');
            }
            break;
        case 9:
            if (v.statusA || v.statusD) {
                text.push('レヴァンティアは違和感の正体を探ろうとした。');
                text.push('しかし、催眠術で低下した思考力ではまともな答えが思いつかなかった….');
            } if (v.statusA) {
                text.push('ミスター・ヒプノシスはレヴァンティアにペニスを突っ込んで射精した.');
            } if (v.statusD) {
                text.push('うずうずする快感が輪をかけてレヴァンティアの思考の邪魔をした.');
            } if (v.statusA || v.statusD) {
                text.push('レヴァンティアはヴィランに中出しされ、絶頂してしまった…。');
            }; if (v.statusC) {
                text.push('しかし、吹き飛ばされた狂信者たちが再び集まって来ている…。');
                text.push('狂信者たちはレヴァンティアにペニスを突きつけた！');
            }; if (v.statusD) {
                text.push('吹き飛ばされた狂信者たちが再び集まって来ている…。');
            } if (v.statusC || v.statusE) {
                text.push('レヴァンティアは狂信者のペニスを手コキしはじめた。');
                text.push('ミスター・ヒプノシスのペニスが下からレヴァンティアの子宮を突き上げた!');
            } if (v.statusD) {
                text.push('レヴァンティアは腰を動かしながら、\nミスター・ヒプノシスに謝るようにマンコを締め付けた.');
            }
            break;
        case 10:
            if (v.statusA || v.statusD) {
                text.push('吹き飛ばされた狂信者たちが再び集まって来ている…。');
                text.push('狂信者たちはレヴァンティアにペニスを突きつけた！'); if (v.statusD) {
                    text.push('レヴァンティアは手を伸ばし、狂信者のペニスを掴んだ.')
                };
                text.push('レヴァンティアは狂信者たちのペニスを手コキしている….');
            }; if (v.statusA) {
                text.push('ミスター・ヒプノシスのペニスが下からレヴァンティアの子宮を突き上げた!');
            }; if (v.statusC || v.statusE) {
                text.push('レヴァンティアは搾精機みたいに腰を打ちつけた。');
            } if (v.statusA) {
                text.push('狂信者たちはレヴァンティアをオカズに、オナニーを始めた！');
            } if (v.statusD) {
                text.push('レヴァンティアは喉を使い狂信者のペニスを受け止めている.');
            } if (v.statusC || v.statusE) {
                text.push('ミスター・ヒプノシスもレヴァンティアを使って、性欲を満たしている！');
                text.push('自分が「使われている」ことに気づいたレヴァンティアは、\n発情した犬みたいにペニスをしゃぶりはじめた….');
            }
            break;
        case 11:
            if (v.statusA) {
                text.push('レヴァンティアは狂信者たちのペニスを掴んで擦っている.');
                text.push('狂信者はレヴァンティアの口にペニスをぶち込んだ！');
            }; if (v.statusA) {
                text.push('狂信者は空いてるレヴァンティアのマンコにペニスをぶち込んだ！');
            }; if (v.statusA || v.statusD) {
                text.push('ミスター・ヒプノシスもレヴァンティアの腰を掴み、強引に動かしはじめた！');
                text.push('マンコを搔き回される度に伝わってくる快感に\nレヴァンティアはペニスを手放すことができなかった…。');
            }; if (v.statusC) {
                text.push('レヴァンティアはペニスに絡みつくように喉とマンコをギュウッと締め付けた.');
            }; if (v.statusE) {
                text.push('レヴァンティアは自分の体を使って、信者たちのペニスを浄化している♡');
            }; if (v.statusA || v.statusD) {
                text.push('レヴァンティアの口の中と子宮にベットリとした精液がいっぱいに注がれた.');
            }; if (v.statusC) {
                text.push('レヴァンティアは口の中の精液を飲み込み、絶頂の余韻を感じた.');
                text.push('レヴァンティアはペニスを睨みながら、二ヤリとしている….');
            } if (v.statusE) {
                text.push('レヴァンティアは口の中で精液を味わいながら絶頂した….');
                text.push('レヴァンティアはペニスを愛おしく見つめながら、\nメスの笑みを浮かべている….');
            }
            break;
        case 12:
            if (v.statusA) {
                text.push('レヴァンティアは自分の体を使って、\n信者たちのペニスを浄化している♡');
            }; if (v.statusD) {
                text.push('レヴァンティアはペニスに絡みつくように喉とマンコをギュウッと締め付けた.')
            }; if (v.statusA || v.statusD) {
                text.push('レヴァンティアの口の中と子宮にベットリとした精液がいっぱいに注がれた。');
            }; if (v.statusA) {
                text.push('レヴァンティアは口の中の精液を溢しながら絶頂した….');
                text.push('レヴァンティアの周りは勃起したペニスに囲まれている!');
            }; if (v.statusD) {
                text.push('レヴァンティアの目の前に魔力の光が揺らめいた…。');
                text.push('レヴァンティアは口に入った精液を飲みながら絶頂した….');
            }; if (v.statusA || v.statusD) {
                text.push('ミスター・ヒプノシスが指を弾くと、レヴァンティアの暗示が一部解けた.');
                text.push('強烈な快感と共に、レヴァンティアは楽園教での出来事を思い出した….');
                text.push('レヴァンティアは楽園教の備品となった自分を想像した.');
            }; if (v.statusC) {
                text.push('レヴァンティアの子宮が熱くうずく。');
            } if (v.statusE) {
                text.push('レヴァンティアの子宮が熱くうずく…♡');
            }
            break;
    }
}

function succu2ndText(text, v) {
    switch (v.hCount) {
        case 1:
            if (v.statusA) {
                text.push('淫魔たちの胸で人質がもがいている…')
            }
            break;
        case 2:
            if (v.statusA || v.statusB) {
                text.push('淫魔の奇襲！');
                text.push('人質に気を取られていたレヴァンティアは避けられなかった….')
            }; if (v.statusA) {
                text.push('淫魔の手がレヴァンティアの胸を揉んだ!')
            }; if (v.statusB) {
                text.push('魔法少女のピンチにチャット欄が心配の声でざわついた.')
            }; if (v.statusA || v.statusB) {
                text.push('レヴァンティアの顔が恥ずかしさで赤く染まった。')
            };
            break;
        case 3:
            if (v.statusB) {
                text.push('淫魔の手がレヴァンティアの胸を揉んだ!');
            } if (v.statusA || v.statusB) {
                text.push('電流が走るような感覚にレヴァンティアはビクンと体を震えさせた。');
            } if (v.statusA) {
                text.push('コリコリに勃起した乳首は、魔法少女の服の上からでもはっきりと分かる….');
                text.push('淫魔たちの指がレヴァンティアの乳首をさっと撫でた!');
            } if (v.statusA || v.statusB) {
                text.push('レヴァンティアの口からかすかな喘ぎ声が漏れた。');
            };
            break;
        case 4:
            if (v.statusA || v.statusB) {
                text.push('別の淫魔がレヴァンティアにくっついた！');
                text.push('淫魔の指がレヴァンティアのクリトリスに重なった.');
                text.push('不意打ちの快感にレヴァンティアは我慢できず喘ぎ声を出してしまった.');
            }
            break;
        case 5:
            if (v.statusA || v.statusB) {
                text.push('レヴァンティアは、上下に降り注ぐ快感に歯を食いしばって耐えている…。');
                text.push('人質はレヴァンティアをじぃーっと見つめている.');
                text.push('人質の股間はパンパンに膨らんでいた….');
                text.push('自分に向けられた欲情の証拠にレヴァンティアの顔が赤く染まる.');
            };
            break;
        case 6:
            if (v.statusA || v.statusB) {
                text.push('レヴァンティアは人質の状態を気にして抵抗できなかった…。');
            } if (v.statusA) {
                text.push('淫魔の指の間に透明な糸が伸びた.');
            } if (v.statusB) {
                text.push('真っ赤に充血したクリトリスと乳首が淫魔の前に突き出された.');
                text.push('クリトリスを擦られる快感に、\nレヴァンティアは太ももをぎゅっと締めた！');
            }; if (v.statusA || v.statusB) {
                text.push('レヴァンティアは絶頂した。');
                text.push('レヴァンティアの魔力が膨れ上がっている!');
            };
            break;
    }
} function succu3rdText(text, v) {
    switch (v.hCount) {
        case 1:
            if (v.statusA || v.statusB) {
                text.push('レヴァンティアは魔力を込め、鋭く敵を斬った！');
            } if (v.statusC || v.statusD) {
                text.push('レヴァンティアは淫魔を一刀両断した！');
            } if (v.statusA || v.statusB) {
                text.push('しかし、斬られた淫魔の姿がぼやけ、徐々に消えていった…。');
                text.push('リリスは手を振り回して魔力の波動を放った!');
                text.push('レヴァンティアは慌てて後退したが、\nスーツの一部が波動に巻き込まれて消えてしまった.');
            }
            break;
        case 2:
            if (v.statusA || v.statusB || v.statusC) {
                text.push('魔力に満ちた剣技がリリスの分身を全て消し去った！');
                text.push('しかし、リリスの形態はすべてふにゃふにゃになって消え去った….');
                text.push('リリスは後ろからレヴァンティアの胸を揉んだ!');
                text.push('レヴァンティアのスーツの上半身の一部が破れた.');
            }
            break;
        case 3:
            if (v.statusC || v.statusD) {
                text.push('リリスは仲間を呼び出した！');
            } if (v.statusA || v.statusB) {
                text.push('姿を隠していたい淫魔たちが左右からレヴァンティアを拘束した。');
                text.push('レヴァンティアの動きが止まった隙に、淫魔がスーツの下衣に手をかけた.');
                text.push('レヴァンティアのスーツはもうボロボロだ….');
            }
            break;
        case 4:
            if (v.statusA || v.statusB || v.statusC) {
                text.push('辺りには淫魔のフェロモンが充満している！');
            } if (v.statusA || v.statusB || v.statusC || v.statusD) {
                text.push('レヴァンティアの体は次第に火照りはじめた…。');
                text.push('リリスの手がレヴァンティアの下腹部をぐっと押した.');
            } if (v.statusD) {
                text.push('レヴァンティアの下腹部にピンクの模様が浮かび上がった.');
            } if (v.statusA || v.statusB || v.statusC || v.statusD) {
                text.push('レヴァンティアに発情の呪いがかかった。');
            }
            break;
        case 5:
            if (v.statusA || v.statusB || v.statusC || v.statusD) {
                text.push('レヴァンティアは黙って剣を振り回した！');
            } if (v.statusA || v.statusB || v.statusD) {
                text.push('レヴァンティアの沈黙に淫紋が反応した！');
            } if (v.statusC) {
                text.push('レヴァンティアの沈黙に淫紋が反応した！');
            } if (v.statusA || v.statusB || v.statusC || v.statusD) {
                text.push('レヴァンティアに強い発情の呪いがかかった…。');
                text.push('淫紋は下腹部を直に攻撃している.');
            }
            break;
        case 6:
            if (v.statusD) {
                text.push('攻撃の隙を狙って拘束魔法が飛んできた！');
            } if (v.statusA || v.statusB || v.statusC || v.statusD) {
                text.push('レヴァンティアはリリスに拘束された。');
            } if (v.statusA || v.statusB) {
                text.push('リリスはレヴァンティアの目の前に尻尾を突き出した！');
            } if (v.statusC) {
                text.push('丸く巻かれていた尻尾の先が、手のひらほどの大きさに広がった.');
            } if (v.statusA || v.statusB || v.statusC || v.statusD) {
                text.push('リリスの尻尾の先がレヴァンティアのクリトリスを擦った！');
            } if (v.statusA || v.statusB || v.statusD) {
                text.push('電流が走るような快感に、レヴァンティアは必死で太ももを締めた。');
            } if (v.statusC) {
                text.push('レヴァンティアの太ももの間は、すでに愛液でグショグショになっている….');
            }
            break;
        case 7:
            if (v.statusA || v.statusB || v.statusC || v.statusD) {
                text.push('拘束魔法陣がレヴァンティアの手足を強くつかんでいる。');
            } if (v.statusA || v.statusB) {
                text.push('でこぼこした突起に刺激されるたび、レヴァンティアの体がビクンと震えた。');
                text.push('淫魔の尻尾がレヴァンティアのクリトリスを押さえつけた!');
                text.push('慣れているようで慣れていない感覚に、\nレヴァンティアのマンコからねっとりとした汁が垂れ落ちた.');
            } if (v.statusC) {
                text.push('絶え間なく降り注ぐ快感に、レヴァンティアの表情が一瞬でとろけ落ちた….');
                text.push('リリスはレヴァンティアのクリトリスを弄んでいる!');
                text.push('レヴァンティアは、まともに抵抗すらできず嬌声ばかり漏らしている….');
            } if (v.statusD) {
                text.push('リリスの尻尾がレヴァンティアのクリトリスに覆いかぶさるようにくっついた.');
                text.push('慣れているようで慣れていない感覚に、\nレヴァンティアのマンコからねっとりとしたメス汁が垂れ落ちた.');
            }
            break;
        case 8:
            if (v.statusA || v.statusB) {
                text.push('レヴァンティアはピリピリとした快感に必死で耐えている…。');
            } if (v.statusD) {
                text.push('リリスの尻尾は相変わらずレヴァンティアのクリトリスを擦っている!');
            } if (v.statusA || v.statusB || v.statusD) {
                text.push('リリスの指がレヴァンティアの乳首をくすぐるように弾いた！');
                text.push('乳首を擦られる度に、快感がレヴァンティアの背中に電流を走らせた.');
            } if (v.statusC) {
                text.push('リリスの尻尾が愛液でヌルヌルのマンコをゴシゴシと擦った!');
                text.push('レヴァンティアは姿勢を正すどころか太ももをクネクネさせている….');
                text.push('レヴァンティアの沈黙に淫紋が反応した!');
            }
            break;
        case 9:
            if (v.statusA || v.statusB) {
                text.push('リリスは丁寧にレヴァンティアのクリトリスを擦った！');
                text.push('レヴァンティアはまともに立つことすらできず、リリスにもたれている….');
            } if (v.statusD) {
                text.push('淫魔の尻尾がレヴァンティアのクリトリスの上でうごめいている.');
                text.push('レヴァンティアはぎゅっと閉じていた太ももを思わず大きく開いてしまった….');
                text.push('今までとは比べものにならない刺激に、レヴァンティアは簡単に絶頂してしまった。');
            } if (v.statusC) {
                text.push('淫紋がヴーヴーと鳴り、レヴァンティアの子宮を刺激した.');
                text.push('リリスの指が子宮の上をぐっと押したままグルグルと回転した!');
                text.push('過剰な快楽にレヴァンティアの頭の中で火花が散った!');
            } if (v.statusA || v.statusB || v.statusC || v.statusD) {
                text.push('絶頂の余波でレヴァンティアの体から魔力が暴走した！');
                text.push('しかし、吐き出された魔力は全部リリスに吸い取られてしまった….');
            }
            break;
        case 10:
            if (v.statusA || v.statusB || v.statusD) {
                text.push('レヴァンティアは必死に剣を振り回した！');
                text.push('しかし、リリスが手を動かすと、あっさり阻止されてしまった….');
                text.push('後ろから飛び出したリリスの尻尾が、レヴァンティアのクリトリスを吸い込んだ.');
                text.push('レヴァンティアの姿勢があぐらのように崩れた….');
            } if (v.statusC) {
                text.push('レヴァンティアはあがくように剣を振り回した！');
                text.push('目の前にいたリリスが揺れるように消えた.');
                text.push('後ろから飛び出したリリスの尻尾が、レヴァンティアのクリトリスを吸い込んだ!');
                text.push('レヴァンティアの子宮は呪いに犯され、快感をダラダラと垂れ流している….');
            }
            break;
        case 11:
            if (v.statusA || v.statusB) {
                text.push('リリスはレヴァンティアのクリトリスをさすった。');
                text.push('レヴァンティアは眉をひそめながらも愛撫を受け入れている….');
            } if (v.statusC) {
                text.push('レヴァンティアは太ももの間を愛液で濡らしている….');
                text.push('リリスの指がレヴァンティアのマンコをほじくった!');
                text.push('Ｇスポットをクイッと押す快感にレヴァンティアの腰が跳ね上がった.');
            } if (v.statusD) {
                text.push('リリスの尻尾がレヴァンティアのクリトリスを擦った!');
                text.push('レヴァンティアはとろけたような表情で股を開いている….');
            }
            break;
    }
} function succu4thText(text, v) {
    switch (v.hCount) {
        case 1:
            if (v.statusD || v.statusC || v.statusE) {
                text.push('レヴァンティアに豪雨のように魔力の砲撃が降り注いだ！');
            } if (v.statusA || v.statusD || v.statusC || v.statusE) {
                text.push('レヴァンティアに受け止めきれなかった砲撃が的中した！');
                text.push('黒い魔力がレヴァンティアのスーツを侵食した….');
                text.push('レヴァンティアのスーツが破れた.');
            }
            break;
        case 2:
            if (v.statusA || v.statusD || v.statusC || v.statusE) {
                text.push('レヴァンティアは砲撃の隙を狙って一直線に突進した。');
                text.push('魔力の剣がリリスの防壁を破って肉体にかすった!');
                text.push('黒い魔力は、すでにレヴァンティアの上半身を侵食していた!');
                text.push('破れたスーツの下からレヴァンティアの胸があらわになった….');
            }
            break;
        case 3:
            if (v.statusA || v.statusD || v.statusE) {
                text.push('リリスの周りに暗黒の波動が広がった！');
            } if (v.statusA || v.statusD || v.statusC || v.statusE) {
                text.push('レヴァンティアは防御魔法ごと波動にのみ込まれてしまった…。');
                text.push('黒い魔力がレヴァンティアのスーツを侵食した!');
                text.push('レヴァンティアのスーツはもうボロボロだ….');
            } if (v.statusC) {
                text.push('リリスの舐め回すような視線にレヴァンティアは体を丸めた.');
            }
            break;
        case 4:
            if (v.statusA) {
                text.push('しかし、リリスの前で拘束魔法陣に捕まってしまった!');
            } if (v.statusA) {
                text.push('しかし、リリスの前で拘束魔法陣に捕まってしまった!');
            } if (v.statusD || v.statusE) {
                text.push('レヴァンティアは素早く一直線に突っ込んだ。');
                text.push('しかし、リリスの前で拘束魔法陣につかまってしまった!');
            } if (v.statusA || v.statusD || v.statusC || v.statusE) {
                text.push('リリスの手がレヴァンティアの下腹部をぐっと押した。');
                text.push('レヴァンティアの下腹部に黒い紋様が刻まれた….');
            } if (v.statusA) {
                text.push('リリスはレヴァンティアの胸を吸いはじめた!');
                text.push('レヴァンティアは胸を吸われながら体をビクビクさせている….');
            } if (v.statusC) {
                text.push('リリスが手を挙げると淫紋がほんのりと光った.');
            } if (v.statusE) {
                text.push('レヴァンティアは胸がズキズキするような感じがした….');
            }
            break;
        case 5:
            if (v.statusA) {
                text.push('レヴァンティアは拘束から抜け出そうとあがいた!');
                text.push('リリスはレヴァンティアの胸にくっつき、チュッチュと吸い上げた!');
            } if (v.statusD || v.statusE) {
                text.push('しかし、黒い魔法陣はレヴァンティアの手足を掴んだまま離してくれなかった…。');
                text.push('無防備なレヴァンティアの胸をリリスが弄ぶ.');
                text.push('リリスの手がレヴァンティアの乳を搾るかのように揉みしだいた.');
            } if (v.statusA || v.statusD || v.statusE) {
                text.push('レヴァンティアの胸から魔力がこぼれはじめた…。');
            } if (v.statusC) {
                text.push('レヴァンティアは拘束から抜け出そうとあがいた.');
                text.push('無防備なレヴァンティアの胸をリリスが思い切り吸った!');
                text.push('リリスの手がレヴァンティアの乳を搾るかのように揉みしだいた.');
                text.push('レヴァンティアの胸から魔力がこぼれはじめた….');
            }
            break;
        case 6:
            if (v.statusA) {
                text.push('リリスはレヴァンティアの目の前に尻尾を突き出した.');
            } if (v.statusA || v.statusD) {
                text.push('リリスの尻尾がレヴァンティアの股にくっついた。');
                text.push('触手がレヴァンティアの膣へと潜り込んだ!');
            } if (v.statusD) {
                text.push('痺れるような快感に、レヴァンティアの太ももが反射的にビクつく.');
            } if (v.statusC || v.statusE) {
                text.push('レヴァンティアは魔法を唱えるために魔力を集めた！');
                text.push('しかし、リリスが胸を吸うと魔力を吸い取られてしまった….');
            } if (v.statusC) {
                text.push('魔力を吸い取られたせいで、レヴァンティアの抵抗力が下がった….');
            } if (v.statusE) {
                text.push('リリスの指がレヴァンティアの乳首を強くねじった!');
                text.push('レヴァンティアは胸だけでも簡単に絶頂してしまった….');
            } if (v.statusC || v.statusE) {
                text.push('レヴァンティアに刻まれた淫紋の光がより強まった。');
            }
            break;
        case 7:
            if (v.statusA) {
                text.push('リリスの尻尾がレヴァンティアの膣内を撫で回している.');
                text.push('レヴァンティアは未知の感覚に戸惑いながら、\n喘ぎ声を抑え込んでいる….');
            } if (v.statusD) {
                text.push('レヴァンティアは予想外の快感に戸惑いながら、\n喘ぎ声を抑え込んでいる….');
            } if (v.statusA || v.statusD) {
                t
                text.push('レヴァンティアに刻まれた淫紋がほんのりと赤く光った。');
                text.push('目が眩むような快感に、レヴァンティアのお尻がビクンと跳ね上がった!');
            } if (v.statusC || v.statusE) {
                text.push('リリスはレヴァンティアの目の前に尻尾を突き出した！');
                text.push('尻尾に犯される姿を想像したレヴァンティアの子宮がうずいた.');
                text.push('レヴァンティアは取り憑かれたように尻尾を見つめている….');
                text.push('リリスの尻尾がレヴァンティアのマンコを突いた!');
            }
            break;
        case 8:
            if (v.statusA || v.statusD) {
                text.push('リリスの尻尾はレヴァンティアの子宮にくっついている！');
                text.push('内外からの刺激にレヴァンティアの子宮は\n快感をダラダラと垂れ流している….');
            } if (v.statusA) {
                text.push('リリスの尻尾が子宮口を擦った！');
            } if (v.statusC || v.statusE) {
                text.push('尻尾が中を突く度に、レヴァンティアはだらしない嬌声を漏らしている….');
            } if (v.statusE) {
                text.push('リリスの尻尾の先がレヴァンティアのＧスポットを押した!');
            } if (v.statusC || v.statusE) {
                text.push('レヴァンティアの表情がメスの快感で歪んだ…。');
                text.push('レヴァンティアに刻まれた淫紋が赤く光った!');
            } if (v.statusC) {
                text.push('目が眩むような快感に、レヴァンティアのお尻がビクンと跳ね上がった!');
            }
            break;
        case 9:
            if (v.statusA) {
                text.push('レヴァンティアが動けない隙をついて、\nリリスの尻尾が子宮を容赦なくいじめた!');
                text.push('レヴァンティアはポルチオを刺激されて、\n我慢できずに下品な喘ぎ声を漏らした.');
            } if (v.statusD) {
                text.push('レヴァンティアは淫魔の手によって子宮でイかされてしまった….');
            } if (v.statusA || v.statusD) {
                text.push('絶頂の余波でレヴァンティアの体から魔力が暴走した！');
                text.push('しかし、増えた量以上にリリスに魔力を吸い取られてしまった….');
                text.push('レヴァンティアに刻まれた淫紋の光がより強まった.');
            } if (v.statusC) {
                text.push('リリスの尻尾が子宮の裏側を突き上げている!');
            } if (v.statusC || v.statusE) {
                text.push('リリスの手がレヴァンティアの下腹部をグリグリと押した！');
            } if (v.statusE) {
                text.push('リリスの尻尾が子宮口を擦った！');
            } if (v.statusC || v.statusE) {
                text.push('内外からの刺激にレヴァンティアの子宮は快感をダラダラと垂れ流している…。');
            }
            break;
        case 10:
            if (v.statusA) {
                text.push('リリスの指がレヴァンティアの下腹部をぐっと押した.');
                text.push('レヴァンティアに刻まれた淫紋が赤く光った.');
            } if (v.statusD) {
                text.push('レヴァンティアの繰り返される抵抗に拘束魔法が砕けた.');
                text.push('レヴァンティアはリリスに向かって突進した!');
                text.push('しかし、淫紋が光った瞬間、動きが固まってしまった….');
            } if (v.statusA || v.statusD) {
                text.push('リリスの尻尾がレヴァンティアの膣内に潜り込んだ！');
                text.push('急な快感に、レヴァンティアは思わず嬌声をこぼしてしまう….');
            } if (v.statusC || v.statusE) {
                text.push('太い尻尾がレヴァンティアのマンコを絶え間なく突く。');
            } if (v.statusC) {
                text.push('レヴァンティアはポルチオを刺激されて、\n下品な喘ぎ声を上げまくった.');
                text.push('本人の意思などお構いなしに、\nレヴァンティアは子宮でイってしまった….');
            } if (v.statusE) {
                text.push('しかし、レヴァンティアは抵抗することすら考えられず、\nマン汁ばかり垂れ流している….');
            } if (v.statusC || v.statusE) {
                text.push('絶頂の余波でレヴァンティアの体から魔力が暴走した！');
                text.push('しかし、増えた量以上にリリスに魔力を吸い取られてしまった….');
            } if (v.statusC) {
                text.push('魔力を吸い取られたせいで、レヴァンティアの抵抗力が下がった….');
            } if (v.statusE) {
                text.push('レヴァンティアに刻まれた淫紋の光がより強まった.');
            }
            break;
        case 11:
            if (v.statusD) {
                text.push('抵抗できないレヴァンティアの子宮をリリスの尻尾が触っている.');
            } if (v.statusA || v.statusD) {
                text.push('抵抗できないレヴァンティアの子宮をリリスの尻尾が触っている。');
            } if (v.statusA) {
                text.push('リリスの指がたっぷりと勃起した乳首をぐっと握った!');
            } if (v.statusA || v.statusD) {
                text.push('電流が走るような快感に、レヴァンティアの首がガクッと下がった！');
                text.push('レヴァンティアの胸からは真っ白な魔力がこぼれ落ちている….');
            } if (v.statusE) {
                text.push('レヴァンティアの繰り返される抵抗に拘束魔法が砕けた.');
            } if (v.statusC || v.statusE) {
                text.push('レヴァンティアの脚の間には、すでに愛液の水たまりが出来上がっている…。');
                text.push('レヴァンティアの片手が太ももを這うように股へ向かった.');
                text.push('レヴァンティアは性欲に負け、自らクリトリスを触りはじめた….');
            }
            break;
        case 12:
            if (v.statusA || v.statusD) {
                text.push('レヴァンティアは快感に耐えようともがいている！');
                text.push('しかし、レヴァンティア.');
                text.push('レヴァンティアはリリスの命令どおりイってしまった….');
                text.push('リリスは絶頂で溢れ出た魔力を食いつくした.');
                text.push('魔力を吸われる快感にレヴァンティアの体がビクビクと震えた….');
            } if (v.statusE) {
                text.push('しかし、指を動かしても曖昧な快感しか感じられない….');
            } if (v.statusC || v.statusE) {
                text.push('リリスは嘲笑うような笑みを浮かべてレヴァンティアのオナニーを眺めている.');
            } if (v.statusC) {
                text.push('レヴァンティアはオナニーに気を取られ剣を落とした.');
                text.push('リリスの尻尾があらわになったレヴァンティアのマンコを突いた!');
                text.push('子宮を突き上げられる快感に、レヴァンティアの表情がだらしなくとろけ落ちた…。');
            } if (v.statusE) {
                text.push('リリスの尻尾がレヴァンティアの下腹部を誘惑するように押した.');
                text.push('レヴァンティアは気が遠くなるような気分がした….');
            }
            break;
        case 13:
            if (v.statusA) {
                text.push('レヴァンティアは体を丸め必死で抵抗した!');
                text.push('しかしリリスに命令されると、言われるがままにマンコをあらわにしてしまった….');
            } if (v.statusD) {
                text.push('レヴァンティアを拘束していた魔法陣が粉々に砕けた.');
                text.push('レヴァンティアは、かろうじて体を起こし剣を振りかざした!');
                text.push('しかし、レヴァンティアのマジカルソードからは刃が消えていた….');
            } if (v.statusA || v.statusD) {
                text.push('レヴァンティアのマンコから透明な糸がトロリと垂れ落ちている。');
            } if (v.statusA) {
                text.push('大きく開いたマンコにリリスの尻尾がくっついた!');
            } if (v.statusA || v.statusD) {
                text.push('細長い触手が中に潜り込み、子宮を撫ではじめた。');
            } if (v.statusC) {
                text.push('レヴァンティアは体を丸め必死で抵抗した!');
                text.push('しかしリリスに命令されると、\n言われるがままにマンコをあらわにしてしまった….');
                text.push('無防備なマンコにリリスの尻尾が突き刺さった!');
                text.push('レヴァンティアはメスの顔をして快楽にのめり込んでしまった….');
            } if (v.statusE) {
                text.push('レヴァンティアは剣も落としたままオナニーに没頭している.');
                text.push('リリスの尻尾があらわになったレヴァンティアのマンコを突いた!');
                text.push('レヴァンティアはリリスの命令どおりイってしまった.');
                text.push('リリスは絶頂で溢れ出た魔力を食いつくした.');
                text.push('魔力を吸われる快感にレヴァンティアの体がビクビクと震えた….');
            }
            break;
    }
}

function slime2ndText(text, v) {
    switch (v.hCount) {
        case 1:

            text.push('水たまりからナメクジ型触手の群れの攻撃!');
            text.push('小さな触手がレヴァンティアの脚にくっついた!');
            text.push('レヴァンティアの攻撃！');
            text.push('しかし、まだたくさんの触手がレヴァンティアにくっついている….');
            break;
        case 2:

            text.push('ナメクジ型触手はレヴァンティアの太ももを伝ってあがってきた.');
            text.push('気持ち悪い感覚に、レヴァンティアは身震いした….');
            break;
        case 3:

            text.push('流線型の体がレオタードの中へ潜り込んだ….');
            text.push('ナメクジ型触手の膣内侵入!');
            text.push('だが、魔力の防壁に遮られ失敗におわった.');
            text.push('レヴァンティアの大事なところは、魔法によって守られている!');
            break;
        case 4:

            text.push('ナメクジ型触手は別の入口を探しはじめた.');
            text.push('ナメクジ型触手はレヴァンティアのお尻の間に潜り込んだ.');
            text.push('ナメクジ型触手の先っぽがレヴァンティアのアナルに触れた!');
            break;
        case 5:

            text.push('ナメクジ型触手の先っぽが、ギュウッと閉まったアナルの隙間に潜り込んだ.');
            text.push('レヴァンティアはお尻をギュウッと締めるが、\nヌメヌメしている触手はどんどん奥の方へと潜り込んでいった….');
            text.push('ズブッ、厚いところを過ぎると、触手は一気に中の方へと滑り込んでいった.');
            text.push('レヴァンティアのお腹の中から、何かがうごめくような感覚を感じた….');
            break;
    }
} function slime3rdText(text, v) {
    switch (v.hCount) {
        case 1:
            if (v.statusA || v.statusB || v.statusC || v.statusD) {
                text.push('天井に潜んでいた触手が、液体をまき散らした！');
                text.push('触手の液体でスーツが溶けている….');
                text.push('レヴァンティアのスーツが破れた.');
            }
            break;
        case 2:
            if (v.statusA || v.statusB || v.statusC || v.statusD) {
                text.push('レヴァンティアの剣が、天井の触手を的確に切り裂いた！');
                text.push('切り裂いた触手の断面から液体が四方に飛び散った!');
                text.push('不意を突かれたレヴァンティアは液体をかぶってしまった….');
                text.push('レヴァンティアのスーツが破れた.');
            }
            break;
        case 3:
            if (v.statusA || v.statusB || v.statusC || v.statusD) {
                text.push('触手は液体を噴き出した！');
                text.push('レヴァンティアは正面の攻撃を防ぐため避けられない.');
                text.push('レヴァンティアは後ろから液体をかぶった….');
                text.push('レヴァンティアのスーツはもうボロボロだ.');
            } if (v.statusB || v.statusC) {
                text.push('もたもたしているレヴァンティアの姿に、チャットは盛り上がった！');
            } if (v.statusD) {
                text.push('もたもたしているレヴァンティアは市民から性的な嘲笑を浴びた.');
            }
            break;
        case 4:
            if (v.statusA || v.statusB || v.statusD) {
                text.push('レヴァンティアは大型触手に拘束された。');
            } if (v.statusD) {
                text.push('動けなくなったレヴァンティアに、触手が突進した!');
            } if (v.statusA || v.statusB || v.statusD) {
                text.push('レヴァンティアの口に触手の太い管が突っこまれた！');
                text.push('レヴァンティアの口の中に触手の発情液が注ぎ込まれた.');
                text.push('レヴァンティアの体が火照りだした.');
            } if (v.statusC) {
                text.push('大型触手がレヴァンティアの体にまとわりついた！');
                text.push('丸出しになってしまったレヴァンティアのお尻の間に、触手がくっついた!');
                text.push('奇襲的な快感に、レヴァンティアは下品な喘ぎ声を垂らしてしまった….');
                text.push('触手はレヴァンティアのアナルから体液を舐めまわしている!');
                text.push('レヴァンティアの脚が、感電されたみたいに何度も跳ね上がった.');
            }
            break;
        case 5:
            if (v.statusA || v.statusB || v.statusC) {
                text.push('大型触手がレヴァンティアの体にまとわりついた！');
            } if (v.statusA) {
                text.push('レヴァンティアは口を閉じようとしたが、\n全身を押しつぶすような圧迫感に苦痛のうめき声を漏らしてしまった…。');
                text.push('レヴァンティアの開いた口の中に触手が容赦なく入り込んだ.');
            } if (v.statusB || v.statusD) {
                text.push('丸出しになってしまったレヴァンティアのお尻の間に、触手がくっついた！');
                text.push('触手はレヴァンティアのアナルを舐めている.');
            } if (v.statusD) {
                text.push('しかし、媚薬に侵された体では触手を振りほどくことはできなかった.');
            } if (v.statusA || v.statusB || v.statusD) {
                text.push('レヴァンティアの口に発情液が注がれた。');
            } if (v.statusB) {
                text.push('液体を飲み込む度に、\nレヴァンティアのお腹の下からベトッとした熱気が広がってきた.');
            } if (v.statusD) {
                text.push('レヴァンティアの体は発情してしまった。');
            } if (v.statusC) {
                text.push('触手はしつこく、レヴァンティアのアナルを舐めている!');
                text.push('触手の舌は体液を探し、レヴァンティアのアナルの奥へと潜り込んだ.');
                text.push('レヴァンティアはアナルを舐められて、イってしまった….');
                text.push('レヴァンティアのアナルは、触手の体液でツヤツヤしていた.');
            }
            break;
        case 6:
            if (v.statusA || v.statusB) {
                text.push('動けなくなったレヴァンティアの目の前に、\n大型触手の交尾器が突きつけられた.');
                text.push('太い交尾器が、レヴァンティアのお尻の間に潜り込んだ.');
            } if (v.statusD) {
                text.push('動けなくなったレヴァンティアの目の前に、\n大型触手の交尾器が突きつけられた.');
                text.push('レヴァンティアは脚を搔き回して交尾器を振りはらおうとした!');
            } if (v.statusA || v.statusB || v.statusD) {
                text.push('触手はぎゅっと閉まったレヴァンティアのアナルを貫通した！');
            } if (v.statusA) {
                text.push('アナルを貫かれる衝撃に、レヴァンティアの口から悶絶するような声が漏れた.');
            } if (v.statusB || v.statusD) {
                text.push('レヴァンティアは触手に挿入された。');
            } if (v.statusC) {
                text.push('動けなくなったレヴァンティアの目の前に、\n大型触手の交尾器が突きつけられた.');
                text.push('レヴァンティアは思わず、触手に犯される自分を想像してしまった.');
                text.push('熱い触手の交尾器がレヴァンティアのお尻をグイッと押した.');
                text.push('レヴァンティアは触手に挿入された.');
            }
            break;
        case 7:
            if (v.statusA || v.statusB) {
                text.push('人間とはまったく違う、\nでこぼことした触手がレヴァンティアのアナルを弄りまわした.');
                text.push('レヴァンティアがじたばたさせた足が、\n触手の交尾器に命中した!');
                text.push('怒った触手は仕返しするかのように\nレヴァンティアの結腸の内側を押しつぶした.');
                text.push('アナルを擦られる感覚に、\nレヴァンティアの脚が痙攣するように震えた.');
            } if (v.statusC) {
                text.push('人間とはまったく違う、\nでこぼことした触手の交尾器がレヴァンティアのアナルを弄っている.');
                text.push('いきすぎた快感に、\nレヴァンティアは反射的に逃げようとした.');
                text.push('メスの生意気な抵抗に、\n触手は結腸の内側を押さえつけて仕返しした.');
                text.push('アナルが擦られる感覚に、\nレヴァンティアの脚が痙攣するように折れ曲がった.');
            }
            break;
        case 8:
            if (v.statusA || v.statusB || v.statusD) {
                text.push('レヴァンティアは触手の挿入に抵抗するため、\nお尻をギュウッと締めた！');
                text.push('だが、粘液をまとった触手は、\nすっとレヴァンティアの中へと滑り込んでいった….');
            } if (v.statusD) {
                text.push('レヴァンティアの子宮が、切なくうずく…。');
            } if (v.statusA || v.statusB || v.statusD) {
                text.push('容赦ない動きにレヴァンティアの腰が弓みたいに曲がった。');
            } if (v.statusA) {
                text.push('レヴァンティアの体が嫌悪感で震えた。');
            } if (v.statusB || v.statusD) {
                text.push('触手はもうすぐ射精しそうだ…。');
            } if (v.statusC) {
                text.push('レヴァンティアは触手の挿入に抵抗するため、\nお尻をギュウッと締めた.');
                text.push('しかし、触手の交尾器がお尻に触れると、\n反射的に力が抜けてしまった….');
                text.push('無防備に広がったアナルに、\n触手はすっと滑り込んでいった.');
                text.push('触手に種付けされると思ったとたん、\nレヴァンティアのアナルが射精をねだるようにギュウッと締め付けた.');
                text.push('触手はもうすぐ射精しそうだ….');
            }
            break;
        case 9:
            if (v.statusD) {
                text.push('触手の根元にあったこぶが、だんだん上へと移動している.');
            } if (v.statusA || v.statusB || v.statusD) {
                text.push('触手が膨らむにつれ、\\\nレヴァンティアのアナルもさらに一段と膨れあがった。');
            } if (v.statusA || v.statusB) {
                text.push('膨らんだこぶは、\nレヴァンティアのアナルの中に全部入った。');
            } if (v.statusC) {
                text.push('触手が膨らむにつれ、レヴァンティアのアナルも一段と膨れあがった.');
                text.push('アナルが広がる感覚に、レヴァンティアは熱い息を吐いた.');
            } if (v.statusA || v.statusB || v.statusC) {
                text.push('大型触手は残った部分を搾り出すように、交尾器を掴んで一気に引き抜いた。');
            } if (v.statusA || v.statusB || v.statusC || v.statusD) {
                text.push('太い何かが抜ける感覚に、レヴァンティアは絶頂してしまった。');
            } if (v.statusA || v.statusB) {
                text.push('新しい交尾器がレヴァンティアの目の前に突きつけられた。');
            } if (v.statusC) {
                text.push('レヴァンティアの腸内に、熱い液体が注がれた….');
            } if (v.statusD) {
                text.push('マンコから溢れ出た愛液がレヴァンティアの太ももを伝って垂れた。');
            } {
                text.push('新しい交尾器がレヴァンティアの目の前に突きつけられた.');
            }
            break;
        case 10:
            if (v.statusA || v.statusB || v.statusD) {
                text.push('レヴァンティアはアナルを犯されることに、\nゾクゾクする快感を感じている…。');
                text.push('触手は桃色のアナルを何度も弄くった!');
                text.push('レヴァンティアのアナルは、太い触手を受け入れている….');
            } if (v.statusC) {
                text.push('レヴァンティアは絶頂の余韻でまともに動けない….');
                text.push('レヴァンティアのアナルは、\n当たり前のように触手の交尾器を受け入れている….');
                text.push('触手は縦に割れたアナルを何度も弄くった.');
                text.push('レヴァンティアは触手の交尾器に突かれて、あんあん喘いでいる.');
            }
            break;
        case 11:
            if (v.statusA || v.statusB || v.statusC || v.statusD) {
                text.push('レヴァンティアは体にまとわりついた触手の中でもがいた！');
            } if (v.statusA || v.statusB || v.statusD) {
                text.push('触手は無防備に露出したアナルを容赦なく犯した。');
                text.push('触手はうるさいメスの口に発情液をぶち込んだ!');
            } if (v.statusC) {
                text.push('触手は無防備に露出したアナルを容赦なく犯した.');
                text.push('レヴァンティアはさっきよりも必死にもがいた!');
                text.push('しかし、触手に交尾器を挿れられると、ビクつくことしかできなかった….');
            } if (v.statusD) {
                text.push('アナルを弄る触手の動きが、一段と早くなった.');
                text.push('甘い液体が、レヴァンティアの喉を通り過ぎた.');
            } if (v.statusA || v.statusB || v.statusC || v.statusD) {
                text.push('レヴァンティアは魔法の代わりに、嬌声と喘ぎ声を垂らしている…。');
            }
            break;
    }
} function slime4thText(text, v) {
    switch (v.hCount) {
        case 1:
            if (v.statusA || v.statusD) {
                text.push('レヴァンティアは距離をとり、強力な魔法を詠唱しようとした。');
                text.push('しかし、触手の群れは大量の液体を乱射した!');
            } if (v.statusC || v.statusE) {
                text.push('しかし、触手の群れは大量の液体を乱射した！');
            } if (v.statusA || v.statusD || v.statusC || v.statusE) {
                text.push('レヴァンティアは飛んでくる液体を素早くかわした。');
                text.push('しかし、噴き出す液体をすべて避けることができずかすってしまった.');
                text.push('触手の液体でスーツが少し溶けてしまった….');
            }
            break;
        case 2:
            if (v.statusA || v.statusD) {
                text.push('無数の触手たちがコア部分のまわりをあっという間に取り囲んだ。');
            } if (v.statusC || v.statusE) {
                text.push('攻撃の隙を狙ってレヴァンティアは群れのコア部分に向かって突進した！');
                text.push('しかし、すでに無数の触手たちがコア部分のまわりを取り囲んでいる….');
            } if (v.statusA || v.statusD || v.statusC || v.statusE) {
                text.push('レヴァンティアは大きく剣をふるい触手の包囲を突破した！');
                text.push('しかし抜け出す途中、液体をかぶってしまった….');
                text.push('レヴァンティアの上半身のスーツが破れた.');
            }
            break;
        case 3:
            if (v.statusA || v.statusD || v.statusC || v.statusE) {
                text.push('レヴァンティアは液体の水たまりにはまってしまった…。');
                text.push('レヴァンティアはすぐに水たまりから抜け出した!');
                text.push('しかし、レヴァンティアの下半身はすでに液体まみれである.');
                text.push('レヴァンティアのスーツはもうボロボロだ….');
            } if (v.statusA || v.statusD) {
                text.push('レヴァンティアは手を後ろに回してカメラ側の体を覆った。');
            } if (v.statusC || v.statusE) {
                text.push('レヴァンティアは手を伸ばして体の前の方を隠した。');
            }
            break;
        case 4:
            if (v.statusA || v.statusD) {
                text.push('天井に張り付いた触手が巨大な口をガバッと開いていた。');
                text.push('予期していなかった光景にレヴァンティアは暫くぼーっとしてしまった….');
            } if (v.statusC) {
                text.push('群れはレヴァンティアの目の前に触手の交尾器を突き出した!');
            } if (v.statusE) {
                text.push('レヴァンティアは触手の端から落ちてくるザーメンを\n憑りつかれたように眺めていた….');
            } if (v.statusC || v.statusE) {
                text.push('触手の交尾器に気を取られていたレヴァンティアは避けるのが遅れてしまった…。');
            } if (v.statusA || v.statusD || v.statusC || v.statusE) {
                text.push('レヴァンティアは巨大な捕獲用の触手に上半身をのみ込まれた。');
            } if (v.statusA || v.statusD) {
                text.push('捕獲用の触手の中で濃密な媚薬ガスが噴き出た！');
            } if (v.statusC || v.statusE) {
                text.push('クローンはレヴァンティアの後ろに回り、陰唇を左右に広げた！');
                text.push('小さなマンコからベトッとした愛液がジュルルと滴り落ちた….');
            }
            break;
        case 5:
            if (v.statusA || v.statusD) {
                text.push('レヴァンティアは息を止めて抵抗している！');
                text.push('レヴァンティアは上半身を引っ張っている.');
                text.push('丸出しになったレヴァンティアのお尻に触手がくっついた!');
                text.push('触手は無防備にあらわになっ桃色のアナルに注入口を寄せ付けた.');
                text.push('レヴァンティアの体は触手の体液に覆われた.');
            } if (v.statusC || v.statusE) {
                text.push('丸出しになったレヴァンティアのお尻に触手がくっついた！');
                text.push('触手はいやらしく縦に割れたアナルに注入口をあてがった.');
                text.push('触手はレヴァンティアの腸内に体液を流し込んだ!');
                text.push('レヴァンティアの体は触手の体液に覆われた.');
            } if (v.statusE) {
                text.push('レヴァンティアはすでに発情中だ…。');
            }
            break;
        case 6:
            if (v.statusA || v.statusD) {
                text.push('レヴァンティアは捕獲用の触手の中でもがいた！');
            } if (v.statusA) {
                text.push('触手の交尾器が飛び出たレヴァンティアの下半身に向かった.');
                text.push('交尾器の先っぽがレヴァンティアのギュッと閉じたアナルを押し付けた.');
            } if (v.statusD) {
                text.push('触手の交尾器が飛び出したレヴァンティアの下半身に向かった.');
                text.push('ゴツゴツした交尾器の先っぽが\nレヴァンティアのギュッと閉じたアナルを押し付けた.');
            } if (v.statusA || v.statusD) {
                text.push('触手はレヴァンティアのアナルを一気に貫通した！');
                text.push('レヴァンティアは触手にアナル処女を奪われてしまった….');
            } if (v.statusE) {
                text.push('触手はレヴァンティアの腸内にさらに体液を注入した!');
            } if (v.statusC || v.statusE) {
                text.push('限界を超えて注入されたレヴァンティアのお腹は小さく膨れ上がった。');
                text.push('クローンはレヴァンティアのお腹を強く押さえつけた!');
                text.push('レヴァンティアのアナルから触手の体液が噴き出した.');
                text.push('レヴァンティアは浣腸の快感で絶頂してしまった….');
            }
            break;
        case 7:
            if (v.statusA) {
                text.push('レヴァンティアのアナルを触手の交尾器が容赦なく弄った!');
            } if (v.statusD) {
                text.push('抵抗できないレヴァンティアのアナルを触手の交尾器が容赦なく弄った!');
            } if (v.statusA || v.statusD) {
                text.push('レヴァンティアは触手の挿入に抵抗するため、\nお尻をギュウッと締めた！');
                text.push('だが、粘液をまとった触手は、\nすっとレヴァンティアの中へと滑り込んでいった….');
                text.push('レヴァンティアはこれまで感じたことのない快楽に混乱している.');
            } if (v.statusC || v.statusE) {
                text.push('太い触手の交尾器が突き出たレヴァンティアの下半身に向かった。');
            } if (v.statusC) {
                text.push('触手のずっしりした先っぽが\nレヴァンティアのひろがったアナルを押さえつけた.');
                text.push('ギュッと食いしばったレヴァンティアのマンコから\n愛液が長い糸のように伸びた.');
            } if (v.statusE) {
                text.push('レヴァンティアは触手の前で軽くお尻を振っている….');
                text.push('触手はレヴァンティアの後腸を一気に貫通した!');
            } if (v.statusC || v.statusE) {
                text.push('レヴァンティアのアナルは、当たり前のように分厚い触手を受け入れている…。');
            }
            break;
        case 8:
            if (v.statusA || v.statusD) {
                text.push('レヴァンティアのお腹の下は触手の形態に膨れている。');
            } if (v.statusA) {
                text.push('太い交尾器の中で何かがうごめいている!');
            } if (v.statusD) {
                text.push('太い触手の交尾器の中で何かがうごめいている!');
            } if (v.statusA || v.statusD) {
                text.push('レヴァンティアは生理的に恐怖に襲われ見悶えた。');
                text.push('触手はもうすぐ射精しそうだ.');
            } if (v.statusC || v.statusE) {
                text.push('レヴァンティアは捕獲用の触手に上半身を取り押さえられたままだ。');
                text.push('抵抗できないレヴァンティアのアナルを触手の交尾器が容赦なく弄った!');
                text.push('クローンの命令に従った触手はレヴァンティアの結腸の内側を押しつけた!');
                text.push('敏感な弱点を攻略され、レヴァンティアの口から下品な喘ぎ声が漏れだした….');
            }
            break;
        case 9:
            if (v.statusA) {
                text.push('交尾器の中にあった何かが徐々に上のほうへ移動した.');
                text.push('交尾器が膨らむにつれ、レヴァンティアのアナルもさらに広がった!');
            } if (v.statusD) {
                text.push('触手の交尾器の中にあった何かがだんだん上の方に移動した.');
                text.push('触手の交尾器が膨れ上がるにつれ、レヴァンティアのアナルもより一層広がった!');
            } if (v.statusA || v.statusD) {
                text.push('熱い体液と共に他の触手がレヴァンティアの腸内に注がれた。');
                text.push('絶頂の余波でレヴァンティアの魔力が急激に膨れ上がった.');
                text.push('暴走の余波でレヴァンティアの周りの触手がぜんぶ押し出された.');
            } if (v.statusC || v.statusE) {
                text.push('レヴァンティアのお腹の下は触手の形態に膨れている。');
                text.push('レヴァンティアは期待感にうずく子宮を否定するように身悶えした.');
                text.push('しかし、レヴァンティアの抵抗に群れは乱暴に触手を回転させた!');
                text.push('腸壁が擦れる快感にレヴァンティアはビクつくばかりだった….');
            }
            break;
        case 10:
            if (v.statusA || v.statusD) {
                text.push('レヴァンティアは群れに対抗するため魔力を引き上げた。');
                text.push('しかし魔力が集まった瞬間、お腹の中で寄生体が暴れだした!');
                text.push('レヴァンティアは身体を強化できる分だけの魔力を引き出した.');
                text.push('魔力を感知した寄生体がレヴァンティアの腸の中で動きはじめた!');
            } if (v.statusC || v.statusE) {
                text.push('触手の中にあった何かがだんだん上の方に移動した。');
                text.push('触手が膨らむにつれ、レヴァンティアのアナルもさらに広がった!');
                text.push('熱い体液と共に他の触手がレヴァンティアの腸内に注がれた.');
            } if (v.statusC) {
                text.push('レヴァンティアは寄生されてしまった…。');
                text.push('絶頂の余波で、レヴァンティアの魔力が膨れあがった.');
                text.push('しかし、暴走の余波は周りの触手を\nそっと押しのけることしかできなかった….');
            } if (v.statusE) {
                text.push('クローンが手で指示するとレヴァンティアを\n覆っていた捕獲型触手が剥がれた.');
                text.push('レヴァンティアは快楽に溶けたメスの顔をしている….');
            }
            break;
        case 11:
            if (v.statusA || v.statusD) {
                text.push('レヴァンティアの上に捕獲用の触手が大きな口を開いて襲い掛かった！');
                text.push('レヴァンティアは再び捕獲用の触手に捕まってしまった….');
                text.push('レヴァンティアは捕獲用の触手に抵抗しようとした.');
                text.push('しかし、レヴァンティアが力を発揮した瞬間、寄生体が暴れだした!');
            } if (v.statusC || v.statusE) {
                text.push('レヴァンティアは寄生体に弄ばれていた…。');
                text.push('レヴァンティアは再び捕獲用の触手に捕まってしまった….');
                text.push('レヴァンティアは捕獲用の触手に抵抗しようとした.');
                text.push('しかし、レヴァンティアが力を発揮した瞬間、寄生体が暴れだした!');
                text.push('寄生体が与える快感にレヴァンティアはまったく抵抗できずにいた….');
            }
            break;
        case 12:
            if (v.statusA || v.statusD) {
                text.push('レヴァンティアの指が広がった肛門に入り込んだ。');
                text.push('レヴァンティアは隠れていた寄生体を捕まえた!');
                text.push('レヴァンティアに捕まえらえた寄生体が暴れはじめた!');
                text.push('腸壁を搔き回される快楽にレヴァンティアの目の前がきらめいた.');
                text.push('レヴァンティアは寄生体を掴んで取り出しはじめた!');
            } if (v.statusC || v.statusE) {
                text.push('レヴァンティアは顔を赤らめながらお腹の下に力を入れた。');
                text.push('広がった肛門の間に寄生体が姿をあらわしだした.');
                text.push('クローンは寄生体を捕まえては再びレヴァンティアのアナルに突き刺した!');
                text.push('快感でレヴァンティアの脚は限界にまで伸びたまま痙攣した.');
            } if (v.statusE) {
                text.push('押さえつけられた膣内から脚の間に愛液が溢れ出てきた.');
            }
            break;
        case 13:
            if (v.statusA || v.statusD) {
                text.push('レヴァンティアのアナルから寄生体が出てきた！');
                text.push('太い何かを排出する感覚にレヴァンティアは絶頂してしまった….');
            } if (v.statusA) {
                text.push('無防備に広がったレヴァンティアのアナルに触手の交尾器が当たった.');
            } if (v.statusD) {
                text.push('無防備に広がったレヴァンティアのアナルに触手の交尾器が当たった.');
            } if (v.statusA || v.statusD) {
                text.push('レヴァンティアはまともに抵抗すらできないまま犯されてしまった…。');
            } if (v.statusC || v.statusE) {
                text.push('寄生体が暴れ回りビリビリする快感に力が抜けてしまった…。');
                text.push('クローンの手がレヴァンティアのアナルに潜り込んだ!');
                text.push('クローンはレヴァンティアのアナルから寄生触手を取り出した!');
                text.push('存分に弄ばれたアナルは中を露わにしたままビクついている.');
                text.push('群れは絶頂直後のレヴァンティアに触手を挿れ込んだ!');
            }
            break;
    }
}
