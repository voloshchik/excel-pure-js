function toButton(button) {
  console.log('button.value', button.value)
  const meta = `
  data-type = "button"
  data-value = '${JSON.stringify(button.value)}'
  `
  return `<div 
   ${meta}
    class="button ${button.active ? 'active' : ''}"
  >
    <i
     class="material-icons"
     ${meta}
     >${button.icon}</i>
  </div>`
}

export function createToolbar(state) {
  const button = [
    {icon: 'format_align_left', active: false, value: {textAlign: 'left'}},
    {icon: 'format_align_center', active: false, value: {textAlign: 'center'}},
    {icon: 'format_align_right', active: false, value: {textAlign: 'right'}},
    {
      icon: 'format_bold',
      active: state['fontWeight'] === 'bold',
      value: {fontWeight: state['fontWeight'] === 'bold' ? 'normal' : 'bold'},
    },
    {icon: 'format_italic', active: false, value: {fontStyle: 'italic'}},
    {
      icon: 'format_underlined',
      active: false,
      value: {textDecoration: 'underline'},
    },
  ]

  return button.map(toButton).join('')
}
