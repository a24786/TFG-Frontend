<template>
  <div class="dropDown">
    <pre class="desplegable">
      <!-- AQUI DEBE IR EL ENCABEZADO -->
      <div class="barra_arrastra">
        <hr class="swipe_barra">
      </div>
      <hr>
        <div class="lista">
            <ol>
              <li>250 g de la mejor carne con lomo de vacuno*. Disfruta de la receta original: Pan con sabor a trufa, queso Cheddar.250 g de la mejor carne con lomo de vacuno*. Disfruta de la receta original: Pan con sabor a trufa, queso Cheddar.250 g de la mejor carne con lomo de vacuno*. Disfruta de la receta original: Pan con sabor a trufa, queso Cheddar.250 g de la mejor carne con lomo de vacuno*. Disfruta de la receta original: Pan con sabor a trufa, queso Cheddar.250 g de la mejor carne con lomo de vacuno*. Disfruta de la receta original: Pan con sabor a trufa, queso Cheddar.250 g de la mejor carne con lomo de vacuno*. Disfruta de la receta original: Pan con sabor a trufa, queso Cheddar.250 g de la mejor carne con lomo de vacuno*. Disfruta de la receta original: Pan con sabor a trufa, queso Cheddar.</li>
              <li>250 g de la mejor carne con lomo de vacuno*. Disfruta de la receta original: Pan con sabor a trufa, queso Cheddar.
              </li><li>250 g de la mejor carne con lomo de vacuno*. Disfruta de la receta original: Pan con sabor a trufa, queso Cheddar.
              </li><li>250 g de la mejor carne con lomo de vacuno*. Disfruta de la receta original: Pan con sabor a trufa, queso Cheddar.
              </li><li>250 g de la mejor carne con lomo de vacuno*. Disfruta de la receta original: Pan con sabor a trufa, queso Cheddar.
              </li><li>250 g de la mejor carne con lomo de vacuno*. Disfruta de la receta original: Pan con sabor a trufa, queso Cheddar.
              </li><li>250 g de la mejor carne con lomo de vacuno*. Disfruta de la receta original: Pan con sabor a trufa, queso Cheddar.
              </li><li>250 g de la mejor carne con lomo de vacuno*. Disfruta de la receta original: Pan con sabor a trufa, queso Cheddar.
              </li><li>250 g de la mejor carne con lomo de vacuno*. Disfruta de la receta original: Pan con sabor a trufa, queso Cheddar.
              </li><li>250 g de la mejor carne con lomo de vacuno*. Disfruta de la receta original: Pan con sabor a trufa, queso Cheddar.
              </li><li>250 g de la mejor carne con lomo de vacuno*. Disfruta de la receta original: Pan con sabor a trufa, queso Cheddar.
              </li><li>250 g de la mejor carne con lomo de vacuno*. Disfruta de la receta original: Pan con sabor a trufa, queso Cheddar.
              </li><li>250 g de la mejor carne con lomo de vacuno*. Disfruta de la receta original: Pan con sabor a trufa, queso Cheddar.
              </li><li>250 g de la mejor carne con lomo de vacuno*. Disfruta de la receta original: Pan con sabor a trufa, queso Cheddar.
              </li><li>250 g de la mejor carne con lomo de vacuno*. Disfruta de la receta original: Pan con sabor a trufa, queso Cheddar.
              </li>
            </ol>
        </div> 
    </pre>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pattaya&family=Roboto:wght@300;400;500&display=swap');
</style>
<script>
export default {
  name: 'dropDown',
  props: {
    msg: String
  },
  data() {
    return{

    }
  },
  methods : {
    submit(){
 
      }
    },
    
}
</script>
<style> 
.dropDown {
  display: flex;
  width: 100%;
  height: 100vh;
}

body {
  width: 100%;
  height: 100vh;
  margin: 0px;
}

.dropDown pre {
    border: 1px solid #999;
    width: 650px;
    padding: 6px;
    overflow: auto;
}

.lista {
    margin-top: -5%;
}

div {
    display: block;
}

.dropDown pre>div {
    text-align: left;
}

pre.desplegable {
    height: 95%;
    width: 90%;
    margin-left: 4.5%;
    position: fixed;
    bottom: -12%;
    font-size: 16px;
    text-align: -webkit-center;
    border-radius: 80px;
    cursor: context-menu;
}

.barra_arrastra {
    height: 10%;
    margin-top: -81px;
    margin-bottom: -20px;
}

.desplegable::-webkit-scrollbar {
    -webkit-appearance: none;
}

.desplegable::-webkit-scrollbar:vertical {
    width:10px;
    
}

.desplegable::-webkit-scrollbar-button:increment,.desplegable::-webkit-scrollbar-button {
    display: none;
} 

.desplegable::-webkit-scrollbar:horizontal {
    height: 10px;
    
}

.desplegable::-webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 20px;
    border: 2px solid #797979;
    
}


.desplegable::-webkit-scrollbar-track {
    border-radius: 10px;  
    margin-top: 120px;
    padding-right: 200px;
}

hr {
    height: 3px;
    background-color: #d8d8d8;
    width: 102%;
    border: #d8d8d8;
}

hr.swipe_barra {
    background-color: grey;
    width: 15%;
    height: 8px;
    cursor: pointer;
}

</style>