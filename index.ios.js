import React from 'react';
import { AppRegistry, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';

class App extends React.Component {
  componentDidMount() {
    console.log("mounted app");
    // Immediate navigation results in App being mounted twice
    //this.props.navigation.navigate('Other');

    // Delaying navigation seems to solve the issue but is hacky and unreliable
    //setTimeout(() => this.props.navigation.navigate('Other'), 10);
  }

  render() {
    return(
      <Text>Hello!</Text>
    )
  }
}

class Other extends React.Component {
  componentDidMount() {
    console.log("mounted other");
  }

  render() {
    return(
      <Text>Other</Text>
    )
  }
}

// Having a component to handle any lifecycle logic and inserting it as the last screen
// may ensure that all siblings have mounted properly before performing lifecycle logic
class Initialiser extends React.Component {
  componentDidMount() {
    this.props.navigation.navigate("Other")
  }

  render() {
    return(null)
  }
}

const AppNavigator = TabNavigator({
  Home: { screen: App },
  Other: { screen: Other },
  //Initialiser: { screen: Initialiser }
})

AppRegistry.registerComponent('ReactNavigationMountIssue', () => AppNavigator);
