<template>
    <div></div>
</template>

<script>
    export default{
        name: "sampleCode", //컴포넌트 이름
        components:{}, //다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
        data(){ //html과 JS코드에서 사용할 데이터 변수 선언
            return{
                sampleData: ''
            };
        },
        setup() {

        }, //컴포지션 API
        created() {

        }, //컴포넌트가 생성
        mouted() {

        }, //template에 정의된 html 코드가 랜더링된 후 실행
        unmounted() {

        }, //umount가 완료된 후 실행
        methods: {
            
        } //컴포넌트 내에서 사용할 메소드 정의
    }
</script>


<!-- VS Code의 단축키로 설정 -->
<!-- 설정 경로:
window 기준[
    파일 -> 기본설정 -> 사용자 코드 조각 구성 -> vue 언어 선택 후 vue.json 에 하기 내용 복붙
] -->

<!-- {
"Generate Basic Vue Code" : {
		"prefix": "vue-start",
		"body": [
			"<template>\n\t<div></div>\n</template>\n<script>\nexport default{\n\t//컴포넌트 이름\n\tname: '',\n\t//다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장\n\tcomponents:{\n\n\t\t}, \n\t//html과 JS코드에서 사용할 데이터 변수 선언\n\tdata(){ \n\t\treturn{\n\t\t\tsampleData: ''\n\t\t};\n\t},\n\t//컴포지션 API\n\tsetup() {\n\t\t\n\t},\n\t//컴포넌트 생성\n\tcreated() {\n\t\t\n\t},\n\t//template에 정의된 html 코드가 랜더링된 후 실행\n\tmouted() {\n\t\t\n\t},\n\t//umount가 완료된 후 실행\n\tunmounted() {\n\t\t\n\t},\n\t//컴포넌트 내에서 사용할 메소드 정의\n\tmethods: {\n\t\t\n\t}\n}\n</script>"
		],
		"description": "Generate Basic Vue Code"
	}
} -->