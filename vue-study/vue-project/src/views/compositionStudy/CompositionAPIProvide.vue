<template>
    <CompositionAPIInject/>
</template>
<script>
import provide from 'vue';
import CompositionAPIInject from './CompositionAPIInject.vue';

export default {
    component:{
        CompositionAPIInject
    },
    setup() {
    /**provide(key, value)형식으로 props전달 */
       provide('title', 'vue.js 프로젝트'); 
    },
}
</script>