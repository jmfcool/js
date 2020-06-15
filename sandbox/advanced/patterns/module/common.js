var $ = require('jquery');
var _ = require('underscore');

//    methods
function a(){};    //    private because it's omitted from module.exports (see below)
function b(){};    //    public because it's defined in module.exports
function c(){};    //    public because it's defined in module.exports

//    exposed public methods
module.exports = {
    b: b,
    c: c
};
