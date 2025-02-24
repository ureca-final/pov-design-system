<h1 align="center">
  Pov's Design Systems

<img src="https://avatars.githubusercontent.com/u/188281883?s=200&v=4" />
</h1>

## members

| <img src="https://avatars.githubusercontent.com/u/93921784?v=4" width="130" height="130"> | <img src ="https://avatars.githubusercontent.com/u/44727850?v=4" width="130" height="130"> | <img src ="https://avatars.githubusercontent.com/u/90168987?v=4" width="130" height="130"> |
| :---------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
|                         [김다연](https://github.com/dyeon-dev)                         |                          [신혜민](https://github.com/shinhm1)                          |                             [박주광](https://github.com/jugpark)                             |

### Installation

```
$ npm install pov-design-system
# or
$ yarn add pov-design-system
```

### Getting started

To start using the components, first wrap your application in a provider provided by hang-log-design-system

```javascript
import { PovProvider } from 'pov-design-system';

const App = ({ children }) => {
  return <PovProvider>{children}</PovProvider>;
};
```

After adding the provider, now you can start using components like this.

```javascript
import { Button } from 'pov-design-system';

function App() {
  return (
    <Button variant="primary" size="large">
      Hello World
    </Button>
  );
}
```

### 🔗 Links

- [Npm](https://www.npmjs.com/package/pov-design-system?activeTab=readme)
- [Storybook](https://673c240da97b5391fe1cbe2f-fbjxofsmye.chromatic.com/?path=/docs/design-token-colors--docs)
- [Figma](https://www.figma.com/design/LPgTWB5ycZKHceP9pQDOmo/UI?node-id=1-3&p=f&t=BbfhZpNGue66bAxv-0)

### ⚙️ How to run a development environment

```
git clone https://github.com/eureka-final/pov-design-system
```

```
npm install
```

```
npm run storybook
```
