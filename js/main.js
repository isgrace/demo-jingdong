$(document).ready(function(){
  // 关闭顶部广告区
  $(".i-close").click(function(){
    $(".top-banner").fadeOut();
  });
  // 商品分类列表
  // hover一级菜单的item显示二级菜单对应的item-sub
  $("#dd-inner").children(".item").hover(function(){
    $(this).addClass("hover").siblings(".item").removeClass("hover");var index = $(this).index(); 
      $("#index-item-sub").children(".item-sub").hide(); 
      $("#index-item-sub").children(".item-sub").eq(index).show(); 
    });
  // hover一级菜单时显示二级菜单
  $("#dd-inner").hover(function(){
    $("#index-item-sub").show();
  },function(){
    $("#index-item-sub").hide(); 
    $('.item').removeClass("hover"); 
  });
  // hover二级菜单的item-sub给一级菜单对应的item添加hover类
  $("#index-item-sub").children(".item-sub").hover(function(){
    var index = $(this).index();
    $("#dd-inner").children(".item").eq(index).addClass("hover");
    $("#index-item-sub").show();
  },function(){
    $("#index-item-sub").hide();
    $("#dd-inner").children(".item").removeClass("hover");
  });
  // 给右侧工具栏添加hover类
  $(".toolbar-tabs-item").hover(function(){
    $(this).addClass("toolbar-tabs-item-hover");
  },function(){
    $(this).removeClass("toolbar-tabs-item-hover");
  });
  // 返回顶部
  $(".toolbar-tabs-item-top").click(function(){
    $(document).scrollTop(0);
  });
  // 今日推荐
  // 上一页按钮
  function prev(){
    var temp = $("#recos-list li:last-child").clone();
    $("#recos-list li:last-child").remove();
    temp.css("margin-left","-1000px");
    $("#recos-list").prepend(temp);
    $("#recos-list li:first-child").animate({
      marginLeft: "0"
    },1000);
  }
  $(".slider-prev").click(function(){
    prev();
  });
  // 下一页按钮
  function next(){
    var temp = $("#recos-list li:first-child").animate({
      marginLeft: "-1000px"
    },1000,function(){
      var temp = $(this).clone();
      $(this).remove();
      temp.css("marginLeft","0");
      $("#recos-list").append(temp);
    });
  }
  $(".slider-next").click(function(){
    next();
  });
  // 图片轮播
  var index = 0,
      len = 6,
      zIndex = 0;
  function autoPlay(index){
    $("#img-list li").eq(index).css("zIndex","1").animate({opacity: "1"},500,function(){
      $("#img-list li:not(:eq("+index+"))").css("zIndex","0").animate({opacity: "0"},500);
    });
    $("#index-list li").eq(index).addClass("selected").siblings().removeClass("selected");
    zIndex ++;
  }
  autoPlay(index);
  index ++;
  if (index == len) {
    index = 0;
  }
  play = setInterval(function(){
    autoPlay(index);
    index ++;
    if (index == len) {
      index = 0;
    }
  },5000);
  // 停止轮播
  $(".focus .slider").hover(function(){
    clearInterval(play);
  },function(){ // 重新播放
    play = setInterval(function(){
    autoPlay(index);
    index ++;
    if (index == len) {
      index = 0;
    }
  },5000);
  });
  // 数字索引
  $("#index-list li").hover(function(){
    clearInterval(play);
    $(this).addClass("selected").siblings().removeClass("selected");
    var index = $(this).index();
    $("#img-list li").eq(index).animate({opacity: "1", zIndex: "1"},100);
    $("#img-list li:not(:eq("+index+"))").animate({opacity: "0", zIndex: "0"},100);
  });
})