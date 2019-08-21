<template>
  <v-app id="inspire">
    <v-content>
      <v-flex pa-4>
    <v-data-table
      :headers="headers"
      :items="items"
      item-key="name"
      class="elevation-1"
    >
     <template  v-slot:no-data>
        NO DATA HERE!
      </template>
    <!-- no-data-text do not show !!!-->
     <template  v-slot:body="{ items }">
        <tbody>
          <tr v-for="item in items" :key="item.name">
            <td>{{ item.name }}</td>
            <td>CONTENT</td>
            <td>CONTENT</td>
            <td>CONTENT</td>
            <td>CONTENT</td>
            <td>CONTENT</td>
          </tr>
        </tbody>
      </template>

    </v-data-table>
    </v-flex>
    </v-content>
  </v-app>
  </template>

<script>
// when items is empty
const desserts = [
  // {
  //     name: 'Donut',
  //     calories: 452,
  //     fat: 25.0,
  //     carbs: 51,
  //     protein: 4.9,
  //     iron: '22%',
  //   },
  //   {
  //     name: 'KitKat',
  //     calories: 518,
  //     fat: 26.0,
  //     carbs: 65,
  //     protein: 7,
  //     iron: '6%',
  //   },
];
export default {
  name: "landing-page",
  components: {},
  data() {
    return {
      items: desserts,
      headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
    };
  },
  methods: {}
};
</script>

<style>
</style>
