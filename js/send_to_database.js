
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

function click_submit_to(){
    id = document.getElementById("gameid").value
    type = document.getElementById("pageType").value
    loc = document.getElementById("location").value   
    text_content = document.getElementById("editor").innerHTML
	//alert(id)
	//alert(type)
	//alert(text_content)
	document.getElementById("response").innerHTML = ''
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
			document.getElementById("response").innerHTML = data
		}
	});
}

function click_submit_from(){
    var textURL = 'http://180.76.244.130:3000/games/getTextInfo'
    id = document.getElementById("gameid").value
    type = document.getElementById("pageType").value
    loc = document.getElementById("location").value   
    text_content = document.getElementById("editor").innerHTML
	//alert(id)
	//alert(type)
	//alert(text_content)
	document.getElementById("response").innerHTML = ''
	$.ajax({
		url: textURL,
		data:{
			gameid:id,
			pageType:type,
			location:loc
		},
		dataType:'json',
		success:function(data){
			//alert(json.text_content)
			//alert(json.text_content)
			document.getElementById('editor').innerHTML = data.text_content
			document.getElementById("response").innerHTML = 'Success'
		},
		error:function(data){
			alert('记录不存在')
		},
	});
}

var writeTextbox = function(json) {
    try { 
    	if(json.text_content !== null){
    		document.getElementById('editor').innerHTML = json.text_content
    	}
    } catch (e) { 
    	//alert('error')
    	alert(e)
    } finally {
    	
    } 
};