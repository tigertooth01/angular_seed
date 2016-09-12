myApp.service('PhpService', function($q) {

    var base_url='http://sample';
    
    return {
        loadResources: function(url,data) {
            showLoader();
            var deferred = $q.defer();
            var promise = deferred.promise;

            $.ajax({
                type: 'POST',
                url: base_url+url,
                data: data,
                success: function(data) {
                    //alert(data);
                    hideLoader();
                    deferred.resolve(data);

                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    hideLoader();
                    deferred.reject('Unable to fetch!');
                }
            });

            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        },

        setBaseUrl: function(url){
            base_url = url;
        }
    }
});