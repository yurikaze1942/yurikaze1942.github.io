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
    for (index = 0; index < 21; index++)
    {
        if (index < 20)
        {
            Type1.add(new Option(TypeNumber[index],index));
            Type3.add(new Option(TypeNumber[index],index));
        }

        if (index < 10 || index == 20)
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

var IsHyphen = document.getElementById("Hyphen");
var IsBolt = document.getElementById("Bolt");

var Create = document.getElementById("Create");

Create.onclick = onCreate;
