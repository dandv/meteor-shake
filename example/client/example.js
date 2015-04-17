Session.setDefault('watching', true);

onShake = function onShake() {
  Shakes.insert({
    timestamp: new Date()
  });
  alert('Shake!');
};

Template.body.helpers({
  client: function () {
    if (Meteor.isCordova) return 'Cordova';
    if (Meteor.isClient) return 'web browser';
    return 'Unknown client type';
  }
});

Template.shakes.helpers({
  shakes: function () {
    return Shakes.find({}, { sort: { timestamp: -1 } } );
  },
  watching: function () {
    return Session.get('watching').toString();
  }
});

Template.shakes.events({
  'click button': function () {
    // toggle listening for shakes when button is clicked
    Session.set('watching', !Session.get('watching'));
  }
});

Meteor.startup(function () {
  shake.startWatch(onShake, 15);
  // shake.ff();
  // regcergvareg.ff();
  alert(shake);
});
