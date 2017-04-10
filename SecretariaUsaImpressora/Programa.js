Impressora = {
	imprimir : function(documento) 
	{
		return "Documeno " + documento + " impresso!";
	}
}

Secretaria = {
	impressora : Impressora
}

var secretaria = Secretaria;
var estagiaria = Secretaria;

console.log(secretaria.impressora.imprimir("Contrato"));
console.log(estagiaria.impressora.imprimir("Foto"));



var Impressora = function()
{
		
	this.imprimir = function(documento)
	{
		return "Documeno " + documento + " impresso!";	
	}
}

var Secretaria = function()
{
	this.impressora = new Impressora();
}

secretaria = new Secretaria();
console.log(secretaria.impressora.imprimir("Contrato SLA"));

