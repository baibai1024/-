import {
  Button,
  Tabbar,
  TabbarItem,
  Icon,
  Swipe,
  SwipeItem,
  Lazyload,
  Cascader,
  Field,
  Popup,
  Search
} from 'vant'
const element = [
  Button,
  Tabbar,
  TabbarItem,
  Icon,
  Swipe,
  SwipeItem,
  Lazyload,
  Cascader,
  Field,
  Popup,
  Search
]
export default function (Vue) {
  element.forEach((item) => Vue.use(item))
}
