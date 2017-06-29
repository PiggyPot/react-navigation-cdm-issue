# react-navigation-cdm-issue
An example app showing the double componentDidMount issue with react-navigation's TabNavigator 

The issue seems to be with navigating away from the screen before all siblings within the navigator have finished mounting.

The navigators also seem to use the current width of the application within their rendering logic, so it may be that we are trying to navigate away before this has had time to update correctly.

Some solutions may be to:

-  Use a setTimeout() to give the other siblings time to fully mount before navigating away.
-  Insert an 'Initialiser' screen as the last screen in the navigator and perform any necessary componentDidMount logic in there.
