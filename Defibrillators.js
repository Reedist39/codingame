const LON = readline();
const LAT = readline();
//数値として計算できるようにカンマをピリオドに置き換え、キャストする
let lon = Number(LON.replace(",", "."));
let lat = Number(LAT.replace(",", "."));
const N = parseInt(readline());

let defibs = [];
for (let i = 0; i < N; i++) {
    //defibrillatorsの必要な情報を分割して配列defibsに入れる(緯度と軽度は数値計算できるようにキャスト)
    const DEFIB = readline().split(";");
    defibs.push({"index": DEFIB[0], "name": DEFIB[1], "lon": Number(DEFIB[4].replace(",", ".")), "lat": Number(DEFIB[5].replace(",", "."))});
};

//ansと比較対象となるdistを初期化
let ans = defibs[0].name;
let dist = distance(lon, lat, defibs[0].lon, defibs[0].lat);

for (let i = 1; i < N; i++) {
    //各地点と現在地点の距離がdistより短ければ更新
    if (distance(lon, lat, defibs[i].lon, defibs[i].lat) < dist) {
        ans = defibs[i].name;
        dist = distance(lon, lat, defibs[i].lon, defibs[i].lat);
    }
}

//距離を求める関数を作成
function distance(lon1, lat1, lon2, lat2) {
    return Math.sqrt(Math.pow(((lon2 - lon1) * Math.cos((lat1 + lat2) / 2)), 2) + Math.pow((lat2 - lat1), 2));
}

console.log(ans);