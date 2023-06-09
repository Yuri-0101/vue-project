<template>
  <div>
    <h1>Lista de Veículos do Novo Leilão de Automóveis</h1>

    <h3>Automóveis sendo leiloados no momento:
      <span v-if="items.length > 0">
        {{ items.length }}
      </span>
      <span v-else>
        Não há automóveis sendo leiloados no momento
      </span>
    </h3>

    <ul>
      <li v-for='item in items' :key="item.id">
        {{ item.car }} | 
        R${{ item.lanceMin }},00
      </li>
    </ul>

    <h3>adicionar veículo no leilão</h3>
    <label>Informe o modelo:</label>
    <input type="text" v-model="newItem.car">
    <label>Digite o lance mínimo desejado:</label>
    <input type="text" v-model="newItem.lanceMin">

    <label>
      <p>Cor:</p>
      <select v-model="newItem.color">
        <option value="black">Preto</option>
        <option value="white">Branco</option>
        <option value="red">Vermelho</option>
        <option value="silver">prata</option>
        <option value="other">outro</option>
      </select>
    </label>

    <button :disabled="newItem.car.length < 3 || newItem.lanceMin.length < 3" @click="items.push({ ...newItem })">
      Salvar item
    </button>
  </div>

</template>

<script>
  export default {
    name: 'MainList',
    data() {
      return {
        newItem: {
          car: '',
          color: 'black',
        },
        items: [
          { id: 1, lanceMin: '180.000', car: 'Toyota Supra mk4', color: 'black'},
          { id: 2, lanceMin: '90.000', car: 'Toyota AE86', color: 'white'},
          { id: 3, lanceMin: '110.000', car: 'Honda NSX', color: 'red'},
          { id: 4, lanceMin: '70.000', car: 'Mazda Miata', color: 'red'},
        ]
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  strong, label {
    margin: 10px auto;
    display: block;
  }
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: block;
    margin: 10px 10px;
    font-size: x-large;
  }
  a {
    color: #42b983
  }
</style>