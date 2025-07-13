/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        harvest: {
          orange: '#D2691E',
          mustard: '#FFDB58',
          maple: '#B22222',
          cream: '#F5F5DC',
          brown: '#8B4513',
          sage: '#87A96B',
          darkBrown: '#654321',
          lightOrange: '#FFE4B5',
          deepOrange: '#FF8C00'
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'script': ['Dancing Script', 'cursive'],
        'sans': ['Inter', 'sans-serif']
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fall': 'fall 8s linear infinite',
        'fadeIn': 'fadeIn 1s ease-in-out',
        'slideUp': 'slideUp 0.8s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        fall: {
          '0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      backgroundImage: {
        'autumn-gradient': 'linear-gradient(135deg, #FFE4B5 0%, #D2691E 50%, #8B4513 100%)',
        'leaf-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23D2691E\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      }
    },
  },
  plugins: [],
}