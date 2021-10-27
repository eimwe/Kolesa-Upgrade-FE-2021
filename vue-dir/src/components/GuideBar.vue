<template>
    <nav class="guide" aria-label="Quick user guide">
        <a class="guide__line"
            v-for="navbutton in navbar"
            :class="navbutton.className"
            :key="navbutton.id"
            :href="navbutton.link"
            :title="navbutton.title">
            {{navbutton.textNode}}
        </a>
    </nav>
</template>

<script>
export default {
    name: 'GuideBar',
    data() {
        return {
            navbar: [
                {
                    link:      '#',
                    title:     'Зачисление баллов на счет',
                    className: 'guide__line--add',
                    textNode:  'Получить баллы',
                },
                {
                    link:      'rulebook.html',
                    title:     'Узнать способы получения баллов',
                    className: 'guide__line--knowhow',
                    textNode:  'Как получить баллы',
                },
                {
                    link:      '#',
                    title:     'Перечислить баллы коллеге',
                    className: 'guide__line--gift',
                    textNode:  'Подарить баллы',
                },
            ],
        };
    },
};
</script>
