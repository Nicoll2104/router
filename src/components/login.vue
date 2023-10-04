<template>
<div class="body">
    <div class="hola">
        <div class="div2">
            <div>
            <h1>Bienvenidos</h1>

        <div class="caja">
        <input type="text" placeholder="Usuario">
        <br>
        <input type="text" placeholder="Contraseña">
    </div>
    <button class="boton">Registrarse</button>
    </div>
    </div>
</div>
</div>
</template>
<script setup>
</script>

<style scoped>
.div2{
    display: flex;
    flex-direction: column;
}

.caja{
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 10px;
}

input{
    border: 1px solid red;
    color: black;
}

.boton{
    margin-left: 10px;
    background-color: aqua;
}

</style>