import cheerio from"assets://js/lib/cheerio.min.js";import"assets://js/lib/crypto-js.js";import 模板 from"https://tvb.zyh520.tk/fm/lib/%E6%A8%A1%E6%9D%BF.js";import{gbkTool}from"https://tvb.zyh520.tk/fm/lib/gbk.js";function init_test(){console.log("init_test_start"),console.log("当前版本号:"+VERSION),console.log(RKEY),console.log(JSON.stringify(rule)),console.log("init_test_end")}function pre(){if("string"==typeof rule.预处理&&rule.预处理&&rule.预处理.trim()){let code=rule.预处理.trim();console.log("执行预处理代码:"+code),code.startsWith("js:")&&(code=code.replace("js:",""));try{eval(code)}catch(e){console.log("预处理执行失败:"+e.message)}}}let rule={},vercode="function"==typeof pdfl?"drpy2.1":"drpy2";const VERSION=vercode+" 3.9.49beta2 20231122",MOBILE_UA="Mozilla/5.0 (Linux; Android 11; M2007J3SC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045714 Mobile Safari/537.36"，PC_UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",UA="Mozilla/5.0",UC_UA="Mozilla/5.0 (Linux; U; Android 9; zh-CN; MI 9 Build/PKQ1.181121.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UCBrowser/12.5.5.1035 Mobile Safari/537.36",IOS_UA="Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",RULE_CK="cookie"，CATE_EXCLUDE="首页|留言|APP|下载|资讯|新闻|动态",TAB_EXCLUDE="猜你|喜欢|下载|剧情|热播",OCR_RETRY=3,OCR_API="http://drpy.nokia.press:8028/ocr/drpy/text";if(void 0===MY_URL)var MY_URL;var HOST,RKEY,fetch,print，log,rule_fetch_params,fetch_params,oheaders,_pdfh,_pdfa,_pd;const DOM_CHECK_ATTR=/(url|src|href|-original|-src|-play|-url|style)$/,SPECIAL_URL=/^(ftp|magnet|thunder|ws):/,NOADD_INDEX=/:eq|:lt|:gt|:first|:last|^body$|^#/,URLJOIN_ATTR=/(url|src|href|-original|-src|-play|-url|style)$/,SELECT_REGEX=/:eq|:lt|:gt|#/g,SELECT_REGEX_A=/:eq|:lt|:gt/g;function 是否正版(e){return new RegExp("qq.com|iqiyi.com|youku.com|mgtv.com|bilibili.com|sohu.com|ixigua.com|pptv.com|miguvideo.com|le.com|1905.com|fun.tv").test(e)}function urlDeal(e){return e?是否正版(e)?(/miguvideo/.test(e)||(e=e.split("#")[0].split("?")[0]),e):e:""}function setResult(e){return Array.isArray(e)?(VODS=[],e.forEach(function(e){let t={vod_id:e.url||"",vod_name:e.title||"",vod_remarks:e.desc||"",vod_content:e.content||"",vod_pic:e.pic_url||e.img||""},r=Object.keys(e);r.includes("tname")&&(t.type_name=e.tname||""),r.includes("tid")&&(t.type_id=e.tid||""),r.includes("year")&&(t.vod_year=e.year||""),r.includes("actor")&&(t.vod_actor=e.actor||""),r.includes("director")&&(t.vod_director=e.director||""),r.includes("area")&&(t.vod_area=e.area||""),VODS.push(t)}),VODS):[]}function setResult2(e){return VODS=e.list||[]}function setHomeResult(e){return e&&"object"==typeof e?setResult(e.list):[]}function rc(e){if("maomi_aes.js"===e){var t=CryptoJS.enc.Utf8.parse("625222f9149e961d"),r=CryptoJS.enc.Utf8.parse("5efdtf6060e2o330");return{De:function(e){return e=CryptoJS.enc.Hex.parse(e),CryptoJS.AES.decrypt(CryptoJS.enc.Base64.stringify(e),t,{iv:r,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8)},En:function(e){return CryptoJS.AES.encrypt(e,t,{iv:r,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7}).ciphertext.toString()}}}return{}}function maoss(jxurl,ref,key){fetch_params=JSON.parse(JSON.stringify(rule_fetch_params)),eval(getCryptoJS());try{var getVideoInfo=function(e){return CryptoJS.AES.decrypt(e,key,{iv:iv,padding:CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8)},token_key=null==key?"dvyYRQlnPRCMdQSe":key;if(ref)var html=request(jxurl,{headers:{Referer:ref}});else var html=request(jxurl);-1!=html.indexOf("&btwaf=")&&(html=request(jxurl+"&btwaf"+html.match(/&btwaf(.*?)"/)[1],{headers:{Referer:ref}}));var token_iv=html.split('_token = "')[1].split('"')[0],key=CryptoJS.enc.Utf8.parse(token_key),iv=CryptoJS.enc.Utf8.parse(token_iv);return eval(html.match(/var config = {[\s\S]*?}/)[0]+""),config.url.startsWith("http")||(config.url=CryptoJS.AES.decrypt(config.url,key,{iv:iv,padding:CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8)),config.url}catch(e){return""}}function urlencode(e){return e=(e+"").toString(),encodeURIComponent(e).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+")}function base64Encode(e){return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(e))}function base64Decode(e){return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(e))}function md5(e){return CryptoJS.MD5(e).toString()}function encodeStr(e,t){if((t=t||"gbk").startsWith("gb")){e=gbkTool().encode(e)}return e}function decodeStr(e,t){if((t=t||"gbk").startsWith("gb")){e=gbkTool().decode(e)}return e}function getCryptoJS(){return'console.log("CryptoJS已装载");'}"function"!=typeof Object.assign&&(Object.assign=function(){for(var e=arguments[0],t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e}),String.prototype.includes||(String.prototype.includes=function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var r=Object(this),l=r.length>>>0;if(0===l)return!1;for(var o=0|t,s=Math.max(o>=0?o:l-Math.abs(o),0);s<l;){if(r[s]===e)return!0;s++}return!1}}),"function"!=typeof String.prototype.startsWith&&(String.prototype.startsWith=function(e){return this.slice(0,e.length)===e}),"function"!=typeof String.prototype.endsWith&&(String.prototype.endsWith=function(e){return-1!==this.indexOf(e,this.length-e.length)}),Object.prototype.myValues=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t},"function"!=typeof Object.prototype.values&&(Object.prototype.values=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}),"function"!=typeof Array.prototype.join&&(Array.prototype.join=function(e){e=e||"";let t=this,r="",l=0;if(!Array.isArray(t))throw String(t)+"is not Array";if(0===t.length)return"";if(1===t.length)return String(t[0]);for(l=1,r=this[0];l<t.length;l++)r+=String(e)+String(t[l]);return r}),String.prototype.rstrip=function(e){let t=new RegExp(e+"$");return this.replace(t,"")},Array.prototype.append=Array.prototype.push,String.prototype.strip=String.prototype.trim;const RSA={encode:function(e,t,r){return"function"==typeof rsaEncrypt&&(r&&"object"==typeof r?rsaEncrypt(e,t,r):rsaEncrypt(e,t))},decode:function(e,t,r){return"function"==typeof rsaDecrypt&&(r&&"object"==typeof r?rsaDecrypt(e,t,r):rsaDecrypt(e,t))}};function getProxyUrl(){return"function"==typeof getProxy?getProxy(!0):"http://127.0.0.1:9978/proxy?do=js"}function forceOrder(e,t,r){let l=Math.floor(e.length/2),o=Math.min(e.length-1,l+1);if(l>=o)return e;let s=e[l],a=e[o];if(t)try{s=s[t],a=a[t]}catch(e){}if(r&&"function"==typeof r)try{s=r(s),a=r(a)}catch(e){}if(a+="",(s+="").match(/(\d+)/)&&a.match(/(\d+)/)){Number(s.match(/(\d+)/)[1])>Number(a.match(/(\d+)/)[1])&&e.reverse()}return e}let VODS=[],VOD={},TABS=[],LISTS=[];function urljoin(e,t){return e=e||"",t=t||"",joinUrl(e,t)}globalThis.encodeUrl=urlencode,globalThis.urlencode=urlencode;var urljoin2=urljoin;const defaultParser={pdfh:pdfh,pdfa:pdfa,pd:pd};function pdfh2(e,t){let r=e;try{"string"!=typeof e&&(r=e.rr(e.ele).toString())}catch(e){print("html对象转文本发生了错误:"+e.message)}let l=defaultParser.pdfh(r,t),o=t.includes("&&")?t.split("&&").slice(-1)[0]:t.split(" ").slice(-1)[0];if(/style/.test(o.toLowerCase())&&/url\(/.test(l))try{l=(l=l.match(/url\((.*?)\)/)[1]).replace(/^['|"](.*)['|"]$/,"$1")}catch(e){}return l}function pdfa2(e,t){let r=e;try{"string"!=typeof e&&(r=e.rr(e.ele).toString())}catch(e){print("html对象转文本发生了错误:"+e.message)}return defaultParser.pdfa(r,t)}function pd2(e,t,r){let l=pdfh2(e,t);return void 0!==r&&r||(r=""),DOM_CHECK_ATTR.test(t)&&!SPECIAL_URL.test(l)&&(l=/http/.test(l)?l.substr(l.indexOf("http")):urljoin(MY_URL,l)),l}const parseTags={jsp:{pdfh:pdfh2,pdfa:pdfa2,pd:pd2},json:{pdfh(e,t){if(!t||!t.trim())return"";"string"==typeof e&&(e=JSON.parse(e)),(t=t.trim()).startsWith("$.")||(t="$."+t),t=t.split("||");for(let r of t){let t=cheerio.jp(r,e);if((t=Array.isArray(t)?t[0]||"":t||"")&&"string"!=typeof t&&(t=t.toString()),t)return t}return""},pdfa(e,t){if(!t||!t.trim())return"";"string"==typeof e&&(e=JSON.parse(e)),(t=t.trim()).startsWith("$.")||(t="$."+t);let r=cheerio.jp(t,e);return Array.isArray(r)&&Array.isArray(r[0])&&1===r.length?r[0]||[]:r||[]},pd(e,t){let r=parseTags.json.pdfh(e,t);return r?urljoin(MY_URL,r):r}},jq:{pdfh(e,t){if(!e||!t||!t.trim())return"";return t=t.trim(),defaultParser.pdfh(e,t)},pdfa(e,t){if(!e||!t||!t.trim())return[];t=t.trim();let r=defaultParser.pdfa(e,t);return print(`pdfa解析${t}=>${r.length}`),r},pd:(e,t,r)=>e&&t&&t.trim()?(t=t.trim(),r=r||MY_URL,defaultParser.pd(e,t,r)):""},getParse(e){return e.startsWith("jsp:")?this.jsp:e.startsWith("json:")?this.json:(e.startsWith("jq:"),this.jq)}},stringify=JSON.stringify,jsp=parseTags.jsp,jq=parseTags.jq;function readFile(e){e=e||"./uri.min.js";var t=os.open(e),r=new ArrayBuffer(1024),l=os.read(t,r,0,1024);console.log(l);let o=String.fromCharCode.apply(null,new Uint8Array(r));return console.log(o),o}function dealJson(e){try{(e=e.trim()).startsWith("{")&&e.endsWith("}")||e.startsWith("[")&&e.endsWith("]")||(e="{"+e.match(/.*?\{(.*)\}/m)[1]+"}")}catch(e){}try{e=JSON.parse(e)}catch(e){}return e}var OcrApi={api:OCR_API,classification:function(e){let t="";try{log("通过drpy_ocr验证码接口过验证..."),t=request(OCR_API,{data:{img:e},headers:{"User-Agent":PC_UA},method:"POST"},!0)||""}catch(e){log(`OCR识别验证码发生错误:${e.message}`)}return t}};function verifyCode(e){let t=0,r=getHome(e),l="";for(;t<OCR_RETRY;){try{let e=`${r}/index.php/verify/index.html`;console.log(`验证码链接:${e}`);let o=request(e,{withHeaders:!0,toBase64:!0},!0),s=JSON.parse(o);if(!l){let e=Object.keys(s).find(e=>"set-cookie"===e.toLowerCase());l=e?s[e].split(";")[0]:""}console.log("cookie:"+l);let a=s.body,i=OcrApi.classification(a);console.log(`第${t+1}次验证码识别结果:${i}`);let n=`${r}/index.php/ajax/verify_check?type=search&verify=${i}`;console.log(n);let p=request(n,{headers:{Cookie:l,"User-Agent":MOBILE_UA},method:"POST"});if("ok"===(p=JSON.parse(p)).msg)return console.log(`第${t+1}次验证码提交成功`),l;"ok"!==p.msg&&t+1>=OCR_RETRY&&(l="")}catch(e){console.log(`第${t+1}次验证码提交失败:${e.message}`),t+1>=OCR_RETRY&&(l="")}t+=1}return l}function setItem(e,t){local.set(RKEY,e,t),console.log(`规则${RKEY}设置${e} => ${t}`)}function getItem(e,t){return local.get(RKEY,e)||t}function clearItem(e){local.delete(RKEY,e)}function getHome(e){if(!e)return"";let t=e.split("//");e=t[0]+"//"+t[1].split("/")[0];try{e=decodeURIComponent(e)}catch(e){}return e}function buildUrl(e,t){t=t||{},e.indexOf("?")<0&&(e+="?");let r=[],l=Object.keys(t);l.forEach(e=>{r.push(e+"="+t[e])});let o=r.join("&");return l.length>0&&!e.endsWith("?")&&(e+="&"),e+=o}function require(url){eval(request(url))}function request(e,t,r){if(r=r||!1,void 0!==t&&t&&t!=={}){let r=t.headers||{},l=Object.keys(r).map(e=>e.toLowerCase());l.includes("user-agent")||(r["User-Agent"]=MOBILE_UA),l.includes("referer")||(r.Referer=getHome(e)),t.headers=r}else{if(!fetch_params||!fetch_params.headers){let e={"User-Agent":MOBILE_UA};rule.headers&&Object.assign(e,rule.headers),fetch_params||(fetch_params={}),fetch_params.headers=e}fetch_params.headers.Referer||(fetch_params.headers.Referer=getHome(e)),t=fetch_params}if(rule.encoding&&"utf-8"!==rule.encoding&&!r&&(t.headers.hasOwnProperty("Content-Type")||t.headers.hasOwnProperty("content-type")||(t.headers["Content-Type"]="text/html; charset="+rule.encoding)),void 0!==t.body&&t.body&&"string"==typeof t.body?t.headers.hasOwnProperty("Content-Type")||t.headers.hasOwnProperty("content-type")||(t.headers["Content-Type"]="application/x-www-form-urlencoded; charset="+rule.encoding):void 0!==t.body&&t.body&&"object"==typeof t.body&&(t.data=t.body,delete t.body),!e)return t.withHeaders?"{}":"";t.toBase64&&(t.buffer=2,delete t.toBase64),console.log(JSON.stringify(t.headers)),console.log("request:"+e+`|method:${t.method||"GET"}|body:${t.body||""}`);let l=req(e,t),o=l.content||"";if(t.withHeaders){let e=l.headers;return e.body=o,JSON.stringify(e)}return o}function post(e,t){return t.method="POST",request(e,t)}function checkHtml(e,t,r){if(/\?btwaf=/.test(e)){let l=e.match(/btwaf(.*?)"/)[1];t=t.split("#")[0]+"?btwaf"+l,print("宝塔验证访问链接:"+t),e=request(t,r)}return e}function getCode(e,t){let r=request(e,t);return r=checkHtml(r,e,t)}function getHtml(e){let t={};rule.headers&&(t.headers=rule.headers);let r=getItem(RULE_CK,"");return r&&(t.headers&&!Object.keys(t.headers).map(e=>e.toLowerCase()).includes("cookie")?(log("历史无cookie,新增过验证后的cookie"),t.headers.Cookie=r):t.headers&&t.headers.cookie&&t.headers.cookie!==r?(t.headers.Cookie=r,log("历史有小写过期的cookie,更新过验证后的cookie")):t.headers&&t.headers.Cookie&&t.headers.Cookie!==r?(t.headers.Cookie=r,log("历史有大写过期的cookie,更新过验证后的cookie")):t.headers||(t.headers={Cookie:r},log("历史无headers,更新过验证后的含cookie的headers"))),getCode(e,t)}function homeParse(e){fetch_params=JSON.parse(JSON.stringify(rule_fetch_params));let t=[];if(e.class_name&&e.class_url){let r=e.class_name.split("&"),l=e.class_url.split("&"),o=Math.min(r.length,l.length);for(let e=0;e<o;e++)t.push({type_id:l[e],type_name:r[e]})}if(e.class_parse){let r=e.class_parse.split(";"),l=parseTags.getParse(r[0]);if(_pdfa=l.pdfa,_pdfh=l.pdfh,_pd=l.pd,MY_URL=rule.url,r.length>=3)try{let l=getHtml(e.MY_URL);if(l){homeHtmlCache=l;let o=_pdfa(l,r[0]);o&&o.length>0&&o.forEach((l,o)=>{try{let s=_pdfh(l,r[1]);if(e.cate_exclude&&new RegExp(e.cate_exclude).test(s))return;let a=_pd(l,r[2]);if(r.length>3&&r[3]){let e=new RegExp(r[3]);a=a.match(e)[1]}t.push({type_id:a.trim(),type_name:s.trim()})}catch(e){console.log(`分类列表定位第${o}个元素正常报错:${e.message}`)}})}}catch(e){console.log(e.message)}}let r={class:t=t.filter(t=>!e.cate_exclude||!new RegExp(e.cate_exclude).test(t.type_name))};return e.filter&&(r.filters=e.filter),console.log(JSON.stringify(r)),JSON.stringify(r)}function getPP(e,t,r,l){try{return"*"===e[t]&&r.length>l?r[l]:e[t]}catch(e){return""}}function homeVodParse(homeVodObj){fetch_params=JSON.parse(JSON.stringify(rule_fetch_params));let d=[];MY_URL=homeVodObj.homeUrl,console.log(MY_URL);let t1=(new Date).getTime(),p=homeVodObj.推荐;if(print("p:"+p),"*"===p&&rule.一级&&(p=rule.一级,homeVodObj.double=!1),!p||"string"!=typeof p)return"{}";p=p.trim();let pp=rule.一级.split(";");if(p.startsWith("js:")){const TYPE="home";var input=MY_URL;HOST=rule.host,eval(p.replace("js:","")),d=VODS}else{if(p=p.split(";"),!homeVodObj.double&&p.length<5)return"{}";if(homeVodObj.double&&p.length<6)return"{}";let e=getPP(p,0,pp,0),t=parseTags.getParse(e);_pdfa=t.pdfa,_pdfh=t.pdfh,_pd=t.pd;let r=e.startsWith("json:");e=e.replace(/^(jsp:|json:|jq:)/,"");let l=homeHtmlCache||getHtml(MY_URL);homeHtmlCache=void 0,r&&(l=dealJson(l));try{if(console.log("double:"+homeVodObj.double),homeVodObj.double){let t=_pdfa(l,e),r=getPP(p,1,pp,0),o=getPP(p,2,pp,1),s=getPP(p,3,pp,2),a=getPP(p,4,pp,3),i=getPP(p,5,pp,4),n=getPP(p,6,pp,5);for(let e of t){let t=_pdfa(e,r);for(let e of t)try{let t=_pdfh(e,o),r="";try{r=_pd(e,s)}catch(e){}let l="";try{l=_pdfh(e,a)}catch(e){}let u=[],c;for(let t of i.split("+")){let r=homeVodObj.detailUrl?_pdfh(e,t):_pd(e,t,MY_URL);u.push(r)}c=p.length>6&&p[6]?_pdfh(e,n):"";let f=u.join("$");"*"===rule.二级&&(f=f+"@@"+t+"@@"+r);let h={vod_name:t,vod_pic:r,vod_remarks:l,vod_content:c,vod_id:f};d.push(h)}catch(e){console.log("首页列表双层定位处理发生错误:"+e.message)}}}else{let t=_pdfa(l,e),r=getPP(p,1,pp,1),o=getPP(p,2,pp,2),s=getPP(p,3,pp,3),a=getPP(p,4,pp,4),i=getPP(p,5,pp,5);for(let e of t)try{let t=_pdfh(e,r),l="";try{l=_pd(e,o,MY_URL)}catch(e){}let n="";try{n=_pdfh(e,s)}catch(e){}let u=[],c;for(let t of a.split("+")){let r=homeVodObj.detailUrl?_pdfh(e,t):_pd(e,t,MY_URL);u.push(r)}c=p.length>5&&p[5]?_pdfh(e,i):"";let f=u.join("$");"*"===rule.二级&&(f=f+"@@"+t+"@@"+l);let h={vod_name:t,vod_pic:l,vod_remarks:n,vod_content:c,vod_id:f};d.push(h)}catch(e){console.log("首页列表单层定位处理发生错误:"+e.message)}}}catch(e){}}let t2=(new Date).getTime();return console.log("加载首页推荐耗时:"+(t2-t1)+"毫秒"),rule.图片来源&&d.forEach(e=>{e.vod_pic&&e.vod_pic.startsWith("http")&&(e.vod_pic=e.vod_pic+rule.图片来源)}),d.length>0&&print(d.slice(0,2)),JSON.stringify({list:d})}function categoryParse(cateObj){fetch_params=JSON.parse(JSON.stringify(rule_fetch_params));let p=cateObj.一级;if(!p||"string"!=typeof p)return"{}";let d=[],url=cateObj.url.replaceAll("fyclass",cateObj.tid);if(1===cateObj.pg&&url.includes("[")&&url.includes("]")?url=url.split("[")[1].split("]")[0]:cateObj.pg>1&&url.includes("[")&&url.includes("]")&&(url=url.split("[")[0]),rule.filter_url){/fyfilter/.test(url)?url=url.replace("fyfilter",rule.filter_url):(url.endsWith("&")||rule.filter_url.startsWith("&")||(url+="&"),url+=rule.filter_url);let e=cateObj.filter?cateObj.extend:{},t;if(rule.filter_def&&"object"==typeof rule.filter_def)try{if(Object.keys(rule.filter_def).length>0&&rule.filter_def.hasOwnProperty(cateObj.tid)){let t=rule.filter_def[cateObj.tid];if(t&&"object"==typeof t){let r=JSON.parse(JSON.stringify(t));e=Object.assign(r,e)}}}catch(e){print("合并不同分类对应的默认筛选出错:"+e.message)}t=cheerio.jinja2(url,{fl:e}),url=t}if(/fypage/.test(url))if(url.includes("(")&&url.includes(")")){let url_rep=url.match(/.*?\((.*)\)/)[1],cnt_page=url_rep.replaceAll("fypage",cateObj.pg),cnt_pg=eval(cnt_page);url=url.replaceAll(url_rep,cnt_pg).replaceAll("(","").replaceAll(")","")}else url=url.replaceAll("fypage",cateObj.pg);MY_URL=url,console.log(MY_URL),p=p.trim();const MY_CATE=cateObj.tid;if(p.startsWith("js:")){var MY_FL=cateObj.extend;const TYPE="cate";var input=MY_URL;const MY_PAGE=cateObj.pg;var desc="";eval(p.trim().replace("js:","")),d=VODS}else{if(p=p.split(";"),p.length<5)return"{}";let e=parseTags.getParse(p[0]);_pdfa=e.pdfa,_pdfh=e.pdfh,_pd=e.pd;let t=p[0].startsWith("json:");p[0]=p[0].replace(/^(jsp:|json:|jq:)/,"");try{let e=getHtml(MY_URL);if(e){t&&(e=dealJson(e));let r=_pdfa(e,p[0]);r.forEach(e=>{let t=p[4].split("+").map(t=>rule.detailUrl?_pdfh(e,t):_pd(e,t,MY_URL)).join("$"),r=rule.detailUrl?MY_CATE+"$"+t:t,l=_pdfh(e,p[1]).replace(/\n|\t/g,"").trim(),o=_pd(e,p[2],MY_URL);"*"===rule.二级&&(r=r+"@@"+l+"@@"+o),d.push({vod_id:r,vod_name:l,vod_pic:o,vod_remarks:_pdfh(e,p[3]).replace(/\n|\t/g,"").trim()})})}}catch(e){console.log(e.message)}}rule.图片来源&&d.forEach(e=>{e.vod_pic&&e.vod_pic.startsWith("http")&&(e.vod_pic=e.vod_pic+rule.图片来源)}),d.length>0&&print(d.slice(0,2));let pagecount=0;rule.pagecount&&"object"==typeof rule.pagecount&&rule.pagecount.hasOwnProperty(MY_CATE)&&(print(`MY_CATE:${MY_CATE},pagecount:${JSON.stringify(rule.pagecount)}`),pagecount=parseInt(rule.pagecount[MY_CATE]));let nodata={list:[{vod_name:"无数据,防无限请求",vod_id:"no_data",vod_remarks:"不要点,会崩的",vod_pic:"https://ghproxy.net/https://raw.githubusercontent.com/hjdhnx/dr_py/main/404.jpg"}],total:1,pagecount:1,page:1,limit:1},vod=d.length<1?JSON.stringify(nodata):JSON.stringify({page:parseInt(cateObj.pg),pagecount:pagecount||999,limit:20,total:999,list:d});return vod}function searchParse(searchObj){fetch_params=JSON.parse(JSON.stringify(rule_fetch_params));let d=[];if(!searchObj.searchUrl)return"{}";let p="*"===searchObj.搜索&&rule.一级?rule.一级:searchObj.搜索;if(!p||"string"!=typeof p)return"{}";p=p.trim();let pp=rule.一级.split(";"),url=searchObj.searchUrl.replaceAll("**",searchObj.wd);if(1===searchObj.pg&&url.includes("[")&&url.includes("]")&&!url.includes("#")?url=url.split("[")[1].split("]")[0]:searchObj.pg>1&&url.includes("[")&&url.includes("]")&&!url.includes("#")&&(url=url.split("[")[0]),/fypage/.test(url))if(url.includes("(")&&url.includes(")")){let url_rep=url.match(/.*?\((.*)\)/)[1],cnt_page=url_rep.replaceAll("fypage",searchObj.pg),cnt_pg=eval(cnt_page);url=url.replaceAll(url_rep,cnt_pg).replaceAll("(","").replaceAll(")","")}else url=url.replaceAll("fypage",searchObj.pg);if(MY_URL=url,console.log(MY_URL),p.startsWith("js:")){const TYPE="search",MY_PAGE=searchObj.pg,KEY=searchObj.wd;var input=MY_URL,detailUrl=rule.detailUrl||"";eval(p.trim().replace("js:","")),d=VODS}else{if(p=p.split(";"),p.length<5)return"{}";let e=getPP(p,0,pp,0),t=parseTags.getParse(e);_pdfa=t.pdfa,_pdfh=t.pdfh,_pd=t.pd;let r=e.startsWith("json:");e=e.replace(/^(jsp:|json:|jq:)/,"");try{let t=MY_URL.split(";").length>1?MY_URL.split(";")[1].toLowerCase():"get",l;if("post"===t){let e=MY_URL.split(";")[0].split("#"),t=e[0],r=e.length>1?e[1]:"";print(`post=》rurl:${t},params:${r}`);let o=JSON.parse(JSON.stringify(rule_fetch_params)),s={body:r};Object.assign(o,s),l=post(t,o)}else if("postjson"===t){let e=MY_URL.split(";")[0].split("#"),t=e[0],r=e.length>1?e[1]:"";print(`postjson-》rurl:${t},params:${r}`);try{r=JSON.parse(r)}catch(e){r="{}"}let o=JSON.parse(JSON.stringify(rule_fetch_params)),s={body:r};Object.assign(o,s),l=post(t,o)}else l=getHtml(MY_URL);if(l){if(/系统安全验证|输入验证码/.test(l)){let e=verifyCode(MY_URL);e?(console.log(`本次成功过验证,cookie:${e}`),setItem(RULE_CK,e)):console.log(`本次自动过搜索验证失败,cookie:${e}`),l=getHtml(MY_URL)}l.includes(searchObj.wd)||(console.log("搜索结果源码未包含关键字,疑似搜索失败,正为您打印结果源码"),console.log(l)),r&&(l=dealJson(l));let t=_pdfa(l,e),o=getPP(p,1,pp,1),s=getPP(p,2,pp,2),a=getPP(p,3,pp,3),i=getPP(p,4,pp,4),n=getPP(p,5,pp,5);t.forEach(e=>{let t,r=i.split("+").map(t=>rule.detailUrl?_pdfh(e,t):_pd(e,t,MY_URL)).join("$");t=p.length>5&&p[5]?_pdfh(e,n):"";let l=r,u=_pdfh(e,o).replace(/\n|\t/g,"").trim(),c=_pd(e,s,MY_URL);"*"===rule.二级&&(l=l+"@@"+u+"@@"+c);let f={vod_id:l,vod_name:u,vod_pic:c,vod_remarks:_pdfh(e,a).replace(/\n|\t/g,"").trim(),vod_content:t.replace(/\n|\t/g,"").trim()};d.push(f)})}}catch(e){return print("搜索发生错误:"+e.message),"{}"}}return rule.图片来源&&d.forEach(e=>{e.vod_pic&&e.vod_pic.startsWith("http")&&(e.vod_pic=e.vod_pic+rule.图片来源)}),JSON.stringify({page:parseInt(searchObj.pg),pagecount:10,limit:20,total:100,list:d})}function detailParse(detailObj){let t1=(new Date).getTime();fetch_params=JSON.parse(JSON.stringify(rule_fetch_params));let orId=detailObj.orId,vod_name="片名",vod_pic="",vod_id=orId;if("*"===rule.二级){let e=orId.split("@@");vod_name=e.length>1?e[1]:vod_name,vod_pic=e.length>2?e[2]:vod_pic}let vod={vod_id:vod_id,vod_name:vod_name,vod_pic:vod_pic,type_name:"类型",vod_year:"年份",vod_area:"地区",vod_remarks:"更新信息",vod_actor:"主演",vod_director:"导演",vod_content:"简介"},p=detailObj.二级,url=detailObj.url,detailUrl=detailObj.detailUrl,fyclass=detailObj.fyclass,tab_exclude=detailObj.tab_exclude,html=detailObj.html||"";if(MY_URL=url,detailObj.二级访问前)try{print(`尝试在二级访问前执行代码:${detailObj.二级访问前}`),eval(detailObj.二级访问前.trim().replace("js:",""))}catch(e){print(`二级访问前执行代码出现错误:${e.message}`)}if("*"===p)vod.vod_play_from="免费分享",vod.vod_remarks=detailUrl,vod.vod_actor="没有二级,只有一级链接直接嗅探播放",vod.vod_content=MY_URL,vod.vod_play_url="嗅探播放$"+MY_URL.split("@@")[0];else if("string"==typeof p&&p.trim().startsWith("js:")){const TYPE="detail";var input=MY_URL,play_url="";eval(p.trim().replace("js:","")),vod=VOD,console.log(JSON.stringify(vod))}else if(p&&"object"==typeof p){let tt1=(new Date).getTime(),_ps;html||(html=getHtml(MY_URL)),print(`二级${MY_URL}仅获取源码耗时:${(new Date).getTime()-tt1}毫秒`),p.is_json?(print("二级是json"),_ps=parseTags.json,html=dealJson(html)):p.is_jsp?(print("二级是jsp"),_ps=parseTags.jsp):p.is_jq?(print("二级是jq"),_ps=parseTags.jq):(print("二级默认jq"),_ps=parseTags.jq);let tt2=(new Date).getTime();if(print(`二级${MY_URL}获取并装载源码耗时:${tt2-tt1}毫秒`),_pdfa=_ps.pdfa,_pdfh=_ps.pdfh,_pd=_ps.pd,p.title){let e=p.title.split(";");vod.vod_name=_pdfh(html,e[0]).replace(/\n|\t/g,"").trim();let t=e.length>1?_pdfh(html,e[1]).replace(/\n|\t/g,"").replace(/ /g,"").trim():"";vod.type_name=t||vod.type_name}if(p.desc)try{let e=p.desc.split(";");vod.vod_remarks=_pdfh(html,e[0]).replace(/\n|\t/g,"").trim(),vod.vod_year=e.length>1?_pdfh(html,e[1]).replace(/\n|\t/g,"").trim():"",vod.vod_area=e.length>2?_pdfh(html,e[2]).replace(/\n|\t/g,"").trim():"",vod.vod_actor=e.length>3?_pdfh(html,e[3]).replace(/\n|\t/g,"").trim():"",vod.vod_director=e.length>4?_pdfh(html,e[4]).replace(/\n|\t/g,"").trim():""}catch(e){}if(p.content)try{let e=p.content.split(";");vod.vod_content=_pdfh(html,e[0]).replace(/\n|\t/g,"").trim()}catch(e){}if(p.img)try{let e=p.img.split(";");vod.vod_pic=_pd(html,e[0],MY_URL)}catch(e){}let vod_play_from="$$$",playFrom=[];if(p.重定向&&p.重定向.startsWith("js:")&&(print("开始执行重定向代码:"+p.重定向),html=eval(p.重定向.replace("js:",""))),p.tabs){if(p.tabs.startsWith("js:")){print("开始执行tabs代码:"+p.tabs);var input=MY_URL;eval(p.tabs.replace("js:","")),playFrom=TABS}else{let e=p.tabs.split(";")[0],t=_pdfa(html,e);console.log(t.length);let r=p.tab_text||"body&&Text",l={};for(let e of t){let t=_pdfh(e,r).trim();console.log(t),tab_exclude&&new RegExp(tab_exclude).test(t)||(l.hasOwnProperty(t)?l[t]+=1:l[t]=1,l[t]>1&&(t+=Number(l[t]-1)),playFrom.push(t))}}console.log(JSON.stringify(playFrom))}else playFrom=["免费分享"];vod.vod_play_from=playFrom.join(vod_play_from);let vod_play_url="$$$",vod_tab_list=[];if(p.lists)if(p.lists.startsWith("js:")){print("开始执行lists代码:"+p.lists);try{var input=MY_URL,play_url="";eval(p.lists.replace("js:",""));for(let e in LISTS)if(LISTS.hasOwnProperty(e))try{LISTS[e]=LISTS[e].map(e=>e.split("$").slice(0,2).join("$"))}catch(e){print("格式化LISTS发生错误:"+e.message)}vod_play_url=LISTS.map(e=>e.join("#")).join(vod_play_url)}catch(e){print("js执行lists: 发生错误:"+e.message)}}else{let e=p.list_text||"body&&Text",t=p.list_url||"a&&href",r=p.tabs.trim().startsWith("js:");for(let l=0;l<playFrom.length;l++){let o=playFrom[l],s=p.tabs.split(";").length>1&&!r?p.tabs.split(";")[1]:"",a=p.lists.replaceAll("#idv",o).replaceAll("#id",l);s=s.replaceAll("#idv",o).replaceAll("#id",l);let i=s?_pdfh(html,s):o;console.log(i);let n=[],u=(new Date).getTime();if("function"==typeof pdfl)n=pdfl(html,a,e,t,MY_URL);else{let r=[];try{r=_pdfa(html,a),console.log("len(vodList):"+r.length)}catch(e){}for(let l=0;l<r.length;l++){let o=r[l];n.push(_pdfh(o,e).trim()+"$"+_pd(o,t,MY_URL))}}n.length>0&&(n=forceOrder(n,"",e=>e.split("$")[0]),console.log(`drpy影响性能代码共计列表数循环次数:${n.length},耗时:${(new Date).getTime()-u}毫秒`));let c=n.join("#");vod_tab_list.push(c)}vod_play_url=vod_tab_list.join(vod_play_url)}vod.vod_play_url=vod_play_url}rule.图片来源&&vod.vod_pic&&vod.vod_pic.startsWith("http")&&(vod.vod_pic=vod.vod_pic+rule.图片来源),(!vod.vod_id||vod_id.includes("$")&&vod.vod_id!==vod_id)&&(vod.vod_id=vod_id);let t2=(new Date).getTime();return console.log(`加载二级界面${MY_URL}耗时:${t2-t1}毫秒`),vod=vodDeal(vod),void 0!==vod.type_name?vod.type_name=vod.type_name+" | 免费分享":vod.type_name="免费分享",JSON.stringify({list:[vod]})}function get_tab_index(e){let t={};return e.vod_play_from.split("$$$").forEach((e,r)=>{t[e]=r}),t}function vodDeal(e){let t=e.vod_play_from.split("$$$"),r=e.vod_play_url.split("$$$"),l=t,o=t,s=t,a=t,i=r;if(rule.tab_remove&&rule.tab_remove.length>0||rule.tab_order&&rule.tab_order.length>0){let s=get_tab_index(e);if(rule.tab_remove&&rule.tab_remove.length>0&&(a=l=t.filter(e=>!rule.tab_remove.includes(e))),rule.tab_order&&rule.tab_order.length>0){let e=rule.tab_order;a=o=l.sort((t,r)=>(-1===e.indexOf(t)?9999:e.indexOf(t))-(-1===e.indexOf(r)?9999:e.indexOf(r)))}i=a.map(e=>r[s[e]])}return rule.tab_rename&&"object"==typeof rule.tab_rename&Object.keys(rule.tab_rename).length>0&&(a=s=a.map(e=>rule.tab_rename[e]||e)),e.vod_play_from=a.join("$$$"),e.vod_play_url=i.join("$$$"),e}function tellIsJx(e){try{return!/\.(m3u8|mp4|m4a)$/.test(e.split("?")[0])&&是否正版(e)?1:0}catch(e){return 1}}function playParse(playObj){if(fetch_params=JSON.parse(JSON.stringify(rule_fetch_params)),MY_URL=playObj.url,!/http/.test(MY_URL))try{MY_URL=base64Decode(MY_URL)}catch(e){}MY_URL=decodeURIComponent(MY_URL);var input=MY_URL;let common_play={parse:1,url:input,jx:tellIsJx(input)},lazy_play;if(rule.play_parse&&rule.lazy)if(rule.play_parse&&rule.lazy&&"string"==typeof rule.lazy)try{let lazy_code=rule.lazy.replace("js:","").trim();print("开始执行js免嗅=>"+lazy_code),eval(lazy_code),lazy_play="object"==typeof input?input:{parse:1,jx:tellIsJx(input),url:input}}catch(e){print("js免嗅错误:"+e.message),lazy_play=common_play}else lazy_play=common_play;else lazy_play=common_play;if(Array.isArray(rule.play_json)&&rule.play_json.length>0){let e=lazy_play.url;for(let t of rule.play_json)if(t.re&&("*"===t.re||e.match(new RegExp(t.re)))&&t.json&&"object"==typeof t.json){let e=t.json;lazy_play=Object.assign(lazy_play,e);break}}else if(rule.play_json&&!Array.isArray(rule.play_json)){let e={jx:1,parse:1};lazy_play=Object.assign(lazy_play,e)}else if(!rule.play_json){let e={jx:0,parse:1};lazy_play=Object.assign(lazy_play,e)}return console.log(JSON.stringify(lazy_play)),JSON.stringify(lazy_play)}function proxyParse(proxyObj){var input=proxyObj.params;if(!proxyObj.proxy_rule)return[404,"text/plain","Not Found"];log("准备执行本地代理规则:\n"+proxyObj.proxy_rule);try{return eval(proxyObj.proxy_rule),input&&input!==proxyObj.params&&Array.isArray(input)&&3===input.length?input:[404,"text/plain","Not Found"]}catch(e){return[500,"text/plain","代理规则错误:"+e.message]}}function isVideoParse(isVideoObj){var input=isVideoObj.url;if(!isVideoObj.t){let e=new RegExp(isVideoObj.isVideo,"i");return e.test(input)}try{return eval(isVideoObj.isVideo),"boolean"==typeof input&&input}catch(e){return log("执行嗅探规则发生错误:"+e.message),!1}}function init(ext){console.log("init");try{let muban=模板.getMubans();if("object"==typeof ext)rule=ext;else if("string"==typeof ext)if(ext.startsWith("http")){let js=request(ext,{method:"GET"});js.startsWith("**")&&(js=base64Decode(js.substring(2))),js&&eval(js.replace("var rule","rule"))}else eval(ext.replace("var rule","rule"));rule.模板&&muban.hasOwnProperty(rule.模板)&&(print("继承模板:"+rule.模板),rule=Object.assign(muban[rule.模板],rule));let rule_cate_excludes=(rule.cate_exclude||"").split("|").filter(e=>e.trim()),rule_tab_excludes=(rule.tab_exclude||"").split("|").filter(e=>e.trim());if(rule_cate_excludes=rule_cate_excludes.concat(CATE_EXCLUDE.split("|").filter(e=>e.trim())),rule_tab_excludes=rule_tab_excludes.concat(TAB_EXCLUDE.split("|").filter(e=>e.trim())),rule.cate_exclude=rule_cate_excludes.join("|"),rule.tab_exclude=rule_tab_excludes.join("|"),rule.host=(rule.host||"").rstrip("/"),HOST=rule.host,rule.hostJs){console.log("检测到hostJs,准备执行...");try{eval(rule.hostJs),rule.host=HOST.rstrip("/")}catch(e){console.log(`执行${rule.hostJs}获取host发生错误:`+e.message)}}if(rule.url=rule.url||"",rule.double=rule.double||!1,rule.homeUrl=rule.homeUrl||"",rule.detailUrl=rule.detailUrl||"",rule.searchUrl=rule.searchUrl||"",rule.homeUrl=rule.host&&rule.homeUrl?urljoin(rule.host,rule.homeUrl):rule.homeUrl||rule.host,rule.detailUrl=rule.host&&rule.detailUrl?urljoin(rule.host,rule.detailUrl):rule.detailUrl,rule.二级访问前=rule.二级访问前||"",rule.url.includes("[")&&rule.url.includes("]")){let e=rule.url.split("[")[0],t=rule.url.split("[")[1].split("]")[0];rule.url=rule.host&&rule.url?urljoin(rule.host,e)+"["+urljoin(rule.host,t)+"]":rule.url}else rule.url=rule.host&&rule.url?urljoin(rule.host,rule.url):rule.url;if(rule.searchUrl.includes("[")&&rule.searchUrl.includes("]")&&!rule.searchUrl.includes("#")){let e=rule.searchUrl.split("[")[0],t=rule.searchUrl.split("[")[1].split("]")[0];rule.searchUrl=rule.host&&rule.searchUrl?urljoin(rule.host,e)+"["+urljoin(rule.host,t)+"]":rule.searchUrl}else rule.searchUrl=rule.host&&rule.searchUrl?urljoin(rule.host,rule.searchUrl):rule.searchUrl;if(rule.timeout=rule.timeout||5e3,rule.encoding=rule.编码||rule.encoding||"utf-8",rule.search_encoding=rule.搜索编码||rule.search_encoding||"",rule.图片来源=rule.图片来源||"",rule.play_json=rule.hasOwnProperty("play_json")?rule.play_json:[],rule.pagecount=rule.hasOwnProperty("pagecount")?rule.pagecount:{},rule.proxy_rule=rule.hasOwnProperty("proxy_rule")?rule.proxy_rule:"",rule.sniffer=rule.hasOwnProperty("sniffer")?rule.sniffer:"",rule.sniffer=!(!rule.sniffer||"0"===rule.sniffer||"false"===rule.sniffer),rule.isVideo=rule.hasOwnProperty("isVideo")?rule.isVideo:"",rule.tab_remove=rule.hasOwnProperty("tab_remove")?rule.tab_remove:[],rule.tab_order=rule.hasOwnProperty("tab_order")?rule.tab_order:[],rule.tab_rename=rule.hasOwnProperty("tab_rename")?rule.tab_rename:{},rule.headers&&"object"==typeof rule.headers)try{let header_keys=Object.keys(rule.headers);for(let k of header_keys)if("user-agent"===k.toLowerCase()){let v=rule.headers[k];console.log(v),["MOBILE_UA","PC_UA","UC_UA","IOS_UA","UA"].includes(v)&&(rule.headers[k]=eval(v))}else if("cookie"===k.toLowerCase()){let e=rule.headers[k];if(e&&e.startsWith("http")){console.log(e);try{e=fetch(e),console.log(e),rule.headers[k]=e}catch(t){console.log(`从${e}获取cookie发生错误:`+t.message)}}}}catch(e){console.log("处理headers发生错误:"+e.message)}rule_fetch_params={headers:rule.headers||!1,timeout:rule.timeout,encoding:rule.encoding},oheaders=rule.headers||{},RKEY="undefined"!=typeof key&&key?key:"drpy_"+(rule.title||rule.host),pre(),init_test()}catch(e){console.log("init_test发生错误:"+e.message)}}fetch=request,print=function(e){if("object"==typeof(e=e||"")&&Object.keys(e).length>0)try{e=JSON.stringify(e),console.log(e)}catch(t){return void console.log(typeof e+":"+e.length)}else"object"==typeof e&&Object.keys(e).length<1?console.log("null object"):console.log(e)},log=print;let homeHtmlCache=void 0;function home(e){return console.log("home"),homeParse({filter:rule.filter||!1,MY_URL:rule.homeUrl,class_name:rule.class_name||"",class_url:rule.class_url||"",class_parse:rule.class_parse||"",cate_exclude:rule.cate_exclude})}function homeVod(e){return console.log("homeVod"),homeVodParse({"推荐":rule.推荐,double:rule.double,homeUrl:rule.homeUrl,detailUrl:rule.detailUrl})}function category(e,t,r,l){return categoryParse({url:rule.url,"一级":rule.一级,tid:e,pg:parseInt(t),filter:r,extend:l})}function detail(e){let t=e,r="";if(log("orId:"+t),e.indexOf("$")>-1){let t=e.split("$");r=t[0],e=t[1]}let l,o=e.split("@@")[0];return detailParse({orId:t,url:l=o.startsWith("http")||o.includes("/")?o.includes("/")?urljoin(rule.homeUrl,o):o:rule.detailUrl.replaceAll("fyid",o).replaceAll("fyclass",r),"二级":rule.二级,"二级访问前":rule.二级访问前,detailUrl:o,fyclass:r,tab_exclude:rule.tab_exclude})}function play(e,t,r){return playParse({url:t,flag:e,flags:r})}function search(e,t,r){return rule.search_encoding?"utf-8"!==rule.search_encoding.toLowerCase()&&(e=encodeStr(e,rule.search_encoding)):rule.encoding&&"utf-8"!==rule.encoding.toLowerCase()&&(e=encodeStr(e,rule.encoding)),searchParse({searchUrl:rule.searchUrl,"搜索":rule.搜索,wd:e,pg:r||1,quick:t})}function proxy(e){return rule.proxy_rule&&rule.proxy_rule.trim()&&(rule.proxy_rule=rule.proxy_rule.trim()),rule.proxy_rule.startsWith("js:")&&(rule.proxy_rule=rule.proxy_rule.replace("js:","")),proxyParse({params:e,proxy_rule:rule.proxy_rule})}function sniffer(){let e=rule.sniffer||!1;return e&&log("开始执行辅助嗅探代理规则..."),e}function isVideo(e){let t,r=0;rule.isVideo&&rule.isVideo.trim()&&(t=rule.isVideo.trim()),t.startsWith("js:")&&(t=t.replace("js:",""),r=1);let l=isVideoParse({url:e,isVideo:t,t:r});return l&&log("成功执行辅助嗅探规则并检测到视频地址:\n"+rule.isVideo),l}function DRPY(){return{init:init,home:home,homeVod:homeVod,category:category,detail:detail,play:play,search:search,proxy:proxy,sniffer:sniffer,isVideo:isVideo}}export default{init:init,home:home,homeVod:homeVod,category:category,detail:detail,play:play,search:search,proxy:proxy,sniffer:sniffer,isVideo:isVideo,DRPY:DRPY};
