/*** 
This is the menu creation code - place it right after you body tag
Feel free to add this to a stand-alone js file and link it to your page.
**/

//Menu object creation
oCMenu=new makeCM("oCMenu") //Making the menu object. Argument: menuname

//Menu properties   
oCMenu.pxBetween=0
//Using the cm_page object to place the menu ----
oCMenu.fromLeft=0
oCMenu.fromTop=0
oCMenu.rows=1
oCMenu.menuPlacement=0
                                                             
oCMenu.offlineRoot="" 
oCMenu.onlineRoot="" 
oCMenu.resizeCheck=1 
oCMenu.wait=1000 
oCMenu.fillImg="cm_fill.gif"
oCMenu.zIndex=0

//Background bar properties
oCMenu.useBar=0

//Level properties - ALL properties have to be spesified in level 0
oCMenu.level[0]=new cm_makeLevel() //Add this for each new level
oCMenu.level[0].width="19%"
oCMenu.level[0].height=25 
oCMenu.level[0].regClass="clLevel0"
oCMenu.level[0].overClass="clLevel0over"
oCMenu.level[0].borderX=1
oCMenu.level[0].borderY=1
oCMenu.level[0].borderClass="clLevel0border"
oCMenu.level[0].offsetX=0
oCMenu.level[0].offsetY=0
oCMenu.level[0].rows=0
oCMenu.level[0].arrow=0
oCMenu.level[0].arrowWidth=0
oCMenu.level[0].arrowHeight=0
oCMenu.level[0].align="bottom"


/******************************************
Menu item creation:
myCoolMenu.makeMenu(name, parent_name, text, link, target, width, height, regImage, overImage, regClass, overClass , align, rows, nolink, onclick, onmouseover, onmouseout) 
*************************************/
oCMenu.makeMenu('top0','','&nbsp;О компании','index.html','')

oCMenu.makeMenu('top1','','&nbsp;Импортная техника','importt.html','')
oCMenu.makeMenu('sub11','top1','&nbsp;Техника для работы в карьере','carier.html','','350')
oCMenu.makeMenu('sub12','top1','&nbsp;Прицепы и полуприцепы','trucks.html','','350')    	
oCMenu.makeMenu('sub13','top1','&nbsp;Спецтехника','stech.html','','350')
oCMenu.makeMenu('sub14','top1','&nbsp;Оборудование для обработки природного камня','rock.html','','350')

oCMenu.makeMenu('top2','','&nbsp;Оборудование','beton.html')
oCMenu.makeMenu('sub21','top2','&nbsp;Для производства пенобетона','beton.html','','400')
oCMenu.makeMenu('sub22','top2','&nbsp;Для производства трехслойного паркета','parket.html','','400')
oCMenu.makeMenu('sub23','top2','&nbsp;Для производства минеральной ваты','vata.html','','400')
oCMenu.makeMenu('sub24','top2','&nbsp;Для производства древесные гранулы ','granul.html','','400')
oCMenu.makeMenu('sub25','top2','&nbsp;Для производства высококачественного комбикорма','korm.html','','400')
oCMenu.makeMenu('sub26','top2','&nbsp;Для производства кубовидного щебня  ','kub.html','','400')



oCMenu.makeMenu('top3','','&nbsp;Услуги','index.html')
oCMenu.makeMenu('sub31','top3','&nbsp;Кредитная линия Гермес','germes.html','','300')
oCMenu.makeMenu('sub32','top3','&nbsp;Оценка недвижимости и бизнеса','def.html','','300')
oCMenu.makeMenu('sub33','top3','&nbsp;Оценка основных фондов','ocenka.html','','300')
oCMenu.makeMenu('sub35','top3','&nbsp;Экспертиза тех. состояния зданий','expert.html','','300')
oCMenu.makeMenu('sub36','top3','&nbsp;Месторождения природного камня и песка','mesto.html','','300')
oCMenu.makeMenu('sub37','top3','&nbsp;Недвижимость в собственность','estate.html','','300')


oCMenu.makeMenu('top4','','&nbsp;Ссылки','renders.html')
	
//Leave this line - it constructs the menu
oCMenu.construct()		


//Extra code to find position:
function findPos(num){
  //alert(num)
  if(bw.ns4){   //Netscape 4
    x = document.layers["layerMenu"+num].pageX
    y = document.layers["layerMenu"+num].pageY
  }else{ //other browsers
    x=0; y=0; var el,temp
    el = bw.ie4?document.all["divMenu"+num]:document.getElementById("divMenu"+num);
    if(el.offsetParent){
      temp = el
      while(temp.offsetParent){ //Looping parent elements to get the offset of them as well
        temp=temp.offsetParent; 
        x+=temp.offsetLeft
        y+=temp.offsetTop;
      }
    }
    x+=el.offsetLeft
    y+=el.offsetTop
  }
  //Returning the x and y as an array
  return [x,y]
}
function placeElements(){
  //Changing the position of ALL top items:
  pos = findPos(0)
  oCMenu.m["top0"].b.moveIt(pos[0],pos[1])
  pos = findPos(1)
  oCMenu.m["top1"].b.moveIt(pos[0],pos[1])
  pos = findPos(2)
  oCMenu.m["top2"].b.moveIt(pos[0],pos[1])
  pos = findPos(3)
  oCMenu.m["top3"].b.moveIt(pos[0],pos[1])
  pos = findPos(4)
  oCMenu.m["top4"].b.moveIt(pos[0],pos[1])
  
  //Setting the fromtop value
  oCMenu.fromTop = pos[1]
}
placeElements()
//Setting it to re place the elements after resize - the resize is not perfect though..
oCMenu.onafterresize="placeElements()"