<template>
    <div class="container">
        <div class="page-card">
            <Card 
                v-for="data of card_data"
                v-bind:data="data"
                v-bind:key="data.id"
            />
        </div>
    </div>
</template>

<script>
import Card from '@/components/Pages_Card.vue' 
export default {
    data(){
        return {
            card_data: [
                {id: 0, title: 'Опти&shyмальный проигрыш', content: 'Начало войн, революций и репрессий, сопровождаемых физическим уничтожением, тянущих кровавый след смертей ~ это уже результат проигранной войны на <Strong>фронте идей</Strong>. Чтобы проследить эту мысль в крупных масштабах, необходимо проследить этот переход в существе отдельного человека.<br/><br/>Человек, живущий созиданием, творчеством и производством, до последнего отказывается от насилия или физического противостояния с другим человеком, потому что осознаёт, что затраченные ресурсы и энергия могут быть эффективно вложены в созидание, а не разрушение. <br/><br/>На индивидуальном уровне «война» никогда не будет начата тем, кто знает себя и свой путь. На индивидуальном уровне ответ на насилие физической самообороной может возникать только тогда, когда уже не работают механизмы защиты или когда не хватает способностей найти другие пути для сохранения своих идеалов, собственности и жизни.<br/><br/>Для творца победа в бою над противником ~ уже проигрыш из-за некорректно распределённых ресурсов. Пришлось сохранять вместо того, чтобы прибавлять. Ситуация потери произошла из-за того, что были совершены грубые ошибки в создании механизмов защиты: как в ментальных, психологических, так и физических.<br/><br/>Ситуации нападения демонстрируют, что необходимо пересмотреть то, как общаться с людьми, какие орудия самозащиты стоит приобрести, какими способами можно обеспечить комфортную жизнь без необходимости оказываться в опасных ситуациях…<br/><br/>Если интеллектуальных способностей человека не хватает, чтобы самостоятельно пересмотреть принципы жизни и даже чтобы оценить эффективные способы, разработанные более разумными представителями человечества ~ значит ситуация повторится.<br/>Частота повторений начнёт зависеть от прихоти других людей.<br/><br/><Strong>Человек теряет контроль над ситуацией тем больше, чем меньше его интеллектуальные способности</Strong>' },
                {id: 1, title: 'Потеря контроля', content: 'Видимым признаком потери контроля над ситуацией является паника, эмоциональная нестабильность человека с внутренним мучительным вопросом «Что делать?!» без ответа (то есть без заготовленного решения) и <Strong>без понимания, как</Strong> ответить (то есть без внутренней философской определённости).<br/><br/>В обществе отражаются признаки, существенные для человека.<br/>Фундаментально культурный уровень общества распадается, когда философия перестаёт формировать цельную картину мироустройства, с помощью которой можно решать этические, технические, предпринимательские и другие прикладные вопросы, с которыми человечество ещё не столкнулось.<br/>Когда же человечество сталкивается с проблемами в реальном времени, приходится действовать как-то (соответственно уровню мыслительных способностей людей, которые управляют общественными процессами); и паника в общественном информационном поле звучит тем сильнее, чем меньше ясны последствия предпринимаемых действий.<br/><br/><Strong>Уровень культуры общества тем ниже, чем проще проблемы, вызывающие панику</Strong><br/>'},
                {id: 2, title: 'Фронт усилий', content: 'Чтобы установить длительный мир, необходимо вести ожесточённую борьбу на уровне идей, поднимать уровень культуры. Ответственными фигурами на фронте являются философы, педагоги, писатели, режиссёры, блогеры, журналисты, художники, музыканты, перформеры, подкастеры…<br/><br/>Каждая победа добра выражается в человеке, который смог себя сохранить, а каждое поражение в людях, которые умирают заживо, теряют себя.<br/><br/>Победа на идейном фронте гарантирует мирное небо, прогресс и развитие.<br/>Поражение неминуемо ведёт к войне физической, и жертвы станут очевидными даже слепцам и глупцам, которые будут сокрушаться: <br/>«Как же так произошло?», «Кто виноват?».<br/><br/>И пока не стало поздно, важно осознать: лучшее, что каждый может сделать для поднятия общего уровня культуры ~ поднять личную культуру, сохранить себя и идти своим путём.<br/><br/><Strong>«In any given period of history, a culture is to be judged by its dominant philosophy, by the prevalent trend of its intellectual life as expressed in morality, <br/>in politics, in economics, in art. Professional intellectuals are the voice of a culture and are, therefore, its leaders, its integrators and its bodyguards</Strong>» <br/>(Ayn Rand, «For the New Intellectual»).'},
            ],
        }
    },
    components: {
        Card
    }
}
</script>

<style>
    
</style>