import React from 'react'
import { Heading } from '@rebass/emotion'

const BaseHeading = props => (
  <Heading
    lineHeight={1.25}
    fontFamily="system"
    alignSelf="flex-start"
    {...props}
  />
)

const H2 = props => (
  <BaseHeading fontSize={5} as="h2" mb={4} mt={5} {...props} />
)
const H3 = props => (
  <BaseHeading fontSize={4} as="h3" mb={3} mt={4} {...props} />
)
const H4 = props => (
  <BaseHeading fontSize={2} as="h4" mb={3} mt={3} {...props} />
)

export { H2, H3, H4 }

export default BaseHeading
