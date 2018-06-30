mainApp.factory('restService',function($http, $q){    
    return{       
        getVendor:function(data){
            return $http.get('Vendor details.json');
        },
        categoryProduct:function(data){
            return $http.get('Category-Product overlay.json');
        }      
    }
})