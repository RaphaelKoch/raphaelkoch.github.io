/* Initialize userBaseSDK */
async function start() {
userbase
  .init({
    appId: '2825a131-4403-44ee-b787-b66c75740baf',
  })
  .then((session) => {
    /*   SDK successfully initialized */

    if (session.user) {
      /*  valid active session */
      console.log(session.user.username);
    }
  })
  .catch((e) => console.error(e));

/* create a User */
userbase
  .signUp({
    username: 'example-username',
    password: 'example-password',
  })
  .then((user) => {
    // user account created
  })
  .catch((e) => console.error(e));

/* sign in user */
userbase
  .signIn({
    username: 'example-username',
    password: 'example-password',
  })
  .then((user) => {
    // user logged in
  })
  .catch((e) => console.error(e));

/* sign out user */
userbase
  .signOut()
  .then(() => {
    // user logged out
  })
  .catch((e) => console.error(e));

/* forgot password? */
userbase
  .forgotPassword({
    username: 'example-username',
  })
  .then(() => {
    // email with temporary password sent
  })
  .catch((e) => console.error(e));

/* update a user */
userbase
  .updateUser({
    username: 'example-new-username',
    currentPassword: 'example-password',
    newPassword: 'example-new-password',
    email: 'example@email.com',
    profile: { example: 'value' },
  })
  .then(() => {
    // user account updated
  })
  .catch((e) => console.error(e));

/* delete user */
userbase
  .deleteUser()
  .then(() => {
    // user marked for deletion
  })
  .catch((e) => console.error(e));
