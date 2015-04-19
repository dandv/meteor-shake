Session.setDefault('watching', true);
Session.setDefault('shakesCount', 0);
Session.setDefault('sensitivity', 15);

// without debounce, every actual user shake will fire the callback twice right away
onShake = _.debounce(function onShake() {
  Session.set('shakesCount', Session.get('shakesCount') + 1);
}, 750, true);  // fire the shake as soon as it occurs, but not again if less than 750ms have passed; 500 was too little

Template.body.helpers({
  client: function () {
    if (Meteor.isCordova) return 'Cordova';
    if (Meteor.isClient) return 'web browser';
    return 'Unknown client type';
  }
});

Template.body.helpers({
  shakes: function () {
    return Session.get('shakesCount');
  },
  watching: function () {
    return Session.get('watching').toString();
  }
});

Template.body.events({
  'click button': function () {
    // toggle listening for shakes when button is clicked
    Session.set('watching', !Session.get('watching'));
    if (Session.get('watching'))
      shake.startWatch(onShake, Session.get('sensitivity'));
    else
      shake.stopWatch();
  }
});

Meteor.startup(function () {
  if (shake && typeof shake.startWatch === 'function') {
    shake.startWatch(onShake, Session.get('sensitivity'));
  } else {
    alert('Shake not supported');
  }
});
