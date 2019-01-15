export interface Acelerografo {
  nombre:string,
  ubicacion:string,
  latitud:string,
  longitud:string,
  altitud:string,
  sensor:string,
  tipo:string,
}
export interface Sensor {
  id?:number,
  nombre:string,
  modelo:string,
}
