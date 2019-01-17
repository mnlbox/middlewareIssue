'use strict';

/**
 * Custom responses hook (it's based on ./node_modules/strapi/lib/middlewares/responses/index.js from core)
 */

const _ = require('lodash');

module.exports = () => {
  return {
    /**
     * Initialize the hook
     */

    initialize: function(cb) {
      strapi.app.use(async (ctx, next) => {
        await next();
        // Set X-Powered-By header.
        ctx.remove('X-Powered-By');
        ctx.set('X-Powered-By', 'MNLBOX');     
        ctx.set('other-header', 'MNLBOX');  
      });
      cb();
    }
  };
};
