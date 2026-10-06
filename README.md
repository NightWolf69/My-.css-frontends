# Что это?
В этом GitHub репозитории вы найдёте мои `.user.css` и `.user.js` — которые в свою очередь изменяют определённые элементы на указанных сайтах. От банального изменения цвета текста или фона у кнопки, до крупного переделывания внешнего вида каких-то функций, устранения багов и ошибок. Или вообще добавления нового функционала к уже существующему.

<br>

Все изменения выполняются через поверхностное переписывание `.css` _(«Cascading Style Sheets» или «Каскадные таблицы стилей»)_ значений у определённых элементов определённых сайтов. Например таких как фоновый цвет секции, задний фон у кнопки, свечение текста при наведении на него курсора, отступа по краям у элемента, выравнивание по какой-либо линии, итд. То есть, изменяется только стиль и внешний вид отображения уже имеющегося элемента. 
> [!TIP]
> Эти изменения не могут изменить принцип или способ работы каких-либо функций, и так же не могут добавить что-то своё.
> Единственное что возможно, это только отредактировать способ отображения уже имеющегося чего-либо.

<br>

Для некоторых дополнительных функций и возможностей мне всё же пришлось прибегнуть к `.js` _(«Джава Скрипт» или «JavaScript»)_.
Использовал JavaScript я только для чата YouTube, чтобы вернуть в контекстное меню перейти на канал чаттерса, и чтобы отключить бесящую меня функцию "кликни по любому месту в чате, и откроешь контекстное меню 👍"
> [!TIP]
> Использование `js` скриптов не обязательно и не необходимо. По этому, это чисто на ваше усмотрение.

# Что для этого нужно?
Для того чтобы использовать мои `.user.css` и `.user.js` вам понадобятся аддоны на браузер, для загрузки кастомного `.css` и `.js` кода соответственно
* Для `.user.css` — «[![Stylus](https://avatars.githubusercontent.com/u/29350089?s=16&v=4) Stylus](https://github.com/openstyles/stylus)»
* Для `.user.js` «[![Tampermonkey](https://avatars.githubusercontent.com/u/13335464?s=16&v=4) Tampermonkey](https://github.com/Tampermonkey/tampermonkey)» или «[![Violentmonkey](https://avatars.githubusercontent.com/u/13635071?s=16&v=4) Violentmonkey](https://github.com/violentmonkey/violentmonkey)»

### Установка аддона на браузер для использование `.user.css`:
+ <a href="https://chromewebstore.google.com/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne" title="Google Chrome" target="_blank"><img src="https://www.google.com/chrome/static/images/favicons/favicon-32x32.png" alt="Chrome" width="24px"> Chrome</a>
+ <a href="https://addons.mozilla.org/ru/firefox/addon/styl-us/" title="Mozilla FireFox" target="_blank"><img src="https://www.firefox.com/favicon.ico" alt="FireFox" width="24ps"> FireFox</a>
+ <a href="https://addons.opera.com/ru/extensions/privacy_policy/27c0f4146c879f67a91b70f93f4eee4a01846fdd/" title="Opera" target="_blank"><img src="https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/favicon/ico/opera.ico" alt="Opear" width="24px"> Opera</a>
+ <a href="https://microsoftedge.microsoft.com/addons/detail/styluswithoutnetwork/hckpgdidacmniaahncgfiihaklijbnhf" title="Microsoft Edge" target="_blank"><img src="https://edgecdn-embza6g8cacagcbn.z01.azurefd.net/welcome/static/favicon.png" alt="Edge" width="24px"> Edge</a>

### Установка аддона на браузер для использование `.user.js` (ОПЦИОНАЛЬНО!!!):
+ <img src="https://www.google.com/chrome/static/images/favicons/favicon-32x32.png" alt="Chrome" width="24px"> Chrome: <code><a href="https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo" title="Tampermonkey" target="_blank"><img src="https://lh3.googleusercontent.com/zoY8FwoOqPlBgFxcmFdNSK2Q4CcLmv-gw7vTjF2KMR9cEabwBsGNrHBTEMitn0Ba6OmCVJ0NcLnFGu3N97BP8Phu0g" alt="Tampermonkey" width="24ps"> Tampermonkey</a></code> или <code><a href="https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag" title="Violentmonkey" target="_blank"><img src="https://lh3.googleusercontent.com/wAjIhsb6UfVOYybA5DQBgKZ5dFx45Glf44OywmAkgcGKwaChRPpABYZq4cjlfNdt8kvxUHhIDbjgk8NTLpHl0i-EKA" alt="Violentmonkey" width="24ps"> Violentmonkey</a></code>
+ <img src="https://www.firefox.com/favicon.ico" alt="FireFox" width="24ps"> FireFox: <code><a href="https://addons.mozilla.org/ru/firefox/addon/tampermonkey/" title="Tampermonkey" target="_blank"><img src="https://addons.mozilla.org/user-media/addon_icons/683/683490-64.png" alt="Tampermonkey" width="24ps"> Tampermonkey</a></code> или <code><a href="https://addons.mozilla.org/ru/firefox/addon/violentmonkey/" title="Violentmonkey" target="_blank"><img src="https://addons.mozilla.org/user-media/addon_icons/797/797378-64.png" alt="Violentmonkey" width="24ps"> Violentmonkey</a></code>
+ <img src="https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/favicon/ico/opera.ico" alt="Opear" width="24px"> Opera: <code><a href="https://addons.opera.com/ru/extensions/details/tampermonkey-beta/" title="Tampermonkey" target="_blank"><img src="https://addons-media.operacdn.com/media/extensions/65/115665/5.6.6239-rev1/icons/icon_64x64_61be8d1fe87710ac0c320d28a05f0cbc.png" alt="Tampermonkey" width="24ps"> Tampermonkey</a></code>
+ <img src="https://edgecdn-embza6g8cacagcbn.z01.azurefd.net/welcome/static/favicon.png" alt="Edge" width="24px"> Edge:<code><a href="https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd" title="Tampermonkey" target="_blank"><img src="https://store-images.s-microsoft.com/image/apps.20759.f7dbc670-57ef-4f66-932b-7a8786594577.1e93160d-1a0b-42ef-92b3-7f652ab8df5d.eadba2ba-e3fe-404c-bc8b-b383ebeb0d00" alt="Tampermonkey" width="24ps"> Tampermonkey</a></code> или <code><a href="https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao" title="Violentmonkey" target="_blank"><img src="https://store-images.s-microsoft.com/image/apps.5096.0049fc7f-15d4-4424-8f13-17bab600680d.66265cca-26d3-4aa7-b8b4-44c3d36b35b2.8ea6f815-176c-49c2-b42f-823da331de49" alt="Violentmonkey" width="24ps"> Violentmonkey</a></code>

> [!CAUTION]
> Существуют и другие аддоны для загрузки кастомного `.css` и `.js` кода. Однако я не гарантирую корректную работу, и вообще работу в целом на других аддонах, кроме перечисленных мною. Так как могут быть различия во внутреннем синтаксисе аддона, или отсутствовать поддержка настроек, или ещё что угодно...


# Как установить `.user.css` и/или `.user.js`?
+ <a href="https://github.com/NightWolf69/My-.css-frontends/raw/refs/heads/main/kick.com/%5BKK%5D%20Kick%20Enhancment.user.css" title="KICK.com" target="kick"><img src="https://kick.com/img/kick-logo.svg" alt="KICK" width="64"></a> — <a href="https://github.com/NightWolf69/My-.css-frontends/raw/refs/heads/main/kick.com/%5BKK%5D%20Kick%20Enhancment.user.css" title="KICK.com" target="kick">Установить</a> `.user.css` <code>v2.3.10</code>
> [!NOTE]
> Совместимо со следующими аддонами:
> 
> <code><a href="https://chromewebstore.google.com/detail/mokick-better-kick-for-ev/lhjnnfenfahhjkmcngnocfclechcibkc" title="Mo'Kick - Better Kick For Everyone" target="_blank"><img src="https://lh3.googleusercontent.com/A0nL3C3okhiY-1VluoWKYMEQSQkiAVkmq3KgVp6ZsvWRXgJ8uoLE8yiKMFY0MOboIqdjZq_fK6Agf3w1TrbqY2Rj8mc" alt="Mo'Kick" width="16"> Mo'Kick</a></code>,
<code><a href="https://chromewebstore.google.com/detail/7tv/ammjkodgmmoknidbanneddgankgfejfh" title="7tv" target="_blank"><img src="https://lh3.googleusercontent.com/Lbd8MFXPmKp37l2sdjTqKjvjbkDHmie__3Y0aq6zyuJYQF3jkiCarks7RmJHe3KBRNAXxB8QLb0OqfVvapzO_l83yQ" alt="7tv" width="16"> 7tv</a></code>,
<code><a href="https://chromewebstore.google.com/detail/enhancer/knaodoefkjbgmmilogebghadhmnphjih" title="Enhancer" target="_blank"><img src="https://lh3.googleusercontent.com/QJUcBqNzETF5jJoaUTAUcmbARVmo5hAjmIYgzgNlnekVWqgMQVr9K55jafwhmLmUlTKP5HS5WZ10WsNbjiKncMlztdU" alt="Mo'Kick" width="16"> Enhancer</a></code>,
<code><a href="https://chromewebstore.google.com/detail/nipahtv/bjggmgekoncaaalaalhchepgkjoahjln" title="NipahTV" target="_blank"><img src="https://lh3.googleusercontent.com/zwdXAGWjOOusPCcjpRInxab4_T2jhp0ZsDH52A9RV6h7oy2cCvVmW5w7E4GJx9zuwCu7XSN0lmCaDHXp1Uu010ZrfQ" alt="NipahTV" width="16"> NipahTV</a></code>.

<hr width="69%">

+ <a href="https://github.com/NightWolf69/My-.css-frontends/raw/refs/heads/main/youtube.com/%5BYT%5D%20YouTube%20Enhancement.user.css" title="YouTube.com" target="yt"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://youtube.com&size=64" alt="YT" width="24"></a> — <a href="https://github.com/NightWolf69/My-.css-frontends/raw/refs/heads/main/youtube.com/%5BYT%5D%20YouTube%20Enhancement.user.css" title="YouTube.com" target="yt">Установить</a> `.user.css` <code>v1.0.6-pre-release</code>
+ <a href="https://github.com/NightWolf69/My-.css-frontends/blob/main/youtube.com/%5BYT%5D%20YouTube%20%D0%BE%D1%82%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2%D0%B0%20%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BC%D0%B5%D0%BD%D1%8E%2C%20%D0%BA%D0%BB%D0%B8%D0%BA%D0%BE%D0%BC%20%D0%BF%D0%BE%20%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D1%8E%20%D0%B2%20%D1%87%D0%B0%D1%82%D0%B5.user.js" title="YouTube отключение вызова контекстного меню, кликом по сообщению в чате" target="_blank"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://youtube.com&size=64" alt="YT" width="24"></a> — <a href="https://github.com/NightWolf69/My-.css-frontends/blob/main/youtube.com/%5BYT%5D%20YouTube%20%D0%BE%D1%82%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2%D0%B0%20%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BC%D0%B5%D0%BD%D1%8E%2C%20%D0%BA%D0%BB%D0%B8%D0%BA%D0%BE%D0%BC%20%D0%BF%D0%BE%20%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D1%8E%20%D0%B2%20%D1%87%D0%B0%D1%82%D0%B5.user.js" title="YouTube отключение вызова контекстного меню, кликом по сообщению в чате" target="_blank">Установить</a> `.user.js` "Клико в **ЛЮБОЕ** место = контекстное меню" <code>v1.0.0</code> _(опционально)_
+ <a href="https://github.com/NightWolf69/My-.css-frontends/raw/refs/heads/main/youtube.com/%5BYT%5D%20YouTube%20%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BA%D0%BD%D0%BE%D0%BF%D0%BE%D0%BA%20%D0%B2%20%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%BD%D0%BE%D0%B5%20%D0%BC%D0%B5%D0%BD%D1%8E%20%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B2%20%D1%87%D0%B0%D1%82%D0%B5.user.js" title="YouTube добавление кнопок в контекстное меню сообщения в чате" target="_blank"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://youtube.com&size=64" alt="YT" width="24"></a> — <a href="https://github.com/NightWolf69/My-.css-frontends/raw/refs/heads/main/youtube.com/%5BYT%5D%20YouTube%20%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BA%D0%BD%D0%BE%D0%BF%D0%BE%D0%BA%20%D0%B2%20%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%BD%D0%BE%D0%B5%20%D0%BC%D0%B5%D0%BD%D1%8E%20%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B2%20%D1%87%D0%B0%D1%82%D0%B5.user.js" title="YouTube добавление кнопок в контекстное меню сообщения в чате" target="_blank">Установить</a> `.user.js` "Дополнительные пункты контекстного меню чата" <code>v0.9.1</code> _(опционально)_
> [!NOTE]
> Совместимо с аддонами для просмотра видео:
> 
> <code><a href="https://chromewebstore.google.com/detail/enhancer-for-youtube/ponfpcnoihfmfllpaingbgckeeldkhle" title="Enhancer for YouTube™" target="_blank"><img src="https://lh3.googleusercontent.com/6PBcKpsoS15e2SUqMi6_KGBHsnvUdaRrRYXkHM3zkn5Zzj8TAEJp1_RtykaCfn1DCmyH9PJOKHrMbmtAOnQqtAU8aLs" alt="Enhancer for YouTube™" width="16"> Enhancer for YouTube™</a></code>,
> <code><a href="https://chromewebstore.google.com/detail/return-youtube-dislike/gebbhagfogifgggkldgodflihgfeippi" title="Return YouTube Dislike" target="_blank"><img src="https://lh3.googleusercontent.com/bVYgRXHiKIDU1EqkGv58alRhXu-SjSqi-I_yZHak8ZvZo_kYxMePoqa3pyIX931tzFkQ3b-EbxT7gSk8M1eOSdpDCQ8" alt="Return YouTube Dislike" width="16"> Return YouTube Dislike</a></code>,
> <code><a href="https://chromewebstore.google.com/detail/improve-youtube-%F0%9F%8E%A7-for-yo/bnomihfieiccainjcjblhegjgglakjdd" title="'Improve YouTube!'" target="_blank"><img src="https://lh3.googleusercontent.com/WDytHNO8o0Ev6sWp_yLbya_SSS9kXZWGJIc-WJ3goInHJalzD02Aq5wVhExFlbzrzNsOxo-V1O_TgF-JLJNyTkvB" alt="'Improve YouTube!'" width="16"> 'Improve YouTube!'</a></code>,
> <code><a href="https://chromewebstore.google.com/detail/sponsorblock-for-youtube/mnjggcdmjocbbbhaepdhchncahnbgone" title="SponsorBlock" target="_blank"><img src="https://lh3.googleusercontent.com/oSoXDpjLX_iytl11_ROa1thmFI0xPk9pL8ttEtnFkBI8Cie0Ge8KxVFaokgBRscvUR1cXH4bVeG_C_Fl6kBw3A3_" alt="SponsorBlock" width="16"> SponsorBlock</a></code>,
> <code><a href="https://chromewebstore.google.com/detail/youtube-tags/fffiogeaioiinfekkflcfebaoiohkkgp" title="YouTube Tags" target="_blank"><img src="https://lh3.googleusercontent.com/OkNIIo1HR0rF8W3n9R3KQK8TLPbE8JOdZhO8jv1IARnicvErPIosFz-t4HQvU8T56DsrNXivQXPdiXVDRbjlJCt3" alt="YouTube Tags" width="16"> YouTube Tags</a></code>.
>  
>  
> Совместимо с аддонами для чата стрима:
> 
> <code><a href="https://chromewebstore.google.com/detail/hyperchat-improved-youtub/naipgebhooiiccifflecbffmnjbabdbh" title="HyperChat [Improved YouTube Chat]" target="_blank"><img src="https://lh3.googleusercontent.com/S3_Fc4pZJDp503jgQVTw7VzKPWn0jz7BnMHrrZriA4WCzN_NiTQLeo9sZa_oPc2crY_HNApbFjbzPYyFDu_oTjfG" alt="HyperChat" width="16"> HyperChat</a></code>,
> <code><a href="https://chromewebstore.google.com/detail/betterttv/ajopnjidmegmdimjlfnijceegpefgped" title="BetterTTV" target="_blank"><img src="https://lh3.googleusercontent.com/18QCNXbFYR0TjGij27lc4oI8VB40Pv9EZ2XPSG0TdAFVs0gUO86pdGS4JQoq8UxH7Dqg9j4dvJE6Pg0jtqjkb3wb" alt="BetterTTV" width="16"> BetterTTV</a></code>,
> <code><a href="https://chromewebstore.google.com/detail/frappe-%E2%80%94-twitch-kick-yout/oacfincmbjdddohpjgjjnhocgljhpeda" title="Frappe — Twitch, Kick, YouTube Deleted Messages" target="_blank"><img src="https://lh3.googleusercontent.com/uJ4WHGl2qusfgRdHeYWg0n-St-_PKK1MEzJIPtkZ57zD3CYHSLBgMT2K2M8KOTgEPY_MPcG06EBs4QdwSZ0jyKuLPQ" alt="Frappe" width="16"> Frappe</a></code>.

<hr width="69%">

+ <a href="https://github.com/NightWolf69/My-.css-frontends/raw/refs/heads/main/vk.com/%5BVK%5D%20VKontakte%20Enhancment.user.css" title="VK.com и live.VKvideo.ru" target="vk"><img src="https://vk.ru/favicon.ico" alt="VK" width="24"></a> — <a href="https://github.com/NightWolf69/My-.css-frontends/raw/refs/heads/main/vk.com/%5BVK%5D%20VKontakte%20Enhancment.user.css" title="VK.com и live.VKvideo.ru" target="vk">Установить</a> `user.css` <code>v1.0.4-beta</code>
> [!NOTE]
> Совместимо со следующими аддонами:
> 
> <code><a href="https://chromewebstore.google.com/detail/vk-play-tools/pgcocghliackkooeoiihnkdnbempgjfk" title="VK Play Tools" target="_blank"><img src="https://lh3.googleusercontent.com/8inoxE5bxrCjRp_XM4ghS-I5DPIMA5iMcv7CYzRJU4QOOdBDPkTavihBNqvQod3ekm1h8spFmD78Bm7x5CB5wjT-mTs" alt="VK Play Tools" width="16"> VK Play Tools</a></code>
