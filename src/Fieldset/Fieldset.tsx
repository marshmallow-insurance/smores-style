import React from 'react'
import styled from 'styled-components'
import { Box } from '../Box'

type FieldSetProps = {
  children: React.ReactChildren
  label: string
  outlined?: boolean
}

export const Fieldset = ({
  children,
  label,
  outlined = false,
}: FieldSetProps) => {
  return (
    <fieldset>
      <Box mb={outlined ? '4px' : '0px'}>
        <Legend>{label}</Legend>
      </Box>

      {children}
    </fieldset>
  )
}

const Legend = styled.legend`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 8px;
`
