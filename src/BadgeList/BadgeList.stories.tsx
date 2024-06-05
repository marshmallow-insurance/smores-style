import { Meta, StoryObj } from '@storybook/react'
import { BadgeList } from './BadgeList'
import { BadgeSrcExample } from '../Badge/storybook-data'
import { BadgeSize } from '../Badge/Badge'

const meta: Meta<typeof BadgeList> = {
  title: 'BadgeList',
  component: BadgeList,
}

export default meta

type Story = StoryObj<typeof BadgeList>

export const Primary: Story = {
  args: {
    badges: [
      {
        src: BadgeSrcExample,
        tooltip: {
          title: 'This is a tooltip',
          content: 'This is the content of the tooltip',
        },
      },
      {
        src: BadgeSrcExample,
        disabled: true,
      },
      {
        src: BadgeSrcExample,
        disabled: true,
        tooltip: {
          title: 'This is a tooltip',
          content: 'This is the content of the tooltip',
        },
      },
    ],
  },
}

export const MediumSize: Story = {
  args: {
    size: BadgeSize.Md,
    badges: [
      {
        src: BadgeSrcExample,
        tooltip: {
          title: 'This is a tooltip',
          content: 'This is the content of the tooltip',
        },
      },
      {
        src: BadgeSrcExample,
        disabled: true,
      },
      {
        src: BadgeSrcExample,
        disabled: true,
        tooltip: {
          title: 'This is a tooltip',
          content: 'This is the content of the tooltip',
        },
      },
    ],
  },
}

export const BadgeLimit: Story = {
  args: {
    limit: 4,
    badges: [
      {
        src: BadgeSrcExample,
        tooltip: {
          title: 'This is a tooltip',
          content: 'This is the content of the tooltip',
        },
      },
      {
        src: BadgeSrcExample,
        disabled: true,
        tooltip: {
          title: 'This is a tooltip',
          content: 'This is the content of the tooltip',
        },
      },
      {
        src: BadgeSrcExample,
        disabled: true,
        tooltip: {
          title: 'This is a tooltip',
          content: 'This is the content of the tooltip',
        },
      },
      {
        src: BadgeSrcExample,
        disabled: true,
        tooltip: {
          title: 'This is a tooltip',
          content: 'This is the content of the tooltip',
        },
      },
      {
        src: BadgeSrcExample,
        disabled: true,
        tooltip: {
          title: 'This is a tooltip',
          content: 'This is the content of the tooltip',
        },
      },
    ],
  },
}
