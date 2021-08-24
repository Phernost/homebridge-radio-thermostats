import { isTypeUnset, isObjectUnset } from './isUnset';

function unsafeCast< R, A >( arg: A ) { return arg as unknown as R; }

export type cast<A, R> = { ( arg: A ): R | undefined };

export function string( value: unknown, name: string ) {
  if( isTypeUnset( 'string', name, typeof value ) ) return undefined;
  return value as string;
}

export function number< T = number >( value: unknown, name: string, callback: cast< number, T > = unsafeCast ) {
  if( isTypeUnset( 'number', name, typeof value ) ) return undefined;
  return callback( value as number );
}

export function object( value: unknown, name: string ) {
  if( isObjectUnset( value, name ) ) return undefined;
  return value as Record< string, unknown >;
}
