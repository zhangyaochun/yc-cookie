'use strict';

//serialize
exports.serialize = function(name, val, opts) {

    //arguments check
    if (arguments.length < 2) {
        console.error('at least two params');
        return false;
    }

    opts = opts || {};

    var result = [name + '=' + encodeURIComponent(val)];

    //fix http headers
    if (opts.maxAge) {
        result.push('Max-Age=' + opts.maxAge);
    }

    if (opts.domain) {
        result.push('Domain=' + opts.domain);
    }

    if (opts.path) {
        result.push('Path=' + opts.path);
    }

    if (opts.expires) {
        result.push('Expires=' + opts.expires.toUTCString());
    }

    if (opts.httpOnly) {
        result.push('HttpOnly');
    }

    if (opts.secure) {
        result.push('Secure');
    }

    //change array to string
    return result.join('; ');
};

