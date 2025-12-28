//Question statement: Implement a feature flag component in react

//Approach:

// Use context api to store the feature object at global level
// Create a React component using context provider and wrap the app in it
// In that component declare the context and update the values of keys by making BE api calls
// Create a Feature component which will take feature key and children to render the UI conditionally based and feature flag,
// this component will use useContext and do the conditional rendering

// NOTE: feature object can be in store also like redux or zustand