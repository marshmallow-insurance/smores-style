import React from 'react'
import { TextInput } from './TextInput'
import { Container } from './Container'

export default {
  title: 'Text Input',
  component: TextInput,
  argTypes: { onChange: { action: 'changed' } },
}

const Template = (args) => <TextInput {...args} />

export const Default = Template.bind({})

Default.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Placeholder text',
  onChange: () => {},
  onInputChange: () => {},
  onBlur: () => {},
}

export const TypeEmail = Template.bind({})

TypeEmail.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Placeholder text',
  onChange: () => {},
  onInputChange: () => {},
  onBlur: () => {},
  type: 'email',
}

export const TypePassword = Template.bind({})

TypePassword.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Placeholder text',
  onChange: () => {},
  onInputChange: () => {},
  onBlur: () => {},
  type: 'password',
}

export const Error = Template.bind({})

Error.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Placeholder text',
  onChange: () => {},
  onInputChange: () => {},
  onBlur: () => {},
  error: true,
  errorMsg: 'Oh boy, something went wrong!',
}

export const WithOutline = Template.bind({})

WithOutline.args = {
  id: 'textInput',
  name: 'textInput',
  outlined: true,
  label: 'with outline',
  placeholder: 'Placeholder text',
  onChange: () => {},
  onInputChange: () => {},
  onBlur: () => {},
}

export const WithLabel = Template.bind({})

WithLabel.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Placeholder text',
  onChange: () => {},
  onInputChange: () => {},
  onBlur: () => {},
  label: 'label',
  outlined: false,
}

export const WithIcon = Template.bind({})

WithIcon.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Placeholder text',
  onChange: () => {},
  onInputChange: () => {},
  onBlur: () => {},
  label: 'label',
  trailingIcon: 'at',
}

export const Disabled = Template.bind({})

Disabled.args = {
  id: 'textInput',
  name: 'textInput',
  placeholder: 'Placeholder text',
  onChange: () => {},
  onInputChange: () => {},
  onBlur: () => {},
  label: 'label',
  disabled: true,
}

const WorkingExampleTemplate = (args) => <Container {...args} />

export const WorkingExample = WorkingExampleTemplate.bind({})
