import React from 'react';

/*
 * Note: This is kept as a container-level component, 
 *  i.e. We should keep this as the container that does the data-fetching 
 *  and dispatching of actions if you decide to have any sub-components.
 */
export default class <%= name %> extends React.Component {
  render() {
    return (
      <div><%= name %> container!</div>
    );
  }
};