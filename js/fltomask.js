/*fltomask.js-fl20150709gz*/function fltomask(a,b,c,d){var g,h,e=d?$(b,window.parent.document):$(b),f=a.attr("data-src");f=-1!=f.indexOf("?")?f+"&"+c:f+"?"+c,g=$('<iframe class="ifrpre maskifr" src="'+f+'" frameborder="0"></iframe><i class="maskshut">X</i>'),e.find(".maskin").html(g),flshutmask(".maskshut",b,0),h=navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),h&&$(".maskin").addClass("maskios")}function flmaskheight(a,b,c){var d=function(){var e,f,g,h,i,j,k,l,m,b=window.frameElement&&window.frameElement||"",d=$(b);d.length&&(d.removeClass("ifrpre"),e=$(a),f=0,g=0,h=window.parent.innerWidth,i=.94*h,j=window.parent.innerHeight,k=.8*j,f=c?c:e.height(),console.log("boxhi="+f),g=f>=k?k:f,console.log("myhi="+g),l=d.parent(".maskin"),m=l.parent(".mask"),e.css("max-width",i+"px"),l.height(g).css("max-width",i+"px"),m.width(h).height(j),m.removeClass("vh"))};$(window).on("load",d),$(window.parent).on("resize",d)}function flshutmask(a,b,c){$(a).on("click",function(){flshutmask0(b,c)})}function flshutmask0(a,b){var c,d,e,f;b?(c=window.frameElement&&window.frameElement||"",d=$(c),e=d.parent(".maskin"),f=e.parent(".mask"),$("body",window.parent.document)):(f=$(a),e=f.find(".maskin"),d=f.find(".maskifr"),$("body",window.document)),e.html(""),f.addClass("vh")}/*feilong.org-20150413-cs-end*/
