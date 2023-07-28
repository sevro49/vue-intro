const app = Vue.createApp({
    data() {
        return {
            url: "https://www.youtube.com",
            isVisible: true,
            books: [
                {
                    title: "name of the wind",
                    author: "patrik rothfuss",
                    img: "assets/1.jpg",
                    isFav: true,
                },
                {
                    title: "the way of kings",
                    author: "brandon sanderson",
                    img: "assets/2.jpeg",
                    isFav: false,
                },
                {
                    title: "the final empire",
                    author: "brandon sanderson",
                    img: "assets/3.jpeg",
                    isFav: true,
                },
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
