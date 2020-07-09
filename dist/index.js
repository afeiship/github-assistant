/**
 *  name: @feizheng/github-assistant
 *  description: Github assistant.
 *  homepage: https://github.com/afeiship/github-assistant
 *  version: 1.0.1
 *  date: 2020-07-09T09:20:04.464Z
 *  license: MIT
 */

!function(i){"function"==typeof define&&define.amd?define(i):i()}((function(){$(document).ready(()=>{(()=>{const i=$(".highlight.highlight-source-shell"),n=i.text(),t=`\n    <div class="input-group">\n      <input type="text" class="form-control input-monospace input-sm" value="${n}" disabled>\n      <div class="input-group-button">\n        <clipboard-copy value="${n}" aria-label="Copy to clipboard" class="btn btn-sm" tabindex="0" role="button"><svg class="octicon octicon-clippy" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path></svg></clipboard-copy>\n      </div>\n    </div>\n  `;i.html(t)})()})}));
