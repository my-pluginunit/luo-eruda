# Luo-Infinite-Scroll

> Infinite scroll


## Install

```bash
npm install luo-infinite-scroll -S
```

## Usage

```js
import Vue from 'vue';
import LuoInfiniteScroll from "luo-infinite-scroll";
import img from '@/assets/imgs/tz-loading.gif';

Vue.use(LuoInfiniteScroll);

<div v-luo-infinite-scroll="scrollEvent" luo-infinite-scroll-distance="10"  :luo-infinite-scroll-loding-path="img">
  // 列表内容
</div>


methods: {
    scrollEvent (e) {
      // 请求数据
    }
}
   


```

## Props 
| 参数类型 | 说明 |
| ---------- | ----------- |、
| v-luo-infinite-scroll | 到达底部事件 |
| luo-infinite-scroll-distance | 离底部多少距离触发事件 |
| luo-infinite-scroll-loding-path | loading图片地址 |

# License

This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
