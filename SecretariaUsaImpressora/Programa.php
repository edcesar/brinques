<?php

class Impressora
{
	public function imprimir(String $documento): String
	{
		return "Documento: " . $documento . " impresso!";
	}
}


class Secretaria
{
	public $impressora;

	public function __construct()
	{
		$impressora = new Impressora();
		$this->impressora = $impressora;
	}
}


	$secretaria = new Secretaria();

	$impressao = $secretaria->impressora->imprimir("contrato");
	echo $impressao;
