//外部 javascript 文件不使用 <script> 标签，直接写 javascript 代码。
//对大小写是敏感
//JavaScript函数写法 
//JS使用Unicode字符集
//Unicode 覆盖了所有的字符，包含标点等字符。
function myFunction(a, b) {
    return a * b;                                // 返回 a 乘以 b 的结果
} 


//options代表参数随机 不知道有几个
//构造函数 
function Food(options) {
    options = options || {};
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.color = options.color || 'green';
}

var div = document.createElement('div');

Food.prototype.render = function(map)
{   //动态渲染 在页面上显示的食物
    var div = document.createElement('div');
    map.appendChild(div);
    //设置div的样式
    //div.style.position = position;
    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px';
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.backgroundColor = this.color;
}

//测试
var map = document.getElementById('map');
var Food = new Food();
Food.render(map);
//document.getElementById("demo").innerHTML = "hello my host";

a = 5;
b = 5;

//弹框 弹出站点提示 可输出变量
//window.alert(16 + "Volvo");
//整形+字符串 会将整形强制转换为字符型?
//HTML CSS 是静态页面 JavaScript是动态时间编写
//字符串（String）字面量 可以使用单引号或双引号
//JavaScript 使用关键字 var 来定义变量， 使用等号来为变量赋值 整数和浮点数统称为数值

var person = {
    firstname:"Jack",
    lastname:"Doe",
    age:50,
    eyeColor:"blue",
    printfirsname:function()
    {
        window.alert(this.firstname);
    }
};


var str = "Visit Runoob!";
var n = str.search(/Runoob/i);
window.alert(n);

