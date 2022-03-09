import Button from './Button.js';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    onClick: 'onClick',
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Text',
  isDark: 'true',
};
