import * as optional from './requireOptionalType';
import * as checked from './requireType';

export { optional, checked };

// type StandardEnum< T > = {
//   [ id: string ]: T | string;
//   [ nu: number ]: string;
// };
// type Key = EnumValue | symbol;

type EnumValue = string | number;
type Enum = {
  [ id: string ]: EnumValue;
  [ nu: number ]: string;
};

function requireEnum<T extends Enum>( map: T, value: EnumValue ) {
  const ret = map[ value ];
  if( typeof ret === 'undefined' ) throw new Error( `unknown value (${value})` );
  return value as T[ keyof T ];
}

export class CheckedObject {
  constructor( public readonly obj: Record<string, unknown> ) { }
  string( key: string ) { return checked.string( this.obj[ key ], key ); }
  number( key: string ) { return checked.number( this.obj[ key ], key ); }
  object( key: string ) { return new CheckedObject( checked.object( this.obj[ key ], key ) ); }
  array( key: string ) { return new CheckedArray( checked.array( this.obj[ key ], key ) ); }
  optionalString( key: string ) { return optional.string( this.obj[ key ], key ); }

  optionalNumber<T>( key: string, callback?: optional.cast<number, T> ) {
    return optional.number( this.obj[ key ], key, callback );
  }

  numericEnum<T extends Enum>( key: string, map: T ) { return requireEnum( map, this.number( key ) ); }
}

export class CheckedArray {
  constructor( public readonly arr: unknown[] ) { }
  number( index: number ) { return checked.number( this.arr[ index ], `index(${index})` ); }
}
