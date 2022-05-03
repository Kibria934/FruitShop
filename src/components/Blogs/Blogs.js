import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div>
      <h1 className="text-center q-tag">MY BLOGS</h1>
      <div className="container q-container" style={{ minHeight: "70vh" }}>
        <div className="q-section">
          <Accordion className="accordion-section" defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <span>Question 1: Difference between javascript and nodejs</span>
              </Accordion.Header>
              <Accordion.Body className="q-section">
                <div className="inner-div">
                  <strong>Ans:</strong> <br></br>
                  <ol>
                    <p>Node.js</p>
                    <li>Nod.js is a runtime environment.</li>
                    <li>It's run javascript language on browser or outside.</li>
                    <li>
                      To run javascript language on browser it is use an engine
                      called V8.
                    </li>
                    <li>This is mainly use in backend.</li>
                  </ol>
                  <ol>
                    <p>Javascript</p>
                    <li>Javascript is a programming language</li>
                    <li>Javascript run on browser.</li>
                    <li>
                      It can run in all browser like safary.js or spidermonkey
                    </li>
                    <li>This is mainly use in frontend.</li>
                  </ol>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header><span>
                Question 2: When should you use nodejs and when should you use
                mongodb?</span>
              </Accordion.Header>
              <Accordion.Body className="q-section">
                <div className="inner-div">
                  <strong>Ans:</strong> <br></br>
                  <p>
                    Node.js: Node js is a runtime environment and it run our js
                    code. It is work with V8 engine.When we need to compile our
                    js code than we need to use it. It specially used in server
                    side.In node.js by using many framworke we make our server
                    side.{" "}
                  </p>
                  <br />
                  <p>
                    Mongodb: OfCourse,It is a database system. When we need
                    place to store or data safe than we use mongodb.It is
                    database engine.From this we can update or delete query our
                    data.There are many type of database people use. Mongodb is
                    one from them.{" "}
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
               <span> Question 3: Differences between sql and nosql databases.</span>
              </Accordion.Header>
              <Accordion.Body className="q-section">
                <div className="inner-div">
                  <strong>Ans:</strong>
                  <ol>
                    <li>
                      SQL database is a relational database and nosql database
                      is non-relational database.
                    </li>
                    <li>
                      Sql is a most versatile and widely used options available
                      which make it a sage choice especially for great complex
                      queries.On the otherhand,nosql data is stored in many ways
                      which means it can be document-oriented, column-oriented,
                      graph-based or organized as a KeyValue store.
                    </li>
                  </ol>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <span>Question 4: What is the purpose of jwt and how does it work{" "}</span>
              </Accordion.Header>
              <Accordion.Body className="q-section">
                <div className="inner-div">
                  jwt is jsonwebtoken which is a data authorization system. It
                  encrypt data from unknown person.It also work as informational
                  exchanger between parties.It work in three step. It's
                  structure is headers,payload,signature.When user successfully
                  log in using their information,jwt are returned.If jwt is
                  credential grate care must be taken in security issue.when
                  user want to access in private route user should have send
                  jwt.if it is corrent he got access of this route.
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
