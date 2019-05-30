import styled from '@emotion/styled'

import { mq } from '../../utils/ds'

export const Wrapper = styled('div')(mq({
  padding: ['13px 0 20px', '30px 0 40px'],
  borderBottom: '1px solid #E0E1E3',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: [16, 0]
}))
