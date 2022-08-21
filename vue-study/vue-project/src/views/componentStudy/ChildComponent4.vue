<script>
export default {
    data(){
        return{
            message: 'from childComponent'
        }
    },
    mounted(){
        this.$emit('send-message', this.message);
    }
}
</script>