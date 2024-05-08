
//gnb (global navigation bar)

$('.gnb').hover(function(){
    //마우스가 진입했을때 할일
    //$('.subnav').show() ✍ 효과없이 나타난다.
    //$('.subnav').fadeIn() ✍ 점차 나타난다.
    $('.subnav').stop().slideDown(); //✍ 점차 내려간다.
    //.stop()을 넣으면 마우스가 진입했으나 다른곳으로 빠지면 효과가 사라진다.

},function(){
    //마우스가 벗어나면 할일
    //$('.subnav').hide() ✍ 효과없이 사라진다.
    //$('.subnav').fadeOut() 점차 사라진다.
    $('.subnav').stop().slideUp() //✍ 점차 올라간다.
})

//banner slide

//setInterval(할일, 시간) --> 시간마다 할일
//setInterval(function(){}, 3000) --> 3초마다 할일

/* if(조건문){조건문이 참일때 할일}

if(조건문){
    조건문이 참일때 할일
} else{
    조건문이 거짓일때 할일
}



if(조건문A){
    조건문이 참일때 할일
} else if(조건문B){
    조건문A이 거짓이고 조건문B가 참일때 할일
} else {
    모든 조건문에 만족하지 않을때 할일
} */

let num=0;
setInterval(function(){
    if(num<2){
        num++;//1씩 증가
    }else{
        num=0
    }
    let slidePosition=num*(-300)+"px";
    
    //console.log(slidePosition)
    //$('.main ul').animate({실행문},1000)
    $('.main ul').animate({
        top:slidePosition
    },1000)
}, 3000)


// 텝 메뉴
//$('.btn>li').click(function(){실행문}) .btn>li중 하나를 클릭하면 실행문이 실행된다.

$('.btn>li').click(function(){
    console.log("토요일이당")
})