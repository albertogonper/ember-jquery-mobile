import Ember from 'ember';
import $ from 'jquery';
import layout from '../templates/components/jqm-textarea';

export default Ember.TextArea.extend({
  layout: layout,
  attributeBindings: ['clear-btn:data-clear-btn', 'mini:data-mini',
    'autofocus', 'name', 'required'],
  didInsertElement() {
    $(this.$()).textinput();
  }
});
