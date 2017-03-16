'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global',
  function ($scope, Global) {
    $scope.global = Global;
    $scope.sites = [{
      'name': 'makeapoint',
      'text': 'Makeapoint is a platform to craft and fine-tune ideas and messages providing a graphical experience which brough an offline methodlogy online',
      'author': 'Linnovate',
      'link': 'http://www.linnovate.net',
      'image': '/meanStarter/assets/img/makeapoint.png'
    }, {
      'name': 'Cactus Intranet',
      'text': 'Cactus Intranet is an enterprise social network with features like real-time newsfeed, notifications, groups, events, polls, referral system etc. The system has role based permission system, allowing different stakeholders access and controls relevant to them.',
      'author': 'QED42',
      'link': 'http://www.qed42.com',
      'image': '/meanStarter/assets/img/cactus.png'
    }];
    $scope.packages = {
      'gmap': {
        'name': 'gmap',
        'text': 'gmap lets you add geographical information to your applications objects',
        'author': 'Linnovate',
        'link': 'http://www.qed42.com',
        'image': '/meanStarter/assets/img/gmap.png'
      },
      'upload': {
        'name': 'Upload',
        'text': 'Upload lets you add upload functionality to MEAN stack',
        'author': 'Linnovate',
        'link': 'http://www.linnovate.net',
        'image': 'http://cdn.designbyhumans.com/pictures/blog/09-2013/pop-culture-cats/Pop_Culture_Cats_Hamilton_Hipster.jpg'
      },
      'socket': {
        'name': 'Socket',
        'text': 'Socket.io support',
        'author': 'Linnovate',
        'link': 'http://www.linnovate.net',
        'image': 'http://cdn.designbyhumans.com/pictures/blog/09-2013/pop-culture-cats/Pop_Culture_Cats_Hamilton_Hipster.jpg'
      }
    };

    $scope.links = [{
      text: 'Link 1',
      count: 10,
      href: 'https://www.google.co.in/?gfe_rd=cr&ei=UGfKWPPLPKry8Afnwp2QBw#q=1&*'
    }, {
      text: 'Link 2',
      count: 20,
      href: 'https://www.google.co.in/?gfe_rd=cr&ei=UGfKWPPLPKry8Afnwp2QBw#q=2&*'
    }, {
      text: 'Link 3',
      count: 30,
      href: 'https://www.google.co.in/?gfe_rd=cr&ei=UGfKWPPLPKry8Afnwp2QBw#q=3&*'
    }, {
      text: 'Link 4',
      count: 40,
      href: 'https://www.google.co.in/?gfe_rd=cr&ei=UGfKWPPLPKry8Afnwp2QBw#q=4&*'
    }, {
      text: 'Link 5',
      count: 50,
      href: 'https://www.google.co.in/?gfe_rd=cr&ei=UGfKWPPLPKry8Afnwp2QBw#q=5&*'
    }, {
      text: 'Link 6',
      count: 60,
      href: 'https://www.google.co.in/?gfe_rd=cr&ei=UGfKWPPLPKry8Afnwp2QBw#q=6&*'
    }];

    $scope.$watch(function () {
      for (var i = 0; i < $scope.sites.length; i += 1) {
        if ($scope.sites[i].active) {
          return $scope.sites[i];
        }
      }
    }, function (currentSlide, previousSlide) {
      if (currentSlide !== previousSlide) {
        console.log('currentSlide:', currentSlide);
      }
    });
  }
]);
