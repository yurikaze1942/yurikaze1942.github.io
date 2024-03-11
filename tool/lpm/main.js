/*
仕様素材メモ

ネジ
https://www.needpix.com/photo/download/1145271/screw-nail-washer-stainless-metal-iron-background-steel-cross


*/

var AreaDD = document.getElementById("AreaDD");
var LocationDD = document.getElementById("LocationDD");

AreaDD.onchange = onLocationListChange;

{
    for (const key in AreaLocation)
    {
        if (Object.hasOwnProperty.call(AreaLocation, key))
        {
            AreaDD.add(new Option(key,key));
        }
    }
    onLocationListChange();
}


var Type1 = document.getElementById("Type1");
var Type2 = document.getElementById("Type2");
var Type3 = document.getElementById("Type3");

{
    let index = 0;
    for (index = 0; index <= 30; index++)
    {
        if (index < 30)
        {
            Type1.add(new Option(TypeNumber[index],index));
            Type3.add(new Option(TypeNumber[index],index));
        }

        if (index < 20 || index == 30)
        {
            Type2.add(new Option(TypeNumber[index],index));
        }
    }
}


var Char1 = document.getElementById("Char1");
var Char2 = document.getElementById("Char2");

Char1.onchange = onCharListChange;

{
    for (const key in CharList)
    {
        if (Object.hasOwnProperty.call(CharList, key))
        {
            Char1.add(new Option(key,key));
        }
    }
    onCharListChange();
}


var Number1 = document.getElementById("Number1");
var Number2 = document.getElementById("Number2");
var Number3 = document.getElementById("Number3");
var Number4 = document.getElementById("Number4");


{
    let index = 0;
    for (index = 0; index < 11; index++)
    {
        Number1.add(new Option(NumberChar[index],index));
        Number2.add(new Option(NumberChar[index],index));
        Number3.add(new Option(NumberChar[index],index));
        Number4.add(new Option(NumberChar[index],index));
    }
}


var Seal1 = document.getElementById("Seal1");
var Seal2 = document.getElementById("Seal2");

Seal1.onchange = onSealListChange;

{
    for (const key in Seal)
    {
        if (Object.hasOwnProperty.call(Seal, key))
        {
            Seal1.add(new Option(key,key));
        }
    }
    onSealListChange();
}

var IsRemoveHyphen = document.getElementById("Hyphen");

var Bolt = document.getElementById("Bolt");
var BoltPreview = document.getElementById("BoltPreview");
Bolt.onchange = onBoltChange;
{
    for (const key in BoltList)
    {
        if (Object.hasOwnProperty.call(BoltList, key))
        {
            Bolt.add(new Option(key,BoltList[key]));
        }
    }
    Bolt.options[1].selected = true;
    onBoltChange();
}

var Plate = document.getElementById("Plate");
var PlatePreview = document.getElementById("PlatePreview");
Plate.onchange = onPlateChange;
{
    for (const key in PlateList)
    {
        if (Object.hasOwnProperty.call(PlateList, key))
        {
            Plate.add(new Option(key,PlateList[key]));
        }
    }
    Plate.options[1].selected = true;
    onPlateChange();
}


var Create = document.getElementById("Create");

Create.onclick = onCreate;


//読み込み済みの画像の数
var CurrentProcess = -1;

//読み込まなきゃいけない画像の数
var AllProcess = -1;

//合成する画像リスト
var Images = [];

//読み込み済みの画像オブジェクト
var Loaded = [];

var ResultImage = document.getElementById("Result");
var DownloadResult = document.getElementById("DownloadResult");

var ResultText = document.getElementById("ResultText");
ResultText.textContent = "ここに完成品が表示されます";