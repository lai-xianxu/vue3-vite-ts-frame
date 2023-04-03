import vue from '@vitejs/plugin-vue';

export const getPluginsList = (command: string) => {
  console.log(command, 'command');
  return [vue()];
};
