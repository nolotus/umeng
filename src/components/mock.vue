
<template>
    <div>
    </div>
</template>
<script>
    import api from './../axios/api.js'
    export default {
        name: 'Mock',
        data () {
            return {
                dataShow: [1]
            }
        },
        created () {
            this.getdata()
        },
        methods: {
            getdata: function() {
                api.mockdata('/data/index')
                    .then(res => {
                        this.dataShow = res.data;
                    })
                api.mockdata('/data/index2')
                    .then(res => {
                        this.dataShow = res.data;
                    })
                api.mockdata('/data/index3')
                    .then(res => {
                        console.log(res)
let ss =this.dataShow
                    })
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>