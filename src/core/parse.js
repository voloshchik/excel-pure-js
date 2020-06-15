export function parse(value = '') {
  if (value.startsWith('=')) {
    try {
      return eval(value.slice(1))
    } catch (error) {
      return value
      console.log('skipping parse error', error)
    }
  }

  return value
}
