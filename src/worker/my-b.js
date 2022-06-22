/*! art-template@4.13.1 for browser | https://github.com/aui/art-template */
!function (global, func) {
    console.log('exports:', global.exports, ' module:', global.module)
    "object" == typeof exports && "object" == typeof module ? 
        module.exports = func() 
        : "function" == typeof define && define.amd ? 
            define([], func) 
            : "object" == typeof exports ? 
                exports.template = func() 
                : global.template = func() 
}("undefined" != typeof self ? self : this, function (){
    return {
        say: function(){console.log('aaa')}
    };
});