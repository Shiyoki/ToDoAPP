import gql from "graphql-tag";
import { graphql } from "react-apollo";


//Se encuentran todos los modelos y funciones del gql para el todolist


//Modelo para obtener la informacion de la base de datos
export const TODO_LIST_QUERY = gql`
query TodoList {
  todosList(orderBy: [completed_ASC, createdAt_DESC]) {
    items {
      id
      text
      completed
    }
  }
}
`;
//Funcion para obtener la informacion de la base de datos
export const withTodos = graphql(TODO_LIST_QUERY, {
  props: ({ data: { todosList }}) => {
    let todos = []
    if (todosList) {
      todos = todosList.items;
    }
    return {
      todos
    };
  },
});


//Modelo para crear informacion en la base de datos
export const CREATE_TODO_MUTATION = gql`
  mutation TodoCreate($data: TodoCreateInput!) {
    todoCreate(data: $data) {
      id
      text
      completed
    }
  }
`;

//funcion para crear una tarea 

export const withCreateTodo = graphql(CREATE_TODO_MUTATION, {
  props: ({ mutate }) => ({
    createTodo: ({ text }) => {
      mutate({
        variables: { data: { text, completed: false } },
        refetchQueries: [{ query: TODO_LIST_QUERY }]
      });
    }
  })
});


//Modelo para editar la informacion de la base de datos
export const TOGGLE_TODO_MUTATION = gql`
  mutation TodoToggle($id: ID!, $completed: Boolean!) {
    todoUpdate(filter: { id: $id }, data: {
        completed: $completed
    }) {
      id
      text
      completed
    }
  }
`;

//Funcion que permite editar si la tarea esta hecha o no
export const withToggleTodo = graphql(TOGGLE_TODO_MUTATION, {
  props: ({ mutate }) => ({
    toggleTodo: ({ id, completed }) => {
      mutate({
        variables: { id, completed },
        refetchQueries: [{ query: TODO_LIST_QUERY }]
      });
    }
  })  
});

//Funcion que permite cambiar el nombre de las tareas a realizar
export const withToggleAllTodos = graphql(TOGGLE_TODO_MUTATION, {
  props: ({ mutate, ownProps: { todos }}) => ({
    toggleAllTodos: ({ completed }) => {      
      todos.forEach((todo) => {
        mutate({
          variables: { id: todo.id, completed },
          refetchQueries: [{ query: TODO_LIST_QUERY }]
        });        
      });      
    }
  })
});

//Modelo que permite eliminar informacion de la base de datos
export const DELETE_TODO_MUTATION = gql`
  mutation TodoDelete($id: ID!) {
    todoDelete(filter: { id: $id }) {
      success
    }
  }
`;

//Funcion que permite eliminar tarea
export const withRemoveTodo = graphql(DELETE_TODO_MUTATION, {
  props: ({ mutate }) => ({
    removeTodo: ( id ) => {
      mutate({
        variables: { id },
        refetchQueries: [{ query: TODO_LIST_QUERY }]
      });
    }
  })  
});