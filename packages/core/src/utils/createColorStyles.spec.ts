import { createColorStyles, createTheme } from '.'

describe('createColorStyles', () => {
  it('should return the palette provided a theme', () => {
    const colorStyles = createColorStyles(createTheme())

    expect(colorStyles).toMatchInlineSnapshot(`
      Object {
        "blueOnLightBlue": Object {
          "backgroundColor": "#e8f2ff",
          "color": "#0068ef",
        },
        "blueOnWhite": Object {
          "backgroundColor": "#fff",
          "color": "#0068ef",
        },
        "danger": Object {
          "backgroundColor": "#c00",
          "color": "#fff",
        },
        "grayOnWhite": Object {
          "backgroundColor": "#fff",
          "color": "#4f6f8f",
        },
        "greenOnLightGreen": Object {
          "backgroundColor": "#ecf7ec",
          "color": "#0a0",
        },
        "greenOnWhite": Object {
          "backgroundColor": "#fff",
          "color": "#0a0",
        },
        "info": Object {
          "backgroundColor": "#f4f6f8",
          "color": "#001833",
        },
        "purpleOnLightPurple": Object {
          "backgroundColor": "#f5ebfa",
          "color": "#70b",
        },
        "purpleOnWhite": Object {
          "backgroundColor": "#fff",
          "color": "#70b",
        },
        "redOnLightRed": Object {
          "backgroundColor": "#fbebeb",
          "color": "#c00",
        },
        "redOnWhite": Object {
          "backgroundColor": "#fff",
          "color": "#c00",
        },
        "success": Object {
          "backgroundColor": "#0a0",
          "color": "#fff",
        },
        "textOnLightGray": Object {
          "backgroundColor": "#f4f6f8",
          "color": "#001833",
        },
        "textOnOrange": Object {
          "backgroundColor": "#f68013",
          "color": "#001833",
        },
        "textOnWhite": Object {
          "backgroundColor": "#fff",
          "color": "#001833",
        },
        "warning": Object {
          "backgroundColor": "#f68013",
          "color": "#001833",
        },
        "whiteOnBlue": Object {
          "backgroundColor": "#0068ef",
          "color": "#fff",
        },
        "whiteOnDarkOrange": Object {
          "backgroundColor": "#f06f20",
          "color": "#fff",
        },
        "whiteOnGray": Object {
          "backgroundColor": "#4f6f8f",
          "color": "#fff",
        },
        "whiteOnGreen": Object {
          "backgroundColor": "#0a0",
          "color": "#fff",
        },
        "whiteOnPurple": Object {
          "backgroundColor": "#70b",
          "color": "#fff",
        },
        "whiteOnRed": Object {
          "backgroundColor": "#c00",
          "color": "#fff",
        },
        "whiteOnText": Object {
          "backgroundColor": "#001833",
          "color": "#fff",
        },
      }
    `)
  })
})
