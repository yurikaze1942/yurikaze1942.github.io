function onLocationListChange()
{
    if (LocationDD.hasChildNodes())
    {
        while (LocationDD.hasChildNodes())
        {
            LocationDD.removeChild(LocationDD.firstChild);
        }
    }

    for (const key in AreaLocation[AreaDD.value])
    {
        if (Object.hasOwnProperty.call(AreaLocation[AreaDD.value], key))
        {
            LocationDD.add(new Option(key,AreaLocation[AreaDD.value][key]));
        }
    }
}

function onCharListChange()
{
    if (Char2.hasChildNodes())
    {
        while (Char2.hasChildNodes())
        {
            Char2.removeChild(Char2.firstChild);
        }
    }
    
    for (const key in CharList[Char1.value])
    {
        if (Object.hasOwnProperty.call(CharList[Char1.value], key))
        {
            Char2.add(new Option(key,CharList[Char1.value][key]));
        }
    }
}

function onSealListChange()
{
    if (Seal2.hasChildNodes())
    {
        while (Seal2.hasChildNodes())
        {
            Seal2.removeChild(Seal2.firstChild);
        }
    }

    for (const key in Seal[Seal1.value])
    {
        if (Object.hasOwnProperty.call(Seal[Seal1.value], key))
        {
            Seal2.add(new Option(key,Seal[Seal1.value][key]));
        }
    }
}

function onBoltChange()
{
    if (Bolt.value == "non")
    {
        BoltPreview.src = "resource/base/mk_base.png";
    }
    else
    {
        BoltPreview.src = "resource/add/other/" + Bolt.value + ".png";
    }
}

function onPlateChange()
{
    if (Plate.value == "non")
    {
        PlatePreview.src = "resource/base/mk_base.png";
    }
    else
    {
        PlatePreview.src = "resource/base/" + Plate.value + ".png";
    }
}



function GetLocation()
{
    for (const key in AreaLocation)
    {
        if (Object.hasOwnProperty.call(AreaLocation, key))
        {
            for (const key2 in AreaLocation[key])
            {
                if (Object.hasOwnProperty.call(AreaLocation[key], key2))
                {
                    if (AreaLocation[key][key2] == LocationDD.value)
                    {
                        return key2;
                    }
                }
            }
        }
    }
}

function GetChar()
{
    for (const key in CharList)
    {
        if (Object.hasOwnProperty.call(CharList, key))
        {
            for (const key2 in CharList[key])
            {
                if (Object.hasOwnProperty.call(CharList[key], key2))
                {
                    if (CharList[key][key2] == Char2.value)
                    {
                        return key2;
                    }
                }
            }
        }
    }
}

function GetSeal()
{
    for (const key in Seal)
    {
        if (Object.hasOwnProperty.call(Seal, key))
        {
            for (const key2 in Seal[key])
            {
                if (Object.hasOwnProperty.call(Seal[key], key2))
                {
                    if (Seal[key][key2] == Seal2.value)
                    {
                        return key2;
                    }
                }
            }
        }
    }
}


function onCreate()
{
    // let location = GetLocation();
    

    // let char = GetChar();


    // let seal = GetSeal();
    

    // alert(
    //     "地域 : " + location + " / "+LocationDD.value+"\n" +
    //     "番号 : \n" + 
    //     TypeNumber[Type1.value] + "-" + 
    //     TypeNumber[Type2.value] + "-" + 
    //     TypeNumber[Type3.value] + "\n" +
    //     "文字 :" + char + " / "+Char2.value+"\n"+
    //     "番号 : \n" + 
    //     NumberChar[Number1.value] + " " +
    //     NumberChar[Number2.value] + " " +
    //     NumberChar[Number3.value] + " " +
    //     NumberChar[Number3.value] + "\n" +
    //     "ハイフン : " + IsRemoveHyphen.checked +"\n"+
    //     "封印 : " + seal + " / "+Seal2.value+"\n" +
    //     "ネジ : " + Bolt.value
    // );

//=============================

    Images.length = 0;
    CurrentProcess = 0;
    AllProcess = 0;

    //ベース
    if (Plate.value != "non")
    {
        Images.push("resource/base/"+Plate.value+".png");
    }

    //地名
    Images.push("resource/add/locate/"+LocationDD.value+".png");

    //u1
    Images.push("resource/add/u1/"+Type1.value+".png");

    //u2
    Images.push("resource/add/u2/"+Type2.value+".png");

    //u3
    Images.push("resource/add/u3/"+Type3.value+".png");

    //ひらがな
    Images.push("resource/add/char/"+Char2.value+".png");

    //s1
    Images.push("resource/add/s1/"+Number1.value+".png");

    //s2
    Images.push("resource/add/s2/"+Number2.value+".png");

    //s3
    Images.push("resource/add/s3/"+Number3.value+".png");

    //s4
    Images.push("resource/add/s4/"+Number4.value+".png");

    //ハイフン
    if (!IsRemoveHyphen.checked)
    {
        Images.push("resource/add/other/hh.png");
    }

    //ネジ
    if (Bolt.value != "non")
    {
        Images.push("resource/add/other/"+Bolt.value+".png");
    }

    //封印
    if (Seal2.value != "non")
    {
        Images.push("resource/add/seal/"+Seal2.value+".png");
    }


    console.log(Images);

    AllProcess = Images.length;
    Loaded.length = 0;

    ResultText.textContent = "画像を読み込み中 1/"+AllProcess;

    Loaded[CurrentProcess] = new Image();
    Loaded[CurrentProcess].src = Images[CurrentProcess];
    Loaded[CurrentProcess].onload = LoadImage;

    
}

function LoadImage()
{
    CurrentProcess++;
    ResultText.textContent = "画像を読み込み中 "+ (CurrentProcess + 1) +"/"+AllProcess;
    if (CurrentProcess == AllProcess)
    {
        ResultText.textContent = "画像を合成中";
        onComplete();
    }
    else
    {
        Loaded[CurrentProcess] = new Image();
        Loaded[CurrentProcess].src = Images[CurrentProcess];
        Loaded[CurrentProcess].onload = LoadImage;
    }
}

function onComplete()
{
    //合成用キャンバス
    let _canvas = document.createElement("canvas");
    //サイズは2048x1024固定
    _canvas.width = "2048";
    _canvas.height = "1024";

    let _context = _canvas.getContext("2d");

    //画像合成
    Loaded.forEach(item =>
    {
        _context.drawImage(item, 0, 0, _canvas.width, _canvas.height);
    });

    //いらない画像を破棄(してると思う)
    for (let i = Loaded.length-1; i >= 0; i--)
    {
        Loaded[i] = null;
    }
    Loaded.length = 0;

    ResultText.textContent = "完成品";

    let _url = _canvas.toDataURL("image/png");

    ResultImage.src = _url;
    DownloadResult.href = _url;
    DownloadResult.download = "Plate.png";

}