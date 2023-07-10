import { lazy } from 'react'
import Plugin from '@jbrowse/core/Plugin'
import PluginManager from '@jbrowse/core/PluginManager'
import { isAbstractMenuManager, SessionWithWidgets } from '@jbrowse/core/util'
import { WidgetType } from '@jbrowse/core/pluggableElementTypes'
import { ConfigurationSchema } from '@jbrowse/core/configuration'

// icons
import HelpIcon from '@mui/icons-material/Help'

// locals
import { version } from '../package.json'
import {
  WBHelpWidget,
  stateModel as WBHelpWidgetStateModel,
} from './WBHelpWidget'
export default class JBrowseSiteSpecificHelp extends Plugin {
  name = 'JBrowseSiteSpecificHelp'
  version = version

  install(pluginManager: PluginManager) {
    pluginManager.addWidgetType(() => {
      return new WidgetType({
        name: 'WBHelpWidget',
        heading: 'WormBase Help',
        configSchema: ConfigurationSchema('WBHelpWidget', {}),
        stateModel: WBHelpWidgetStateModel,
        ReactComponent: lazy(
          () => import('./WBHelpWidget/components/WBHelpWidget'),
        ),
      })
    })
  }
  configure(pluginManager: PluginManager) {
    if (isAbstractMenuManager(pluginManager.rootModel)) {
      pluginManager.rootModel.appendToMenu('Help', {
        label: 'WormBase Help',
        icon: HelpIcon,
        onClick: (session: SessionWithWidgets) => {
          const widget = session.addWidget('WBHelpWidget', 'wbhelpWidget')
          session.showWidget(widget)
        },
      })
    }
  }
}
