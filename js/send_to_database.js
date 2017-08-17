
var queryGameInfoEN = function(json) {
    try { 
    	//alert('hello')
		nameEN = json.name
		//imgCaption = '../img/'+nameEN+'/caption.jpg';
		//alert(imgCaption)
		//$('#caption-pic').css({'background-image': imgCaption})
        //alert(averageweight)
        //alert(suggested_numplayers)
        //data = list(records[0])
        //alert(current_page)
        if (current_page === 'gamerule'){
        	nameEN_temp = change_nameEN(nameEN);
			pageTitle = nameCN + nameEN_temp;
			headerTitle = nameCN + nameEN_temp;
			$("title").html(pageTitle);
			$('#headerTitle').html(headerTitle);
			//alert(headerTitle)
        }
        
    } catch (e) { 
    	alert(e)
        //document.write(e.description); 
    } finally { 
    	
    } 
};

var id = '';
var type = '';
var num = '';
var textURL = 'http://180.76.244.130:3000/database/writeTextDB'

function click_submit(){
    id = document.getElementById("gameid").value
    type = document.getElementById("pageType").value
    loc = document.getElementById("location").value   
    text_content = document.getElementById("editor").innerHTML
	//alert(id)
	//alert(type)
	//alert(text_content)
	$.ajax({
		url: textURL,
		data:{
			gameid:id,
			pageType:type,
			location:loc,
			text: text_content
		},
		success:function(data){
			//alert('afd')
			document.getElementById("response").innerHTML = 'writing...'
			document.getElementById("response").innerHTML = data
		}
	});
}