// 此处显示你的代码!
var wilddogConfig = "https://mo123456789.wilddogio.com/mytest"
var ref = new Wilddog(wilddogConfig);
ref.set({
    "name": "jack",
    "age": 20,
    "ismarry": false,
    "from": "USA",
    "parent": {
        "fatther": {
            "name": "di",
            "age": 40
        }, "mather":
        {
            "name": "lucy",
            "age": 40
        }
    }
});

ref.child("parent/fatther/name").once('value', function (datasnapshot, error) {
    if (error == null) {
        document.getElementById('con').innerHTML = datasnapshot.val();
    }
});


function testOnClick() {
    ref.child("parent/fatther/name").set(new Date().getTime());
}

function pushOnClick() {
    ref.push("pushValue");
}

function testJson() {
    var s = '{"name":"moshuchao","age":20}';
    var obj = $.evalJSON(s);
    //var obj = JSON.parse(s);
    var s1 = $.toJSON(obj);
    alert(obj.name);
    alert(s1);
}

function updateOnClick() {
    ref.child("parent/fatther/name").update("Mo");
}

