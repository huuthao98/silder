const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const listImg =  $('.img-list')

const app = {
    currentIndex: 0,
    images: [
        {path: './pictures/1.jpg'},
        {path: './pictures/2.jpg'},
        {path: './pictures/3.jpg'},
        {path: './pictures/4.jpg'},
        {path: './pictures/5.jpg'},
        {path: './pictures/6.jpg'},
        {path: './pictures/7.jpg'},
        {path: './pictures/8.jpg'},
        {path: './pictures/9.jpg'}
    ],

    render: function() {

        //render list img
        // const htmlListImg = this.images.map((image) => {
        //     return `
        //     <div class="img-show" style="background-image: url('${image.path}')"></div>
        //     `
        // })
        // listImg.innerHTML = htmlListImg.join('');
        //render list dot
        const htmlListDot = this.images.map(() => {
            return `
            <li class="li-dot"></li>
            `
        })
        $('.list-dot').innerHTML = htmlListDot.join('');

    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentImage', {
            get: function() {
                return this.images[this.currentIndex]
            }
        })
    },
    handleEvent: function() {
        const _this = this
        nextBtn.onclick = function() {
            _this.nextImage()
            
        }
        prevBtn.onclick = function() {
            _this.nextImage()
        }
    },
    nextImage: function() {
        this.currentIndex++ 
        if (this.currentIndex >= this.images.length) {
            this.currentIndex = 0
        }
        this.loadCurrentImage()
    },
    prevImage: function() {
        this.currentIndex-- 
        if (this.currentIndex < 0 ) {
            this.currentIndex = this.images.length -1
        }
        this.loadCurrentImage()
    },
    loadCurrentImage: function() {
        const imgShow = $('.img-show')
        imgShow.style.backgroundImage = `url('${this.currentImage.path}')`
    },
    
    start: function() {
        // dinh nghia thuoc tinh
        this.defineProperties()
        //lang nghe/xu ly su kien nguoi dung
        this.handleEvent()
        //tai anh đầu tiên khi chạy ứng dung 
        this.loadCurrentImage()
        //render giao dien nguoi dung
        this.render()
    }
}
app.start()