import { ElementId } from '@jbrowse/core/util/types/mst'
import { types } from 'mobx-state-tree'

export default stateModel = types.model('WBHelpWidget', {
  id: ElementId,
  type: types.literal('WBHelpWidget'),
})

