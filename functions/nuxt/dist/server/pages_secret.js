exports.ids = [3];
exports.modules = {

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/secret.vue?vue&type=template&id=4c1fc722&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<h1 class=\"text-3xl\">This is secret info</h1>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/secret.vue?vue&type=template&id=4c1fc722&

// EXTERNAL MODULE: external "jwt-decode"
var external_jwt_decode_ = __webpack_require__(22);
var external_jwt_decode_default = /*#__PURE__*/__webpack_require__.n(external_jwt_decode_);

// CONCATENATED MODULE: ./helpers/index.js


var cookieparser = __webpack_require__(23);

function getUserFromCookie(req) {
  if (false) {}
  if (!req.headers.cookie) return;

  if (req.headers.cookie) {
    const parsed = cookieparser.parse(req.headers.cookie);
    const accessTokenCookie = parsed.access_token;
    if (!accessTokenCookie) return;
    const decodedToken = external_jwt_decode_default()(accessTokenCookie);
    if (!decodedToken) return;
    return decodedToken;
  }
}
function getUserFromSession(req) {
  console.log('[CHECK-AUTH] - checking if user is stored in session');
  return req.session ? req.session.userId : null;
}
// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/secret.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var secretvue_type_script_lang_js_ = ({
  asyncData(context) {
    let {
      req,
      redirect
    } = context;

    if (true) {
      console.log(req.headers);

      if (req && req.headers) {
        const user = getUserFromCookie(req);

        if (!user) {
          redirect('/login');
        }
      } else {
        redirect('/login');
      }
    } else {}
  }

});
// CONCATENATED MODULE: ./pages/secret.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_secretvue_type_script_lang_js_ = (secretvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/secret.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_secretvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "25a384e6"
  
)

/* harmony default export */ var secret = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=pages_secret.js.map