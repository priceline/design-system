const KEY_FRAMES = {
  GROW_CENTER: {
    rest: {
      end: `
        transform: scale(.75, .75);
        z-index: -1;
        visibility: hidden;
        opacity: 0;
      `,
    },
    animated: {
      start: `
        transform: scale(.75, .75);
        z-index: 99;
        visibility: visible;
      `,
      end: `
        transform: scale(1, 1);
        opacity: 1;
      `,
    },
  },
  QUICK_GROW: {
    rest: {
      start: `
        transform: scale(1, 1);
        opacity: 1;
      `,
      end: `
        transform: scale(.9, .9);
        z-index: -1;
        visibility: hidden;
        opacity: 0;
      `,
    },
    animated: {
      start: `
        transform: scale(.9, .9);
        opacity: 0;
        z-index: 99;
        visibility: visible;
      `,
      end: `
        transform: scale(1, 1);
        opacity: 1;
      `,
    },
  },
  EXPAND_DOWN: {
    rest: {
      end: `
        transform: scaleY(0);
        z-index: -1;
        visibility: hidden;
      `,
    },
    animated: {
      start: `
        transform: scaleY(0);
        z-index: 99;
        visibility: visible;
      `,
      end: `
        transform: scaleY(1);
      `,
    },
  },
  GROW_Y: {
    rest: {
      start: `
        transform: scaleY(1.25);
      `,
      end: `
        transform: scaleY(1);
        z-index: auto;
      `,
    },
    animated: {
      start: `
        transform: scaleY(1);
        z-index: 99;
      `,
      end: `
        transform: scaleY(1.25);
      `,
    },
  },
  GROW_XY: {
    rest: {
      start: `
        position: relative;
        z-index: 99;
        transform: scale(1.25);
      `,
      end: `
        position: static;
        transform: scale(1);
        z-index: auto;
      `,
    },
    animated: {
      start: `
        position: relative;
        transform: scale(1);
        z-index: 99;
      `,
      end: `
        position: relative;
        transform: scale(1.25);
        z-index: 99;
      `,
    },
  },
}

export { KEY_FRAMES }
