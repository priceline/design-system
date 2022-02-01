import { createPalette, createTheme } from '.'

describe('createPalette', () => {
  it('should return a palette', () => {
    const palette = createPalette({ ...createTheme() })

    expect(palette).toMatchInlineSnapshot(`
      Object {
        "alert": Object {
          "base": "#f68013",
          "dark": "#f06f20",
          "light": "#fef2e7",
          "shade": "#923800",
          "tint": "#faaf69",
          "tone": "#b74600",
        },
        "background": Object {
          "base": "#edf0f3",
          "dark": "#4f6f8f",
          "darkest": "#001833",
          "light": "#f4f6f8",
          "lightest": "#fff",
          "shade": "#354b60",
          "tint": "#d5dce4",
          "tone": "#879db3",
        },
        "border": Object {
          "base": "#c0cad5",
          "dark": "#5e6872",
          "light": "#eceff2",
          "shade": "#1a1d20",
          "tint": "#e0e5ea",
          "tone": "#868d95",
        },
        "caution": Object {
          "base": "#fedc2a",
          "dark": "#806e0e",
          "light": "#fff3c0",
          "shade": "#665811",
          "tint": "#fee875",
          "tone": "#cbb022",
        },
        "error": Object {
          "base": "#c00",
          "dark": "#800",
          "light": "#fbebeb",
          "shade": "#6d0000",
          "tint": "#eb9999",
          "tone": "#b80000",
        },
        "highlight": Object {
          "base": "#8cdd36",
          "dark": "#2e9000",
          "light": "#d0f1ac",
          "shade": "#017000",
          "tint": "#b9ea85",
          "tone": "#66be20",
        },
        "notify": Object {
          "base": "#fedc2a",
          "dark": "#806e0e",
          "light": "#fff3c0",
          "shade": "#665811",
          "tint": "#fee875",
          "tone": "#cbb022",
        },
        "pricePrimary": Object {
          "base": "#0a0",
          "dark": "#060",
          "light": "#ecf7ec",
          "shade": "#040",
          "tint": "#80d580",
          "tone": "#080",
        },
        "priceSecondary": Object {
          "base": "#0068ef",
          "dark": "#049",
          "light": "#e8f2ff",
          "shade": "#002f6d",
          "tint": "#99c3f9",
          "tone": "#0055c4",
        },
        "primary": Object {
          "base": "#0068ef",
          "dark": "#049",
          "light": "#e8f2ff",
          "shade": "#002f6d",
          "tint": "#99c3f9",
          "tone": "#0055c4",
        },
        "promoPrimary": Object {
          "base": "#70b",
          "dark": "#530083",
          "light": "#f5ebfa",
          "shade": "#410067",
          "tint": "#c28ce0",
          "tone": "#5f0096",
        },
        "promoSecondary": Object {
          "base": "#fe3e81",
          "dark": "#9e1f4b",
          "light": "#fff0f5",
          "shade": "#701b39",
          "tint": "#ffa0c4",
          "tone": "#d02962",
        },
        "secondary": Object {
          "base": "#0a0",
          "dark": "#060",
          "light": "#ecf7ec",
          "shade": "#040",
          "tint": "#80d580",
          "tone": "#080",
        },
        "strike": Object {
          "base": "#c00",
        },
        "success": Object {
          "base": "#0a0",
          "dark": "#060",
          "light": "#ecf7ec",
          "shade": "#040",
          "tint": "#80d580",
          "tone": "#080",
        },
        "text": Object {
          "base": "#001833",
          "dark": "#001023",
          "heading": "#003c8a",
          "light": "#4f6f8f",
          "lightest": "#fff",
          "tint": "#3f5972",
        },
        "warning": Object {
          "base": "#c00",
          "dark": "#800",
          "light": "#fbebeb",
          "shade": "#6d0000",
          "tint": "#eb9999",
          "tone": "#b80000",
        },
      }
    `)
  })
})
