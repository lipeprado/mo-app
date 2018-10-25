## MO_APP

Create an application to display posts and comments using React.

Use this fake API to load posts and comments https://jsonplaceholder.typicode.com/

On `/posts` view:

- display a list of 10 latest posts.
- Every post should have short body preview limited by 100 chars.
- Post title should be linked to the post details view
- Display "load more" button. Every click on this button should load 10 additional posts.

On `/posts/:id` view:

- Display post details.
- Show 3 latest comments under the post.
- Display load button. Every click on this button should load 10 additional comments.

General:

- Make sure you are displaying a loading state.
- You can use state management.
- Try to provide nice UX
- You are free to use a frontend framework like Bootstrap etc.

- Optional: Allow to leave a comment for a post, with at least 5 chars.
- Optional: instead of fake API, create your own API.
