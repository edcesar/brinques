class Impressora
{
	public String imprimir(String documento)
	{
		return "Documento: " + documento + " impresso!";
	}
}


class Secretaria
{
	Impressora impressora;

	public Secretaria()
	{
		Impressora impressora = new Impressora();
		this.impressora = impressora;
	}
}

class Programa
{
	public static void main(String[] args)
	{
		Secretaria secretaria = new Secretaria();

		String impressao = secretaria.impressora.imprimir("contrato");
		System.out.println(impressao);
	}
}
