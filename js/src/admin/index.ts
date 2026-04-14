import app from 'flarum/admin/app';

export { default as extend } from './extend';

app.initializers.add('abulrehman-youtube-button', () => {
  console.log('[abulrehman/flarum-youtube-button] Hello, admin!');
});
