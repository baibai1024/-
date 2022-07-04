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
  Search,
  Grid,
  GridItem,
  Image as VanImage,
  Cell,
  CellGroup,
  NavBar,
  DropdownMenu,
  DropdownItem
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
  Search,
  Grid,
  GridItem,
  VanImage,
  Cell,
  CellGroup,
  NavBar,
  DropdownMenu,
  DropdownItem
]
export default function (Vue) {
  element.forEach((item) => Vue.use(item))
}
