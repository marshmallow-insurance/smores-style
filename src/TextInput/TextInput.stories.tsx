import React from 'react'
import { TextInput, TextInputProps } from './TextInput'
import { SupportMessage } from '../SupportMessage'
import { Container } from './Container'
import { noop } from '../utils/noop'

export default {
  title: 'Text Input',
  component: TextInput,
  argTypes: { onChange: { action: 'changed' } },
}

const Template = (props: TextInputProps) => <TextInput {...props} />

export const Default = Template.bind({})

Default.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Placeholder text',
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
}

export const DefaultalternateBg = Template.bind({})

DefaultalternateBg.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Placeholder text',
  alternateBg: true,
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
}

export const TypePassword = Template.bind({})

TypePassword.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Placeholder text',
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
  type: 'password',
}

export const Required = Template.bind({})

Required.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Enter name',
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
  label: 'Please enter your name',
  required: true,
}

export const WithError = Template.bind({})

WithError.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Placeholder text',
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
  required: true,
  error: true,
  errorMsg: 'Oh boy, something went wrong!',
}

export const Disabled = Template.bind({})

Disabled.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Placeholder text',
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
  label: 'label',
  disabled: true,
}

export const DisabledalternateBg = Template.bind({})

DisabledalternateBg.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Placeholder text',
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
  label: 'label',
  alternateBg: true,
  disabled: true,
}

export const WithLabel = Template.bind({})

WithLabel.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Placeholder text',
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
  label: 'label',
  outlined: false,
}

export const WithFrontIcon = Template.bind({})

WithFrontIcon.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Placeholder text',
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
  label: 'label',
  frontIcon: 'at',
}

export const WithTrailingIcon = Template.bind({})

WithTrailingIcon.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Placeholder text',
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
  label: 'label',
  trailingIcon: 'at',
}

export const LabelAsTitle = Template.bind({})

LabelAsTitle.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Enter name',
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
  label: 'Please enter your name',
  required: true,
  assistiveText: 'Some more information...',
  renderAsTitle: true,
}

export const WithReactElementError = Template.bind({})

WithReactElementError.args = {
  id: 'textInput',
  name: 'textInput',
  label: 'with Support Message as Error',
  placeholder: 'Placeholder text',
  onChange: noop,
  onInputChange: noop,
  onBlur: noop,
  error: true,
  errorMsg: <SupportMessage type="warning" description="error!!" />,
}

const WorkingExampleTemplate = () => <Container />

export const WorkingExample = WorkingExampleTemplate.bind({})
