<template>
    <div>
        <h2>{{title}}</h2>
        <div>
            <h4>Props 점검</h4>
            <table>
                <tr>
                    <th>자료형</th>
                    <th>데이터</th>
                </tr>
                <tr>
                    <td>숫자형</td>
                    <td>{{numberProps}}</td>
                </tr>
                <tr>
                    <td>논리형</td>
                    <td>{{booleanProps}}</td>
                </tr>
                <tr>
                    <td>배열</td>
                    <td>{{arrayProps}}</td>
                </tr>
                <tr>
                    <td>객체</td>
                    <td>{{objectProps}}</td>
                </tr>
                <tr>
                    <td>객체의 특정 속성</td>
                    <td>{{objectPropsProperty}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            title:{
                type: String,
                default: "페이지 제목입니다.",
                require: true
            },
            numberProps:{
                type:Number,
                default: 0
            },
            booleanProps:{
                type:Boolean,
                default: false
            },
            arrayProps:{
                type:Array
            },
            objectProps:{
                type:Object,
                default: () => {
                    return {message: 'hello'}
                }
            },
            objectPropsProperty:{
                type:[String, Number]
            }
        }
    }
</script>
<style scoped>
    table{
        width:100%;
        border-collapse: collapse;
    }
    td, th{
        border: 1px solid #ddd;
        text-align: left;
        padding: 8px;
    }
</style>