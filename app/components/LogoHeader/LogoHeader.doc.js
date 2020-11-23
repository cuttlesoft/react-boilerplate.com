import { describe, PropTypes } from 'react-desc'

export const doc = LogoHeader => {
  const DocumentedLogoHeader = describe(LogoHeader).description('A LogoHeader').usage(
    `import { LogoHeader } from 'components/LogoHeader';
<LogoHeader />`,
  )

  DocumentedLogoHeader.propTypes = {
    id: PropTypes.string
      .description('The DOM id attribute value to use for the element.')
      .defaultValue(false),
  }

  return DocumentedLogoHeader
}
