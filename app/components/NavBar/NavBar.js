/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { User } from 'grommet-icons'
import { observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'

// Components
import { Avatar } from '../Avatar'
import { Box } from '../Box'
import { Header } from '../Header'
import { Heading } from '../Heading'
import { Link } from '../Link'
import { Menu } from '../Menu'

// Helpers
import { doc } from './NavBar.doc'
import { createWithDoc } from '../../utils/helpers'

// Stores
import { RootStoreContext } from '../../stores/RootStore'

/**
 *
 * NavBar
 *
 */
const NavBar = observer(
  withRouter(({ history, ...rest }) => {
    const { clearStore, user } = useContext(RootStoreContext)

    return (
      <Header background="light-2" pad="small" {...rest} style={{ width: '100vw' }}>
        <Box>
          <Link to={user.isAuthenticated ? '/dashboard' : '/'}>
            <Heading level="2">React Boilerplate</Heading>
          </Link>
        </Box>

        {user.isAuthenticated && (
          <Menu
            dropProps={{ align: { top: 'bottom', left: 'left' } }}
            label={
              <Avatar background="brand">
                <User color="white" />
              </Avatar>
            }
            items={[
              {
                label: 'Settings',
                onClick: () => history.push('/profile'),
              },
              {
                label: 'Logout',
                onClick: () => {
                  clearStore()
                },
              },
            ]}
          />
        )}
      </Header>
    )
  }),
)

export default createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: NavBar,
})
