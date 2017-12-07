import {mount} from 'vue-test-utils'
import Reminder from './../src/components/Reminder.vue'
import expect from  'expect'
describe('reminders', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(Reminder);
  })

  it ('hides the reminders list if there are none', () => {
    expect(wrapper.contains('ul')).toBe(false)
  });

  it ('can add new reminders', () => {


    addReminder('Go to office')
    
    expect(wrapper.find('ul').text()).toBe('Go to office')

  });

  function addReminder(body) {
    let newReminder = wrapper.find('.new-reminder');
    newReminder.element.value = body;
    newReminder.trigger('input');

    wrapper.find('button').trigger('click')
  }
});
