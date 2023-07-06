import { createColorStyles, createTheme } from '.'

describe('createColorStyles', () => {
  it('should return the palette provided a theme', () => {
    const colorStyles = createColorStyles(createTheme())

    expect(colorStyles).toMatchInlineSnapshot(`
      {
        "blueOnLightBlue": {
          "backgroundColor": "#e8f2ff",
          "color": "#0068ef",
        },
        "blueOnWhite": {
          "backgroundColor": "#fff",
          "color": "#0068ef",
        },
        "danger": {
          "backgroundColor": "#c00",
          "color": "#fff",
        },
        "grayOnWhite": {
          "backgroundColor": "#fff",
          "color": "#4f6f8f",
        },
        "greenOnLightGreen": {
          "backgroundColor": "#ecf7ec",
          "color": "#0a0",
        },
        "greenOnWhite": {
          "backgroundColor": "#fff",
          "color": "#0a0",
        },
        "info": {
          "backgroundColor": "#f4f6f8",
          "color": "#001833",
        },
        "purpleOnLightPurple": {
          "backgroundColor": "#f5ebfa",
          "color": "#70b",
        },
        "purpleOnWhite": {
          "backgroundColor": "#fff",
          "color": "#70b",
        },
        "redOnLightRed": {
          "backgroundColor": "#fbebeb",
          "color": "#c00",
        },
        "redOnWhite": {
          "backgroundColor": "#fff",
          "color": "#c00",
        },
        "success": {
          "backgroundColor": "#0a0",
          "color": "#fff",
        },
        "textOnLightGray": {
          "backgroundColor": "#f4f6f8",
          "color": "#001833",
        },
        "textOnOrange": {
          "backgroundColor": "#f68013",
          "color": "#001833",
        },
        "textOnWhite": {
          "backgroundColor": "#fff",
          "color": "#001833",
        },
        "warning": {
          "backgroundColor": "#f68013",
          "color": "#001833",
        },
        "whiteOnBlue": {
          "backgroundColor": "#0068ef",
          "color": "#fff",
        },
        "whiteOnDarkOrange": {
          "backgroundColor": "#f06f20",
          "color": "#fff",
        },
        "whiteOnGray": {
          "backgroundColor": "#4f6f8f",
          "color": "#fff",
        },
        "whiteOnGreen": {
          "backgroundColor": "#0a0",
          "color": "#fff",
        },
        "whiteOnPurple": {
          "backgroundColor": "#70b",
          "color": "#fff",
        },
        "whiteOnRed": {
          "backgroundColor": "#c00",
          "color": "#fff",
        },
        "whiteOnText": {
          "backgroundColor": "#001833",
          "color": "#fff",
        },
      }
    `)
  })
})
