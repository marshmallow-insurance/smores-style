import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { Text } from '../../Text'
import { Box } from '../../Box'
import { InternalCommonFieldProps } from '../commonFieldTypes'
import { Icon } from '../../Icon'

interface InternalFieldProps extends InternalCommonFieldProps {
  children: ReactNode
  className?: string
  assistiveText?: string
  htmlFor?: string
  fieldType: 'field' | 'fieldset'
}

export const InternalField = ({
  children,
  fieldType,
  renderAsTitle,
  htmlFor,
  className,
  label,
  assistiveText,
  outlined = false,
  error,
  errorMsg,
  required,
  status,
  showStatus,
  ...marginProps
}: InternalFieldProps) => {
  const labelTag = fieldType === 'field' ? 'label' : 'legend'

  return (
    <Container
      as={fieldType === 'field' ? 'div' : 'fieldset'}
      className={className}
      {...marginProps}
    >
      {label && (
        <>
          {renderAsTitle ? (
            <Box mb="16px">
              <Text tag={labelTag} typo="heading-small" htmlFor={htmlFor}>
                {label}
              </Text>

              {assistiveText && (
                <Text tag="p" color="subtext" mt={{ custom: 4 }}>
                  {assistiveText}
                </Text>
              )}
            </Box>
          ) : (
            <Text
              tag={labelTag}
              typo="label"
              color="subtext"
              htmlFor={htmlFor}
              mb={{ custom: outlined ? 4 : 0 }}
            >
              {label}
              {required && (
                <Text tag="span" typo="body-small" color="error">
                  *
                </Text>
              )}
            </Text>
          )}
        </>
      )}

      <Box>{children}</Box>

      {error && errorMsg && (
        <Text tag="span" typo="caption" color="error" mt="8px">
          {errorMsg}
        </Text>
      )}

      {/* When status is null, a container is rendered to avoid layout shift */}
      {!(error && errorMsg) && showStatus && status !== undefined && (
        <StatusWrapper displayStatus={!!status} mt={'8px'}>
          <Icon render="included" size={16} color="success" />
          <Text typo="caption" color="success">
            Complete
          </Text>
        </StatusWrapper>
      )}
    </Container>
  )
}

const StatusWrapper = styled(Box)<{ displayStatus: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 0;
  overflow: hidden;

  ${({ displayStatus }) =>
    displayStatus &&
    css`
      transition: width 0.6s ease-in;
      width: 100%;
    `}
`

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  // In case, the element is a 'fieldset', we remove the border
  border: 0;
`
