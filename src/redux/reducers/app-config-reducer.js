import React from 'react'

import appConfig from '../../utils/app-config'

import Todos from '../../components/Todos'
import Information from '../../components/Information'

export default (state = appConfig, action) => {
  let tmpTabs = null
  let tmpActiveKey = null
  let tmpValue = null
  let tabExists = false

  switch (action.type) {
    case 'ITEM_CLICK':
      tmpTabs = state.tabNavigation.tabs

      switch (action.key) {
        case 'info':
          tmpValue = {
            key: 'info',
            closeable: true,
            title: 'App Information',
            content: <Information />
          }
          break
        case 'todos':
          tmpValue = {
            key: 'todos',
            closeable: true,
            title: 'All Todos',
            content: <Todos />
          }
          break
        default:
          break
      }

      tmpTabs.map(tab => {
        if (tab.key === tmpValue.key) {
          tabExists = true
        }

        return null
      })

      if (!tabExists) tmpTabs.push(tmpValue)

      return {
        ...state,
        tabNavigation: {
          ...state.tabNavigation,
          tabs: tmpTabs,
          activeKey: action.key
        },
        leftMenu: {
          ...state.leftMenu,
          visible: false
        },
        rightMenu: {
          ...state.rightMenu,
          visible: false
        }
      }
    case 'LEFT_MENU_OPEN':
    case 'LEFT_MENU_CLOSE':
      return {
        ...state,
        leftMenu: {
          ...state.leftMenu,
          visible: !state.leftMenu.visible
        }
      }
    case 'RIGHT_MENU_OPEN':
    case 'RIGHT_MENU_CLOSE':
      return {
        ...state,
        rightMenu: {
          ...state.rightMenu,
          visible: !state.rightMenu.visible
        }
      }
    case 'TAB_CHANGE':
      return {
        ...state,
        tabNavigation: {
          ...state.tabNavigation,
          activeKey: action.key
        }
      }
    case 'TAB_CLOSE':
      tmpTabs = state.tabNavigation.tabs.filter(tab => tab.key !== action.key)

      if (tmpTabs.length > 0) {
        tmpActiveKey = tmpTabs[tmpTabs.length - 1].key
      } else {
        tmpActiveKey = 'welcome'
      }

      return {
        ...state,
        tabNavigation: {
          ...state.tabNavigation,
          tabs: tmpTabs,
          activeKey: tmpActiveKey
        }
      }
    default:
      return state
  }
}
