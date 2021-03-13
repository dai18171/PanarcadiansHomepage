module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        'lg': '960px'
      },

      colors:{
        'bluegray': '#F8F8F8'
      },

      spacing:{
        '1360px': '1360px',
        '5px': '5px',
        '10px': '10px',
        '14px': '14px',
        '18px': '18px',
        '26px': '26px',
        '30px': '30px',
        '38px': '38px',
        '50px': '50px',
        '46px': '46px',
        '60px': '60px',
        '70px': '70px',
        '77px': '77px',
        '86px': '86px',
        '100px': '100px',
        '120px': '120px',
        '130px': '130px',
        '140px': '140px',
        '150px': '150px',
        '180px': '180px',
        '200px': '200px',
        '220px': '220px',
        '245px': '245px',
        '255px': '255px',
        '260px': '260px',
        '275px': '275px',
        '280px': '280px',
        '285px': '285px',
        '300px': '300px',
        '365px': '365px',
        '400px': '400px',
        '420px': '420px',
        '450px': '450px',
        '465px': '465px',
        '475px': '475px',
        '480px': '480px',
        '590px': '590px',
        '600px': '600px',
        '620px': '620px',
        '630px': '630px',
        '650px': '650px',
        '740px': '740px',
        '750px': '750px',
        '920px': '920px'
      },

      textColor: {
        primary: '#002868',
        secondary: '#BF0A30',
      },

      fontFamily:{
        'main': ['"Source Sans Pro"'],
        'secondary': ['ProximaNova']
      },

      fontSize:{
        '10px': '10px',
        '18px': '18px',
        '26px': '26px',
        '34px': '34px',
      },

      backgroundColor: theme => ({
        primary: '#002868',
        secondary: '#BF0A30',
      }),

      backgroundImage: theme => ({
        'header-bg': "url('../images/background.png')",
        'featured-bg': "url('../images/circle.png')",
        'map': "url('../images/map.png')",
        'inventory-bg': "url('../images/bg.png')",
        'danger': "url('../svgs/danger.svg')"
      }),
      
      backgroundPosition: {
        'danger': '590px 15px'
      },

      borderColor: theme => ({
        'divider': '#EEEEEE',
        'form': '#B6B6B6',
        'secondary': '#A90427',
      }),

      boxShadow:{
        'custom': '0 4px 40px rgba(0, 0, 0, 0.25)',
        'mob-menu': '0 -5px 10px rgba(0, 0, 0, 0.5)',
        'dropdown': '0 20px 40px rgba(0, 0, 0, 0.35)'
      },

      borderWidth: {
        '6': '6px',
        '10': '10px'
      },

      lineHeight:{
        '25px': '25px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
