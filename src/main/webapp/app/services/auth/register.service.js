(function () {
    'use strict';

    angular
        .module('jHipsterAngularApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
