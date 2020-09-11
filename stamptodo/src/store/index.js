import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        d: new Date(),
        title: 'PHP'
      }
    ],
    dones: [
    ]
  },
  getters: {
    todos(state) {
      return state.todos;
    },
    dones(state) {
      return state.dones;
    }
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload.todo);
    },
    deleteTodo(state, d) {
      let index = state.todos.findIndex(todo => todo.d === d);
      state.todos.splice(index, 1);
    },
    doneTodo(state, d) {
      let index = state.todos.findIndex(todo => todo.d === d);
      let doneItem = state.todos.splice(index, 1);
      state.dones.push(doneItem);
    }
  },
  actions: {
  },
  modules: {
  }
})
