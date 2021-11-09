<template>
    <output class="main__tiles"
        name="card-container"
        role="tabpanel"
        aria-live="polite"
        tabindex="0">
        <a class="base-card info-card"
            v-for="item in items"
            :key="item.id">
            <div class="info-card__img-container">
                <img class="info-card__image" :src="require(`@/assets/images/rules/` + item.img)">
            </div>
            <article class="base-card__caption">
                <h2 class="base-card__title">{{ item.title }}</h2>
                <span
                    v-if="item.hasScore"
                    class="info-card__score">
                    {{ item.score }}
                </span>
                <p class="info-card__desc">{{ item.desc }}</p>
            </article>
            <button
                    class="btn btn--hero"
                    type="button"
                >Отправить заявку</button>
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
                    img:      'conference.svg',
                    title:    'Выступление на конференциях',
                    hasScore: true,
                    score:    '90 баллов',
                    desc:     'Стань спикером на международной конференции по своему направлению',
                },
                {
                    img:      'mic.svg',
                    title:    'Выступление на meetup',
                    hasScore: true,
                    score:    '60 баллов',
                    desc:     `Стань спикером в Колёсах и на meetup других компаний.
                     Расскажи о наших продуктах и технологиях которые мы используем`,
                },
                {
                    img:      'writing.svg',
                    title:    'Статья на habr/vc.ru/rusbase',
                    hasScore: true,
                    score:    '60 баллов',
                    desc:     'Подготовь качественный контент, напиши и опубликуй статью на профильную тему',
                },
                {
                    img:      'work.svg',
                    title:    'Мастер-классы, тренинги, лекции, подкасты, прямые эфиры',
                    hasScore: true,
                    score:    '60 баллов',
                    desc:     'Поделись профессиональными знаниями с коллегами. Важно обучить не менее 6 человек',
                },
                {
                    img:      'activities.svg',
                    title:    'Организация мероприятия',
                    hasScore: true,
                    score:    '60 баллов',
                    desc:     `Организуй турнир по командным играм в офисе.
                     ЧГК, настольный теннис и другие направления. Не менее 10 участников в турнире`,
                },
                {
                    img:      'public.svg',
                    title:    'Стань ментором в проекте «Kolesa Academy»',
                    hasScore: true,
                    score:    '90 баллов ежемесячно',
                    desc:     `Стань ментором академиков, поделись своими знаниями
                     и помоги ребятам завершить Kolesa Academy успешно`,
                },
                {
                    img:      'team.svg',
                    title:    'Помощь HR team',
                    hasScore: true,
                    score:    '50 баллов',
                    desc:     'Помоги организовать мероприятие',
                },
                {
                    img:      'mic.svg',
                    title:    'Выступление на Demoday',
                    hasScore: true,
                    score:    '30 баллов',
                    desc:     'Выступи на Demoday внутри своей команды и поделись знаниями',
                },
                {
                    img:      'premium.svg',
                    title:    'Другое',
                    hasScore: false,
                    desc:     'Получай баллы если уже что-то сделано',
                },
            ],
        };
    },
};
</script>

<style lang="scss">
@use '@/assets/styles/blocks/info-card';
</style>
