<template>
    <div>
      <q-btn label="Añadir" color="primary" @click="toolbar = true" />
      <q-dialog v-model="toolbar">
        <q-card>
        <q-toolbar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
          </q-avatar>

          <q-toolbar-title>Agregar cliente</q-toolbar-title>

        <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>

        <q-card-section>
          <label for="">Cedula: </label><br />
          <input type="number" v-model="cedula" />
          <br />
          <label for="">Nombre: </label><br />
          <input type="text" v-model="nombre" />
          <br />
          <label for="">Apellido: </label><br />
          <input type="text" v-model="apellido" /><br />
          <label for="">Edad: </label><br />
          <input type="number" v-model="edad" /><br />
          <label for="">Telefono: </label><br />
          <input type="number" v-model="telefono" /><br />
          <label for="">Email: </label><br />
          <input type="text" v-model="email" /><br />
          <label for="">Contrasena: </label><br />
          <input type="text" v-model="contrasena" /><br />
          <label for="">Maleta: </label><br />
          <input type="number" v-model="maleta" /><br />
          <button @click="agregar()">Enviar</button>
        </q-card-section>
      </q-card>
    </q-dialog>

    <div class="q-pa-md">
      <q-markup-table>
          <thead>
            <tr>
              <th><h4 class="q-ma-xs text-left">Clientes</h4></th>
            </tr>
            <tr>
              <th class="text-left"><b>Cedula</b></th>
              <th class="text-right"><b>Nombre</b></th>
              <th class="text-right"><b>Apellido</b></th>
              <th class="text-right"><b>Edad</b></th>
              <th class="text-right"><b>Telefono</b></th>
              <th class="text-right"><b>Email</b></th>
              <th class="text-right"><b>Contrasena</b></th>
              <th class="text-right"><b>maleta</b></th>
              <th class="text-right"><b>Estado</b></th>
              <th class="text-right"><b>Opciones</b></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rows">
              <td class="text-left">{{ row.cedula }}</td>
              <td class="text-right">{{ row.nombre }}</td>
              <td class="text-right">{{ row.apellido }}</td>
              <td class="text-right">{{ row.edad }}</td>
              <td class="text-right">{{ row.telefono }}</td>
              <td class="text-right">{{ row.email }}</td>
              <td class="text-right">{{ row.contrasena }}</td>
              <td class="text-right">{{ row.maleta }}</td>
              <td class="text-right">{{ row.estado }}</td>
              <td class="text-right">
                <q-btn label="Editar" color="primary" @click="editar(row)"/>
              </td>
          </tr>
        </tbody>
      </q-markup-table>
    </div>
  </div>
    </template>
      
    <script>
    import axios from "axios";
    import { ref } from "vue";
    
    const columns = ref([
      {
        name: 'Cedula',
        label: 'Cedula',
        align: 'left',
        field: (row) => row.cedula,
      },
      {
        name: 'Nombre',
        label: 'Nombre',
        field: (row) => row.nombre,
      },
      {
        name: 'Apellido',
        label: 'Apellido',
        field: (row) => row.apellido,
      },
      {
        name: 'Edad',
        label: 'Edad',
        field: (row) => row.edad,
      },
      {
        name: 'Telefono',
        label: 'Telefono',
        field: (row) => row.telefono,
      },
      {
        name: 'Email',
        label: 'Email',
        field: (row) => row.email,
      },
      {
        name: 'Contrasena',
        label: 'Contrasena',
        field: (row) => row.contrasena,
      },
      {
        name: 'Maleta',
        label: 'Maleta',
        field: (row) => row.maleta,
      },
      {
        name: "Estado",
        label: "Estado",
        field: (row) => row.estado,
      },
      {
        name: "Opciones",
        label: "Opciones",
        field: "actions",
      },
    ])

    const rows=ref([]);
    const id=ref("");
    const cedula=ref("");
    const nombre=ref("");
    const apellido=ref("");
    const edad=ref("");
    const telefono=ref("");
    const email=ref("");
    const contrasena=ref("");
    const maleta=ref("");
    const estado = ref(1)
    const toolbar = ref(false);
    const cambiar = ref(false);

    const agregar = async () => {
    if (cambiar.value == true) {
    const data = {
    id: id.value,
    cedula: cedula.value,
    };
    const buscar = rows.value.findIndex(r=>r._id==id.value)
    
    console.log(data);
    const cliente = await axios.put(
      `https://boleto.onrender.com/api/cliente/modificar`,
    data
    ).then((response)=>{
      console.log("r", response);
      rows.value.splice(buscar, 1,response.data.cliente)
    }).catch((error)=>{
      console.log("e", error);
    })
  }else{
    const data ={
      telefono: telefono.value,
      email: email.value,
      contrasena: contrasena.value
    };
    const clientes = await axios.post(
      `https://boleto.onrender.com/api/cliente/agregar`,
      data
    );
    rows.value.push(clientes.data.cliente);
  }
  toolbar.value = false
}

    async function obtener() {
      console.log("Esperando datos");
      const clientes =  await axios.get(
        `https://boleto.onrender.com/api/cliente/ver`
        );
        rows.value = clientes.data.cliente;
    }
    
    obtener()

    const editar = (row) => {
    console.log(row);
    toolbar.value = true;
    id.value=row._id
    cambiar.value=true
    cedula.value=row.cedula
    nombre.value=row.nombre
    apellido.value=row.apellido
    edad.value=row.edad
    telefono.value=row.telefono
    email.value=row.email
    contrasena.value=row.contrasena
    maleta.value=row.maleta
    estado.value=row.estado
};
  
    
    export default {
  setup() {
    return {
      toolbar,
      selected: ref([]),
      columns,
      rows,
      id,
      cedula,
      nombre,
      apellido,
      edad,
      telefono,
      email,
      contrasena,
      estado,
      agregar,
      editar,
    };
  },
};
</script>
      
  <style scoped>
  </style>
      