# 影視



### 點播欄位

| 欄位名稱    | 預設值 | 說明         | 其他                               |
| ----------- | ------ | ------------ | ---------------------------------- |
| playerType  | 2      | 播放器类型   | 0：系统；1：IJK；2：EXO            |
| type        | 3      | 采集接口类型 | 0：xml；1：json；3：jar；4：remote |
| searchable  | 1      | 是否搜索     | 0：關閉；1：啟用                   |
| changeable  | 1      | 是否換源     | 0：關閉；1：啟用                   |
| quickSearch | 1      | 是否快搜     | 0：關閉；1：啟用                   |
| indexs      | 0      | 是否聚搜     | 0：關閉；1：啟用                   |
| hide        | 0      | 是否隱藏     | 0：顯示；1：隱藏                   |
| timeout     | 15     | 播放超時     | 單位：秒                           |
| header      | none   | 請求標頭     | 格式：json                         |
| click       | none   | 點擊js       | javascript                         |

### 直播欄位

| 欄位名稱 | 預設值 | 說明       | 其他       |
| -------- | ------ | ---------- | ---------- |
| ua       | none   | 用戶代理   |            |
| origin   | none   | 來源       |            |
| referer  | none   | 參照地址   |            |
| epg      | none   | 節目地址   |            |
| logo     | none   | 台標地址   |            |
| pass     | false  | 是否免密碼 |            |
| boot     | false  | 是否自啟動 |            |
| timeout  | 15     | 播放超時   | 單位：秒   |
| header   | none   | 請求標頭   | 格式：json |
| click    | none   | 點擊js     | javascript |
| catchup  | none   | 回看參數   |            |
| timeZone | none   | 時區       |            |

### 樣式

| 欄位名稱 | 值   | 說明 |
| -------- | ---- | ---- |
| type     | rect | 矩形 |
|          | oval | 橢圓 |
|          | list | 列表 |
| ratio    | 0.75 | 3：4 |
|          | 1.33 | 4：3 |

直式

```json
{
  "style": {
    "type": "rect"
  }
}
```

橫式

```json
{
  "style": {
    "type": "rect",
    "ratio": 1.33
  }
}
```

正方

```json
{
  "style": {
    "type": "rect",
    "ratio": 1
  }
}
```

正圓

```json
{
  "style": {
    "type": "oval"
  }
}
```

橢圓

```json
{
  "style": {
    "type": "oval",
    "ratio": 1.1
  }
}
```

### API

刷新詳情

```
http://127.0.0.1:9978/action?do=refresh&type=detail
```

刷新播放

```
http://127.0.0.1:9978/action?do=refresh&type=player
```

刷新直播

```
http://127.0.0.1:9978/action?do=refresh&type=live
```

推送字幕

```
http://127.0.0.1:9978/action?do=refresh&type=subtitle&path=http://xxx
```

推送彈幕

```
http://127.0.0.1:9978/action?do=refresh&type=danmaku&path=http://xxx
```

新增緩存字串

```
http://127.0.0.1:9978/cache?do=set&key=xxx&value=xxx
```

取得緩存字串

```
http://127.0.0.1:9978/cache?do=get&key=xxx
```

刪除緩存字串

```
http://127.0.0.1:9978/cache?do=del&key=xxx
```

### Proxy

支持 http, https, socks4, socks5

```
scheme://username:password@host:port
```

配置新增 proxy 可指定代理
靠前的 host 匹配到則使用該代理

```json
{
  "spider": "",
  "proxy": [
    {
      "name": "自訂",
      "hosts": [
        "googlevideo.com",
        "raw.githubusercontent.com"
      ],
      "urls": [
        "http://127.0.0.1:7890"
      ]
    },
    {
      "name": "全局",
      "hosts": [
        ".*."
      ],
      "urls": [
        "socks5://127.0.0.1:7891"
      ]
    }
  ]
}
```

### Hosts

```json
{
  "spider": "",
  "hosts": [
    "cache.ott.*.itv.cmvideo.cn=base-v4-free-mghy.e.cdn.chinamobile.com"
  ]
}
```

### Headers

```json
{
  "spider": "",
  "headers": [
    {
      "host": "gslbserv.itv.cmvideo.cn",
      "header": {
        "User-Agent": "okhttp/3.12.13",
        "Referer": "test"
      }
    }
  ]
}
```

### 爬蟲本地代理

Java

```
proxy://
```

```
Proxy.getUrl(boolean local)
```

Python

```
proxy://do=py
```

```
getProxyUrl(boolean local)
```

JS

```
proxy://do=js
```

```
getProxy(boolean local)
```

### 配置範例

[本地/線上](other/sample/config.json)

### 开源仓库

https://github.com/

https://gitlab.com/

https://gitee.com/

https://coding.net/

https://gitcode.net/

https://gitea.com/

https://notabug.org/

#### EGP源

`Xml格式`

http://epg.51zmt.top:8000/e.xml

https://diyp11.112114.xyz/pp.xml

https://diyp11.112114.xyz/pp.xml.gz

`diyp格式`

https://diyp11.112114.xyz/

https://diyp13.112114.xyz/

https://diyp34.112114.xyz/

------

### 给英文不好的朋友

GitHub 中文化插件 🔰https://greasyfork.org/zh-CN/scripts/435208

Github 增强-高速下载 🔰https://greasyfork.org/zh-CN/scripts/412245

### Github RAW 加速服务

`https://gh-proxy.net/`

`https://ghproxy.net/`

`https://www.jsdelivr.com/github`

`https://statically.io/convert/`

