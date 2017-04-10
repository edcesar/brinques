using System;

public class Impressora
{
	public String imprimir(String documento)
	{
		return "Documento: " + documento + " impresso!";
	}
}

public class Secretaria
{
	public Impressora impressora;

	public Secretaria()
	{
		Impressora impressora = new Impressora();
		this.impressora = impressora;
	}
}

public class Programa
{
	public static void Main(String[] args)
	{
		Secretaria secretaria = new Secretaria();

		String impressao = secretaria.impressora.imprimir("contrato");
		Console.Write(impressao);
		Console.ReadLine();
	}
}
