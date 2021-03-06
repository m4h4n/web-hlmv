// Allowing import MDL-files
declare module '*.mdl'

declare module 'fast-png'
declare module 'three-orbit-controls'

declare module 'fast-dataview' {
  class FastDataView extends DataView {}

  // prettier-ignore
  namespace FastDataView {}
  export = FastDataView
}
