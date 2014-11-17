
var config = {

  /**
   * Reverse the hostname (for demonstration purposes).
   */
  proxifyURL: function (urlText) {
    var url,
      revHostname;

      try {
        url = new URL(urlText);
      } catch (e) {
        console.error('Unable to parse URL.', e);

        return '';
      }

    revHostname = url.hostname.split('').reverse().join('');

    return url.protocol + '//' +
      revHostname +
      url.port +
      url.pathname +
      url.search +
      url.hash;
  },


  /**
   * Un-reverse the hostname (for demonstration purposes).
   */
  unproxifyURL: function (urlText) {
    return config.mangleURL(urlText);
  }

};
