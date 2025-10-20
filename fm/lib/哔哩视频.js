const sameOption=[
	{
	    "key": "order",
	    "name": "排序",
		"value": [{
			"n": "更新时间",
			"v": "0"
		}, {
			"n": "追番人数",
			"v": "3"
		}, {
			"n": "最高评分",
			"v": "4"
		}, {
			"n": "播放数量",
			"v": "2"
		}, {
			"n": "开播时间",
			"v": "5"
		}
        //, {
		//	"n": "上映时间",
		//	"v": "6"
		//}, {
		//	"n": "弹幕数量",
		//	"v": "1"
		//}
        ]
	}
]

var rule = {
    title: '哔哩影视[官]',
    host: 'https://api.bilibili.com',
    url: '/fyclass-fypage&vmid=$vmid',
    detailUrl: '/pgc/view/web/season?season_id=fyid',
    filter_url: 'fl={{fl}}',
    vmid获取教程: '登录后访问https://api.bilibili.com/x/web-interface/nav,搜索mid就是,cookie需要 bili_jct,DedeUserID,SESSDATA参数',
    searchUrl: '/x/web-interface/search/type?keyword=**&page=fypage&search_type=',
    searchable: 1,
    filterable: 1,
    quickSearch: 0,
    headers: {
        'User-Agent': 'PC_UA',
        "Referer": "https://www.bilibili.com",
        "Cookie": "http://127.0.0.1:9978/file/TVBox/bilibili.txt"
    },
    tab_order: ['bilibili', 'B站'], //线路顺序,按里面的顺序优先，没写的依次排后面
    timeout: 5000,
    //class_name: '番剧&国创&电影&电视剧&纪录片&综艺&全部&追番&追剧&时间表',
    //class_url: '1&4&2&5&3&7&全部&追番&追剧&时间表',
    class_name: '国创&番剧&电影&电视剧&综艺&纪录片',
    class_url: '4&1&2&5&7&3',
    filter: {
		"1": sameOption,
		"2": sameOption,
		"3": sameOption,
		"4": sameOption,
		"5": sameOption,
		"7": sameOption,
        "全部": [{
            "key": "tid",
            "name": "分类",
            "value": [{
                "n": "国创",
                "v": "4"
            }, {
                "n": "番剧",
                "v": "1"
            }, {
                "n": "电影",
                "v": "2"
            }, {
                "n": "电视剧",
                "v": "5"
            }, {
                "n": "记录片",
                "v": "3"
            }, {
                "n": "综艺",
                "v": "7"
            }]
        }, {
            "key": "order",
            "name": "排序",
            "value": [{
                "n": "更新时间",
                "v": "0"
            }, {
                "n": "追番人数",
                "v": "3"
            }, {
                "n": "最高评分",
                "v": "4"
            }, {
                "n": "播放数量",
                "v": "2"
            }, {
                "n": "开播时间",
                "v": "5"
            }
            //, {
            //	"n": "上映时间",
            //	"v": "6"
            //}, {
            //	"n": "弹幕数量",
            //	"v": "1"
            //}
            ]
        }, {
            "key": "season_status",
            "name": "付费",
            "value": [{
                "n": "全部",
                "v": "-1"
            }, {
                "n": "免费",
                "v": "1"
            }, {
                "n": "付费",
                "v": "2%2C6"
            }, {
                "n": "大会员",
                "v": "4%2C6"
            }]
        }],
        "时间表": [{
            "key": "tid",
            "name": "分类",
            "value": [{
                "n": "番剧",
                "v": "1"
            }, {
                "n": "国创",
                "v": "4"
            }]
        }]
    },
    play_parse: true,
    limit: 5,
    lazy: $js.toString(() => {
        try {
            let api = "" + input.split("?")[0];
            console.log(api);
            let response = fetch(api, {
                method: 'get',
                headers: {
                    'User-Agent': 'okhttp/3.14.9',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            let bata = JSON.parse(response);
            if (bata.url.includes("bilibili")) {
                input = {
                    parse: 0,
                    url: bata.url,
                    jx: 0,
                    danmaku: "http://1.94.221.189:5613/?url=" + input.split("?")[0]
                };
            } else {
                input = {
                    parse: 0,
                    url: input.split("?")[0],
                    jx: 1,
                    danmaku: "http://1.94.221.189:5613/?url=" + input.split("?")[0]
                };
            }
        } catch {
            input = {
                parse: 0,
                url: input.split("?")[0],
                jx: 1,
                danmaku: "http://1.94.221.189:5613/?url=" + input.split("?")[0]
            };
        }
    }),
    //推荐: '',
    推荐: 'js:let d=[];function get_result(url){let videos=[];let html=request(url);let jo=JSON.parse(html);if(jo["code"]===0){let vodList=jo.result?jo.result.list:jo.data.list;vodList.forEach(function(vod){let aid=(vod["season_id"]+"").trim();let title=vod["title"].trim();let img=vod["cover"].trim();let remark=vod.new_ep?vod["new_ep"]["index_show"]:vod["index_show"];videos.push({vod_id:aid,vod_name:title,vod_pic:img,vod_remarks:remark})})}return videos}function get_rank(tid,pg){return get_result("https://api.bilibili.com/pgc/web/rank/list?season_type="+tid+"&pagesize=20&page="+pg+"&day=3")}function get_rank2(tid,pg){return get_result("https://api.bilibili.com/pgc/season/rank/web/list?season_type="+tid+"&pagesize=20&page="+pg+"&day=3")}function home_video(){let videos=get_rank(1).slice(0,5);[4,2,5,3,7].forEach(function(i){videos=videos.concat(get_rank2(i).slice(0,5))});return videos}VODS=home_video();',
    一级: '',
    一级: $js.toString(() => {
		let d = [];
		let vmid = input.split("vmid=")[1].split("&")[0];
		function get_result(url) {
			let videos = [];
			let html = request(url);
			let jo = JSON.parse(html);
			if (jo["code"] === 0) {
				let vodList = jo.result ? jo.result.list: jo.data.list;
				vodList.forEach(function(vod) {
					let aid = (vod["season_id"] + "").trim();
					let title = vod["title"].trim();
					let img = vod["cover"].trim();
					let remark = vod.new_ep ? vod["new_ep"]["index_show"] : vod["index_show"];
					videos.push({
						vod_id: aid,
						vod_name: title,
						vod_pic: img,
						vod_remarks: remark
					})
				})
			}
			return videos
		}
		function get_rank(tid, pg) {
			return get_result("https://api.bilibili.com/pgc/web/rank/list?season_type=" + tid + "&pagesize=20&page=" + pg + "&day=3")
		}
		function get_rank2(tid, pg) {
			return get_result("https://api.bilibili.com/pgc/season/rank/web/list?season_type=" + tid + "&pagesize=20&page=" + pg + "&day=3")
		}
		function get_zhui(pg, mode) {
			let url = "https://api.bilibili.com/x/space/bangumi/follow/list?type=" + mode + "&follow_status=0&pn=" + pg + "&ps=10&vmid=" + vmid;
			return get_result(url)
		}
		function get_all(tid, pg, order, season_status) {
			let url = "https://api.bilibili.com/pgc/season/index/result?order=" + order + "&pagesize=20&type=1&season_type=" + tid + "&page=" + pg + "&season_status=" + season_status;
			return get_result(url)
		}
		function get_timeline(tid, pg) {
			let videos = [];
			let url = "https://api.bilibili.com/pgc/web/timeline/v2?season_type=" + tid + "&day_before=2&day_after=4";
			let html = request(url);
			let jo = JSON.parse(html);
			if (jo["code"] === 0) {
				let videos1 = [];
				let vodList = jo.result.latest;
				vodList.forEach(function(vod) {
					let aid = (vod["season_id"] + "").trim();
					let title = vod["title"].trim();
					let img = vod["cover"].trim();
					let remark = vod["pub_index"] + "　" + vod["follows"].replace("系列", "");
					videos1.push({
						vod_id: aid,
						vod_name: title,
						vod_pic: img,
						vod_remarks: remark
					})
				});
				let videos2 = [];
				for (let i = 0; i < 7; i++) {
					let vodList = jo["result"]["timeline"][i]["episodes"];
					vodList.forEach(function(vod) {
						if (vod["published"] + "" === "0") {
							let aid = (vod["season_id"] + "").trim();
							let title = vod["title"].trim();
							let img = vod["cover"].trim();
							let date = vod["pub_ts"];
							let remark = date + "   " + vod["pub_index"];
							videos2.push({
								vod_id: aid,
								vod_name: title,
								vod_pic: img,
								vod_remarks: remark
							})
						}
					})
				}
				videos = videos2.concat(videos1)
			}
			return videos
		}
		function cate_filter(d, cookie) {
			//order 0 更新时间
			//order 3 追番人数
			//order 4 最高评分
			//order 2 播放数量

			if (["4", "1", "2",  "5", "3", "7"].includes(MY_CATE)) {
				//return get_rank2(MY_CATE, MY_PAGE)
				let tid = MY_FL.tid || MY_CATE;
				let order = MY_FL.order || "0";
				let season_status = MY_FL.season_status || "-1";
				return get_all(tid, MY_PAGE, order, season_status)
			} else if (MY_CATE === "全部") {
				let tid = MY_FL.tid || "1";
				let order = MY_FL.order || "0";
				let season_status = MY_FL.season_status || "-1";
				return get_all(tid, MY_PAGE, order, season_status)
			} else if (MY_CATE === "追番") {
				return get_zhui(MY_PAGE, 1)
			} else if (MY_CATE === "追剧") {
				return get_zhui(MY_PAGE, 2)
			} else if (MY_CATE === "时间表") {
				let tid = MY_FL.tid || "1";
				return get_timeline(tid, MY_PAGE)
			} else {
				return []
			}
		}
		VODS = cate_filter();
	}),
    二级: $js.toString(() => {
    function zh(num) {
        let p = "";
        if (Number(num) > 1e8) {
            p = (num / 1e8).toFixed(2) + "亿"
        } else if (Number(num) > 1e4) {
            p = (num / 1e4).toFixed(2) + "万"
        } else {
            p = num
        }
        return p
    }
    let html = request(input);
    let jo = JSON.parse(html).result;
    let id = jo["season_id"];
    let title = jo["show_title"];
    let pic = jo["cover"];
    let areas = jo["areas"][0]["name"];
    let typeName = jo["share_sub_title"];
    let date = jo["publish"]["pub_time"].substr(0, 4);
    let dec = jo["evaluate"];
    let remark = jo["new_ep"]["desc"];
    let stat = jo["stat"];
    let status = "弹幕: " + zh(stat["danmakus"]) + "　点赞: " + zh(stat["likes"]) + "　投币: " + zh(stat["coins"]) + "　追番追剧: " + zh(stat["favorites"]);
    let score = jo.hasOwnProperty("rating") ? "评分: " + jo["rating"]["score"] + "　" + jo["subtitle"] : "暂无评分" + "　" + jo["subtitle"];
    let vod = {
        vod_id: id,
        vod_name: title,
        vod_pic: pic,
        type_name: typeName,
        vod_year: date,
        vod_area: areas,
        vod_remarks: remark,
        vod_actor: status,
        vod_director: score,
        vod_content: dec
    };
    let ja = jo["episodes"];
    let playurls1 = [];
    let playurls2 = [];
    ja.forEach(function(tmpJo) {
        if (tmpJo["show_title"].includes("预告")) {
            return;
        } let eid = tmpJo["id"]; let cid = tmpJo["cid"]; let link = tmpJo["link"]; let part = tmpJo["show_title"].replace("#", "-");
        playurls1.push(part + "$" + eid + "_" + cid);
        playurls2.push(part + "$" + link);
    });let playUrl = playurls1.join("#") + "$$$" + playurls2.join("#");vod["vod_play_from"] = "B站$$$bilibili";vod["vod_play_url"] = playUrl;
    VOD = vod;
}),
    搜索:'',
    搜索: 'js:let url1=input+"media_bangumi";let url2=input+"media_ft";let html=request(url1);let msg=JSON.parse(html).message;if(msg!=="0"){VODS=[{vod_name:KEY+"➢"+msg,vod_id:"no_data",vod_remarks:"别点,缺少bili_cookie",vod_pic:"https://ghproxy.net/https://raw.githubusercontent.com/hjdhnx/dr_py/main/404.jpg"}]}else{let jo1=JSON.parse(html).data;html=request(url2);let jo2=JSON.parse(html).data;let videos=[];let vodList=[];if(jo1["numResults"]===0){vodList=jo2["result"]}else if(jo2["numResults"]===0){vodList=jo1["result"]}else{vodList=jo1["result"].concat(jo2["result"])}vodList.forEach(function(vod){let aid=(vod["season_id"]+"").trim();let title=KEY+"➢"+vod["title"].trim().replace(\'<em class="keyword">\',"").replace("</em>","");let img=vod["cover"].trim();let remark=vod["index_show"];videos.push({vod_id:aid,vod_name:title,vod_pic:img,vod_remarks:remark})});VODS=videos}',
}