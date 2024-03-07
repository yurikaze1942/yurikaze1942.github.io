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




function onCreate()
{
    let location = "";
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
                        location = key2;
                    }
                }
            }
        }
    }

    let char = "";
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
                        char = key2;
                    }
                }
            }
        }
    }

    let seal = "";
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
                        seal = key2;
                    }
                }
            }
        }
    }

    alert(
        "地域 : " + location + " / "+LocationDD.value+"\n" +
        "番号 : \n" + 
        TypeNumber[Type1.value] + "-" + 
        TypeNumber[Type2.value] + "-" + 
        TypeNumber[Type3.value] + "\n" +
        "文字 :" + char + " / "+Char2.value+"\n"+
        "番号 : \n" + 
        NumberChar[Number1.value] + " " +
        NumberChar[Number2.value] + " " +
        NumberChar[Number3.value] + " " +
        NumberChar[Number3.value] + "\n" +
        "ハイフン : " + IsHyphen.checked +"\n"+
        "封印 : " + seal + " / "+Seal2.value+"\n" +
        "ネジ : " +IsBolt.checked
    );
}
