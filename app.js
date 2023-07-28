const app = Vue.createApp({
    data() {
        return {
            isVisible: true,
            books: [
                { title: "name of the wind", author: "patrik rothfuss" },
                { title: "the way of kings", author: "brandon sanderson" },
                { title: "the final empire", author: "brandon sanderson" },
            ],
        };
    },

    methods: {
        toggleShowBooks() {
            this.isVisible = !this.isVisible;
        },
    },
});

app.mount("#app");
