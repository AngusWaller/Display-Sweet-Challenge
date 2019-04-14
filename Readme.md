# Display Sweet Challenge
This is my take on the code challenge provided [Here](CodeChallenge.md). As this was a technical challenge I will be discussing this in a personal context.

## Design
I had a considerable amount of difficulty understanding what the requirements and deliverables of this challange were; as this was intended for .net & c# quite a lot of terminology had to be looked up. Still I had a fair crack at it!

Creating a class to create the navigation nodes was simple, just preserving a object state and adding more content onto it. 
Once the base logic was created it was fairly simple to link it to the components.json & it took about 1 hour to make.

Once the Navigation class was created I got to work testing & optimising logic as there was instances of sloppy logic & code. This took nearly another hour.

Creating the REST interface was the most time consuming as while it was simple to get express.js started I hadn't considered quite a few things regarding class state on REST calls,
this was fixed by building the rest testing systems first then building endpoints to mimic testing results. 

## Time  
This challenge took about 7 hours to complete

## Production Environment
This is quite basically building an Object Relational Modelling (ORM) system for a rest endpoint. If I cheated and used something like mongoose, this would have taken minutes to build.