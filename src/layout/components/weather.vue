<template>
  <div id="he-plugin-standard"></div>
</template>
<script>
export default {
  mounted() {
    window.WIDGET = {
      "CONFIG": {
        "modules": "20", "background": "5", "tmpColor": "FFFFFF", "tmpSize": "16",
        "aqiColor": "FFFFFF", "aqiSize": "16", "weatherIconSize": "24", "alertIconSize": "18",
        "padding": "10px 10px 10px 10px", "shadow": "0", "language": "zh", "fixed": "false", "vertical": "top", "horizontal": "left",
        "key": "de8f0a4e61fa4356b795afb2ee65bff6"
      }
    }
    var c = document.createElement('link')
    c.rel = 'stylesheet'
    c.href = 'https://widget.qweather.net/standard/static/css/he-standard.css?v=1.4.0'
    var s = document.createElement('script')
    s.src = 'https://widget.qweather.net/standard/static/js/he-standard.js?v=1.4.0'
    var sn = document.getElementsByTagName('script')[0]
    sn.parentNode.insertBefore(c, sn)
    sn.parentNode.insertBefore(s, sn)
  }
}
</script>