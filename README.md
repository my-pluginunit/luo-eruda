# Luo-Eruda

> This is a debugging tool for mobile phones Based on [eruda]().


## Install

```bash
npm install luo-eruda -S
```

## Usage

```js
import eruda from 'luo-eruda';

eruda();
```

## Props 
参数一  
| 参数类型 | 说明 |
| ---------- | ----------- |
| 无参数 | 如果没有参数时，所有环境都有控制台工具 |
| String | 设置显示控制台工具的环境地址 |
| Array | 设置显示控制台工具的环境地址数组 |
| Object | 设置对象的exclude(数组类型)来排除显示控制台工具的数组集 |

参数二  
| 参数类型 | 说明 |
| ---------- | ----------- |
| Boolean | 是否在合符条件并且移动设备下显示 |
## 无参数

```js
import eruda from 'luo-eruda';

eruda();
```
## 参数为字符串

```js
- 当参数为字符串时，如果当前环境与参数相同时，则显示控制台工具

import eruda from 'luo-eruda';

eruda("xxx.zzz.com");
```

## 参数为数组

```js
- 当参数为数组时，如果当前环境与参数内任一项相同，则显示控制台工具

import eruda from 'luo-eruda';

eruda(["xxx-dev.zzz.com", "xxx-test.zzz.com", "xxx-prod.zzz.com"]);
```

## 参数为对象

```js
- 当参数为对象时，如果当前环境与对象的exclude中的任一项相同，则不显示控制台工具

import eruda from 'luo-eruda';

eruda({exclude: ["aaa.zzz.com", "bbb.zzz.com"]});
```

## 移动端模式

```js
- 如想只在手机里显示，禁止pc显示，则可以设置第二个参数为true

import eruda from 'luo-eruda';

eruda('xxx.zzz.com', true);

or

eruda(["xxx-dev.zzz.com", "xxx-test.zzz.com", "xxx-prod.zzz.com"], true);

or

eruda({exclude: ["aaa.zzz.com", "bbb.zzz.com"]}, true);
```

# License

This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
