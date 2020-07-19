import React from 'react'
import { observer } from 'mobx-react'

// Components
import { Container } from 'components/Container'
import { Heading } from 'components/Heading'

/**
 *
 * Dashboard
 *
 */
const Dashboard = observer(() => (
  <Container data-testid="dashboard-page">
    <Heading level="2" pad="small">
      Dashboard
    </Heading>
  </Container>
))

export default Dashboard
