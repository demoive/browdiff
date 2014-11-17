
var webviewProxied = document.getElementById('frame-web-proxied'),
  webviewStandard = document.getElementById('frame-web-standard');

  $browserButtonGo = $('#browser-go'),
  $browserButtonBack = $('#browser-back'),
  $browserButtonForward = $('#browser-forward'),
  $browserButtonRefreshStop = $('#browser-refresh'),
  $browserInputUrl = $('#browser-url'),
  $browserInputUrlProxy = $('#browser-url-proxy');


  /**
   * 
   */
  $browserButtonGo.on('click', function () {
    webviewProxied.src = $browserInputUrlProxy.val();
    webviewStandard.src = $browserInputUrl.val();

    return false;
  });


  /**
   * 
   */
  $browserButtonBack.on('click', function () {
    // <webview>.canGoBack()
    webviewProxied.go(-1);
    webviewStandard.go(-1);

    return false;
  });


  /**
   * 
   */
  $browserButtonForward.on('click', function () {
    // <webview>.canGoForward()
    webviewProxied.go(1);
    webviewStandard.go(1);

    return false;
  });


  /**
   * 
   */
  $browserButtonRefreshStop.on('click', function () {
    if (webviewProxied.loading ||
        webviewStandard.loading) {
      webviewProxied.reload();
      webviewStandard.reload();
    } else {
      webviewProxied.stop();
      webviewStandard.stop();
    }
  });


function loadcommit(url, isTopLevel) {
  if (isTopLevel) {
    // OTHERwebview.src = config.proxifyURL(url);
    // OTHERwebview.src = config.unproxifyURL(url);
  }
}


function loadstart() {
  // this.START loading indicator
}


function loadstop() {
  // this.STOP loading indicator
}



$(function () {
  //console.log(webviewProxied.getUserAgent());
  var ua = 'Mozilla/5.0 (Linux; U; Android 2.3.6; en-us; Nexus S Build/GRK39F) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';

  webviewProxied.setUserAgentOverride(ua);
  webviewStandard.setUserAgentOverride(ua);

  webviewProxied.addEventListener('loadcommit', loadcommit);
  webviewProxied.addEventListener('loadstart', loadstart);
  webviewProxied.addEventListener('loadstop', loadstop);

  webviewStandard.addEventListener('loadcommit', loadcommit);
  webviewStandard.addEventListener('loadstart', loadstart);
  webviewStandard.addEventListener('loadstop', loadstop);
});
