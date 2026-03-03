//購物金額
let 衣服=200;
let 件數=7;
let 褲子=700;
let 折扣=0.6;
let 總額=(衣服+褲子)*折扣;
let 平均價格=Math.round(衣服/件數);
//console.log(平均價格.toFixed(3))


let 城市="台北市";
let 街道="博愛路";
let 地址=城市+街道;
let 句子=`小明住在${地址}，他今天買了${衣服}和${褲子}，折扣後${總額}元。`
let 字數=句子.length
let 新句子=句子.replace("今天","昨天")
let 最新句子=新句子.slice(0,7)
//console.log(最新句子)

let 分數=50;
let 及格=60;
let 出席率=0.7;
if(分數>80&&出席率>0.8){    
    console.log('great');
} else if(分數>=及格||出席率>0.8){
    console.log('pass');
} else {
    console.log('failed');
}

let 成績=[60,70,80,90,100,30];
成績.push(50);
//console.log(成績[0])
//console.log(成績.pop());
//console.log(成績.indexOf(90));
//console.log(成績.length);

for(let i=0;i<成績.length;i++){
    console.log(`第${[i+1]}位同學的成績為${成績[i]}分`)
}

function sayhi(name){
    console.log(`${name} hello`);
}


const 清單=document.querySelector('.清單');
const 文字欄=document.querySelector('.文字欄');
const 按鈕=document.querySelector('.按鈕');

按鈕.addEventListener('click',新任務);

文字欄.addEventListener('keyup',function(e){
    if(e.key==='Enter'){
        新任務();
        sayhi('cecilia');
    }
});

function 新任務(){
    if(文字欄.value===''){
        return;
    }
    const 任務=document.createElement('li');
    任務.innerHTML=`
    <input type='checkbox' class='打勾方塊'>
    <label>${文字欄.value}</label>
    <button class=垃圾桶>🗑️</button>`

    const 垃圾桶=任務.querySelector('.垃圾桶');
    const 打勾方塊=任務.querySelector('.打勾方塊');

    打勾方塊.addEventListener('change',function(){
        if(打勾方塊.checked){
            任務.style.textDecoration='line-through';
            任務.style.color='#999';
            清單.append(任務);
        }else{
            任務.style.textDecoration='none';
            任務.style.color='';
            清單.prepend(任務);
        }
    })

    垃圾桶.addEventListener('click',function(){
    任務.remove();
    });

    清單.append(任務);
    文字欄.value='';
}

