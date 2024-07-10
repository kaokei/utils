import { describe, expect, expectTypeOf, it } from 'vitest'

import type {
  getKeyLabelMap,
  getKeyMap,
  getKeyValueMap,
  getKeys,
  getMapByKey,
  getValueKeyMap,
} from '../src/index'
import {
  getMapByValue,
  getValueLabelMap,
  getValueMap,
  getValues,
} from '../src/index'

export const EXAMPLE_OPTIONS = [
  {
    // key: 'BOY',
    value: 1,
    label: '男生',
    tag: '高达',
    color: 'red',
  },
  {
    // key: 'GIRL',
    value: 2,
    label: '女生',
    tag: '小仙女',
    color: 'green',
  },
] as const

type FirstParameter<T extends (...args: any) => any> = Parameters<T>[0]

describe('typeScript type tests', () => {
  it('getKeys', () => {
    expectTypeOf(EXAMPLE_OPTIONS).not.toMatchTypeOf<FirstParameter<typeof getKeys>>()
  })

  it('getValues', () => {
    const values = getValues(EXAMPLE_OPTIONS)

    expect(values).toEqual([1, 2])
  })

  it('getKeyValueMap', () => {
    expectTypeOf(EXAMPLE_OPTIONS).not.toMatchTypeOf<FirstParameter<typeof getKeyValueMap>>()
  })

  it('getKeyLabelMap', () => {
    expectTypeOf(EXAMPLE_OPTIONS).not.toMatchTypeOf<FirstParameter<typeof getKeyLabelMap>>()
  })

  it('getValueKeyMap', () => {
    expectTypeOf(EXAMPLE_OPTIONS).not.toMatchTypeOf<FirstParameter<typeof getValueKeyMap>>()
  })

  it('getValueLabelMap', () => {
    const valueLabelMap = getValueLabelMap(EXAMPLE_OPTIONS)

    expect(valueLabelMap[1]).toBe('男生')
    expect(valueLabelMap[2]).toBe('女生')
    expect(valueLabelMap).toEqual({ 1: '男生', 2: '女生' })
  })

  it('getKeyMap', () => {
    expectTypeOf(EXAMPLE_OPTIONS).not.toMatchTypeOf<FirstParameter<typeof getKeyMap>>()
  })

  it('getValueMap', () => {
    const valueMap = getValueMap(EXAMPLE_OPTIONS)

    expect(valueMap[1]).toBe(EXAMPLE_OPTIONS[0])
    expect(valueMap[2]).toBe(EXAMPLE_OPTIONS[1])
    expect(valueMap).toEqual({ 1: EXAMPLE_OPTIONS[0], 2: EXAMPLE_OPTIONS[1] })
  })

  it('getMapByKey', () => {
    expectTypeOf(EXAMPLE_OPTIONS).not.toMatchTypeOf<FirstParameter<typeof getMapByKey>>()
  })

  it('getMapByValue', () => {
    const valueColorMap = getMapByValue(EXAMPLE_OPTIONS, 'color')

    expect(valueColorMap[1]).toBe('red')
    expect(valueColorMap[2]).toBe('green')
    expect(valueColorMap).toEqual({ 1: 'red', 2: 'green' })
  })
})
