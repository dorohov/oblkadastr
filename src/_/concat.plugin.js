function fecss_ScreenJS(){var e=this;e.screen={w:0,h:0,type:"xs",orientation:"portrait"},e.__resizefunctions={xs:{default:[],portrait:[],landscape:[]},sm:{default:[],portrait:[],landscape:[]},md:{default:[],portrait:[],landscape:[]},"md-h":{default:[],portrait:[],landscape:[]},lg:{default:[],portrait:[],landscape:[]},xl:{default:[],portrait:[],landscape:[]},device:{default:[],portrait:[],landscape:[]},pc:{default:[],portrait:[],landscape:[]},xxl:{default:[],portrait:[],landscape:[]}},e.isXS=function(){return e.screen.w<768},e.isSM=function(){return e.screen.w>767&&e.screen.w<1025},e.isMD=function(){return e.screen.w>1024&&e.screen.w<1200},e.isMDH=function(){return e.screen.w>1024&&e.screen.w<1281&&e.screen.h>909},e.isLG=function(){return e.screen.w>1199&&e.screen.w<1400},e.isXL=function(){return e.screen.w>1399&&e.screen.w<1681},e.isXXL=function(){return e.screen.w>1680},e.device=function(){return e.screen.w<1010},e.pc=function(){return e.screen.w>1024},e.screenIs=function(){var n="noname";return e.isXS()?n="xs":e.isSM()?n="sm":e.isMD()?n="md":e.isMDH()?n="md-h":e.isLG()?n="lg":e.isXL()?n="xl":e.isXXL()?n="xxl":e.device()?n="device":e.pc()&&(n="pc"),n},e.isPortrait=function(){return e.screen.h>e.screen.w},e.isLandscape=function(){return e.screen.w>e.screen.h},e.orientationIs=function(){var n="noname";return e.isPortrait()?n="portrait":e.isLandscape()&&(n="landscape"),n},e.is=function(n){return n==e.screenIs()||n==e.orientationIs()},e.onResize=function(n,r){if(n.type){var t=e.__resizefunctions[n.type];n.orientation?t[n.orientation].push(r):t.default.push(r)}},e.resizeCall=function(n){if(n.type){if(e.__resizefunctions[n.type].default)for(var r=0;r<e.__resizefunctions[n.type].default.length;r++){var t=e.__resizefunctions[n.type].default[r];t(n)}if(e.__resizefunctions[n.type][n.orientation])for(var r=0;r<e.__resizefunctions[n.type][n.orientation].length;r++){var t=e.__resizefunctions[n.type][n.orientation][r];t(n)}}},e.setScreen=function(){return e.screen.w=$(window).outerWidth(!0),e.screen.h=$(window).outerHeight(!0),e.screen.type=e.screenIs(),e.screen.orientation=e.orientationIs(),e.resizeCall(e.screen),console.log(e.screen),e.screen}}var screenJS=new fecss_ScreenJS;$(window).on("resize",function(){screenJS.setScreen()}),function(e){var n=jQuery.fn.addClass,r=jQuery.fn.removeClass,t=jQuery.fn.toggleClass;e.fn.addClass=function(){var r=n.apply(this,arguments);return e(this).trigger("changeClass",["add"]),r},e.fn.removeClass=function(){var n=r.apply(this,arguments);return e(this).trigger("changeClass",["remove"]),n},e.fn.toggleClass=function(){var n=t.apply(this,arguments);return e(this).trigger("changeClass",["toggle"]),n}}(jQuery);
function initMap(){var o;screenJS.device()&&(o={lat:52.9765785,lng:36.0630902}),screenJS.pc()&&(o={lat:52.9767305,lng:36.0620975});var e={lat:52.976698,lng:36.063286},c=18,n={zoom:c,center:new google.maps.LatLng(o.lat,o.lng)},l=document.getElementById("map-google"),t=new google.maps.Map(l,n),a={path:"M-114.9,200c-0.6-0.1-1,0.3-1.1,0.9c-0.1,0.5,0.3,1,0.9,1.1c10.5,1.2,16.1,4.6,16.1,6.5c0,2.7-10.7,6.5-28,6.5 s-28-3.8-28-6.5c0-1.9,5.6-5.3,16.1-6.5c0.5-0.1,0.9-0.6,0.9-1.1c-0.1-0.5-0.6-0.9-1.1-0.9c-10.5,1.2-17.9,4.7-17.9,8.5 c0,4.2,10.3,8.5,30,8.5s30-4.3,30-8.5C-97,204.7-104.4,201.2-114.9,200z M-127.2,211.8l15.3-22.2c5.8-7.7,4.9-20.3-1.8-27 c-3.6-3.6-8.4-5.6-13.6-5.6c-5.1,0-9.9,2-13.6,5.6c-6.7,6.7-7.5,19.3-1.8,27L-127.2,211.8z M-127,169c3.9,0,7,3.1,7,7 c0,3.9-3.1,7-7,7s-7-3.1-7-7S-130.9,169-127,169z",fillColor:"#17906c",strokeColor:"#000000",fillOpacity:1,anchor:new google.maps.Point(-157,180),strokeWeight:0,scale:1};new google.maps.Marker({position:e,map:t,icon:a})}$(function(){$(document.body).on("shown.bs.modal",".modal",{},function(o){o.preventDefault(),$(window).trigger("resize")})});
!function(){"use strict";$(window).on("load",function(){var a=$(".navbar__hamburger-btn").data("toggle-nav"),n=$(".navbar__hamburger-btn").data("body"),e=$(".navbar__hamburger-btn").data("collapse-nav");$(".navbar__hamburger-btn").on("click",function(){$(n).toggleClass("is--open-navbar"),$(a).toggleClass("is--open"),$(e).toggleClass("is--open"),$(this).toggleClass("is--active")}),$(document.body).on("click",function(s){0==$(s.target).closest(".navbar").length&&($(n).removeClass("is--open-navbar"),$(a).removeClass("is--open"),$(e).removeClass("is--open"),$(".navbar__hamburger-btn").removeClass("is--active"))})})}();