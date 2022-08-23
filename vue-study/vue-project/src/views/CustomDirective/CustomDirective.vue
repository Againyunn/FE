<!-- 개별 모듈로 custom directive를 만들어 사용할 수도 있다. -->
<template>
    <div>
        <p v-pin="position">페이지 고정영역</p>
    </div>
</template>
<script>
export default {
    directives:{
        pin:{
            mounted(el, binding){
                el.style.position = 'fixed';
                el.style.top = binding.value.top + 'px';
                el.style.left = binding.value.left + 'px';
            }
        }
    },
    data(){
        return{
            position:{
                top: 50,
                left: 100
            }
        }
    }

}
</script>
<style scoped>
    div{
        height: 1000px;
    }
</style>