import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

const plugins = [
  tailwindcss(),
  autoprefixer()
  // other plugins as needed
]

export default { plugins }
