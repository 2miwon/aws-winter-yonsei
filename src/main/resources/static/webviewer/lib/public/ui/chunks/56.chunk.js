(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1791:function(e,t,a){"use strict";a.r(t);a(95),a(7),a(81),a(19),a(11),a(13),a(12),a(8),a(9),a(10),a(16),a(15),a(20),a(18);var n=a(17),i=a.n(n),o=a(157),l=a(24),r=a(432),c=a(1),u=a(0),s=a.n(u),m=a(376),d=a(6),p=a(3),g=a(256),E=a(54),v=a(250),f=a(2),y=a(186),w=a(5),b=a(39);function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,i,o,l,r=[],c=!0,u=!1;try{if(o=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;c=!1}else for(;!(c=(n=o.call(a)).done)&&(r.push(n.value),r.length!==t);c=!0);}catch(e){u=!0,i=e}finally{try{if(!c&&null!=a.return&&(l=a.return(),Object(l)!==l))return}finally{if(u)throw i}}return r}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var T=function(){var e,t=C(Object(m.a)(),1)[0],a=Object(d.f)(),n=C(Object(d.e)((function(e){return[p.a.getTotalPages(e),p.a.getDisplayMode(e),p.a.isElementDisabled(e,w.a.VIEW_CONTROLS_OVERLAY),p.a.isReaderMode(e),p.a.isMultiViewerMode(e),p.a.isFullScreen(e),p.a.getActiveDocumentViewerKey(e),p.a.getIsMultiTab(e),p.a.getIsMultiViewerModeAvailable(e)]})),9),u=n[0],N=n[1],T=n[2],h=n[3],k=n[4],O=n[5],A=n[6],M=n[7],V=n[8],B=u<1e3,D=c.a.getDocumentViewer(),j=null==D?void 0:D.getDisplayModeManager();j&&j.isVirtualDisplayEnabled()&&(B=!0);var S,L,I=!b.g&&!M&&V,F=function(e,t){var n=function(){var a=r.a.find((function(a){return a.pageTransition===e&&a.layout===t}));c.a.setDisplayMode(a.displayMode)};h?(Object(v.b)(a),setTimeout((function(){n()}))):n()};if(T)return null;var R=r.a.find((function(e){return e.displayMode===N}));R&&(S=R.pageTransition,L=R.layout);var _=c.a.isFullPDFEnabled()&&"pdf"===(null===(e=c.a.getDocument())||void 0===e?void 0:e.getType());return s.a.createElement(g.a,{menu:w.a.VIEW_CONTROLS_OVERLAY,trigger:w.a.VIEW_CONTROLS_OVERLAY_BUTTON,ariaLabel:t("component.viewControlsOverlay")},B&&s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a,{dataElement:"pageTransitionHeader",className:"type"},t("option.displayMode.pageTransition")),s.a.createElement(E.a,{className:i()({row:!0,active:"continuous"===S&&!h}),onClick:function(){return F("continuous",L)},dataElement:"continuousPageTransitionButton"},s.a.createElement(l.a,{title:"option.pageTransition.continuous",img:"icon-header-page-manipulation-page-transition-continuous-page-line",isActive:"continuous"===S&&!h,role:"option"}),s.a.createElement("div",{className:"title"},t("option.pageTransition.continuous"))),s.a.createElement(E.a,{className:i()({row:!0,active:"default"===S&&!h}),onClick:function(){return F("default",L)},dataElement:"defaultPageTransitionButton"},s.a.createElement(l.a,{title:"option.pageTransition.default",img:"icon-header-page-manipulation-page-transition-page-by-page-line",isActive:"default"===S&&!h,role:"option"}),s.a.createElement("div",{className:"title"},t("option.pageTransition.default"))),_&&s.a.createElement(E.a,{className:i()({row:!0,active:h}),onClick:function(){h||Object(v.a)(a)},dataElement:"readerPageTransitionButton"},s.a.createElement(l.a,{title:"option.pageTransition.reader",img:"icon-header-page-manipulation-page-transition-reader",isActive:h,role:"option"}),s.a.createElement("div",{className:"title"},t("option.pageTransition.reader"))),!h&&s.a.createElement(E.a,{dataElement:"viewControlsDivider1",className:"divider"})),!h&&s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a,{dataElement:"rotateHeader",className:"type"},t("action.rotate")),s.a.createElement(E.a,{className:"row",onClick:function(){return c.a.rotateClockwise(A)},dataElement:"rotateClockwiseButton"},s.a.createElement(o.a,{title:"action.rotateClockwise",img:"icon-header-page-manipulation-page-rotation-clockwise-line",role:"option"}),s.a.createElement("div",{className:"title"},t("action.rotateClockwise"))),s.a.createElement(E.a,{className:"row",onClick:function(){return c.a.rotateCounterClockwise(A)},dataElement:"rotateCounterClockwiseButton"},s.a.createElement(o.a,{title:"action.rotateCounterClockwise",img:"icon-header-page-manipulation-page-rotation-counterclockwise-line",role:"option"}),s.a.createElement("div",{className:"title"},t("action.rotateCounterClockwise"))),s.a.createElement(E.a,{dataElement:"viewControlsDivider2",className:"divider"}),s.a.createElement(E.a,{dataElement:"layoutHeader",className:"type"},t("option.displayMode.layout")),s.a.createElement(E.a,{className:i()({row:!0,active:"single"===L}),onClick:function(){return F(S,"single")},dataElement:"singleLayoutButton"},s.a.createElement(l.a,{title:"option.layout.single",img:"icon-header-page-manipulation-page-layout-single-page-line",isActive:"single"===L,role:"option"}),s.a.createElement("div",{className:"title"},t("option.layout.single"))),s.a.createElement(E.a,{className:i()({row:!0,active:"double"===L}),onClick:function(){return F(S,"double")},dataElement:"doubleLayoutButton"},s.a.createElement(l.a,{title:"option.layout.double",img:"icon-header-page-manipulation-page-layout-double-page-line",isActive:"double"===L,role:"option"}),s.a.createElement("div",{className:"title"},t("option.layout.double"))),s.a.createElement(E.a,{className:i()({row:!0,active:"cover"===L}),onClick:function(){return F(S,"cover")},dataElement:"coverLayoutButton"},s.a.createElement(l.a,{title:"option.layout.cover",img:"icon-header-page-manipulation-page-layout-cover-line",isActive:"cover"===L,role:"option"}),s.a.createElement("div",{className:"title"},t("option.layout.cover"))),I&&s.a.createElement(E.a,{className:i()({row:!0,active:k}),onClick:function(){a.dispatch(f.a.setIsMultiViewerMode(!k))},dataElement:"toggleCompareModeButton"},s.a.createElement(l.a,{title:"action.comparePages",img:"icon-header-compare",isActive:k,role:"option"}),s.a.createElement("div",{className:"title"},t("action.sideBySideView")))),b.i&&!b.j?null:s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a,{dataElement:"viewControlsDivider3",className:"divider"}),s.a.createElement(E.a,{className:"row",onClick:y.a,dataElement:"fullScreenButton"},s.a.createElement(l.a,{img:O?"icon-header-full-screen-exit":"icon-header-full-screen",role:"option"}),s.a.createElement("div",{className:"title"},t(O?"action.exitFullscreen":"action.enterFullscreen")))))};t.default=T}}]);
//# sourceMappingURL=56.chunk.js.map