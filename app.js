const app = Vue.createApp({
    data() {
        return {

            url: 'https://github.com/Yh010',
            showBooks: true,
            books: [
                { title: 'Richest Man in Babylon', author: 'George S Clason', img: 'assets/download1.jpg',isFav:true},
                { title: 'Relentless', author: 'Tim Grover', img: 'assets/download2.jpg',isFav:false},
                { title: 'Elon Musk', author: 'Ashlee Vance', img: 'assets/download3.jpg',isFav:true},               
            ]
            
            /*title: 'The final empire',
            author: 'Brandon sanderson',
            age: '45',
            x: 0,
            y:0 */

        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e,data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
            
        }, 
        toggleIsFav(book) {
            book.isFav =! book.isFav 
        },
        computed: {
            filteredBooks() {
                return this.books.filter((book)=> book.isFav)
            }
        }



    }
})
app.mount('#app')