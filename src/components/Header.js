import React from 'react';
import '../App.css';
import { Heading } from '@aws-amplify/ui-react';
import { Flex, Divider } from '@aws-amplify/ui-react';

function Header() {
  return (
    <div className="center">
      <Heading style={{ margin: "50px" }} level={3}>
        Authentication & Authorization
      </Heading>
      <Flex style={{ margin: "50px" }} direction="column">
        <Divider />
      </Flex>
    </div>
  )
}

export default Header;