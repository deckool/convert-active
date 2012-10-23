/*
 * Functie    : getCurrenciesFromXML
 *
 * Descriere  : incarca un fisier XML si il transforma in variable
 *              care sa poate fi folosite in javascript.
 *
 * Parametri  : string file
 *
 * Returneaza : array data
 *
 * Exemple de folosire: getCurrenciesFromXML('data/currencies.xml');
 */

function getActiveCurrenciesFromXML(file) {

	var currencies = [];

	$.ajax({
		type : 'GET',
		url : file,
		dataType : 'xml',
		async : false,
		success : function(data) {

			$(data).find('Active').each(function() {
				currencies.push ($(this).attr('currency'));
			});
		}
	});

return currencies;
}
