Vue.component('kkb-dialog', {
    props: {
        title: String,
        visible: Boolean,
    },
    watch: {
        visible: function() {
            if(this.visible == true) {
                this.$emit("open")
            }else {
                this.$emit("close")
            }
        }
    },
    template: `
        <div class="dialog" v-show="visible">
            <div class="dialog-header">
                <span class="dialog-title">{{title}}</span>
                <i class="dialog-close" @click="close">x</i>
            </div>
            <div class="dialog-body">
                <slot></slot>
            </div>
        </div>
    `,
    methods: {
        close() {
            this.$emit("update:visible", false);
        }
    }
});