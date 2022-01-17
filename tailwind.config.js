module.exports = {
  
  darkMode: 'class',

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      ts: '635px',
      as: '576px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      ms : '350px',
    },
    colors: {
      'blue': '#4D67D5',
      'hoverblue': 'rgba(0,0,0,0.2)',
      'input-color': '#F1F1F1',
      'green': '#53CF28',
      'white': '#ffffff',
      'black': '#000000',
      'gray': '#999999',
      'gray2': '#B7BFBF',
      'card-1': '#19DA9F',
      'card-2': '#3EAFBF',
      'card-3': '#D160EC',
      'card-4': '#F1A80D',
      'card-5': '#EE25A2',
      'card-6':'#79E518',
      'card-7': '#37B9CB',
      'card-8': '#EFF91D',
      'card-9': '#A6E4A8',
      'card-10': '#549E99',
      'transparent': 'transparent',
      'dark-nav': '#393939',
    },
    fontFamily: {
      'mukta': ['"Mukta"', 'sans-serif'],
      "Fa": ['"Font Awesome 5 Free"']
    },

    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      minWidth: {
        '1/2': '300px',
      },
      width : {
        'card': '360px'
      },

    }
  }
}