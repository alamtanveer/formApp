mainApp.directive('product', function (restService) {
    return{
    	restrict:"EA",
    	templateUrl:"app/template/product.html",
    	link:function(scope, element, attr){
    		var obj=[];
    		$(".selectProduct").unbind('click').bind('click',function(event){    			
    			if ($(event.target).hasClass('closeBtn')){
    				var str=$(event.target).parent()[0].innerHTML;
    				var manipulate=str.split(' ')[0];

    				obj.forEach(function(data,i){
    					if(manipulate==data.categoryName){
    						$(this).splice(data,i)
    					}
    				})
    				$(event.target).parent().remove();
    			}else{    				
	    			$('.itmBorder').remove();
	    			$('#myModal').css({'display':'block','opacity':'1'})
	    			$('input[type="checkbox"]').each(function(val, i){
	    				this.checked=false
	    			});
	    			
	    			var count=0;
	    			$('.cboxTitle').change(function() {    				
	    				var len=$(this).parents('.categoryWrapper').find('.child').length;
	    				if($(this)[0].checked==true){    					
		    				obj.push({categoryName:$(this).siblings('span')[0].innerHTML, productServices:[]})
		    				for (var i = 0; i < len; i++) {
		    					$(this).parents('.categoryWrapper').find('.child')[i].checked=true;

		    					obj[count].productServices.push($(this).parents('.categoryWrapper').find('.child').next()[i].innerHTML)
		    				}
		    				count++;
		    				/*productServices:[$(this).parents('.categoryWrapper').find('.child')[i].innerHTML]*/
	    				}
	    				else if($(this)[0].checked==false){
	    					for (var i = 0; i < len; i++) {
		    					$(this).parents('.categoryWrapper').find('.child')[i].checked=false;
		    				}
		    					obj.splice(count,1);
		    					count--;
	    				}    				   								
					});
    			}
    			/*$('.child').change(function() { 
    				debugger;
    					})  */

				 			   			
    		})
    		var dom="<div></div>";
    		$("#btnOk").bind('click',function(){
    			$('.itmBorder').remove();
    			$('#myModal').css({'display':'none','opacity':'0'})
    			for (var i = 0; i < obj.length; i++) {    
    				$('.selectProduct').append('<div class="itmBorder">'+obj[i].categoryName+" :"+obj[i].productServices.join().replace(",","/")+'<span class="closeBtn">X</span</div>');
    			}
    			//obj=[];
    		})
    	}
    }
})