
var url;

$(function () {
  
  var $browserUrl = $('#browser-url'),
    $browserUrlProxy = $('#browser-url-proxy');

  $browserUrl.on('keyup', function () {
    var urlText = $(this).val() || '',
      urlProxyText = config.proxifyURL(urlText);

    if (urlText !== '') {
      $browserUrlProxy.val(urlProxyText);
    }
  });

});
