# jbrowse-site-specific-help
> A JBrowse 2 plugin to make a site specific help widget

## Install

### For use in [JBrowse Web](https://jbrowse.org/jb2/docs/quickstart_web)

No installation required

### Production

Add to the "plugins" of your JBrowse Web config:

```json
{
  "plugins": [
    {
      "name": "JBrowseSiteSpecificHelp",
      "url": "https://wormbase.org/tools/genome/jbrowse2/plugins/JBrowseSiteSpecificHelp/jbrowse-site-specific-help.umd.development.js"
    }
  ]
}
```

### Development

This plugin is relatively straightforward and serves as a good example of how to 
add items to menus.  You can find the repo at https://github.com/scottcain/jbrowse-site-specific-help.

While this plugin is WormBase specific, generalizing it to your own site should not be difficult.
Basically, find referneces to WormBase in the code and change them.  I think these items are limited to:

* Change the menu label in `src/index.ts` from `WormBase Help` to something else
* Edit 	`src/WBHelpWidget/components/WBHelpWidget.tsx` to change the label from `JBrowse 2 @ WormBase` to something else, and change the links and labels to what you want.

After running `yarn` and `yarn build` place `jbrowse-site-specific-help.umd.development.js` and `jbrowse-site-specific-help.umd.development.js.map` in a web-accessible place and modify the plugin json code above to point at it.

