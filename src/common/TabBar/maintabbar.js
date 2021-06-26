import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { SimpleLineIcons, MaterialCommunityIcons,FontAwesome, Ionicons, Entypo , MaterialIcons} from '@expo/vector-icons';
import { colors } from '../colors'

class MainTabBar extends Component {
  render() {
    const { navigate, state } = this.props.navigation;
    const { index, routes } = state;
    const active = routes[index].key;
    return (
      <View style={styles.container}>

        <TouchableWithoutFeedback onPress={() => navigate('Tab1')}>
          <View style={active === 'Tab1' ? styles.active : styles.nonactive}>
            <Entypo name="home" size={30} color={active === 'Tab1' ? colors.GREEN : colors.GREY1} />
            <Text style={active === 'Tab1' ? {color:colors.GREEN} : {color:colors.GREY1}}>Stars</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigate('Tab2')}>

          <View style={active === 'Tab2' ? styles.active : styles.nonactive}>
            <FontAwesome name="calendar-plus-o" size={29} color={active === 'Tab2' ? colors.GREEN : colors.GREY1} />
            <Text style={active === 'Tab2' ? {color:colors.GREEN} : {color:colors.GREY1}}>Offers</Text>
          </View>
            
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigate('Tab3')}>
          <View style={active === 'Tab3' ? styles.active : styles.nonactive}>
            <MaterialIcons name="chat" size={30} color={active === 'Tab3' ? colors.GREEN : colors.GREY1} />
            <Text style={active === 'Tab3' ? {color:colors.GREEN} : {color:colors.GREY1}}>Chats</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigate('Tab4')}>
          <View style={active === 'Tab4' ? styles.active : styles.nonactive}>
            <MaterialIcons name="image" size={30} color={active === 'Tab4' ? colors.GREEN : colors.GREY1}/>
            <Text style={active === 'Tab4' ? {color:colors.GREEN} : {color:colors.GREY1}}>Portfolio</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigate('Tab5')}>
          <View style={active === 'Tab5' ? styles.active : styles.nonactive}>
            <FontAwesome name="th-list" size={30} color={active === 'Tab5' ? colors.GREEN : colors.GREY1}/>
            <Text style={active === 'Tab5' ? {color:colors.GREEN} : {color:colors.GREY1}}>Profile</Text>
          </View>
        </TouchableWithoutFeedback>
        

      </View>
    );
  }
}

MainTabBar.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default MainTabBar;
