# Redux branch
In this branch we will be investigating react apps using redux.

## Components model
When using Redux, we can recognize two types of components:
#### Class based Components
This type has no interaction with 
#### Containers
A normal component can be upgraded to a container if it is going to use an action creator and render the result of reducers.
## Actions
React uses the word actions to describe what we know as services in Angular. To use Actions we need to specify a ```helper``` to fire the action. 
The helpers are functions to be called on an event (e.g. click...) or using Reacts helpers function (e.g. ComponentWillMount() ). 
After this step, the helper will call the `action creator` with the right input. 
The action creators are the functions where the logic of the action is implemented and encapsulated under a type and optionally a payload.
## middlewares
After firing an Action creator it sends the result to all reducers, but a reducer handles data and doesn't need to know the logic behind it. 
Here where the role of middlewares comes. 
They stop the action from reaching the reducers, execute the `action creator` (e.g. make the HTTP call) and fill the payload with the result. 
## Reducers
A reducer is an action handler. it handles an action based on its type.
By handling we mean modifying the application state. and after this modification React will render the new state.
## Router (redux-router)
redux router implements th routes in a separate file where it specify the root route in a ```<Route path="..." component={...}></Route>``` tag where we specify the path and the component to render for a specific route.
Child routes are added by nesting the same tag in it self. default routes are nested with the tag ```<IndexRoute component={...} />```. 
If a route needs a unique id for each instance of it, the ```path``` is followed by and id to be specified in the component (e.g. ```path="route/:id"```)
## 3rd party Components
Because of the modularity of Reacts ecosystem. 3rd party components are handled as normal ones.
## Life cycle methods
these are methods that will be executed at a specific state of the component (e.g. when the component is called or when it is destroyed)
## Form validation (Form redux)
React applications can use different plugins to manage forms and there validation. One of the most know ones is [ReduxForm](https://github.com/erikras/redux-form)
