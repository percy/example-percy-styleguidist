module.exports = {
  title: 'TodoMVC Style Guide',
  sections: [
    {
      name: 'App',
      components: 'src/components/TodoApp/TodoApp.js',
      description: 'The main TodoMVC application'
    },
    {
      name: 'Components',
      components: 'src/components/Todo{Header,Item,List,Footer}/*.js',
      description: 'Individual UI components'
    }
  ],
  require: [
    'todomvc-app-css/index.css'
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
};
