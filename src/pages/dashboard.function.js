export function toHTML() {
  return `
            <li class="db__record">
                <a href="#">Таблица номер 1</a>
                <strong>29.05.20</strong>
            </li>`
}

function getAllKeys() {
  const keys = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)

    if (!key.includes('excel')) {
      continue
    }
    keys.push(key)
  }
  return keys
}

export function createRecordsTable() {
  const keys = getAllKeys()
  console.log('keys', keys)
  if (!keys.length) {
    return `<p>Вы пока не создали ни одной таблицы</p>`
  }

  return `
    <div class="db__list-header">
          <span>Название</span>
          <span>Дата Открытия</span>
        </div>
        <ul class="db__list">
          ${keys.map(toHTML).join('')}
          
        </ul>`
}
