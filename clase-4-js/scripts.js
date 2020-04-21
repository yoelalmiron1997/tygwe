function setValue() {
	//document.getElementById("inputValue").innerHTML = document.getElementById("input").value;
	$("#inputValue").html($("#input").val());
}

function increment() {
	// var actual = parseInt(document.getElementById("counter").innerHTML);

	// actual++;

	// document.getElementById("counter").innerHTML = actual;
	var counter = $("#counter");

	var actual = parseInt(counter.html());
	actual++;

	counter.html(actual);
}

$(document).ready(function() {
	$.ajax({
		url: "https://api.coindesk.com/v1/bpi/currentprice.json",
		method: "GET",
		dataType: "json",
		success: function(response) {
			bitcoinInfo(response.bpi);
		},
		error: function(req, status, err) {
			showError();
		}
	});
});

function bitcoinInfo(currencies) {
	var html = '<ul>';

	for (currency in currencies) {
		html += '<li>' + currencies[currency].description + ': ' + currencies[currency].symbol +
		currencies[currency].rate_float.toFixed(2) + '</li>';
	}

	html += '</ul>';

	$("#btc").html(html);
}

function showError() {
	var html = '<div style="color: #F00">Ha ocurrido un error al traer el precio del BTC.</div>';

	$("#btc").html(html);
}