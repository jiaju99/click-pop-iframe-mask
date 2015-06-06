/*
fltomask.js-feilong.org-20150606-cs
Author URI: http://feilong.org
*/

/*click to mask with iframe in*/
function fltomask(to,mm,otherdata,toparent){
var mask=toparent?$(mm,window.parent.document):$(mm);
/*if(!mask.length){alert('找不到 弹层');}else{console.log('mask='+mm);}*/


var src=to.attr('data-src');if(src.indexOf('?')!=-1){src=src+'&'+otherdata;}else{src=src+'?'+otherdata;}
var h=to.attr('data-height')?to.attr('data-height'):'470px';
var ifr=$('<iframe class="maskifr" src="'+src+'" style="height:'+h+'" frameborder="0"></iframe><i class="maskshut">X</i>');
var maskin=mask.children('.maskin');maskin.html(ifr);
/*console.log(maskin.html());*/


var showmask=function(){mask.removeClass('vh');};
window.setTimeout(showmask,2);


}/*0.5*/


/*shut parent or self mask */
function flshutmask(a,mm,shutparent){
$('body').on('click',a,function(ev){
ev.stopPropagation();

var mask=shutparent?$(mm,window.parent.document):$(mm);

var maskin=mask.children('.maskin');maskin.html('');

mask.addClass('vh');
});
}/*0.5*/






/*change parent mask height*/
function flmaskheight(box,mm){
var maskheight=function(){
var boxheight=$(box).height();if(boxheight>=480){boxheight=470;}/*alert(boxheight);*/
var mask=$(mm,window.parent.document),ifr=mask.find('.maskifr');
ifr.height(boxheight);
};
window.setTimeout(maskheight,3);

}/*0.5*/


/* need toe.js for swipe event */
function flshutmask2(ss,mm,shutparent){
$(ss).on('swipe',function(ev){
if(ev.direction=='down'){  /*alert('down');*/
var mask=shutparent?$(mm,window.parent.document):$(mm);

var maskin=mask.children('.maskin');maskin.html('');

mask.addClass('vh');
}
});
}/*0.5*/


/*app-20150606-cs*/
