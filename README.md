# @kaokei/utils

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Example

以下是常量的定义形式，其中key，value，label是每个对象的必需属性。
而且不限制增加额外属性，但是要求每个对象的属性名需要一致。

```ts
export const EXAMPLE_OPTIONS = [
  {
    key: 'BOY', // 唯一
    value: 1, // 必需且唯一
    label: '男生', // 必需
    tag: '高达', // 可选
    color: 'red', // 可选
  },
  {
    key: 'GIRL', // 唯一
    value: 2, // 必需且唯一
    label: '女生', // 必需
    tag: '小仙女', // 可选
    color: 'green', // 可选
  },
] as const
```

### 获取所有key的数组

```ts
const keys = getKeys(EXAMPLE_OPTIONS)
keys === ['BOY', 'GIRL']
```

### 获取所有value的数组

```ts
const values = getValues(EXAMPLE_OPTIONS)
values === [1, 2]
```

### 获取key-value的映射对象

```ts
const keyValueMap = getKeyValueMap(EXAMPLE_OPTIONS)
keyValueMap === { BOY: 1, GIRL: 2 }
```

### 获取key-label的映射对象

```ts
const keyLabelMap = getKeyLabelMap(EXAMPLE_OPTIONS)
keyLabelMap === { BOY: '男生', GIRL: '女生' }
```

### 获取value-key的映射对象

```ts
const valueKeyMap = getValueKeyMap(EXAMPLE_OPTIONS)
valueKeyMap === { 1: 'BOY', 2: 'GIRL' }
```

### 获取value-label的映射对象

```ts
const valueLabelMap = getValueLabelMap(EXAMPLE_OPTIONS)
valueLabelMap === { 1: '男生', 2: '女生' }
```

### 获取key-option的映射对象

```ts
const keyMap = getKeyMap(EXAMPLE_OPTIONS)
keyMap === {
  BOY: {
    key: 'BOY',
    value: 1,
    label: '男生',
    tag: '高达',
    color: 'red'
  },
  GIRL: {
    key: 'GIRL',
    value: 2,
    label: '女生',
    tag: '小仙女',
    color: 'green'
  }
}
```

### 获取value-option的映射对象

```ts
const valueMap = getValueMap(EXAMPLE_OPTIONS)
valueMap === {
  1: {
    key: 'BOY',
    value: 1,
    label: '男生',
    tag: '高达',
    color: 'red'
  },
  2: {
    key: 'GIRL',
    value: 2,
    label: '女生',
    tag: '小仙女',
    color: 'green'
  }
}
```

### 获取key-自定义属性的映射对象

```ts
// 获取key-tag的映射
const keyTagMap = getMapByKey(EXAMPLE_OPTIONS, 'tag')
keyTagMap === { BOY: '高达', GIRL: '小仙女' }
```

### 获取value-自定义属性的映射对象

```ts
// 获取value-color的映射
const valueColorMap = getMapByValue(EXAMPLE_OPTIONS, 'color')
valueColorMap === { 1: 'red', 2: 'green' }
```

## License

[MIT](./LICENSE) License © 2023-PRESENT [kaokei](https://github.com/kaokei)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@kaokei/utils?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@kaokei/utils
[npm-downloads-src]: https://img.shields.io/npm/dm/@kaokei/utils?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@kaokei/utils
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@kaokei/utils?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@kaokei/utils
[license-src]: https://img.shields.io/github/license/kaokei/utils.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/kaokei/utils/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@kaokei/utils
