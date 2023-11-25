/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
const X0 = parseInt(inputs[0]);
const Y0 = parseInt(inputs[1]);

function getRandomInt(min, max) {
    // Math.floorとMath.randomを使用してランダムな整数を生成
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

let ansX = X0;
let ansY = Y0;

let limX = [0, W - 1];
let limY = [0, H - 1];
// game loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    //inputの値によってxとyが取りうる範囲を決定する

    //inputにUを含む場合（y座標はansYより小さくなる）
    if (bombDir.startsWith("U")) {
        limY[1] = ansY - 1;
    //inputにDを含む場合（y座標はansYより大きくなる）
    } else if (bombDir.startsWith("D")) {
        limY[0] = ansY + 1;
    }

    //inputにUを含む場合（y座標はansYより小さくなる）
    if (bombDir.endsWith("R")) {
    limX[0] = ansX + 1;
    //inputにDを含む場合（y座標はansYより大きくなる）
    } else if (bombDir.endsWith("L")) {
        limX[1] = ansX - 1;
    }

    //二分探索を行なって出てきた座標の小数点以下を切り捨てる
    ansX = Math.floor(limX[0] + (limX[1] - limX[0]) / 2);
    ansY = Math.floor(limY[0] + (limY[1] - limY[0]) / 2);

    // the location of the next window Batman should jump to.
    console.log(ansX + " " + ansY);
}
