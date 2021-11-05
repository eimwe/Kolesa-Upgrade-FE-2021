<template>
    <output class="main__tiles"
        name="card-container"
        role="tabpanel"
        aria-live="polite"
        tabindex="0">
        <a class="base-card info-card"
            v-for="item in items"
            :key="item.id">
            <div class="info-card__image">
                <img :src="item.img">
            </div>
            <article class="base-card__caption">
                <h2 class="base-card__title">{{ item.title }}</h2>
                <span class="info-card__score">{{ item.score }} баллов</span>
                <p class="info-card__desc">{{ item.desc }}</p>
                <button
                    class="btn btn--hero"
                    type="button"
                >Отправить заявку</button>
            </article>
        </a>
    </output>
</template>

<script>

export default {
    name: 'InfoCard',

    data() {
        return {
            items: [
                {
                    img:   '',
                    title: 'Выступление на конференциях',
                    score: '90',
                    desc:  'Стань спикером на международной конференции по своему направлению',
                },
                {
                    img:   '',
                    title: 'Выступление на meetup',
                    score: '60',
                    desc:  `Стань спикером в Колёсах и на meetup других компаний.
                     Расскажи о наших продуктах и технологиях которые мы используем`,
                },
                {
                    img:   '',
                    title: 'Статья на habr/vc.ru/rusbase',
                    score: '60',
                    desc:  'Подготовь качественный контент, напиши и опубликуй статью на профильную тему',
                },
                {
                    img:   '',
                    title: 'Мастер-классы, тренинги, лекции, подкасты, прямые эфиры',
                    score: '60',
                    desc:  'Поделись профессиональными знаниями с коллегами. Важно обучить не менее 6 человек',
                },
                {
                    img:   '',
                    title: 'Организация мероприятия',
                    score: '60',
                    desc:  `Организуй турнир по командным играм в офисе.
                     ЧГК, настольный теннис и другие направления. Не менее 10 участников в турнире`,
                },
                {
                    img:   '',
                    title: 'Стань ментором в проекте «Kolesa Academy»',
                    score: '90',
                    desc:  `Стань ментором академиков, поделись своими знаниями
                     и помоги ребятам завершить Kolesa Academy успешно`,
                },
                {
                    img:   '',
                    title: 'Помощь HR team',
                    score: '50',
                    desc:  'Помоги организовать мероприятие',
                },
                {
                    img:   '',
                    title: 'Выступление на Demoday',
                    score: '30',
                    desc:  'Выступи на Demoday внутри своей команды и поделись знаниями',
                },
                {
                    img:   '',
                    title: 'Другое',
                    score: '',
                    desc:  'Получай баллы если уже что-то сделано',
                },
            ],
        };
    },
};
</script>

<style lang="scss">
@use '@/assets/styles/blocks/info-card';
</style>
