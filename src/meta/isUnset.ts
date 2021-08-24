export function isTypeUnset( type: string, name: string, valueType: string ) {
  if( valueType !== type ) {
    if( valueType === 'undefined' ) return true;
    throw new Error( `wrong type (${valueType}) for (${name}: ${type})` );
  }
  return false;
}

export function isObjectUnset( value: unknown, name: string ) {
  const valueType = typeof value;
  if( valueType !== 'object' || value instanceof Array ) {
    if( valueType === 'undefined' ) return true;
    throw new Error( `wrong type (${valueType}) for (${name}: object)` );
  }
  return false;
}

export function isArrayUnset( value: unknown, name: string ) {
  const valueType = typeof value;
  if( ! ( value instanceof Array ) ) {
    if( valueType === 'undefined' ) return true;
    throw new Error( `wrong type (${valueType}) for (${name}: array)` );
  }
  return false;
}
