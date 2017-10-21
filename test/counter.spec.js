import Counter from './../src/components/Counter.vue'
import {mount} from 'vue-test-utils'
import expect from 'expect'
describe('Counter', () => {

    let wrapper = mount(Counter);
        
    it ('defaults to a count of 0', () => {
        expect(wrapper.vm.count).toBe(0);
    });

    it ('presents the current count', () => {
        expect(wrapper.find('.count').html()).toContain(0);
    });

    it ('increment the count on click', () => {
        wrapper.find('button').trigger('click');
        expect(wrapper.vm.count).toBe(1);  //updates data property
        expect(wrapper.find('.count').html()).toContain(1); //updates dom
    });

    it ('presents the current count updated', () => {
        expect(wrapper.find('.count').html()).toContain(1);
    });
});