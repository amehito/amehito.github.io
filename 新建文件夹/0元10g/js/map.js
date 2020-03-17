
echarts.extendsMap = function (id, opt) {
    // 实例
    var chart = this.init(document.getElementById(id));

    var curGeoJson = {};
    var cityMap = {
        "杭州市": "hangzhou",
        "湖州市": "huzhou",
        "嘉兴市": "jiaxing",
        "绍兴市": "shaoxing",
        "宁波市": "ningbo",
        "舟山市": "zhoushan",
        "衢州市": "quzhou",
        "金华市": "jinhua",
        "台州市": "taizhou",
        "丽水市": "lishui",
        "温州市": "wenzhou"
    };
    var geoCoordMap = {
        '杭州': [119.6061, 30.261817],
        //'杭州1': [120.250005,30.339645],
        '景德镇': [117.28, 29.09],
        '萍乡': [113.93, 27.41],
        '九江': [115.97, 29.51],
        '新余': [114.81, 27.72],
        '鹰潭': [117.12, 28.10],
        '赣州': [115.04, 25.67],
        '吉安': [115.05, 26.88],
        '宜春': [114.41, 28.03],
        '抚州': [116.45, 27.79],
        '上饶': [117.92, 28.22]
    };
    var levelColorMap = {

        '1': 'rgba(241, 109, 115, .8)',
        '2': 'rgba(255, 235, 59, .7)',
        '3': 'rgba(147, 235, 248, 1)'
    };
    var defaultOpt = {
        mapName: 'zhejiang', // 地图展示
        goDown: false, // 是否下钻
        bgColor: '#fff', // 画布背景色
        activeArea: [], // 区域高亮,同echarts配置项
        data: [],
        // 下钻回调(点击的地图名、实例对象option、实例对象)
        callback: function (name, option, instance) { }
    };
    if (opt) opt = this.util.extend(defaultOpt, opt);

    // 层级索引
    var name = [opt.mapName];
    var idx = 0;
    var pos = {
        leftPlus: 100,
        leftCur: 10,
        left: 50,
        top: 50
    };
    //箭头的绘制3个坐标
    var line = [
        [0, 0],
        [8, 11],
        [0, 22]
    ];
    // style
    var style = {
        font: '10px "Microsoft YaHei", sans-serif',
        textColor: '#4778c7',
        lineColor: '#4778c7'
    };

    var handleEvents = {
        /**
         * i 实例对象
         * o option
         * n 地图名
         **/
        resetOption: function (i, o, n) {
            var breadcrumb = this.createBreadcrumb(n);
            var j = name.indexOf(n);
            var l = o.graphic.length;
            if (j < 0) {
                o.graphic.push(breadcrumb);
                o.graphic[0].children[0].shape.x2 = 145;
                o.graphic[0].children[1].shape.x2 = 145;
                if (o.graphic.length > 2) {
                    var cityData = [];
                    var cityJson;
                    for (var x = 0; x < opt.data.length; x++) {
                        if (n === opt.data[x].city) {
                            $([opt.data[x]]).each(function (index, data) {
                                cityJson = { city: data.city, name: data.name, value: data.value, crew: data.crew, company: data.company, position: data.position, region: data.region };
                                cityData.push(cityJson)
                            })
                        }
                    }
                    if (cityData != null) {
                        o.series[0].data = handleEvents.initSeriesData(cityData);
                    } else {
                        o.series[0].data = [];
                    }
                }
                name.push(n);
                idx++;
            } else {
                o.graphic.splice(j + 2, l);
                if (o.graphic.length <= 2) {
                    o.graphic[0].children[0].shape.x2 = 60;
                    o.graphic[0].children[1].shape.x2 = 60;
                    o.series[0].data = handleEvents.initSeriesData(opt.data);
                };
                name.splice(j + 1, l);
                idx = j;
                pos.leftCur -= pos.leftPlus * (l - j - 1);
            };

            o.geo.map = n;
            o.geo.zoom = 0.4;
            i.clear();
            i.setOption(o);
            this.zoomAnimation();
            opt.callback(n, o, i);
        },

        /**
         * name 地图名
         **/
        createBreadcrumb: function (name) {
            var cityToPinyin = {
                '中国': 'zhongguo',
                '上海': 'shanghai',
                '河北': 'hebei',
                '山西': 'shangxi',
                '内蒙古': 'neimenggu',
                '辽宁': 'liaoning',
                '吉林': 'jilin',
                '黑龙江': 'heilongjiang',
                '江苏': 'jiangsu',
                '浙江': 'zhejiang',
                '安徽': 'anhui',
                '福建': 'fujian',
                '江西': 'jiangxi',
                '山东': 'shangdong',
                '河南': 'henan',
                '湖北': 'hubei',
                '湖南': 'hunan',
                '广东': 'guangdong',
                '广西': 'guangxi',
                '海南': 'hainan',
                '四川': 'sichuan',
                '贵州': 'guizhou',
                '云南': 'yunnan',
                '西藏': 'xizang',
                '陕西': 'shanxi',
                '甘肃': 'gansu',
                '青海': 'qinghai',
                '宁夏': 'ningxia',
                '新疆': 'xinjiang',
                '北京': 'beijing',
                '天津': 'tianjin',
                '重庆': 'chongqing',
                '香港': 'xianggang',
                '澳门': 'aomen',
                '杭州市': 'hangzhou',
                "湖州市": "huzhou",
                "嘉兴市": "jiaxing",
                "绍兴市": "shaoxing",
                "宁波市": "ningbo",
                "舟山市": "zhoushan",
                "衢州市": "quzhou",
                "金华市": "jinhua",
                "台州市": "taizhou",
                "丽水市": "lishui",
                "温州市": "wenzhou"

            };
            var breadcrumb = {
                type: 'group',
                id: name,
                left: pos.leftCur + pos.leftPlus,
                top: pos.top + 3,
                children: [{
                    type: 'polyline',
                    left: -90,
                    top: -5,
                    shape: {
                        points: line
                    },
                    style: {
                        stroke: '#fff', //标题颜色
                        key: name,
                        // display:"none"
                        // lineWidth: 2,

                    },
                    onclick: function () {
                      
                        var name = this.style.key;
                        handleEvents.resetOption(chart, option, name);
                    }
                }, {
                    type: 'text',
                    left: -68,
                    top: 'middle',
                    style: {
                        text: name,
                        textAlign: 'center',
                        fill: style.textColor,
                        font: style.font
                    },
                    onclick: function () {
                        var name = this.style.text;
                        handleEvents.resetOption(chart, option, name);
                    }
                }, {
                    type: 'text',
                    left: -68,
                    top: 10,
                    style: {

                        name: name,
                        text: cityToPinyin[name] ? cityToPinyin[name].toUpperCase() : '',
                        textAlign: 'center',
                        fill: style.textColor,
                        font: '12px "Microsoft YaHei", sans-serif',
                    },
                    onclick: function () {
                        // console.log(this.style);
                        var name = this.style.name;
                        handleEvents.resetOption(chart, option, name);
                    }
                }]
            }
            pos.leftCur += pos.leftPlus;
            return breadcrumb;
        },

        // 设置effectscatter
        initSeriesData: function (data) {
            var temp = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    temp.push({
                        name: data[i].name,
                        id: data[i].id,
                        value: geoCoord.concat(data[i].value),
                        crew: data[i].crew,
                        company: data[i].company,
                        position: data[i].position,
                        region: data[i].region
                    });
                }
            };
            return temp;
        },
        zoomAnimation: function () {
            var count = null;
            var zoom = function (per) {
                if (!count) count = per;
                count = count + per;
                // console.log(per,count);
                chart.setOption({
                    geo: {
                        zoom: count,
                    }
                });
                if (count < 1) window.requestAnimationFrame(function () {
                    zoom(0.2);
                });
            };
            window.requestAnimationFrame(function () {
                zoom(0.2);
            });
        }
    };
    var option = {
        backgroundColor: opt.bgColor,
        tooltip: {
            show: true,//是否开启悬停展示内容展示
            trigger: 'item',
            alwaysShowContent: false,
            backgroundColor: 'rgba(50,50,50,0.7)',
            hideDelay: 100,
            triggerOn: 'mousemove',
            enterable: true,
            position: ['60%', '70%'],
            formatter: function (params, ticket, callback) {
                //return '简称：'+params.data.name+'<br/>'+'机组：'+params.data.crew+'万hh千瓦'+'<br/>'+'公司名称：'+params.data.company+'<br/>'+'所属大区：'+params.data.region+'<br/>'+'所在位置：'+params.data.position
                return '简称：' + params.data.name + '<br/>' + '检查发现问题数： 7个' + '<br/>' + '整改率：16.67%<br/>' + '要求整改数量：7个<br/>';
            }
        },
        graphic: [{
            type: 'group',
            left: pos.left,
            top: pos.top - 4,
            children: [{
                type: 'line',//选择区字体容器描述设置
                left: 0,
                top: -20,
                shape: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 0
                },
                style: {
                    stroke: style.lineColor,
                }
            }, {
                type: 'line',
                left: 0,
                top: 20,
                shape: {
                    x1: 0,
                    y1: 0,
                    x2: 00,
                    y2: 0
                },
                style: {
                    stroke: style.lineColor,
                }
            }]
        },
        {
            id: name[idx],
            type: 'group',
            left: pos.left + 2,
            top: pos.top,
            children: [{
                type: 'polyline',
                left: 0,
                top: -12,
                shape: {
                    points: line
                },
                style: {
                    stroke: 'transparent',
                    key: name[0]
                },
                onclick: function () {
                    var name = this.style.key;
                    handleEvents.resetOption(chart, option, name);
                }
            }, {
                type: 'text',//选择区的字体描述设置
                left: 0,
                top: 'middle',
                style: {
                    text: '浙江',
                    textAlign: 'center',
                    fill: style.textColor,
                    font: style.font
                },
                onclick: function () {
                    getEnterprise('');
                    handleEvents.resetOption(chart, option, '浙江');
                }
            }, {
                type: 'text',//选择区的字体pinying描述设置
                left: 0,
                top: 10,
                style: {
                    text: 'Zhejiang',
                    textAlign: 'center',
                    fill: style.textColor,

                    font: '12px "Microsoft YaHei", sans-serif',
                },
                onclick: function () {
                    getEnterprise('');
                    handleEvents.resetOption(chart, option, '浙江');
                }
            }]
        }],
        geo: {
            map: opt.mapName,
            roam: true,//是否开启拖动以及放大
            zoom: 1,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: 'black',//区的字体颜色设置
                        fontSize: 10
                    }
                },
                emphasis: {
                    textStyle: {
                        color: "#fff"//鼠标放上去字体颜色
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(255, 255, 255, 1)',//边界颜色
                    borderWidth: 1,//边界宽度
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(40, 93, 179, 1)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(40, 93, 179, 1)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(163, 180, 208, 1)',//边界阴影的颜色
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: 0,//阴影的x轴方向
                    shadowOffsetY: 0,//阴影的y轴方向
                    shadowBlur: 0//阴影的宽度
                },
                emphasis: {
                    areaColor: '#fdb44c',//鼠标放上去背景颜色
                    borderWidth: 1 //边框的宽度
                }
            },
            regions: opt.activeArea.map(function (item) {
                if (typeof item !== 'string') {
                    return {
                        name: item.name,
                        itemStyle: {
                            normal: {
                                areaColor: item.areaColor || '#389BB7'
                            }
                        },
                        label: {
                            normal: {
                                show: item.showLabel,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        }
                    }
                } else {
                    return {
                        name: item,
                        itemStyle: {
                            normal: {
                                borderColor: '#91e6ff',
                                areaColor: '#389BB7'
                            }
                        }
                    }
                }
            })
        },
        series: [{
            type: 'effectScatter',
            coordinateSystem: 'geo',
            showEffectOn: 'render',
            rippleEffect: {
                period: 15,
                scale: 4,
                brushType: 'fill'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#FFC848',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data: handleEvents.initSeriesData(opt.data)
        }
        ]
    };
    chart.setOption(option);
    // 添加事件
    chart.on('click', function (params) {
        var _self = this;
        if (opt.goDown && params.name !== name[idx]) {
            if (cityMap[params.name]) {
                console.log(cityMap[params.name])
                var url = '../Scripts/map/' + cityMap[params.name] + '.json';
                $.get(url, function (response) {
                    console.log(response);
                    curGeoJson = response;
                    echarts.registerMap(params.name, response);
                    handleEvents.resetOption(_self, option, params.name);
                });
            }
        }
    });

    chart.setMap = function (mapName) {
        var _self = this;
        if (mapName.indexOf('市') < 0) mapName = mapName + '市';
        var citySource = cityMap[mapName];
        if (citySource) {
            var url = '../Scripts/map/' + citySource + '.json';
            $.get(url, function (response) {
                console.log(response);
                curGeoJson = response;
                echarts.registerMap(mapName, response);
                handleEvents.resetOption(_self, option, mapName);
            });
        }
    };
    return chart;
};



