<template>
    <div style="height: 2000px;margin-top: 20px">
        <!--<h1>-->
        <!--{{welcome}}-->
        <!--</h1>-->

        <template v-for="menu in menus">
            <h2 class="ui dividing header" :key="menu.id">
                {{menu.title}}
                <a class="anchor"></a>
            </h2>

            <div class="ui horizontal list">
                <a v-for="child in menu.menus" :key="child.id" class="item" :href="child.url" style="font-size: 1.2rem">
                    {{child.title}}
                </a>
            </div>

        </template>
    </div>

</template>

<script>

    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: 'index-view',
        data () {
            return {
                welcome: "欢迎访问支付运营平台！"
            }
        },
        computed: {
            ...mapGetters([
                'menus'
            ])
        },
        methods: {
            ...mapActions([
                'findMenus'
            ])
        },
        mounted(){
            this.findMenus({})
        }
    }
</script>