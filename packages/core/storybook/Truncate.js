import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Truncate } from '../src'

const loripsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est, qui non oderit libidinosam, protervam adolescentiam? Sed ego in hoc resisto; Ratio enim nostra consentit, pugnat oratio. Nihil enim hoc differt.

Quamquam id quidem licebit iis existimare, qui legerint. Poterat autem inpune; Hunc vos beatum; Tibi hoc incredibile, quod beatissimum. Qui non moveatur et offensione turpitudinis et comprobatione honestatis?

Quod equidem non reprehendo; Facete M. Etsi ea quidem, quae adhuc dixisti, quamvis ad aetatem recte isto modo dicerentur. Quae diligentissime contra Aristonem dicuntur a Chryippo. Dicimus aliquem hilare vivere; Non est igitur summum malum dolor. Quamquam tu hanc copiosiorem etiam soles dicere.

Equidem, sed audistine modo de Carneade? Confecta res esset. Audeo dicere, inquit. Ampulla enim sit necne sit, quis non iure optimo irrideatur, si laboret? Sed quanta sit alias, nunc tantum possitne esse tanta. Ita similis erit ei finis boni, atque antea fuerat, neque idem tamen; Prave, nequiter, turpiter cenabat; Quod vestri non item. Modo etiam paulum ad dexteram de via declinavi, ut ad Pericli sepulcrum accederem.

Duo Reges: constructio interrete. Mihi enim satis est, ipsis non satis. Si enim ita est, vide ne facinus facias, cum mori suadeas. Illud dico, ea, quae dicat, praeclare inter se cohaerere. Est enim tanti philosophi tamque nobilis audacter sua decreta defendere.
`

storiesOf('Truncate', module)
  .add('Without Container', () => <Truncate width={50}>{loripsum}</Truncate>)
  .add('With Container', () => (
    <Box width={3 / 10}>
      <Truncate>{loripsum}</Truncate>
    </Box>
  ))
