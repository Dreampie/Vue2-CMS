<template>
    <!--body-->
    <div class="bodyer pusher">
        <v-loading></v-loading>
        <!--sider-->
        <div class="sidebar">
            <v-side-bar :logo="logo" :menus="menus"></v-side-bar>
        </div>
        <div class="content">
            <!--head-->
            <header class="header">
                <v-top-menu :help="help" :session="session" :menus="childMenus"></v-top-menu>
            </header>
            <router-view class="main"></router-view>
            <!--foot-->
            <footer class="ui footer segment">
                <div class="container">
                    <div>Copyright&nbsp;©&nbsp;2017&nbsp;
                        <a :href="belong.url" target="_blank">@{{belong.name}}</a>.
                    </div>

                    <div>Base on <a :href="baseOn.url" target="_blank">{{baseOn.name}}</a> | Powered by
                        <a :href="poweredBy.url">{{poweredBy.name}}.</a>
                    </div>
                </div>
            </footer>
        </div>
        <v-alert></v-alert>
        <v-back-top></v-back-top>
    </div>
</template>

<script>
    import '@dreampie/semantic-ui/semantic.min.js'
    import 'semantic-ui-calendar/dist/calendar.min.js'
    import logoImage from './asset/logo.png'

    import {mapGetters, mapActions} from 'vuex'
    import {Alert, Loading, BackTop, SideBar, TopMenu} from '@dreampie/vue2-component'

    export default {
        name: 'app',
        data() {
            return {
                logo: {url: logoImage},
                help: {url: 'https://www.vuejs.com'},
                belong: {name: 'Vue Components', url: 'https://www.vuejs.com'},
                baseOn: {name: 'Vuejs', url: 'https://github.com/vuejs'},
                poweredBy: {name: 'Dreampie', url: 'https://github.com/Dreampie'},
                childMenus: []
            }
        },
        components: {
            'v-alert': Alert,
            'v-back-top': BackTop,
            'v-loading': Loading,
            'v-side-bar': SideBar,
            'v-top-menu': TopMenu
        },
        computed: {
            ...mapGetters([
                'session',
                'menus'
            ])
        },
        methods: {
            initChildMenu(childMenus) {
                this.childMenus = childMenus
                console.log(this.childMenus)
            },
            ...mapActions([
                'getSession',
                'findMenus',
            ])
        },
        mounted() {
            const loginDisabled = window.localStorage.getItem("loginDisabled")
            if (!loginDisabled || loginDisabled === 0) {
                this.getSession({})
            }
            this.findMenus({})
            this.$bus.$on('v-app-child-menu:init', this.initChildMenu)
        }
    }
</script>

<style lang="stylus">
    @import '~@dreampie/semantic-ui/semantic.min.css';
    @import '~semantic-ui-calendar/dist/calendar.min.css';

    body, html {
        z-index: 0;
        height: 100%;
    }

    html {
        overflow-y: scroll;
    }

    body {
        position: relative;
    }

    a {
        transition: color 0.2s;
        outline: none;
    }

    .bodyer {
        min-height: 100%;
        position: relative;
    }

    .bodyer .content {
        margin-left: 85px;
    }

    .bodyer .header {
        padding-bottom: 10px;
    }

    .bodyer .main {
        padding: 0 10px 76px 10px;
    }

    .bodyer .footer {
        border-radius: 0rem !important;
        margin: 0rem !important;
        width: 100%;
        position: absolute;
        bottom: 0;
    }

    .bodyer .footer .container {
        text-align: center;
    }

    .bodyer .footer .container a {
        color: rgba(0, 0, 0, 0.6);
    }

    .bodyer .footer .container a:hover {
        color: rgba(0, 0, 0, 0.8);
    }
</style>
