import React from 'react'
import { observer } from 'mobx-react'

// Components
import { Heading } from 'components/Heading'

/**
 *
 * Dashboard
 *
 */
const Dashboard = observer(() => (
  <>
    <Heading level="2" pad="small">
      Dashboard
    </Heading>
  </>
))

export default Dashboard
