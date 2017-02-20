<template>
    <div ref="photoswipe" class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="pswp__bg"></div>
        <div class="pswp__scroll-wrap">
            <div class="pswp__container">
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
            </div>
            <div class="pswp__ui pswp__ui--hidden">
                <div class="pswp__top-bar">
                    <div class="pswp__counter"></div>
                    <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                    <button class="pswp__button pswp__button--share" title="Share"></button>
                    <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                    <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                    <div class="pswp__preloader">
                        <div class="pswp__preloader__icn">
                          <div class="pswp__preloader__cut">
                            <div class="pswp__preloader__donut"></div>
                          </div>
                        </div>
                    </div>
                </div>
                <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                    <div class="pswp__share-tooltip"></div> 
                </div>
                <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
                <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
                <div class="pswp__caption">
                    <div class="pswp__caption__center"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // Vendor options
    const $options = {
        loop: false,
        zoomEl: false,
        shareEl: false,
        bgOpacity: 0,
        counterEl: false,
        fullscreenEl: false,
        pinchToClose: false,
        closeOnScroll: false,
        maxSpreadZoom: 1,
        getDoubleTapZoom(click, item) {
            return item.initialZoomLevel
        }
    }

    // Component definition
    export default {
        name: 'Slideshow',

        props: {
            slideshow: {
                type: Object,
                required: true,
            }
        },

        data() {
            return {
                options: $options,
                photoswipe: null,
            }
        },

        mounted() {
            console.log('this.slideshow', this.slideshow)

            this.options.index = this.getIndex()
            this.options.galleryUID = this.slideshow.gid

            this.photoswipe = new PhotoSwipe(
                this.$refs.photoswipe,
                PhotoSwipeUI_Default,
                this.slideshow.images,
                this.options
            )
            
            this.photoswipe.init()

            this.photoswipe.listen('destroy', this.close)

            if (this.photoswipe.likelyTouchDevice) {
                this.photoswipe.ui.hideControls()
            }
        },

        destroy() {
            this.photoswipe.close();
        },

        methods: {
            close() {
                this.$emit('close')
            },

            getIndex() {
                if (this.slideshow.pid != null) {
                    for (let index in this.slideshow.images) {
                        if (this.slideshow.images[index].pid == this.slideshow.pid) {
                            return parseInt(index)
                        }
                    }
                }

                return this.slideshow.index || 0
            }
        }
    }
</script>