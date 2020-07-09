/**
 * @description
 * 将 readme.md 里的 table 变成 width: 100%;
 */

export default () => {
  $(".application-main #readme table")
    .css({ 'display': 'table' });
}
