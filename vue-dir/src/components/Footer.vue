<template>
    <footer class="footer">
        <div class="wrapper flex-container">
            <div class="footer__about">
                <p class="footer__copyright">&#169; Kolesa Group</p>
                <ul class="socialbar flex-container">
                    <li>
                        <a class="socialbar__link socialbar__link--insta"
                            href="https://www.instagram.com/kolesagroup/"
                            target="_blank"
                            title="Мы в Instagram">
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a class="socialbar__link socialbar__link--yt"
                            href="https://www.youtube.com/channel/UC6o6waSdIvmIdvy7qTqxY9A"
                            target="_blank"
                            title="Наши видео на YouTube">
                            YouTube
                        </a>
                    </li>
                    <li>
                        <a class="socialbar__link socialbar__link--vk"
                            href="https://vk.com/kolesakrishamarket"
                            target="_blank"
                            title="Наша страничка ВКонтакте">
                            ВКонтакте
                        </a>
                    </li>
                </ul>
            </div>
            <div class="footer__contacts flex-container">
                <p class="footer__invitation">
                    Есть идеи что улучшить?
                    <span class="line-break">Не знаешь, с кем решить проблему?</span>
                </p>
                <button class="btn btn--contact" type="button">Написать</button>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
};
</script>
