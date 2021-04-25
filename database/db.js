'use strict';

const Database = require("@replit/database");

const db = new Database();

exports.setValue = function setValue(key, value) {
  return db.set(key, value);
}

exports.getValue = function getValue(key) {
  return new Promise((resolve) => {
    db.get(key).then(value => {
      resolve(value);
    })
  })
}

exports.deleteValue = function deleteValue(key) {
  return db.delete(key)
}

exports.listValues = function listValue(prefix) {
  return new Promise((resolve) => {
    db.list(prefix).then(matches => {
      resolve(matches);
    })
  })
}

exports.listAllKeys = function listAllKeys() {
  return new Promise((resolve) => {
    db.list().then(matches => {
      resolve(matches);
    })
  })
}
