import { createTextStyles, createTheme } from '.'

describe('createTextStyles', () => {
  it('should return a textStyles object', () => {
    const textStyles = createTextStyles(createTheme())

    expect(textStyles).toMatchInlineSnapshot(`
      Object {
        "body0": Object {
          "fontSize": "12px",
          "fontWeight": 500,
          "lineHeight": 1.4,
        },
        "body1": Object {
          "fontSize": "14px",
          "fontWeight": 500,
          "lineHeight": 1.4,
        },
        "body2": Object {
          "fontSize": "16px",
          "fontWeight": 500,
          "lineHeight": 1.4,
        },
        "display0": Object {
          "fontSize": "12px",
          "fontWeight": 700,
          "letterSpacing": "0.025em",
          "lineHeight": 1.25,
          "textTransform": "uppercase",
        },
        "display1": Object {
          "fontSize": "14px",
          "fontWeight": 700,
          "lineHeight": 1.25,
        },
        "display2": Object {
          "fontSize": "16px",
          "fontWeight": 700,
          "lineHeight": 1.25,
        },
        "display3": Object {
          "fontSize": "20px",
          "fontWeight": 700,
          "lineHeight": 1.25,
        },
        "display4": Object {
          "fontSize": "24px",
          "fontWeight": 700,
          "lineHeight": 1.25,
        },
        "display5": Object {
          "fontSize": "32px",
          "fontWeight": 700,
          "lineHeight": 1.25,
        },
        "display6": Object {
          "fontSize": "40px",
          "fontWeight": 700,
          "lineHeight": 1.25,
        },
        "display7": Object {
          "fontSize": "56px",
          "fontWeight": 700,
          "lineHeight": 1.25,
        },
        "display8": Object {
          "fontSize": "72px",
          "fontWeight": 700,
          "lineHeight": 1.25,
        },
        "small": Object {
          "fontSize": "10px",
          "fontWeight": 700,
          "lineHeight": 1.4,
        },
      }
    `)
  })
})
