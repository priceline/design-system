import { Note } from '../../DocsUtils'

export const DeprecatedColorsNote = () => {
  return (
    <Note>
      While technically supported, raw color names are deprecated. We strongly recommend using palette colors
      (e.g. &quot;primary.base&quot;) or the &quot;colorScheme&quot; prop instead.
    </Note>
  )
}
