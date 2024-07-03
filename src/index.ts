export interface Option {
  key: PropertyKey
  value: string | number
  label: string
  [propName: string]: any // 允许任意自定义属性
}

type ToKeys<T> = {
  [P in keyof T]: T[P] extends { key: infer K } ? K : never
}

type ToValues<T> = {
  [P in keyof T]: T[P] extends { value: infer K } ? K : never
}

type KeyValueMap<T extends readonly Option[]> = {
  [P in T[number]['key']]: Extract<T[number], { key: P }>['value']
}

type CustomKeyMap<T extends readonly Option[], K extends keyof T[number]> = {
  [P in T[number]['key']]: Extract<T[number], { key: P }>[K]
}

type KeyLabelMap<T extends readonly Option[]> = {
  [P in T[number]['key']]: Extract<T[number], { key: P }>['label']
}

type ValueKeyMap<T extends readonly Option[]> = {
  [P in T[number]['value']]: Extract<T[number], { key: P }>['key']
}

type CustomValueMap<T extends readonly Option[], K extends keyof T[number]> = {
  [P in T[number]['value']]: Extract<T[number], { value: P }>[K]
}

type ValueLabelMap<T extends readonly Option[]> = {
  [P in T[number]['value']]: Extract<T[number], { key: P }>['label']
}

type KeyMap<T extends readonly Option[]> = {
  [P in T[number]['key']]: Extract<T[number], { key: P }>
}

type ValueMap<T extends readonly Option[]> = {
  [P in T[number]['value']]: Extract<T[number], { key: P }>
}

/**
 * 获取所有 key
 */
export function getKeys<T extends readonly Option[]>(options: T) {
  return options.map(option => option.key) as ToKeys<T>
}

/**
 * 获取所有 value
 */
export function getValues<T extends readonly Option[]>(options: T) {
  return options.map(option => option.value) as ToValues<T>
}

/**
 * 获取key-value映射
 */
export function getKeyValueMap<T extends readonly Option[]>(options: T) {
  return options.reduce((map, option) => ({
    ...map,
    [option.key]: option.value,
  }), {} as KeyValueMap<T>)
}

/**
 * 获取key-label映射
 */
export function getKeyLabelMap<T extends readonly Option[]>(options: T) {
  return options.reduce((map, option) => ({
    ...map,
    [option.key]: option.label,
  }), {} as KeyLabelMap<T>)
}

/**
 * 获取value-key映射
 */
export function getValueKeyMap<T extends readonly Option[]>(options: T) {
  return options.reduce((map, option) => ({
    ...map,
    [option.value]: option.key,
  }), {} as ValueKeyMap<T>)
}

/**
 * 获取value-label映射
 */
export function getValueLabelMap<T extends readonly Option[]>(options: T) {
  return options.reduce((map, option) => ({
    ...map,
    [option.value]: option.label,
  }), {} as ValueLabelMap<T>)
}

/**
 * 获取key-option映射
 */
export function getKeyMap<T extends readonly Option[]>(options: T) {
  return options.reduce((map, option) => ({
    ...map,
    [option.key]: option,
  }), {} as KeyMap<T>)
}

/**
 * 获取value-option映射
 */
export function getValueMap<T extends readonly Option[]>(options: T) {
  return options.reduce((map, option) => ({
    ...map,
    [option.value]: option,
  }), {} as ValueMap<T>)
}

/**
 * 自定义 key-指定属性映射
 */

export function getMapByKey<T extends Option, K extends keyof T>(options: readonly T[], valueKey: K) {
  return options.reduce((map, option) => ({
    ...map,
    [option.key]: option[valueKey],
  }), {} as CustomKeyMap<T[], K>)
}

/**
 * 自定义 value-指定属性映射
 */
export function getMapByValue<T extends Option, K extends keyof T>(options: readonly T[], valueKey: K) {
  return options.reduce((map, option) => ({
    ...map,
    [option.value]: option[valueKey],
  }), {} as CustomValueMap<T[], K>)
}
