# vuetify-v-data-table-electron-test

> for report vuetify v-data-table bug in electron-vue

When using v-slot:body to replace \<tbody\>, no-data-text and loading-text would not show anymore!    

See `src/renderer/components/LandinPage.vue` and run `npm run dev`

Related issue: [v-data-table using v-slot:body no-data-text not show in electron-vue #8660](https://github.com/vuetifyjs/vuetify/issues/8660)

**Update:**
    This is not a bug, replacing tbody will custom all table content, so we should use `item.<name>` slots API, like:   

```html
<v-data-table ... >
    ...
    <template v-slot:item.name="{ item }">
        coustom 'name'
    </template>
    ...
</v-data-table>
```

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build


```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[8fae476](https://github.com/SimulatedGREG/electron-vue/tree/8fae4763e9d225d3691b627e83b9e09b56f6c935) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
