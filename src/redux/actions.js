const handleMenuItemClick = (e) => {
  return {
    type: 'ITEM_CLICK',
    key: e.key
  }
}

const handleLeftMenuClose = (e) => {
  return {
    type: 'LEFT_MENU_CLOSE'
  }
}

const handleLeftMenuOpen = (e) => {
  return {
    type: 'LEFT_MENU_OPEN'
  }
}

const handleRightMenuClose = (e) => {
  return {
    type: 'RIGHT_MENU_CLOSE'
  }
}

const handleRightMenuOpen = (e) => {
  return {
    type: 'RIGHT_MENU_OPEN'
  }
}

const handleTabChange = (key) => {
  return {
    type: 'TAB_CHANGE',
    key
  }
}

const handleTabClose = (key) => {
  return {
    type: 'TAB_CLOSE',
    key
  }
}

export {
  handleMenuItemClick,
  handleLeftMenuClose,
  handleLeftMenuOpen,
  handleRightMenuClose,
  handleRightMenuOpen,
  handleTabChange,
  handleTabClose
}
