const app = Vue.createApp({
    data() {
        return {
            isVisible: true,
            title: "The Final Empire",
            author: "Brandon Sanderson",
            age: 45,
        };
    },

    methods: {
        toggleShowBooks(){
            this.isVisible = !this.isVisible;
        },
    },
});

app.mount("#app");
