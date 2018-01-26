import React from 'react';
import { Iterable } from 'immutable';

function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
}

export const toJS = (WrappedComponent) => {
  const toJSComponent = (wrappedComponentProps) => {
    const KEY = 0;
    const VALUE = 1;

    const propsJS = Object.entries(
      wrappedComponentProps
    ).reduce((newProps, wrappedComponentProp) => {
      newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(
        wrappedComponentProp[VALUE]
      )
        ? wrappedComponentProp[VALUE].toJS()
        : wrappedComponentProp[VALUE];
      return newProps;
    }, {});

    return <WrappedComponent {...propsJS} />;
  };
  toJSComponent.displayName = `toJS(${getDisplayName(WrappedComponent)})`;
  return toJSComponent;
};
