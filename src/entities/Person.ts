
export type PersonType = {
  name: string
  document: string
}

export class Person {
  public input;

  constructor(input:PersonType){ 
    this.input = input
  }

  isCpf(){
    return this.input.document.length === 11
  }

  isCnpj(){
    return this.input.document.length === 14
  }
}