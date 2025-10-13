import { shallowMount } from '@vue/test-utils';
import <%= name %> from '@/components/<%= name %>.vue';

describe('<%= name %>.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(<%= name %>, {
      propsData: {
        // Add sample props if your component requires them
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('mounts properly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('renders expected content', () => {
    // Example: check if specific text is rendered
    // expect(wrapper.text()).toContain('Expected text');
  });

  test('emits events correctly', async () => {
    // Example: simulate a button click
    // await wrapper.find('button').trigger('click');
    // expect(wrapper.emitted().click).toBeTruthy();
  });

  test('matches snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
