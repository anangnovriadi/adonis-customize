'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const log = require('nangning-logger-color');

class Output {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle (ctx, next) {
    await next()
    const start = process.hrtime();
    
    ctx.response.response.on('finish', () => {
      const end = process.hrtime(start);
      const diff = ((end[0] * 1e9) + end[1]) / 1e6;
      try {
        log.info({ 
          ip: ctx.request.ip(),
          endpoint: ctx.request.url(),
          params: ctx.request.body,
          method: ctx._request_.request.method,
          responseTime: diff + ' second',
          results: ctx.response.lazyBody.content
        });
      } catch (err) {
          log.error({ 
            ip: ctx.request.ip(),
            endpoint: ctx.request.url(),
            params: ctx.request.body,
            method: ctx._request_.request.method,
            responseTime: diff + ' second',
            results: err
          });
      }
    })
  }
}

module.exports = Output
