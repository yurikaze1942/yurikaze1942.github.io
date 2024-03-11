//上の数字
var TypeNumber = 
[
    "0",    //0
    "1",    //1
    "2",    //2
    "3",    //3
    "4",    //4
    "5",    //5
    "6",    //6
    "7",    //7
    "8",    //8
    "9",    //9
    "",//"A",    //10
    "",//"C",    //11
    "",//"F",    //12
    "",//"H",    //13
    "",//"K",    //14
    "",//"L",    //15
    "",//"M",    //16
    "",//"P",    //17
    "",//"X",    //18
    "",//"Y",    //19
    "",//"2桁 0",//20
    "",//"2桁 1",//21
    "",//"2桁 2",//22
    "2桁 3",//23
    "2桁 4",//24
    "2桁 5",//25
    "",//"2桁 6",//26
    "2桁 7",//27
    "",//"2桁 8",//28
    "",//"2桁 9",//29
    "2桁用 空白",//30
]//インデックスでファイル名管理してたせいで、ややこしいことになってるの図


//下の数字
var NumberChar = 
[
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "・",
]


//ひらがな
var CharList = 
{
    "あ行":
    {
        "あ":"1", 
        "い":"2", 
        "う":"3", 
        //"え":"4", 
    },
    "か行":
    {
        "":"non"
        //"か":"5", 
        //"き":"6", 
        //"く":"7", 
        //"け":"8", 
        //"こ":"9",
    },
    "さ行":
    {
        "さ":"10", 
        //"す":"11", 
        //"せ":"12", 
        //"そ":"13", 
    },
    "た行":
    {
        "":"non"
        //"た":"14", 
        //"ち":"15", 
        //"つ":"16", 
        //"て":"17", 
        //"と":"18", 
    },
    "な行":
    {
        //"な":"19", 
        //"に":"20", 
        "ぬ":"21", 
        //"ね":"22", 
        //"の":"23", 
    },
    "は行":
    {
        "は":"24", 
        //"ひ":"25", 
        //"ふ":"26", 
        //"ほ":"27", 
    },
    "ま行":
    {
        "":"non"
        //"ま":"28", 
        //"み":"29", 
        //"む":"30", 
        //"め":"31", 
        //"も":"32", 
    },
    "や行":
    {
        "や":"33", 
        //"ゆ":"34", 
        //"よ":"35", 
    },
    "ら行":
    {
        "ら":"36", 
        //"り":"37", 
        //"る":"38", 
        //"れ":"39", 
        //"ろ":"40", 
    },
    "わ行":
    {
        "わ":"41", 
    },
    "その他":
    {
        "":"non"
        //"E":"42", 
        //"H":"43", 
        //"K":"44", 
        //"M":"45", 
        //"T":"46", 
        //"Y":"47",
    }
}
