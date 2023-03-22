/* eslint-disable brace-style */
function sortByName (inputArray) {
    inputArray.sort(function (a, b) {
      const nameA = a.toLowerCase()
      const nameB = b.toLowerCase()
      if (nameA < nameB)
      // сортируем названия по возрастанию
      { return -1 }
      if (nameA > nameB) return 1
      return 0 // нет сортировки
    })
    return inputArray
  }
  
  // eslint-disable-next-line no-undef
  exports.sortByName = sortByName
  