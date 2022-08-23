<template>
    <div class="index">
        <div class="side">
            <mainCard class="item" title="月度用电统计">
                <Stat />
            </mainCard>
            <mainCard class="item" title="标题2"></mainCard>
            <mainCard class="item" title="标题2"></mainCard>
        </div>
        <div class="center">
            Index page
        </div>
        <div class="side"></div>
    </div>
</template>
<script>
import mainCard from './componente/mainCard.vue';
import Stat from '@/views/index/componente/Stat.vue';

export default {
    components: { mainCard, Stat }
}
</script>
<style lang="scss" scoped>
.index {
    width: 100%;
    height: 100%;
    display: flex;

    .side {
        flex: 1;
        padding: 0 10px;
        backdrop-filter: saturate(150%) conreast(100%) blur(8px);
        -webkit-backdrop-filter: saturate(150%) contrast(100%) blur(5px);
        background-color: rgba(0, 0, 0, .3);
        display: flex;
        flex-direction: column;

        .item {
            flex: 1;
        }
    }

    .center {
        flex: 3;
    }

}
</style>