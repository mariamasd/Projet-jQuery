$(function(){

var $mainMenuItems = $("#main-menu ul").children("li"),
totalMainMenuItems = $mainMenuItems.length,
openedIndex = 2,
init = function(){
if(validIndex(openedIndex))
{
    animateItem($mainMenuItems.eq(openedIndex),true,700);
}
    $mainMenuItems.children(".images").click(function(){
        var newIndex = $(this).parent().index(),
        $item = $mainMenuItems.eq(newIndex);

        if(openedIndex === newIndex)
        {
            animateItem($item, false, 250);
            openedIndex= -1;
        
        }
        else
        {
            if (validIndex(newIndex))
            {
                animateItem($mainMenuItems.eq(openedIndex), false, 250);
                openedIndex = newIndex;
                animateItem($item, true,250);
            }
        }
    });
    $(".button").click(function()
    {
      var  newIndex=$(this).index();
      $item = $mainMenuItems.eq(newIndex);

      if(openedIndex === newIndex)
      {
          animateItem($item, false, 250);
          openedIndex= -1;
      
      }
      else
      {
          if (validIndex(newIndex))
          {
              animateItem($mainMenuItems.eq(openedIndex), false, 250);
              openedIndex = newIndex;
              animateItem($item, true,250);
          }
      }
    });
},
validIndex = function(indexToCheck){
    return(indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
},
animateItem = function($item, toOpen, speed){
   var $colorImage = $item.find(".color"),
   itemParam = toOpen ? {width:"420px"}:{width:"110px"},
   colorImageParam = toOpen ? {left:"0px"}:{left:"110px"};
    $colorImage.animate(colorImageParam ,speed);
    $item.animate(itemParam,speed);  
};


init();



});