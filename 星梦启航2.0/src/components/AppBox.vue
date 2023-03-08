<script>
export default {
    props:{
        app:Object,
        },
    components: {
        
    },
    data() {
        return {
            
        }
    },
    methods: {

    },
    mounted() {
    }
}
</script>
<template>
<div class="appbox">
<img :src="this.$store.state.static+app['img_url']" @click="this.$store.commit('turnWeb',app.url)"/>
<div class="webname">
    {{ app.name }}
</div>
</div>
</template>

<style scoped>
.webname {
    display: flex;
    justify-content: center;
    width: 60px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap
}
.appbox{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 500;
    font-size: 12px;
}
img{
    width: 60px;
    height: 60px;
    cursor: pointer;
    border-radius: 8px;
    transition: all ease 0.3s;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
img:hover{
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
}
</style>
