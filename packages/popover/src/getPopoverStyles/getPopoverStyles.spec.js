import getPopoverStyles from './getPopoverStyles'

const mockRefs = { reference: { current: { offsetWidth: 20, offsetHeight: 20 } } }

const props = {
  arrowX: 5,
  arrowY: 10,
  refs: mockRefs,
  strategy: 'absolute',
  x: 200,
  y: 100,
}

describe('getPopoverStyles', () => {
  describe('top', () => {
    it('creates styles for middle placement', () => {
      const styles = getPopoverStyles({ ...props })
      expect(styles.arrow).toStrictEqual({
        top: 10,
        left: 5,
        right: '',
        bottom: '3px',
      })
      expect(styles.popover).toStrictEqual({
        position: 'absolute',
        top: 100,
        left: 200,
      })
    })

    it('creates styles for start placement', () => {
      const styles = getPopoverStyles({ ...props, placement: 'top-start' })
      expect(styles.arrow).toStrictEqual({
        top: 10,
        left: 5,
        right: '',
        bottom: '3px',
      })
      expect(styles.popover).toStrictEqual({
        position: 'absolute',
        top: 100,
        left: 200,
      })
    })

    it('creates styles for end placement', () => {
      const styles = getPopoverStyles({ ...props, placement: 'top-end' })
      expect(styles.arrow).toStrictEqual({
        top: 10,
        left: 5,
        right: '',
        bottom: '3px',
      })
      expect(styles.popover).toStrictEqual({
        position: 'absolute',
        top: 100,
        left: 200,
      })
    })

    it('returns styles when popover is not open yet', () => {
      const styles = getPopoverStyles({ placement: 'top-start', strategy: 'absolute' })
      expect(styles.arrow).toStrictEqual({
        top: '',
        left: '',
        right: '',
        bottom: '3px',
      })
      expect(styles.popover).toStrictEqual({
        position: 'absolute',
        top: 0,
        left: 0,
      })
    })
  })

  describe('bottom', () => {
    it('creates styles for middle placement', () => {
      const styles = getPopoverStyles({ ...props, placement: 'bottom' })
      expect(styles.arrow).toStrictEqual({
        top: '3px',
        left: 5,
        right: '',
        bottom: '',
      })
      expect(styles.popover).toStrictEqual({
        position: 'absolute',
        top: 100,
        left: 200,
      })
    })

    it('creates styles for start placement', () => {
      const styles = getPopoverStyles({ ...props, placement: 'bottom-start' })
      expect(styles.arrow).toStrictEqual({
        top: '3px',
        left: 5,
        right: '',
        bottom: '',
      })
      expect(styles.popover).toStrictEqual({
        position: 'absolute',
        top: 100,
        left: 200,
      })
    })

    it('creates styles for end placement', () => {
      const styles = getPopoverStyles({ ...props, placement: 'bottom-end' })
      expect(styles.arrow).toStrictEqual({
        top: '3px',
        left: 5,
        right: '',
        bottom: '',
      })
      expect(styles.popover).toStrictEqual({
        position: 'absolute',
        top: 100,
        left: 200,
      })
    })

    it('returns styles when popover is not open yet', () => {
      const styles = getPopoverStyles({ placement: 'bottom-end', strategy: 'absolute' })
      expect(styles.arrow).toStrictEqual({
        top: '3px',
        left: '',
        right: '',
        bottom: '',
      })
      expect(styles.popover).toStrictEqual({
        position: 'absolute',
        top: 0,
        left: 0,
      })
    })
  })

  describe('left', () => {
    it('creates styles for middle placement', () => {
      const styles = getPopoverStyles({ ...props, placement: 'left' })
      expect(styles.arrow).toStrictEqual({
        top: 10,
        left: 5,
        right: '3px',
        bottom: '',
      })
      expect(styles.popover).toStrictEqual({
        position: 'absolute',
        top: 100,
        left: 200,
      })
    })

    it('creates styles for start placement', () => {
      const styles = getPopoverStyles({ ...props, placement: 'left-start' })
      expect(styles.arrow).toStrictEqual({
        top: 10,
        left: 5,
        right: '3px',
        bottom: '',
      })
      expect(styles.popover).toStrictEqual({
        position: 'absolute',
        top: 100,
        left: 200,
      })
    })

    it('creates styles for end placement', () => {
      const styles = getPopoverStyles({ ...props, placement: 'left-end' })
      expect(styles.arrow).toStrictEqual({
        top: 10,
        left: 5,
        right: '3px',
        bottom: '',
      })
      expect(styles.popover).toStrictEqual({
        position: 'absolute',
        top: 100,
        left: 200,
      })
    })

    it('returns styles when popover is not open yet', () => {
      const styles = getPopoverStyles({ placement: 'left-start', strategy: 'absolute' })
      expect(styles.arrow).toStrictEqual({
        top: '',
        left: '',
        right: '3px',
        bottom: '',
      })
      expect(styles.popover).toStrictEqual({
        position: 'absolute',
        top: 0,
        left: 0,
      })
    })
  })

  describe('right', () => {
    it('creates styles for middle placement', () => {
      const styles = getPopoverStyles({ ...props, placement: 'right' })
      expect(styles.arrow).toStrictEqual({
        top: 10,
        left: '3px',
        right: '',
        bottom: '',
      })
      expect(styles.popover).toStrictEqual({
        position: 'absolute',
        top: 100,
        left: 200,
      })
    })

    it('creates styles for start placement', () => {
      const styles = getPopoverStyles({ ...props, placement: 'right-start' })
      expect(styles.arrow).toStrictEqual({
        top: 10,
        left: '3px',
        right: '',
        bottom: '',
      })
      expect(styles.popover).toStrictEqual({
        position: 'absolute',
        top: 100,
        left: 200,
      })
    })

    it('creates styles for end placement', () => {
      const styles = getPopoverStyles({ ...props, placement: 'right-end' })
      expect(styles.arrow).toStrictEqual({
        top: 10,
        left: '3px',
        right: '',
        bottom: '',
      })
      expect(styles.popover).toStrictEqual({
        position: 'absolute',
        top: 100,
        left: 200,
      })
    })

    it('returns styles when popover is not open yet', () => {
      const styles = getPopoverStyles({ placement: 'right-end' })
      expect(styles.arrow).toStrictEqual({
        top: '',
        left: '3px',
        right: '',
        bottom: '',
      })
      expect(styles.popover).toStrictEqual({
        position: 'absolute',
        top: 0,
        left: 0,
      })
    })
  })

  it('handles styles for invalid placement', () => {
    const styles = getPopoverStyles({ placement: 'invalid', strategy: 'fixed' })
    expect(styles.arrow).toStrictEqual({
      top: '',
      left: '',
      right: '',
      bottom: '',
      undefined: '3px',
    })
    expect(styles.popover).toStrictEqual({
      position: 'fixed',
      top: 0,
      left: 0,
    })
  })
})
