import React from 'react'
import { CheckSquareOutlined, InfoCircleTwoTone } from '@ant-design/icons'
import store from '../redux/store'

import {
  handleMenuItemClick,
  handleLeftMenuClose,
  handleLeftMenuOpen,
  handleRightMenuClose,
  handleRightMenuOpen,
  handleTabChange,
  handleTabClose
} from '../redux/actions'

import Welcome from '../components/Welcome'

const appConfig = {
  rootContent: <Welcome />,
  theme: {},
  leftMenu: {
    enabled: true,
    title: 'Menu',
    visible: false,
    menuItems: [
      {
        key: 'todos',
        title: <><CheckSquareOutlined /> Todos</>,
        children: [
          {
            key: 'todos',
            title: <>All Todos</>
          }
        ]
      }
    ],
    handleMenuItemClick: (e) => store.dispatch(handleMenuItemClick(e)),
    onClose: (e) => store.dispatch(handleLeftMenuClose(e)),
    onOpen: (e) => store.dispatch(handleLeftMenuOpen(e))
  },
  rightMenu: {
    enabled: true,
    title: 'Resources',
    visible: false,
    menuItems: [
      {
        key: 'info',
        title: <><InfoCircleTwoTone /> Information</>
      }
    ],
    handleMenuItemClick: (e) => store.dispatch(handleMenuItemClick(e)),
    onClose: (e) => store.dispatch(handleRightMenuClose(e)),
    onOpen: (e) => store.dispatch(handleRightMenuOpen(e))
  },
  tabNavigation: {
    enabled: true,
    activeKey: 'welcome',
    animated: false,
    onTabChange: (key) => store.dispatch(handleTabChange(key)),
    onTabClose: (key, action) => store.dispatch(handleTabClose(key, action)),
    rootTabContent: <Welcome />,
    rootTabKey: 'welcome',
    rootTabTitle: 'Welcome',
    tabs: []
  },
  toolbar: {
    enabled: true,
    title: 'Simple Todo',
    customMenus: {
      content: null
    }
  }
}

export default appConfig
