var countCity = 0;
var countID = 0;
var catalogo = 'No';
var tipeCompany = 'Pyme(p/m)';
//recibir-Catalogo
$("input[name=recibir-catalogo]").click(function () {    
        let recibirCatalago = $('#recibir-catalogo').prop('checked');
        if (recibirCatalago) {
        	catalogo = 'Si';
        }else{
            catalogo = 'No';
        }
    });

//tipo de empresa
$("input[name=company]").click(function () {    
        let radioVal = $('input:radio[name=company]:checked').val();
        if (radioVal == 'Pyme(p/m)') {
        	tipeCompany = 'Pyme(p/m)';
        }else if (radioVal == 'Grande') {
        	tipeCompany = 'Grande';
        }
        else if (radioVal == 'Propia') {
        	tipeCompany = 'Propia';
        }
    });
//ciudad
$("select[name=city").change(function(){
    let cityVal = $(this).val();
    if (cityVal == 'Barranquilla') {
    	city = 'Barranquilla';
    }else if (cityVal == 'Bogotá') {
    	city = 'Bogotá';
    }
    else if (cityVal == 'Bucaramanga') {
    	city = 'Bucaramanga';
    }
    else if (cityVal == 'Cali') {
    	city = 'Cali';
    }
    else if (cityVal == 'Medellín') {
    	city = 'Medellín';
    }

    countCity = 1;
});
//tipo de id
$("select[name=tipo_ID").change(function(){
    let tipoIdVal = $(this).val();
    if (tipoIdVal == 'CC') {
    	tipoID = 'CC';
    }else if (tipoIdVal == 'NIT') {
    	tipoID = 'NIT';
    }
    countId = 1;
});

$( "#submit" ).click(function(e) {
	let name = (document.getElementById("name").value);
	let lastname = (document.getElementById("lastname").value);
	let ccInit = (document.getElementById("cc-init").value);
	let email = (document.getElementById("email").value);
	let phone = (document.getElementById("phone").value);
	let address = (document.getElementById("address").value);
	let work = (document.getElementById("trabajo").value);
	let terms = $('#terminos-condiciones').prop('checked');
	if ((name != '') && (ccInit != '') && (phone != '') && (email != '') && (address != '') && (terms)  && (countCity == 1)){
		e.preventDefault();
		let body = {'email': email,'eventName':'landing-oficinas','attributes':{'email': email,'name':name,'lastname':lastname,'tipoID':tipoID,'ccInit':ccInit,'phone':phone,'address':address,'city':city,'catalogo':catalogo,'work':work,'Company':tipeCompany}};
			let data = JSON.stringify(body);

		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "https://track.embluemail.com/contacts/event",
		  "method": "POST",
		  "headers": {
		    "authorization": "ZGRiNmVjNDQ3NWUxNDE4NWI0NTg0YTIxN2Q0OTRkYTU=",
		    "content-type": "application/json",
		  },
		  "processData": false,
		  "data": data
		}

		$.ajax(settings).done(function (response) {
		  console.log(response);
		  $('#js-action__modal__submit').click();
		  setTimeout(function()
		  	{ window.location.href="https://www.tugo.co"; }, 1000);
		});	
	}
});
