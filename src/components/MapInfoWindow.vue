<template>
    <div class="bar-map-detail">
        <div class="bar-images">
        <div  v-for="image in marker.images" :key="image.id">
           <img :src="blobUrl + image.imgUrl" :alt="marker.title">
        </div>
        </div>
        <div class="bar-title">{{marker.title}}</div>
        <div>{{marker.address}}</div>
        <hr>
        <router-link class="resevation-a" :to="{name: 'Reservas', params: { id:  marker.id}}">RESERVAR</router-link>
    </div>
</template>

<script>
import { IMAGES_URL } from "@/constants/azureUrls";
export default {
    data(){
        return {
            blobUrl: IMAGES_URL
        }   
    },
     props: {
        marker: {
        type: Object,
        required: true
        },

    }
}
</script>

<style>
.bar-title{
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}
.bar-map-detail hr{
    border: 1px solid #F1F1F1;
}
.resevation-a{
    font-weight: bold;
    text-decoration: none;
    color: rgb(254,167,1);
    font-size: 18px;
}
.gm-style-iw{
    border-radius: 25px  !important;
}

.gm-ui-hover-effect{
    margin: 10px !important;
}
.bar-images {
    margin-bottom: 10px;
    scroll-behavior: smooth;
    margin-top: 20px;
  display: inline-flex;
    overflow-y: auto;
    width: 100%;
}
.bar-images img {
  border-radius: 10px;
  max-height: 100px;
  margin-right: 10px;
}
.bar-images::-webkit-scrollbar {
        border-radius: 10px;
        width: 5px;
        height: 8px;
    }
    /* width */
    .bar-images::-webkit-scrollbar {
        width: 1px;
    }
    .bar-images::-webkit-scrollbar-track {
        background-color: #f1f1f1;
        border-radius: 10px;
    }
    /* Handle */
    .bar-images::-webkit-scrollbar-thumb {
        background: #fea701;
        border-radius: 10px;
    }
    /* Handle on hover */
    .bar-images::-webkit-scrollbar-thumb:hover {
        background: #f7b741;
    }   
</style>