const c2f_mag = 9 / 5;
const c2f_off = 32;
function to_fahrenheit( celsius: number ) { return celsius * c2f_mag + c2f_off; }
function to_celsius( fahrenheit: number ) { return ( fahrenheit - c2f_off ) / c2f_mag; }

export interface Temperature {
  readonly fahrenheit: number;
  readonly celsius: number;
}

class Fahrenheit implements Temperature {
  constructor( public readonly value: number ) { }
  get fahrenheit() { return this.value; }
  get celsius() { return to_celsius( this.value ); }
}

class Celsius implements Temperature {
  constructor( public readonly value: number ) { }
  get fahrenheit() { return to_fahrenheit( this.value ); }
  get celsius() { return this.value; }
}

export function fahrenheit( temperature: number ): Temperature { return new Fahrenheit( temperature ); }
export function celsius( temperature: number ): Temperature { return new Celsius( temperature ); }
