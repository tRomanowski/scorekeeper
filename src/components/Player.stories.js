import Player from './Player.js';

export default {
  title: 'components/Player',
  component: Player,
  argTypes: {
    onDecrement: 'onDecrement',
    onIncrement: 'onIncrement',
  },
};

const Template = (args) => <Player {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Jane Doe',
  score: 10,
};
