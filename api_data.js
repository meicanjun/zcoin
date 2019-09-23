define({ "api": [
  {
    "type": "post",
    "url": "/init_plate",
    "title": "初始化盘口",
    "version": "0.1.0",
    "name": "_____",
    "group": "_____",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>初始化盘口，调用后将初始化所有机器人参数</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "none",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/robot/init_plate",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>返回代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "200",
            "description": "<p>权限不足</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>系统错误</p>"
          }
        ]
      }
    },
    "filename": "api/zcoinapi.js",
    "groupTitle": "_____"
  },
  {
    "type": "post",
    "url": "/history/kline",
    "title": "获取历史K线图 根据时间",
    "version": "0.1.0",
    "name": "____K_______",
    "group": "______",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>获取历史K线图 根据时间</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "symbol",
            "description": "<p>交易对</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "period",
            "description": "<p>K线时间类型</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>数量大小</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://api.zcoin.com/open-api/market/history/kline?symbol=BTC/USDT&period=5min&size=300",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果代码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>总结果</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "200",
            "description": "<p>权限不足</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>系统错误</p>"
          }
        ]
      }
    },
    "filename": "api/zcoinapi.js",
    "groupTitle": "______"
  },
  {
    "type": "post",
    "url": "/canceld_order",
    "title": "取消机器人订单",
    "version": "0.1.0",
    "name": "_______",
    "group": "_____",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>取消机器人订单（只取消指定机器人用户ID的订单） 慎用此接口</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sellMemberId",
            "description": "<p>卖方UID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "canceldTime",
            "description": "<p>订单取消时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "buyMemberId",
            "description": "<p>买方UID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>返回代码</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "200",
            "description": "<p>权限不足</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>系统错误</p>"
          }
        ]
      }
    },
    "filename": "api/zcoinapi.js",
    "groupTitle": "_____"
  },
  {
    "type": "get",
    "url": "/tickers",
    "title": "获取支持的交易对",
    "version": "0.1.0",
    "name": "________",
    "group": "______",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>获取支持的交易对</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "none",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://api.zcoin.com/market/tickers",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果代码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>总结果</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "200",
            "description": "<p>权限不足</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>系统错误</p>"
          }
        ]
      }
    },
    "filename": "api/zcoinapi.js",
    "groupTitle": "______"
  },
  {
    "type": "get",
    "url": "/ticker",
    "title": "获取指定交易对的行情",
    "version": "0.1.0",
    "name": "________",
    "group": "______",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>获取支持的交易对</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "symbol",
            "description": "<p>交易对</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://api.zcoin.com/market/ticker?symbol=ETH/USDT",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果代码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>总结果</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "200",
            "description": "<p>权限不足</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>系统错误</p>"
          }
        ]
      }
    },
    "filename": "api/zcoinapi.js",
    "groupTitle": "______"
  }
] });
