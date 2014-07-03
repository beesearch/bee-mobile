angular.module(_SERVICES_).factory('currentItem', function() {
	var line;

	return {
		set: function(l) {
			line = l;
		},
		get: function() {
			return line;
		}
	};
});

angular.module(_SERVICES_).factory('searchSettings', function() {
	var indexes = [];
	var types = [];

	return {
		switchIndex: function(index) {
			var i = indexes.indexOf(index);
			if (i !== -1) {
				indexes.splice(i, 1);
			} else {
				indexes[indexes.length] = index;
			}
			console.log('### indexes: ' + indexes);
		},
		switchType: function(type) {
			var i = types.indexOf(type);
			if (i !== -1) {
				types.splice(i, 1);
			} else {
				types[types.length] = type;
			}
			console.log('### types: ' + types);
		},
		getIndexes: function() {
			return indexes.toString();
		},
		getTypes: function() {
			return types.toString();
		}
	};
});
