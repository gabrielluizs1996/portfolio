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
    /* box-shadow: inset 0px 0px 50px 0px rgba(202, 172, 255, 0.3); */
    box-shadow: 10px 10px 20px -15px rgba(202, 172, 255, 0.3);
    backdrop-filter: blur(7px);
    border-right: 1px solid rgba(255,255,255,0.05);
    border-bottom: 1px solid rgba(255,255,255,0.05);

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
	"glassCard": "styles_glassCard__3MsqR",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0dsYXNzQ2FyZC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9HbGFzc0NhcmQvc3R5bGVzLm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbIkdsYXNzQ2FyZCIsIngiLCJ1c2VNb3Rpb25WYWx1ZSIsInkiLCJyb3RhdGVYIiwidXNlVHJhbnNmb3JtIiwicm90YXRlWSIsInN0eWxlcyIsInoiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJjdXJzb3IiLCJmYUdpdGh1YiIsImZhUmVhY3QiLCJjb2xvciIsImZhTGlua2VkaW4iLCJDYXJkQ29udGFpbmVyIiwic3R5bGVkIiwibW90aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsR0FBcUI7QUFDakIsUUFBTUMsQ0FBQyxHQUFHQyw2REFBYyxDQUFDLENBQUQsQ0FBeEI7QUFDQSxRQUFNQyxDQUFDLEdBQUdELDZEQUFjLENBQUMsQ0FBRCxDQUF4QjtBQUNBLFFBQU1FLE9BQU8sR0FBR0MsMkRBQVksQ0FBQ0YsQ0FBRCxFQUFJLENBQUMsQ0FBQyxHQUFGLEVBQU8sR0FBUCxDQUFKLEVBQWlCLENBQUMsRUFBRCxFQUFLLENBQUMsRUFBTixDQUFqQixDQUE1QjtBQUNBLFFBQU1HLE9BQU8sR0FBR0QsMkRBQVksQ0FBQ0osQ0FBRCxFQUFJLENBQUMsQ0FBQyxHQUFGLEVBQU8sR0FBUCxDQUFKLEVBQWlCLENBQUMsQ0FBQyxFQUFGLEVBQU0sRUFBTixDQUFqQixDQUE1QjtBQUdBLHNCQUNJO0FBQUssYUFBUyxFQUFFTSx1RUFBaEI7QUFBQSwyQkFDSSw4REFBQyxhQUFEO0FBQWUsZUFBUyxFQUFFQSxzRUFBMUI7QUFDSSxXQUFLLEVBQUU7QUFBRU4sU0FBRjtBQUFLRSxTQUFMO0FBQVFDLGVB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QUFBLGNBM0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQThDSDs7QUFFRCxNQUFNQyxhQUFhLEdBQUdDLHdEQUFNLENBQUNDLHFEQUFELENBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBbEJBO0FBb0JBLCtEQUFlcEIsU0FBZixFOzs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzcmNfY29tcG9uZW50c19HbGFzc0NhcmRfaW5kZXhfanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBtb3Rpb24sIHVzZU1vdGlvblZhbHVlLCB1c2VUcmFuc2Zvcm0gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5pbXBvcnQgeyBmYUxpbmtlZGluLCBmYVJlYWN0LCBmYUdpdGh1YiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuXHJcbmZ1bmN0aW9uIEdsYXNzQ2FyZCgpIHtcclxuICAgIGNvbnN0IHggPSB1c2VNb3Rpb25WYWx1ZSgwKVxyXG4gICAgY29uc3QgeSA9IHVzZU1vdGlvblZhbHVlKDApXHJcbiAgICBjb25zdCByb3RhdGVYID0gdXNlVHJhbnNmb3JtKHksIFstMTAwLCAxMDBdLCBbMzAsIC0zMF0pXHJcbiAgICBjb25zdCByb3RhdGVZID0gdXNlVHJhbnNmb3JtKHgsIFstMTAwLCAxMDBdLCBbLTMwLCAzMF0pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrZ3JvdW5kfT5cclxuICAgICAgICAgICAgPENhcmRDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuZ2xhc3NDYXJkfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgeCwgeSwgcm90YXRlWCwgcm90YXRlWSwgejogMTAwIH19XHJcbiAgICAgICAgICAgICAgICBkcmFnXHJcbiAgICAgICAgICAgICAgICBkcmFnRWxhc3RpYz17MC4xNn1cclxuICAgICAgICAgICAgICAgIGRyYWdDb25zdHJhaW50cz17eyB0b3A6IDAsIGxlZnQ6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAgfX1cclxuICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7IGN1cnNvcjogJ2dyYWJiaW5nJyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuZW50cnlDYXJkfT57XCI8RW50cnkgQ2FyZCAvPlwifTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmNvZGV9PjExPGJyIC8+MTAwPGJyIC8+MDExPGJyIC8+MTA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyQ2lyY2xlfSBzcmM9Jy9pbWFnZXMvY2lyY2xlLWF2YXRhci5wbmcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkdhYnJpZWwgTHVpeiBkYSBTaWx2YTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9nYWJyaWVsbHVpenMxOTk2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBpY29uPXtmYUdpdGh1Yn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ2FicmllbGx1aXpzMTk5NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5nYWJyaWVsbHVpenMxOTk2PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRGb290ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17c3R5bGVzLmljb259IGljb249e2ZhUmVhY3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+RGVzZW52b2x2ZWRvcjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS1ibHVlKScgfX0+UmVhY3QuSnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmtlZGlufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9nYWJyaWVsbHVpenMxOTk2L1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBpY29uPXtmYUxpbmtlZGlufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9DYXJkQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxyXG4gICAgaGVpZ2h0OiAyOTFweDtcclxuICAgIHdpZHRoOiA0ODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbjogMC41cmVtO1xyXG5cclxuICAgIC8vR2xhc3Ntb3JwaGlzbVxyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMDIsIDE3MiwgMjU1LCAwLjEpO1xyXG4gICAgLyogYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA1MHB4IDBweCByZ2JhKDIwMiwgMTcyLCAyNTUsIDAuMyk7ICovXHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCAtMTVweCByZ2JhKDIwMiwgMTcyLCAyNTUsIDAuMyk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcclxuXHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdsYXNzQ2FyZFxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJiYWNrZ3JvdW5kXCI6IFwic3R5bGVzX2JhY2tncm91bmRfX1V1a0RCXCIsXG5cdFwiZ2xhc3NDYXJkXCI6IFwic3R5bGVzX2dsYXNzQ2FyZF9fM01zcVJcIixcblx0XCJ0aXRsZVwiOiBcInN0eWxlc190aXRsZV9fM0FrS3FcIixcblx0XCJlbnRyeUNhcmRcIjogXCJzdHlsZXNfZW50cnlDYXJkX18zQUVOc1wiLFxuXHRcImNvZGVcIjogXCJzdHlsZXNfY29kZV9fMXZENlhcIixcblx0XCJjb250ZW50XCI6IFwic3R5bGVzX2NvbnRlbnRfX09kUE9xXCIsXG5cdFwiYXZhdGFyQ2lyY2xlXCI6IFwic3R5bGVzX2F2YXRhckNpcmNsZV9fMnI5TGxcIixcblx0XCJzdWJ0aXRsZVwiOiBcInN0eWxlc19zdWJ0aXRsZV9fMUktN0FcIixcblx0XCJpY29uXCI6IFwic3R5bGVzX2ljb25fXzI2bENUXCIsXG5cdFwiZm9vdGVyXCI6IFwic3R5bGVzX2Zvb3Rlcl9fM1ZadWVcIixcblx0XCJjb250ZW50Rm9vdGVyXCI6IFwic3R5bGVzX2NvbnRlbnRGb290ZXJfXzFpLWZsXCIsXG5cdFwibGlua2VkaW5cIjogXCJzdHlsZXNfbGlua2VkaW5fXzJGMjRkXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9