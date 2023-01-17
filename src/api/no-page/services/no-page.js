'use strict';

/**
 * no-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::no-page.no-page');
