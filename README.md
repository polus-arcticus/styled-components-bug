# styled-components bug

Using styled on the icon component works fine in development.
![local dev mode](https://github.com/polus-arcticus/styled-components-bug/blob/master/local-dev-mode.png)
But this error message occurs when running from build
![from build](https://github.com/polus-arcticus/styled-components-bug/blob/master/preview-mode.png)

steps to reproduce
`npm run dev`
check that it works fine
`npm run build`
`npm run preview`
confirm that it does not work fine and that Args: [object Module] obsurces error message

