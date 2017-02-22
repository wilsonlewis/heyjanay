// Vendor requirements
import url from 'query-string'

// Package requirements
import Modal from './modal'
import Slideshow from './slideshow'
import store from './store'

// Application entry
export default new Vue({
    el: '#container',

    components: {
        Modal,
        Slideshow
    },

    data: {
        loading: false,
        selection: null,
        slideshow: null,
    },

    computed: {
        active() {
            return this.loading || this.slideshow != null
        }
    },

    mounted() {
        let hash = url.parse(window.location.hash)

        if (hash.gid) {
            this.selection = hash.pid
            this.fetch(window.location.origin + '/albums/' + hash.gid + '/json:1')
        }
    },

    methods: {
        img(e) {
            this.selection = e.target.getAttribute('slideshow-pid') || 0
            this.fetch(e.target.getAttribute('slideshow-url') || window.location.href)

            e.preventDefault()
            e.stopPropagation()
        },

        show(images, gid) {
            this.slideshow = {
                gid: gid,
                pid: this.selection,
                images: images,
            }
        },

        close() {
            this.slideshow = null
        },

        fetch(url) {
            this.loading = true

            if (url.lastIndexOf(window.location.origin) == -1) {
                url = url.replace(/(.*?)\.com/, window.location.origin)
            }

            window.$.ajax({
                url: url,
                dataType: 'json',
                success: this.fetched,
                error: this.failed,
            })
        },

        fetched({ images, slug }) {
            this.loading = false
            this.show(images, slug)
        },

        failed(error) {
            this.loading = false
            console.log('error loading slideshow:', error)
        }
    }
})

autosize(document.querySelectorAll('textarea'))