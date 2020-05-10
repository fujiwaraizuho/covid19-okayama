(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{291:function(t){t.exports=JSON.parse('{"date":"2020/05/05 00:00","items":{"bed":117,"ventilator":517,"ecmo":28}}')},295:function(t,e,r){var content=r(351);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("77a7498c",content,!0,{sourceMap:!1})},296:function(t,e){},300:function(t,e,r){"use strict";r(103);var n={components:{DataView:r(305).a},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},number:{type:Number,default:0},unit:{type:String,default:""}}},o=(r(350),r(5)),c=r(352),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("data-view",{staticClass:"SimpleNumberCard",attrs:{title:t.title,"title-id":t.titleId,date:t.date}},[r("p",{staticClass:"SimpleNumberDataContainer"},[r("span",{staticClass:"SimpleNumber",domProps:{textContent:t._s(t.number.toLocaleString())}}),t._v(" "),r("span",{staticClass:"SimpleNumberUnit"},[t._v(t._s(t.unit))])]),t._v(" "),t._t("default")],2)}),[],!1,null,"388f64e9",null);"function"==typeof c.default&&Object(c.default)(component);e.a=component.exports},350:function(t,e,r){"use strict";var n=r(295);r.n(n).a},351:function(t,e,r){(e=r(13)(!1)).push([t.i,".SimpleNumberCard[data-v-388f64e9] .DataView-Title{width:100%}.SimpleNumberCard .SimpleNumberDataContainer[data-v-388f64e9]{text-align:center}.SimpleNumberCard .SimpleNumber[data-v-388f64e9]{font-size:64px}.SimpleNumberCard .SimpleNumberUnit[data-v-388f64e9]{margin-left:5px;font-size:32px}",""]),t.exports=e},352:function(t,e,r){"use strict";var n=r(296),o=r.n(n);e.default=o.a},367:function(t,e,r){"use strict";var n=r(300),o=r(291),c={components:{SimpleNumberCard:n.a},data:function(){var data={MedicalSystem:o};return data}},d=r(5),m=r(38),l=r.n(m),f=r(511),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("simple-number-card",{attrs:{"title-id":"number-of-medical-system-bed",title:this.$t("ECMO"),date:this.MedicalSystem.date,number:this.MedicalSystem.items.ecmo,unit:this.$t("台")}})],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VCol:f.a})},369:function(t,e,r){"use strict";var n=r(300),o=r(291),c={components:{SimpleNumberCard:n.a},data:function(){var data={MedicalSystem:o};return data}},d=r(5),m=r(38),l=r.n(m),f=r(511),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("simple-number-card",{attrs:{"title-id":"number-of-medical-system-bed",title:this.$t("人工呼吸器"),date:this.MedicalSystem.date,number:this.MedicalSystem.items.ventilator,unit:this.$t("台")}})],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VCol:f.a})},370:function(t,e,r){"use strict";var n=r(300),o=r(291),c={components:{SimpleNumberCard:n.a},data:function(){var data={MedicalSystem:o};return data}},d=r(5),m=r(38),l=r.n(m),f=r(511),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("simple-number-card",{attrs:{"title-id":"number-of-medical-system-bed",title:this.$t("確保病床"),date:this.MedicalSystem.date,number:this.MedicalSystem.items.bed,unit:this.$t("床")}})],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VCol:f.a})},521:function(t,e,r){"use strict";r.r(e);var n=r(359),o=r(376),c=r(377),d=r(378),m=r(291),l=r(384),f=r(389),h=r(383),v=r(385),C=r(388),y=r(387),$=r(370),S=r(369),N=r(367),_={components:{ConfirmedCasesDetailsCard:l.a,ConfirmedCasesNumberCard:f.a,ConfirmedCasesAttributesCard:h.a,TestedNumberCard:v.a,TelephoneAdvisoryReportsNumberCard:C.a,ConsultationDeskReportsNumberCard:y.a,MedicalSystemBedNumberCard:$.a,MedicalSystemVentilatorNumberCard:S.a,MedicalSystemEcmoNumberCard:N.a},data:function(){var title,t;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況"),t=o.date;break;case"number-of-confirmed-cases":title=this.$t("陽性患者数"),t=n.date;break;case"attributes-of-confirmed-cases":title=this.$t("陽性患者の属性"),t=n.date;break;case"number-of-tested":title=this.$t("検査実施件数"),t=o.date;break;case"number-of-reports-to-covid19-telephone-advisory-center":title=this.$t("新型コロナコールセンター相談件数"),t=c.date;break;case"number-of-reports-to-covid19-consultation-desk":title=this.$t("新型コロナ受診相談窓口相談件数"),t=d.date;break;case"number-of-medical-system-bed":title=this.$t("確保病床"),t=m.date;break;case"number-of-medical-system-ventilator":title=this.$t("人工呼吸器"),t=m.date;break;case"number-of-medical-system-ecmo":title=this.$t("ECMO"),t=m.date}var data={title:title,updatedAt:t};return data},head:function(){var t="https://okayama.stopcovid19.jp",e=(new Date).getTime(),r="ja"===this.$i18n.locale?"".concat(t,"/ogp/").concat(this.$route.params.card,".png?t=").concat(e):"".concat(t,"/ogp/").concat(this.$i18n.locale,"/").concat(this.$route.params.card,".png?t=").concat(e),n="".concat(this.updatedAt," | ").concat(this.$t("当サイトは岡山県の新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、有志が開設したものです。"));return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:t+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("岡山県")+" "+this.$t("新型コロナウイルス感染症")+this.$t("対策サイト")+" "+this.$t("(非公式)")},{hid:"description",name:"description",content:n},{hid:"og:description",property:"og:description",content:n},{hid:"og:image",property:"og:image",content:r},{hid:"twitter:image",name:"twitter:image",content:r}]}}},k=r(5),component=Object(k.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",["details-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-details-card"):this._e(),this._v(" "),"number-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-number-card"):"attributes-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-attributes-card"):"number-of-tested"==this.$route.params.card?e("tested-number-card"):"number-of-reports-to-covid19-telephone-advisory-center"==this.$route.params.card?e("telephone-advisory-reports-number-card"):"number-of-reports-to-covid19-consultation-desk"==this.$route.params.card?e("consultation-desk-reports-number-card"):"number-of-medical-system-bed"==this.$route.params.card?e("medical-system-bed-number-card"):"number-of-medical-system-ventilator"==this.$route.params.card?e("medical-system-ventilator-number-card"):"number-of-medical-system-ecmo"==this.$route.params.card?e("medical-system-ecmo-number-card"):this._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);