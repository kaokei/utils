import { describe, expect, it } from 'vitest'

import {
  getKeyLabelMap,
  getKeyMap,
  getKeyValueMap,
  getKeys,
  getMapByKey,
  getMapByValue,
  getValueKeyMap,
  getValueLabelMap,
  getValueMap,
  getValues,
} from '../src/index'

export const EXAMPLE_OPTIONS = [
  {
    key: 'BOY', // 唯一性
    value: 1, // 唯一性
    label: '男生',
    tag: '高达',
    color: 'red',
  },
  {
    key: 'GIRL', // 唯一性
    value: 2, // 唯一性
    label: '女生',
    tag: '小仙女',
    color: 'green',
  },
] as const

describe('typeScript type tests', () => {
  it('getKeys', () => {
    const keys = getKeys(EXAMPLE_OPTIONS)

    expect(keys).toEqual(['BOY', 'GIRL'])
  })

  it('getValues', () => {
    const values = getValues(EXAMPLE_OPTIONS)

    expect(values).toEqual([1, 2])
  })

  it('getKeyValueMap', () => {
    const keyValueMap = getKeyValueMap(EXAMPLE_OPTIONS)

    expect(keyValueMap.BOY).toBe(1)
    expect(keyValueMap.GIRL).toBe(2)
    expect(keyValueMap).toEqual({ BOY: 1, GIRL: 2 })
  })

  it('getKeyLabelMap', () => {
    const keyLabelMap = getKeyLabelMap(EXAMPLE_OPTIONS)

    expect(keyLabelMap.BOY).toBe('男生')
    expect(keyLabelMap.GIRL).toBe('女生')
    expect(keyLabelMap).toEqual({ BOY: '男生', GIRL: '女生' })
  })

  it('getValueKeyMap', () => {
    const valueKeyMap = getValueKeyMap(EXAMPLE_OPTIONS)

    expect(valueKeyMap[1]).toBe('BOY')
    expect(valueKeyMap[2]).toBe('GIRL')
    expect(valueKeyMap).toEqual({ 1: 'BOY', 2: 'GIRL' })
  })

  it('getValueLabelMap', () => {
    const valueLabelMap = getValueLabelMap(EXAMPLE_OPTIONS)

    expect(valueLabelMap[1]).toBe('男生')
    expect(valueLabelMap[2]).toBe('女生')
    expect(valueLabelMap).toEqual({ 1: '男生', 2: '女生' })
  })

  it('getKeyMap', () => {
    const keyMap = getKeyMap(EXAMPLE_OPTIONS)

    expect(keyMap.BOY).toBe(EXAMPLE_OPTIONS[0])
    expect(keyMap.GIRL).toBe(EXAMPLE_OPTIONS[1])
    expect(keyMap).toEqual({ BOY: EXAMPLE_OPTIONS[0], GIRL: EXAMPLE_OPTIONS[1] })
  })

  it('getValueMap', () => {
    const valueMap = getValueMap(EXAMPLE_OPTIONS)

    expect(valueMap[1]).toBe(EXAMPLE_OPTIONS[0])
    expect(valueMap[2]).toBe(EXAMPLE_OPTIONS[1])
    expect(valueMap).toEqual({ 1: EXAMPLE_OPTIONS[0], 2: EXAMPLE_OPTIONS[1] })
  })

  it('getMapByKey', () => {
    const keyMap = getMapByKey(EXAMPLE_OPTIONS, 'tag')

    expect(keyMap.BOY).toBe('高达')
    expect(keyMap.GIRL).toBe('小仙女')
    expect(keyMap).toEqual({ BOY: '高达', GIRL: '小仙女' })
  })

  it('getMapByValue', () => {
    const valueMap = getMapByValue(EXAMPLE_OPTIONS, 'color')

    expect(valueMap[1]).toBe('red')
    expect(valueMap[2]).toBe('green')
    expect(valueMap).toEqual({ 1: 'red', 2: 'green' })
  })
})
