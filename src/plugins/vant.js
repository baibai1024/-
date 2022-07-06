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
  DropdownItem,
  Form,
  Toast

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
  DropdownItem,
  Form,
  Toast

]
export default function (Vue) {
  element.forEach((item) => Vue.use(item))
}
