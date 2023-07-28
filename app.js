const app = Vue.createApp({
    data() {
        return {
            isVisible: true,
            title: "The Final Empire",
            author: "Brandon Sanderson",
            age: 45,
            x: 0,
            y: 0,
        };
    },

    methods: {
        toggleShowBooks() {
            this.isVisible = !this.isVisible;
        },

        handleEvent(e, data) {
            console.log(e, e.type);
            if (data) {
                console.log(data);
            }
        },

        handleMouseMove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
    },
});

app.mount("#app");
