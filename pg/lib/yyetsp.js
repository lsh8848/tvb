var rule = {
	title:'人人影视[搜]',
	host:'http://127.0.0.1:10079',
	homeUrl:'/p/0/socks5:%252F%252F192.168.2.99:1070/https://yyets.click/',
	url:'*',
	filter_url:'{{fl.class}}',
	filter:{
	},
	searchUrl: '*',
	searchable:2,
	quickSearch:0,
	filterable:0,
	headers:{
		'User-Agent': PC_UA,
		'Accept': '*/*',
		'Referer': 'https://yyets.click/'
	},
	timeout:5000,
	class_name:'',
	class_url:'',
	play_parse:true,
	play_json:[{
		re:'*',
		json:{
			parse:0,
			jx:0
		}
	}],
	lazy:'',
	limit:6,
	推荐:'',
	一级:'',
	二级:`js:
VOD.vod_play_from = "雲盤";
VOD.vod_remarks = detailUrl;
VOD.vod_actor = "沒有二級，只有一級鏈接直接推送播放";
VOD.vod_content = MY_URL;
VOD.vod_play_url = "雲盤$" + detailUrl;
`,
	搜索:`js:
let new_html=request(rule.homeUrl + 'api/resource?keyword=' + encodeURIComponent(KEY) + '&type=default');
log("yyets search result>>>>>>>>>>>>>>>" + new_html);
let json=JSON.parse(new_html);
let d=[];
for(const it in json.comment){
	if (json.comment.hasOwnProperty(it)){
		log("yyets search it>>>>>>>>>>>>>>>" + JSON.stringify(json.comment[it]));
		if (/(www.aliyundrive.com|pan.quark.cn)/.test(json.comment[it].comment)){
			let its = json.comment[it].comment.split("\\n");
			let i=0;
			while(i<its.length){
				let title=its[i].trim().replaceAll(/\\s+/g," ");
				if (title.length==0){
					i++;
					continue;
				}
				let urls=[];
				log("yyets search title>>>>>>>>>>>>>>>" + title);
				while(++i<its.length){
					log("yyets search url>>>>>>>>>>>>>>>" + its[i]);
					let burl = its[i].trim().split(" ")[0];
					if (burl.length==0){
						continue;
					}
					if (burl.includes("https://")){
						urls.push("https:"+burl.split("https:")[1]);
					}else{
						break;
					}
				}
				if (urls.length>0){
					log("yyets search title,urls>>>>>>>>>>>>>>>" + title + ",[" + JSON.stringify(urls) + "]");
					if (title.includes(KEY)){
						urls.forEach(function (url) {
							d.push({
								title:title,
								img:'',
								content:json.comment[it].comment,
								desc:json.comment[it].date,
								url:'push://'+url
								});
						});
					}
				}
			}
		}
	}
}
setResult(d);
`,
}
