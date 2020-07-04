<!-- ! This is a generated file. To make changes, edit <Component>.doc.js ! -->
## StoryContainer
The top level StoryContainer container.

## Usage

```javascript
import { StoryContainer } from 'component/StoryContainer'
<StoryContainer>...</StoryContainer>
```

## Properties

**full**

Whether to take the whole viewport.

```
boolean
```

**plain**

Whether or not StoryContainer should apply a global font-family, font-size, and line-height.

```
boolean
```

**cssVars**

Whether to expose the css variables.

```
boolean
```

**theme**

Custom styles for StoryContainer app component.

```
object
```

**userAgent**

User agent used to detect the device width for setting the initial breakpoint.

```
string
```
  
## Intrinsic element

```
div
```
## Theme
  
**container.extend**

Any additional style for StoryContainer. Expects `string | (props) => {}`.

Defaults to

```
undefined
```

**global.font.face**

Custom font face declaration Expects `string | (props) => {}`.

Defaults to

```
undefined
```
