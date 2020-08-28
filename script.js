let app = new Vue({
    el:'#app',
    data: {
        message: 'Hello'
    },
    methods: {
        reverseText: function() {
            this.message = this.message.split('').reverse().join('');
        }
    }
})