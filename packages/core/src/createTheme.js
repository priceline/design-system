export default theme => {
  return {
    ...theme,
    componentStyles: {
      buttonPrimary: {
        backgroundColor: theme.palette.primary,
        color: theme.colors.white,
        '&:hover': {
          backgroundColor: theme.colors.darkBlue
        },
        ...((theme.componentStyles || {}).buttonPrimary || {})
      },
      buttonSecondary: {
        backgroundColor: theme.palette.secondary,
        color: theme.colors.white,
        '&:hover': {
          backgroundColor: theme.colors.darkGreen
        },
        ...((theme.componentStyles || {}).buttonSecondary || {})
      },
      buttonDefault: {
        backgroundColor: theme.palette.primary,
        color: theme.colors.white,
        '&:hover': {
          backgroundColor: theme.colors.darkBlue
        },
        ...((theme.componentStyles || {}).buttonDefault || {})
      },
      buttonDisabled: {
        backgroundColor: theme.colors.lightGray,
        color: theme.palette.textPrimary,
        cursor: 'default',
        '&:hover': {
          backgroundColor: null
        },
        ...((theme.componentStyles || {}).buttonDisabled || {})
      },
      buttonNegative: {
        backgroundColor: theme.palette.error,
        color: theme.colors.white,
        '&:hover': {
          backgroundColor: theme.colors.darkRed
        },
        ...((theme.componentStyles || {}).buttonNegative || {})
      },
      linkPrimary: {
        color: theme.palette.primary,
        '&:hover': {
          textDecoration: 'underline'
        },
        ...((theme.componentStyles || {}).linkPrimary || {})
      },
      linkSecondary: {
        color: theme.palette.secondary,
        '&:hover': {
          textDecoration: 'underline'
        },
        ...((theme.componentStyles || {}).linkSecondary || {})
      },
      linkTitle: {
        color: theme.colors.red,
        '&:hover': {
          textDecoration: 'underline'
        },
        ...((theme.componentStyles || {}).linkTitle || {})
      },
      linkNavigation: {
        color: theme.palette.textPrimary,
        '&:hover': {
          textDecoration: 'underline'
        },
        ...((theme.componentStyles || {}).linkNavigation || {})
      }
    }
  }
}
