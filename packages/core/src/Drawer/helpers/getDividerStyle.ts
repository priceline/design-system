/**
 * Toggle divider visibility
 */
export const getDividerStyle = ({ showDivider, boxShadow }) =>
  showDivider
    ? {
        boxShadow,
      }
    : {}
