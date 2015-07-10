/*
fltomask.js-fl20150624gz
Author URI: http://feilong.org
*/



/*click to insert a iframe and display the mask*/
function fltomask(to,mm,commondata,toparent){

//alert('s3');
//获取 蒙版对象
var mask=toparent?$(mm,window.parent.document):$(mm);//alert('4mask='+mask.length);

//获取 公用参数，并与 个性参数 整合 //commondata
var src=to.attr('data-src');if(src.indexOf('?')!=-1){src=src+'&'+commondata;}else{src=src+'?'+commondata;}
//alert('s5'+src);

//动态生成iframe
var ifr=$('<iframe class="ifrpre maskifr" src="'+src+'" frameborder="0"></iframe><i class="maskshut">X</i>');
//console.log(mask.find('.maskin').length);

//插入iframe
mask.find('.maskin').html(ifr);

//激活外关闭
flshutmask('.maskshut',mm,0);

//ios兼容iframe滚动
var isios=navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
if(isios){$('.maskin').addClass('maskios');}

}/*0.5*/





/* get my height and do the left */
function flmaskheight(popdom,mm,prehi){
	
	 //alert('loaded1');
			
var myheight=function(){
	//var area=$("#chat30");if(area.length){chat30hi();flgundi(area);}
	
//检查窗口自己是否被容纳在iframe中	
var ifrdom=window.frameElement && window.frameElement || '';
//console.log('ifrhome.length= ?='+ifrhome.length);
//alert('m2');	
//console.log(ifrhome);			
						
//如果被容纳
var ifrhome=$(ifrdom);
if(ifrhome.length){	ifrhome.removeClass('ifrpre');
//console.log('我被容进来了');

var mypop=$(popdom),boxhi=0,myhi=0;
var pwinwi=window.parent.innerWidth,maxwi=pwinwi*0.94;//alert(pwinwi);
var pwinhi=window.parent.innerHeight,maxhi=pwinhi*0.8;//alert(pwinhi);  /*maxhi*/
if(prehi){boxhi=prehi;}else{boxhi=mypop.height();}  console.log('boxhi='+boxhi);/*boxhi*/
if(boxhi>=maxhi){myhi=maxhi;}else{myhi=boxhi;}console.log('myhi='+myhi);/*myhi*/


var ifrbaba=ifrhome.parent('.maskin'),ifryeye=ifrbaba.parent('.mask');
//console.log('ifrbaba.length='+ifrbaba.length);


					//ifrcurr.height(myhi);alert('ifrhi='+ifrcurr.height());//iphone用jquer设置iframe的高度竟然无效!
					//mask.find('.maskin').height(myhi);
					mypop.css('max-width',maxwi+'px');
					ifrbaba.height(myhi).css('max-width',maxwi+'px');
					ifryeye.width(pwinwi).height(pwinhi);
					
					
					ifryeye.removeClass('vh'); //alert('maskin='+maskin.height());
					 
						
						//var pbody=$('body',window.parent.document);
						//pbody.addClass('oh');
					
					//销毁变量
					//ifrhome=0,myhi=0;
					
					 //alert('resized');
					//resizeTimer=null;
					
					
					
									
					
}


					
					
};	
			
			
	


/*window.onload=myheight;		

//检测屏幕尺寸变化
var resizeTimer = null;
window.parent.onresize=function(){
if(resizeTimer==null){
resizeTimer = setTimeout(myheight,300);
}
};*/

$(window).on('load',myheight);
$(window.parent).on('resize',myheight);







}/*0.5*/





function flshutmask(a,mm,shutparent){
$(a).on('click',function(ev){

flshutmask0(mm,shutparent);

});
}/*0.5*/



/*shut parent or self's mask */
function flshutmask0(mm,shutparent){

if(shutparent){
//var ifrhomeid=window.frameElement && window.frameElement.id || '';
//var ifrhome=$('#'+ifrhomeid,window.parent.document);
var ifrdom=window.frameElement && window.frameElement || '';

var ifrhome=$(ifrdom);
var maskin=ifrhome.parent('.maskin'),mask=maskin.parent('.mask');
//console.log('maskin.length='+mask.length);
var pbody=$('body',window.parent.document);

}else{
	
var mask=$(mm),maskin=mask.find('.maskin'); // alert('mask='+mask.length);
//console.log('maskin.length='+mask.length);
var ifrhome=mask.find('.maskifr'); //alert(ifr.length);

var pbody=$('body',window.document);

}

maskin.html('');//pbody.removeClass('oh');
mask.addClass('vh');


//激发出所在窗口在哪，就回哪
//var bdy=shutparent?$('body',window.parent.document):$('body');




}/*0.5*/
