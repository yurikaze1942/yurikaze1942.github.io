var geid = document.getElementById.bind(document);

var _1r = geid("r1");
var _1g = geid("g1");
var _1b = geid("b1");

var _255r = geid("r255");
var _255g = geid("g255");
var _255b = geid("b255");

var _16 = geid("_16str");
var _cpick = geid("_cpick");

const C_CODE = /^#?[0-9A-Fa-f]{6}$/

geid("_1").onclick = function ()
{
    console.log("func");
    let _255 = _1t255(
        GetValue(_1r, 1, false),
        GetValue(_1g, 1, false),
        GetValue(_1b, 1, false)
    );
    _255r.value = _255.r;
    _255g.value = _255.g;
    _255b.value = _255.b;
    _16.value = _255t16(_255.r, _255.g, _255.b);
    _cpick.value = _16.value;
};

geid("_255").onclick = function ()
{
    let _255 = {
        r: GetValue(_255r, 255, true),
        g: GetValue(_255g, 255, true),
        b: GetValue(_255b, 255, true),
    };
    let _1 = _255t1(_255.r, _255.g, _255.b);
    _1r.value = _1.r;
    _1g.value = _1.g;
    _1b.value = _1.b;
    _16.value = _255t16(_255.r, _255.g, _255.b);
    _cpick.value = _16.value;
};

geid("_16").onclick = function ()
{
    let str = _16.value;
    if (!C_CODE.test(str))
    {
        str = "000000";
    }
    let _255 = _16t255(str);
    _255r.value = _255.r;
    _255g.value = _255.g;
    _255b.value = _255.b;
    let _1 = _255t1(_255.r, _255.g, _255.b);
    _1r.value = _1.r;
    _1g.value = _1.g;
    _1b.value = _1.b;
    _cpick.value = _255t16(_255.r, _255.g, _255.b);
}

geid("_cp").onclick = function ()
{
    let _255 = _16t255(_cpick.value);
    _255r.value = _255.r;
    _255g.value = _255.g;
    _255b.value = _255.b;
    let _1 = _255t1(_255.r, _255.g, _255.b);
    _1r.value = _1.r;
    _1g.value = _1.g;
    _1b.value = _1.b;
    _16.value = _cpick.value.toUpperCase();
}

function GetValue(_obj, _max, _isInt)
{
    let v = _obj.value;
    if (v == "") v = "0";
    if (_isInt) v = parseInt(v);
    else v = parseFloat(v);
    if (v < 0) v = 0;
    if (v > _max) v = _max;
    return v;
}

function _1t255(_r, _g, _b)
{
    return {
        r: Math.trunc(_r * 255),
        g: Math.trunc(_g * 255),
        b: Math.trunc(_b * 255),
    };
}

function _255t16(_r, _g, _b)
{
    return "#" + (_r.toString(16) + _g.toString(16) + _b.toString(16)).toUpperCase();
}

function _255t1(_r, _g, _b)
{
    return { r: _r / 255, g: _g / 255, b: _b / 255 };
}

function _16t255(_str)
{
    //012345
    //ABCDEF
    console.log("str: " + _str);
    _str = _str.replace("#", "");
    console.log("1: " + _str);
    let _r = _str.substring(0, 2);
    let _g = _str.substring(2, 4);
    let _b = _str.substring(4);
    console.log(`2: ${_str.substring(0, 2)} | ${_str.substring(2, 4)} | ${_str.substring(4)}`);
    console.log(`3: ${_r}/${_g}/${_b}`);
    return { r: parseInt(_r, 16), g: parseInt(_g, 16), b: parseInt(_b, 16) };
}