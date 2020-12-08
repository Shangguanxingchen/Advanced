import { ref, reactive, computed } from "vue";

function useTodoList() {

    let id = 4;

    let newTodo = ref('');

    let todos = reactive([
       {id: 1, title: '任务一', completed: false},
       {id: 2, title: '任务二', completed: true},
       {id: 3, title: '任务三', completed: false}
    ]);

    let allDone = computed({
        get() {
            return todos.every( todo => todo.completed )
        },
        set(newVal) {
            todos.forEach(todo => todo.completed = newVal)
        }
    } )

    const addNewTodo = function () {
        todos.unshift({
            id: id++,
            title: newTodo.value,
            completed: false
        });

        newTodo.value = '';
    }

    // 你们实现
    let filteredTodos = computed(() => {
        switch (visibility.value) {
            case "all": 
                return todos;
                break;
            case "active":
                return todos.filter(todo => !todo.completed);
                break;
            case "completed":
                return todos.filter(todo => todo.completed);
                break;
            default:
                return todos;
                break;
        }
    });

    let visibility = ref('all');
    const changeVisibility = function(data) {
        visibility.value = data;
    }

    const removeItem = (todo) => {
        let index = todos.findIndex(item => item == todo);
        todos.splice(index, 1);
    }
    const removeCompleted = () => {
        let arr = todos.filter(todo => todo.completed);
        for(let i=0; i<arr.length; i++) {
            let index = todos.findIndex(item => item == arr[i])
            todos.splice(index, 1);
        }
    }

    return {
        todos,
        allDone,

        filteredTodos,

        newTodo,
        addNewTodo,

        visibility,
        changeVisibility,

        removeItem,
        removeCompleted
    }

}

export default useTodoList;