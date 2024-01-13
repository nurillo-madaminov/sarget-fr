<script>
export default {
  props: ['img'],
  methods: {
    getImageUrl(name) {
      return new URL(`../assets/img/courses/${name}.jpg`, import.meta.url).href
    }
  }
}
</script>

<template>
  <div class="owl-carousel owl-theme owl-courses">
    <div class="col-md-4 col-sm-4">
      <div class="item">
        <div class="courses-thumb">
          <div class="courses-top">
            <div class="courses-image">
              <img :src="getImageUrl(img)" class="img-responsive" alt="" />
            </div>
            <div class="courses-date">
              <span><i class="fa fa-calendar"></i></span>
              <span><i class="fa fa-clock-o"></i> 1.5 soat</span>
            </div>
          </div>

          <div class="courses-detail">
            <h3><a href="#">English</a></h3>
            <p>Abduroziq bilan boshlang'ich (beginner) Ingliz tilini o'rganing</p>
          </div>

          <div class="flex items-center justify-center gap-4 pb-4">
            <p>Abduroziq Halilov</p>
            <a href="#" class="courses-price">UZS oyiga</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* @import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"; */

.card:hover .inner-element {
  @apply opacity-70 bg-gray-800;
}

#courses .section-title {
  text-align: center;
}

#courses .owl-theme .owl-nav {
  margin-top: 30px;
}

#courses .owl-theme .owl-nav [class*='owl-'] {
  border-radius: 2px;
  font-size: 16px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  padding: 0;
}

.courses-thumb {
  background: #f9f9f9;
  position: relative;
}

.courses-top {
  position: relative;
}

.courses-image {
  background: linear-gradient(to right, #202020, #101010);
}

.courses-date {
  background: linear-gradient(rgba(255, 0, 0, 0), rgba(0, 0, 0, 0.6));
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 20px 25px;
}

.courses-date span,
.courses-author span {
  font-size: 14px;
  font-weight: bold;
}

.courses-date span {
  color: #ffffff;
  display: inline-block;
  margin-right: 10px;
}

.courses-detail {
  padding: 25px 25px 15px 25px;
}

.courses-detail h3 {
  margin: 0 0 2px 0;
}

.courses-info {
  border-top: 1px solid #f0f0f0;
  position: relative;
  clear: both;
  padding: 15px 25px;
}

.courses-author,
.courses-author span {
  display: inline-block;
  vertical-align: middle;
}

.courses-author img {
  display: inline-block !important;
  border-radius: 50px;
  width: 50px !important;
  height: 50px;
  margin-right: 10px;
}

.courses-price {
  background: #29ca8e;
  border-radius: 2px;
  color: #ffffff;
  display: block;
  padding: 5px 10px;
}

.courses-price.free span {
  background: #3f51b5;
}
</style>
