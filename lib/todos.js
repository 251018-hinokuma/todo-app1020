export function countRemaining(todos) {
  return todos.filter((todo) => !todo.done).length
}

export function isValidTodoText(text){
     const trimmed = text.trim()
    return trimmed.length==0? false: trimmed.length>50?  false:true
}