import { Box } from '../Box'
import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '../Icon'
import { Color, theme } from '../theme'
import { Text } from '../Text'
import { Banner } from './types'
import { useTimeout } from '../hooks'

type StylesItem = {
  iconColor: Color
  backgroundColor: string
  textColor: Color
}

type BannerType = 'upsell' | 'critical' | 'general' | 'success'

const styles: Record<BannerType, StylesItem> = {
  upsell: {
    iconColor: 'liquorice',
    backgroundColor: theme.colors.marshmallowPink,
    textColor: 'liquorice',
  },
  critical: {
    iconColor: 'mascarpone',
    backgroundColor: theme.colors.strawberry,
    textColor: 'mascarpone',
  },
  general: {
    iconColor: 'mascarpone',
    backgroundColor: theme.colors.liquorice,
    textColor: 'mascarpone',
  },
  success: {
    iconColor: 'mascarpone',
    backgroundColor: theme.colors.apple,
    textColor: 'mascarpone',
  },
}

interface Props extends Banner {
  deleteBanner: (id: string) => void
}

export const BannerItem: FC<Props> = ({
  type,
  autoCloseTime = 4,
  id,
  message,
  topOffset,
  exploreAction,
  showExploreText,
  showExploreIcon,
  leadingIcon,
  canManuallyClose,
  showCloseIcon,
  deleteBanner,
}) => {
  const autoCloseBaner = () => {
    if (type !== 'critical') return deleteBanner(id)
    else {
      return
    }
  }
  useTimeout(() => autoCloseBaner(), autoCloseTime * 1000)

  const textColor = styles[type].textColor
  const iconColor = styles[type].iconColor

  return (
    <BannerWrapper
      p="24px"
      mt={{ custom: topOffset }}
      key={id}
      flex
      justifyContent="space-between"
      type={type}
    >
      <Box flex alignItems="center">
        {leadingIcon && (
          <Icon mr="12px" render={leadingIcon} size={24} color={iconColor} />
        )}
        <Text typo="headline-small" color={textColor}>
          {message}
        </Text>
      </Box>
      <Box>
        {canManuallyClose && (
          <GenericButton
            onClick={() => deleteBanner(id)}
            aria-label={`close banner ${message}`}
          >
            {showCloseIcon ? (
              <Icon render="cross" size={16} color={iconColor} />
            ) : (
              <UnderlinedText tag="span" typo="desc-medium" color={textColor}>
                Dismiss
              </UnderlinedText>
            )}
          </GenericButton>
        )}
        {exploreAction && (
          <GenericButton onClick={exploreAction} aria-label={`cta ${message}`}>
            <Box flex alignItems="center">
              {showExploreText && (
                <UnderlinedText
                  mx="12px"
                  tag="span"
                  typo="desc-medium"
                  color={textColor}
                >
                  Explore
                </UnderlinedText>
              )}
              {showExploreIcon && (
                <Icon render="arrow" size={24} color={iconColor} rotate={180} />
              )}
            </Box>
          </GenericButton>
        )}
      </Box>
    </BannerWrapper>
  )
}

const BannerWrapper = styled(Box)<{ type: BannerType }>(
  ({ type }) => css`
    border-radius: 0px 0px 16px 16px;
    background-color: ${styles[type].backgroundColor};
  `,
)

const GenericButton = styled.button`
  cursor: pointer;
`

const UnderlinedText = styled(Text)`
  text-decoration: underline;
`
