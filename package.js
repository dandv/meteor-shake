Package.describe({
  name: 'shake:shake',
  version: '0.0.1',
  summary: 'Detect shake events in mobile browsers or Cordova apps',
  git: 'https://github.com/dandv/meteor-shake',
  documentation: 'README.md'
});

Cordova.depends({
  'uk.co.ilee.shake': '0.3.1'
});

Package.onUse(function(api) {
  // api.versionsFrom('1.1.0.2');
  api.export('shake', 'client');
  api.addFiles(['shake.js/shake.js', 'web.browser-export.js'], 'web.browser');
});
