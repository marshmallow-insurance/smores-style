import React, { FC, ReactNode, ButtonHTMLAttributes, forwardRef } from 'react'
import styled, { css } from 'styled-components'

import { theme } from '../theme'
import { Icon as IconComponent } from '../Icon'
import { Loader } from '../Loader'

interface IButton {
  primary: boolean
  secondary: boolean
  icon: string
  $loading: boolean
  disabled: boolean
}

type Props = {
  children: ReactNode
  handleClick: (e: React.FormEvent<HTMLButtonElement>) => void
  primary?: boolean
  secondary?: boolean
  icon?: string
  disabled?: boolean
  loading?: boolean
}

type ChipProps = Props & ButtonHTMLAttributes<HTMLButtonElement>

export const Chip: FC<ChipProps> = forwardRef<HTMLButtonElement, ChipProps>(
  (
    {
      children,
      handleClick,
      primary = false,
      secondary = false,
      disabled = false,
      loading = false,
      icon = '',
      ...props
    },
    ref,
  ) => (
    <Container
      primary={primary}
      secondary={secondary}
      disabled={disabled || loading}
      $loading={loading}
      onClick={handleClick}
      icon={icon}
      {...props}
      ref={ref}
    >
      {loading ? (
        <Loader color={primary ? 'white' : 'pink5'} height="16" />
      ) : (
        <>
          {icon && (
            <IconComponent
              render={icon}
              size={20}
              color={primary ? 'white' : 'pink5'}
            />
          )}
          <ChildrenContainer>{children}</ChildrenContainer>
        </>
      )}
    </Container>
  ),
)

Chip.displayName = 'Chip'

const Container = styled.button<IButton>(
  ({ primary, secondary, icon, $loading, disabled }) => css`
    align-items: center;
    background-color: ${theme.colors.pink5};
    border-radius: 100px;
    border-shadow: none;
    border: 2px solid ${theme.colors.pink5};
    color: ${theme.colors.white};
    display: flex;
    font-size: 16px;
    justify-content: ${icon ? 'space-evenly' : 'center'};
    line-height: 100%;
    padding: 8px 16px 8px ${icon ? '8px' : '16px'};
    width: 98px;
    cursor: ${disabled || $loading ? 'not-allowed' : 'pointer'};
    opacity: ${disabled ? '0.5' : '1'};
    ${primary &&
    css`
      &:hover {
        background-color: ${(disabled || $loading) && theme.colors.pink6};
      }
    `}
    ${secondary &&
    css`
      color: ${theme.colors.pink5};
      background-color: ${theme.colors.white};
      &:hover {
        background-color: ${!(disabled || $loading) && theme.colors.bg2};
      }
    `};
  `,
)

const ChildrenContainer = styled.div`
  flex-grow: 1;
`
