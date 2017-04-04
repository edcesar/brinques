
class Impressora():
	def imprimir(self, documento):
		return "Documento: " + documento + " impresso!"
	

class Secretaria():
	def __init__(self):
		self.impressora = Impressora();


secretaria = Secretaria()

impressao = secretaria.impressora.imprimir("contrato")
print(impressao);
