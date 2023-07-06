import { createTextStyles, createTheme } from '.'

describe('createTextStyles', () => {
  it('should return a textStyles object', () => {
    const textStyles = createTextStyles(createTheme())

    expect(textStyles).toMatchInlineSnapshot(`
      {
        "body0": {
          "fontSize": "12px",
          "fontWeight": 500,
          "lineHeight": 1.4,
        },
        "body1": {
          "fontSize": "14px",
          "fontWeight": 500,
          "lineHeight": 1.4,
        },
        "body2": {
          "fontSize": "16px",
          "fontWeight": 500,
          "lineHeight": 1.4,
        },
        "display0": {
          "fontSize": "12px",
          "fontWeight": 700,
          "letterSpacing": "0.025em",
          "lineHeight": 1.25,
          "textTransform": "uppercase",
        },
        "display1": {
          "fontSize": "14px",
          "fontWeight": 700,
          "lineHeight": 1.25,
        },
        "display2": {
          "fontSize": "16px",
          "fontWeight": 700,
          "lineHeight": 1.25,
        },
        "display3": {
          "fontSize": "20px",
          "fontWeight": 700,
          "lineHeight": 1.25,
        },
        "display4": {
          "fontSize": "24px",
          "fontWeight": 700,
          "lineHeight": 1.25,
        },
        "display5": {
          "fontSize": "32px",
          "fontWeight": 700,
          "lineHeight": 1.25,
        },
        "display6": {
          "fontSize": "40px",
          "fontWeight": 700,
          "lineHeight": 1.25,
        },
        "display7": {
          "fontSize": "56px",
          "fontWeight": 700,
          "lineHeight": 1.25,
        },
        "display8": {
          "fontSize": "72px",
          "fontWeight": 700,
          "lineHeight": 1.25,
        },
        "small": {
          "fontSize": "10px",
          "fontWeight": 700,
          "lineHeight": 1.4,
        },
      }
    `)
  })
})
