<template>
  <div id="Home">

    <Header />
    <Block_01 />
    <Philosophy_Block />
    <About_Block />
    <Services_Block />
    <Block_05 />

  </div>
</template>

<script>
import Header from '@/components/Header'
import Block_01 from '@/components/Block_01'
import Philosophy_Block from '@/components/Philosophy_Block'
import About_Block from '@/components/About_Block'
import Services_Block from '@/components/Services_Block'
import Block_05 from '@/components/Block_05'

export default {
  name: 'App',
  components: {
    Header,
    Block_01,
    Philosophy_Block,
    About_Block,
    Services_Block,
    Block_05,
  },
}
</script>
