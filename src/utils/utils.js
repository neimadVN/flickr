const FLICKR_API_PARAMS = require('./const.json').FLICKR_API_PARAMS;

const UTILS = {
  buildQueryURI : function (page = 1, per_page = 20) {
    const queryObj = {
      'method': FLICKR_API_PARAMS.method,
      'api_key': FLICKR_API_PARAMS.api_key,
      'extras': FLICKR_API_PARAMS.extras,
      'per_page': per_page,
      'page': page,
      'format': FLICKR_API_PARAMS.format,
      'nojsoncallback': FLICKR_API_PARAMS.nojsoncallback
    }
    const queryString = '?' + Object.keys(queryObj).map(key => key + '=' + queryObj[key]).join('&');
    
    return queryString;
  }
};

module.exports = UTILS;