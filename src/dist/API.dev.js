"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _admin$contact$admin$;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (_admin$contact$admin$ = {
  admin: {
    login: "https://norbekov.herokuapp.com/admin/login",
    create: "https://norbekov.herokuapp.com/admin/create",
    "delete": "https://norbekov.herokuapp.com/admin/delete?id="
  },
  contact: {
    get: "https://norbekov.herokuapp.com/api/contacts/get"
  }
}, _defineProperty(_admin$contact$admin$, "admin", {
  get: "https://norbekov.herokuapp.com/contacts/get ",
  "delete": "https://norbekov.herokuapp.com/admin/delete?id=",
  login: "https://norbekov.herokuapp.com/admin/login"
}), _defineProperty(_admin$contact$admin$, "news", {
  create: "https://norbekov.herokuapp.com/api/news/create ",
  "delete": "https://norbekov.herokuapp.com/api/news/delete?id=",
  update: "https://norbekov.herokuapp.com/api/news/update/",
  updateImage: "https://norbekov.herokuapp.com/api/news/upload-img/",
  getNews: "https://norbekov.herokuapp.com/api/news/get",
  getNewsS: "https://norbekov.herokuapp.com/newsS/get"
}), _defineProperty(_admin$contact$admin$, "service", {
  create: "https://norbekov.herokuapp.com/api/service/create ",
  "delete": "https://norbekov.herokuapp.com/api/service/delete?id=",
  update: "https://norbekov.herokuapp.com/api/service/update/",
  updateImage: "https://norbekov.herokuapp.com/api/service/upload-img/",
  getService: "https://norbekov.herokuapp.com/service/get",
  getServices: "https://norbekov.herokuapp.com/services/get"
}), _defineProperty(_admin$contact$admin$, "table", {
  create: "https://norbekov.herokuapp.com/api/table/create",
  "delete": "https://norbekov.herokuapp.com/api/table/delete?id=",
  update: "https://norbekov.herokuapp.com/api/table/update/",
  updateImage: "https://norbekov.herokuapp.com/api/table/upload-img/",
  getTable: "https://norbekov.herokuapp.com/tables/get",
  getTables: "https://norbekov.herokuapp.com/tables/get"
}), _admin$contact$admin$);

exports["default"] = _default;