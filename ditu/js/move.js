
var getScrollTop = function () {
    var scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
        scrollTop = document.body.scrollTop;
    }
    return scrollTop;
};
//取页面可视区域高度
var getClientHeight = function () {
    var clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
    } else {
        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
    }
    return clientHeight;
};
//取文档整体高度
var getScrollHeight = function () {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
};


function move(){
        var h = document.documentElement.clientHeight,

          mybody = document.getElementsByTagName('body')[0];

          mybody.style.height = h + 'px';

 

 

        //返回角度

        function GetSlideAngle(dx,dy) {

          return Math.atan2(dy,dx) * 180 / Math.PI;

        }

 

        //根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动

        function GetSlideDirection(startX,startY, endX, endY) {

          var dy = startY - endY;

          var dx = endX - startX;

          var result = 0;

 

          //如果滑动距离太短

          if (Math.abs(dx) < 50 && Math.abs(dy) < 50) {

             return result;

          }

          var angle = GetSlideAngle(dx, dy);

          if (angle >= -45 && angle < 45) {

             result = 4;

          }else if (angle >= 45 && angle < 135) {

             result = 1;

          }else if (angle >= -135 && angle < -45) {

             result = 2;

          }else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {

             result = 3;

          }

          return result;

        }

 

 

        //滑动处理

        var startX, startY;

        mybody.addEventListener('touchstart', function (ev){

          ev.preventDefault();

          startX = ev.touches[0].pageX;

          startY = ev.touches[0].pageY; 

        }, false);

 

        mybody.addEventListener('touchmove', function (ev){

          var endX, endY;

          ev.preventDefault();

          endX = ev.changedTouches[0].pageX;

          endY = ev.changedTouches[0].pageY;

 

        var direction = GetSlideDirection(startX, startY, endX, endY);

        switch (direction){

          case 0:


            break;

          case 1:
            if ( (getScrollHeight() - getScrollTop() + getClientHeight()) >=50 ) {
        //页面已滚动到最底部
        //页面已滚动到最底部处理
            if(window.location.href.search('page3')!=-1){
              toPage('page4.html')
            }
            else if(window.location.href.search('index')!=-1){
              toPage('page3.html')

            }
            else{
              console.log('noPage')
              $('#noPageModal').show()

              setTimeout(()=>{
                $('#noPageModal').hide()
              },2000)
            }
          }
            

            break;

          case 2:
       
             if(window.location.href.search('page4')!=-1){
              toPage('page3.html')
            }
            else if(window.location.href.search('page3')!=-1){
              toPage('index.html')

            }

            break;

          case 3:


            break;

          case 4:


            break;

          default:          

        } 

      }, false);
    }

    function toPage(page){
      window.location.href = `./${page}`
    }

