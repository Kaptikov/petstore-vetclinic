<template>
  <section class="product-card__bottom">
    <div class="product-card__tabs">
      <button class="product-card__tab" v-for="(tab, index) in tabs" :key="index" @click="activeTab = index"
        :class="{ 'active': activeTab === index }">
        {{ tab.title }}
      </button>
    </div>
    <div class="product-card__content">
      <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">

        <div class="product-card__article" v-for="(content, contentIndex) in tab.content" :key="contentIndex">
          {{ content.article }}
        </div>
        <div class="product-card" v-for="(content, contentIndex) in tab.content" :key="contentIndex">
          {{ content.dscription }}
        </div>
        <div class="product-card__benefits" v-for="(content, contentIndex) in tab.content" :key="contentIndex">
          {{ content.benefits }}
        </div>
        <div class="product-card" v-for="(content, contentIndex) in tab.content" :key="contentIndex">
          {{ content.structure }}
        </div>

      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          title: 'Описание',
          content: [
            {
              dscription: 'Florida Salmon & Blueberry - сухой корм супер - премиум - класса с лососем и черникой для стерилизованных кошек в возрасте от 1 до 8 лет.Сбалансированное полнорационное питание заботится о коже и шерсти и способствует здоровому пищеварению.В рационе кормов Florida используется только белок животного происхождения.'
            },
            { article: 'Артикул 53974' },
            { structure: 'structure' },
            { benefits: 'benefits' },
          ]
        },
        {
          title: 'О бренде',
          content: [
            {
              dscription: 'lorem'
            },
            { article: 'Артикул 243421421' },
            { structure: 'Content for tab 3' },
          ]
        },
        {
          title: 'Доставка',
          content: [
            {
              dscription: 'Florida Salmon & Blueberry - сухой корм супер - премиум - класса с лососем и черникой для стерилизованных кошек'
            },
            { article: 'Артикул 52315231123' },
            { structure: 'Content for tab 3' },
          ]
        },
      ],
    };
  },
}
</script>
<style lang="scss"></style>