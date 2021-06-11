exports.id = "src_components_GlassCard_index_jsx";
exports.ids = ["src_components_GlassCard_index_jsx"];
exports.modules = {

/***/ "./src/components/GlassCard/index.jsx":
/*!********************************************!*\
  !*** ./src/components/GlassCard/index.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/GlassCard/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\\xC1rea de Trabalho\\portfolio\\frontend\\src\\components\\GlassCard\\index.jsx";







function GlassCard() {
  const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useMotionValue)(0);
  const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useMotionValue)(0);
  const rotateX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(y, [-100, 100], [30, -30]);
  const rotateY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(x, [-100, 100], [-30, 30]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().background),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardContainer, {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().glassCard),
      style: {
        x,
        y,
        rotateX,
        rotateY,
        z: 100
      },
      drag: true,
      dragElastic: 0.16,
      dragConstraints: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      whileTap: {
        cursor: 'grabbing'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().entryCard),
          children: "<Entry Card />"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().code),
            children: ["11", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 55
            }, this), "100", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 64
            }, this), "011", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 73
            }, this), "10"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().avatarCircle),
          src: "/images/circle-avatar.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            children: "Gabriel Luiz da Silva"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().subtitle),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              target: "_blank",
              href: "https://github.com/gabrielluizs1996",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon),
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faGithub
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              target: "_blank",
              href: "https://github.com/gabrielluizs1996",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                children: "gabrielluizs1996"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().footer),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().contentFooter),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon),
            icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faReact
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "Desenvolvedor"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              style: {
                color: 'var(--blue)'
              },
              children: "React.Js"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().linkedin),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            target: "_blank",
            href: "https://www.linkedin.com/in/gabrielluizs1996/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon),
              icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faLinkedin
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

const CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div)`
    height: 291px;
    width: 480px;
    border-radius: 25px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0.5rem;

    //Glassmorphism
    background: rgba(202, 172, 255, 0.1);
    box-shadow: inset 0px 0px 50px 0px rgba(202, 172, 255, 0.3);
    /* box-shadow: 10px 10px 20px -15px rgba(202, 172, 255, 0.3); */
    backdrop-filter: blur(7px);
    border-right: 3px solid rgba(202, 172, 255, 0.3);
    border-bottom: 2px solid rgba(202, 172, 255, 0.3);
`;
/* harmony default export */ __webpack_exports__["default"] = (GlassCard);

/***/ }),

/***/ "./src/components/GlassCard/styles.module.scss":
/*!*****************************************************!*\
  !*** ./src/components/GlassCard/styles.module.scss ***!
  \*****************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"background": "styles_background__UukDB",
	"title": "styles_title__3AkKq",
	"entryCard": "styles_entryCard__3AENs",
	"code": "styles_code__1vD6X",
	"content": "styles_content__OdPOq",
	"avatarCircle": "styles_avatarCircle__2r9Ll",
	"subtitle": "styles_subtitle__1I-7A",
	"icon": "styles_icon__26lCT",
	"footer": "styles_footer__3VZue",
	"contentFooter": "styles_contentFooter__1i-fl",
	"linkedin": "styles_linkedin__2F24d"
};


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0dsYXNzQ2FyZC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9HbGFzc0NhcmQvc3R5bGVzLm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbIkdsYXNzQ2FyZCIsIngiLCJ1c2VNb3Rpb25WYWx1ZSIsInkiLCJyb3RhdGVYIiwidXNlVHJhbnNmb3JtIiwicm90YXRlWSIsInN0eWxlcyIsInoiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJjdXJzb3IiLCJmYUdpdGh1YiIsImZhUmVhY3QiLCJjb2xvciIsImZhTGlua2VkaW4iLCJDYXJkQ29udGFpbmVyIiwic3R5bGVkIiwibW90aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsR0FBcUI7QUFDakIsUUFBTUMsQ0FBQyxHQUFHQyw2REFBYyxDQUFDLENBQUQsQ0FBeEI7QUFDQSxRQUFNQyxDQUFDLEdBQUdELDZEQUFjLENBQUMsQ0FBRCxDQUF4QjtBQUNBLFFBQU1FLE9BQU8sR0FBR0MsMkRBQVksQ0FBQ0YsQ0FBRCxFQUFJLENBQUMsQ0FBQyxHQUFGLEVBQU8sR0FBUCxDQUFKLEVBQWlCLENBQUMsRUFBRCxFQUFLLENBQUMsRUFBTixDQUFqQixDQUE1QjtBQUNBLFFBQU1HLE9BQU8sR0FBR0QsMkRBQVksQ0FBQ0osQ0FBRCxFQUFJLENBQUMsQ0FBQyxHQUFGLEVBQU8sR0FBUCxDQUFKLEVBQWlCLENBQUMsQ0FBQyxFQUFGLEVBQU0sRUFBTixDQUFqQixDQUE1QjtBQUdBLHNCQUNJO0FBQUssYUFBUyxFQUFFTSx1RUFBaEI7QUFBQSwyQkFDSSw4REFBQyxhQUFEO0FBQWUsZUFBUyxFQUFFQSxzRUFBMUI7QUFDSSxXQUFLLEVBQUU7QUFBRU4sU0FBRjtBQUFLRSxTQUFMO0FBQVFDLGVB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QUFBLGNBM0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQThDSDs7QUFFRCxNQUFNQyxhQUFhLEdBQUdDLHdEQUFNLENBQUNDLHFEQUFELENBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWpCQTtBQW1CQSwrREFBZXBCLFNBQWYsRTs7Ozs7Ozs7OztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNyY19jb21wb25lbnRzX0dsYXNzQ2FyZF9pbmRleF9qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IG1vdGlvbiwgdXNlTW90aW9uVmFsdWUsIHVzZVRyYW5zZm9ybSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCB7IGZhTGlua2VkaW4sIGZhUmVhY3QsIGZhR2l0aHViIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5cclxuZnVuY3Rpb24gR2xhc3NDYXJkKCkge1xyXG4gICAgY29uc3QgeCA9IHVzZU1vdGlvblZhbHVlKDApXHJcbiAgICBjb25zdCB5ID0gdXNlTW90aW9uVmFsdWUoMClcclxuICAgIGNvbnN0IHJvdGF0ZVggPSB1c2VUcmFuc2Zvcm0oeSwgWy0xMDAsIDEwMF0sIFszMCwgLTMwXSlcclxuICAgIGNvbnN0IHJvdGF0ZVkgPSB1c2VUcmFuc2Zvcm0oeCwgWy0xMDAsIDEwMF0sIFstMzAsIDMwXSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tncm91bmR9PlxyXG4gICAgICAgICAgICA8Q2FyZENvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5nbGFzc0NhcmR9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB4LCB5LCByb3RhdGVYLCByb3RhdGVZLCB6OiAxMDAgfX1cclxuICAgICAgICAgICAgICAgIGRyYWdcclxuICAgICAgICAgICAgICAgIGRyYWdFbGFzdGljPXswLjE2fVxyXG4gICAgICAgICAgICAgICAgZHJhZ0NvbnN0cmFpbnRzPXt7IHRvcDogMCwgbGVmdDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCB9fVxyXG4gICAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgY3Vyc29yOiAnZ3JhYmJpbmcnIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5lbnRyeUNhcmR9PntcIjxFbnRyeSBDYXJkIC8+XCJ9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuY29kZX0+MTE8YnIgLz4xMDA8YnIgLz4wMTE8YnIgLz4xMDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJDaXJjbGV9IHNyYz0nL2ltYWdlcy9jaXJjbGUtYXZhdGFyLnBuZycgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+R2FicmllbCBMdWl6IGRhIFNpbHZhPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dhYnJpZWxsdWl6czE5OTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17c3R5bGVzLmljb259IGljb249e2ZhR2l0aHVifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9nYWJyaWVsbHVpenMxOTk2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPmdhYnJpZWxsdWl6czE5OTY8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudEZvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gaWNvbj17ZmFSZWFjdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5EZXNlbnZvbHZlZG9yPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLWJsdWUpJyB9fT5SZWFjdC5KczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua2VkaW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2dhYnJpZWxsdWl6czE5OTYvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17c3R5bGVzLmljb259IGljb249e2ZhTGlua2VkaW59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NhcmRDb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IENhcmRDb250YWluZXIgPSBzdHlsZWQobW90aW9uLmRpdilgXHJcbiAgICBoZWlnaHQ6IDI5MXB4O1xyXG4gICAgd2lkdGg6IDQ4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWFyZ2luOiAwLjVyZW07XHJcblxyXG4gICAgLy9HbGFzc21vcnBoaXNtXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwMiwgMTcyLCAyNTUsIDAuMSk7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDUwcHggMHB4IHJnYmEoMjAyLCAxNzIsIDI1NSwgMC4zKTtcclxuICAgIC8qIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IC0xNXB4IHJnYmEoMjAyLCAxNzIsIDI1NSwgMC4zKTsgKi9cclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgcmdiYSgyMDIsIDE3MiwgMjU1LCAwLjMpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjAyLCAxNzIsIDI1NSwgMC4zKTtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2xhc3NDYXJkXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJhY2tncm91bmRcIjogXCJzdHlsZXNfYmFja2dyb3VuZF9fVXVrREJcIixcblx0XCJ0aXRsZVwiOiBcInN0eWxlc190aXRsZV9fM0FrS3FcIixcblx0XCJlbnRyeUNhcmRcIjogXCJzdHlsZXNfZW50cnlDYXJkX18zQUVOc1wiLFxuXHRcImNvZGVcIjogXCJzdHlsZXNfY29kZV9fMXZENlhcIixcblx0XCJjb250ZW50XCI6IFwic3R5bGVzX2NvbnRlbnRfX09kUE9xXCIsXG5cdFwiYXZhdGFyQ2lyY2xlXCI6IFwic3R5bGVzX2F2YXRhckNpcmNsZV9fMnI5TGxcIixcblx0XCJzdWJ0aXRsZVwiOiBcInN0eWxlc19zdWJ0aXRsZV9fMUktN0FcIixcblx0XCJpY29uXCI6IFwic3R5bGVzX2ljb25fXzI2bENUXCIsXG5cdFwiZm9vdGVyXCI6IFwic3R5bGVzX2Zvb3Rlcl9fM1ZadWVcIixcblx0XCJjb250ZW50Rm9vdGVyXCI6IFwic3R5bGVzX2NvbnRlbnRGb290ZXJfXzFpLWZsXCIsXG5cdFwibGlua2VkaW5cIjogXCJzdHlsZXNfbGlua2VkaW5fXzJGMjRkXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9