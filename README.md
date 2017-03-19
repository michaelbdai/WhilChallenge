# Reddit Listing

## Technical Stack
* React-Native
* React-Redux
* Redux-Saga
* Redux-Persist
* react-native-router-flux
## Compatibility
It is optimized for ios using Xcode. It has not been tested on Android simulator. However, any function not supported by Android has been avoided. For example, scrollEventThrottle for scrollView is not used.

## Features Highlight
* Persist state so user can save their favorite news. In details view, user can mark and unmark news as favorite. Once marked, in the list view, the title text color becomes red.
* Utilized shouldComponentUpdate function for rending each news for optimized performnce 

```
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.itemId === nextProps.itemId &&
      this.props.favs[this.props.itemId] === nextProps.favs[nextProps.itemId]) {
      return false;
    } else {
      return true;
    }
  }
  
```
* The "list" component only renders first seven items initially. It dynamically loads more as user scroll down. Auto loading is controled by throttle function, only triggered once per 100 ms. It marks how far user has scrolled and won't load more untill user almost scroll down to the bottom. 

```
  this.handleScroll = 
    (() => {
      let flag = false;
      let offset = 0;
      return (e) => {
        if (!flag && offset < e.nativeEvent.contentOffset.y) {
          console.log('Loading more items');
          flag = true;
          offset = e.nativeEvent.contentOffset.y;
          this.setState({
            lastItem: this.state.lastItem + 2
          })
          setTimeout(function() {
            flag = false;
          }, 100);
        }
      }
    })().bind(this);
```
