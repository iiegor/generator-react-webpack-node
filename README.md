# generator-react-webpack-node [![npm version](https://badge.fury.io/js/generator-react-webpack-node.svg)](http://badge.fury.io/js/generator-react-webpack-node)
Yeoman generator for [react-webpack-node](https://github.com/choonkending/react-webpack-node).

## Getting Started

```bash
npm install -g yo
```

To install generator-react-webpack-node from npm, run:

```bash
npm install -g generator-react-webpack-node
```

Finally, initiate the generator:

```bash
yo react-webpack-node
```

## Generators
Available generators:
- [react-webpack-node:component](#component)
- [react-webpack-node:container](#container)
- [react-webpack-node:reducer](#reducer)
- [react-webpack-node:constant](#constant)

### Component
Generates a component in app/components with a stylesheet.

Example:
``yo react-webpack-node:component myComponent``

### Container
Generates a container in app/containers.

Example:
``yo react-webpack-node:container myContainer``

### Reducer
Generates a reducer in app/reducers.

Example:
``yo react-webpack-node:reducer myReducer``

*Remember that you will need to combine this new one with the others already created in the index.js*

### Constant
Creates a constant in the specified constants file located in app/constants.

Example:
``yo react-webpack-node:constant myConstantsFile MY_NEW_CONST``

## License
MIT © [Iegor Azuaga](http://iegor.me)
