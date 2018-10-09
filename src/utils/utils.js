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
  },

  buildPhotoDetailQueryURI: function (photoId) {
    return '?method=flickr.photos.getSizes&api_key=' + FLICKR_API_PARAMS.api_key + '&photo_id=' + photoId + '&format=json&nojsoncallback=1';
  },

  buildPhotoDetail2QueryURI: function (photoId) {
    return '?method=flickr.photos.getInfo&api_key=' + FLICKR_API_PARAMS.api_key + '&photo_id=' + photoId + '&format=json&nojsoncallback=1';
  },

  buildTagSearchQuery:function (perpage = 20, page = 1, tag) {
    return '?method=flickr.photos.search&api_key=' + FLICKR_API_PARAMS.api_key + '&tags=' + tag + '&extras=' + FLICKR_API_PARAMS.extras + '&per_page=' + perpage + '&page=' + page + '&format=json&nojsoncallback=1'
  }

};

module.exports = UTILS;