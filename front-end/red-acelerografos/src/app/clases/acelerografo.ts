export interface Acelerografo {
  id?:string,
  nombre:string,
  ubicacion:string,
  latitud:any,
  longitud:any,
  altitud:string,
  sensor:string,
  activo:boolean,
  url:string,
}
export interface Sensor {
  id?:number,
  nombre:string,
  modelo:string,
  url:string,
}

export interface Datalogger {
  id?:number,
  nombre:string,
  modelo:string,
  url:string,
}

export interface Aceleracion {
  id?:number,
  fecha:string,
  hora:string,
  fichero:string,
  acelerografo?:string,
}
