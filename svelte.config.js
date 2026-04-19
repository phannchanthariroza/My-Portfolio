import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: '/My-Portfolio',
      relative: false
    }
  }
};

export default config;
