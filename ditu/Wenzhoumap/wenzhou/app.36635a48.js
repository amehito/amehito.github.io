(function(e) {
	function t(t) {
		for(var i, r, s = t[0], o = t[1], c = t[2], u = 0, p = []; u < s.length; u++) r = s[u], Object.prototype.hasOwnProperty.call(n, r) && n[r] && p.push(n[r][0]), n[r] = 0;
		for(i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
		d && d(t);
		while(p.length) p.shift()();
		return l.push.apply(l, c || []), a()
	}


	function a() {
		for(var e, t = 0; t < l.length; t++) {
			for(var a = l[t], i = !0, s = 1; s < a.length; s++) {
				var o = a[s];
				0 !== n[o] && (i = !1)
			}
			i && (l.splice(t--, 1), e = r(r.s = a[0]))
		}
		return e
	}

	var i = {},
		n = {
			app: 0
		},
		l = [];

	function r(t) {
		if(i[t]) return i[t].exports;
		var a = i[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return e[t].call(a.exports, a, a.exports, r), a.l = !0, a.exports
	}
	r.m = e, r.c = i, r.d = function(e, t, a) {
		r.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: a
		})
	}, r.r = function(e) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, r.t = function(e, t) {
		if(1 & t && (e = r(e)), 8 & t) return e;
		if(4 & t && "object" === typeof e && e && e.__esModule) return e;
		var a = Object.create(null);
		if(r.r(a), Object.defineProperty(a, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for(var i in e) r.d(a, i, function(t) {
				return e[t]
			}.bind(null, i));
		return a
	}, r.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e["default"]
		} : function() {
			return e
		};
		return r.d(t, "a", t), t
	}, r.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, r.p = "";
	var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
		o = s.push.bind(s);
	s.push = t, s = s.slice();
	for(var c = 0; c < s.length; c++) t(s[c]);
	var d = o;
	l.push([0, "chunk-vendors"]), a()
})({
	0: function(e, t, a) {
		e.exports = a("56d7")
	},
	"0b92": function(e, t, a) {},
	1279: function(e, t, a) {},
	"157a": function(e, t, a) {
		"use strict";
		var i = a("7e32"),
			n = a.n(i);
		n.a
	},
	"1d4e": function(e, t, a) {},
	2217: function(e, t, a) {
		"use strict";
		var i = a("5acd"),
			n = a.n(i);
		n.a
	},
	"236d": function(e, t, a) {
		"use strict";
		var i = a("7154"),
			n = a.n(i);
		n.a
	},
	"39e8": function(e, t, a) {
		"use strict";
		var i = a("5447"),
			n = a.n(i);
		n.a
	},
	"428d": function(module, __webpack_exports__, __webpack_require__) {
		"use strict";
		var F_node_modules_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("768b"),
			core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7f7f"),
			core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__),
			regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("96cf"),
			regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__),
			F_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("3b8d"),
			esri_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("afaa"),
			esri_loader__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(esri_loader__WEBPACK_IMPORTED_MODULE_4__),
			_components_common_Tmap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4f7b"),
			server = _components_common_Tmap__WEBPACK_IMPORTED_MODULE_5__["h"].server;
		__webpack_exports__["a"] = {
			name: "commonEcoArcgis",
			data: function() {
				return {}
			},
			components: {},
			props: {
				id: String,
				leftOptions: Array
			},
			created: function() {},
			mounted: function() {
				var e = Object(F_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["a"])(regeneratorRuntime.mark((function e() {
					var t;
					return regeneratorRuntime.wrap((function(e) {
						while(1) switch(e.prev = e.next) {
							case 0:
								return t = this, e.next = 3, this.createMap();
							case 3:
								return e.next = 5, this.addQh();
							case 5:
								return e.next = 7, this.addmbk();
							case 7:
								this.$props.leftOptions && this.$props.leftOptions.map((function(e) {
									e.children.map((function(e) {
										e.id && e.fun && t.doFun(e)
									}))
								}));
							case 8:
							case "end":
								return e.stop()
						}
					}), e, this)
				})));

				function t() {
					return e.apply(this, arguments)
				}
				return t
			}(),
			watch: {
				leftOptions: {
					handler: function(e, t) {
						var a = this;
						a.map && e.map((function(e) {
							e.children.map((function(e) {
								e.id && e.fun && a.doFun(e)
							}))
						}))
					},
					deep: !0
				}
			},
			methods: {
				doFun: function doFun(item) {
					if(item.check) {
						if(this.map && this.map.findLayerById(item.id) ? this.map.findLayerById(item.id).visible = !0 : eval("this.".concat(item.fun, "(").concat(item.takeParam ? "'".concat(item.name, "'") : "", ")")), "chanyePlate" == item.id && this.map.findLayerById(item.id)) {
							var zoom = this.view.zoom,
								shallPlate = !(zoom > 12);
							this.map.findLayerById("chanyePlate").visible = shallPlate
						}
					} else this.map && this.map.findLayerById(item.id) && (this.map.findLayerById(item.id).visible = !1)
				},
				createMap: function(e) {
					var t = this;
					return new Promise((function(e, a) {
						Object(esri_loader__WEBPACK_IMPORTED_MODULE_4__["loadModules"])(["esri/Map", "esri/views/MapView", "esri/widgets/Legend", "esri/layers/VectorTileLayer", "esri/layers/TileLayer", "esri/layers/GraphicsLayer"], _components_common_Tmap__WEBPACK_IMPORTED_MODULE_5__["d"]).then((function(a) {
							var i = Object(F_node_modules_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["a"])(a, 6),
								n = i[0],
								l = i[1],
								r = i[2],
								s = i[3],
								o = i[4];
							i[5];
							t.map = new n({
								spatialReference: _components_common_Tmap__WEBPACK_IMPORTED_MODULE_5__["j"]
							}), t.view = new l({
								container: t.$props.id,
								spatialReference: _components_common_Tmap__WEBPACK_IMPORTED_MODULE_5__["j"],
								map: t.map,
								zoom: 13,
								center: [120.67819448808012, 28.039695289562555]
							});
							var c = new s({
								url: _components_common_Tmap__WEBPACK_IMPORTED_MODULE_5__["b"]
							});
							t.map.add(c), window.user.style.length && "image2017" == window.user.style[0].mapStyle && t.map.add(new o({
								url: _components_common_Tmap__WEBPACK_IMPORTED_MODULE_5__["g"],
								id: "image2017"
							})), t.legend = new r({
								view: t.view
							}), e(!0)
						}))
					}))
				},
				addQh: function() {
					var e = this;
					return new Promise((function(t, a) {
						Object(esri_loader__WEBPACK_IMPORTED_MODULE_4__["loadModules"])(["esri/layers/MapImageLayer"], _components_common_Tmap__WEBPACK_IMPORTED_MODULE_5__["d"]).then((function(a) {
							var i = Object(F_node_modules_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["a"])(a, 1),
								n = i[0],
								l = new n({
									url: _components_common_Tmap__WEBPACK_IMPORTED_MODULE_5__["e"],
									id: "lcjjdt",
									sublayers: [{
										id: 3
									}, {
										id: 0
									}]
								});
							e.map.add(l), t(!0)
						}))
					}))
				},
				addmbk: function() {
					var e = this;
					return new Promise((function(t, a) {
						Object(esri_loader__WEBPACK_IMPORTED_MODULE_4__["loadModules"])(["esri/layers/MapImageLayer"], _components_common_Tmap__WEBPACK_IMPORTED_MODULE_5__["d"]).then((function(a) {
							var i = Object(F_node_modules_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["a"])(a, 1),
								n = i[0],
								l = new n({
									url: _components_common_Tmap__WEBPACK_IMPORTED_MODULE_5__["e"],
									id: "mbk",
									sublayers: [{
										id: 1
									}]
								});
							e.map.add(l), t(!0)
						}))
					}))
				}
			}
		}
	},
	4545: function(e, t, a) {},
	"4e9e": function(e, t, a) {
		"use strict";
		var i = a("1279"),
			n = a.n(i);
		n.a
	},
	"4f7b": function(e, t, a) {
		"use strict";
		a.d(t, "h", (function() {
			return f
		})), a.d(t, "d", (function() {
			return b
		})), a.d(t, "a", (function() {
			return _
		})), a.d(t, "e", (function() {
			return y
		})), a.d(t, "c", (function() {
			return g
		})), a.d(t, "i", (function() {
			return w
		})), a.d(t, "b", (function() {
			return C
		})), a.d(t, "f", (function() {
			return A
		})), a.d(t, "g", (function() {
			return S
		})), a.d(t, "j", (function() {
			return M
		}));
		a("a481"), a("6762"), a("2fdb");
		var i = a("2b0e");
		window.env = location.host.includes("localhost") || location.host.includes("192.168.0.200") ? "prod" : location.host.includes("lysb.lucheng.gov.cn") ? "outside" : "prod", i["a"].prototype.$env = window.env, window.shallLogin = location.host.includes("localhost") || location.host.includes("lysb.lucheng.gov.cn"), console.log("[env]".concat(window.env), "[shallLogin]".concat(window.shallLogin));
		var n = {
				ARCGIS_API_URL: "http://192.168.0.200:9003/s/lc/libs/arcgis_js_v412_api/arcgis_js_api/library/4.12/dojo/dojo.js",
				LOCAL_DOMAIN: "http://192.168.0.100",
				LOCAL_HOST: "http://192.168.0.100/server/rest/services",
				FORWARD_HOST: "http://192.168.0.123:6080/arcgis/rest/services",
				OTHER_HOST: "https://services.wzmap.gov.cn/server/rest/services",
				SERVER_HOST: "http://192.168.0.200:9003/s/lc",
				API_HOST: "http://192.168.0.200:9003",
				LOGIN_HOST: "http://192.168.0.200:9003"
			},
			l = {
				ARCGIS_API_URL: "https://172.20.89.68:5001/lc/libs/arcgis_js_v412_api/arcgis_js_api/library/4.12/dojo/dojo.js",
				LOCAL_DOMAIN: "https://server.lcmap.com",
				LOCAL_HOST: "https://172.20.89.59/server/rest/services",
				FORWARD_HOST: "https://172.20.89.59/server/rest/services",
				OTHER_HOST: "https://services.wzmap.gov.cn/server/rest/services",
				SERVER_HOST: "https://172.20.89.68:5001/s/lc",
				API_HOST: "https://172.20.89.68:5001",
				LOGIN_HOST: "https://lysb.lucheng.gov.cn"
			},
			r = {
				ARCGIS_API_URL: "https://lysb.lucheng.gov.cn/lc/libs/arcgis_js_v412_api/arcgis_js_api/library/4.12/dojo/dojo.js",
				LOCAL_DOMAIN: "https://jjdtgis.lucheng.gov.cn",
				LOCAL_HOST: "https://jjdtgis.lucheng.gov.cn/arcgis/rest/services",
				FORWARD_HOST: "https://jjdtgis.lucheng.gov.cn/arcgis/rest/services",
				OTHER_HOST: "https://services.wzmap.gov.cn/server/rest/services",
				SERVER_HOST: "https://lysb.lucheng.gov.cn/s/lc",
				API_HOST: "https://lysb.lucheng.gov.cn",
				LOGIN_HOST: " https://lysb.lucheng.gov.cn"
			},
			s = "dev" == i["a"].prototype.$env ? n : "outside" == i["a"].prototype.$env ? r : l,
			o = s.ARCGIS_API_URL,
			c = s.LOCAL_DOMAIN,
			d = s.LOCAL_HOST,
			u = s.FORWARD_HOST,
			p = s.OTHER_HOST,
			v = s.SERVER_HOST,
			h = s.API_HOST,
			m = s.LOGIN_HOST,
			f = {
				server: v,
				serverCompatible: h,
				etag: "+mOUb1hDtJA=",
				token: "",
				login: m
			},
			b = {
				url: o,
				dojoConfig: {
					parseOnLoad: !0,
					packages: [{
						location: "".concat(v, "/libs/plugin"),
						name: "plugin"
					}, {
						name: "src",
						location: location.pathname.replace(/\/[^/]+$/, "") + "../src"
					}]
				}
			},
			_ = "".concat(c, "/arcgis/sharing/rest/generateToken"),
			y = ("".concat(u, "/lcjjdt/zszy/MapServer"), "".concat(u, "/lcjjdt/zszs/MapServer"), "".concat(u, "/lcjjdt/mjlyx/MapServer"), "".concat(u, "/lcjjdt/dkhx/MapServer"), "".concat(u, "/lcjjdt/lyhx/MapServer"), "".concat(u, "/lcjjdt/jjts/MapServer"), "".concat(u, "/lcjjdt/cybj/MapServer"), "".concat(u, "/lcjjdt/lyzs/MapServer"), "".concat(u, "/lcjjdt/qhmb/MapServer")),
			g = ("".concat(u, "/lcjjdt/yzqy/MapServer"), "".concat(u, "/lcjjdt/gongfang/MapServer"), "".concat(u, "/lcjjdt/lvyou/MapServer"), "http://172.20.89.7:6082/arcgis/rest/services/weijian/fangkong/MapServer"),
			w = "http://172.20.89.7:6082/arcgis/rest/services/weijian/xzjd/MapServer",
			C = "outside" == window.env ? "".concat(p, "/Hosted/JYB/VectorTileServer") : "".concat(d, "/Hosted/TDT_SLDT/VectorTileServer"),
			A = ("outside" == window.env ? "".concat(p, "/Hosted/DSJ/VectorTileServer") : "".concat(d, "/Hosted/kfq_WGS84/VectorTileServer"), "".concat(u, "/").concat("dev" == window.env ? "DT1022" : "lcjjdt/LCDT1115", "/MapServer"), "".concat(u, "/lcjjdt/fwm1021/MapServer"), "".concat(d, "/Hosted/zdly30_0924/SceneServer"), "".concat(d, "/Hosted/zdly30_0924/FeatureServer/0"), "".concat(d, "/Hosted/danan84fc/SceneServer"), "".concat(d, "/Hosted/guangzhu30_0929/SceneServer"), "".concat(d, "/Hosted/guangzhu30_0929/FeatureServer/0"), "outside" == window.env ? "".concat(p, "/Hosted/DSJ/VectorTileServer") : "".concat(d, "/Hosted/kfq_WGS84/VectorTileServer")),
			S = ("".concat(p, "/Hosted/XZQH/VectorTileServer"), "".concat(p, "/Hosted/YL/VectorTileServer"), "".concat(p, "/Hosted/NYLY/VectorTileServer"), "".concat(p, "/Hosted/JCQ/VectorTileServer"), "".concat(p, "/TDT/YX2017/MapServer")),
			M = ("".concat(p, "/TDT/YX_2012/MapServer"), "".concat(p, "/TDT/YX_2010/MapServer"), "".concat(p, "/TDT/YX_2005/MapServer"), "outside" == window.env ? "".concat(p, "/Hosted/JYB/VectorTileServer") : "".concat(u, "/Hosted/TDT_SLDT/VectorTileServer"), "".concat(u, "/lcjjdt/zhaoshang/MapServer"), "".concat(u, "/lcjjdt/zsmap_road/MapServer"), "".concat(u, "/lcjjdt/vr/MapServer"), "".concat(u, "/lcjjdt/poi56b1000/MapServer"), "".concat(u, "/lcjjdt/yongdichurang/MapServer"), "".concat(u, "/lcjjdt/guihua/MapServer"), {
				wkid: 4326
			})
	},
	5447: function(e, t, a) {},
	5587: function(e, t, a) {
		"use strict";
		var i = a("9b02"),
			n = a.n(i);
		n.a
	},
	"56d7": function(e, t, a) {
		"use strict";
		a.r(t);
		a("96cf");
		var i = a("3b8d"),
			n = (a("cadf"), a("551c"), a("f751"), a("097d"), a("2b0e")),
			l = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					attrs: {
						id: "app"
					}
				}, [a("div", {
					staticClass: "app_container"
				}, [a("transition", {
					attrs: {
						name: e.transitionName
					}
				}, [a("router-view")], 1)], 1)])
			},
			r = [],
			s = a("768b"),
			o = (a("7f7f"), a("8c4f")),
			c = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "Com_content Macroscopic"
				}, [a("div", {
					staticClass: "Com_map"
				}, [a("commonArcgis", {
					ref: "macroArcgis",
					attrs: {
						id: "macroArcgis",
						leftOptions: e.leftOptions
					}
				})], 1), a("div", {
					staticClass: "Com_container",
					staticStyle: {
						"z-index": "10"
					}
				}, [a("div", {
					class: "leftside animated " + (e.icon_show_left ? "slideOutLeft" : "slideInLeft") + "  "
				}, [a("leftMultiSelect", {
					ref: "leftOptions",
					attrs: {
						leftOptions: e.leftOptions
					}
				}), a("span", {
					staticClass: "hidden_button",
					on: {
						click: function() {
							e.icon_show_left = !e.icon_show_left
						}
					}
				})], 1), a("div", {
					attrs: {
						id: "fy-rightDiv"
					}
				}, [a("bqtj"), a("ylzy"), a("sbDate", {
					ref: "table"
				})], 1)]), a("xzDate"), a("bottomBtn"), a("topDate"), a("popOpen")], 1)
			},
			d = [],
			u = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "Map"
				}, [a("div", {
					staticClass: "arcgisMap",
					attrs: {
						id: e.id
					}
				})])
			},
			p = [],
			v = (a("a481"), a("ac6a"), a("456d"), a("afaa")),
			h = a("4f7b"),
			m = {
				qzbl: "illHash",
				zzbl: "illHash",
				yydc: "illHash",
				sqdc: "illHash",
				jjgl: "jjglHash",
				gld: "gldHash",
				lg: "lgHash",
				mj: "mjHash",
				ytyg: "ytygHash",
				hbhw: "hbhwHash",
				people_type_1: "cultureHash",
				people_type_2: "cultureHash",
				people_type_3: "scHash",
				people_type_6: "sfHash",
				people_type_7: "jsHash",
				people_type_10: "bwgHash",
				highway_type_1: "subwayHash",
				highway_type_2: "subwayHash",
				highway_type_3: "carHash",
				clinic_type_1: "hospitalHash",
				clinic_type_2: "hospitalHash",
				clinic_type_3: "hospitalHash",
				clinic_type_4: "hospitalHash",
				clinic_type_5: "hospitalHash",
				clinic_type_6: "hospitalHash",
				clinic_type_7: "hospitalHash",
				xq: "xqHash",
				xqjck: "xqjckHash",
				wg: "wgHash"
			},
			f = [{
				fieldName: "姓名",
				label: "姓名"
			}, {
				fieldName: "通讯地址",
				label: "通讯地址"
			}, {
				fieldName: "手机号",
				label: "手机号"
			}, {
				fieldName: "区域",
				label: "区域"
			}],
			b = [{
				fieldName: "Name",
				label: "名称"
			}, {
				fieldName: "Address",
				label: "地址"
			}, {
				fieldName: "Type",
				label: "类别"
			}, {
				fieldName: "Phone",
				label: "号码"
			}, {
				fieldName: "Question",
				label: "问题"
			}],
			_ = [{
				fieldName: "Name",
				label: "名称"
			}, {
				fieldName: "QZ_Count",
				label: "确诊人数统计"
			}, {
				fieldName: "Type",
				label: "类型"
			}, {
				fieldName: "Note",
				label: "备注"
			}],
			y = [{
				fieldName: "Name",
				label: "姓名"
			}, {
				fieldName: "Sex",
				label: "性别"
			}, {
				fieldName: "Phone",
				label: "联系方式"
			}, {
				fieldName: "Address",
				label: "家庭住址"
			}, {
				fieldName: "Country",
				label: "街道"
			}, {
				fieldName: "StartDivideTime",
				label: "开始隔离时间"
			}, {
				fieldName: "IsDivide",
				label: "是否接触隔离"
			}],
			g = [{
				fieldName: "Name",
				label: "姓名"
			}, {
				fieldName: "Sex",
				label: "性别"
			}, {
				fieldName: "Age",
				label: "年龄"
			}, {
				fieldName: "Phone",
				label: "联系方式"
			}, {
				fieldName: "Address",
				label: "家庭住址"
			}, {
				fieldName: "District",
				label: "区县"
			}, {
				fieldName: "Country",
				label: "乡镇街道"
			}, {
				fieldName: "ChargeManPhone",
				label: "责任人手机号"
			}, {
				fieldName: "OtherPhone",
				label: "其他联系电话"
			}, {
				fieldName: "ToWZTime",
				label: "到温时间"
			}, {
				fieldName: "Type",
				label: "类型"
			}, {
				fieldName: "Status",
				label: "状态"
			}, {
				fieldName: "StatusIllustration",
				label: "状态说明"
			}],
			w = [{
				fieldName: "Name",
				label: "集中隔离点名称"
			}, {
				fieldName: "Country",
				label: "街道"
			}, {
				fieldName: "Address",
				label: "地点"
			}, {
				fieldName: "Rooms",
				label: "房间数"
			}, {
				fieldName: "UseNumber",
				label: "使用人数"
			}, {
				fieldName: "Linkman",
				label: "联络人"
			}, {
				fieldName: "Phone",
				label: "联络电话"
			}, {
				fieldName: "RemainRooms",
				label: "剩余可用房间数"
			}, {
				fieldName: "HBtoLCNumber",
				label: "其中湖北回鹿人数"
			}],
			C = [{
				fieldName: "Name",
				label: "集中隔离点名称"
			}, {
				fieldName: "Address",
				label: "地点"
			}, {
				fieldName: "Rooms",
				label: "房间数"
			}, {
				fieldName: "Using",
				label: "是否启用"
			}],
			A = [{
				fieldName: "Name",
				label: "姓名"
			}, {
				fieldName: "Sex",
				label: "性别"
			}, {
				fieldName: "Age",
				label: "年龄"
			}, {
				fieldName: "Supervision",
				label: "是否监管"
			}, {
				fieldName: "DividePlace",
				label: "隔离地点"
			}, {
				fieldName: "StartDivideTime",
				label: "开始隔离时间"
			}, {
				fieldName: "Patient",
				label: "病人"
			}, {
				fieldName: "IdentityType",
				label: "身份类型"
			}, {
				fieldName: "Relation",
				label: "关系"
			}, {
				fieldName: "Phone",
				label: "电话"
			}, {
				fieldName: "Address_Department",
				label: "现住址_工作单位"
			}, {
				fieldName: "Country",
				label: "责任街道"
			}, {
				fieldName: "HealthCenter",
				label: "属地所属卫生院"
			}, {
				fieldName: "StartobserveTime",
				label: "开始观察日期"
			}, {
				fieldName: "Note",
				label: "备注"
			}],
			S = [{
				type: "fields",
				fieldInfos: [{
					fieldName: "NAME",
					label: "名称"
				}]
			}],
			M = [{
				fieldName: "Name",
				label: "名称"
			}, {
				fieldName: "Address",
				label: "地址"
			}, {
				fieldName: "Question",
				label: "问题"
			}],
			x = [{
				fieldName: "Address",
				label: "地址"
			}, {
				fieldName: "Type",
				label: "类别"
			}, {
				fieldName: "Question",
				label: "问题"
			}],
			k = [{
				fieldName: "NAME",
				label: "名称"
			}],
			j = [{
				fieldName: "MansionName",
				label: "小区（大厦）名称"
			}, {
				fieldName: "Country_1",
				label: "所属街道"
			}, {
				fieldName: "Community",
				label: "所属社区"
			}, {
				fieldName: "CommunityLink",
				label: "街道社区联系人、电话"
			}, {
				fieldName: "HousingAuthorityChargeMan",
				label: "房管中心联系人"
			}, {
				fieldName: "HousingAuthorityChargeManPhone",
				label: "房管中心联系电话"
			}, {
				fieldName: "MansionChargeMan",
				label: "小区管理处负责人"
			}, {
				fieldName: "MansionChargeMan",
				label: "小区管理处负责人"
			}, {
				fieldName: "MansionChargeManPhone",
				label: "小区管理处负责人联系方式"
			}, {
				fieldName: "PropertyName",
				label: "物业服务企业名称"
			}, {
				fieldName: "问题",
				label: "问题"
			}],
			O = [{
				fieldName: "Name",
				label: "名称"
			}],
			D = [{
				fieldName: "name",
				label: "名称"
			}, {
				fieldName: "address",
				label: "地点"
			}, {
				fieldName: "type",
				label: "类型"
			}],
			L = [{
				fieldName: "name",
				label: "名称"
			}, {
				fieldName: "ssjd",
				label: "街道"
			}],
			T = [{
				fieldName: "NAME",
				label: "名称"
			}, {
				fieldName: "ADDRESS",
				label: "地址"
			}, {
				fieldName: "Classify",
				label: "教别"
			}, {
				fieldName: "ChargeMan",
				label: "负责人"
			}, {
				fieldName: "ChargeManPhone",
				label: "联系电话"
			}],
			N = [{
				fieldName: "NAME",
				label: "名称"
			}, {
				fieldName: "ADDRESS",
				label: "地址"
			}, {
				fieldName: "TYPE",
				label: "类型"
			}, {
				fieldName: "GRADE",
				label: "等级"
			}],
			E = [{
				fieldName: "Name",
				label: "姓名"
			}, {
				fieldName: "Sex",
				label: "性别"
			}, {
				fieldName: "Age",
				label: "年龄"
			}, {
				fieldName: "Profession",
				label: "职业"
			}, {
				fieldName: "Country",
				label: "街道"
			}, {
				fieldName: "Address",
				label: "现住址"
			}, {
				fieldName: "DiseaseTime",
				label: "发病时间"
			}, {
				fieldName: "Hospital",
				label: "现住医院"
			}, {
				fieldName: "ContactHistory",
				label: "接触史"
			}, {
				fieldName: "InWZTime",
				label: "到温时间"
			}, {
				fieldName: "WarehousingTime",
				label: "入库时间"
			}],
			I = {
				hospitalHash: N,
				illHash: E,
				cultureHash: T,
				marketHash: L,
				subwayHash: O,
				carHash: D,
				xqHash: j,
				xqjckHash: k,
				scHash: S,
				sfHash: M,
				jsHash: x,
				jjglHash: y,
				hbhwHash: g,
				gldHash: w,
				lgHash: C,
				mjHash: A,
				wgHash: _,
				bwgHash: b,
				ytygHash: f
			},
			z = "http://172.20.89.68:5001/s",
			R = {
				name: "MacroscopicArcgis",
				data: function() {
					return {}
				},
				components: {},
				props: {
					id: String,
					leftOptions: Array
				},
				created: function() {},
				mounted: function() {
					var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
						var t;
						return regeneratorRuntime.wrap((function(e) {
							while(1) switch(e.prev = e.next) {
								case 0:
									return t = this, e.next = 3, this.createMap();
								case 3:
									return e.next = 5, this.addQh();
								case 5:
									return e.next = 7, this.addmbk();
								case 7:
									return e.next = 9, this.addChanyePlate();
								case 9:
									this.$props.leftOptions && this.$props.leftOptions.map((function(e) {
										e.children.map((function(e) {
											e.id && t.doFun(e)
										}))
									}));
								case 10:
								case "end":
									return e.stop()
							}
						}), e, this)
					})));

					function t() {
						return e.apply(this, arguments)
					}
					return t
				}(),
				watch: {
					leftOptions: {
						handler: function(e, t) {
							var a = this;
							a.map && e.map((function(e) {
								e.children.map((function(e) {
									e.id && a.doFun(e)
								}))
							}))
						},
						deep: !0
					}
				},
				methods: {
					doFun: function(e) {
						var t = this.$parent.$refs.leftOptions.shallYT,
							a = (t ? "yt_" : "") + e.id;
						e.check ? (this.map && this.map.findLayerById(a) ? this.map.findLayerById(a).visible = !0 : this.addFeatures(e, a), this.map && this.map.findLayerById("fangkong") && (this.map.findLayerById("fangkong").visible = !1)) : (this.map && this.map.findLayerById(e.id) && (this.map.findLayerById(e.id).visible = !1), this.map && this.map.findLayerById("yt_" + e.id) && (this.map.findLayerById("yt_" + e.id).visible = !1))
					},
					createMap: function(e) {
						var t = this;
						return new Promise((function(e, a) {
							Object(v["loadModules"])(["esri/Map", "esri/views/MapView", "esri/widgets/Legend", "esri/layers/VectorTileLayer", "esri/layers/TileLayer", "esri/layers/GraphicsLayer", "esri/layers/FeatureLayer"], h["d"]).then((function(a) {
								var i = Object(s["a"])(a, 6),
									n = i[0],
									l = i[1],
									r = i[2],
									o = i[3];
								i[4], i[5];
								t.map = new n({
									spatialReference: h["j"]
								}), t.view = new l({
									container: t.$props.id,
									spatialReference: h["j"],
									map: t.map,
									zoom: 13,
									center: [120.67819448808012, 28.039695289562555]
								});
								var c = new o({
									url: h["b"]
								});
								t.map.add(c), t.legend = new r({
									view: t.view
								}), t.view.on("click", (function(e) {
									console.log(t.map), console.log(e);
									var a = t.map.findLayerById("qzbl");
									a.visible
								})), e(!0)
							}))
						}))
					},
					addQh: function() {
						var e = this;
						return new Promise((function(t, a) {
							Object(v["loadModules"])(["esri/layers/MapImageLayer"], h["d"]).then((function(a) {
								var i = Object(s["a"])(a, 1),
									n = i[0],
									l = new n({
										url: h["e"],
										id: "lcjjdt",
										sublayers: [{
											id: 3
										}, {
											id: 0
										}]
									});
								e.map.add(l, 4), t(!0)
							}))
						}))
					},
					ybclick: function() {
						var e = this;
						return new Promise((function(t, a) {
							Object(v["loadModules"])(["esri/layers/MapImageLayer"], h["d"]).then((function(a) {
								var i = Object(s["a"])(a, 1),
									n = i[0],
									l = new n({
										url: h["c"],
										id: "fangkong",
										sublayers: [{
											id: 4
										}, {
											id: 3
										}, {
											id: 2
										}]
									});
								e.map.add(l, 5), t(!0)
							}))
						}))
					},
					goloaction: function(e) {
						var t = e.attributes,
							a = e.geometry,
							i = e.fieldAliases,
							n = e.highWayList,
							l = e.mjList,
							r = this,
							s = a.x,
							o = a.y;
						if(a.rings) {
							var c = 0,
								d = 0;
							a.rings[0].map((function(e) {
								c += e[0], d += e[1]
							})), s = c / a.rings[0].length, o = d / a.rings[0].length
						}
						r.view.goTo({
							center: [s, o]
						}), console.log("mjlist", l), r.view.popup = {
							title: "",
							content: '<table class="esri-widget__table" summary="属性和值列表"><tbody>\n            '.concat(Object.keys(t).filter((function(e) {
								return ["OBJECTID", "FEATUREGUID", "Bid"].indexOf(e) < 0
							})).map((function(e) {
								return '<tr>\n                  <th class="esri-feature__field-header">'.concat(i[e] || e, '</th>\n                  <td class="esri-feature__field-data">').concat(t[e] || "", "</td>\n                </tr>")
							})).join(""), "\n          </tbody></table>\n          ").concat(l ? '<div><p>密切接触者</p><table class="esri-widget__table" summary="密接">\n              <thead>\n              <tr>\n              <th style="width: 20%">姓名</th>\n              <th style="width: 20%">关系</th>\n              <th style="width: 30%">电话</th>\n              <th style="width: 20%">街道</th>\n              </tr>\n              </thead>\n              <tbody>\n              '.concat(l.map((function(e) {
								return '<tr>\n                   <td style="width: 20%;text-align: left;">'.concat(e.attributes.Name || "无", '</th>\n                  <td style="width: 20%;text-align: left;">').concat(e.attributes.Relation || "无", '</td>\n                    <td style="width: 30%;text-align: left;">').concat(e.attributes.Phone || "无", '</th>\n                  <td style="width: 20%;text-align: left;">').concat(e.attributes.Country || "无", "</td>\n                </tr>")
							})).join(""), "\n              </tbody></table></div>") : "", "\n          ").concat(n ? n.map((function(e) {
								return "<div><p>".concat(e.attributes.Time, '</p><table class="esri-widget__table" summary="值班表"><tbody>\n            ').concat(Object.keys(e.attributes).filter((function(e) {
									return ["Bid", "OBJECTID", "Time", "Expressway"].indexOf(e) < 0
								})).map((function(t) {
									return '<tr>\n                  <th class="esri-feature__field-header">'.concat(e.fieldAliases[t] || t, '</th>\n                  <td class="esri-feature__field-data">').concat(e.attributes[t] || "无", "</td>\n                </tr>")
								})).join(""), "\n            </tbody></table></div>")
							})).join("") : "", "\n          "),
							location: [s, o]
						}, r.view.popup.visible = !0
					},
					addmbk: function() {
						var e = this;
						return new Promise((function(t, a) {
							Object(v["loadModules"])(["esri/layers/MapImageLayer"], h["d"]).then((function(a) {
								var i = Object(s["a"])(a, 1),
									n = i[0],
									l = new n({
										url: h["e"],
										id: "mbk",
										sublayers: [{
											id: 1
										}]
									});
								e.map.add(l, 4), t(!0)
							}))
						}))
					},
					addChanyePlate: function() {
						var e = this;
						return new Promise((function(t, a) {
							Object(v["loadModules"])(["esri/layers/MapImageLayer"], h["d"]).then((function(a) {
								var i = Object(s["a"])(a, 1),
									n = i[0],
									l = new n({
										url: h["i"],
										id: "chanyePlate",
										opacity: 1
									});
								e.map.add(l, 2), e.legend.layerInfos.push({
									layer: l
								}), t(!0)
							}))
						}))
					},
					romoveLayer: function() {
						this.map.findLayerById("chanyePlate").visible = !this.map.findLayerById("chanyePlate").visible
					},
					yxt: function() {
						var e = this;
						if(this.map.findLayerById("dsj") && (this.map.findLayerById("dsj").visible = !1), !this.map.findLayerById("img")) return new Promise((function(t, a) {
							Object(v["loadModules"])(["esri/layers/TileLayer"], h["d"]).then((function(a) {
								var i = Object(s["a"])(a, 1),
									n = i[0],
									l = new n({
										url: h["g"],
										id: "img"
									});
								e.map.add(l, 2), e.legend.layerInfos.push({
									layer: l
								}), t(!0)
							}))
						}));
						this.map.findLayerById("img").visible = !this.map.findLayerById("img").visible
					},
					slt: function() {
						this.map.findLayerById("dsj") && (this.map.findLayerById("dsj").visible = !1), this.map.findLayerById("img") && (this.map.findLayerById("img").visible = !1)
					},
					ygt: function() {
						var e = this;
						if(this.map.findLayerById("img") && (this.map.findLayerById("img").visible = !1), !this.map.findLayerById("dsj")) return new Promise((function(t, a) {
							Object(v["loadModules"])(["esri/layers/VectorTileLayer"], h["d"]).then((function(a) {
								var i = Object(s["a"])(a, 1),
									n = i[0],
									l = new n({
										url: h["f"],
										id: "dsj"
									});
								e.map.add(l, 2), e.legend.layerInfos.push({
									layer: l
								}), t(!0)
							}))
						}));
						this.map.findLayerById("dsj").visible = !this.map.findLayerById("dsj").visible
					},
					addFeatures: function(e, t) {
						var a = t.replace(/yt_/g, ""),
							i = this,
							n = e.url,
							l = this.$parent.$refs.leftOptions.shallYT;
						return new Promise((function(r, o) {
							Object(v["loadModules"])(["esri/layers/FeatureLayer", "esri/layers/MapImageLayer"], h["d"]).then((function(o) {
								var c = Object(s["a"])(o, 2),
									d = c[0],
									u = c[1],
									p = {
										url: n,
										id: t,
										outFields: "*"
									};
								if(m[a] && I[m[a]]) {
									var v = I[m[a]];
									p.popupTemplate = {
										content: '<table class="esri-widget__table" summary="属性和值列表"><tbody>\n            '.concat(v.map((function(e) {
											return '<tr>\n                    <th class="esri-feature__field-header">'.concat(e.label, '</th>\n                    <td class="esri-feature__field-data">{').concat(e.fieldName, "}</td>\n                  </tr>")
										})).join(""), "\n          </tbody></table>")
									}
								}
								var h = e.isImg ? u : d;
								if(e.sublayers && (e.isImg ? p.sublayers = [{
										id: e.sublayers
									}] : p.url = p.url + "/" + e.sublayers), e.definitionExpression || l) {
									var f = [];
									e.definitionExpression && f.push(e.definitionExpression), l && e.ytd && f.push(e.ytd), e.isImg ? f.length && (p.sublayers[0].definitionExpression = f.join(" and ")) : f.length && (p.definitionExpression = f.join(" and "))
								}
								e.icon && (p.renderer = {
									type: "simple",
									symbol: {
										type: "picture-marker",
										url: "".concat(z, "/icon/other/").concat(e.icon, ".png"),
										width: "30px",
										height: "32px"
									}
								});
								var b = new h(p);
								i.map.add(b), r(!0)
							}))
						}))
					},
					IdentifyTaskFun: function(e, t) {
						var a = e.mapPoint,
							i = this;
						Object(v["loadModules"])(["esri/tasks/IdentifyTask", "esri/tasks/support/IdentifyParameters", "esri/tasks/QueryTask", "esri/tasks/support/Query", "esri/layers/MapImageLayer"], h["d"]).then((function(e) {
							var t = Object(s["a"])(e, 5),
								n = t[0],
								l = t[1],
								r = t[2],
								o = t[3],
								c = t[4],
								d = "http://172.20.89.7:6082/arcgis/rest/services/lucheng/fangkong/MapServer",
								u = new n(d),
								p = new l;
							p.tolerance = 10, p.returnGeometry = !0, p.geometry = a, p.mapExtent = i.view.extent, u.execute(p).then((function(e) {
								if(console.log(e), e.results.length > 0) {
									var t = new r({
											url: "http://172.20.89.7:6082/arcgis/rest/services/lucheng/fangkong/MapServer/4"
										}),
										a = new o;
									a.outFields = ["*"], console.log(e.results[0].feature.attributes["唯一码"]), a.where = "RelatingCodes like '%".concat(e.results[0].feature.attributes["唯一码"], "%'"), a.returnGeometry = !0, t.execute(a).then((function(e) {
										console.log(e);
										var t = new c({
											url: h["e"],
											id: "mbk",
											sublayers: [{
												id: 1
											}]
										});
										i.map.add(t, 4)
									}))
								}
							}))
						}))
					}
				}
			},
			P = R,
			B = (a("39e8"), a("2877")),
			H = Object(B["a"])(P, u, p, !1, null, "99dadca8", null),
			F = H.exports,
			W = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "leftMultiSelect"
				}, [a("div", {
					staticClass: "topic"
				}, [a("header", [a("span", {
					class: {
						active: !e.shallYT
					},
					on: {
						click: function() {
							e.shallYT = !1
						}
					}
				}, [e._v("全区疫情专题")]), a("i", [e._v("/")]), a("span", {
					class: {
						active: e.shallYT
					},
					on: {
						click: function() {
							e.shallYT = !0
						}
					}
				}, [e._v("银泰疫情专题")])]), a("div", {
					staticClass: "selectFrame no_select"
				}, e._l(this.tree, (function(t, i) {
					return a("div", {
						key: i
					}, [a("span", {
						on: {
							click: function(a) {
								return e.toggleTree(t.label, i)
							}
						}
					}, [e._v("\n          " + e._s(t.label) + "\n          "), t.disabled ? e._e() : a("input", {
						directives: [{
							name: "model",
							rawName: "v-model",
							value: t.check,
							expression: "item.check"
						}],
						attrs: {
							type: "checkbox"
						},
						domProps: {
							checked: Array.isArray(t.check) ? e._i(t.check, null) > -1 : t.check
						},
						on: {
							change: [function(a) {
								var i = t.check,
									n = a.target,
									l = !!n.checked;
								if(Array.isArray(i)) {
									var r = null,
										s = e._i(i, r);
									n.checked ? s < 0 && e.$set(t, "check", i.concat([r])) : s > -1 && e.$set(t, "check", i.slice(0, s).concat(i.slice(s + 1)))
								} else e.$set(t, "check", l)
							}, function(a) {
								return e.changeBox(t.check, i)
							}],
							click: function(t) {
								return e.stop(t)
							}
						}
					}), a("i", {
						class: "iconfont " + (t.show ? "icon-angle-double-up" : "icon-angle-double-down")
					})]), a("ul", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: t.show,
							expression: "item.show"
						}]
					}, e._l(t.children, (function(i, n) {
						return e.shallYT && -1 == i.ytname || !e.shallYT && -1 == i.name ? e._e() : a("li", {
							key: n
						}, [a("p", {
							on: {
								click: function(a) {
									e.ShowResult(i, t), e.changeTree(i)
								}
							}
						}, [e._v(e._s(e.shallYT && i.ytname || i.name))]), t.disabled ? e._e() : a("input", {
							directives: [{
								name: "model",
								rawName: "v-model",
								value: i.check,
								expression: "oitem.check"
							}],
							attrs: {
								type: "checkbox"
							},
							domProps: {
								checked: Array.isArray(i.check) ? e._i(i.check, null) > -1 : i.check
							},
							on: {
								change: [function(t) {
									var a = i.check,
										n = t.target,
										l = !!n.checked;
									if(Array.isArray(a)) {
										var r = null,
											s = e._i(a, r);
										n.checked ? s < 0 && e.$set(i, "check", a.concat([r])) : s > -1 && e.$set(i, "check", a.slice(0, s).concat(a.slice(s + 1)))
									} else e.$set(i, "check", l)
								}, function(t) {
									return e.changeTree(i)
								}],
								click: function(a) {
									return e.ShowResult(i, t)
								}
							}
						})])
					})), 0)])
				})), 0)]), e._m(0), a("div", {
					staticClass: "mapOption"
				})])
			},
			q = [function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "blueBorder"
				}, [a("p"), a("p"), a("p"), a("p")])
			}],
			U = new n["a"],
			G = h["h"].server,
			J = {
				name: "leftMultiSelect",
				data: function() {
					return {
						icon_show: !0,
						tree: [],
						items: {},
						server: G,
						shallYT: !1,
						URL: null
					}
				},
				components: {},
				props: {
					leftOptions: Array,
					leftformdata: Object,
					imgUrl: String
				},
				created: function() {
					this.tree = this.leftOptions, this.items = this.leftformdata
				},
				methods: {
					hidden: function() {
						this.icon_show = !this.icon_show
					},
					toggleTree: function(e, t) {
						for(var a in this.tree) this.tree[a].label == e && (this.tree[a].show = !this.tree[a].show)
					},
					changeTree: function(e, t) {
						this.intercept(), this.$parent && this.$parent.Listcontact && this.$parent.Listcontact(e)
					},
					stop: function(e) {
						e.stopPropagation()
					},
					changeBox: function(e, t) {
						var a = this.tree[t].check;
						for(var i in this.tree[t].children) this.tree[t].children[i].check = a
					},
					ShowResult: function(e, t) {
						this.$parent && e.id && !e.isImg && this.$parent.$refs.table.getItem(e, t.label)
					},
					intercept: function() {
						for(var e = this.$util.clone(this.tree), t = 0; t < e.length; t++) {
							var a = !0;
							e[t].children.length ? e[t].children.map((function(e) {
								e.check || (a = !1)
							})) : a = !1, e[t].check = a
						}
						this.tree = e, this.$parent.leftOptions = this.tree
					},
					clean: function() {
						for(var e = this.$util.clone(this.tree), t = 0; t < e.length; t++) e[t].children.length && e[t].children.map((function(e) {
							e.check = !1
						})), e[t].check = !1;
						this.tree = e, this.$parent.leftOptions = this.tree
					}
				},
				watch: {
					tree: {
						handler: function() {},
						deep: !0
					},
					imgUrl: {
						handler: function(e, t) {
							this.URL = e
						},
						immediate: !0
					},
					leftOptions: function(e, t) {
						this.tree = e
					},
					shallYT: function(e, t) {
						console.log("[YT]", e), U.$emit("chartDataMod", e), this.clean()
					}
				}
			},
			Z = J,
			Q = (a("8f4e"), Object(B["a"])(Z, W, q, !1, null, null, null)),
			V = Q.exports,
			Y = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					attrs: {
						id: "btnDiv"
					}
				}, [a("ul", [a("li", {
					on: {
						click: e.xzqh
					}
				}, [e._v("行政区划")]), a("li", {
					on: {
						click: e.yxt
					}
				}, [e._v("影像图")]), a("li", {
					on: {
						click: e.slt
					}
				}, [e._v("矢量图")]), a("li", {
					on: {
						click: e.ygt
					}
				}, [e._v("夜光图")]), a("li", {
					on: {
						click: e.clean
					}
				}, [e._v("清除")])])])
			},
			K = [],
			X = {
				name: "bottomBtn",
				data: function() {
					return {}
				},
				created: function() {},
				mounted: function() {},
				computed: {},
				methods: {
					xzqh: function() {
						this.$parent.$refs.macroArcgis.romoveLayer()
					},
					yxt: function() {
						this.$parent.$refs.macroArcgis.yxt()
					},
					slt: function() {
						this.$parent.$refs.macroArcgis.slt()
					},
					ygt: function() {
						this.$parent.$refs.macroArcgis.ygt()
					},
					clean: function() {
						this.$parent.$refs.leftOptions.clean(), this.$parent.$refs.macroArcgis.view.popup.visible = !1
					}
				}
			},
			ee = X,
			te = (a("90a4"), Object(B["a"])(ee, Y, K, !1, null, null, null)),
			ae = te.exports,
			ie = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					attrs: {
						id: "bltjDiv"
					}
				}, [a("h3", [e._v("\n    - 鹿城区病例统计 -\n    "), a("select", {
					on: {
						change: function(t) {
							return e.bqSelect(t)
						}
					}
				}, [a("option", {
					attrs: {
						value: "0"
					}
				}, [e._v("确诊病例")]), a("option", {
					attrs: {
						value: "1"
					}
				}, [e._v("确诊人员增长趋势")])])]), a("div", {
					attrs: {
						id: "bqtjChart"
					}
				})])
			},
			ne = [],
			le = (a("55dd"), a("28a5"), a("a1bc")),
			re = {
				data: function() {
					return {
						charts: " ",
						titleData: "灾情统计",
						dataAge: le.dataAge,
						YTdataAge: le.YTdataAge,
						dataName: le.dataName,
						dataQS: le.dataQS,
						dataLC: le.dataLC
					}
				},
				methods: {
					zqzb: function() {
						var e = this.$echarts.init(document.getElementById("bqtjChart"));
						e.setOption({
							grid: {
								left: "8%",
								right: "5%",
								top: "14%"
							},
							xAxis: {
								type: "category",
								boundaryGap: !0,
								show: !0,
								axisTick: {
									show: !1
								},
								axisLabel: {
									fontSize: 15,
									color: "#FFF",
									formatter: function(e) {
										return e.split("").join("\n")
									}
								},
								axisLine: {
									lineStyle: {
										color: "#FFF"
									}
								},
								data: this.dataAge.sort((function(e, t) {
									return t.value - e.value
								})).map((function(e) {
									return e.name
								}))
							},
							yAxis: {
								type: "value",
								name: "",
								axisLine: {
									lineStyle: {
										color: "#FFF"
									}
								},
								axisTick: {
									show: !1
								},
								splitLine: {
									show: !1
								}
							},
							series: [{
								type: "bar",
								label: {
									normal: {
										show: !0,
										position: "top",
										textStyle: {
											color: "#FFF"
										}
									}
								},
								barWidth: "45%",
								yAxisIndex: 0,
								data: this.dataAge
							}]
						})
					},
					qzqs: function() {
						var e = this.$echarts.init(document.getElementById("bqtjChart"));
						e.setOption({
							tooltip: {
								trigger: "axis",
								axisPointer: {
									label: {
										backgroundColor: "#6a7985"
									}
								}
							},
							legend: {
								show: !0,
								icon: "roundRect",
								bottom: "2%",
								textStyle: {
									color: "#fff",
									fontSize: 12
								}
							},
							color: ["#0080ff", "#4cd5ce"],
							grid: {
								left: "3%",
								right: "6%",
								top: "10%",
								bottom: "15%",
								containLabel: !0
							},
							xAxis: {
								type: "category",
								boundaryGap: !1,
								data: this.dataName,
								axisLabel: {
									show: !0,
									textStyle: {
										color: "#fff",
										fontSize: 12
									}
								},
								axisTick: !1,
								axisLine: {
									lineStyle: {
										color: "#9fdbfd",
										width: 2
									}
								}
							},
							yAxis: {
								type: "value",
								axisLine: {
									onZero: !1,
									lineStyle: {
										width: 2,
										color: "#9fdbfd"
									}
								},
								axisTick: !1,
								axisLabel: {
									show: !0,
									textStyle: {
										color: "#fff"
									}
								},
								splitLine: {
									show: !0,
									lineStyle: {
										type: "solid",
										color: "#17035a"
									}
								}
							},
							series: [{
								name: "温州市确诊人员增长趋势(例)",
								type: "line",
								smooth: !0,
								itemStyle: {
									normal: {
										color: "rgba(14, 255, 216)",
										lineStyle: {
											width: 2,
											type: "solid",
											color: "#1ff4fa"
										},
										label: {
											show: !0,
											color: "#fff"
										}
									}
								},
								symbolSize: 5,
								areaStyle: {
									normal: {}
								},
								data: this.dataQS
							}, {
								name: "鹿城确诊人员增长趋势(例)",
								type: "line",
								smooth: !0,
								itemStyle: {
									normal: {
										color: "rgba(254,77,105)",
										lineStyle: {
											width: 2,
											type: "solid",
											color: "rgb(254,77,105)"
										},
										label: {
											show: !0,
											color: "#fff"
										}
									}
								},
								symbolSize: 5,
								areaStyle: {
									normal: {}
								},
								data: this.dataLC
							}]
						})
					},
					bqSelect: function(e) {
						"1" == e.target.value && (this.$echarts.init(document.getElementById("bqtjChart")).clear(), this.qzqs()), "0" == e.target.value && (this.$echarts.init(document.getElementById("bqtjChart")).clear(), this.zqzb())
					}
				},
				mounted: function() {
					this.zqzb();
					var e = this;
					U.$on("chartDataMod", (function(t) {
						e.dataAge = le.YTdataAge, t || (e.dataAge = le.dataAge), this.$echarts.init(document.getElementById("bqtjChart")).clear(), e.zqzb()
					}))
				}
			},
			se = re,
			oe = (a("c094"), Object(B["a"])(se, ie, ne, !1, null, null, null)),
			ce = oe.exports,
			de = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					attrs: {
						id: "ylzyDiv"
					}
				}, [a("h3", [a("a", {
					staticStyle: {
						"font-size": "14px",
						color: "#fff",
						cursor: "pointer",
						position: "absolute",
						left: "10px"
					},
					on: {
						click: function(t) {
							return e.popShowFun(1)
						}
					}
				}, [e._v("隔离人员详情")]), e._v("\n    - 各街镇集中隔离点空闲房间数 -\n    "), a("a", {
					staticStyle: {
						"font-size": "14px",
						color: "#fff",
						cursor: "pointer",
						position: "absolute",
						right: "10px"
					},
					on: {
						click: function(t) {
							return e.popShowFun(2)
						}
					}
				}, [e._v("隔离点详情")])]), e._m(0), a("div", {
					attrs: {
						id: "ylzyChart"
					}
				})])
			},
			ue = [function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "ylzySelect",
					staticStyle: {
						display: "none"
					}
				}, [a("select", {
					attrs: {
						name: "",
						id: ""
					}
				}, [a("option", {
					attrs: {
						value: ""
					}
				}, [e._v("鹿城区")]), a("option", {
					attrs: {
						value: ""
					}
				}, [e._v("龙湾区")]), a("option", {
					attrs: {
						value: ""
					}
				}, [e._v("瓯海区")]), a("option", {
					attrs: {
						value: ""
					}
				}, [e._v("乐清市")]), a("option", {
					attrs: {
						value: ""
					}
				}, [e._v("洞头区")]), a("option", {
					attrs: {
						value: ""
					}
				}, [e._v("苍南县")]), a("option", {
					attrs: {
						value: ""
					}
				}, [e._v("龙港市")]), a("option", {
					attrs: {
						value: ""
					}
				}, [e._v("永嘉县")]), a("option", {
					attrs: {
						value: ""
					}
				}, [e._v("文成县")]), a("option", {
					attrs: {
						value: ""
					}
				}, [e._v("平阳县")])]), a("select", {
					attrs: {
						name: "",
						id: ""
					}
				}, [a("option", {
					attrs: {
						value: ""
					}
				}, [e._v("集中隔离点")]), a("option", {
					attrs: {
						value: ""
					}
				}, [e._v("发热门诊机构")])]), a("select", {
					attrs: {
						name: "",
						id: ""
					}
				}, [a("option", {
					attrs: {
						value: ""
					}
				}, [e._v("空闲房间数")]), a("option", {
					attrs: {
						value: ""
					}
				}, [e._v("总房间数")])])])
			}],
			pe = a("313e"),
			ve = a.n(pe);
		n["a"].prototype.$echarts = ve.a;
		var he = {
				data: function() {
					return {
						charts: "",
						phname: ["南汇街道-锦江之星", "五马街道-锐思特（飞霞路店）", "大南街道-瑞都酒店", "蒲鞋市街道-金丝桥瑞都商旅酒店", "双屿街道-瑞都连锁酒店", "仰义街道-双屿欣悦宾馆", "松台街道-威斯顿时尚酒店", "广化街道-众豪酒店", "滨江街道-唯乐创意酒店"],
						sumData: [80, 80, 72, 70, 63, 51, 50, 50, 46],
						usedData: [0, 65, 58, 16, 29, 6, 50, 0, 43]
					}
				},
				methods: {
					mapPh: function() {
						var e = this.$echarts.init(document.getElementById("ylzyChart"));
						e.setOption({
							grid: {
								left: "3%",
								right: "7%",
								top: "3%",
								bottom: "3%",
								containLabel: !0
							},
							tooltip: {
								trigger: "axis",
								axisPointer: {
									type: "shadow"
								},
								formatter: "{b0}: {c0}"
							},
							legend: {
								icon: "roundRect",
								bottom: "0%",
								textStyle: {
									color: "#fff"
								},
								data: ["已用房间数", "总房间数"]
							},
							xAxis: {
								show: !1,
								type: "value"
							},
							yAxis: {
								type: "category",
								inverse: !0,
								axisLabel: {
									show: !0,
									textStyle: {
										color: "#64c4e4"
									}
								},
								splitLine: {
									show: !1
								},
								axisTick: {
									show: !1
								},
								axisLine: {
									show: !1
								},
								data: this.phname
							},
							series: [{
								type: "bar",
								name: "总房间数",
								barGap: "-100%",
								label: {
									normal: {
										show: !0,
										position: "right",
										color: "#fff"
									}
								},
								legendHoverLink: !1,
								barWidth: 10,
								itemStyle: {
									normal: {
										color: "#7E47FF"
									},
									emphasis: {
										color: "#7E47FF"
									}
								},
								data: this.sumData
							}, {
								type: "bar",
								name: "已用房间数",
								barGap: "-100%",
								stack: "2",
								legendHoverLink: !1,
								barWidth: 10,
								label: {
									normal: {
										show: !0,
										position: "inside",
										color: "#fff"
									}
								},
								itemStyle: {
									normal: {
										color: "#FD5916"
									},
									emphasis: {
										color: "#FD5916"
									}
								},
								data: this.usedData
							}]
						}), e.on("click", (function(e) {
							alert(e.name)
						}))
					},
					popShowFun: function(e) {
						U.$emit("popshow", e)
					}
				},
				mounted: function() {
					this.mapPh()
				}
			},
			me = he,
			fe = (a("703f"), Object(B["a"])(me, de, ue, !1, null, null, null)),
			be = fe.exports,
			_e = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					attrs: {
						id: "sbDateDiv"
					}
				}, [a("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.text,
						expression: "text"
					}],
					staticStyle: {
						width: "80%",
						"margin-top": "10px",
						"background-color": "#162449",
						border: "1px solid #75c8f4",
						"border-radius": "8px",
						padding: "8px 9px",
						color: "#fff"
					},
					attrs: {
						type: "text",
						placeholder: "请输入查询"
					},
					domProps: {
						value: e.text
					},
					on: {
						input: function(t) {
							t.target.composing || (e.text = t.target.value)
						}
					}
				}), a("button", {
					staticStyle: {
						"background-color": "#162449",
						border: "1px solid #75c8f4",
						"border-radius": "8px",
						padding: "7px 9px",
						color: "#fff"
					},
					on: {
						click: function() {
							e.text && e.filteItem()
						}
					}
				}, [e._v("查询")]), a("ul", e._l(e.forceData, (function(t, i) {
					return a("li", {
						key: i,
						on: {
							click: function(a) {
								return e.goLocation(t)
							}
						}
					}, ["疫情分布" == t.label && "gld" != t.id && "mj" != t.id && "mj2" != t.id ? a("span", [e._v(e._s(++i) + ".患者：" + e._s(t.attributes.Name.slice(0, 1)) + "**，" + e._s(t.attributes.Sex) + "，" + e._s(t.attributes.Address) + "，" + e._s(t.attributes.Age))]) : e._e(), "mj" == t.id || "mj2" == t.id ? a("span", [e._v(e._s(++i) + ".患者：" + e._s(t.attributes.Name.slice(0, 1)) + "**，" + e._s(t.attributes.Sex) + "，" + e._s(t.attributes.Address_Department))]) : e._e(), "疫情分布" == t.label && "gld" == t.id ? a("span", [e._v(e._s(++i) + "." + e._s(t.attributes.Name) + "，" + e._s(t.attributes.Address))]) : e._e(), "医疗资源" == t.label ? a("span", [e._v(e._s(++i) + "." + e._s(t.attributes.NAME))]) : e._e(), "highway_type_1" == t.id ? a("span", [e._v(e._s(++i) + "." + e._s(t.attributes.Name))]) : e._e(), "highway_type_2" == t.id ? a("span", [e._v(e._s(++i) + "." + e._s(t.attributes.Name))]) : e._e(), "highway_type_3" == t.id ? a("span", [e._v(e._s(++i) + "." + e._s(t.attributes.name))]) : e._e(), "人员密集场所" == t.label && "people_type_3" == t.id ? a("span", [e._v(e._s(++i) + "." + e._s(t.attributes.name))]) : e._e(), "人员密集场所" == t.label && "people_type_7" == t.id ? a("span", [e._v(e._s(++i) + "." + e._s(t.attributes.Address))]) : e._e(), "人员密集场所" == t.label && "people_type_3" != t.id && "people_type_7" != t.id ? a("span", [e._v(e._s(++i) + "." + e._s(t.attributes.Name))]) : e._e(), "people_type_8" == t.id || "people_type_9" == t.id ? a("span", [e._v(e._s(++i) + "." + e._s(t.attributes.Name))]) : e._e(), "xq" == t.id ? a("span", [e._v(e._s(++i) + "." + e._s(t.attributes.name))]) : e._e(), "xqjck" == t.id ? a("span", [e._v(e._s(++i) + "." + e._s(t.attributes.NAME))]) : e._e(), "wg" == t.id ? a("span", [e._v(e._s(++i) + "." + e._s(t.attributes.Name))]) : e._e()])
				})), 0), e.isLoading ? a("Loading") : e._e()], 1)
			},
			ye = [],
			ge = function() {
				var e = this,
					t = e.$createElement;
				e._self._c;
				return e._m(0)
			},
			we = [function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "loadingFrame"
				}, [a("div", {
					staticClass: "loading"
				})])
			}],
			Ce = {
				name: "loading"
			},
			Ae = Ce,
			Se = (a("5c87"), Object(B["a"])(Ae, ge, we, !1, null, null, null)),
			Me = Se.exports,
			xe = [{
				label: "疫情分布",
				check: !1,
				show: !0,
				children: [{
					name: "确诊病例 (36例)",
					ytname: "确诊病例 (20例)",
					ytd: "ContactHistory like '%银泰%'",
					id: "qzbl",
					url: "http://172.20.89.7:6082/arcgis/rest/services/lucheng/fangkong/MapServer",
					sublayers: "0",
					icon: "确诊病例",
					check: !0
				}, {
					name: "疑似病例 (25例)",
					ytname: "疑似病例 (5例)",
					ytd: "ContactHistory like '%银泰%'",
					id: "zzbl",
					url: "http://172.20.89.7:6082/arcgis/rest/services/lucheng/fangkong/MapServer",
					sublayers: "1",
					icon: "疑似病例",
					check: !1
				}, {
					name: "-1",
					ytname: "银泰员工 (575例)",
					id: "ytyg",
					url: "http://172.20.89.7:6082/arcgis/rest/services/lucheng/fangkong/MapServer",
					sublayers: "11",
					icon: "银泰员工",
					check: !1
				}, {
					name: "医院发热待查 (15例)",
					id: "yydc",
					ytname: -1,
					url: "http://172.20.89.7:6082/arcgis/rest/services/lucheng/fangkong/MapServer",
					sublayers: "2",
					icon: "医院发热待查",
					check: !1
				}, {
					name: "社区发热待查 (7例)",
					id: "sqdc",
					ytname: -1,
					url: "http://172.20.89.7:6082/arcgis/rest/services/lucheng/fangkong/MapServer",
					sublayers: "3",
					icon: "社区发热待查",
					check: !1
				}, {
					name: "集中隔离点 (18个)",
					id: "gld",
					ytname: "集中隔离点 (18个)",
					url: "http://172.20.89.7:6082/arcgis/rest/services/lucheng/paiban/MapServer",
					sublayers: "2",
					icon: "治愈",
					check: !1
				}, {
					name: "居家隔离人员 (2416例)",
					id: "jjgl",
					ytname: -1,
					url: "http://172.20.89.7:6082/arcgis/rest/services/lucheng/fangkong/MapServer",
					sublayers: "7",
					icon: "死亡",
					check: !1
				}, {
					name: "密切接触者 (337例)",
					ytname: "密切接触者 (150例)",
					ytd: "IdentityType like '%银泰%'",
					id: "mj",
					url: "http://172.20.89.7:6082/arcgis/rest/services/lucheng/fangkong/MapServer",
					sublayers: "5",
					icon: "密接",
					check: !1
				}, {
					name: "湖北回鹿人员信令 (6605例)",
					id: "hbhw",
					ytname: -1,
					url: "http://172.20.89.7:6082/arcgis/rest/services/lucheng/fangkong/MapServer",
					sublayers: "9",
					icon: "湖北回温",
					check: !1
				}]
			}, {
				label: "网格管理",
				check: !1,
				show: !0,
				children: [{
					name: "街镇网格",
					id: "chanyePlate",
					sublayers: "0",
					isImg: !0,
					url: "http://172.20.89.7:6082/arcgis/rest/services/weijian/xzjd/MapServer",
					check: !0
				}, {
					name: "社区网格",
					id: "wg",
					sublayers: "0",
					url: "http://172.20.89.7:6082/arcgis/rest/services/lucheng/shequ/MapServer",
					check: !1
				}, {
					name: "小区、大厦、物业",
					id: "xq",
					sublayers: "1",
					url: "http://172.20.89.7:6082/arcgis/rest/services/lucheng/crowded/MapServer",
					check: !1
				}, {
					name: "小区进出口点",
					id: "xqjck",
					sublayers: "0",
					icon: "进出口",
					url: "http://172.20.89.7:6082/arcgis/rest/services/lucheng/crowded/MapServer",
					check: !1
				}]
			}, {
				label: "卡口值班",
				check: !1,
				show: !0,
				children: [{
					name: "高速卡口 (4个)",
					id: "highway_type_1",
					url: "http://172.20.89.7:6082/arcgis/rest/services/lucheng/zhiban/MapServer",
					sublayers: "0",
					icon: "高速",
					check: !1
				}, {
					name: "火车站 (1个)",
					id: "highway_type_2",
					url: "http://172.20.89.7:6082/arcgis/rest/services/lucheng/paiban/MapServer",
					sublayers: "1",
					icon: "火车站",
					check: !1
				}, {
					name: "商场超市 (24个)",
					id: "people_type_8",
					url: "http://172.20.89.7:6082/arcgis/rest/services/lucheng/paiban/MapServer",
					sublayers: "3",
					icon: "商场超市",
					check: !1
				}, {
					name: "农贸市场 (41个)",
					id: "people_type_9",
					url: "http://172.20.89.7:6082/arcgis/rest/services/lucheng/crowded/MapServer",
					sublayers: "4",
					icon: "农贸市场",
					check: !1
				}]
			}, {
				label: "人员密集场所",
				check: !1,
				show: !0,
				children: [{
					name: "佛道宗教活动场所 (110个)",
					id: "people_type_1",
					url: "http://172.20.89.7:6082/arcgis/rest/services/lucheng/crowded/MapServer",
					sublayers: "2",
					icon: "宗教",
					check: !1
				}, {
					name: "天基宗教活动场所 (91个)",
					id: "people_type_2",
					url: "http://172.20.89.7:6082/arcgis/rest/services/lucheng/crowded/MapServer",
					sublayers: "3",
					icon: "宗教",
					check: !1
				}, {
					name: "专业市场 (10个)",
					id: "people_type_3",
					url: "http://172.20.89.59/server/rest/services/lcjjdt/jjts/MapServer",
					sublayers: "3",
					icon: "市场",
					check: !1
				}, {
					name: "城市书房 (93个)",
					id: "people_type_6",
					url: "http://172.20.89.7:6082/arcgis/rest/services/lucheng/crowded/MapServer",
					sublayers: "6",
					icon: "城市书房",
					check: !1
				}, {
					name: "健身房 (28个)",
					id: "people_type_7",
					url: "http://172.20.89.7:6082/arcgis/rest/services/lucheng/crowded/MapServer",
					sublayers: "5",
					icon: "健身房",
					check: !1
				}, {
					name: "博物馆 (14个)",
					id: "people_type_10",
					url: "http://172.20.89.7:6082/arcgis/rest/services/lucheng/crowded/MapServer",
					sublayers: "7",
					icon: "博物馆",
					check: !1
				}, {
					name: "文化场所 (4个)",
					id: "people_type_11",
					url: "http://172.20.89.7:6082/arcgis/rest/services/lucheng/crowded/MapServer",
					sublayers: "8",
					icon: "文化",
					check: !1
				}]
			}, {
				label: "医疗资源",
				check: !1,
				show: !0,
				children: [{
					name: "发热门诊 (8家)",
					id: "clinic_type_1",
					url: "http://172.20.89.7:6082/arcgis/rest/services/weijian/resource/MapServer",
					sublayers: "1",
					icon: "发热门诊",
					check: !1
				}, {
					name: "定点救治医院 (1家)",
					id: "clinic_type_2",
					url: "http://172.20.89.7:6082/arcgis/rest/services/weijian/resource/MapServer",
					sublayers: "2",
					icon: "定点医院",
					check: !1
				}, {
					name: "其他专科医院 (122家)",
					id: "clinic_type_3",
					url: "https://services.wzmap.gov.cn/server/rest/services/TDT/ZhuanTiSJ/MapServer",
					sublayers: "8",
					definitionExpression: "TAG LIKE '%专科医院%'",
					icon: "其他专科医院",
					check: !1
				}, {
					name: "医保药房 (8家)",
					id: "clinic_type_5",
					url: "https://services.wzmap.gov.cn/server/rest/services/TDT/ZhuanTiSJ/MapServer",
					sublayers: "8",
					definitionExpression: "TAG LIKE '%药房/保健品%'",
					icon: "药店",
					check: !1
				}, {
					name: "疾控中心 (1家)",
					id: "clinic_type_7",
					sublayers: "0",
					url: "http://172.20.89.7:6082/arcgis/rest/services/weijian/resource/MapServer",
					icon: "疾控中心",
					check: !1
				}]
			}, {
				label: "其它",
				check: !1,
				show: !0,
				children: [{
					name: "建筑工地信息",
					id: "",
					icon: "建筑工地",
					check: !1
				}, {
					name: "南郊重点企业",
					id: "",
					icon: "重点企业",
					check: !1
				}, {
					name: "南郊街道自建项目企业排查表",
					id: "",
					icon: "自建项目",
					check: !1
				}, {
					name: "南郊街道辖区在建项目企业排查表",
					id: "",
					icon: "在建项目",
					check: !1
				}]
			}],
			ke = {
				name: "sbDate",
				data: function() {
					return {
						text: void 0,
						data: [],
						forceData: [],
						isLoading: !1
					}
				},
				created: function() {},
				mounted: function() {
					this.getItem(xe[0].children[0], xe[0].label)
				},
				components: {
					Loading: Me
				},
				methods: {
					filteItem: function() {
						var e = this;
						this.isLoading = !0;
						var t = this.data,
							a = [];
						t.map((function(t) {
							var i = t.attributes,
								n = i.name || i.Name || i.NAME || i.Address || i.short_name || i.姓名;
							n && ~n.indexOf(e.text) && a.push(t)
						})), this.forceData = a, this.isLoading = !1
					},
					getItem: function(e, t) {
						var a = this,
							n = e.url,
							l = e.sublayers,
							r = e.id,
							o = (e.name, e.definitionExpression),
							c = e.ytd;
						this.isLoading = !0;
						var d = [];
						o && d.push(o), this.$parent.$refs.leftOptions.shallYT && c && d.push(c), Object(v["loadModules"])(["esri/tasks/QueryTask", "esri/tasks/support/Query"], h["d"]).then(function() {
							var e = Object(i["a"])(regeneratorRuntime.mark((function e(i) {
								var o, c, u, p, v, h, m, f, b, _, y, g, w, C;
								return regeneratorRuntime.wrap((function(e) {
									while(1) switch(e.prev = e.next) {
										case 0:
											return o = Object(s["a"])(i, 2), c = o[0], u = o[1], p = new c({
												url: "".concat(n, "/").concat(l)
											}), v = new u, v.outFields = "*", v.where = d.length ? d.join(" and ") : "1=1", v.returnGeometry = !0, v.start = 0, v.num = 20, e.next = 10, p.execute(v);
										case 10:
											if(h = e.sent, m = h.fields, f = h.features, b = {}, m.map((function(e) {
													b[e.name] = e.alias
												})), _ = f.map((function(e) {
													return e.fieldAliases = b, e.label = t, e.id = r, e
												})), "highway_type_1" != r) {
												e.next = 23;
												break
											}
											return e.next = 19, a.getHighWay(n);
										case 19:
											y = e.sent, g = {}, y.map((function(e) {
												g[e.attributes.Expressway] || (g[e.attributes.Expressway] = []), g[e.attributes.Expressway].push(e)
											})), _.map((function(e) {
												return g[e.attributes.Name] && (e.highWayList = g[e.attributes.Name]), e
											}));
										case 23:
											if("qzbl" != r) {
												e.next = 30;
												break
											}
											return e.next = 26, a.getMj(n);
										case 26:
											w = e.sent, C = {}, w.map((function(e) {
												"" != e.attributes.RelatingCodes && null != e.attributes.RelatingCodes & !C[e.attributes.RelatingCodes] && (C[e.attributes.RelatingCodes] = []), "" != e.attributes.RelatingCodes && null != e.attributes.RelatingCodes && C[e.attributes.RelatingCodes].push(e)
											})), _.map((function(e) {
												return C[e.attributes.Bid] && (e.mjList = C[e.attributes.Bid]), e
											}));
										case 30:
											a.data = _, a.forceData = _, a.text = void 0, a.isLoading = !1;
										case 34:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}())
					},
					getHighWay: function(e) {
						return new Promise((function(t, a) {
							Object(v["loadModules"])(["esri/tasks/QueryTask", "esri/tasks/support/Query"], h["d"]).then(function() {
								var a = Object(i["a"])(regeneratorRuntime.mark((function a(i) {
									var n, l, r, o, c, d, u, p, v, h;
									return regeneratorRuntime.wrap((function(a) {
										while(1) switch(a.prev = a.next) {
											case 0:
												return n = Object(s["a"])(i, 2), l = n[0], r = n[1], o = new l({
													url: "".concat(e, "/1")
												}), c = new r, c.outFields = ["*"], c.where = "1=1", a.next = 7, o.execute(c);
											case 7:
												d = a.sent, u = d.fields, p = d.features, v = {}, u.map((function(e) {
													v[e.name] = e.alias
												})), h = p.map((function(e) {
													return e.fieldAliases = v, e
												})), t(h);
											case 14:
											case "end":
												return a.stop()
										}
									}), a)
								})));
								return function(e) {
									return a.apply(this, arguments)
								}
							}())
						}))
					},
					getMj: function(e) {
						return new Promise((function(e, t) {
							Object(v["loadModules"])(["esri/tasks/QueryTask", "esri/tasks/support/Query"], h["d"]).then(function() {
								var t = Object(i["a"])(regeneratorRuntime.mark((function t(a) {
									var i, n, l, r, o, c, d, u, p, v;
									return regeneratorRuntime.wrap((function(t) {
										while(1) switch(t.prev = t.next) {
											case 0:
												return i = Object(s["a"])(a, 2), n = i[0], l = i[1], r = new n({
													url: "http://172.20.89.7:6082/arcgis/rest/services/lucheng/fangkong/MapServer/4"
												}), o = new l, o.outFields = ["*"], o.where = "1=1", t.next = 7, r.execute(o);
											case 7:
												c = t.sent, d = c.fields, u = c.features, p = {}, d.map((function(e) {
													p[e.name] = e.alias
												})), v = u.map((function(e) {
													return e.fieldAliases = p, e
												})), e(v);
											case 14:
											case "end":
												return t.stop()
										}
									}), t)
								})));
								return function(e) {
									return t.apply(this, arguments)
								}
							}())
						}))
					},
					goLocation: function(e) {
						this.$parent.$refs.macroArcgis.goloaction(e)
					}
				}
			},
			je = ke,
			Oe = (a("d58c"), Object(B["a"])(je, _e, ye, !1, null, null, null)),
			De = Oe.exports,
			Le = function() {
				var e = this,
					t = e.$createElement;
				e._self._c;
				return e._m(0)
			},
			Te = [function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					attrs: {
						id: "topDateDiv"
					}
				}, [a("ul", [a("li", [a("h3", {
					staticStyle: {
						color: "#ff283a"
					}
				}, [e._v("36人")]), a("p", [e._v("确诊病例")])]), a("li", [a("h3", {
					staticStyle: {
						color: "#fcc659"
					}
				}, [e._v("25人")]), a("p", [e._v("疑似病例")])]), a("li", [a("h3", {
					staticStyle: {
						color: "#f6e31b"
					}
				}, [e._v("0人")]), a("p", [e._v("死亡病例")])]), a("li", [a("h3", {
					staticStyle: {
						color: "#1eff95"
					}
				}, [e._v("1人")]), a("p", [e._v("治愈病例")])])])])
			}],
			Ne = {},
			Ee = Ne,
			Ie = (a("4e9e"), Object(B["a"])(Ee, Le, Te, !1, null, null, null)),
			ze = Ie.exports,
			Re = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", [a("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.btnShow,
						expression: "btnShow"
					}],
					staticStyle: {
						position: "absolute",
						bottom: "2%",
						left: "360px",
						"background-color": "#1d449f",
						border: "1px solid #04f2ff",
						padding: "5px 12px",
						cursor: "pointer"
					},
					on: {
						click: e.btnclose
					}
				}, [e._v("疫情须知")]), a("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.isShow,
						expression: "isShow"
					}],
					attrs: {
						id: "xzDateDiv"
					}
				}, [a("h3", [e._v("\n      - 疫情须知 -\n      "), a("a", {
					staticStyle: {
						float: "right",
						"font-size": "40px",
						padding: "-3px",
						"margin-top": "-7px",
						"margin-right": "5px",
						cursor: "pointer"
					},
					on: {
						click: e.closeDiv
					}
				}, [e._v("×")])]), e._m(0)])])
			},
			Pe = [function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("ul", [a("li", [a("span", [e._v("传染源：")]), e._v("野生动物，可能为中华菊头蝠\n      ")]), a("li", [a("span", [e._v("病毒：")]), e._v("新型冠状病毒2019-nCoV\n      ")]), a("li", [a("span", [e._v("传播途径：")]), e._v("经呼吸道飞沫传播，亦可通过接触传播\n      ")]), a("li", [a("span", [e._v("易感染人群：")]), e._v("人群普遍易感染。老年人及有基础疾病者易染后病情严重，儿童及婴幼儿也有发病\n      ")]), a("li", [a("span", [e._v("潜伏期：")]), e._v("一般为3~7天，最长不超过14天，潜伏期内存在传染性\n      ")])])
			}],
			Be = {
				data: function() {
					return {
						isShow: !0,
						btnShow: !1
					}
				},
				methods: {
					closeDiv: function() {
						this.isShow = !1, this.btnShow = !0
					},
					btnclose: function() {
						this.isShow = !0, this.btnShow = !1
					}
				},
				mounted: function() {}
			},
			He = Be,
			Fe = (a("d829"), Object(B["a"])(He, Re, Pe, !1, null, null, null)),
			We = Fe.exports,
			qe = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.popShow,
						expression: "popShow"
					}],
					attrs: {
						id: "popDiv"
					}
				}, [a("a", {
					staticStyle: {
						float: "right",
						"font-size": "40px",
						"margin-right": "10px",
						cursor: "pointer"
					},
					on: {
						click: e.popClose
					}
				}, [e._v("×")]), a("table", {
					attrs: {
						border: "0",
						cellpadding: "0",
						cellspacing: "0"
					}
				}, [a("thead", [1 == e.type ? a("tr", [a("th", [e._v("序号")]), a("th", [e._v("姓名")]), a("th", [e._v("性别")]), a("th", [e._v("联系电话")]), a("th", [e._v("家庭住址")]), a("th", [e._v("是否湖北回鹿")])]) : e._e(), 2 == e.type ? a("tr", [a("th", [e._v("序号")]), a("th", [e._v("街镇")]), a("th", [e._v("集中隔离点名称")]), a("th", [e._v("地点")]), a("th", [e._v("联络人")]), a("th", [e._v("联系电话")]), a("th", [e._v("房间数")]), a("th", [e._v("使用人数")]), a("th", [e._v("其中湖北回鹿人数")]), a("th", [e._v("剩余可用房间数")]), a("th", [e._v("是否启用")])]) : e._e()]), 1 == e.type ? a("tbody", e._l(e.manData, (function(t, i) {
					return a("tr", {
						key: i
					}, [a("td", [e._v(e._s(++i))]), a("td", [e._v(e._s(t.attributes.Name))]), a("td", [e._v(e._s(t.attributes.Sex))]), a("td", [e._v(e._s(t.attributes.Phone))]), a("td", [e._v(e._s(t.attributes.Address))]), a("td", [e._v(e._s(t.attributes.IsHBtoLC))])])
				})), 0) : e._e(), 2 == e.type ? a("tbody", e._l(e.roomData, (function(t, i) {
					return a("tr", {
						key: i
					}, [a("td", [e._v(e._s(++i))]), a("td", [e._v(e._s(t.attributes.Country))]), a("td", [e._v(e._s(t.attributes.Name))]), a("td", [e._v(e._s(t.attributes.Address))]), a("td", [e._v(e._s(t.attributes.Linkman))]), a("td", [e._v(e._s(t.attributes.Phone))]), a("td", [e._v(e._s(t.attributes.Rooms))]), a("td", [e._v(e._s(t.attributes.UseNumber))]), a("td", [e._v(e._s(t.attributes.HBtoLCNumber ? t.attributes.HBtoLCNumber : 0))]), a("td", [e._v(e._s(t.attributes.RemainRooms))]), a("td", [e._v("是")])])
				})), 0) : e._e()])])
			},
			Ue = [],
			Ge = {
				data: function() {
					return {
						popShow: !1,
						roomData: [],
						manData: [],
						type: 1
					}
				},
				methods: {
					popShowDiv: function(e) {
						console.log(e);
						var t = this;
						1 == e ? (t.type = 1, t.getItem("http://172.20.89.7:6082/arcgis/rest/services/lucheng/paiban/MapServer/7")) : 2 == e && (t.type = 2, t.getItem("http://172.20.89.7:6082/arcgis/rest/services/lucheng/paiban/MapServer/2")), this.popShow = !0
					},
					popClose: function() {
						this.popShow = !1
					},
					getItem: function(e) {
						var t = this;
						Object(v["loadModules"])(["esri/tasks/QueryTask", "esri/tasks/support/Query"], h["d"]).then(function() {
							var a = Object(i["a"])(regeneratorRuntime.mark((function a(i) {
								var n, l, r, o, c, d, u;
								return regeneratorRuntime.wrap((function(a) {
									while(1) switch(a.prev = a.next) {
										case 0:
											return n = Object(s["a"])(i, 2), l = n[0], r = n[1], o = new l({
												url: e
											}), c = new r, c.outFields = "*", c.where = "1=1", c.returnGeometry = !0, a.next = 8, o.execute(c);
										case 8:
											d = a.sent, u = d.features, console.log(u), 1 == t.type ? t.manData = u : 2 == t.type && (t.roomData = u);
										case 12:
										case "end":
											return a.stop()
									}
								}), a)
							})));
							return function(e) {
								return a.apply(this, arguments)
							}
						}())
					}
				},
				mounted: function() {
					var e = this;
					U.$on("popshow", (function(t) {
						e.popShowDiv(t)
					}))
				}
			},
			Je = Ge,
			Ze = (a("5587"), Object(B["a"])(Je, qe, Ue, !1, null, null, null)),
			Qe = Ze.exports,
			Ve = {
				name: "macroscopic",
				data: function() {
					return {
						icon_show_left: !1,
						leftOptions: xe
					}
				},
				components: {
					commonArcgis: F,
					leftMultiSelect: V,
					bqtj: ce,
					sbDate: De,
					ylzy: be,
					bottomBtn: ae,
					topDate: ze,
					xzDate: We,
					popOpen: Qe
				},
				created: function() {},
				mounted: function() {},
				methods: {}
			},
			Ye = Ve,
			$e = (a("fd4e"), Object(B["a"])(Ye, c, d, !1, null, "1302f210", null)),
			Ke = ($e.exports, function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "com-content control"
				}, [a("div", {
					staticClass: "com-container"
				}, [a("div", {
					staticClass: "control-header"
				}, [a("ControlHeader", {
					attrs: {
						headerData: e.headerData
					}
				})], 1), a("div", {
					staticClass: "com-bg"
				}, [a("div", {
					staticClass: "com-container_inner"
				}, [a("div", {
					staticClass: "control-card"
				}, [a("div", {
					staticClass: "control-card-title"
				}, [e._v("鹿城区疫情总览")]), a("div", {
					staticClass: "control-card-body"
				}, [a("ControlView", {
					attrs: {
						viewData: e.viewData
					}
				})], 1)]), a("div", {
					staticClass: "control-card"
				}, [a("div", {
					staticClass: "control-card-title"
				}, [e._v("各街道疫情情况")]), a("div", {
					staticClass: "control-card-body"
				}, [a("ControlJieDao", {
					attrs: {
						tableData: e.jieDaoTable
					}
				})], 1)]), a("div", {
					staticClass: "control-card"
				}, [a("div", {
					staticClass: "control-card-body"
				}, [a("gldwz")], 1)]), a("div", {
					staticClass: "control-card"
				}, [a("div", {
					staticClass: "control-card-body"
				}, [a("yqzst")], 1)]), a("div", {
					staticClass: "control-card"
				}, [a("div", {
					staticClass: "control-card-body"
				}, [a("ytyq")], 1)]), a("div", {
					staticClass: "control-card"
				}, [a("div", {
					staticClass: "control-card-title"
				}, [e._v("重点防控区域")]), a("div", {
					staticClass: "control-card-body"
				}, [a("zdfkq")], 1)])])])])])
			}),
			Xe = [],
			et = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "Map"
				}, [a("div", {
					staticClass: "arcgisMap",
					attrs: {
						id: e.id
					}
				})])
			},
			tt = [],
			at = a("428d"),
			it = at["a"],
			nt = (a("a54e"), Object(B["a"])(it, et, tt, !1, null, "6b865b84", null)),
			lt = (nt.exports, function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("ul", {
					staticClass: "control-header-ul"
				}, [a("li", {
					staticClass: "control-li control-float-left"
				}, [e._v("湖北返鹿人数"), a("span", {
					staticClass: "control-li-number",
					staticStyle: {
						color: "rgb(255, 40, 58)"
					}
				}, [e._v(e._s(e.headerData.whNumber))]), e._v("人")]), a("li", {
					staticClass: "control-li control-float-left"
				}, [e._v("已管控人数"), a("span", {
					staticClass: "control-li-number",
					staticStyle: {
						color: "rgb(252, 198, 89)"
					}
				}, [e._v(e._s(e.headerData.ygkNumber))]), e._v("人")]), a("li", {
					staticClass: "control-li control-float-left"
				}, [e._v("未管控人数"), a("span", {
					staticClass: "control-li-number",
					staticStyle: {
						color: "rgb(30, 255, 149)"
					}
				}, [e._v(e._s(e.headerData.wgkNumber))]), e._v("人")]), a("li", {
					staticClass: "control-li control-float-left"
				}, [e._v("发热门诊机构"), a("span", {
					staticClass: "control-li-number",
					staticStyle: {
						color: "rgb(30, 255, 149)"
					}
				}, [e._v(e._s(e.headerData.frNumer))]), e._v("家")])])
			}),
			rt = [],
			st = {
				name: "control-header",
				props: {
					headerData: {
						type: Object,
						default: function() {
							return {}
						}
					}
				},
				data: function() {
					return {}
				},
				created: function() {},
				mounted: function() {},
				methods: {}
			},
			ot = st,
			ct = (a("d1a5"), Object(B["a"])(ot, lt, rt, !1, null, "394b0a04", null)),
			dt = ct.exports,
			ut = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "control-view"
				}, [a("div", {
					staticClass: "control-view-inner",
					on: {
						scroll: e.scrollHandler
					}
				}, [a("table", {
					staticClass: "control-view-table-header",
					style: {
						top: e.top + "px"
					},
					attrs: {
						cellspacing: "5"
					}
				}, [e._m(0)]), a("table", {
					staticClass: "control-view-table-body",
					attrs: {
						cellspacing: "5"
					}
				}, [a("tbody", e._l(e.tableData, (function(t, i) {
					return a("tr", {
						key: i
					}, [a("td", [e._v(e._s(t.key))]), e._l(t.value, (function(t, i) {
						return a("td", {
							key: i
						}, [e._v(e._s(t))])
					}))], 2)
				})), 0)])])])
			},
			pt = [function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("thead", [a("tr", [a("th", [e._v("街道名称")]), a("th", [e._v("确诊病例")]), a("th", [e._v("疑似病例")]), a("th", [e._v("医院发热待查")]), a("th", [e._v("社区发热待查")]), a("th", [e._v("居家隔离人员")]), a("th", [e._v("密切接触者")])])])
			}],
			vt = {
				name: "control-view",
				props: {
					tableData: {
						type: Array,
						default: function() {
							return []
						}
					}
				},
				data: function() {
					return {
						top: 0
					}
				},
				created: function() {},
				mounted: function() {},
				methods: {
					scrollHandler: function(e) {
						var t = e.target;
						this.top = t.scrollTop
					}
				}
			},
			ht = vt,
			mt = (a("236d"), Object(B["a"])(ht, ut, pt, !1, null, "3af043c5", null)),
			ft = mt.exports,
			bt = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "control-view"
				}, [a("div", {
					staticClass: "control-view-title"
				}, [a("div", {
					staticClass: "control-view-bl"
				}, [a("div", {
					staticClass: "control-view-bl-head"
				}, [a("div", {
					staticClass: "control-view-bl-head-left",
					attrs: {
						id: "bg1"
					}
				}), a("div", {
					staticClass: "control-view-bl-head-right",
					staticStyle: {
						color: "#189bfe"
					}
				}, [e._v("\n                    确诊病例 "), a("br"), a("span", {
					staticClass: "control-view-bl-head-right-span"
				}, [e._v(e._s(e.viewData.quezhen.value) + "例")])])]), a("div", {
					staticClass: "control-view-bl-body"
				}, [a("div", [e._v("今日新增 "), a("span", {
					staticStyle: {
						color: "rgb(30, 255, 149)"
					}
				}, [e._v(e._s(e.viewData.quezhen.add))])]), a("div", [e._v("温州占比 "), a("span", {
					staticStyle: {
						color: "purple"
					}
				}, [e._v(e._s(e.viewData.quezhen.percent))])])])]), a("div", {
					staticClass: "control-view-bl"
				}, [a("div", {
					staticClass: "control-view-bl-head"
				}, [a("div", {
					staticClass: "control-view-bl-head-left",
					attrs: {
						id: "bg2"
					}
				}), a("div", {
					staticClass: "control-view-bl-head-right",
					staticStyle: {
						color: "#ff9b27"
					}
				}, [e._v("\n                    疑似病例 "), a("br"), a("span", {
					staticClass: "control-view-bl-head-right-span"
				}, [e._v(e._s(e.viewData.yisi.value) + "例")])])]), a("div", {
					staticClass: "control-view-bl-body"
				}, [a("div", [e._v("今日新增 "), a("span", {
					staticStyle: {
						color: "rgb(30, 255, 149)"
					}
				}, [e._v(e._s(e.viewData.yisi.add))])]), a("div", [e._v("温州占比 "), a("span", {
					staticStyle: {
						color: "purple"
					}
				}, [e._v(e._s(e.viewData.yisi.percent))])])])]), a("div", {
					staticClass: "control-view-bl"
				}, [a("div", {
					staticClass: "control-view-bl-head"
				}, [a("div", {
					staticClass: "control-view-bl-head-left",
					attrs: {
						id: "bg3"
					}
				}), a("div", {
					staticClass: "control-view-bl-head-right",
					staticStyle: {
						color: "#00b87a"
					}
				}, [e._v("\n                    治愈病例 "), a("br"), a("span", {
					staticClass: "control-view-bl-head-right-span"
				}, [e._v(e._s(e.viewData.zhiyu.value) + "例")])])]), a("div", {
					staticClass: "control-view-bl-body"
				}, [a("div", [e._v("今日新增 "), a("span", {
					staticStyle: {
						color: "rgb(30, 255, 149)"
					}
				}, [e._v(e._s(e.viewData.zhiyu.add))])]), a("div", [e._v("温州占比 "), a("span", {
					staticStyle: {
						color: "purple"
					}
				}, [e._v(e._s(e.viewData.zhiyu.percent))])])])]), a("div", {
					staticClass: "control-view-bl"
				}, [a("div", {
					staticClass: "control-view-bl-head"
				}, [a("div", {
					staticClass: "control-view-bl-head-left",
					attrs: {
						id: "bg4"
					}
				}), a("div", {
					staticClass: "control-view-bl-head-right",
					staticStyle: {
						color: "#fa5350"
					}
				}, [e._v("\n                    死亡病例 "), a("br"), a("span", {
					staticClass: "control-view-bl-head-right-span"
				}, [e._v(e._s(e.viewData.siwang.value) + "例")])])]), a("div", {
					staticClass: "control-view-bl-body"
				}, [a("div", [e._v("今日新增 "), a("span", {
					staticStyle: {
						color: "rgb(30, 255, 149)"
					}
				}, [e._v(e._s(e.viewData.siwang.add))])]), a("div", [e._v("温州占比 "), a("span", {
					staticStyle: {
						color: "purple"
					}
				}, [e._v(e._s(e.viewData.siwang.percent))])])])])]), a("div", {
					staticClass: "control-view-inner",
					on: {
						scroll: e.scrollHandler
					}
				}, [a("table", {
					staticClass: "control-view-table-header",
					style: {
						top: e.top + "px"
					},
					attrs: {
						cellspacing: "5"
					}
				}, [e._m(0)]), a("table", {
					staticClass: "control-view-table-body",
					attrs: {
						cellspacing: "5"
					}
				}, [a("tbody", e._l(e.viewData.tableData, (function(t, i) {
					return a("tr", {
						key: i
					}, [a("td", [e._v(e._s(t.key))]), e._l(t.value, (function(t, i) {
						return a("td", {
							key: i
						}, [e._v(e._s(t))])
					}))], 2)
				})), 0)])])])
			},
			_t = [function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("thead", [a("tr", [a("th", [e._v("类别")]), a("th", [e._v("统计总数")]), a("th", [e._v("今日新增")]), a("th", [e._v("增长速度")])])])
			}],
			yt = {
				name: "control-view",
				props: {
					viewData: {
						type: Object,
						default: function() {
							return {}
						}
					}
				},
				data: function() {
					return {
						top: 0
					}
				},
				created: function() {},
				mounted: function() {},
				methods: {
					scrollHandler: function(e) {
						var t = e.target;
						this.top = t.scrollTop
					}
				}
			},
			gt = yt,
			wt = (a("e966"), Object(B["a"])(gt, bt, _t, !1, null, "0975fb3d", null)),
			Ct = wt.exports,
			At = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "yqtj",
					attrs: {
						id: "zst"
					}
				}, [a("div", {
					attrs: {
						id: "titop"
					}
				}, [a("div", {
					staticClass: "leftdiv"
				}, [e._v("鹿城区病例统计")]), a("div", {
					staticClass: "rightdiv"
				}, [a("select", {
					on: {
						change: function(t) {
							return e.bqSelect(t)
						}
					}
				}, [a("option", {
					attrs: {
						value: "0"
					}
				}, [e._v("确诊病例")])])])]), a("div", {
					attrs: {
						id: "yqzstChart"
					}
				})])
			},
			St = [],
			Mt = a("3eba");
		a("ef97"), a("cd12"), a("007d"), a("d28f"), a("2f73");
		var xt = {
				name: "mqyqtj",
				data: function() {
					return {
						labelname: [],
						numdata: [],
						namelist1: ["24日", "25日", "26日", "27日", "28日", "29日", "30日", "31日"],
						datalist1: [, 5, 10, 17, 27, 29, 32, 34],
						namelist2: [],
						datalist2: [],
						namelist3: [],
						datalist3: [],
						namelist4: [],
						datalist4: []
					}
				},
				methods: {
					bqSelect: function(e) {
						var t = this;
						console.log(e.target.value), "0" == e.target.value && (t.labelname = t.namelist1, t.numdata = t.datalist1, this.draw()), "1" == e.target.value && (t.labelname = t.namelist2, t.numdata = t.datalist2, this.draw()), "2" == e.target.value && (t.labelname = t.namelist3, t.numdata = t.datalist3, this.draw()), "3" == e.target.value && (t.labelname = t.namelist4, t.numdata = t.datalist4, this.draw())
					},
					draw: function() {
						for(var e = [], t = 0; t < this.numdata.length; t++) this.numdata[t] && e.push(Math.ceil(this.numdata[t]));
						var a = String(Math.max.apply(null, e)),
							i = Math.pow(10, a.length - 1),
							n = (parseInt(a[0]) + 1) * i,
							l = Mt.init(document.getElementById("yqzstChart"));
						l.setOption({
							tooltip: {
								trigger: "axis",
								axisPointer: {
									type: "shadow"
								}
							},
							grid: {
								left: 20,
								right: 30,
								top: 50,
								bottom: 20,
								containLabel: !0
							},
							xAxis: {
								type: "category",
								data: this.labelname,
								axisLabel: {
									interval: 0,
									rotate: 40,
									textStyle: {
										color: "#38D4DC",
										fontSize: 16
									}
								},
								axisLine: {
									lineStyle: {
										color: "#38D4DC"
									}
								}
							},
							yAxis: {
								name: "病例数(人)",
								type: "value",
								max: n,
								min: 0,
								minInterval: 1,
								interval: n / 5,
								splitArea: {
									show: !0,
									areaStyle: {
										color: ["#103667", "#061848"]
									}
								},
								axisLabel: {
									textStyle: {
										color: "#38D4DC",
										fontSize: 16
									}
								},
								axisLine: {
									lineStyle: {
										color: "#38D4DC"
									}
								}
							},
							series: [{
								data: this.numdata,
								type: "line",
								color: "#0AB3F6",
								smooth: !0,
								label: {
									normal: {
										show: !0,
										formatter: function(e) {
											return e.value
										},
										position: "top",
										textStyle: {
											color: "#FFF",
											fontSize: 16
										}
									}
								}
							}]
						})
					}
				},
				mounted: function() {
					this.labelname = this.namelist1, this.numdata = this.datalist1, this.draw()
				}
			},
			kt = xt,
			jt = (a("2217"), Object(B["a"])(kt, At, St, !1, null, "e4a5e796", null)),
			Ot = jt.exports,
			Dt = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "yqtj",
					attrs: {
						id: "yt"
					}
				}, [a("div", {
					attrs: {
						id: "titop"
					}
				}, [a("div", {
					staticClass: "leftdiv"
				}, [e._v("银泰疫情专题统计分析")]), a("div", {
					staticClass: "rightdiv"
				}, [a("select", {
					on: {
						change: function(t) {
							return e.bqSelect(t)
						}
					}
				}, [a("option", {
					attrs: {
						value: "0"
					}
				}, [e._v("确诊病例")]), a("option", {
					attrs: {
						value: "1"
					}
				}, [e._v("疑似病例")]), a("option", {
					attrs: {
						value: "2"
					}
				}, [e._v("银泰员工")]), a("option", {
					attrs: {
						value: "3"
					}
				}, [e._v("密切接触者")])])])]), a("div", {
					attrs: {
						id: "ytyqChart"
					}
				})])
			},
			Lt = [],
			Tt = a("3eba");
		a("94b1"), a("cd12"), a("007d"), a("d28f"), a("2f73");
		var Nt = {
				name: "mqyqtj",
				data: function() {
					return {
						labelname: [],
						numdata: [],
						list1: ["五马", "广化", "大南", "松台", "滨江", "蒲鞋市", "南汇", "双屿", "七都", "仰义", "丰门", "南郊", "藤桥镇", "山福镇"],
						datalist1: [1, 0, 6, 1, 0, 1, 6, 1, 0, 0, 0, 2, 2, 0],
						list2: ["疑似病例"],
						datalist2: [5],
						list3: ["银泰员工"],
						datalist3: [575],
						list4: ["密切接触者"],
						datalist4: [150]
					}
				},
				methods: {
					bqSelect: function(e) {
						var t = this;
						console.log(e.target.value), "0" == e.target.value && (this.labelname = this.list1, t.numdata = t.datalist1, this.draw()), "1" == e.target.value && (this.labelname = this.list2, t.numdata = t.datalist2, this.draw()), "2" == e.target.value && (this.labelname = this.list3, t.numdata = t.datalist3, this.draw()), "3" == e.target.value && (this.labelname = this.list4, t.numdata = t.datalist4, this.draw())
					},
					draw: function() {
						for(var e = [], t = 0; t < this.numdata.length; t++) this.numdata[t] && e.push(Math.ceil(this.numdata[t]));
						var a = String(Math.max.apply(null, e)),
							i = Math.pow(10, a.length - 1),
							n = (parseInt(a[0]) + 1) * i,
							l = Tt.init(document.getElementById("ytyqChart"));
						l.setOption({
							tooltip: {
								trigger: "axis",
								axisPointer: {
									type: "shadow"
								}
							},
							grid: {
								left: 20,
								right: 30,
								top: 50,
								bottom: 20,
								containLabel: !0
							},
							xAxis: {
								type: "category",
								data: this.labelname,
								axisLabel: {
									interval: 0,
									rotate: 40,
									textStyle: {
										color: "#38D4DC",
										fontSize: 16
									}
								},
								axisLine: {
									lineStyle: {
										color: "#38D4DC"
									}
								}
							},
							yAxis: {
								name: "病例数(人)",
								type: "value",
								max: n,
								min: 0,
								minInterval: 1,
								interval: n / 5,
								splitArea: {
									show: !0,
									areaStyle: {
										color: ["#103667", "#061848"]
									}
								},
								axisLabel: {
									textStyle: {
										color: "#38D4DC",
										fontSize: 16
									}
								},
								axisLine: {
									lineStyle: {
										color: "#38D4DC"
									}
								}
							},
							series: [{
								data: this.numdata,
								type: "bar",
								barWidth: 20,
								itemStyle: {
									normal: {
										color: new Tt.graphic.LinearGradient(0, 0, 0, 1, [{
											offset: 0,
											color: "#18E5F7"
										}, {
											offset: 1,
											color: "#1963E2"
										}])
									}
								},
								label: {
									normal: {
										show: !0,
										formatter: function(e) {
											return e.value
										},
										position: "top",
										textStyle: {
											color: "#FFF",
											fontSize: 16
										}
									}
								}
							}]
						})
					}
				},
				mounted: function() {
					this.labelname = this.list1, this.numdata = this.datalist1, this.draw()
				}
			},
			Et = Nt,
			It = (a("771a"), Object(B["a"])(Et, Dt, Lt, !1, null, "73e0f2ee", null)),
			zt = It.exports,
			Rt = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "gldtj",
					attrs: {
						id: "gld"
					}
				}, [a("div", {
					attrs: {
						id: "gldtitop"
					}
				}, [a("div", {
					staticClass: "leftdiv"
				}, [e._v("隔离点物资总览")]), a("div", {
					staticClass: "rightdiv"
				}, [a("select", {
					on: {
						change: function(t) {
							return e.bqSelect(t)
						}
					}
				}, [a("option", {
					attrs: {
						value: "0"
					}
				}, [e._v("区域筛选")]), a("option", {
					attrs: {
						value: "1"
					}
				}, [e._v("五马街道")]), a("option", {
					attrs: {
						value: "2"
					}
				}, [e._v("蒲鞋市街道")]), a("option", {
					attrs: {
						value: "3"
					}
				}, [e._v("广化街道")]), a("option", {
					attrs: {
						value: "4"
					}
				}, [e._v("滨江街道")]), a("option", {
					attrs: {
						value: "5"
					}
				}, [e._v("大南街道")]), a("option", {
					attrs: {
						value: "6"
					}
				}, [e._v("南汇街道")]), a("option", {
					attrs: {
						value: "7"
					}
				}, [e._v("松台街道")]), a("option", {
					attrs: {
						value: "8"
					}
				}, [e._v("南郊街道")]), a("option", {
					attrs: {
						value: "9"
					}
				}, [e._v("双屿街道")])]), a("select", {
					on: {
						change: function(t) {
							return e.qySelect(t)
						}
					}
				}, [a("option", {
					attrs: {
						value: "0"
					}
				}, [e._v("已启用")]), a("option", {
					attrs: {
						value: "1"
					}
				}, [e._v("未启用")])])])]), a("idv", {
					staticClass: "ntn"
				}, [e._v("18家/1273间")]), a("div", {
					attrs: {
						id: "gldChart"
					}
				}), a("div", {
					staticClass: "tagld"
				}, [a("div", {
					staticClass: "control-view-inner",
					on: {
						scroll: e.scrollHandler
					}
				}, [a("table", {
					staticClass: "control-view-table-header",
					style: {
						top: e.top + "px"
					},
					attrs: {
						cellspacing: "5"
					}
				}, [e._m(0)]), a("table", {
					staticClass: "control-view-table-body",
					attrs: {
						cellspacing: "5"
					}
				}, [a("tbody", e._l(e.tableData, (function(t, i) {
					return a("tr", {
						key: i
					}, [a("td", [e._v(e._s(t.key))]), e._l(t.value, (function(t, i) {
						return a("td", {
							key: i
						}, [e._v(e._s(t))])
					}))], 2)
				})), 0)])])])], 1)
			},
			Pt = [function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("thead", [a("tr", [a("th", [e._v("名称")]), a("th", [e._v("房间数")]), a("th", [e._v("使用人数")]), a("th", [e._v("其中湖北回鹿人数")]), a("th", [e._v("空余房间")])])])
			}],
			Bt = ["rgb(94,116,255)", "rgb(31,255,237)"],
			Ht = a("3eba");
		a("627c"), a("007d"), a("d28f"), a("cd12"), a("c037");
		var Ft = {
				name: "gldwz",
				data: function() {
					return {
						labelname: ["剩余房间", "已使用房间"],
						numdata: [3137, 1300],
						tableData: [{
							key: "大宅门宾馆",
							value: ["77", "0", "0", "77"]
						}, {
							key: "唯乐创意酒店",
							value: ["46", "46", "31", "2"]
						}, {
							key: "锦江之星",
							value: ["80", "30", "8", "50"]
						}, {
							key: "新国贸大酒店",
							value: ["140", "0", "0", "140"]
						}, {
							key: "金丝桥瑞都商旅酒店",
							value: ["61", "42", "32", "29"]
						}, {
							key: "聚商连锁酒店",
							value: ["27", "3", "0", "24"]
						}, {
							key: "锐思特（飞霞路店）",
							value: ["50", "0", "0", "50"]
						}, {
							key: "瑞都酒店",
							value: ["72", "70", "2", "7"]
						}, {
							key: "锐思特（飞霞路店）",
							value: ["80", "50", "49", "47"]
						}, {
							key: "威斯顿时尚酒店",
							value: ["50", "58", "33", "0"]
						}, {
							key: "众豪酒店",
							value: ["50", "10", "3", "23"]
						}, {
							key: "瑞都连锁酒店",
							value: ["63", "39", "5", "31"]
						}, {
							key: "普尔顿酒店",
							value: ["69", "0", "0", "69"]
						}, {
							key: "百思快捷宾馆",
							value: ["35", "30", "30", "21"]
						}, {
							key: "新生代员工宿舍",
							value: ["75", "0", "0", "75"]
						}, {
							key: "双屿欣悦宾馆",
							value: ["51", "9", "0", "42"]
						}, {
							key: "好万家公寓",
							value: ["70", "0", "0", "70"]
						}, {
							key: "龙城宾馆",
							value: ["37", "34", "9", "3"]
						}]
					}
				},
				methods: {
					bqSelect: function(e) {
						"0" == e.target.value && console.log(1)
					},
					draw: function() {
						var e = Ht.init(document.getElementById("gldChart"));
						e.setOption({
							title: {
								text: "鹿城隔离点房间数量",
								textStyle: {
									color: "#FFF",
									fontSize: 15
								}
							},
							tooltip: {
								trigger: "axis"
							},
							grid: {
								left: 15,
								right: 40,
								top: 40,
								bottom: 10,
								containLabel: !0
							},
							legend: {
								top: "10%",
								left: 0,
								orient: "horizontal",
								textStyle: {
									color: "#fff",
									fontSize: 10
								},
								itemWidth: 20,
								itemHeight: 10,
								padding: 5,
								itemGap: 10,
								icon: "rect",
								data: this.namedata
							},
							series: [{
								radius: ["29%", "49%"],
								center: ["45%", "55%"],
								type: "pie",
								itemStyle: {
									normal: {
										color: function(e) {
											return Bt[e.dataIndex]
										}
									}
								},
								labelLine: {
									normal: {
										show: !0,
										length: 10,
										length2: 10,
										lineStyle: {
											color: "#d3d3d3"
										},
										align: "right"
									},
									color: "#000",
									emphasis: {
										show: !0
									}
								},
								label: {
									normal: {
										formatter: function(e) {
											var t = "";
											switch(e.name) {
												case "剩余房间":
													t = e.value;
													break;
												case "已使用人数":
													t = e.value;
													break
											}
											return t
										},
										height: 35
									}
								},
								data: [{
									value: 760,
									name: "剩余房间"
								}, {
									value: 421,
									name: "已使用人数"
								}]
							}]
						})
					}
				},
				mounted: function() {
					this.draw()
				}
			},
			Wt = Ft,
			qt = (a("c41e"), Object(B["a"])(Wt, Rt, Pt, !1, null, "7c951cc4", null)),
			Ut = qt.exports,
			Gt = function() {
				var e = this,
					t = e.$createElement;
				e._self._c;
				return e._m(0)
			},
			Jt = [function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "zdfkq"
				}, [a("div", {
					staticClass: "secofbg"
				}, [a("div", {
					staticClass: "ecimg1"
				}), a("div", {
					staticClass: "ecri"
				}, [a("div", {
					staticClass: "dwtt"
				}, [e._v("商场超市")]), a("div", {
					staticClass: "secnum"
				}, [e._v("共计：24家")])])]), a("div", {
					staticClass: "secofbg"
				}, [a("div", {
					staticClass: "ecimg2"
				}), a("div", {
					staticClass: "ecri"
				}, [a("div", {
					staticClass: "dwtt"
				}, [e._v("农贸市场")]), a("div", {
					staticClass: "secnum"
				}, [e._v("共计：41家")])])]), a("div", {
					staticClass: "secofbg"
				}, [a("div", {
					staticClass: "ecimg3"
				}), a("div", {
					staticClass: "ecri"
				}, [a("div", {
					staticClass: "dwtt"
				}, [e._v("文化场所")]), a("div", {
					staticClass: "secnum"
				}, [e._v("共计：4家")])])]), a("div", {
					staticClass: "secofbg"
				}, [a("div", {
					staticClass: "ecimg4"
				}), a("div", {
					staticClass: "ecri"
				}, [a("div", {
					staticClass: "dwtt"
				}, [e._v("健身房")]), a("div", {
					staticClass: "secnum"
				}, [e._v("共计：28家")])])]), a("div", {
					staticClass: "secofbg"
				}, [a("div", {
					staticClass: "ecimg5"
				}), a("div", {
					staticClass: "ecri"
				}, [a("div", {
					staticClass: "dwtt"
				}, [e._v("城市书房")]), a("div", {
					staticClass: "secnum"
				}, [e._v("共计：93家")])])]), a("div", {
					staticClass: "secofbg"
				}, [a("div", {
					staticClass: "ecimg6"
				}), a("div", {
					staticClass: "ecri"
				}, [a("div", {
					staticClass: "dwtt"
				}, [e._v("博物馆")]), a("div", {
					staticClass: "secnum"
				}, [e._v("共计：14家")])])]), a("div", {
					staticClass: "secofbg"
				}, [a("div", {
					staticClass: "ecimg8"
				}), a("div", {
					staticClass: "ecri"
				}, [a("div", {
					staticClass: "dwtt"
				}, [e._v("专业市场")]), a("div", {
					staticClass: "secnum"
				}, [e._v("共计：10家")])])]), a("div", {
					staticClass: "secofbg"
				}, [a("div", {
					staticClass: "ecimg9"
				}), a("div", {
					staticClass: "ecri"
				}, [a("div", {
					staticClass: "dwtt"
				}, [e._v("天基宗教")]), a("div", {
					staticClass: "secnum"
				}, [e._v("共计：91家")])])]), a("div", {
					staticClass: "secofbg"
				}, [a("div", {
					staticClass: "ecimg10"
				}), a("div", {
					staticClass: "ecri"
				}, [a("div", {
					staticClass: "dwtt"
				}, [e._v("佛道宗教")]), a("div", {
					staticClass: "secnum"
				}, [e._v("共计：110家")])])])])
			}],
			Zt = {
				name: "zdfkq",
				data: function() {
					return {
						kindList: [{
							name: "商场超市",
							num: 26,
							img: "A.png"
						}, {
							name: "农贸市场",
							num: 8,
							img: "B.png"
						}, {
							name: "机构培训",
							num: 8,
							img: "C.png"
						}, {
							name: "健身房",
							num: 26,
							img: "D.png"
						}, {
							name: "城市书房",
							num: 8,
							img: "E.png"
						}, {
							name: "酒店旅馆",
							num: 8,
							img: "F.png"
						}, {
							name: "学校",
							num: 26,
							img: "G.png"
						}, {
							name: "专业市场",
							num: 26,
							img: "H.png"
						}, {
							name: "天基宗教",
							num: 26,
							img: "J.png"
						}, {
							name: "佛道宗教",
							num: 26,
							img: "K.png"
						}]
					}
				}
			},
			Qt = Zt,
			Vt = (a("a46d"), Object(B["a"])(Qt, Gt, Jt, !1, null, "ce31f82a", null)),
			Yt = Vt.exports,
			$t = {
				name: "control",
				data: function() {
					return {
						headerData: {
							whNumber: 7081,
							ygkNumber: 2364,
							wgkNumber: 4717,
							frNumer: 7
						},
						jieDaoTable: [{
							key: "五马",
							value: ["3", "3", "0", "1", "358", "-"]
						}, {
							key: "广化",
							value: ["0", "0", "1", "0", "101", "-"]
						}, {
							key: "大南",
							value: ["7", "1", "1", "0", "38", "-"]
						}, {
							key: "松台",
							value: ["3", "6", "6", "1", "87", "-"]
						}, {
							key: "滨江",
							value: ["0", "4", "1", "0", "379", "-"]
						}, {
							key: "蒲鞋市",
							value: ["1", "1", "1", "0", "174", "-"]
						}, {
							key: "南汇",
							value: ["11", "3", "2", "0", "540", "-"]
						}, {
							key: "双屿",
							value: ["1", "2", "0", "0", "203", "-"]
						}, {
							key: "七都",
							value: ["0", "0", "0", "0", "71", "-"]
						}, {
							key: "仰义",
							value: ["0", "1", "0", "0", "110", "-"]
						}, {
							key: "丰门",
							value: ["0", "0", "0", "0", "77", "-"]
						}, {
							key: "南郊",
							value: ["2", "0", "1", "0", "41", "-"]
						}, {
							key: "藤桥镇",
							value: ["6", "0", "1", "5", "158", "-"]
						}, {
							key: "山福镇",
							value: ["0", "0", "0", "0", "68", "-"]
						}],
						viewData: {
							tableData: [{
								key: "医院发热待查",
								value: ["15", "0", "-"]
							}, {
								key: "社区发热待查",
								value: ["7", "0", "-"]
							}, {
								key: "居家隔离人员",
								value: ["2416", "0", "-"]
							}, {
								key: "密切接触者",
								value: ["282", "0", "-"]
							}],
							quezhen: {
								value: 36,
								add: 4,
								percent: "-"
							},
							yisi: {
								value: 25,
								add: 13,
								percent: "-"
							},
							zhiyu: {
								value: 1,
								add: 0,
								percent: "-"
							},
							siwang: {
								value: 0,
								add: 0,
								percent: "-"
							}
						}
					}
				},
				components: {
					ControlHeader: dt,
					ControlJieDao: ft,
					ControlView: Ct,
					yqzst: Ot,
					ytyq: zt,
					gldwz: Ut,
					zdfkq: Yt
				},
				created: function() {},
				mounted: function() {},
				methods: {}
			},
			Kt = $t,
			Xt = (a("c630"), Object(B["a"])(Kt, Ke, Xe, !1, null, "c39c340c", null)),
			ea = (Xt.exports, function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div")
			}),
			ta = [],
			aa = {
				name: "monitor"
			},
			ia = aa,
			na = Object(B["a"])(ia, ea, ta, !1, null, null, null),
			la = na.exports,
			ra = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "map"
				}, [e._m(0), e._m(1), a("div", {
					staticClass: "bottom"
				}, [a("p", {
					staticClass: "tips"
				}, [e._v("(提示：点击按钮可查看病例详情)")]), a("p", [a("span", {
					staticClass: "text"
				}, [e._v("截至")]), e._v(" 2020年 2月\n      "), a("span", {
					staticClass: "time"
				}, [e._v(e._s(e.date))]), e._v("日\n      "), a("span", {
					staticClass: "time"
				}, [e._v("24")]), e._v("时\n    ")])]), e._m(2), a("div", {
					staticClass: "tip"
				}, [a("p", [e._v("\n      确诊病例\n      "), a("br"), a("span", [e._v(e._s(e.num[0].value))]), e._v("例\n    ")])]), a("div", {
					staticClass: "tip0"
				}, [a("p", [e._v("\n      重症病例\n      "), a("br"), a("span", [e._v(e._s(e.num[1].value))]), e._v("例\n    ")])]), a("div", {
					staticClass: "tip1"
				}, [a("p", [e._v("\n      出院病例\n      "), a("br"), a("span", [e._v(e._s(e.num[2].value))]), e._v("例\n    ")])]), a("div", {
					staticClass: "tip2"
				}, [a("p", [e._v("\n      死亡病例\n      "), a("br"), a("span", [e._v(e._s(e.num[3].value))]), e._v("例\n    ")])]), a("div", {
					attrs: {
						id: "nyjj-map"
					}
				})])
			},
			sa = [function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "title"
				}, [a("span", [e._v("温州市新冠肺炎疫情动态地图 ")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "tu"
				}, [a("span", [e._v("新型肺炎确诊病例人数")])])
			}, function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "bottom-right"
				}, [a("p", [e._v("温州新闻网、温州设计集团勘测院   联合出品")])])
			}],
			oa = {
				features: [{
					type: "Feature",
					properties: {
						adcode: 330302,
						name: "鹿城区",
						center: [120.674231, 28.003352],
						centroid: [120.559894, 28.062536],
						childrenNum: 0,
						level: "district",
						subFeatureIndex: 0,
						acroutes: [1e5, 33e4, 330300]
					},
					geometry: {
						type: "MultiPolygon",
						coordinates: [
							[
								[
									[120.78828203668672, 27.983488321229117],
									[120.78327524645556, 27.981206655762605],
									[120.77853536601435, 27.981627821766608],
									[120.76684010009058, 27.98499786835697],
									[120.76126670819212, 27.988183856100136],
									[120.75659227411427, 27.99533474430308],
									[120.74557054014838, 28.004664659246657],
									[120.74040555916929, 28.016343951412296],
									[120.74038195646222, 28.021296978372902],
									[120.74092984233846, 28.02220773709746],
									[120.74306082729538, 28.02424466645823],
									[120.7543189525577, 28.020118832318303],
									[120.76671361943806, 28.017269850223443],
									[120.77806723111792, 28.012751936852453],
									[120.78375744854748, 28.00632905973839],
									[120.78894531727269, 27.98650622388317],
									[120.78828203668672, 27.983488321229117]
								]
							],
							[
								[
									[120.64640641252595, 28.032336950589865],
									[120.64521861045057, 28.029965758513015],
									[120.64246690262553, 28.0290894510174],
									[120.63818514312993, 28.029980421059633],
									[120.62316405747538, 28.027963757921157],
									[120.61850237848205, 28.030251860734836],
									[120.62703716773115, 28.030163407015664],
									[120.64154660659074, 28.03345334559549],
									[120.64640641252595, 28.032336950589865]
								]
							],
							[
								[
									[120.46533450338472, 28.14286751962038],
									[120.46469720421271, 28.141434991331835],
									[120.46510817190472, 28.142655873170042],
									[120.46533450338472, 28.14286751962038]
								]
							],
							[
								[
									[120.47338461920492, 28.137054562717935],
									[120.46749424955999, 28.136913061588587],
									[120.4655792709666, 28.137596964528313],
									[120.46465563754771, 28.138957143257585],
									[120.46643590938982, 28.143568158044104],
									[120.46978604768799, 28.145847916947844],
									[120.47359251997887, 28.146695375091554],
									[120.48289811635505, 28.145578741765576],
									[120.48804104325961, 28.142522573857775],
									[120.47338461920492, 28.137054562717935]
								]
							],
							[
								[
									[120.43837225467587, 28.156885147131902],
									[120.44160771412476, 28.154318451435415],
									[120.44964826115836, 28.14186871007297],
									[120.4564764501281, 28.13713371744717],
									[120.46097970005314, 28.135705947471536],
									[120.46811270703586, 28.134833931540754],
									[120.4737060072265, 28.1353517773627],
									[120.48590171349338, 28.140112042736632],
									[120.48908364799206, 28.13934481131406],
									[120.4907764193963, 28.137031555362057],
									[120.4960085149811, 28.133851051684758],
									[120.50378847086131, 28.132335900881174],
									[120.51128995436795, 28.133299350884386],
									[120.52280104183467, 28.13768684906887],
									[120.53401041035227, 28.139480352636213],
									[120.54970526718444, 28.138671755996768],
									[120.55163550367558, 28.138054013481963],
									[120.55478465518775, 28.13554847258399],
									[120.55605554562703, 28.131603002876318],
									[120.55371880567839, 28.1249999996503],
									[120.55316972730111, 28.118767380410304],
									[120.5555403231275, 28.11255705356524],
									[120.55644476411464, 28.10584473594588],
									[120.56185865405371, 28.103421807670316],
									[120.56565988059913, 28.10332345961001],
									[120.57051074547462, 28.106455564472753],
									[120.5762962101021, 28.10762834517203],
									[120.58452272434431, 28.10553944129225],
									[120.58593750001569, 28.104631543311143],
									[120.58759260151737, 28.101403832421],
									[120.58937871445619, 28.09715294844989],
									[120.59310471990693, 28.08318555347057],
									[120.58823013271456, 28.062619209409036],
									[120.58845519974773, 28.057336211297184],
									[120.59080183493677, 28.054989934038304],
									[120.58884644530724, 28.050366639908532],
									[120.5897761581432, 28.04663145507766],
									[120.59220623962631, 28.043409228253324],
									[120.5918297771226, 28.039713144146333],
									[120.59357905383035, 28.03597557521266],
									[120.59624314340635, 28.033372044184546],
									[120.5997234585708, 28.032791137900745],
									[120.60441243648484, 28.028578042542676],
									[120.62033176409966, 28.025640130087993],
									[120.62210452570332, 28.024274468192232],
									[120.63162124152711, 28.024076103829202],
									[120.6382954117039, 28.026800155702688],
									[120.6448607441281, 28.0265747307393],
									[120.65807807484339, 28.02914381053847],
									[120.66670393933543, 28.027837157658723],
									[120.6875298025584, 28.021850347415636],
									[120.71244156372723, 28.02228891889854],
									[120.71526587022379, 28.019857168273745],
									[120.72046136879715, 28.017778754086294],
									[120.72662234264703, 28.010414004402833],
									[120.73192894436534, 28.007529020647837],
									[120.73499417294283, 28.004046678411555],
									[120.73941648028642, 27.993971467409324],
									[120.73974447472779, 27.991923302818236],
									[120.73737301465292, 27.993119625969996],
									[120.73241581483808, 27.997246372921836],
									[120.73160912206345, 27.998988068344715],
									[120.72739384225213, 27.998739662105777],
									[120.72578034069022, 27.994961260353932],
									[120.72345921297233, 27.995684220850137],
									[120.7187187911394, 27.99537452401512],
									[120.7101778873996, 27.99662337386968],
									[120.70838457898515, 27.993222157676485],
									[120.70649269408261, 27.987327776156008],
									[120.70025778067213, 27.97998062890298],
									[120.69691939021777, 27.978777641774798],
									[120.69173845436626, 27.978692163912285],
									[120.68798817621348, 27.980815981272542],
									[120.67775968566104, 27.98438020408321],
									[120.67598297963082, 27.987708069771656],
									[120.66952105755081, 27.98648119035471],
									[120.65639946776128, 27.982616529229517],
									[120.65463987223234, 27.982494774514294],
									[120.65679401113482, 27.978381127986722],
									[120.65500188353019, 27.972815579975077],
									[120.64995336565539, 27.973389864550654],
									[120.64758546509722, 27.976436540114264],
									[120.6406602887414, 27.978487578039335],
									[120.64041334569936, 27.983287731943335],
									[120.6363995194223, 27.98608648780123],
									[120.63562533534105, 27.991075436382346],
									[120.63875108469483, 27.99640242123479],
									[120.63763161220925, 27.99977569369338],
									[120.63619993557859, 28.012056741125775],
									[120.6347190498443, 28.01365920620748],
									[120.6314288306761, 28.012816831931275],
									[120.63044138586133, 28.009979779343382],
									[120.62700314188157, 28.005640679074133],
									[120.62405669575992, 28.00451512267483],
									[120.62185230813759, 28.00139717404039],
									[120.61711083139983, 28.000821957767187],
									[120.61600782729943, 27.999646799260404],
									[120.61182587546386, 27.99866210816981],
									[120.6099659057021, 27.99929053013392],
									[120.60989977765269, 28.001548917548575],
									[120.60482664443418, 28.0049233357434],
									[120.60168041661802, 28.0038894571328],
									[120.59775954336828, 28.004784600928645],
									[120.59527137377495, 28.00332667938278],
									[120.59179348767941, 28.00298159152726],
									[120.58505087010167, 28.004062155743952],
									[120.58104453877456, 28.00556546697277],
									[120.57927991783401, 28.004670259325053],
									[120.57720162325631, 28.006065025980206],
									[120.5752709389028, 28.012226430605324],
									[120.57150885445014, 28.01452734156362],
									[120.56778017081831, 28.015793511461425],
									[120.56355476643944, 28.01881467145995],
									[120.5583370501148, 28.027446346471777],
									[120.55775967367003, 28.029906789067127],
									[120.55093886633563, 28.03660500351816],
									[120.54715656152621, 28.03535955669821],
									[120.54538913290219, 28.032988646109175],
									[120.53902759224968, 28.03208074093351],
									[120.53441706669435, 28.029420562509017],
									[120.52693040941097, 28.0274104419384],
									[120.5252434979891, 28.031686607650897],
									[120.52218518609754, 28.031223324596795],
									[120.51705908011252, 28.034642605471902],
									[120.5173730496266, 28.036556755789718],
									[120.51550520809894, 28.039356862429315],
									[120.5098661252216, 28.03479497041161],
									[120.50472315784748, 28.03401171307013],
									[120.49890149280975, 28.031674010846984],
									[120.49489932804158, 28.03243011495789],
									[120.49733002825826, 28.038912310454805],
									[120.5004725985317, 28.042605231646178],
									[120.49433626880386, 28.044954155609844],
									[120.48942365198002, 28.04584857455211],
									[120.47745006117145, 28.04639353943037],
									[120.47621049861573, 28.04704809209585],
									[120.46971178437138, 28.05370786862329],
									[120.46493278342132, 28.060402966024128],
									[120.46194066882686, 28.06144538010028],
									[120.45577507875691, 28.05776275974364],
									[120.45250323453672, 28.055012819985677],
									[120.44612495120555, 28.052020649633334],
									[120.44437344867583, 28.047909567072907],
									[120.44306900722893, 28.047044890509312],
									[120.4345786822604, 28.04994619066423],
									[120.42911273866207, 28.050282053274202],
									[120.42366536876182, 28.048503919120606],
									[120.42181706050894, 28.049332980732515],
									[120.42275688262407, 28.05989838340372],
									[120.42399378138794, 28.063959303579054],
									[120.42506619954554, 28.07123247619785],
									[120.42270533977967, 28.078877656978364],
									[120.42344819597747, 28.084895188062546],
									[120.42131848356121, 28.08500287288433],
									[120.41732525175905, 28.083400867356204],
									[120.41582418523797, 28.081816430983565],
									[120.41235964867894, 28.080638785851363],
									[120.40767404771918, 28.084318677664896],
									[120.40012123001077, 28.091023420294675],
									[120.39754908532211, 28.099233198153627],
									[120.39351017155718, 28.101536855641427],
									[120.3953566164148, 28.10482691383106],
									[120.40150455549087, 28.112095776898627],
									[120.40744125101298, 28.117643032699846],
									[120.408182817583, 28.120180593059956],
									[120.40732474204333, 28.12274944622999],
									[120.4024101934757, 28.125505167729386],
									[120.4011901632955, 28.127290110650165],
									[120.40458645659976, 28.13214626713659],
									[120.40359742628027, 28.1346832006692],
									[120.40102443532953, 28.1352467437423],
									[120.3966886895314, 28.137705753717626],
									[120.39584814717432, 28.13966296357495],
									[120.39339212025016, 28.140650388604627],
									[120.386091831273, 28.14215605425852],
									[120.38123114400219, 28.145134181697188],
									[120.38094682063934, 28.147322966981392],
									[120.38354206081749, 28.149929046688214],
									[120.39584565155565, 28.15578162682067],
									[120.4046603439997, 28.15784430467096],
									[120.41740036043836, 28.157358765194886],
									[120.42241334879702, 28.15577447451244],
									[120.42983734581696, 28.15845227245444],
									[120.43256604628607, 28.158451914524278],
									[120.43837225467587, 28.156885147131902]
								]
							],
							[
								[
									[120.40331198146282, 28.15864006258886],
									[120.39648365489677, 28.156726466253474],
									[120.39965479123566, 28.157812186283422],
									[120.40331198146282, 28.15864006258886]
								]
							],
							[
								[
									[120.40658834657495, 28.159378985152102],
									[120.4064056699857, 28.159340379055323],
									[120.40658018972408, 28.159379884474163],
									[120.40658834657495, 28.159378985152102]
								]
							]
						]
					}
				}, {
					type: "Feature",
					properties: {
						adcode: 330303,
						name: "龙湾区",
						center: [120.763469, 27.970254],
						centroid: [120.815894, 27.890969],
						childrenNum: 0,
						level: "district",
						subFeatureIndex: 1,
						acroutes: [1e5, 33e4, 330300]
					},
					geometry: {
						type: "MultiPolygon",
						coordinates: [
							[
								[
									[120.86628480989611, 27.86631027659803],
									[120.85460280897257, 27.873906638580536],
									[120.84106962376416, 27.86260419922445],
									[120.8291125103342, 27.85637312591905],
									[120.82460764792472, 27.861366822920616],
									[120.8207814759844, 27.85822593437939],
									[120.8156418396992, 27.863993748013115],
									[120.82441369113894, 27.870537827658666],
									[120.83003281985884, 27.87472987708219],
									[120.818040336992, 27.888663999843743],
									[120.81097528098451, 27.89415364417539],
									[120.80605352525004, 27.897977914948854],
									[120.80280649692236, 27.89415364417539],
									[120.78964638827028, 27.878653986991935],
									[120.78512038369877, 27.879846372012537],
									[120.78020449873873, 27.878505041274707],
									[120.77988481673094, 27.878417814230772],
									[120.7711069227463, 27.882316130684956],
									[120.76610332061182, 27.879996111831133],
									[120.75931100290052, 27.88293218966885],
									[120.75065970468165, 27.883856015542733],
									[120.75071314419631, 27.884412191369563],
									[120.74845468123863, 27.885307060872208],
									[120.74011797216679, 27.88635988999698],
									[120.74020074936516, 27.88913832297527],
									[120.74570310021795, 27.890487830349116],
									[120.74705370206675, 27.89665683964148],
									[120.7448779668448, 27.90584037733157],
									[120.74029701099835, 27.912354103958762],
									[120.73868291768258, 27.918915602573065],
									[120.73972025058913, 27.924361215197962],
									[120.7443652858293, 27.928770177501747],
									[120.74454588678327, 27.93405903109948],
									[120.74255279487568, 27.937322777823965],
									[120.73894438027901, 27.938719774797846],
									[120.73313055463143, 27.939538174047527],
									[120.72712013268801, 27.941692174454317],
									[120.72183529636186, 27.94543105010291],
									[120.71563044099207, 27.95048907830835],
									[120.71525157010399, 27.954710180330608],
									[120.72096184421378, 27.962815657516614],
									[120.7247151800616, 27.966577018015016],
									[120.7226405259396, 27.97279073890155],
									[120.72109295817359, 27.97305916944515],
									[120.72298570462658, 27.979661525159315],
									[120.71768473356371, 27.982882054063623],
									[120.70672546560786, 27.985451633885873],
									[120.70664345643047, 27.987177013808207],
									[120.708535341333, 27.993071395328684],
									[120.71032864974745, 27.99647261152188],
									[120.71886955348714, 27.99522376166732],
									[120.72360997532019, 27.995533458502337],
									[120.72593110303808, 27.99481049800613],
									[120.72754460459987, 27.998588899757976],
									[120.73175988441119, 27.998837305996915],
									[120.73256657718582, 27.997095610574036],
									[120.73752377700077, 27.992968863622195],
									[120.73989523707564, 27.991772540470436],
									[120.74058230922628, 27.987482107913024],
									[120.74304660361793, 27.98509935325262],
									[120.75482734290756, 27.980756081927666],
									[120.76314600528394, 27.97606710401368],
									[120.77266450985928, 27.973265685263243],
									[120.78304096316992, 27.973518647467642],
									[120.78759618851336, 27.970347203560664],
									[120.79141982616409, 27.96914307069619],
									[120.79561956928774, 27.96910528118383],
									[120.79764457813485, 27.970242895693104],
									[120.8061883075444, 27.968652047154308],
									[120.81005164216958, 27.969636477441554],
									[120.81492444150979, 27.968270100584732],
									[120.82461782555231, 27.962308563089778],
									[120.82829221351494, 27.957422293703928],
									[120.8398511035457, 27.951531685738757],
									[120.84479209038273, 27.95059338977319],
									[120.86121281252133, 27.94058994197229],
									[120.87268360676308, 27.928814448428113],
									[120.89524623712418, 27.90296580232996],
									[120.86683374078461, 27.867005040650156],
									[120.86628480989611, 27.86631027659803]
								]
							]
						]
					}
				}, {
					type: "Feature",
					properties: {
						adcode: 330303,
						name: "浙南产业集聚区",
						center: [120.763469, 27.970254],
						centroid: [120.815894, 27.890969],
						childrenNum: 0,
						level: "district",
						subFeatureIndex: 1,
						acroutes: [1e5, 33e4, 330300]
					},
					geometry: {
						type: "MultiPolygon",
						coordinates: [
							[
								[
									[120.86628480989611, 27.86631027659803],
									[120.8413983205761, 27.844641842147325],
									[120.83913882789466, 27.84441033776693],
									[120.8104511129286, 27.82114366414885],
									[120.79063590602232, 27.796540655526883],
									[120.78774412698988, 27.793855108126763],
									[120.78468736283162, 27.79575268214063],
									[120.78145261834368, 27.795879282403007],
									[120.78001457181506, 27.79520117559383],
									[120.77452697164244, 27.800182484434174],
									[120.76939737089197, 27.802691083926447],
									[120.76553869385566, 27.80597156073901],
									[120.75975118506915, 27.81181290114455],
									[120.7412590067978, 27.82874353978258],
									[120.73862338526112, 27.83163462094103],
									[120.73409395517194, 27.833143563724548],
									[120.7357568304135, 27.838703698716756],
									[120.74087943263976, 27.837444944628544],
									[120.74725511603083, 27.83711533680338],
									[120.74799644967652, 27.847087918072987],
									[120.75083042028768, 27.853951323594742],
									[120.7483082302407, 27.864094627664997],
									[120.74316672066766, 27.869873676528982],
									[120.7329056305905, 27.872467324007857],
									[120.7334813324976, 27.87260906165892],
									[120.7343214845489, 27.878731656041168],
									[120.72857344161105, 27.882989560120166],
									[120.72182371848987, 27.88578929444043],
									[120.7203260792852, 27.88695286698129],
									[120.72147786081473, 27.88828601298917],
									[120.72786551598085, 27.888656960850142],
									[120.73575317107202, 27.888260591852884],
									[120.73659319272178, 27.88366052001703],
									[120.73875173920146, 27.88051929962603],
									[120.74204619417662, 27.87872926474381],
									[120.75021841904481, 27.87926327857747],
									[120.75065970468165, 27.883856015542733],
									[120.75931100290052, 27.88293218966885],
									[120.76610332061182, 27.879996111831133],
									[120.7711069227463, 27.882316130684956],
									[120.77988481673094, 27.878417814230772],
									[120.78020449873873, 27.878505041274707],
									[120.78512038369877, 27.879846372012537],
									[120.78964638827028, 27.878653986991935],
									[120.80280649692236, 27.89415364417539],
									[120.80605352525004, 27.897977914948854],
									[120.81097528098451, 27.89415364417539],
									[120.818040336992, 27.888663999843743],
									[120.83003281985884, 27.87472987708219],
									[120.82441369113894, 27.870537827658666],
									[120.8156418396992, 27.863993748013115],
									[120.8207814759844, 27.85822593437939],
									[120.82460764792472, 27.861366822920616],
									[120.8291125103342, 27.85637312591905],
									[120.84106962376416, 27.86260419922445],
									[120.85460280897257, 27.873906638580536],
									[120.86628480989611, 27.86631027659803]
								]
							]
						]
					}
				}, {
					type: "Feature",
					properties: {
						adcode: 330304,
						name: "瓯海",
						center: [120.637145, 28.006444],
						centroid: [120.551369, 27.966593],
						childrenNum: 0,
						level: "district",
						subFeatureIndex: 2,
						acroutes: [1e5, 33e4, 330300]
					},
					geometry: {
						type: "MultiPolygon",
						coordinates: [
							[
								[
									[120.39351017155718, 28.101536855641427],
									[120.39754908532211, 28.099233198153627],
									[120.40012123001077, 28.091023420294675],
									[120.40767404771918, 28.084318677664896],
									[120.41235964867894, 28.080638785851363],
									[120.41582418523797, 28.081816430983565],
									[120.41732525175905, 28.083400867356204],
									[120.42131848356121, 28.08500287288433],
									[120.42344819597747, 28.084895188062546],
									[120.42270533977967, 28.078877656978364],
									[120.42506619954554, 28.07123247619785],
									[120.42399378138794, 28.063959303579054],
									[120.42275688262407, 28.05989838340372],
									[120.42181706050894, 28.049332980732515],
									[120.42366536876182, 28.048503919120606],
									[120.42911273866207, 28.050282053274202],
									[120.4345786822604, 28.04994619066423],
									[120.44306900722893, 28.047044890509312],
									[120.44437344867583, 28.047909567072907],
									[120.44612495120555, 28.052020649633334],
									[120.45250323453672, 28.055012819985677],
									[120.45577507875691, 28.05776275974364],
									[120.46194066882686, 28.06144538010028],
									[120.46493278342132, 28.060402966024128],
									[120.46971178437138, 28.05370786862329],
									[120.47621049861573, 28.04704809209585],
									[120.47745006117145, 28.04639353943037],
									[120.48942365198002, 28.04584857455211],
									[120.49433626880386, 28.044954155609844],
									[120.5004725985317, 28.042605231646178],
									[120.49733002825826, 28.038912310454805],
									[120.49489932804158, 28.03243011495789],
									[120.49890149280975, 28.031674010846984],
									[120.50472315784748, 28.03401171307013],
									[120.5098661252216, 28.03479497041161],
									[120.51550520809894, 28.039356862429315],
									[120.5173730496266, 28.036556755789718],
									[120.51705908011252, 28.034642605471902],
									[120.52218518609754, 28.031223324596795],
									[120.5252434979891, 28.031686607650897],
									[120.52693040941097, 28.0274104419384],
									[120.53441706669435, 28.029420562509017],
									[120.53902759224968, 28.03208074093351],
									[120.54538913290219, 28.032988646109175],
									[120.54715656152621, 28.03535955669821],
									[120.55093886633563, 28.03660500351816],
									[120.55775967367003, 28.029906789067127],
									[120.5583370501148, 28.027446346471777],
									[120.56355476643944, 28.01881467145995],
									[120.56778017081831, 28.015793511461425],
									[120.57150885445014, 28.01452734156362],
									[120.5752709389028, 28.012226430605324],
									[120.57720162325631, 28.006065025980206],
									[120.57927991783401, 28.004670259325053],
									[120.58104453877456, 28.00556546697277],
									[120.58505087010167, 28.004062155743952],
									[120.59179348767941, 28.00298159152726],
									[120.59527137377495, 28.00332667938278],
									[120.59775954336828, 28.004784600928645],
									[120.60168041661802, 28.0038894571328],
									[120.60482664443418, 28.0049233357434],
									[120.60989977765269, 28.001548917548575],
									[120.6099659057021, 27.99929053013392],
									[120.61182587546386, 27.99866210816981],
									[120.61600782729943, 27.999646799260404],
									[120.61711083139983, 28.000821957767187],
									[120.62185230813759, 28.00139717404039],
									[120.62405669575992, 28.00451512267483],
									[120.62700314188157, 28.005640679074133],
									[120.63044138586133, 28.009979779343382],
									[120.6314288306761, 28.012816831931275],
									[120.6347190498443, 28.01365920620748],
									[120.63619993557859, 28.012056741125775],
									[120.63763161220925, 27.99977569369338],
									[120.63875108469483, 27.99640242123479],
									[120.63562533534105, 27.991075436382346],
									[120.6363995194223, 27.98608648780123],
									[120.64041334569936, 27.983287731943335],
									[120.6406602887414, 27.978487578039335],
									[120.64758546509722, 27.976436540114264],
									[120.64995336565539, 27.973389864550654],
									[120.65500188353019, 27.972815579975077],
									[120.65679401113482, 27.978381127986722],
									[120.65463987223234, 27.982494774514294],
									[120.65639946776128, 27.982616529229517],
									[120.66952105755081, 27.98648119035471],
									[120.67598297963082, 27.987708069771656],
									[120.67775968566104, 27.98438020408321],
									[120.68798817621348, 27.980815981272542],
									[120.69173845436626, 27.978692163912285],
									[120.69691939021777, 27.978777641774798],
									[120.70025778067213, 27.97998062890298],
									[120.70649269408261, 27.987327776156008],
									[120.70657470326, 27.985602396233674],
									[120.71753397121586, 27.983032816411423],
									[120.72283494227884, 27.979812287507116],
									[120.72094219582573, 27.97320993179295],
									[120.72248976359174, 27.972941501249352],
									[120.72456441771374, 27.966727780362817],
									[120.72081108186603, 27.962966419864415],
									[120.71510080775613, 27.95486094267841],
									[120.71547967864433, 27.95063984065615],
									[120.72168453401412, 27.945581812450712],
									[120.72696937034027, 27.941842936802118],
									[120.73297979228369, 27.939688936395328],
									[120.73879361793115, 27.938870537145647],
									[120.74240203252782, 27.937473540171766],
									[120.74439512443553, 27.93420979344728],
									[120.74421452348156, 27.928920939849547],
									[120.73956948824139, 27.924511977545762],
									[120.73853215533472, 27.919066364920866],
									[120.74014624865049, 27.912504866306563],
									[120.74472720449694, 27.90599113967943],
									[120.746902939719, 27.89680760198928],
									[120.74555233787021, 27.890638592696973],
									[120.7400499870173, 27.88928908532307],
									[120.73996720981893, 27.886510652344782],
									[120.74830391889077, 27.88545782322001],
									[120.75056238184845, 27.884562953717364],
									[120.75006765669707, 27.879414040925326],
									[120.74189543182877, 27.87888002709161],
									[120.7386009768536, 27.88067006197383],
									[120.73644243037393, 27.88381128236483],
									[120.73560240872428, 27.888411354200684],
									[120.727714753633, 27.888807723197942],
									[120.72132709846687, 27.88843677533697],
									[120.72017531693734, 27.88710362932909],
									[120.72167295614213, 27.88594005678823],
									[120.7284226792633, 27.883140322467966],
									[120.73417072220116, 27.87888241838897],
									[120.73333057014975, 27.87275982400672],
									[120.73275486824264, 27.872618086355658],
									[120.72603626076489, 27.87175916725181],
									[120.71431683905098, 27.87227234199503],
									[120.71276954827613, 27.874755536538828],
									[120.7193688435973, 27.87744883789361],
									[120.7189901498756, 27.878579392724873],
									[120.71283516461119, 27.878853121174643],
									[120.70289725220653, 27.87644788436245],
									[120.6979634347648, 27.87296980221464],
									[120.69376872424732, 27.871626367962563],
									[120.68383517355448, 27.870309476301315],
									[120.68136908321662, 27.8685077034678],
									[120.68048102068258, 27.865777908523683],
									[120.68123785953969, 27.861410811459848],
									[120.68005432294876, 27.85941868722267],
									[120.67568025344099, 27.855830324809688],
									[120.67078022083058, 27.85398736302642],
									[120.66435112400518, 27.854313724299004],
									[120.65545466160336, 27.854173498408272],
									[120.6490737963187, 27.852299802294112],
									[120.64163971160349, 27.853930796569045],
									[120.63660548125802, 27.858241481858954],
									[120.63260823668088, 27.860366746228408],
									[120.62375457571318, 27.85890306452484],
									[120.61297253175701, 27.854768038414306],
									[120.61099677068444, 27.854721520981457],
									[120.61014009808707, 27.85687346014214],
									[120.61098047946564, 27.858899193842774],
									[120.6144538851388, 27.863183160274673],
									[120.61858587513814, 27.871705715146675],
									[120.61835482671393, 27.875270518919365],
									[120.61575375892892, 27.8789305599974],
									[120.61167040066857, 27.882027406939358],
									[120.60732252481478, 27.88353751164692],
									[120.61048363910868, 27.888355290464347],
									[120.61058243233344, 27.890458564611095],
									[120.60816150235155, 27.892673506677056],
									[120.60259406396494, 27.895878773186894],
									[120.59775014545289, 27.899490702334106],
									[120.59491531329115, 27.906303136080908],
									[120.59339885127599, 27.907873419822522],
									[120.58957556795815, 27.906224761963244],
									[120.58505825893155, 27.901780736891567],
									[120.57928740918669, 27.901024623787407],
									[120.57397553114595, 27.898681165003836],
									[120.57122051831232, 27.902854240530814],
									[120.56879480663508, 27.904530940150835],
									[120.56347983852379, 27.905388541747868],
									[120.56146615573857, 27.904569613696765],
									[120.55786722719085, 27.90112563204235],
									[120.5530962320056, 27.89472959249673],
									[120.54972732665487, 27.893279174894076],
									[120.5483065354183, 27.896918036038585],
									[120.54435810154519, 27.899374451469782],
									[120.53802925034972, 27.900757753567518],
									[120.53398100162201, 27.90227042673888],
									[120.53229459741783, 27.90474670279815],
									[120.53683926382098, 27.907347073608605],
									[120.53799552757164, 27.909344087459715],
									[120.53705363161987, 27.91103618167449],
									[120.5337485376649, 27.912566556201682],
									[120.5253674452515, 27.91505663595501],
									[120.51476967508052, 27.9155454750437],
									[120.51065179364537, 27.915345568343355],
									[120.50893211812286, 27.920456387652223],
									[120.50960919161093, 27.926061291795236],
									[120.50565743114555, 27.928373043181466],
									[120.49914067560178, 27.933280423252995],
									[120.49393097043799, 27.933986915363903],
									[120.48352793136905, 27.933265842544643],
									[120.4809310957935, 27.93598869652118],
									[120.48180827113492, 27.936932408204143],
									[120.49199520581419, 27.940148125735448],
									[120.49346767389409, 27.941376738146005],
									[120.49412893550209, 27.944548239609617],
									[120.49900721621009, 27.946226143421825],
									[120.50014840192728, 27.947703801489297],
									[120.49525274541793, 27.950403564472992],
									[120.49482291894265, 27.95314872163624],
									[120.49743557269358, 27.955965015173376],
									[120.49650895982074, 27.957546491877167],
									[120.49166354663544, 27.959132222374194],
									[120.49043843078903, 27.965795631263404],
									[120.4892147727436, 27.96643508071446],
									[120.48372423898252, 27.96582271524619],
									[120.4786302747674, 27.967549162663772],
									[120.46449325056312, 27.967950280081425],
									[120.46303832465901, 27.968448594427116],
									[120.46287248517706, 27.972243773931098],
									[120.45695512507905, 27.97384531720769],
									[120.45040976210089, 27.978818033925165],
									[120.44741909541494, 27.97928268574742],
									[120.4438014627674, 27.974600595740924],
									[120.4422814664166, 27.974001554628103],
									[120.43617012704976, 27.974680705550156],
									[120.43313132864796, 27.971993379291064],
									[120.42935060844388, 27.966559947083965],
									[120.42743549675083, 27.969725863757674],
									[120.42413319609022, 27.970129832925522],
									[120.42136038297531, 27.969452652418],
									[120.41266456561732, 27.96914717700065],
									[120.40972836097512, 27.965301818923876],
									[120.41090013893029, 27.959638556873927],
									[120.40822817309174, 27.959590159858067],
									[120.40624908182974, 27.961142587560403],
									[120.4037745558511, 27.96545650051712],
									[120.39899288211586, 27.969063343098867],
									[120.39520192762689, 27.969644570440607],
									[120.39419616721943, 27.97446047686958],
									[120.3822155194307, 27.98164955748115],
									[120.37757071171904, 27.982578168647592],
									[120.3728607166488, 27.98476284313074],
									[120.36795385188884, 27.98501921826238],
									[120.35931125371144, 27.98692775231399],
									[120.35440654642503, 27.986653004032974],
									[120.34474628801081, 27.990809588691604],
									[120.34079761311943, 27.99224380590698],
									[120.33247264739487, 27.99307531277549],
									[120.33051448605477, 27.99427019971],
									[120.33081060582481, 27.99999451403562],
									[120.33204454491988, 28.002799604718007],
									[120.33683100574638, 28.009047596069763],
									[120.34010430506964, 28.02215053481939],
									[120.34479362562536, 28.024791585563264],
									[120.34377181501736, 28.04037656052992],
									[120.34053010078355, 28.04311070729335],
									[120.34107302959671, 28.047122270876173],
									[120.34321187552769, 28.0495797888762],
									[120.34271832039428, 28.052621064010964],
									[120.34589379146541, 28.055687914066027],
									[120.34989166287005, 28.05549315148778],
									[120.35278828834885, 28.053670232895],
									[120.35927302712855, 28.05560371054287],
									[120.36200544899236, 28.05472280481365],
									[120.36612078624535, 28.05623769841111],
									[120.36799721989587, 28.058006681063546],
									[120.36970937258957, 28.066452798957584],
									[120.36939636894738, 28.069258495783004],
									[120.36695889593636, 28.072332700493803],
									[120.3657406212327, 28.07535854955745],
									[120.36022533093433, 28.078375188664097],
									[120.35790431473242, 28.083205070557597],
									[120.36200303251405, 28.08620764966338],
									[120.36119657356312, 28.08902906304087],
									[120.36401078786764, 28.09200264350727],
									[120.3723584084139, 28.096614464985635],
									[120.3792422528278, 28.09845747892956],
									[120.38304750923521, 28.097263697261894],
									[120.38611128001162, 28.097387988065236],
									[120.39187863948769, 28.102164288351275],
									[120.39351017155718, 28.101536855641427]
								]
							]
						]
					}
				}, , {
					type: "Feature",
					properties: {
						adcode: 330305,
						name: "瓯江口产业集聚区",
						center: [121.156181, 27.836057],
						centroid: [121.033762, 27.892626],
						childrenNum: 0,
						level: "district",
						subFeatureIndex: 3,
						acroutes: [1e5, 33e4, 330300]
					},
					geometry: {
						type: "MultiPolygon",
						coordinates: [
							[
								[
									[120.90642595319525, 27.933884024827933],
									[120.90517842804206, 27.935937046657443],
									[120.90010690730799, 27.936459302754656],
									[120.88914406274841, 27.94630324859611],
									[120.87866103617796, 27.952311754084235],
									[120.85991525628413, 27.96563923376368],
									[120.84515821967614, 27.97165083921493],
									[120.84404015552877, 27.973262906358116],
									[120.84594774259426, 27.974697709032114],
									[120.85371923405546, 27.975375055914128],
									[120.86138665686883, 27.978443622775046],
									[120.89406800293602, 27.979073643733727],
									[120.90622794586307, 27.978206634328785],
									[120.92123460729135, 27.97400212299965],
									[120.93993365751237, 27.963601112801143],
									[120.939572834219, 27.963041214680345],
									[120.94154809167117, 27.962028262394426],
									[120.98481697182581, 27.933684884349987],
									[120.97113760901345, 27.91999346432698],
									[120.96375023868268, 27.91124923016787],
									[120.95892583366037, 27.910646179877347],
									[120.94245266755661, 27.90519074305837],
									[120.93054241779839, 27.918156331049886],
									[120.9202905583627, 27.92795590344224],
									[120.91219637576216, 27.93403441305776],
									[120.91122633282907, 27.934762889096078],
									[120.90642595319525, 27.933884024827933]
								]
							]
						]
					}
				}, {
					type: "Feature",
					properties: {
						adcode: 330305,
						name: "洞头",
						center: [121.156181, 27.836057],
						centroid: [121.033762, 27.892626],
						childrenNum: 0,
						level: "district",
						subFeatureIndex: 3,
						acroutes: [1e5, 33e4, 330300]
					},
					geometry: {
						type: "MultiPolygon",
						coordinates: [
							[
								[
									[121.14403825376246, 27.7656059079863],
									[121.14591963188559, 27.76433591686913],
									[121.14680647134162, 27.76453754756983],
									[121.147528410208, 27.764093518101447],
									[121.14820845505619, 27.764856300577833],
									[121.14882072429702, 27.764995504838737],
									[121.14973097040797, 27.76511127096842],
									[121.14900638393749, 27.76137087096896],
									[121.14940811739075, 27.760905226295222],
									[121.14935505379276, 27.760798930926],
									[121.15041103504132, 27.759117914560136],
									[121.14403881943599, 27.758155974518672],
									[121.14259015191408, 27.757309004706826],
									[121.14238998530959, 27.757280631995627],
									[121.14141426495644, 27.759487826402108],
									[121.14146146047813, 27.762532157433156],
									[121.14210355303658, 27.764051079993408],
									[121.14292791838875, 27.764792343491933],
									[121.14403825376246, 27.7656059079863]
								]
							],
							[
								[
									[121.1377833807984, 27.75930906815904],
									[121.12888381753419, 27.75618963294528],
									[121.12877875963216, 27.756247006993817],
									[121.12657739013446, 27.7599994381236],
									[121.12786996322825, 27.76262462122935],
									[121.12670290491519, 27.764010548448084],
									[121.13065845692233, 27.76765213993434],
									[121.13164673990514, 27.7677829238429],
									[121.13495385733472, 27.767928420660155],
									[121.13593592870018, 27.76623962066202],
									[121.13591611393758, 27.76573348041586],
									[121.1368729862993, 27.765717554321725],
									[121.13930138425155, 27.764891132220043],
									[121.1400608725113, 27.761559913859003],
									[121.1377833807984, 27.75930906815904]
								]
							],
							[
								[
									[121.13366369262542, 27.779550797431398],
									[121.13559663337799, 27.77735507477695],
									[121.13563672335613, 27.777357154908827],
									[121.13571981711596, 27.777238240252643],
									[121.14113245699741, 27.77715163913689],
									[121.1407689932945, 27.77532881407359],
									[121.14116124789336, 27.775307499241762],
									[121.1409337517913, 27.774533748633644],
									[121.14264489094899, 27.775226880416255],
									[121.14471338831231, 27.775114480448963],
									[121.14549252046356, 27.77489954877518],
									[121.14438437134174, 27.771955303294646],
									[121.13932515782983, 27.77160210175566],
									[121.13892841381528, 27.771779418385506],
									[121.13905930474323, 27.77302932764138],
									[121.13832479245525, 27.772212099309],
									[121.13831123787338, 27.772228527224797],
									[121.13266784094822, 27.7700518621038],
									[121.13129784072282, 27.770820047707105],
									[121.12911704681437, 27.770866319624986],
									[121.12874865572599, 27.77096641057142],
									[121.12838822453705, 27.770881783467587],
									[121.12657686942703, 27.770920216894524],
									[121.12751817722221, 27.774988650905584],
									[121.13260173807976, 27.77797877799827],
									[121.13327311256421, 27.779348795310682],
									[121.13366369262542, 27.779550797431398]
								]
							],
							[
								[
									[121.09039446533234, 27.782908156386384],
									[121.08619559095382, 27.77924770791543],
									[121.08086027478191, 27.778606090198934],
									[121.07686557438683, 27.778742507460777],
									[121.07662905628604, 27.778874196986635],
									[121.07653596026637, 27.779513099649876],
									[121.07716476893904, 27.78097057333332],
									[121.07635665433622, 27.780743645602797],
									[121.07631732878178, 27.78101352675293],
									[121.07223608662616, 27.7802470165866],
									[121.0693918304687, 27.781006701797878],
									[121.06928936171471, 27.781175955106278],
									[121.07028079322413, 27.783097773043835],
									[121.0715123419211, 27.784214019661306],
									[121.07620823382297, 27.785335064161927],
									[121.07742071149676, 27.787544608496944],
									[121.07646041811381, 27.789182407941837],
									[121.07696292330036, 27.78993890145921],
									[121.07792723215607, 27.790567040136864],
									[121.07731056253249, 27.792767763021914],
									[121.07822788361, 27.79380990640209],
									[121.07894012238876, 27.79454768952428],
									[121.08526062247984, 27.79647788464672],
									[121.08672101446336, 27.796248859697187],
									[121.08792371740572, 27.79243097680819],
									[121.08801353089984, 27.792402234475617],
									[121.08807456518912, 27.7921495438664],
									[121.09100484869487, 27.790928006422405],
									[121.091123235449, 27.790419788742327],
									[121.09125080607987, 27.78803073702892],
									[121.09190075241781, 27.78708202601473],
									[121.09224152532624, 27.785619139311905],
									[121.09219227485369, 27.785512549864336],
									[121.09039446533234, 27.782908156386384]
								]
							],
							[
								[
									[121.14692294343911, 27.810094874978574],
									[121.1452073607312, 27.80420010225299],
									[121.14035558214448, 27.7981272619636],
									[121.14030568146211, 27.795739847016364],
									[121.13588056463641, 27.79335876239702],
									[121.13455109685572, 27.793679089218642],
									[121.1319889930976, 27.794784237302736],
									[121.13231958208314, 27.79321348141707],
									[121.12963009295447, 27.79006736241888],
									[121.12932920947549, 27.790284788812016],
									[121.12931382657189, 27.79088377956282],
									[121.12808670883464, 27.791182651258396],
									[121.12721821285027, 27.79181024764489],
									[121.12755000602806, 27.793737411152676],
									[121.12648382826615, 27.795116384813355],
									[121.12920096345374, 27.79737281080662],
									[121.12720412946703, 27.800559681684035],
									[121.12471301369465, 27.801483762066027],
									[121.12799623523813, 27.802208659701932],
									[121.12812483289474, 27.801954746014758],
									[121.1285875071078, 27.80233920618946],
									[121.12872194945851, 27.802368889212914],
									[121.12977154282248, 27.80332308249433],
									[121.13205737035139, 27.805222495621706],
									[121.13558556092494, 27.80426377065652],
									[121.13598547325103, 27.804891477659623],
									[121.13645982785886, 27.804835557814783],
									[121.13767266256343, 27.806254863371294],
									[121.13740989235271, 27.807127263312623],
									[121.13754936641021, 27.807346183479638],
									[121.1368512703699, 27.80898189110144],
									[121.13684167280496, 27.809013755880187],
									[121.13727713713024, 27.80959840604163],
									[121.13830687346353, 27.810782890518055],
									[121.1405690910907, 27.80923619329576],
									[121.14411694084424, 27.81111126896991],
									[121.14337828268162, 27.81208592902243],
									[121.1438907991211, 27.8132472208826],
									[121.14469612492633, 27.813866476057058],
									[121.1501183506814, 27.81751215496206],
									[121.15112972285851, 27.81977856163138],
									[121.1531409028305, 27.819333314480957],
									[121.15316271768529, 27.817083835750452],
									[121.15289766139801, 27.8167792659504],
									[121.15096683495153, 27.81611882542353],
									[121.14844139385525, 27.813742033268284],
									[121.14887133184652, 27.812152700087097],
									[121.14829839535469, 27.81149435138326],
									[121.14692294343911, 27.810094874978574]
								]
							],
							[
								[
									[121.2202511368805, 27.82501245855815],
									[121.22142141926315, 27.821824033652263],
									[121.21992549866286, 27.821055805780873],
									[121.21978444449655, 27.8210390532098],
									[121.21558381194347, 27.820593160346107],
									[121.21157531235087, 27.81923743056302],
									[121.210284126911, 27.819976155275413],
									[121.20952576730042, 27.821739170026717],
									[121.20917048293154, 27.82303435744967],
									[121.20945311017294, 27.823495161072856],
									[121.21100485798786, 27.82440786772895],
									[121.21298346001868, 27.825257464460492],
									[121.21397830535454, 27.8246860559168],
									[121.21480870245966, 27.823939561961254],
									[121.21595154652675, 27.824756718347942],
									[121.22026353763226, 27.827331780437362],
									[121.22067275074687, 27.826820423223978],
									[121.2202511368805, 27.82501245855815]
								]
							],
							[
								[
									[121.18967151632751, 27.86551654305407],
									[121.18631315193045, 27.861786842289007],
									[121.18233823751973, 27.861573934989167],
									[121.18034577333879, 27.86010503811707],
									[121.18117523155172, 27.85721230490401],
									[121.18922924953029, 27.85955405227776],
									[121.18949401353791, 27.858621835729195],
									[121.18641817565833, 27.855863928877284],
									[121.18891871003052, 27.85536015025076],
									[121.19133031404283, 27.857138156700614],
									[121.19067776236886, 27.85426270935659],
									[121.19317233603454, 27.85281431702714],
									[121.1924526688556, 27.8510472778097],
									[121.18923401863515, 27.850343942319114],
									[121.19017255292101, 27.847812056681107],
									[121.18402671825845, 27.843019604571168],
									[121.18457865737923, 27.841273903567867],
									[121.18320405442364, 27.83899152314035],
									[121.18199586831474, 27.839067935836624],
									[121.18228375928811, 27.84083843204803],
									[121.18036615827168, 27.841286063301254],
									[121.17954206451475, 27.843839049732424],
									[121.17668640585305, 27.84437525251593],
									[121.17572855952551, 27.84652602705455],
									[121.17328965659249, 27.845649599949127],
									[121.16943836209077, 27.846447348966024],
									[121.16717171710116, 27.843610644415776],
									[121.16848945592369, 27.842975973962098],
									[121.17127907287102, 27.8450361489991],
									[121.17374622800605, 27.843836903950034],
									[121.17708611493231, 27.83969652687324],
									[121.17630887045812, 27.836261630170156],
									[121.17403650308222, 27.837145447904163],
									[121.17126643649692, 27.832803368180976],
									[121.17769074443243, 27.832313656749932],
									[121.17504143701274, 27.82927215138875],
									[121.17197501683358, 27.827771544421296],
									[121.17187893416553, 27.82465577124691],
									[121.17085862182796, 27.8238327503812],
									[121.17163407844998, 27.8215235467743],
									[121.17576634903787, 27.822751044924814],
									[121.17823326585255, 27.822189807713528],
									[121.17798054196851, 27.819777130809996],
									[121.17618405804785, 27.819615006427455],
									[121.17448651753887, 27.81624925140187],
									[121.16657447822968, 27.814715862347214],
									[121.16471493204858, 27.818995833091265],
									[121.15809130646869, 27.819243073808877],
									[121.15844225880323, 27.82129144704271],
									[121.15683364865401, 27.82270956009819],
									[121.15694284433687, 27.82415795332696],
									[121.15617847455701, 27.824447750863044],
									[121.15224814403666, 27.82130944697343],
									[121.15006434909048, 27.822275042759088],
									[121.14814245740854, 27.82159590712547],
									[121.14771723726074, 27.823820114007106],
									[121.14389574539234, 27.824882149491657],
									[121.13982641655593, 27.82186627390945],
									[121.14045643841393, 27.819378257200867],
									[121.13687968265128, 27.817866689296352],
									[121.1335546426327, 27.817205484345664],
									[121.13203036820698, 27.81810903590332],
									[121.1212718487169, 27.816301465140555],
									[121.12040543556247, 27.817427754487312],
									[121.1152595283047, 27.81758582562543],
									[121.11429774744317, 27.819645762342134],
									[121.11204183136545, 27.820525646441467],
									[121.10513067274246, 27.8179626460593],
									[121.10416831811347, 27.81668235051012],
									[121.10332567044338, 27.81672058968354],
									[121.10125773155914, 27.817365267792923],
									[121.09852302092077, 27.818679809525634],
									[121.09937655938074, 27.8205379248854],
									[121.0909119658146, 27.819592169043403],
									[121.09025385183384, 27.81960687385822],
									[121.0854017737729, 27.820762157347758],
									[121.08868324793366, 27.821742057749816],
									[121.09234285373975, 27.82487404390207],
									[121.0992391105965, 27.82561433343477],
									[121.09904956858281, 27.826974511264723],
									[121.0926164391974, 27.828441738995082],
									[121.09156143641121, 27.83033227941121],
									[121.1065038439773, 27.8341373208807],
									[121.10668838036452, 27.83587360418352],
									[121.10881590832753, 27.836346030644847],
									[121.10770046750258, 27.837285041571477],
									[121.10802376298636, 27.839735746307724],
									[121.11423146740833, 27.840971350947143],
									[121.12252545328715, 27.84589815097894],
									[121.12133646050927, 27.849365830668603],
									[121.12251770472835, 27.851455330798956],
									[121.13775432100522, 27.856693148769864],
									[121.15246176719688, 27.85377824277174],
									[121.15811634089653, 27.860462546509382],
									[121.16067421424361, 27.859013557030096],
									[121.1603385207062, 27.856446027662116],
									[121.1614099738913, 27.856031537325634],
									[121.16388392430372, 27.857324004299414],
									[121.16248035418505, 27.858203530468586],
									[121.16582405603538, 27.861432671280795],
									[121.1715786460378, 27.859012842069035],
									[121.17540514443192, 27.85941600814232],
									[121.17576956771143, 27.858076572276048],
									[121.17596900496562, 27.860283255867614],
									[121.17945075005218, 27.861451745002057],
									[121.18180715997255, 27.867975472989713],
									[121.1836328502759, 27.86780881872204],
									[121.183874130287, 27.86502075220602],
									[121.18666112391179, 27.868931412754534],
									[121.19080150098853, 27.867162346465193],
									[121.18967151632751, 27.86551654305407]
								]
							],
							[
								[
									[121.17129850362312, 27.87134444668891],
									[121.1684793232622, 27.86790931256479],
									[121.16574311255465, 27.867604732872167],
									[121.16432845559382, 27.86630702015293],
									[121.16168165188674, 27.866884946982793],
									[121.16130506977322, 27.86561024161938],
									[121.15618395772356, 27.86437046502499],
									[121.15709567062879, 27.863407850491967],
									[121.15513622775472, 27.862235546433396],
									[121.1514817471849, 27.863319873413502],
									[121.15082752726858, 27.86160540586485],
									[121.14859044569255, 27.861510754018127],
									[121.14604973770531, 27.859504342251626],
									[121.14448416191465, 27.860261559723256],
									[121.14475083338436, 27.86181545242124],
									[121.14885926204533, 27.863870739642948],
									[121.14808094467992, 27.865911007287195],
									[121.15326654891214, 27.869269967035393],
									[121.15149390691829, 27.868971705080185],
									[121.15062224891767, 27.870989442009204],
									[121.15295624773273, 27.873197675132644],
									[121.15955805755834, 27.87462174889464],
									[121.16076064089089, 27.872355818866026],
									[121.16031825538323, 27.870533347236233],
									[121.16203343879226, 27.87023651610241],
									[121.16563212901963, 27.875931978378162],
									[121.1731953617766, 27.876536131237515],
									[121.17609810804129, 27.872879504885304],
									[121.17129850362312, 27.87134444668891]
								]
							],
							[
								[
									[121.03555405157829, 27.876958608453094],
									[121.04074287448418, 27.876729249855032],
									[121.04371905309188, 27.878847956368134],
									[121.04796087729267, 27.87775766868151],
									[121.0494070051293, 27.8756488565096],
									[121.0486006738821, 27.872191667411585],
									[121.05160033738571, 27.86900854131119],
									[121.0505886081778, 27.86723530306682],
									[121.05589163329228, 27.864783645049215],
									[121.06008076711373, 27.864857554032938],
									[121.06072711976083, 27.862857102972953],
									[121.06870901570858, 27.86499011500183],
									[121.07228553315088, 27.867675066151435],
									[121.07491874720245, 27.866398930866012],
									[121.08123123613268, 27.8691320416105],
									[121.083091855205, 27.86816191683903],
									[121.08496916299657, 27.869233250414254],
									[121.08584666209379, 27.87138056795891],
									[121.09088027460507, 27.87313926236709],
									[121.09495425203716, 27.87280535668191],
									[121.0959924455949, 27.874970078806143],
									[121.09775030633159, 27.874424338712288],
									[121.09783601801792, 27.871282219898603],
									[121.09496974915464, 27.869928836446718],
									[121.09459781653607, 27.87187373638386],
									[121.09095144245521, 27.87161970128824],
									[121.08684766328906, 27.86957943454331],
									[121.08232212096914, 27.865528344857296],
									[121.07952463585332, 27.865171909356206],
									[121.07683193704429, 27.86007261306071],
									[121.07402646504943, 27.857624650357366],
									[121.0655082467083, 27.85396730904415],
									[121.06501364746191, 27.85227525260086],
									[121.06866836545271, 27.85110914666984],
									[121.06884026546595, 27.849893808252716],
									[121.06771254529781, 27.84685754773767],
									[121.06410205326722, 27.845071911439618],
									[121.05962324151949, 27.84505236107765],
									[121.06100332764152, 27.849658608558002],
									[121.05385291607922, 27.849890112938397],
									[121.05749464066514, 27.852211952020014],
									[121.05620109990093, 27.854816436329543],
									[121.05797696146772, 27.856830001303592],
									[121.05568361290852, 27.857881546196438],
									[121.05490004979754, 27.855333209260266],
									[121.04207336929062, 27.85249447853738],
									[121.04150140316733, 27.84997272466154],
									[121.03887450685306, 27.85048460977697],
									[121.03693223023834, 27.852541566140417],
									[121.03650724931015, 27.848294019553407],
									[121.03523874297366, 27.848243951597112],
									[121.03488540653632, 27.84626495836119],
									[121.03276145427776, 27.846306204867517],
									[121.03167808057901, 27.84921371933774],
									[121.02954483022984, 27.846749544555905],
									[121.02643394487075, 27.846920370778548],
									[121.02651500706202, 27.84194755513562],
									[121.02487421017668, 27.840136528278208],
									[121.02498364417988, 27.83756387277458],
									[121.02294670402728, 27.835877808514113],
									[121.02100044521444, 27.836293378037],
									[121.02028024203958, 27.837034344759275],
									[121.02240896250373, 27.838021278759072],
									[121.01964235291234, 27.842766523656167],
									[121.01793432271086, 27.843065977213143],
									[121.01637363473549, 27.847759246691908],
									[121.01906824100661, 27.850718856190326],
									[121.02097737760391, 27.85006094006036],
									[121.02313125120634, 27.850886225419003],
									[121.02014875396185, 27.85653901126642],
									[121.02165985152101, 27.858554244482832],
									[121.024920106178, 27.85721313947488],
									[121.0247503519472, 27.861008644533342],
									[121.02253794686885, 27.864828228939643],
									[121.01927042029376, 27.86594700804801],
									[121.02308225614127, 27.868924260446306],
									[121.02489805210348, 27.867196440663236],
									[121.03136193740352, 27.86636745909101],
									[121.0332232714369, 27.872872114256722],
									[121.02904093289283, 27.874083876969394],
									[121.02972054516704, 27.875243663364415],
									[121.03253531435337, 27.87595665487578],
									[121.03220295909932, 27.87826633422401],
									[121.03436911114568, 27.87961542611106],
									[121.03648960551095, 27.879517435980915],
									[121.03555405157829, 27.876958608453094]
								]
							],
							[
								[
									[121.15439534197151, 27.90891873870885],
									[121.155082106554, 27.908635615940966],
									[121.15678894515372, 27.91014540228855],
									[121.15782093968471, 27.909194946589537],
									[121.15689766419587, 27.90757167299438],
									[121.15284192591423, 27.905162334374268],
									[121.15093576877075, 27.904617309241473],
									[121.14877414660964, 27.905894756637736],
									[121.14414870759686, 27.903971433235085],
									[121.14444875740435, 27.902021765991776],
									[121.14785397018466, 27.89960515455431],
									[121.14632785304809, 27.898237704806263],
									[121.14803731407085, 27.897105217331955],
									[121.14571845534249, 27.894761324175818],
									[121.14128422748513, 27.893993735722404],
									[121.1417243484999, 27.89300000644522],
									[121.14633882028045, 27.89162194739498],
									[121.14431154694046, 27.888557911318628],
									[121.14194273986561, 27.888062834532263],
									[121.14524531392021, 27.884871601942905],
									[121.14424204823206, 27.88282895109529],
									[121.14196085940625, 27.882460832501465],
									[121.13343524953723, 27.885724902082643],
									[121.12389493010699, 27.885766863549975],
									[121.12089312082094, 27.881759762403135],
									[121.12140166765289, 27.879896640517586],
									[121.12302994687457, 27.879534840560495],
									[121.12189507439825, 27.875429868893377],
									[121.11927592754205, 27.875852107788603],
									[121.12025725876549, 27.87731361403212],
									[121.11807060217666, 27.878499746066495],
									[121.11145007566051, 27.878314972258238],
									[121.10977280137377, 27.87540614567712],
									[121.10730957987323, 27.874168276544765],
									[121.10755395894807, 27.87238562149929],
									[121.10490345992685, 27.871453165731054],
									[121.1031185385898, 27.86919605715235],
									[121.10154414134911, 27.868896841915785],
									[121.10109674931562, 27.870681047392452],
									[121.09831905378132, 27.87040412455076],
									[121.102707147317, 27.876356006024935],
									[121.10726094273844, 27.878434538922875],
									[121.11162817470051, 27.884546756927364],
									[121.1174848080775, 27.88535404235523],
									[121.12149572414842, 27.889118670989944],
									[121.1237330440448, 27.88949060450784],
									[121.12238395215775, 27.89108920070612],
									[121.12534081962315, 27.89516162860633],
									[121.1232441662853, 27.89618515961746],
									[121.12202584751492, 27.898504614596334],
									[121.12573361381533, 27.902287841210978],
									[121.12511503672965, 27.90414416781914],
									[121.12839961085342, 27.903729915803012],
									[121.12837040447062, 27.902567029444924],
									[121.1294821499813, 27.9023373129167],
									[121.13161814236344, 27.90326595286149],
									[121.13470244376288, 27.90764820619978],
									[121.13785827184188, 27.90867364377368],
									[121.14102280176098, 27.908608317020253],
									[121.14190685781534, 27.90678644164103],
									[121.14653551550168, 27.90695667251248],
									[121.14946770646952, 27.909873604683185],
									[121.1505177018305, 27.908238410574256],
									[121.1511111257779, 27.908365250056306],
									[121.15335810169506, 27.910546541289875],
									[121.15439534197151, 27.90891873870885]
								]
							],
							[
								[
									[121.11706751005761, 27.91367620719126],
									[121.11492492204752, 27.910660797457865],
									[121.11269821594999, 27.910879020650327],
									[121.11132520929107, 27.909594516273955],
									[121.11000943188981, 27.909328579550333],
									[121.10957741376671, 27.90795938062098],
									[121.1090381595834, 27.907454885234813],
									[121.10707180991619, 27.908058560554196],
									[121.10640394728443, 27.91193234889886],
									[121.10498855467813, 27.9114905659369],
									[121.10398607140019, 27.911698730212265],
									[121.10382056196943, 27.912266134974175],
									[121.10484194719811, 27.914769053449106],
									[121.10660433782004, 27.91635072260783],
									[121.10644151556357, 27.916593428044337],
									[121.10715844340746, 27.917310382867925],
									[121.10551736233651, 27.91855605271968],
									[121.1088352203692, 27.92127406564566],
									[121.11298727963936, 27.921503543853532],
									[121.1173485517943, 27.924105525349773],
									[121.11944837254441, 27.92382914839652],
									[121.11934301516806, 27.921886764762462],
									[121.11789169734402, 27.92102219162092],
									[121.11775993677168, 27.916298290333884],
									[121.11959083235115, 27.914400788265823],
									[121.11706751005761, 27.91367620719126]
								]
							],
							[
								[
									[121.1209342477174, 27.985355376749283],
									[121.12087285549796, 27.979239344720042],
									[121.12762832618637, 27.97976136249696],
									[121.1278989312907, 27.977001905213797],
									[121.13115561024324, 27.977555155546042],
									[121.1318985221991, 27.97701954811373],
									[121.12828910305973, 27.973829269705107],
									[121.12690806365629, 27.97128951589849],
									[121.13850390952791, 27.970388055264607],
									[121.13667464262073, 27.96870553523229],
									[121.13646757641754, 27.966571926952895],
									[121.13398873818983, 27.965818644015258],
									[121.13369262201695, 27.964434028008043],
									[121.14188873737544, 27.966230511928643],
									[121.14009845248165, 27.96355211773607],
									[121.14303040512914, 27.96268224758768],
									[121.145915508494, 27.963376879439465],
									[121.14792251561164, 27.96228075065619],
									[121.14367425406363, 27.95719373190525],
									[121.14217281342462, 27.95729804067207],
									[121.14092302287929, 27.960314512504794],
									[121.13649034455386, 27.958863615563473],
									[121.1361199614671, 27.96047067618082],
									[121.13761401147747, 27.96115970615557],
									[121.13596510900265, 27.96123456931997],
									[121.13427352920007, 27.955536365910632],
									[121.12624955217518, 27.952936768517077],
									[121.12552762050336, 27.951241612110778],
									[121.12333583867803, 27.95134890123086],
									[121.1225992444596, 27.94921874994543],
									[121.12195205724174, 27.94921874994543],
									[121.11994874453899, 27.94814765469056],
									[121.11848366259096, 27.94921874994543],
									[121.11090266732435, 27.94739985491941],
									[121.10975265476122, 27.946285247766014],
									[121.10575735541772, 27.946754932194438],
									[121.10227704025328, 27.945353149927996],
									[121.09780895741756, 27.947439670604354],
									[121.09701526164508, 27.94722020634748],
									[121.09397530581577, 27.942410945908478],
									[121.0921217203412, 27.94158697086209],
									[121.09175336342707, 27.943491458863775],
									[121.08876335594414, 27.943443178759765],
									[121.08667373620403, 27.945539355456958],
									[121.0854902265927, 27.951072573740362],
									[121.07157802570543, 27.955885649103493],
									[121.06896352744491, 27.95426893246531],
									[121.06441664691079, 27.955184579005163],
									[121.06236362418201, 27.953112244234717],
									[121.06059610832381, 27.95521545452965],
									[121.05666804319571, 27.953447103201313],
									[121.0538250209081, 27.954318642491387],
									[121.04931771773852, 27.94921874994543],
									[121.04754054585953, 27.94921874994543],
									[121.04517865187336, 27.947394967104117],
									[121.0446754694974, 27.94732046097056],
									[121.04438745981349, 27.94921874994543],
									[121.04274141808207, 27.950961947236124],
									[121.0415322777925, 27.94997274874339],
									[121.03805744669387, 27.95068502439443],
									[121.0413670543461, 27.95826065520515],
									[121.03888905068925, 27.958287954125808],
									[121.03542697467515, 27.960166812348575],
									[121.03914141664313, 27.96367311522215],
									[121.03833305832404, 27.967272520410518],
									[121.04614484301021, 27.97113144386111],
									[121.05120694604375, 27.970879435837332],
									[121.05541634518829, 27.97248625723506],
									[121.05849194564689, 27.97665202577042],
									[121.06500244100994, 27.98140370801474],
									[121.06409084771451, 27.9832270142154],
									[121.06590080258002, 27.98493301824425],
									[121.07445800293453, 27.98710000486136],
									[121.07093811040556, 27.980514645434596],
									[121.07376885424924, 27.97743093938641],
									[121.08115470382654, 27.98102307355606],
									[121.082000851658, 27.979475021055407],
									[121.08332562407838, 27.979501962945278],
									[121.08710765819194, 27.98151254666675],
									[121.08630192319526, 27.982615113696568],
									[121.0920468571768, 27.985031724234716],
									[121.09338665007385, 27.98487603630008],
									[121.09489476638043, 27.98272800469374],
									[121.10443031760508, 27.982210874732118],
									[121.10755562808981, 27.983209371315468],
									[121.10925447981049, 27.984562278126702],
									[121.10917794660497, 27.986008048033057],
									[121.11089825614965, 27.986699819141393],
									[121.11803984626192, 27.985298752735275],
									[121.1211360690744, 27.987594127467048],
									[121.12159001806492, 27.986665606232805],
									[121.1209342477174, 27.985355376749283]
								]
							],
							[
								[
									[121.19860124555112, 27.999403715209326],
									[121.19744074329572, 27.996672034386904],
									[121.20104491668963, 27.997742056750553],
									[121.20195996787822, 27.99554193011602],
									[121.20513272299684, 27.99736034850133],
									[121.21061503875308, 27.99371504821096],
									[121.21657931828099, 27.991937875432654],
									[121.2181499005975, 27.991908430729552],
									[121.22182595770187, 27.995651125798872],
									[121.22478306258836, 27.99687135203135],
									[121.22654557192072, 27.995851516334483],
									[121.22959053517513, 27.99697995146363],
									[121.23224592201177, 27.996231436731478],
									[121.23522305480014, 27.996907710722326],
									[121.23589456058562, 27.99510061749953],
									[121.23590060133176, 27.99510578590332],
									[121.23571904709638, 27.99304734835647],
									[121.23336233860107, 27.991384118782094],
									[121.23172534854609, 27.99074786372296],
									[121.23190093038374, 27.99097835996338],
									[121.22908270330413, 27.991151929118303],
									[121.22504806491634, 27.989602923336292],
									[121.2243618561148, 27.987885870236767],
									[121.22413761825658, 27.987798715138638],
									[121.22102844700532, 27.98780107495969],
									[121.21587264540631, 27.985239267078555],
									[121.21059525007081, 27.985620140756964],
									[121.20957267324036, 27.983631849430367],
									[121.20643341517007, 27.984017849244424],
									[121.20593213486018, 27.981288690121005],
									[121.2059130602396, 27.981282716823955],
									[121.19148826557102, 27.981672406556356],
									[121.19246947808404, 27.97996222967322],
									[121.18959665316311, 27.97813951972313],
									[121.19347906150949, 27.97868835888073],
									[121.1939488646484, 27.97754275839162],
									[121.18972182260404, 27.972271561183675],
									[121.18745768042766, 27.971443175861907],
									[121.18447804482594, 27.967764139303654],
									[121.1802042722095, 27.967577338423496],
									[121.1799037457613, 27.96889090529112],
									[121.17605197461899, 27.968347310979652],
									[121.17586147752525, 27.969466328408373],
									[121.1782679554019, 27.971337556782885],
									[121.17846310109132, 27.976069212024584],
									[121.17706525335882, 27.97768545112274],
									[121.17456400402568, 27.977973818736814],
									[121.17500162132785, 27.98034810987741],
									[121.17129695409119, 27.97887563730086],
									[121.16925942937928, 27.979812741664773],
									[121.16951405982604, 27.98640465714925],
									[121.17421567411418, 27.99228644366451],
									[121.19183540388087, 28.00244092900573],
									[121.19429290299513, 28.002241373040988],
									[121.19531035458931, 27.99972534155131],
									[121.19860124555112, 27.999403715209326]
								]
							],
							[
								[
									[121.07356226468687, 28.009367227715416],
									[121.07666051367187, 28.006204009007888],
									[121.07943141482804, 28.008913636655052],
									[121.08166134319652, 28.00893032537425],
									[121.08258461958462, 28.005353808831273],
									[121.08518290486722, 28.004797816466123],
									[121.08428096759269, 28.00166284996061],
									[121.07450044194195, 27.99775910339997],
									[121.06641185312458, 27.990901470626397],
									[121.06163477942164, 27.989637612885588],
									[121.05797565025614, 27.99183285260409],
									[121.05423390846818, 27.987782955419107],
									[121.05139684688709, 27.987716079133804],
									[121.04297864394937, 27.98431587197996],
									[121.03831303132142, 27.984539270770767],
									[121.0386023522168, 27.989565015113385],
									[121.03682065045268, 27.99042761334374],
									[121.03733146177763, 27.992000221832825],
									[121.04406154190667, 27.994435549061393],
									[121.04606115839579, 27.996343731478078],
									[121.05151414905879, 27.997826457225244],
									[121.05917215327236, 28.00236654248198],
									[121.06002533470155, 28.00488412350353],
									[121.06404697878509, 28.003261327448342],
									[121.06707692156272, 28.003363132502614],
									[121.06979465479958, 28.00808405883231],
									[121.06932926193599, 28.00917947265458],
									[121.06693935406804, 28.008407712246196],
									[121.06767188964602, 28.009694014367312],
									[121.06903085878719, 28.010221036871428],
									[121.07025303924638, 28.010593403862572],
									[121.07268614425027, 28.01102862537084],
									[121.07356226468687, 28.009367227715416]
								]
							]
						]
					}
				}, {
					type: "Feature",
					properties: {
						adcode: 330324,
						name: "永嘉县",
						center: [120.690968, 28.153886],
						centroid: [120.662158, 28.330733],
						childrenNum: 0,
						level: "district",
						subFeatureIndex: 4,
						acroutes: [1e5, 33e4, 330300]
					},
					geometry: {
						type: "MultiPolygon",
						coordinates: [
							[
								[
									[120.96152499488267, 28.486282948199573],
									[120.96295479912476, 28.483798084514035],
									[120.96743869294141, 28.48350525356466],
									[120.96985303718793, 28.481173407726658],
									[120.96607536028966, 28.479358300645117],
									[120.96609238085875, 28.478359581029906],
									[120.96977073393225, 28.475493485735853],
									[120.96993532245722, 28.473807570762858],
									[120.96599458498213, 28.466483613428068],
									[120.96681605002073, 28.465403737192787],
									[120.96947641190695, 28.465990293917002],
									[120.97499405213387, 28.465958773578564],
									[120.97614336682295, 28.463036363637343],
									[120.97563439641033, 28.459105015983766],
									[120.97816428375472, 28.451870810989192],
									[120.9807745165308, 28.448163211063388],
									[120.98002028660699, 28.446245975171678],
									[120.97378101508184, 28.441174450840265],
									[120.97008540221964, 28.439655245892936],
									[120.96418929579943, 28.439483246954353],
									[120.96149567608461, 28.438413542051364],
									[120.96159449808772, 28.436773728125104],
									[120.9589336109974, 28.435078914360474],
									[120.95847425708132, 28.431193075999715],
									[120.9552707550414, 28.427890717782475],
									[120.95392375767528, 28.424926649445354],
									[120.95844200919146, 28.422402385561668],
									[120.96292654602337, 28.421719154415484],
									[120.96307419941479, 28.420267127026364],
									[120.95615851180594, 28.410695771992323],
									[120.95643908589511, 28.40563524816821],
									[120.95895187353017, 28.404114414548644],
									[120.9627304875221, 28.4038708466623],
									[120.96731328607939, 28.401156275441792],
									[120.96908656299456, 28.401104443915017],
									[120.97989193446529, 28.403870006695513],
									[120.98307715328804, 28.399237591641565],
									[120.98248635086452, 28.39761469845962],
									[120.9794490129616, 28.39668686790469],
									[120.98022051796261, 28.394263111353553],
									[120.9751802046028, 28.389263798985212],
									[120.97841534838972, 28.38656797323341],
									[120.97844841915924, 28.38411536013581],
									[120.96854697066624, 28.37903541275415],
									[120.96437547344942, 28.376016197989202],
									[120.95721320792325, 28.374096769550306],
									[120.95681854044335, 28.371535192794965],
									[120.95371386760098, 28.364261851103606],
									[120.96325904786681, 28.361254706139846],
									[120.96307880124573, 28.3586296039731],
									[120.96140324556336, 28.354399604957848],
									[120.95529273806949, 28.34689785884916],
									[120.95202320061026, 28.34146725500989],
									[120.94895043481483, 28.3402552647687],
									[120.94280350118072, 28.341346801613668],
									[120.93787159929491, 28.3397141768678],
									[120.93507666465644, 28.335186540026825],
									[120.93081783427567, 28.333224424367756],
									[120.92269175272224, 28.33232804220546],
									[120.91635566108494, 28.32963054731198],
									[120.91471030373759, 28.329928817361065],
									[120.91385381370264, 28.334023930659896],
									[120.91586173992744, 28.335554198167756],
									[120.91564757267736, 28.34080566425007],
									[120.90919378496528, 28.34460734855037],
									[120.90278801745308, 28.345828500185178],
									[120.89792823220216, 28.344532228179844],
									[120.89313420358064, 28.344125805661463],
									[120.88982166323922, 28.341952204530685],
									[120.88312911811443, 28.33572883032133],
									[120.88265197830617, 28.33364980279623],
									[120.88418512724184, 28.330306150408546],
									[120.88326201812765, 28.324553298795763],
									[120.88474628351423, 28.31869282441437],
									[120.89224651336599, 28.310801634088193],
									[120.89442226657445, 28.30411069874981],
									[120.89687813791579, 28.29244691988947],
									[120.89758677311113, 28.283079613833138],
									[120.8969940695207, 28.279639821220826],
									[120.89811423808169, 28.275996055173835],
									[120.89991060868772, 28.266971441179123],
									[120.8999112481057, 28.258243814800267],
									[120.8965351032125, 28.252174081668613],
									[120.89206987212697, 28.25085943561453],
									[120.88579005826466, 28.247040153380453],
									[120.88155362370082, 28.246865643534647],
									[120.87860165484256, 28.24400054828675],
									[120.87822303126791, 28.23466040715209],
									[120.8810101903681, 28.234020506241393],
									[120.88788490216655, 28.234212369405384],
									[120.894295663614, 28.230271266805573],
									[120.89652056747025, 28.21848952027517],
									[120.8972129618088, 28.21258950540141],
									[120.89172675648467, 28.210507678286774],
									[120.87900070741682, 28.206571953632817],
									[120.87524067341838, 28.20361172989749],
									[120.87430121103216, 28.197568721919026],
									[120.87233846944491, 28.193982704038604],
									[120.87129934868608, 28.193965633107553],
									[120.8637282774381, 28.18957464105688],
									[120.86283716260505, 28.187882427232296],
									[120.86361278380298, 28.18046415439727],
									[120.86156715619938, 28.17689130349089],
									[120.85240955945369, 28.164619269064076],
									[120.84848200064391, 28.159962659549137],
									[120.84057472234565, 28.1519165556046],
									[120.83689385117032, 28.146428554334364],
									[120.83166100105439, 28.1360201319236],
									[120.82969712272404, 28.13376128495537],
									[120.82731978647905, 28.12575315488425],
									[120.82484287280045, 28.1225062065962],
									[120.82018751963835, 28.117783014874306],
									[120.8170673946446, 28.113014724849734],
									[120.81028261774873, 28.09815073996475],
									[120.80820288245707, 28.0923333736863],
									[120.80686665896917, 28.086596360034036],
									[120.80430776129424, 28.085244722166237],
									[120.80458864744821, 28.080606676457023],
									[120.80665291529988, 28.07741392131544],
									[120.80678454906774, 28.072336546894178],
									[120.80510137792635, 28.07064038234779],
									[120.80863465326672, 28.066400113074792],
									[120.80827123093263, 28.06230894959839],
									[120.80932854857372, 28.059489487749715],
									[120.80797519300086, 28.054831460903245],
									[120.80335258325522, 28.049149608967355],
									[120.80300609965184, 28.046703686825765],
									[120.80005163697354, 28.045224494514855],
									[120.80160367437009, 28.043455859900064],
									[120.80132329903108, 28.041386105284573],
									[120.79866547952827, 28.03978246388965],
									[120.79921065484791, 28.03743203625953],
									[120.79655287401602, 28.036831636271074],
									[120.7981870393005, 28.033902867223617],
									[120.79493536777306, 28.032000402696497],
									[120.79328567749212, 28.029724528863994],
									[120.79318675746299, 28.02633789607711],
									[120.79191573302467, 28.024580721523137],
									[120.7859422255533, 28.02378808785005],
									[120.78490280352162, 28.02187342222072],
									[120.78164703288428, 28.018844425529892],
									[120.78129637282939, 28.018902063079793],
									[120.78063607259674, 28.020631074464575],
									[120.7738214732824, 28.02369785347321],
									[120.76678025740307, 28.02517282976231],
									[120.76320636238381, 28.027287244710635],
									[120.75819993008281, 28.02870917358956],
									[120.74409842460273, 28.03018224241663],
									[120.7396396398575, 28.031316518642484],
									[120.73297727148395, 28.034387469606088],
									[120.71654045597734, 28.03871524291418],
									[120.7029473777194, 28.03947591737972],
									[120.69414794407237, 28.042329549868896],
									[120.6786384581983, 28.040053963819446],
									[120.67395830173427, 28.041900039055633],
									[120.67315065837624, 28.0474456544934],
									[120.6754608152645, 28.05594205887894],
									[120.70102763181978, 28.0583465096837],
									[120.70561850089314, 28.063941955656787],
									[120.70751380951481, 28.069064617238325],
									[120.7062612769364, 28.076314806782932],
									[120.69440865483557, 28.08935403845817],
									[120.6925493478742, 28.098134517993685],
									[120.70119333280616, 28.10541355599088],
									[120.70099806750682, 28.11663866084558],
									[120.70265114283609, 28.119140625139778],
									[120.70902216414163, 28.12256264714847],
									[120.71828675233178, 28.1249999996503],
									[120.7220058437947, 28.1249999996503],
									[120.72401905083859, 28.12716746290812],
									[120.72388744315106, 28.130318045241665],
									[120.72113001383912, 28.132792949834823],
									[120.70794987638578, 28.140591859826543],
									[120.70247435590682, 28.14003682164207],
									[120.69932985299033, 28.13801574732895],
									[120.69631814936315, 28.138321756943583],
									[120.69610571870396, 28.14216887949027],
									[120.69926214213422, 28.152176260925728],
									[120.70462214919291, 28.161466718114582],
									[120.7058006522783, 28.162054657996123],
									[120.71002554854033, 28.15893304372503],
									[120.71839475641298, 28.15506684745708],
									[120.73449385131028, 28.154327512105056],
									[120.73814415902575, 28.156668543618423],
									[120.74089944345462, 28.16318047070223],
									[120.74460291819014, 28.16532552285463],
									[120.74381804476707, 28.166094660839974],
									[120.74301624340501, 28.166328430612623],
									[120.73881041996492, 28.16252720316794],
									[120.73584163198575, 28.15581607804961],
									[120.73132681857783, 28.154927253789765],
									[120.7181701660204, 28.156013369521418],
									[120.70982277390192, 28.162079811134447],
									[120.70505964778454, 28.162996053924815],
									[120.69756042967015, 28.152200102852532],
									[120.6945080757871, 28.14492785923335],
									[120.69451105614041, 28.139392256847202],
									[120.69667482408397, 28.1369009018552],
									[120.69896447642952, 28.136874556215844],
									[120.70806026456967, 28.139306068520284],
									[120.72229027777416, 28.129050254765502],
									[120.72052550304954, 28.126608849019192],
									[120.71107816722372, 28.125350355734383],
									[120.7012785669524, 28.11999046828555],
									[120.69910287849507, 28.11761426968286],
									[120.69810450062232, 28.11421477838934],
									[120.69853520393656, 28.10580730436368],
									[120.69504165614762, 28.103739619088174],
									[120.69018542771539, 28.09860801734618],
									[120.69070291560718, 28.091250538681493],
									[120.69245612594955, 28.087457537335524],
									[120.70478665857752, 28.073295354597008],
									[120.70336532594911, 28.065277338278577],
									[120.70116794134742, 28.060925364214256],
									[120.69654333600624, 28.060315013227353],
									[120.68697547933493, 28.06382167313177],
									[120.67939376820789, 28.061797857685008],
									[120.67396605029307, 28.0582950118054],
									[120.66928863496264, 28.050415873293957],
									[120.66699063780777, 28.04902756197248],
									[120.66761934755493, 28.045878172139965],
									[120.66473150215711, 28.042419075579915],
									[120.66299736463668, 28.03630375851168],
									[120.65992116972632, 28.034932613449428],
									[120.6568421122737, 28.034790277749153],
									[120.65462911094482, 28.03690707680022],
									[120.64729785920895, 28.03909027549588],
									[120.62128615343329, 28.035396933421794],
									[120.62290310839182, 28.0337549449348],
									[120.61980724350951, 28.03237545506323],
									[120.61383736120536, 28.032860517898655],
									[120.60762476896798, 28.03489553889807],
									[120.60461711858522, 28.03784894936956],
									[120.60018503651031, 28.04420244738509],
									[120.5992794039214, 28.04691255077364],
									[120.59794163719687, 28.065184474284138],
									[120.60087347023455, 28.067980051038603],
									[120.60169756399148, 28.071978926985935],
									[120.60164105868796, 28.075517058665355],
									[120.60083687322322, 28.077007770392356],
									[120.6023266316688, 28.079708814909907],
									[120.6023192401409, 28.08354401604356],
									[120.59991705382902, 28.088856458858515],
									[120.59440803540258, 28.096951007483085],
									[120.59238827230104, 28.102481961273554],
									[120.59047091050422, 28.105157851753518],
									[120.58593750001569, 28.108537912294878],
									[120.578528761793, 28.111255645531685],
									[120.56814551320497, 28.10952544254519],
									[120.56616342090524, 28.10996961590513],
									[120.56338465247984, 28.112518549091817],
									[120.56165206449123, 28.115593552400583],
									[120.56053423866422, 28.119619250627977],
									[120.56121683129174, 28.12616765511325],
									[120.55832088030445, 28.132179379274987],
									[120.55865252059743, 28.138581156495206],
									[120.55476760853833, 28.14199054212986],
									[120.55122745068638, 28.143106580104643],
									[120.54478967180592, 28.142649412440505],
									[120.53371095679529, 28.144244313324464],
									[120.51519525046047, 28.138143300872684],
									[120.50877892940412, 28.13766694077674],
									[120.49268925220724, 28.14037537592293],
									[120.48815274265496, 28.145091772367437],
									[120.48345756571416, 28.147265553362672],
									[120.47627186745274, 28.14687061338816],
									[120.47167634978382, 28.147817850413503],
									[120.46636724435291, 28.14518892792671],
									[120.46533450338472, 28.14286751962038],
									[120.46510817190472, 28.142655873170042],
									[120.46469720421271, 28.141434991331835],
									[120.46367096894016, 28.13912820780058],
									[120.46237492536261, 28.138457774906442],
									[120.45761001139294, 28.140295267013016],
									[120.45444166654977, 28.142859458996895],
									[120.44889044743627, 28.150492549291755],
									[120.43796336621642, 28.160310864454857],
									[120.4318463800065, 28.16098606555454],
									[120.41594111958705, 28.15905475617211],
									[120.41511014511718, 28.15980746983894],
									[120.41717089122369, 28.163285724656532],
									[120.41550429638619, 28.165663482683613],
									[120.41446454160541, 28.16981190689404],
									[120.41162677945238, 28.17129705991141],
									[120.40925069146635, 28.17569493986963],
									[120.41098231987826, 28.180205081299505],
									[120.41767991559573, 28.18590822558417],
									[120.42583378350241, 28.186933945545206],
									[120.42665913541089, 28.190019091407976],
									[120.42436338835978, 28.195322430385886],
									[120.42225050405762, 28.19677507470999],
									[120.42076577462092, 28.199465576475234],
									[120.41230017651196, 28.20288659663919],
									[120.40967717696026, 28.201492033230807],
									[120.40768197524301, 28.202336091937127],
									[120.40781371692958, 28.2074382435801],
									[120.40962716026525, 28.213949201194737],
									[120.41135893526666, 28.216986199153837],
									[120.41716659156498, 28.219087460617857],
									[120.42343705607539, 28.229812723178668],
									[120.43107957216455, 28.237113609305652],
									[120.43405212920243, 28.237571143893206],
									[120.43391964827322, 28.239902895302407],
									[120.43152474197336, 28.247424058673403],
									[120.42909740252321, 28.250095504703836],
									[120.42455752770775, 28.25018366524398],
									[120.42018381882826, 28.25136785204478],
									[120.41701444965724, 28.256917732967054],
									[120.42038130815092, 28.262207657657314],
									[120.42204772312402, 28.26732416248018],
									[120.42203039858407, 28.271155951585968],
									[120.41907569129023, 28.281771337677128],
									[120.41737575678576, 28.285835517894895],
									[120.41410888851442, 28.28880469797849],
									[120.41262371211474, 28.29193043564112],
									[120.4122267576588, 28.297824703847084],
									[120.40973517244026, 28.305984521668393],
									[120.40414449737068, 28.308062070708047],
									[120.39835732762867, 28.309046115186106],
									[120.39494447780544, 28.311563049595122],
									[120.39054361389674, 28.31856729344588],
									[120.37550253091717, 28.32006245951493],
									[120.37326259219492, 28.32067351826828],
									[120.36805930908986, 28.328244244176574],
									[120.36896439668965, 28.331682776838704],
									[120.36768016480778, 28.33370000475145],
									[120.36553977653955, 28.3344215038494],
									[120.3598439419444, 28.334413071805898],
									[120.35393549412777, 28.33195316790443],
									[120.34322282657229, 28.335784555912596],
									[120.34207128426237, 28.33753636690983],
									[120.35087340328505, 28.341491781320713],
									[120.35521791117776, 28.346438222546],
									[120.35635345634705, 28.34898412861469],
									[120.35530042487483, 28.351517342551347],
									[120.35497037997914, 28.356877015961572],
									[120.35574342821667, 28.358000657704224],
									[120.35543042817176, 28.362486402325658],
									[120.35360312268608, 28.36750437562648],
									[120.34907740769631, 28.370324196304693],
									[120.34494774334371, 28.371127081349755],
									[120.33756012569927, 28.370844375867307],
									[120.33028763206858, 28.37449734197878],
									[120.33099527621107, 28.378245307974623],
									[120.32992541302747, 28.3844021620302],
									[120.33063209759325, 28.38761918537716],
									[120.33540385630295, 28.38921888774155],
									[120.34028929831254, 28.39550462094155],
									[120.33964802593573, 28.397880279950982],
									[120.33785454035478, 28.398711377628047],
									[120.33517252099512, 28.3979505053116],
									[120.33324732250594, 28.3986569587517],
									[120.32974326613885, 28.40277169345893],
									[120.32852565513497, 28.4086296992013],
									[120.32730734086113, 28.41072554404866],
									[120.32845938319406, 28.413439712372906],
									[120.33441428369235, 28.415489964290487],
									[120.3353357533424, 28.41765872527003],
									[120.33298298387763, 28.421020314635882],
									[120.33382159179314, 28.422861285320096],
									[120.33378807046313, 28.43023148399584],
									[120.33679836844999, 28.4336289904856],
									[120.33938152623648, 28.435013887081254],
									[120.34385641604081, 28.43307039458307],
									[120.35160741734853, 28.432823381393973],
									[120.36230536030416, 28.42737393046258],
									[120.36084103648466, 28.42358187790137],
									[120.3649077887635, 28.418173820065817],
									[120.36988038227389, 28.413888947117243],
									[120.37225085039654, 28.414651242161142],
									[120.37236652299669, 28.418008322326273],
									[120.37384734577847, 28.422769684873117],
									[120.37724036195323, 28.428653123442928],
									[120.37630044181196, 28.432463949351813],
									[120.37657979012522, 28.43934787380539],
									[120.37305605659185, 28.444706693758974],
									[120.36967992159111, 28.447191558343775],
									[120.36770409666678, 28.450051007647915],
									[120.36757189182936, 28.453938042106984],
									[120.37363054351488, 28.46015865989426],
									[120.3798729042112, 28.461932739004737],
									[120.38039913980856, 28.4699548805134],
									[120.37950917880562, 28.47253072950963],
									[120.38053075558992, 28.47446435644497],
									[120.38082626741834, 28.479801417301644],
									[120.38334660216401, 28.482530853416222],
									[120.38524163019713, 28.480141554389263],
									[120.38479692623719, 28.47664693370905],
									[120.3858520153583, 28.474991905951754],
									[120.38998741828482, 28.47397547149086],
									[120.39218032696056, 28.468606522473067],
									[120.39460316710256, 28.46812220157841],
									[120.39841042989747, 28.475316698806637],
									[120.39839330500706, 28.47679922040777],
									[120.39471738999566, 28.478655831201706],
									[120.39483224781009, 28.481059028351524],
									[120.39796444979959, 28.48467962426531],
									[120.40157484290478, 28.48347832606396],
									[120.4068508910558, 28.48934683408919],
									[120.4128384189579, 28.492563928482582],
									[120.41473575285272, 28.49492146075687],
									[120.41051200412574, 28.499879930414522],
									[120.41049477581328, 28.51538623808449],
									[120.41465161228211, 28.52092685688899],
									[120.41669744313253, 28.521879118426625],
									[120.41776979114297, 28.52518676195956],
									[120.41550922646968, 28.5283516192319],
									[120.41846233836634, 28.531862746968272],
									[120.41917128922364, 28.53398455884036],
									[120.41831373529067, 28.536635684689145],
									[120.41979803754941, 28.537306817255853],
									[120.42435399134365, 28.53654804935303],
									[120.4262524970552, 28.537547960569952],
									[120.42777014347735, 28.541932123168976],
									[120.42790217564493, 28.544927052641413],
									[120.42580578490913, 28.548525836398255],
									[120.42669725137716, 28.55181756103167],
									[120.42975105047071, 28.556779534448026],
									[120.42956849888719, 28.55896232485145],
									[120.4258045384488, 28.564507893524535],
									[120.42628293730775, 28.571196484330358],
									[120.4318460229756, 28.5763478153994],
									[120.43747808214789, 28.57635690304869],
									[120.438121078525, 28.58387151665721],
									[120.43909536805688, 28.585650401744715],
									[120.44195358798777, 28.587354867033525],
									[120.4488928153512, 28.58724398152458],
									[120.4545777663509, 28.588955913884377],
									[120.46223043218879, 28.589098559850697],
									[120.4675866216254, 28.590048124321527],
									[120.47337449103998, 28.58512333247586],
									[120.47716129875505, 28.58447934954239],
									[120.4780052486434, 28.5864148515642],
									[120.48030369276125, 28.587013203796346],
									[120.485562585445, 28.583974062752873],
									[120.48928386945511, 28.580929550958047],
									[120.49234493417146, 28.574921487936365],
									[120.49634751082897, 28.569929769443377],
									[120.49423059756407, 28.568286159478703],
									[120.49527279940025, 28.56506273026082],
									[120.4973899752672, 28.563197912253884],
									[120.5042701522458, 28.560489673159964],
									[120.50828901832358, 28.56206085802222],
									[120.51467258697039, 28.559085673165328],
									[120.51885549388601, 28.558957532364275],
									[120.52465904747714, 28.551644525174765],
									[120.53148653047901, 28.549884910760056],
									[120.53715519025991, 28.546654960558044],
									[120.54516951126402, 28.5369106191298],
									[120.55070339774363, 28.539307503038913],
									[120.5524545720209, 28.539264719591188],
									[120.55541049969486, 28.536508972910838],
									[120.56386352887887, 28.53525818861459],
									[120.56531588811777, 28.53794297878551],
									[120.56825251993791, 28.540847311454286],
									[120.57087643410023, 28.54144189822506],
									[120.57571098077722, 28.538951341831023],
									[120.57938935723314, 28.534181942043062],
									[120.58189571831281, 28.533840544105885],
									[120.58479783055554, 28.536289896261735],
									[120.59483629795682, 28.537352201542944],
									[120.61056822754176, 28.53744015254108],
									[120.61465162717093, 28.536142493781142],
									[120.62033164089257, 28.536745798579773],
									[120.62354105057909, 28.539720009470898],
									[120.62319461463983, 28.55077678102367],
									[120.62082392258606, 28.55333632980785],
									[120.61753148748824, 28.560512565402632],
									[120.62075737455325, 28.561646780474575],
									[120.62218969689707, 28.56432702097527],
									[120.62730754980362, 28.56734550998732],
									[120.62931513698402, 28.565066893222593],
									[120.63270451270319, 28.564469448406385],
									[120.63602782692271, 28.561189984230452],
									[120.64563349918672, 28.566320073312795],
									[120.64405507118465, 28.569034549205128],
									[120.64402188260385, 28.57234010541157],
									[120.63576281560154, 28.580256734860484],
									[120.63605922765134, 28.58206443872291],
									[120.64291895674455, 28.583502786524434],
									[120.64900376251364, 28.5883239899602],
									[120.65584486574801, 28.58723604590682],
									[120.65783514007967, 28.584957406659043],
									[120.66520157419336, 28.582885388449995],
									[120.67098966574054, 28.585290159413375],
									[120.67562630760813, 28.585141397157827],
									[120.68325614865239, 28.58571990944631],
									[120.68585387725466, 28.589268520925543],
									[120.69146234900825, 28.590209262147766],
									[120.69312329070738, 28.591126018451064],
									[120.69690632666573, 28.595982480706994],
									[120.69698765685496, 28.603010888441815],
									[120.69795782029723, 28.60562804599755],
									[120.69787566003379, 28.609570190911654],
									[120.70182287712419, 28.61409884758382],
									[120.70499794619832, 28.614686962833105],
									[120.70968742863204, 28.612436832094204],
									[120.71450855832336, 28.60861297141156],
									[120.71753718539287, 28.607300354228016],
									[120.72522387887898, 28.60695055932092],
									[120.72879712099041, 28.60838229260878],
									[120.73217178020354, 28.612353294968614],
									[120.73551507825835, 28.614112842833492],
									[120.73936979018379, 28.614750241830222],
									[120.74543222711566, 28.612942296949484],
									[120.74798669383097, 28.60896836639705],
									[120.75115028935443, 28.608781867689117],
									[120.75368815818206, 28.607458134885064],
									[120.75258512890059, 28.6030160658388],
									[120.75260145069649, 28.59884013496429],
									[120.75457945467815, 28.594756686771746],
									[120.75632723041736, 28.594383479813814],
									[120.76038232208657, 28.596006544766283],
									[120.76729059748311, 28.596026063651948],
									[120.77284943385439, 28.5924466449967],
									[120.7788045223109, 28.593715332996283],
									[120.78093252061944, 28.591831758728745],
									[120.78335823049804, 28.588125564443317],
									[120.7868896559329, 28.586617978736797],
									[120.7895308334812, 28.586964538782468],
									[120.79463008391133, 28.591991793986153],
									[120.79651155196666, 28.590295581775706],
									[120.7971228940064, 28.587117082687257],
									[120.79415219946452, 28.579365036367392],
									[120.79851030240854, 28.57544380159021],
									[120.80712694884971, 28.573619376632962],
									[120.82178835424918, 28.56960821055054],
									[120.82322545469106, 28.56836447963707],
									[120.82444730240115, 28.564468527500594],
									[120.82519027551086, 28.55885740454562],
									[120.82971501473617, 28.55465673601958],
									[120.83802037613953, 28.548793568168662],
									[120.83915885579665, 28.545847862189135],
									[120.8370628742523, 28.543256156346615],
									[120.83404225744425, 28.536638343085144],
									[120.83055833689775, 28.533497140680538],
									[120.82907243114789, 28.53118628591841],
									[120.82865982039448, 28.52787882494789],
									[120.83401035039742, 28.521088442577593],
									[120.83817074638296, 28.520955098299225],
									[120.84104366303472, 28.517497564760845],
									[120.84482393447706, 28.517130303220995],
									[120.85033688473948, 28.51866791818992],
									[120.85688936854956, 28.512360429490286],
									[120.85725315960565, 28.509475032946455],
									[120.85642810537286, 28.505948111316343],
									[120.85728569347998, 28.50295445618326],
									[120.86000914190845, 28.499510568957646],
									[120.86274821695667, 28.49829670183135],
									[120.86555331663237, 28.494556583319707],
									[120.87889664686281, 28.492275876530528],
									[120.88324965424817, 28.49249782021826],
									[120.88654656347319, 28.489956487202164],
									[120.89053603970649, 28.488959406151707],
									[120.90047108687122, 28.489943063921316],
									[120.90686133298414, 28.49257850019768],
									[120.90905074959244, 28.49558846363675],
									[120.91046645786082, 28.49937937226025],
									[120.91367664096424, 28.501217667461447],
									[120.92366536776262, 28.508384720078823],
									[120.92665981879566, 28.508911858595468],
									[120.93100251365513, 28.508546984755583],
									[120.93545912743684, 28.507354426165875],
									[120.94076985884192, 28.50681423039248],
									[120.9445173275127, 28.50404594716281],
									[120.9491029535385, 28.502366926392597],
									[120.95072963916164, 28.502784183942993],
									[120.95243872876438, 28.506789859664366],
									[120.95013767211594, 28.509977876278015],
									[120.95043370914846, 28.5123633316025],
									[120.95618368742726, 28.51423828496894],
									[120.95777812785843, 28.51350067721455],
									[120.9581233820885, 28.50997414049425],
									[120.95694000557683, 28.50762190972341],
									[120.95679276857152, 28.50312890127782],
									[120.95365502675816, 28.498160149671207],
									[120.9540330837599, 28.49670777784172],
									[120.95754922611593, 28.49443713536556],
									[120.95820649023744, 28.491954376992965],
									[120.96152499488267, 28.486282948199573]
								]
							]
						]
					}
				}, {
					type: "Feature",
					properties: {
						adcode: 330326,
						name: "平阳县",
						center: [120.564387, 27.6693],
						centroid: [120.380537, 27.633857],
						childrenNum: 0,
						level: "district",
						subFeatureIndex: 5,
						acroutes: [1e5, 33e4, 330300]
					},
					geometry: {
						type: "MultiPolygon",
						coordinates: [
							[
								[
									[121.07246799300356, 27.436967330777748],
									[121.07790815843487, 27.43483901051195],
									[121.08244454837723, 27.43485236184705],
									[121.08347654380748, 27.434153914171873],
									[121.08577085643992, 27.43162053835721],
									[121.08585119737495, 27.43064325947887],
									[121.08586823952771, 27.42827391640816],
									[121.08183312449921, 27.426949143088507],
									[121.08022002583357, 27.427289809876868],
									[121.07888455058162, 27.428372074711547],
									[121.0756529573182, 27.431815028440838],
									[121.0705487732074, 27.434914946567574],
									[121.07209977368564, 27.43658453255017],
									[121.07246799300356, 27.436967330777748]
								]
							],
							[
								[
									[121.11820844666249, 27.46870460543323],
									[121.11769778552446, 27.468316700855098],
									[121.1147191526668, 27.46844637410095],
									[121.11363196404398, 27.466922402746718],
									[121.10881515559504, 27.466440979467677],
									[121.10839889179545, 27.466480079292296],
									[121.10592353304469, 27.468005656835658],
									[121.10684061040592, 27.471380949171532],
									[121.10296022913133, 27.475916624152944],
									[121.10437977300819, 27.477149725079812],
									[121.11185514919589, 27.47474944623002],
									[121.11494149475425, 27.473003085124333],
									[121.1164254732571, 27.472049652669398],
									[121.1166870473694, 27.471779635721646],
									[121.11820844666249, 27.46870460543323]
								]
							],
							[
								[
									[121.06868183100175, 27.478921829279045],
									[121.06966531250418, 27.477992057987137],
									[121.07072379117005, 27.47831283536908],
									[121.07170150172294, 27.47813066509815],
									[121.07607555414359, 27.47577786415718],
									[121.0798884601844, 27.475330737423633],
									[121.08123325241274, 27.473156086784],
									[121.08052325204653, 27.47203934194215],
									[121.08252406103668, 27.470801949450447],
									[121.08451330654395, 27.466159104958763],
									[121.08699214477167, 27.463553547758067],
									[121.08995032344876, 27.462833404837795],
									[121.09284238306964, 27.46365614061847],
									[121.0941994897147, 27.46370868081101],
									[121.09883534917208, 27.458333372687036],
									[121.10056206998365, 27.458481765321267],
									[121.10111136419812, 27.457891518678707],
									[121.10134163830605, 27.45693195554537],
									[121.10124075415752, 27.456078529500587],
									[121.09907496004143, 27.454343557409288],
									[121.09999084490164, 27.451846123000223],
									[121.10555255370741, 27.44783532653912],
									[121.10577505137758, 27.447795033314208],
									[121.10311342774253, 27.447042539981283],
									[121.10226187678427, 27.447338175016796],
									[121.10106523707111, 27.447900413173556],
									[121.10048055633263, 27.449650644961366],
									[121.09713261687682, 27.44974814586027],
									[121.09704260373326, 27.44979043827817],
									[121.09685535319204, 27.4499482674986],
									[121.09659004239666, 27.452165961489982],
									[121.09351944936316, 27.455042720045526],
									[121.08950412301692, 27.456110954556948],
									[121.08574640747077, 27.460172653545158],
									[121.08281815013754, 27.461159944575854],
									[121.08228135110357, 27.461056351669356],
									[121.08523130458116, 27.457442522254667],
									[121.08868503578583, 27.45487785363008],
									[121.0882778623336, 27.453823960607338],
									[121.08579148958563, 27.453920253716774],
									[121.08566746678025, 27.453966519339474],
									[121.08418095128991, 27.455888152016655],
									[121.08210203528074, 27.45529656808219],
									[121.08177405702713, 27.45541891724929],
									[121.06520699450721, 27.46290987688934],
									[121.06445395978244, 27.46398162864932],
									[121.06074905422554, 27.465364217584636],
									[121.05974137826206, 27.465141772974505],
									[121.05764734734726, 27.461956859021882],
									[121.05987106859504, 27.460306389028688],
									[121.06087805297977, 27.458990572956623],
									[121.06127977384256, 27.456852555301225],
									[121.06653800012862, 27.4507379352076],
									[121.06724953923492, 27.44898760719235],
									[121.06760944611915, 27.447955892350592],
									[121.06721543694289, 27.447616567350735],
									[121.0660408737873, 27.447044611119964],
									[121.0606245412896, 27.44939369426362],
									[121.05945461054193, 27.45058184797398],
									[121.05758130563277, 27.453683257176635],
									[121.05420625251656, 27.4551850557458],
									[121.0524110798076, 27.458109378545032],
									[121.05047317929382, 27.458284875846402],
									[121.04790166413056, 27.459365677484072],
									[121.04610514603576, 27.460402607494416],
									[121.04427111182247, 27.46282982823402],
									[121.04831314083879, 27.46797895416546],
									[121.05440080195547, 27.465107560065917],
									[121.05554056134793, 27.465787052730377],
									[121.05263102070512, 27.475903629848688],
									[121.05147743243765, 27.476105451205683],
									[121.05239892007421, 27.477584958279238],
									[121.0593519214541, 27.476841450072925],
									[121.06480360000614, 27.473503350998897],
									[121.06790113492946, 27.473363757331583],
									[121.06753444715707, 27.475276947173427],
									[121.06853067834822, 27.475891828944782],
									[121.06172143719459, 27.478767394100032],
									[121.06129637442825, 27.479781898615784],
									[121.06237244563192, 27.48060774784932],
									[121.06223935676098, 27.481141451416875],
									[121.06256816239079, 27.481434275171694],
									[121.06505134884071, 27.48128281315138],
									[121.06528001855804, 27.48121957102643],
									[121.06868183100175, 27.478921829279045]
								]
							],
							[
								[
									[121.06294642353873, 27.482599657148512],
									[121.06200051391261, 27.482099245583754],
									[121.06191360972537, 27.4824477436685],
									[121.05799066983366, 27.482937574709354],
									[121.05337142445171, 27.486397595772473],
									[121.05361816244829, 27.486795981949058],
									[121.055632550302, 27.48693571770923],
									[121.05837442583913, 27.486781097269898],
									[121.0610056101209, 27.48556419043507],
									[121.06294642353873, 27.482599657148512]
								]
							],
							[
								[
									[121.09109294448388, 27.495741009539984],
									[121.09005391635526, 27.494003415025645],
									[121.09392982170402, 27.493194315665164],
									[121.09355730992195, 27.49279847277137],
									[121.0888701675243, 27.492693543472285],
									[121.09170823994339, 27.49083359349561],
									[121.09028478491496, 27.489320985974757],
									[121.0894620833086, 27.489513654931272],
									[121.08457152865321, 27.491673101632387],
									[121.08222132945082, 27.494322930658768],
									[121.08214414153895, 27.49553847322204],
									[121.08282101178031, 27.496056676074772],
									[121.08323085352117, 27.495210647853185],
									[121.08431982999628, 27.49663305247344],
									[121.09096641346923, 27.496425474556077],
									[121.09123966797631, 27.49619089179629],
									[121.09109294448388, 27.495741009539984]
								]
							],
							[
								[
									[120.54994523508458, 27.594769954669744],
									[120.55033403808545, 27.594087078755706],
									[120.54942404918063, 27.59488841606759],
									[120.54994523508458, 27.594769954669744]
								]
							],
							[
								[
									[120.68301984728816, 27.646496723944722],
									[120.6768524019169, 27.63151040787909],
									[120.64941359975785, 27.595478134808104],
									[120.6474536856391, 27.59321669509444],
									[120.62680506620086, 27.58755834244357],
									[120.61460010680958, 27.592345169294163],
									[120.60699655384792, 27.595327308608432],
									[120.60666000865251, 27.594838023456077],
									[120.60344016593092, 27.59276330458289],
									[120.59500384345267, 27.593997240080625],
									[120.58414924129454, 27.591994404917898],
									[120.57723224157473, 27.58833944770737],
									[120.57091224150679, 27.58287584774223],
									[120.56666195378625, 27.58070850409422],
									[120.55997705469736, 27.582216858721097],
									[120.55632054795501, 27.587455153332712],
									[120.5559313294674, 27.591109156362506],
									[120.55183243721729, 27.595904946755923],
									[120.54725933065367, 27.59765624963626],
									[120.54537260516167, 27.59765624963626],
									[120.54140365145736, 27.596200465778907],
									[120.53737902612124, 27.593420744072148],
									[120.53526580367395, 27.59001600703317],
									[120.53251993694562, 27.588469624573577],
									[120.52682864662484, 27.58849990384755],
									[120.51700055583103, 27.591166019596187],
									[120.51340460763663, 27.590622663605075],
									[120.51091110686218, 27.58935117691533],
									[120.5076713558484, 27.586323976170604],
									[120.50706055160322, 27.583873110455727],
									[120.50688922535755, 27.583584623231843],
									[120.50694065848461, 27.58339203701297],
									[120.50677645217161, 27.58273315411185],
									[120.50723504975781, 27.580802440979937],
									[120.51001477236389, 27.575732946418384],
									[120.51122299264705, 27.575592526274136],
									[120.51123974072152, 27.57556934085244],
									[120.5118682580138, 27.57229716837969],
									[120.50821321806563, 27.56820951945383],
									[120.5029709430546, 27.5663050071704],
									[120.50032499999884, 27.56702109774551],
									[120.49830688805253, 27.574429022081745],
									[120.49666949689981, 27.577651111309763],
									[120.49346119248014, 27.580805495077584],
									[120.48939180069112, 27.58205332330226],
									[120.48193412406067, 27.580331268173552],
									[120.47472376099279, 27.5813175528628],
									[120.47953675541703, 27.57416928978097],
									[120.48677988258555, 27.570239544719243],
									[120.49053442802153, 27.56381177529323],
									[120.48459753824591, 27.559401183417947],
									[120.48418430875893, 27.55521202801276],
									[120.48502869032188, 27.55193957764942],
									[120.48393692414982, 27.547937443458295],
									[120.4802333325024, 27.54668264728639],
									[120.47796686737706, 27.549070052341108],
									[120.47188190692452, 27.55050085483066],
									[120.4607875868777, 27.55728937110763],
									[120.4474679142129, 27.54403283264918],
									[120.44272698786028, 27.543881295085725],
									[120.44046300936043, 27.54543599087833],
									[120.43463274050862, 27.54758287135246],
									[120.43073573526601, 27.552977792790955],
									[120.4301081217925, 27.55688082528991],
									[120.43088362338062, 27.55866091636824],
									[120.4279443160774, 27.56205777534609],
									[120.42601355078477, 27.56214928136427],
									[120.42142473576303, 27.55665007723934],
									[120.4192962931894, 27.55622295052882],
									[120.41861911717854, 27.557780290328196],
									[120.42025232738308, 27.562867797410945],
									[120.41926251555276, 27.565857804893824],
									[120.41304142562137, 27.568560716403965],
									[120.40989049435086, 27.570573801140085],
									[120.40571828577038, 27.569957968785275],
									[120.40339338719514, 27.568587292269797],
									[120.39778770244061, 27.56775263777405],
									[120.38801373554554, 27.567659760289757],
									[120.38593751480448, 27.569675717460427],
									[120.38267575558177, 27.570134589339887],
									[120.36729399771991, 27.568794818925824],
									[120.36324467969825, 27.563966929929904],
									[120.35889911959873, 27.559910956025874],
									[120.35450499071283, 27.55798153791767],
									[120.34477911326553, 27.557446586990466],
									[120.33861005810775, 27.55221470184705],
									[120.33094343029518, 27.55033904161354],
									[120.32085855158095, 27.550878293098776],
									[120.31442523693522, 27.54870155513271],
									[120.30758134310452, 27.543203347456597],
									[120.29800527742168, 27.534827279555373],
									[120.28742270759199, 27.5311907755339],
									[120.28035948530203, 27.529200217915786],
									[120.2741520434821, 27.529081251098887],
									[120.2678600132291, 27.531339026075216],
									[120.26245635127964, 27.534664858396525],
									[120.25911086067777, 27.53803667035612],
									[120.25345730680931, 27.538983953246884],
									[120.2454618832594, 27.538560185504195],
									[120.23226786117289, 27.53328209229477],
									[120.22565109742027, 27.53685192057975],
									[120.22061768096125, 27.537005808071626],
									[120.22127827707084, 27.5311325965921],
									[120.20856626642012, 27.52992189687808],
									[120.19001791739299, 27.527075215249056],
									[120.18801946552594, 27.52784377317164],
									[120.18938964831364, 27.53483786457582],
									[120.18669713926158, 27.537415144393435],
									[120.17544445040107, 27.536875811069876],
									[120.1710657062174, 27.537780594698745],
									[120.17061953366465, 27.53612680800586],
									[120.17375989160576, 27.53284080665793],
									[120.17053785723635, 27.528677918651056],
									[120.16809178940457, 27.52796434258039],
									[120.16510099411562, 27.528998669952728],
									[120.15910227954657, 27.53282930342965],
									[120.14799870727461, 27.533927230857046],
									[120.14447989393204, 27.536488135818843],
									[120.14292648956587, 27.539524456588424],
									[120.14249582492243, 27.546310567178978],
									[120.14000212269991, 27.548022494142856],
									[120.12573164899652, 27.547498251443187],
									[120.121025521011, 27.549287797993543],
									[120.11465292049593, 27.55413155192963],
									[120.1076061899737, 27.55563744691068],
									[120.10491641036413, 27.554471037008796],
									[120.10229417343737, 27.551572978010597],
									[120.0926276800235, 27.558278271924735],
									[120.0914736636787, 27.559900330535868],
									[120.0957280936766, 27.562183298220702],
									[120.09523350342351, 27.563820242410316],
									[120.09198445611787, 27.567614215923356],
									[120.09404482720709, 27.5717231419095],
									[120.09132474943772, 27.570337259656867],
									[120.08847184180217, 27.570416729148803],
									[120.08646108810876, 27.56596230341762],
									[120.08423577236306, 27.570324097179366],
									[120.07935751054072, 27.570090673645723],
									[120.07729741644266, 27.5689580890446],
									[120.07574961845023, 27.566393290018368],
									[120.0743986964427, 27.56669341087229],
									[120.074744576601, 27.567795109157032],
									[120.07194381255692, 27.57059964046107],
									[120.06995001288283, 27.575245657760945],
									[120.06901099566096, 27.57976468089538],
									[120.07171180905277, 27.584294891596016],
									[120.07428128725167, 27.585111522778618],
									[120.07815341005187, 27.582637486031217],
									[120.08143279418812, 27.584523471381146],
									[120.08400366813487, 27.583484213026054],
									[120.08580060891109, 27.58102750171787],
									[120.08876819719455, 27.58108966825364],
									[120.09102658011261, 27.58267930540569],
									[120.09557792128408, 27.588518288688135],
									[120.09745712034987, 27.597065645962857],
									[120.09889157318764, 27.598088946747566],
									[120.10898903791383, 27.598093351626915],
									[120.11440154019897, 27.60530552503002],
									[120.1136420195636, 27.607601951968547],
									[120.11398832689986, 27.611536344726574],
									[120.11081971405861, 27.61433498996786],
									[120.10847573906415, 27.61763853888749],
									[120.10171104762685, 27.62166340704067],
									[120.10100085480565, 27.625911335839533],
									[120.10248525778843, 27.631498086267698],
									[120.10235245220395, 27.639758427609422],
									[120.10088418755527, 27.64570523780651],
									[120.10319386780282, 27.64834821579757],
									[120.10358916570749, 27.651211544777027],
									[120.10649309637938, 27.652409016363038],
									[120.11139387003118, 27.650571031428],
									[120.11720383578847, 27.6555472078374],
									[120.11926757483877, 27.658915443193223],
									[120.11946463698348, 27.663178924867566],
									[120.11710387254573, 27.6655987711664],
									[120.11206956126125, 27.669275750075883],
									[120.1130929807565, 27.67358585890031],
									[120.11548581951502, 27.67910828981576],
									[120.12147787730225, 27.6869468437219],
									[120.12360720031211, 27.68878939181701],
									[120.12669487147116, 27.68986220747496],
									[120.12998154820991, 27.687979323886736],
									[120.12912276850102, 27.685099937512177],
									[120.1366873385499, 27.682390491527997],
									[120.13886802184174, 27.681025748739387],
									[120.14020644057484, 27.681829929707533],
									[120.14421969937973, 27.687214936120483],
									[120.14659916881669, 27.68732897824981],
									[120.151605334019, 27.68434950002944],
									[120.15581898425876, 27.68880749427052],
									[120.1594704925692, 27.68908225604133],
									[120.16712204594569, 27.685510301759052],
									[120.17308741545196, 27.685537515244164],
									[120.17934908459267, 27.690109496755895],
									[120.1853639860592, 27.69008930247935],
									[120.18889950700668, 27.692139613752204],
									[120.19111219896888, 27.695398639036],
									[120.19084831000157, 27.697867418346732],
									[120.19464719021573, 27.699178772882135],
									[120.20064325178475, 27.699109013370332],
									[120.20619189523984, 27.704668334476082],
									[120.20754592170704, 27.704953145271475],
									[120.2160988233021, 27.704255135566086],
									[120.21859136809724, 27.70655386386977],
									[120.22045675447566, 27.706445600783923],
									[120.22116574310462, 27.709936572015238],
									[120.22463132917255, 27.7131467434275],
									[120.22859228610514, 27.714706652589996],
									[120.22941634298991, 27.71638932550701],
									[120.22713957163398, 27.722205477700697],
									[120.2276340737535, 27.72541314719905],
									[120.23589968692113, 27.729441797900677],
									[120.24069845496979, 27.73260343470082],
									[120.24755779645523, 27.73362488288211],
									[120.24862965343584, 27.73099948303974],
									[120.24924040012445, 27.72574883264258],
									[120.25222395766957, 27.72493014471047],
									[120.25690550628417, 27.725243560242177],
									[120.27153498844905, 27.732119121000665],
									[120.27701790405308, 27.73925022501794],
									[120.28045972553593, 27.739529201011862],
									[120.28546403183964, 27.737432450547203],
									[120.28898707109647, 27.734440123712773],
									[120.29432107425828, 27.727735254278628],
									[120.30353749745757, 27.720220018339205],
									[120.30649846133497, 27.721472884566026],
									[120.30959199157724, 27.724139540807187],
									[120.30950855787376, 27.731466484790474],
									[120.31016634899788, 27.73523769376459],
									[120.31212442760034, 27.73704226978498],
									[120.3178500675267, 27.73685846544589],
									[120.32062987197105, 27.737434230305553],
									[120.3248412469261, 27.74113659257972],
									[120.32403520436128, 27.74458053646265],
									[120.32184722486954, 27.74826316041657],
									[120.32268581120127, 27.750257793762216],
									[120.32520299921907, 27.750425993964484],
									[120.32860816523475, 27.746411009360656],
									[120.33020510937831, 27.741865440038055],
									[120.3332157841811, 27.73969049981679],
									[120.33831645194277, 27.738186854939443],
									[120.33964886860042, 27.734002954272967],
									[120.34086624757936, 27.732743613826756],
									[120.34665850838348, 27.731177269115733],
									[120.35019623896528, 27.728121008577716],
									[120.37260075412155, 27.72400323955793],
									[120.3756142402051, 27.723937339037036],
									[120.38007783362514, 27.72154340940085],
									[120.38081885790405, 27.7187915864626],
									[120.37946847009391, 27.715381234956055],
									[120.3730294933165, 27.711141495383742],
									[120.37489068076036, 27.709347522370308],
									[120.38142973859158, 27.70541083634106],
									[120.3840325033974, 27.703285979364523],
									[120.38576265782046, 27.699920715368762],
									[120.39322828535717, 27.69299840245435],
									[120.39878430235376, 27.68618836090417],
									[120.40518125201322, 27.683091257655462],
									[120.40633642218825, 27.68169154742702],
									[120.40831520228483, 27.684256582075648],
									[120.4022294018655, 27.68873596579226],
									[120.40557688626438, 27.69263718705656],
									[120.40941966778348, 27.693770924588534],
									[120.41422071111697, 27.691210683326403],
									[120.41690953654597, 27.69047374196964],
									[120.41920274660959, 27.694219130508543],
									[120.42666399085056, 27.6925133045454],
									[120.43566256047882, 27.68845316048504],
									[120.44070118221384, 27.684781684527195],
									[120.44051880060226, 27.683665256246627],
									[120.44412034977438, 27.68227202653287],
									[120.44544222547836, 27.67854737905833],
									[120.45044979542183, 27.67396461287666],
									[120.45385430763031, 27.66966297386722],
									[120.45892827631894, 27.668779014939616],
									[120.46597023863569, 27.67379836060593],
									[120.47076447589995, 27.67878166054527],
									[120.47926393438308, 27.68023675462257],
									[120.48238897956776, 27.68658335393866],
									[120.4842244095289, 27.69179518330111],
									[120.48417384065033, 27.696952487667204],
									[120.48526541077013, 27.703702325901645],
									[120.48413988494781, 27.708195434172012],
									[120.48180797255998, 27.711742943082413],
									[120.4827171610682, 27.714150841887886],
									[120.48802554254485, 27.71992111246942],
									[120.49100264655499, 27.721062113825553],
									[120.49396283701537, 27.72052092430124],
									[120.49975155808795, 27.721481384957997],
									[120.50717706956618, 27.723751714470097],
									[120.51099683113887, 27.727111258777597],
									[120.50959038229041, 27.73141462718337],
									[120.5103841284249, 27.733540179335876],
									[120.51665152085104, 27.73563241430452],
									[120.51524516912934, 27.740501978783357],
									[120.52293337887238, 27.748571296927878],
									[120.52425558103027, 27.752222292624765],
									[120.52638745811475, 27.755339325749333],
									[120.53291728350587, 27.75673910972216],
									[120.5344699693137, 27.757969041438173],
									[120.53622197366519, 27.7619027129399],
									[120.53936095744234, 27.76489634648925],
									[120.55635890493954, 27.764300631968638],
									[120.55840633658318, 27.762512680815632],
									[120.56070128503632, 27.757454515013933],
									[120.56456371494357, 27.753389351837143],
									[120.56989446525745, 27.751745463082727],
									[120.57913264665433, 27.756469003741586],
									[120.58434315221473, 27.757005873822095],
									[120.58968546061556, 27.755388283042862],
									[120.59561886911558, 27.74724660274859],
									[120.59919518960635, 27.7461299082687],
									[120.60018327293972, 27.744322444525267],
									[120.61011601694065, 27.73299937292279],
									[120.61273478608155, 27.728264938775965],
									[120.61316372942258, 27.725073258324244],
									[120.60998600914706, 27.720139086549636],
									[120.60781212922643, 27.719228370992596],
									[120.60797722856626, 27.716823027161013],
									[120.60432081625277, 27.71290955083515],
									[120.60458420789496, 27.70641580084856],
									[120.60206496582555, 27.70368057130139],
									[120.60456849494017, 27.702468438967344],
									[120.60404184655408, 27.699544406649125],
									[120.60750081361175, 27.69757647147702],
									[120.6131817329507, 27.696959498781894],
									[120.61446577957213, 27.697634502030724],
									[120.61950360270919, 27.696937712705335],
									[120.621890407916, 27.694591956153886],
									[120.6266141653116, 27.693485262135198],
									[120.62717339163873, 27.69474266274375],
									[120.62666263787048, 27.700011780719137],
									[120.63485654179601, 27.700094493166375],
									[120.64061461846995, 27.698859410133707],
									[120.65979214489164, 27.689719478770996],
									[120.66436325675897, 27.687131568966777],
									[120.67077530693496, 27.68271624845613],
									[120.67028533739847, 27.68195094967666],
									[120.67047254567149, 27.681821376255584],
									[120.67044353444157, 27.681757027964522],
									[120.68075736615958, 27.675177402615077],
									[120.68577919125676, 27.671973771072714],
									[120.68579257766544, 27.671965230211242],
									[120.68586157725008, 27.671921211994402],
									[120.68591373702941, 27.67188793528004],
									[120.68592182912914, 27.671887805777658],
									[120.6859281999266, 27.671887703254924],
									[120.68697747403121, 27.671870831074045],
									[120.6886916241192, 27.67184326685333],
									[120.6932311140248, 27.67183833227324],
									[120.69298400640685, 27.670708697448504],
									[120.685530824588, 27.652598162675133],
									[120.68301984728816, 27.646496723944722]
								]
							]
						]
					}
				}, {
					type: "Feature",
					properties: {
						adcode: 330327,
						name: "苍南县",
						center: [120.406256, 27.507743],
						centroid: [120.462814, 27.411237],
						childrenNum: 0,
						level: "district",
						subFeatureIndex: 6,
						acroutes: [1e5, 33e4, 330300]
					},
					geometry: {
						type: "MultiPolygon",
						coordinates: [
							[
								[
									[120.48280656357213, 27.150534749279302],
									[120.4854115245223, 27.142948031626418],
									[120.48212230180286, 27.144280910535656],
									[120.4807635547943, 27.14725947414547],
									[120.47738885870888, 27.14968645566546],
									[120.46828436872875, 27.150175333424954],
									[120.46515965449453, 27.152275800787606],
									[120.46707880504289, 27.15393245182122],
									[120.4638146158519, 27.155964851296915],
									[120.46494054816787, 27.159302830761078],
									[120.46364235880787, 27.161216378533084],
									[120.46582460422212, 27.16492724389724],
									[120.46264076226146, 27.164927959757563],
									[120.45754885659449, 27.16787314413034],
									[120.45780074590778, 27.168661713767108],
									[120.46142244349107, 27.16845071303004],
									[120.46583282942163, 27.166204571683693],
									[120.46611404382816, 27.164931655071882],
									[120.47306263403334, 27.16333234301328],
									[120.47345125716981, 27.160239458484284],
									[120.47588121904312, 27.158200979591584],
									[120.4760781525847, 27.15607786190384],
									[120.48280656357213, 27.150534749279302]
								]
							],
							[
								[
									[120.5223716497319, 27.165528654723687],
									[120.52301704909758, 27.162780046861712],
									[120.5252194402251, 27.16385376453968],
									[120.52612435785295, 27.162077665551863],
									[120.5285532477343, 27.161370634747072],
									[120.52802121600632, 27.160058140770616],
									[120.53013777763636, 27.1590278144821],
									[120.52777230704635, 27.15152955054839],
									[120.52333450348465, 27.149088740153275],
									[120.51828050604058, 27.150156140093827],
									[120.5184328556918, 27.15256595625391],
									[120.51610374469215, 27.15094113312682],
									[120.512388944794, 27.15544104566777],
									[120.51261782675135, 27.156645178532187],
									[120.51436710345911, 27.15727913402486],
									[120.51351880984521, 27.1587209702966],
									[120.51590394950767, 27.15974521626879],
									[120.51545822661592, 27.160629153612604],
									[120.51296234173878, 27.16069710278913],
									[120.51302385356803, 27.16387510275382],
									[120.51486241856583, 27.16379022563848],
									[120.51572525511654, 27.166001558724986],
									[120.5191595555691, 27.16747605837344],
									[120.5184115174776, 27.172220230379367],
									[120.5205409529027, 27.17292690235473],
									[120.52166748056982, 27.174784064433084],
									[120.52033174001781, 27.176007151408953],
									[120.52503287766524, 27.17692434748068],
									[120.52427637605399, 27.17964887599487],
									[120.52117311964378, 27.17971372610765],
									[120.52034354182103, 27.18094015136694],
									[120.5212992432655, 27.183645248229652],
									[120.53088915311196, 27.1802456382257],
									[120.53226816634287, 27.175592779783017],
									[120.53567147256047, 27.173124313436347],
									[120.5305416586707, 27.17173111429952],
									[120.53063821797946, 27.168184041560323],
									[120.52777755279192, 27.16816544537903],
									[120.5223716497319, 27.165528654723687]
								]
							],
							[
								[
									[120.55171155934102, 27.248687505623934],
									[120.55115032212973, 27.24713373163644],
									[120.55437397977539, 27.24733316889069],
									[120.55705904963554, 27.246093750226464],
									[120.56265354142784, 27.245790123815198],
									[120.56357765238681, 27.244322538154677],
									[120.55255365392804, 27.23933005343929],
									[120.54949092906315, 27.24195921424638],
									[120.54905176132979, 27.246796608176965],
									[120.5448683498945, 27.24789834063597],
									[120.5461621280798, 27.24893259965978],
									[120.54911541894148, 27.248497366460356],
									[120.55051624792657, 27.250275135489176],
									[120.55192840117479, 27.25005245165937],
									[120.55171155934102, 27.248687505623934]
								]
							],
							[
								[
									[120.5979888435104, 27.347489356648566],
									[120.59478294837447, 27.346135377845485],
									[120.59466040135646, 27.343078852007466],
									[120.5871622561333, 27.343053579259333],
									[120.58664524578148, 27.33943211999639],
									[120.5877478119121, 27.337064266202958],
									[120.58711767224281, 27.336147070131233],
									[120.58193385586287, 27.337569117720648],
									[120.58136570466365, 27.34344220149643],
									[120.57972896102285, 27.344426631783676],
									[120.58166587318158, 27.347547769414064],
									[120.58719146251599, 27.34992527922833],
									[120.58665025230732, 27.34803521635223],
									[120.587979912543, 27.34724307101095],
									[120.58925330669479, 27.350406766359242],
									[120.59134173393397, 27.35172724721474],
									[120.596322536456, 27.35236561298268],
									[120.60006272781266, 27.350027918853414],
									[120.5979888435104, 27.347489356648566]
								]
							],
							[
								[
									[120.67252314113011, 27.509147525238177],
									[120.67212474326232, 27.50811326531499],
									[120.67298996481509, 27.51186966875025],
									[120.67252314113011, 27.509147525238177]
								]
							],
							[
								[
									[120.09404482720709, 27.5717231419095],
									[120.09198445611787, 27.567614215923356],
									[120.09523350342351, 27.563820242410316],
									[120.0957280936766, 27.562183298220702],
									[120.0914736636787, 27.559900330535868],
									[120.0926276800235, 27.558278271924735],
									[120.10229417343737, 27.551572978010597],
									[120.10491641036413, 27.554471037008796],
									[120.1076061899737, 27.55563744691068],
									[120.11465292049593, 27.55413155192963],
									[120.121025521011, 27.549287797993543],
									[120.12573164899652, 27.547498251443187],
									[120.14000212269991, 27.548022494142856],
									[120.14249582492243, 27.546310567178978],
									[120.14292648956587, 27.539524456588424],
									[120.14447989393204, 27.536488135818843],
									[120.14799870727461, 27.533927230857046],
									[120.15910227954657, 27.53282930342965],
									[120.16510099411562, 27.528998669952728],
									[120.16809178940457, 27.52796434258039],
									[120.17053785723635, 27.528677918651056],
									[120.17375989160576, 27.53284080665793],
									[120.17061953366465, 27.53612680800586],
									[120.1710657062174, 27.537780594698745],
									[120.17544445040107, 27.536875811069876],
									[120.18669713926158, 27.537415144393435],
									[120.18938964831364, 27.53483786457582],
									[120.18801946552594, 27.52784377317164],
									[120.19001791739299, 27.527075215249056],
									[120.22127827707084, 27.5311325965921],
									[120.22061768096125, 27.537005808071626],
									[120.22565109742027, 27.53685192057975],
									[120.23226786117289, 27.53328209229477],
									[120.2454618832594, 27.538560185504195],
									[120.25345730680931, 27.538983953246884],
									[120.25911086067777, 27.53803667035612],
									[120.26245635127964, 27.534664858396525],
									[120.2678600132291, 27.531339026075216],
									[120.2741520434821, 27.529081251098887],
									[120.28035948530203, 27.529200217915786],
									[120.29800527742168, 27.534827279555373],
									[120.31442523693522, 27.54870155513271],
									[120.32085855158095, 27.550878293098776],
									[120.33094343029518, 27.55033904161354],
									[120.33861005810775, 27.55221470184705],
									[120.34477911326553, 27.557446586990466],
									[120.35450499071283, 27.55798153791767],
									[120.35889911959873, 27.559910956025874],
									[120.36729399771991, 27.568794818925824],
									[120.38267575558177, 27.570134589339887],
									[120.38593751480448, 27.569675717460427],
									[120.38801373554554, 27.567659760289757],
									[120.39778770244061, 27.56775263777405],
									[120.40989049435086, 27.570573801140085],
									[120.41926251555276, 27.565857804893824],
									[120.42025232738308, 27.562867797410945],
									[120.41861911717854, 27.557780290328196],
									[120.4192962931894, 27.55622295052882],
									[120.42142473576303, 27.55665007723934],
									[120.42601355078477, 27.56214928136427],
									[120.4279443160774, 27.56205777534609],
									[120.43088362338062, 27.55866091636824],
									[120.4301081217925, 27.55688082528991],
									[120.43073573526601, 27.552977792790955],
									[120.43463274050862, 27.54758287135246],
									[120.44272698786028, 27.543881295085725],
									[120.4474679142129, 27.54403283264918],
									[120.4607875868777, 27.55728937110763],
									[120.47188190692452, 27.55050085483066],
									[120.47796686737706, 27.549070052341108],
									[120.4802333325024, 27.54668264728639],
									[120.48393692414982, 27.547937443458295],
									[120.48502869032188, 27.55193957764942],
									[120.48385593660225, 27.54718334303692],
									[120.48074660437237, 27.54441161000784],
									[120.48661952447151, 27.542206859958696],
									[120.48545948356832, 27.54089001416287],
									[120.48472497577711, 27.53387118780512],
									[120.48245588193345, 27.529670848430953],
									[120.48312530578835, 27.52812414221546],
									[120.47318018172007, 27.52524192117778],
									[120.47323721042903, 27.524120209380214],
									[120.47596890384193, 27.52244917908638],
									[120.47686335156254, 27.520847138484726],
									[120.4757761845234, 27.518337207995785],
									[120.46828620694293, 27.512210652999272],
									[120.4618867077055, 27.509113147753624],
									[120.46235098810769, 27.507352046759593],
									[120.46455967718737, 27.505050025138587],
									[120.46385976541592, 27.504138122476434],
									[120.46434817822592, 27.503390916257842],
									[120.46841266511251, 27.501970786922357],
									[120.47260310744753, 27.50246169984763],
									[120.47237465806404, 27.499964225868382],
									[120.4740196493874, 27.500054829866542],
									[120.47526379398892, 27.49908608285648],
									[120.47678057796134, 27.498970528966765],
									[120.47862492020397, 27.500113875754835],
									[120.48011601594146, 27.49976672395519],
									[120.48021240707703, 27.497329507251038],
									[120.48185174256389, 27.494083533828075],
									[120.48828753574128, 27.494361969329475],
									[120.49040622516725, 27.495223275234025],
									[120.49363237573357, 27.498180184068303],
									[120.49644363576522, 27.49812831207197],
									[120.4986272868199, 27.499137887403606],
									[120.5031481400747, 27.498644417705748],
									[120.5049289784896, 27.49958604386086],
									[120.50780815172493, 27.49908907580027],
									[120.50853772673474, 27.498082747021215],
									[120.5105745814518, 27.498595981119706],
									[120.512006133976, 27.50103565297303],
									[120.51081635609, 27.502594768034157],
									[120.5119981965596, 27.503553418355636],
									[120.51380743466541, 27.500860818472063],
									[120.51439809949272, 27.503393711350725],
									[120.51324916341821, 27.503937506211003],
									[120.51233705481127, 27.50590101222201],
									[120.51256984881957, 27.507606412805785],
									[120.5108627269334, 27.50845956995323],
									[120.51035425384578, 27.510148065081182],
									[120.51183844099137, 27.51081365332749],
									[120.51039222592055, 27.512266880412255],
									[120.51644967970901, 27.514085162999947],
									[120.517832186806, 27.51749820797596],
									[120.51604212404482, 27.518377725151936],
									[120.51688957049737, 27.52011489608566],
									[120.51844105121359, 27.519965470130387],
									[120.51850050539406, 27.52094426886299],
									[120.51912935813345, 27.51988150942418],
									[120.51963981152812, 27.522072749857557],
									[120.52003867704332, 27.520621719816575],
									[120.52073486202437, 27.52084491985721],
									[120.5207434280668, 27.522237577602198],
									[120.52137830716322, 27.52069810913048],
									[120.52211745365764, 27.52084497021923],
									[120.52221743218877, 27.522150750756566],
									[120.52277641300111, 27.52145985288996],
									[120.52576459486022, 27.52205603325939],
									[120.52663098822961, 27.52525651267797],
									[120.52234385168742, 27.53102006082719],
									[120.5225252260584, 27.531921169826205],
									[120.52579759368405, 27.53240402302731],
									[120.52598465446829, 27.53522640677329],
									[120.52685441220137, 27.535909517410346],
									[120.52869511398842, 27.533585966918906],
									[120.53009462996329, 27.534549580598707],
									[120.53348621261864, 27.533959387915445],
									[120.53421195651663, 27.532093928691893],
									[120.5368404356376, 27.532009955395154],
									[120.53698611951381, 27.530357535671783],
									[120.54014977798988, 27.53005186240358],
									[120.54104971876961, 27.531440404850855],
									[120.54399426462362, 27.530389570422415],
									[120.54538251658994, 27.531006272421564],
									[120.54617892651629, 27.530137398722047],
									[120.54510588872586, 27.528289031113957],
									[120.54645888546929, 27.527604057081646],
									[120.5498518665704, 27.528539067823772],
									[120.5504863958306, 27.52635018901009],
									[120.55571545620342, 27.527150484007677],
									[120.55728044113948, 27.525260187307822],
									[120.55798410488262, 27.522621086294123],
									[120.56394352537347, 27.52354634209007],
									[120.56373064235527, 27.524359459621394],
									[120.56541958264768, 27.524860310954637],
									[120.56584748547311, 27.524001711110145],
									[120.5656590505248, 27.525153521417906],
									[120.56678932836485, 27.52549560373916],
									[120.56719209783705, 27.52437462398973],
									[120.56794180417103, 27.524637416683504],
									[120.56759469463952, 27.52571982361104],
									[120.56983050187625, 27.526349214144943],
									[120.56963152957144, 27.52690672186776],
									[120.57222101678656, 27.52674522791],
									[120.57292430281439, 27.524067404786933],
									[120.57184910934893, 27.523455054607155],
									[120.57219198757025, 27.522444397391098],
									[120.57387982709236, 27.52303076345902],
									[120.573210393345, 27.521752370875276],
									[120.57580583676997, 27.521456394097356],
									[120.57593865314641, 27.51988295463468],
									[120.58309471874634, 27.520171691870132],
									[120.58195991371906, 27.51773729903715],
									[120.5856955212314, 27.517978024166553],
									[120.58488097108, 27.51631869135457],
									[120.58388917984189, 27.516630130176395],
									[120.58399192468767, 27.515096333728877],
									[120.58240550081325, 27.51355823402531],
									[120.58222707711798, 27.510908344744394],
									[120.58420080482335, 27.510975256103222],
									[120.58453764139904, 27.50800597529559],
									[120.58392782460953, 27.504359692046194],
									[120.58266123292958, 27.503274977458318],
									[120.58272673774877, 27.502361396661172],
									[120.58430759661837, 27.502143648310778],
									[120.58445153850778, 27.501406602632642],
									[120.58279456461753, 27.494193678295687],
									[120.58398564112451, 27.493682007218922],
									[120.5828816333808, 27.491531089688067],
									[120.58443387762145, 27.491332382683368],
									[120.58497872378916, 27.490576230908403],
									[120.58451636074153, 27.489803631432494],
									[120.58755454310779, 27.488158201240026],
									[120.58652545968232, 27.486915251837445],
									[120.58572000347544, 27.48748832682486],
									[120.58433148800782, 27.48587640537187],
									[120.58311813169644, 27.486209033120417],
									[120.58260688509972, 27.485763715822884],
									[120.58351184319702, 27.485773170395532],
									[120.58140188079221, 27.484164894794105],
									[120.58006323003406, 27.4844753614488],
									[120.58185967978045, 27.482286967369703],
									[120.57947642779493, 27.480686476299866],
									[120.5843512281267, 27.476633758840933],
									[120.58384027560828, 27.47513708640747],
									[120.58193503937059, 27.473886389345466],
									[120.58426130221744, 27.472400388267374],
									[120.58667729312265, 27.473822347723228],
									[120.5877061013556, 27.4732282034189],
									[120.58919601988043, 27.47379844014597],
									[120.59329648144751, 27.470655271823375],
									[120.59509066400301, 27.47116335910181],
									[120.5961812448686, 27.47233388070407],
									[120.59454064313627, 27.47368035646332],
									[120.59599075676806, 27.47542255730525],
									[120.59587220184073, 27.476402357882534],
									[120.59769982388787, 27.47690024864761],
									[120.59699344599085, 27.47829479496886],
									[120.59942781813936, 27.48073092888933],
									[120.60245858379665, 27.481914975395853],
									[120.60307811596238, 27.480093947177977],
									[120.60478372339014, 27.480336168779218],
									[120.60503557942855, 27.479318877264404],
									[120.60653217721824, 27.479419375603754],
									[120.60690422584946, 27.477969311434606],
									[120.60825227092562, 27.477861459338953],
									[120.60838491553147, 27.479683201618514],
									[120.61064656658584, 27.478911630067728],
									[120.61052311395065, 27.47822825502999],
									[120.61312168072106, 27.47787485833811],
									[120.61311980383596, 27.472510291716617],
									[120.61520749542967, 27.47236111847087],
									[120.61542570962888, 27.474049734108007],
									[120.61855976512118, 27.474187175697637],
									[120.61967340550336, 27.4757822024867],
									[120.62100154588472, 27.47534765097339],
									[120.62051133982652, 27.474387415147135],
									[120.62238523379153, 27.473061889094936],
									[120.62325968508651, 27.47103180897085],
									[120.62773095871682, 27.472324918060565],
									[120.62707406961272, 27.47354945834087],
									[120.63187312364585, 27.473220117614403],
									[120.63397452090749, 27.473979073475505],
									[120.63513265434858, 27.472160214422388],
									[120.63865227438305, 27.471722515281897],
									[120.6433602630658, 27.475159314950474],
									[120.64670330121646, 27.473689998994303],
									[120.6477429166024, 27.471939462336366],
									[120.64981527475516, 27.47096388587471],
									[120.65152444439764, 27.476475955700835],
									[120.6496825312239, 27.478702760723877],
									[120.64911294380738, 27.481024504477375],
									[120.65180356518249, 27.48125043845704],
									[120.65447445902907, 27.48366636281247],
									[120.65039741760677, 27.484104636619747],
									[120.65373955283815, 27.48482994434653],
									[120.65194468050265, 27.487826577134854],
									[120.65716548599846, 27.488329209125766],
									[120.65680313835423, 27.489234133048853],
									[120.6594829480797, 27.491430899816237],
									[120.65948048663518, 27.493038809393568],
									[120.66113700366986, 27.49554675238079],
									[120.66328140651171, 27.495580044383587],
									[120.66245895581619, 27.494270698034313],
									[120.66380324982015, 27.493312562125084],
									[120.66546332817018, 27.49511885674991],
									[120.6631176471617, 27.492347359343228],
									[120.66506826858574, 27.486445427114802],
									[120.67071795447009, 27.483447432752882],
									[120.67126595995614, 27.481632828392378],
									[120.67561364155642, 27.482327937784135],
									[120.67323064767629, 27.47915804430835],
									[120.67355394405934, 27.477202057528984],
									[120.68141424627049, 27.47904407952069],
									[120.68295443060254, 27.47764885421128],
									[120.68671095364766, 27.47908103446224],
									[120.68868875528187, 27.47779405155427],
									[120.6880915164104, 27.475590944566477],
									[120.68099284194614, 27.471427202203643],
									[120.6800066229074, 27.46771943590329],
									[120.68112790572832, 27.466777443724084],
									[120.67973446827114, 27.464882135102528],
									[120.67568337948444, 27.46335136847091],
									[120.67229521245417, 27.457993150163816],
									[120.66750085378146, 27.455512166153596],
									[120.66655111304351, 27.45257103412598],
									[120.66364812845848, 27.451313734241467],
									[120.66713655011176, 27.449092149782928],
									[120.66413235672292, 27.44625461066181],
									[120.65840220489793, 27.443485141226347],
									[120.65763354265391, 27.446846961717938],
									[120.65618145501026, 27.448133349274713],
									[120.65381646196022, 27.44768238063739],
									[120.65214157087689, 27.449158072786872],
									[120.64886856113526, 27.44849491091145],
									[120.64765203021705, 27.444120764961383],
									[120.6483123304497, 27.440890669968496],
									[120.65065097786044, 27.439034820000984],
									[120.65010762186932, 27.43488645514583],
									[120.64856934589864, 27.43320846589802],
									[120.64768421605379, 27.43463110883863],
									[120.64653515857083, 27.434415936146593],
									[120.64310944124782, 27.431786775339447],
									[120.64216005844003, 27.4267572160727],
									[120.63850831990305, 27.4266021252879],
									[120.64065325244576, 27.42400670074869],
									[120.64169025440174, 27.418629049890797],
									[120.64339602011034, 27.41661274468248],
									[120.64163720609224, 27.415112972285897],
									[120.64117920385718, 27.411571979863027],
									[120.63809585573927, 27.409983515426973],
									[120.63673734705094, 27.407183527497864],
									[120.63848006770104, 27.405405878978172],
									[120.64399075526921, 27.405550718390998],
									[120.64645862536531, 27.408588766758214],
									[120.64720904845888, 27.406556844822603],
									[120.64945840847884, 27.40641152876907],
									[120.65072393446212, 27.404942870217326],
									[120.64729845545946, 27.4053194523309],
									[120.6482081412928, 27.400513172245155],
									[120.63965845117662, 27.39449632194777],
									[120.64257895905178, 27.394125223000685],
									[120.64800107508961, 27.39669084580595],
									[120.65015435244152, 27.396173239203677],
									[120.6508405207735, 27.394527674112908],
									[120.65052497384852, 27.393016219522963],
									[120.64747655360009, 27.39105641871879],
									[120.65121173843102, 27.387953162308634],
									[120.65096127993922, 27.383950948977144],
									[120.64436864859431, 27.383349418540888],
									[120.64900624734048, 27.37654602567858],
									[120.64725041367569, 27.375852942459403],
									[120.64867281919533, 27.372383952457483],
									[120.64608240118196, 27.367679238206335],
									[120.64692533033974, 27.365846275984893],
									[120.64545655217819, 27.36431026450714],
									[120.642331600523, 27.36439836029615],
									[120.63744127789278, 27.367993235599386],
									[120.63393187505608, 27.369545578765496],
									[120.632091522206, 27.369166254619017],
									[120.63249385370841, 27.366701245266313],
									[120.63067996520829, 27.36469662225136],
									[120.62415230268664, 27.3630656000974],
									[120.61845994037401, 27.365070104401866],
									[120.61725902528383, 27.36700880531214],
									[120.61533594110085, 27.367319822351988],
									[120.61610734447845, 27.37090945280903],
									[120.62232160585745, 27.373583555436767],
									[120.62266325920211, 27.377929567895308],
									[120.61907100722124, 27.379380941477336],
									[120.61301970479565, 27.376417160023948],
									[120.6112364534996, 27.377411604262193],
									[120.61267733559066, 27.379059553455704],
									[120.61279571065359, 27.38305735561255],
									[120.60808050671005, 27.383804440422637],
									[120.60795986625487, 27.385646224094046],
									[120.61230313757983, 27.388385653475154],
									[120.6126289367761, 27.3916959760885],
									[120.60585331947516, 27.388386726366377],
									[120.6031379703411, 27.390600442656364],
									[120.59962582547155, 27.389404773311696],
									[120.5988513230302, 27.388337850911114],
									[120.60080206406406, 27.386567831340415],
									[120.60053551220415, 27.384434104350476],
									[120.59640896310327, 27.38323533504274],
									[120.5955885646606, 27.380950450902617],
									[120.59392333049732, 27.380646944101215],
									[120.59115433680324, 27.381281614554894],
									[120.5885859728644, 27.383759260281693],
									[120.5839953421114, 27.383761644384435],
									[120.58355534070643, 27.3858466146296],
									[120.58082771312854, 27.388317942618983],
									[120.57817995524078, 27.38765466203307],
									[120.57499885531297, 27.392894744496914],
									[120.57549786573395, 27.395051718062405],
									[120.5749411584078, 27.396019935371783],
									[120.56689357777645, 27.39959430703169],
									[120.5618766548838, 27.399652838507734],
									[120.5627526044492, 27.40288174189891],
									[120.55861413483456, 27.404172659340816],
									[120.55642950531751, 27.40269494011943],
									[120.54723000556032, 27.405721425903153],
									[120.54370844388961, 27.402573465992702],
									[120.54425430269396, 27.39828264672684],
									[120.54522323586366, 27.396887302706887],
									[120.5529303547521, 27.392199874324774],
									[120.5505980250789, 27.390633225642887],
									[120.54674184366127, 27.390738129760905],
									[120.54266905783084, 27.392698049275623],
									[120.54104256646133, 27.390779614587586],
									[120.5408755542635, 27.38690125948557],
									[120.54621291189642, 27.38279247289438],
									[120.54805135728441, 27.382553458275538],
									[120.55139994605076, 27.385371804065528],
									[120.55366241908541, 27.382822632558486],
									[120.55756115912027, 27.383728504367014],
									[120.5596202612661, 27.379878401467124],
									[120.56128871410294, 27.37948012320919],
									[120.55488014250466, 27.375690460146643],
									[120.55465531379173, 27.37425041172719],
									[120.55710363352591, 27.37175476517035],
									[120.55234324944149, 27.366607904631167],
									[120.54502284532816, 27.364918470610974],
									[120.54352247758038, 27.360669254882282],
									[120.54114913972103, 27.35885083649697],
									[120.53857123847195, 27.35837936421632],
									[120.53501737135468, 27.360438823393054],
									[120.53289174995439, 27.359176159052538],
									[120.52975285071352, 27.348625540336457],
									[120.53757131106727, 27.344114661462527],
									[120.53537094611238, 27.34144353828873],
									[120.53584110718145, 27.337886452497855],
									[120.53375685189724, 27.33771586459551],
									[120.53116726845474, 27.3404276371258],
									[120.52700781855606, 27.340438604358155],
									[120.52779090412696, 27.33777523064242],
									[120.52308583284503, 27.338097571945468],
									[120.51802015320754, 27.336870431725117],
									[120.51662313914665, 27.337199568305493],
									[120.5148402448815, 27.339564562254793],
									[120.51138412957403, 27.339694619511135],
									[120.51099085784188, 27.337039828025695],
									[120.515154123564, 27.332031249942304],
									[120.52012634295647, 27.33172655063987],
									[120.52114105251758, 27.32880234745045],
									[120.52505004392447, 27.326780318956594],
									[120.52997374579184, 27.329338550233956],
									[120.53776407265389, 27.328465223091598],
									[120.54098975647219, 27.330238342625478],
									[120.54324305012676, 27.32994794883882],
									[120.54423725604454, 27.32935953141731],
									[120.5421055552273, 27.324362873847576],
									[120.54011177983489, 27.323022604309813],
									[120.54337382324343, 27.318418264291495],
									[120.54973983802313, 27.3204220536349],
									[120.55182456994805, 27.323073029296893],
									[120.5564022063968, 27.32396924508464],
									[120.56044364006198, 27.32830631738267],
									[120.56376051873303, 27.327930808160318],
									[120.56495940675131, 27.324927925983047],
									[120.5632847548876, 27.323418855495845],
									[120.55881035341508, 27.323933601354668],
									[120.55527114884455, 27.322128176374292],
									[120.55377376055071, 27.319329857586922],
									[120.55744373823802, 27.318064809143664],
									[120.5595185758217, 27.315596938148246],
									[120.55510735532027, 27.312677741484606],
									[120.55527472454901, 27.31016862398286],
									[120.55654561498818, 27.30939102157845],
									[120.55632996565544, 27.308819055455103],
									[120.55543053119413, 27.307818055159146],
									[120.54791963088633, 27.306713104026585],
									[120.54278075722618, 27.303938150525255],
									[120.54015934497784, 27.299549579449604],
									[120.54393374924325, 27.30125355730587],
									[120.54650473560514, 27.30054712275154],
									[120.54997384521687, 27.302954078168227],
									[120.55595755549689, 27.303003668584495],
									[120.55818390816091, 27.301243662964737],
									[120.5578370090708, 27.29913592368399],
									[120.56324064763783, 27.297686099633836],
									[120.56419360615007, 27.29589736427198],
									[120.56325101861967, 27.29467344272524],
									[120.5589013099476, 27.29412913345277],
									[120.55357146255301, 27.295786619057253],
									[120.5517630581187, 27.29355716732948],
									[120.5474151372988, 27.292625069491407],
									[120.54498195675194, 27.290941357857434],
									[120.54457831403806, 27.288945675002935],
									[120.54842734314741, 27.289033054931565],
									[120.55136024907631, 27.28776347660323],
									[120.55067324617346, 27.284511447145633],
									[120.54632687578476, 27.282640576701283],
									[120.54696536026324, 27.280598163274647],
									[120.5441329481771, 27.281157850954116],
									[120.5418260099625, 27.280085444487725],
									[120.53942692271437, 27.275798440145934],
									[120.53356766691434, 27.277871131947222],
									[120.53223741042825, 27.27448654152073],
									[120.52745342273738, 27.273687124261414],
									[120.52226412319078, 27.277973770673043],
									[120.51849007595627, 27.276665806581775],
									[120.51845002195103, 27.27329802538361],
									[120.52308845526807, 27.273471951569377],
									[120.5211050508575, 27.270799040543352],
									[120.52387535576315, 27.266369223860636],
									[120.52349174005178, 27.26504492718169],
									[120.52532744430619, 27.264007449484268],
									[120.52300822764767, 27.260197043558776],
									[120.51869106274239, 27.261497974052304],
									[120.51674175252992, 27.260573863992704],
									[120.5161365267794, 27.255922436371407],
									[120.51700520532597, 27.253719806923584],
									[120.51904106179563, 27.25245904914584],
									[120.51763010014906, 27.251209616530616],
									[120.51921308051931, 27.248146057094914],
									[120.52661132815035, 27.246093750226464],
									[120.53412294431848, 27.246857166724908],
									[120.53698396653692, 27.245665907655564],
									[120.54059565106854, 27.24815917010966],
									[120.54254257717821, 27.246926665433307],
									[120.53987705678082, 27.246093750226464],
									[120.53827774562149, 27.24457430875742],
									[120.53905665833815, 27.243446350268925],
									[120.53817093404143, 27.24199783832961],
									[120.53612077205605, 27.241617441291908],
									[120.53498887993294, 27.237171053701218],
									[120.52972972374778, 27.236019611216136],
									[120.52679896360132, 27.232957601312307],
									[120.53271281724278, 27.226634860110778],
									[120.53266501467874, 27.22469317884719],
									[120.52642703098275, 27.22331547772717],
									[120.51643395416374, 27.226122260034344],
									[120.515742659696, 27.2243367433461],
									[120.51888501683015, 27.21913027754033],
									[120.51482391319314, 27.21968412412309],
									[120.5128568413702, 27.216085553505536],
									[120.5102249385302, 27.21494424368194],
									[120.51021504418895, 27.21284377541997],
									[120.51366984828496, 27.21318566798425],
									[120.51469314097574, 27.211960315616125],
									[120.50967216483855, 27.20835220768828],
									[120.51026451589473, 27.20533597507523],
									[120.51981186892272, 27.204104065750073],
									[120.52058172186901, 27.199535847001812],
									[120.5179940458886, 27.19862556491796],
									[120.51961445784104, 27.19689655263386],
									[120.5194338559877, 27.195074438934284],
									[120.51640856270512, 27.194753050912595],
									[120.50527584520421, 27.189302920993043],
									[120.5002154113123, 27.191373824942104],
									[120.49678945566893, 27.191431522746655],
									[120.49308955663776, 27.184181213592183],
									[120.48947465433184, 27.183401345795517],
									[120.49078536045613, 27.181644440138825],
									[120.49062573888682, 27.178847432563032],
									[120.48760545212997, 27.179748058626046],
									[120.48570120334796, 27.176921844667447],
									[120.48673641655239, 27.174690007937556],
									[120.48319482787906, 27.174162864924313],
									[120.48360025844522, 27.170586347482015],
									[120.48020172133249, 27.16646087127225],
									[120.47641885264795, 27.166676640214803],
									[120.47509491479855, 27.163465142302528],
									[120.47455942607667, 27.16390335585521],
									[120.47544205220902, 27.166530251270103],
									[120.47233784161813, 27.16886866125975],
									[120.47113025175975, 27.167995452827938],
									[120.47066712338915, 27.170106768712458],
									[120.46929275965317, 27.169556855764313],
									[120.46633231648332, 27.171043753466506],
									[120.46238493931355, 27.175424933014313],
									[120.4634016750473, 27.182854414100007],
									[120.45913326778611, 27.189303278923262],
									[120.46071243323229, 27.19104921824686],
									[120.45854103544048, 27.191983818898166],
									[120.46082055602392, 27.192957401562865],
									[120.46175527538571, 27.191138863567744],
									[120.46380853643484, 27.19035971163146],
									[120.46859884276239, 27.192896604694624],
									[120.4653842448871, 27.199735760896715],
									[120.4695867300436, 27.204661727256962],
									[120.46638584143352, 27.211621641725458],
									[120.4567166563487, 27.220042347476408],
									[120.4541300532594, 27.22090923817086],
									[120.45173382765404, 27.22040450536366],
									[120.45012032968953, 27.218163609762826],
									[120.44698941732781, 27.218093037263884],
									[120.44604492143606, 27.21981942622557],
									[120.4452028277484, 27.2190088034136],
									[120.44415783891316, 27.214661836774383],
									[120.44684874987001, 27.212456345683847],
									[120.44503986879499, 27.211144804988805],
									[120.44491934794962, 27.209570646068528],
									[120.44174790404259, 27.209006071473084],
									[120.44017732172608, 27.21453714397404],
									[120.43196177471623, 27.213952541476658],
									[120.4305628540925, 27.204159617772177],
									[120.43180501478969, 27.202225446747036],
									[120.42648267763354, 27.197684049379404],
									[120.42243373372992, 27.18872380256147],
									[120.42384946358197, 27.186105847307033],
									[120.42928993658143, 27.185066938788225],
									[120.43531751669013, 27.1779551504099],
									[120.43550300635877, 27.17692434748068],
									[120.43361234633278, 27.174461007269713],
									[120.43452465548853, 27.171542525567133],
									[120.43321764467862, 27.168061256222074],
									[120.43240234089535, 27.167656379638288],
									[120.43253121194596, 27.16864312927703],
									[120.42970692073789, 27.172413951542694],
									[120.42206369508358, 27.17642102121323],
									[120.42014372705137, 27.18176523977405],
									[120.42189832324902, 27.184438991666184],
									[120.42135325764673, 27.18641288035019],
									[120.41786565257792, 27.18810624710568],
									[120.41553437691005, 27.194595336805378],
									[120.41398966269287, 27.206611633719945],
									[120.42209935230335, 27.21519470217379],
									[120.42403042336537, 27.2292709349058],
									[120.41785144778612, 27.23991394007635],
									[120.42289710042087, 27.24746704107116],
									[120.43217146424172, 27.255020141166654],
									[120.42830717543586, 27.26703643808122],
									[120.41555464223302, 27.273216247332016],
									[120.3989892227745, 27.291250083424643],
									[120.3985664433867, 27.29733925989899],
									[120.39703230789473, 27.3015993466326],
									[120.38325512852145, 27.311400857063973],
									[120.37905472439604, 27.315741891774962],
									[120.37424383618418, 27.326804829978983],
									[120.37042360066869, 27.332313653252527],
									[120.36815103454262, 27.33382991741678],
									[120.36374176557013, 27.33486765951494],
									[120.36607754234478, 27.34394073527676],
									[120.36994457228423, 27.350807070789756],
									[120.36994457228423, 27.356643557554207],
									[120.36298406156527, 27.36248004431866],
									[120.3521565200075, 27.36831665069292],
									[120.34171557451418, 27.367973327307254],
									[120.33956738013057, 27.366759617562366],
									[120.33891932236884, 27.369343593731912],
									[120.34191388581723, 27.372507655104243],
									[120.34094297593765, 27.375962823425596],
									[120.34724369004437, 27.386657078261578],
									[120.34755609114075, 27.389274143187208],
									[120.3455323998005, 27.393722929269813],
									[120.33641642188047, 27.402740975515655],
									[120.32741703207046, 27.39914847442259],
									[120.32350191538114, 27.399249952123625],
									[120.31673982927975, 27.40158051822641],
									[120.31553850140074, 27.402812613711205],
									[120.31932264532384, 27.406367924240385],
									[120.31861442021943, 27.410104754830627],
									[120.3147320424498, 27.41135793851811],
									[120.31172149535075, 27.409834780151016],
									[120.3120014920753, 27.404506004748384],
									[120.30996169837374, 27.40022139530123],
									[120.31098154396318, 27.396420071629052],
									[120.30820152907734, 27.395069376250774],
									[120.30533829452668, 27.396635302777042],
									[120.30528926528746, 27.397913200733683],
									[120.30249210932345, 27.395363504921875],
									[120.29844312764828, 27.395370407218593],
									[120.28978625183413, 27.399609446219017],
									[120.28527538914796, 27.39911094121703],
									[120.28117676129852, 27.396467691630733],
									[120.27816398927678, 27.393066833367698],
									[120.2741622354988, 27.391462471615796],
									[120.26910598615245, 27.392618111236914],
									[120.26216902508054, 27.40398962392203],
									[120.25557655831153, 27.41020407775602],
									[120.25378073809065, 27.413247290030483],
									[120.2539616097406, 27.415878879906415],
									[120.25785035291153, 27.420495740286242],
									[120.25954757146326, 27.421204803558908],
									[120.26032203793181, 27.42955733710147],
									[120.25972768408542, 27.433498188790452],
									[120.25819526449993, 27.436098660324944],
									[120.24472740874296, 27.443083929379895],
									[120.24060433192449, 27.450678678877978],
									[120.2365297879195, 27.45537313905919],
									[120.22686174587295, 27.45902381369808],
									[120.2227531571325, 27.459052691828333],
									[120.21590257594323, 27.46106303453149],
									[120.21202279811371, 27.46075874352124],
									[120.2110154468055, 27.464003241156718],
									[120.20582986145905, 27.46661238755172],
									[120.2019157861846, 27.465662008295112],
									[120.19909231515828, 27.460332332671044],
									[120.19661402012105, 27.46160439672559],
									[120.19454944829852, 27.465508753925917],
									[120.19383798383592, 27.473841869306852],
									[120.19240111541922, 27.475336393259965],
									[120.18579214249348, 27.477482949078876],
									[120.18503297079508, 27.478490529714236],
									[120.17604328826724, 27.482144919452537],
									[120.17161553103199, 27.481616691856914],
									[120.16882287707415, 27.475419941177393],
									[120.16634459552677, 27.47625020338421],
									[120.16381603738023, 27.478829235081207],
									[120.16371644915489, 27.482783736680176],
									[120.16462489392381, 27.48543124275767],
									[120.16402983141165, 27.489809803479716],
									[120.16161756100166, 27.493208042017557],
									[120.15594883916765, 27.497986218289384],
									[120.15356975374118, 27.501935638718805],
									[120.14160793236022, 27.50079606638542],
									[120.14253186165615, 27.507649171072444],
									[120.13901342063286, 27.510400362686653],
									[120.12708859196505, 27.509264422714978],
									[120.12690693790489, 27.51249302033665],
									[120.13129890122343, 27.51497170208245],
									[120.13219073281618, 27.518925755819055],
									[120.12687320343571, 27.521107559666177],
									[120.12314107270242, 27.521103075646465],
									[120.11780846438921, 27.51911353696022],
									[120.11168536998389, 27.52032124283113],
									[120.1065363474745, 27.52003394271236],
									[120.10688250912051, 27.52450693584649],
									[120.10486955028955, 27.525781844456617],
									[120.10018454468104, 27.526551037300578],
									[120.09389983580888, 27.531038937596918],
									[120.08949689536553, 27.539070045346364],
									[120.08573758711998, 27.542046961398228],
									[120.0822431561968, 27.543733415964425],
									[120.06743235451961, 27.54473784987192],
									[120.0629537127437, 27.5468374844624],
									[120.06163545051572, 27.549264268131537],
									[120.06505983234547, 27.55428155075299],
									[120.06431910484287, 27.5563924727345],
									[120.06469753146598, 27.56089491956493],
									[120.06277051005111, 27.56403045534131],
									[120.0642852948306, 27.567145398441426],
									[120.07574961845023, 27.566393290018368],
									[120.07729741644266, 27.5689580890446],
									[120.07935751054072, 27.570090673645723],
									[120.08423577236306, 27.570324097179366],
									[120.08646108810876, 27.56596230341762],
									[120.08847184180217, 27.570416729148803],
									[120.09132474943772, 27.570337259656867],
									[120.09404482720709, 27.5717231419095]
								]
							],
							[
								[
									[120.50706055160322, 27.583873110455727],
									[120.50694065848461, 27.58339203701297],
									[120.50688922535755, 27.583584623231843],
									[120.50706055160322, 27.583873110455727]
								]
							]
						]
					}
				}, {
					type: "Feature",
					properties: {
						adcode: 330327,
						name: "龙港市",
						center: [120.406256, 27.507743],
						centroid: [120.462814, 27.411237],
						childrenNum: 0,
						level: "district",
						subFeatureIndex: 6,
						acroutes: [1e5, 33e4, 330300]
					},
					geometry: {
						type: "MultiPolygon",
						coordinates: [
							[
								[
									[120.70209655000008, 27.524958037000033],
									[120.70247982500007, 27.524756856000067],
									[120.70241139300003, 27.524370196000064],
									[120.70182862500008, 27.52422173100007],
									[120.70151446800003, 27.52430362900003],
									[120.70144694300006, 27.524540995000052],
									[120.70158613300009, 27.52479068400004],
									[120.70209655000008, 27.524958037000033]
								]
							],
							[
								[
									[120.70442769100009, 27.52595946200006],
									[120.70433042800005, 27.526124724000056],
									[120.70463689700011, 27.526343550000036],
									[120.70442769100009, 27.52595946200006]
								]
							],
							[
								[
									[120.70403760600004, 27.527117132000058],
									[120.7041908000001, 27.52677996400007],
									[120.70455531300001, 27.52656845200005],
									[120.70384505000004, 27.526250048000065],
									[120.70409011200002, 27.52617666200007],
									[120.70402327500005, 27.525914811000064],
									[120.7034895910001, 27.525753958000053],
									[120.70320829900004, 27.525889535000033],
									[120.70331756200005, 27.52615405000006],
									[120.70315768800003, 27.526162046000024],
									[120.7017559740001, 27.525519190000068],
									[120.70123574100012, 27.525507144000073],
									[120.7006682980001, 27.525003451000032],
									[120.70001187800005, 27.524977481000064],
									[120.69970542700003, 27.525167253000063],
									[120.69975703000011, 27.525452762000043],
									[120.70116845900009, 27.52643960000006],
									[120.70204310400004, 27.526740337000035],
									[120.70225301300002, 27.526627381000026],
									[120.70280982800011, 27.526803409000024],
									[120.70305028300004, 27.527050227000075],
									[120.70403760600004, 27.527117132000058]
								]
							],
							[
								[
									[120.7034711980001, 27.529456367000023],
									[120.70359301400003, 27.529496229000074],
									[120.70371936700008, 27.52921927700004],
									[120.70409508500006, 27.52900314900006],
									[120.70404792900001, 27.528811443000052],
									[120.70301328100004, 27.528348908000055],
									[120.70276089100003, 27.528433152000048],
									[120.70265862500003, 27.528190980000034],
									[120.70216565600003, 27.52829103700003],
									[120.7018830930001, 27.52815229600003],
									[120.7019712450001, 27.528060519000064],
									[120.70175137500007, 27.527868773000023],
									[120.70187292300011, 27.528121471000077],
									[120.70160344200008, 27.528252309000038],
									[120.70108069300011, 27.528095774000064],
									[120.70048557400003, 27.52828316500006],
									[120.7005320720001, 27.528562050000062],
									[120.700733463, 27.528608959000053],
									[120.70054241200012, 27.528791369000032],
									[120.70084885200004, 27.528921035000053],
									[120.7018117230001, 27.528936275000035],
									[120.70247084300001, 27.528700908000076],
									[120.70241456300005, 27.529064907000077],
									[120.70327967500009, 27.529122388000076],
									[120.70332791600003, 27.529461456000035],
									[120.7034711980001, 27.529456367000023]
								]
							],
							[
								[
									[120.59058856100012, 27.591060381000034],
									[120.58974304500009, 27.59093800200003],
									[120.59018391100005, 27.591025830000035],
									[120.59058856100012, 27.591060381000034]
								]
							],
							[
								[
									[120.49940473200002, 27.57039914300003],
									[120.50021554900002, 27.567422862000058],
									[120.50032500000009, 27.567021098000055],
									[120.50297094300004, 27.56630500700004],
									[120.50427809100006, 27.566779892000056],
									[120.50821321800004, 27.56820951900005],
									[120.51186825800005, 27.572297168000034],
									[120.51122299300005, 27.575592526000037],
									[120.51224672800004, 27.57547354700006],
									[120.5117938520001, 27.577138424000054],
									[120.50872945800006, 27.581231356000046],
									[120.50891661700007, 27.585277081000072],
									[120.51287066900011, 27.588965655000038],
									[120.51734244800002, 27.58966410100004],
									[120.5247031450001, 27.58688557100004],
									[120.5331952570001, 27.586526513000024],
									[120.53589665900006, 27.58723735800004],
									[120.54339015500011, 27.59456026500004],
									[120.5461889500001, 27.595623731000046],
									[120.5494240490001, 27.59488841600006],
									[120.55033403800007, 27.594087079000076],
									[120.55236566100007, 27.590518832000043],
									[120.55358171500006, 27.584939003000045],
									[120.56128585300007, 27.578712345000042],
									[120.56518972000003, 27.57763886400005],
									[120.56904017900001, 27.577852964000044],
									[120.57603001600012, 27.58066451600007],
									[120.58174145200007, 27.585628271000076],
									[120.58825111400006, 27.588417530000072],
									[120.59506833600005, 27.588919162000025],
									[120.60015463900004, 27.587611675000062],
									[120.60985863200005, 27.578443766000078],
									[120.61303344300006, 27.573245459000077],
									[120.63615648100006, 27.558401040000035],
									[120.65221784300002, 27.524345005000043],
									[120.65757163, 27.51601689100005],
									[120.65868687600005, 27.512153745000035],
									[120.66390621700009, 27.51137840800004],
									[120.66798245900009, 27.509024977000024],
									[120.66934371000002, 27.509341478000067],
									[120.66935241200008, 27.511969924000027],
									[120.6705160140001, 27.512763262000078],
									[120.67298996500006, 27.511869669000077],
									[120.67212474300004, 27.508113265000077],
									[120.66191864000007, 27.504070401000035],
									[120.66699171100004, 27.499771356000053],
									[120.66473090700003, 27.497442007000075],
									[120.6654633280001, 27.495118857000023],
									[120.66380325000011, 27.49331256200003],
									[120.66245895600002, 27.494270698000037],
									[120.66328140700011, 27.495580044000064],
									[120.66113700400001, 27.495546752000052],
									[120.65948048700011, 27.49303880900004],
									[120.65948294800012, 27.49143090000007],
									[120.65818946200011, 27.48987072500006],
									[120.65680313900009, 27.489234133000025],
									[120.65716548600005, 27.488329209000028],
									[120.65194468100003, 27.487826577000078],
									[120.65276110700006, 27.48682198700004],
									[120.6527731750001, 27.486054257000035],
									[120.65341733200012, 27.486072982000053],
									[120.65373955300004, 27.48482994400007],
									[120.65053496600001, 27.484490223000023],
									[120.65039741800001, 27.48410463700003],
									[120.65447445900008, 27.483666363000054],
									[120.65180356500002, 27.481250438000075],
									[120.64943880800001, 27.48136264900006],
									[120.64911294400008, 27.48102450400006],
									[120.64966755600005, 27.480306763000044],
									[120.64968253100005, 27.47870276100008],
									[120.65152444500006, 27.47647595600006],
									[120.65050656500011, 27.47421225200003],
									[120.65032368000004, 27.47142693400008],
									[120.64981527500004, 27.47096388600005],
									[120.64774291700007, 27.471939462000023],
									[120.64670330100012, 27.473689999000044],
									[120.64590094900007, 27.47380441300004],
									[120.64463859200009, 27.474972596000043],
									[120.64336026300009, 27.47515931500004],
									[120.64204221500006, 27.47447234200007],
									[120.64153050300001, 27.47343242100004],
									[120.63865227500003, 27.471722515000067],
									[120.635132655, 27.47216021400004],
									[120.63429216000009, 27.47271811300004],
									[120.63397452100003, 27.473979073000066],
									[120.6318731240001, 27.47322011800003],
									[120.63118846000009, 27.473243007000065],
									[120.63115566200008, 27.47367676300007],
									[120.63028035800005, 27.473699674000045],
									[120.63014310000005, 27.473158669000043],
									[120.62707407000005, 27.473549458000036],
									[120.62773095900002, 27.472324918000027],
									[120.62325968500011, 27.471031809000067],
									[120.62238523400003, 27.473061889000064],
									[120.62051134000001, 27.474387415000024],
									[120.62100154600012, 27.47534765100005],
									[120.61967340600006, 27.47578220200006],
									[120.6185597650001, 27.474187176000044],
									[120.61709828700009, 27.474531721000062],
									[120.61642070200003, 27.473841752000055],
									[120.61542571000007, 27.47404973400006],
									[120.61520749600004, 27.472361118000038],
									[120.61311980400001, 27.472510292000038],
									[120.61312168100005, 27.477874858000064],
									[120.6105231140001, 27.478228255000033],
									[120.61064656700012, 27.478911630000027],
									[120.60838491600009, 27.479683202000047],
									[120.60825227100008, 27.477861459000053],
									[120.6069042260001, 27.477969311000038],
									[120.60642765400007, 27.47823849100007],
									[120.60653217700008, 27.479419376000067],
									[120.60503558000005, 27.479318877000026],
									[120.60478372400007, 27.480336169000054],
									[120.603078116, 27.480093947000057],
									[120.60245858400003, 27.481914975000052],
									[120.60120466700005, 27.481529674000058],
									[120.60116382500007, 27.481017734000034],
									[120.60041680000006, 27.480606202000047],
									[120.5994278180001, 27.48073092900006],
									[120.59699344600006, 27.478294795000068],
									[120.59692360800011, 27.47737453700006],
									[120.59769982400007, 27.47690024900004],
									[120.59718295100004, 27.47630705100005],
									[120.59663290000003, 27.476693021000074],
									[120.59622475000003, 27.476203404000046],
									[120.59587220200001, 27.47640235800003],
									[120.5959907570001, 27.47542255700006],
									[120.59454064300007, 27.473680356000045],
									[120.59618124500003, 27.472333881000054],
									[120.59509066400005, 27.47116335900006],
									[120.5947754990001, 27.471420443000056],
									[120.59329648200003, 27.470655272000045],
									[120.58919602000003, 27.473798440000053],
									[120.58770610200008, 27.473228203000076],
									[120.5866772930001, 27.473822348000056],
									[120.58426130200007, 27.47240038800004],
									[120.58193504000008, 27.47388638900003],
									[120.58249125400005, 27.474815911000064],
									[120.5829967630001, 27.474597181000036],
									[120.58384027600005, 27.475137086000075],
									[120.58356282200009, 27.47543992100003],
									[120.58435122800006, 27.476633759000038],
									[120.57947642800002, 27.480686476000074],
									[120.57999001700011, 27.481395682000027],
									[120.58048389700002, 27.48100032900004],
									[120.5818596800001, 27.48228696700005],
									[120.5800790720001, 27.483681803000025],
									[120.58006323000006, 27.48447536100008],
									[120.58063021500004, 27.484777954000037],
									[120.58140188100003, 27.48416489500005],
									[120.58351184300011, 27.485773170000073],
									[120.58260688500002, 27.485763716000065],
									[120.5831181320001, 27.486209033000023],
									[120.58433148800009, 27.485876405000056],
									[120.58572000400011, 27.48748832700005],
									[120.58652546000008, 27.486915252000074],
									[120.58755454300001, 27.488158201000033],
									[120.58451636100006, 27.48980363100003],
									[120.58497872400005, 27.490576231000034],
									[120.58427614700008, 27.490861989000052],
									[120.58443387800003, 27.491332383000042],
									[120.58288163400005, 27.491531090000024],
									[120.58398564100003, 27.493682007000075],
									[120.58279456500009, 27.494193678000045],
									[120.58340496100004, 27.495846680000056],
									[120.58313431700003, 27.497814066000046],
									[120.58445153900004, 27.501406603000078],
									[120.58430759700002, 27.50214364800007],
									[120.58272673800002, 27.502361397000072],
									[120.58298544800004, 27.503119622000042],
									[120.58266123300007, 27.503274977000046],
									[120.58316799500005, 27.504321814000036],
									[120.58392782500005, 27.504359692000037],
									[120.58454852500006, 27.50704018700003],
									[120.58409324600007, 27.507259241000042],
									[120.5845376420001, 27.50800597500006],
									[120.58420080500002, 27.51097525600005],
									[120.58222707700008, 27.510908345000075],
									[120.58240550100004, 27.513558234000072],
									[120.58255843000006, 27.51428971400003],
									[120.58331394400011, 27.514283125000077],
									[120.58328721500004, 27.515084125000044],
									[120.58399192500008, 27.515096334000077],
									[120.58388918000003, 27.516630130000067],
									[120.58488097100008, 27.516318691000038],
									[120.58508190400005, 27.51726633900006],
									[120.58588497100004, 27.517437333000032],
									[120.58569552100005, 27.517978024000058],
									[120.58533083200007, 27.518340248000072],
									[120.58430063100002, 27.518220426000028],
									[120.58436734000009, 27.517703522000033],
									[120.5819599140001, 27.517737299000032],
									[120.583287143, 27.519871439000042],
									[120.58309471900009, 27.520171692000076],
									[120.5759386530001, 27.51988295500007],
									[120.57580583700008, 27.52145639400004],
									[120.57321039400006, 27.521752371000048],
									[120.57372858700012, 27.52207320900004],
									[120.57387982700004, 27.523030763000065],
									[120.5721919880001, 27.522444397000072],
									[120.57184911000002, 27.523455055000056],
									[120.57292430300004, 27.52406740500004],
									[120.57222101700006, 27.52674522800004],
									[120.57096382500004, 27.52639366300008],
									[120.570544788, 27.527159535000067],
									[120.56963153000004, 27.526906722000035],
									[120.56983050200006, 27.52634921400005],
									[120.56759469500003, 27.525719824000078],
									[120.56794180400004, 27.524637417000065],
									[120.56719209800008, 27.524374624000075],
									[120.56678932900002, 27.52549560400007],
									[120.56565905100001, 27.52515352100005],
									[120.56584748600005, 27.52400171100004],
									[120.56541958300011, 27.524860311000054],
									[120.5637306430001, 27.524359460000028],
									[120.56394352600012, 27.52354634200003],
									[120.55935160500007, 27.522463558000027],
									[120.55879408800001, 27.522842660000038],
									[120.55798410500006, 27.522621086000072],
									[120.55706440100005, 27.524625204000074],
									[120.5572804410001, 27.52526018700007],
									[120.55571545600003, 27.52715048400006],
									[120.55491177800002, 27.526953125000034],
									[120.55440918400006, 27.527448958000036],
									[120.55048639600011, 27.526350189000027],
									[120.54985186700003, 27.528539068000043],
									[120.5464588860001, 27.527604057000076],
									[120.54510588900007, 27.528289031000043],
									[120.54533751500003, 27.529410631000076],
									[120.54617892700003, 27.53013739900007],
									[120.54622803300003, 27.530820779000067],
									[120.54538251700001, 27.53100627200007],
									[120.54457693900008, 27.53104072700006],
									[120.54399426500004, 27.530389570000068],
									[120.54104971900006, 27.53144040500007],
									[120.54112889200007, 27.530647570000042],
									[120.54013332600005, 27.530520369000044],
									[120.54014977800011, 27.53005186200005],
									[120.538529272, 27.529961550000053],
									[120.53828855500001, 27.53067123200003],
									[120.53698612000005, 27.530357536000054],
									[120.53684043600003, 27.532009955000035],
									[120.53421195700002, 27.53209392900004],
									[120.53348621300006, 27.533959388000028],
									[120.53215991400009, 27.53372237700006],
									[120.53194075700003, 27.53451602900003],
									[120.5303287800001, 27.53419684800008],
									[120.53009463000001, 27.53454958100008],
									[120.52869511400002, 27.53358596700008],
									[120.52685441200003, 27.53590951700005],
									[120.52598465500012, 27.53522640700004],
									[120.52626691900002, 27.53471556200003],
									[120.52564166000002, 27.533979043000045],
									[120.5257975940001, 27.532404023000026],
									[120.52252522600008, 27.531921170000032],
									[120.52234385200006, 27.53102006100005],
									[120.52242434100003, 27.53022528200006],
									[120.52663098800008, 27.525256513000045],
									[120.5267376810001, 27.52474462600003],
									[120.5259558240001, 27.524098284000047],
									[120.52651251800012, 27.523583891000044],
									[120.52566398800002, 27.522807401000023],
									[120.52576459500006, 27.52205603300007],
									[120.52461786900005, 27.52144868700003],
									[120.52277641300009, 27.521459853000067],
									[120.52221743200005, 27.522150751000027],
									[120.52211745400007, 27.52084497000004],
									[120.52137830700008, 27.520698109000023],
									[120.52132398600008, 27.521785627000042],
									[120.52074342800006, 27.522237578000045],
									[120.52073486200004, 27.52084492000006],
									[120.52003867700012, 27.520621720000065],
									[120.51963981200004, 27.522072750000063],
									[120.5191293580001, 27.519881509000072],
									[120.51879624000003, 27.519963157000063],
									[120.5189296850001, 27.520884653000053],
									[120.51850050600001, 27.52094426900004],
									[120.51844105100008, 27.519965470000045],
									[120.51688957100009, 27.520114896000052],
									[120.51604212400002, 27.51837772500005],
									[120.51783218700007, 27.517498208000063],
									[120.51644968000005, 27.51408516300006],
									[120.5154740700001, 27.514245782000046],
									[120.51446144400006, 27.513449421000075],
									[120.5118936340001, 27.513214952000055],
									[120.51125838100006, 27.51244931800005],
									[120.51039222600002, 27.512266880000027],
									[120.51117848500007, 27.512043523000045],
									[120.51183844100001, 27.51081365300007],
									[120.51187962400002, 27.51043746600004],
									[120.51035425400005, 27.510148065000067],
									[120.51086272700002, 27.50845957000007],
									[120.5125698490001, 27.507606413000076],
									[120.5123370550001, 27.505901012000038],
									[120.51282806100005, 27.50573160700003],
									[120.51324916400006, 27.503937506000057],
									[120.51439810000011, 27.503393711000058],
									[120.51369497900009, 27.501859026000034],
									[120.5138074350001, 27.500860818000035],
									[120.51317942800006, 27.501495469000076],
									[120.51314538600002, 27.502586162000057],
									[120.51199819700003, 27.503553418000024],
									[120.51081635600008, 27.50259476800005],
									[120.5120061340001, 27.50103565300003],
									[120.51059927400001, 27.49953981500005],
									[120.51057458200012, 27.49859598100005],
									[120.50915032400007, 27.498576383000056],
									[120.50853772700009, 27.49808274700007],
									[120.50780815200005, 27.499089076000075],
									[120.50587768500009, 27.499046203000034],
									[120.50492897900006, 27.49958604400007],
									[120.50314814000001, 27.498644418000026],
									[120.50081216600006, 27.498531830000047],
									[120.49862728700009, 27.499137887000074],
									[120.4964436360001, 27.498128312000063],
									[120.49363237600005, 27.498180184000034],
									[120.49154962300008, 27.496770042000037],
									[120.49040622500002, 27.495223275000058],
									[120.48828753600003, 27.494361969000067],
									[120.4818517430001, 27.494083534000026],
									[120.48094730800005, 27.49518788100005],
									[120.48092960400004, 27.496446543000047],
									[120.48021240700007, 27.497329507000074],
									[120.48011601600001, 27.49976672400004],
									[120.47862492000002, 27.500113876000057],
									[120.4767805780001, 27.498970529000076],
									[120.47526379400006, 27.499086083000066],
									[120.47401965000006, 27.500054830000067],
									[120.47237465800004, 27.49996422600003],
									[120.47295146300007, 27.50199198200005],
									[120.47260310800004, 27.502461700000026],
									[120.46841266500007, 27.50197078700006],
									[120.46434817800002, 27.503390916000058],
									[120.46385976600004, 27.50413812200003],
									[120.46455967700001, 27.50505002500006],
									[120.4629213500001, 27.50726974500003],
									[120.46235098800003, 27.50735204700004],
									[120.46188670800007, 27.50911314800004],
									[120.468286207, 27.512210653000068],
									[120.47577618500009, 27.518337208000048],
									[120.47686335200001, 27.52084713800008],
									[120.47596890400007, 27.522449179000034],
									[120.47323721100008, 27.524120209000046],
									[120.47318018200008, 27.52524192100003],
									[120.47947617900002, 27.52757772500007],
									[120.48248960100011, 27.527564683000037],
									[120.48312530600003, 27.528124142000024],
									[120.48245588200007, 27.529670848000023],
									[120.48374974900003, 27.531406293000032],
									[120.48472497600005, 27.533871188000035],
									[120.48468989800006, 27.537293160000047],
									[120.4854594840001, 27.54089001400007],
									[120.48661952500004, 27.54220686000008],
									[120.48387260200002, 27.543731024000067],
									[120.4811680900001, 27.543918876000077],
									[120.48074660500004, 27.544411610000054],
									[120.48385593700004, 27.54718334300003],
									[120.48502869000004, 27.55193957800003],
									[120.48418430900006, 27.555212028000028],
									[120.48459753800012, 27.559401183000034],
									[120.49053442800005, 27.563811775000033],
									[120.48677988300005, 27.57023954500005],
									[120.47953675500003, 27.574169290000043],
									[120.47472376100006, 27.581317553000076],
									[120.48193412400008, 27.580331268000066],
									[120.48939180100001, 27.582053323000025],
									[120.49346119200004, 27.58080549500005],
									[120.49666949700008, 27.577651111000023],
									[120.49830688800012, 27.57442902200006],
									[120.49940473200002, 27.57039914300003]
								]
							]
						]
					}
				}, {
					type: "Feature",
					properties: {
						adcode: 330328,
						name: "文成县",
						center: [120.09245, 27.789133],
						centroid: [120.022316, 27.807567],
						childrenNum: 0,
						level: "district",
						subFeatureIndex: 7,
						acroutes: [1e5, 33e4, 330300]
					},
					geometry: {
						type: "MultiPolygon",
						coordinates: [
							[
								[
									[120.22563830816148, 27.934569444024646],
									[120.22344290296769, 27.93259043550023],
									[120.2253589274726, 27.920491922564224],
									[120.22022650375015, 27.91734816338709],
									[120.21643006069883, 27.909215122879687],
									[120.2195501101495, 27.9064077353288],
									[120.22437015076196, 27.896444215628094],
									[120.2233147450795, 27.892032657880918],
									[120.21215569722767, 27.89319877999975],
									[120.20995915439153, 27.891767911859688],
									[120.20632793748439, 27.880930487651938],
									[120.19432012477398, 27.87430265954015],
									[120.18858796386348, 27.8733509681727],
									[120.18721678013037, 27.866016423119504],
									[120.19362815221746, 27.85013467547492],
									[120.19161386688654, 27.836688268548812],
									[120.18099222870842, 27.815872596443228],
									[120.17040035809009, 27.80730671313438],
									[120.17064936327756, 27.80363064883545],
									[120.17671298641528, 27.80299787774993],
									[120.18360394176852, 27.797888684415284],
									[120.19247634280907, 27.794431450351226],
									[120.19348472923696, 27.78462774377539],
									[120.19586401071558, 27.782903327026986],
									[120.20620314216137, 27.781582273303343],
									[120.20816789733067, 27.776918218301205],
									[120.21901569701686, 27.76596095673284],
									[120.21984152736468, 27.7615451712727],
									[120.22771374649221, 27.758093981552065],
									[120.23906474923888, 27.747504804403263],
									[120.25260179343809, 27.742679021619608],
									[120.25210784080423, 27.73920475079865],
									[120.24755779645523, 27.73362488288211],
									[120.24069845496979, 27.73260343470082],
									[120.2276340737535, 27.72541314719905],
									[120.22713957163398, 27.722205477700697],
									[120.22941634298991, 27.71638932550701],
									[120.22116574310462, 27.709936572015238],
									[120.22045675447566, 27.706445600783923],
									[120.2160988233021, 27.704255135566086],
									[120.20619189523984, 27.704668334476082],
									[120.20064325178475, 27.699109013370332],
									[120.19084831000157, 27.697867418346732],
									[120.19111219896888, 27.695398639036],
									[120.18889950700668, 27.692139613752204],
									[120.1853639860592, 27.69008930247935],
									[120.17934908459267, 27.690109496755895],
									[120.17308741545196, 27.685537515244164],
									[120.16712204594569, 27.685510301759052],
									[120.1594704925692, 27.68908225604133],
									[120.15581898425876, 27.68880749427052],
									[120.151605334019, 27.68434950002944],
									[120.14421969937973, 27.687214936120483],
									[120.13886802184174, 27.681025748739387],
									[120.12912276850102, 27.685099937512177],
									[120.12998154820991, 27.687979323886736],
									[120.12669487147116, 27.68986220747496],
									[120.12147787730225, 27.6869468437219],
									[120.11548581951502, 27.67910828981576],
									[120.11206956126125, 27.669275750075883],
									[120.11946463698348, 27.663178924867566],
									[120.11926757483877, 27.658915443193223],
									[120.11139387003118, 27.650571031428],
									[120.10649309637938, 27.652409016363038],
									[120.10358916570749, 27.651211544777027],
									[120.10088418755527, 27.64570523780651],
									[120.10235245220395, 27.639758427609422],
									[120.10171104762685, 27.62166340704067],
									[120.10847573906415, 27.61763853888749],
									[120.11398832689986, 27.611536344726574],
									[120.11440154019897, 27.60530552503002],
									[120.10898903791383, 27.598093351626915],
									[120.09745712034987, 27.597065645962857],
									[120.09557792128408, 27.588518288688135],
									[120.08876819719455, 27.58108966825364],
									[120.08580060891109, 27.58102750171787],
									[120.08143279418812, 27.584523471381146],
									[120.07815341005187, 27.582637486031217],
									[120.07428128725167, 27.585111522778618],
									[120.07171180905277, 27.584294891596016],
									[120.06901099566096, 27.57976468089538],
									[120.0743986964427, 27.56669341087229],
									[120.0642852948306, 27.567145398441426],
									[120.05560912316253, 27.569960338498902],
									[120.04361289012286, 27.576658216603448],
									[120.04234573546739, 27.57817194827686],
									[120.04479628462093, 27.587437777531477],
									[120.041209614732, 27.590262529192444],
									[120.02838240632309, 27.588011504527344],
									[120.02236388328663, 27.592466662306663],
									[120.01248445199587, 27.596224781648402],
									[120.01044618804121, 27.598811812814972],
									[120.01083996069565, 27.602335723514898],
									[120.01647776203913, 27.61212359572744],
									[120.00401849865489, 27.619619553799396],
									[120.0069600012032, 27.621766802096317],
									[120.00464268840938, 27.622859791346343],
									[120.00451087657575, 27.6247162591481],
									[120.00143761165657, 27.62458453364934],
									[120.0007475564546, 27.62194252512751],
									[119.99583357266135, 27.627748684953872],
									[119.98565995514286, 27.631791682540154],
									[119.98316089116224, 27.6352763153497],
									[119.98491866916129, 27.64667764505731],
									[119.98306092881887, 27.65118244991021],
									[119.98403128291739, 27.654419747573343],
									[119.99024353071445, 27.65685518631784],
									[119.99486009971395, 27.66634278209375],
									[119.99214853312833, 27.672249448353398],
									[119.9921971055121, 27.67624359926276],
									[119.98817133533896, 27.6755007430649],
									[119.98677366747086, 27.677817134053555],
									[119.99265767800955, 27.679639460892474],
									[119.99326497669733, 27.681729779405828],
									[119.98292743345439, 27.688303496209414],
									[119.98355140647232, 27.694686186218576],
									[119.97539776519477, 27.69939652123253],
									[119.96865812437295, 27.69977750912477],
									[119.96561684384233, 27.698165606557552],
									[119.96083246854369, 27.688176248435184],
									[119.93839542670764, 27.68541027376517],
									[119.92598249549587, 27.69326202252438],
									[119.9209259017091, 27.69095570933854],
									[119.91906485096217, 27.68502809337184],
									[119.91651220177675, 27.685832488378708],
									[119.91735175128235, 27.69051914784046],
									[119.9134137324578, 27.69289652005841],
									[119.90416841044384, 27.687994788628657],
									[119.91028407375109, 27.682613678078837],
									[119.89899185878733, 27.677048860316688],
									[119.88983872807489, 27.676733647939557],
									[119.87856833875787, 27.68759528549407],
									[119.87719734927828, 27.695582880445613],
									[119.87201320284714, 27.701270643625378],
									[119.87396134394089, 27.709716344233925],
									[119.87176496478139, 27.711192340354273],
									[119.87552812752108, 27.72495333193075],
									[119.87275469117617, 27.72740400609007],
									[119.86534110380899, 27.72923501138672],
									[119.85756221002805, 27.738593673159528],
									[119.85054122259942, 27.740029135935913],
									[119.84442801803868, 27.74959211018779],
									[119.83745523067444, 27.752283132660523],
									[119.83482747191033, 27.75515469763127],
									[119.82671368318995, 27.757449881706748],
									[119.82620204628745, 27.759272147391755],
									[119.83210014290728, 27.77399407086972],
									[119.83138852376146, 27.781221715309982],
									[119.82783544355095, 27.79050134825866],
									[119.83112261401743, 27.796101278251456],
									[119.82943712082658, 27.80367121455498],
									[119.82067813958452, 27.8079593709283],
									[119.81667949656162, 27.80768484118255],
									[119.81234972585924, 27.81111733129984],
									[119.80103213832263, 27.811003284673916],
									[119.79577940869285, 27.809030365459023],
									[119.78770396706454, 27.78837327710511],
									[119.78511078993108, 27.79003493916116],
									[119.78425127367746, 27.797214802621113],
									[119.78042068336788, 27.79901620673263],
									[119.78154267035802, 27.804674397505494],
									[119.7801063748094, 27.807217008458224],
									[119.78340824559416, 27.811761801665853],
									[119.77909759537783, 27.81552703014836],
									[119.77947681340424, 27.82300459528591],
									[119.78111210014333, 27.825739984912445],
									[119.78926952127142, 27.829630533022737],
									[119.78884023438934, 27.832881411348126],
									[119.78365407977208, 27.83391045520341],
									[119.78114431475842, 27.8367507102771],
									[119.78064725856416, 27.849393075629962],
									[119.78434589494714, 27.85643289216432],
									[119.78429655903903, 27.859322287093903],
									[119.78043158944638, 27.864907284743424],
									[119.78548442046974, 27.87034664708017],
									[119.79261854081312, 27.884205185421024],
									[119.7955743174009, 27.893833368615105],
									[119.79388866862723, 27.898116424933107],
									[119.78640711589571, 27.901841058018476],
									[119.78440824944119, 27.905165907380763],
									[119.78529986070009, 27.910677008637094],
									[119.78181488165148, 27.912555786820178],
									[119.78858490516927, 27.919424019902635],
									[119.80011482803695, 27.925405993591767],
									[119.80713612303373, 27.92533912629972],
									[119.82075313674795, 27.915084502347952],
									[119.82855304049053, 27.91467510217427],
									[119.83070115573378, 27.916798466276248],
									[119.83261722880218, 27.923393114800433],
									[119.84669406677779, 27.93558012372381],
									[119.8268970945254, 27.954970620397887],
									[119.82907813394877, 27.959539451584476],
									[119.84158575118158, 27.964379047055445],
									[119.84646028171665, 27.963728323703208],
									[119.85039170581263, 27.965304036652014],
									[119.85757899497469, 27.9529359942008],
									[119.85913081203739, 27.952452118470546],
									[119.86126175112895, 27.954243330565305],
									[119.86240069933285, 27.96354834687878],
									[119.86109517780028, 27.969774614207154],
									[119.87082093293975, 27.977566537365874],
									[119.87720958455475, 27.970906458666207],
									[119.88773912046406, 27.954785389734013],
									[119.89397415258509, 27.958332715182735],
									[119.90246614040007, 27.957673297184954],
									[119.90671912338894, 27.9596492597056],
									[119.92424836157272, 27.972232098932295],
									[119.94118699248577, 27.97725649609049],
									[119.95097651855156, 27.97828728193258],
									[119.95415114695788, 27.977071769946292],
									[119.95589381364869, 27.979436989625412],
									[119.95803179623044, 27.979556786516525],
									[119.9618638740186, 27.97129578777043],
									[119.96424804511128, 27.97006636417143],
									[119.96433019728079, 27.965830469200853],
									[119.96020385592328, 27.962734662774494],
									[119.96188063828095, 27.960848068583573],
									[119.95773733930685, 27.953578350260727],
									[119.95859343453947, 27.94395866206264],
									[119.9624909155234, 27.94092024677201],
									[119.99674596815203, 27.944241521329218],
									[120.00236655197489, 27.94612277084923],
									[120.00221760805618, 27.950265896254166],
									[120.00486388026388, 27.951121055292504],
									[120.0159594629589, 27.942772011119473],
									[120.02309320828499, 27.942799028552372],
									[120.02722023402669, 27.94446723767294],
									[120.03382944347413, 27.952812795174395],
									[120.03840207609505, 27.95423014650413],
									[120.05892116168229, 27.954143375416493],
									[120.06372822957417, 27.95834115981671],
									[120.05969371169545, 27.964323845768945],
									[120.06354636507274, 27.970875416767115],
									[120.06965498938632, 27.97537076165139],
									[120.07235626592899, 27.975037974722795],
									[120.07411933194169, 27.970456636664494],
									[120.07977146757923, 27.970169376115848],
									[120.08758369023519, 27.977602103754123],
									[120.09107881813304, 27.979075677100866],
									[120.0944250048102, 27.985788606259234],
									[120.09589349159148, 27.984204457669648],
									[120.11283734306903, 27.985671339161],
									[120.13687896069553, 27.97923677895426],
									[120.13934025944548, 27.979695668820113],
									[120.14122396501409, 27.982773163250954],
									[120.15597810760369, 27.980555457568357],
									[120.15705198626017, 27.983365872237243],
									[120.16356289890871, 27.98362803450624],
									[120.16747950397598, 27.981722102193316],
									[120.17225493911417, 27.975363073347182],
									[120.17040545095085, 27.963530709374766],
									[120.1724213820412, 27.96282937937241],
									[120.17389217018751, 27.956117044665916],
									[120.18344380668634, 27.951741824925307],
									[120.19337362519275, 27.940665020973995],
									[120.20967504057069, 27.938115188465247],
									[120.21433169505178, 27.938873763913136],
									[120.22563830816148, 27.934569444024646]
								]
							]
						]
					}
				}, {
					type: "Feature",
					properties: {
						adcode: 330329,
						name: "泰顺县",
						center: [119.71624, 27.557309],
						centroid: [119.877783, 27.531151],
						childrenNum: 0,
						level: "district",
						subFeatureIndex: 8,
						acroutes: [1e5, 33e4, 330300]
					},
					geometry: {
						type: "MultiPolygon",
						coordinates: [
							[
								[
									[120.0642852948306, 27.567145398441426],
									[120.06277051005111, 27.56403045534131],
									[120.06469753146598, 27.56089491956493],
									[120.06505983234547, 27.55428155075299],
									[120.06163545051572, 27.549264268131537],
									[120.0629537127437, 27.5468374844624],
									[120.06743235451961, 27.54473784987192],
									[120.0822431561968, 27.543733415964425],
									[120.08573758711998, 27.542046961398228],
									[120.08949689536553, 27.539070045346364],
									[120.09389983580888, 27.531038937596918],
									[120.10018454468104, 27.526551037300578],
									[120.10688250912051, 27.52450693584649],
									[120.1065363474745, 27.52003394271236],
									[120.11780846438921, 27.51911353696022],
									[120.12687320343571, 27.521107559666177],
									[120.13219073281618, 27.518925755819055],
									[120.13129890122343, 27.51497170208245],
									[120.12690693790489, 27.51249302033665],
									[120.12708859196505, 27.509264422714978],
									[120.13901342063286, 27.510400362686653],
									[120.14253186165615, 27.507649171072444],
									[120.14160793236022, 27.50079606638542],
									[120.15356975374118, 27.501935638718805],
									[120.16402983141165, 27.489809803479716],
									[120.16381603738023, 27.478829235081207],
									[120.16634459552677, 27.47625020338421],
									[120.16882287707415, 27.475419941177393],
									[120.17161553103199, 27.481616691856914],
									[120.17604328826724, 27.482144919452537],
									[120.19240111541922, 27.475336393259965],
									[120.19383798383592, 27.473841869306852],
									[120.19454944829852, 27.465508753925917],
									[120.19661402012105, 27.46160439672559],
									[120.19909231515828, 27.460332332671044],
									[120.2019157861846, 27.465662008295112],
									[120.20582986145905, 27.46661238755172],
									[120.2110154468055, 27.464003241156718],
									[120.21202279811371, 27.46075874352124],
									[120.22686174587295, 27.45902381369808],
									[120.2365297879195, 27.45537313905919],
									[120.24472740874296, 27.443083929379895],
									[120.24265012320473, 27.437772391282863],
									[120.2337602276524, 27.43242758906206],
									[120.2252794642759, 27.429663897770695],
									[120.21732509028072, 27.423478681795757],
									[120.20890492772025, 27.423469096821407],
									[120.19805388328018, 27.43152386573388],
									[120.18878682645095, 27.430499903947464],
									[120.17737046547461, 27.42387632693101],
									[120.17249547988251, 27.423078352184234],
									[120.16689399676056, 27.425747479762435],
									[120.16282818067612, 27.425518861306443],
									[120.16117620521777, 27.427896473643386],
									[120.13733459231764, 27.4252223934987],
									[120.13000185759972, 27.422879099291038],
									[120.1260062587819, 27.41642777572133],
									[120.13267855297295, 27.405371149858752],
									[120.13158935616389, 27.39986740505674],
									[120.12848435237106, 27.396505709570874],
									[120.12435631399273, 27.39467184443015],
									[120.11705810694616, 27.40044923944089],
									[120.11288256457874, 27.400572613835095],
									[120.10260229915684, 27.398610849810893],
									[120.09381121841307, 27.394841677801253],
									[120.09166760787389, 27.393375981616316],
									[120.09227889775298, 27.38265459243553],
									[120.08497570846225, 27.37999163870319],
									[120.07749441833278, 27.374067747728418],
									[120.07245296283406, 27.372242266067758],
									[120.06751219633088, 27.364268852525583],
									[120.06311576518044, 27.36266569046927],
									[120.05959274840666, 27.35801956165352],
									[120.05659701404102, 27.350501624150695],
									[120.0509522123748, 27.3501645537512],
									[120.04772700429783, 27.34174831493283],
									[120.03506326655656, 27.348403930297195],
									[120.01920866944465, 27.3635101313875],
									[120.00495723798622, 27.373632440784547],
									[120.00356001258456, 27.37838632007265],
									[119.9897705412775, 27.382417543734732],
									[119.98424857800956, 27.379233685586144],
									[119.98400185170419, 27.375757333734043],
									[119.9559238051396, 27.369424199067566],
									[119.95222253284373, 27.36672136579847],
									[119.95084109863785, 27.363287094124132],
									[119.95209213294561, 27.36164354171615],
									[119.959657170642, 27.3638019541969],
									[119.9603262707409, 27.36179351805646],
									[119.94805610150797, 27.35698688004055],
									[119.93413484085033, 27.343253969794944],
									[119.92409932592318, 27.34050750771536],
									[119.92603135116599, 27.33226764213805],
									[119.93491947685243, 27.329521059549336],
									[119.93455423968646, 27.327154623087438],
									[119.94071480524417, 27.322313070691735],
									[119.93917024121367, 27.31853485150225],
									[119.92023491840678, 27.320594668609147],
									[119.91498184703471, 27.316834497014497],
									[119.90864181546749, 27.321281433191643],
									[119.90134300947238, 27.321727049963442],
									[119.89588940187446, 27.318878054378786],
									[119.89473106248863, 27.314911613380332],
									[119.88733516748403, 27.314230874255486],
									[119.88313686867161, 27.317161441047745],
									[119.88043177090958, 27.312355041352134],
									[119.87461820966269, 27.31300831877894],
									[119.8737932300736, 27.30522918577833],
									[119.87022951088329, 27.304801941256642],
									[119.86922514442495, 27.310981750507437],
									[119.86311203878961, 27.309577398877934],
									[119.86075174559664, 27.31062585190159],
									[119.86636332540718, 27.315271106576347],
									[119.8673041070989, 27.318600531689242],
									[119.85475259485645, 27.32038227482218],
									[119.85135004137135, 27.318089468554206],
									[119.8417834905157, 27.327412546851633],
									[119.83715093157025, 27.3250578645289],
									[119.83019494983716, 27.315788150203048],
									[119.83869647945903, 27.30789184543238],
									[119.83696536276136, 27.30319227800129],
									[119.83026831023437, 27.304674267203723],
									[119.82241395074334, 27.303490977027025],
									[119.82217067873387, 27.30499097965003],
									[119.81856917452785, 27.305236157322838],
									[119.817276417073, 27.30069036766639],
									[119.81530949543696, 27.2995193280546],
									[119.80812546631728, 27.30286644732871],
									[119.8053493661804, 27.30778347442788],
									[119.78845965838661, 27.314071655582495],
									[119.78536832338943, 27.30720520045969],
									[119.78280705240365, 27.30619389573178],
									[119.7754062497986, 27.306999143295855],
									[119.77068364623335, 27.31029510463543],
									[119.76593120765915, 27.30891514621709],
									[119.76418952842403, 27.31195277460091],
									[119.76705753837473, 27.31643188042699],
									[119.76618802525718, 27.329435348762388],
									[119.76861997643084, 27.329884766968462],
									[119.773868322765, 27.323255538612273],
									[119.78082394566866, 27.326860427866507],
									[119.78058814882411, 27.329626430415487],
									[119.77687312139744, 27.333738309775242],
									[119.76862008614808, 27.334663488229467],
									[119.76556980969906, 27.337340180904675],
									[119.76332421783843, 27.34048259019943],
									[119.76546335245177, 27.346944809055742],
									[119.7634346482904, 27.350549578700168],
									[119.75503904441643, 27.350047033943497],
									[119.75169694425858, 27.35260963412736],
									[119.74699602334783, 27.35328279286665],
									[119.74329197394547, 27.363166808901155],
									[119.73582346138369, 27.36607932719926],
									[119.74185371427757, 27.373466372874873],
									[119.74649357751662, 27.37629890457083],
									[119.74576854678105, 27.38067615048402],
									[119.74301373989226, 27.381706237552862],
									[119.73601720143279, 27.379316907049656],
									[119.73692381338333, 27.384023546749347],
									[119.7354737519122, 27.389945864809874],
									[119.72778904412917, 27.39329326197452],
									[119.72735404925004, 27.398056864732553],
									[119.72276571086888, 27.40009399554151],
									[119.7214092013736, 27.403335451669818],
									[119.71742270099696, 27.405955073367977],
									[119.70550118183417, 27.40715123194383],
									[119.70632934592265, 27.413120150174848],
									[119.69995396470381, 27.420313894670528],
									[119.7000345853279, 27.42793339800795],
									[119.69455334965744, 27.428982888849305],
									[119.69006036909082, 27.43300892612109],
									[119.68488502972036, 27.43408821599843],
									[119.68082888224717, 27.441425427541503],
									[119.6841357253835, 27.44370273309471],
									[119.69017875224768, 27.442603111344567],
									[119.69073938511463, 27.44549421948267],
									[119.69888150697602, 27.449169158729717],
									[119.69917154283246, 27.455863953059065],
									[119.70091211770011, 27.456636428428453],
									[119.69954850625857, 27.461346534115307],
									[119.70569837078324, 27.466678619023128],
									[119.70223176488412, 27.47414577001132],
									[119.70498991005638, 27.477493167175965],
									[119.70314863809926, 27.48165909039477],
									[119.70644152195871, 27.484960555585246],
									[119.7028775059922, 27.486101670255948],
									[119.70193897350487, 27.48971355713502],
									[119.70586085309594, 27.492041468439083],
									[119.70557045930934, 27.498993753958644],
									[119.69831263991648, 27.50337123909145],
									[119.6994738580322, 27.51019465895638],
									[119.70397365096323, 27.514314651100335],
									[119.7041188474069, 27.517404556175393],
									[119.69750701643568, 27.520336728257462],
									[119.69551658292403, 27.52853131207047],
									[119.6852482560023, 27.53695555755297],
									[119.68593833008993, 27.54051619746457],
									[119.68279547832867, 27.541276835957262],
									[119.68001507943245, 27.544415858405216],
									[119.6786901289463, 27.54061992437005],
									[119.66593197318207, 27.539875680518264],
									[119.6625592160351, 27.536890218209066],
									[119.65930170341096, 27.54110127750198],
									[119.654728199347, 27.54301479020046],
									[119.6625246541895, 27.557847802434196],
									[119.66425193887596, 27.559796478624662],
									[119.66739426992967, 27.559696465919217],
									[119.66833213332131, 27.569329585492028],
									[119.67275725734157, 27.573665119050077],
									[119.67043736619155, 27.577684546304795],
									[119.64085378707273, 27.581547785601856],
									[119.62670516970786, 27.589759827054422],
									[119.62541218112733, 27.611190751452057],
									[119.62259647934411, 27.62433297798458],
									[119.63197893448034, 27.629419611825654],
									[119.63653818788714, 27.628735791623512],
									[119.63864424723431, 27.63579780162729],
									[119.64178732742323, 27.637743780750952],
									[119.64292244091803, 27.643877198474],
									[119.635895057511, 27.65268300291831],
									[119.63505471390397, 27.656019484111937],
									[119.63946512051893, 27.663925109456272],
									[119.63946489568843, 27.66685031089321],
									[119.63108520082142, 27.671806949531174],
									[119.6384113848776, 27.676525703998095],
									[119.64235966406727, 27.68908527776341],
									[119.64948403126311, 27.692753242767992],
									[119.6515238960111, 27.696759917636143],
									[119.64632481363935, 27.698891370240574],
									[119.64476049779876, 27.703564506596763],
									[119.64622507162983, 27.710213614466795],
									[119.64262045127282, 27.71356910732851],
									[119.6461254105593, 27.72048082622922],
									[119.65867855686997, 27.72336625155134],
									[119.66856608745502, 27.73350350228486],
									[119.67248117356735, 27.735005192036056],
									[119.6755407328186, 27.747496835510617],
									[119.68075601737632, 27.751227543516393],
									[119.69232353010693, 27.75691280478219],
									[119.69935059605325, 27.759039808440434],
									[119.70107896891932, 27.75792106620429],
									[119.70526011316372, 27.758763180576352],
									[119.71052794241064, 27.760972576523216],
									[119.72118303896616, 27.77094149125685],
									[119.73012821044858, 27.76985074221801],
									[119.73182504768783, 27.774469416530394],
									[119.74372500830259, 27.785890431498274],
									[119.74936384566502, 27.793699712471778],
									[119.7498581544304, 27.79558505300787],
									[119.74697245301638, 27.798020091554008],
									[119.74855544777574, 27.802340837559655],
									[119.75152451544409, 27.79883783339932],
									[119.75335421222712, 27.801587697614195],
									[119.75889680234559, 27.802564026808454],
									[119.76346680444954, 27.808521538937896],
									[119.76566216647586, 27.80915116779221],
									[119.76754347714984, 27.80615218147807],
									[119.76696587857248, 27.801517054968144],
									[119.76841864250639, 27.797322631334396],
									[119.77720112033546, 27.796939162212595],
									[119.78042068336788, 27.79901620673263],
									[119.78425127367746, 27.797214802621113],
									[119.78511078993108, 27.79003493916116],
									[119.78770396706454, 27.78837327710511],
									[119.79577940869285, 27.809030365459023],
									[119.80103213832263, 27.811003284673916],
									[119.81234972585924, 27.81111733129984],
									[119.81667949656162, 27.80768484118255],
									[119.82556959895794, 27.806303336829558],
									[119.82943712082658, 27.80367121455498],
									[119.8310400454618, 27.80040573663547],
									[119.83112261401743, 27.796101278251456],
									[119.82783544355095, 27.79050134825866],
									[119.83138852376146, 27.781221715309982],
									[119.83210014290728, 27.77399407086972],
									[119.82620204628745, 27.759272147391755],
									[119.82671368318995, 27.757449881706748],
									[119.83482747191033, 27.75515469763127],
									[119.83745523067444, 27.752283132660523],
									[119.84442801803868, 27.74959211018779],
									[119.85054122259942, 27.740029135935913],
									[119.85756221002805, 27.738593673159528],
									[119.86534110380899, 27.72923501138672],
									[119.87275469117617, 27.72740400609007],
									[119.87552812752108, 27.72495333193075],
									[119.87176496478139, 27.711192340354273],
									[119.87396134394089, 27.709716344233925],
									[119.87201320284714, 27.701270643625378],
									[119.87719734927828, 27.695582880445613],
									[119.87856833875787, 27.68759528549407],
									[119.88221566612015, 27.68289546535351],
									[119.89119137318335, 27.676183006540555],
									[119.89544672678505, 27.677898894118698],
									[119.89899185878733, 27.677048860316688],
									[119.91028407375109, 27.682613678078837],
									[119.90416841044384, 27.687994788628657],
									[119.9134137324578, 27.69289652005841],
									[119.91735175128235, 27.69051914784046],
									[119.91651220177675, 27.685832488378708],
									[119.91906485096217, 27.68502809337184],
									[119.9209259017091, 27.69095570933854],
									[119.92598249549587, 27.69326202252438],
									[119.93839542670764, 27.68541027376517],
									[119.96083246854369, 27.688176248435184],
									[119.96561684384233, 27.698165606557552],
									[119.96865812437295, 27.69977750912477],
									[119.97539776519477, 27.69939652123253],
									[119.98355140647232, 27.694686186218576],
									[119.98292743345439, 27.688303496209414],
									[119.99326497669733, 27.681729779405828],
									[119.99265767800955, 27.679639460892474],
									[119.98677366747086, 27.677817134053555],
									[119.98817133533896, 27.6755007430649],
									[119.9921971055121, 27.67624359926276],
									[119.99214853312833, 27.672249448353398],
									[119.99486009971395, 27.66634278209375],
									[119.99024353071445, 27.65685518631784],
									[119.98403128291739, 27.654419747573343],
									[119.98306092881887, 27.65118244991021],
									[119.98491866916129, 27.64667764505731],
									[119.98316089116224, 27.6352763153497],
									[119.98565995514286, 27.631791682540154],
									[119.99583357266135, 27.627748684953872],
									[120.0007475564546, 27.62194252512751],
									[120.00143761165657, 27.62458453364934],
									[120.00451087657575, 27.6247162591481],
									[120.00464268840938, 27.622859791346343],
									[120.0069600012032, 27.621766802096317],
									[120.00401849865489, 27.619619553799396],
									[120.01647776203913, 27.61212359572744],
									[120.01083996069565, 27.602335723514898],
									[120.01044618804121, 27.598811812814972],
									[120.01248445199587, 27.596224781648402],
									[120.02236388328663, 27.592466662306663],
									[120.02838240632309, 27.588011504527344],
									[120.041209614732, 27.590262529192444],
									[120.04479628462093, 27.587437777531477],
									[120.04234573546739, 27.57817194827686],
									[120.04361289012286, 27.576658216603448],
									[120.05560912316253, 27.569960338498902],
									[120.0642852948306, 27.567145398441426]
								]
							]
						]
					}
				}, {
					type: "Feature",
					properties: {
						adcode: 330381,
						name: "瑞安市",
						center: [120.646171, 27.779321],
						centroid: [120.465572, 27.821998],
						childrenNum: 0,
						level: "district",
						subFeatureIndex: 9,
						acroutes: [1e5, 33e4, 330300]
					},
					geometry: {
						type: "MultiPolygon",
						coordinates: [
							[
								[
									[121.22226713182272, 27.616537237203772],
									[121.22156834600241, 27.61619722871916],
									[121.22155462954254, 27.616045867422883],
									[121.22112352513068, 27.615748561446992],
									[121.22089351992008, 27.61307327531148],
									[121.22179217107191, 27.613765606697427],
									[121.22257440318617, 27.614003257944034],
									[121.22297135944075, 27.612100039785048],
									[121.22097442293136, 27.61035243761495],
									[121.21986692671737, 27.61012189281115],
									[121.2178919210753, 27.609939345724285],
									[121.21635359294407, 27.611929227052258],
									[121.21628232526916, 27.6120390855354],
									[121.21746306496857, 27.613402274295595],
									[121.21803355260647, 27.61382877867527],
									[121.21723592319938, 27.616056680871168],
									[121.21708302226375, 27.615958241979342],
									[121.21693446055701, 27.616515569837702],
									[121.21328017873736, 27.614710600813623],
									[121.21358954911841, 27.61664295161097],
									[121.21544337291334, 27.61952722040496],
									[121.21873853295699, 27.620830889334115],
									[121.2202224134337, 27.621040026675928],
									[121.22440914516596, 27.619190078059717],
									[121.22407160172315, 27.61792220484591],
									[121.22398430453211, 27.617721467172032],
									[121.22226713182272, 27.616537237203772]
								]
							],
							[
								[
									[121.20833945270363, 27.61966037762437],
									[121.20885360231193, 27.619527458725315],
									[121.20983231111234, 27.62134587800989],
									[121.2113562276079, 27.622020303893976],
									[121.21276144168723, 27.622082203331047],
									[121.2058813168693, 27.611662860452725],
									[121.20167218482356, 27.610176121031202],
									[121.20156805861905, 27.61036468188462],
									[121.2016527648633, 27.61236083508453],
									[121.20045185067238, 27.612623810340608],
									[121.20245363542699, 27.616482264345052],
									[121.20375385365753, 27.61852951792298],
									[121.20428896826138, 27.62001988071296],
									[121.20462703690828, 27.620671510581815],
									[121.20692528947063, 27.62207673905033],
									[121.20901383452087, 27.622795096816333],
									[121.20833945270363, 27.61966037762437]
								]
							],
							[
								[
									[121.17325926220519, 27.631934212493945],
									[121.17212793305771, 27.629900217621014],
									[121.16862803515573, 27.629877630248473],
									[121.168581621145, 27.629421572347724],
									[121.16813957648037, 27.629382133478714],
									[121.16821128392371, 27.627107489918785],
									[121.16416553800923, 27.626647802354228],
									[121.1628322481098, 27.62777702439024],
									[121.16204261547443, 27.628561457145565],
									[121.16195351604199, 27.629889394280156],
									[121.16229657952363, 27.63195232753793],
									[121.16294865545615, 27.632256413502716],
									[121.16379137237402, 27.631551590533547],
									[121.1643400397611, 27.632905265365764],
									[121.16709410740714, 27.634189584481817],
									[121.16827037387873, 27.634510624465804],
									[121.16973751257626, 27.634576084318894],
									[121.17118686807953, 27.632745572750025],
									[121.17221919266171, 27.63249965853248],
									[121.17325926220519, 27.631934212493945]
								]
							],
							[
								[
									[121.2081011692336, 27.6362315797237],
									[121.21115291157764, 27.634480714813208],
									[121.21368455889535, 27.63577556588973],
									[121.21642434620662, 27.63460504968333],
									[121.21112310894443, 27.629128456313254],
									[121.21025967614321, 27.626219511021645],
									[121.2046387065111, 27.621628467479866],
									[121.20202112087804, 27.620935128853148],
									[121.20022036967441, 27.619735096897273],
									[121.19663192812106, 27.618271547394045],
									[121.19413276611431, 27.617790894834002],
									[121.19410038062813, 27.61908380337485],
									[121.19483911972964, 27.61976635463361],
									[121.19406361094696, 27.62055174156967],
									[121.19405038191962, 27.621079872937855],
									[121.19357781606345, 27.621043724688207],
									[121.19325745147023, 27.621368169505445],
									[121.19294341810428, 27.62099519637127],
									[121.19258088519973, 27.620967464876628],
									[121.18989100126873, 27.623481053807666],
									[121.1891489436689, 27.62304348686746],
									[121.18767487029913, 27.622457059645626],
									[121.18748056277786, 27.625049975975685],
									[121.18769049601963, 27.625145871584778],
									[121.18786275396303, 27.62505495552182],
									[121.1911219357288, 27.625704765162823],
									[121.19200782999746, 27.626116122261294],
									[121.19261356476432, 27.626018706797936],
									[121.19459472176902, 27.62731732063787],
									[121.19589754983213, 27.627922276591846],
									[121.19623298166687, 27.62750849402181],
									[121.19659471507407, 27.626131415232692],
									[121.1970008516081, 27.626561264191025],
									[121.19721823393445, 27.626293106141986],
									[121.20180611725857, 27.630092171616468],
									[121.2004896869496, 27.632770304106316],
									[121.20042014147646, 27.633274554876834],
									[121.20228695867627, 27.632605076163372],
									[121.20283409271929, 27.633475462522654],
									[121.20418135178807, 27.633557703725103],
									[121.20373409735078, 27.63490720120643],
									[121.20407190789228, 27.63544459379301],
									[121.2081011692336, 27.6362315797237]
								]
							],
							[
								[
									[120.83347904712036, 27.65003824247094],
									[120.83211474140228, 27.648788826942848],
									[120.83080677101577, 27.64862459724742],
									[120.82966411130974, 27.648913622265923],
									[120.82817039045119, 27.648293572090722],
									[120.82742078214346, 27.648199450844004],
									[120.82721192449083, 27.647895708420265],
									[120.82675814637139, 27.64770734271974],
									[120.82485723497348, 27.645397901691865],
									[120.82521108762171, 27.64353308278561],
									[120.82326231430443, 27.642941683212143],
									[120.82260644413213, 27.64289760564003],
									[120.82254665450455, 27.642724499636017],
									[120.82220336619241, 27.64262032127084],
									[120.82178282251925, 27.64051301995994],
									[120.82170386384234, 27.64028441589312],
									[120.8180497106257, 27.63816058594233],
									[120.81880916381192, 27.642325639516685],
									[120.81946262020381, 27.64349621238034],
									[120.819291885712, 27.64497302148783],
									[120.8199083808671, 27.648354053297],
									[120.82997071717489, 27.652938127092966],
									[120.83253608816995, 27.652302399036557],
									[120.83440626973368, 27.651305177691825],
									[120.83347904712036, 27.65003824247094]
								]
							],
							[
								[
									[120.9813804626383, 27.666473627156222],
									[120.98454428029436, 27.665295323720272],
									[120.98349325071297, 27.66365046189935],
									[120.98108553896657, 27.663058400424916],
									[120.9808077500777, 27.661723859568497],
									[120.98058683341571, 27.661592920976545],
									[120.98244480128665, 27.65838417498975],
									[120.98026454427338, 27.6556111577288],
									[120.9787618283957, 27.654393245451956],
									[120.97285386351507, 27.650524594934154],
									[120.97196690444912, 27.64903300816684],
									[120.97183907841077, 27.648981602019376],
									[120.96586211934141, 27.64805922315469],
									[120.96558371081971, 27.648182510314655],
									[120.96831464790273, 27.650137067171954],
									[120.96732413729922, 27.655431747477223],
									[120.96414005791735, 27.66216552292059],
									[120.96401023898136, 27.664313912457146],
									[120.9653659795564, 27.667370561502253],
									[120.96770509821181, 27.666955535169848],
									[120.96787214278527, 27.666520834369067],
									[120.96982719067239, 27.666579015109505],
									[120.97189986718513, 27.666211263439095],
									[120.97218677789749, 27.667213249391978],
									[120.97460234162486, 27.66852593402467],
									[120.97449751844579, 27.668804111420684],
									[120.97615340865298, 27.6696433965256],
									[120.97460956048292, 27.67171554513635],
									[120.9754858014287, 27.673299312413405],
									[120.97823793103578, 27.672169936593377],
									[120.9794530041529, 27.671631941460987],
									[120.98178517284748, 27.668494844461577],
									[120.9816946893585, 27.667359847878743],
									[120.98159563533034, 27.666938066738453],
									[120.9813804626383, 27.666473627156222]
								]
							],
							[
								[
									[120.83038993524735, 27.689257902630175],
									[120.83248362082247, 27.6888079475288],
									[120.83347268981288, 27.688467737596056],
									[120.83575511700508, 27.68536752089443],
									[120.83609737289555, 27.685195332198873],
									[120.83693742782009, 27.684125066118952],
									[120.83794796452696, 27.684180617241736],
									[120.83870056038256, 27.67983632428701],
									[120.83881065988407, 27.678862557261255],
									[120.8344050997157, 27.677693840598295],
									[120.83425906060722, 27.6776632051928],
									[120.83255131818885, 27.678401203252974],
									[120.83007562129296, 27.679849505650225],
									[120.82781988238173, 27.68528220221191],
									[120.82778082482525, 27.685573704862634],
									[120.827664624323, 27.68565612503022],
									[120.82752060868916, 27.686002970160985],
									[120.82678374377485, 27.68628092452508],
									[120.82510614753073, 27.687470825618163],
									[120.82377372457779, 27.687416339292668],
									[120.82317554951203, 27.68764197829472],
									[120.8227318527928, 27.688811659930195],
									[120.82361079530199, 27.689364440816348],
									[120.8260970799164, 27.68915583317522],
									[120.82829013787966, 27.690250378252415],
									[120.8300443653552, 27.68964697722629],
									[120.83038993524735, 27.689257902630175]
								]
							],
							[
								[
									[120.91009317356122, 27.69495453672255],
									[120.90849374638935, 27.69308877532677],
									[120.9059986771972, 27.694294712231226],
									[120.90411971105584, 27.695893936156267],
									[120.90397131392501, 27.69593762252333],
									[120.9035811421561, 27.69636583291691],
									[120.89941450577487, 27.69736211896668],
									[120.89804696429599, 27.698801822945825],
									[120.89834436470073, 27.69923488608117],
									[120.89975473189543, 27.700266108094468],
									[120.90089960753096, 27.70295573841662],
									[120.90096664389557, 27.70305335532811],
									[120.90547263585347, 27.70303332382889],
									[120.90833507540344, 27.701804903873267],
									[120.90677103475548, 27.701349536651833],
									[120.9058317333479, 27.698534632567316],
									[120.90591948199858, 27.6983887778199],
									[120.90565073489358, 27.69780254395232],
									[120.90666233549848, 27.69715401584523],
									[120.90723214414822, 27.69620688673848],
									[120.90883340323899, 27.695762163892823],
									[120.91009317356122, 27.69495453672255]
								]
							],
							[
								[
									[120.89323747183187, 27.714336753338557],
									[120.89629900419573, 27.71340346299945],
									[120.89848721751116, 27.713825234247224],
									[120.8985339462846, 27.713744916694623],
									[120.89450267495852, 27.70907000597606],
									[120.88912609699184, 27.70726790668857],
									[120.88720130949287, 27.70809221268553],
									[120.8842910035271, 27.70772535853854],
									[120.8839502360147, 27.70779607223102],
									[120.88501441458368, 27.7118935588407],
									[120.88954186436558, 27.711558580264295],
									[120.89323747183187, 27.714336753338557]
								]
							],
							[
								[
									[120.54641330243203, 27.824302434809567],
									[120.54547226443356, 27.82392561437564],
									[120.54426205125276, 27.824728369918375],
									[120.54245674588219, 27.827150702842687],
									[120.54245984584531, 27.831055641005094],
									[120.54571604725788, 27.836110949660622],
									[120.54866504655467, 27.838057279519887],
									[120.55399787430247, 27.8341406582648],
									[120.54641330243203, 27.824302434809567]
								]
							],
							[
								[
									[120.67028533739847, 27.68195094967666],
									[120.67077530693496, 27.68271624845613],
									[120.66436325675897, 27.687131568966777],
									[120.65979214489164, 27.689719478770996],
									[120.65060356650145, 27.694098718481143],
									[120.64061461846995, 27.698859410133707],
									[120.63485654179601, 27.700094493166375],
									[120.62666263787048, 27.700011780719137],
									[120.62717339163873, 27.69474266274375],
									[120.6266141653116, 27.693485262135198],
									[120.621890407916, 27.694591956153886],
									[120.61950360270919, 27.696937712705335],
									[120.61446577957213, 27.697634502030724],
									[120.6131817329507, 27.696959498781894],
									[120.60750081361175, 27.69757647147702],
									[120.60404184655408, 27.699544406649125],
									[120.60456849494017, 27.702468438967344],
									[120.60206496582555, 27.70368057130139],
									[120.60458420789496, 27.70641580084856],
									[120.60432081625277, 27.71290955083515],
									[120.60797722856626, 27.716823027161013],
									[120.60781212922643, 27.719228370992596],
									[120.60998600914706, 27.720139086549636],
									[120.61316372942258, 27.725073258324244],
									[120.61273478608155, 27.728264938775965],
									[120.61011601694065, 27.73299937292279],
									[120.60018327293972, 27.744322444525267],
									[120.59919518960635, 27.7461299082687],
									[120.59561886911558, 27.74724660274859],
									[120.58968546061556, 27.755388283042862],
									[120.58434315221473, 27.757005873822095],
									[120.57913264665433, 27.756469003741586],
									[120.56989446525745, 27.751745463082727],
									[120.56456371494357, 27.753389351837143],
									[120.56070128503632, 27.757454515013933],
									[120.55840633658318, 27.762512680815632],
									[120.55635890493954, 27.764300631968638],
									[120.53936095744234, 27.76489634648925],
									[120.53622197366519, 27.7619027129399],
									[120.5344699693137, 27.757969041438173],
									[120.53291728350587, 27.75673910972216],
									[120.52638745811475, 27.755339325749333],
									[120.52425558103027, 27.752222292624765],
									[120.52293337887238, 27.748571296927878],
									[120.51524516912934, 27.740501978783357],
									[120.51665152085104, 27.73563241430452],
									[120.5103841284249, 27.733540179335876],
									[120.50959038229041, 27.73141462718337],
									[120.51099683113887, 27.727111258777597],
									[120.50717706956618, 27.723751714470097],
									[120.49975155808795, 27.721481384957997],
									[120.49396283701537, 27.72052092430124],
									[120.49100264655499, 27.721062113825553],
									[120.48802554254485, 27.71992111246942],
									[120.4827171610682, 27.714150841887886],
									[120.48180797255998, 27.711742943082413],
									[120.48413988494781, 27.708195434172012],
									[120.48526541077013, 27.703702325901645],
									[120.48417384065033, 27.696952487667204],
									[120.4842244095289, 27.69179518330111],
									[120.48238897956776, 27.68658335393866],
									[120.47926393438308, 27.68023675462257],
									[120.47076447589995, 27.67878166054527],
									[120.46597023863569, 27.67379836060593],
									[120.45892827631894, 27.668779014939616],
									[120.45385430763031, 27.66966297386722],
									[120.45044979542183, 27.67396461287666],
									[120.44544222547836, 27.67854737905833],
									[120.44412034977438, 27.68227202653287],
									[120.44051880060226, 27.683665256246627],
									[120.44070118221384, 27.684781684527195],
									[120.43566256047882, 27.68845316048504],
									[120.42666399085056, 27.6925133045454],
									[120.41920274660959, 27.694219130508543],
									[120.41690953654597, 27.69047374196964],
									[120.41422071111697, 27.691210683326403],
									[120.40941966778348, 27.693770924588534],
									[120.40557688626438, 27.69263718705656],
									[120.4022294018655, 27.68873596579226],
									[120.40831520228483, 27.684256582075648],
									[120.40633642218825, 27.68169154742702],
									[120.40518125201322, 27.683091257655462],
									[120.39878430235376, 27.68618836090417],
									[120.39322828535717, 27.69299840245435],
									[120.38576265782046, 27.699920715368762],
									[120.3840325033974, 27.703285979364523],
									[120.38142973859158, 27.70541083634106],
									[120.37489068076036, 27.709347522370308],
									[120.3730294933165, 27.711141495383742],
									[120.37946847009391, 27.715381234956055],
									[120.38081885790405, 27.7187915864626],
									[120.38007783362514, 27.72154340940085],
									[120.3756142402051, 27.723937339037036],
									[120.37260075412155, 27.72400323955793],
									[120.35019623896528, 27.728121008577716],
									[120.34665850838348, 27.731177269115733],
									[120.34086624757936, 27.732743613826756],
									[120.33964886860042, 27.734002954272967],
									[120.33831645194277, 27.738186854939443],
									[120.3332157841811, 27.73969049981679],
									[120.33020510937831, 27.741865440038055],
									[120.32860816523475, 27.746411009360656],
									[120.32520299921907, 27.750425993964484],
									[120.32268581120127, 27.750257793762216],
									[120.32184722486954, 27.74826316041657],
									[120.32403520436128, 27.74458053646265],
									[120.3248412469261, 27.74113659257972],
									[120.32062987197105, 27.737434230305553],
									[120.3178500675267, 27.73685846544589],
									[120.31212442760034, 27.73704226978498],
									[120.31016634899788, 27.73523769376459],
									[120.30950855787376, 27.731466484790474],
									[120.30959199157724, 27.724139540807187],
									[120.30649846133497, 27.721472884566026],
									[120.30353749745757, 27.720220018339205],
									[120.29432107425828, 27.727735254278628],
									[120.28898707109647, 27.734440123712773],
									[120.28546403183964, 27.737432450547203],
									[120.28045972553593, 27.739529201011862],
									[120.27701790405308, 27.73925022501794],
									[120.27153498844905, 27.732119121000665],
									[120.25690550628417, 27.725243560242177],
									[120.25222395766957, 27.72493014471047],
									[120.24924040012445, 27.72574883264258],
									[120.24862965343584, 27.73099948303974],
									[120.24755779645523, 27.73362488288211],
									[120.25210784080423, 27.73920475079865],
									[120.25260179343809, 27.742679021619608],
									[120.25039266099259, 27.743984682547136],
									[120.23906474923888, 27.747504804403263],
									[120.23457853786931, 27.750804746142194],
									[120.23207012183866, 27.754371040990804],
									[120.22771374649221, 27.758093981552065],
									[120.21984152736468, 27.7615451712727],
									[120.21901569701686, 27.76596095673284],
									[120.21330424299651, 27.771235675685944],
									[120.20816789733067, 27.776918218301205],
									[120.20620314216137, 27.781582273303343],
									[120.20430368406778, 27.782726844967954],
									[120.19586401071558, 27.782903327026986],
									[120.19348472923696, 27.78462774377539],
									[120.19259205408014, 27.789041889771454],
									[120.19356632382687, 27.792815007106924],
									[120.19247634280907, 27.794431450351226],
									[120.18360394176852, 27.797888684415284],
									[120.17671298641528, 27.80299787774993],
									[120.17064936327756, 27.80363064883545],
									[120.17040035809009, 27.80730671313438],
									[120.17200387627793, 27.80930501391532],
									[120.18099222870842, 27.815872596443228],
									[120.18208207213002, 27.81896902609975],
									[120.18551818381718, 27.82538410519237],
									[120.18612966705052, 27.828102589363084],
									[120.19034171919509, 27.833434639197264],
									[120.19161386688654, 27.836688268548812],
									[120.19374463960355, 27.84771648482797],
									[120.19362815221746, 27.85013467547492],
									[120.18721678013037, 27.866016423119504],
									[120.18858796386348, 27.8733509681727],
									[120.19432012477398, 27.87430265954015],
									[120.20632793748439, 27.880930487651938],
									[120.2081437487351, 27.884371421503943],
									[120.20995915439153, 27.891767911859688],
									[120.21215569722767, 27.89319877999975],
									[120.2205419949172, 27.891747237345157],
									[120.2233147450795, 27.892032657880918],
									[120.22437015076196, 27.896444215628094],
									[120.2195501101495, 27.9064077353288],
									[120.21643006069883, 27.909215122879687],
									[120.22022650375015, 27.91734816338709],
									[120.2253589274726, 27.920491922564224],
									[120.22494591022564, 27.925246397203523],
									[120.2233941992829, 27.927583573323318],
									[120.22344290296769, 27.93259043550023],
									[120.22563830816148, 27.934569444024646],
									[120.22973030261142, 27.936031370251612],
									[120.23431627217826, 27.936645765489743],
									[120.2373025942394, 27.93818409541973],
									[120.23782985866114, 27.94220190929076],
									[120.24130896423742, 27.946658403462607],
									[120.24216642913746, 27.95067517681798],
									[120.24165460877327, 27.95553889930079],
									[120.24348474802275, 27.961266020410562],
									[120.24468825136182, 27.96724304063389],
									[120.25316192178536, 27.970583440173698],
									[120.2563101083249, 27.968543003456887],
									[120.25375561103272, 27.96444927691266],
									[120.25649164727179, 27.962000878038168],
									[120.26128749252382, 27.9603661857509],
									[120.26649316872476, 27.960613646802415],
									[120.27224139782231, 27.962836959757965],
									[120.2767539575292, 27.96675386340013],
									[120.28575985393422, 27.975653004882304],
									[120.29087869699435, 27.98027333934317],
									[120.29800478908976, 27.980544073050567],
									[120.30299048662175, 27.981601735132017],
									[120.30698922047623, 27.980685482449132],
									[120.31493579285257, 27.98238005699409],
									[120.32028285866704, 27.98215086656927],
									[120.32260254657035, 27.979730049002626],
									[120.3238043888615, 27.97106937625074],
									[120.32457731479133, 27.969812695099847],
									[120.32870693597636, 27.971578084061377],
									[120.33170126739958, 27.973814754647265],
									[120.33693209943692, 27.979702902966665],
									[120.33935028288931, 27.98410616177],
									[120.3462775231892, 27.987231387718396],
									[120.34474628801081, 27.990809588691604],
									[120.35440654642503, 27.986653004032974],
									[120.35931125371144, 27.98692775231399],
									[120.36795385188884, 27.98501921826238],
									[120.3728607166488, 27.98476284313074],
									[120.37757071171904, 27.982578168647592],
									[120.3822155194307, 27.98164955748115],
									[120.39419616721943, 27.97446047686958],
									[120.39520192762689, 27.969644570440607],
									[120.39899288211586, 27.969063343098867],
									[120.4037745558511, 27.96545650051712],
									[120.40624908182974, 27.961142587560403],
									[120.40822817309174, 27.959590159858067],
									[120.41090013893029, 27.959638556873927],
									[120.40972836097512, 27.965301818923876],
									[120.41266456561732, 27.96914717700065],
									[120.42136038297531, 27.969452652418],
									[120.42413319609022, 27.970129832925522],
									[120.42743549675083, 27.969725863757674],
									[120.42935060844388, 27.966559947083965],
									[120.43313132864796, 27.971993379291064],
									[120.43617012704976, 27.974680705550156],
									[120.4422814664166, 27.974001554628103],
									[120.4438014627674, 27.974600595740924],
									[120.44741909541494, 27.97928268574742],
									[120.45040976210089, 27.978818033925165],
									[120.45695512507905, 27.97384531720769],
									[120.46287248517706, 27.972243773931098],
									[120.46303832465901, 27.968448594427116],
									[120.46449325056312, 27.967950280081425],
									[120.4786302747674, 27.967549162663772],
									[120.48372423898252, 27.96582271524619],
									[120.4892147727436, 27.96643508071446],
									[120.49043843078903, 27.965795631263404],
									[120.49166354663544, 27.959132222374194],
									[120.49650895982074, 27.957546491877167],
									[120.49743557269358, 27.955965015173376],
									[120.49482291894265, 27.95314872163624],
									[120.49525274541793, 27.950403564472992],
									[120.50014840192728, 27.947703801489297],
									[120.49900721621009, 27.946226143421825],
									[120.49412893550209, 27.944548239609617],
									[120.49346767389409, 27.941376738146005],
									[120.49199520581419, 27.940148125735448],
									[120.48180827113492, 27.936932408204143],
									[120.4809310957935, 27.93598869652118],
									[120.48352793136905, 27.933265842544643],
									[120.49393097043799, 27.933986915363903],
									[120.49914067560178, 27.933280423252995],
									[120.50565743114555, 27.928373043181466],
									[120.50960919161093, 27.926061291795236],
									[120.50893211812286, 27.920456387652223],
									[120.51065179364537, 27.915345568343355],
									[120.51476967508052, 27.9155454750437],
									[120.5253674452515, 27.91505663595501],
									[120.5337485376649, 27.912566556201682],
									[120.53705363161987, 27.91103618167449],
									[120.53799552757164, 27.909344087459715],
									[120.53683926382098, 27.907347073608605],
									[120.53229459741783, 27.90474670279815],
									[120.53398100162201, 27.90227042673888],
									[120.53802925034972, 27.900757753567518],
									[120.54435810154519, 27.899374451469782],
									[120.5483065354183, 27.896918036038585],
									[120.54972732665487, 27.893279174894076],
									[120.5530962320056, 27.89472959249673],
									[120.55786722719085, 27.90112563204235],
									[120.56146615573857, 27.904569613696765],
									[120.56347983852379, 27.905388541747868],
									[120.56879480663508, 27.904530940150835],
									[120.57122051831232, 27.902854240530814],
									[120.57397553114595, 27.898681165003836],
									[120.57928740918669, 27.901024623787407],
									[120.58505825893155, 27.901780736891567],
									[120.58957556795815, 27.906224761963244],
									[120.59339885127599, 27.907873419822522],
									[120.59491531329115, 27.906303136080908],
									[120.59775014545289, 27.899490702334106],
									[120.60259406396494, 27.895878773186894],
									[120.60816150235155, 27.892673506677056],
									[120.61058243233344, 27.890458564611095],
									[120.61048363910868, 27.888355290464347],
									[120.60732252481478, 27.88353751164692],
									[120.61167040066857, 27.882027406939358],
									[120.61575375892892, 27.8789305599974],
									[120.61835482671393, 27.875270518919365],
									[120.61858587513814, 27.871705715146675],
									[120.6144538851388, 27.863183160274673],
									[120.61098047946564, 27.858899193842774],
									[120.61014009808707, 27.85687346014214],
									[120.61099677068444, 27.854721520981457],
									[120.61297253175701, 27.854768038414306],
									[120.62375457571318, 27.85890306452484],
									[120.63260823668088, 27.860366746228408],
									[120.63660548125802, 27.858241481858954],
									[120.64163971160349, 27.853930796569045],
									[120.6490737963187, 27.852299802294112],
									[120.65545466160336, 27.854173498408272],
									[120.66435112400518, 27.854313724299004],
									[120.67078022083058, 27.85398736302642],
									[120.67568025344099, 27.855830324809688],
									[120.68005432294876, 27.85941868722267],
									[120.68123785953969, 27.861410811459848],
									[120.68048102068258, 27.865777908523683],
									[120.68136908321662, 27.8685077034678],
									[120.68383517355448, 27.870309476301315],
									[120.69376872424732, 27.871626367962563],
									[120.6979634347648, 27.87296980221464],
									[120.70289725220653, 27.87644788436245],
									[120.71283516461119, 27.878853121174643],
									[120.7189901498756, 27.878579392724873],
									[120.7193688435973, 27.87744883789361],
									[120.71276954827613, 27.874755536538828],
									[120.71431683905098, 27.87227234199503],
									[120.72603626076489, 27.87175916725181],
									[120.73275486824264, 27.872618086355658],
									[120.74301595831992, 27.870024438876783],
									[120.74815746789284, 27.864245390012798],
									[120.75067965793994, 27.854102085942543],
									[120.74784568732866, 27.847238680420844],
									[120.74710435368308, 27.83726609915118],
									[120.74072867029201, 27.837595706976344],
									[120.73560606806564, 27.838854461064557],
									[120.7339431928242, 27.833294326072348],
									[120.73847262291326, 27.831785383288832],
									[120.74110824444995, 27.82889430213038],
									[120.7596004227214, 27.81196366349235],
									[120.76538793150792, 27.80612232308681],
									[120.76924660854422, 27.802841846274248],
									[120.7743762092947, 27.800333246781975],
									[120.77986380946732, 27.795351937941632],
									[120.77864766076095, 27.794778466353193],
									[120.77311396583696, 27.7909867762188],
									[120.76840925248507, 27.785267353305755],
									[120.76310455822886, 27.77416873000294],
									[120.76187610589761, 27.773437500240505],
									[120.75655877616668, 27.765206456113106],
									[120.74662542332464, 27.73983740767028],
									[120.73968005179302, 27.730059504442636],
									[120.728689909212, 27.723130941240015],
									[120.72366023033544, 27.72293412640886],
									[120.72197890280415, 27.72052466907826],
									[120.71949756176309, 27.72099161147372],
									[120.71706974477297, 27.717349052316933],
									[120.71388244671755, 27.716371655627484],
									[120.71346557137906, 27.71421813995522],
									[120.71684980387545, 27.714406013726602],
									[120.71135640127693, 27.7101532222934],
									[120.70869994154907, 27.710504651268707],
									[120.7045569420493, 27.708508610484046],
									[120.70287275287535, 27.7090091704369],
									[120.69758534448817, 27.712075829835726],
									[120.67344892033145, 27.729691505458675],
									[120.66087186374557, 27.735613345979175],
									[120.65664744412436, 27.73956704178562],
									[120.65468215925432, 27.739660501131254],
									[120.64770507852666, 27.744348525763883],
									[120.64042532466908, 27.75044715411292],
									[120.63399124110299, 27.759009003962433],
									[120.63079130667347, 27.76735544190018],
									[120.62007486826064, 27.781578779437154],
									[120.6191363330754, 27.786105632968656],
									[120.61622405039964, 27.791044950664002],
									[120.61282455910623, 27.79304122886964],
									[120.60978722569996, 27.79732203508388],
									[120.60217523619826, 27.80102801353206],
									[120.58593750001569, 27.803292274418993],
									[120.57808816413751, 27.808990717048005],
									[120.57625460656493, 27.81316900234765],
									[120.57692980766456, 27.8151384591726],
									[120.57906854118028, 27.818199872825915],
									[120.58593750001569, 27.82449781881934],
									[120.5874818563027, 27.829189777086583],
									[120.58747983013006, 27.83496105670747],
									[120.58593750001569, 27.836774468566944],
									[120.58562040355889, 27.838904857273405],
									[120.57867455448718, 27.843403100672617],
									[120.57654023214604, 27.8439395426758],
									[120.57210505010801, 27.84361672383278],
									[120.56483745598382, 27.83855545537],
									[120.55867111677867, 27.836648941195733],
									[120.55138337604205, 27.84011816951795],
									[120.54658222209196, 27.839657068219196],
									[120.54403531507774, 27.837140679698678],
									[120.54056620636538, 27.831054926044033],
									[120.5405672792566, 27.826979041149855],
									[120.54211032433204, 27.816406607578926],
									[120.54617595695493, 27.80186724647632],
									[120.54622447448003, 27.797619104538114],
									[120.54413473602926, 27.795395135976776],
									[120.53768563288565, 27.79499614275784],
									[120.53316581205263, 27.796948075393402],
									[120.52764677967525, 27.805935740741916],
									[120.52757322772231, 27.809490204109693],
									[120.52513515936016, 27.81629574275439],
									[120.51939916643846, 27.821090340646776],
									[120.51498794593704, 27.821903943812003],
									[120.5071728229675, 27.819885015281272],
									[120.50712835778756, 27.811900853941324],
									[120.50923490546654, 27.809663176114725],
									[120.50963425661575, 27.80426895614744],
									[120.50434064830233, 27.795091271245212],
									[120.50355100667366, 27.7822222713408],
									[120.50001955066182, 27.780067921097725],
									[120.4948457482327, 27.779501438140926],
									[120.48800921445377, 27.781588315848126],
									[120.48935246434485, 27.782331943664303],
									[120.48229575134792, 27.783139347802717],
									[120.47653722771099, 27.785079956175082],
									[120.47330617943669, 27.79173994044595],
									[120.46898496128699, 27.795076966628756],
									[120.44824886299466, 27.791045546914518],
									[120.42971396422809, 27.790426969828843],
									[120.42726874355776, 27.78953635681745],
									[120.42704701390858, 27.788437366391406],
									[120.42789995701742, 27.787970542706432],
									[120.43297052357082, 27.789032578190984],
									[120.44536840912485, 27.78909254048841],
									[120.45934712926669, 27.790884375813334],
									[120.46455407171311, 27.79367947592715],
									[120.46947515025806, 27.793508052554614],
									[120.47176444557272, 27.791550875072858],
									[120.47356104820392, 27.78520774803917],
									[120.47571301434425, 27.783435344365728],
									[120.49227523761215, 27.77767527119687],
									[120.49961245095392, 27.777673005804616],
									[120.50561904897995, 27.782215833993575],
									[120.5071674585115, 27.790705561812274],
									[120.50984084617812, 27.794001578909786],
									[120.50873601465537, 27.795068740529985],
									[120.50966763495342, 27.79757356646695],
									[120.5116840597716, 27.801282405658526],
									[120.51337885824773, 27.799624443413393],
									[120.51310253165661, 27.81487154938253],
									[120.51536583926213, 27.818715333645798],
									[120.51812458068491, 27.820014119256257],
									[120.52470374108486, 27.813812136321076],
									[120.52456045120391, 27.807490348400904],
									[120.52222347293502, 27.81373655819567],
									[120.52119326625632, 27.814154743846416],
									[120.5207650657552, 27.81291246443874],
									[120.52205920187077, 27.799697637436054],
									[120.52352130436475, 27.79820322949547],
									[120.53571486484918, 27.793315768507966],
									[120.54224467315316, 27.792719244597492],
									[120.54782903228408, 27.79545640948578],
									[120.55056393178006, 27.801005601527322],
									[120.5488183494873, 27.81673741330104],
									[120.5500260589555, 27.82128655922736],
									[120.56596016872686, 27.83331024677051],
									[120.57217597963779, 27.835585236569443],
									[120.57406675837422, 27.835330963153467],
									[120.5754339698019, 27.834194541145223],
									[120.57549846198447, 27.83049654957614],
									[120.56991124121089, 27.819336652764378],
									[120.56836712324423, 27.811634063761062],
									[120.56989026092685, 27.80303585522057],
									[120.57275986627485, 27.798461079515278],
									[120.57693517212056, 27.795426011501263],
									[120.58115553849734, 27.79439485064188],
									[120.58593750001569, 27.794642806320496],
									[120.59005427348598, 27.797036647823063],
									[120.59460043905904, 27.796528220600976],
									[120.60216605681808, 27.794232249618688],
									[120.6061141489489, 27.791745066581598],
									[120.61678183061701, 27.773437500240505],
									[120.61934554596019, 27.76532685734861],
									[120.63194704072339, 27.746490359242728],
									[120.64290511617821, 27.735072374090862],
									[120.67849302253501, 27.70428085347868],
									[120.68372797976247, 27.6977012155387],
									[120.68289788213167, 27.696211110854108],
									[120.68522120329601, 27.694277508200514],
									[120.69615002110663, 27.685181910716665],
									[120.69460961554137, 27.67814005541925],
									[120.6932311140248, 27.67183833227324],
									[120.6886916241192, 27.67184326685333],
									[120.68697747403121, 27.671870831074045],
									[120.6859281999266, 27.671887703254924],
									[120.68592182912914, 27.671887805777658],
									[120.68591373702941, 27.67188793528004],
									[120.68586157725008, 27.671921211994402],
									[120.68579257766544, 27.671965230211242],
									[120.68577919125676, 27.671973771072714],
									[120.68075736615958, 27.675177402615077],
									[120.67044353444157, 27.681757027964522],
									[120.67047254567149, 27.681821376255584],
									[120.67028533739847, 27.68195094967666]
								]
							]
						]
					}
				}, {
					type: "Feature",
					properties: {
						adcode: 330382,
						name: "乐清市",
						center: [120.967147, 28.116083],
						centroid: [121.018579, 28.240666],
						childrenNum: 0,
						level: "district",
						subFeatureIndex: 10,
						acroutes: [1e5, 33e4, 330300]
					},
					geometry: {
						type: "MultiPolygon",
						coordinates: [
							[
								[
									[121.13835370565903, 28.264092445110293],
									[121.1347843405249, 28.254937767563945],
									[121.13206851475024, 28.25507521634819],
									[121.13024401694793, 28.25881993759009],
									[121.13021874419974, 28.263808012030154],
									[121.13416504847828, 28.267547607136407],
									[121.13835370565903, 28.264092445110293]
								]
							],
							[
								[
									[121.06620943551707, 28.292833327995766],
									[121.07217180758289, 28.289803743148298],
									[121.07343184950037, 28.287080049204974],
									[121.0707194807195, 28.286872148430973],
									[121.06151175486366, 28.290491223591175],
									[121.06112074852376, 28.29264056640909],
									[121.05832862876332, 28.291341543377598],
									[121.05447244644631, 28.292732358411683],
									[121.05359160906562, 28.294083953112022],
									[121.05519235104623, 28.295499801674566],
									[121.05926907051128, 28.295970558994156],
									[121.06620943551707, 28.292833327995766]
								]
							],
							[
								[
									[121.20567075949805, 28.33068746925136],
									[121.20597644535678, 28.329342655439234],
									[121.20797315793493, 28.329470271935577],
									[121.20784114375385, 28.327344360953532],
									[121.20504473062988, 28.328436352855476],
									[121.20567075949805, 28.33068746925136]
								]
							],
							[
								[
									[121.20324277883128, 28.328261017432055],
									[121.19025194686992, 28.323454141995114],
									[121.18227565279915, 28.323825478363176],
									[121.17832446070531, 28.329054951524824],
									[121.17182791202856, 28.33103251483874],
									[121.16958367814425, 28.335795164315414],
									[121.16960084440348, 28.33920824526433],
									[121.17404687406406, 28.3472596408198],
									[121.1857112644633, 28.35354483082932],
									[121.1891788245432, 28.352489948552318],
									[121.1939264535431, 28.34784054800292],
									[121.19652950793056, 28.34082257779977],
									[121.20311975517268, 28.33244967461286],
									[121.20324277883128, 28.328261017432055]
								]
							],
							[
								[
									[121.2039441969672, 28.37329718951372],
									[121.20318413673863, 28.372914501003493],
									[121.20290744322403, 28.373195529250324],
									[121.20428094091278, 28.374090928453654],
									[121.2039441969672, 28.37329718951372]
								]
							],
							[
								[
									[121.20770232889947, 28.34211175415419],
									[121.20557608247032, 28.333924808283314],
									[121.20544135593389, 28.33480095839758],
									[121.19646275035575, 28.35165154927961],
									[121.19303071529532, 28.35450255844637],
									[121.19260966800186, 28.368225216420626],
									[121.19027626543732, 28.375192045776316],
									[121.19136226155922, 28.376803040927655],
									[121.19449234024933, 28.37037074521379],
									[121.2062219377923, 28.358781457198518],
									[121.2075309756741, 28.355835556965417],
									[121.20790815313887, 28.346958756441495],
									[121.20770232889947, 28.34211175415419]
								]
							],
							[
								[
									[121.10280847123397, 28.541312515460277],
									[121.10582463100195, 28.53973950677289],
									[121.10900614731588, 28.540100171785525],
									[121.11695429440522, 28.53552127448728],
									[121.1254981847934, 28.524737752045667],
									[121.13523249878085, 28.52565555336116],
									[121.13940792063909, 28.527830087088887],
									[121.14120696223154, 28.526990290269737],
									[121.14117421611729, 28.523028787448652],
									[121.14439274043264, 28.522784179046653],
									[121.14675277552021, 28.52456648785318],
									[121.15068094766764, 28.52454235364678],
									[121.15239823728893, 28.523546805940384],
									[121.15393349963142, 28.518948350186236],
									[121.15886920564935, 28.516586309610545],
									[121.16339347542862, 28.51186853630395],
									[121.16529246227742, 28.50901716471043],
									[121.1683135098607, 28.508493051513142],
									[121.16823178666766, 28.502813964992527],
									[121.16654763796316, 28.50022072040997],
									[121.16897469502624, 28.497245349393438],
									[121.1708234259604, 28.49651608644831],
									[121.17533106727501, 28.487068783897314],
									[121.17668515309742, 28.481485164908463],
									[121.17932735317493, 28.480694293906595],
									[121.1803836123139, 28.477794171863593],
									[121.1843621231136, 28.478347153298557],
									[121.18718447088668, 28.476791619337803],
									[121.1909322561188, 28.476174223062003],
									[121.19037071763455, 28.470258163383562],
									[121.19793097723289, 28.464605142813127],
									[121.20156069047357, 28.464220703322837],
									[121.20487774541164, 28.462024068755795],
									[121.20187455206894, 28.459179683995274],
									[121.20479625244513, 28.453892372734856],
									[121.20535738713374, 28.44949141080002],
									[121.20730416845265, 28.448338338743383],
									[121.20753570430941, 28.445435458479665],
									[121.2101754483383, 28.441566872713054],
									[121.21495913925298, 28.44135447173153],
									[121.217383666523, 28.44201283212658],
									[121.22132547868796, 28.441079815181354],
									[121.22261175203084, 28.438754552380715],
									[121.22023787277965, 28.43625414211499],
									[121.21733547365329, 28.43081877366751],
									[121.21689027956279, 28.427367207130942],
									[121.21860516889353, 28.42524545551339],
									[121.22408083056598, 28.426952840001604],
									[121.22833377218592, 28.426814905583456],
									[121.23197778194913, 28.4259112191275],
									[121.23557132265853, 28.423867313725623],
									[121.23819122404586, 28.420869907520284],
									[121.24451896098128, 28.4169208549136],
									[121.2481435157107, 28.416030950567972],
									[121.25351309155599, 28.4113449646984],
									[121.25301940871884, 28.41000142162835],
									[121.24705730285234, 28.40850379861149],
									[121.24626654966164, 28.40689520015343],
									[121.24682680031663, 28.40250615783299],
									[121.24242876927235, 28.393822877923526],
									[121.24193411966394, 28.389011803551966],
									[121.23451876872628, 28.387260122057057],
									[121.23176559320757, 28.387836730480785],
									[121.22337424942214, 28.38803411728071],
									[121.22210435183445, 28.38611144318861],
									[121.21631613977809, 28.382075731909538],
									[121.21654754253507, 28.3799983699289],
									[121.21857567202971, 28.37903258888292],
									[121.21785017634465, 28.376110420859277],
									[121.21219305576494, 28.374604567247047],
									[121.20777147417425, 28.37417718872632],
									[121.20609060709592, 28.375820035166555],
									[121.20749950389904, 28.378190279357966],
									[121.19761204705844, 28.37802553165301],
									[121.19660615894713, 28.379236578505356],
									[121.19696652898222, 28.380966902000978],
									[121.20160686976135, 28.38233876202429],
									[121.20292544405402, 28.384559869842178],
									[121.20403027557677, 28.387337565376413],
									[121.20294380191501, 28.390152930813144],
									[121.20077776947858, 28.391690611432637],
									[121.19767832799255, 28.39204812072427],
									[121.19246995472474, 28.391137957350907],
									[121.19048011296695, 28.389304041848106],
									[121.18548202547515, 28.389899134937195],
									[121.18416905395873, 28.38795995738616],
									[121.18227577240907, 28.38785505326814],
									[121.1823711392168, 28.38463175265332],
									[121.18031454078346, 28.38395512073231],
									[121.17981564997228, 28.378033518532106],
									[121.17844176287713, 28.377136945713517],
									[121.17776572720663, 28.3741022347304],
									[121.17404067503719, 28.375514626299037],
									[121.1745096445045, 28.374173640900835],
									[121.18271315139089, 28.370076537402326],
									[121.18515253096461, 28.36655950561675],
									[121.18600213489071, 28.360692501257972],
									[121.18470835670541, 28.357493638820415],
									[121.17902064298835, 28.354140638879414],
									[121.17134654540678, 28.352725267856897],
									[121.16594505352145, 28.35350906838886],
									[121.16495382795688, 28.35214996345013],
									[121.15665125804924, 28.349464655269685],
									[121.15497660618553, 28.346381664182502],
									[121.15478205674663, 28.341549754317782],
									[121.15124857456215, 28.342584252561267],
									[121.14740002119413, 28.341612935288765],
									[121.14675307229652, 28.335190058174703],
									[121.14423561088483, 28.33550500884911],
									[121.14670145480841, 28.33320736872514],
									[121.14672565466526, 28.329101442877345],
									[121.144611954678, 28.32776594154501],
									[121.14847815004669, 28.32548367982804],
									[121.14701044567562, 28.321453333004968],
									[121.14406633419401, 28.31828105452712],
									[121.14231956029948, 28.318194627879848],
									[121.13995504389027, 28.315059662273654],
									[121.1343076224988, 28.31153583521069],
									[121.13322746747372, 28.30752372753807],
									[121.13119244557492, 28.306555747649668],
									[121.13707554330176, 28.302467942241776],
									[121.13689577601929, 28.3018219475249],
									[121.13594734649291, 28.300781250254545],
									[121.13376021416263, 28.300371766443902],
									[121.13285255450182, 28.297421455036158],
									[121.12560105284638, 28.29390227836751],
									[121.12634301152082, 28.292281031844198],
									[121.12540245016305, 28.290853976829624],
									[121.12112712891394, 28.28781461725083],
									[121.12196195158288, 28.287100434137756],
									[121.12013065850317, 28.285245537451658],
									[121.1202099319429, 28.28214192401066],
									[121.11516594844977, 28.2851543425989],
									[121.10885095580704, 28.28571414988818],
									[121.10222244241186, 28.285684823895565],
									[121.09137034396622, 28.283232450916955],
									[121.08424377433073, 28.283826231895148],
									[121.08057832742793, 28.28645145906762],
									[121.07934582275163, 28.293131947881136],
									[121.08014881571535, 28.29504227608021],
									[121.07612621745102, 28.29304397080267],
									[121.0766173597035, 28.290037154990785],
									[121.07168221486234, 28.293315648798227],
									[121.07115840923325, 28.298834562465117],
									[121.06916224973804, 28.298649549437187],
									[121.06807625271699, 28.295608759037066],
									[121.06686925910913, 28.295199155616615],
									[121.06455755268894, 28.296092033120885],
									[121.06018233294833, 28.300781250254545],
									[121.05941724820752, 28.302552342716467],
									[121.05702495533751, 28.30380511271585],
									[121.05638551667835, 28.303743004636033],
									[121.06036520019393, 28.296925544578244],
									[121.05313074608716, 28.296331047739727],
									[121.0515681506497, 28.293996215253173],
									[121.04861784014122, 28.293628573300055],
									[121.04941546954831, 28.29215908017744],
									[121.05843925436818, 28.286387563135577],
									[121.04426383990437, 28.288997650221404],
									[121.05476343648343, 28.284908413992184],
									[121.06578362001812, 28.284289717296645],
									[121.086402654459, 28.277652144131196],
									[121.09551346307592, 28.277373075507057],
									[121.108319043689, 28.27982532977518],
									[121.11295354337142, 28.279157042663428],
									[121.11752080883832, 28.276179075304128],
									[121.11944067434774, 28.272663950980586],
									[121.11664974708822, 28.271537423313475],
									[121.1175855402405, 28.267795920745186],
									[121.12034976482983, 28.26761567592274],
									[121.12360107932636, 28.25912225278978],
									[121.1286276582399, 28.252864957052168],
									[121.12898695448439, 28.250546574964517],
									[121.13099455875192, 28.24830043271885],
									[121.13290357573953, 28.248386144405117],
									[121.13314783610383, 28.24598371977288],
									[121.12629854724025, 28.233356833551056],
									[121.12127280199832, 28.20997226241002],
									[121.11056113269024, 28.203277468980048],
									[121.1090029475281, 28.204307556048946],
									[121.10812664003242, 28.201217650973888],
									[121.1056921482741, 28.200445055994578],
									[121.10004425024204, 28.195209503415924],
									[121.10062837609871, 28.19160461416169],
									[121.09965467472352, 28.189029574555263],
									[121.10316026173678, 28.184309006155786],
									[121.10121274027586, 28.180704116901552],
									[121.09663605710841, 28.176412463064764],
									[121.09916782403593, 28.17400932347158],
									[121.09654533889636, 28.166627764559735],
									[121.09381961788108, 28.164052843663853],
									[121.09333276719349, 28.161649704070612],
									[121.089828371782, 28.159675479040175],
									[121.08554530107483, 28.16147804237778],
									[121.08359825625462, 28.164396167049517],
									[121.0797045227456, 28.16328036829441],
									[121.07113802430047, 28.15890312238122],
									[121.07230615640401, 28.155555725216573],
									[121.06004047388888, 28.14517021213561],
									[121.0488457679179, 28.138561249102395],
									[121.03765094323649, 28.134956240238353],
									[121.0422210694469, 28.1249999996503],
									[121.04188060770389, 28.123991370405463],
									[121.02570033100551, 28.111749768137315],
									[121.0235712526113, 28.110848545823785],
									[121.01752495761082, 28.11287641541429],
									[121.00977635389563, 28.096278905447207],
									[121.0084141489939, 28.08891892396923],
									[121.00688147579956, 28.08756697133873],
									[121.00270485874228, 28.088037609947776],
									[121.00366353964068, 28.04605174039557],
									[121.00147545312973, 28.032292127479764],
									[121.00262153115875, 28.028864145663817],
									[121.001090169176, 28.027753830075255],
									[121.00043404089831, 28.024953603825793],
									[121.0028947595855, 28.019449710635683],
									[121.00076210458747, 28.016649365675732],
									[121.00229334875905, 28.011193752589634],
									[121.00141835247507, 28.00834524623616],
									[120.99961364245564, 28.007910847607604],
									[120.99879324401309, 28.005882978017098],
									[120.99327254339323, 28.000427364931],
									[120.98944520952887, 27.998930812107346],
									[120.98731291336037, 27.99675822271388],
									[120.98578202711894, 27.997144341238425],
									[120.9855085612711, 27.99584090703229],
									[120.98282945121821, 27.996130466248076],
									[120.98288404905963, 27.99444067519704],
									[120.98124384842492, 27.994585633320355],
									[120.98091590434558, 27.99337863881317],
									[120.97987711453732, 27.993764758237035],
									[120.97686994079515, 27.991157650605146],
									[120.97462820972419, 27.99130260962778],
									[120.97238647955248, 27.988550543872577],
									[120.9692152739658, 27.987729907109554],
									[120.96525204174839, 27.984221220133236],
									[120.95785832400247, 27.980870723904843],
									[120.94944512848997, 27.980175376192733],
									[120.94643425943354, 27.98159897331402],
									[120.94305717924544, 27.981573938886243],
									[120.94082224345186, 27.985024213996326],
									[120.9375000003248, 27.98493301824425],
									[120.93195331109644, 27.98737287535795],
									[120.92817485358671, 27.987184643656406],
									[120.92025542274962, 27.990859269939392],
									[120.9117566351606, 27.991629362105414],
									[120.8987270595062, 27.995505451815177],
									[120.8948440549093, 27.995180606799636],
									[120.89109134678824, 27.99687302117303],
									[120.87946891785634, 27.998575448598103],
									[120.8586145641109, 27.998017430060372],
									[120.84664881269259, 27.996439575825832],
									[120.83711254560751, 27.99345052252363],
									[120.83605194094434, 27.992772102750394],
									[120.83401215084018, 27.98922252629859],
									[120.82426953341235, 27.987277745971255],
									[120.80973923208, 27.990600108708122],
									[120.79544985282848, 27.99677395815172],
									[120.79162800302993, 28.003805637620133],
									[120.7901405099766, 28.009342074577148],
									[120.78664445847505, 28.01239025560585],
									[120.787381648944, 28.013491749744503],
									[120.78648293034303, 28.015784978693887],
									[120.783216118729, 28.01858651615487],
									[120.78164703288428, 28.018844425529892],
									[120.78490280352162, 28.02187342222072],
									[120.7859422255533, 28.02378808785005],
									[120.79191573302467, 28.024580721523137],
									[120.79318675746299, 28.02633789607711],
									[120.79328567749212, 28.029724528863994],
									[120.79493536777306, 28.032000402696497],
									[120.7981870393005, 28.033902867223617],
									[120.79655287401602, 28.036831636271074],
									[120.79921065484791, 28.03743203625953],
									[120.79866547952827, 28.03978246388965],
									[120.80132329903108, 28.041386105284573],
									[120.80160367437009, 28.043455859900064],
									[120.80005163697354, 28.045224494514855],
									[120.80300609965184, 28.046703686825765],
									[120.80335258325522, 28.049149608967355],
									[120.80797519300086, 28.054831460903245],
									[120.80932854857372, 28.059489487749715],
									[120.80827123093263, 28.06230894959839],
									[120.80863465326672, 28.066400113074792],
									[120.80510137792635, 28.07064038234779],
									[120.80678454906774, 28.072336546894178],
									[120.80665291529988, 28.07741392131544],
									[120.80458864744821, 28.080606676457023],
									[120.80430776129424, 28.085244722166237],
									[120.80686665896917, 28.086596360034036],
									[120.80820288245707, 28.0923333736863],
									[120.81028261774873, 28.09815073996475],
									[120.8170673946446, 28.113014724849734],
									[120.82018751963835, 28.117783014874306],
									[120.82484287280045, 28.1225062065962],
									[120.82731978647905, 28.12575315488425],
									[120.82969712272404, 28.13376128495537],
									[120.83166100105439, 28.1360201319236],
									[120.83689385117032, 28.146428554334364],
									[120.84057472234565, 28.1519165556046],
									[120.84848200064391, 28.159962659549137],
									[120.85240955945369, 28.164619269064076],
									[120.86156715619938, 28.17689130349089],
									[120.86361278380298, 28.18046415439727],
									[120.86283716260505, 28.187882427232296],
									[120.8637282774381, 28.18957464105688],
									[120.87129934868608, 28.193965633107553],
									[120.87233846944491, 28.193982704038604],
									[120.87430121103216, 28.197568721919026],
									[120.87524067341838, 28.20361172989749],
									[120.87900070741682, 28.206571953632817],
									[120.89172675648467, 28.210507678286774],
									[120.8972129618088, 28.21258950540141],
									[120.89652056747025, 28.21848952027517],
									[120.894295663614, 28.230271266805573],
									[120.88788490216655, 28.234212369405384],
									[120.8810101903681, 28.234020506241393],
									[120.87822303126791, 28.23466040715209],
									[120.87860165484256, 28.24400054828675],
									[120.88155362370082, 28.246865643534647],
									[120.88579005826466, 28.247040153380453],
									[120.89206987212697, 28.25085943561453],
									[120.8965351032125, 28.252174081668613],
									[120.8999112481057, 28.258243814800267],
									[120.89991060868772, 28.266971441179123],
									[120.89811423808169, 28.275996055173835],
									[120.8969940695207, 28.279639821220826],
									[120.89758677311113, 28.283079613833138],
									[120.89687813791579, 28.29244691988947],
									[120.89442226657445, 28.30411069874981],
									[120.89224651336599, 28.310801634088193],
									[120.88474628351423, 28.31869282441437],
									[120.88326201812765, 28.324553298795763],
									[120.88418512724184, 28.330306150408546],
									[120.88265197830617, 28.33364980279623],
									[120.88312911811443, 28.33572883032133],
									[120.88982166323922, 28.341952204530685],
									[120.89313420358064, 28.344125805661463],
									[120.89792823220216, 28.344532228179844],
									[120.90278801745308, 28.345828500185178],
									[120.90919378496528, 28.34460734855037],
									[120.91564757267736, 28.34080566425007],
									[120.91586173992744, 28.335554198167756],
									[120.91385381370264, 28.334023930659896],
									[120.91471030373759, 28.329928817361065],
									[120.91635566108494, 28.32963054731198],
									[120.92269175272224, 28.33232804220546],
									[120.93081783427567, 28.333224424367756],
									[120.93507666465644, 28.335186540026825],
									[120.93787159929491, 28.3397141768678],
									[120.94280350118072, 28.341346801613668],
									[120.94895043481483, 28.3402552647687],
									[120.95202320061026, 28.34146725500989],
									[120.95529273806949, 28.34689785884916],
									[120.96140324556336, 28.354399604957848],
									[120.96307880124573, 28.3586296039731],
									[120.96325904786681, 28.361254706139846],
									[120.95371386760098, 28.364261851103606],
									[120.95681854044335, 28.371535192794965],
									[120.95721320792325, 28.374096769550306],
									[120.96437547344942, 28.376016197989202],
									[120.96854697066624, 28.37903541275415],
									[120.97844841915924, 28.38411536013581],
									[120.97841534838972, 28.38656797323341],
									[120.9751802046028, 28.389263798985212],
									[120.98022051796261, 28.394263111353553],
									[120.9794490129616, 28.39668686790469],
									[120.98248635086452, 28.39761469845962],
									[120.98307715328804, 28.399237591641565],
									[120.97989193446529, 28.403870006695513],
									[120.96908656299456, 28.401104443915017],
									[120.96731328607939, 28.401156275441792],
									[120.9627304875221, 28.4038708466623],
									[120.95895187353017, 28.404114414548644],
									[120.95643908589511, 28.40563524816821],
									[120.95615851180594, 28.410695771992323],
									[120.96307419941479, 28.420267127026364],
									[120.96292654602337, 28.421719154415484],
									[120.95844200919146, 28.422402385561668],
									[120.95392375767528, 28.424926649445354],
									[120.9552707550414, 28.427890717782475],
									[120.95847425708132, 28.431193075999715],
									[120.9589336109974, 28.435078914360474],
									[120.96159449808772, 28.436773728125104],
									[120.96149567608461, 28.438413542051364],
									[120.96418929579943, 28.439483246954353],
									[120.97008540221964, 28.439655245892936],
									[120.97378101508184, 28.441174450840265],
									[120.98002028660699, 28.446245975171678],
									[120.9807745165308, 28.448163211063388],
									[120.97816428375472, 28.451870810989192],
									[120.97563439641033, 28.459105015983766],
									[120.97614336682295, 28.463036363637343],
									[120.97499405213387, 28.465958773578564],
									[120.96947641190695, 28.465990293917002],
									[120.96681605002073, 28.465403737192787],
									[120.96599458498213, 28.466483613428068],
									[120.96993532245722, 28.473807570762858],
									[120.96977073393225, 28.475493485735853],
									[120.96609238085875, 28.478359581029906],
									[120.96607536028966, 28.479358300645117],
									[120.96985303718793, 28.481173407726658],
									[120.96743869294141, 28.48350525356466],
									[120.96295479912476, 28.483798084514035],
									[120.96152499488267, 28.486282948199573],
									[120.96321683818655, 28.485809727636877],
									[120.97018055049205, 28.4866496737435],
									[120.97349770255698, 28.484440102428835],
									[120.98005031676871, 28.48410924904266],
									[120.98292320194423, 28.484989447904752],
									[120.98553410561453, 28.48332819414088],
									[120.98765180668556, 28.48026283066514],
									[120.99075475462826, 28.47964563403883],
									[120.99103398513034, 28.476585782507925],
									[120.99599222366226, 28.475680978194646],
									[120.99804479942804, 28.476143574166656],
									[120.99879864624063, 28.48191439243533],
									[121.00098273436572, 28.482735478859297],
									[121.00740197012487, 28.480905717325072],
									[121.01157217321725, 28.48271873708012],
									[121.01346068746079, 28.48177751382127],
									[121.01600638488685, 28.47601102129164],
									[121.02119495778118, 28.475887373503554],
									[121.02390469784359, 28.480998250368998],
									[121.02694286312271, 28.4825195867096],
									[121.02824088610805, 28.481267583831993],
									[121.03183758343778, 28.48481616473424],
									[121.0427639937634, 28.481576538726358],
									[121.04555784651745, 28.481320687899483],
									[121.05787007074719, 28.483311381315275],
									[121.06604459428263, 28.483377744986967],
									[121.07147360362399, 28.485867803156623],
									[121.07251018559668, 28.487130359578487],
									[121.07172080567068, 28.49198447100656],
									[121.07246061406613, 28.495228620604394],
									[121.07466569506585, 28.498893320170623],
									[121.0777263335035, 28.500419351871642],
									[121.08236883985012, 28.50670421093065],
									[121.08432699939158, 28.512880006507146],
									[121.08376678830666, 28.52027444371066],
									[121.08897042844262, 28.52736894621995],
									[121.09593743676339, 28.532219586264944],
									[121.0979140629837, 28.536742021427187],
									[121.10041903281217, 28.54029813864821],
									[121.10280847123397, 28.541312515460277]
								]
							]
						]
					}
				}]
			},
			cityData = {
				data: function() {
					return [{
						name: "鹿城区",
						value: 68,
						coord: [120.489894, 28.082536]
					}, {
						name: "龙湾区",
						value: 18,
						coord: [120.805894, 27.920969]
					}, {
						name: "瓯海区",
						value: 36,
						coord: [120.501369, 27.996593]
					}, {
						name: "洞头区",
						value: 5,
						coord: [121.113762, 27.832626]
					}, {
						name: "瑞安市",
						value: 74,
						coord: [120.365572, 27.901998]
					}, {
						name: "乐清市",
						value: 170,
						coord: [120.978579, 28.220666]
					}, {
						name: "永嘉县",
						value: 52,
						coord: [120.642158, 28.330733]
					}, {
						name: "文成县",
						value: 11,
						coord: [119.982316, 27.807567]
					}, {
						name: "平阳县",
						value: 30,
						coord: [120.280537, 27.623857]
					}, {
						name: "泰顺县",
						value: 20,
						coord: [119.877783, 27.481151]
					}, {
						name: "苍南县",
						value: 9,
						coord: [120.452814, 27.381237]
					}, {
						name: "龙港市",
						value: 9,
						coord: [120.6099323, 27.52166944]
					}, {
						name: "浙南集聚区",
						value: 1,
						coord: [120.770894, 27.850969]
					}, {
						name: "瓯江口集聚区",
						value: 1,
						coord: [120.9299323, 27.98166944]
					}]
				}
			},
			sickData = {
				data: function() {
					return [{
						label: "确诊病例",
						value: 500
					}, {
						label: "重症病例",
						value: 10
					}, {
						label: "出院病例",
						value: 280
					}, {
						label: "死亡病例",
						value: 1
					}]
				}
			},
			ca = a("18a0"),
			da = a.n(ca),
			ua = (a("bc3a"), cityData.data()),
			pa = 22,
			va = sickData.data(),
			ha = {
				data: function() {
					return {
						mapdata: ua,
						date: pa,
						num: va,
						token: "",
						access_token: "",
						ticketString: "",
						nonceStr: "Wm3WZYTPz0wzccnC",
						timestamp: 1414587466,
						wx: da.a
					}
				},
				computed: {},
				created: function() {
					this.getToken()
				},
				methods: {
					NYJJMap: function() {
						var e = this.$echarts.init(document.getElementById("nyjj-map")),
							t = this;
						this.$echarts.registerMap("wenzhou", oa), e.setOption({
							geo: {
								map: "wenzhou",
								zoom: 1.2,
								label: {
									normal: {
										show: !1
									},
									emphasis: {
										show: !1
									}
								}
							},
							visualMap: {
								left: "5%",
								top: "17%",
								min: 0,
								max: this.mapdata.sort((function(e, t) {
									return t.value - e.value
								}))[0].value,
								inRange: {
									color: ["#ffffff", "#feeeef", "#fcc7b7", "#ff9d88", "#ff6c4a", "#ff3b07"]
								},
								textStyle: {
									color: "#FFF"
								},
								calculable: !0
							},
							series: [{
								type: "map",
								map: "wenzhou",
								zoom: 1.2,
								emphasis: {
									label: {
										show: !0
									}
								},
								label: {
									normal: {
										show: !1,
										textStyle: {
											color: "#fff"
										}
									},
									emphasis: {
										show: !1,
										textStyle: {
											color: "#fff"
										}
									}
								},
								textFixed: {
									Alaska: [200, 0]
								},
								data: this.mapdata,
								markPoint: {
									symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAABNCAQAAAAYuNAdAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfkAR8AFxfyS5wcAAAJWklEQVR42u2dbYwVVxnH/2feLrtCl0JZYrrUQlsohUWoIVVEoo3EtJrUL4pam5I02WJoikWERmJrbZCaFq2ktVtatxYTGnxjt4k1mtRqtVG2SlOELriWiiAfKLAVcLf3zsw9fphzzpwzM3vnAtt79g7nP7kvuXvncub+eJ557nPO8wyhOF8Rct67GtUQPW8kpP49BTwZogE6tqLp5/XDdfLfokCUb4CBOdai0iO78a84H2qOZTKQhAHk9/xVKI9GFyaqPFJQhjO+zwFawzJJbIXJLQup0YUrjVHdQFAL6CiWKVlktFni3lIAR+8yGgvJKCOYVXbj97S2hWbCJKo9RgijjbD72EIBg3MsRMU9h1ZlMKvimQQ0C2eGm5VQcnw2Q2lLSGFwjqFUlJAwhuKRsNcAgBKSxpmCSSJE3KHaDKENG/YVpcevn/eRyde1zHLbrRZS0v0NFE+0XB3xjw+/dWpg71/W7Dnqo4qQbRZCVAEQbqVpnAk3q6CMEFpwYMN5Zu7NX576aXuq7sO9eBQMHX/hF8/dPYAQIQKECBha7nQBquJUYAqUlkBpw4Hz5OwVG9qWw9J9eBehqid/17Nl/SACtoUCZzWNU4LJzpUyShd2Z+sLay/vIq7uo7p4Rf1Dz9y49d8j8OEjhK/gVEIhYW0CJXewDly435nZ39ux2qDUKeJe1bV/x9oPoIQSXLhwWCDKfibGOXJhmSSOX22G0vnJgi9sd6bpPhgjAPBPPNG1Zj8qqCCAzxxuZJvC1TKYhIc9POBx4W7vvPWn1iW6D8KIKzzz6Mp1+1BBhTncKCCiqHJXGwc1RPwYseHCfWjWF39sUI4n2ZPu6v7aTHjw4MKFDVtk5pgIheRiWfQKb977+n/e+kHdwzdK6sy+ztsPn0WZuVvubJmrVS0zOmc6cH691qAcj5o0/zerWRDkSIlVJktK3/Eo1nlybkeX7mEbZWv27Q9cK3DaAigI4ZbJE+dR4s75/AZi6x60UbaIvWoNPPEDxZbnr2KYPFXgbLtu8id0D9lodLUv/dYcOJJlWipM2c3an7nNzIGMa5HbVjDLtGWUgEXkeUsL9qxS+026R2tUWzM+OX1CAiYBIUR1szbshxbZk3UP1qi23Es2dsJO22Y0ySz9MFm4RPdQjfL10cXK+ZItEkgGQNaUuboHapSv9tlS+CNZZmKtT+tM3QM1ylfbFdICHkFQnnAmsGC5l+keqFG+JkyRrFJITRoQWHar7oEa5ctuTVoloAZAAAGIp3ugRvmyXLFCEskAKJJcQ2I03qWuXAagzpoABKAV3aM0ylfVl9Yry7MmqsJh3QM1ylcwkvVqDJMVkFVO6h6oUb7ePaWsgWeSLZMCoGf/pXugRvl654hUXiRkQa5woMDbB3UP1Chfx96UUIpnkWXG1UXV3bt1D9QoXy+9JhZBS4V+qputovrNvwf/1T1Uo9ryzzwyIK9p57JkqwRF9Vjl6Iu6B2tUW/98+VQlq2ozdrOcdLhjJ+rub2GkQfSp56UV7dzZQg2AGNCNB4+/onu8RqPraP/3ByWUNCsA4vW5AYLux2ioe8hG2aLhwz1SgZ9qmVQ+Z0bVf8H9Bw/s0D1oo2z9bdfWQfhKrSbjRymPZrltRlW6/vInTg/qHrZRWkOHbu6Bn64Di/6a6WYR/Gf46+vLJ3QP3UjVyNBXHnh7GD6zzLSbBRAnDUKG00dl2+FN9wRndQ/fKJb/v3u/sfMIKqyoL2C01KQB5dGs5Gbho/LgwLdXm7T7eNHIO+s3bP0Hq//y025WrQKLg6BA4Hxj1aqhA7oPwwg4Mbjyq48OKCgDKfhhiiun+WJLJ+pmAA8leChNa/1t14IVVh3dL43eG1WDV3fd9OzQMMqoiBsHys6ZUeV0jTJ4eAyod/fV6+7sWGKaBTdelB7u39Tz9FvsTFlBBWX4qGSXwddsUMFKrj14cO+55o7PXrPMm6z78C4elU8f+GP3r7rfhB+d9FBh93kNKpTWMTYvuoXLtqge0G0rbZi/bFHHVW0drVOdCcb1jr2qQfDu8MmhY0cO/f71LW+crrD4JWDW6Cvny5Cl2ZGCOUpTJ47UEbW6DvsryVof1mApVTIb591/r9tyfh/0Ut+NO5UvKF6U0TjJHS0jqwtEOBoIjDWaOqXbrcmFt7xhhSOKOznMRMmKJskF/BbstXM23+dNOveP+UPvx3eI9BjvHJlYktEAJSY8GMxQZGKT7dao7GKB7EaI6tmTNUIUIOPi67hNqT6gsTexYcNZNet7m1ouPbeP+FPvx7az//EBawmqBPwNUdw4GOzfD9lYONBkI8QUyozmwbValEp1R0m71AeTd2NgXmTllY9vbm2v/wNe2bX0WZZR8ROp60Yq2Tq4KrZQjEo+DWT0tMzsBN1UzYPl1hrRqcD73OU9353YUd/uf+5d0pP4Ia6eNRulepoH89dG7QXd7G29Yy/Cf1C58D41fecjbVfm77y798M/Er/d4hZmOixzTNp6N3vDfTkCt1nU7cFbOrXv4Slzau/a33vD0yKnwmGGauq6oXpvGu6zPzXDpTDieDZytPx3canz0hc3T1sw+o79fTc8hbJIj1WUoL/xkWwkOQyiGRtGs0n2ZTT9RWpiz2FLeWUPpavbXn7w/Yuzd/pr3+JtDGRZ2KU8P6gD5gVfpKaOa4GN68tH8bGIllTc0cJDafrEV++bsSy9057nP9TNQGbbpS7LzLx8FH/tgi8fpbw1DVA3Sj4Gdc7HiScJJrbs3ThzubrDa33XdzOEHGYg2aWuMyYXTT6r/8Ju5wAztet4QAnIQRBRcsoeSvCc0r51c26J3/x678IfsoR1Wczax3GsXrsE0KBLLo5fkWTWKj5zenDh7r2r89bonft/ufCxwEfAIMpny8SsfTOqEDBHxSm2PXcsuhM4+LP5Pwh46lqehSgEysLATE0SONJ8jwMHzu4vXTbj2i1+vGQtULI+BUBZIJipKTxHmvGJssoEEKucQukaIQVBWdeVbZtFlBLCU9AAAmmJms3meaCsQQyLhbJQMCWcFqJamWgqKb7OAE+R8VkIZRFxs6MslJtlB6ReOclS5nkAKMnrQqEsIEzlAgLqLVKcvo7T2IVAWUiYiSk8S8koqzMStEgoCwpTwpluSxbPSKBYKAsLU5rvSfcEVBLYxUFZYJhA5tRApHNOYTeHCg2THWLGhEDRMEb6P3u6VvJW1mSrAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTAxLTMwVDE2OjIzOjIzKzA4OjAwsCy0SAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wMS0zMFQxNjoyMzoyMyswODowMMFxDPQAAAAASUVORK5CYII=",
									symbolSize: [100, 30],
									label: {
										normal: {
											show: !0,
											fontSize: 10,
											offset: [0, -2],
											textStyle: {
												color: "#000",
												fontWeight: "bold"
											},
											formatter: ["{title|{b}}{num|{c}}{dw|例}"].join("\n"),
											rich: {
												num: {
													color: "red",
													fontSize: 12,
													fontWeight: "bold",
													height: 12
												}
											}
										}
									},
									data: this.mapdata
								}
							}]
//					    }), e.getZr().on("click", (function(e) {
						}), e.getZr().on("", (function(e) {
							e.target && t.$router.push({
								path: "/MobileXq",
								query: {
									label: t.mapdata[e.target.dataIndex].name
								}
							})
						}))
					},
					getToken: function() {
						var e = this;
						$.ajax({
							url: "http://115.223.34.189:8099/xypt/zww/settoken",
							type: "Post",
							data: {
								idcard: "test",
								username: "syl",
								phoneum: "123456"
							},
							dataType: "json",
							success: function(t) {
								window.localStorage.setItem("token", t.responseText), e.getaccess()
							},
							error: function(t) {
								window.localStorage.setItem("token", t.responseText), e.getaccess()
							}
						})
					},
					getaccess: function() {
						var e = this;
						$.ajax({
							url: "http://115.223.34.189:8099/xypt/wx/getsign",
							type: "Post",
							data: {
								url: location.href.split("#")[0],
								token: window.localStorage.getItem("token")
							},
							dataType: "json",
							success: function(t) {
								var a = t.signature,
									i = t.noncestr,
									n = t.timestamp;
								e.WXshare(a, i, n)
							},
							error: function(e) {
								console.log(e)
							}
						})
					},
					WXshare: function(e, t, a) {
						var i = this;
						this.wx.config({
							debug: !1,
							appId: "wx7eeb4eea87cf3ce6",
							timestamp: a,
							nonceStr: t,
							signature: e,
							jsApiList: ["updateAppMessageShareData"]
						}), this.wx.ready((function() {
							i.wx.updateAppMessageShareData({
								title: "温州市疫情分布动态地图",
								desc: "抗击疫情，我们在一起，温州加油！",
								link: location.href,
								imgUrl: "",
								success: function() {}
							})
						})), this.wx.error((function(e) {}))
					}
				},
				mounted: function() {
					this.NYJJMap()
				}
			},
			ma = ha,
			fa = (a("d16f"), Object(B["a"])(ma, ra, sa, !1, null, "3ac5c9dc", null)),
			ba = fa.exports,
			_a = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "xq"
				}, [a("div", {
					staticClass: "head"
				}, [a("span", [e._v(e._s(this.title) + "疫情小报")]), a("span", {
					on: {
						click: function(t) {
							return e.back()
						}
					}
				}, [e._v("<<  返回")])]), a("div", {
					staticClass: "xq_contain"
				}, [a("ul", {
					staticClass: "bl"
				}, e._l(e.bl, (function(t, i) {
					return a("li", {
						key: i
					}, [a("div", [a("span", [e._v(e._s(t.label))]), a("br"), a("span", {
						style: {
							color: t.color
						}
					}, [e._v(e._s(t.value) + "例")])])])
				})), 0), a("p", [e._v("病例信息")]), a("ul", {
					staticClass: "xq1"
				}, e._l(e.xq, (function(t, i) {
					return a("li", {
						key: i
					}, [a("span", [e._v(e._s(++i))]), a("span", [e._v("." + e._s(t))])])
				})), 0), e._m(0)]), a("div", {
					staticClass: "footer"
				}, [a("p", [a("span", {
					staticClass: "text"
				}, [e._v("截至")]), e._v(" 2020年 2月\n      "), a("span", {
					staticClass: "time"
				}, [e._v(e._s(e.date))]), e._v("日\n      "), a("span", {
					staticClass: "time"
				}, [e._v("24")]), e._v("时\n    ")]), a("span", {
					staticStyle: {
						"font-size": "13px"
					}
				}, [e._v("温州新闻网、温州设计集团勘测院   联合出品")])])])
			},
			ya = [function() {
				var e = this,
					t = e.$createElement,
					i = e._self._c || t;
				return i("div", {
					staticClass: "slipe"
				}, [i("span", [e._v("下滑可查看更多"), i("img", {
					staticStyle: {
						position: "relative",
						top: "5px"
					},
					attrs: {
						src: a("f248")
					}
				})]), i("br"), i("span", {
					staticStyle: {
						"font-size": "10px",
						"line-height": "15px"
					}
				}, [e._v("表中病例信息来源“健康温州”公众号于2020年1月28日起至今公布的信息，部分病例信息缺失。")])])
			}],
			ga = {
				"鹿城区": {
					bl: [{
						label: "确诊病例",
						value: 68,
						color: "#f67a32"
					}, {
						label: "重症病例",
						value: 3,
						color: "rgb(255,79,85)"
					}, {
						label: "出院病例",
						value: 30,
						color: "rgb(9,252,255)"
					}, {
						label: "死亡病例",
						value: 0,
						color: "rgb(255,246,11)"
					}],
					xq: ["2月14日确诊：男，56岁，现住鹿城区，2月2日出现咳痰症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月13日确诊：女，54岁，现住鹿城区，有确诊病例接触史，2月10日CT显示肺部感染，现在定点医疗机构隔离治疗。", "2月13日确诊：女，63岁，现住鹿城区，2月10日出现胸闷、气促症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月12日确诊：女，52岁，现住鹿城区，有确诊病例接触史，2月10日CT显示肺部感染，现在定点医疗机构隔离治疗。", "2月10日确诊：男，20岁，现住鹿城区，有确诊病例接触史，2月9日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月9日确诊：男，48岁，现住鹿城区，1月29日出现发热、咳嗽症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月9日确诊：男，67岁，现住鹿城区，2月8日出现发热、咳嗽症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月8日确诊：女，62岁，现住鹿城区，有温州银泰世贸店购物史， 2月6日出现发热症状，现在定点医疗机构隔离治疗。", "2月8日确诊：女，74岁，现住鹿城区，有温州银泰世贸店工作人员共同生活史，2月4日出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。", "2月7日确诊：男，30岁，现住鹿城区，有确诊病例接触史，2月6日出现发热症状，现在定点医疗机构隔离治疗。", "2月6日确诊：女，30岁，现住鹿城区，1月27日湖北回温，1月30日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月6日确诊：男，76岁，现住鹿城区，有确诊病例接触史，2月3日出现咳嗽、腹泻等症状，现在定点医疗机构隔离治疗。", "2月5日确诊：男，35岁，现住鹿城区，1月22日湖北回温，2月1日出现咽痛、咳嗽等症状，现在定点医疗机构隔离治疗。", "2月5日确诊：女，71岁，现住鹿城区，有确诊病例接触史，2月2日出现发热、胸闷等症状，现在定点医疗机构隔离治疗。", "2月5日确诊：男，43岁，现住鹿城区， 1月28日出现乏力、肌肉酸痛等症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月5日确诊：女，53岁，现住鹿城区，有湖北返乡人员接触史，1月24日出现发热症状，现在定点医疗机构隔离治疗。", "2月5日确诊：男，56岁，现住鹿城区，有确诊病例接触史，2月1日出现发热症状，现在定点医疗机构隔离治疗。", "2月5日确诊：女，26岁，现住鹿城区，有确诊病例接触史，2月2日出现全身酸痛、胸闷症状，现在定点医疗机构隔离治疗。", "2月5日确诊：男，61岁，现住鹿城区，有确诊病例接触史，1月21日出现发热症状，现在定点医疗机构隔离治疗。", "2月5日确诊：女，56岁，现住鹿城区，有确诊病例接触史，1月26日出现发热症状，现在定点医疗机构隔离治疗。", "2月4日确诊：男，28岁，现住鹿城区，无武汉旅居史，有确诊病例接触史，1月13日出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。", "2月4日确诊：女，69岁，现住鹿城区，无武汉旅居史，无确诊病例接触史，1月21日出现发热、咳嗽等症状，感染来源调查中,现在定点医疗机构隔离治疗。", "2月3日确诊：女，52岁，现住鹿城区，无武汉旅居史，无确诊病例接触史， 2月1日出现发热症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月3日确诊：女，48岁，现住鹿城区，无武汉旅居史，有确诊病例接触史，1月29日出现发热、干咳症状，现在定点医疗机构隔离治疗。", "2月2日确诊：女，38岁，现住鹿城区，无武汉旅居史，与确诊病例有接触史，2月1日出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。", "2月2日确诊：男，51岁，现住鹿城区，无武汉旅居史，与确诊病例有接触史，1月31日出现发热症状，现在定点医疗机构隔离治疗。", "2月2日确诊：男，45岁，现住鹿城区，无武汉旅居史，1月14日有温州银泰世贸店购物史，1月28日出现发热、咽痛症状，现在定点医疗机构隔离治疗。", "2月1日确诊：女，55岁，现住鹿城区，无武汉旅居史，与确诊病例有接触史，1月24日出现胸闷、呼吸困难、发热等症状，现在定点医疗机构隔离治疗。", "2月1日确诊：女，68岁，现住鹿城区，无武汉旅居史，与确诊病例有接触史，1月29日出现干咳、发热症状，现在定点医疗机构隔离治疗。", "2月1日确诊：女，73岁，现住鹿城区，无武汉旅居史，与确诊病例有接触史，1月26日出现发热症状，现在定点医疗机构隔离治疗。", "2月1日确诊：女，47岁，现住鹿城区，无武汉旅居史，1月31日出现发热、咳嗽、乏力等症状，感染来源不明，有待进一步溯源，现在定点医疗机构隔离治疗。", "2月1日确诊：男，40岁，现住鹿城区，无武汉旅居史，1月24日出现发热、咳嗽症状，感染来源不明，有待进一步溯源，现在定点医疗机构隔离治疗。", "1月31日确诊：女，28岁，现住鹿城区，无武汉旅居史，温州银泰世贸店工作人员，1月29日出现发热症状，现在定点医疗机构隔离治疗。", "1月31日确诊：男，42岁，现住鹿城区，无武汉旅居史，与确诊病例有接触史，1月11日出现咳嗽，1月29日出现发热症状，现在定点医疗机构隔离治疗。", "1月31日确诊：男，51岁，现住鹿城区，无武汉旅居史，1月21日出现发热、咳嗽、乏力等症状，感染来源不明，有待进一步溯源，现在定点医疗机构隔离治疗。", "1月31日确诊：男，50岁，现住鹿城区，无武汉旅居史，1月28日在台州出现发热、咽痛、咳嗽、咳痰等症状，1月30日台州回温，现在定点医疗机构隔离治疗。", "1月31日确诊：男，34岁，现住鹿城区，无武汉旅居史，1月24日出现发热、咳嗽症状，感染来源不明，有待进一步溯源，现在定点医疗机构隔离治疗。", "1月30日确诊：男，56岁，现住鹿城区，无武汉旅居史，与确诊病例有接触史，1月20日出现全身酸痛、乏力，体温38℃，现在定点医疗机构隔离治疗。", "1月30日确诊：女，37岁，现住鹿城区，无武汉旅居史，与确诊病例有接触史，1月11日出现咳嗽，无发热，现在定点医疗机构隔离治疗。", "1月29日确诊：男，48岁，现住鹿城区，无武汉外出史或旅游史，有与确诊病例1月16日聚餐史，1月23日眼睛红肿伴发热，体温39℃，伴咳嗽，现在定点医疗机构隔离治疗。", "1月28日确诊：女，34岁，现住鹿城区，1月18日武汉返回温州，1月21日出现发热，现在温州市定点医疗机构隔离治疗。", "1月28日确诊：男，53岁，现住鹿城区，1月18日武汉返回温州，1月19日出现发热症状，感畏寒、寒战，有咳痰、有咽痛、伴乏力，无胸闷、胸痛，无恶心、呕吐，无纳差等其他症状，现在温州市定点医疗机构隔离治疗。", "1月28日确诊：男，57岁，现住鹿城区，无武汉旅行或居住史以及接触武汉回温人员，1月9日-12日均与确诊病例有接触，1月24日出现发热，自测体温37.8℃，稍有胸闷、畏寒，现在温州市定点医疗机构隔离治疗。", "1月28日确诊：男，57岁，现住鹿城区，1月6日与妻子武汉回温，1月22日出现发热伴咽部不适，最高体温37.9℃，现在温州市定点医疗机构隔离治疗。", "1月28日确诊：男，42岁，现住鹿城区，1月19日从武汉回温州，1月23日出现发热症状，伴咳嗽、咳痰，咽喉疼痛，急起起病，体温37.9度，现在温州市定点医疗机构隔离治疗。", "1月28日确诊：女，43岁，现住鹿城区，无武汉旅行或居住史，于1月16日在银泰百货购物，1月22日出现发热，体温38.5℃，伴肢体酸痛，乏力，现在温州市定点医疗机构隔离治疗。", "1月28日确诊：女，32岁，现住鹿城区，无武汉旅行或居住史，1月19日至银泰购物，1月21日出现头痛、畏寒，现在温州市定点医疗机构隔离治疗。", "1月28日确诊：男，57岁，现住鹿城区，无武汉旅行或居住史，与银泰工作人员有接触，1月23日出现发热，体温37.5℃，现在温州市定点医疗机构隔离治疗。", "1月28日确诊：女，63岁，现住鹿城区，无武汉旅行或居住史，为银泰清洁工，1月16日出现发热、全身酸痛、肌肉酸痛、胃纳差，现在温州市定点医疗机构隔离治疗。", "1月28日确诊：女，28岁，现住鹿城区，无武汉旅行或居住史，为银泰销售员，1月21日出现发热，体温38℃，乏力，无明显咳嗽、咳痰，无胸闷气促，现在温州市定点医疗机构隔离治疗。", "1月27日确诊：女，68岁，现住鹿城区，1月16日从武汉回温后即出现咳嗽，以干咳为主，少量痰，现在温州市定点医疗机构隔离治疗。", "1月27日确诊：男，56岁，现住鹿城区，1月16日从武汉回温，1月10日曾在武汉出现发热，输液后体温恢复正常，回温后又出现发热症状，现在温州市定点医疗机构隔离治疗。", "1月27日确诊：女，56岁，现住鹿城区，无武汉居住及旅游史，1月9日与确诊病例聚餐，1月16日自感发热、乏力伴畏寒，体温37.5C，无其他不适，现在温州市定点医疗机构隔离治疗。", "1月27日确诊：女，41岁，现住鹿城区，无武汉居住及旅游史，跟确诊病例有接触史，1月20日自感头痛、肌肉酸痛，测体温38.5℃，现在温州市定点医疗机构隔离治疗。", "1月27日确诊：女，54岁，现住鹿城区，1月22日从武汉回温，1月13日患者在武汉出现咳嗽、咳痰，现在温州市定点医疗机构隔离治疗。", "1月27日确诊：女，55岁，现住鹿城区，1月22日从武汉回温，1月19日患者在武汉自感畏寒不适，体温39.4℃，现在温州市定点医疗机构隔离治疗。", "1月27日确诊：女，51岁，现住鹿城区，1月18日从武汉回温，1月22日出现干咳，无其他不适症状，听闻武汉朋友感染自行去医院查体，现在温州市定点医疗机构隔离治疗。"]
				},
				"龙湾区": {
					bl: [{
						label: "确诊病例",
						value: 18,
						color: "#f67a32"
					}, {
						label: "重症病例",
						value: 0,
						color: "rgb(255,79,85)"
					}, {
						label: "出院病例",
						value: 9,
						color: "rgb(9,252,255)"
					}, {
						label: "死亡病例",
						value: 0,
						color: "rgb(255,246,11)"
					}],
					xq: ["2月15日确诊：女，50岁，现住龙湾区，有确诊病例接触史，2月7日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月11日确诊：男，69岁，现住龙湾区，有确诊病例接触史，2月7日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月6日确诊：女，57岁，现住龙湾区，有确诊病例接触史，2月5日出现发热症状，现在定点医疗机构隔离治疗。", "2月5日确诊：女，52岁，现住龙湾区，有确诊病例接触史，2月1日出现发热症状，现在定点医疗机构隔离治疗。", "2月3日确诊：男，2岁，现住龙湾区，无武汉旅居史，有确诊病例接触史，1月20日出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。", "2月2日确诊：男，54岁，现住龙湾区，无武汉旅居史，与确诊病例有接触史，1月31日出现发热、干咳等症状，现在定点医疗机构隔离治疗。", "2月1日确诊：女，35岁，现住龙湾区，无武汉旅居史，1月18日有温州银泰世贸店购物史， 1月30日出现发热、干咳等症状，现在定点医疗机构隔离治疗。", "2月1日确诊：女，29岁，现住龙湾区，无武汉旅居史，1月27日出现发热、干咳等症状，感染来源不明，有待进一步溯源，现在定点医疗机构隔离治疗。", "1月31日确诊：男，26岁，现住龙湾区，1月16日武汉回温，1月25日出现发热症状，现在定点医疗机构隔离治疗。", "1月30日确诊：男，38岁，现住龙湾区，1月18日武汉回温，1月26日出现咽部不适、干咳，现在定点医疗机构隔离治疗。", "1月30日确诊：女，30岁，现住龙湾区，1月16日武汉回温，出现咽部不适、干咳，现在定点医疗机构隔离治疗。", "1月30日确诊：女，64岁，现住龙湾区，1月23日武汉回温，1月27日出现发热、咳嗽、咳痰，现在定点医疗机构隔离治疗。", "1月30日确诊：女，39岁，现住龙湾区，1月23日武汉回温，1月27日出现咳嗽、咳痰，现在定点医疗机构隔离治疗。", "1月28日确诊：女，53岁，现住龙湾区，1月16日武汉回温州。1月19日出现发热、乏力、畏寒，现在龙湾区定点医疗机构隔离治疗。"]
				},
				"瓯海区": {
					bl: [{
						label: "确诊病例",
						value: 36,
						color: "#f67a32"
					}, {
						label: "重症病例",
						value: 1,
						color: "rgb(255,79,85)"
					}, {
						label: "出院病例",
						value: 12,
						color: "rgb(9,252,255)"
					}, {
						label: "死亡病例",
						value: 0,
						color: "rgb(255,246,11)"
					}],
					xq: ["2月13日确诊：女，33岁，现住瓯海区，1月20日湖北回温，1月31日出现发热症状，现在定点医疗机构隔离治疗。", "2月12日确诊：男，62岁，现住瓯海区，有确诊病例接触史，2月12日出现发热、咳嗽症状，现在定点医疗机构隔离治疗。", "2月11日确诊：男，72岁，现住瓯海区，有确诊病例接触史，2月10日出现发热症状，现在定点医疗机构隔离治疗。", "2月9日确诊：女，51岁，现住瓯海区，有确诊病例接触史，2月8日出现发热症状，现在定点医疗机构隔离治疗。", "2月9日确诊：女，81岁，现住瓯海区，有确诊病例接触史，2月8日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月6日确诊：男，51岁，现住瓯海区，有确诊病例接触史，2月5日出现发热症状，现在定点医疗机构隔离治疗。", "2月6日确诊：女，49岁，现住瓯海区，有确诊病例接触史，2月6日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月6日确诊：女，26岁，现住瓯海区，有确诊病例接触史，2月4日出现发热症状，现在定点医疗机构隔离治疗。", "2月6日确诊：女，81岁，现住瓯海区，有确诊病例接触史，2月6日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月5日确诊：男，34岁，现住瓯海区，无湖北旅居史，有温州银泰世贸店购物史，2月1日出现头晕、流涕等症状，2月4日出现发热症状，现在定点医疗机构隔离治疗。", "2月5日确诊：男，50岁，现住瓯海区，有确诊病例接触史，2月4日出现发热、胸闷、乏力症状，现在定点医疗机构隔离治疗。", "2月5日确诊：女，76岁，现住瓯海区， 2月5日出现发热、乏力症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月4日确诊：男，50岁，现住瓯海区，无武汉旅居史，有确诊病例接触史，2月2日出现发热、肌肉酸痛症状，现在定点医疗机构隔离治疗。", "2月4日确诊：女，45岁，现住瓯海区，与武汉返乡人员有接触史，1月30日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月4日确诊：女，66岁，现住瓯海区，无武汉旅居史，有确诊病例接触史，2月3日出现发热症状，现在定点医疗机构隔离治疗。", "2月1日确诊：男，27岁，现住瓯海区，无武汉旅居史，与确诊病例有密切接触史，1月31日出现发热、干咳等症状，现在定点医疗机构隔离治疗。", "2月1日确诊：男，49岁，现住瓯海区，无武汉旅居史，与确诊病例有密切接触史，1月31日出现发热症状，现在定点医疗机构隔离治疗。", "1月31日确诊：女，28岁，现住瓯海区，无武汉旅居史，1月24日马尔代夫回温，与确诊病例有接触史，1月30日开始出现发热、乏力等症状，现在定点医疗机构隔离治疗。", "1月31日确诊：男，55岁，现住瓯海区，无武汉旅居史，与确诊病例有接触史，1月25日出现发热、咳嗽、呕吐等症状，现在定点医疗机构隔离治疗。", "1月31日确诊：女，29岁，现住瓯海区，无武汉旅居史，温州银泰世贸店工作人员，1月27日出现发热症状，现在定点医疗机构隔离治疗。", "1月30日确诊：女，39岁，现住瓯海区，1月20日武汉回温，1月26日出现发热、咳嗽，现在定点医疗机构隔离治疗。", "1月30日确诊：女，50岁，现住瓯海区，1月22日武汉回温，1月27日出现发热，现在定点医疗机构隔离治疗。", "1月30日确诊：女，53岁，现住瓯海区，有温州银泰世贸店购物史，1月22日出现咽痛、发热，现在定点医疗机构隔离治疗。", "1月30日确诊：男，57岁，现住瓯海区，为确诊病例家属，1月25日出现发热，现在定点医疗机构隔离治疗。", "1月29日确诊：女，44岁，现住瓯海区，无武汉外出史或旅游史，有与确诊病例共同居住史，1月25日出现发热，体温38℃，现在定点医疗机构隔离治疗。", "1月29日确诊：女，35岁，现住瓯海区，无武汉外出史或旅游史，与确诊病例有接触史，1月23日出现头晕、头疼，体温38.9℃，现在定点医疗机构隔离治疗。", "1月29日确诊：男，48岁，现住瓯海区，1月18日武汉返回温州，1月27日社区管理人员上门测体温37.6℃，伴咳嗽，现在定点医疗机构隔离治疗。", "1月28日确诊：男，31岁，现住瓯海区，1月13日武汉返回温州,1月18日出现发热，咳嗽，畏寒，现在温州市定点医疗机构隔离治疗。", "1月28日确诊：女，39岁，现住瓯海区，无武汉旅居史，为银泰售货员， 1月20日出现发热，体温38.5℃、畏寒，伴头晕头痛，有全身酸痛疲乏，无呼吸困难，现在温州市定点医疗机构隔离治疗。", "1月28日确诊：男，25岁，现住瓯海区，1月24日武汉回温州，1月26日出现发热，现在温州市定点医疗机构隔离治疗。", "1月28日确诊：男，52岁。现住瓯海区，1月24日武汉回温州，1月23日出现发热、咳嗽、纳差，现在温州市定点医疗机构隔离治疗。", "1月28日确诊：男，45岁，现住瓯海区，无武汉外出史或旅游史，发病前有聚餐史，1月22日出现腹痛，无发热，无咳嗽，现在温州市定点医疗机构隔离治疗。", "1月28日确诊：女，57岁，现住瓯海区，1月14日从武汉回温，1月21日出现发热、轻度头痛，乏力，现在温州市定点医疗机构隔离治疗。"]
				},
				"洞头区": {
					bl: [{
						label: "确诊病例",
						value: 5,
						color: "#f67a32"
					}, {
						label: "重症病例",
						value: 0,
						color: "rgb(255,79,85)"
					}, {
						label: "出院病例",
						value: 1,
						color: "rgb(9,252,255)"
					}, {
						label: "死亡病例",
						value: 0,
						color: "rgb(255,246,11)"
					}],
					xq: ["2月7日确诊：女，32岁，现住洞头区，2月7日出现发热症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月6日确诊：男，62岁，现住洞头区，有确诊病例接触史，2月1日出现发热症状，现在定点医疗机构隔离治疗。", "2月2日确诊：女，62岁，现住洞头区，无武汉旅居史，与确诊病例有接触史，1月29日出现发热、咳嗽、流涕等症状，现在定点医疗机构隔离治疗。", "1月30日确诊：男，31岁，现住洞头区，1月17日从武汉回温，1月28日晚出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。"]
				},
				"瑞安市": {
					bl: [{
						label: "确诊病例",
						value: 74,
						color: "#f67a32"
					}, {
						label: "重症病例",
						value: 0,
						color: "rgb(255,79,85)"
					}, {
						label: "出院病例",
						value: 58,
						color: "rgb(9,252,255)"
					}, {
						label: "死亡病例",
						value: 0,
						color: "rgb(255,246,11)"
					}],
					xq: ["2月14日确诊：男，50岁，现住瑞安市，有确诊病例接触史，2月10日CT显示肺部感染，现在定点医疗机构隔离治疗。", "2月13日确诊：男，69岁，现住瑞安市，有确诊病例接触史，2月10日CT显示肺部感染，现在定点医疗机构隔离治疗。", "2月12日确诊：男，56岁，现住瑞安市，2月8日出现发热症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月8日确诊：男，62岁，现住瑞安市，有湖北回乡人员接触史，1月22日出现发热症状，现在定点医疗机构隔离治疗。", "2月7日确诊：男，34岁，现住瑞安市，有确诊病例接触史，2月3日出现乏力、鼻塞等症状，现在定点医疗机构隔离治疗。", "2月7日确诊：女，64岁，现住瑞安市，有确诊病例接触史, 2月6日出现发热症状，现在定点医疗机构隔离治疗。", "2月7日确诊：男，40岁，现住瑞安市，有确诊病例接触史，2月1日出现发热症状，现在定点医疗机构隔离治疗。", "2月6日确诊：女，38岁，现住瑞安市，有确诊病例接触史，2月3日出现发热、咳嗽症状，现在定点医疗机构隔离治疗。", "2月6日确诊：女，35岁，现住瑞安市，有确诊病例接触史，1月28日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月6日确诊：男，73岁，现住瑞安市，有确诊病例接触史，1月27日出现发热、咳嗽症状，现在定点医疗机构隔离治疗。", "2月4日确诊：男，71岁，现住瑞安市，无武汉旅居史，有确诊病例接触史，2月3日出现发热症状，现在定点医疗机构隔离治疗。", "2月4日确诊：男，44岁，现住瑞安市，无武汉旅居史，有确诊病例接触史，1月22日出现发热、咳痰等症状，现在定点医疗机构隔离治疗。", "2月3日确诊：女，44岁，现住瑞安市，无武汉旅居史，与确诊病例有接触史，1月22日出现发热、咳痰等症状，现在定点医疗机构隔离治疗。", "2月3日确诊：女，47岁，现住瑞安市，1月17日武汉回温，1月29日出现干咳、寒战等症状，现在定点医疗机构隔离治疗。", "2月3日确诊：男，35岁，现住瑞安市，1月25日湖北荆门市来温务工，1月31日出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。", "2月3日确诊：女，42岁，现住瑞安市，1月25日湖北荆门市来温务工，2月1日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月3日确诊：女，62岁，现住瑞安市，无武汉旅居史，与确诊病例有接触史，1月24日出现咽痛、乏力、肌肉酸痛等症状，现在定点医疗机构隔离治疗。", "2月3日确诊：男，42岁，现住瑞安市，1月22日武汉回温，2月1日出现发热、咳痰等症状，现在定点医疗机构隔离治疗。", "2月3日确诊：女，43岁，现住瑞安市，无武汉旅居史，无确诊病例接触史，1月22日出现咽痛、发热症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月3日确诊：男，36岁，现住瑞安市，无武汉旅居史，与确诊病例有接触史，1月31日出现腹泻等症状，现在定点医疗机构隔离治疗。", "2月2日确诊：女，53岁，现住瑞安市，无武汉旅居史，与确诊病例有接触史，1月22日出现发热、咳嗽咳痰等症状，现在定点医疗机构隔离治疗。", "2月2日确诊：女，46岁，现住瑞安市，无武汉旅居史，与武汉返乡人员有接触史，1月22日出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。", "2月2日确诊：女，61岁，现住瑞安市，无武汉旅居史，1月26日出现发热、咳嗽、乏力、肌肉酸痛等症状，感染来源不明，有待进一步溯源，现在定点医疗机构隔离治疗。", "2月1日确诊：男，67岁，现住瑞安市，无武汉旅居史，与确诊病例有接触史，1月27日出现发热、咳嗽、咳痰等症状，现在定点医疗机构隔离治疗。", "2月1日确诊：女，36岁，现住瑞安市，无武汉旅居史，与确诊病例有接触史，1月23日出现咳嗽症状，1月30日出现发热症状，现在定点医疗机构隔离治疗。", "2月1日确诊：女，32岁，现住瑞安市，1月20日从武汉去马来西亚旅游，1月27日马来西亚回温，无症状，主动申报来自武汉，现在定点医疗机构隔离治疗。", "1月30日确诊：男，21岁，现住瑞安市，无武汉旅居史，与确诊病例有接触史，1月26日出现发热，体温37.8℃、乏力、咳嗽，现在定点医疗机构隔离治疗。", "1月30日确诊：男，42岁，现住瑞安市，无武汉旅居史，与确诊病例有接触史，1月26日上午出现干咳症状，现在定点医疗机构隔离治疗。", "1月30日确诊：男，34岁，现住瑞安市，1月20日离开武汉，在马来西亚游玩，1月24日出现发热、咽痛，1月27日返温，现在定点医疗机构隔离治疗。", "1月30日确诊：女，68岁，现住瑞安市，1月14日从武汉回温，1月24日出现干咳，全身肌肉酸痛、乏力、咽痛等症状，现在定点医疗机构隔离治疗。", "1月30日确诊：男，34岁，现住瑞安市，1月20日从武汉去马来西亚旅游后，1月24日出现发热，1月27日返温，现在定点医疗机构隔离治疗。", "1月30日确诊：男，43岁，现住瑞安市，无武汉旅居史，与确诊病例有接触史，1月25日出现咽干、胸闷症状，现在定点医疗机构隔离治疗。", "1月30日确诊：女，43岁，现住瑞安市，1月20日出现发热，1月21日从武汉返温，现在定点医疗机构隔离治疗。", "1月30日确诊：女，69岁，现住瑞安市，无武汉旅居史，与确诊病例有接触史，1月26日出现发热，现在定点医疗机构隔离治疗。", "1月30日确诊：男，52岁，现住瑞安市，1月22日武汉回温，与确诊病例有接触史，1月27日出现发热，现在定点医疗机构隔离治疗。", "1月30日确诊：女，15岁，现住瑞安市，无武汉旅居史，与确诊病例有接触史，1月26日发热，现在定点医疗机构隔离治疗。", "1月30日确诊：女，53岁，现住瑞安市，1月19日从武汉回温，1月24日出现咽痛症状，现在定点医疗机构隔离治疗。", "1月29日确诊：男，18岁，现住瑞安市，1月27日发病，无武汉外出史或旅游史，与确诊病例有接触史，体温37.5℃，无其他症状，现在定点医疗机构隔离治疗。", "1月29日确诊：女，5岁，现住瑞安市，1月26日，无武汉外出史或旅游史，与确诊病例有接触史，体温39.3℃，头晕头痛，肌肉酸痛，现在定点医疗机构隔离治疗。", "1月29日确诊：男，50岁，现住瑞安市，体温38.8℃，无武汉外出史或旅游史，与确诊病例有接触史，寒战，无其他症状，现在定点医疗机构隔离治疗。", "1月29日确诊：女，47岁，现住瑞安市，1月22日从武汉返温，1月21日发病，咳嗽、鼻塞、乏力，现在定点医疗机构隔离治疗。", "1月29日确诊：男，40岁，现住瑞安市，1月22日从武汉返瑞，1月22日发病，干咳，无其他症状，现在定点医疗机构隔离治疗。", "1月29日确诊：男，42岁，现住瑞安市，无武汉外出史或旅游史，与确诊病例有接触史，1月26日发病，轻微咳嗽，无明显症状，现在定点医疗机构隔离治疗。", "1月29日确诊：女，67岁，现住瑞安市，无武汉外出史或旅游史，与确诊病例有接触史，1月25日发病，体温38℃，无其他症状，现在定点医疗机构隔离治疗。", "1月29日确诊：男，42岁，现住瑞安市，1月16日从武汉前往杭州，在杭州停留2日，于1月18日返回温州，1月20日发病，轻微咳嗽，现在定点医疗机构隔离治疗。", "1月29日确诊：男，28岁，现住瑞安市，1月24日从武汉返温，1月22日发病，头痛、纳差、体温38℃，现住定点医疗机构隔离治疗。", "1月29日确诊：男，46岁，现住瑞安市，1月22日从武汉返温，1月24日发病，干咳、乏力、头痛，体温37.8℃，现在定点医疗机构隔离治疗。", "1月29日确诊：男，40岁，现住瑞安市，无武汉外出史或旅游史，与确诊病例有接触史，1月22日发病，体温37.3℃、咽痛、咳嗽咳痰、头痛、肌肉酸痛，现在定点医疗机构隔离治疗。", "1月29日确诊：女，56岁，现住瑞安市，无武汉外出史或旅游史，与确诊病例有接触史，1月20日发病，咳嗽咳痰、肌肉酸痛、气促，现在定点医疗机构隔离治疗。", "1月29日确诊：女，38岁，现住瑞安市，无武汉外出史或旅游史，与确诊病例有接触史，1月22日发病，自感发热、咳嗽咳痰、胃肠道不适，现在定点医疗机构隔离治疗。", "1月28日确诊：女，50岁，现住瑞安市，1月20日武汉返回温州，1月22日出现发热，体温38℃，无咳嗽等其他症状，现在瑞安市定点医疗机构隔离治疗。", "1月28日确诊：男，55岁，现住瑞安市，1月20日武汉返回温州，1月19日自觉乏力，无发热，现在瑞安市定点医疗机构隔离治疗。", "1月28日确诊：男，43岁，现住瑞安市，1月23日武汉返回温州，1月23日出现发热，现在温州市定点医疗机构隔离治疗。", "1月28日确诊：女，32岁，现住瑞安市，1月21日武汉返回温州，1月21日出现发热，无其他症状，现在瑞安市定点医疗机构隔离治疗。", "1月28日确诊：女，43岁，现住瑞安市，无武汉外出史或旅游史，患者于1月20日参加同学聚餐与武汉返乡人员有接触，1月23日出现发烧伴寒战，体温38℃，伴咳嗽症状，现在瑞安市定点医疗机构隔离治疗。", "1月28日确诊：女，30岁，现住瑞安市，无武汉居住及旅行史或旅行史，与武汉确诊病例有接触，1月24日患者在家中出现发热，伴咳嗽、咳痰、鼻塞等症状，现在瑞安市定点医疗机构隔离治疗。", "1月28日确诊：男，26岁，现住瑞安市，1月20日武汉返回温州，1月23日出现发热伴畏寒，体温38.2℃，伴咳嗽，现在瑞安市定点医疗机构隔离治疗。", "1月28日确诊：女，58岁，现住瑞安市，1月15日武汉返回温州，1月19日患者出现发热，体温37.7℃，伴干咳，现在瑞安市定点医疗机构隔离治疗。", "1月28日确诊：女、39岁，现住瑞安市，无武汉居住及旅行史或旅行史，与武汉确诊病例有接触，1月22日患者出现咳嗽咳痰症状，无发热，现在瑞安市定点医疗机构隔离治疗。", "1月28日确诊：女，49岁，现住瑞安市，1月22日武汉返回温州，1月23日发热，体温37.8℃，伴咳嗽，现在瑞安市定点医疗机构隔离治疗。", "1月28日确诊：男，60岁，现在瑞安市，1月11日武汉回温，1月23日出现发热，现在瑞安市定点医疗机构隔离治疗。", "1月27日确诊：男，27岁，现住瑞安市，12月25日前往武汉探亲兼旅游，1月18日回温，1月18日患者出现咳嗽、头晕症状，现在瑞安市定点医疗机构隔离治疗。", "1月27日确诊：男，65岁，现住瑞安市，1月9日从武汉回温，1月19日出现不适，体温38.9℃，伴咳嗽、咽痛、乏力、流涕等症状，现在瑞安市定点医疗机构隔离治疗。", "1月27日确诊：男，27岁，现住瑞安市，1月19日从武汉回温，1月23日出现不适，体温37.8℃，有乏力、咳嗽、咳痰、头痛，肌肉酸痛等症状，现在瑞安市定点医疗机构隔离治疗。", "1月27日确诊：女，34岁，现住瑞安市，1月15日从武汉回温，1月19日出现发热，体温37.7℃，伴干咳，无咽痛、乏力、流涕等症状，现在瑞安市定点医疗机构隔离治疗。", "1月27日确诊：男，58岁，现住瑞安市，1月20日从武汉回温，1月18日在武汉出现咽痛伴咳嗽、咳痰，无发热、肌肉酸痛、气促、呼吸困难等症状，现在温州市定点医疗机构隔离治疗。", "1月27日确诊：女，52岁，现住瑞安市，1月20日从武汉回温，1月20日患者自感畏寒不适，体温38.3℃，无咳嗽咳痰等症状，现在瑞安市定点医疗机构隔离治疗。", "1月27日确诊：男，28岁，现住瑞安市，1月20日从武汉回温，1月23日出现咳嗽、咳痰症状，无发热，现在温州市定点医疗机构隔离治疗。", "1月27日确诊：男，68岁，现住瑞安市，1月19日从武汉回温，1月17日患者在武汉出现咳嗽症状，体温38.8℃，伴乏力、鼻塞、流涕、寒战、咽痛、头痛、肌肉酸痛等症状，现在瑞安市定点医疗机构隔离治疗。", "1月27日确诊：女，57岁，现住瑞安市，1月19日从武汉回温，1月19出现咳嗽症状，无发热、流涕、寒战等症状，现在瑞安市定点医疗机构隔离治疗。", "1月27日确诊：女，63岁，现住瑞安市，1月18日从武汉回温，1月19日出现干咳、乏力、胸闷等症状，无发热，现在瑞安市定点医疗机构隔离治疗。"]
				},
				"乐清市": {
					bl: [{
						label: "确诊病例",
						value: 170,
						color: "#f67a32"
					}, {
						label: "重症病例",
						value: 4,
						color: "rgb(255,79,85)"
					}, {
						label: "出院病例",
						value: 106,
						color: "rgb(9,252,255)"
					}, {
						label: "死亡病例",
						value: 0,
						color: "rgb(255,246,11)"
					}],
					xq: ["2月15日确诊：男，59岁，现住乐清市，2月11日出现发热、胸闷症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月15日确诊：女，61岁，现住乐清市，2月6日出现发热、咳嗽症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月14日确诊：女，37岁，现住乐清市，有确诊病例接触史，2月7日出现发热症状，现在定点医疗机构隔离治疗。", "2月13日确诊：女，44岁，现住乐清市，有确诊病人接触史， 2月4日出现发热症状，现在定点医疗机构隔离治疗。", "2月12日确诊：男，55岁，现住乐清市，2月7日出现咳嗽症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月12日确诊：女，72岁，现住乐清市，有确诊病例接触史，2月8日CT显示肺部感染，现在定点医疗机构隔离治疗。", "2月12日确诊：男，59岁，现住乐清市，有确诊病例接触史，1月29日出现发热症状，现在定点医疗机构隔离治疗。", "2月11日确诊：女，70岁，现住乐清市，隔离中的病例密切接触者，2月9日出现发热、咳嗽症状，现在定点医疗机构隔离治疗。", "2月11日确诊：女，74岁，现住乐清市，隔离中的病例密切接触者，2月9日出现发热症状，现在定点医疗机构隔离治疗。", "2月11日确诊：女，48岁，现住乐清市，有确诊病例接触史，1月23日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月11日确诊：男，53岁，现住乐清市，有确诊病例接触史，1月30日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月10日确诊：男，52岁，现住乐清市，有确诊病例接触史，2月7日出现发热症状，现在定点医疗机构隔离治疗。", "2月10日确诊：男，62岁，现住乐清市，有确诊病例接触史，2月8日出现咳嗽、咳痰症状，现在定点医疗机构隔离治疗。", "2月10日确诊：男，79岁，现住乐清市，有确诊病例接触史，1月28日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月10日确诊：女，51岁，现住乐清市，有确诊病例接触史，2月10日CT显示肺部感染，现在定点医疗机构隔离治疗。", "2月9日确诊：女，46岁，现住乐清市，有确诊病例接触史，2月6日CT显示肺部感染，现在定点医疗机构隔离治疗。", "2月9日确诊：男，76岁，现住乐清市，有确诊病例接触史，1月24日出现发热症状，现在定点医疗机构隔离治疗。", "2月9日确诊：女，78岁，现住乐清市，有湖北返乡人员接触史，2月8日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月9日确诊：女，79岁，现住乐清市，有确诊病例接触史，2月4日出现发热症状，现在定点医疗机构隔离治疗。", "2月8日确诊：男，45岁，现住乐清市，有确诊病例接触史，2月8日CT显示肺部感染，现在定点医疗机构隔离治疗。", "2月8日确诊：女，67岁，现住乐清市，有确诊病例接触史，2月8日出现发热、腹泻等症状，现在定点医疗机构隔离治疗。", "2月8日确诊：男，93岁，现住乐清市，2月8日出现咳嗽症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月8日确诊：男，58岁，现住乐清市，隔离医学观察人员，2月7日出现乏力、头晕等症状，现在定点医疗机构隔离治疗。", "2月8日确诊：男，52岁，现住乐清市，2月8日出现发热、胸痛等症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月8日确诊：男，32岁，现住乐清市，隔离中的病例密切接触者，2月6日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月7日确诊：男，51岁，现住乐清市，1月20日湖北回温，CT显示肺部感染，现在定点医疗机构隔离治疗。", "2月7日确诊：女，46岁，现住乐清市，有确诊病例接触史，2月5日出现发热症状，现在定点医疗机构隔离治疗。", "2月7日确诊：男，40岁，现住乐清市，有确诊病例接触史，1月24日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月7日确诊：女，37岁，现住乐清市，有确诊病例接触史，2月4日出现头痛症状，现在定点医疗机构隔离治疗。", "2月7日确诊：女，82岁，现住乐清市，有湖北返乡人员接触史，1月25日出现发热、咳嗽症状，现在定点医疗机构隔离治疗。", "2月7日确诊：女，52岁，现住乐清市，有确诊病例接触史，1月29日出现咽痛症状，现在定点医疗机构隔离治疗。", "2月7日确诊：女，73岁，现住乐清市，有确诊病例接触史，1月22日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月6日确诊：女，51岁，现住乐清市，2月2日出现发热症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月6日确诊：男，52岁，现住乐清市，1月26日出现发热、咳嗽症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月6日确诊：男，43岁，现住乐清市，1月27日出现发热症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月6日确诊：男，65岁，现住乐清市，有确诊病例接触史，2月1日出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。", "2月6日确诊：男，49岁，现住乐清市，有湖北回乡人员接触史，2月1日出现发热、咳嗽症状，现在定点医疗机构隔离治疗。", "2月6日确诊：男，44岁，现住乐清市，1月28日出现发热症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月6日确诊：男，47岁，现住乐清市，1月17日湖北回温， 1月23日出现咽痛、咳嗽症状，现在定点医疗机构隔离治疗。", "2月6日确诊：男，50岁，现住乐清市，1月16日湖北回温，1月27日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月6日确诊：女，56岁，现住乐清市，有确诊病例接触史，1月28日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月6日确诊：男，57岁，现住乐清市，2月2日出现发热症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月5日确诊：女，28岁，现住乐清市，有湖北回乡人员接触史，1月29日出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。", "2月5日确诊：女，51岁，现住乐清市，有湖北回乡人员接触史，1月24日出现咳痰症状，现在定点医疗机构隔离治疗。", "2月5日确诊：男，62岁，现住乐清市， 1月31日出现发热症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月5日确诊：女，54岁，现住乐清市，1月19日湖北回温，2月2日CT显示肺部感染，现在定点医疗机构隔离治疗。", "2月5日确诊：女，46岁，现住乐清市， 1月28日出现发热症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月5日确诊：女，49岁，现住乐清市，有湖北返乡人员接触史，1月31日出现发热、咳痰症状，现在定点医疗机构隔离治疗。", "2月5日确诊：女，56岁，现住乐清市， 1月28日出现发热症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月5日确诊：女，56岁，现住乐清市， 2月2日出现发热症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月5日确诊：男，49岁，现住乐清市，1月17日上海回温，1月30日出现发热、咳嗽、乏力症状，现在定点医疗机构隔离治疗。", "2月5日确诊：男，43岁，现住乐清市，1月18日广州回温，1月27日出现发热、咳嗽症状，现在定点医疗机构隔离治疗。", "2月5日确诊：男，44岁，现住乐清市，1月19日湖北回温，2月2日出现发热、咳嗽症状，现在定点医疗机构隔离治疗。", "2月5日确诊：男，31岁，现住乐清市，1月20日出现发热、咳嗽症状，1月21日湖北回温，现在定点医疗机构隔离治疗。", "2月4日确诊：男，47岁，现住乐清市，无武汉旅居史，有确诊病例接触史，1月15日出现发热、乏力等症状，现在定点医疗机构隔离治疗。", "2月4日确诊：男，57岁，现住乐清市，无武汉旅居史，与武汉返乡人员有接触史，1月25日出现发热、头晕等症状，现在定点医疗机构隔离治疗。", "2月4日确诊：男，43岁，现住乐清市，无武汉旅居史，有确诊病例接触史，1月29日出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。", "2月4日确诊：女，47岁，现住乐清市，1月22日武汉回温，有确诊病例接触史，2月1日出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。", "2月4日确诊：女，18岁，现住乐清市，无武汉旅居史，有确诊病例接触史，1月31日出现发热症状，现在定点医疗机构隔离治疗。", "2月4日确诊：男，41岁，现住乐清市，无武汉旅居史，有确诊病例接触史，1月30日出现发热、乏力等症状，现在定点医疗机构隔离治疗。", "2月4日确诊：女，27岁，现住乐清市，1月19日武汉回温，1月26日出现发热、乏力、咳嗽等症状，现在定点医疗机构隔离治疗。", "2月4日确诊：女，31岁，现住乐清市，无武汉旅居史，无确诊病例接触史，1月26日出现发热、咳嗽等症状，感染来源调查中,现在定点医疗机构隔离治疗。", "2月3日确诊：女，47岁，现住乐清市，无武汉旅居史，与确诊病人有接触史，1月29日出现呼吸气促等症状，现在定点医疗机构隔离治疗。", "2月3日确诊：男，75岁，现住乐清市，无武汉旅居史，与确诊病人有接触史，1月29日出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。", "2月3日确诊：男，54岁，现住乐清市，无武汉旅居史，与武汉返乡人员有接触史，1月31日出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。", "2月3日确诊：女，32岁，现住乐清市，无武汉旅居史，1月30日出现发热、咳嗽等症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月3日确诊：男，54岁，现住乐清市，无武汉旅居史，1月28日出现发热、咳嗽、乏力等症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月3日确诊：女，41岁，现住乐清市，1月17日北京回温，1月26日出现发热、咳嗽、乏力等症状，现在定点医疗机构隔离治疗。", "2月3日确诊：女，46岁，现住乐清市，无武汉旅居史，与武汉返乡人员有接触史，1月31日出现发热、畏寒等症状，现在定点医疗机构隔离治疗。", "2月3日确诊：男，52岁，现住乐清市，无武汉旅居史，与确诊病例有接触史，1月28日出现发热、咳嗽咳痰等症状，现在定点医疗机构隔离治疗。", "2月3日确诊：男，27岁，现住乐清市，无武汉旅居史，与武汉回乡人员有接触史，1月28日出现咳嗽、肌肉关节疼痛、发热等症状，现在定点医疗机构隔离治疗。", "2月3日确诊：女，52岁，现住乐清市，无武汉旅居史，与确诊病人有接触史，1月28日出现发热症状，现在定点医疗机构隔离治疗。", "2月3日确诊：女，28岁，现住乐清市，无武汉旅居史，1月26日出现发热症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月3日确诊：女，65岁，现住乐清市，无武汉旅居史，与确诊病人有接触史，1月31日出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。", "2月3日确诊：男，43岁，现住乐清市，无武汉旅居史，与确诊病人有接触史，1月31日出现发热症状，现在定点医疗机构隔离治疗。", "2月3日确诊：男，22岁，现住乐清市，1月17日从武汉返回乐清，1月22日开始出现发热症状，现在定点医疗机构隔离治疗。", "2月3日确诊：男，27岁，现住乐清市，无武汉旅居史，与武汉返乡人员有接触史，1月28日出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。", "2月3日确诊：男，48岁，现住乐清市，无武汉旅居史，与武汉返乡人员有接触史，1月26日出现发热症状，现在定点医疗机构隔离治疗。", "2月3日确诊：男，53岁，现住乐清市，1月22日武汉回温，有确诊病例接触史，1月31日CT显示肺部感染，现在定点医疗机构隔离治疗。", "2月3日确诊：男，30岁，现住乐清市，无武汉旅居史，1月22日出现发热、乏力，感染来源调查中，现在定点医疗机构隔离治疗。", "2月3日确诊：女，55岁，现住乐清市，无武汉旅居史，与疑似病人有接触史，1月31日出现发热、乏力等症状，现在定点医疗机构隔离治疗。", "2月3日确诊：男，57岁，现住乐清市，1月22日自武汉返回乐清，与确诊病人有接触史， 1月28日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月3日确诊：男，42岁，现住乐清市，1月20日自武汉返回乐清，1月31日出现发热、畏寒等症状，现在定点医疗机构隔离治疗。", "2月3日确诊：女，63岁，现住乐清市，无武汉旅居史，与确诊病人有接触史，1月28日出现发热症状，现在定点医疗机构隔离治疗。", "2月3日确诊：女，40岁，现住乐清市，无武汉旅居史，与确诊病人有接触史，1月26日出现发热症状，现在定点医疗机构隔离治疗。", "2月3日确诊：女，57岁，现住乐清市，无武汉旅居史，1月25日出现发热、咳嗽等症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月2日确诊：男，28岁，现住乐清市，无武汉旅居史，与武汉返乡人员有接触史，1月26日开始出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。", "2月2日确诊：男，56岁，现住乐清市，无武汉旅居史，1月22日与武汉返乡人员有接触史，1月26日开始出现发热、咳嗽症状，现在定点医疗机构隔离治疗。", "2月2日确诊：女，66岁，现住乐清市，无武汉旅居史，与武汉返乡人员有接触史，1月24日出现发热、畏寒、乏力、肌肉酸痛等症状，现在定点医疗机构隔离治疗。", "2月2日确诊：男，32岁，现住乐清市，1月20日武汉回温，无发热、咳嗽等症状，与确诊病例有接触史，现在定点医疗机构隔离治疗。", "2月2日确诊：女，62岁，现住乐清市，无武汉旅居史，与确诊病人有接触史，1月28日出现发热、乏力等症状，现在定点医疗机构隔离治疗。", "2月2日确诊：男，53岁，现住乐清市，无武汉旅居史，与武汉返乡人员有接触史，1月20日出现发热症状，现在定点医疗机构隔离治疗。", "2月2日确诊：男，50岁，现住乐清市，无武汉旅居史， 1月27日出现发热等症状，感染来源不明，有待进一步溯源，现在定点医疗机构隔离治疗。", "2月2日确诊：男，35岁，现住乐清市，无武汉旅居史，1月24日出现发热症状，感染来源不明，有待进一步溯源，现在定点医疗机构隔离治疗。", "2月2日确诊：女，56岁，现住乐清市，1月20日武汉回温，1月24日出现发热、干咳等症状，现在定点医疗机构隔离治疗。", "2月1日确诊：女，36岁，现住乐清市，1月21日武汉回温，1月29日出现咳嗽、发热、肌肉酸痛等症状，现在定点医疗机构隔离治疗。", "2月1日确诊：男，42岁，现住乐清市，无武汉旅居史，与武汉回温人员有接触史，1月28日出现发热症状，现在定点医疗机构隔离治疗。", "2月1日确诊：女，36岁，现住乐清市，1月21日武汉回温，1月29日出现咳嗽、发热等症状，现在定点医疗机构隔离治疗。", "2月1日确诊：女，52岁，现住乐清市，1月16日武汉回温，1月29日出现发热症状，现在定点医疗机构隔离治疗。", "2月1日确诊：男，53岁，现住乐清市，1月16日武汉回温，1月28日出现胸闷症状，现在定点医疗机构隔离治疗。", "2月1日确诊：男，76岁，现住乐清市，无武汉旅居史，1月21日出现咳嗽症状，1月26日出现发热症状，因大女儿家住台州椒江，1月29日前往台州就诊，感染来源不明，有待进一步溯源，现在台州定点医疗机构隔离治疗。", "1月30日确诊：女，63岁，现住乐清市，无武汉旅居史，与确诊病例有接触史，1月17日出现发热伴咳嗽、头晕、头痛等症状，现在定点医疗机构隔离治疗。", "1月30日确诊：女，35岁，现住乐清市，1月17日武汉返回温州乐清，1月25日出现发热、乏力、头痛等症状，现在定点医疗机构隔离治疗。", "1月30日确诊：女，46岁，现住乐清市，1月21日从武汉返回温州，1月24日开始出现发热、乏力等症状，现在定点医疗机构隔离治疗。", "1月30日确诊：男，47岁，现住乐清市，1月21日从武汉返回温州，1月20日开始出现发热、咳嗽咳痰、头痛等症状，现在定点医疗机构隔离治疗。", "1月30日确诊：男，58岁，现住乐清市，无武汉旅居史，与确诊病例有接触史，1月24日出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。", "1月30日确诊：男，29岁，现住乐清市，1月20日从武汉返回温州，1月24日开始出现发热、咽部不适、头痛等症状，现在定点医疗机构隔离治疗。", "1月30日确诊：女，52岁，现住乐清市，1月18日开始出现发热、乏力、头痛等症状，1月20日从武汉回温，现在定点医疗机构隔离治疗。", "1月30日确诊：女，50岁，现住乐清市，无武汉旅居史，与武汉回温人员有接触史，1月23日开始出现发热、乏力、咳嗽、头痛等症状，现在定点医疗机构隔离治疗。", "1月30日确诊：男，72岁，现住乐清市，无武汉旅居史，与武汉回温人员有接触史，1月17日开始出现发热、咳嗽、咳痰等症状，现在定点医疗机构隔离治疗。", "1月30日确诊：男，48岁，现住乐清市，1月22日从武汉回温，患者无发热、咳嗽等症状，自行前往医院体检，拍CT提示肺部感染，现在定点医疗机构隔离治疗。", "1月30日确诊：女，35岁，现住乐清市，无武汉旅居史，与武汉回温人员有接触史，无不适症状，1月25日自行前往医院体检，拍CT提示肺部感染，现在定点医疗机构隔离治疗。", "1月30日确诊：男，49岁，现住乐清市，1月21日开始出现低热、乏力、咽痛，有咳嗽少痰等症状，1月22日从武汉返回温州，1月25日咳嗽症状加重，现在定点医疗机构隔离治疗。", "1月30日确诊：女，50岁，现住乐清市，1月24日开始出现发热、咽痛等症状，1月26日从武汉返回温州，现在定点医疗机构隔离治疗。", "1月30日确诊：男，52岁，现住乐清市，1月18日从武汉回温，1月22日开始出现咽痛、咳嗽少痰等症状，1月25日出现头痛乏力，畏寒发热，全身肌肉疼痛，现在定点医疗机构隔离治疗。", "1月30日确诊：男，54岁，现住乐清市，无武汉旅居史，与武汉返温人员有接触史，1月20日出现发热、乏力，伴咳嗽咳痰，现在定点医疗机构隔离治疗。", "1月30日确诊：男，37岁，现住乐清市，1月20日从武汉回温，1月21日出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。", "1月29日确诊：男，32岁，现住乐清市，1月21日武汉返回温州，1月17日出现发热、乏力、咽痛等症状，现在定点医疗机构隔离治疗。", "1月29日确诊：女，35岁，现住乐清市，1月20日武汉返回温州乐清，1月26日出现发热，体温37.6℃，现在定点医疗机构隔离治疗。", "1月29日确诊：女，50岁，现住乐清市，1月17日从武汉经宁波返回温州，1月25日出现发烧、乏力，咳嗽、头痛等症状，现在定点医疗机构隔离治疗。", "1月29日确诊：男，28岁，现住乐清市，无武汉旅行或居住史，与确诊病例有接触史，1月24日无明显诱因下出现咳嗽无痰的症状，现在定点医疗机构隔离治疗。", "1月29日确诊：男，55岁，现住乐清市，1月21日武汉返回温州，1月26日发病，现在定点医疗机构隔离治疗。", "1月29日确诊：女，36岁，现住乐清市，1月18日武汉返回温州，1月24日出现发热、乏力伴咳嗽咳痰等症状，现在定点医疗机构隔离治疗。", "1月29日确诊：男，50岁，现住乐清市，1月21日武汉返回温州，1月23日出现发热伴乏力、头痛等症状，现在定点医疗机构隔离治疗。", "1月29日确诊：女，74岁，现住乐清市，无武汉旅行或居住史，与确诊病例有接触史，1月6出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。", "1月29日确诊：男，68岁，现住乐清市，无武汉外出史或旅游史，与武汉回来的亲戚有接触史，1月26日发病，现在定点医疗机构隔离治疗。", "1月29日确诊：男，56岁，现住乐清市，无武汉外出史或旅游史，与武汉回来的亲戚有接触史，1月26日自感头痛，现在定点医疗机构隔离治疗。", "1月29日确诊：男，44岁，现住乐清市，1月22日武汉返回温州，1月20日自感咽痛，有咳嗽少痰，1月25日出现发热，体温38.9℃，现在定点医疗机构隔离治疗。", "1月29日确诊：女，46岁，现住乐清市，1月22日武汉返回温州，1月23日发热，体温38.3℃，现在定点医疗机构隔离治疗。", "1月29日确诊：男，28岁，现住乐清市，1月20日武汉返回温州，1月24日出现发热、咳嗽咳痰、头痛等症状，现在定点医疗机构隔离治疗。", "1月29日确诊：女，73岁，现住乐清市，无武汉旅行或居住史，但与武汉返温人员有接触史，1月25日患者出现畏寒发热，咳嗽咳痰等症状，现在定点医疗机构隔离治疗。", "1月29日确诊：男，34岁，现住乐清市，1月19日武汉返回温州，与确诊病例有接触史，1月23日出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。", "1月29日确诊：男，50岁，现住乐清市，1月18日武汉返回温州，1月23日患者出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。", "1月29日确诊：男，47岁，现住乐清市，无武汉旅行或居住史，但与武汉返温人员有接触，1月21日出现发热症状，体温38.1℃，现在定点医疗机构隔离治疗。", "1月29日确诊：女，33岁，现住乐清市，1月19日武汉返回温州，1月19日出现发热、干咳，现在定点医疗机构隔离治疗。", "1月29日确诊：女，55岁，现住乐清市，1月16日武汉返回温州，1月21日出现咳嗽咳痰等症状，现在定点医疗机构隔离治疗。", "1月29日确诊：男，56岁，现住乐清市，1月14日从武汉经杭州回温州，1月19日出现乏力、纳差等症状，现在定点医疗机构隔离治疗。", "1月29日确诊：女，56岁，现住乐清市，无武汉旅行或居住史，与确诊病例有接触史，1月13日自觉寒冷不适，1月22日出出现有咳嗽咳痰，现在定点医疗机构隔离治疗。", "1月29日确诊：男，41岁，现住乐清市，1月20日武汉返回温州，1月21日出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。", "1月29日确诊：女，37岁，现住乐清市，无武汉旅行或居住史，与确诊病例有接触史，1月23日出现发热、咳嗽咳痰等症状，现在定点医疗机构隔离治疗。", "1月29日确诊：女，54岁，现住乐清市，1月16日武汉返回温州乐清，1月24日出现发烧、咳嗽，少痰等症状，现在定点医疗机构隔离治疗。", "1月29日确诊：男，37岁，现住乐清市，1月18日武汉返回温州，无症状，1月24日陪同其配偶至医院就诊，为筛查拍胸部CT提示异常，现在定点医疗机构隔离治疗。", "1月29日确诊：男，30岁，现住乐清市，1月21日武汉返回温州，与确诊病例有接触史，1月21日出现腹泻症状，1月24日出现发热，现在定点医疗机构隔离治疗。", "1月29日确诊：男，58岁，现住乐清市，1月21日武汉返回温州，与确诊病例有接触史，1月17日已出现咳嗽症状，现在定点医疗机构隔离治疗。", "1月28日确诊：女，54岁，现住乐清市，发病前有武汉旅行史，1月13日返回温州，1月17日出现咳嗽，无发热，现在乐清市定点医疗机构隔离治疗。", "1月28日确诊：男，27岁，现住乐清市，1月21日武汉返回温州，1月21日出现发热、体温37.8℃，伴咳嗽等症状，现在乐清市定点医疗机构隔离治疗。", "1月28日确诊：女，53岁，现住乐清市，1月22日武汉返回温州，1月15日出现咳嗽、流涕，畏寒，现在乐清市定点医疗机构隔离治疗。", "1月28日确诊：女，61岁，现住乐清市，1月21日武汉返回温州，1月17日出现发热，体温39.3℃，肌肉酸痛，关节疼痛，现在乐清市定点医疗机构隔离治疗。", "1月28日确诊：男，56岁，现住乐清市，1月22日武汉返回温州，1月21日出现发热，体温38.2℃，伴咽痛，现在乐清市定点医疗机构隔离治疗。", "1月28日确诊：男，50岁，现住乐清市，1月21日武汉返回温州，1月17出现发热，体温38.3℃，伴乏力、肌肉关节疼痛，现在乐清市定点医疗机构隔离治疗。", "1月28日确诊：男，50岁，现住乐清市，无武汉外出史或旅游史，与确诊病例接触史，1月23日出现咳嗽、咽痛，现在乐清市定点医疗机构隔离治疗。", "1月28日确诊：男，49岁，现住乐清市，1月8日武汉返回温州，1月14日发烧伴畏寒，体温38.1℃，伴咳嗽，现在乐清市定点医疗机构隔离治疗。", "1月28日确诊：女，52岁，现住乐清市，武汉返回温州，1月20日出现发热，体温38.1℃，伴咳嗽，现在乐清市定点医疗机构隔离治疗。", "1月28日确诊：女，29岁，现住乐清市，1月20日武汉返回温州，1月20日出现发热，体温37.1℃，伴咳嗽，现在乐清市定点医疗机构隔离治疗。", "1月28日确诊：女，68岁，现住乐清市，无武汉旅行或居住史，与武汉回来的确诊病例有接触史，1月16日发热，乏力、咽痛、肌肉酸痛，伴咳嗽、咳痰等症状，现在乐清市定点医疗机构隔离治疗。", "1月28日确诊：男，53岁，现住乐清市，无武汉旅行或居住史，1月19日出现发热，体温37.5℃，伴乏力、咽痛、肌肉酸痛等症状，现在乐清市定点医疗机构隔离治疗。", "1月28日确诊：男，42岁，现住乐清市，1月18日武汉返回温州，1月24日出现发热乏力，现在乐清市定点医疗机构隔离治疗。", "1月28日确诊：男，80岁，现住乐清市，无武汉旅行或居住史，与来自武汉确诊病例有接触史，1月24日出现发热伴畏寒，体温38.1℃，现在乐清市定点医疗机构隔离治疗。", "1月28日确诊：女，40岁，现住乐清市，1月22日武汉回温，1月16出现发热，体温38.7℃、咳嗽、咳痰，无畏寒寒颤，现在乐清市定点医疗机构隔离治疗。", "1月28日确诊：女，56岁，现住乐清市，1月21日武汉回温， 1月22日出现咳嗽，咳痰，现在乐清市定点医疗机构隔离治疗。", "1月27日确诊：女，46岁，现住乐清市，1月8日从武汉回温，1月12日自觉发烧、畏寒，现在乐清市定点医疗机构隔离治疗。", "1月27日确诊：男，35岁，现住乐清市，1月21日从武汉回温，无不适症状，1月21日收到同事被隔离住院消息，回温查体CT显示肺部感染，现在乐清市定点医疗机构隔离治疗。", "1月27日确诊：男，30岁，现住乐清市，1月17日从武汉回温，1月21日出现头痛、乏力、咳嗽等症状，体温39.4℃，现在乐清市定点医疗机构隔离治疗。", "1月27日确诊：男，56岁，现住乐清市，1月15日从武汉回温，1月14日患者在武汉家中自觉发烧、畏寒，现在乐清市定点医疗机构隔离治疗。", "1月27日确诊：男，46岁，现住乐清市，1月15日从武汉回温，1月13日在武汉出现阵发性咳嗽、咳痰，现在乐清市定点医疗机构隔离治疗。"]
				},
				"龙港市": {
					bl: [{
						label: "确诊病例",
						value: 9,
						color: "#f67a32"
					}, {
						label: "重症病例",
						value: 1,
						color: "rgb(255,79,85)"
					}, {
						label: "出院病例",
						value: 6,
						color: "rgb(9,252,255)"
					}, {
						label: "死亡病例",
						value: 0,
						color: "rgb(255,246,11)"
					}],
					xq: ["2月16日确诊：男，39岁，现住龙港市，1月21日湖北回温，2月12日出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。", "1月30日确诊：男，41岁，现住龙港市，1月25日从武汉回温，1月22日出现畏寒、喉咙疼痛、腹泻，现在定点医疗机构隔离治疗。", "1月30日确诊：男，23岁，现住龙港市，1月20日从武汉回温，1月27日出现流涕、发热，现在定点医疗机构隔离治疗。", "1月30日确诊：男，13岁，现住龙港市，1月20日从武汉回温，1月27日出现流涕，现在定点医疗机构隔离治疗。", "1月30日确诊：女，39岁，现住龙港市，1月20日从武汉回温，1月29日出现发热，现在定点医疗机构隔离治疗。", "1月29日确诊：女，39岁，现住龙港市，1月20日武汉返回温州,1月25日出现发热，咽痛，体温37.5℃，现在定点医疗机构隔离治疗。", "1月28日确诊：男，44岁，现住龙港市，1月23日武汉返回温州，1月17日出现发热，体温38.3℃，伴咳嗽、咳痰，现在苍南县定点医疗机构隔离治疗。", "1月28日确诊：男，46岁，现住龙港市，1月21日武汉回温，1月22日出现发热，体温38℃，咳嗽，现在温州市定点医疗机构隔离治疗。", "1月28日确诊：女，47岁，现住龙港市，1月21日武汉回温，1月21日出现咳嗽，无发热，现在温州市定点医疗机构隔离治疗。"]
				},
				"永嘉县": {
					bl: [{
						label: "确诊病例",
						value: 52,
						color: "#f67a32"
					}, {
						label: "重症病例",
						value: 1,
						color: "rgb(255,79,85)"
					}, {
						label: "出院病例",
						value: 25,
						color: "rgb(9,252,255)"
					}, {
						label: "死亡病例",
						value: 1,
						color: "rgb(255,246,11)"
					}],
					xq: ["2月12日确诊：女，52岁，现住永嘉县，1月20日湖北回温，1月26日CT显示肺部感染，现在定点医疗机构隔离治疗。", "2月12日确诊：男，87岁，现住永嘉县，有确诊病例接触史，2月2日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月10日确诊：女，61岁，现住永嘉县，有确诊病例接触史，2月4日出现发热症状，现在定点医疗机构隔离治疗。", "2月10日确诊：男，64岁，现住永嘉县，有确诊病例接触史， 2月1日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月10日确诊：男，32岁，现住永嘉县，有确诊病例接触史，1月25日出现发热、咳嗽症状，现在定点医疗机构隔离治疗。", "2月10日确诊：男，72岁，现住永嘉县，有确诊病例接触史，2月5日出现咽痛症状，现在定点医疗机构隔离治疗。", "2月9日确诊：女，51岁，现住永嘉县，有确诊病例接触史，2月8日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月9日确诊：男，61岁，现住永嘉县，2月6日出现发热症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月8日确诊：男，57岁，现住永嘉县，1月20日湖北回温，1月25日出现发热症状，现在定点医疗机构隔离治疗。", "2月7日确诊：女，27岁，现住永嘉县，1月17日湖北回温，2月7日CT显示肺部感染，现在定点医疗机构隔离治疗。", "2月6日确诊：女，80岁，现住永嘉县，有湖北返乡人员接触史，1月28日出现发热症状，现在定点医疗机构隔离治疗。", "2月5日确诊：男，50岁，现住永嘉县，有确诊病例接触史，2月4日出现发热症状，现在定点医疗机构隔离治疗。", "2月5日确诊：男，20岁，现住永嘉县，有确诊病例接触史，2月1日出现腹泻症状，现在定点医疗机构隔离治疗。", "2月5日确诊：女，60岁，现住永嘉县，有确诊病例接触史，1月26日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月5日确诊：男，48岁，现住永嘉县，有确诊病例接触史，2月3日出现发热、头晕症状，现在定点医疗机构隔离治疗。", "2月4日确诊：男，48岁，现住永嘉县，有温州银泰世贸店购物史，1月23日出现发热症状，现在定点医疗机构隔离治疗。", "2月4日确诊：男，42岁，现住永嘉县，无武汉旅居史，有确诊病例接触史，1月31日出现发热、腹泻等症状，现在定点医疗机构隔离治疗。", "2月4日确诊：男，52岁，现住永嘉县，无武汉旅居史，有确诊病例接触史，1月26日出现发热、咳嗽症状，现在定点医疗机构隔离治疗。", "2月4日确诊：男，34岁，现住永嘉县，无武汉旅居史，1月24日湖南回温，1月26日出现发热症状，现在定点医疗机构隔离治疗。", "2月4日确诊：男，31岁，现住永嘉县，无武汉旅居史，有确诊病例接触史，1月25日出现发热症状，现在定点医疗机构隔离治疗。", "2月3日确诊：女，39岁，现住永嘉县，无武汉旅居史，有确诊病例接触史，1月31日出现发热等症状，现在定点医疗机构隔离治疗。", "2月3日确诊：女，40岁，现住永嘉县，1月7日广州回温，与确诊病例有接触史，1月22日出现咳嗽、咽痛症状，现在定点医疗机构隔离治疗。", "2月3日确诊：男，42岁，现住永嘉县，无武汉旅居史，有确诊病例接触史，1月29日出现发热症状，现在定点医疗机构隔离治疗。", "2月2日确诊：女，53岁，现住永嘉县，无武汉旅居史，为确诊病例的妻子，无症状，主动要求筛查，2月1日去医疗机构检查，现在定点医疗机构隔离治疗。", "2月2日确诊：男，48岁，现住永嘉县，无武汉旅居史，与确诊病例有接触史，1月26日出现咳嗽、发热症状，现在定点医疗机构隔离治疗。", "2月2日确诊：女，56岁，现住永嘉县，无武汉旅居史，为确诊病例的妻子，无症状，主动要求筛查，2月1日去医疗机构检查，现在定点医疗机构隔离治疗。", "2月2日确诊：男，47岁，现住永嘉县，无武汉旅居史，与确诊病例有接触史，1月26日出现发热等症状，现在定点医疗机构隔离治疗。", "2月1日确诊：男，53岁，现住永嘉县，无武汉旅居史，与确诊病例有接触史，1月26日出现发热、肌肉酸痛、乏力等症状，现在定点医疗机构隔离治疗。", "2月1日确诊：男，52岁，现住永嘉县，无武汉旅居史，与确诊病例有接触史，1月26日出现发热等症状，现在定点医疗机构隔离治疗。", "1月31日确诊：女，32岁，现住永嘉县，无武汉旅居史，1月19日贵州回温，1月20日在温州银泰世贸店购物，1月26日出现发热、咽痛等症状，现在定点医疗机构隔离治疗。", "1月30日确诊：男，51岁，现住永嘉县，2019年12月29日从广州返回温州，1月25日出现咳嗽、咳痰、畏寒、发热，现在定点医疗机构隔离治疗。", "1月30日确诊：男，48岁，现住永嘉县，1月17日从云南返回温州，武汉机场转机，1月21日出现发烧、畏冷、肌肉酸痛、腹泻，现在定点医疗机构隔离治疗。", "1月30日确诊：男，44岁，现住永嘉县，1月21日武汉回温，1月27日出现发热，现在定点医疗机构隔离治疗。", "1月30日确诊：男，27岁，现住永嘉县，1月17日武汉回温，1月28日出现身体不适，现在定点医疗机构隔离治疗。", "1月30日确诊：男，47岁，现住永嘉县，无武汉旅居史，与确诊病例有接触史，1月24日发热，现在定点医疗机构隔离治疗。", "1月30日确诊：男，55岁，现住永嘉县，1月3日从广州回温，无武汉旅居史，与武汉人员有接触史，1月24日出现发热、咳嗽症状，现在定点医疗机构隔离治疗。", "1月30日确诊：女，22岁，现住永嘉县，无武汉旅居史，为温州银泰世茂店售货员， 1月27日出现阵发性咳嗽，现在定点医疗机构隔离治疗。", "1月30日确诊：女，62岁，现住永嘉县，无武汉外出史或旅游史，与确诊病例有接触史，1月25日晚患者出现发热、咽痛，现在定点医疗机构隔离治疗。", "1月29日确诊：男，30岁，现住永嘉县，1月20日武汉回温，1月22日出现发热、咳嗽，现在定点医疗机构隔离治疗。", "1月29日确诊：女，47岁，现住永嘉县，1月22日武汉回温，1月24日出现发热、畏寒、偶有咳嗽，现在定点医疗机构隔离治疗。", "1月28日确诊：女，47岁，现住永嘉县，1月21日武汉返回温州，1月19日出现发热，体温37.7℃，现在永嘉县定点医疗机构隔离治疗。", "1月28日确诊：女，78岁，现住永嘉县，1月20日武汉返回温州，1月19日出现发热，体温体温37.7℃，现在永嘉县定点医疗机构隔离治疗。", "1月28日确诊：男，41岁，现住永嘉县，1月20日武汉回温，1月21日出现乏力，畏寒，低热，伴头重，咳嗽，咳痰，现在温州市定点医疗机构隔离治疗。", "1月28日确诊：女，26岁，现住永嘉县，1月22日武汉回温，1月19日出现发热，寒战，伴有咽痛和肌肉酸痛,现在永嘉县定点医疗机构隔离治疗。", "1月28日确诊：男，55岁，现住永嘉县，1月18日武汉回温，1月23日出现发热、体温38.3℃，无畏寒、寒战，无咳嗽、咳痰，现在永嘉县定点医疗机构隔离治疗。", "1月27日确诊：男，55岁，现住永嘉县，1月17日从武汉回温，1月14日患者在武汉出现发热、干咳等症状，现在温州市定点医疗机构隔离治疗。", "1月27日确诊：女，57岁，现住永嘉县，1月17日从兰州回温，1月19日出现全身肌肉酸痛、乏力、流涕，体温37.9℃，现在温州市定点医疗机构隔离治疗。", "1月27日确诊：男，46岁，现住永嘉县，1月18日从武汉回温，1月22日出现发热、咽痛，体温为38.8℃，无咳嗽咳痰等症状，现在温州市定点医疗机构隔离治疗。"]
				},
				"平阳县": {
					bl: [{
						label: "确诊病例",
						value: 30,
						color: "#f67a32"
					}, {
						label: "重症病例",
						value: 0,
						color: "rgb(255,79,85)"
					}, {
						label: "出院病例",
						value: 20,
						color: "rgb(9,252,255)"
					}, {
						label: "死亡病例",
						value: 0,
						color: "rgb(255,246,11)"
					}],
					xq: ["2月6日确诊：女，49岁，现住平阳县，1月16日出现发热症状，感染来源调查中，现在定点医疗机构隔离治疗。", "2月6日确诊：女，29岁，现住平阳县，有确诊病例接触史，1月29日出现发热、咳嗽症状，现在定点医疗机构隔离治疗。", "2月5日确诊：男，65岁，现住平阳县，有确诊病例接触史，2月3日出现发热症状，现在定点医疗机构隔离治疗。", "2月5日确诊：女，35岁，现住平阳县，1月20日湖北回温，1月25日出现发热，2月1日出现胸闷、咳嗽症状，现在定点医疗机构隔离治疗。", "2月4日确诊：女，44岁，现住平阳县，1月18日武汉回温，1月19日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月4日确诊：男，68岁，现住平阳县，1月16日深圳回温，与武汉返乡人员有接触史，无症状， CT显示有肺部感染，现在定点医疗机构隔离治疗。", "2月3日确诊：男，56岁，现住平阳县，1月15日出现咳嗽症状，1月22日武汉回温，1月30日咳嗽加重，现在定点医疗机构隔离治疗。", "2月3日确诊：女，37岁，现住平阳县，1月12日武汉回温， 1月21日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月3日确诊：女，37岁，现住平阳县，1月13日武汉回温，1月20日出现发热、咽痛等症状，现在定点医疗机构隔离治疗。", "2月3日确诊：女，64岁，现住平阳县，1月16日深圳回温，1月31日出现发热等症状，现在定点医疗机构隔离治疗。", "2月3日确诊：女，38岁，现住平阳县，无武汉旅居史，有确诊病例接触史，2月2日出现发热等症状，现在定点医疗机构隔离治疗。", "2月2日确诊：女，65岁，现住平阳县，无武汉旅居史，与确诊病例有接触史，1月24日出现发热症状，现在定点医疗机构隔离治疗。", "2月2日确诊：女，47岁，现住平阳县，无武汉旅居史，与确诊病例有接触史，1月29日出现发热症状，现在定点医疗机构隔离治疗。", "2月1日确诊：女，62岁，现住平阳县，无武汉旅居史，与确诊病例有接触史，1月29日出现发热、头晕症状，现在定点医疗机构隔离治疗。", "2月1日确诊：女，34岁，现住平阳县，1月19日昆明回温，1月22日出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。", "2月1日确诊：男，42岁，现住平阳县，1月23日武汉回温，1月29日出现发热症状，现在定点医疗机构隔离治疗。", "2月1日确诊：女，40岁，现住平阳县，1月18日武汉回温，1月29日出现咳痰症状，现在定点医疗机构隔离治疗。", "1月31日确诊：女，44岁，现住平阳县，无武汉旅居史，1月16日舟山回温，与确诊病例有接触史，1月25日出现咳嗽、发热、乏力等症状，现在定点医疗机构隔离治疗。", "1月31日确诊：女，58岁，现住平阳县，1月23日武汉回温，1月26日出现咽部不适、发热等症状，现在定点医疗机构隔离治疗。", "1月30日确诊：女，33岁，现住平阳县，1月17日湖北黄石返回温州，1月20日晚出现咽痛、鼻塞、发热，现在定点医疗机构隔离治疗。", "1月30日确诊：男，59岁，现住平阳县，1月20日武汉回温，1月25日出现发热，现在定点医疗机构隔离治疗。", "1月30日确诊：女，35岁，现住平阳县，1月21日台州回温，在动车上出现咽部不适，现在定点医疗机构隔离治疗。", "1月29日确诊：男，41岁，现住平阳县，1月18日武汉回温，1月26日出现发热、咳嗽，现在定点医疗机构隔离治疗。", "1月29日确诊：男，49岁，现住平阳县，患者常住外地(否认武汉)，最近辗转贵州、北京、杭州，1月23日杭州返回温州，1月23日开始陆续出现咳嗽、发热，体温38.2℃，现在定点医疗机构隔离治疗。", "1月29日确诊：男，51岁，现住平阳县，1月17日武汉返回温州，1月22日出现乏力，体温37.5℃，现在定点医疗机构隔离治疗。", "1月27日确诊：男，64岁，现住平阳县，1月19日从武汉回温，1月20日出现咳嗽，无发热、畏寒等症状，现在平阳县定点医疗机构隔离治疗。", "1月27日确诊：女，47岁，现住平阳县，1月20日从武汉回温，1月16日患者自感发热，体温38.5℃，伴咳嗽咳痰，自行服药，现在平阳县定点医疗机构隔离治疗。", "确诊时间不明：男，41岁，现住平阳县，1月15日武汉回温，1月29日出现发热、头痛等症状，现在定点医疗机构隔离治疗。"]
				},
				"苍南县": {
					bl: [{
						label: "确诊病例",
						value: 9,
						color: "#f67a32"
					}, {
						label: "重症病例",
						value: 0,
						color: "rgb(255,79,85)"
					}, {
						label: "出院病例",
						value: 5,
						color: "rgb(9,252,255)"
					}, {
						label: "死亡病例",
						value: 0,
						color: "rgb(255,246,11)"
					}],
					xq: ["2月4日确诊：男，37岁，现住苍南县，无武汉旅居史，无确诊病例接触史，1月28日出现咳嗽症状，感染来源调查中,现在定点医疗机构隔离治疗。", "2月4日确诊：男，57岁，现住苍南县，有确诊病例接触史，1月29日出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。", "1月30日确诊：女，40岁，现住苍南县，1月23日从武汉回温，1月27日出现畏寒、肌肉酸痛，发热，现在定点医疗机构隔离治疗。", "1月30日确诊：男，43岁，现住苍南县，1月23日从武汉回温，1月27日出现发热、咳嗽，现在定点医疗机构隔离治疗。", "1月29日确诊：男，23岁，现住苍南县，1月21日武汉返回温州，1月25日出现发热、喉咙痒、头痛和乏力，现在定点医疗机构隔离治疗。", "1月29日确诊：女，45岁，现住苍南县，1月21日武汉返回温州，1月15日出现少许咳嗽、咳痰、鼻塞，现在定点医疗机构隔离治疗。", "1月29日确诊：女，40岁，现住苍南县，与确诊病例有接触史，1月22日出现干咳，现在定点医疗机构隔离治疗。", "1月29日确诊：女，44岁，现住苍南县，1月21日武汉返回温州，1月25日出现低热，头疼，现在定点医疗机构隔离治疗。"]
				},
				"文成县": {
					bl: [{
						label: "确诊病例",
						value: 11,
						color: "#f67a32"
					}, {
						label: "重症病例",
						value: 0,
						color: "rgb(255,79,85)"
					}, {
						label: "出院病例",
						value: 2,
						color: "rgb(9,252,255)"
					}, {
						label: "死亡病例",
						value: 0,
						color: "rgb(255,246,11)"
					}],
					xq: ["2月17日确诊：男，18岁，现住文成县，隔离中的病例密切接触者，2月14日出现发热、咳嗽等症状，现在定点医疗机构隔离治疗。", "2月7日确诊：女，25岁，现住文成县，有确诊病例接触史，无症状，现在定点医疗机构隔离治疗。", "2月6日确诊：女，49岁，现住文成县，有确诊病例接触史，2月3日出现发热、咳痰等症状，现在定点医疗机构隔离治疗。", "2月5日确诊：女，38岁，现住文成县，有确诊病例接触史，2月3日出现发热症状，现在定点医疗机构隔离治疗。", "2月3日确诊：男，77岁，现住文成县，无武汉旅居史，有确诊病例接触史，2月1日出现发热症状，现在定点医疗机构隔离治疗。", "2月3日确诊：女，68岁，现住文成县，无武汉旅居史，有确诊病例接触史，2月2日出现咳嗽、咳痰症状，现在定点医疗机构隔离治疗。", "2月3日确诊：男，40岁，现住文成县，无武汉旅居史，有确诊病例接触史，2月1日出现干咳症状，现在定点医疗机构隔离治疗。", "2月3日确诊：女，10岁，现住文成县，无武汉旅居史，有确诊病例接触史，1月29日出现发热症状，现在定点医疗机构隔离治疗。", "2月2日确诊：女，46岁，现住文成县，1月22日西安回温， 1月29日出现发热、干咳、头痛等症状，现在定点医疗机构隔离治疗。", "1月31日确诊：女，37岁，现住文成县，1月22号武汉回温，与确诊病例有接触史，1月27日出现咽部不适，无发热症状，现在定点医疗机构隔离治疗。"]
				},
				"泰顺县": {
					bl: [{
						label: "确诊病例",
						value: 20,
						color: "#f67a32"
					}, {
						label: "重症病例",
						value: 0,
						color: "rgb(255,79,85)"
					}, {
						label: "出院病例",
						value: 5,
						color: "rgb(9,252,255)"
					}, {
						label: "死亡病例",
						value: 0,
						color: "rgb(255,246,11)"
					}],
					xq: ["2月13日确诊：男，40岁，现住泰顺县，有确诊病例接触史，2月11日出现发热症状，现在定点医疗机构隔离治疗。", "2月12日确诊：男，62岁，现住泰顺县，有确诊病例接触史，2月2日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月11日确诊：女，53岁，现住泰顺县，有确诊病例接触史，2月9日出现头痛症状，现在定点医疗机构隔离治疗。", "2月10日确诊：男，52岁，现住泰顺县，有确诊病例接触史，2月8日出现发热、咳嗽症状，现在定点医疗机构隔离治疗。", "2月9日确诊：男，28岁，现住泰顺县，有确诊病例接触史，2月4日出现发热、咳嗽症状，现在定点医疗机构隔离治疗。", "2月9日确诊：男，46岁，现住泰顺县，有确诊病例接触史，2月5日出现发热、咳嗽症状，现在定点医疗机构隔离治疗。", "2月9日确诊：男，75岁，现住泰顺县，有确诊病例接触史，2月5日出现发热、腹泻症状，现在定点医疗机构隔离治疗。", "2月9日确诊：男，64岁，现住泰顺县，有确诊病例接触史，2月7日出现发热症状，现在定点医疗机构隔离治疗。", "2月9日确诊：女，50岁，现住泰顺县，有确诊病例接触史，2月7日出现发热症状，现在定点医疗机构隔离治疗。", "2月9日确诊：男，25岁，现住泰顺县，有确诊病例接触史，2月1日出现咳嗽、腹泻症状，现在定点医疗机构隔离治疗。", "2月7日确诊：女，28岁，现住泰顺县，有确诊病例接触史，2月4日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月7日确诊：男，56岁，现住泰顺县，有确诊病例接触史，1月22日出现咳嗽症状，现在定点医疗机构隔离治疗。", "2月7日确诊：男，29岁，现住泰顺县，有湖北返乡人员接触史，2月2日出现咳痰症状，现在定点医疗机构隔离治疗。", "2月5日确诊：女，54岁，现住泰顺县，1月19日杭州回温，2月1日出现咳嗽、咽痛等症状，现在定点医疗机构隔离治疗。", "2月3日确诊：女，57岁，现住泰顺县，1月14日诸暨回温， 有确诊病例接触史，1月28日出现发热、干咳等症状，现在定点医疗机构隔离治疗。", "2月3日确诊：女，47岁，现住泰顺县，1月21日武汉回温，1月25日出现发热等症状，现在定点医疗机构隔离治疗。", "1月31日确诊：男，12岁，现住泰顺县，无武汉旅居史，与确诊病例有接触史，1月29日出现发热、咽痛、乏力等症状，现在定点医疗机构隔离治疗。", "1月29日确诊：男，42岁，现在泰顺县，1月19日宁波回温，1月25日出现发热、咽痛、畏寒、鼻塞、肌肉酸痛、关节疼痛，现在定点医疗机构隔离治疗。", "1月28日确诊：男，48岁，现住泰顺县，1月20日武汉回温，1月21日出现发热、咳嗽和咽痛等症状。现在泰顺县定点医疗机构隔离治疗。", "1月27日确诊：男，44岁，现住泰顺县，1月18日从武汉回温，1月20日出现咽痛不适，体温37.7℃，无咳嗽咳痰等症状，现在泰顺县定点医疗机构隔离治疗。"]
				},
				"浙南集聚区": {
					bl: [{
						label: "确诊病例",
						value: 1,
						color: "#f67a32"
					}, {
						label: "重症病例",
						value: 0,
						color: "rgb(255,79,85)"
					}, {
						label: "出院病例",
						value: 1,
						color: "rgb(9,252,255)"
					}, {
						label: "死亡病例",
						value: 0,
						color: "rgb(255,246,11)"
					}],
					xq: ["2月2日确诊：男，21岁，现住浙南集聚区，无武汉旅居史，1月28日出现发热、咳嗽、头痛等症状，感染来源不明，有待进一步溯源，现在定点医疗机构隔离治疗。"]
				},
				"瓯江口集聚区": {
					bl: [{
						label: "确诊病例",
						value: 1,
						color: "#f67a32"
					}, {
						label: "重症病例",
						value: 0,
						color: "rgb(255,79,85)"
					}, {
						label: "出院病例",
						value: 0,
						color: "rgb(9,252,255)"
					}, {
						label: "死亡病例",
						value: 0,
						color: "rgb(255,246,11)"
					}],
					xq: ["1月28日确诊：男，32岁，现住瓯江口集聚区，1月21日武汉返回温州，1月21日出现发热，体温38.5℃，伴咳嗽，现在温州市定点医疗机构隔离治疗。"]
				}
			},
			wa = ga,
			Ca = {
				name: "sbDate",
				data: function() {
					return {
						bl: [],
						xq: [],
						title: "",
						context: wa,
						date: pa
					}
				},
				props: {},
				watch: {},
				created: function() {
					this.xqxx()
				},
				mounted: function() {},
				components: {},
				methods: {
					xqxx: function() {
						var e;
						for(e in this.context) this.$route.query.label == e && (this.bl = this.context[e].bl, this.xq = this.context[e].xq, this.title = e)
					},
					back: function() {
						this.$router.go(-1)
					}
				}
			},
			Aa = Ca,
			Sa = (a("157a"), Object(B["a"])(Aa, _a, ya, !1, null, "16c00fa8", null)),
			Ma = Sa.exports;
		n["a"].use(o["a"]);
		var xa = new o["a"]({
				mode: "hash",
				routes: [{
					path: "/",
					name: "Mobile",
					component: ba,
					meta: {
						index: 1
					}
				}, {
					path: "/MobileXq",
					name: "MobileXq",
					component: Ma,
					meta: {
						index: 2
					}
				}, {
					path: "/monitor",
					name: "monitor",
					component: la
				}]
			}),
			ka = (a("5df3"), a("4f7f"), a("75fc")),
			ja = (a("6762"), a("2fdb"), {
				"管理组": ["经济总图", "楼宇地图", "用地地图", "招商地图"],
				"经信局": ["经济总图", "楼宇地图", "用地地图", "招商地图"],
				"国土局": ["经济总图", "楼宇地图", "用地地图", "招商地图"],
				"招商局": ["经济总图", "楼宇地图", "用地地图", "招商地图"],
				"发改局": ["经济总图", "楼宇地图", "用地地图", "招商地图"],
				"街镇": ["经济总图", "楼宇地图", "用地地图", "招商地图"],
				"专班领导组": ["经济总图", "楼宇地图", "用地地图", "招商地图"],
				"专班成员组": ["经济总图", "楼宇地图", "用地地图", "招商地图"],
				"游客": ["招商地图"]
			}),
			Oa = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
					t = window.user,
					a = (t.au_username, t.group),
					i = a.map((function(e) {
						return e.au_groupname
					})),
					n = ja["游客"];
				for(var l in ja) i.includes(l) && (n = n.concat(ja[l]));
				var r = Object(ka["a"])(new Set(n));
				return i.includes("亩均论英雄") && (window.user.rland = !0), i.includes("企业经济信息") && (window.user.rquota = !0), e.filter((function(e) {
					return ~r.indexOf(e.label)
				}))
			},
			Da = {
				name: "app",
				data: function() {
					return {
						toptab: [{
							label: "宏观管控",
							route: "control"
						}, {
							label: "防疫布控",
							route: "macroscopic"
						}, {
							label: "疫情监控",
							route: "monitor"
						}],
						current: 1,
						time: " ",
						transitionName: "slide-right"
					}
				},
				watch: {
					$route: function(e, t) {
						e.name;
						var a = e.meta.index,
							i = t.meta.index;
						this.transitionName = a > i ? "slide-left" : "slide-right"
					}
				},
				mounted: function() {
					var e = this;
					setInterval((function() {
						e.getTime()
					}), 1e3)
				},
				methods: {
					shallLogin: function() {
						var e = this;
						return new Promise(function() {
							var t = Object(i["a"])(regeneratorRuntime.mark((function t(a, i) {
								return regeneratorRuntime.wrap((function(t) {
									while(1) switch(t.prev = t.next) {
										case 0:
											e.tabs = window.user.au_username ? Oa(e.toptab) : [], a(!0);
										case 2:
										case "end":
											return t.stop()
									}
								}), t)
							})));
							return function(e, a) {
								return t.apply(this, arguments)
							}
						}())
					},
					setLoation: function() {
						var e = this,
							t = this.$router.history.current.name;
						this.toptab.map((function(a, i) {
							a.route === t && (e.current = i)
						}))
					},
					selected: function(e) {
						this.current = e
					},
					doRegisterToken: function(e) {
						var t = this;
						t.$arcgisToken = e, loadModules(["esri/identity/IdentityManager"], h["d"]).then((function(t) {
							var a = Object(s["a"])(t, 1),
								i = a[0];
							i.registerToken({
								server: h["a"],
								token: e
							})
						}))
					},
					getTime: function() {
						var e = new Date,
							t = "-",
							a = ":",
							i = e.getFullYear(),
							n = e.getMonth() + 1,
							l = e.getDate(),
							r = e.getMinutes(),
							s = e.getHours(),
							o = e.getSeconds();
						n >= 1 && n <= 9 && (n = "0" + n), l >= 0 && l <= 9 && (l = "0" + l), s >= 0 && s <= 9 && (s = "0" + s), r >= 0 && r <= 9 && (r = "0" + r), o >= 0 && o <= 9 && (o = "0" + o);
						var c = i + t + n + t + l + " " + s + a + r + a + o;
						this.time = c
					}
				}
			},
			La = Da,
			Ta = (a("7c55"), Object(B["a"])(La, l, r, !1, null, null, null)),
			Na = Ta.exports,
			Ea = (a("386d"), {
				fetchQuerys: function() {
					var e = window.location.search.substring(1).split("&"),
						t = {};
					return e.map((function(e) {
						var a = e.split("=");
						2 == a.length && (t[a[0]] = a[1])
					})), t
				},
				getaccess: function() {
					var e = ajax({
						type: "GET",
						url: "https://api.weixin.qq.com/cgi-bin/token",
						data: {
							grant_type: "client_credential",
							appid: "wx95bb9730295e3285",
							secret: "4c578e4d8813cc60c9be43203fdb2350"
						},
						dataType: "json"
					});
					e && e.then((function(e) {
						console.log(e)
					}))
				},
				getGenerateToken: function(e, t, a) {
					var i = e({
						type: "POST",
						url: t,
						data: {
							username: "portaladmin",
							password: "wzkcy123",
							client: "requestip",
							ip: "",
							referer: "",
							expiration: 60,
							f: "json"
						},
						dataType: "json"
					});
					i && i.then((function(e) {
						e.code && 400 == e.code ? a(e.code) : a(e)
					}))
				},
				getCookie: function(e) {
					for(var t = "MaX9493sw5w=", a = e + t, i = document.cookie.replace(/\ /g, "").split(";"), n = 0; n < i.length; n++) {
						var l = i[n].split("=");
						if(a == unescape(l[0])) return unescape(decodeURI(l[1]))
					}
					return ""
				},
				clone: function(e) {
					return Ia(e)
				},
				compare: function(e) {
					return function(t, a) {
						var i = t[e],
							n = a[e];
						return n < i ? 1 : n > i ? -1 : 0
					}
				},
				setStorage: function(e, t) {
					var a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					window.localStorage.setItem(e, a ? JSON.stringify(t) : t)
				},
				getStorage: function(e) {
					var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
						a = window.localStorage.getItem(e);
					return t ? JSON.parse(a) : a
				},
				removeStorage: function(e) {
					window.localStorage.removeItem(e)
				}
			});

		function Ia(e) {
			if(!e || !(e instanceof Object) || "function" == typeof e) return e || void 0;
			var t = e.constructor,
				a = new t;
			for(var i in e) e.hasOwnProperty(i) && (a[i] = Ia(e[i]));
			return a
		}
		a("88b6"), a("a146"), a("7618");
		h["h"].serverCompatible, h["h"].login;
		n["a"].config.productionTip = !1, n["a"].prototype.$util = Ea, n["a"].prototype.$ajax = $.ajax, n["a"].prototype.$window = window, n["a"].prototype.$goRoute = function(e) {
			this.$router.push({
				name: e,
				params: {
					Jump: !1
				}
			})
		};
		var za = function() {
			var e = Object(i["a"])(regeneratorRuntime.mark((function e(t) {
				return regeneratorRuntime.wrap((function(e) {
					while(1) switch(e.prev = e.next) {
						case 0:
							t && t();
						case 1:
						case "end":
							return e.stop()
					}
				}), e)
			})));
			return function(t) {
				return e.apply(this, arguments)
			}
		}();
		za((function() {
			new n["a"]({
				router: xa,
				render: function(e) {
					return e(Na)
				}
			}).$mount("#app")
		}))
	},
	"5acd": function(e, t, a) {},
	"5c48": function(e, t, a) {},
	"5c87": function(e, t, a) {
		"use strict";
		var i = a("c726"),
			n = a.n(i);
		n.a
	},
	"6e8a": function(e, t, a) {},
	"703f": function(e, t, a) {
		"use strict";
		var i = a("1d4e"),
			n = a.n(i);
		n.a
	},
	7154: function(e, t, a) {},
	7422: function(e, t, a) {},
	"771a": function(e, t, a) {
		"use strict";
		var i = a("975d"),
			n = a.n(i);
		n.a
	},
	"79eb": function(e, t, a) {},
	"7c55": function(e, t, a) {
		"use strict";
		var i = a("5c48"),
			n = a.n(i);
		n.a
	},
	"7e32": function(e, t, a) {},
	"85ad": function(e, t, a) {},
	"88b6": function(e, t) {
		! function(e) {
			var t, a = '<svg><symbol id="iconmap" viewBox="0 0 1312 1024"><path d="M295.648 1021.664c0.288 0.192 0.672 0.096 0.96 0.288 2.336 1.184 4.768 2.048 7.392 2.048 1.408 0 2.816-0.192 4.224-0.576l347.776-94.912 347.776 94.912c1.408 0.384 2.816 0.576 4.224 0.576 2.624 0 5.056-0.864 7.36-2.08 0.32-0.16 0.672-0.096 0.96-0.288l288-176c6.112-3.744 8.992-11.136 7.04-18.016l-159.488-560c-1.312-4.704-4.736-8.544-9.28-10.432-4.544-1.824-9.632-1.536-13.952 0.832l-158.784 89.088c-7.68 4.32-10.432 14.08-6.112 21.792s14.048 10.464 21.824 6.112l141.088-79.2 150.624 528.832-256.48 156.768-60.928-487.392c-1.088-8.8-9.376-14.912-17.888-13.888-8.736 1.088-14.976 9.088-13.888 17.856l61.024 488.288-317.12-86.56 0-87.36c0-8.832-7.168-16-16-16s-16 7.168-16 16l0 87.36-317.152 86.56 61.024-488.288c1.088-8.768-5.12-16.768-13.888-17.856-8.704-1.024-16.768 5.088-17.888 13.888l-60.896 487.392-256.48-156.736 150.624-528.8 141.088 79.2c7.744 4.288 17.472 1.568 21.824-6.112 4.32-7.712 1.568-17.44-6.112-21.792l-158.816-89.12c-4.256-2.4-9.344-2.72-13.92-0.832s-7.968 5.696-9.28 10.432l-159.488 560c-1.984 6.912 0.896 14.272 7.04 18.016l287.968 176zM645.152 747.776c3.072 2.816 6.944 4.224 10.848 4.224 3.84 0 7.68-1.376 10.752-4.128 10.656-9.696 261.248-239.648 261.248-475.872 0-152.544-119.456-272-272-272s-272 119.456-272 272c0 232.128 250.496 465.92 261.152 475.776zM656 32c136.8 0 240 103.168 240 240 0 195.104-191.776 394.784-239.904 441.824-48.032-47.584-240.096-249.888-240.096-441.824 0-136.832 103.2-240 240-240zM800 272c0-79.392-64.608-144-144-144s-144 64.608-144 144 64.608 144 144 144 144-64.608 144-144zM656 384c-61.76 0-112-50.24-112-112s50.24-112 112-112 112 50.24 112 112-50.24 112-112 112z"  ></path></symbol><symbol id="icongeren2" viewBox="0 0 1024 1024"><path d="M936.896 785.792c9.28-14.336 17.664-29.056 25.472-44.224 1.856-3.648 3.52-7.36 5.312-11.072 5.952-12.288 11.392-24.832 16.32-37.632 1.984-5.184 3.904-10.368 5.76-15.616 4.096-11.904 7.68-23.936 10.944-36.16 1.536-5.888 3.2-11.712 4.544-17.6 2.816-12.608 4.992-25.472 6.848-38.464 0.832-5.568 1.92-11.008 2.56-16.64 2.048-18.56 3.328-37.312 3.328-56.32 0-278.976-227.008-505.984-505.984-505.984S6.016 233.024 6.016 512c0 19.072 1.28 37.824 3.328 56.32 0.64 5.632 1.728 11.072 2.56 16.704 1.92 12.928 4.032 25.728 6.848 38.336 1.344 6.016 3.008 11.84 4.544 17.664 3.264 12.224 6.848 24.32 10.944 36.16 1.792 5.248 3.712 10.432 5.696 15.616 4.928 12.8 10.432 25.344 16.32 37.632 1.792 3.712 3.456 7.424 5.312 11.072 7.744 15.168 16.192 29.888 25.408 44.096 0.32 0.576 0.64 1.152 1.024 1.664C178.432 926.016 334.592 1017.984 512 1017.984s333.632-92.032 423.936-230.656C936.256 786.816 936.576 786.304 936.896 785.792zM512 248.448c102.592 0 185.984 83.456 185.984 185.984 0 102.656-83.456 186.176-185.984 186.176S326.016 537.088 326.016 434.432C326.016 331.904 409.408 248.448 512 248.448zM204.416 828.8C257.216 708.096 377.152 627.264 512 627.264s254.784 80.896 307.648 201.472C739.968 906.112 631.552 953.984 512 953.984 392.448 953.984 284.032 906.112 204.416 828.8z"  ></path></symbol><symbol id="icon-" viewBox="0 0 1024 1024"><path d="M340.4 486.1l-2.4-1.2c-2.4 10.5 7.1 8.6 7.1 2.5-1.9 1.8-3.9 4.3-4.7-1.3zM596.2 246.1c0-7.6-6.4-14-14-14h-28.1c-8 0-14 6.4-14 14s6.1 14 14 14h28.1c7.5 0 14-6.4 14-14zM370.7 512.5c-0.8-2.2-2.6-3.9-5.9-4.9-2.4 8.1 1.8 7.6 5.2 7.4 0 0.2-0.1 0.3-0.1 0.4l7.5-1.5c-1.2-9.1-5-6.1-6.7-1.4zM360.4 484.9c-1.9 3.8-5.3 2.3-8.7 2.3 1.9 3 8.7 6 12.1 6 2.3 4.2 9.1 7.2 14.4 6.8 6.8-0.8-0.4-6.1-1.5-8.3-6.9 0-7.6-5.7-16.3-6.8zM613.6 325.3c10.2 0 12.9-5.7 15.5-13.7 2.7-8-2.6-3.8-5.3-3.8-2.3 1.1-4.2-3.8-4.9-1.5-1.1 1.9 0.7 4.2 2.7 4.2-0.4 1.9-14 3.8-7.2 5.3-0.8 4.2-4.3 6.1-0.8 9.5zM849.3 553.9c-7.2-0.4-1.9-1.5-2.3-3.8-5.3 0-15.5-19.3-15.5-24.2-1.9-0.8-3.4-8-3-8-1.9-4.6-8-8.7-5.7-13.3-5.7-3.8-12.1-15.9-14-21.6-3.4-2.6-6.1-9.8-6.1-14-4.1 0-9.5-12.1-8.7-16.7-3.8 0-4.9-6.8-8.7-6.8 1.8-5.7-25-6.1-29.6-6.8 0.7-4.6-2.7-7.2-6.8-7.2 0 7.2-15.1 8-20.4 7.6-3.8-0.4-11.8-1.1-11.8-5.7-2.7-0.8-6.4 0-10.2 0 1.1-4.5-8.4-25-13.3-26.2v1.9c-3.8 0.8-27.6-4.9-27.6-0.4-3 0-15.2 4.2-16.7 8-1.5 0-12.1 5.3-12.1 1.1-3 0-6.4 1.5-7.6 4.2-3 0-6 5.3-7.9 7.2-5.3-0.4-1.6-3.8-6.8 3.4 0 2.6-3.8 12.9-4.6 12.9 1.6 1.5 1.6 2.6 0 4.6-3.8 3-6.1 9.1-9.5 11-3.8 6-4.5-0.4-7.6 6.4-1.6 3.8-3.8 6.8-5.3 9.8-5.3 10.2-5.3 14.4-5.3 23.9 0 3.4-3.8 6.5-2.7 9.1 0.8 3.8 3 11.8 2.7 14.4-2.7 0-4.2 9.1 0.8 11.4 0 5.7 8.3 23.9 14 27.3 0 4.9 9.8 15.5 14.8 15.5 1.9 3.8 22 9.5 22 4.6 8.3 0 37.5-5.3 42 3.4 7.2 0 9.9-1.1 16.7 2.3 0.8 4.9-0.4 20.1-4.1 23.9 0 6.8 2.3 14 7.6 17.4 0.4 1.9 4.2 8.3 5.3 8.3 2.3 8.3 4.6 15.5 3 27.7-1.5 11-4.9 17.4-4.9 27.3-2.3 0 1.9 18.6 3.8 18.6 0 8.7 6.8 16.3 6.8 25.4 0.4 0 2.7 8.7 2.7 11.4-1.9 0 11 25.8 11 27.7 2.3 0 2.7 8.7 4.6 8.7 0.4 5.7 2.7 11 2.7 15.5 2.6 4.2 14 0.4 18.2 0.4 0-1.5 20.5-5.3 22.8-5.3l10.3-14c0-6.1 12.5-18.2 17.4-21.2 0-1.1 6.1-16.3 5.3-16.3 0-10.6 3-17.4 3-26.9 1.9 0 3.8-8.7 7.9-8.7 1.2-2.3 4.6-3 6.8-4.5 0-5.7 4.6-10.2 4.6-17.4 3 0-1.9-22.4-1.9-25-6 0-1.5-26.5-1.5-29.9-3.8 0 12.5-18.2 12.1-17.1 1.1-4.5 10.2-11.4 12.9-14.8 2.6-3.4 11.4-9.9 11.4-13.7 3.8-1.9 4.2-5.7 7.2-7.6 0-1.5-1.9-6.8 3-6.8-1.5-8.3 6.1-13.3 6.1-22-6.1 1.9-13.7 2.7-19.7 2.7-0.4 0.9-6.8 1.3-7.6 0.9z" fill="#4D4D4D" ></path><path d="M512 64.2c-247.5 0-448 200.5-448 448 0 247.1 200.5 447.6 448 447.6s448-200.5 448-447.6c0-247.5-200.5-448-448-448z m348.7 308.1v-0.8c-6 0 0-11.4 0-12.5 4.2-0.4 6.8-3 9.9-4.9l3.8 9.1-2.3-0.4c-1.1 1.9 1.9 8.7 2.7 8.7l0.4 0.4H890c8 0 14 6.4 14 14 0 8-6 14-14 14h-3.8c-0.4 3.4-1.9 8 2.6 8-1.5 6.8-13.3 4.6-14.8-1.9-5-1.1-6.1-3.4-6.4-6.1h-5.7c-7.6 0-14-6-14-14-0.1-7.1 5.6-12.8 12.8-13.6z m-45.9-111.1c-1.5 0.6-2.3 1.1-4.5 1.1 0.7-1.7-0.7-4.6-2.9-7.5l7.4 6.4z m-14.4-15.5l5.7 7.5-7.5-5 1.8-2.5z m-7.2 116c5.7 0 1.1 6.1 8.4 3.4 1.9-2.3 4.1-3 7.2-2.3 5 0 6.1 2.7 9.5 2.7 3.4 6.8 14 4.9 13.3 17 8 0-6.5 7.6-6.5 6.1-8.7 2.3-10.6-6.1-14.4-6.1 0 7.6-4.2-1.5-5.3-1.5 0 2.7-25.8 4.2-30.3 4.2 0.8-3.4 1.1-4.2-1.9-4.9-1.1-11 5.7-16.7 10.2-26.5 7.5-0.8 10.2 1.1 9.8 7.9zM397.5 762c-6.1 0-0.4 39-8.4 42.8-1.1 6.4-6 11.4-3.8 15.5 0.4 6.4 0 12.9 0 18.2-1.5 0-3.4 8.7-3.4 10.6-3 0-4.1 16.7-4.6 30.7-150.1-55-257.4-198.6-257.4-367.7 0-59.1 13.7-114.8 36.8-165.2 2.6 8 3 16.7 3 24.3-1.6 7.2 1.9 15.5 1.9 22.7 3.4 1.5 9.5 12.1 9.5 15.2l8 11.4c9.1 0 13.6 4.2 13.6 12.1-0.4 0 5.3 12.5 7.2 14 0 3.8 5.7 16.7 9.1 18.2 0 11 26.2 28.4 11 2.7-1.1-2.3-8.4-15.2-9.9-15.2 0-4.5-8.7-9.5-7.6-13.3 1.6-5.7 11.8 7.6 11.8 10.6 1.5 0 5.3 8.4 5.3 9.1 2.6 0 12.1 7.2 12.1 11.4 6.8 0 11 17.4 11.4 22.4 0 4.2 2.3 15.2 8 15.2 2.6 5.3 14 3.4 16.3 8.3 7.2 0 15.1 5.3 22.7 5.3 6.8 0 8.4 8 14.4 8 0.8 1.9 3.8 1.1 3.8 2.6 6.1 0 22.4 9.1 19.7 16.3 2.7 1.1 11 9.5 9.8 13.3 1.1 8 14 7.6 18.9 10.2 5-14.4 11-0.8 11 6.1-0.7 1.9 0 11.4 0 15.9 6.1 0-1.9 9.8-3.4 3.4-2.6 0.8-3.8 2.6-4.2 5.3-3.4 0-11 20.5-3.4 22.7-0.7 8-9.8 14.8-1.1 19.3 0-0.4 16.3 23.5 14 23.5 0 3.8 2.3 8.3 3.4 11.8 0 6.8 6.8 22.7 16.7 22.7 0-0.4 10.3 10.6 8.7 10.6 3.3 18.3-0.9 29.6-0.9 49z m467.7-81.5v-0.4c-1.5 1.1-1.9 1.1-1.9 3.4h0.8l-2.3 4.2c-1.1-2.7-4.9 2.6-2.3 4.9l-2.6 5.3c-2.7 0-6.4-1.1-8.3-2.3-1.9 4.2-3 5.7 1.9 6.8-1.9 5.7-3.8 1.9-6.8 0-0.7 3-2.6 12.5-3 22.4C770.8 832.5 650 903.7 512 903.7c-36 0-70.5-4.9-103.5-14 1.1-1.9 2.6-3.8 4.6-3.8 1.5-5.7 4.5-5.7 7.2-9.9 3.4 0-1.9-5.3-1.9-1.9-0.8 0-0.8 1.9-2.6 2.6-0.8-1.9 0-3.4-0.8-3.4 0-3.8 1.9-7.6 1.9-11.4 1.5 0 3-4.9 5-6.1 3.4-4.5 7.2-4.9 7.2-11 0.7 0-1.1-6.4-2.7-6.4 3.8-3.4 8.7 2.6 8.7-4.2 1.1 0 1.9-4.2 1.9-5.3 6.1-3.8 4.9-4.6 13.7-4.6 1.1-2.3 7.6-4.9 10.2-4.9 0-0.8 0.7-9.9 0-9.9 0-4.9 8.7-5.7 8.7-7.6 4.5-3.4 6.1-7.2 6.4-12.9 0-4.6 6.8-9.8 10.6-9.8 6.1 0 1.9-2.7 5.7-2.7-1.2-3 1.5-3 3-4.9 2.7-3.4 1.9-14.4 2.3-19.3-1.2 0 5.7-6.4 6-7.2 3.4 0 5.7-2.7 8.7-2.7 1.9-3.4 12.9-8.3 17.1-11.4 1.5-7.2 6.4-8.7 6.4-16.3 2.3 0 4.1-14.8 4.1-17.4 0.4 0 0.7-13.3 0.7-14.8l3.4-3.8c13.2-1.9 23.9-12.9 23.9-26.9 0-15.5-12.5-28-28.1-28-5.7 0-10.2 1.9-14.8 4.9-4.2 0.4-5.3 3-10.3 3 0.8-3.4 2.7-12.9-3.8-13.6 0 6.4-6.4 3.4-4.9-0.4-3 0-5.7-4.9-9.9-5.3 0 6.8-10.6 1.1-7.5 1.1 0-0.8-1.5-10.2 0.7-10.2-0.7-3.8-1.9-10.6-4.9-12.5-2.3-5.7 1.5-3.4-4.6-8.7-1.1-2.3-1.5-0.4-2.7-2.6-1.9 0-6-5.7-7.6-0.8-3.8-0.4-7.2-2.3-11-3.4-6.4-1.9-0.8-2.3-4.9-4.5 0-1.9-6.1-2.7-6.1-5.3-1.1-3.4-3.8-3.8-4.2-4.9-0.4 0.4-1.1 0-1.1-0.4-1.5 0-1.1-2.6-4.1-2.6-0.4-1.1-3.4-3.4-4.2-3-3 2.3-11.4 1.1-15.1 1.1-9.1-0.8-7.6-11-12.1-11.8-1.6 1.1-3.3 1.2-5 2 0.7-0.7 1-1.7 1.5-4l-5.3-2.1-2.2 7.5c2.1 0 2.7-0.3 3.7-0.4-1.1 0.3-2.2 1.3-3.3 1.3-1.1-1.1-1.1-0.8-3-1.9-0.4 0-3 1.5-3.8 1.9-1.9 1.1-4.2 5.7-6.8 4.2-1.5-1.5-2.3-1.1-2.6 1.1-5.7 0 2.6 13.3-11 13.3 0.7-4.5 0-9.5-6.8-9.5 0 6.1-9.5 4.9-14 4.2 1.1-4.6-1.1-7.6-4.6-9.9 0-3.8-2.7-8-2.7-13.6-4.9 0 2.3-14.8-5.7-14.8 0.8 0.8 0.8 1.9 0.8 2.7-5.3 0-10.6 1.1-15.9 0 1.1-4.9-3-5.3-1.9-10.6 1.1-4.2 3-7.6 3.8-12.1 1.9 0 1.5-6.1 5.3-6.1 3.8-1.9-1.1-8-1.1-2.6l-7.6 2.6c0 0.4-6.8 6.8-6.8 1.9-3.4 1.5-8.7 8.3-3.4 9.5-0.4 3-4.6 4.9-4.6 5.3-7.5 0.4-4.9-0.4-5.2-3.8-4.6 0-9.5-10.2-14.4-10.2 0-4.2-4.5-8.4-4.5-14-1.2 0-1.2-20.1 0-20.1 0-10.2 7.2-18.6 17.4-19.7 6.4-0.8 5.7 3.8 11.8 4.6 3.4 0.8 5.3-0.8 8.3-2.3 0-2.6-1.9-3.4-2.6-6 4.1 0 15.1 0.8 17 4.2 3.8 1.5 8.7-2.7 11.4 0.8 1.9 3 5.3 11.8 5.3 14.4-0.8 0 3.8 6.8 4.2 7.6 6.4 0 4.5-4.9 3.8-9.9-0.7-3.8-1.9-15.5-4.6-18.2 0-11.4 7.6-10.2 12.1-18.9 7.2 0 8.7-11.4 12.9-14 0-1.5 2.6-10.6 3.4-10.6 0.8-5.7 3-5.3 5.3-8.7-0.7 0 8.7-7.2 8.7-6.1 3.4-2.6 6.8-10.2 8-14 1.9 0 6-3.8 6.8-5.7 4.6 0 7.6-2.6 13.3-2.6-0.8 1.9 0 1.5 0.7 4.9 0.4 0-3.8 0.8-4.1-0.4-0.8 2.6-6.1 3.4 4.9 2.3 0.8-1.5 4.2-2.7 6.1-3.4 0.8-1.9 1.6-3.4 2.3-4.9-2.3-1.1-4.2-2.3-6.1-5.3-2.7-4.2-8.4-10.6 1.1-10.6 0-1.1-1.5-0.4-1.5-1.9-5 1.5-6.1 4.6-11.4 4.6-6.8 2.3-9.8 9.1-17.4 8.7 0.7-6.8 12.5-20.1 18.9-22.4 11.3-3.8 31 6.8 34.1-7.6 2.3 0 12.9 3.8 12.9-0.8 2.3 0-2.3-4.5 2.7-4.5-0.8-3.4-6.1-7.6-8-7.6 0-7.2-4.2 0.8-6.1 0.8 0-4.9-1.9-4.5-3.4-6.1 0-3.4-7.6-9.1-10.2-12.9-3 0-8-16.3-10.7-14.8 0 4.2-3 9.5-7.5 9.5 0 2.7-6.8 1.5-8 1.5 0-4.2 1.5-0.8 1.5-2.6-2.3 0-2.3-3-2.3-3.4-1.1 0-11.4-9.8-11.4-12.1-9.1 3-2.3-0.8-10.6-4.6-3 7.6-11.7 1.1-17 1.1 0 1.1-4.2-0.8-6.1 0 0 4.9 4.1 14.8-1.1 16.3 0.8 3.4 3.4 1.1 5.3 3.4 3 3.8 1.9 10.2 0 14.4 7.6 3-6.1 9.5-6.1 5.7-4.1 1.1-4.9 6.4-0.7 9.1 0 2.6-1.5 7.6 2.7 7.6-1.1 4.6-7.6 4.9-12.1 3.4-0.4-1.5 0-1.9 1.5-1.5-0.8-2.7-3.8-10.2-2.6-10.2-1.2-2.3-9.5-15.9-9.5-8.3-5 0-10.3 0.8-10.3-4.9-1.5-0.4-4.6-1.9-5.3-3.4-8.7-1.1-12.5-2.3-22.4-3.8 0.7-4.2-8.4-11.8-12.5-14.4 0-9.9-3-18.9 7.9-20.5 0 1.5 9.9-3 10.6-3.4 3-5.7 8.3 3 10.6-5.3 1.5-4.9 7.6-8 12.5-6.1-0.7 6.1-2.7 12.5-8 12.5 3.8 3.4 14.4-1.1 18.5-1.1 0 0.4 6.8 1.1 8.7 1.1-3-3.8-22.4-7.2-13.2-14 0-1.9 7.5-1.9 8.7-6.1 0.8-3 1.9-12.1 0-12.9-2.6-0.8-5.3 0.4-9.5-0.4 0-1.5 0-2.7-1.5-2.7 0 4.2-3.4 0-6.4 1.1 0 1.1 2.3 4.2 0.4 4.2 0 6.1-0.4 12.1-8.7 13.3 0-4.2-2.3-12.5-6.4-14 0 12.9-12.5-5.3-14.8-7.2-1.1-4.2-3.8-5.7-6.8-6.8-2.3 5.3-5.7 0.4-8.7 6.1-2.7 4.6 0 3.8-2.7 8.7-3.8 0-13.2-2.6-13.6 1.5 4.1 0 5.7 0.8 4.9 4.5 6.4 0-3 4.2-3 4.5-3.8 0-6.1 1.5-10.6 0.8-5.3-0.8-11-1.9-16.3-3.4-4.6-1.5-3.8-3.8-5.3-3.8V231l4.6-4.2c2.3 0.8 4.2 1.5 4.2 1.9 4.9 0 11 6.1 9.5-4.2 1.9 0.4 3.8 0.8 5.3 0.8-1.1-4.6-6.4-2.3-9.8-2.3 0-0.8-0.4-2.3-1.1-3.4 69-61.4 160-98.9 259.6-98.9 103.1 0 196.4 39.8 266.5 105l-11.4-0.4c0-4.6-36 5.3-39.4 5.7-7.6 0.4-11 4.9-17.1 10.2 0 0-18.6 15.5-9.5 15.5-1.1 10.6-28.8 9.5-28.8 16.3-1.5 0-9.5-1.9-5.7 5.3-0.4 0 6.4 7.6 6.8 8.7 6.1 0 11 2.6 18.2 2.6 0.7-1.5 4.2-2.6 6.1-2.6 0.4 4.2 3.8 12.5 6.1 12.5 0 3.8 1.9 9.8-5.3 6-1.1-0.8-1.1-6-1.5-8.3-0.8-4.9-6.4 2.6-11.4 1.9 0 3.4-0.7 14 3.4 15.2-1.9 5.7-9.5 1.9-12.9 6.8-2.7 0-7.2 8.3-7.2 2.6-4.6 3 0.4 10.6-8.4 6.1 0 1.9 0 4.2-0.4 7.2 5.3 0-1.1 4.2-2.7 4.2 0 5.7-6-0.4-7.5-1.5l-0.7 0.8c5.3 8.7-7.6 4.6-11 2.7-4.1-2.3 1.6 3.8 4.6 4.9 0 4.2 14 11.8 6.1 20.1 0 2.3 0 2.7 2.7 2.7 0 5.7-7.2 4.9-11.7 3.8 1.8-3.4 0.7-4.9-3.8-5.3 0 5.3-11 2.3-15.5 4.2-0.8-1.9-1.1-2.3-2.6-2.6-1.6 3-3.4 24.3-2.7 24.3 0 8 6.4 13.3 14 15.9 0-2.3 17.5-0.8 18.2-3.8 1.5-5.7 6.4-5.7 7.2-11.7 0.8-2.6 9.5-23.9 9.5-23.9 0-0.8 16.3 4.2 19-1.5 1.6 0 5-1.1 6.1-2.6 5.3 0.7 6.4 10.2 9.5 10.2 3.8 5.3 12.5 3.8 15.6 9.9 4.2 0 4.5 11.4 4.5 15.5 4.9-3.8 5.7-7.2 4.6-11-1.9-6.8 5.3 1.1 7.6-1.9-3 0-2.3-6.1-8.7-4.5-0.4-1.9-0.8-3.8-0.8-5.3-8.3 1.1-7.6-11.8-14.8-10.2-0.8-3-4.6-4.2-2.7-8 3.4-6.1 14.8 12.1 19.7 12.1 1.1 2.3 8.7 2.7 8.7 4.5 3.8 1.1 1.9 8 1.9 11.4 3.8 0 2.3 1.9 4.2 4.9 5.3 2.6 2.3 12.5 11.4 14.4 0-3.4 8.7-9.9 3.4-9.9 0.4-2.6-6.1-15.2 2.7-13.2 3.4 0.7 8.3 0.7 9.5 4.5 1.9 7.6 0 11.4 6 16.7 3.4 7.2 16.3-0.8 18.2 2.7 1.1 0 9.1 3.4 9.1 0.8 3.8-1.1 4.9-1.9 9.5-1.9 0 4.6-1.5 10.6-2.3 14.4-0.7 3-4.1 6-3 10.2-3 0-2.6 4.2 0.8 4.2 0 6.1-7.2 4.9-12.1 4.6 1.1 4.5 9.5 14.4 12.9 16.7 1.1 4.2 4.5 11.4 7.9 13.6 0.4 3 3.8 11.4 6.1 12.5 0 4.9 15.9 34.5 12.1 34.5 1.5 2.3 3 3.4 2.7 6.1 6.1 0 3.8 14.4 16.3 14.4 0.7-1.5 11-5.3 13.3-5.3 2.3-4.5 14.8-8 18.2-8-1.1-3.8 18.9-12.1 18.9-14 1.9-0.8 3-3.8 3.8-6.4l0.4 6c-0.5 59.6-14.5 116.8-39.2 167.6zM902 476.6l0.4 1.5-0.8-0.8c-2.6 3.8-6.8 6.8-11.7 6.8-3.4 0-6.1-1.5-8.4-3.4l-0.7 0.4v-0.8c-2.3-1.9-3.8-4.6-4.1-8-0.4 1.1-0.8 1.9-1.6 2.3 0.4-1.5 0.8-3 0.8-4.6v-14.4c1.5 2.6 2.6 5.3 2.3 6.4 0.4 0 0 0.4 0.4 0.4 2.3-3.8 6.4-6.4 11.4-6.4 8 0 14 6.1 14 14-0.1 2.4-0.9 4.7-2 6.6z" fill="#4D4D4D" ></path><path d="M633.3 335.1c0.8 8.9 7.5 2.9 7.5-3h-6.7c0.7 3 0 3-0.8 3zM690.5 383.7c0 4.2-0.9 6-2.2 1.5-4.8 0-2.7 5.7-2.7 8.7 8.8 2.3 7.9-10.2 4.9-10.2zM642 315.9c8 2.6-5.3 2.3-6.1 2.3 0 3.4-4.9 10.2 1.1 8.3 4.5-1.5 5.3-1.1 5.7 3.8 5.7 0 14 0 17.4-6.1 3 0 3.4-3 0-4.2 0 3.4 0 3.4-3.4 3.4 1.1-7.2 0.4-13.3-6.1-13.3 1.1-3.4-1.5-5.7-4.1-7.6-5-3.8 0-4.9 0.7-9.5-3.8 1.1-3.8 4.2-8.7 4.2 0-1.1 1.2-4.2 0-4.6 1.6 0 6.1-4.2 0.8-4.2-2.6 8.7-9.8 0-8.7 8 0.7 5.7 2.6 5.3 2.6 10.2 6.6 0.2 8.4 2.1 8.8 9.3zM691.9 374.2c0.5 2.3-1.5 3-5.5 1.5 1.5 3.4 1 3.8 3.5 6 0.9-2.9 7-5.9 2-7.5zM419.1 507.6c-2.4 11.6 3 6.3 6.9 6.3 0-4.1-3.2-6.3-6.9-6.3zM401.3 502.3c-1.1 4.2 0 0.4 0 3.4-4.9 0-9.1-2.6-12.5-2.6 1.1 1.9 2.7 3.4 2.7 5.3-3.4 1.5-6.1 0-9.5 0 1.1 2.6 10.2 3 11.4 0.8 7.9 0 7.9 0 15.5 0.7-0.4-2.3-5.3-6.8-7.6-7.6zM716.7 401.9c-3.8 2.5-2.3 4.5-7.2 2.5-2.3-1-4.6-5-5.7 0 6.4 1 12.9 12.1 12.9-2.5z" fill="#4D4D4D" ></path></symbol><symbol id="iconmap1" viewBox="0 0 1024 1024"><path d="M799.793205 914.569661c43.969695 19.186776 165.485944 74.348757 208.65619 91.936636 4.796694 2.398347 15.98898 1.598898 14.390082-8.793939-9.593388-103.928371-67.953165-699.517879-78.346002-805.045148-1.598898-15.189531-6.395592-17.587878-17.587878-21.585123-34.376307-12.791184-117.519004-42.370797-151.895311-54.362532-11.991735-4.796694-19.186776-4.796694-31.977961 0C689.469242 131.909086 519.986053 183.873271 519.986053 183.873271s-176.67823-53.563083-231.840211-68.752614c-11.991735-3.997245-18.387327-4.796694-31.97796 0.799449-35.175756 11.192286-116.719555 41.571348-151.895311 54.362532-14.390082 5.596143-15.98898 11.991735-17.587878 21.585123C75.492406 294.996683 11.536486 892.984538 0.3442 997.712358c-0.799449 11.991735 9.593388 11.192286 19.186776 7.99449 47.96694-19.186776 169.483189-71.95041 212.653435-89.538289 8.793939-3.997245 17.587878-6.395592 31.977961 0 48.766389 19.986225 191.867761 84.741595 239.035252 103.928371 10.392837 4.796694 19.986225 5.596143 31.97796 0 47.167491-19.986225 185.472169-83.942145 231.840212-104.72782 8.793939-4.796694 22.384572-5.596143 32.777409-0.799449z" fill="#F4F0D3" ></path><path d="M277.753005 112.72231c-6.395592-0.799449-12.791184 0-21.585123 3.197796-35.175756 11.192286-116.719555 41.571348-151.895311 54.362532-14.390082 5.596143-15.98898 11.991735-17.587878 21.585123C75.492406 294.996683 11.536486 892.984538 0.3442 997.712358c-0.799449 11.991735 9.593388 11.192286 19.186776 7.99449 47.96694-19.186776 169.483189-71.95041 212.653435-89.538289 6.395592-2.398347 11.991735-4.796694 20.785675-3.197796l24.782919-800.248453z m477.271055 0c-3.197796 0.799449-6.395592 1.598898-10.392837 3.197796-53.563083 15.98898-216.65068 65.554818-223.845721 67.953165v839.421455c4.796694 0 10.392837-1.598898 15.98898-3.997245 47.167491-19.986225 185.472169-83.942145 231.840212-104.72782 3.197796-1.598898 7.195041-2.398347 11.192286-3.197796l-24.78292-798.649555z" fill="#E8E4C8" ></path><path d="M373.686885 963.336051L513.590461 823.432475 655.892384 965.734398c29.579613-13.590633 58.359777-27.181266 81.543798-37.574103L226.588268 418.111829l247.829192-247.829191c-25.582368-7.99449-59.159226-17.587878-91.137187-27.181266l-215.851231 215.851231L78.690202 270.213764c-3.197796 30.379062-7.195041 67.153716-11.192286 107.925615l386.933319 386.933319L292.143087 927.360846c22.384572 9.593388 51.964185 22.384572 81.543798 35.975205z" fill="#EFC75E" ></path><path d="M269.758515 374.941583l3.997245-122.315697-106.326718 105.527268-88.73884-87.93939c-3.197796 30.379062-7.195041 67.153716-11.192286 107.925615L264.162372 574.803834l3.197796-115.920105-39.972451-39.972451 42.370798-43.969695z m250.227538 455.685933l135.106882 135.106882c29.579613-13.590633 58.359777-27.181266 81.543798-37.574103L519.986053 711.509614v119.117902z" fill="#E3BD59" ></path><path d="M639.903404 0c127.911841 0 231.840211 103.928371 231.840211 232.63966 0 2.398347-0.799449 62.357022-20.785674 104.72782-47.167491 109.524514-160.68925 225.444619-198.263353 263.018723-9.593388 8.793939-13.590633 10.392837-25.582368-0.799449-38.373552-37.574103-150.296413-151.895311-197.463904-260.620376-16.788429-31.97796-21.585123-100.730575-21.585124-106.326718C408.063192 103.928371 511.991563 0 639.903404 0z" fill="#E2574C" ></path><path d="M639.903404 111.922861c-66.354267 0-119.917351 53.563083-119.917351 119.91735s53.563083 119.917351 119.917351 119.917351 119.917351-53.563083 119.917351-119.917351-53.563083-119.917351-119.917351-119.91735z m0 191.867761c-39.97245 0-71.95041-31.97796-71.950411-71.950411s31.97796-71.95041 71.950411-71.95041 71.95041 31.97796 71.95041 71.95041-31.97796 71.95041-71.95041 71.950411z" fill="#FFFFFF" ></path></symbol><symbol id="icongongju" viewBox="0 0 1024 1024"><path d="M754.229742 574.221723a287.03248 287.03248 0 0 0 255.640753-365.609777 31.848953 31.848953 0 0 0-53.24706-13.886561l-55.062894 55.219656c-34.696808 34.762126-95.246396 34.840507-130.008522 0a92.307096 92.307096 0 0 1 0-130.29592l55.062894-55.141275A31.848953 31.848953 0 0 0 812.885115 11.169341 288.155946 288.155946 0 0 0 734.007356 0C575.415771 0.326589 447.014066 128.924247 446.974876 287.541959a284.053989 284.053989 0 0 0 3.919067 46.022912l-37.766744 34.618427-182.262751-182.602403a95.964892 95.964892 0 0 0-18.563315-108.910877L145.115258 9.353507a31.822826 31.822826 0 0 0-45.069273 0L9.842122 99.688006a31.927334 31.927334 0 0 0 0 45.212971l67.198939 67.198939a94.945934 94.945934 0 0 0 108.819432 18.720077l180.185645 180.525298L56.518212 695.020437a191.681576 191.681576 0 0 0 135.338454 327.202919c51.1177 0 99.178527-19.934988 136.213711-57.192254l217.651928-238.240093 257.600286 257.966065a127.63618 127.63618 0 0 0 180.394662-180.616743zM167.166542 166.965325a32.580512 32.580512 0 0 1-45.056209 0L77.537476 122.261832l45.069273-45.13459 44.625111 44.625112a32.110224 32.110224 0 0 1 0 45.212971z m114.959304 753.884827c-48.204526 48.269844-132.2032 48.335162-180.407725 0a127.866099 127.866099 0 0 1-1.018958-179.676167l406.459521-372.55959 0.731559-0.940576a31.352537 31.352537 0 0 0 5.61733-7.459291l1.463118-2.847855 1.018958-2.913174a32.880974 32.880974 0 0 0 1.463118-9.066108l-0.143699-2.991555a30.882249 30.882249 0 0 0-0.444161-3.278953l-0.143699-1.241038a225.751333 225.751333 0 0 1-5.917792-50.399204c0-124.23443 102.405225-224.222897 226.273876-223.569719l-10.594545 10.594545a156.37078 156.37078 0 0 0 0 220.565101 155.456331 155.456331 0 0 0 220.212385 0l10.581481-10.581481v2.991554a222.720588 222.720588 0 0 1-273.446381 217.860945l-1.306355-0.222081a33.063863 33.063863 0 0 0-9.562524-0.287398 31.953461 31.953461 0 0 0-6.061491 1.306356l-2.495139 0.796877q-1.606818 0.731559-3.135254 1.606817l-2.338377 1.306356a32.907101 32.907101 0 0 0-4.964152 4.167275l-0.953639 0.731559-371.005027 406.159059z m656.522134 18.772332a65.226341 65.226341 0 0 1-90.138545 0l-247.7373-248.207588 90.203863-90.347563 247.7373 248.207589a63.933049 63.933049 0 0 1 0 90.347562zM191.856666 766.674049a63.906922 63.906922 0 1 0 63.906922 63.906922 63.906922 63.906922 0 0 0-63.906922-63.906922z" fill="#3F464E" ></path></symbol><symbol id="icondian" viewBox="0 0 1024 1024"><path d="M480 128C249.6 128 64 313.6 64 544S249.6 960 480 960 896 774.4 896 544 710.4 128 480 128z m0 800c-211.2 0-384-172.8-384-384s172.8-384 384-384 384 172.8 384 384-172.8 384-384 384z m38.4-140.8c134.4-19.2 224-147.2 198.4-281.6-19.2-134.4-140.8-224-275.2-198.4-134.4 19.2-224 147.2-198.4 275.2s147.2 224 275.2 204.8z"  ></path></symbol><symbol id="icondoubleright" viewBox="0 0 1024 1024"><path d="M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1c-4.1 5.2-0.4 12.9 6.3 12.9h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"  ></path><path d="M837.2 492.3L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1c-4.1 5.2-0.4 12.9 6.3 12.9h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"  ></path></symbol><symbol id="iconRectangleCopy" viewBox="0 0 1024 1024"><path d="M830.122667 573.653333a18.944 18.944 0 0 0-22.058667 15.36 322.901333 322.901333 0 0 1-318.549333 266.709334c-178.346667 0-323.413333-145.152-323.413334-323.498667a323.328 323.328 0 0 1 323.456-323.498667 323.456 323.456 0 0 1 318.378667 266.112 19.029333 19.029333 0 0 0 37.504-6.698666 357.546667 357.546667 0 0 0-56.149333-138.112A361.386667 361.386667 0 0 0 489.514667 170.666667 361.429333 361.429333 0 0 0 128 532.224c0 199.338667 162.176 361.557333 361.514667 361.557333a360.832 360.832 0 0 0 356.010666-298.069333 18.986667 18.986667 0 0 0-15.402666-22.058667"  ></path><path d="M655.786667 363.776a20.181333 20.181333 0 0 0-28.544 0l-139.946667 139.946667-139.946667-139.946667a20.181333 20.181333 0 0 0-28.458666 28.458667l139.946666 139.946666-139.946666 139.946667a20.181333 20.181333 0 0 0 28.458666 28.501333l139.946667-139.946666 139.946667 139.946666a20.053333 20.053333 0 0 0 28.501333 0 20.181333 20.181333 0 0 0 0-28.458666l-139.946667-139.946667 139.946667-139.946667a20.181333 20.181333 0 0 0 0-28.501333"  ></path></symbol><symbol id="iconRectangleCopy1" viewBox="0 0 1024 1024"><path d="M837.461333 535.466667a19.072 19.072 0 0 0-22.314666 15.573333 326.314667 326.314667 0 0 1-321.792 269.226667c-180.266667 0-326.912-146.645333-326.912-326.912a326.826667 326.826667 0 0 1 597.930666-182.784 323.157333 323.157333 0 0 1 50.773334 125.056 19.242667 19.242667 0 0 0 37.888-6.698667 360.704 360.704 0 0 0-56.789334-139.946667A365.098667 365.098667 0 0 0 493.312 128 365.226667 365.226667 0 0 0 128 493.354667c0 201.472 163.882667 365.354667 365.354667 365.354666a364.672 364.672 0 0 0 359.68-300.885333 19.2 19.2 0 0 0-15.573334-22.314667"  ></path><path d="M650.538667 389.504l-199.978667 200.021333-119.765333-119.765333a18.816 18.816 0 0 0-26.624 26.581333l132.224 132.181334c0.128 0.170667 0.341333 0.213333 0.469333 0.341333 0.170667 0.170667 0.213333 0.426667 0.426667 0.597333a18.773333 18.773333 0 0 0 26.581333 0l213.290667-213.333333a18.816 18.816 0 0 0-26.624-26.624"  ></path></symbol><symbol id="iconRectangleCopy2" viewBox="0 0 1024 1024"><path d="M888.68161 857.569677l-175.091014-175.091014a21.331751 21.331751 0 0 0-30.163096 0c-0.85327 0.85327-1.279905 1.919858-1.919858 2.858454-100.98451 98.382037-259.650076 112.162348-377.699987 32.338935C166.175196 624.669617 129.228603 438.059457 221.424431 301.621576A295.444755 295.444755 0 0 1 357.307687 192.061702a301.716289 301.716289 0 0 1 280.811173 30.632395 301.716289 301.716289 0 0 1 133.238118 248.941537 294.719475 294.719475 0 0 1-22.355675 114.082205 21.331751 21.331751 0 0 0 39.421076 16.297458 336.572371 336.572371 0 0 0 25.598102-130.550317 344.337128 344.337128 0 0 0-152.01006-284.138927A344.294465 344.294465 0 0 0 341.522191 152.512635 337.681622 337.681622 0 0 0 186.056388 277.772679c-105.378851 155.935101-63.227311 369.167287 93.859705 475.271417a344.635773 344.635773 0 0 0 193.180339 59.046287 341.180029 341.180029 0 0 0 225.177966-84.601725l160.244116 160.244115a21.246424 21.246424 0 0 0 30.163096 0 21.331751 21.331751 0 0 0 0-30.163096"  ></path></symbol><symbol id="iconRectangleCopy3" viewBox="0 0 1024 1024"><path d="M830.08 573.866667a18.944 18.944 0 0 0-22.058667 15.445333 322.901333 322.901333 0 0 1-318.464 266.368c-178.389333 0-323.498667-145.066667-323.498666-323.498667a323.413333 323.413333 0 0 1 591.701333-180.906666 319.829333 319.829333 0 0 1 50.261333 123.818666 19.072 19.072 0 0 0 37.461334-6.656A356.949333 356.949333 0 0 0 789.333333 329.984 361.301333 361.301333 0 0 0 489.557333 170.666667 361.429333 361.429333 0 0 0 128 532.181333c0 199.381333 162.218667 361.557333 361.557333 361.557334a360.874667 360.874667 0 0 0 355.925334-297.770667 19.029333 19.029333 0 0 0-15.36-22.058667"  ></path><path d="M509.696 572.16c69.12-9.941333 122.581333-68.906667 122.581333-140.672 0-78.72-64-142.72-142.72-142.72a142.848 142.848 0 0 0-142.72 142.72 20.138667 20.138667 0 0 0 40.277334 0c0-56.490667 45.994667-102.4 102.4-102.4 56.490667 0 102.485333 45.909333 102.485333 102.4 0 56.448-45.994667 102.4-102.442667 102.4-11.093333 0-20.138667 8.96-20.138666 20.181333 0 0.853333 0.384 1.621333 0.512 2.474667-0.128 0.853333-0.512 1.621333-0.512 2.56v100.693333a20.138667 20.138667 0 0 0 40.277333 0V572.16zM489.557333 701.781333a20.138667 20.138667 0 0 0-20.138666 20.181334v31.914666a20.138667 20.138667 0 0 0 40.277333 0v-31.914666a20.138667 20.138667 0 0 0-20.138667-20.181334"  ></path></symbol><symbol id="iconRectangleCopy4" viewBox="0 0 1024 1024"><path d="M676.394667 432.896a21.333333 21.333333 0 0 0-30.165334 0l-135.168 135.125333-133.333333-133.376a21.333333 21.333333 0 0 0-30.165333 30.165334l148.394666 148.48a21.418667 21.418667 0 0 0 30.208 0l150.229334-150.186667a21.333333 21.333333 0 0 0 0-30.208"  ></path></symbol><symbol id="iconRectangleCopy5" viewBox="0 0 1024 1024"><path d="M872.746667 573.866667a18.858667 18.858667 0 0 0-22.058667 15.445333 322.901333 322.901333 0 0 1-318.464 266.368c-178.389333 0-323.498667-145.066667-323.498667-323.498667a323.413333 323.413333 0 0 1 591.701334-180.906666 319.829333 319.829333 0 0 1 50.261333 123.818666 19.072 19.072 0 0 0 37.461333-6.656A356.949333 356.949333 0 0 0 832 329.984 361.301333 361.301333 0 0 0 532.224 170.666667 361.429333 361.429333 0 0 0 170.666667 532.181333c0 199.381333 162.218667 361.557333 361.557333 361.557334a360.874667 360.874667 0 0 0 355.925333-297.770667 19.029333 19.029333 0 0 0-15.36-22.058667"  ></path><path d="M532.224 411.306667a20.138667 20.138667 0 0 0-20.138667 20.181333v322.133333a20.138667 20.138667 0 0 0 40.277334 0v-322.133333a20.138667 20.138667 0 0 0-20.138667-20.181333M552.362667 310.613333a20.138667 20.138667 0 0 0-40.277334 0v40.277334a20.138667 20.138667 0 0 0 40.277334 0v-40.32z"  ></path></symbol><symbol id="iconRectangleCopy6" viewBox="0 0 1024 1024"><path d="M490.666667 213.333333c80.128 0 153.984 29.653333 210.645333 79.146667L250.112 743.68A318.464 318.464 0 0 1 170.666667 533.333333C170.666667 356.864 314.197333 213.333333 490.666667 213.333333m338.56 368.469334a21.461333 21.461333 0 0 0-25.173334 16.554666C773.589333 746.112 641.792 853.333333 490.666667 853.333333a318.378667 318.378667 0 0 1-210.389334-79.488L731.52 322.602667a318.464 318.464 0 0 1 74.154667 154.026666 21.333333 21.333333 0 0 0 41.984-7.466666 360.96 360.96 0 0 0-98.816-190.677334c-0.512-0.64-0.768-1.408-1.322667-2.005333-0.469333-0.469333-1.109333-0.64-1.578667-1.066667A362.410667 362.410667 0 0 0 490.666667 170.666667C290.688 170.666667 128 333.354667 128 533.333333c0 199.978667 162.688 362.666667 362.666667 362.666667 171.306667 0 320.64-121.557333 355.114666-288.981333a21.290667 21.290667 0 0 0-16.554666-25.216"  ></path></symbol><symbol id="iconRectangleCopy7" viewBox="0 0 1024 1024"><path d="M676.441173 625.792L526.169173 475.562667a21.418667 21.418667 0 0 0-30.208 0L347.566507 624a21.418667 21.418667 0 0 0 15.061333 36.437333 21.418667 21.418667 0 0 0 15.146667-6.229333l133.333333-133.376 135.125333 135.125333a21.248 21.248 0 0 0 30.208 0 21.333333 21.333333 0 0 0 0-30.165333"  ></path></symbol><symbol id="iconRectangleCopy8" viewBox="0 0 1024 1024"><path d="M669.696 584.618667a20.821333 20.821333 0 0 0-27.093333 11.392 156.288 156.288 0 0 1-145.493334 96.853333c-86.442667 0-156.842667-69.504-156.842666-154.965333 0-31.061333 9.216-61.013333 26.709333-86.570667a157.184 157.184 0 0 1 130.133333-68.48c52.224 0 100.864 25.6 130.133334 68.352 6.058667 9.002667 11.264 18.602667 15.36 28.501333a20.906667 20.906667 0 0 0 27.093333 11.349334 20.693333 20.693333 0 0 0 11.392-27.050667A198.869333 198.869333 0 0 0 497.066667 341.333333a198.826667 198.826667 0 0 0-164.565334 86.656A194.261333 194.261333 0 0 0 298.666667 537.898667c0 108.330667 89.045333 196.522667 198.442666 196.522666a197.674667 197.674667 0 0 0 184.021334-122.794666 20.693333 20.693333 0 0 0-11.434667-27.008"  ></path><path d="M765.226667 577.109333a18.816 18.816 0 0 0-10.410667 7.978667 18.346667 18.346667 0 0 0-4.053333 7.68c-6.826667 29.44-18.773333 57.258667-35.370667 82.773333a18.773333 18.773333 0 0 0 1.28 22.058667l27.306667 47.104-41.002667 41.002667-49.109333-28.288a18.773333 18.773333 0 0 0-14.634667-1.749334 18.474667 18.474667 0 0 0-9.386667 2.389334 264.192 264.192 0 0 1-78.933333 31.402666 19.114667 19.114667 0 0 0-16.128 13.866667l-14.634667 54.613333h-58.026666l-14.72-55.082666a18.944 18.944 0 0 0-16.298667-13.866667c-0.128 0-0.170667-0.085333-0.256-0.128a265.173333 265.173333 0 0 1-81.664-34.474667c-1.109333-0.682667-2.346667-0.896-3.498667-1.322666-0.725333-0.298667-1.365333-0.64-2.133333-0.853334a18.346667 18.346667 0 0 0-6.058667-0.426666l-0.853333 0.042666a18.688 18.688 0 0 0-9.045333 3.541334l-46.933334 27.093333-41.130666-41.002667 28.672-49.408a18.773333 18.773333 0 0 0-2.304-21.888c-0.170667-0.256-0.170667-0.512-0.298667-0.810666a258.432 258.432 0 0 1-31.488-76.586667c-0.213333-0.981333-0.853333-1.664-1.152-2.56a18.688 18.688 0 0 0-13.013333-13.184l-53.930667-14.634667v-58.112l53.930667-14.634666a18.944 18.944 0 0 0 13.866666-16.256c0.128-0.426667 0.554667-0.597333 0.64-1.066667 6.826667-28.245333 18.261333-55.04 34.005334-79.616 0.810667-1.237333 1.066667-2.645333 1.578666-3.968 0.341333-0.938667 0.853333-1.792 1.024-2.773333 0.085333-0.426667 0.042667-0.810667 0.085334-1.194667a18.432 18.432 0 0 0-2.005334-12.586667l-28.330666-48.981333 41.088-41.045333 49.450666 28.629333c2.986667 1.706667 6.229333 2.56 9.514667 2.56 3.626667 0 7.082667-1.28 10.112-3.242667 1.066667-0.426667 2.133333-0.256 3.114667-0.853333a265.429333 265.429333 0 0 1 78.293333-31.786667 18.218667 18.218667 0 0 0 5.717333-2.56 17.450667 17.450667 0 0 0 4.821334-4.437333 18.133333 18.133333 0 0 0 1.834666-2.773333c0.853333-1.365333 2.176-2.218667 2.645334-3.882667l14.677333-55.125333h58.026667l14.677333 54.613333c0.426667 1.706667 1.92 2.602667 2.688 4.053333 0.512 0.853333 1.066667 1.706667 1.706667 2.474667a17.066667 17.066667 0 0 0 5.205333 4.608 18.773333 18.773333 0 0 0 5.546667 2.474667c29.44 6.4 57.344 17.706667 82.901333 33.621333 0.554667 0.341333 1.28 0.213333 1.834667 0.512a19.072 19.072 0 0 0 10.026666 3.072 19.029333 19.029333 0 0 0 9.472-2.56l49.450667-28.586667 41.045333 40.96-28.288 49.066667a18.56 18.56 0 0 0-0.426666 17.408c0.469333 1.28 0.725333 2.688 1.493333 3.882667 15.232 24.192 26.325333 50.474667 32.981333 78.08 0.256 1.109333 1.28 1.706667 1.706667 2.688a18.773333 18.773333 0 0 0 13.098667 14.506666l50.048 14.506667v58.538667l-50.048 14.506666zM853.333333 493.098667c0-0.725333-0.341333-1.365333-0.426666-2.048a18.730667 18.730667 0 0 0-13.312-19.541334l-54.784-15.786666a295.978667 295.978667 0 0 0-30.421334-72.533334l30.549334-52.906666a18.730667 18.730667 0 0 0-4.266667-23.552c-0.426667-0.512-0.64-1.194667-1.152-1.706667l-56.96-56.917333c-0.554667-0.512-1.237333-0.768-1.834667-1.194667a18.773333 18.773333 0 0 0-23.509333-4.181333l-53.376 30.890666a301.013333 301.013333 0 0 0-75.093333-30.549333l-15.658667-58.325333a18.730667 18.730667 0 0 0-19.712-13.653334c-0.682667-0.085333-1.28-0.426667-2.005333-0.426666h-80.554667c-0.768 0-1.365333 0.341333-2.133333 0.426666a18.858667 18.858667 0 0 0-19.626667 13.696l-15.701333 58.922667a302.08 302.08 0 0 0-71.466667 29.269333l-53.589333-31.018666a18.858667 18.858667 0 0 0-23.552 4.181333c-0.554667 0.426667-1.28 0.64-1.792 1.194667L205.994667 304.256c-0.554667 0.512-0.725333 1.194667-1.194667 1.749333a18.688 18.688 0 0 0-4.224 23.552l30.506667 52.778667a295.338667 295.338667 0 0 0-30.976 73.386667l-58.069334 15.701333a18.773333 18.773333 0 0 0-13.653333 19.584c-0.042667 0.725333-0.384 1.365333-0.384 2.090667v80.469333c0 0.725333 0.341333 1.365333 0.426667 2.090667a18.773333 18.773333 0 0 0 13.610666 19.626666l58.026667 15.744c6.826667 25.002667 16.64 48.981333 29.696 71.552l-30.464 52.48a18.688 18.688 0 0 0 4.181333 23.466667c0.426667 0.597333 0.64 1.28 1.194667 1.834667l56.96 56.917333c0.853333 0.768 1.877333 1.152 2.816 1.792a18.602667 18.602667 0 0 0 13.013333 6.101333 18.773333 18.773333 0 0 0 9.472-2.517333l52.821334-30.421333c23.210667 13.44 47.786667 23.808 73.6 30.72l15.701333 58.922666c2.261333 8.533333 9.941333 14.122667 18.346667 14.122667 0.725333 0 1.408-0.213333 2.090666-0.298667 0.469333 0.042667 0.853333 0.298667 1.28 0.298667h80.597334c0.469333 0 0.853333-0.256 1.322666-0.298667 0.682667 0.085333 1.365333 0.298667 2.005334 0.298667a19.072 19.072 0 0 0 18.346666-14.08l15.701334-58.24a303.744 303.744 0 0 0 73.088-29.312l54.784 31.573333c2.986667 1.706667 6.229333 2.56 9.429333 2.56a18.773333 18.773333 0 0 0 13.098667-6.144c0.896-0.64 1.962667-0.981333 2.730666-1.834666l57.002667-56.874667c0.554667-0.554667 0.725333-1.194667 1.194667-1.706667a18.773333 18.773333 0 0 0 4.181333-23.637333l-30.933333-53.333333c13.781333-23.253333 24.32-47.957333 31.317333-73.898667l54.954667-15.914667a18.730667 18.730667 0 0 0 13.312-19.541333c0.085333-0.725333 0.426667-1.322667 0.426666-2.048v-80.469333z"  ></path></symbol><symbol id="iconRectangleCopy9" viewBox="0 0 1024 1024"><path d="M676.44928 688.042667L542.17728 553.813333 675.510613 420.437333a21.290667 21.290667 0 0 0 0-30.165333 21.290667 21.290667 0 0 0-30.165333 0L512.011947 523.605333 378.635947 390.272a21.333333 21.333333 0 1 0-30.208 30.165333L481.846613 553.813333 347.574613 688.042667a21.333333 21.333333 0 0 0 30.208 30.165333L512.011947 583.978667l134.229333 134.229333a21.248 21.248 0 0 0 30.208 0 21.333333 21.333333 0 0 0 0-30.165333"  ></path></symbol><symbol id="iconRectangleCopy10" viewBox="0 0 1066 1024"><path d="M852.650667 256H210.901333a21.333333 21.333333 0 0 0 0 42.666667h66.858667v442.624A113.493333 113.493333 0 0 0 390.954667 854.613333h284.8a113.450667 113.450667 0 0 0 113.28-113.322666V620.416a21.333333 21.333333 0 1 0-42.666667 0v120.874667c0 38.954667-31.658667 70.656-70.613333 70.656H390.954667a70.741333 70.741333 0 0 1-70.613334-70.656V298.666667h426.069334v190.208a21.333333 21.333333 0 0 0 42.666666 0V298.666667h63.573334a21.333333 21.333333 0 0 0 0-42.666667"  ></path><path d="M442.88 213.333333h187.818667a21.333333 21.333333 0 1 0 0-42.666666H442.88a21.333333 21.333333 0 0 0 0 42.666666M426.922667 405.333333v298.666667a21.333333 21.333333 0 0 0 42.666666 0v-298.666667a21.333333 21.333333 0 0 0-42.666666 0M597.589333 405.333333v298.666667a21.333333 21.333333 0 0 0 42.666667 0v-298.666667a21.333333 21.333333 0 0 0-42.666667 0"  ></path></symbol><symbol id="icondingwei" viewBox="0 0 1024 1024"><path d="M752.981333 609.792a298.837333 298.837333 0 0 0 57.386667-131.157333 23.168 23.168 0 0 0-18.986667-26.624 22.869333 22.869333 0 0 0-26.666666 18.944 253.44 253.44 0 0 1-52.138667 116.053333l-198.656 222.933333-193.792-217.514666a253.696 253.696 0 0 1-60.586667-163.84 254.634667 254.634667 0 0 1 254.378667-254.378667 255.146667 255.146667 0 0 1 239.274667 167.808 23.04 23.04 0 1 0 43.392-15.786667A301.269333 301.269333 0 0 0 513.92 127.957333C348.16 127.957333 213.333333 262.869333 213.333333 428.544c0 64.256 21.418667 125.525333 58.965334 176.810667a23.637333 23.637333 0 0 0 4.693333 8.192l8.917333 9.984c1.664 1.962667 2.858667 4.266667 4.608 6.229333 0.725333 0.768 1.706667 1.109333 2.517334 1.792l203.605333 228.565333c0.298667 0.341333 0.725333 0.469333 1.024 0.768 0.298667 0.341333 0.426667 0.768 0.810667 1.109334 1.237333 1.109333 2.730667 1.706667 4.096 2.474666 0.853333 0.512 1.706667 1.194667 2.56 1.578667a24.106667 24.106667 0 0 0 8.746666 1.834667 23.893333 23.893333 0 0 0 8.704-1.834667c0.853333-0.384 1.706667-1.066667 2.56-1.578667 1.408-0.810667 2.901333-1.365333 4.138667-2.474666 0.384-0.341333 0.512-0.768 0.810667-1.109334 0.341333-0.298667 0.768-0.426667 1.066666-0.768l212.010667-238.037333c0.597333-0.597333 1.408-0.810667 1.962667-1.493333 1.024-1.194667 1.792-2.56 2.773333-3.84l2.858667-3.2c1.024-1.109333 1.450667-2.517333 2.133333-3.754667"  ></path><path d="M583.253333 430.506667c0 38.272-31.104 69.418667-69.333333 69.418666s-69.376-31.146667-69.376-69.376c0-38.229333 31.146667-69.376 69.376-69.376 38.229333 0 69.333333 31.146667 69.333333 69.376m-184.96 0a115.712 115.712 0 0 0 115.626667 115.584 115.712 115.712 0 0 0 115.626667-115.626666 115.712 115.712 0 0 0-115.626667-115.626667 115.712 115.712 0 0 0-115.626667 115.626667"  ></path></symbol><symbol id="icondoubleleft" viewBox="0 0 1024 1024"><path d="M490.8 531.7L746.1 857.9c3 3.9 7.7 6.1 12.6 6.1L836 864c6.69999999 0 10.4-7.7 6.30000001-12.9L576.9 512 842.30000001 172.9c4.1-5.2 0.4-12.9-6.30000001-12.9l-77.3 0c-4.9 0-9.6 2.3-12.6 6.1l-255.3 326.1c-9.1 11.7-9.09999999 27.9 0 39.5z"  ></path><path d="M186.8 531.7L442.1 857.9c3 3.9 7.7 6.1 12.6 6.1L532 864c6.69999999 0 10.4-7.7 6.3-12.89999999L272.9 512 538.3 172.89999999c4.1-5.2 0.4-12.9-6.3-12.89999999l-77.3 0c-4.9 0-9.6 2.3-12.6 6.1l-255.3 326.1c-9.1 11.7-9.09999999 27.9 0 39.5z"  ></path></symbol><symbol id="iconno2" viewBox="0 0 1211 1024"><path d="M34.019934 724.624585c34.019934-23.813953 78.245847-13.607973 102.0598 20.41196 10.20598 13.607973 13.607973 27.215947 13.607974 44.225913 54.431894 17.009967 108.863787 13.607973 163.295681-3.401993 47.627907-20.41196 85.049834-85.049834 3.401993-180.305648-10.20598 6.803987-23.813953 10.20598-37.421927 6.803987-13.607973-3.401993-23.813953-10.20598-34.019933-20.41196-6.803987-10.20598-10.20598-23.813953-10.20598-37.421927 6.803987-27.215947 34.019934-44.225914 61.23588-40.82392 13.607973 3.401993 23.813953 10.20598 30.61794 20.41196 10.20598 13.607973 10.20598 34.019934 3.401993 51.0299 91.853821 64.637874 156.491694 40.82392 197.315615-3.401993 47.627907-51.0299 40.82392-159.893688-17.009967-244.943522-54.431894 10.20598-102.059801-17.009967-115.667774-64.637874s13.607973-95.255814 61.235881-108.863787c37.421927-10.20598 74.843854 3.401993 95.255814 34.019934s20.41196 74.843854-3.401994 105.461794c57.833887 88.451827 156.491694 132.677741 224.531562 108.863787 54.431894-20.41196 98.657807-71.44186 74.843854-180.305648-27.215947 3.401993-51.0299-13.607973-57.833888-40.82392-3.401993-20.41196 6.803987-37.421927 23.813954-47.627907 10.20598-6.803987 27.215947-10.20598 40.82392-6.803987 13.607973 3.401993 23.813953 10.20598 34.019934 20.41196 6.803987 10.20598 10.20598 23.813953 6.803986 37.421927-3.401993 13.607973-10.20598 23.813953-20.41196 34.019934 57.833887 112.265781 132.677741 102.059801 170.099668 64.637874 37.421927-40.82392 57.833887-91.853821 64.637874-149.687708-37.421927-10.20598-61.23588-51.0299-47.627907-91.853821 3.401993-17.009967 13.607973-30.61794 27.215947-37.421927 34.019934-23.813953 78.245847-13.607973 102.0598 20.411961 20.41196 34.019934 13.607973 78.245847-20.41196 98.657807-6.803987 3.401993-10.20598 6.803987-17.009966 10.20598-23.813953 129.275748-3.401993 258.551495 54.431893 377.621262-139.481728 61.23588-272.159468 132.677741-398.033222 214.325582-122.471761 85.049834-238.139535 183.707641-347.003323 289.169435-88.451827-95.255814-204.119601-163.295681-329.993355-187.109635l-13.607974 13.607974c-34.019934 23.813953-78.245847 13.607973-102.0598-20.41196-27.215947-37.421927-17.009967-81.647841 17.009967-105.461794z" fill="#A1C7E2" ></path><path d="M802.870432 734.830565c-122.471761 85.049834-234.737542 180.305648-340.199336 285.767442-88.451827-98.657807-204.119601-163.295681-329.993355-190.511628l-13.607974 13.607973c-34.019934 20.41196-78.245847 13.607973-102.0598-20.41196-20.41196-34.019934-13.607973-78.245847 20.41196-102.059801s78.245847-13.607973 102.059801 20.41196c6.803987 13.607973 13.607973 27.215947 10.20598 44.225914 54.431894 13.607973 108.863787 13.607973 163.295681-3.401993 47.627907-20.41196 81.647841-85.049834 0-180.305648-10.20598 6.803987-23.813953 10.20598-37.421927 6.803987-27.215947-6.803987-44.225914-30.61794-40.82392-57.833887 3.401993-13.607973 10.20598-23.813953 20.41196-30.617941 10.20598-10.20598 23.813953-13.607973 37.421927-10.20598 27.215947 6.803987 44.225914 30.61794 40.82392 57.833887 0 3.401993-3.401993 10.20598-3.401994 13.607974 91.853821 64.637874 156.491694 40.82392 193.913622 0 47.627907-51.0299 40.82392-159.893688-20.41196-244.943522-47.627907 13.607973-95.255814-13.607973-108.863788-61.23588-10.20598-37.421927 3.401993-74.843854 34.019934-98.657808l374.219269 557.926911z" fill="#BBD9EA" ></path></symbol><symbol id="iconno1" viewBox="0 0 1211 1024"><path d="M34.019934 724.624585c34.019934-23.813953 78.245847-13.607973 102.0598 20.41196 10.20598 13.607973 13.607973 27.215947 13.607974 44.225913 54.431894 17.009967 108.863787 13.607973 163.295681-3.401993 47.627907-20.41196 85.049834-85.049834 3.401993-180.305648-10.20598 6.803987-23.813953 10.20598-37.421927 6.803987-13.607973-3.401993-23.813953-10.20598-34.019933-20.41196-6.803987-10.20598-10.20598-23.813953-10.20598-37.421927 6.803987-27.215947 34.019934-44.225914 61.23588-40.82392 13.607973 3.401993 23.813953 10.20598 30.61794 20.41196 10.20598 13.607973 10.20598 34.019934 3.401993 51.0299 91.853821 64.637874 156.491694 40.82392 197.315615-3.401993 47.627907-51.0299 40.82392-159.893688-17.009967-244.943522-54.431894 10.20598-102.059801-17.009967-115.667774-64.637874-13.607973-47.627907 13.607973-95.255814 61.235881-108.863787 37.421927-10.20598 74.843854 3.401993 95.255814 34.019934 20.41196 30.61794 20.41196 74.843854-3.401994 105.461794 57.833887 88.451827 156.491694 132.677741 224.531562 108.863787 54.431894-20.41196 98.657807-71.44186 74.843854-180.305648-27.215947 3.401993-51.0299-13.607973-57.833888-40.82392-3.401993-20.41196 6.803987-37.421927 23.813954-47.627907 10.20598-6.803987 27.215947-10.20598 40.82392-6.803987 13.607973 3.401993 23.813953 10.20598 34.019934 20.41196 6.803987 10.20598 10.20598 23.813953 6.803986 37.421927-3.401993 13.607973-10.20598 23.813953-20.41196 34.019934 57.833887 112.265781 132.677741 102.059801 170.099668 64.637874 37.421927-40.82392 57.833887-91.853821 64.637874-149.687708-37.421927-10.20598-61.23588-51.0299-47.627907-91.853821 3.401993-17.009967 13.607973-30.61794 27.215947-37.421927 34.019934-23.813953 78.245847-13.607973 102.0598 20.411961 20.41196 34.019934 13.607973 78.245847-20.41196 98.657807-6.803987 3.401993-10.20598 6.803987-17.009966 10.20598-23.813953 129.275748-3.401993 258.551495 54.431893 377.621262-139.481728 61.23588-272.159468 132.677741-398.033222 214.325582-122.471761 85.049834-238.139535 183.707641-347.003323 289.169435-88.451827-95.255814-204.119601-163.295681-329.993355-187.109635l-13.607974 13.607974c-34.019934 23.813953-78.245847 13.607973-102.0598-20.41196-27.215947-37.421927-17.009967-81.647841 17.009967-105.461794z" fill="#F9C441" ></path><path d="M802.870432 734.830565c-122.471761 85.049834-234.737542 180.305648-340.199336 285.767442-88.451827-95.255814-204.119601-163.295681-329.993355-190.511628l-13.607974 13.607973c-34.019934 20.41196-78.245847 13.607973-102.0598-20.41196-20.41196-34.019934-13.607973-78.245847 20.41196-102.059801s78.245847-13.607973 102.059801 20.41196c6.803987 13.607973 13.607973 27.215947 10.20598 44.225914 54.431894 13.607973 108.863787 13.607973 163.295681-3.401993 47.627907-20.41196 81.647841-85.049834 0-180.305648-10.20598 6.803987-23.813953 10.20598-37.421927 6.803987-27.215947-6.803987-44.225914-30.61794-40.82392-57.833887 3.401993-13.607973 10.20598-23.813953 20.41196-30.617941 10.20598-10.20598 23.813953-13.607973 37.421927-10.20598 27.215947 6.803987 44.225914 30.61794 40.82392 57.833887 0 3.401993-3.401993 10.20598-3.401994 13.607974 91.853821 64.637874 156.491694 40.82392 193.913622 0 47.627907-51.0299 40.82392-159.893688-20.41196-244.943522-47.627907 13.607973-95.255814-13.607973-108.863788-61.23588-10.20598-37.421927 3.401993-74.843854 34.019934-98.657808l374.219269 557.926911z" fill="#F4D07D" ></path></symbol><symbol id="iconno3" viewBox="0 0 1209 1024"><path d="M34.40128 727.04c34.133333-23.893333 78.506667-13.653333 102.4 20.48 10.24 13.653333 13.653333 27.306667 13.653333 44.373333 54.613333 17.066667 109.226667 13.653333 163.84-3.413333 47.786667-20.48 85.333333-85.333333 3.413334-180.906667-17.066667 3.413333-30.72 6.826667-44.373334 3.413334s-23.893333-10.24-34.133333-20.48c-6.826667-10.24-10.24-23.893333-10.24-37.546667 6.826667-27.306667 34.133333-44.373333 61.44-40.96 13.653333 3.413333 23.893333 10.24 30.72 20.48 10.24 13.653333 10.24 34.133333 3.413333 51.2 92.16 64.853333 157.013333 40.96 194.56-3.413333 47.786667-51.2 40.96-160.426667-17.066666-245.76-44.373333 13.653333-92.16-13.653333-105.813334-61.44-13.653333-47.786667 13.653333-95.573333 61.44-109.226667 37.546667-10.24 75.093333 3.413333 95.573334 34.133333 20.48 30.72 20.48 75.093333-3.413334 105.813334 58.026667 88.746667 157.013333 133.12 221.866667 109.226666 54.613333-20.48 98.986667-71.68 75.093333-180.906666-27.306667 3.413333-51.2-13.653333-54.613333-40.96-3.413333-20.48 6.826667-37.546667 23.893333-47.786667 10.24-6.826667 27.306667-10.24 40.96-6.826667 13.653333 3.413333 23.893333 10.24 34.133334 20.48 6.826667 10.24 10.24 23.893333 6.826666 37.546667-3.413333 13.653333-10.24 23.893333-20.48 34.133333 58.026667 112.64 133.12 102.4 170.666667 64.853334 37.546667-40.96 58.026667-92.16 64.853333-146.773334-37.546667-10.24-61.44-51.2-47.786666-88.746666 3.413333-17.066667 13.653333-30.72 30.72-37.546667 34.133333-23.893333 78.506667-13.653333 102.4 20.48 20.48 34.133333 13.653333 78.506667-20.48 98.986667-10.24-3.413333-17.066667 0-23.893334 0-23.893333 129.706667-3.413333 259.413333 51.2 378.88-139.946667 61.44-273.066667 129.706667-399.36 215.04-122.88 85.333333-238.933333 184.32-348.16 290.133333-88.746667-95.573333-204.8-160.426667-331.093333-187.733333l-13.653333 13.653333c-34.133333 23.893333-78.506667 13.653333-102.4-20.48-20.48-37.546667-10.24-81.92 23.893333-102.4z" fill="#CCA75E" ></path><path d="M805.814613 737.28c-122.88 85.333333-235.52 180.906667-341.333333 286.72-88.746667-95.573333-204.8-163.84-331.093333-191.146667l-13.653334 13.653334c-34.133333 20.48-78.506667 13.653333-102.4-20.48-20.48-34.133333-13.653333-78.506667 20.48-102.4s78.506667-13.653333 102.4 20.48c6.826667 13.653333 13.653333 27.306667 10.24 40.96 54.613333 20.48 109.226667 17.066667 160.426667 0 47.786667-20.48 81.92-85.333333 0-180.906667-10.24 6.826667-23.893333 10.24-37.546667 6.826667-27.306667-6.826667-44.373333-30.72-40.96-58.026667 3.413333-13.653333 10.24-23.893333 20.48-30.72 13.653333-10.24 27.306667-10.24 40.96-10.24 27.306667 6.826667 44.373333 30.72 40.96 58.026667 0 3.413333-3.413333 10.24-3.413333 13.653333 92.16 64.853333 157.013333 40.96 194.56 0 47.786667-51.2 40.96-160.426667-20.48-245.76-47.786667 13.653333-95.573333-13.653333-109.226667-61.44-10.24-37.546667 3.413333-75.093333 34.133334-98.986667l375.466666 559.786667z" fill="#CCB283" ></path></symbol></svg>',
				i = (t = document.getElementsByTagName("script"))[t.length - 1].getAttribute("data-injectcss");
			if(i && !e.__iconfont__svg__cssinject__) {
				e.__iconfont__svg__cssinject__ = !0;
				try {
					document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
				} catch(t) {
					console && console.log(t)
				}
			}! function(t) {
				if(document.addEventListener)
					if(~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(t, 0);
					else {
						var a = function e() {
							document.removeEventListener("DOMContentLoaded", e, !1), t()
						};
						document.addEventListener("DOMContentLoaded", a, !1)
					}
				else document.attachEvent && (n = t, l = e.document, r = !1, (s = function() {
					try {
						l.documentElement.doScroll("left")
					} catch(t) {
						return void setTimeout(s, 50)
					}
					i()
				})(), l.onreadystatechange = function() {
					"complete" == l.readyState && (l.onreadystatechange = null, i())
				});

				function i() {
					r || (r = !0, n())
				}
				var n, l, r, s
			}((function() {
				var e, t, i, n, l, r;
				(e = document.createElement("div")).innerHTML = a, a = null, (t = e.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", i = t, (n = document.body).firstChild ? (l = i, (r = n.firstChild).parentNode.insertBefore(l, r)) : n.appendChild(i))
			}))
		}(window)
	},
	"8f4e": function(e, t, a) {
		"use strict";
		var i = a("9e18"),
			n = a.n(i);
		n.a
	},
	"90a4": function(e, t, a) {
		"use strict";
		var i = a("9929"),
			n = a.n(i);
		n.a
	},
	"975d": function(e, t, a) {},
	9929: function(e, t, a) {},
	"9a5c": function(e, t, a) {},
	"9b02": function(e, t, a) {},
	"9e18": function(e, t, a) {},
	a146: function(e, t, a) {},
	a1bc: function(e) {
		e.exports = JSON.parse('{"comment":"鹿城确诊人员增长趋势(例)","dataAge":[{"value":0,"name":"滨江","itemStyle":{"color":"#f41e1e"}},{"value":0,"name":"山福","itemStyle":{"color":"#4dc075"}},{"value":6,"name":"藤桥","itemStyle":{"color":"#b8d94c"}},{"value":0,"name":"仰义","itemStyle":{"color":"#ffb738"}},{"value":2,"name":"南郊","itemStyle":{"color":"#ab64cc"}},{"value":0,"name":"丰门","itemStyle":{"color":"#ffdd55"}},{"value":11,"name":"南汇","itemStyle":{"color":"#fe4d69"}},{"value":1,"name":"双屿","itemStyle":{"color":"#ffefa1"}},{"value":4,"name":"五马","itemStyle":{"color":"#ff8e66"}},{"value":4,"name":"松台","itemStyle":{"color":"#ff936a"}},{"value":0,"name":"七都","itemStyle":{"color":"#aa63cb"}},{"value":1,"name":"蒲鞋市","itemStyle":{"color":"#bace53"}},{"value":0,"name":"广化","itemStyle":{"color":"#f41e1e"}},{"value":7,"name":"大南","itemStyle":{"color":"#fef5cc"}}],"dataName":["21日","22日","23日","24日","25日","26日","27日","28日","29日","30"],"YTdataAge":[{"value":0,"name":"滨江","itemStyle":{"color":"#f41e1e"}},{"value":0,"name":"山福","itemStyle":{"color":"#4dc075"}},{"value":2,"name":"藤桥","itemStyle":{"color":"#b8d94c"}},{"value":0,"name":"仰义","itemStyle":{"color":"#ffb738"}},{"value":2,"name":"南郊","itemStyle":{"color":"#ab64cc"}},{"value":0,"name":"丰门","itemStyle":{"color":"#ffdd55"}},{"value":6,"name":"南汇","itemStyle":{"color":"#fe4d69"}},{"value":1,"name":"双屿","itemStyle":{"color":"#ffefa1"}},{"value":1,"name":"五马","itemStyle":{"color":"#ff8e66"}},{"value":1,"name":"松台","itemStyle":{"color":"#ff936a"}},{"value":0,"name":"七都","itemStyle":{"color":"#aa63cb"}},{"value":1,"name":"蒲鞋市","itemStyle":{"color":"#bace53"}},{"value":0,"name":"广化","itemStyle":{"color":"#f41e1e"}},{"value":6,"name":"大南","itemStyle":{"color":"#fef5cc"}}],"dataQS":[2,4,6,10,18,32,60,114,172,227],"dataLC":[0,0,0,0,5,10,17,27,29,32]}')
	},
	a46d: function(e, t, a) {
		"use strict";
		var i = a("7422"),
			n = a.n(i);
		n.a
	},
	a542: function(e, t, a) {},
	a54e: function(e, t, a) {
		"use strict";
		var i = a("6e8a"),
			n = a.n(i);
		n.a
	},
	b1e4: function(e, t, a) {},
	c094: function(e, t, a) {
		"use strict";
		var i = a("4545"),
			n = a.n(i);
		n.a
	},
	c41e: function(e, t, a) {
		"use strict";
		var i = a("0b92"),
			n = a.n(i);
		n.a
	},
	c630: function(e, t, a) {
		"use strict";
		var i = a("e058"),
			n = a.n(i);
		n.a
	},
	c726: function(e, t, a) {},
	d16f: function(e, t, a) {
		"use strict";
		var i = a("ec17"),
			n = a.n(i);
		n.a
	},
	d1a5: function(e, t, a) {
		"use strict";
		var i = a("9a5c"),
			n = a.n(i);
		n.a
	},
	d58c: function(e, t, a) {
		"use strict";
		var i = a("a542"),
			n = a.n(i);
		n.a
	},
	d829: function(e, t, a) {
		"use strict";
		var i = a("b1e4"),
			n = a.n(i);
		n.a
	},
	e058: function(e, t, a) {},
	e966: function(e, t, a) {
		"use strict";
		var i = a("79eb"),
			n = a.n(i);
		n.a
	},
	ec17: function(e, t, a) {},
	f248: function(e, t) {
		e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTAyLTA2VDE2OjA4OjUyKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTAyLTA2VDE2OjA4OjUyKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wMi0wNlQxNjowODo1MiswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3MzY4MjU2OC03NDE2LWU4NDMtODRhYS00MzkyZjY4YjcyNDciIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkMzE1YTI5ZC1kZjFiLWM2NGUtYTg0ZC1lYjZkODI3M2JmOGQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNzg4ZGFiMi1mMThhLWMzNDEtOTk3YS00NWQ1M2JhZjExZTIiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowNzg4ZGFiMi1mMThhLWMzNDEtOTk3YS00NWQ1M2JhZjExZTIiIHN0RXZ0OndoZW49IjIwMjAtMDItMDZUMTY6MDg6NTIrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NzM2ODI1NjgtNzQxNi1lODQzLTg0YWEtNDM5MmY2OGI3MjQ3IiBzdEV2dDp3aGVuPSIyMDIwLTAyLTA2VDE2OjA4OjUyKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8++TYl1AAAAIRJREFUSInt1bEJAkEQBdB/mpmLDdiDXdiHXVwV9mEX9mAH5mbCs4FbvN3jEGQ//HReMswMyNrZrC50pCMdWYRck2joODkNU93ipi5jYVYRCXa4LwW+IcEejyXAHCQ44tkKzEWCE14tQA0SnPGuBZBB3dO6JDkUV7WQWqQp/39WOvI75AMhiwVW+UanzQAAAABJRU5ErkJggg=="
	},
	fd4e: function(e, t, a) {
		"use strict";
		var i = a("85ad"),
			n = a.n(i);
		n.a
	}
});
//# sourceMappingURL=app.36635a48.js.map