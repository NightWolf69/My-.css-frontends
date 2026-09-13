// ==UserScript==
// @name         YouTube no [whole-message-clickable] any more
// @namespace    https://github.com/NightWolf69
// @version      1.0.0
// @description  Отключает функцию "whole-message-clickable" у сообщений в чате, которая вызывала контекстное меню, по нажатию в любой точке
// @homepageURL  https://github.com/NightWolf69/My-.css-frontends
// @supportURL   https://github.com/NightWolf69/My-.css-frontends/issues
// @icon            https://www.google.com/s2/favicons?domain=youtube.com
// @match        https://youtube.com/live_chat*
// @match        https://www.youtube.com/live_chat*
// @match        https://studio.youtube.com/live_chat*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Глобально перехватываем клики в области чата
    document.addEventListener('click', function(e) {
        // Находим, было ли нажатие внутри элемента сообщения
        const messageElement = e.target.closest('yt-live-chat-text-message-renderer');

        // Если кликнули на сообщение, но НЕ на имя автора, аватарку, текст или кнопку меню модератора
        if (messageElement && !e.target.closest('a#show-original, a[target="_blank"], a.ytd-menu-navigation-item-renderer, #menu, #before-content-buttons, #contentWrapper, yt-button-renderer, ytd-menu-navigation-item-renderer, ytd-menu-service-item-renderer')) {
            // Останавливаем дальнейшую обработку клика движком YouTube
            e.stopPropagation();
        }
    }, true); // Используем capture-фазу для перехвата
})();