<template>
    <div class="alert" v-if="show=false">
        <div class="alert-mid">
            <div class="alert-header">
            <div class="alert-left-tips">{{title}}</div>
            <div class="alert-right-close" @click="show = false">+</div>
        </div>
        <div class="alert-content">
            {{content}}
        </div>
        <div class="alert-button" @click="call">
            确定
        </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["title", "content", "callback"],
    data() {
        return {
            show: false
        }
    },
    created() {
        setTimeout(() => {
            this.show = true
        }, 1000)
    },
    methods: {
        call() {
            this.show = false
            this.callback && this.callback()
        }
    },
}
</script>
<style lang="scss">
    .alert {
        position: absolute;
        z-index: 999999;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, .1);
        font-size: .12rem;  
        color: #606266;
        animation: alert-tran .2s ease;
    }
    .alert-mid {
        position: fixed;
        width: 3rem;
        padding: .1rem;
        padding-bottom: .4rem;
        box-sizing: border-box;
        background: #fff;
        border-radius: .04rem;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(1);
        animation: alert-mid-tran .2s ease;
    }
    @keyframes alert-tran{
        from{
            background: white;
        }
        to{
            background: rgba(0, 0, 0, .1);
        }
    }
    @keyframes alert-mid-tran{
        from {
            transform: translate(-50%, -50%) scale(0)
        }
        to {
            transform: translate(-50%, -50%) scale(1)
        }
    }
    .alert-header {
        overflow: hidden;
    }
    .alert-left-tips {
        float: left;
        color: #303133;
        font-weight: 500;
    }
    .alert-right-close {
        float: right;
        color: #909399;
        transform: rotate(45deg) scale(1.4);
        cursor: pointer;
    }
    .alert-button {
        position: absolute;
        right: .1rem;
        width: .5rem;
        height: .3rem;
        line-height: .3rem;
        background: #409eff;
        color: #fff;
        border-radius: .03rem;
        text-align: center;
    }
</style>