import styled from '@emotion/styled'

import { mq } from '../../utils/ds'

export const Wrapper = styled('div')(mq({
  display: ['block', 'none'],
  lineHeight: 0,
  cursor: 'pointer'
}))
