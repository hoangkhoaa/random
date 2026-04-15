/* shared/nav.js — inject nav bar into any page
 *
 * Usage: add this to your HTML:
 *   <div id="nav-placeholder" data-tool="dice" data-mode="text"></div>
 *   <script src="../shared/nav.js"></script>
 *
 * data-tool: dice | coin | number | card | wheel | password
 * data-mode: text | ui
 */
(function () {
  const placeholder = document.getElementById('nav-placeholder');
  if (!placeholder) return;

  const tool = placeholder.dataset.tool || '';
  const mode = placeholder.dataset.mode || 'text'; // 'text' or 'ui'

  const toolNames = {
    dice: 'Dice Roller',
    coin: 'Coin Flip',
    number: 'Random Number',
    card: 'Card Draw',
    wheel: 'Wheel Spin',
    password: 'Password',
  };

  const toolName = toolNames[tool] || tool;

  // Depth: text pages are 1 level deep (/tool/), ui pages are 2 levels (/tool/ui/)
  const isUI = mode === 'ui';
  const rootPath = isUI ? '../../' : '../';
  // Link to the sibling version
  const textHref = isUI ? '../index.html' : 'index.html';
  const uiHref  = isUI ? 'index.html'    : 'ui/index.html';

  const nav = document.createElement('nav');
  nav.className = 'nav-bar';
  nav.innerHTML = `
    <a href="${rootPath}index.html" class="nav-logo">random</a>
    <span class="nav-tool">${toolName}</span>
    <div class="nav-links">
      <a href="${textHref}" class="nav-link${!isUI ? ' nav-link--active' : ''}">Text</a>
      <a href="${uiHref}"  class="nav-link${isUI  ? ' nav-link--active' : ''}">UI</a>
    </div>
  `;

  placeholder.replaceWith(nav);
})();
