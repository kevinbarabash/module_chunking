# module_chunking
module chunking example using webpack

## Summary

This shows how to group sets of modules (using CommonJS require statements) into chunks using webpack.  
You still have to add `<script>` statements in your .html to load the chunks and you have to load 
chunks in the correct order and avoid circular dependencies yourself.
