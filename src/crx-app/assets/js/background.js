
(function () {
  'use strict';


  /**
   * Entry point for the app.
   */
  function crxInit() {
    chrome.runtime.onMessageExternal.addListener(crxExternalMessageHandler);
    chrome.app.runtime.onLaunched.addListener(crxAppLaunchHandler);
  }


  /**
   * Receiver of all runtime messages originating from outside this app.
   */
  function crxExternalMessageHandler(msg, sender) {

  }


  /**
   * 
   */
  function appWindowCreatedCallback(win, mediaEl) {
    win.onload = function () {
      //win.document.body.innerHTML = JSON.stringify(appWindow.contentWindow.msg, null, 4);
      win.document.getElementById('media-container').innerHTML = mediaEl;
    };
  }


  /**
   * Called when the app is initially launched.
   */
  function crxAppLaunchHandler() {
    var width = 1000,
      height = 760,
      top = (screen.availHeight - height) / 2,
      left = (screen.availWidth - width) / 2,
      appWindowPage = '/window.html',
      appWindowOptions = {
        // If set, will always open the same window and remember its position/size.
        //id: chrome.runtime.id, // Use in order to remember previous position

        // FrameOptions.
        frame: {
          //type: "none",
          color: "#ffffff"
        },

        // Set the initial BoundsSpecifications.
        innerBounds: {
          top: top,
          left: left,
          width: width,
          height: height,
          minWidth: width,
          minHeight: height
        }
      };

    // Create main window of the app.
    chrome.app.window.create(appWindowPage, appWindowOptions, function (appWindow) {
      appWindowCreatedCallback(appWindow.contentWindow, mediaEl);
    });
  }


  // Initialize our app.
  crxInit();

}());
