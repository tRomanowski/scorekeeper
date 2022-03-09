import Navigation from './Navigation.js';

export default {
  title: 'components/Navigation',
  component: Navigation,
};

const Template = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Dark = Template.bind({});
Dark.args = {
  isDark: true,
};
