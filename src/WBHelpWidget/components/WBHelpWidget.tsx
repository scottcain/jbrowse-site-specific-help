import React from 'react'
import { observer } from 'mobx-react'
import { IAnyStateTreeNode } from 'mobx-state-tree'
import { getSession } from '@jbrowse/core/util'
import { makeStyles } from 'tss-react/mui'
import { Link, Typography } from '@mui/material'
import { ConfigurationSchema } from '@jbrowse/core/configuration';

export const configSchema = ConfigurationSchema('WBHelpWidget', {})

const useStyles = makeStyles()(theme => ({
  root: {
    margin: theme.spacing(2),
  },
  subtitle: {
    margin: theme.spacing(1),
  },
}))

function WBHelp({ model }: { model?: IAnyStateTreeNode }) {
  const { classes } = useStyles()
  const root = model ? getSession(model) : { version: '' }
  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center">
        JBrowse 2 @ WormBase
      </Typography>
      <ul>
        <li>
          <Link
            href="https://blog.wormbase.org/2023/06/22/jbrowse-2-comparative-data/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Working with comparative/synteny data
          </Link>
        </li>
        <li>
          <Link
            href="https://blog.wormbase.org/2023/06/21/jbrowse-2-getting-sequence/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Getting DNA sequence
          </Link>
        </li>
        <li>
          <Link
            href="https://blog.wormbase.org/2023/06/21/jbrowse-2-searching-for-features-and-sequences/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Searching for features and sequences
          </Link>
        </li>
        <li>
          <Link
            href="https://blog.wormbase.org/2023/06/21/jbrowse-2-working-lists-bookmarks-and-sessions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Working with lists, bookmarks and sessions
          </Link>
        </li>
        <li>
          <Link
            href="https://blog.wormbase.org/2023/06/23/jbrowse-2-adding-your-own-data/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adding your own data
          </Link>
        </li>
        <li>
          <Link
            href="https://blog.wormbase.org/2023/07/14/jbrowse-2-sharing-views/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sharing views 
          </Link>
        </li>
      </ul>
      <p>The source code for this help widget plugin is on <a target="_blank" href="https://github.com/scottcain/jbrowse-site-specific-help">GitHub</a></p>
    </div>
  )
}

export default observer(WBHelp)
