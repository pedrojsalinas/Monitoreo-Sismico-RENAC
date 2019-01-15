export interface Acelerografo {
  nombre:string,
  ubicacion:string,
  latitud:string,
  longitud:string,
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
