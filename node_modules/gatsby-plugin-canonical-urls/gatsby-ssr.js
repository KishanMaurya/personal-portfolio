"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _url = _interopRequireDefault(require("url"));

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents,
      _ref$pathname = _ref.pathname,
      pathname = _ref$pathname === void 0 ? "/" : _ref$pathname;

  if (pluginOptions && pluginOptions.siteUrl) {
    var siteUrl = pluginOptions.siteUrl.replace(/\/$/, "");

    var parsed = _url.default.parse("" + siteUrl + pathname);

    var stripQueryString = typeof pluginOptions.stripQueryString !== "undefined" ? pluginOptions.stripQueryString : false;
    var pageUrl = "";

    if (stripQueryString) {
      pageUrl = parsed.protocol + "//" + parsed.host + parsed.pathname;
    } else {
      pageUrl = parsed.href;
    }

    setHeadComponents([/*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      key: pageUrl,
      href: pageUrl,
      "data-baseprotocol": parsed.protocol,
      "data-basehost": parsed.host
    })]);
  }
};