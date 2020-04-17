1. What problem does the context API help solve?
1. The complexity of redux state and the inefficiency of Prop Drilling

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
2. An Action is a payload of information. We can call A Reducer is a function that allows us to tell the state of the app how it should be shaped. Store is basically a container for all of the state in the application. There shouldn't be any state that comes from anywhere else,  making it the "single source of truth" for the application.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
3. Application state is global state for the app while component state is state for local components. If you were using data that would affect multiple parts of all of the app, you'd want to use application state. If it's confined to a local area, use component state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
4. Redux-Thunk is Middleware that lets you call action creators. It returns a function instead of an action object

1. What is your favorite state management system you've learned and this sprint? Please explain why!
5. While Redux is overly complicated for most applications, it's something I'm more familiar with, as opposed to context. Either way, I'm comfortable with both.