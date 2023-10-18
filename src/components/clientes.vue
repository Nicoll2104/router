<template>
    <div>
      <q-btn label="Agregar" color="primary" @click="toolbar = true" />
      <q-dialog v-model="toolbar">
        <q-card>
          <q-toolbar>
          <q-toolbar-title>Encuesta</q-toolbar-title>
          <q-btn flat round dense icon="❌" @click="toolbar = false" />
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
          <label for="">Maleta:</label><br />
          <input type="number" v-model="maleta" /><br />
          <button @click="agregarCliente()">Enviar</button>
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
              <th class="text-right"><b>maleta</b></th>
              <th class="text-right"><b>Status</b></th>
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
              <td class="text-right">{{ row.maleta }}</td>
              <td class="text-right">{{ row.status }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </div>
  </div>
</template>
      
    <script >
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
        name: 'Maleta',
        label: 'Maleta',
        field: (row) => row.maleta,
      },
      {
        name: "Status",
        label: "Status",
        field: (row) => row.status,
        sortable:true,
        format:(val)=>(val? 'activo' : 'inactivo')
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
    const status = ref(1)
    const toolbar = ref(false);


const obtener = async () => {
  try {
    const response = await axios.get(`https://boleto.onrender.com/api/cliente/ver`);
    rows.value = response.data;
    console.log(response);
  } catch (error) {
    console.error('Error al obtener clientes:', error);
  }
};


const agregarCliente = async () => {
  try {
    const response = await axios.post(`https://boleto.onrender.com/api/cliente/agregar`, {
      cedula: cedula.value,
      nombre: nombre.value,
      apellido: apellido.value,
      edad: edad.value,
      telefono: telefono.value,
      email: email.value,
      maleta: maleta.value,
      status: status.value,
    });

    console.log("Cliente agregado:", response.data);
  } catch (error) {
    console.error("Error al agregar cliente:", error);
  }
};

const agregarCliente = async () => {
    const response = await axios.post("https://boleto.onrender.com/api/cliente/agregar", {
      cedula: cedula.value,
      nombre: nombre.value,
      apellido: apellido.value,
      edad: edad.value,
      telefono: telefono.value,
      email: email.value,
      contrasena: contrasena.value,
      maleta: maleta.value,
      status: status.value,
    });
    toolbar.value = false;
    console.log("Cliente agregado:", response.data);
};

    
    obtener()
  
    
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
      maleta,
      status,
      agregarCliente
    };
  },
};
</script>
      
  <style scoped>
  </style>
      