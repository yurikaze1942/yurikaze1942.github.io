
//2024年 6月 12日 21時 34分 36秒
var DisplayFormats = 
{
    "21:34" : "<t:X:t>",
    "21:34:36" : "<t:X:T>",
    "2024/06/12" : "<t:X:d>",
    "2024年06月12日" : "<t:X:D>",
    "2024年06月12日 21:34" : "<t:X:f>",
    "2024年06月12日 水曜日 21:34" : "<t:X:F>",
    "5か月後 / 5時間後 / 5分後 (相対時間。XX時間前など)" : "<t:X:R>",
}

var formatList = document.getElementById("list_DisplayFormat");

for (const key in DisplayFormats)
    {
        if (Object.hasOwnProperty.call(DisplayFormats, key))
        {
            formatList.add(new Option(key,DisplayFormats[key]));
        }
    }

    var input_time = document.getElementById("input_time");

var createButton = document.getElementById("create");
createButton.onclick = onCreate;

var resultText = document.getElementById("result");

var copyButton = document.getElementById("copy");
copyButton.onclick = 
function()
{
    navigator.clipboard.writeText(resultText.value);
}


function onCreate()
{
    let _time = new Date(input_time.value)
    let rText = formatList.value.replace("X", _time.getTime()*0.001);
    resultText.value = rText;
}