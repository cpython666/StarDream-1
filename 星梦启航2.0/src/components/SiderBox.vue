<template>
<div id="siderbox">
    <img :src="iconUrl_"/>
    <div id="className">{{ className_ }}</div>
</div>
</template>

<style scoped>
#siderbox{
    padding: 10px;
    font-size: 14px;
    color: aliceblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 56px;
    cursor: pointer;
}
#siderbox:hover{
    background-color: #366B7E;
}
img{
    width:25px;
    height:25px;
    border-radius: 5px;
    transition: all ease 0.4s;
}
img:hover{
    transform:scale(1.2);
}
</style>
<script>
export default {
    props:['iconUrl','className'],
    data() {
        return {
            iconUrl_:this.$store.state.static+this.iconUrl,
            className_:this.className
        }
    },
    methods: {
    }
}
</script>