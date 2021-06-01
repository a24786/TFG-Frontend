<template>
    <div><div>{{marker.name}}</div>
        
    </div>
</template>

<script>
export default {
     props: {
        marker: {
        type: Object,
        required: true
        }
    }
}
</script>

<style>

</style>