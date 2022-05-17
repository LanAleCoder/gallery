import {StyleSheet} from 'react-native';

const stylesLayout = StyleSheet.create({
  objectsNavbar: {
    height: 30,
    width: 80,
    borderRadius: 40,
    margin: 3,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    alignItems: 'center',
  },
  firsObjectNavbar: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 40,
    height: 30,
    width: 80,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    alignItems: 'center',
  },
  main: {flexDirection: 'row', alignItems: 'center', paddingBottom: 15},
  imagesLayout: {width: 100, height: 100, borderRadius: 20},
  imagesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  imagesSubContainer: {justifyContent: 'space-around', marginBottom: 20},
  searchBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    width: '90%',
  },
  searchBarContainer: {alignItems: 'center', paddingTop: 15, paddingBottom: 20},
});

export default stylesLayout;
