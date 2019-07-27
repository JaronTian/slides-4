let n = 3 //从第几张开始轮播
初始化()
setInterval(()=>{
    makeLeave(getImage(n)) //模板字符串，反引号中的 ${变量} 是变量
        .one('transitionend', (e)=>{ // 变成离开状态后立刻变成进入状态 一次
            makeEnter($(e.currentTarget))
        })
        makeCurrent(getImage(n+1))
    n += 1
},2000)







function x(n){
    if(n>5){
        n = n%5
        if(n ===0){
            n = 5
        }
    } // n = 1 2 3 4 5
    return n
}   

function 初始化(){
    getImage(n).addClass('current') // .addClass() 返回值就是$node
        .siblings().addClass('enter')
}

function getImage(n){ //得到第 n 个图片
    return $(`.images > img:nth-child(${x(n)})`)
}

function makeCurrent($node){ //出现状态
    $node.removeClass('enter').addClass('current')
}
function makeLeave($node){ //离开状态
    return $node.removeClass('current').addClass('leave') //.addClass() 返回值就是$node
}
function makeEnter($node){ // 进入状态
    $node.removeClass('leave').addClass('enter')
}