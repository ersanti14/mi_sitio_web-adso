<!-- Se tienen un cultivo de café, de los cuales con el uso de la tecnología se recolectan los 
siguientes datos para análisis de suelo:
PH (Acidez del suelo) rango adecuado entre 5 y 5.5.
Materia orgánica mayor a 8
Fosforo (P) mayor a 30
Calcio (Ca) mayor a 3
Magnesio (Mg) mayor a 0.9
Potasio (K) mayor a 0.4
Aluminio (Al) menor a 1
Acorde a los datos recolectados identificar si el suelo es apto para la siembra café -->

<style>
    body{
        display: flex;
        flex-direction: column;
    }
    input{
        display: flex;
        flex-direction: column;
        margin: 5px;
    }
    .todo{
        display:flex;
        flex-direction: column;
    }
    button{
        margin-left: 50px;
    }

</style>

<div class="todo">
    <form action="#" method="post">
        <input type="float" name="ph" placeholder="Ingrese el nivel de ph">
        <input type="number" name="materia" placeholder="Ingrese la materia orgánica">
        <input type="number" name="fosforo" placeholder="Ingrese el fosforo">
        <input type="number" name="calcio" placeholder="Ingrese el calcio">
        <input type="number" name="magnesio" placeholder="Ingrese el magnesio">
        <input type="float" name="potasio" placeholder="Ingrese el potasio">
        <input type="float" name="aluminio" placeholder="Ingrese el aluminio">
    <button type="submit"> Calcular </button>
    </form>
</div>

<?php

    $ph = $_POST['ph'];
    $materia = $_POST['materia'];
    $fosforo = $_POST['fosforo'];
    $calcio = $_POST['calcio'];
    $magnesio = $_POST['magnesio'];
    $potasio = floatVal($_POST ['potasio']);
    $aluminio = floatVal($_POST ['aluminio']);

    if($ph >= 5 && $ph <= 5.5 && $materia > 8 && $fosforo > 30 && $calcio > 3 && $magnesio > 0.9 && $potasio > 0.4 && $aluminio < 1){
        echo "El suelo es apto para la siembra de café";
    }else{
        echo "El suelo no es apto para la siembra de café";
    }

?>