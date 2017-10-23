## Getting started
---
`npm install -g redux-cc`

### Create pure component
---
`redux-cc -c <component_name>`

### Create redux-component component
Command crete component with redux structure:
1. Creates directories structure:
  src:
    actions
    components
    containers
    reducers
2. Creates files structure:
  component, container, reducer, action
---
`redux-cc -r <component_name>`

### Options
---
```
  -e  Just create example
  -c  Creates pure component
  -r  Creates redux-component
  -d  Specify source directory (./src/);
```
