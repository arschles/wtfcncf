import React from 'react'
import { Link } from 'gatsby'
import { Button, Icon } from 'antd'

const IndexPage = () => {
  return (
    <div align="center" style={{ padding: 80 }}>
      <p
        style={{
          color: 'cornflowerblue',
          fontSize: 50,
          fontWeight: 'bold',
        }}
      >
      <h1>Welcome to Cloud Native, Friend!</h1>
      </p>

      <a href="https://cncf.io">Cloud Native technologies</a> move incredibly fast. 
      Use this site to keep up!

      WTF CNCF is a super quick reference to answer the following two questions for you:
      
      <ul>
        <li>What is cloud native technology X?</li>
        <li>How do I use it for my app?</li>
      </ul>

      ... and <b>noting else</b>. This site sticks to answering those two questions.

      <h1>How to use this site</h1>

      We built this site with a reference guide in mind. We hope that it'll be easy for you to 
      quickly look up a project or technology and decide if you want to look into it further.

      <h1><a href="/read/cloud-native">Get Started</a></h1>
    </div>
  )
  
  // return (
    // <div align="center" style={{ padding: 80 }}>
    //   <p
    //     style={{
    //       color: 'cornflowerblue',
    //       fontSize: 50,
    //       fontWeight: 'bold',
    //     }}
    //   >
  //       Gatsby Ant Design Docs Boilerplate
  //     </p>
  //     <h2>A gatsby starter to create documentation websites</h2>
  //     <p>
  //       This is a fork of{' '}
  //       <a href="https://github.com/cvluca/gatsby-starter-markdown">
  //         https://github.com/cvluca/gatsby-starter-markdown
  //       </a>
  //     </p>
  //     <br />
  //     <Button.Group size="large">
  //       <Button href="https://twitter.com/arrschles" target="_blank">
  //         Twitter
  //         <Icon type="twitter" />
  //       </Button>
  //       <Button
  //         href="https://github.com/arschles/wtfcncf"
  //         target="_blank"
  //       >
  //         Github
  //         <Icon type="github" />
  //       </Button>
  //       <Button type="primary">
  //         <Link to="/docs/get-started/introduction">Get Started</Link>
  //       </Button>
  //     </Button.Group>
  //   </div>
  // )
}

export default IndexPage
