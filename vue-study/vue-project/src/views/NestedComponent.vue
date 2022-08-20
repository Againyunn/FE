<template>
    <div>
        <PageComponent 
            :title="setTitle" 
            :numberProps="setNumber" 
            :booleanProps="setBoolean"
            :arrayProps="setArray"
            :objectProps="setObject"
            :objectPropsProperty="setObject.age"
        />
    </div>
</template>
<script>
    import PageComponent from "../components/PageComponent.vue";
    
    export default {
        components: {PageComponent},
        data(){
            return{
                setTitle: "컴포넌트 사용 예제 페이지",
                setNumber: 26,
                setBoolean: true,
                setArray: [234, 266, 273],
                setObject: {
                    name: ["Veronica", "Verdian Dynamic"],
                    age:[23, 27]
                }
            }
        }
    }
</script>

<!--
정적으로 props 전달 시, :없는 사용자 지정 props속성 값을 사용한다.
ex) <PageTitle title="컴포넌트 사용 예제 페이지"/>
동적으로 props를 전송할 때에는 :를 붙인 형태를 사용해야 한다.
ex) <PageTitle :title="setTitle"/>
-->