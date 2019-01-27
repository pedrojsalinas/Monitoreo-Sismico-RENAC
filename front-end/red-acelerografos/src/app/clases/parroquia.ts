export interface Provincia {
  nombre: string,
  url: string,
  zona: 7,
}

export interface Canton {
  nombre: string,
  url: string,
  provincia: string,
}

export interface Parroquia {
  nombre: string,
  url: string,
  canton: string,
}
