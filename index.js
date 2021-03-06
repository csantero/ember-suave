/* jshint node: true */
'use strict';
var JSCSFilter = require('broccoli-jscs');
var jscsrcBuilder = require('./lib/jscsrc-builder');

module.exports = {
  name: 'ember-suave',

  lintTree: function (type, tree) {
    var jscsOptions = this.app.options.jscsOptions || {};
    jscsOptions.configPath = jscsrcBuilder(this.project);
    return new JSCSFilter(tree, jscsOptions);
  },

  included: function(app) {
    this._super.included.apply(this, arguments);
    if (app.tests) {
      app.import('vendor/ember-suave/qunit-configuration.js', { type: 'test' });
      app.import('vendor/ember-suave/test-loader.js', { type: 'test' });
    }
  }

};
