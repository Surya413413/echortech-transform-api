#  EchorTech Full Stack Technical Task

This is a simple **Node.js Express API** built as part of the **EchorTech Full Stack Developer screening task**.

---

##  Task Overview

Create a single API endpoint that transforms an input sentence and returns:
- Total word count  
- List of unique words (case-insensitive)  
- The sentence reversed

### **Endpoint**
POST /api/transform

pgsql
Copy code

### **Input Example**
```json
{
  "sentence": "I love working with JavaScript and Node.js"
}
Output Example
json
Copy code
{
  "word_count": 7,
  "unique_words": ["i", "love", "working", "with", "javascript", "and", "node.js"],
  "reversed_sentence": "Node.js and JavaScript with working love I"
}
 ## Setup Instructions
1. Clone the repository
bash
Copy code
git clone https://github.com/<your-username>/echortech-transform-api.git
cd echortech-transform-api
2. Install dependencies
bash
Copy code
npm install
3. Run the server
bash
Copy code
node server.js
By default, the API runs on:

arduino
Copy code
http://localhost:5000
 Test the API (Using Postman)
Open Postman

Create a new request

Method: POST

URL: http://localhost:5000/api/transform

Go to the Body tab

Select raw

Choose JSON

Paste the following input:

json
Copy code
{ "sentence": "I love working with JavaScript and Node.js" }
Click Send

 ## Expected Response:

json
Copy code
{
  "word_count": 7,
  "unique_words": ["i","love","working","with","javascript","and","node.js"],
  "reversed_sentence": "Node.js and JavaScript with working love I"
}
 ## Project Structure
bash
Copy code
echortech-transform-api/
│
├── server.js        # Main Express server file
├── package.json     # Dependencies and scripts
└── README.md        # Project documentation
 ## Technologies Used
Node.js

Express.js

CORS middleware

 ## Developer
Name: [Your Name]
GitHub: https://github.com/<your-username>
Task Reviewer: arun-echortech (added as collaborator)

## Submission
Once completed:

Make the GitHub repo private

Add arun-echortech as a collaborator with write access

Reply to the screening email with the repo link

## Example Run
bash
Copy code
POST http://localhost:5000/api/transform
Body:
{ "sentence": "Learning Node.js is fun and powerful" }

Response:
{
  "word_count": 6,
  "unique_words": ["learning","node.js","is","fun","and","powerful"],
  "reversed_sentence": "powerful and fun is Node.js Learning"
}









