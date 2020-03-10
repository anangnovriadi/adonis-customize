'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const fs = require('fs');
const path = require('path');
const output = {};

class ResponseFormat {

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle (ctx, next) {
    await next()

    const getJson = fs.readFileSync(path.join(__dirname, '../../message.json'));
    const getJsonParse = JSON.parse(getJson);
    const name = ctx.response.lazyBody.content.name;
    output.code = getJsonParse[name].code;
    output.message = getJsonParse[name].message;
    output.data = ctx.response.lazyBody.content.data;

    return ctx.response.send(output);
  }
}

module.exports = ResponseFormat
