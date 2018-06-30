mainApp.controller('mainController', function ($rootScope, $scope, restService) {
    var vm = $scope;
    vm.username="Scott";
    vm.designation="Developer";
    vm.visible=true;
	vm.listItem=["Users","Vendors","Products", "Locations", "Brans","Agencies","Production Companies", "Projects", "Contracts","Purchase Orders", "Payroll", "Account"];
   	vm.hamburger=function(){
   		if($('.mainWrapper').find('.leftPanel').length > 0){
   			vm.visible=false;
   			$('#rightPanel').removeAttr('class');
   			$('#rightPanel').attr('class',"col-sm-12 col-md-12 col-lg-12");
   		}else{
   			vm.visible=true;
   			$('#rightPanel').removeAttr('class');
   			$('#rightPanel').attr('class',"col-sm-9 col-md-9 col-lg-10");
   		}   		
   	}
   	restService.getVendor().then(function(data){
   		if(data.data.header.statusCode==200){
   			vm.vendorData=data.data.payload.result;
   			//console.log(vm.vendorData);
   		}
   	})
   	restService.categoryProduct().then(function(data){
   		//debugger;
   		if(data.data.header.statusCode==200){
   			vm.categoryProduct=data.data.payload;
   			console.log(vm.categoryProduct);
   		}
   	})
   	vm.selectProduct=function(){

   	}
   
}) 