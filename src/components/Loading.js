import React from 'react';
import { Loader } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import './styles.css';

function Loading() {
  return (
    <div>
      <Loader className="my-loader" />
    </div>
  )
}

export default Loading;