# example-percy-styleguidist

Example app showing integration of [Percy](https://percy.io/) visual testing into React Styleguidist.

Based on the [TodoMVC](https://github.com/tastejs/todomvc) app, documented with React Styleguidist.

## Tutorial

The tutorial assumes you're familiar with JavaScript and [React Styleguidist](https://react-styleguidist.js.org/) and focuses on using it with Percy.

Requires [Node 20+](https://nodejs.org/en/download/) and [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

### Step 1

Clone the example application and install dependencies:

```bash
$ git clone git@github.com:percy/example-percy-styleguidist.git
$ cd example-percy-styleguidist
$ npm install
```

Explore the styleguide by running `npm start` and visiting http://localhost:6060.

### Step 2

Sign in to Percy and create a new project. You can name the project "todo-styleguidist". After you've created the project, you'll be shown a token environment variable.

### Step 3

In the shell window you're working in, export the token environment variable:

**Unix**

```shell
$ export PERCY_TOKEN="<your token here>"
```

**Windows**

```shell
$ set PERCY_TOKEN="<your token here>"

# PowerShell
$ $Env:PERCY_TOKEN="<your token here>"
```

### Step 4

Check out a new branch for your work in this tutorial, then run tests & take snapshots:

```shell
$ git checkout -b tutorial-example
$ npm run test
```

This will build the styleguide and create Percy snapshots for each component. The snapshots will be uploaded to Percy for comparison.

You can view the screenshots in Percy now, but there will be no visual comparisons yet.

### Step 5

Edit `src/components/TodoFooter/TodoFooter.js` and introduce a visual change. For example, bold the "Clear completed" button by adding inline CSS:

```jsx
<button
  style={{ fontWeight: 'bold' }}
  className="clear-completed"
  onClick={onClearCompleted}>
  Clear completed
</button>
```

### Step 6

Commit the change:

```shell
$ git commit -am "Emphasize 'Clear completed' button"
```

### Step 7

Run the tests with snapshots again:

```shell
$ npm run test
```

This will take new snapshots and compare them with the previous snapshots, showing any visual diffs.

### Step 8

Visit your project in Percy and you'll see a new build with visual comparisons. Click on the build to see the original snapshots on the left and the new snapshots on the right.

Percy has highlighted what changed visually!

### Finished!

From here, you can try making your own changes to the components. Re-run the tests and you'll see any visual changes reflected in Percy.
