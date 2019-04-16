# Hooks

## useEffect

useEffect is a hook for encapsulating code that has ‘side effects,’ and is like a combination of componentDidMount, componentDidUpdate, and componentWillUnmount.
Previously, functional components didn’t have access to the component life cycle,but with useEffect you can tap into it

## useState

useState is a hook that encapsulates local state management. Previously, functional components were called “stateless components,” but no longer! With useState, we can utilize what seems like local state for storing values. Actually, they’re more like “state variables” that React keeps track of by the order you declared them. useState saves us from having to create class-based components for state-related responsibilities, since it gives functional components the power and flexibility to handle it themselves.

## useContext

useContext is a hook for getting broadly shared application data from context providers. 

## useReducer

useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

