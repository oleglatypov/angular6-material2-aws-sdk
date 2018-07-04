# css

### 主题

> 内置主题:

```
mnews-background-primary
mnews-background-accent
mnews-background-warn
mnews-background-red
mnews-background-pink
mnews-background-purple
mnews-background-deep-purple
mnews-background-indigo
mnews-background-blue
mnews-background-light-blue
mnews-background-cyan
mnews-background-teal
mnews-background-green
mnews-background-light-green
mnews-background-lime
mnews-background-yellow
mnews-background-amber
mnews-background-orange
mnews-background-deep-orange
mnews-background-brown
mnews-background-grey
mnews-background-blue-grey
mnews-background-white
mnews-background-black
mnews-background-dark
mnews-background-material
```

> 修改默认主题:

/src/app/core/config.service.ts
```
constructor() {
    this.defaultSettings = {
        colorClasses: {
            header: 'mnews-background-white',
            footer: 'mnews-background-blue',
            brand: 'mnews-background-blue',
            navigation: 'mnews-background-dark'
        },
        layout: {
            mode: 'fullwidth',
            navigation: 'left',
            header: 'below',
            footer: 'below'
        }
    };
    ...
}
```
