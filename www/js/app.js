// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('auth', {
    url: '/auth',
    templateUrl: 'templates/auth.html',
    controller: 'authCtrl'
  })

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.request', {
    url: '/request',
    views: {
      'tab-request': {
        templateUrl: 'templates/tab-request.html',
        controller: 'requestCtrl'
      }
    }
  })

  .state('tab.requestlist', {
    url: '/requestlist',
    views: {
      'tab-request': {
        templateUrl: 'templates/tab-requestlist.html',
        controller: 'requestCtrl'
      }
    }
  })

  .state('tab.requestlistdetails', {
    url: '/requestlistdetails',
    views: {
      'tab-request': {
        templateUrl: 'templates/tab-requestlistdetails.html',
        controller: 'requestCtrl'
      }
    }
  })

  .state('tab.getlist', {
    url: '/getlist',
    views: {
      'tab-getlist': {
        templateUrl: 'templates/tab-getlist.html',
        controller: 'getlistCtrl'
      }
    }
  })

    .state('tab.getlistdetails', {
      url: '/getlistdetails',
      views: {
        'tab-getlist': {
          templateUrl: 'templates/tab-getlistdetails.html',
          controller: 'getlistCtrl'
        }
      }
    })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/auth');

});
