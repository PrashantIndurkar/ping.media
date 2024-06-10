# Post Building Guide

## first need to create a schema for the Post model.

## Create API route app/api/post/route.ts (Backend)

- We need to protected the route with the session using CustomSession and getServerSession(authOptions) if not authenticated return 401 error with message "You are not logged in"
- We need to get the formData from the request using request.formData()
- Create postSchema and vine only accepts json data we need to convert the formData to json
- We need to validate the image with custom validation
  1. we need to validate the image name and size
  2. now check that image has error or not. if error then need to send response with error and send that error in to the content
- we need to upload the image
  1. create a file in the public folder upload
- we need to create the post in the database

- lastly, we need to return the response with status 200 and message "Post created successfully!"

## Handle the "Submit" button in the (Frontend)

1. add submitPost on 'Post' button
2. so we are accepting the formData in api we need to send the formData to the api route "/api/post"
3. we need to handle the response from the api route and show the message in the toast and clear the form
