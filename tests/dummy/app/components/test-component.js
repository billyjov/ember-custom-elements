/* eslint-disable ember/no-classic-components */
/* eslint-disable ember/require-tagless-components */
import Component from '@ember/component';
import { customElement } from 'ember-custom-elements-patch';

@customElement('foo-bar')
export default class TestComponent extends Component {
}
