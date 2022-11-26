# Not to do full stack app

This app is build with MERN stack

## How to use

1.  Run `git clone < ...git path>`
2.  Run `cd <repo name>`
3.  Run `npm install`
4.  Run `npm run dev`. Note you must have `nodemon`, if not run `npm i nodemon -g` first

now your server will run at `http://localhost:8000`

## APIs

This api server handles all the task request and allow client to run `CRUD` operation.

### Task Router

Task router follow the following url path `{root URL}/api/v1/task`. More details as follow

| #   | PATH | METHOD | IS PRIVATE | DESCRIPTION                                                     |
| --- | ---- | ------ | ---------- | --------------------------------------------------------------- |
| 1.  | `/`  | PUT    | false      | This api allows client to send taskobject and store in database |

| 2. | `/` | GET | false | This api allows client tofetch data from database |

| 3. | `/` | PATCH | false | This api allows client switch the task type in database |

| 4. | `/:_id` | DELETE | false | This api allows client to delete the selected task based on the given `_id` database |

| 5. | `/` | DELETE | false | This api allows client to delete the multiple `_id` database |
