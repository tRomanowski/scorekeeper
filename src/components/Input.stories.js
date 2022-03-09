import Input from './Input.js';

export default {
  title: 'components/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'gameName',
  title: 'Some text',
  placeholder: 'placeholder',
};
