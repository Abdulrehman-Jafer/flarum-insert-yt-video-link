import { extend } from 'flarum/common/extend';
import TextEditor from 'flarum/common/components/TextEditor';
import Modal from 'flarum/common/components/Modal';
import Button from 'flarum/common/components/Button';
import Input from 'flarum/common/components/Input';
import m from 'mithril';
import app from 'flarum/forum/app';

class InsertYtVideoLink extends Modal {
  inputValue:string = '';
  className(): string {
    return 'InsertYtVideoLinkModal Modal--small';
  }

  title() {
    return m('p', 'Insert YouTube Video');
  }

  content() {
    return m('.Modal-body', [
      m('p', 'Enter the link to the YouTube video below:'),
      m('.Form-group', [
      m(Input, {
        type: "url",
        placeholder: "Insert a valid YouTube video link here",
        value: this.inputValue,
        onchange: (value:string) => {
          this.inputValue = value;
        }
      }),
      m(Button, {
          onclick: () => {
            app.composer.editor?.insertAtCursor(`[YT_LINK](${this.inputValue})`, false);
            this.hide();
          }
        }, 'Insert')
      ])
    ]);
  }
}




extend(TextEditor.prototype, 'toolbarItems', function (this:any,items) {
  items.add(
    'youtube',
    m(Button, {
      icon: 'fab fa-youtube',
      className: 'Button Button--icon',
      title: 'Insert YouTube video',

      onclick: () => {
        app.modal.show(InsertYtVideoLink);
      }
    }),
    10
  );
});


