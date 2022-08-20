<template>
    <div class="index">
        <div class="side">
            <mainCard />
        </div>
        <div class="center">
            Index page
        </div>
        <div class="side"></div>
    </div>
</template>
<script>
import mainCard from './componente/mainCard.vue';
export default {
    components: { mainCard }
}
</script>
<style lang="scss" scoped>
.index {
    width: 100%;
    height: 100%;
    display: flex;
    float: left;

    .side {
        flex: 1;
        padding: 0 10px;
        backdrop-filter: saturate(150%) conreast(100%) blur(8px);
        -webkit-backdrop-filter: saturate(150%) contrast(100%) blur(5px);
        background-color: rgba(0, 0, 0, .3);
    }

    .center {
        flex: 3;
    }

}
</style>