#ICD-10 React Build v. 0.1.0
===========================

###ICD-10 Code Database with live search
Fullstack MERN build running on EC2 Instance

#####Amazon Distro
ec2-54-84-125-210.compute-1.amazonaws.com

54.84.125.210

**Mongo Commands**
mongod (start)

mongo --shell

use <db name>

db.dropDatabase()

mongoimport -d test -c shops data.json --jsonArray

#####Current known issues:
- Fixed titles from undefined to Loading
- Scroll bars on chrome !
- Search page load without leaving search box
- Look into changing "Conversion" section
- Add user login / accounts, Login with facebook
