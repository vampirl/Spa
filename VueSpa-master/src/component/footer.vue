<template>
    <div class="footer">
        <span class="time">您已经在这里停留了{{ time }}秒</span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            time: 0,
            intervalId:0
        }
    },
    methods:{
        times() {
            this.time += 1;
        },
    },
    mounted(){
        this.intervalId = setInterval(()=>{
            this.times()
        },1000)
    },
    beforeDestroy () {
        clearInterval(this.intervalId)
    }
}
</script>

<style>
.footer {
    width: 100%;
    height: 100%;
    background-color: white;
}
.time {
    text-align: center;
    height: 60px;
    line-height: 60px;
}
</style>
