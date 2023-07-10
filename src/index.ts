import Plugin from '@jbrowse/core/Plugin'
import PluginManager from '@jbrowse/core/PluginManager'
import ViewType from '@jbrowse/core/pluggableElementTypes/ViewType'
import { AbstractSessionModel, isAbstractMenuManager } from '@jbrowse/core/util'
import { version } from '../package.json'
import {
  WBHelpWidget as WBHelpWidget,
  configSchema as configSchema,
  stateModel as WBHelpWdigetStateModel,
} from './WBHelpWidget'

export default class JBrowseSiteSpecificHelp extends Plugin {
  name = 'JBrowseSiteSpecificHelp'
  version = version

  install(pluginManager: PluginManager) {

    pluginManager.addWidgetType(() => {
      return new WidgetType({
        name: 'WBHelpWidget',
        heading: 'WormBase Help',
        configSchema: configSchema,
        stateModel: wbHelpWdigetStateModel,
        ReactComponent: lazy(
          () => import('./WBHelpWidget/components/WBHelpWidget'),
        ),
      })
    })

    configure(pluginManager: PluginManager) {
      if (isAbstractMenuManager(pluginManager.rootModel)) {
        pluginManager.rootModel.appendToMenu('Help', {
          label: 'WormBase Help',
          icon: HelpIcon,
          onClick: (session: SessionWithWidgets) => {
            const widget = session.addWidget('WBHelpWidget', 'wbhelpWidget')
            session.showWidget(widget)
          }
        })
      }
    }
  }
}
