class ContaBancaria {
  constructor(saldoCorrente, sandoPoupanca) {
    this._saldoCorrente = saldoCorrente;
    this._saldoPoupanca = sandoPoupanca; }

    jurosPoupanca(){
      return saldoCorrente * 0.005
    }

saque(quantia){
  this._saldoCorrente = this._saldoCorrente - quantia
  return this._saldoCorrente
  
}
transferencia(quantiaTransferencia){
  this._saldoCorrente = this._saldoCorrente + quantiaTransferencia
  this._saldoPoupanca = this._saldoPoupanca - quantiaTransferencia

}}

class ContaEspecial extends ContaBancaria{
  constructor(saldoCorrente, saldoPoupanca, jurosPoupanca, jurosComposto){
    super(saldoCorrente, saldoPoupanca, jurosPoupanca)}
  
    jurosComposto() 
      {saldoCorrente * 0.010}
}

let contaLele2023 = new ContaEspecial(8000, 120000);

contaLele2023.saque(11000);

console.log(contaLele2023);

contaLele2023.jurosComposto;

console.log(contaLele2023);

    