angular.module('mustlovedogs', ['ngRoute', 'ngAnimate'])
.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/home', {
				templateUrl: 'views/index.html',
				controller: 'HomeCtrl'
			}).
			when('/settings', {
				templateUrl: 'views/settings.html',
				controller: 'SettingsCtrl'
			}).
			otherwise({
				redirectTo: '/home'
	});
}]);

 /*NAVIGATION MODULE*/
angular.module('nightweb.nav', ['ngTouch', 'ui.bootstrap'])
.controller('NavBarCtrl', ['$scope', '$location',
  function ($scope, $location) {
    $scope.isCollapsed = true;
	$scope.go = function(path) {
        $scope.isCollapsed = true;
        $location.path('/' + path);
    }
	$scope.isActive = function(route) {
        return route === $location.path();
    }
}]);

angular.module('nightweb.calendar', ['ngTouch', 'ui.bootstrap', 'club-calendar'])
.controller('CalendarCtrl', ['$scope',
  function ($scope) {

	$scope.showCalendar = false;

	$scope.gotoslide = function(event) {
		var elementPos = $scope.slides.map(function(x) {return x.id; }).indexOf(event.event.id);
		$scope.slides[elementPos].active=true;
		$scope.showCalendar = false;
	}

	$scope.calendarOptions = {
		minDate: new Date(),
		maxDate: new Date([2016, 12, 31]), //change this so it shows to the year end of current +1
		dayNamesLength: 2,
		eventClick: $scope.gotoslide
	};
}]);


 /*EVENTS MODULE*/
angular.module('nightweb.events', ['ngSanitize', 'ngTouch', 'ui.bootstrap', 'carouseltemplates', 'eventmodaltemplate', 'ticketmodaltemplate'])
.controller('EventCarouselCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('includes/json.clubevents.php').success(function(data) {
		for (var j = 0; j < data.length; j++){
			var itemname = data[j].name;
			var itemarray = itemname.split(" ");
			var itemarraylength = itemarray.length;
			var randpos = Math.floor((Math.random() * itemarraylength));
			var x = Math.round(Math.random());
			var htmlval;
			if (x && (randpos != 0)) {
				itemarray[randpos] = '<span class="normal">'+itemarray[randpos];
				itemarray[itemarraylength-1] = itemarray[itemarraylength-1]+'</span>'
				htmlval = itemarray.join(" ");
			} else {
				itemarray[0] = '<span class="normal">'+itemarray[0];
				itemarray[randpos] = itemarray[randpos]+'</span>';
				htmlval = itemarray.join(" ");
			}
			data[j].eventname = htmlval;
		}
		data.sort(function(a, b){
		  return a.datetime == b.datetime ? 0 : +(a.datetime > b.datetime) || -1;
		});
		$scope.slides = data;
    });
	$scope.pause = function() {
		$scope.defaultInterval = -1000;
	};
	$scope.play = function() {
		$scope.defaultInterval = 5000;
	};
   	$scope.play();
}])
.controller('DatesliderCtrl', ['$scope',
	function ($scope) {
		$scope.gotoslide = function(slidenum) {
			$scope.slides[slidenum].active=true;
		}
}])
.controller('EventModalCtrl', ['$scope', '$modal', '$log',
	function ($scope, $modal, $log) {
	  $scope.open = function (eventobj) {
		$scope.$parent.pause();
		var modalInstance = $modal.open({
		  templateUrl: 'template/event-modal.html',
		  controller: 'EventModalInstanceCtrl',
		  size: 'lg',
		  backdrop: 'false',
		  resolve: {
			eventdetails: function() {
				return eventobj;
			}
		  }
		});
		modalInstance.result.finally(function () {
		  $scope.$parent.play();
		});
	  };
}])
.controller('EventModalInstanceCtrl', ['$scope', '$modalInstance', 'eventdetails',
	function ($scope, $modalInstance, eventdetails) {
		$scope.eventdetails = eventdetails;
		$scope.ok = function () {
			$modalInstance.close();
		};
}])
.controller('TicketModalCtrl', ['$scope', '$modal', '$http',
	function ($scope, $modal, $http) {
	  $scope.open = function (eventobj) {
	  	$scope.currentevent = eventobj;
		$http({
			url: 'includes/json.eventtickets.php',
			method: 'GET',
			params: {id: eventobj.id}
		}).success(function(data) {
			$scope.currentevent.tickets = data;
		});
		$scope.$parent.pause();
		var modalInstance = $modal.open({
		  templateUrl: 'template/ticket-modal.html',
		  controller: 'TicketModalInstanceCtrl',
		  size: 'lg',
		  backdrop: 'false',
		  resolve: {
			eventdetails: function() {
				return $scope.currentevent;
			}
		  }
		});
		modalInstance.result.finally(function () {
		  $scope.$parent.play();
		});
	  };
}])
.controller('TicketModalInstanceCtrl', ['$scope', '$modalInstance', 'eventdetails',
	function ($scope, $modalInstance, eventdetails) {
		$scope.eventdetails = eventdetails;
		$scope.ok = function () {
			$modalInstance.close();
		};
}]);

 /*CONTACT MODULE*/
angular.module('nightweb.kontakt', ['ngSanitize', 'uiGmapgoogle-maps'])
.controller('KontactCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.send = function() {
    $http({
      method:'POST',
      url: 'includes/form.kontakt.php',
      data: $scope.formvalues,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).
    success(function(response) {
        console.log(response);
    }).
    error(function(response) {
        console.log(response);
    });
  };
}])
.controller('MapCtrl', ['$scope', '$log',
	function($scope, $log) {
		$scope.map = {center: {latitude: 50.9996955, longitude: 10.312905 }, zoom: 16 }
		$scope.options = {scrollwheel: false};
		$scope.marker = {
			coords: {
				latitude: 50.9996955,
				longitude: 10.312905
			},
			show: false,
			id: 0
		};

		$scope.windowOptions = {
			visible: false
		};

		$scope.onClick = function() {
			$scope.windowOptions.visible = !$scope.windowOptions.visible;
		};

		$scope.closeClick = function() {
			$scope.windowOptions.visible = false;
		};

		$scope.title = "Club Night";
		$scope.address = "Am Stadtweg 10";
		$scope.city = "Eisenach";
		$scope.zip = "99817";
}]);

 /*PICS MODULE*/
angular.module('nightweb.nightshots', ['ngTouch', 'ngAnimate', 'ui.bootstrap', 'picmodaltemplate', 'modalwindow'])
.controller('ImagesCtrl', ['$scope', '$http', '$location',
  function ($scope, $http, $location) {
	  $http({
			url: 'includes/json.eventthumbs.php',
			method: 'GET',
		}).success(function(data) {
			$scope.thumbs = data;
		});
	$scope.goNext = function (hash) {
		$location.path(hash);
	};
}])
.controller('EventImagesCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
	$scope.pics;
	$scope.uid = $routeParams.eventlink;
	$http({
		url: 'includes/json.eventimgs.php',
		method: 'GET',
		params: {id: $scope.uid}
	}).success(function(data) {
		$scope.pics = data;
	});
}])
.controller('PicModalCtrl', ['$scope', '$modal', '$log',
	function ($scope, $modal, $log) {
		$scope.open = function (indx) {
			var modalInstance = $modal.open({
			  templateUrl: 'template/pic-modal.html',
			  controller: 'PicModalInstanceCtrl',
			  size: 'pic	',
			  resolve: {
				  picindx: function() {
					  return indx;
				  },
				  allpics: function() {
					  return $scope.pics;
				  }
			  }
			});
		};
}])
.controller('PicModalInstanceCtrl', ['$scope', '$modalInstance', 'allpics', 'picindx',
	function ($scope, $modalInstance, allpics, picindx) {
		var pics = allpics;
		var curindx = picindx;
		var lastindx = allpics.length-1;
		$scope.pic = 'pics/'+pics[picindx].path;
		$scope.ok = function () {
			$modalInstance.close();
		};
		$scope.next = function () {
			if (curindx != lastindx) {
				 curindx++;
			} else {
				curindx = 0;
			}
			$scope.pic = 'pics/'+pics[curindx].path;
		};
		$scope.prev = function () {
			if (curindx != 0) {
				curindx--;
			} else {
				curindx = lastindx;
			}
			$scope.pic = 'pics/'+pics[curindx].path;
		};
}]);

/*CART MODULE*/
angular.module('cart', ['carttemplates', 'ngCookies'])
.factory('cart', function () {
    var cartData = [];
    return {
        addProduct: function (id, name, price, eventid, eventname, eventdate, eventage) {
            var addedToExistingItem = false;
            for (var i = 0; i < cartData.length; i++) {
                if (cartData[i].id == id) {
                    cartData[i].count++;
                    addedToExistingItem = true;
					localStorage.setItem('cart', JSON.stringify(cartData));
                    return cartData[i].count;
                }
            }
            if (!addedToExistingItem) {
                cartData.push({count: 1, id: id, price: price, name: name, eventid: eventid, eventname: eventname, eventdate: eventdate, eventage: eventage});
				localStorage.setItem('cart', JSON.stringify(cartData));
				return 1;
            }
        },

        removeProduct: function (id) {
            for (var i = 0; i < cartData.length; i++) {
                if (cartData[i].id == id) {
                    cartData.splice(i, 1);
                }
            };
			localStorage.setItem('cart', JSON.stringify(cartData));
        },

		checkProduct: function (id) {
			for (var i = 0; i < cartData.length; i++) {
                if (cartData[i].id == id) {
                    return cartData[i].count;
                }
            }
        },

		decreaseProductCount: function (id) {
			for (var i = 0; i < cartData.length; i++) {
                if (cartData[i].id == id) {
                    cartData[i].count--;
					if (cartData[i].count > 0) {
						localStorage.setItem('cart', JSON.stringify(cartData));
						return cartData[i].count;
					} else {
						cartData.splice(i, 1);
						localStorage.setItem('cart', JSON.stringify(cartData));
						return 0;
					}
                }
            }
        },

        getProducts: function () {
			var saved = JSON.parse(localStorage.getItem('cart'));
			var today = new Date().getTime();
			if (cartData.length == 0 && saved!==null) {
				for (var i = 0; i < saved.length; i++) {
					if (today < saved[i].eventdate && saved[i].count > 0) {
						cartData.push(saved[i]);
					}
				}
			}
			localStorage.setItem('cart', JSON.stringify(cartData));
            return cartData;
        },

        emptyCart: function (id) {
            cartData.length = 0;
			localStorage.clear();
        }

    }
})
.directive('cartSummary', function (cart) {
    return {
        restrict: 'A',
        templateUrl: 'template/cart-summary.html',
        controller: function ($scope) {

            var cartData = $scope.cartitems = cart.getProducts();

            $scope.total = function () {
                var total = 0;
                for (var i = 0; i < cartData.length; i++) {
                    total += (cartData[i].price * cartData[i].count);
                }
                return total;
            }

            $scope.itemCount = function () {
                var total = 0;
                for (var i = 0; i < cartData.length; i++) {
                    total += cartData[i].count;
                }
                return total;
            }

			$scope.removeProductFromCart = function (productid) {
				cart.removeProduct(productid);
			}
        }
    };
})
.controller('EventCartCtrl', ['$scope', 'cart', function ($scope, cart) {
	$scope.addProductToCart = function (product) {
		eventdetails = $scope.$parent.$parent.eventdetails;
		$scope.$parent.ticket.count = cart.addProduct(product.id, product.name, product.vvkprice, eventdetails.id, eventdetails.name, eventdetails.datetime, eventdetails.age);
	};

	$scope.decrementQuantity = function (productid) {
		$scope.$parent.ticket.count = cart.decreaseProductCount(productid);
	};

	$scope.inCart = function (productid) {
		$scope.$parent.ticket.count = cart.checkProduct(productid);
	};

	$scope.removeProductFromCart = function (productid) {
		cart.removeProduct(productid);
		$scope.$parent.ticket.count = null;
	};
}])
.controller('CartMgmtCtrl', ['$scope', 'cart', function ($scope, cart) {
	var cartData = $scope.cartitems = cart.getProducts();

	$scope.incrementQuantity = function (product) {
		cart.addProduct(product.id, product.name, product.vvkprice, product.eventid, product.eventname, product.eventdate, product.eventage);
	};

	$scope.decrementQuantity = function (productid) {
		cart.decreaseProductCount(productid);
	};

	$scope.removeProductFromCart = function (productid) {
		cart.removeProduct(productid);
	};

	$scope.total = function () {
		var total = 0;
		for (var i = 0; i < cartData.length; i++) {
			total += (cartData[i].price * cartData[i].count);
		}
		return total;
	};

	$scope.itemCount = function () {
		var total = 0;
		for (var i = 0; i < cartData.length; i++) {
			total += cartData[i].count;
		}
		return total;
	};
}])
.controller('CheckoutCtrl', ['$scope', 'cart', function ($scope, cart) {
	var cartData = $scope.cartitems = cart.getProducts();
	$scope.total = function () {
		var total = 0;
		for (var i = 0; i < cartData.length; i++) {
			total += (cartData[i].price * cartData[i].count);
		}
		return total;
	};

	$scope.itemCount = function () {
		var total = 0;
		for (var i = 0; i < cartData.length; i++) {
			total += cartData[i].count;
		}
		return total;
	};
}])
.controller('ReceiptCtrl', ['$scope', '$cookies', '$http', 'cart', function ($scope, $cookies, $http, cart) {
	cart.emptyCart();
	if (!angular.isUndefined($cookies.orderitems)) {
		$scope.orderdetails = JSON.parse(decodeURIComponent($cookies.orderitems.replace(/\+/g, '%20')) );
		$scope.itemCount = 0;
		for (var i=0; i < $scope.orderdetails.orderitems.length; i++) {
			$scope.itemCount += parseInt($scope.orderdetails.orderitems[i].itemquantity, 10);
		}
	} else {
		var orderid = $cookies.orderid;
		var transaction = $cookies.transaction;
		$http({
			url: 'includes/json.orderdetails.php',
			method: 'GET',
			params: {id: orderid, transactionid: transaction}
		}).success(function(data) {
			$scope.orderdetails = data;
			$scope.itemCount = 0;
			for (var i=0; i < data.orderitems.length; i++) {
				$scope.itemCount += parseInt(data.orderitems[i].itemquantity, 10);
			}
		});
	}
}]);
