/**2) Escreva a classe ConversaoDeUnidadesDeTempo com métodos estáticos para
conversão
 das unidades de velocidade segundo a lista abaixo, por exemplo
converMinutoParaSegundo. O método deverá receber a quantidade de minutos e
retornar o valor em segundos.
• 1 minuto = 60 segundos
• 1 hora = 60 minutos
• 1 dia = 24 horas
• 1 semana = 7 dias
• 1 mês = 30 dias
• 1 ano = 365.25 dias
 */
abstract class ConversaoDeUnidadesDeTempo{
  public static minutoParaSegundo(tempo:number) {
    const totalTempo:number = tempo * 60;
    return `${tempo} minuto(s) = ${totalTempo} segundos`
  }
  public static horaParaMinuto(tempo:number) {
    const totalTempo:number = tempo * 60
    return `${tempo} hora(s) = ${totalTempo} minutos`
  }
  public static diaParaHora(tempo:number) {
    const totalTempo:number = tempo * 24
    return `${tempo} dia(s) = ${totalTempo} horas`
  }
  public static semanaParaDia(tempo:number) {
    const totalTempo:number = tempo * 7
    return `${tempo} semana(s) = ${totalTempo} dias`
  }
  public static mesParaDia(tempo:number) {
    const totalTempo:number = tempo * 30
    return `${tempo} mês(s) = ${totalTempo} dias`
  }
  public static anoParaDia(tempo:number) {
    const totalTempo:number = tempo * 365.25
    return `${tempo} ano(s) = ${totalTempo} dias`
  }
}

console.log(`
${ConversaoDeUnidadesDeTempo.minutoParaSegundo(5)}
${ConversaoDeUnidadesDeTempo.horaParaMinuto(5)}
${ConversaoDeUnidadesDeTempo.diaParaHora(5)}
${ConversaoDeUnidadesDeTempo.semanaParaDia(5)}
${ConversaoDeUnidadesDeTempo.mesParaDia(5)}
${ConversaoDeUnidadesDeTempo.anoParaDia(5)}
`)