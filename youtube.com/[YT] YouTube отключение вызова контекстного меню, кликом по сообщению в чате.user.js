// ==UserScript==
// @name			[YT] YouTube disable {whole-message-clickable} function in chat
// @namespace		https://github.com/NightWolf69
// @version			1.0.1
// @icon			https://www.google.com/s2/favicons?domain=youtube.com
// @description		Disable script function, that opens context menu if you click in any oint in chat
// @description:ru	Отключает скрипт вызывающий контекстное меню, если кликнуть в любую часть чата
// @author			NightWolf_69
// @homepageURL		https://github.com/NightWolf69/My-.css-frontends
// @downloadURL		https://github.com/NightWolf69/My-.css-frontends/raw/refs/heads/main/youtube.com/%5BYT%5D%20YouTube%20disable%20'whole-message-clickable'.user.js
// @updateURL		https://github.com/NightWolf69/My-.css-frontends/raw/refs/heads/main/youtube.com/%5BYT%5D%20YouTube%20disable%20'whole-message-clickable'.user.js
// @supportURL		https://github.com/NightWolf69/My-.css-frontends/issues
// @license			AGPL-3.0
// @match			https://www.youtube.com/*
// @match			https://studio.youtube.com/*
// @run-at			document-start
// @grant			none
// ==/UserScript==

(function() {
    'use strict';

    // Глобально перехватываем клики в области чата
    document.addEventListener('click', function(e) {
        // Находим, было ли нажатие внутри элемента сообщения
        const messageElement = e.target.closest('yt-live-chat-text-message-renderer, yt-live-chat-membership-item-renderer');

        // Если кликнули на сообщение, но НЕ на имя автора, аватарку, текст или кнопку меню модератора
        if (messageElement && !e.target.closest('a#show-original, a[target="_blank"], a.ytd-menu-navigation-item-renderer, #menu, #before-content-buttons, #contentWrapper, yt-button-renderer, ytd-menu-navigation-item-renderer, ytd-menu-service-item-renderer')) {
            // Останавливаем дальнейшую обработку клика движком YouTube
            e.stopPropagation();
        }
    }, true); // Используем capture-фазу для перехвата
})();