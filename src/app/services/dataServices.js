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
