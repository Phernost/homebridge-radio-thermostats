import { isTypeUnset, isObjectUnset, isArrayUnset } from './isUnset';

function requireType( type: string, name: string, valueType: string ) {
  if( isTypeUnset( type, name, valueType ) ) throw new Error( `missing (${name}: ${type})` );
}

export function string( value: unknown, name: string ) {
  requireType( 'string', name, typeof value );
  return value as string;
}

export function number( value: unknown, name: string ) {
  requireType( 'number', name, typeof value );
  return value as number;
}

export function object( value: unknown, name: string ) {
  if( isObjectUnset( value, name ) ) throw new Error( `missing (${name}: object)` );
  return value as { [ key: string ]: unknown };
}

export function array( value: unknown, name: string ) {
  if( isArrayUnset( value, name ) ) throw new Error( `missing (${name}: array)` );
  return value as unknown[];
}
