[![Lines of Code - app directory](http://img.shields.io/badge/lines_of_code-219-brightgreen.svg?style=flat)](http://blog.codinghorror.com/the-best-code-is-no-code-at-all/)
[![Maintainability](https://api.codeclimate.com/v1/badges/e00a9353bc3d2a7edfbd/maintainability)](https://codeclimate.com/github/hopsoft/stimulus_reflex_todomvc/maintainability)

# StimulusReflex TodoMVC

Implemenation of [TodoMVC](http://todomvc.com) using [StimulusReflex](https://github.com/hopsoft/stimulus_reflex).

Expands on the original goals of [TodoMVC](http://todomvc.com) by providing a full application...
including a server and database.

## Demo

https://stimulus-reflex-todomvc.herokuapp.com

_You may notice some latency related to hosting on **free tier** services._

## Local Setup

1. Clone the repo

    ```sh
    git clone https://github.com/hopsoft/stimulus_reflex_todomvc.git
    ```

1. Switch into the project folder

    ```sh
    cd stimulus_reflex_todomvc
    ```

1.  Run the setup command

    ```sh
    bin/setup

    _Note: We use a PostgreSQL backed database. Make sure you are running Postgres on your machine._
    ```

1. Start the rails server

    ```sh
    bin/rails server
    ```

1. See the app in action

    To see the application in action, open a browser window and navigate to http://localhost:3000. That's it!

## Code

### Important Files

- [HTML Templates](https://github.com/hopsoft/stimulus_reflex_todomvc/tree/master/app/views/todos)
- [Rails Controller](https://github.com/hopsoft/stimulus_reflex_todomvc/blob/master/app/controllers/todos_controller.rb)
- [Stimulus Controller](https://github.com/hopsoft/stimulus_reflex_todomvc/blob/master/app/javascript/controllers/todos_controller.js)
- [Stimulus Reflex](https://github.com/hopsoft/stimulus_reflex_todomvc/blob/master/app/reflexes/todos_reflex.rb)

[View a diff with all changes.](https://github.com/hopsoft/stimulus_reflex_todomvc/compare/9e1c0b3...master)
